
const convert = require('xml-js');
const validateNext = require('./validate-node');

const xmlDeclaration = {
  "_declaration": {
    "_attributes": {
      "version": "1.0",
      "encoding": "utf-8",
    }
  }
};

module.exports = class VastElement {
  /**
   * @param {string} name
   * @param {VastElement} parent
   */
  constructor(name = 'root', parent = null, baseInfos = {}, attrsOrContent, attrsIfContent) {
    this.parent = parent;
    this.name = name;
    if (typeof attrsOrContent === 'string') {
      this.content = attrsOrContent;
      this.attrs = attrsIfContent || {};
    } else {
      this.content = null;
      this.attrs = attrsOrContent || {};
    }
    this.childs = [];
    this.infos = {};
    this.infos.attrs = baseInfos.attrs || [];
    this.parseOptions(parent && parent.options || {});
    if (this.content && this.content.indexOf('<![CDATA[') !== -1) {
      this.warn(`dont put CDATA item in content, use .cdata() instead`);
    }
  }

  // undocumented
  parseOptions(options) {
    this.options = Object.assign({
      cdata: true,
      logWarn: true,
      validateOnBuild: false,
      throwOnError: false,
      spaces: 2
    }, options);
  }

  // undocumented
  err(msg) {
    this.warn(msg, true);
  }

  // undocumented
  warn(msg, error = false) {
    const yellow = '\x1b[33m';
    const red = '\x1b[31m';
    const reset = '\x1b[0m'
    const intro = error ?
      `${yellow}VAST-BUILDER ${red}ERROR${yellow}:${reset}`:
      `${yellow}VAST-BUILDER WARNING:${reset}`;
    if (this.options.logWarn) {
      if (error) {
        console.error(`${intro} ${msg}`);
      } else {
        console.warn(`${intro} ${msg}`);
      }
    }
    if (error && this.options.throwOnError) {
      throw new Error(msg);
    }
  }
  //> return the parent element
  //* and(): VastElement
  /**
   * @returns {VastElement}
   */
  and() {
    /* child will overload this */
    return this.parent || this;
  }
  //> alias for .and().and()
  //* back(): VastElement
  /**
   * @returns {VastElement}
   */
  back() {
    /* child will overload this */
    return this.and().and();
  }

  //> turn element content into cdata. return the current element
  //* cdata(): VastElement
  cdata() {
    this.cdataThisOne = true;
    this.childs.forEach(c => {
      c.cdata();
    });
    return this;
  }

  //> Allow adding custom XML Tag, usefull for <Extensions>
  //* dangerouslyAttachCustomTag(tagName: string, content: string, attributes: Object): VastElement
  /**
   * @returns {VastElement}
   */
  dangerouslyAttachCustomTag(tagName, content, attributes) {
    const newElem = new VastElement(tagName, this, { attrs: 'all' }, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }

  //> Allow adding custom XML Tag and return his parent, usefull for <Extensions>
  //* dangerouslyAddCustomTag(tagName: string, content: string, attributes: Object): VastElement
  /**
   * @returns {VastElement}
   */
  dangerouslyAddCustomTag(tagName, content, attributes) {
    return this.dangerouslyAttachCustomTag(tagName, content, attributes).and();
  }

  //> Get filtered attributes (only specs valids one will be returned)
  //* getAttrs(): Object
  getAttrs() {
    if (this.infos.attrs === 'all') {
      return this.attrs;
    } else {
      return Object.keys(this.attrs).reduce((prev, next) => {
        if (this.infos.attrs.indexOf(next) !== -1) {
          return { ...prev, [next]: this.attrs[next] };
        } else {
          this.warn(`WARNING: the attribute "${next}" does not exists in "${this.name}" Tag. It was ignored.
  Here is the allowed list: ${this.infos.attrs}`);
          return prev;
        }
      }, {});
    }
  }

  // undocumented
  // return a JS object
  getJson() {
    const childCode = {};
    this.childs.forEach((child) => {
      if (!childCode[child.name]) {
        childCode[child.name] = [];
      }
      childCode[child.name].push(child.getJson());
    });

    const result = {};

    if (this.attrs) {
      result._attributes = this.getAttrs();
    }

    if (this.content && (this.cdataThisOne || this.options.cdata)) {
      result._cdata = this.content;
    } else if (this.content) {
      result._text = this.content;
    }

    return {
      ...result,
      ...childCode
    };
  }

  // undocumented
  getRoot() {
    let parent = this.parent || this;
    while (parent.parent) {
      parent = parent.parent;
    }
    return parent;
  }

  //> Return the generated Vast string
  //* toXml(): string
  toXml() {
    if (this.options.validateOnBuild) {
      this.validate();
    }
    return convert.js2xml(
      {
        ...xmlDeclaration,
        ...this.getRoot().getJson()
      },
      {
        compact: true,
        ...this.options
      }
    )
  }

  //> return the current VAST api version
  //* getVastVersion(): number
  getVastVersion() {
    return parseInt(this.getRoot().getChilds('VAST')[0].attrs['version']);
  }

  //> return an array all direct childs with "name"
  //* getChilds(name: string): Array<VastElement>
  getChilds(name) {
    const childs = [];
    for (let key in this.childs) {
      const child = this.childs[key];
      if (child.name === name) {
        childs.push(child);
      }
    }
    return childs;
  }

  //> validate your current vast build. print error if options.logWarn = true
  //* validate(): boolean
  validate(customValidator = null) {
    const validator = customValidator ?
      customValidator :
      require(`../build/api/vast${this.getVastVersion()}`).validator;
    return validateNext(this.getRoot(), validator);
  }
}
