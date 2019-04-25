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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/canvas.js":
/*!***********************!*\
  !*** ./src/canvas.js ***!
  \***********************/
/*! exports provided: Canvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Canvas\", function() { return Canvas; });\nlet Canvas = {};\r\n\r\nCanvas.scale =4;\r\n\r\n\n\n//# sourceURL=webpack:///./src/canvas.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ \"./src/canvas.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\r\n\r\n\r\n/*\r\nRenders blank pages with its parameters and attached images to pages\r\n */\r\nfunction renderPages(doc){\r\n    for(let page of doc.pages) {\r\n        var style = doc.page_classes.find(function(page_class){ return page_class.number == page.class });\r\n\r\n        var canvas = document.createElement(\"canvas\");\r\n        document.getElementById(\"canvas-container\").appendChild(canvas);\r\n\r\n        canvas.setAttribute(\"id\", `page-${page.number}`);\r\n        canvas.setAttribute(\"tabindex\", `${page.number}`);\r\n        canvas.setAttribute(\"width\", style.width*_canvas__WEBPACK_IMPORTED_MODULE_0__[\"Canvas\"].scale);\r\n        canvas.setAttribute(\"height\", style.height*_canvas__WEBPACK_IMPORTED_MODULE_0__[\"Canvas\"].scale);\r\n\r\n        var css_width = parseInt(window.getComputedStyle(canvas).width);\r\n\r\n        canvas.addEventListener(\"keydown\", function(e){  }, true);\r\n    }\r\n}\r\n\r\nfunction setupCanvas(canvas) {\r\n    // Get the device pixel ratio, falling back to 1.\r\n    var dpr = window.devicePixelRatio || 1;\r\n    // Get the size of the canvas in CSS pixels.\r\n    var rect = canvas.getBoundingClientRect();\r\n    // Give the canvas pixel dimensions of their CSS\r\n    // size * the device pixel ratio.\r\n    canvas.width = rect.width * dpr;\r\n    canvas.height = rect.height * dpr;\r\n    var ctx = canvas.getContext('2d');\r\n    // Scale all drawing operations by the dpr, so you\r\n    // don't have to worry about the difference.\r\n    ctx.scale(dpr, dpr);\r\n    return ctx;\r\n}\r\n\r\n/*\r\nRenders\r\n    - text\r\n    - tables\r\n    - special characters\r\n    - images attached to text\r\n */\r\nfunction renderContent(doc){\r\n    var canvas = document.getElementById('page-1');\r\n    var ctx = canvas.getContext('2d');\r\n\r\n    var current_line_length = 0;\r\n    var max_line_length = 0;\r\n\r\n    var fontsize_cpx = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"pt2cpx\"])(30, _canvas__WEBPACK_IMPORTED_MODULE_0__[\"Canvas\"].scale);\r\n    console.log(fontsize_cpx);\r\n    ctx.font = fontsize_cpx+\"px Arial\";\r\n    ctx.fillText(\"Hello world\", Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"mm2cpx\"])(30, _canvas__WEBPACK_IMPORTED_MODULE_0__[\"Canvas\"].scale), Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"mm2cpx\"])(20, _canvas__WEBPACK_IMPORTED_MODULE_0__[\"Canvas\"].scale)+fontsize_cpx);\r\n}\r\n\r\nfunction renderAll(doc){\r\n    renderPages(doc);\r\n    renderContent(doc);\r\n}\r\n\r\n/*\r\nValidate document structure\r\n */\r\nfunction validateStructure(doc){\r\n    var errorList = []\r\n    \"Document is not present\";\r\n}\r\n\r\nfunction validateContent(document){\r\n    var err;\r\n    return true, err\r\n}\r\n\r\nfunction validateImages(document){\r\n    var err;\r\n    return true, err\r\n}\r\n\r\nfunction validateFonts(document){\r\n    var err;\r\n    return true, err\r\n}\r\n\r\nfunction validatePages(document){\r\n    var err;\r\n    return true, err\r\n}\r\n\r\nfunction getDocument(callback){\r\n    var xmlhttp = new XMLHttpRequest();\r\n    xmlhttp.onreadystatechange = function() {\r\n        if (this.readyState == 4 && this.status == 200) {\r\n            callback(JSON.parse(this.responseText));\r\n        }\r\n    };\r\n    xmlhttp.open(\"GET\", \"document.json\", true);\r\n    xmlhttp.send();\r\n}\r\n\r\n/*\r\n\r\n/*\r\nLoad DOM and render\r\n */\r\ndocument.addEventListener(\"DOMContentLoaded\", function(event) {\r\n    getDocument(function(doc){\r\n        window.doc = doc; // For debugging\r\n        renderAll(window.doc);\r\n    });\r\n});\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: canvas_dpi, pt2mm, mm2pt, pt2cpx, mm2cpx */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"canvas_dpi\", function() { return canvas_dpi; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pt2mm\", function() { return pt2mm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mm2pt\", function() { return mm2pt; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pt2cpx\", function() { return pt2cpx; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mm2cpx\", function() { return mm2cpx; });\nfunction canvas_dpi(canvas_scale) { return 72.272*canvas_scale; }\r\n\r\n\r\n/*\r\n\r\n72.272pt     25,4\r\n--------  =  ----\r\n   pt         mm\r\n\r\n */\r\n\r\nfunction pt2mm(pt) { return pt*25.4/72.272 }\r\nfunction mm2pt(mm) { return mm*72.272/25.4 }\r\n\r\n\r\n// Convert Pt to Canvas pixels\r\n// Canvas pixels is pixels used primary in canvas \"width\" and \"height\" attributes\r\nfunction pt2cpx(pt, canvas_scale) { return pt2mm(pt)*canvas_scale }\r\nfunction mm2cpx(mm, canvas_scale) { return mm*canvas_scale }\r\n\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });