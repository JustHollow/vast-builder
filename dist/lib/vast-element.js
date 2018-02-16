"use strict";

require("core-js/modules/es6.function.name");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var convert = require('xml-js');

var validateNext = require('./validate-node');

var xmlDeclaration = {
  "_declaration": {
    "_attributes": {
      "version": "1.0",
      "encoding": "utf-8"
    }
  }
};

module.exports =
/*#__PURE__*/
function () {
  /**
   * @param {string} name
   * @param {VastElement} parent
   */
  function VastElement() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'root';
    var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var baseInfos = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var attrsOrContent = arguments.length > 3 ? arguments[3] : undefined;
    var attrsIfContent = arguments.length > 4 ? arguments[4] : undefined;

    _classCallCheck(this, VastElement);

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
  } // undocumented


  _createClass(VastElement, [{
    key: "parseOptions",
    value: function parseOptions(options) {
      this.options = Object.assign({
        cdata: true,
        logWarn: true,
        validateOnBuild: false,
        throwOnError: false,
        spaces: 2
      }, options);
    } // undocumented

  }, {
    key: "err",
    value: function err(msg) {
      this.warn(msg, true);
    } // undocumented

  }, {
    key: "warn",
    value: function warn(msg) {
      var error = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var yellow = '\x1b[33m';
      var red = '\x1b[31m';
      var reset = '\x1b[0m';
      var intro = error ? `${yellow}VAST-BUILDER ${red}ERROR${yellow}:${reset}` : `${yellow}VAST-BUILDER WARNING:${reset}`;

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
    } //> return the parent element
    //* and(): VastElement

    /**
     * @returns {VastElement}
     */

  }, {
    key: "and",
    value: function and() {
      /* child will overload this */
      return this.parent || this;
    } //> alias for .and().and()
    //* back(): VastElement

    /**
     * @returns {VastElement}
     */

  }, {
    key: "back",
    value: function back() {
      /* child will overload this */
      return this.and().and();
    } //> turn element content into cdata. return the current element
    //* cdata(): VastElement

  }, {
    key: "cdata",
    value: function cdata() {
      this.cdataThisOne = true;
      this.childs.forEach(function (c) {
        c.cdata();
      });
      return this;
    } //> Allow adding custom XML Tag, usefull for <Extensions>
    //* dangerouslyAttachCustomTag(tagName: string, content: string, attributes: Object): VastElement

    /**
     * @returns {VastElement}
     */

  }, {
    key: "dangerouslyAttachCustomTag",
    value: function dangerouslyAttachCustomTag(tagName, content, attributes) {
      var newElem = new VastElement(tagName, this, {
        attrs: 'all'
      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    } //> Allow adding custom XML Tag and return his parent, usefull for <Extensions>
    //* dangerouslyAddCustomTag(tagName: string, content: string, attributes: Object): VastElement

    /**
     * @returns {VastElement}
     */

  }, {
    key: "dangerouslyAddCustomTag",
    value: function dangerouslyAddCustomTag(tagName, content, attributes) {
      return this.dangerouslyAttachCustomTag(tagName, content, attributes).and();
    } // undocumented

  }, {
    key: "hasAttrs",
    value: function hasAttrs() {
      return Object.keys(this.attrs).length > 0;
    } //> Get filtered attributes (only specs valids one will be returned)
    //* getAttrs(): Object

  }, {
    key: "getAttrs",
    value: function getAttrs() {
      var _this = this;

      if (this.infos.attrs === 'all') {
        return this.attrs;
      } else {
        return Object.keys(this.attrs).reduce(function (prev, next) {
          if (_this.infos.attrs.indexOf(next) !== -1) {
            return Object.assign({}, prev, {
              [next]: _this.attrs[next]
            });
          } else {
            _this.warn(`WARNING: the attribute "${next}" does not exists in "${_this.name}" Tag. It was ignored.
  Here is the allowed list: ${_this.infos.attrs}`);

            return prev;
          }
        }, {});
      }
    } // undocumented
    // return a JS object

  }, {
    key: "getJson",
    value: function getJson() {
      var childCode = {};
      this.childs.forEach(function (child) {
        childCode[child.name] = childCode[child.name] || [];
        childCode[child.name].push(child.getJson());
      });
      var result = {};

      if (this.hasAttrs()) {
        result._attributes = this.getAttrs();
      }

      if (this.content && (this.cdataThisOne || this.options.cdata)) {
        result._cdata = this.content;
      } else if (this.content) {
        result._text = this.content;
      }

      return Object.assign({}, result, childCode);
    } // undocumented

  }, {
    key: "getRoot",
    value: function getRoot() {
      var parent = this.parent || this;

      while (parent.parent) {
        parent = parent.parent;
      }

      return parent;
    } //> Return the generated Vast string
    //* toXml(): string

  }, {
    key: "toXml",
    value: function toXml() {
      if (this.options.validateOnBuild) {
        this.validate();
      }

      return convert.js2xml(Object.assign({}, xmlDeclaration, this.getRoot().getJson()), Object.assign({
        compact: true
      }, this.options));
    } //> return the current VAST api version
    //* getVastVersion(): number

  }, {
    key: "getVastVersion",
    value: function getVastVersion() {
      return parseInt(this.getRoot().getChilds('VAST')[0].attrs['version']);
    } //> return an array all direct childs with "name"
    //* getChilds(name: string): Array<VastElement>

  }, {
    key: "getChilds",
    value: function getChilds(name) {
      var childs = [];

      for (var key in this.childs) {
        var child = this.childs[key];

        if (child.name === name) {
          childs.push(child);
        }
      }

      return childs;
    } //> validate your current vast build. print error if options.logWarn = true
    //* validate(): boolean

  }, {
    key: "validate",
    value: function validate() {
      var validator = require(`../build/api/vast${this.getVastVersion()}`).validator;

      return validateNext(this.getRoot(), validator);
    }
  }]);

  return VastElement;
}();