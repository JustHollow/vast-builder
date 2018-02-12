
const fs = require('fs-extra');

const baseContentTemplate = (version, content, validator) => {
  return '' +
    `// @flow
// this file is generated, dont edit it

/*::
type Infos = {
  attrs?: Array<string>,
  required?: boolean,
  uniq?: boolean,
  alo?: boolean,
};
*/

const VastElement = require('../../lib/vast-element');

${content}

const validator = ${JSON.stringify(validator)};

module.exports = {
  apiv${version},
  validator
};
`;
};

const classTemplate = (className, jsdoc, methods, isFirst) => {
  const isFirstContent = (isFirst) ? ' || this' : '';
  return '' +
    `class ${className} extends VastElement {
  ${jsdoc}
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }${methods}
  and() { return this.parent${isFirstContent}; }
  back() { return this.and().and(); }
}
`;
}

const attachMethodTemplate = (methodName, jsdoc, args, childClass, infos) => {
  const comma = args ? ',' : '';
  return '' +
    `${jsdoc}
  attach${methodName}(${args}) {
    const newElem = new ${childClass}('${methodName}', this, ${infos} /*: Infos*/${comma} ${args});
    this.childs.push(newElem);
    return newElem;
  }`;
};

const addMethodTemplate = (methodName, jsdoc, args) => {
  return '' +
    `${jsdoc}
  add${methodName}(${args}) {
    return this.attach${methodName}(${args}).and();
  }`;
};

const getSimpleApiMethodDoc = (allContent, openCode) => {
  return `
${openCode ? '\`\`\`js\n' : ''}${allContent}
\`\`\`\n`;
};

const getApiMethodDoc = (comments, methodName, parameters, returnValue, returnValueRealName, lastLvlElement) => {
  let output = `
\`\`\`js
// ${comments}
${methodName}(${parameters.join(', ')}): ${returnValue}
\`\`\``;
  output += `\n\n↘ _go to [${returnValue}](#${returnValueRealName})_`;
  output += methodName.startsWith('add') ? ' _(current class)_' : '';
  output += lastLvlElement ? ' _(last level element)_' : '';
  return output + '\n';
};

const getJsDocLine = (type, name, props = 'param') => {
  return `
   * @${props} {${getType(type)}} ${name}`
};

const getJsDoc = (vastversion, returnType, isRequired, hasContent, hasAttrs, attrs) => {
  let jsdoc = '';
  if (returnType || isRequired || hasContent || hasAttrs) {
    jsdoc = '\n  /** ';
    jsdoc += isRequired ? `@description required in Vast ${vastversion}` : '';
    jsdoc += hasContent ? getJsDocLine('string', 'content') : '';
    jsdoc += hasAttrs ? getJsDocLine(attrs, 'attributes') : '';
    jsdoc += returnType ? getJsDocLine(returnType, '', 'returns') : '';
    jsdoc += '\n   */';
  }
  return jsdoc;
}

const getClassDoc = (parentClass) => {
  return `/**
   * @param {string} n
   * @param {${parentClass}} p
   */`;
}

const extractFirst = (obj) => {
  let content, name;
  for (let e in obj) {
    name = e;
    content = obj[e];
    break;
  }
  return { name, content };
};

const getArgsTemplate = (hasContent, hasAttrs) => {
  let args = '';
  if (hasContent) {
    args = 'content';
    if (hasAttrs) {
      args += ', attributes';
    }
  } else if (hasAttrs) {
    args = 'attributes';
  }
  return args;
}

const getArgsDocTemplate = (hasContent, hasAttrs, attrs) => {
  const apiParameters = [];
  if (hasContent) {
    apiParameters.push('content: string')
  }
  if (hasAttrs) {
    apiParameters.push('attributes: ' + getType(attrs, true, true))
  }
  return apiParameters;
}


// build a clean type for attrs
const getType = (type, withRequired = false, newLineForAttributes = false) => {
  const nl = newLineForAttributes ? '\n' : '';
  const sp = newLineForAttributes ? '  ' : '';
  const req = withRequired ? ' /* required */' : '';
  switch (typeof type) {
    case 'object':
      let output = '{' + nl;
      let isFirst = true;
      for (const key in type) {
        if (isFirst) {
          isFirst = false;
        } else {
          output += ', ' + nl;
        }
        const el = type[key];
        if (typeof el === 'object') {
          const object = extractFirst(el);
          output += sp + object.name;
          if (Array.isArray(object.content) && object.content.length > 0) {
            output += ':("' + object.content.join('"|"') + '")';
          } else {
            output += ': string';
          }
        } else {
          output += sp + el + ': string';
        }
        output += req;
      }
      output += nl + '}';
      return output;
      // return '{' + String(type).replace(/,/g, ': string, ') + ': string}';
      break;

    default:
      return type;
      break;
  }
}

// parse VastElement file to complete method in documentation
const asyncGetVastElementDoc = (callback) => {
  const methods = [];
  const lineReader = require('readline').createInterface({
    input: fs.createReadStream('./lib/vast-element.js')
  });
  let commentsOpen = false;
  lineReader.on('line', function (line) {
    if (/\/\/\*/.test(line)) {
      const methodDoc = line.replace('//*', '').trim();
      methods.push(
        getSimpleApiMethodDoc(methodDoc, !commentsOpen)
      );
      commentsOpen = false;
    }
    if (/\/\/>/.test(line)) {
      methods.push(
        '\n```js\n' + line.replace('>', '').trim()
      );
      commentsOpen = true;
    }
  });
  lineReader.on('close', function (line) {
    callback(methods);
  });
}

const getApiDocumentationTemplate = (vastVersion, doc) => {
  let outputDoc = `# VAST${vastVersion} API Documentation`;
  for (const _class in doc) {
    const e = doc[_class];
    // anchors
    outputDoc += `\n<a id="${e.realName}" name="${e.realName}"></a>`;
    outputDoc += `\n## Class ${e.name}`;
    if (e.extends) {
      outputDoc += ` _extends_ ${e.extends}`;
    }
    ['only', 'required', 'uniq', 'alo'].forEach((elem) => {
      if (e[elem]) {
        outputDoc += `\n\n`;
        switch (elem) {
          case 'only':
            outputDoc += `This child once is the only one allowed at this level below ${e.parentName}`;
            break;
          case 'required':
            outputDoc += `This child is required below ${e.parentName}`;
            break;
          case 'uniq':
            outputDoc += `An uniq one of this child or others at same level are required below ${e.parentName}`;
            break;
          case 'alo':
            outputDoc += `At last one of this child and/or others are required below ${e.parentName}`;
            break;
        }
        outputDoc += ` in VAST${vastVersion} spec`;
      }
    });
    outputDoc += '\n\n';
    if (e.parentName) {
      outputDoc += `child of [${e.parentName}](#${e.realParentName}) ↗\n\n`;
    }
    if (e.methods.length) {
      outputDoc += '### methods\n\n';
      if (e.name !== 'VastElement') {
        outputDoc += '_all herited from [VastElement](#VastElement)_ and : \n';
      }
      for (let i = 0; i < e.methods.length; i++) {
        const methodCode = e.methods[i];
        outputDoc += methodCode;
      }
    } else {
      outputDoc += '_no specific methods see [VastElement](#VastElement)_';
    }
  }
  return outputDoc;
};

module.exports = {
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
};

