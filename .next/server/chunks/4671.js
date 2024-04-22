exports.id = 4671;
exports.ids = [4671];
exports.modules = {

/***/ 2190:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _App_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1824);
/* harmony import */ var _apiServices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4287);
/* harmony import */ var _homeServices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4171);



function wallettransact() {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.wallettransactions}CustGUID=${localStorage.getItem("CustGUID") === null || localStorage.getItem("CustGUID") === undefined ? _homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.defaultCustGUID : window.atob(localStorage.getItem("CustGUID"))}&limit=${"1000"}&pageNo=${"1"}&q=`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "POST");
}
const WalletAPI = {
    wallettransact
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WalletAPI);


/***/ }),

/***/ 2372:
/***/ (() => {



/***/ })

};
;