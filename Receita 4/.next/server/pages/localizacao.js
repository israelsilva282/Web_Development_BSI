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
exports.id = "pages/localizacao";
exports.ids = ["pages/localizacao"];
exports.modules = {

/***/ "./pages/localizacao.js":
/*!******************************!*\
  !*** ./pages/localizacao.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Location)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__]);\nswr__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction Location() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { imdbID  } = router.query;\n    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"https://extreme-ip-lookup.com/json/?key=bUGSZs7LZXoyY5hTMie7\", fetcher);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"falha na requisi\\xe7\\xe3o...\"\n    }, void 0, false, {\n        fileName: \"/home/israel/Documents/Faculdade/4\\xb0 Per\\xedodo/Programa\\xe7\\xe3o Web/Receita 4/pages/localizacao.js\",\n        lineNumber: 14,\n        columnNumber: 21\n    }, this);\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"carregando...\"\n    }, void 0, false, {\n        fileName: \"/home/israel/Documents/Faculdade/4\\xb0 Per\\xedodo/Programa\\xe7\\xe3o Web/Receita 4/pages/localizacao.js\",\n        lineNumber: 16,\n        columnNumber: 21\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            Object.keys(data).map((v)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                children: [\n                                    v,\n                                    \": \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/israel/Documents/Faculdade/4\\xb0 Per\\xedodo/Programa\\xe7\\xe3o Web/Receita 4/pages/localizacao.js\",\n                                lineNumber: 23,\n                                columnNumber: 13\n                            }, this),\n                            data[v]\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/israel/Documents/Faculdade/4\\xb0 Per\\xedodo/Programa\\xe7\\xe3o Web/Receita 4/pages/localizacao.js\",\n                        lineNumber: 22,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/israel/Documents/Faculdade/4\\xb0 Per\\xedodo/Programa\\xe7\\xe3o Web/Receita 4/pages/localizacao.js\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: \"/\",\n                children: \"Home\"\n            }, void 0, false, {\n                fileName: \"/home/israel/Documents/Faculdade/4\\xb0 Per\\xedodo/Programa\\xe7\\xe3o Web/Receita 4/pages/localizacao.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/israel/Documents/Faculdade/4\\xb0 Per\\xedodo/Programa\\xe7\\xe3o Web/Receita 4/pages/localizacao.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\nasync function fetcher(url) {\n    const res = await fetch(url);\n    const json = await res.json();\n    return json;\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2NhbGl6YWNhby5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUF5QjtBQUVlO0FBRXpCLFNBQVNFLFFBQVEsR0FBRztJQUNqQyxNQUFNQyxNQUFNLEdBQUdGLHNEQUFTLEVBQUU7SUFDMUIsTUFBTSxFQUFFRyxNQUFNLEdBQUUsR0FBR0QsTUFBTSxDQUFDRSxLQUFLO0lBRS9CLE1BQU0sRUFBRUMsSUFBSSxHQUFFQyxLQUFLLEdBQUUsR0FBR1AsK0NBQU0sQ0FDNUIsOERBQThELEVBQzlEUSxPQUFPLENBQ1I7SUFFRCxJQUFJRCxLQUFLLEVBQUUscUJBQU8sOERBQUNFLEtBQUc7a0JBQUMsOEJBQXNCOzs7OztZQUFNLENBQUM7SUFFcEQsSUFBSSxDQUFDSCxJQUFJLEVBQUUscUJBQU8sOERBQUNHLEtBQUc7a0JBQUMsZUFBYTs7Ozs7WUFBTSxDQUFDO0lBRTNDLHFCQUNFLDhEQUFDQSxLQUFHOztZQUNEQyxNQUFNLENBQUNDLElBQUksQ0FBQ0wsSUFBSSxDQUFDLENBQUNNLEdBQUcsQ0FBQyxDQUFDQyxDQUFDLGlCQUN2Qiw4REFBQ0osS0FBRzs4QkFDRiw0RUFBQ0ssR0FBQzs7MENBQ0EsOERBQUNDLEdBQUM7O29DQUFFRixDQUFDO29DQUFDLElBQUU7Ozs7OztvQ0FBSTs0QkFDWFAsSUFBSSxDQUFDTyxDQUFDLENBQUM7Ozs7Ozs0QkFDTjs7Ozs7d0JBQ0EsQ0FDTjswQkFDRiw4REFBQ0csR0FBQztnQkFBQ0MsSUFBSSxFQUFDLEdBQUc7MEJBQUMsTUFBSTs7Ozs7b0JBQUk7Ozs7OztZQUNoQixDQUNOO0FBQ0osQ0FBQztBQUVELGVBQWVULE9BQU8sQ0FBQ1UsR0FBRyxFQUFFO0lBQzFCLE1BQU1DLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUNGLEdBQUcsQ0FBQztJQUU1QixNQUFNRyxJQUFJLEdBQUcsTUFBTUYsR0FBRyxDQUFDRSxJQUFJLEVBQUU7SUFFN0IsT0FBT0EsSUFBSSxDQUFDO0FBQ2QsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlY2VpdGEtMy8uL3BhZ2VzL2xvY2FsaXphY2FvLmpzPzkzMGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XG5cbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2NhdGlvbigpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgaW1kYklEIH0gPSByb3V0ZXIucXVlcnk7XG5cbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFxuICAgIFwiaHR0cHM6Ly9leHRyZW1lLWlwLWxvb2t1cC5jb20vanNvbi8/a2V5PWJVR1NaczdMWlhveVk1aFRNaWU3XCIsXG4gICAgZmV0Y2hlclxuICApO1xuXG4gIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+ZmFsaGEgbmEgcmVxdWlzacOnw6NvLi4uPC9kaXY+O1xuXG4gIGlmICghZGF0YSkgcmV0dXJuIDxkaXY+Y2FycmVnYW5kby4uLjwvZGl2PjtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7T2JqZWN0LmtleXMoZGF0YSkubWFwKCh2KSA9PiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICA8Yj57dn06IDwvYj5cbiAgICAgICAgICAgIHtkYXRhW3ZdfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICAgIDxhIGhyZWY9XCIvXCI+SG9tZTwvYT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hlcih1cmwpIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsKTtcblxuICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICByZXR1cm4ganNvbjtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTV1IiLCJ1c2VSb3V0ZXIiLCJMb2NhdGlvbiIsInJvdXRlciIsImltZGJJRCIsInF1ZXJ5IiwiZGF0YSIsImVycm9yIiwiZmV0Y2hlciIsImRpdiIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJ2IiwicCIsImIiLCJhIiwiaHJlZiIsInVybCIsInJlcyIsImZldGNoIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/localizacao.js\n");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/localizacao.js"));
module.exports = __webpack_exports__;

})();