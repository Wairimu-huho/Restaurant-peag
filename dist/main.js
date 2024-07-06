/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body{\r\n    background-color: black;\r\n}\r\n\r\n\r\n\r\n/*----------------------------------page-content------------------------------------*/\r\n.navigation {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    flex-wrap: wrap;\r\n}\r\n.logo{\r\n    width: 140px;\r\n}\r\n.navigation ul li{\r\n    display: inline-block;\r\n    list-style: none;\r\n    margin: 10px 20px;\r\n}\r\n.navigation ul li a{\r\n    text-decoration: none;\r\n    color: white;\r\n    font-size: 20px;\r\n    position: relative;\r\n}\r\n.navigation ul li a::after{\r\n    content: '';\r\n    width: 0;\r\n    height: 3px;\r\n    background: #fffb00d5;\r\n    position: absolute;\r\n    left: 0;\r\n    bottom: -6px;\r\n    transition: 0.5s;\r\n}\r\n.navigation ul li a:hover::after{\r\n    width: 100%;\r\n}\r\n.pizzaImg{\r\n    width: 100%;\r\n}\r\n.divParagraph{\r\n    position: absolute;\r\n    top:60%;\r\n    transform:translateY(-50%);\r\n    left:2%;\r\n    right:50%;\r\n    background-color:rgba(8, 8, 8, 0.0);\r\n    padding: 10px;\r\n    font-size: 25px;\r\n    color: rgba(255, 255, 255, 0.925)smoke;\r\n    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n    border-radius: 5px;\r\n}\r\n.paragraphHome{\r\n    color: bisque;\r\n}\r\n#menu-container {\r\n    max-width: 800px;\r\n    margin: 0 auto;\r\n    color: white;\r\n    font-family: Arial, sans-serif;\r\n    padding: 20px;\r\n}\r\n.menu-item{\r\n    padding: 20px;\r\n    background-color: rgba(255, 166, 0, 0.918);\r\n    border-radius: 10px;\r\n    border: 1px solid #e0e0e0;\r\n    margin: 15px 0;\r\n    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n.menu-item:hover {\r\n    transform: translateY(-5px);\r\n    box-shadow: 0 4px 10px rgba(0,0,0,0.15);\r\n}\r\n.menu-item-details h2 {\r\n    margin: 0 0 10px 0;\r\n    color: #333;\r\n    font-size: 1.5em;\r\n}\r\n\r\n.menu-item-details p {\r\n    margin: 0 0 15px 0;\r\n    color: #666;\r\n    font-size: 0.9em;\r\n    line-height: 1.4;\r\n}\r\n\r\n.menu-item-details .price {\r\n    font-weight: bold;\r\n    color: #e44d26;\r\n    font-size: 1.2em;\r\n    align-self: flex-end;\r\n}\r\n.menu-item-image {\r\n    width: 120px;\r\n    height: 120px;\r\n    flex-shrink: 0;\r\n    margin-left: 20px;\r\n}\r\n\r\n.menu-item-image img {\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: cover;\r\n    border-radius: 8px;\r\n}\r\n.menu-item-details{\r\n    flex: 1;\r\n    padding-right: 20px;\r\n}\r\n.menu-heading{\r\n    text-align: center;\r\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n    font-size: 40px;\r\n    color: bisque;\r\n}\r\n.about-img{\r\n    width: 100%;\r\n}\r\n.about-content{\r\n    position: absolute;\r\n    top:60%;\r\n    transform:translateY(-50%);\r\n    right: 15%;\r\n    left: 15%;\r\n    background-color:rgba(8, 8, 8, 0.7);\r\n    padding: 10px;\r\n    font-size: 25px;\r\n    color: rgba(255, 255, 255, 0.925)smoke;\r\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n    border-radius: 7px;\r\n}\r\n.about-heading{\r\n    color:bisque;\r\n    text-align: center;\r\n}\r\n.about-paragraph{\r\n    color: bisque;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/About.js":
/*!**********************!*\
  !*** ./src/About.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   aboutPage: () => (/* binding */ aboutPage)\n/* harmony export */ });\n/* harmony import */ var _backdrop_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./backdrop.jpg */ \"./src/backdrop.jpg\");\n\r\nfunction aboutPage(){\r\n    const content = document.getElementById('content');\r\n    const div = document.createElement('div');\r\n    div.classList.add(\"about-page\");\r\n    \r\n    content.appendChild(div);\r\n\r\n    const aboutContainer = document.createElement(\"div\");\r\n    aboutContainer.classList.add(\"about-container\");\r\n    div.appendChild(aboutContainer);\r\n\r\n    const backdrop = document.createElement('img');\r\n    backdrop.src = _backdrop_jpg__WEBPACK_IMPORTED_MODULE_0__;\r\n    backdrop.classList.add(\"about-img\");\r\n    aboutContainer.appendChild(backdrop);\r\n\r\n    const aboutContent = document.createElement(\"div\");\r\n    aboutContent.className = \"about-content\";\r\n    aboutContainer.appendChild(aboutContent);\r\n\r\n    const aboutHeading = document.createElement(\"h2\");\r\n    aboutHeading.classList.add(\"about-heading\");\r\n    aboutHeading.textContent = \"About Us\";\r\n    aboutContent.appendChild(aboutHeading);\r\n\r\n    const aboutParagraph = document.createElement(\"p\");\r\n    aboutParagraph.classList.add(\"about-paragraph\");\r\n    aboutParagraph.textContent = \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ipsum nunc aliquet bibendum enim facilisis gravida neque. Varius quam quisque id diam vel quam. Nisi porta lorem mollis aliquam ut porttitor leo.Ut sem viverra aliquet eget sit. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Id diam vel quam elementum. Eu ultrices vitae auctor eu augue ut lectus arcu. In eu mi bibendum neque egestas congue quisque. Nam at lectus urna duis convallis convallis tellus. Elit at imperdiet dui accumsan. Luctus venenatis lectus magna fringilla urna. Sodales ut eu sem integer vitae. Turpis massa tincidunt dui ut ornare lectus. Vel facilisis volutpat est velit egestas dui id ornare arcu. Amet luctus venenatis lectus magna fringilla urna.\";\r\n    aboutContent.appendChild(aboutParagraph);\r\n    document.appendChild(content);\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/About.js?");

