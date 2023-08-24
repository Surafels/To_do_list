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

/***/ "./src/print.js":
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addList: () => (/* binding */ addList)\n/* harmony export */ });\n\r\nconst todoList = [\r\n  {\r\n    description: 'wash the dish',\r\n    completed: true,\r\n    index: 0,\r\n  },\r\n  {\r\n    description: 'clean the dish',\r\n    completed: true,\r\n    index: 1,\r\n  },\r\n  {\r\n    description: 'complete to do list project',\r\n    completed: true,\r\n    index: 2,\r\n  },\r\n]\r\nfunction addList(){\r\n  const mylist = document.getElementById('listItem');\r\n  const listElements = todoList.map((todo) =>{\r\n    const div = document.createElement('div');\r\n    div.className ='listElement';\r\n    const description = document.createElement('p');\r\n    description.innerText =todo.description;\r\n    \r\n    const completed = document.createElement('div');\r\n    completed.innerText =todo.completed;\r\n    const clearBtn = document.createElement('button');\r\n    clearBtn.innerText = 'Clear';\r\n\r\n    div.appendChild(description);\r\n    div.appendChild(completed);\r\n    div.appendChild(clearBtn);\r\n\r\n    return div;\r\n\r\n  });\r\n  mylist.append(...listElements);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://to_do_list/./src/print.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/print.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;