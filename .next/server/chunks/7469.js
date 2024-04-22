"use strict";
exports.id = 7469;
exports.ids = [7469];
exports.modules = {

/***/ 7469:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A_: () => (/* binding */ savecartcheckout),
/* harmony export */   BK: () => (/* binding */ DeleteSkuidflag),
/* harmony export */   Be: () => (/* binding */ updateprofile),
/* harmony export */   h: () => (/* binding */ otpsend),
/* harmony export */   hv: () => (/* binding */ loadsavecheckoutpopup),
/* harmony export */   nd: () => (/* binding */ sendUpdateProfileEmail)
/* harmony export */ });
/* unused harmony exports defaultAction, getmyorder, getmyordersuccess, getallcustomerorder, getallcustomerordersuccess, listreorder, gettransactwallet, isFirstTimeUpdateAction, updatePasswordAction, setpassword, verifyotp, getDeleteaddressid, getDeleteSkuid, savecarttotal */
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5386);
/*
 *
 * MyAccount actions
 *
 */ 
function defaultAction() {
    return {
        type: DEFAULT_ACTION
    };
}
function getmyorder() {
    return {
        type: GET_MYORDER
    };
}
function getmyordersuccess() {
    return {
        type: GET_MYORDER_SUCCESSS
    };
}
function getallcustomerorder() {
    return {
        type: GET_ALL_CUSTOMER_ORDER
    };
}
function getallcustomerordersuccess() {
    return {
        type: GET_ALL_CUSTOMER_ORDER_SUCCESS
    };
}
function savecartcheckout(name, flag) {
    return {
        type: _constants__WEBPACK_IMPORTED_MODULE_0__/* .SAVE_CART_CHECKOUT */ .PA,
        name,
        flag
    };
}
function loadsavecheckoutpopup(popup, cartname) {
    return {
        type: _constants__WEBPACK_IMPORTED_MODULE_0__/* .LOAD_CHECKOUT_ALERT */ .qo,
        popup,
        cartname
    };
}
function listreorder() {
    return {
        type: DASHBOARD_REORDER
    };
}
function gettransactwallet() {
    return {
        type: WALLET_TRANSACTION
    };
}
function isFirstTimeUpdateAction(id) {
    console.log("eval1..", id);
    return {
        type: IS_FIRST_TIME,
        id
    };
}
function updatePasswordAction(username, opwd, npwd) {
    console.log("actionupdate..", username, opwd, npwd);
    return {
        type: UPDATE_PASSWORD,
        username,
        opwd,
        npwd
    };
}
function otpsend(userid) {
    return {
        type: _constants__WEBPACK_IMPORTED_MODULE_0__/* .SEND_OTP */ .N9,
        userid
    };
}
function setpassword(username, n1passwordTxt, cnfpasswordTxt) {
    console.log("Eval..", username);
    return {
        type: SET_PASSWORD,
        username,
        n1passwordTxt,
        cnfpasswordTxt
    };
}
function updateprofile(title, firstname, lastname, emailvalue, mobile, company, receiveOffers) {
    return {
        type: _constants__WEBPACK_IMPORTED_MODULE_0__/* .UPDATE_PROFILE */ .r0,
        title,
        firstname,
        lastname,
        emailvalue,
        mobile,
        company,
        receiveOffers
    };
}
function sendUpdateProfileEmail(email, firstName) {
    console.log("sendUpdateProfileEmail actions", email, firstName);
    return {
        type: _constants__WEBPACK_IMPORTED_MODULE_0__/* .SEND_UPDATE_PROFILE_EMAIL */ .ze,
        email,
        firstName
    };
}
function verifyotp(guid, otp, number) {
    return {
        type: VERIFY_OTP,
        guid,
        otp,
        number
    };
}
function getDeleteaddressid(CustomerAddressId) {
    return {
        type: DELETEDADDRESSID,
        CustomerAddressId
    };
}
function getDeleteSkuid(SkuId) {
    return {
        type: DELETEDSKUID,
        SkuId
    };
}
function DeleteSkuidflag(flag) {
    console.log("action flag", flag);
    return {
        type: _constants__WEBPACK_IMPORTED_MODULE_0__/* .DELETED_FLAG */ .te,
        flag
    };
}
function savecarttotal(totalamount) {
    console.log("action flag", totalamount);
    return {
        type: SAVE_CART_TOTAL,
        totalamount
    };
} // export function passwordresponse(data) {
 //   console.log("checkdata..", data)
 //   return {
 //     type: PASSWORD_RESPONSE,
 //     data
 //   };
 // }


/***/ })

};
;