/***/ }),

/***/ "./src/Home.js":
/*!*********************!*\
  !*** ./src/Home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   homePage: () => (/* binding */ homePage)\n/* harmony export */ });\n/* harmony import */ var _ivan_torres_MQUqbmszGGM_unsplash_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ivan-torres-MQUqbmszGGM-unsplash.jpg */ \"./src/ivan-torres-MQUqbmszGGM-unsplash.jpg\");\n\r\n\r\nfunction homePage(parentElement){\r\n    const div = document.createElement('div');\r\n    div.id = 'homepage';\r\n\r\n    const pizza = document.createElement('img');\r\n    pizza.src = _ivan_torres_MQUqbmszGGM_unsplash_jpg__WEBPACK_IMPORTED_MODULE_0__;\r\n    pizza.classList.add('pizzaImg');\r\n\r\n\r\n    const overlayDiv = document.createElement('div');\r\n    overlayDiv.classList.add('divParagraph');\r\n    const paragraph = document.createElement('p');\r\n    paragraph.classList.add('paragraphHome');\r\n    paragraph.textContent = 'Welcome to Bella Italia Pizzeria, where every bite is a slice of heaven! At Bella Italia, we combine the finest ingredients with traditional recipes to bring you the authentic taste of Italy. Our menu features a variety of handcrafted pizzas, delicious pasta dishes, and fresh salads, all made to order with love and passion. Whether you are dining in, taking out, or ordering delivery, we promise a delightful experience that will keep you coming back for more. Join us today and savor the flavor of true Italian cuisine!';\r\n\r\n    overlayDiv.appendChild(paragraph);\r\n    div.appendChild(pizza);\r\n    div.appendChild(overlayDiv);\r\n\r\n\r\n    parentElement.appendChild(div);\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/Home.js?");

/***/ }),

