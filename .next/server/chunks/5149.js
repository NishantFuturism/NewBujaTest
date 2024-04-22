"use strict";
exports.id = 5149;
exports.ids = [5149];
exports.modules = {

/***/ 3536:
/***/ (() => {

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/adibuja-logo.d1383566.svg","height":44,"width":172,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 9724:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A6: () => (/* binding */ RESPONCE_MSG),
/* harmony export */   C9: () => (/* binding */ GET_CUST_ID_BY_EMAIL_SUCCESS),
/* harmony export */   CK: () => (/* binding */ USER_REGISTRATION_USING_GMAIL),
/* harmony export */   Co: () => (/* binding */ NEW_PASSWORD_ACTION_REACT),
/* harmony export */   Dv: () => (/* binding */ LOGIN_WITH_OTP_FAILURE),
/* harmony export */   N6: () => (/* binding */ SEND_OTP_FAILURE),
/* harmony export */   OY: () => (/* binding */ CHANGE_USERNAME),
/* harmony export */   OZ: () => (/* binding */ SEND_OTP_REQUEST_PSWD),
/* harmony export */   SJ: () => (/* binding */ LOGIN_WITH_OTP_SUCCESS),
/* harmony export */   TB: () => (/* binding */ LOGIN_WITH_PASSWORD),
/* harmony export */   TY: () => (/* binding */ NEW_PASSWORD_FOR_REACT),
/* harmony export */   UN: () => (/* binding */ USER_SUCCESS_REGISTRATION_USING_GMAIL),
/* harmony export */   VF: () => (/* binding */ DIRECT_MSG),
/* harmony export */   YI: () => (/* binding */ DEFAULT_ACTION),
/* harmony export */   Yw: () => (/* binding */ CHANGE_USERNAME_SUCCESS),
/* harmony export */   _O: () => (/* binding */ LOGIN_WITH_OTP),
/* harmony export */   _l: () => (/* binding */ SEND_OTP_SUCCESS_PSWD),
/* harmony export */   bI: () => (/* binding */ SEND_OTP_SUCCESS),
/* harmony export */   iP: () => (/* binding */ SEND_OTP_REQUEST),
/* harmony export */   jp: () => (/* binding */ CLOSE_MSG_BAR),
/* harmony export */   js: () => (/* binding */ GET_CUST_ID_BY_EMAIL),
/* harmony export */   lP: () => (/* binding */ FORGOT_PASSWORD),
/* harmony export */   vN: () => (/* binding */ NEW_PASSWORD),
/* harmony export */   x4: () => (/* binding */ ENABLE_LOGIN_VIEW),
/* harmony export */   xx: () => (/* binding */ SAVE_LOGIN_DATA)
/* harmony export */ });
/* unused harmony exports LOGIN_WITH_OTP_SUCCESS_PASSWORD, LOGIN_WITH_PASSWORD_SUCCESS, FORGOT_PASSWORD_PHONE, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_PHONE_SUCCESS, LOGIN_WITH_PASSWORD_SUCCESS1, PASSWORD_RESPONSE */
/*
 *
 * Login constants
 *
 */ const DEFAULT_ACTION = "app/Login/DEFAULT_ACTION";
const CHANGE_USERNAME = "app/Login/CHANGE_USERNAME";
const CHANGE_USERNAME_SUCCESS = "app/Login/CHANGE_USERNAME_SUCCESS";
const SEND_OTP_REQUEST = "app/Login/SEND_OTP_REQUEST";
const SEND_OTP_SUCCESS = "app/Login/SEND_OTP_SUCCESS";
const SEND_OTP_FAILURE = "app/Login/SEND_OTP_FAILURE";
const ENABLE_LOGIN_VIEW = "app/Login/ENABLE_LOGIN_VIEW";
const LOGIN_WITH_OTP = "app/Login/LOGIN_WITH_OTP";
const LOGIN_WITH_OTP_SUCCESS = "app/Login/LOGIN_WITH_OTP_SUCCESS";
const LOGIN_WITH_OTP_SUCCESS_PASSWORD = "app/Login/LOGIN_WITH_OTP_SUCCESS_PASSWORD";
const LOGIN_WITH_PASSWORD = "app/Login/LOGIN_WITH_PASSWORD";
const LOGIN_WITH_PASSWORD_SUCCESS = "app/Login/LOGIN_WITH_PASSWORD_SUCCESS";
const LOGIN_WITH_OTP_FAILURE = "app/Login/LOGIN_WITH_OTP_FAILURE";
const RESPONCE_MSG = "app/Login/RESPONCE_MSG";
const CLOSE_MSG_BAR = "app/Login/CLOSE_MSG_BAR";
const FORGOT_PASSWORD = "app/Login/FORGOT_PASSWORD";
const FORGOT_PASSWORD_PHONE = "app/Login/FORGOT_PASSWORD_PHONE";
const FORGOT_PASSWORD_SUCCESS = "app/Login/FORGOT_PASSWORD_SUCCESS";
const DIRECT_MSG = "app/Login/DIRECT_MSG";
const FORGOT_PASSWORD_PHONE_SUCCESS = "app/Login/FORGOT_PASSWORD_PHONE_SUCCESS";
const SAVE_LOGIN_DATA = "app/Login/SAVE_LOGIN_DATA";
const NEW_PASSWORD = "app/Login/NEW_PASSWORD";
const NEW_PASSWORD_FOR_REACT = "app/Login/NEW_PASSWORD_FOR_REACT";
const NEW_PASSWORD_ACTION_REACT = "app/Login/NEW_PASSWORD_ACTION_REACT";
const LOGIN_WITH_PASSWORD_SUCCESS1 = "app/Login/LOGIN_WITH_PASSWORD_SUCCESS1";
const PASSWORD_RESPONSE = "app/Login/PASSWORD_RESPONSE";
const SEND_OTP_REQUEST_PSWD = "app/Login/SEND_OTP_REQUEST_PSWD";
const SEND_OTP_SUCCESS_PSWD = "app/Login/SEND_OTP_SUCCESS_PSWD";
const USER_REGISTRATION_USING_GMAIL = "app/Login/USER_REGISTRATION_USING_GMAIL";
const USER_SUCCESS_REGISTRATION_USING_GMAIL = "app/Login/USER_SUCCESS_REGISTRATION_USING_GMAIL";
const GET_CUST_ID_BY_EMAIL = "app/Login/GET_CUST_ID_BY_EMAIL";
const GET_CUST_ID_BY_EMAIL_SUCCESS = "app/Login/GET_CUST_ID_BY_EMAIL_SUCCESS";


/***/ }),

