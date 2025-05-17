/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
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
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _knightMoves_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./knightMoves.js */ \"./src/knightMoves.js\");\n\n\nconsole.log((0,_knightMoves_js__WEBPACK_IMPORTED_MODULE_0__.knightMoves)([0, 0], [7, 7]));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBK0M7O0FBRS9DLFlBQVksNERBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzPzY0OWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsga25pZ2h0TW92ZXMgfSBmcm9tIFwiLi9rbmlnaHRNb3Zlcy5qc1wiO1xuXG5jb25zb2xlLmxvZyhrbmlnaHRNb3ZlcyhbMCwgMF0sIFs3LCA3XSkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/knightMoves.js":
/*!****************************!*\
  !*** ./src/knightMoves.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   knightMoves: () => (/* binding */ knightMoves)\n/* harmony export */ });\n// knightMoves.js\nconst BOARD_SIZE = 8;\n\nconst KNIGHT_OFFSETS = [\n    [2, 1], [1, 2], [-1, 2], [-2, 1],\n    [-2, -1], [-1, -2], [1, -2], [2, -1],\n];\n\nfunction isOnBoard(x, y) {\n    if(x >= 0 && x < BOARD_SIZE && y < BOARD_SIZE && y >= 0) return true;\n    return false;\n}\n\nfunction getLegalMoves(position) {\n    let legalMoves = []\n    for(const offSet of KNIGHT_OFFSETS) {\n        const x = offSet[0] + position[0];\n        const y = offSet[1] + position[1];\n        if(isOnBoard(x, y)) {\n            legalMoves.push([x, y])\n        }\n    }\n    return legalMoves;\n}\n\nconst key = ([x, y]) => `${x},${y}`;\nconst fromKey = k => k.split(',').map(Number);\n\nfunction knightMoves(start, end) {\n    if(key(start) === key(end)) return [start];\n\n    const queue = [start];\n    const visited = new Set([key(start)]);\n    const parent = new Map();\n\n    while(queue.length) {\n        const current = queue.shift();\n\n        if(key(current) === key(end)) break;\n\n        for(const neighbor of getLegalMoves(current)) {\n            const k = key(neighbor);\n            if(!visited.has(k)) {\n                visited.add(k);\n                parent.set(k, key(current));\n                queue.push(neighbor);\n            }\n        }\n    }\n\n    const path = [];\n    for(let k = key(end); k !== undefined; k = parent.get(k)) {\n        path.push(fromKey(k));\n    }\n    path.reverse();\n    return path;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMva25pZ2h0TW92ZXMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkIsRUFBRSxHQUFHLEVBQUU7QUFDbEM7O0FBRU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsaUJBQWlCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2tuaWdodE1vdmVzLmpzPzYzZjIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8ga25pZ2h0TW92ZXMuanNcbmNvbnN0IEJPQVJEX1NJWkUgPSA4O1xuXG5jb25zdCBLTklHSFRfT0ZGU0VUUyA9IFtcbiAgICBbMiwgMV0sIFsxLCAyXSwgWy0xLCAyXSwgWy0yLCAxXSxcbiAgICBbLTIsIC0xXSwgWy0xLCAtMl0sIFsxLCAtMl0sIFsyLCAtMV0sXG5dO1xuXG5mdW5jdGlvbiBpc09uQm9hcmQoeCwgeSkge1xuICAgIGlmKHggPj0gMCAmJiB4IDwgQk9BUkRfU0laRSAmJiB5IDwgQk9BUkRfU0laRSAmJiB5ID49IDApIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZ2V0TGVnYWxNb3Zlcyhwb3NpdGlvbikge1xuICAgIGxldCBsZWdhbE1vdmVzID0gW11cbiAgICBmb3IoY29uc3Qgb2ZmU2V0IG9mIEtOSUdIVF9PRkZTRVRTKSB7XG4gICAgICAgIGNvbnN0IHggPSBvZmZTZXRbMF0gKyBwb3NpdGlvblswXTtcbiAgICAgICAgY29uc3QgeSA9IG9mZlNldFsxXSArIHBvc2l0aW9uWzFdO1xuICAgICAgICBpZihpc09uQm9hcmQoeCwgeSkpIHtcbiAgICAgICAgICAgIGxlZ2FsTW92ZXMucHVzaChbeCwgeV0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGxlZ2FsTW92ZXM7XG59XG5cbmNvbnN0IGtleSA9IChbeCwgeV0pID0+IGAke3h9LCR7eX1gO1xuY29uc3QgZnJvbUtleSA9IGsgPT4gay5zcGxpdCgnLCcpLm1hcChOdW1iZXIpO1xuXG5leHBvcnQgZnVuY3Rpb24ga25pZ2h0TW92ZXMoc3RhcnQsIGVuZCkge1xuICAgIGlmKGtleShzdGFydCkgPT09IGtleShlbmQpKSByZXR1cm4gW3N0YXJ0XTtcblxuICAgIGNvbnN0IHF1ZXVlID0gW3N0YXJ0XTtcbiAgICBjb25zdCB2aXNpdGVkID0gbmV3IFNldChba2V5KHN0YXJ0KV0pO1xuICAgIGNvbnN0IHBhcmVudCA9IG5ldyBNYXAoKTtcblxuICAgIHdoaWxlKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBjb25zdCBjdXJyZW50ID0gcXVldWUuc2hpZnQoKTtcblxuICAgICAgICBpZihrZXkoY3VycmVudCkgPT09IGtleShlbmQpKSBicmVhaztcblxuICAgICAgICBmb3IoY29uc3QgbmVpZ2hib3Igb2YgZ2V0TGVnYWxNb3ZlcyhjdXJyZW50KSkge1xuICAgICAgICAgICAgY29uc3QgayA9IGtleShuZWlnaGJvcik7XG4gICAgICAgICAgICBpZighdmlzaXRlZC5oYXMoaykpIHtcbiAgICAgICAgICAgICAgICB2aXNpdGVkLmFkZChrKTtcbiAgICAgICAgICAgICAgICBwYXJlbnQuc2V0KGssIGtleShjdXJyZW50KSk7XG4gICAgICAgICAgICAgICAgcXVldWUucHVzaChuZWlnaGJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwYXRoID0gW107XG4gICAgZm9yKGxldCBrID0ga2V5KGVuZCk7IGsgIT09IHVuZGVmaW5lZDsgayA9IHBhcmVudC5nZXQoaykpIHtcbiAgICAgICAgcGF0aC5wdXNoKGZyb21LZXkoaykpO1xuICAgIH1cbiAgICBwYXRoLnJldmVyc2UoKTtcbiAgICByZXR1cm4gcGF0aDtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/knightMoves.js\n");

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;