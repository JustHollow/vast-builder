"use strict";

require("core-js/modules/es6.function.name");

var filterKeyword = function filterKeyword(e) {
  return ['only', 'required', 'alo', 'follow', 'attrsRequired'].indexOf(e) === -1;
};

var validateNext = function validateNext(currentNode, currentValidator) {
  var returnValue = true; // allow passing array to validateNext

  if (Array.isArray(currentNode)) {
    for (var i = 0; i < currentNode.length; i++) {
      var node = currentNode[i];
      returnValue = validateNext(node, currentValidator) && returnValue;
    }

    return returnValue;
  } // only fields (required and uniq)


  if (currentValidator.only) {
    // console.log('- entering only');
    for (var key in currentValidator.only) {
      var childValidator = currentValidator.only[key];
      var childNodes = currentNode.getChilds(key);

      if (childNodes.length === 0) {
        currentNode.err(`Tag "${key}" not found below "${currentNode.name}"`);
        /* istanbul ignore next */

        returnValue = false;
      } else {
        returnValue = validateNext(childNodes, childValidator) && returnValue;
      }
    }

    var uniq = currentNode.childs;

    if (uniq.length !== 1) {
      if (uniq.length === 0) {
        currentNode.err(`One child of "${Object.keys(currentValidator.only)}" is needed below "${currentNode.name}", found ${uniq.length}`);
      } else {
        var uniqKeys = Object.keys(currentValidator.only);

        if (uniqKeys.length === 1) {
          currentNode.err(`Only one "${uniqKeys}" is allowed below "${currentNode.name}", found ${uniq.length}`);
        } else {
          currentNode.err(`Your validator seems broken, only one child is allow bellow an Only declaration.`);
        }
      }
      /* istanbul ignore next */


      returnValue = false;
    }
  } // required fields


  if (currentValidator.required) {
    // console.log('- entering required');
    for (var _key in currentValidator.required) {
      var _childValidator = currentValidator.required[_key];

      var _childNodes = currentNode.getChilds(_key);

      if (_childNodes.length === 0) {
        currentNode.err(`Tag "${_key}" not found below "${currentNode.name}"`);
        /* istanbul ignore next */

        returnValue = false;
      } else {
        if (_childNodes.length > 1) {
          currentNode.err(`Multiples "${_key}" found below "${currentNode.name}". required only one, found ${_childNodes.length}`);
          /* istanbul ignore next */

          returnValue = false;
        }

        returnValue = validateNext(_childNodes, _childValidator) && returnValue;
      }
    }
  } // uniq fields


  if (currentValidator.uniq) {
    // console.log('- entering uniq');
    var _uniq = [];

    for (var _i = 0; _i < currentNode.childs.length; _i++) {
      var newNode = currentNode.childs[_i];
      var _childValidator2 = currentValidator.uniq[newNode.name];

      if (_childValidator2) {
        _uniq.push(newNode);

        returnValue = validateNext(newNode, _childValidator2) && returnValue;
      }
    }

    if (_uniq.length !== 1) {
      if (_uniq.length === 0) {
        currentNode.err(`One child of "${Object.keys(currentValidator.uniq)}" is needed below "${currentNode.name}", found ${_uniq.length}`);
      } else {
        var _uniqKeys = Object.keys(currentValidator.uniq);

        if (_uniqKeys.length === 1) {
          currentNode.err(`Your validator seems broken, prefer "only" over uniq if you want on only child`);
        } else {
          currentNode.err(`Only one child of "${_uniqKeys}" is allowed below "${currentNode.name}", found ${_uniq.length}`);
        }
      }
      /* istanbul ignore next */


      returnValue = false;
    }
  } // alo fields


  if (currentValidator.alo) {
    // console.log('- entering alo');
    var alo = [];

    for (var _i2 = 0; _i2 < currentNode.childs.length; _i2++) {
      var _newNode = currentNode.childs[_i2];
      var _childValidator3 = currentValidator.alo[_newNode.name];

      if (_childValidator3) {
        alo.push(_newNode);
        returnValue = validateNext(_newNode, _childValidator3) && returnValue;
      }
    }

    if (alo.length === 0) {
      currentNode.err(`At least one child of "${Object.keys(currentValidator.alo)}" is needed below "${currentNode.name}", found ${alo.length}`);
      /* istanbul ignore next */

      returnValue = false;
    }
  } // follow fields


  if (currentValidator.follow) {
    // console.log('- entering follow');
    for (var _key2 in currentValidator.follow) {
      var _childValidator4 = currentValidator.follow[_key2];

      if (currentNode.childs.length > 0) {
        returnValue = validateNext(currentNode.getChilds(_key2), _childValidator4) && returnValue;
      }
    }
  } // validator for empty contents


  if (Object.keys(currentValidator).filter(filterKeyword).length === 0) {
    if (currentNode && currentNode.childs.length === 0 && !currentNode.content) {
      currentNode.err(`No content found in "${currentNode.name}"`);
      /* istanbul ignore next */

      returnValue = false;
    }
  } // gestion des attributs requis


  if (currentValidator.attrsRequired) {
    for (var attrName in currentValidator.attrsRequired) {
      var availableValues = currentValidator.attrsRequired[attrName];
      var currentValue = currentNode.getAttrs()[attrName];

      if (!currentValue) {
        currentNode.err(`Required attribute "${attrName}" not found in "${currentNode.name}" Tag`);
        /* istanbul ignore next */

        returnValue = false;
      } else if (availableValues && availableValues.indexOf(currentValue) === -1) {
        currentNode.err(`Required attribute "${attrName}" in "${currentNode.name}" has incorrect value "${currentValue}"
  Allowed values are : ${availableValues}`);
        /* istanbul ignore next */

        returnValue = false;
      }
    }
  }

  return returnValue;
};

module.exports = validateNext;