/***/ 2746:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export initialState */
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7133);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9724);
/* eslint-disable no-unused-expressions */ /*
 *
 * Login reducer
 *
 */ 

const initialState = {
    username: "",
    error: "",
    isError: false,
    isSuccess: false,
    enableview: "",
    passwordview: false,
    customerlogindata: "",
    isUserAuthenticated: false,
    sendOtpResponse: "",
    addToCartMsg: "",
    IsMsgBar: false,
    datalogin: [],
    sendOTPDataPswd: {},
    userRegistrationUsingGmailLoginResponse: "",
    getCustIdByGmailLogin: {},
    getNewPasswordResponse: ""
};
/* eslint-disable default-case, no-param-reassign */ const loginReducer = (state = initialState, action)=>immer__WEBPACK_IMPORTED_MODULE_0___default()(state, (draft)=>{
        switch(action.type){
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .DEFAULT_ACTION */ .YI:
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .CHANGE_USERNAME */ .OY:
                draft.username = action.username;
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .SEND_OTP_REQUEST */ .iP:
                draft.enableview = action.enableview;
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .SEND_OTP_SUCCESS */ .bI:
                draft.enableview = action.enableview;
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .SEND_OTP_FAILURE */ .N6:
                draft.error = action.error;
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .ENABLE_LOGIN_VIEW */ .x4:
                draft.passwordview = action.passwordview;
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .LOGIN_WITH_OTP */ ._O:
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .LOGIN_WITH_OTP_SUCCESS */ .SJ:
                // draft.IsMsgBar = true
                draft.customerlogindata = action.verifyOTPResp;
                // console.log("checkloginval..", window.btoa(action.verifyOTPResp.Email))
                if (action.verifyOTPResp) {
                    action.verifyOTPResp.Phone ? localStorage.setItem("LoingID", window.btoa(action.verifyOTPResp.Phone)) : localStorage.setItem("LoingID", window.btoa(action.verifyOTPResp.Email));
                }
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .LOGIN_WITH_OTP_FAILURE */ .Dv:
                draft.error = action.error;
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .CHANGE_USERNAME_SUCCESS */ .Yw:
                draft.sendOtpResponse = action.sendOtpResponse;
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .RESPONCE_MSG */ .A6:
                draft.IsMsgBar = true;
                draft.addToCartMsg = action.sendOtpResponse.Message;
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .DIRECT_MSG */ .VF:
                draft.IsMsgBar = true;
                draft.addToCartMsg = action.msg;
                draft.sendOtpResponse = "";
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .CLOSE_MSG_BAR */ .jp:
                draft.IsMsgBar = false;
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .SAVE_LOGIN_DATA */ .xx:
                draft.datalogin = action.data;
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .SEND_OTP_SUCCESS_PSWD */ ._l:
                draft.IsMsgBar = true;
                draft.sendOTPDataPswd = action.sendOTPDataPswd;
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .USER_SUCCESS_REGISTRATION_USING_GMAIL */ .UN:
                draft.userRegistrationUsingGmailLoginResponse = action.userDetailsData;
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .GET_CUST_ID_BY_EMAIL_SUCCESS */ .C9:
                draft.getCustIdByGmailLogin = action.getCustIdUsingGmailIdResponse;
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .NEW_PASSWORD_ACTION_REACT */ .Co:
                draft.getNewPasswordResponse = action.NewPasswordResponseForReact;
        }
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loginReducer);


/***/ }),

