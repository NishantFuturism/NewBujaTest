"use strict";
exports.id = 8659;
exports.ids = [8659];
exports.modules = {

/***/ 8659:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Warn)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_assets1_css_default_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4573);
/* harmony import */ var _public_assets1_css_default_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_assets1_css_default_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_assets1_css_responsive_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8698);
/* harmony import */ var _public_assets1_css_responsive_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_assets1_css_responsive_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_assets_css_style_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2269);
/* harmony import */ var _public_assets_css_style_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_assets_css_style_min_css__WEBPACK_IMPORTED_MODULE_4__);
/* eslint-disable react/prop-types */ 



// import '../../../public/assets1/css/style.min.css';

function Warn(props) {
    const { msg } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "topmessage alert alert-danger alert-dismissible show",
            role: "alert",
            style: {
                position: "fixed",
                top: "0",
                zIndex: "9999999999",
                color: "#000"
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "fa fa-warning cross"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                    className: "msg",
                    children: msg
                })
            ]
        })
    });
}


/***/ })

};
;