/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Components_src_RenderDOMElements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _Components_src_ToDoState_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _scss_background_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _scss_background_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scss_background_scss__WEBPACK_IMPORTED_MODULE_2__);



document.querySelectorAll('.todo').forEach(function (div) {
  new _Components_src_RenderDOMElements_js__WEBPACK_IMPORTED_MODULE_0__["RenderDOMElements"](div);
});
window.ToDoState = _Components_src_ToDoState_js__WEBPACK_IMPORTED_MODULE_1__["ToDoState"];

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderDOMElements", function() { return RenderDOMElements; });
/* harmony import */ var _ToDoApp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var RenderDOMElements =
/*#__PURE__*/
function () {
  function RenderDOMElements(selectedHTMLEl) {
    _classCallCheck(this, RenderDOMElements);

    this.selectedHTMLEl = selectedHTMLEl || document.body;
    this.createElementsDOM();
    this.generateData();
    this.todoController = new _ToDoApp_js__WEBPACK_IMPORTED_MODULE_0__["ToDoApp"](this.selectedHTMLEl);
  }

  _createClass(RenderDOMElements, [{
    key: "createElementsDOM",
    value: function createElementsDOM() {
      var elementsDOM = "<p>ToDo App</p>\n                           <div class=\"top\">\n                             <div class=\"refresh\"></div>\n                             <div class=\"data\"></div>\n                           </div>\n                           <div class=\"content\">\n                             <form class=\"add-item\">\n                               <button class=\"btn-add\" type=\"button\">+</button>\n                               <input type=\"text\" class=\"input-todo\" placeholder=\"add new task\">\n                              </form>\n                             <ul class=\"todo-list\">\n                              </ul>\n                            </div>";
      this.selectedHTMLEl.insertAdjacentHTML("afterbegin", elementsDOM);
    }
  }, {
    key: "generateData",
    value: function generateData() {
      var date = this.selectedHTMLEl.querySelector('.data');
      var currDate = new Date();
      var opt = {
        weekday: "long",
        month: "short",
        day: "numeric"
      };
      date.innerHTML = currDate.toLocaleDateString("en-US", opt);
    }
  }]);

  return RenderDOMElements;
}();

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToDoApp", function() { return ToDoApp; });
/* harmony import */ var _Task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _ToDoState_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _utils_inputAdjustment_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var ToDoApp =
/*#__PURE__*/
function () {
  function ToDoApp(selectedHTMLEl) {
    _classCallCheck(this, ToDoApp);

    this.handleAddTaskEvent = this.handleAddTaskEvent.bind(this);
    this.handleInputSubmitEvent = this.handleInputSubmitEvent.bind(this);
    this.handleCheckAndRemoveTaskEvent = this.handleCheckAndRemoveTaskEvent.bind(this);
    this.handleRefreshBTNEvent = this.handleRefreshBTNEvent.bind(this);
    this.selectedHTMLEl = selectedHTMLEl;
    this.state = new _ToDoState_js__WEBPACK_IMPORTED_MODULE_1__["ToDoState"]();
    this.selectDOMElements(this.selectedHTMLEl);
    this.subscribeForEvents();
  }

  _createClass(ToDoApp, [{
    key: "selectDOMElements",
    value: function selectDOMElements(currDOM) {
      this.input = currDOM.querySelector('.input-todo'); // input's field

      this.list = currDOM.querySelector('.todo-list');
      this.formAddToDo = currDOM.querySelector('.add-item');
      this.refreshBtn = currDOM.querySelector('.refresh');
    }
  }, {
    key: "taskAdder",
    value: function taskAdder() {
      var task = Object(_utils_inputAdjustment_js__WEBPACK_IMPORTED_MODULE_2__["adjustInput"])(this.input.value);

      if (!task.length || task == null) {
        alert('Please, enter new task!!');
        this.input.value = '';
      } else {
        var index = this.state.indexNextTask;
        this.state.addNewTask(new _Task_js__WEBPACK_IMPORTED_MODULE_0__["Task"](task, index));
        this.input.value = '';
        this.state.indexNextTask++;
        var done = _ToDoState_js__WEBPACK_IMPORTED_MODULE_1__["ToDoState"].TASK_STATE.UNCOMPLETE;
        var line = "";
        var taskHTML = "<li class=\"item\" task=\"wrap\">\n                        <button class=\"".concat(done, "\" task=\"status\" id=\"").concat(index, "\"></button>\n                        <p class=\"text ").concat(line, "\">").concat(task, "</p>\n                        <button class=\"trash\" task=\"remove\" id=\"").concat(index, "\">X</button>\n                     </li>");
        this.list.insertAdjacentHTML("beforeend", taskHTML);
      }
    }
  }, {
    key: "subscribeForEvents",
    value: function subscribeForEvents() {
      this.formAddToDo.addEventListener('submit', this.handleInputSubmitEvent);
      this.selectedHTMLEl.addEventListener('click', this.handleAddTaskEvent);
      this.list.addEventListener('click', this.handleCheckAndRemoveTaskEvent);
      this.refreshBtn.addEventListener('click', this.handleRefreshBTNEvent);
    }
  }, {
    key: "handleInputSubmitEvent",
    value: function handleInputSubmitEvent() {
      event.preventDefault();
      this.taskAdder();
    }
  }, {
    key: "handleAddTaskEvent",
    value: function handleAddTaskEvent() {
      if (event.target.classList.contains('btn-add')) {
        this.taskAdder();
      }
    }
  }, {
    key: "handleCheckAndRemoveTaskEvent",
    value: function handleCheckAndRemoveTaskEvent() {
      var el = event.target;

      if (el.hasAttribute("task")) {
        var elTask = el.attributes.task.value;

        if (elTask == "status") {
          this.state.toggleTaskStatus(el);
        } else if (elTask == "remove") {
          this.state.removeTaskFromList(el);
        }
      }
    }
  }, {
    key: "handleRefreshBTNEvent",
    value: function handleRefreshBTNEvent() {
      this.input.value = '';
      this.state.tasks = [];
      this.state.indexNextTask = 0;

      while (this.list.firstChild) {
        this.list.removeChild(this.list.firstChild);
      }
    }
  }]);

  return ToDoApp;
}();

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Task = function Task(text, i) {
  _classCallCheck(this, Task);

  this.task = text;
  this.id = i;
  this.isCompleted = false;
  this.isDeleted = false;
};

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToDoState", function() { return ToDoState; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ToDoState =
/*#__PURE__*/
function () {
  function ToDoState() {
    _classCallCheck(this, ToDoState);

    this.tasks = [];
    this.indexNextTask = 0;
  }

  _createClass(ToDoState, [{
    key: "addNewTask",
    value: function addNewTask(task) {
      this.tasks.push(task);
    }
  }, {
    key: "removeTaskFromList",
    value: function removeTaskFromList(task) {
      this.tasks[task.id].isDeleted = true;
      task.parentNode.parentNode.removeChild(task.parentNode);
    }
  }, {
    key: "toggleTaskStatus",
    value: function toggleTaskStatus(task) {
      task.classList.toggle(ToDoState.TASK_STATE.COMPLETE);
      task.classList.toggle(ToDoState.TASK_STATE.UNCOMPLETE);
      task.parentNode.querySelector('.text').classList.toggle(ToDoState.TASK_STATE.LINE_THROUGH);

      if (this.tasks[task.id].isCompleted == false) {
        this.tasks[task.id].isCompleted = true;
      } else {
        this.tasks[task.id].isCompleted = false;
      }
    }
  }]);

  return ToDoState;
}();

_defineProperty(ToDoState, "TASK_STATE", {
  COMPLETE: "complete",
  UNCOMPLETE: "uncomplete",
  LINE_THROUGH: "text-complete"
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjustInput", function() { return adjustInput; });
function adjustInput(str) {
  return str.normalize('NFD').replace(/([.!?]+)(?=\S)/g, "$1 ").toLowerCase().trim();
}
;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(7);
            var content = __webpack_require__(8);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(9);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body {\n  background-color: #7ef5ab; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ })
/******/ ]);