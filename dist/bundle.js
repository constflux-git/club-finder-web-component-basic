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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/clublist.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/clublist.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"club-list {\\n    display: block;\\n    margin-top: 32px;\\n    width: 100%;\\n    padding: 16px;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/styles/clublist.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./clublist.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/clublist.css\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);\n// Module\nexports.push([module.i, \"* {\\n    padding: 0;\\n    margin: 0;\\n    box-sizing: border-box;\\n}\\n\\nbody {\\n    font-family: sans-serif;\\n}\\n\\nmain {\\n    width: 90%;\\n    max-width: 800px;\\n    margin: 32px auto;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _script_components_app_bar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./script/components/app-bar.js */ \"./src/script/components/app-bar.js\");\n/* harmony import */ var _script_components_app_bar_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_script_components_app_bar_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _script_view_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./script/view/main.js */ \"./src/script/view/main.js\");\n\r\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', _script_view_main_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\r\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/script/components/app-bar.js":
/*!******************************************!*\
  !*** ./src/script/components/app-bar.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class AppBar extends HTMLElement {\r\n  constructor() {\r\n    super();\r\n    this.shadowDOM = this.attachShadow({ mode: 'open' });\r\n  }\r\n\r\n  connectedCallback() {\r\n    this.render();\r\n  }\r\n\r\n  render() {\r\n    this.shadowDOM.innerHTML = `\r\n\r\n    <style> \r\n\r\n    * {\r\n        padding: 0;\r\n        margin: 0;\r\n        box-sizing: border-box;\r\n    }\r\n    \r\n    \r\n    :host {\r\n        display: block;\r\n        width: 100%;\r\n        background-color: cornflowerblue;\r\n        color: white;\r\n        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n    }\r\n\r\n    h2 {\r\n      padding: 10px 10px 0px;\r\n    }\r\n    </style>\r\n    \r\n    \r\n    <h2>Club Finder<\\h2>`;\r\n  }\r\n}\r\n\r\ncustomElements.define('app-bar', AppBar);\r\n\n\n//# sourceURL=webpack:///./src/script/components/app-bar.js?");

/***/ }),

/***/ "./src/script/components/club-item.js":
/*!********************************************!*\
  !*** ./src/script/components/club-item.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class ClubItem extends HTMLElement {\r\n  constructor() {\r\n    super();\r\n    this.ShadowDOM = this.attachShadow({ mode: 'open' });\r\n  }\r\n\r\n  set club(club) {\r\n    this._club = club;\r\n    this.render();\r\n  }\r\n\r\n  render() {\r\n    this.ShadowDOM.innerHTML = `\r\n\r\n    <style>\r\n  * {\r\n      padding: 0;\r\n      margin: 0;\r\n      box-sizing: border-box;\r\n  }\r\n  \r\n  :host {\r\n      display: block;\r\n      margin-bottom: 18px;\r\n      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n      border-radius: 10px;\r\n      overflow: hidden;\r\n  }\r\n  \r\n  .fan-art-club {\r\n      width: 100%;\r\n      max-height: 300px;\r\n      object-fit: cover;\r\n      object-position: center;\r\n  }\r\n  \r\n  .club-info {\r\n      padding: 24px;\r\n  }\r\n  \r\n  .club-info>h2 {\r\n      font-weight: lighter;\r\n  }\r\n  \r\n  .club-info>p {\r\n      margin-top: 10px;\r\n      overflow: hidden;\r\n      text-overflow: ellipsis;\r\n      display: -webkit-box;\r\n      -webkit-box-orient: vertical;\r\n      -webkit-line-clamp: 10;\r\n      /* number of lines to show */\r\n  }\r\n    </style>\r\n\r\n        <img class=\"fan-art-club\" src=\"${this._club.fanArt}\" alt=\"Fan Art\">\r\n        <div class=\"club-info\">\r\n            <h2>${this._club.name}</h2>\r\n            <p>${this._club.description}</p>\r\n        </div>;`;\r\n  }\r\n}\r\n\r\ncustomElements.define('club-item', ClubItem);\r\n\n\n//# sourceURL=webpack:///./src/script/components/club-item.js?");

