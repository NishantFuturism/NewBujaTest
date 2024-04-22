exports.id = 3190;
exports.ids = [3190];
exports.modules = {

/***/ 8241:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const LogoLoader = (props)=>{
    const [firstLoadCheck, setFirstLoadCheck] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setFirstLoadCheck(true);
    }, []);
    const globalStyle = {
        position: "fixed",
        top: "50%",
        left: "50%",
        zIndex: "9999999999999",
        transform: "translate(-50%, -50%)"
    };
    const overLayStyle = {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.2)",
        zIndex: "99999999999999"
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: firstLoadCheck && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                props?.isGlobal && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    style: overLayStyle
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    style: props?.isGlobal ? globalStyle : {
                        minHeight: "100vh"
                    },
                    className: "container d-flex justify-content-center align-items-center h-100 category-loader",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "/images/adibuja-logo-animation.gif",
                        alt: "",
                        style: {
                            justifySelf: "center",
                            width: "80px",
                            height: "80px"
                        }
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LogoLoader);


/***/ }),

/***/ 2269:
/***/ (() => {



/***/ }),

/***/ 3858:
/***/ (() => {



/***/ }),

/***/ 4573:
/***/ (() => {



/***/ })

};
;