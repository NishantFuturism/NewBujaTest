"use strict";
exports.id = 1419;
exports.ids = [1419];
exports.modules = {

/***/ 1419:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   f: () => (/* binding */ PaymentKey)
/* harmony export */ });
/* harmony import */ var _App_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1824);
/* harmony import */ var _apiServices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4287);
/* harmony import */ var _homeServices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4171);



// testing details
const RAZOR_PAY_KEY = "rzp_test_VCsnPXPPhGYPJC";
const RAZOR_PAY_SECRET = "P23u4yFZujPDoFaOr64e70fC";
// live details 
//const RAZOR_PAY_KEY = "rzp_live_a2drmSnqSRpolp"
//const RAZOR_PAY_SECRET = "MRYJDKpRs4fiT1oSxzi0M9NC"
function initiatetransaction(paymentmode) {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.initiatetransaction}CustGUID=${localStorage.getItem("CustGUID") === null || localStorage.getItem("CustGUID") === undefined ? _homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.defaultCustGUID : window.atob(localStorage.getItem("CustGUID"))}&cartGuid=${localStorage.getItem("CartGUID") === null || localStorage.getItem("CartGUID") === undefined ? _homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.defaultCartGUID : window.atob(localStorage.getItem("CartGUID"))}&OrderGuid=${_homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.OrderGuid}&PayModeTypes=${paymentmode}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "POST");
}
function createOrderid(databody) {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.RazorPaycreateorder}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "POST", databody);
}
function captutreRazorpay(databody) {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.captureRazorPayorder}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "POST", databody);
}
function razorpayVerifysignature(databody) {
    console.log(databody);
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.RazorPayverifysigniture}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "POST", databody);
}
function placeordercreditcard(Transactionid, paymentType, CustomerAddressId) {
    const orderPlacedForm = "Reactweb";
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.creditcard}cartId=${localStorage.getItem("CartGUID") === null || localStorage.getItem("CartGUID") === undefined ? _homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.defaultCartGUID : window.atob(localStorage.getItem("CartGUID"))}&transaction=${Transactionid}&customer=${localStorage.getItem("CustGUID") === null || localStorage.getItem("CustGUID") === undefined ? _homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.defaultCustGUID : window.atob(localStorage.getItem("CustGUID"))}&authLoginId=${PaymentKey.RAZOR_PAY_KEY}&transactionKey=${PaymentKey.RAZOR_PAY_SECRET}&clientId=${_homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.ClientId}&cardNumber=&expiration=&cardCode=&orderComment=&orderPlacedForm=${orderPlacedForm}&CurrencyCode=INR&billingAddress=${CustomerAddressId}&shippingAddress=${CustomerAddressId}&isDevelopment=false&fixedShippingDurationId=1&paymentmode=${paymentType}&carttype=&storeCard=false&SavedCardId=&RefOrderId=&sellerid=${localStorage.getItem("sellerID") === null || localStorage.getItem("sellerID") === undefined ? _homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.defaultSellerID : localStorage.getItem("sellerID")}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "POST");
}
function shiprocketCreateOrder(Transactionid, paymentType, CustomerAddressId, paymentmethod) {
    const pinvalue = localStorage.getItem("pincodevalue") && localStorage.getItem("pincodevalue") !== "" ? localStorage.getItem("pincodevalue") : "411045";
    const orderPlacedForm = "Reactweb";
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.shiprocketCreateOrder}`;
    const databody = {
        "cartId": localStorage.getItem("CartGUID") === null || localStorage.getItem("CartGUID") === undefined ? _homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.defaultCartGUID : window.atob(localStorage.getItem("CartGUID")),
        "custGuid": localStorage.getItem("CustGUID") === null || localStorage.getItem("CustGUID") === undefined ? _homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.defaultCustGUID : window.atob(localStorage.getItem("CustGUID")),
        "pincode": pinvalue,
        "addressId": CustomerAddressId,
        "authLoginId": PaymentKey.RAZOR_PAY_KEY,
        "transactionKey": PaymentKey.RAZOR_PAY_SECRET,
        "clientId": _homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.ClientId,
        "languageId": 2,
        "cardNumber": "",
        "expiration": "",
        "cardCode": "",
        "orderComment": "",
        "orderPlacedForm": orderPlacedForm,
        "currencyName": "INR",
        "currencySymbol": "INR",
        "isUserAuthenticated": true,
        "sellerId": localStorage.getItem("sellerID") === null || localStorage.getItem("sellerID") === undefined ? _homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.defaultSellerID : localStorage.getItem("sellerID"),
        "paymentMethod": paymentmethod === "COD" ? "COD" : "Prepaid",
        "billingAddress": CustomerAddressId,
        "shippingAddress": CustomerAddressId,
        "isDevelopment": false,
        "fixedShippingDurationId": 0,
        "paymentMode": paymentType,
        "cartType": "",
        "storeCard": false,
        "savedCardId": "",
        "refOrderId": "",
        "customerPaymentProfileId": "",
        "customerType": 0,
        "sessionId": "",
        "transactionId": Transactionid
    };
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "POST", databody);
}
function getcustomerwalletbalance() {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.customerdetail}clientid=${_homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.ClientId}&guid=${localStorage.getItem("CustGUID") === null || localStorage.getItem("CustGUID") === undefined ? _homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.defaultCustGUID : window.atob(localStorage.getItem("CustGUID"))}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "GET");
}
function updateDeliveryslotTime(OrderId, DeliverySlotDate, DeliverySlotID, InstructionForDeliverySlot) {
    // const url = `${Constants.urls.baseUrl}${Constants.endPoints.UpdateDeliveryDateAndSlotTime}`;
    const EmailId = localStorage.getItem("Email") !== "" && localStorage.getItem("Email") !== undefined ? localStorage.getItem("Email") : null;
    const UserMobile = localStorage.getItem("UserLastPhone") !== "" && localStorage.getItem("UserLastPhone") !== undefined ? localStorage.getItem("UserLastPhone") : null;
    const firstName = localStorage.getItem("UserFirstName") !== "" && localStorage.getItem("UserFirstName") !== undefined ? localStorage.getItem("UserFirstName") : null;
    const lastName = localStorage.getItem("UserLastName") !== "" && localStorage.getItem("UserLastName") !== undefined ? localStorage.getItem("UserLastName") : null;
    // Logistics use
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.Updatedeliveryinfosendordersmsemail}currencyCode=${_homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.currencyCode}&custGUID=${localStorage.getItem("CustGUID") === null || localStorage.getItem("CustGUID") === undefined ? _homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.defaultCustGUID : window.atob(localStorage.getItem("CustGUID"))}&Instructionfordelivery=${InstructionForDeliverySlot}&clientId=${_homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.ClientId}&email=${EmailId}&phone=${UserMobile}&fullName=${firstName}${lastName}&OrderNumber=${OrderId}&sellerid=${localStorage.getItem("sellerID") === null || localStorage.getItem("sellerID") === undefined ? _homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.defaultSellerID : localStorage.getItem("sellerID")}`;
    // const url = `${Constants.urls.baseUrl}${Constants.endPoints.Updatedeliveryinfosendordersmsemail}currencyCode=${ConstantsValues.currencyCode}&custGUID=${(localStorage.getItem('CustGUID') === null || localStorage.getItem('CustGUID') === undefined) ? ConstantsValues.defaultCustGUID : window.atob(localStorage.getItem('CustGUID'))}&deliverySlotDate=${DeliverySlotDate}&deliverySlotId=${DeliverySlotID}&Instructionfordelivery=${InstructionForDeliverySlot}&clientId=${ConstantsValues.ClientId}&email=${EmailId}&phone=${UserMobile}&fullName=${firstName}${lastName}&orderOrRfqNumber=${OrderId}`
    // const url = `${Constants.urls.baseUrl}${Constants.endPoints.Updatedeliveryinfosendordersmsemail}CurrencyCode=${ConstantsValues.currencyCode}&CustGUID=${(localStorage.getItem('CustGUID') === null || localStorage.getItem('CustGUID') === undefined) ? ConstantsValues.defaultCustGUID : window.atob(localStorage.getItem('CustGUID'))}&DeliverySlotDate=${DeliverySlotDate}&DeliverySlotId=${DeliverySlotID}&Instructionfordelivery=${InstructionForDeliverySlot}&clientId=${ConstantsValues.ClientId}&emailid=${EmailId}&phone=${UserMobile}&fullName=${firstName}${lastName}&orderorrfqNumber=${OrderId}`
    console.log("url1delivery====", url);
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "POST");
}
function paymentinfo(paymentid) {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.payment}${paymentid}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "GET");
}
function paymentdetailsbyorder(ordernumber) {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.paymentdetailbyorder}OrderNumber=${ordernumber}&CustomerGuid=${localStorage.getItem("CustGUID") === null || localStorage.getItem("CustGUID") === undefined ? _homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.defaultCustGUID : window.atob(localStorage.getItem("CustGUID"))}&CurrencyCode=${_homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.currencyCode}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "POST");
}
const PaymentAPI = {
    initiatetransaction,
    createOrderid,
    captutreRazorpay,
    razorpayVerifysignature,
    placeordercreditcard,
    getcustomerwalletbalance,
    updateDeliveryslotTime,
    paymentinfo,
    paymentdetailsbyorder,
    shiprocketCreateOrder
};
const PaymentKey = {
    RAZOR_PAY_KEY,
    RAZOR_PAY_SECRET
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PaymentAPI);


/***/ })

};
;