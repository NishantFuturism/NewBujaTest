"use strict";
exports.id = 8573;
exports.ids = [8573];
exports.modules = {

/***/ 8159:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _App_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1824);
/* harmony import */ var _apiServices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4287);
/* harmony import */ var _homeServices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4171);



function firsttimepasswordchange(ID) {
    // const obj = { UserName, Password }
    console.log("aid..", ID);
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.firsttimepasswordchangedornot}data=${ID}&sellerId=${localStorage.getItem("sellerID") || _homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.defaultSellerID}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "POST");
}
function UpdateStatusFirstTime(ID) {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.UpdateStatusFirstTimePasswordChanged}data=${ID}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "POST");
}
function setupPasswordAPI(username, NewPassword, ConfirmPassword) {
    // const token = localStorage.getItem('generatedtoken');
    console.log("3valuees..", username, NewPassword, ConfirmPassword);
    const obj = {
        username,
        IsPasswordChangedForFirstTimeFlag: false,
        NewPassword,
        ConfirmPassword,
        ClientId: 1,
        Token: null,
        SellerId: localStorage.getItem("sellerID") || _homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.defaultSellerID
    };
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.SetupNewPasswordForReact}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "POST", obj);
}
function changePasswordAPI(UserName, NewPassword, OldPassword) {
    console.log("dd", UserName, NewPassword, OldPassword);
    const obj = {
        "UserName": UserName,
        "OldPassword": NewPassword,
        "NewPassword": OldPassword,
        "ClientId": 1,
        "CustomerType": 1,
        "SellerId": localStorage.getItem("sellerID") || _homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.defaultSellerID
    };
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.changePassword}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "POST", obj);
}
// function verifyPassword(UserName, Password) {
//   const obj = { UserName, Password }
//   const url = `${Constants.urls.baseUrl}${Constants.endPoints.verifyLoginPassWord}`
//   return httpRequest(url, 'POST', obj);
// }
const managePasswordAPI = {
    firsttimepasswordchange,
    UpdateStatusFirstTime,
    setupPasswordAPI,
    changePasswordAPI
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (managePasswordAPI);


/***/ }),

/***/ 5386:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ DASHBOARD_REORDER_SUCCESS),
/* harmony export */   C6: () => (/* binding */ IS_FIRST_TIME),
/* harmony export */   D3: () => (/* binding */ UPDATE_PASSWORD),
/* harmony export */   Ig: () => (/* binding */ DELETEDADDRESSID),
/* harmony export */   N9: () => (/* binding */ SEND_OTP),
/* harmony export */   NV: () => (/* binding */ GET_MYORDER),
/* harmony export */   PA: () => (/* binding */ SAVE_CART_CHECKOUT),
/* harmony export */   SK: () => (/* binding */ GET_MYORDER_SUCCESSS),
/* harmony export */   YI: () => (/* binding */ DEFAULT_ACTION),
/* harmony export */   Zm: () => (/* binding */ GET_ALL_CUSTOMER_ORDER_SUCCESS),
/* harmony export */   bI: () => (/* binding */ SEND_OTP_SUCCESS),
/* harmony export */   bU: () => (/* binding */ VERIFY_OTP),
/* harmony export */   cg: () => (/* binding */ SET_PASSWORD),
/* harmony export */   eP: () => (/* binding */ SAVE_CART_TOTAL),
/* harmony export */   ei: () => (/* binding */ DASHBOARD_REORDER),
/* harmony export */   f8: () => (/* binding */ IS_FIRST_TIME_SUCCESS),
/* harmony export */   iB: () => (/* binding */ UPDATE_PASSWORD_SUCCESS),
/* harmony export */   jr: () => (/* binding */ SAVE_PASSWPORD),
/* harmony export */   kF: () => (/* binding */ DELETEDSKUID),
/* harmony export */   oE: () => (/* binding */ WALLET_TRANSACTION),
/* harmony export */   qi: () => (/* binding */ GET_ALL_CUSTOMER_ORDER),
/* harmony export */   qo: () => (/* binding */ LOAD_CHECKOUT_ALERT),
/* harmony export */   r0: () => (/* binding */ UPDATE_PROFILE),
/* harmony export */   tS: () => (/* binding */ SAVE_CART_CHECKOUT_SUCCESS),
/* harmony export */   te: () => (/* binding */ DELETED_FLAG),
/* harmony export */   z9: () => (/* binding */ UPDATE_PROFILE_SUCCESS),
/* harmony export */   zG: () => (/* binding */ VERIFY_OTP_SUCCESS),
/* harmony export */   ze: () => (/* binding */ SEND_UPDATE_PROFILE_EMAIL)
/* harmony export */ });
/* unused harmony exports GET_MYORDER_FAILURE, MSG, API_MSG, GET_ALL_CUSTOMER_ORDER_FAILURE, WALLET_TRANSACTION_SUCCESS, SETUP_PASSWORD, CANCEL_PASSWORD, PASSWORD_RESPONSE, CANCEL_ORDER_POPUP */
/*
import { SEND_OTP_SUCCESS } from '../Login/constants';
 *
 * MyAccount constants
 *
 */ const DEFAULT_ACTION = "app/MyAccount/DEFAULT_ACTION";
