"use strict";
exports.id = 9676;
exports.ids = [9676];
exports.modules = {

/***/ 9676:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _App_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1824);
/* harmony import */ var _apiServices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4287);
/* harmony import */ var _homeServices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4171);



function sendOtprequest(username) {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.generateotpforregistrationnew}userName=${username}&sellerId=${localStorage.getItem("sellerID") === null || localStorage.getItem("sellerID") === undefined ? _homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.defaultSellerID : localStorage.getItem("sellerID")}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "POST");
}
function SendEmailAndSmsForRegistration(databody) {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.SendEmailAndSmsForRegistration}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "POST", databody);
}
function SendEmailOrMobileForRegistration(userMobileNo, userEmail, password) {
    console.log("api register ", password);
    const fromSource = "React";
    // console.log('api register ', mobileOREmail)
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.SendEmailOrMobileForRegistration}fromSource=${fromSource}&EmailID=${userEmail}&PhoneNo=${userMobileNo}&password=${password}&sellerId=${localStorage.getItem("sellerID") || _homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.defaultSellerID}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "POST");
}
function sendUserRegistrationUsingGmailApi(userDetails) {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.register}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "POST", userDetails);
}
// function sendOtprequestphone(username) {
//   const url = `${Constants.urls.baseUrl}${Constants.endPoints.generateotpforregistrationnew}userName=${username}`;
//   return httpRequest(url, 'POST',);
// }
const RegisterAPI = {
    sendOtprequest,
    SendEmailAndSmsForRegistration,
    SendEmailOrMobileForRegistration,
    sendUserRegistrationUsingGmailApi
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RegisterAPI);


/***/ })

};
;