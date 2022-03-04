"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/AuthButton.tsx":
/*!***********************************!*\
  !*** ./components/AuthButton.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/react-hot-toast.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar AuthButton = function(props) {\n    var ref3;\n    _s();\n    var ref1 = _slicedToArray((0,wagmi__WEBPACK_IMPORTED_MODULE_2__.useConnect)(), 2), connectQuery = ref1[0], connect = ref1[1];\n    var ref2 = _slicedToArray((0,wagmi__WEBPACK_IMPORTED_MODULE_2__.useAccount)(), 1), accountQuery = ref2[0];\n    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(function() {\n        var ref;\n        if (((ref = connectQuery.error) === null || ref === void 0 ? void 0 : ref.name) === \"ConnectorNotFoundError\") {\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].error(\"MetaMask extension required to sign in\");\n        }\n    }, [\n        connectQuery.error\n    ]);\n    if (!((ref3 = accountQuery.data) === null || ref3 === void 0 ? void 0 : ref3.address)) {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, _objectSpread({}, props, {\n            onClick: function() {\n                connect(connectQuery.data.connectors[0]);\n            },\n            children: \"Sign In\"\n        }), void 0, false, {\n            fileName: \"/Users/sesouk/solidity/polygon-forum/components/AuthButton.tsx\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, _this));\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, _objectSpread({}, props, {\n        children: props.children\n    }), void 0, false, {\n        fileName: \"/Users/sesouk/solidity/polygon-forum/components/AuthButton.tsx\",\n        lineNumber: 31,\n        columnNumber: 10\n    }, _this));\n};\n_s(AuthButton, \"fe/aAt1/AeRY+p4mAqwSYpylpEg=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_2__.useConnect,\n        wagmi__WEBPACK_IMPORTED_MODULE_2__.useAccount\n    ];\n});\n_c = AuthButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthButton);\nvar _c;\n$RefreshReg$(_c, \"AuthButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0F1dGhCdXR0b24udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBOEI7QUFDd0I7QUFDUjtBQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUluQyxHQUFLLENBQUNLLFVBQVUsR0FBNkMsUUFBUSxDQUFQQyxLQUFLLEVBQUssQ0FBQztRQVVsRUMsSUFBaUI7O0lBVHRCLEdBQUssQ0FBMkJKLElBQVksa0JBQVpBLGlEQUFVLFFBQW5DSyxZQUFZLEdBQWFMLElBQVksS0FBdkJNLE9BQU8sR0FBSU4sSUFBWTtJQUM1QyxHQUFLLENBQWtCRCxJQUFZLGtCQUFaQSxpREFBVSxRQUExQkssWUFBWSxHQUFJTCxJQUFZO0lBRW5DRiw0Q0FBZSxDQUFDLFFBQ2xCLEdBRHdCLENBQUM7WUFDakJRLEdBQWtCO1FBQXRCLEVBQUUsSUFBRUEsR0FBa0IsR0FBbEJBLFlBQVksQ0FBQ0csS0FBSyxjQUFsQkgsR0FBa0IsS0FBbEJBLElBQUksQ0FBSkEsQ0FBd0IsR0FBeEJBLElBQUksQ0FBSkEsQ0FBd0IsR0FBeEJBLEdBQWtCLENBQUVJLElBQUksTUFBSyxDQUF3Qix5QkFBRSxDQUFDO1lBQzFEUiw2REFBVyxDQUFDLENBQXdDO1FBQ3RELENBQUM7SUFDSCxDQUFDLEVBQUUsQ0FBQ0k7UUFBQUEsWUFBWSxDQUFDRyxLQUFLO0lBQUEsQ0FBQztJQUV2QixFQUFFLEtBQUdKLElBQWlCLEdBQWpCQSxZQUFZLENBQUNNLElBQUksY0FBakJOLElBQWlCLEtBQWpCQSxJQUFJLENBQUpBLENBQTBCLEdBQTFCQSxJQUFJLENBQUpBLENBQTBCLEdBQTFCQSxJQUFpQixDQUFFTyxPQUFPLEdBQUUsQ0FBQztRQUNoQyxNQUFNLDZFQUNIYixvREFBTSxvQkFDREssS0FBSztZQUNUUyxPQUFPLEVBQUUsUUFDakIsR0FEdUIsQ0FBQztnQkFDZE4sT0FBTyxDQUFDRCxZQUFZLENBQUNLLElBQUksQ0FBQ0csVUFBVSxDQUFDLENBQUM7WUFDeEMsQ0FBQztzQkFDRixDQUVEOzs7Ozs7SUFFSixDQUFDO0lBRUQsTUFBTSw2RUFBRWYsb0RBQU0sb0JBQUtLLEtBQUs7a0JBQUdBLEtBQUssQ0FBQ1csUUFBUTs7Ozs7O0FBQzNDLENBQUM7R0F4QktaLFVBQVU7O1FBQ2tCRiw2Q0FBVTtRQUNuQkQsNkNBQVU7OztLQUY3QkcsVUFBVTtBQTBCaEIsK0RBQWVBLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0F1dGhCdXR0b24udHN4P2FlMGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCdXR0b24sIEJ1dHRvblByb3BzIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7IHVzZUFjY291bnQsIHVzZUNvbm5lY3QgfSBmcm9tIFwid2FnbWlcIjtcbmltcG9ydCB0b2FzdCBmcm9tIFwicmVhY3QtaG90LXRvYXN0XCI7XG5cbmludGVyZmFjZSBBdXRoQnV0dG9uUHJvcHMgZXh0ZW5kcyBCdXR0b25Qcm9wcyB7fVxuXG5jb25zdCBBdXRoQnV0dG9uOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxBdXRoQnV0dG9uUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFtjb25uZWN0UXVlcnksIGNvbm5lY3RdID0gdXNlQ29ubmVjdCgpO1xuICBjb25zdCBbYWNjb3VudFF1ZXJ5XSA9IHVzZUFjY291bnQoKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjb25uZWN0UXVlcnkuZXJyb3I/Lm5hbWUgPT09IFwiQ29ubmVjdG9yTm90Rm91bmRFcnJvclwiKSB7XG4gICAgICB0b2FzdC5lcnJvcihcIk1ldGFNYXNrIGV4dGVuc2lvbiByZXF1aXJlZCB0byBzaWduIGluXCIpO1xuICAgIH1cbiAgfSwgW2Nvbm5lY3RRdWVyeS5lcnJvcl0pO1xuXG4gIGlmICghYWNjb3VudFF1ZXJ5LmRhdGE/LmFkZHJlc3MpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEJ1dHRvblxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBjb25uZWN0KGNvbm5lY3RRdWVyeS5kYXRhLmNvbm5lY3RvcnNbMF0pO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICBTaWduIEluXG4gICAgICA8L0J1dHRvbj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIDxCdXR0b24gey4uLnByb3BzfT57cHJvcHMuY2hpbGRyZW59PC9CdXR0b24+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXV0aEJ1dHRvbjsiXSwibmFtZXMiOlsiUmVhY3QiLCJCdXR0b24iLCJ1c2VBY2NvdW50IiwidXNlQ29ubmVjdCIsInRvYXN0IiwiQXV0aEJ1dHRvbiIsInByb3BzIiwiYWNjb3VudFF1ZXJ5IiwiY29ubmVjdFF1ZXJ5IiwiY29ubmVjdCIsInVzZUVmZmVjdCIsImVycm9yIiwibmFtZSIsImRhdGEiLCJhZGRyZXNzIiwib25DbGljayIsImNvbm5lY3RvcnMiLCJjaGlsZHJlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/AuthButton.tsx\n");

/***/ }),