const GET_MYORDER = "app/MyAccount/GET_MYORDER";
const GET_MYORDER_SUCCESSS = "app/MyAccount/GET_MYORDER_SUCCESSS";
const GET_MYORDER_FAILURE = "app/MyAccount/GET_MYORDER_FAILURE";
const GET_ALL_CUSTOMER_ORDER = "app/MyAccount/GET_ALL_CUSTOMER_ORDER";
const MSG = "app/MyAccount/MSG";
const API_MSG = "app/MyAccount/API_MSG";
const GET_ALL_CUSTOMER_ORDER_SUCCESS = "app/MyAccount/GET_ALL_CUSTOMER_ORDER_SUCCESS";
const GET_ALL_CUSTOMER_ORDER_FAILURE = "app/MyAccount/GET_ALL_CUSTOMER_ORDER_SUCCESS";
const SAVE_CART_CHECKOUT = "app/MyAccount/SAVE_CART_CHECKOUT";
const SAVE_CART_CHECKOUT_SUCCESS = "app/MyAccount/SAVE_CART_CHECKOUT_SUCCESS";
const LOAD_CHECKOUT_ALERT = "app/MyAccount/LOAD_CHECKOUT_ALERT";
const DASHBOARD_REORDER = "app/MyAccount/DASHBOARD_REORDER";
const DASHBOARD_REORDER_SUCCESS = "app/MyAccount/DASHBOARD_REORDER_SUCCESS";
const WALLET_TRANSACTION = "app/MyAccount/WALLET_TRANSACTION";
const WALLET_TRANSACTION_SUCCESS = "app/MyAccount/WALLET_TRANSACTION_SUCCESS";
const IS_FIRST_TIME = "app/MyAccount/IS_FIRST_TIME";
const IS_FIRST_TIME_SUCCESS = "app/MyAccount/IS_FIRST_TIME_SUCCESS";
const SETUP_PASSWORD = "app/MyAccount/SETUP_PASSWORD";
const UPDATE_PASSWORD = "app/MyAccount/UPDATE_PASSWORD";
const UPDATE_PASSWORD_SUCCESS = "app/MyAccount/UPDATE_PASSWORD_SUCCESS";
const CANCEL_PASSWORD = "app/MyAccount/CANCEL_PASSWORD";
const SEND_OTP = "app/MyAccount/SEND_OTP";
const SEND_OTP_SUCCESS = "app/MyAccount/SEND_OTP_SUCCESS";
const VERIFY_OTP = "app/MyAccount/VERIFY_OTP";
const VERIFY_OTP_SUCCESS = "app/MyAccount/VERIFY_OTP_SUCCESS";
const UPDATE_PROFILE = "app/MyAccount/UPDATE_PROFILE";
const UPDATE_PROFILE_SUCCESS = "app/MyAccount/UPDATE_PROFILE_SUCCESS";
const SET_PASSWORD = "app/MyAccount/SET_PASSWORD";
const DELETEDSKUID = "app/MyAccount/DELETEDSKUID";
const DELETED_FLAG = "app/MyAccount/DELETED_FLAG";
const SAVE_CART_TOTAL = "app/MyAccount/SAVE_CART_TOTAL";
const SAVE_PASSWPORD = "app/MyAccount/SAVE_PASSWPORD";
const PASSWORD_RESPONSE = "app/MyAccount/ PASSWORD_RESPONSE";
const DELETEDADDRESSID = "app/MyAccount/ DELETEDADDRESSID";
const SEND_UPDATE_PROFILE_EMAIL = "app/MyAccount/SEND_UPDATE_PROFILE_EMAIL";
const CANCEL_ORDER_POPUP = "app/Orderdeatails/CANCEL_ORDER_POPUP"; // export const PASSWORD_RESPONSE ='app/MyAcount/PASSWORD_RESPONSE';
 // export const MSG = 'app/MyAccount/MSG';
 // export const MSG = 'app/MyAccount/MSG';
 // export const GET_ALL_CUSTOMER_ORDER_FAILURE = 'app/MyAccount/GET_ALL_CUSTOMER_ORDER_SUCCESS';


