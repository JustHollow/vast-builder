

// TODO : complete unit / vast-element
// TODO : test coverage

// TODO : voir pour ajouter les /* types */ pour typescript

// TODO : fast version removing intellisense class ? or cheat the class tooling to intellisense one but exec others

// BUG : intellisense .toXml() not availables in childs ???

// IDEAS :
// TODO manage type (url/string ...)
// TODO : babel tooling ?
// TODO : see xsd validation files ??? or not


let vastVersion = process.argv[2];

if (!vastVersion) {
  throw 'this batch needs an arg with the vast version number';
}

console.log('=======================');
console.log('=== build version', vastVersion, '===');
console.log('=======================');

const fs = require('fs-extra');

let datas;
try {
  const yaml = require('js-yaml');
  datas = yaml.safeLoad(fs.readFileSync(`./specs/vast${vastVersion}.yml`, 'utf8'));
} catch (error) {
  console.log('=> unable to load specs', error);
  process.exit(1);
}

fs.mkdirsSync('./build/api');
fs.mkdirsSync('./build/doc');

// remove configs from data
const filteredDatas = {
  VAST: datas.VAST
};

const {
  baseContentTemplate,
  classTemplate,
  attachMethodTemplate,
  addMethodTemplate,
  getApiMethodDoc,
  getJsDoc,
  getClassDoc,
  extractFirst,
  getArgsTemplate,
  getArgsDocTemplate,
  asyncGetVastElementDoc,
  getApiDocumentationTemplate,
} = require('./templates');

const isValidKeyWord = (key) => {
  return [
    'attrs',
    'only',
    'required',
    'uniq',
    'alo',
    // 'type', // maybe later for type validation
    'follow',
  ].indexOf(key) === -1;
}

const allClassList = [];
const apiDocumentation = {
  VastElement: {
    name: 'VastElement',
    realName: 'VastElement',
    methods: [] // are completed dynamicly in end of this build
  }
};

// adjust to vast api number, just to intellisense beeing clean
let j = vastVersion;

const generateApiAndDoc = (isFirst, currentName, dataObject, overrideName = '', parentName = '') => {
  // prevent to hit reserved word like Error
  const currentUsedName = overrideName ? overrideName : currentName;

  const currentDocName = currentUsedName.split('_')[0];
  const parentDocName = parentName.split('_')[0];

  apiDocumentation[currentUsedName] = {
    name: currentDocName,
    realName: currentUsedName,
    parentName: parentDocName,
    realParentName: parentName,
    extends: 'VastElement',
    methods: [],
  };

  ['only', 'required', 'uniq', 'alo'].forEach((elem) => {
    if (dataObject && dataObject[elem] && dataObject[elem] === true) {
      apiDocumentation[currentUsedName][elem] = true;
    }
  });

  const methodsList = [];
  for (const childName in dataObject) {
    if (!isValidKeyWord(childName)) { continue };
    // allow unicity of class names
    let usedChildName = childName + '_' + j++ ;
    const child = dataObject[childName];

    // manage print content
    const infos = {};
    const hasContent = child === null || Object.keys(child).filter(isValidKeyWord).length === 0;
    const hasAttrs = child && child.attrs && child.attrs.length > 0 || false;
    const isRequired = child && child.required || false;
    const hasChild = child && Object.keys(child).filter(isValidKeyWord).length !== 0 || false;
    const currentAttrs = child && child.attrs || {};

    if (hasAttrs) {
      infos.attrs = child.attrs.reduce((prev, next) => {
        if (typeof next === 'object') {
          prev.push(extractFirst(next).name);
        } else {
          prev.push(next);
        }
        return prev;
      }, []);
    }
    // for API
    const apiArguments = getArgsTemplate(hasContent, hasAttrs);
    // for documentation
    const docArguments = getArgsDocTemplate(hasContent, hasAttrs, currentAttrs);

    methodsList.push(
      attachMethodTemplate(
        childName,
        getJsDoc(
          vastVersion,
          usedChildName,
          isRequired,
          hasContent,
          hasAttrs,
          currentAttrs
        ),
        apiArguments,
        usedChildName,
        JSON.stringify(infos)
      )
    );

    if (!hasChild) {
      methodsList.push(
        addMethodTemplate(
          childName,
          getJsDoc(
            vastVersion,
            currentUsedName,
            isRequired,
            hasContent,
            hasAttrs,
            currentAttrs
          ),
          apiArguments
        )
      );
      apiDocumentation[currentUsedName].methods.push(
        getApiMethodDoc(
          `Add a "${childName}" child to current "${currentDocName}". Return "${currentDocName}" to stay on same current level.`,
          'add' + childName,
          docArguments,
          currentDocName,
          currentUsedName,
          false
        )
      )
    }
    apiDocumentation[currentUsedName].methods.push(
      getApiMethodDoc(
        `Attach a "${childName}" child to current "${currentDocName}". Return "${childName}" to move on child level.`,
        'attach' + childName,
        docArguments,
        childName,
        usedChildName,
        !hasChild
      )
    )
    generateApiAndDoc(false, childName, dataObject[childName], usedChildName, currentUsedName);
  }
  allClassList.push(
    classTemplate(
      currentUsedName,
      getClassDoc(parentName || currentName),
      methodsList.join(''),
      isFirst
    )
  );
}

generateApiAndDoc(true, `apiv${vastVersion}`, filteredDatas);

const generateValidator = (dataObject) => {
  const validator = {};

  const validatorType = {
    only: {},
    required: {},
    uniq: {},
    alo: {},
    follow: {},
    attrsRequired: {}
  };
  for (const childName in dataObject) {
    if (!isValidKeyWord(childName)) {
      // managed required attributes
      if (childName === 'attrs') {
        for (let i = 0; i < dataObject[childName].length; i++) {
          const attr = dataObject[childName][i];
          if (typeof attr === 'object') {
            const object = extractFirst(attr);
            validatorType.attrsRequired[object.name] = object.content;
          }
        }
      }
      continue;
    };
    const childDataObject = dataObject[childName];
    if (childDataObject) {
      ['only', 'required', 'uniq', 'alo'].forEach((elem) => {
        if (childDataObject[elem]) {
          validatorType[elem][childName] = generateValidator(childDataObject);
        }
      });
    }
    if (!childDataObject || !childDataObject.only && !childDataObject.required && !childDataObject.uniq && !childDataObject.alo) {
      validatorType.follow[childName] = generateValidator(childDataObject);
    }
  }
  // add gathered element to validator
  for (const key in validatorType) {
    const element = validatorType[key];
    if (Object.keys(element).length > 0) {
      validator[key] = { ...element };
    }
  }
  return validator;
};

const validator = generateValidator(filteredDatas);

// writing API
fs.writeFileSync(
  `./build/api/vast${vastVersion}.js`,
  baseContentTemplate(vastVersion, allClassList.join(''), validator)
);

asyncGetVastElementDoc((methods) => {
  apiDocumentation['VastElement'].methods = methods;

  // writing documentation
  fs.writeFileSync(
    `./build/doc/vast${vastVersion}.md`,
    getApiDocumentationTemplate(vastVersion, apiDocumentation)
  );
  console.log(' => build ok');
});

