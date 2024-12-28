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

/***/ "(app-pages-browser)/./src/Component/UpdateNft.tsx":
/*!*************************************!*\
  !*** ./src/Component/UpdateNft.tsx ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Check_Copy_lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Check,Copy!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/check.js\");\n/* harmony import */ var _barrel_optimize_names_Check_Copy_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Check,Copy!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/copy.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst ListingPopup = (param)=>{\n    let { address, name, tokenId, onConfirm, onCancel } = param;\n    _s();\n    const [isProcessing, setIsProcessing] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [copied, setCopied] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [price, setPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const shortenAddress = (address)=>{\n        if (!address) return '';\n        return \"\".concat(address.slice(0, 6), \"...\").concat(address.slice(-4));\n    };\n    const copyToClipboard = async ()=>{\n        if (false) {}\n        try {\n            await navigator.clipboard.writeText(address);\n            setCopied(true);\n            setTimeout(()=>setCopied(false), 2000);\n        } catch (err) {\n            console.error('Failed to copy address:', err);\n        }\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        if (!price || isNaN(Number(price)) || Number(price) <= 0) {\n            setError('Please enter a valid price');\n            return;\n        }\n        try {\n            setIsProcessing(true);\n            setError(null);\n            // Convert price to Wei (multiply by 10^18)\n            const priceInWei = (Number(price) * 1e18).toString();\n            await onConfirm(priceInWei);\n        } catch (error) {\n            console.error('Error during listing:', error);\n            setError('Failed to list NFT. Please try again.');\n        } finally{\n            setIsProcessing(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"popup-overlay\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"popup-content\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"List NFT for Sale\"\n                }, void 0, false, {\n                    fileName: \"/home/humayou/Desktop/openSeaWeb3Auth/src/Component/UpdateNft.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                            children: \"Name:\"\n                        }, void 0, false, {\n                            fileName: \"/home/humayou/Desktop/openSeaWeb3Auth/src/Component/UpdateNft.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, undefined),\n                        \" \",\n                        name\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/humayou/Desktop/openSeaWeb3Auth/src/Component/UpdateNft.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"address-container\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                            children: \"Address:\"\n                        }, void 0, false, {\n                            fileName: \"/home/humayou/Desktop/openSeaWeb3Auth/src/Component/UpdateNft.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"code\", {\n                            className: \"address-text\",\n                            children: shortenAddress(address)\n                        }, void 0, false, {\n                            fileName: \"/home/humayou/Desktop/openSeaWeb3Auth/src/Component/UpdateNft.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: copyToClipboard,\n                            className: \"copy-button\",\n                            title: copied ? 'Copied!' : 'Copy address',\n                            children: copied ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Check_Copy_lucide_react__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                className: \"w-4 h-4 text-green-500\"\n                            }, void 0, false, {\n                                fileName: \"/home/humayou/Desktop/openSeaWeb3Auth/src/Component/UpdateNft.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 15\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Check_Copy_lucide_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                className: \"w-4 h-4 text-gray-500\"\n                            }, void 0, false, {\n                                fileName: \"/home/humayou/Desktop/openSeaWeb3Auth/src/Component/UpdateNft.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/humayou/Desktop/openSeaWeb3Auth/src/Component/UpdateNft.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/humayou/Desktop/openSeaWeb3Auth/src/Component/UpdateNft.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                            children: \"Token ID:\"\n                        }, void 0, false, {\n                            fileName: \"/home/humayou/Desktop/openSeaWeb3Auth/src/Component/UpdateNft.tsx\",\n                            lineNumber: 91,\n                            columnNumber: 11\n                        }, undefined),\n                        \" \",\n                        tokenId\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/humayou/Desktop/openSeaWeb3Auth/src/Component/UpdateNft.tsx\",\n                    lineNumber: 90,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    className: \"mt-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"price\",\n                                    className: \"block text-sm font-bold text-gray-700 mb-1\",\n                                    children: \"Listing Price (ETH)\"\n                                }, void 0, false, {\n                                    fileName: \"/home/humayou/Desktop/openSeaWeb3Auth/src/Component/UpdateNft.tsx\",\n                                    lineNumber: 96,\n                                    columnNumber: 5\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"relative\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"number\",\n                                            id: \"price\",\n                                            value: price,\n                                            onChange: (e)=>setPrice(e.target.value),\n                                            placeholder: \"0.00\",\n                                            step: \"0.000001\",\n                                            min: \"0\",\n                                            className: \"price-input\",\n                                            disabled: isProcessing\n                                        }, void 0, false, {\n                                            fileName: \"/home/humayou/Desktop/openSeaWeb3Auth/src/Component/UpdateNft.tsx\",\n                                            lineNumber: 100,\n                                            columnNumber: 7\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"absolute right-3 top-2.5 text-gray-500\",\n                                            children: \"ETH\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/humayou/Desktop/openSeaWeb3Auth/src/Component/UpdateNft.tsx\",\n                                            lineNumber: 111,\n                                            columnNumber: 7\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/humayou/Desktop/openSeaWeb3Auth/src/Component/UpdateNft.tsx\",\n                                    lineNumber: 99,\n                                    columnNumber: 5\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/humayou/Desktop/openSeaWeb3Auth/src/Component/UpdateNft.tsx\",\n                            lineNumber: 95,\n                            columnNumber: 9\n                        }, undefined),\n                        error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mt-2 p-3 bg-red-50 text-red-500 rounded-md text-sm\",\n                            children: error\n                        }, void 0, false, {\n                            fileName: \"/home/humayou/Desktop/openSeaWeb3Auth/src/Component/UpdateNft.tsx\",\n                            lineNumber: 116,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"popup-buttons\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    disabled: isProcessing || !price,\n                                    className: \"confirm-button\",\n                                    children: isProcessing ? 'Processing...' : 'List NFT'\n                                }, void 0, false, {\n                                    fileName: \"/home/humayou/Desktop/openSeaWeb3Auth/src/Component/UpdateNft.tsx\",\n                                    lineNumber: 122,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"button\",\n                                    onClick: onCancel,\n                                    disabled: isProcessing,\n                                    className: \"cancel-button\",\n                                    children: \"Cancel\"\n                                }, void 0, false, {\n                                    fileName: \"/home/humayou/Desktop/openSeaWeb3Auth/src/Component/UpdateNft.tsx\",\n                                    lineNumber: 129,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/humayou/Desktop/openSeaWeb3Auth/src/Component/UpdateNft.tsx\",\n                            lineNumber: 121,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/humayou/Desktop/openSeaWeb3Auth/src/Component/UpdateNft.tsx\",\n                    lineNumber: 94,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/humayou/Desktop/openSeaWeb3Auth/src/Component/UpdateNft.tsx\",\n            lineNumber: 67,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/humayou/Desktop/openSeaWeb3Auth/src/Component/UpdateNft.tsx\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ListingPopup, \"rhpbcDLb2VnOU1MtyMOspmjAJE4=\");\n_c = ListingPopup;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListingPopup);\nvar _c;\n$RefreshReg$(_c, \"ListingPopup\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9Db21wb25lbnQvVXBkYXRlTmZ0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUV3QztBQUNHO0FBVTNDLE1BQU1JLGVBQTRDO1FBQUMsRUFDakRDLE9BQU8sRUFDUEMsSUFBSSxFQUNKQyxPQUFPLEVBQ1BDLFNBQVMsRUFDVEMsUUFBUSxFQUNUOztJQUNDLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ1csT0FBT0MsU0FBUyxHQUFHWiwrQ0FBUUEsQ0FBZ0I7SUFDbEQsTUFBTSxDQUFDYSxRQUFRQyxVQUFVLEdBQUdkLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ2UsT0FBT0MsU0FBUyxHQUFHaEIsK0NBQVFBLENBQVM7SUFFM0MsTUFBTWlCLGlCQUFpQixDQUFDYjtRQUN0QixJQUFJLENBQUNBLFNBQVMsT0FBTztRQUNyQixPQUFPLEdBQTRCQSxPQUF6QkEsUUFBUWMsS0FBSyxDQUFDLEdBQUcsSUFBRyxPQUF1QixPQUFsQmQsUUFBUWMsS0FBSyxDQUFDLENBQUM7SUFDcEQ7SUFFQSxNQUFNQyxrQkFBa0I7UUFDdEIsSUFBSSxLQUE2QixFQUFFLEVBQU87UUFFMUMsSUFBSTtZQUNGLE1BQU1DLFVBQVVDLFNBQVMsQ0FBQ0MsU0FBUyxDQUFDbEI7WUFDcENVLFVBQVU7WUFDVlMsV0FBVyxJQUFNVCxVQUFVLFFBQVE7UUFDckMsRUFBRSxPQUFPVSxLQUFLO1lBQ1pDLFFBQVFkLEtBQUssQ0FBQywyQkFBMkJhO1FBQzNDO0lBQ0Y7SUFFQSxNQUFNRSxlQUFlLE9BQU9DO1FBQzFCQSxFQUFFQyxjQUFjO1FBRWhCLElBQUksQ0FBQ2IsU0FBU2MsTUFBTUMsT0FBT2YsV0FBV2UsT0FBT2YsVUFBVSxHQUFHO1lBQ3hESCxTQUFTO1lBQ1Q7UUFDRjtRQUVBLElBQUk7WUFDRkYsZ0JBQWdCO1lBQ2hCRSxTQUFTO1lBQ1QsMkNBQTJDO1lBQzNDLE1BQU1tQixhQUFhLENBQUNELE9BQU9mLFNBQVMsSUFBRyxFQUFHaUIsUUFBUTtZQUNsRCxNQUFNekIsVUFBVXdCO1FBQ2xCLEVBQUUsT0FBT3BCLE9BQU87WUFDZGMsUUFBUWQsS0FBSyxDQUFDLHlCQUF5QkE7WUFDdkNDLFNBQVM7UUFDWCxTQUFVO1lBQ1JGLGdCQUFnQjtRQUNsQjtJQUNGO0lBRUEscUJBQ0UsOERBQUN1QjtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0M7OEJBQUc7Ozs7Ozs4QkFFSiw4REFBQ0Y7O3NDQUNDLDhEQUFDRztzQ0FBTzs7Ozs7O3dCQUFjO3dCQUFFL0I7Ozs7Ozs7OEJBRzFCLDhEQUFDNEI7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDRTtzQ0FBTzs7Ozs7O3NDQUNSLDhEQUFDQzs0QkFBS0gsV0FBVTtzQ0FBZ0JqQixlQUFlYjs7Ozs7O3NDQUMvQyw4REFBQ2tDOzRCQUNDQyxTQUFTcEI7NEJBQ1RlLFdBQVU7NEJBQ1ZNLE9BQU8zQixTQUFTLFlBQVk7c0NBRTNCQSx1QkFDQyw4REFBQ1gsc0ZBQUtBO2dDQUFDZ0MsV0FBVTs7Ozs7MERBRWpCLDhEQUFDakMsc0ZBQUlBO2dDQUFDaUMsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBS3RCLDhEQUFDRDs7c0NBQ0MsOERBQUNHO3NDQUFPOzs7Ozs7d0JBQWtCO3dCQUFFOUI7Ozs7Ozs7OEJBRzlCLDhEQUFDbUM7b0JBQUtDLFVBQVVoQjtvQkFBY1EsV0FBVTs7c0NBQ3hDLDhEQUFDRDs0QkFBSUMsV0FBVTs7OENBQ25CLDhEQUFDUztvQ0FBTUMsU0FBUTtvQ0FBUVYsV0FBVTs4Q0FBNkM7Ozs7Ozs4Q0FHOUUsOERBQUNEO29DQUFJQyxXQUFVOztzREFDYiw4REFBQ1c7NENBQ0NDLE1BQUs7NENBQ0xDLElBQUc7NENBQ0hDLE9BQU9qQzs0Q0FDUGtDLFVBQVUsQ0FBQ3RCLElBQU1YLFNBQVNXLEVBQUV1QixNQUFNLENBQUNGLEtBQUs7NENBQ3hDRyxhQUFZOzRDQUNaQyxNQUFLOzRDQUNMQyxLQUFJOzRDQUNKbkIsV0FBVTs0Q0FDVm9CLFVBQVU3Qzs7Ozs7O3NEQUVaLDhEQUFDOEM7NENBQUtyQixXQUFVO3NEQUF5Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dCQUlwRHZCLHVCQUNDLDhEQUFDc0I7NEJBQUlDLFdBQVU7c0NBQ1p2Qjs7Ozs7O3NDQUlMLDhEQUFDc0I7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDSTtvQ0FDQ1EsTUFBSztvQ0FDTFEsVUFBVTdDLGdCQUFnQixDQUFDTTtvQ0FDM0JtQixXQUFVOzhDQUVUekIsZUFBZSxrQkFBa0I7Ozs7Ozs4Q0FFcEMsOERBQUM2QjtvQ0FDQ1EsTUFBSztvQ0FDTFAsU0FBUy9CO29DQUNUOEMsVUFBVTdDO29DQUNWeUIsV0FBVTs4Q0FDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRYjtHQWhJTS9CO0tBQUFBO0FBa0lOLGlFQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyIvaG9tZS9odW1heW91L0Rlc2t0b3Avb3BlblNlYVdlYjNBdXRoL3NyYy9Db21wb25lbnQvVXBkYXRlTmZ0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvcHksIENoZWNrIH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcblxuaW50ZXJmYWNlIExpc3RpbmdQb3B1cFByb3BzIHtcbiAgYWRkcmVzczogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHRva2VuSWQ6IHN0cmluZztcbiAgb25Db25maXJtOiAocHJpY2U6IHN0cmluZykgPT4gUHJvbWlzZTx2b2lkPjtcbiAgb25DYW5jZWw6ICgpID0+IHZvaWQ7XG59XG5cbmNvbnN0IExpc3RpbmdQb3B1cDogUmVhY3QuRkM8TGlzdGluZ1BvcHVwUHJvcHM+ID0gKHtcbiAgYWRkcmVzcyxcbiAgbmFtZSxcbiAgdG9rZW5JZCxcbiAgb25Db25maXJtLFxuICBvbkNhbmNlbCxcbn0pID0+IHtcbiAgY29uc3QgW2lzUHJvY2Vzc2luZywgc2V0SXNQcm9jZXNzaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2NvcGllZCwgc2V0Q29waWVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3ByaWNlLCBzZXRQcmljZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcblxuICBjb25zdCBzaG9ydGVuQWRkcmVzcyA9IChhZGRyZXNzOiBzdHJpbmcpID0+IHtcbiAgICBpZiAoIWFkZHJlc3MpIHJldHVybiAnJztcbiAgICByZXR1cm4gYCR7YWRkcmVzcy5zbGljZSgwLCA2KX0uLi4ke2FkZHJlc3Muc2xpY2UoLTQpfWA7XG4gIH07XG5cbiAgY29uc3QgY29weVRvQ2xpcGJvYXJkID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuO1xuICAgIFxuICAgIHRyeSB7XG4gICAgICBhd2FpdCBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChhZGRyZXNzKTtcbiAgICAgIHNldENvcGllZCh0cnVlKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0Q29waWVkKGZhbHNlKSwgMjAwMCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gY29weSBhZGRyZXNzOicsIGVycik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlOiBSZWFjdC5Gb3JtRXZlbnQpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgXG4gICAgaWYgKCFwcmljZSB8fCBpc05hTihOdW1iZXIocHJpY2UpKSB8fCBOdW1iZXIocHJpY2UpIDw9IDApIHtcbiAgICAgIHNldEVycm9yKCdQbGVhc2UgZW50ZXIgYSB2YWxpZCBwcmljZScpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBzZXRJc1Byb2Nlc3NpbmcodHJ1ZSk7XG4gICAgICBzZXRFcnJvcihudWxsKTtcbiAgICAgIC8vIENvbnZlcnQgcHJpY2UgdG8gV2VpIChtdWx0aXBseSBieSAxMF4xOClcbiAgICAgIGNvbnN0IHByaWNlSW5XZWkgPSAoTnVtYmVyKHByaWNlKSAqIDFlMTgpLnRvU3RyaW5nKCk7XG4gICAgICBhd2FpdCBvbkNvbmZpcm0ocHJpY2VJbldlaSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGR1cmluZyBsaXN0aW5nOicsIGVycm9yKTtcbiAgICAgIHNldEVycm9yKCdGYWlsZWQgdG8gbGlzdCBORlQuIFBsZWFzZSB0cnkgYWdhaW4uJyk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldElzUHJvY2Vzc2luZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwb3B1cC1vdmVybGF5XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcHVwLWNvbnRlbnRcIj5cbiAgICAgICAgPGgyPkxpc3QgTkZUIGZvciBTYWxlPC9oMj5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxzdHJvbmc+TmFtZTo8L3N0cm9uZz4ge25hbWV9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkcmVzcy1jb250YWluZXJcIj5cbiAgICAgICAgICA8c3Ryb25nPkFkZHJlc3M6PC9zdHJvbmc+XG4gICAgICAgICAgPGNvZGUgY2xhc3NOYW1lPVwiYWRkcmVzcy10ZXh0XCI+e3Nob3J0ZW5BZGRyZXNzKGFkZHJlc3MpfTwvY29kZT5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXtjb3B5VG9DbGlwYm9hcmR9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjb3B5LWJ1dHRvblwiXG4gICAgICAgICAgICB0aXRsZT17Y29waWVkID8gJ0NvcGllZCEnIDogJ0NvcHkgYWRkcmVzcyd9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2NvcGllZCA/IChcbiAgICAgICAgICAgICAgPENoZWNrIGNsYXNzTmFtZT1cInctNCBoLTQgdGV4dC1ncmVlbi01MDBcIiAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPENvcHkgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LWdyYXktNTAwXCIgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHN0cm9uZz5Ub2tlbiBJRDo8L3N0cm9uZz4ge3Rva2VuSWR9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cIm10LTRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgPGxhYmVsIGh0bWxGb3I9XCJwcmljZVwiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1ib2xkIHRleHQtZ3JheS03MDAgbWItMVwiPlxuICAgICAgTGlzdGluZyBQcmljZSAoRVRIKVxuICAgIDwvbGFiZWw+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICBpZD1cInByaWNlXCJcbiAgICAgICAgdmFsdWU9e3ByaWNlfVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFByaWNlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgcGxhY2Vob2xkZXI9XCIwLjAwXCJcbiAgICAgICAgc3RlcD1cIjAuMDAwMDAxXCJcbiAgICAgICAgbWluPVwiMFwiXG4gICAgICAgIGNsYXNzTmFtZT1cInByaWNlLWlucHV0XCJcbiAgICAgICAgZGlzYWJsZWQ9e2lzUHJvY2Vzc2luZ31cbiAgICAgIC8+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSByaWdodC0zIHRvcC0yLjUgdGV4dC1ncmF5LTUwMFwiPkVUSDwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbiAgICAgICAgICB7ZXJyb3IgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yIHAtMyBiZy1yZWQtNTAgdGV4dC1yZWQtNTAwIHJvdW5kZWQtbWQgdGV4dC1zbVwiPlxuICAgICAgICAgICAgICB7ZXJyb3J9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3B1cC1idXR0b25zXCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICBkaXNhYmxlZD17aXNQcm9jZXNzaW5nIHx8ICFwcmljZX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29uZmlybS1idXR0b25cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7aXNQcm9jZXNzaW5nID8gJ1Byb2Nlc3NpbmcuLi4nIDogJ0xpc3QgTkZUJ31cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgb25DbGljaz17b25DYW5jZWx9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtpc1Byb2Nlc3Npbmd9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhbmNlbC1idXR0b25cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExpc3RpbmdQb3B1cDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQ29weSIsIkNoZWNrIiwiTGlzdGluZ1BvcHVwIiwiYWRkcmVzcyIsIm5hbWUiLCJ0b2tlbklkIiwib25Db25maXJtIiwib25DYW5jZWwiLCJpc1Byb2Nlc3NpbmciLCJzZXRJc1Byb2Nlc3NpbmciLCJlcnJvciIsInNldEVycm9yIiwiY29waWVkIiwic2V0Q29waWVkIiwicHJpY2UiLCJzZXRQcmljZSIsInNob3J0ZW5BZGRyZXNzIiwic2xpY2UiLCJjb3B5VG9DbGlwYm9hcmQiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJzZXRUaW1lb3V0IiwiZXJyIiwiY29uc29sZSIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImlzTmFOIiwiTnVtYmVyIiwicHJpY2VJbldlaSIsInRvU3RyaW5nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJzdHJvbmciLCJjb2RlIiwiYnV0dG9uIiwib25DbGljayIsInRpdGxlIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJzdGVwIiwibWluIiwiZGlzYWJsZWQiLCJzcGFuIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/Component/UpdateNft.tsx\n"));

/***/ })

});