/***/ }),

/***/ 5281:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export initialState */
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7133);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5386);
/* eslint-disable no-duplicate-case */ /*
 *
 * MyAccount reducer
 *
 */ 

const initialState = {
    checkoutpopup: "",
    namecart: "",
    savecart: false,
    isFirstTime: "false",
    updatestatus: {},
    IsMsgBar: false,
    sendotpdata: [],
    verfied: false,
    profilemsg: "",
    ismsg: false,
    deletedSkuId: "",
    deletedaddId: "",
    flag: false,
    data: "",
    totalamount: "",
    spassword: ""
};
/* eslint-disable default-case, no-param-reassign */ const myAccountReducer = (state = initialState, action)=>immer__WEBPACK_IMPORTED_MODULE_0___default()(state, (draft)=>{
        switch(action.type){
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .DEFAULT_ACTION */ .YI:
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .GET_MYORDER */ .NV:
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .GET_MYORDER_SUCCESSS */ .SK:
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .GET_ALL_CUSTOMER_ORDER */ .qi:
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .GET_ALL_CUSTOMER_ORDER_SUCCESS */ .Zm:
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .IS_FIRST_TIME_SUCCESS */ .f8:
                console.log("checkval..", action.firstTimevalue);
                draft.isFirstTime = action.firstTimevalue;
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .SAVE_PASSWPORD */ .jr:
                draft.IsMsgBar = true;
                console.log("checksavepassword..", action.savePsassword);
                draft.spassword = action.savePassword;
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .LOAD_CHECKOUT_ALERT */ .qo:
                draft.checkoutpopup = action.popup;
                draft.namecart = action.cartname;
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .SAVE_CART_CHECKOUT_SUCCESS */ .tS:
                // draft.IsMsgBar = true
                draft.checkoutpopup = action.checkoutdata;
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .DASHBOARD_REORDER_SUCCESS */ .B:
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .UPDATE_PASSWORD_SUCCESS */ .iB:
                console.log("reducerupdate..", action.updateStatus);
                draft.updatestatus = action.updateStatus;
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .SEND_OTP_SUCCESS */ .bI:
                draft.sendotpdata = action.sendOtpResponse;
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .VERIFY_OTP_SUCCESS */ .zG:
                draft.IsMsgBar = true;
                draft.verfied = action.verify;
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .UPDATE_PROFILE */ .r0:
                draft.ismsg = false;
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .UPDATE_PROFILE_SUCCESS */ .z9:
                draft.ismsg = true;
                draft.profilemsg = action.updateprofile;
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .DELETEDADDRESSID */ .Ig:
                draft.IsMsgBar = true;
                draft.deletedaddId = action.CustomerAddressId;
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .DELETEDSKUID */ .kF:
                draft.IsMsgBar = true;
                draft.deletedSkuId = action.SkuId;
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .DELETED_FLAG */ .te:
                console.log("vjkhkv", action);
                draft.flag = action.flag;
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .SAVE_CART_TOTAL */ .eP:
                console.log("vjkhkv", action);
                draft.totalamount = action.totalamount;
                break;
        }
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (myAccountReducer);


/***/ }),

