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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Check_Copy_lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Check,Copy!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/check.js\");\n/* harmony import */ var _barrel_optimize_names_Check_Copy_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Check,Copy!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/copy.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst ListingPopup = (param)=>{\n    let { address, name, tokenId, onConfirm, onCancel } = param;\n    _s();\n    const [isProcessing, setIsProcessing] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [copied, setCopied] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [price, setPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const shortenAddress = (address)=>{\n        if (!address) return '';\n        return \"\".concat(address.slice(0, 6), \"...\").concat(address.slice(-4));\n    };\n    const copyToClipboard = async ()=>{\n        if (false) {}\n        try {\n            await navigator.clipboard.writeText(address);\n            setCopied(true);\n            setTimeout(()=>setCopied(false), 2000);\n        } catch (err) {\n            console.error('Failed to copy address:', err);\n        }\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        if (!price || isNaN(Number(price)) || Number(price) <= 0) {\n            setError('Please enter a valid price');\n            return;\n        }\n        try {\n            setIsProcessing(true);\n            setError(null);\n            // Convert price to Wei (multiply by 10^18)\n            const priceInWei = (Number(price) * 1e18).toString();\n            await onConfirm(priceInWei);\n        } catch (error) {\n            console.error('Error during listing:', error);\n            setError('Failed to list NFT. Please try again.');\n        } finally{\n            setIsProcessing(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"popup-overlay\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"popup-content\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"List NFT for Sale\"\n                }, void 0, false, {\n                    fileName: \"/home/humayou/Desktop/openSeaWeb3Auth/src/Component/UpdateNft.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                            children: \"Name:\"\n                        }, void 0, false, {\n                            fileName: \"/home/humayou/Desktop/openSeaWeb3Auth/src/Component/UpdateNft.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, undefined),\n                        \" \",\n                        name\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/humayou/Desktop/openSeaWeb3Auth/src/Component/UpdateNft.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"address-container\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                            children: \"Address:\"\n                        }, void 0, false, {\n                            fileName: \"/home/humayou/Desktop/openSeaWeb3Auth/src/Component/UpdateNft.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"code\", {\n                            className: \"address-text\",\n                            children: shortenAddress(address)\n                        }, void 0, false, {\n                            fileName: \"/home/humayou/Desktop/openSeaWeb3Auth/src/Component/UpdateNft.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: copyToClipboard,\n                            className: \"copy-button\",\n                            title: copied ? 'Copied!' : 'Copy address',\n                            children: copied ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Check_Copy_lucide_react__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                className: \"w-4 h-4 text-green-500\"\n                            }, void 0, false, {\n                                fileName: \"/home/humayou/Desktop/openSeaWeb3Auth/src/Component/UpdateNft.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 15\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Check_Copy_lucide_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                className: \"w-4 h-4 text-gray-500\"\n                            }, void 0, false, {\n                                fileName: \"/home/humayou/Desktop/openSeaWeb3Auth/src/Component/UpdateNft.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/humayou/Desktop/openSeaWeb3Auth/src/Component/UpdateNft.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/humayou/Desktop/openSeaWeb3Auth/src/Component/UpdateNft.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                            children: \"Token ID:\"\n                        }, void 0, false, {\n                            fileName: \"/home/humayou/Desktop/openSeaWeb3Auth/src/Component/UpdateNft.tsx\",\n                            lineNumber: 91,\n                            columnNumber: 11\n                        }, undefined),\n                        \" \",\n                        tokenId\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/humayou/Desktop/openSeaWeb3Auth/src/Component/UpdateNft.tsx\",\n                    lineNumber: 90,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    className: \"mt-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4\",\n                            style: {\n                                marginTop: \"20px\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"price\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"Listing Price (ETH)\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/humayou/Desktop/openSeaWeb3Auth/src/Component/UpdateNft.tsx\",\n                                        lineNumber: 97,\n                                        columnNumber: 7\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/humayou/Desktop/openSeaWeb3Auth/src/Component/UpdateNft.tsx\",\n                                    lineNumber: 96,\n                                    columnNumber: 5\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"relative\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"number\",\n                                            id: \"price\",\n                                            value: price,\n                                            onChange: (e)=>setPrice(e.target.value),\n                                            placeholder: \"0.00\",\n                                            step: \"0.000001\",\n                                            min: \"0\",\n                                            className: \"price-input\",\n                                            disabled: isProcessing,\n                                            style: {\n                                                marginTop: \"10px\",\n                                                width: \"100%\"\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/home/humayou/Desktop/openSeaWeb3Auth/src/Component/UpdateNft.tsx\",\n                                            lineNumber: 100,\n                                            columnNumber: 7\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"absolute right-3 top-2.5 text-gray-500\",\n                                            children: \"ETH\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/humayou/Desktop/openSeaWeb3Auth/src/Component/UpdateNft.tsx\",\n                                            lineNumber: 112,\n                                            columnNumber: 7\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/humayou/Desktop/openSeaWeb3Auth/src/Component/UpdateNft.tsx\",\n                                    lineNumber: 99,\n                                    columnNumber: 5\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/humayou/Desktop/openSeaWeb3Auth/src/Component/UpdateNft.tsx\",\n                            lineNumber: 95,\n                            columnNumber: 9\n                        }, undefined),\n                        error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mt-2 p-3 bg-red-50 text-red-500 rounded-md text-sm\",\n                            children: error\n                        }, void 0, false, {\n                            fileName: \"/home/humayou/Desktop/openSeaWeb3Auth/src/Component/UpdateNft.tsx\",\n                            lineNumber: 117,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"popup-buttons\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    disabled: isProcessing || !price,\n                                    className: \"confirm-button\",\n                                    children: isProcessing ? 'Processing...' : 'List NFT'\n                                }, void 0, false, {\n                                    fileName: \"/home/humayou/Desktop/openSeaWeb3Auth/src/Component/UpdateNft.tsx\",\n                                    lineNumber: 123,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"button\",\n                                    onClick: onCancel,\n                                    disabled: isProcessing,\n                                    className: \"cancel-button\",\n                                    children: \"Cancel\"\n                                }, void 0, false, {\n                                    fileName: \"/home/humayou/Desktop/openSeaWeb3Auth/src/Component/UpdateNft.tsx\",\n                                    lineNumber: 130,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/humayou/Desktop/openSeaWeb3Auth/src/Component/UpdateNft.tsx\",\n                            lineNumber: 122,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/humayou/Desktop/openSeaWeb3Auth/src/Component/UpdateNft.tsx\",\n                    lineNumber: 94,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/humayou/Desktop/openSeaWeb3Auth/src/Component/UpdateNft.tsx\",\n            lineNumber: 67,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/humayou/Desktop/openSeaWeb3Auth/src/Component/UpdateNft.tsx\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ListingPopup, \"rhpbcDLb2VnOU1MtyMOspmjAJE4=\");\n_c = ListingPopup;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListingPopup);\nvar _c;\n$RefreshReg$(_c, \"ListingPopup\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9Db21wb25lbnQvVXBkYXRlTmZ0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUV3QztBQUNHO0FBVTNDLE1BQU1JLGVBQTRDO1FBQUMsRUFDakRDLE9BQU8sRUFDUEMsSUFBSSxFQUNKQyxPQUFPLEVBQ1BDLFNBQVMsRUFDVEMsUUFBUSxFQUNUOztJQUNDLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ1csT0FBT0MsU0FBUyxHQUFHWiwrQ0FBUUEsQ0FBZ0I7SUFDbEQsTUFBTSxDQUFDYSxRQUFRQyxVQUFVLEdBQUdkLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ2UsT0FBT0MsU0FBUyxHQUFHaEIsK0NBQVFBLENBQVM7SUFFM0MsTUFBTWlCLGlCQUFpQixDQUFDYjtRQUN0QixJQUFJLENBQUNBLFNBQVMsT0FBTztRQUNyQixPQUFPLEdBQTRCQSxPQUF6QkEsUUFBUWMsS0FBSyxDQUFDLEdBQUcsSUFBRyxPQUF1QixPQUFsQmQsUUFBUWMsS0FBSyxDQUFDLENBQUM7SUFDcEQ7SUFFQSxNQUFNQyxrQkFBa0I7UUFDdEIsSUFBSSxLQUE2QixFQUFFLEVBQU87UUFFMUMsSUFBSTtZQUNGLE1BQU1DLFVBQVVDLFNBQVMsQ0FBQ0MsU0FBUyxDQUFDbEI7WUFDcENVLFVBQVU7WUFDVlMsV0FBVyxJQUFNVCxVQUFVLFFBQVE7UUFDckMsRUFBRSxPQUFPVSxLQUFLO1lBQ1pDLFFBQVFkLEtBQUssQ0FBQywyQkFBMkJhO1FBQzNDO0lBQ0Y7SUFFQSxNQUFNRSxlQUFlLE9BQU9DO1FBQzFCQSxFQUFFQyxjQUFjO1FBRWhCLElBQUksQ0FBQ2IsU0FBU2MsTUFBTUMsT0FBT2YsV0FBV2UsT0FBT2YsVUFBVSxHQUFHO1lBQ3hESCxTQUFTO1lBQ1Q7UUFDRjtRQUVBLElBQUk7WUFDRkYsZ0JBQWdCO1lBQ2hCRSxTQUFTO1lBQ1QsMkNBQTJDO1lBQzNDLE1BQU1tQixhQUFhLENBQUNELE9BQU9mLFNBQVMsSUFBRyxFQUFHaUIsUUFBUTtZQUNsRCxNQUFNekIsVUFBVXdCO1FBQ2xCLEVBQUUsT0FBT3BCLE9BQU87WUFDZGMsUUFBUWQsS0FBSyxDQUFDLHlCQUF5QkE7WUFDdkNDLFNBQVM7UUFDWCxTQUFVO1lBQ1JGLGdCQUFnQjtRQUNsQjtJQUNGO0lBRUEscUJBQ0UsOERBQUN1QjtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0M7OEJBQUc7Ozs7Ozs4QkFFSiw4REFBQ0Y7O3NDQUNDLDhEQUFDRztzQ0FBTzs7Ozs7O3dCQUFjO3dCQUFFL0I7Ozs7Ozs7OEJBRzFCLDhEQUFDNEI7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDRTtzQ0FBTzs7Ozs7O3NDQUNSLDhEQUFDQzs0QkFBS0gsV0FBVTtzQ0FBZ0JqQixlQUFlYjs7Ozs7O3NDQUMvQyw4REFBQ2tDOzRCQUNDQyxTQUFTcEI7NEJBQ1RlLFdBQVU7NEJBQ1ZNLE9BQU8zQixTQUFTLFlBQVk7c0NBRTNCQSx1QkFDQyw4REFBQ1gsc0ZBQUtBO2dDQUFDZ0MsV0FBVTs7Ozs7MERBRWpCLDhEQUFDakMsc0ZBQUlBO2dDQUFDaUMsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBS3RCLDhEQUFDRDs7c0NBQ0MsOERBQUNHO3NDQUFPOzs7Ozs7d0JBQWtCO3dCQUFFOUI7Ozs7Ozs7OEJBRzlCLDhEQUFDbUM7b0JBQUtDLFVBQVVoQjtvQkFBY1EsV0FBVTs7c0NBQ3hDLDhEQUFDRDs0QkFBSUMsV0FBVTs0QkFBT1MsT0FBTztnQ0FBQ0MsV0FBVTs0QkFBTTs7OENBQ2xELDhEQUFDQztvQ0FBTUMsU0FBUTs4Q0FDYiw0RUFBQ1Y7a0RBQU87Ozs7Ozs7Ozs7OzhDQUVWLDhEQUFDSDtvQ0FBSUMsV0FBVTs7c0RBQ2IsOERBQUNhOzRDQUNDQyxNQUFLOzRDQUNMQyxJQUFHOzRDQUNIQyxPQUFPbkM7NENBQ1BvQyxVQUFVLENBQUN4QixJQUFNWCxTQUFTVyxFQUFFeUIsTUFBTSxDQUFDRixLQUFLOzRDQUN4Q0csYUFBWTs0Q0FDWkMsTUFBSzs0Q0FDTEMsS0FBSTs0Q0FDSnJCLFdBQVU7NENBQ1ZzQixVQUFVL0M7NENBQ1ZrQyxPQUFPO2dEQUFDQyxXQUFVO2dEQUFPYSxPQUFNOzRDQUFNOzs7Ozs7c0RBRXZDLDhEQUFDQzs0Q0FBS3hCLFdBQVU7c0RBQXlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBSXBEdkIsdUJBQ0MsOERBQUNzQjs0QkFBSUMsV0FBVTtzQ0FDWnZCOzs7Ozs7c0NBSUwsOERBQUNzQjs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNJO29DQUNDVSxNQUFLO29DQUNMUSxVQUFVL0MsZ0JBQWdCLENBQUNNO29DQUMzQm1CLFdBQVU7OENBRVR6QixlQUFlLGtCQUFrQjs7Ozs7OzhDQUVwQyw4REFBQzZCO29DQUNDVSxNQUFLO29DQUNMVCxTQUFTL0I7b0NBQ1RnRCxVQUFVL0M7b0NBQ1Z5QixXQUFVOzhDQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFiO0dBaklNL0I7S0FBQUE7QUFtSU4saUVBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIi9ob21lL2h1bWF5b3UvRGVza3RvcC9vcGVuU2VhV2ViM0F1dGgvc3JjL0NvbXBvbmVudC9VcGRhdGVOZnQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29weSwgQ2hlY2sgfSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuXG5pbnRlcmZhY2UgTGlzdGluZ1BvcHVwUHJvcHMge1xuICBhZGRyZXNzOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgdG9rZW5JZDogc3RyaW5nO1xuICBvbkNvbmZpcm06IChwcmljZTogc3RyaW5nKSA9PiBQcm9taXNlPHZvaWQ+O1xuICBvbkNhbmNlbDogKCkgPT4gdm9pZDtcbn1cblxuY29uc3QgTGlzdGluZ1BvcHVwOiBSZWFjdC5GQzxMaXN0aW5nUG9wdXBQcm9wcz4gPSAoe1xuICBhZGRyZXNzLFxuICBuYW1lLFxuICB0b2tlbklkLFxuICBvbkNvbmZpcm0sXG4gIG9uQ2FuY2VsLFxufSkgPT4ge1xuICBjb25zdCBbaXNQcm9jZXNzaW5nLCBzZXRJc1Byb2Nlc3NpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbY29waWVkLCBzZXRDb3BpZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbcHJpY2UsIHNldFByaWNlXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xuXG4gIGNvbnN0IHNob3J0ZW5BZGRyZXNzID0gKGFkZHJlc3M6IHN0cmluZykgPT4ge1xuICAgIGlmICghYWRkcmVzcykgcmV0dXJuICcnO1xuICAgIHJldHVybiBgJHthZGRyZXNzLnNsaWNlKDAsIDYpfS4uLiR7YWRkcmVzcy5zbGljZSgtNCl9YDtcbiAgfTtcblxuICBjb25zdCBjb3B5VG9DbGlwYm9hcmQgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm47XG4gICAgXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGFkZHJlc3MpO1xuICAgICAgc2V0Q29waWVkKHRydWUpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRDb3BpZWQoZmFsc2UpLCAyMDAwKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBjb3B5IGFkZHJlc3M6JywgZXJyKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGU6IFJlYWN0LkZvcm1FdmVudCkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBcbiAgICBpZiAoIXByaWNlIHx8IGlzTmFOKE51bWJlcihwcmljZSkpIHx8IE51bWJlcihwcmljZSkgPD0gMCkge1xuICAgICAgc2V0RXJyb3IoJ1BsZWFzZSBlbnRlciBhIHZhbGlkIHByaWNlJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIHNldElzUHJvY2Vzc2luZyh0cnVlKTtcbiAgICAgIHNldEVycm9yKG51bGwpO1xuICAgICAgLy8gQ29udmVydCBwcmljZSB0byBXZWkgKG11bHRpcGx5IGJ5IDEwXjE4KVxuICAgICAgY29uc3QgcHJpY2VJbldlaSA9IChOdW1iZXIocHJpY2UpICogMWUxOCkudG9TdHJpbmcoKTtcbiAgICAgIGF3YWl0IG9uQ29uZmlybShwcmljZUluV2VpKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZHVyaW5nIGxpc3Rpbmc6JywgZXJyb3IpO1xuICAgICAgc2V0RXJyb3IoJ0ZhaWxlZCB0byBsaXN0IE5GVC4gUGxlYXNlIHRyeSBhZ2Fpbi4nKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0SXNQcm9jZXNzaW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcHVwLW92ZXJsYXlcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9wdXAtY29udGVudFwiPlxuICAgICAgICA8aDI+TGlzdCBORlQgZm9yIFNhbGU8L2gyPlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHN0cm9uZz5OYW1lOjwvc3Ryb25nPiB7bmFtZX1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZGRyZXNzLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxzdHJvbmc+QWRkcmVzczo8L3N0cm9uZz5cbiAgICAgICAgICA8Y29kZSBjbGFzc05hbWU9XCJhZGRyZXNzLXRleHRcIj57c2hvcnRlbkFkZHJlc3MoYWRkcmVzcyl9PC9jb2RlPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e2NvcHlUb0NsaXBib2FyZH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvcHktYnV0dG9uXCJcbiAgICAgICAgICAgIHRpdGxlPXtjb3BpZWQgPyAnQ29waWVkIScgOiAnQ29weSBhZGRyZXNzJ31cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7Y29waWVkID8gKFxuICAgICAgICAgICAgICA8Q2hlY2sgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LWdyZWVuLTUwMFwiIC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8Q29weSBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtZ3JheS01MDBcIiAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8c3Ryb25nPlRva2VuIElEOjwvc3Ryb25nPiB7dG9rZW5JZH1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwibXQtNFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIiBzdHlsZT17e21hcmdpblRvcDpcIjIwcHhcIn19PlxuICAgIDxsYWJlbCBodG1sRm9yPVwicHJpY2VcIj5cbiAgICAgIDxzdHJvbmc+TGlzdGluZyBQcmljZSAoRVRIKTwvc3Ryb25nPlxuICAgIDwvbGFiZWw+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICBpZD1cInByaWNlXCJcbiAgICAgICAgdmFsdWU9e3ByaWNlfVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFByaWNlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgcGxhY2Vob2xkZXI9XCIwLjAwXCJcbiAgICAgICAgc3RlcD1cIjAuMDAwMDAxXCJcbiAgICAgICAgbWluPVwiMFwiXG4gICAgICAgIGNsYXNzTmFtZT1cInByaWNlLWlucHV0XCJcbiAgICAgICAgZGlzYWJsZWQ9e2lzUHJvY2Vzc2luZ31cbiAgICAgICAgc3R5bGU9e3ttYXJnaW5Ub3A6XCIxMHB4XCIsd2lkdGg6XCIxMDAlXCJ9fVxuICAgICAgLz5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFic29sdXRlIHJpZ2h0LTMgdG9wLTIuNSB0ZXh0LWdyYXktNTAwXCI+RVRIPC9zcGFuPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICAgICAgICAgIHtlcnJvciAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTIgcC0zIGJnLXJlZC01MCB0ZXh0LXJlZC01MDAgcm91bmRlZC1tZCB0ZXh0LXNtXCI+XG4gICAgICAgICAgICAgIHtlcnJvcn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcHVwLWJ1dHRvbnNcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgIGRpc2FibGVkPXtpc1Byb2Nlc3NpbmcgfHwgIXByaWNlfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb25maXJtLWJ1dHRvblwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtpc1Byb2Nlc3NpbmcgPyAnUHJvY2Vzc2luZy4uLicgOiAnTGlzdCBORlQnfVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNhbmNlbH1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzUHJvY2Vzc2luZ31cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FuY2VsLWJ1dHRvblwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGlzdGluZ1BvcHVwO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJDb3B5IiwiQ2hlY2siLCJMaXN0aW5nUG9wdXAiLCJhZGRyZXNzIiwibmFtZSIsInRva2VuSWQiLCJvbkNvbmZpcm0iLCJvbkNhbmNlbCIsImlzUHJvY2Vzc2luZyIsInNldElzUHJvY2Vzc2luZyIsImVycm9yIiwic2V0RXJyb3IiLCJjb3BpZWQiLCJzZXRDb3BpZWQiLCJwcmljZSIsInNldFByaWNlIiwic2hvcnRlbkFkZHJlc3MiLCJzbGljZSIsImNvcHlUb0NsaXBib2FyZCIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInNldFRpbWVvdXQiLCJlcnIiLCJjb25zb2xlIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiaXNOYU4iLCJOdW1iZXIiLCJwcmljZUluV2VpIiwidG9TdHJpbmciLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsInN0cm9uZyIsImNvZGUiLCJidXR0b24iLCJvbkNsaWNrIiwidGl0bGUiLCJmb3JtIiwib25TdWJtaXQiLCJzdHlsZSIsIm1hcmdpblRvcCIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsImlkIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwic3RlcCIsIm1pbiIsImRpc2FibGVkIiwid2lkdGgiLCJzcGFuIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/Component/UpdateNft.tsx\n"));

/***/ })

});