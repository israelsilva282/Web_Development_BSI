"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/movies2",{

/***/ "./pages/movies2.js":
/*!**************************!*\
  !*** ./pages/movies2.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Movies; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar __N_SSP = true;\nfunction Movies(param) {\n    var data = param.data;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: data.Poster\n                    }, void 0, false, {\n                        fileName: \"/home/israel/Documents/Faculdade/4\\xb0 Per\\xedodo/Programa\\xe7\\xe3o Web/Receita 4/pages/movies2.js\",\n                        lineNumber: 7,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/home/israel/Documents/Faculdade/4\\xb0 Per\\xedodo/Programa\\xe7\\xe3o Web/Receita 4/pages/movies2.js\",\n                        lineNumber: 7,\n                        columnNumber: 46\n                    }, this),\n                    data.Title,\n                    \" --- \",\n                    data.Year\n                ]\n            }, void 0, true, {\n                fileName: \"/home/israel/Documents/Faculdade/4\\xb0 Per\\xedodo/Programa\\xe7\\xe3o Web/Receita 4/pages/movies2.js\",\n                lineNumber: 6,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: \"./\",\n                children: \"Movies2\"\n            }, void 0, false, {\n                fileName: \"/home/israel/Documents/Faculdade/4\\xb0 Per\\xedodo/Programa\\xe7\\xe3o Web/Receita 4/pages/movies2.js\",\n                lineNumber: 10,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/israel/Documents/Faculdade/4\\xb0 Per\\xedodo/Programa\\xe7\\xe3o Web/Receita 4/pages/movies2.js\",\n        lineNumber: 5,\n        columnNumber: 9\n    }, this);\n}\n_c = Movies;\nvar _c;\n$RefreshReg$(_c, \"Movies\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb3ZpZXMyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQXVDOztBQUV4QixTQUFTQyxNQUFNLENBQUMsS0FBTSxFQUFDO1FBQVAsSUFBSyxHQUFMLEtBQU0sQ0FBTEMsSUFBSTtJQUNoQyxxQkFDSSw4REFBQ0MsS0FBRzs7MEJBQ0EsOERBQUNBLEtBQUc7O2tDQUNBLDhEQUFDQyxLQUFHO3dCQUFDQyxHQUFHLEVBQUVILElBQUksQ0FBQ0ksTUFBTTs7Ozs7NEJBQVE7a0NBQUEsOERBQUNDLElBQUU7Ozs7NEJBQUU7b0JBQ2pDTCxJQUFJLENBQUNNLEtBQUs7b0JBQUMsT0FBSztvQkFBQ04sSUFBSSxDQUFDTyxJQUFJOzs7Ozs7b0JBQ3pCOzBCQUNOLDhEQUFDQyxHQUFDO2dCQUFDQyxJQUFJLEVBQUMsSUFBSTswQkFBQyxTQUFPOzs7OztvQkFBSTs7Ozs7O1lBQ3RCLENBQ1Q7QUFFTCxDQUFDO0FBWHVCVixLQUFBQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL21vdmllczIuanM/ODNiOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW92aWVzKHtkYXRhfSl7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2RhdGEuUG9zdGVyfT48L2ltZz48YnIvPlxuICAgICAgICAgICAgICAgIHtkYXRhLlRpdGxlfSAtLS0ge2RhdGEuWWVhcn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGEgaHJlZj0nLi8nPk1vdmllczI8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICkgICAgXG5cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KXtcbiAgICBjb25zdCB7IGltZGJJRCB9ID0gY29udGV4dC5xdWVyeTtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly93d3cub21kYmFwaS5jb20vP2FwaWtleT1jZmFhZGRmMSZpPVwiICsgaW1kYklEKVxuICAgIGNvbnN0IGRhdGEgPSByZXMuanNvbigpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGRhdGE6IHt9LFxuICAgICAgICB9XG4gICAgfVxufSJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJNb3ZpZXMiLCJkYXRhIiwiZGl2IiwiaW1nIiwic3JjIiwiUG9zdGVyIiwiYnIiLCJUaXRsZSIsIlllYXIiLCJhIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/movies2.js\n"));

/***/ })

});