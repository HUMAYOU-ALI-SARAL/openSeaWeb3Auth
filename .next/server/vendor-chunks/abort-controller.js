"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/abort-controller";
exports.ids = ["vendor-chunks/abort-controller"];
exports.modules = {

/***/ "(ssr)/./node_modules/abort-controller/dist/abort-controller.js":
/*!****************************************************************!*\
  !*** ./node_modules/abort-controller/dist/abort-controller.js ***!
  \****************************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("/**\n * @author Toru Nagashima <https://github.com/mysticatea>\n * See LICENSE file in root directory for full license.\n */\n\n\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n\nvar eventTargetShim = __webpack_require__(/*! event-target-shim */ \"(ssr)/./node_modules/event-target-shim/dist/event-target-shim.js\");\n\n/**\n * The signal class.\n * @see https://dom.spec.whatwg.org/#abortsignal\n */\nclass AbortSignal extends eventTargetShim.EventTarget {\n    /**\n     * AbortSignal cannot be constructed directly.\n     */\n    constructor() {\n        super();\n        throw new TypeError(\"AbortSignal cannot be constructed directly\");\n    }\n    /**\n     * Returns `true` if this `AbortSignal`'s `AbortController` has signaled to abort, and `false` otherwise.\n     */\n    get aborted() {\n        const aborted = abortedFlags.get(this);\n        if (typeof aborted !== \"boolean\") {\n            throw new TypeError(`Expected 'this' to be an 'AbortSignal' object, but got ${this === null ? \"null\" : typeof this}`);\n        }\n        return aborted;\n    }\n}\neventTargetShim.defineEventAttribute(AbortSignal.prototype, \"abort\");\n/**\n * Create an AbortSignal object.\n */\nfunction createAbortSignal() {\n    const signal = Object.create(AbortSignal.prototype);\n    eventTargetShim.EventTarget.call(signal);\n    abortedFlags.set(signal, false);\n    return signal;\n}\n/**\n * Abort a given signal.\n */\nfunction abortSignal(signal) {\n    if (abortedFlags.get(signal) !== false) {\n        return;\n    }\n    abortedFlags.set(signal, true);\n    signal.dispatchEvent({ type: \"abort\" });\n}\n/**\n * Aborted flag for each instances.\n */\nconst abortedFlags = new WeakMap();\n// Properties should be enumerable.\nObject.defineProperties(AbortSignal.prototype, {\n    aborted: { enumerable: true },\n});\n// `toString()` should return `\"[object AbortSignal]\"`\nif (typeof Symbol === \"function\" && typeof Symbol.toStringTag === \"symbol\") {\n    Object.defineProperty(AbortSignal.prototype, Symbol.toStringTag, {\n        configurable: true,\n        value: \"AbortSignal\",\n    });\n}\n\n/**\n * The AbortController.\n * @see https://dom.spec.whatwg.org/#abortcontroller\n */\nclass AbortController {\n    /**\n     * Initialize this controller.\n     */\n    constructor() {\n        signals.set(this, createAbortSignal());\n    }\n    /**\n     * Returns the `AbortSignal` object associated with this object.\n     */\n    get signal() {\n        return getSignal(this);\n    }\n    /**\n     * Abort and signal to any observers that the associated activity is to be aborted.\n     */\n    abort() {\n        abortSignal(getSignal(this));\n    }\n}\n/**\n * Associated signals.\n */\nconst signals = new WeakMap();\n/**\n * Get the associated signal of a given controller.\n */\nfunction getSignal(controller) {\n    const signal = signals.get(controller);\n    if (signal == null) {\n        throw new TypeError(`Expected 'this' to be an 'AbortController' object, but got ${controller === null ? \"null\" : typeof controller}`);\n    }\n    return signal;\n}\n// Properties should be enumerable.\nObject.defineProperties(AbortController.prototype, {\n    signal: { enumerable: true },\n    abort: { enumerable: true },\n});\nif (typeof Symbol === \"function\" && typeof Symbol.toStringTag === \"symbol\") {\n    Object.defineProperty(AbortController.prototype, Symbol.toStringTag, {\n        configurable: true,\n        value: \"AbortController\",\n    });\n}\n\nexports.AbortController = AbortController;\nexports.AbortSignal = AbortSignal;\nexports[\"default\"] = AbortController;\n\nmodule.exports = AbortController\nmodule.exports.AbortController = module.exports[\"default\"] = AbortController\nmodule.exports.AbortSignal = AbortSignal\n//# sourceMappingURL=abort-controller.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvYWJvcnQtY29udHJvbGxlci9kaXN0L2Fib3J0LWNvbnRyb2xsZXIuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDYTs7QUFFYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7O0FBRTdELHNCQUFzQixtQkFBTyxDQUFDLDJGQUFtQjs7QUFFakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEZBQTBGLHFDQUFxQztBQUMvSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixlQUFlO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxrQkFBa0I7QUFDakMsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRkFBMEYsaURBQWlEO0FBQzNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGtCQUFrQjtBQUNoQyxhQUFhLGtCQUFrQjtBQUMvQixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsdUJBQXVCO0FBQ3ZCLG1CQUFtQjtBQUNuQixrQkFBZTs7QUFFZjtBQUNBLDhCQUE4QixHQUFHLHlCQUF5QjtBQUMxRCwwQkFBMEI7QUFDMUIiLCJzb3VyY2VzIjpbIi9ob21lL2h1bWF5b3UvRGVza3RvcC9vcGVuU2VhV2ViM0F1dGgvbm9kZV9tb2R1bGVzL2Fib3J0LWNvbnRyb2xsZXIvZGlzdC9hYm9ydC1jb250cm9sbGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGF1dGhvciBUb3J1IE5hZ2FzaGltYSA8aHR0cHM6Ly9naXRodWIuY29tL215c3RpY2F0ZWE+XG4gKiBTZWUgTElDRU5TRSBmaWxlIGluIHJvb3QgZGlyZWN0b3J5IGZvciBmdWxsIGxpY2Vuc2UuXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGV2ZW50VGFyZ2V0U2hpbSA9IHJlcXVpcmUoJ2V2ZW50LXRhcmdldC1zaGltJyk7XG5cbi8qKlxuICogVGhlIHNpZ25hbCBjbGFzcy5cbiAqIEBzZWUgaHR0cHM6Ly9kb20uc3BlYy53aGF0d2cub3JnLyNhYm9ydHNpZ25hbFxuICovXG5jbGFzcyBBYm9ydFNpZ25hbCBleHRlbmRzIGV2ZW50VGFyZ2V0U2hpbS5FdmVudFRhcmdldCB7XG4gICAgLyoqXG4gICAgICogQWJvcnRTaWduYWwgY2Fubm90IGJlIGNvbnN0cnVjdGVkIGRpcmVjdGx5LlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQWJvcnRTaWduYWwgY2Fubm90IGJlIGNvbnN0cnVjdGVkIGRpcmVjdGx5XCIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGlzIGBBYm9ydFNpZ25hbGAncyBgQWJvcnRDb250cm9sbGVyYCBoYXMgc2lnbmFsZWQgdG8gYWJvcnQsIGFuZCBgZmFsc2VgIG90aGVyd2lzZS5cbiAgICAgKi9cbiAgICBnZXQgYWJvcnRlZCgpIHtcbiAgICAgICAgY29uc3QgYWJvcnRlZCA9IGFib3J0ZWRGbGFncy5nZXQodGhpcyk7XG4gICAgICAgIGlmICh0eXBlb2YgYWJvcnRlZCAhPT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYEV4cGVjdGVkICd0aGlzJyB0byBiZSBhbiAnQWJvcnRTaWduYWwnIG9iamVjdCwgYnV0IGdvdCAke3RoaXMgPT09IG51bGwgPyBcIm51bGxcIiA6IHR5cGVvZiB0aGlzfWApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhYm9ydGVkO1xuICAgIH1cbn1cbmV2ZW50VGFyZ2V0U2hpbS5kZWZpbmVFdmVudEF0dHJpYnV0ZShBYm9ydFNpZ25hbC5wcm90b3R5cGUsIFwiYWJvcnRcIik7XG4vKipcbiAqIENyZWF0ZSBhbiBBYm9ydFNpZ25hbCBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUFib3J0U2lnbmFsKCkge1xuICAgIGNvbnN0IHNpZ25hbCA9IE9iamVjdC5jcmVhdGUoQWJvcnRTaWduYWwucHJvdG90eXBlKTtcbiAgICBldmVudFRhcmdldFNoaW0uRXZlbnRUYXJnZXQuY2FsbChzaWduYWwpO1xuICAgIGFib3J0ZWRGbGFncy5zZXQoc2lnbmFsLCBmYWxzZSk7XG4gICAgcmV0dXJuIHNpZ25hbDtcbn1cbi8qKlxuICogQWJvcnQgYSBnaXZlbiBzaWduYWwuXG4gKi9cbmZ1bmN0aW9uIGFib3J0U2lnbmFsKHNpZ25hbCkge1xuICAgIGlmIChhYm9ydGVkRmxhZ3MuZ2V0KHNpZ25hbCkgIT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYWJvcnRlZEZsYWdzLnNldChzaWduYWwsIHRydWUpO1xuICAgIHNpZ25hbC5kaXNwYXRjaEV2ZW50KHsgdHlwZTogXCJhYm9ydFwiIH0pO1xufVxuLyoqXG4gKiBBYm9ydGVkIGZsYWcgZm9yIGVhY2ggaW5zdGFuY2VzLlxuICovXG5jb25zdCBhYm9ydGVkRmxhZ3MgPSBuZXcgV2Vha01hcCgpO1xuLy8gUHJvcGVydGllcyBzaG91bGQgYmUgZW51bWVyYWJsZS5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKEFib3J0U2lnbmFsLnByb3RvdHlwZSwge1xuICAgIGFib3J0ZWQ6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxufSk7XG4vLyBgdG9TdHJpbmcoKWAgc2hvdWxkIHJldHVybiBgXCJbb2JqZWN0IEFib3J0U2lnbmFsXVwiYFxuaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLnRvU3RyaW5nVGFnID09PSBcInN5bWJvbFwiKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFib3J0U2lnbmFsLnByb3RvdHlwZSwgU3ltYm9sLnRvU3RyaW5nVGFnLCB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IFwiQWJvcnRTaWduYWxcIixcbiAgICB9KTtcbn1cblxuLyoqXG4gKiBUaGUgQWJvcnRDb250cm9sbGVyLlxuICogQHNlZSBodHRwczovL2RvbS5zcGVjLndoYXR3Zy5vcmcvI2Fib3J0Y29udHJvbGxlclxuICovXG5jbGFzcyBBYm9ydENvbnRyb2xsZXIge1xuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemUgdGhpcyBjb250cm9sbGVyLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzaWduYWxzLnNldCh0aGlzLCBjcmVhdGVBYm9ydFNpZ25hbCgpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgYEFib3J0U2lnbmFsYCBvYmplY3QgYXNzb2NpYXRlZCB3aXRoIHRoaXMgb2JqZWN0LlxuICAgICAqL1xuICAgIGdldCBzaWduYWwoKSB7XG4gICAgICAgIHJldHVybiBnZXRTaWduYWwodGhpcyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFib3J0IGFuZCBzaWduYWwgdG8gYW55IG9ic2VydmVycyB0aGF0IHRoZSBhc3NvY2lhdGVkIGFjdGl2aXR5IGlzIHRvIGJlIGFib3J0ZWQuXG4gICAgICovXG4gICAgYWJvcnQoKSB7XG4gICAgICAgIGFib3J0U2lnbmFsKGdldFNpZ25hbCh0aGlzKSk7XG4gICAgfVxufVxuLyoqXG4gKiBBc3NvY2lhdGVkIHNpZ25hbHMuXG4gKi9cbmNvbnN0IHNpZ25hbHMgPSBuZXcgV2Vha01hcCgpO1xuLyoqXG4gKiBHZXQgdGhlIGFzc29jaWF0ZWQgc2lnbmFsIG9mIGEgZ2l2ZW4gY29udHJvbGxlci5cbiAqL1xuZnVuY3Rpb24gZ2V0U2lnbmFsKGNvbnRyb2xsZXIpIHtcbiAgICBjb25zdCBzaWduYWwgPSBzaWduYWxzLmdldChjb250cm9sbGVyKTtcbiAgICBpZiAoc2lnbmFsID09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgRXhwZWN0ZWQgJ3RoaXMnIHRvIGJlIGFuICdBYm9ydENvbnRyb2xsZXInIG9iamVjdCwgYnV0IGdvdCAke2NvbnRyb2xsZXIgPT09IG51bGwgPyBcIm51bGxcIiA6IHR5cGVvZiBjb250cm9sbGVyfWApO1xuICAgIH1cbiAgICByZXR1cm4gc2lnbmFsO1xufVxuLy8gUHJvcGVydGllcyBzaG91bGQgYmUgZW51bWVyYWJsZS5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKEFib3J0Q29udHJvbGxlci5wcm90b3R5cGUsIHtcbiAgICBzaWduYWw6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuICAgIGFib3J0OiB7IGVudW1lcmFibGU6IHRydWUgfSxcbn0pO1xuaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLnRvU3RyaW5nVGFnID09PSBcInN5bWJvbFwiKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFib3J0Q29udHJvbGxlci5wcm90b3R5cGUsIFN5bWJvbC50b1N0cmluZ1RhZywge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBcIkFib3J0Q29udHJvbGxlclwiLFxuICAgIH0pO1xufVxuXG5leHBvcnRzLkFib3J0Q29udHJvbGxlciA9IEFib3J0Q29udHJvbGxlcjtcbmV4cG9ydHMuQWJvcnRTaWduYWwgPSBBYm9ydFNpZ25hbDtcbmV4cG9ydHMuZGVmYXVsdCA9IEFib3J0Q29udHJvbGxlcjtcblxubW9kdWxlLmV4cG9ydHMgPSBBYm9ydENvbnRyb2xsZXJcbm1vZHVsZS5leHBvcnRzLkFib3J0Q29udHJvbGxlciA9IG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IEFib3J0Q29udHJvbGxlclxubW9kdWxlLmV4cG9ydHMuQWJvcnRTaWduYWwgPSBBYm9ydFNpZ25hbFxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YWJvcnQtY29udHJvbGxlci5qcy5tYXBcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/abort-controller/dist/abort-controller.js\n");

/***/ })

};
;