/***/ "./src/Menu.js":
/*!*********************!*\
  !*** ./src/Menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menuPage: () => (/* binding */ menuPage)\n/* harmony export */ });\n/* harmony import */ var _burger_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./burger.jpg */ \"./src/burger.jpg\");\n/* harmony import */ var _pizza_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pizza.jpg */ \"./src/pizza.jpg\");\n/* harmony import */ var _salad_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./salad.jpg */ \"./src/salad.jpg\");\n/* harmony import */ var _pasta_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pasta.jpg */ \"./src/pasta.jpg\");\n\r\n\r\n\r\n\r\n\r\nfunction menuPage(){\r\n  \r\n    console.log(\"menuPage function called\");\r\n    //menu items array\r\n    const menuItems = [\r\n        { name: \"Burger\", \r\n          description: \"Juicy beef patty with lettuce and tomato\", \r\n          price: 9.99,\r\n          imageUrl:_burger_jpg__WEBPACK_IMPORTED_MODULE_0__\r\n        },\r\n        { name: \"Pizza\", \r\n          description: \"Margherita with fresh mozzarella and basil\", \r\n          price: 12.99,\r\n          imageUrl: _pizza_jpg__WEBPACK_IMPORTED_MODULE_1__\r\n        },\r\n        { name: \"Salad\", \r\n          description: \"Mixed greens with vinaigrette dressing\", \r\n          price: 7.99,\r\n          imageUrl: _salad_jpg__WEBPACK_IMPORTED_MODULE_2__\r\n         },\r\n        { name: \"Pasta\", \r\n          description: \"Spaghetti \", \r\n          price: 10.99,\r\n          imageUrl: _pasta_jpg__WEBPACK_IMPORTED_MODULE_3__\r\n        }\r\n    ];\r\n\r\n    //function to create menu items\r\n    function createMenuItem(item){\r\n        const container = document.createElement(\"div\");\r\n        container.className = \"menu-item\";\r\n\r\n        const detailsContainer = document.createElement(\"div\");\r\n        detailsContainer.className = \"menu-item-details\";\r\n      \r\n        const name = document.createElement(\"h2\");\r\n        name.textContent = item.name;\r\n      \r\n        const description = document.createElement(\"p\");\r\n        description.textContent = item.description;\r\n      \r\n        const price = document.createElement(\"span\");\r\n        price.className = \"price\";\r\n        price.textContent = `$${item.price.toFixed(2)}`;\r\n      \r\n        detailsContainer.appendChild(name);\r\n        detailsContainer.appendChild(description);\r\n        detailsContainer.appendChild(price);\r\n\r\n        const imageContainer = document.createElement(\"div\");\r\n        imageContainer.className = \"menu-item-image\";\r\n    \r\n        const image = document.createElement(\"img\");\r\n        image.src = item.imageUrl;\r\n        image.alt = item.name;\r\n    \r\n        imageContainer.appendChild(image);\r\n    \r\n        container.appendChild(detailsContainer);\r\n        container.appendChild(imageContainer);\r\n      \r\n        return container;\r\n    }\r\n\r\n    // Function to display menu\r\nfunction displayMenu() {\r\n    const content = document.getElementById('content');\r\n    if (!content) {\r\n        content = document.createElement('div');\r\n        content.id = 'content';\r\n    }\r\n\r\n    const menuContainer = document.createElement('div');\r\n    menuContainer.id = \"menu-container\";\r\n\r\n    const menuHeading = document.createElement(\"h2\");\r\n    menuHeading.classList.add('menu-heading');\r\n    menuHeading.textContent = \"Our  Menu\";\r\n  \r\n    menuContainer.appendChild(menuHeading);\r\n    menuItems.forEach(item => {\r\n      const menuItem = createMenuItem(item);\r\n      menuContainer.appendChild(menuItem);\r\n    });\r\n    \r\n    \r\n    content.appendChild(menuContainer);\r\n\r\n    document.body.appendChild(content);\r\n  }\r\n  \r\n\r\n  // Call the function\r\n  displayMenu();\r\n}\r\n    \n\n//# sourceURL=webpack://restaurant-page/./src/Menu.js?");

/***/ }),

