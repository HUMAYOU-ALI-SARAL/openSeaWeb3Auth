"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/nft/page",{

/***/ "(app-pages-browser)/./src/Component/Popup.css":
/*!*********************************!*\
  !*** ./src/Component/Popup.css ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"01accaf8f575\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9Db21wb25lbnQvUG9wdXAuY3NzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxpRUFBZSxjQUFjO0FBQzdCLElBQUksSUFBVSxJQUFJLGlCQUFpQiIsInNvdXJjZXMiOlsiL2hvbWUvaHVtYXlvdS9EZXNrdG9wL29wZW5TZWFXZWIzQXV0aC9zcmMvQ29tcG9uZW50L1BvcHVwLmNzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjAxYWNjYWY4ZjU3NVwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/Component/Popup.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/Component/Popup.tsx":
/*!*********************************!*\
  !*** ./src/Component/Popup.tsx ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Check_Copy_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Check,Copy!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/check.js\");\n/* harmony import */ var _barrel_optimize_names_Check_Copy_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Check,Copy!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/copy.js\");\n/* harmony import */ var _Popup_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Popup.css */ \"(app-pages-browser)/./src/Component/Popup.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Popup = (param)=>{\n    let { address, name, tokenId, price, onConfirm, onCancel } = param;\n    _s();\n    const [isProcessing, setIsProcessing] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [copied, setCopied] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const shortenAddress = (address)=>{\n        if (!address) return '';\n        return \"\".concat(address.slice(0, 6), \"...\").concat(address.slice(-4));\n    };\n    const copyToClipboard = async ()=>{\n        if (false) {}\n        try {\n            await navigator.clipboard.writeText(address);\n            setCopied(true);\n            setTimeout(()=>setCopied(false), 2000);\n        } catch (err) {\n            console.error('Failed to copy address:', err);\n        }\n    };\n    const confirmHandler = async ()=>{\n        try {\n            setIsProcessing(true);\n            setError(null);\n            await onConfirm();\n        } catch (error) {\n            console.error('Error during purchase:', error);\n            setError('Failed to complete purchase. Please try again.');\n        } finally{\n            setIsProcessing(false);\n        }\n    };\n    const getPriceDisplay = ()=>{\n        if (price === \"Not Available\") {\n            return \"Not Listed!\";\n        }\n        if (price && price !== \"Not Available\") {\n            return price;\n        }\n        return \"See Price\";\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed inset-0 bg-black/50 flex items-center justify-center z-50\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white rounded-lg p-6 w-full max-w-md mx-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-xl font-bold mb-4\",\n                    children: \"NFT Purchase Confirmation\"\n                }, void 0, false, {\n                    fileName: \"/home/humayou/Desktop/openSeaWeb3Auth/src/Component/Popup.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"space-y-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                    children: \"Name:\"\n                                }, void 0, false, {\n                                    fileName: \"/home/humayou/Desktop/openSeaWeb3Auth/src/Component/Popup.tsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 13\n                                }, undefined),\n                                \" \",\n                                name\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/humayou/Desktop/openSeaWeb3Auth/src/Component/Popup.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center gap-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                    children: \"Address:\"\n                                }, void 0, false, {\n                                    fileName: \"/home/humayou/Desktop/openSeaWeb3Auth/src/Component/Popup.tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"code\", {\n                                    className: \"bg-gray-100 px-2 py-1 rounded text-sm\",\n                                    children: shortenAddress(address)\n                                }, void 0, false, {\n                                    fileName: \"/home/humayou/Desktop/openSeaWeb3Auth/src/Component/Popup.tsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: copyToClipboard,\n                                    className: \"p-1.5 hover:bg-gray-100 rounded-full transition-colors\",\n                                    title: copied ? \"Copied!\" : \"Copy address\",\n                                    children: copied ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Check_Copy_lucide_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        className: \"w-4 h-4 text-green-500\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/humayou/Desktop/openSeaWeb3Auth/src/Component/Popup.tsx\",\n                                        lineNumber: 88,\n                                        columnNumber: 17\n                                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Check_Copy_lucide_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        className: \"w-4 h-4 text-gray-500\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/humayou/Desktop/openSeaWeb3Auth/src/Component/Popup.tsx\",\n                                        lineNumber: 90,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/humayou/Desktop/openSeaWeb3Auth/src/Component/Popup.tsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/humayou/Desktop/openSeaWeb3Auth/src/Component/Popup.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                    children: \"Token ID:\"\n                                }, void 0, false, {\n                                    fileName: \"/home/humayou/Desktop/openSeaWeb3Auth/src/Component/Popup.tsx\",\n                                    lineNumber: 96,\n                                    columnNumber: 13\n                                }, undefined),\n                                \" \",\n                                tokenId\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/humayou/Desktop/openSeaWeb3Auth/src/Component/Popup.tsx\",\n                            lineNumber: 95,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                    children: \"Price:\"\n                                }, void 0, false, {\n                                    fileName: \"/home/humayou/Desktop/openSeaWeb3Auth/src/Component/Popup.tsx\",\n                                    lineNumber: 100,\n                                    columnNumber: 13\n                                }, undefined),\n                                ' ',\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"\".concat(price === \"Not Available\" ? \"text-red-500\" : \"text-green-600\"),\n                                    children: [\n                                        getPriceDisplay(),\n                                        price && price !== \"Not Available\" && price !== \"Not Listed!\" && \" ETH\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/humayou/Desktop/openSeaWeb3Auth/src/Component/Popup.tsx\",\n                                    lineNumber: 101,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/humayou/Desktop/openSeaWeb3Auth/src/Component/Popup.tsx\",\n                            lineNumber: 99,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/humayou/Desktop/openSeaWeb3Auth/src/Component/Popup.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, undefined),\n                error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-4 p-3 bg-red-50 text-red-500 rounded-md text-sm\",\n                    children: error\n                }, void 0, false, {\n                    fileName: \"/home/humayou/Desktop/openSeaWeb3Auth/src/Component/Popup.tsx\",\n                    lineNumber: 109,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-6 flex gap-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: confirmHandler,\n                            disabled: isProcessing || price === \"Not Available\",\n                            className: \"flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md disabled:opacity-50 disabled:cursor-not-allowed transition-colors\",\n                            children: isProcessing ? 'Processing...' : 'Confirm'\n                        }, void 0, false, {\n                            fileName: \"/home/humayou/Desktop/openSeaWeb3Auth/src/Component/Popup.tsx\",\n                            lineNumber: 115,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: onCancel,\n                            disabled: isProcessing,\n                            className: \"flex-1 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md disabled:opacity-50 disabled:cursor-not-allowed transition-colors\",\n                            children: \"Cancel\"\n                        }, void 0, false, {\n                            fileName: \"/home/humayou/Desktop/openSeaWeb3Auth/src/Component/Popup.tsx\",\n                            lineNumber: 122,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/humayou/Desktop/openSeaWeb3Auth/src/Component/Popup.tsx\",\n                    lineNumber: 114,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/humayou/Desktop/openSeaWeb3Auth/src/Component/Popup.tsx\",\n            lineNumber: 69,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/humayou/Desktop/openSeaWeb3Auth/src/Component/Popup.tsx\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Popup, \"iprcpgeCGZw1nrkbrUoml0ygXQE=\");\n_c = Popup;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Popup);\nvar _c;\n$RefreshReg$(_c, \"Popup\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9Db21wb25lbnQvUG9wdXAudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUV3QztBQUNHO0FBQ3ZCO0FBVXBCLE1BQU1JLFFBQThCO1FBQUMsRUFDbkNDLE9BQU8sRUFDUEMsSUFBSSxFQUNKQyxPQUFPLEVBQ1BDLEtBQUssRUFDTEMsU0FBUyxFQUNUQyxRQUFRLEVBQ1Q7O0lBQ0MsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR1gsK0NBQVFBLENBQUM7SUFDakQsTUFBTSxDQUFDWSxPQUFPQyxTQUFTLEdBQUdiLCtDQUFRQSxDQUFnQjtJQUNsRCxNQUFNLENBQUNjLFFBQVFDLFVBQVUsR0FBR2YsK0NBQVFBLENBQUM7SUFFckMsTUFBTWdCLGlCQUFpQixDQUFDWjtRQUN0QixJQUFJLENBQUNBLFNBQVMsT0FBTztRQUNyQixPQUFPLEdBQTRCQSxPQUF6QkEsUUFBUWEsS0FBSyxDQUFDLEdBQUcsSUFBRyxPQUF1QixPQUFsQmIsUUFBUWEsS0FBSyxDQUFDLENBQUM7SUFDcEQ7SUFFQSxNQUFNQyxrQkFBa0I7UUFDdEIsSUFBSSxLQUE2QixFQUFFLEVBQU87UUFFMUMsSUFBSTtZQUNGLE1BQU1DLFVBQVVDLFNBQVMsQ0FBQ0MsU0FBUyxDQUFDakI7WUFDcENXLFVBQVU7WUFDVk8sV0FBVyxJQUFNUCxVQUFVLFFBQVE7UUFDckMsRUFBRSxPQUFPUSxLQUFLO1lBQ1pDLFFBQVFaLEtBQUssQ0FBQywyQkFBMkJXO1FBQzNDO0lBQ0Y7SUFFQSxNQUFNRSxpQkFBaUI7UUFDckIsSUFBSTtZQUNGZCxnQkFBZ0I7WUFDaEJFLFNBQVM7WUFDVCxNQUFNTDtRQUNSLEVBQUUsT0FBT0ksT0FBTztZQUNkWSxRQUFRWixLQUFLLENBQUMsMEJBQTBCQTtZQUN4Q0MsU0FBUztRQUNYLFNBQVU7WUFDUkYsZ0JBQWdCO1FBQ2xCO0lBQ0Y7SUFFQSxNQUFNZSxrQkFBa0I7UUFDdEIsSUFBSW5CLFVBQVUsaUJBQWlCO1lBQzdCLE9BQU87UUFDVDtRQUNBLElBQUlBLFNBQVNBLFVBQVUsaUJBQWlCO1lBQ3RDLE9BQU9BO1FBQ1Q7UUFDQSxPQUFPO0lBQ1Q7SUFFQSxxQkFDRSw4REFBQ29CO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDQztvQkFBR0QsV0FBVTs4QkFBeUI7Ozs7Ozs4QkFFdkMsOERBQUNEO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0Q7OzhDQUNDLDhEQUFDRzs4Q0FBTzs7Ozs7O2dDQUFjO2dDQUFFekI7Ozs7Ozs7c0NBRzFCLDhEQUFDc0I7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDRTs4Q0FBTzs7Ozs7OzhDQUNSLDhEQUFDQztvQ0FBS0gsV0FBVTs4Q0FDYlosZUFBZVo7Ozs7Ozs4Q0FFbEIsOERBQUM0QjtvQ0FDQ0MsU0FBU2Y7b0NBQ1RVLFdBQVU7b0NBQ1ZNLE9BQU9wQixTQUFTLFlBQVk7OENBRTNCQSx1QkFDQyw4REFBQ1osc0ZBQUtBO3dDQUFDMEIsV0FBVTs7Ozs7a0VBRWpCLDhEQUFDM0Isc0ZBQUlBO3dDQUFDMkIsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBS3RCLDhEQUFDRDs7OENBQ0MsOERBQUNHOzhDQUFPOzs7Ozs7Z0NBQWtCO2dDQUFFeEI7Ozs7Ozs7c0NBRzlCLDhEQUFDcUI7OzhDQUNDLDhEQUFDRzs4Q0FBTzs7Ozs7O2dDQUFnQjs4Q0FDeEIsOERBQUNLO29DQUFLUCxXQUFXLEdBQWlFLE9BQTlEckIsVUFBVSxrQkFBa0IsaUJBQWlCOzt3Q0FDOURtQjt3Q0FDQW5CLFNBQVNBLFVBQVUsbUJBQW1CQSxVQUFVLGlCQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFLdkVLLHVCQUNDLDhEQUFDZTtvQkFBSUMsV0FBVTs4QkFDWmhCOzs7Ozs7OEJBSUwsOERBQUNlO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0k7NEJBQ0NDLFNBQVNSOzRCQUNUVyxVQUFVMUIsZ0JBQWdCSCxVQUFVOzRCQUNwQ3FCLFdBQVU7c0NBRVRsQixlQUFlLGtCQUFrQjs7Ozs7O3NDQUVwQyw4REFBQ3NCOzRCQUNDQyxTQUFTeEI7NEJBQ1QyQixVQUFVMUI7NEJBQ1ZrQixXQUFVO3NDQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9YO0dBdEhNekI7S0FBQUE7QUF3SE4saUVBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIi9ob21lL2h1bWF5b3UvRGVza3RvcC9vcGVuU2VhV2ViM0F1dGgvc3JjL0NvbXBvbmVudC9Qb3B1cC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb3B5LCBDaGVjayB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5pbXBvcnQgJy4vUG9wdXAuY3NzJ1xuaW50ZXJmYWNlIFBvcHVwUHJvcHMge1xuICBhZGRyZXNzOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgdG9rZW5JZDogc3RyaW5nO1xuICBwcmljZTogc3RyaW5nO1xuICBvbkNvbmZpcm06ICgpID0+IFByb21pc2U8dm9pZD47XG4gIG9uQ2FuY2VsOiAoKSA9PiB2b2lkO1xufVxuXG5jb25zdCBQb3B1cDogUmVhY3QuRkM8UG9wdXBQcm9wcz4gPSAoe1xuICBhZGRyZXNzLFxuICBuYW1lLFxuICB0b2tlbklkLFxuICBwcmljZSxcbiAgb25Db25maXJtLFxuICBvbkNhbmNlbFxufSkgPT4ge1xuICBjb25zdCBbaXNQcm9jZXNzaW5nLCBzZXRJc1Byb2Nlc3NpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbY29waWVkLCBzZXRDb3BpZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHNob3J0ZW5BZGRyZXNzID0gKGFkZHJlc3M6IHN0cmluZykgPT4ge1xuICAgIGlmICghYWRkcmVzcykgcmV0dXJuICcnO1xuICAgIHJldHVybiBgJHthZGRyZXNzLnNsaWNlKDAsIDYpfS4uLiR7YWRkcmVzcy5zbGljZSgtNCl9YDtcbiAgfTtcblxuICBjb25zdCBjb3B5VG9DbGlwYm9hcmQgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm47XG4gICAgXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGFkZHJlc3MpO1xuICAgICAgc2V0Q29waWVkKHRydWUpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRDb3BpZWQoZmFsc2UpLCAyMDAwKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBjb3B5IGFkZHJlc3M6JywgZXJyKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY29uZmlybUhhbmRsZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIHNldElzUHJvY2Vzc2luZyh0cnVlKTtcbiAgICAgIHNldEVycm9yKG51bGwpO1xuICAgICAgYXdhaXQgb25Db25maXJtKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGR1cmluZyBwdXJjaGFzZTonLCBlcnJvcik7XG4gICAgICBzZXRFcnJvcignRmFpbGVkIHRvIGNvbXBsZXRlIHB1cmNoYXNlLiBQbGVhc2UgdHJ5IGFnYWluLicpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRJc1Byb2Nlc3NpbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBnZXRQcmljZURpc3BsYXkgPSAoKSA9PiB7XG4gICAgaWYgKHByaWNlID09PSBcIk5vdCBBdmFpbGFibGVcIikge1xuICAgICAgcmV0dXJuIFwiTm90IExpc3RlZCFcIjtcbiAgICB9XG4gICAgaWYgKHByaWNlICYmIHByaWNlICE9PSBcIk5vdCBBdmFpbGFibGVcIikge1xuICAgICAgcmV0dXJuIHByaWNlO1xuICAgIH1cbiAgICByZXR1cm4gXCJTZWUgUHJpY2VcIjtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCBiZy1ibGFjay81MCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB6LTUwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtbGcgcC02IHctZnVsbCBtYXgtdy1tZCBteC00XCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCBtYi00XCI+TkZUIFB1cmNoYXNlIENvbmZpcm1hdGlvbjwvaDI+XG4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktM1wiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8c3Ryb25nPk5hbWU6PC9zdHJvbmc+IHtuYW1lfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgPHN0cm9uZz5BZGRyZXNzOjwvc3Ryb25nPlxuICAgICAgICAgICAgPGNvZGUgY2xhc3NOYW1lPVwiYmctZ3JheS0xMDAgcHgtMiBweS0xIHJvdW5kZWQgdGV4dC1zbVwiPlxuICAgICAgICAgICAgICB7c2hvcnRlbkFkZHJlc3MoYWRkcmVzcyl9XG4gICAgICAgICAgICA8L2NvZGU+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2NvcHlUb0NsaXBib2FyZH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0xLjUgaG92ZXI6YmctZ3JheS0xMDAgcm91bmRlZC1mdWxsIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgICAgdGl0bGU9e2NvcGllZCA/IFwiQ29waWVkIVwiIDogXCJDb3B5IGFkZHJlc3NcIn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2NvcGllZCA/IChcbiAgICAgICAgICAgICAgICA8Q2hlY2sgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LWdyZWVuLTUwMFwiIC8+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPENvcHkgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LWdyYXktNTAwXCIgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxzdHJvbmc+VG9rZW4gSUQ6PC9zdHJvbmc+IHt0b2tlbklkfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxzdHJvbmc+UHJpY2U6PC9zdHJvbmc+eycgJ31cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YCR7cHJpY2UgPT09IFwiTm90IEF2YWlsYWJsZVwiID8gXCJ0ZXh0LXJlZC01MDBcIiA6IFwidGV4dC1ncmVlbi02MDBcIn1gfT5cbiAgICAgICAgICAgICAge2dldFByaWNlRGlzcGxheSgpfVxuICAgICAgICAgICAgICB7cHJpY2UgJiYgcHJpY2UgIT09IFwiTm90IEF2YWlsYWJsZVwiICYmIHByaWNlICE9PSBcIk5vdCBMaXN0ZWQhXCIgJiYgXCIgRVRIXCJ9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHtlcnJvciAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IHAtMyBiZy1yZWQtNTAgdGV4dC1yZWQtNTAwIHJvdW5kZWQtbWQgdGV4dC1zbVwiPlxuICAgICAgICAgICAge2Vycm9yfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNiBmbGV4IGdhcC0zXCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17Y29uZmlybUhhbmRsZXJ9XG4gICAgICAgICAgICBkaXNhYmxlZD17aXNQcm9jZXNzaW5nIHx8IHByaWNlID09PSBcIk5vdCBBdmFpbGFibGVcIn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtMSBiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTYwMCB0ZXh0LXdoaXRlIHB5LTIgcHgtNCByb3VuZGVkLW1kIGRpc2FibGVkOm9wYWNpdHktNTAgZGlzYWJsZWQ6Y3Vyc29yLW5vdC1hbGxvd2VkIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7aXNQcm9jZXNzaW5nID8gJ1Byb2Nlc3NpbmcuLi4nIDogJ0NvbmZpcm0nfVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2FuY2VsfVxuICAgICAgICAgICAgZGlzYWJsZWQ9e2lzUHJvY2Vzc2luZ31cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtMSBiZy1yZWQtNTAwIGhvdmVyOmJnLXJlZC02MDAgdGV4dC13aGl0ZSBweS0yIHB4LTQgcm91bmRlZC1tZCBkaXNhYmxlZDpvcGFjaXR5LTUwIGRpc2FibGVkOmN1cnNvci1ub3QtYWxsb3dlZCB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3B1cDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkNvcHkiLCJDaGVjayIsIlBvcHVwIiwiYWRkcmVzcyIsIm5hbWUiLCJ0b2tlbklkIiwicHJpY2UiLCJvbkNvbmZpcm0iLCJvbkNhbmNlbCIsImlzUHJvY2Vzc2luZyIsInNldElzUHJvY2Vzc2luZyIsImVycm9yIiwic2V0RXJyb3IiLCJjb3BpZWQiLCJzZXRDb3BpZWQiLCJzaG9ydGVuQWRkcmVzcyIsInNsaWNlIiwiY29weVRvQ2xpcGJvYXJkIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0Iiwic2V0VGltZW91dCIsImVyciIsImNvbnNvbGUiLCJjb25maXJtSGFuZGxlciIsImdldFByaWNlRGlzcGxheSIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwic3Ryb25nIiwiY29kZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ0aXRsZSIsInNwYW4iLCJkaXNhYmxlZCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/Component/Popup.tsx\n"));

/***/ })

});