/***/ 3309:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ loginSaga)
/* harmony export */ });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6477);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MainPage_api_homeServices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4171);
/* harmony import */ var _MainPage_api_register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9676);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9724);



// import history from '../../utils/history';

function* loginPasswordSaga(action) {
    const verifyOTPResp = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_MainPage_api_homeServices__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.verifyPassword, action.uname, action.password);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
        type: _constants__WEBPACK_IMPORTED_MODULE_3__/* .LOGIN_WITH_OTP_SUCCESS */ .SJ,
        verifyOTPResp
    });
}
function* forgotPasswordSaga(action) {
    console.log("gshg", action);
    const emailResponse = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_MainPage_api_homeServices__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.forgotpasswordApi, action.id);
    console.log("emailResponse", emailResponse);
    // if(emailResponse.MessageTypeID===3){
    //   alert('Email Send successfully')
    // }
    // else if(emailResponse.MessageTypeID===8){
    //   alert('SMS has been sent successfully')
    // }
    // yield put({ type: FORGOT_PASSWORD_SUCCESS, sendOtpResponse })
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
        type: _constants__WEBPACK_IMPORTED_MODULE_3__/* .RESPONCE_MSG */ .A6,
        emailResponse
    });
}
function* newPasswordSaga(action) {
    console.log("newPasswordSaga", action);
    const NewPasswordResponse = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_MainPage_api_homeServices__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.NewPasswordForReact, action.token, action.username, action.newpassword, action.confirmpassword, action.isFirstTimePasswordChange);
    console.log("NewPasswordResponse", NewPasswordResponse);
    // yield put({ type: FORGOT_PASSWORD_SUCCESS, sendOtpResponse })
    //  if( NewPasswordResponse.MessageTypeID==2 )
    //  {
    //   history.push('/login/form')
    //  }
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
        type: _constants__WEBPACK_IMPORTED_MODULE_3__/* .RESPONCE_MSG */ .A6,
        NewPasswordResponse
    });
}
function* sendOtpRequestFunc(action) {
    const sendOtpResponse = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_MainPage_api_homeServices__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.sendOtpLoginApi, action.username);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
        type: _constants__WEBPACK_IMPORTED_MODULE_3__/* .RESPONCE_MSG */ .A6,
        sendOtpResponse
    });
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
        type: _constants__WEBPACK_IMPORTED_MODULE_3__/* .CHANGE_USERNAME_SUCCESS */ .Yw,
        sendOtpResponse
    });
}
function* loginOtprepos(action) {
    const verifyOTPResp = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_MainPage_api_homeServices__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.verifyOTP, action.uname, action.OTP);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
        type: _constants__WEBPACK_IMPORTED_MODULE_3__/* .LOGIN_WITH_OTP_SUCCESS */ .SJ,
        verifyOTPResp
    });
}
function* newPasswordSagaForReact(action) {
    console.log("newPasswordForReactSaga", action);
    const NewPasswordResponseForReact = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_MainPage_api_homeServices__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.NewPasswordApi, action.token, action.username, action.newPassword, action.cnfPassword, action.IsPasswordChangedForFirstTime);
    // yield put({ type: FORGOT_PASSWORD_SUCCESS, sendOtpResponse })
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
        type: _constants__WEBPACK_IMPORTED_MODULE_3__/* .NEW_PASSWORD_ACTION_REACT */ .Co,
        NewPasswordResponseForReact
    });
}
function* getReposPswd(action) {
    console.log("sendOtppswdsaga", action.id);
    if (action.id) {
        const sendOTPDataPswd = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_MainPage_api_homeServices__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.sendOtpRegistrationApi, action.id);
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
            type: _constants__WEBPACK_IMPORTED_MODULE_3__/* .SEND_OTP_SUCCESS_PSWD */ ._l,
            sendOTPDataPswd
        });
        console.log("sendOTPDataPswd", sendOTPDataPswd);
    }
