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
exports.id = "pages/movies2";
exports.ids = ["pages/movies2"];
exports.modules = {

/***/ "./pages/movies2/index.js":
/*!********************************!*\
  !*** ./pages/movies2/index.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Movies)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"swr\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__]);\nswr__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nfunction Movies() {\n    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(`http://www.omdbapi.com/?apikey=cfaaddf1&s=bagdad`, fetcher);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"falha na requisi\\xe7\\xe3o...\"\n    }, void 0, false, {\n        fileName: \"/home/israel/Documents/Faculdade/4\\xb0 Per\\xedodo/Programa\\xe7\\xe3o Web/Receita 4/pages/movies2/index.js\",\n        lineNumber: 9,\n        columnNumber: 21\n    }, this);\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"carregando...\"\n    }, void 0, false, {\n        fileName: \"/home/israel/Documents/Faculdade/4\\xb0 Per\\xedodo/Programa\\xe7\\xe3o Web/Receita 4/pages/movies2/index.js\",\n        lineNumber: 11,\n        columnNumber: 21\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            data.Search.map((m)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"movies/\" + m.imdbID,\n                        children: [\n                            m.Title,\n                            \" --- \",\n                            m.Year\n                        ]\n                    }, m.imdbID, true, {\n                        fileName: \"/home/israel/Documents/Faculdade/4\\xb0 Per\\xedodo/Programa\\xe7\\xe3o Web/Receita 4/pages/movies2/index.js\",\n                        lineNumber: 17,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/israel/Documents/Faculdade/4\\xb0 Per\\xedodo/Programa\\xe7\\xe3o Web/Receita 4/pages/movies2/index.js\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: \"/\",\n                children: \"Home\"\n            }, void 0, false, {\n                fileName: \"/home/israel/Documents/Faculdade/4\\xb0 Per\\xedodo/Programa\\xe7\\xe3o Web/Receita 4/pages/movies2/index.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/home/israel/Documents/Faculdade/4\\xb0 Per\\xedodo/Programa\\xe7\\xe3o Web/Receita 4/pages/movies2/index.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/israel/Documents/Faculdade/4\\xb0 Per\\xedodo/Programa\\xe7\\xe3o Web/Receita 4/pages/movies2/index.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\nasync function fetcher(url) {\n    const res = await fetch(url);\n    const json = await res.json();\n    return json;\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb3ZpZXMyL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUF5QjtBQUVWLFNBQVNDLE1BQU0sR0FBRztJQUMvQixNQUFNLEVBQUVDLElBQUksR0FBRUMsS0FBSyxHQUFFLEdBQUdILCtDQUFNLENBQzVCLENBQUMsZ0RBQWdELENBQUMsRUFDbERJLE9BQU8sQ0FDUjtJQUVELElBQUlELEtBQUssRUFBRSxxQkFBTyw4REFBQ0UsS0FBRztrQkFBQyw4QkFBc0I7Ozs7O1lBQU0sQ0FBQztJQUVwRCxJQUFJLENBQUNILElBQUksRUFBRSxxQkFBTyw4REFBQ0csS0FBRztrQkFBQyxlQUFhOzs7OztZQUFNLENBQUM7SUFFM0MscUJBQ0UsOERBQUNBLEtBQUc7O1lBQ0RILElBQUksQ0FBQ0ksTUFBTSxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsQ0FBQyxpQkFDakIsOERBQUNILEtBQUc7OEJBQ0YsNEVBQUNJLEdBQUM7d0JBQWdCQyxJQUFJLEVBQUUsU0FBUyxHQUFHRixDQUFDLENBQUNHLE1BQU07OzRCQUN6Q0gsQ0FBQyxDQUFDSSxLQUFLOzRCQUFDLE9BQUs7NEJBQUNKLENBQUMsQ0FBQ0ssSUFBSTs7dUJBRGZMLENBQUMsQ0FBQ0csTUFBTTs7Ozs0QkFFWjs7Ozs7d0JBQ0EsQ0FDTjswQkFDRiw4REFBQ0YsR0FBQztnQkFBQ0MsSUFBSSxFQUFDLEdBQUc7MEJBQUMsTUFBSTs7Ozs7b0JBQUk7MEJBQ3BCLDhEQUFDSSxJQUFFOzs7O29CQUFHOzs7Ozs7WUFDRixDQUNOO0FBQ0osQ0FBQztBQUVELGVBQWVWLE9BQU8sQ0FBQ1csR0FBRyxFQUFFO0lBQzFCLE1BQU1DLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUNGLEdBQUcsQ0FBQztJQUU1QixNQUFNRyxJQUFJLEdBQUcsTUFBTUYsR0FBRyxDQUFDRSxJQUFJLEVBQUU7SUFFN0IsT0FBT0EsSUFBSSxDQUFDO0FBQ2QsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlY2VpdGEtMy8uL3BhZ2VzL21vdmllczIvaW5kZXguanM/YjM4MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW92aWVzKCkge1xuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXG4gICAgYGh0dHA6Ly93d3cub21kYmFwaS5jb20vP2FwaWtleT1jZmFhZGRmMSZzPWJhZ2RhZGAsXG4gICAgZmV0Y2hlclxuICApO1xuXG4gIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+ZmFsaGEgbmEgcmVxdWlzacOnw6NvLi4uPC9kaXY+O1xuXG4gIGlmICghZGF0YSkgcmV0dXJuIDxkaXY+Y2FycmVnYW5kby4uLjwvZGl2PjtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7ZGF0YS5TZWFyY2gubWFwKChtKSA9PiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGEga2V5PXttLmltZGJJRH0gaHJlZj17XCJtb3ZpZXMvXCIgKyBtLmltZGJJRH0+XG4gICAgICAgICAgICB7bS5UaXRsZX0gLS0tIHttLlllYXJ9XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgICAgPGEgaHJlZj1cIi9cIj5Ib21lPC9hPlxuICAgICAgPGJyIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoZXIodXJsKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCk7XG5cbiAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgcmV0dXJuIGpzb247XG59XG4iXSwibmFtZXMiOlsidXNlU1dSIiwiTW92aWVzIiwiZGF0YSIsImVycm9yIiwiZmV0Y2hlciIsImRpdiIsIlNlYXJjaCIsIm1hcCIsIm0iLCJhIiwiaHJlZiIsImltZGJJRCIsIlRpdGxlIiwiWWVhciIsImJyIiwidXJsIiwicmVzIiwiZmV0Y2giLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/movies2/index.js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/movies2/index.js"));
module.exports = __webpack_exports__;

})();