/***/ }),

/***/ "./src/script/components/club-list.js":
/*!********************************************!*\
  !*** ./src/script/components/club-list.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _club_item_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./club-item.js */ \"./src/script/components/club-item.js\");\n/* harmony import */ var _club_item_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_club_item_js__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nclass ClubList extends HTMLElement {\r\n  constructor() {\r\n    super();\r\n    this.shadowDOM = this.attachShadow({ mode: 'open' });\r\n  }\r\n\r\n  set clubs(clubs) {\r\n    this._clubs = clubs;\r\n    this.render();\r\n  }\r\n\r\n  renderError(message) {\r\n    this.shadowDOM.innerHTML = `\r\n    <style>\r\n    .placeholder {\r\n        font-weight: lighter;\r\n        color: rgba(0, 0, 0, 0.5);\r\n        -webkit-user-select: none;\r\n        -moz-user-select: none;\r\n        -ms-user-select: none;\r\n        user-select: none;\r\n    }\r\n    </style>\r\n    \r\n    `;\r\n    this.shadowDOM.innerHTML += `<h2 class=\"placeholder\">${message}</h2>`;\r\n  }\r\n\r\n  render() {\r\n    this.shadowDOM.innerHTML = '';\r\n    this._clubs.forEach((club) => {\r\n      const clubItemElement = document.createElement('club-item');\r\n      clubItemElement.club = club;\r\n      this.shadowDOM.appendChild(clubItemElement);\r\n    });\r\n  }\r\n}\r\n\r\ncustomElements.define('club-list', ClubList);\r\n\n\n//# sourceURL=webpack:///./src/script/components/club-list.js?");

/***/ }),

/***/ "./src/script/components/search-bar.js":
/*!*********************************************!*\
  !*** ./src/script/components/search-bar.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class SearchBar extends HTMLElement {\r\n  constructor() {\r\n    super();\r\n    this.shadowDOM = this.attachShadow({ mode: 'open' });\r\n  }\r\n\r\n  connectedCallback() {\r\n    this.render();\r\n  }\r\n\r\n  set clickEvent(event) {\r\n    this._clickEvent = event;\r\n    this.render();\r\n  }\r\n\r\n  get value() {\r\n    return this.shadowDOM.querySelector('#searchElement').value;\r\n  }\r\n\r\n  render() {\r\n    this.shadowDOM.innerHTML = `\r\n    <style>\r\n    \r\n    .search-container {\r\n        max-width: 800px;\r\n        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n        padding: 16px;\r\n        border-radius: 5px;\r\n        display: flex;\r\n        position: sticky;\r\n        top: 10px;\r\n        background-color: white;\r\n    }\r\n    \r\n    .search-container > input {\r\n        width: 75%;\r\n        padding: 16px;\r\n        border: 0;\r\n        border-bottom: 1px solid cornflowerblue;\r\n        font-weight: bold;\r\n    }\r\n    \r\n    .search-container > input:focus {\r\n        outline: 0;\r\n        border-bottom: 2px solid cornflowerblue;\r\n    }\r\n    \r\n    .search-container > input:focus::placeholder {\r\n        font-weight: bold;\r\n    }\r\n    \r\n    .search-container >  input::placeholder {\r\n        color: cornflowerblue;\r\n        font-weight: normal;\r\n    }\r\n    \r\n    .search-container > button {\r\n        width: 23%;\r\n        cursor: pointer;\r\n        margin-left: auto;\r\n        padding: 16px;\r\n        background-color: cornflowerblue;\r\n        color: white;\r\n        border: 0;\r\n        text-transform: uppercase;\r\n    }\r\n    \r\n    @media screen and (max-width: 550px){\r\n        .search-container {\r\n            flex-direction: column;\r\n            position: static;\r\n        }\r\n    \r\n        .search-container > input {\r\n            width: 100%;\r\n            margin-bottom: 12px;\r\n        }\r\n    \r\n        .search-container > button {\r\n            width: 100%;\r\n        }\r\n    }\r\n\r\n    </style>\r\n    <div id=\"search-container\" class=\"search-container\">\r\n        <input placeholder=\"Search football club\" id=\"searchElement\" type=\"search\">\r\n        <button id=\"searchButtonElement\" type=\"submit\">Search</button>\r\n    </div>\r\n    `;\r\n\r\n    this.shadowDOM\r\n      .querySelector('#searchButtonElement')\r\n      .addEventListener('click', this._clickEvent);\r\n  }\r\n}\r\n\r\ncustomElements.define('search-bar', SearchBar);\r\n\n\n//# sourceURL=webpack:///./src/script/components/search-bar.js?");

/***/ }),