// }
}
function* userRegistrationUsingGmail(action) {
    if (action.userDetails) {
        const userDetailsData = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_MainPage_api_register__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.sendUserRegistrationUsingGmailApi, action.userDetails);
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
            type: _constants__WEBPACK_IMPORTED_MODULE_3__/* .USER_SUCCESS_REGISTRATION_USING_GMAIL */ .UN,
            userDetailsData
        });
    }
}
function* getCustIdUsingGmailId(action) {
    console.log("register original saga", action);
    const getCustIdUsingGmailIdResponse = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_MainPage_api_homeServices__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getCustIdUsingGmailId, action.clientid, action.emailId, action.customerType);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
        type: _constants__WEBPACK_IMPORTED_MODULE_3__/* .GET_CUST_ID_BY_EMAIL_SUCCESS */ .C9,
        getCustIdUsingGmailIdResponse
    });
}
function* loginSaga() {
    // yield takeLatest(SEND_OTP_REQUEST, loginRepos);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeEvery)(_constants__WEBPACK_IMPORTED_MODULE_3__/* .LOGIN_WITH_OTP */ ._O, loginOtprepos);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeEvery)(_constants__WEBPACK_IMPORTED_MODULE_3__/* .LOGIN_WITH_PASSWORD */ .TB, loginPasswordSaga);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeEvery)(_constants__WEBPACK_IMPORTED_MODULE_3__/* .CHANGE_USERNAME */ .OY, sendOtpRequestFunc);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeEvery)(_constants__WEBPACK_IMPORTED_MODULE_3__/* .FORGOT_PASSWORD */ .lP, forgotPasswordSaga);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeEvery)(_constants__WEBPACK_IMPORTED_MODULE_3__/* .NEW_PASSWORD */ .vN, newPasswordSaga);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeEvery)(_constants__WEBPACK_IMPORTED_MODULE_3__/* .NEW_PASSWORD_FOR_REACT */ .TY, newPasswordSagaForReact);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeEvery)(_constants__WEBPACK_IMPORTED_MODULE_3__/* .SEND_OTP_REQUEST_PSWD */ .OZ, getReposPswd);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeEvery)(_constants__WEBPACK_IMPORTED_MODULE_3__/* .USER_REGISTRATION_USING_GMAIL */ .CK, userRegistrationUsingGmail);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeEvery)(_constants__WEBPACK_IMPORTED_MODULE_3__/* .GET_CUST_ID_BY_EMAIL */ .js, getCustIdUsingGmailId);
}


/***/ })

};
;