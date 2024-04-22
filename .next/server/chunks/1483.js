exports.id = 1483;
exports.ids = [1483];
exports.modules = {

/***/ 3843:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _App_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1824);
/* harmony import */ var _apiServices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4287);
/* harmony import */ var _homeServices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4171);



function updatationprofile(title, firstname, lastname, emailvalue, mobile, company, offerrecieve) {
    const isemailverify = emailvalue !== null && emailvalue !== "" && emailvalue !== undefined;
    const isphoneverify = mobile !== null && mobile !== "" && mobile !== undefined;
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.UpdateProfile}customerGUID=${localStorage.getItem("CustGUID") === null || localStorage.getItem("CustGUID") === undefined ? _homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.defaultCustGUID : window.atob(localStorage.getItem("CustGUID"))}&title=${title}&email=${emailvalue}&isEmailVerified=${isemailverify}&fname=${firstname}&lname=${lastname}&company=${company}&mobile=${mobile}&phone=${mobile}&isPhoneVerified=${isphoneverify}&newsLetterSubscribed=${"false"}&taxid=${""}&receiveOffers=${offerrecieve}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "POST");
}
function updatationprofileWithoutEmail(title, firstname, lastname, mobile, company, offerrecieve) {
    const isemailverify = true;
    const isphoneverify = mobile !== null;
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.UpdateProfile}customerGUID=${localStorage.getItem("CustGUID") === null || localStorage.getItem("CustGUID") === undefined ? _homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.defaultCustGUID : window.atob(localStorage.getItem("CustGUID"))}&title=${title}&isEmailVerified=${isemailverify}&fname=${firstname}&lname=${lastname}&company=${company}&mobile=${mobile}&phone=${mobile}&isPhoneVerified=${isphoneverify}&newsLetterSubscribed=${"false"}&taxid=${""}&receiveOffers=${offerrecieve}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "POST");
}
function updatationprofileWithoutMobile(title, firstname, lastname, emailvalue, company, offerrecieve) {
    const isemailverify = emailvalue !== null;
    const isphoneverify = false;
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.UpdateProfile}customerGUID=${localStorage.getItem("CustGUID") === null || localStorage.getItem("CustGUID") === undefined ? _homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.defaultCustGUID : window.atob(localStorage.getItem("CustGUID"))}&title=${title}&email=${emailvalue}&isEmailVerified=${isemailverify}&fname=${firstname}&lname=${lastname}&company=${company}&isPhoneVerified=${isphoneverify}&newsLetterSubscribed=${"false"}&taxid=${""}&receiveOffers=${offerrecieve}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "POST");
}
function sendUpdateProfileEmail(emailValue, firstname) {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.sendUpdateProfileEmail}clientId=1&emailid=${emailValue}&firstname=${firstname}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "POST");
}
function getSmsTemplate(id) {
    console.log("getSmsTemplate-");
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.getSmsTemplate}Id=${id}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "GET");
}
function sendSMS(mobNo, message) {
    const sender = "";
    const clientId = 1;
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.sendSMS}numbers=${mobNo}&message=${message}&sender=${sender}&clientId=${clientId}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "POST");
}
function generateandsendphoneemailchangeotp(email, phone) {
    const usernameforgenerate = email === null ? phone : email;
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.generateandsendphoneemailchangeotp}username=${usernameforgenerate}&customerGUID=${localStorage.getItem("CustGUID") === null || localStorage.getItem("CustGUID") === undefined ? _homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.defaultCustGUID : window.atob(localStorage.getItem("CustGUID"))}&ClientId=${_homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.ClientId}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "POST");
}
function verifyemailphoneotp(guid, otp) {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.verifyphoneemailchangeotp}OTPGUID=${guid}&customerGUID=${localStorage.getItem("CustGUID") === null || localStorage.getItem("CustGUID") === undefined ? _homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.defaultCustGUID : window.atob(localStorage.getItem("CustGUID"))}&ClientId=${_homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.ClientId}&OTP=${otp}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "POST");
}
const ProfileAPI = {
    updatationprofile,
    updatationprofileWithoutEmail,
    updatationprofileWithoutMobile,
    generateandsendphoneemailchangeotp,
    verifyemailphoneotp,
    sendUpdateProfileEmail,
    getSmsTemplate,
    sendSMS
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfileAPI);


/***/ }),

/***/ 6061:
/***/ (() => {



/***/ })

};
;