/***/ "./src/script/data/clubs.js":
/*!**********************************!*\
  !*** ./src/script/data/clubs.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar clubs = [\n  {\n    name: 'Arsenal',\n    stadium: 'Emirates Stadium',\n    fanArt:\n      'https://www.thesportsdb.com/images/media/team/fanart/xyusxr1419347566.jpg',\n    description:\n      \"Arsenal Football Club is a professional football club based in Holloway, London which currently plays in the Premier League, the highest level of English football. One of the most successful clubs in English football, they have won 13 First Division and Premier League titles and a joint record 11 FA Cups. Arsenal's success has been particularly consistent: the club has accumulated the second most points in English top-flight football, hold the ongoing record for the longest uninterrupted period in the top flight, and would be placed first in an aggregated league of the entire 20th century. Arsenal is the second side to complete an English top-flight season unbeaten (in the 2003–04 season), playing almost twice as many matches as the previous invincibles Preston North End in the 1888–89 season. Arsenal was founded in 1886 in Woolwich and in 1893 became the first club from the south of England to join the Football League. In 1913, they moved north across the city to Arsenal Stadium in Highbury. In the 1930s, they won five League Championship titles and two FA Cups. After a lean period in the post-war years they won the League and FA Cup Double, in the 1970–71 season, and in the 1990s and first decade of the 21st century, won two more Doubles and reached the 2006 UEFA Champions League Final. Since neighbouring Tottenham Hotspur, the two clubs have had a fierce rivalry, the North London derby. Arsenal have one of the highest incomes and largest fanbases in the world. The club was named the fifth most valuable association football club in the world, valued at £1.3 billion in 2014.\",\n  },\n  {\n    name: 'Aston Villa',\n    stadium: 'Villa Park',\n    fanArt:\n      'https://www.thesportsdb.com/images/media/team/fanart/trxryx1421747670.jpg',\n    description:\n      'Aston Villa Football Club (/ˈæstən ˈvɪllə/; also known as Villa, The Villa, The Villans, The Lions) are a professional football club based in Witton, Birmingham, who play in the Premier League, the highest level of English football. Founded in 1874, they have played at their current home ground, Villa Park, since 1897. Aston Villa were founder members of The Football League in 1888. They were also founder members of the Premier League in 1992, and have remained there ever since. The club were floated by the previous owner and chairman Doug Ellis, but in 2006 full control was acquired by American businessman Randy Lerner. Lerner announced on 12 May 2014 that he is selling the club. Aston Villa are among the oldest and the most successful football clubs in the history of English football. Villa won the 1981–82 European Cup, and are thus one of five English clubs to win what is now the UEFA Champions League. They have the fourth highest total of major honours won by an English club, having won the First Division Championship seven times (most recently in the 1980–81 season), the FA Cup seven times (last won in 1957), the Football League Cup five times (last won in 1996) and the UEFA Super Cup in 1982. The club have also produced more England national team players than any other side, currently having produced 72. They have a fierce local rivalry with Birmingham City. The Second City derby between Aston Villa and Birmingham City has been played since 1879. The club\\'s traditional kit colours are claret shirts with sky blue sleeves, white shorts and sky blue socks. Their traditional badge is of a rampant gold lion on a light blue background with the club\\'s motto \"Prepared\" underneath; a modified version of this was adopted in 2007.',\n  },\n  {\n    name: 'Bournemouth',\n    stadium: 'Dean Court',\n    fanArt:\n      'https://www.thesportsdb.com/images/media/team/fanart/wvuypx1469485789.jpg',\n    description:\n      \"A.F.C. Bournemouth is a football club playing in the Championship, the second tier in the English football league system. The club plays at Dean Court in Kings Park, Boscombe, Bournemouth, Dorset and have been in existence since 1899. Nicknamed The Cherries, the team traditionally played in red shirts with white sleeves until 1971, when the strip was changed to red and black stripes, similar to that of A.C. Milan. A predominantly red shirt was chosen for the 2004–05 and 2005–06 seasons before announcing a return to the stripes for the 2006–07 season due to fan demand. After narrowly avoiding relegation from the Football League in the 2008–09 season, Bournemouth were promoted to League One at the end of the 2009–10. After making the League One play-off semi-finals in 2010–11 and achieving a mid-table finish in 2011–12, Bournemouth won promotion to the Championship at the end of the 2012–13 season, putting them in the second tier of the league for only the second time in their history. Although the exact date of the club's foundation is not known, there is proof that it was formed in the autumn of 1899 out of the remains of the older Boscombe St. John's Lads’ Institute F.C. The club was originally known as Boscombe F.C.. The first President was Mr. J.C. Nutt. In their first season 1889–90 Boscombe F.C. competed in the Bournemouth and District Junior League. They also played in the Hants Junior Cup. During the first two seasons they played on a football pitch in Castlemain Avenue, Pokesdown. From their third season the team played on a pitch in King's Park. In the season of 1905–06 Boscombe F.C. graduated to senior amateur football. In 1910 the club was granted a long lease upon some wasteland next to Kings Park, as the clubs football ground, by their president Mr. J.E. Cooper-Dean. With their own ground, named Dean Court after the benefactor, the club continued to thrive and dominated the local football scene. Also in 1910 the club signed their first professional football player B. Penton. Around about this time the club obtained their nickname 'The Cherries'. Foremost there are two tales on how the club gained this pet name. First, because of the cherry-red striped shirts that the team played in and, perhaps more plausible, because Dean Court was built adjacent to the Cooper-Dean estate, which encompassed numerous cherry orchards. For the first time during the season of 1913–14 the club competed in the F.A. Cup. The clubs progress was halted in 1914 with the outbreak of the war and Boscombe F.C. returned to the Hampshire league. In 1920 the Third Division was formed and Boscombe were promoted to the Southern League, with moderate success.\",\n  },\n  {\n    name: 'Brighton',\n    stadium: 'Falmer Stadium',\n    fanArt:\n      'https://www.thesportsdb.com/images/media/team/fanart/bk2b6j1504211012.jpg',\n    description:\n      'Brighton and Hove Albion Football Club /ˈbraɪtən ən ˈhoʊv/ is an English football club based in the coastal city of Brighton & Hove, East Sussex. It is often referred to just as Brighton. They currently play in the Football League Championship, the second tier of the English football league system. The team is nicknamed the \"Seagulls\" or \"Albion\". The team has historically played in blue and white stripes, though this changed to all white briefly in the 1970s and again to plain blue during the club\\'s most successful spell in the 1980s. Crystal Palace is considered the club\\'s main rival, although the grounds are 40 miles apart. Founded in 1901, Brighton played their early professional football in the Southern League before being elected to the Football League in 1920. The club enjoyed greatest prominence between 1979 and 1983 when they played in the First Division and reached the 1983 FA Cup Final, losing to Manchester United after a replay. They were relegated from the top division in the same season. Mismanagement brought Brighton close to relegation from the Football League to the Conference which they narrowly avoided in 1997 and 1998. A boardroom takeover saved Brighton from liquidation, and following successive promotions they returned to the second tier of English football in 2002 and have played in the second and third tiers ever since.',\n  },\n  {\n    name: 'Chelsea',\n    stadium: 'Stamford Bridge',\n    fanArt:\n      'https://www.thesportsdb.com/images/media/team/fanart/rppwtt1424447399.jpg',\n    description:\n      \"helsea Football Club /ˈtʃɛlsiː/ are a professional football club based in Fulham, London, who play in the Premier League, the highest level of English football. Founded in 1905, the club have spent most of their history in the top tier of English football. The club's home ground is the 41,837-seat Stamford Bridge stadium, where they have played since their establishment.\\\\r\\\\n\\\\r\\\\nChelsea had their first major success in 1955, winning the league championship, and won various cup competitions during the 1960s, 1970s, 1990s and 2000s. The club have enjoyed their greatest period of success in the past two decades, winning 15 major trophies since 1997. Domestically, Chelsea have won four league titles, seven FA Cups, four League Cups and four FA Community Shields, while in continental competitions they have won two UEFA Cup Winners' Cups, one UEFA Super Cup, one UEFA Europa League and one UEFA Champions League. Chelsea are the only London club to win the UEFA Champions League, and one of four clubs, and the only British club, to have won all three main UEFA club competitions.\\\\r\\\\n\\\\r\\\\nChelsea's regular kit colours are royal blue shirts and shorts with white socks. The club's crest has been changed several times in attempts to re-brand the club and modernise its image. The current crest, featuring a ceremonial lion rampant regardant holding a staff, is a modification of the one introduced in the early 1950s. The club have sustained the fifth highest average all-time attendance in English football. Their average home gate for the 2012–13 season was 41,462, the sixth highest in the Premier League. Since July 2003, Chelsea have been owned by Russian billionaire Roman Abramovich. In April 2013 they were ranked by Forbes Magazine as the seventh most valuable football club in the world, at £588 million ($901 million), an increase of 18% from the previous year.\",\n  },\n  {\n    name: 'Crystal Palace',\n    staidum: 'Selhurst Park',\n    fanArt:\n      'https://www.thesportsdb.com/images/media/team/fanart/svsvqv1424367005.jpg',\n    description:\n      'Crystal Palace Football Club is an English professional football club based in South Norwood, London. They currently play in the highest level in English football, the Premier League. Since 1964, the club have mostly played in the top two leagues of English football. The club was founded in 1905 at the site of the famous Crystal Palace Exhibition building by the owners of the FA Cup Final stadium, who wanted their own team to play at the historic venue. Palace applied to be elected to The Football League, but this was rejected and they instead joined the Southern Football League Second Division, playing home games at The Crystal Palace, inspiration for the club\\'s initial nickname, \\\\\"The Glaziers\\\\\". Palace won the Division and promotion in their first season, and played in the Southern League First Division for the next fifteen years.\\\\r\\\\n\\\\r\\\\nIn 1920 the Southern League Division One formed the Football League Third Division. Palace won the division and gained promotion to the Second Division, where they spent four seasons before suffering relegation to the Third Division South. In 1958 a league re-organisation saw Palace become founder members of Division Four. Over the next eleven years the club moved from the lowest rung of English Football to the highest, reaching the First Division in 1969, and staying in the top division for four seasons before suffering successive relegations. In 1973 the club modernised its image, changing the nickname from The Glaziers to \\\\\"The Eagles\\\\\" and ending the 68-year association with claret and blue by introducing the red-and-blue vertical stripes now associated with the club. The club stabilised itself in the top two divisions with promotions in 1977 and 1979, the latter saw the club crowned as Division Two Champions. The period between 1989–91 was a successful time for the club. They reached an FA Cup Final in 1990, won the Full Members Cup in 1991, and achieved third place in the top division in the 1990–1991 season. Palace became founder members of the Premier League in 1992, but were relegated the same season, despite achieving 49 points which is still a Premier League record for a relegated club. The club then achieved promotion back to the Premier League three times in 1994, 1997 and 2004, but each time suffered relegation at the end of the following season. Palace entered administration in both 2000 and 2010, and are now owned by a consortium of four. The club were promoted back to the Premier League with a 1–0 win over Watford in the Football League play-offs in May 2013.\\\\r\\\\n\\\\r\\\\nCrystal Palace initially played their games in the grounds of The Crystal Palace, but the First World War saw them forced to move out, and they enjoyed a number of seasons at both the Herne Hill Velodrome and The Nest. Since 1924, Palace have played their home games at Selhurst Park. Their home colours are red and blue vertical stripes, though prior to 1973 they wore claret and pale blue after the fashion of Aston Villa. They have a fierce rivalry with M23 neighbours Brighton & Hove Albion, with whom they have contested the M23 derby 98 times and also enjoy a strong rivalry with fellow South London team Millwall. The club\\'s kit is currently made by Macron, and the shirt sponsor is Neteller. The club captain is Mile Jedinak and the current player of the year is Julian Speroni. Edmund Goodman is the club\\'s longest serving manager, and Jim Cannon has made the most appearances for the club. Peter Simpson is the club\\'s top scorer for both one season and overall, netting 54 and 165 respectively. The highest transfer fee received has been for Wilfried Zaha from Manchester United in January 2013.',\n  },\n  {\n    name: 'Everton',\n    stadium: 'Goodison Park',\n    fanArt:\n      'https://www.thesportsdb.com/images/media/team/fanart/yyuypw1420393451.jpg',\n    description:\n      \"Everton Football Club /ˈɛvərtən/ are an English professional football club based in Liverpool, and currently playing in the Premier League. The club have competed in the top division for a record 110 seasons (missing only four seasons, in the second tier) and have won the League Championship nine times.\\\\r\\\\n\\\\r\\\\nFormed in 1878, Everton were founding members of The Football League in 1888 and won their first league championship two seasons later. Following four league titles and two FA Cup wins, Everton experienced a lull in the immediate post World War Two period until a revival in the 1960s which saw the club win two league championships and an FA Cup. The mid-1980s represented their most recent period of sustained success, with two League Championship successes, an FA Cup, and the 1985 European Cup Winners' Cup. The club's most recent major trophy was the 1995 FA Cup. The club's supporters are known as Evertonians.\\\\r\\\\n\\\\r\\\\nEverton have a rivalry with neighbours Liverpool and the two sides contest the Merseyside derby. The club have been based at Goodison Park since 1892, after moving from Anfield after a row over its rent.\\\\r\\\\n\\\\r\\\\nThe club's home colours are royal blue shirts and white shorts. Everton player Dixie Dean scored a record 60 league goals in the 1927–28 season.\",\n  },\n];\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (clubs);\n\n\n//# sourceURL=webpack:///./src/script/data/clubs.js?");

/***/ }),

