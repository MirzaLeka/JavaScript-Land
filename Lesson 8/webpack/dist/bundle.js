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
/******/ 	return __webpack_require__(__webpack_require__.s = "./Lesson 8/webpack/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Lesson 8/webpack/another.js":
/*!*************************************!*\
  !*** ./Lesson 8/webpack/another.js ***!
  \*************************************/
/*! exports provided: str, square, sum, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"str\", function() { return str; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"square\", function() { return square; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sum\", function() { return sum; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return subtract; });\n\r\nconst square = a => a * a; // example of named export\r\n\r\nconst sum = (a, b) => a + b; // another named export\r\n\r\nconst subtract = (a, b) => a - b; // we'll use subtract 4 defualt export and not named export \r\n\r\nconst str = 'Math:'; // exporting variable\r\n\r\n// export multiple\r\n  \r\n// since we export so many items, ESLint suggest we make a line break and that's what we did\r\n\r\n// export inline:\r\n// export const something = () => ;\r\n\r\n// module.exports.variable = () => ; // still works\r\n\n\n//# sourceURL=webpack:///./Lesson_8/webpack/another.js?");

/***/ }),

/***/ "./Lesson 8/webpack/app.js":
/*!*********************************!*\
  !*** ./Lesson 8/webpack/app.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _another__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./another */ \"./Lesson 8/webpack/another.js\");\n/* harmony import */ var _singleExport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./singleExport */ \"./Lesson 8/webpack/singleExport.js\");\n\r\n // we are importing just default export\r\n\r\nconst div = document.createElement('div');\r\ndiv.style.width = '120px';\r\ndiv.style.border = '2px dashed black';\r\ndiv.style.paddingLeft = '20px';\r\n\r\nconst p0 = document.createElement('p');\r\nconst p1 = document.createElement('p');\r\nconst p2 = document.createElement('p');\r\nconst p3 = document.createElement('p');\r\nconst p4 = document.createElement('p');\r\n\r\np0.innerHTML = _another__WEBPACK_IMPORTED_MODULE_0__[\"str\"];\r\np1.innerHTML = `4 x 4 == ${Object(_another__WEBPACK_IMPORTED_MODULE_0__[\"square\"])(4)} `;\r\np2.innerHTML = `2 + 3 == ${Object(_another__WEBPACK_IMPORTED_MODULE_0__[\"sum\"])(2, 3)}`;\r\np3.innerHTML = `100 - 50 == ${Object(_another__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(100, 50)}`;\r\np4.innerHTML = `20 / 5 == ${Object(_singleExport__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(20, 5)}`;\r\n\r\n// div.appendChild(p1);\r\n// div.appendChild(p2);\r\n// div.appendChild(p3);\r\n\r\ndiv.append(p0, p1, p2, p3, p4); // less dry code\r\n\r\ndocument.body.appendChild(div);\r\n\r\n// subtract is default export, so it comes before the named exports\r\n// with default export naming is not important. We can do it like below:\r\n\r\n// import anythingWeWant, { square, add} from './another' and it will work just fine\r\n\n\n//# sourceURL=webpack:///./Lesson_8/webpack/app.js?");

/***/ }),

/***/ "./Lesson 8/webpack/singleExport.js":
/*!******************************************!*\
  !*** ./Lesson 8/webpack/singleExport.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\n// if we only have one function to export it's always better to use default export\r\n\r\n// with default export we first Must create a function and\r\n// then, using export default syntax, export the function\r\n\r\n// example:\r\n\r\n// const divide = (a, b) => a / b;\r\n// export default divide; // we are referencing single expression and this will work\r\n\r\n// the best method is to not write a variable and just do it all in one line\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ((a, b) => a / b);\r\n\n\n//# sourceURL=webpack:///./Lesson_8/webpack/singleExport.js?");

/***/ })

/******/ });