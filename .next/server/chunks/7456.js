"use strict";
exports.id = 7456;
exports.ids = [7456];
exports.modules = {

/***/ 7456:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _App_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1824);
/* harmony import */ var _apiServices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4287);
/* harmony import */ var _homeServices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4171);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6734);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);




function productReorder(pageNum, PageSize) {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.ReorderProductList}CustGUID=${localStorage.getItem("CustGUID") === null || localStorage.getItem("CustGUID") === undefined ? _homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.defaultCustGUID : window.atob(localStorage.getItem("CustGUID"))}&PageNumber=${pageNum}&PageSize=${PageSize}&LanguageId=${_homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.languageId}&clientId=${_homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.ClientId}&currencyCode=${_homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.currencyCode}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "GET");
}
function Reorder() {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.ReorderProductList}CustGUID=${localStorage.getItem("CustGUID") === null || localStorage.getItem("CustGUID") === undefined ? _homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.defaultCustGUID : window.atob(localStorage.getItem("CustGUID"))}&PageNumber=1&PageSize=9&LanguageId=${_homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.languageId}&clientId=${_homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.ClientId}&currencyCode=${_homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.currencyCode}&pincode=${js_cookie__WEBPACK_IMPORTED_MODULE_3___default().get("pincodevalue") || localStorage.getItem("pincodevalue") || _homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.pincode}`;
    /*
  const url = `${Constants.urls.baseUrl}${Constants.endPoints.Reorder}CustGUID=${(localStorage.getItem('CustGUID') === null || localStorage.getItem('CustGUID') === undefined) ? ConstantsValues.defaultCustGUID : window.atob(localStorage.getItem('CustGUID'))}&LanguageId=${ConstantsValues.languageId}&clientId=${ConstantsValues.ClientId}&CartGUID=${(localStorage.getItem('CartGUID') === null || localStorage.getItem('CartGUID') === undefined) ? ConstantsValues.defaultCartGUID : window.atob(localStorage.getItem('CartGUID'))}&currencyCode=${ConstantsValues.currencyCode}`; */ return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "GET");
}
const ReorderAPI = {
    productReorder,
    Reorder
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReorderAPI);


/***/ })

};
;