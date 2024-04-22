"use strict";
exports.id = 3172;
exports.ids = [3172];
exports.modules = {

/***/ 3172:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _App_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1824);
/* harmony import */ var _apiServices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4287);
/* harmony import */ var _homeServices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4171);



function getmyorder(ordernumber) {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.myorder}custGUID=${localStorage.getItem("CustGUID") === null || localStorage.getItem("CustGUID") === undefined ? _homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.defaultCustGUID : window.atob(localStorage.getItem("CustGUID"))}&clientId=${_homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.ClientId}&CurrencyCode=${_homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.currencyCode}&ordernum=${ordernumber}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "GET");
}
function getorderlisting() {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.orderlisting}custGUID=${localStorage.getItem("CustGUID") === null || localStorage.getItem("CustGUID") === undefined ? _homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.defaultCustGUID : window.atob(localStorage.getItem("CustGUID"))}&clientId=${_homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.ClientId}&CurrencyCode=${_homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.currencyCode}&ordernum=`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "GET");
}
function Savefeedbackdeliveryreview(action) {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.Savefeedbackdeliveryreview}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "POST", action);
}
function getorderdetailsfeedbackitems(databody) {
    console.log("chkd..", databody);
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.GetFeedbackDetailsOrderAndItem}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "POST", databody);
}
function CheckReviewIsGivenOrNot(givendata) {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.CheckReviewIsGivenOrNot}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "POST", givendata);
}
function GetAllReviewFromCustomerForProduct(skuid) {
    console.log("skuidorderchke..", skuid);
    const databody = {
        OrderNumber: "",
        FeedbackreviewId: 1,
        FeedbackTypeId: 1,
        OrderItemId: skuid,
        Rating: null,
        Pros: "",
        Cons: "",
        Comment: "",
        IsApprovedByAdmin: null,
        FeedbackDate: ""
    };
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.GetAllReviewFromCustomerForProduct}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "POST", databody);
}
function SaveFeedbackFromPDP(orderdatapdp) {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.SaveFeedbackFromPDP}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "POST", orderdatapdp);
}
function ordercanceled(databody) {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.cancelorder}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "POST", databody);
}
function orderReturn(databody) {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.refundorder}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "POST", databody);
}
function Saveorderreviewfeedback(productdata) {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.Savefeedbackorderreview}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "POST", productdata);
}
function cancelreasonlist() {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.OrderCancelStatusList}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "GET");
}
function recentorders() {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.recentorders}custGUID=${localStorage.getItem("CustGUID") === null || localStorage.getItem("CustGUID") === undefined ? _homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.defaultCustGUID : window.atob(localStorage.getItem("CustGUID"))}&CurrencyCode=${_homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.currencyCode}&clientId=${_homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.ClientId}&count=5`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "GET");
}
function downloadInvoice(orderId) {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.invoiceDownload}OrderId=${orderId}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "POST");
}
const OrderdetailAPI = {
    getmyorder,
    getorderlisting,
    Savefeedbackdeliveryreview,
    getorderdetailsfeedbackitems,
    CheckReviewIsGivenOrNot,
    GetAllReviewFromCustomerForProduct,
    SaveFeedbackFromPDP,
    ordercanceled,
    Saveorderreviewfeedback,
    cancelreasonlist,
    recentorders,
    orderReturn,
    downloadInvoice
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderdetailAPI);


/***/ })

};
;