/***/ 322:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ myAccountSaga)
/* harmony export */ });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6477);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MainPage_api_managePasswordAPI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8159);
/* harmony import */ var _MainPage_api_orderdetail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3172);
/* harmony import */ var _MainPage_api_profile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3843);
/* harmony import */ var _MainPage_api_Reorder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7456);
/* harmony import */ var _MainPage_api_savecart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7646);
/* harmony import */ var _MainPage_api_wallet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2190);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5386);
/* eslint-disable no-unused-vars */ 








function* myAccountSaga() {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeEvery)(_constants__WEBPACK_IMPORTED_MODULE_8__/* .GET_MYORDER */ .NV, getrepos);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeEvery)(_constants__WEBPACK_IMPORTED_MODULE_8__/* .DASHBOARD_REORDER */ .ei, reorder);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeEvery)(_constants__WEBPACK_IMPORTED_MODULE_8__/* .WALLET_TRANSACTION */ .oE, getwallettransaction);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeEvery)(_constants__WEBPACK_IMPORTED_MODULE_8__/* .SAVE_CART_CHECKOUT */ .PA, checkoutwithsavecart);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeEvery)(_constants__WEBPACK_IMPORTED_MODULE_8__/* .IS_FIRST_TIME */ .C6, isFirstTimePasswordSaga);
    // yield takeLatest(SETUP_PASSWORD, setupPasswordSaga)
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeEvery)(_constants__WEBPACK_IMPORTED_MODULE_8__/* .UPDATE_PASSWORD */ .D3, updatePwdSaga);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeEvery)(_constants__WEBPACK_IMPORTED_MODULE_8__/* .SEND_OTP */ .N9, sendotp);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeEvery)(_constants__WEBPACK_IMPORTED_MODULE_8__/* .VERIFY_OTP */ .bU, otpverify);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeEvery)(_constants__WEBPACK_IMPORTED_MODULE_8__/* .UPDATE_PROFILE */ .r0, profileupdate);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeEvery)(_constants__WEBPACK_IMPORTED_MODULE_8__/* .SET_PASSWORD */ .cg, passwordSet);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeEvery)(_constants__WEBPACK_IMPORTED_MODULE_8__/* .SEND_UPDATE_PROFILE_EMAIL */ .ze, sendUpdateProfileEmail);
}
function* isFirstTimePasswordSaga(action) {
    console.log("actionid..", action.id);
    const firstTimevalue = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_MainPage_api_managePasswordAPI__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.firsttimepasswordchange, action.id);
    console.log("isFirstTime..", firstTimevalue);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
        type: _constants__WEBPACK_IMPORTED_MODULE_8__/* .IS_FIRST_TIME_SUCCESS */ .f8,
        firstTimevalue
    });
// console.log('isFirstTime..', isFirstTime);
}
function* passwordSet(action) {
    console.log("actioneeevv..", action.username, action.n1passwordTxt, action.cnfpasswordTxt);
    const savePassword = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_MainPage_api_managePasswordAPI__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.setupPasswordAPI, action.username, action.n1passwordTxt, action.cnfpasswordTxt);
    console.log("saveval..", savePassword);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
        type: _constants__WEBPACK_IMPORTED_MODULE_8__/* .SAVE_PASSWPORD */ .jr,
        savePassword
    });
}
// function* setupPasswordSaga(action) {
//   const setPwd = yield call(managePasswordAPI.setupPasswordAPI, action.npwd, action.cpwd)
//   yield put({ type: IS_FIRST_TIME_SUCCESS, setPwd });
// }
function* updatePwdSaga(action) {
    console.log("updateval..", action.username, action.opwd, action.npwd);
    const updateStatus = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_MainPage_api_managePasswordAPI__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.changePasswordAPI, action.username, action.opwd, action.npwd);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
        type: _constants__WEBPACK_IMPORTED_MODULE_8__/* .UPDATE_PASSWORD_SUCCESS */ .iB,
        updateStatus
    });
    console.log("chkvalue..", updateStatus);