/***/ "./src/Page-content.js":
/*!*****************************!*\
  !*** ./src/Page-content.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initialisePage: () => (/* binding */ initialisePage)\n/* harmony export */ });\n/* harmony import */ var _logo_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logo.jpeg */ \"./src/logo.jpeg\");\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home */ \"./src/Home.js\");\n\r\n // import the homePage function\r\n\r\n\r\nfunction initialisePage(){\r\n\r\n    const content = document.createElement('div');\r\n    content.id = 'content';\r\n    content.style.backgroundColor = \"black\";\r\n\r\n    const logo = document.createElement('img');\r\n    logo.src = _logo_jpeg__WEBPACK_IMPORTED_MODULE_0__;\r\n    logo.classList.add('logo');\r\n\r\n    const header = document.createElement('header');\r\n    header.id = 'header';\r\n    const nav = document.createElement('nav');\r\n    nav.classList.add('navigation');\r\n\r\n    const navLinks = document.createElement('ul');\r\n    navLinks.classList.add('nav-links');\r\n    navLinks.innerHTML = '<li><a id=\"Home\" href=\"#\">Home</a></li><li><a id=\"Menu\" href=\"#\">Menu</a></li><li><a id=\"About\" href=\"#\">About</a></li>';\r\n  \r\n\r\n    nav.appendChild(logo);\r\n    nav.appendChild(navLinks);\r\n\r\n    header.appendChild(nav);\r\n\r\n    document.body.appendChild(header);\r\n    \r\n\r\n    document.body.appendChild(content);\r\n\r\n    // Call the homePage function\r\n    (0,_Home__WEBPACK_IMPORTED_MODULE_1__.homePage)(content);\r\n\r\n\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/Page-content.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _Page_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Page-content */ \"./src/Page-content.js\");\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home */ \"./src/Home.js\");\n/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Menu */ \"./src/Menu.js\");\n/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./About */ \"./src/About.js\");\n\r\n\r\n\r\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    (0,_Page_content__WEBPACK_IMPORTED_MODULE_1__.initialisePage)();\r\n\r\n    console.log('index');\r\n\r\n    const homeButton = document.getElementById('Home');\r\n    const aboutButton = document.getElementById('About');\r\n    const menuButton = document.getElementById('Menu');\r\n\r\n    homeButton.addEventListener('click', () => {\r\n        switchTab('Home');\r\n    });\r\n\r\n    aboutButton.addEventListener('click' , () => {\r\n        switchTab('About');\r\n    });\r\n    \r\n    menuButton.addEventListener('click', () => {\r\n        switchTab('Menu');\r\n    });\r\n\r\n});\r\n\r\nfunction switchTab(tabName){\r\n\r\n    if (tabName === 'Home') {\r\n        clearContent();\r\n        (0,_Home__WEBPACK_IMPORTED_MODULE_2__.homePage)(content);\r\n    } else if (tabName === 'About') {\r\n        clearContent();\r\n        (0,_About__WEBPACK_IMPORTED_MODULE_4__.aboutPage)();\r\n    } else if (tabName === 'Menu') {\r\n        clearContent();\r\n        (0,_Menu__WEBPACK_IMPORTED_MODULE_3__.menuPage)();\r\n    }\r\n}\r\n\r\nfunction clearContent() {\r\n     const content = document.getElementById('content');\r\n     content.innerHTML = '';\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/backdrop.jpg":
/*!**************************!*\
  !*** ./src/backdrop.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f141c6dfed86649a1610.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/backdrop.jpg?");

/***/ }),

/***/ "./src/burger.jpg":
/*!************************!*\
  !*** ./src/burger.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"33136c77e1da8272f2c1.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/burger.jpg?");

/***/ }),

/***/ "./src/ivan-torres-MQUqbmszGGM-unsplash.jpg":
/*!**************************************************!*\
  !*** ./src/ivan-torres-MQUqbmszGGM-unsplash.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9dc1a24ea4d2f0d45953.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/ivan-torres-MQUqbmszGGM-unsplash.jpg?");

/***/ }),

/***/ "./src/logo.jpeg":
/*!***********************!*\
  !*** ./src/logo.jpeg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"31d6cfe0d16ae931b73c.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/logo.jpeg?");

/***/ }),

/***/ "./src/pasta.jpg":
/*!***********************!*\
  !*** ./src/pasta.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fd065d7af3f1705dcb98.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/pasta.jpg?");

/***/ }),

/***/ "./src/pizza.jpg":
/*!***********************!*\
  !*** ./src/pizza.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6bc6d07ab3077a413f93.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/pizza.jpg?");

/***/ }),

/***/ "./src/salad.jpg":
/*!***********************!*\
  !*** ./src/salad.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d9fcfb7fb09684f89cf3.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/salad.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;