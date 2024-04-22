exports.id = 3823;
exports.ids = [3823];
exports.modules = {

/***/ 2043:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_loadable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7285);



const LoadableMyComponent = (0,_utils_loadable__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(()=>Promise.all(/* import() */[__webpack_require__.e(3574), __webpack_require__.e(9672)]).then(__webpack_require__.bind(__webpack_require__, 9672)), {
    fallback: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "shimmer-container",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "shimmer"
        })
    })
});
const DynamicLoadableMyComponent = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>Promise.resolve(LoadableMyComponent), {
    ssr: true
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DynamicLoadableMyComponent);


/***/ }),

/***/ 7285:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_detect_offline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7784);
/* harmony import */ var react_detect_offline__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_detect_offline__WEBPACK_IMPORTED_MODULE_2__);



const loadable = (importFunc, { fallback = null } = {
    fallback: null
})=>{
    const LazyComponent = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(importFunc);
    const LoadableWrapper = (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {
            fallback: fallback,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LazyComponent, {
                ...props
            })
        });
    return LoadableWrapper;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadable);


/***/ }),

/***/ 2372:
/***/ (() => {



/***/ })

};
;