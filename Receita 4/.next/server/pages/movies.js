"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/movies";
exports.ids = ["pages/movies"];
exports.modules = {

/***/ "./pages/movies/index.js":
/*!*******************************!*\
  !*** ./pages/movies/index.js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Movies)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"swr\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__]);\nswr__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nfunction Movies() {\n    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(`http://www.omdbapi.com/?apikey=cfaaddf1&s=bagdad`, fetcher);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"falha na requisi\\xe7\\xe3o...\"\n    }, void 0, false, {\n        fileName: \"/home/israel/Documents/Faculdade/4\\xb0 Per\\xedodo/Programa\\xe7\\xe3o Web/Receita 4/pages/movies/index.js\",\n        lineNumber: 9,\n        columnNumber: 21\n    }, this);\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"carregando...\"\n    }, void 0, false, {\n        fileName: \"/home/israel/Documents/Faculdade/4\\xb0 Per\\xedodo/Programa\\xe7\\xe3o Web/Receita 4/pages/movies/index.js\",\n        lineNumber: 11,\n        columnNumber: 21\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            data.Search.map((m)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"movies/\" + m.imdbID,\n                        children: [\n                            m.Title,\n                            \" --- \",\n                            m.Year\n                        ]\n                    }, m.imdbID, true, {\n                        fileName: \"/home/israel/Documents/Faculdade/4\\xb0 Per\\xedodo/Programa\\xe7\\xe3o Web/Receita 4/pages/movies/index.js\",\n                        lineNumber: 17,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/israel/Documents/Faculdade/4\\xb0 Per\\xedodo/Programa\\xe7\\xe3o Web/Receita 4/pages/movies/index.js\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: \"/\",\n                children: \"Home\"\n            }, void 0, false, {\n                fileName: \"/home/israel/Documents/Faculdade/4\\xb0 Per\\xedodo/Programa\\xe7\\xe3o Web/Receita 4/pages/movies/index.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/home/israel/Documents/Faculdade/4\\xb0 Per\\xedodo/Programa\\xe7\\xe3o Web/Receita 4/pages/movies/index.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/israel/Documents/Faculdade/4\\xb0 Per\\xedodo/Programa\\xe7\\xe3o Web/Receita 4/pages/movies/index.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\nasync function fetcher(url) {\n    const res = await fetch(url);\n    const json = await res.json();\n    return json;\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb3ZpZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQXlCO0FBRVYsU0FBU0MsTUFBTSxHQUFHO0lBQy9CLE1BQU0sRUFBRUMsSUFBSSxHQUFFQyxLQUFLLEdBQUUsR0FBR0gsK0NBQU0sQ0FDNUIsQ0FBQyxnREFBZ0QsQ0FBQyxFQUNsREksT0FBTyxDQUNSO0lBRUQsSUFBSUQsS0FBSyxFQUFFLHFCQUFPLDhEQUFDRSxLQUFHO2tCQUFDLDhCQUFzQjs7Ozs7WUFBTSxDQUFDO0lBRXBELElBQUksQ0FBQ0gsSUFBSSxFQUFFLHFCQUFPLDhEQUFDRyxLQUFHO2tCQUFDLGVBQWE7Ozs7O1lBQU0sQ0FBQztJQUUzQyxxQkFDRSw4REFBQ0EsS0FBRzs7WUFDREgsSUFBSSxDQUFDSSxNQUFNLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxDQUFDLGlCQUNqQiw4REFBQ0gsS0FBRzs4QkFDRiw0RUFBQ0ksR0FBQzt3QkFBZ0JDLElBQUksRUFBRSxTQUFTLEdBQUdGLENBQUMsQ0FBQ0csTUFBTTs7NEJBQ3pDSCxDQUFDLENBQUNJLEtBQUs7NEJBQUMsT0FBSzs0QkFBQ0osQ0FBQyxDQUFDSyxJQUFJOzt1QkFEZkwsQ0FBQyxDQUFDRyxNQUFNOzs7OzRCQUVaOzs7Ozt3QkFDQSxDQUNOOzBCQUNGLDhEQUFDRixHQUFDO2dCQUFDQyxJQUFJLEVBQUMsR0FBRzswQkFBQyxNQUFJOzs7OztvQkFBSTswQkFDcEIsOERBQUNJLElBQUU7Ozs7b0JBQUc7Ozs7OztZQUNGLENBQ047QUFDSixDQUFDO0FBRUQsZUFBZVYsT0FBTyxDQUFDVyxHQUFHLEVBQUU7SUFDMUIsTUFBTUMsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBQ0YsR0FBRyxDQUFDO0lBRTVCLE1BQU1HLElBQUksR0FBRyxNQUFNRixHQUFHLENBQUNFLElBQUksRUFBRTtJQUU3QixPQUFPQSxJQUFJLENBQUM7QUFDZCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVjZWl0YS0zLy4vcGFnZXMvbW92aWVzL2luZGV4LmpzPzUwMmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vdmllcygpIHtcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFxuICAgIGBodHRwOi8vd3d3Lm9tZGJhcGkuY29tLz9hcGlrZXk9Y2ZhYWRkZjEmcz1iYWdkYWRgLFxuICAgIGZldGNoZXJcbiAgKTtcblxuICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PmZhbGhhIG5hIHJlcXVpc2nDp8Ojby4uLjwvZGl2PjtcblxuICBpZiAoIWRhdGEpIHJldHVybiA8ZGl2PmNhcnJlZ2FuZG8uLi48L2Rpdj47XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAge2RhdGEuU2VhcmNoLm1hcCgobSkgPT4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxhIGtleT17bS5pbWRiSUR9IGhyZWY9e1wibW92aWVzL1wiICsgbS5pbWRiSUR9PlxuICAgICAgICAgICAge20uVGl0bGV9IC0tLSB7bS5ZZWFyfVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICAgIDxhIGhyZWY9XCIvXCI+SG9tZTwvYT5cbiAgICAgIDxiciAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5hc3luYyBmdW5jdGlvbiBmZXRjaGVyKHVybCkge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpO1xuXG4gIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xuXG4gIHJldHVybiBqc29uO1xufVxuIl0sIm5hbWVzIjpbInVzZVNXUiIsIk1vdmllcyIsImRhdGEiLCJlcnJvciIsImZldGNoZXIiLCJkaXYiLCJTZWFyY2giLCJtYXAiLCJtIiwiYSIsImhyZWYiLCJpbWRiSUQiLCJUaXRsZSIsIlllYXIiLCJiciIsInVybCIsInJlcyIsImZldGNoIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/movies/index.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/movies/index.js"));
module.exports = __webpack_exports__;

})();