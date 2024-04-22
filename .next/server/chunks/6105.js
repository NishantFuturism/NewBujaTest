"use strict";
exports.id = 6105;
exports.ids = [6105];
exports.modules = {

/***/ 6105:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AY: () => (/* binding */ userRegisterationUsingGmail),
/* harmony export */   JC: () => (/* binding */ changeUsername),
/* harmony export */   Kw: () => (/* binding */ getCustIdByEmail),
/* harmony export */   Pk: () => (/* binding */ logindata),
/* harmony export */   QI: () => (/* binding */ loginWithPasswordAction),
/* harmony export */   RE: () => (/* binding */ DirectMessage),
/* harmony export */   VH: () => (/* binding */ sendOtpPswd),
/* harmony export */   _o: () => (/* binding */ closeMsgBar),
/* harmony export */   tH: () => (/* binding */ loginwithotp)
/* harmony export */ });
/* unused harmony exports defaultAction, sendOtp, sendOtpsuccess, sendOtpfailure, enablepasswordview, clearLoginWithPasswordAction, loginwithotpsuccess, loginwithotpfailure, OpenMsgBar, forgotPasswordAction, NewPasswordForReact, newPasswordapi, clearSendOTPDataPswd */
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9724);
/*
 *
 * Login actions
 *
 */ 
function defaultAction() {
    return {
        type: DEFAULT_ACTION
    };
}
function changeUsername(username) {
    return {
        type: _constants__WEBPACK_IMPORTED_MODULE_0__/* .CHANGE_USERNAME */ .OY,
        username
    };
}
function sendOtp(enableview) {
    return {
        type: SEND_OTP_REQUEST,
        enableview
    };
}
function sendOtpsuccess(enableview) {
    return {
        type: SEND_OTP_SUCCESS,
        enableview
    };
}
function sendOtpfailure(error) {
    return {
        type: SEND_OTP_FAILURE,
        error
    };
}
function enablepasswordview(passwordview) {
    return {
        type: ENABLE_LOGIN_VIEW,
        passwordview
    };
}
function loginwithotp(uname, OTP) {
    return {
        type: _constants__WEBPACK_IMPORTED_MODULE_0__/* .LOGIN_WITH_OTP */ ._O,
        uname,
        OTP
    };
}
function loginWithPasswordAction(uname, password) {
    return {
        type: _constants__WEBPACK_IMPORTED_MODULE_0__/* .LOGIN_WITH_PASSWORD */ .TB,
        uname,
        password
    };
}
function clearLoginWithPasswordAction() {
    return {
        type: LOGIN_WITH_OTP_SUCCESS,
        customerlogindata: ""
    };
}
function loginwithotpsuccess(customerlogindata) {
    return {
        type: LOGIN_WITH_OTP_SUCCESS,
        customerlogindata
    };
}
function loginwithotpfailure(error) {
    return {
        type: LOGIN_WITH_OTP_FAILURE,
        error
    };
}
function OpenMsgBar(sendOtpResponse) {
    return {
        type: RESPONCE_MSG,
        sendOtpResponse
    };
}
function DirectMessage(msg) {
    return {
        type: _constants__WEBPACK_IMPORTED_MODULE_0__/* .DIRECT_MSG */ .VF,
        msg
    };
}
function closeMsgBar() {
    return {
        type: _constants__WEBPACK_IMPORTED_MODULE_0__/* .CLOSE_MSG_BAR */ .jp
    };
}
function forgotPasswordAction(id) {
    console.log("jk", id);
    return {
        type: FORGOT_PASSWORD,
        id
    };
}
function logindata(data) {
    return {
        type: _constants__WEBPACK_IMPORTED_MODULE_0__/* .SAVE_LOGIN_DATA */ .xx,
        data
    };
}
function NewPasswordForReact(token, email, newpassword, confirmpassword, isFirstTimePasswordChange) {
    console.log("newPasswordAction", token, email, newpassword, confirmpassword, isFirstTimePasswordChange);
    return {
        type: NEW_PASSWORD,
        token,
        email,
        newpassword,
        confirmpassword,
        isFirstTimePasswordChange
    };
}
function newPasswordapi(token, username, newPassword, cnfPassword, IsPasswordChangedForFirstTime) {
    console.log("data", token, username, newPassword, cnfPassword, IsPasswordChangedForFirstTime);
    return {
        type: NEW_PASSWORD_FOR_REACT,
        token,
        username,
        newPassword,
        cnfPassword,
        IsPasswordChangedForFirstTime
    };
}
function sendOtpPswd(id) {
    console.log("sendOtppswd", id);
    return {
        type: _constants__WEBPACK_IMPORTED_MODULE_0__/* .SEND_OTP_REQUEST_PSWD */ .OZ,
        id
    };
}
function userRegisterationUsingGmail(userDetails) {
    return {
        type: _constants__WEBPACK_IMPORTED_MODULE_0__/* .USER_REGISTRATION_USING_GMAIL */ .CK,
        userDetails
    };
}
function clearSendOTPDataPswd() {
    return {
        type: SEND_OTP_SUCCESS_PSWD,
        sendOTPDataPswd: {}
    };
}
// export function passwordresponse(data) {
//   return {
//     type: PASSWORD_RESPONSE,
//     data
//   };
// }
function getCustIdByEmail(clientid, emailId, customerType) {
    console.log("Register original action", clientid, emailId, customerType);
    return {
        type: _constants__WEBPACK_IMPORTED_MODULE_0__/* .GET_CUST_ID_BY_EMAIL */ .js,
        clientid,
        emailId,
        customerType
    };
}


/***/ })

};
;