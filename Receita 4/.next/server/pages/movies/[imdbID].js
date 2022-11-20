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
exports.id = "pages/movies/[imdbID]";
exports.ids = ["pages/movies/[imdbID]"];
exports.modules = {

/***/ "./pages/movies/[imdbID].js":
/*!**********************************!*\
  !*** ./pages/movies/[imdbID].js ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Movies)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__]);\nswr__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction Movies() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { imdbID  } = router.query;\n    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"http://www.omdbapi.com/?apikey=cfaaddf1&i=\" + imdbID, fetcher);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"falha na requisi\\xe7\\xe3o...\"\n    }, void 0, false, {\n        fileName: \"/home/israel/Documents/Faculdade/4\\xb0 Per\\xedodo/Programa\\xe7\\xe3o Web/Receita 4/pages/movies/[imdbID].js\",\n        lineNumber: 14,\n        columnNumber: 21\n    }, this);\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"carregando...\"\n    }, void 0, false, {\n        fileName: \"/home/israel/Documents/Faculdade/4\\xb0 Per\\xedodo/Programa\\xe7\\xe3o Web/Receita 4/pages/movies/[imdbID].js\",\n        lineNumber: 16,\n        columnNumber: 21\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: data.Poster\n                    }, void 0, false, {\n                        fileName: \"/home/israel/Documents/Faculdade/4\\xb0 Per\\xedodo/Programa\\xe7\\xe3o Web/Receita 4/pages/movies/[imdbID].js\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/home/israel/Documents/Faculdade/4\\xb0 Per\\xedodo/Programa\\xe7\\xe3o Web/Receita 4/pages/movies/[imdbID].js\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this),\n                    data.Title,\n                    \" --- \",\n                    data.Year\n                ]\n            }, void 0, true, {\n                fileName: \"/home/israel/Documents/Faculdade/4\\xb0 Per\\xedodo/Programa\\xe7\\xe3o Web/Receita 4/pages/movies/[imdbID].js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: \"./\",\n                children: \"Movies\"\n            }, void 0, false, {\n                fileName: \"/home/israel/Documents/Faculdade/4\\xb0 Per\\xedodo/Programa\\xe7\\xe3o Web/Receita 4/pages/movies/[imdbID].js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/israel/Documents/Faculdade/4\\xb0 Per\\xedodo/Programa\\xe7\\xe3o Web/Receita 4/pages/movies/[imdbID].js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\nasync function fetcher(url) {\n    const res = await fetch(url);\n    const json = await res.json();\n    return json;\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb3ZpZXMvW2ltZGJJRF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFBeUI7QUFFZTtBQUV6QixTQUFTRSxNQUFNLEdBQUc7SUFDL0IsTUFBTUMsTUFBTSxHQUFHRixzREFBUyxFQUFFO0lBQzFCLE1BQU0sRUFBRUcsTUFBTSxHQUFFLEdBQUdELE1BQU0sQ0FBQ0UsS0FBSztJQUUvQixNQUFNLEVBQUVDLElBQUksR0FBRUMsS0FBSyxHQUFFLEdBQUdQLCtDQUFNLENBQzVCLDRDQUE0QyxHQUFHSSxNQUFNLEVBQ3JESSxPQUFPLENBQ1I7SUFFRCxJQUFJRCxLQUFLLEVBQUUscUJBQU8sOERBQUNFLEtBQUc7a0JBQUMsOEJBQXNCOzs7OztZQUFNLENBQUM7SUFFcEQsSUFBSSxDQUFDSCxJQUFJLEVBQUUscUJBQU8sOERBQUNHLEtBQUc7a0JBQUMsZUFBYTs7Ozs7WUFBTSxDQUFDO0lBRTNDLHFCQUNFLDhEQUFDQSxLQUFHOzswQkFDRiw4REFBQ0EsS0FBRzs7a0NBQ0YsOERBQUNDLEtBQUc7d0JBQUNDLEdBQUcsRUFBRUwsSUFBSSxDQUFDTSxNQUFNOzs7Ozs0QkFBUTtrQ0FDN0IsOERBQUNDLElBQUU7Ozs7NEJBQUc7b0JBQ0xQLElBQUksQ0FBQ1EsS0FBSztvQkFBQyxPQUFLO29CQUFDUixJQUFJLENBQUNTLElBQUk7Ozs7OztvQkFDdkI7MEJBQ04sOERBQUNDLEdBQUM7Z0JBQUNDLElBQUksRUFBQyxJQUFJOzBCQUFDLFFBQU07Ozs7O29CQUFJOzs7Ozs7WUFDbkIsQ0FDTjtBQUNKLENBQUM7QUFFRCxlQUFlVCxPQUFPLENBQUNVLEdBQUcsRUFBRTtJQUMxQixNQUFNQyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFDRixHQUFHLENBQUM7SUFFNUIsTUFBTUcsSUFBSSxHQUFHLE1BQU1GLEdBQUcsQ0FBQ0UsSUFBSSxFQUFFO0lBRTdCLE9BQU9BLElBQUksQ0FBQztBQUNkLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWNlaXRhLTMvLi9wYWdlcy9tb3ZpZXMvW2ltZGJJRF0uanM/MzFkNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcblxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vdmllcygpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgaW1kYklEIH0gPSByb3V0ZXIucXVlcnk7XG5cbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFxuICAgIFwiaHR0cDovL3d3dy5vbWRiYXBpLmNvbS8/YXBpa2V5PWNmYWFkZGYxJmk9XCIgKyBpbWRiSUQsXG4gICAgZmV0Y2hlclxuICApO1xuXG4gIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+ZmFsaGEgbmEgcmVxdWlzacOnw6NvLi4uPC9kaXY+O1xuXG4gIGlmICghZGF0YSkgcmV0dXJuIDxkaXY+Y2FycmVnYW5kby4uLjwvZGl2PjtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aW1nIHNyYz17ZGF0YS5Qb3N0ZXJ9PjwvaW1nPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAge2RhdGEuVGl0bGV9IC0tLSB7ZGF0YS5ZZWFyfVxuICAgICAgPC9kaXY+XG4gICAgICA8YSBocmVmPVwiLi9cIj5Nb3ZpZXM8L2E+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoZXIodXJsKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCk7XG5cbiAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgcmV0dXJuIGpzb247XG59XG4iXSwibmFtZXMiOlsidXNlU1dSIiwidXNlUm91dGVyIiwiTW92aWVzIiwicm91dGVyIiwiaW1kYklEIiwicXVlcnkiLCJkYXRhIiwiZXJyb3IiLCJmZXRjaGVyIiwiZGl2IiwiaW1nIiwic3JjIiwiUG9zdGVyIiwiYnIiLCJUaXRsZSIsIlllYXIiLCJhIiwiaHJlZiIsInVybCIsInJlcyIsImZldGNoIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/movies/[imdbID].js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/movies/[imdbID].js"));
module.exports = __webpack_exports__;

})();