// if (updateStatus === 1) {
//   alert('password change successfully')
// }
}
function* getrepos() {
    try {
        const orderdata = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_MainPage_api_orderdetail__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getmyorder);
    // const verifysignatiure = yield call(PaymentAPI.razorpayVerifysignature, action.databody)
    // yield put({ type: GET_WALLETBALANCE_SUCCESS, customerwalletbalance });
    } catch (err) {
    // yield put();
    }
}
function* checkoutwithsavecart(action) {
    try {
        const checkoutdata = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_MainPage_api_savecart__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.savecartcheckout, action.name, action.flag);
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
            type: _constants__WEBPACK_IMPORTED_MODULE_8__/* .SAVE_CART_CHECKOUT_SUCCESS */ .tS,
            checkoutdata
        });
    } catch (err) {
    // yield put();
    }
}
function* reorder() {
    try {
        const reorderlist = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_MainPage_api_Reorder__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.productReorder);
    // yield put({ type: SAVE_CART_CHECKOUT_SUCCESS, checkoutdata });
    } catch (err) {
    // yield put();
    }
}
function* getwallettransaction() {
    try {
        const transactions = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_MainPage_api_wallet__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.wallettransact);
    // yield put({ type: SAVE_CART_CHECKOUT_SUCCESS, checkoutdata });
    } catch (err) {
    // yield put();
    }
}
function* sendotp(action) {
    const pattern = new RegExp(/^[0-9\b]+$/);
    if (!pattern.test(action.userid)) {
        const email = action.userid;
        const phone = null;
        try {
            const sendOtpResponse = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_MainPage_api_profile__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.generateandsendphoneemailchangeotp, email, phone);
            console.log("sendOtpResponse", sendOtpResponse.Message);
            // if (sendOtpResponse.Message === 'Email Already Exist') {
            //   toast('Email ID is already registered')
            // }
            yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
                type: _constants__WEBPACK_IMPORTED_MODULE_8__/* .SEND_OTP_SUCCESS */ .bI,
                sendOtpResponse
            });
        } catch (err) {
        // yield put();
        // }
        }
    } else {
        const email = null;
        const phone = action.userid;
        try {
            const sendOtpResponse = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_MainPage_api_profile__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.generateandsendphoneemailchangeotp, email, phone);
            console.log("sendOtpResponse", sendOtpResponse.Message);
            yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
                type: _constants__WEBPACK_IMPORTED_MODULE_8__/* .SEND_OTP_SUCCESS */ .bI,
                sendOtpResponse
            });
        } catch (err) {
        // yield put();
        // }
        }
    }
}
function* profileupdate(action) {
    try {
        const updateprofile = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_MainPage_api_profile__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.updatationprofile, action.title, action.firstname, action.lastname, action.emailvalue, action.mobile, action.company, action.receiveOffers);
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
            type: _constants__WEBPACK_IMPORTED_MODULE_8__/* .UPDATE_PROFILE_SUCCESS */ .z9,
            updateprofile
        });
    } catch (err) {
    // yield put();
    // }
    }
}
function* sendUpdateProfileEmail(action) {
    try {
        const updateprofileemail = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_MainPage_api_profile__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.sendUpdateProfileEmail, action.email, action.firstName);
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
            type: _constants__WEBPACK_IMPORTED_MODULE_8__/* .UPDATE_PROFILE_SUCCESS */ .z9,
            updateprofileemail
        });
    } catch (err) {
    // yield put();
    // }
    }
}
function* otpverify(action) {
    try {
        const verify = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_MainPage_api_profile__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.verifyemailphoneotp, action.guid, action.otp);
        console.log("verify", verify);
        if (verify === 0) {
            localStorage.setItem("invalidOTP", 0);
        // alert('Please enter valid OTP')
        // toast('Please enter valid OTP')
        }
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
            type: _constants__WEBPACK_IMPORTED_MODULE_8__/* .VERIFY_OTP_SUCCESS */ .zG,
            verify
        });
    } catch (err) {
    // yield put();
    // }
    }
}


/***/ })

};
;