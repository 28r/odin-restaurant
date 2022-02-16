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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loadpage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadpage.js */ \"./src/loadpage.js\");\n/* harmony import */ var _loadtabs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadtabs.js */ \"./src/loadtabs.js\");\n\n\n\nconst homebutton = document.getElementById('home');\nconst contactbutton = document.getElementById('contact');\nconst menubutton = document.getElementById('menu');\n\n(0,_loadpage_js__WEBPACK_IMPORTED_MODULE_0__.LoadPage)();\n(0,_loadpage_js__WEBPACK_IMPORTED_MODULE_0__.LoadFooter)();\n\nhomebutton.addEventListener(\"click\", function(){(0,_loadtabs_js__WEBPACK_IMPORTED_MODULE_1__.LoadHomePage)();});\ncontactbutton.addEventListener(\"click\", function(){(0,_loadtabs_js__WEBPACK_IMPORTED_MODULE_1__.LoadContact)();});\nmenubutton.addEventListener(\"click\", function(){(0,_loadtabs_js__WEBPACK_IMPORTED_MODULE_1__.LoadMenu)();});\n\n//# sourceURL=webpack://odin-restaurant/./src/index.js?");

/***/ }),

/***/ "./src/loadpage.js":
/*!*************************!*\
  !*** ./src/loadpage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LoadPage\": () => (/* binding */ LoadPage),\n/* harmony export */   \"LoadFooter\": () => (/* binding */ LoadFooter)\n/* harmony export */ });\nfunction LoadPage() {\n    let header = document.createElement('h1');\n    header.innerHTML = \"Tony's Bistro & Bar\";\n    let content = document.getElementById(\"content\");\n    content.appendChild(header);\n    let copy = document.createElement('p');\n    copy.innerHTML = \"No booleans, only Berninis.\";\n    content.appendChild(copy);\n    let myImage = document.createElement(\"img\");\n    myImage.src = \"./assets/restaurant-helena-lopes-696218.jpg\";\n    myImage.style = \"width: 50vw; height: auto;\";\n    content.appendChild(myImage);\n    let credits = document.createElement('p');\n    credits.innerText = `Photo by `;\n    let temp_span = document.createElement('span');\n    let link = document.createElement('a');\n    link.href = \"https://www.pexels.com/photo/people-drinking-liquor-and-talking-on-dining-table-close-up-photo-696218/\";\n    link.target = '_blank';\n    link.innerHTML = \"Helena Lopes on Pexels\";\n    temp_span.appendChild(link);\n    credits.appendChild(temp_span);\n    content.appendChild(credits);\n    return;\n}\n\nfunction LoadFooter() {\n    let footer = document.createElement('footer');\n    footer.innerText = `Coded and styled by `;\n    let temp_span = document.createElement('span');\n    let link = document.createElement('a');\n    link.href = \"https://github.com/28r\";\n    link.target = '_blank';\n    link.rel = 'noopener noreferrer';\n    link.innerHTML = \"Antônio Moraes\";\n    temp_span.appendChild(link);\n    footer.appendChild(temp_span);\n    let temp_span2 = document.createElement('span');\n    temp_span2.innerHTML = \" &copy; 2022\";\n    footer.appendChild(temp_span2);\n    footer.classList.add('footer');\n    document.body.appendChild(footer);\n    return;\n}\n\n//# sourceURL=webpack://odin-restaurant/./src/loadpage.js?");

/***/ }),

/***/ "./src/loadtabs.js":
/*!*************************!*\
  !*** ./src/loadtabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LoadContact\": () => (/* binding */ LoadContact),\n/* harmony export */   \"LoadMenu\": () => (/* binding */ LoadMenu),\n/* harmony export */   \"LoadHomePage\": () => (/* binding */ LoadHomePage)\n/* harmony export */ });\n/* harmony import */ var _loadpage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadpage.js */ \"./src/loadpage.js\");\n\n\nlet content = document.getElementById(\"content\");\n\nfunction LoadContact() {\n    content.innerHTML = \"\";\n    let p = document.createElement('p');\n    p.innerHTML = 'Feel free to contact us for any business inquiries at'\n    p.classList.add('phonenumber');\n    content.appendChild(p);\n    let h2 = document.createElement('h2');\n    h2.innerHTML = '+1 617-495-1000';\n    content.appendChild(h2);\n    return;\n}\n\nfunction LoadMenu() {\n    content.innerHTML = \"\";\n    let ul = document.createElement('ul');\n    let li = [];\n    let innerHTML = [\"Strawberry Bernini, $5.50\", \"Grapefruit Bernini, $6.50\", \"Blueberry Bagel, $2.50\", \"Aperol Spritz, $3.50\", \"Açaí com Banana, $6.50\", \"Misugaru, $3.50\", \"Club Soda, $1.50\"]\n    for (let i = 0; i < 7; i++) {\n        li[i] = document.createElement('li');\n        li[i].innerHTML = innerHTML[i];\n        ul.appendChild(li[i]);\n    }\n    ul.classList.add('menulist');\n    content.appendChild(ul);\n    return;\n}\n\nfunction LoadHomePage() {\n    content.innerHTML = \"\";\n    (0,_loadpage_js__WEBPACK_IMPORTED_MODULE_0__.LoadPage)();\n    return;\n}\n\n//# sourceURL=webpack://odin-restaurant/./src/loadtabs.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;