/***/ "./components/CommentEditor.tsx":
/*!**************************************!*\
  !*** ./components/CommentEditor.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _davatar_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @davatar/react */ \"./node_modules/@davatar/react/dist/index.js\");\n/* harmony import */ var _davatar_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_davatar_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _AuthButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AuthButton */ \"./components/AuthButton.tsx\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n/* harmony import */ var _hooks_useAddcomments__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useAddcomments */ \"./hooks/useAddcomments.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar CommentEditor = function(param) {\n    var topic = param.topic;\n    var ref;\n    _s();\n    var ref1 = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1__.useState(\"\"), 2), message = ref1[0], setMessage = ref1[1];\n    var mutation = (0,_hooks_useAddcomments__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    var ref2 = _slicedToArray((0,wagmi__WEBPACK_IMPORTED_MODULE_5__.useAccount)(), 1), accountQuery = ref2[0];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Stack, {\n        spacing: 3,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.HStack, {\n                spacing: 3,\n                alignItems: \"start\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_davatar_react__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        size: 48,\n                        address: ((ref = accountQuery.data) === null || ref === void 0 ? void 0 : ref.address) || ethers__WEBPACK_IMPORTED_MODULE_7__.constants.AddressZero\n                    }, void 0, false, {\n                        fileName: \"/Users/sesouk/solidity/polygon-forum/components/CommentEditor.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Textarea, {\n                        value: message,\n                        onChange: function(e) {\n                            return setMessage(e.target.value);\n                        },\n                        placeholder: \"Write a message..\",\n                        p: 3,\n                        flex: 1,\n                        bg: \"whiteAlpha.100\",\n                        rounded: \"2xl\",\n                        fontSize: \"lg\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sesouk/solidity/polygon-forum/components/CommentEditor.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sesouk/solidity/polygon-forum/components/CommentEditor.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AuthButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                size: \"sm\",\n                colorScheme: \"pink\",\n                alignSelf: \"flex-end\",\n                onClick: function() {\n                    mutation.mutateAsync({\n                        message: message,\n                        topic: topic\n                    }).then(function() {\n                        return setMessage(\"\");\n                    });\n                },\n                isLoading: mutation.isLoading,\n                children: \"Submit\"\n            }, void 0, false, {\n                fileName: \"/Users/sesouk/solidity/polygon-forum/components/CommentEditor.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sesouk/solidity/polygon-forum/components/CommentEditor.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, _this));\n};\n_s(CommentEditor, \"fqF+NqQmsnxczIvS5NfmfRgUWB4=\", false, function() {\n    return [\n        _hooks_useAddcomments__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        wagmi__WEBPACK_IMPORTED_MODULE_5__.useAccount\n    ];\n});\n_c = CommentEditor;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CommentEditor);\nvar _c;\n$RefreshReg$(_c, \"CommentEditor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbW1lbnRFZGl0b3IudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBQ29DO0FBQ2hDO0FBQ0M7QUFDRTtBQUNIO0FBQ2lCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTW5ELEdBQUssQ0FBQ1MsYUFBYSxHQUFnRCxRQUM5RCxRQUNDLENBQUM7UUFETEMsS0FBSyxTQUFMQSxLQUFLO1FBV1lDLEdBQWlCOztJQVRsQyxHQUFLLENBQXlCWCxJQUFrQixrQkFBbEJBLDJDQUFjLENBQUMsQ0FBRSxRQUF4Q2EsT0FBTyxHQUFnQmIsSUFBa0IsS0FBaENjLFVBQVUsR0FBSWQsSUFBa0I7SUFDaEQsR0FBSyxDQUFDZSxRQUFRLEdBQUdQLGlFQUFhO0lBQzlCLEdBQUssQ0FBa0JELElBQVksa0JBQVpBLGlEQUFVLFFBQTFCSSxZQUFZLEdBQUlKLElBQVk7SUFFbkMsTUFBTSw2RUFDSEwsbURBQUs7UUFBQ2MsT0FBTyxFQUFFLENBQUM7O3dGQUNkZixvREFBTTtnQkFBQ2UsT0FBTyxFQUFFLENBQUM7Z0JBQUVDLFVBQVUsRUFBQyxDQUFPOztnR0FDbkNaLHVEQUFNO3dCQUNMYSxJQUFJLEVBQUUsRUFBRTt3QkFDUkMsT0FBTyxJQUFFUixHQUFpQixHQUFqQkEsWUFBWSxDQUFDUyxJQUFJLGNBQWpCVCxHQUFpQixLQUFqQkEsSUFBSSxDQUFKQSxDQUEwQixHQUExQkEsSUFBSSxDQUFKQSxDQUEwQixHQUExQkEsR0FBaUIsQ0FBRVEsT0FBTyxLQUFJZix5REFBcUI7Ozs7OztnR0FFN0RELHNEQUFRO3dCQUNQbUIsS0FBSyxFQUFFVCxPQUFPO3dCQUNkVSxRQUFRLEVBQUUsUUFBUSxDQUFQQyxDQUFDOzRCQUFLVixNQUFNLENBQU5BLFVBQVUsQ0FBQ1UsQ0FBQyxDQUFDQyxNQUFNLENBQUNILEtBQUs7O3dCQUMxQ0ksV0FBVyxFQUFDLENBQW1CO3dCQUMvQkMsQ0FBQyxFQUFFLENBQUM7d0JBQ0pDLElBQUksRUFBRSxDQUFDO3dCQUNQQyxFQUFFLEVBQUMsQ0FBZ0I7d0JBQ25CQyxPQUFPLEVBQUMsQ0FBSzt3QkFDYkMsUUFBUSxFQUFDLENBQUk7Ozs7Ozs7Ozs7Ozt3RkFHaEJ6QixtREFBVTtnQkFDVFksSUFBSSxFQUFDLENBQUk7Z0JBQ1RjLFdBQVcsRUFBQyxDQUFNO2dCQUNsQkMsU0FBUyxFQUFDLENBQVU7Z0JBQ3BCQyxPQUFPLEVBQUUsUUFDakIsR0FEdUIsQ0FBQztvQkFDZG5CLFFBQVEsQ0FDTG9CLFdBQVcsQ0FBQyxDQUFDO3dCQUNadEIsT0FBTyxFQUFQQSxPQUFPO3dCQUNQSCxLQUFLLEVBQUxBLEtBQUs7b0JBQ1AsQ0FBQyxFQUNBMEIsSUFBSSxDQUFDLFFBQVE7d0JBQUZ0QixNQUFNLENBQU5BLFVBQVUsQ0FBQyxDQUFFOztnQkFDN0IsQ0FBQztnQkFDRHVCLFNBQVMsRUFBRXRCLFFBQVEsQ0FBQ3NCLFNBQVM7MEJBQzlCLENBRUQ7Ozs7Ozs7Ozs7OztBQUdOLENBQUM7R0EzQ0s1QixhQUFhOztRQUlBRCw2REFBYTtRQUNQRCw2Q0FBVTs7O0tBTDdCRSxhQUFhO0FBNkNuQiwrREFBZUEsYUFBYSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ29tbWVudEVkaXRvci50c3g/MmRhYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiwgSFN0YWNrLCBTdGFjaywgVGV4dGFyZWEgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgY29uc3RhbnRzIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IEF2YXRhciBmcm9tIFwiQGRhdmF0YXIvcmVhY3RcIjtcbmltcG9ydCBBdXRoQnV0dG9uIGZyb20gXCIuL0F1dGhCdXR0b25cIjtcbmltcG9ydCB7IHVzZUFjY291bnQgfSBmcm9tIFwid2FnbWlcIjtcbmltcG9ydCB1c2VBZGRDb21tZW50IGZyb20gXCIuLi9ob29rcy91c2VBZGRjb21tZW50c1wiXG5cbmludGVyZmFjZSBDb21tZW50RWRpdG9yUHJvcHMge1xuICB0b3BpYzogc3RyaW5nO1xufVxuXG5jb25zdCBDb21tZW50RWRpdG9yOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxDb21tZW50RWRpdG9yUHJvcHM+ID0gKHtcbiAgdG9waWMsXG59KSA9PiB7XG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBtdXRhdGlvbiA9IHVzZUFkZENvbW1lbnQoKTtcbiAgY29uc3QgW2FjY291bnRRdWVyeV0gPSB1c2VBY2NvdW50KCk7XG5cbiAgcmV0dXJuIChcbiAgICA8U3RhY2sgc3BhY2luZz17M30+XG4gICAgICA8SFN0YWNrIHNwYWNpbmc9ezN9IGFsaWduSXRlbXM9XCJzdGFydFwiPlxuICAgICAgICA8QXZhdGFyXG4gICAgICAgICAgc2l6ZT17NDh9XG4gICAgICAgICAgYWRkcmVzcz17YWNjb3VudFF1ZXJ5LmRhdGE/LmFkZHJlc3MgfHwgY29uc3RhbnRzLkFkZHJlc3NaZXJvfVxuICAgICAgICAvPlxuICAgICAgICA8VGV4dGFyZWFcbiAgICAgICAgICB2YWx1ZT17bWVzc2FnZX1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV3JpdGUgYSBtZXNzYWdlLi5cIlxuICAgICAgICAgIHA9ezN9XG4gICAgICAgICAgZmxleD17MX1cbiAgICAgICAgICBiZz1cIndoaXRlQWxwaGEuMTAwXCJcbiAgICAgICAgICByb3VuZGVkPVwiMnhsXCJcbiAgICAgICAgICBmb250U2l6ZT1cImxnXCJcbiAgICAgICAgLz5cbiAgICAgIDwvSFN0YWNrPlxuICAgICAgPEF1dGhCdXR0b25cbiAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgY29sb3JTY2hlbWU9XCJwaW5rXCJcbiAgICAgICAgYWxpZ25TZWxmPVwiZmxleC1lbmRcIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgbXV0YXRpb25cbiAgICAgICAgICAgIC5tdXRhdGVBc3luYyh7XG4gICAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgICAgICAgIHRvcGljLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHNldE1lc3NhZ2UoXCJcIikpO1xuICAgICAgICB9fVxuICAgICAgICBpc0xvYWRpbmc9e211dGF0aW9uLmlzTG9hZGluZ31cbiAgICAgID5cbiAgICAgICAgU3VibWl0XG4gICAgICA8L0F1dGhCdXR0b24+XG4gICAgPC9TdGFjaz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRFZGl0b3I7Il0sIm5hbWVzIjpbIlJlYWN0IiwiSFN0YWNrIiwiU3RhY2siLCJUZXh0YXJlYSIsImNvbnN0YW50cyIsIkF2YXRhciIsIkF1dGhCdXR0b24iLCJ1c2VBY2NvdW50IiwidXNlQWRkQ29tbWVudCIsIkNvbW1lbnRFZGl0b3IiLCJ0b3BpYyIsImFjY291bnRRdWVyeSIsInVzZVN0YXRlIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJtdXRhdGlvbiIsInNwYWNpbmciLCJhbGlnbkl0ZW1zIiwic2l6ZSIsImFkZHJlc3MiLCJkYXRhIiwiQWRkcmVzc1plcm8iLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwicCIsImZsZXgiLCJiZyIsInJvdW5kZWQiLCJmb250U2l6ZSIsImNvbG9yU2NoZW1lIiwiYWxpZ25TZWxmIiwib25DbGljayIsIm11dGF0ZUFzeW5jIiwidGhlbiIsImlzTG9hZGluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/CommentEditor.tsx\n");

/***/ })

});