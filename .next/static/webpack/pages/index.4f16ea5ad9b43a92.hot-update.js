/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Comments.tsx":
/*!*********************************!*\
  !*** ./components/Comments.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _hooks_useComments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useComments */ \"./hooks/useComments.ts\");\n/* harmony import */ var _Comment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Comment */ \"./components/Comment.tsx\");\n/* harmony import */ var _CommentEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CommentEditor */ \"./components/CommentEditor.tsx\");\n/* harmony import */ var _hooks_useEvents_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useEvents.ts */ \"./hooks/useEvents.ts\");\n/* harmony import */ var _hooks_useEvents_ts__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_hooks_useEvents_ts__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Comments = function(param) {\n    var topic = param.topic;\n    var _this1 = _this;\n    var ref;\n    _s();\n    var query = (0,_hooks_useComments__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n        topic: topic\n    });\n    _hooks_useEvents_ts__WEBPACK_IMPORTED_MODULE_5___default()({\n        topic: topic\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n        children: [\n            query.isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Center, {\n                p: 8,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Spinner, {}, void 0, false, {\n                    fileName: \"/Users/sesouk/solidity/polygon-forum/components/Comments.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/sesouk/solidity/polygon-forum/components/Comments.tsx\",\n                lineNumber: 20,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Stack, {\n                spacing: 4,\n                children: [\n                    (ref = query.data) === null || ref === void 0 ? void 0 : ref.map(function(comment) {\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Comment__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            comment: comment\n                        }, comment.id, false, {\n                            fileName: \"/Users/sesouk/solidity/polygon-forum/components/Comments.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, _this1);\n                    }),\n                    query.isFetched && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CommentEditor__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        topic: topic\n                    }, void 0, false, {\n                        fileName: \"/Users/sesouk/solidity/polygon-forum/components/Comments.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 29\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sesouk/solidity/polygon-forum/components/Comments.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sesouk/solidity/polygon-forum/components/Comments.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, _this));\n};\n_s(Comments, \"LaJd8fjzu5ciA/qgv1FlTXBAZR0=\", false, function() {\n    return [\n        _hooks_useComments__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        (_hooks_useEvents_ts__WEBPACK_IMPORTED_MODULE_5___default())\n    ];\n});\n_c = Comments;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Comments);\nvar _c;\n$RefreshReg$(_c, \"Comments\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbW1lbnRzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQThCO0FBQ2dDO0FBQ2hCO0FBQ2Y7QUFDWTtBQUNFOzs7QUFNN0MsR0FBSyxDQUFDUyxRQUFRLEdBQTRDLFFBQVEsUUFBTyxDQUFDO1FBQWJDLEtBQUssU0FBTEEsS0FBSzs7UUFhekRDLEdBQVU7O0lBWmpCLEdBQUssQ0FBQ0EsS0FBSyxHQUFHTiw4REFBVyxDQUFDLENBQUM7UUFBQ0ssS0FBSyxFQUFMQSxLQUFLO0lBQUMsQ0FBQztJQUVuQ0YsMERBQVMsQ0FBQyxDQUFDO1FBQUNFLEtBQUssRUFBTEEsS0FBSztJQUFDLENBQUM7SUFFbkIsTUFBTSw2RUFDSFQsaURBQUc7O1lBQ0RVLEtBQUssQ0FBQ0MsU0FBUyxnRkFDYlIsb0RBQU07Z0JBQUNTLENBQUMsRUFBRSxDQUFDO3NHQUNUWCxxREFBTzs7Ozs7Ozs7Ozt3RkFHWEMsbURBQUs7Z0JBQUNXLE9BQU8sRUFBRSxDQUFDOztxQkFDZEgsR0FBVSxHQUFWQSxLQUFLLENBQUNJLElBQUksY0FBVkosR0FBVSxLQUFWQSxJQUFJLENBQUpBLENBQWUsR0FBZkEsSUFBSSxDQUFKQSxDQUFlLEdBQWZBLEdBQVUsQ0FBRUssR0FBRyxDQUFDLFFBQVEsQ0FBUEMsT0FBTztzQ0FDdkIsTUFBTSwrREFBTFgsZ0RBQU87NEJBQWtCVyxPQUFPLEVBQUVBLE9BQU87MkJBQTVCQSxPQUFPLENBQUNDLEVBQUU7Ozs7OztvQkFFekJQLEtBQUssQ0FBQ1EsU0FBUyxnRkFBS1osc0RBQWE7d0JBQUNHLEtBQUssRUFBRUEsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3ZELENBQUM7R0FyQktELFFBQVE7O1FBQ0VKLDBEQUFXO1FBRXpCRyw0REFBUzs7O0tBSExDLFFBQVE7QUF1QmQsK0RBQWVBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tZW50cy50c3g/MTc5YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgQm94LCBTcGlubmVyLCBTdGFjaywgQ2VudGVyIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIlxuaW1wb3J0IHVzZUNvbW1lbnRzIGZyb20gXCIuLi9ob29rcy91c2VDb21tZW50c1wiXG5pbXBvcnQgQ29tbWVudCBmcm9tIFwiLi9Db21tZW50XCJcbmltcG9ydCBDb21tZW50RWRpdG9yIGZyb20gXCIuL0NvbW1lbnRFZGl0b3JcIlxuaW1wb3J0IHVzZUV2ZW50cyBmcm9tIFwiLi4vaG9va3MvdXNlRXZlbnRzLnRzXCJcblxuaW50ZXJmYWNlIENvbW1lbnRzUHJvcHMge1xuICB0b3BpYzogc3RyaW5nO1xufVxuXG5jb25zdCBDb21tZW50czogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8Q29tbWVudHNQcm9wcz4gID0gKHsgdG9waWMgfSkgPT4ge1xuICBjb25zdCBxdWVyeSA9IHVzZUNvbW1lbnRzKHsgdG9waWMgfSlcblxuICB1c2VFdmVudHMoeyB0b3BpYyB9KVxuXG4gIHJldHVybiAoXG4gICAgPEJveD5cbiAgICAgIHtxdWVyeS5pc0xvYWRpbmcgJiYgKFxuICAgICAgICA8Q2VudGVyIHA9ezh9PlxuICAgICAgICAgIDxTcGlubmVyIC8+XG4gICAgICAgIDwvQ2VudGVyPlxuICAgICAgKX1cbiAgICAgIDxTdGFjayBzcGFjaW5nPXs0fT5cbiAgICAgICAge3F1ZXJ5LmRhdGE/Lm1hcCgoY29tbWVudCkgPT4gKFxuICAgICAgICAgIDxDb21tZW50IGtleT17Y29tbWVudC5pZH0gY29tbWVudD17Y29tbWVudH0gLz5cbiAgICAgICAgKSl9XG4gICAgICAgIHtxdWVyeS5pc0ZldGNoZWQgJiYgPENvbW1lbnRFZGl0b3IgdG9waWM9e3RvcGljfSAvPn1cbiAgICAgIDwvU3RhY2s+XG4gICAgPC9Cb3g+XG5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb21tZW50cyJdLCJuYW1lcyI6WyJSZWFjdCIsIkJveCIsIlNwaW5uZXIiLCJTdGFjayIsIkNlbnRlciIsInVzZUNvbW1lbnRzIiwiQ29tbWVudCIsIkNvbW1lbnRFZGl0b3IiLCJ1c2VFdmVudHMiLCJDb21tZW50cyIsInRvcGljIiwicXVlcnkiLCJpc0xvYWRpbmciLCJwIiwic3BhY2luZyIsImRhdGEiLCJtYXAiLCJjb21tZW50IiwiaWQiLCJpc0ZldGNoZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Comments.tsx\n");

/***/ }),

/***/ "./hooks/useEvents.ts":
/*!****************************!*\
  !*** ./hooks/useEvents.ts ***!
  \****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);


;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            var currentExports = module.__proto__.exports;
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ })

});