/***/ "./src/script/data/data-source.js":
/*!****************************************!*\
  !*** ./src/script/data/data-source.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _clubs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clubs.js */ \"./src/script/data/clubs.js\");\n\n\nclass DataSource {\n  static searchClub(keyword) {\n    return new Promise((resolve, reject) => {\n      const filteredClubs = _clubs_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].filter((club) =>\n        club.name.toUpperCase().includes(keyword.toUpperCase())\n      );\n      if (filteredClubs.length) {\n        resolve(filteredClubs);\n      } else {\n        reject(`${keyword} is not found`);\n      }\n    });\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DataSource);\n\n\n//# sourceURL=webpack:///./src/script/data/data-source.js?");

/***/ }),

/***/ "./src/script/view/main.js":
/*!*********************************!*\
  !*** ./src/script/view/main.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_search_bar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/search-bar.js */ \"./src/script/components/search-bar.js\");\n/* harmony import */ var _components_search_bar_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_search_bar_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_club_list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/club-list.js */ \"./src/script/components/club-list.js\");\n/* harmony import */ var _data_data_source_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/data-source.js */ \"./src/script/data/data-source.js\");\n\n\n\n\nconst main = () => {\n  const searchElement = document.querySelector('search-bar');\n  const clubListElement = document.querySelector('club-list');\n\n  const onButtonSearchClicked = async () => {\n    try {\n      const result = await _data_data_source_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].searchClub(searchElement.value);\n      renderResult(result);\n    } catch (message) {\n      fallbackResult(message);\n    }\n  };\n\n  const renderResult = (results) => {\n    clubListElement.clubs = results;\n  };\n\n  const fallbackResult = (message) => {\n    clubListElement.renderError(message);\n  };\n\n  searchElement.clickEvent = onButtonSearchClicked;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (main);\n\n\n//# sourceURL=webpack:///./src/script/view/main.js?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/styles/style.css?");

/***/ })

/******/ });