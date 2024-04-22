exports.id = 9703;
exports.ids = [9703];
exports.modules = {

/***/ 8442:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E_: () => (/* binding */ SAVE_CONTACT),
/* harmony export */   ND: () => (/* binding */ CONTACT_S_DATA),
/* harmony export */   NU: () => (/* binding */ SHOW_CONTACT_POPUP),
/* harmony export */   XA: () => (/* binding */ SEND_MESSAGE_LOADING)
/* harmony export */ });
const SAVE_CONTACT = "app/FooterContact/SAVE_CONTACT";
const CONTACT_S_DATA = "app/FooterContact/CONTACT_S_DATA";
const SHOW_CONTACT_POPUP = "app/FooterContact/SHOW_CONTACT_POPUP";
const SEND_MESSAGE_LOADING = "send-message-loading";


/***/ }),

/***/ 238:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export initialState */
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7133);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8442);


const initialState = {
    IsMsgbar: false,
    contactusinfo: "",
    savecpopup: "",
    isLoading: false
};
/* eslint-disable default-case, no-param-reassign */ const contactdeatailsReducer = (state = initialState, action)=>immer__WEBPACK_IMPORTED_MODULE_0___default()(state, (draft)=>{
        switch(action.type){
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .CONTACT_S_DATA */ .ND:
                draft.IsMsgbar = true;
                draft.contactusinfo = action.contactinfo;
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .SHOW_CONTACT_POPUP */ .NU:
                draft.savecpopup = action.popupsave;
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .SEND_MESSAGE_LOADING */ .XA:
                draft.isLoading = action.loading;
                break;
        }
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactdeatailsReducer);


/***/ }),

/***/ 5834:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ contactdeatailsSaga)
});

// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__(6477);
// EXTERNAL MODULE: ./src/containers/App/constants.js
var constants = __webpack_require__(1824);
// EXTERNAL MODULE: ./src/containers/MainPage/api/apiServices.js
var apiServices = __webpack_require__(4287);
;// CONCATENATED MODULE: ./src/containers/MainPage/api/contactdetail.js


function savecontatinformation(action) {
    const url = `${constants/* default */.ZP.urls.baseUrl}${constants/* default */.ZP.endPoints.savecontatinformation}`;
    return (0,apiServices/* httpRequest */.c)(url, "POST", action);
}
const ContactdetailAPI = {
    savecontatinformation
};
/* harmony default export */ const contactdetail = (ContactdetailAPI);

// EXTERNAL MODULE: ./src/containers/FooterContact/constants.js
var FooterContact_constants = __webpack_require__(8442);
;// CONCATENATED MODULE: ./src/containers/FooterContact/saga.js
/* eslint-disable no-unused-vars */ 


function* contactdeatailsSaga() {
    yield (0,effects_.takeEvery)(FooterContact_constants/* SAVE_CONTACT */.E_, contactdata);
}
function* contactdata(action) {
    console.log("sagacontact..", action.savecdata);
    try {
        yield (0,effects_.put)({
            type: FooterContact_constants/* SEND_MESSAGE_LOADING */.XA,
            loading: true
        });
        const contactinfo = yield (0,effects_.call)(contactdetail.savecontatinformation, action.savecdata);
        yield (0,effects_.put)({
            type: FooterContact_constants/* CONTACT_S_DATA */.ND,
            contactinfo
        });
    } catch (err) {
        console.log("Error in contact us:", err);
    } finally{
        yield (0,effects_.put)({
            type: FooterContact_constants/* SEND_MESSAGE_LOADING */.XA,
            loading: false
        });
    }
}


/***/ }),

/***/ 8819:
/***/ (() => {



/***/ }),

/***/ 6061:
/***/ (() => {



/***/ }),

/***/ 2372:
/***/ (() => {



/***/ })

};
;