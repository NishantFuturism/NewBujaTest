"use strict";
exports.id = 2447;
exports.ids = [2447];
exports.modules = {

/***/ 538:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export initialState */
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7133);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(629);
/* eslint-disable prefer-destructuring */ /*
 *
 * LoadProducts reducer
 *
 */ 

const initialState = {
    shoppingcartDetails: [],
    addToCartMsg: "",
    receivemsg: "",
    IsMsgBar: false,
    updateWishlistData: [],
    popup: false,
    skuurl: "",
    comaprelist: [],
    newcompare: [],
    // compareSuccess:"",
    recentlist: [],
    wishlistcount: "",
    notify: false,
    Quickviewdata: []
};
/* eslint-disable default-case, no-param-reassign */ const loadProductsReducer = (state = initialState, action)=>immer__WEBPACK_IMPORTED_MODULE_0___default()(state, (draft)=>{
        switch(action.type){
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .DEFAULT_ACTION */ .YI:
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .CLOSE_MSG_BAR */ .jp:
                draft.IsMsgBar = false;
                draft.addToCartMsg = "";
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .SHOPPING_CART_DETAILS */ .P9:
                draft.shoppingcartDetails = action.shoppingcartDetails;
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .ADD_TO_CART_SUCCESS */ ._T:
                draft.IsMsgBar = true;
                draft.addToCartMsg = action.updateCartData.split("|")[1];
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .ADD_TO_WISHLIST_SUCCESS */ .md:
                draft.IsMsgBar = true;
                draft.updateWishlistData = action.updateWishlistData;
                draft.wishlistcount = action.updateWishlistData.length;
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .RESPONCE_MSG */ .A6:
                console.log("chkresponsemsg..", action.recievedMsg);
                draft.IsMsgBar = true;
                draft.receivemsg = action.recievedMsg;
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .QUICKVIEW */ .hV:
                draft.popup = action.popup;
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .SKUURL */ .DN:
                draft.skuurl = action.skuurl;
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .RESPONCE_COMPARE */ .qK:
                console.log("reducercomp", action.compareSkcode, action.newUpdateCompare);
                draft.newcompare = action.compareSkcode;
                console.log("redcomp", draft.newcompare);
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .PRODUCT_COMPARE_SUCCESS */ .$j:
                // console.log('upCompare..', action.updateCompare)
                draft.IsMsgBar = true;
                draft.addToCartMsg = "Product added to compare list successfully";
                draft.comaprelist = [
                    ...draft.comaprelist,
                    ...action.updateCompare
                ];
                // sessionStorage.setItem('sessionCompareList', JSON.stringify(...draft.comaprelist))
                // draft.comaprelist = action.updateCompare
                console.log("reucerCompare..", draft.comaprelist);
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .RECENT_SUCCESS */ .gK:
                draft.recentlist = action.recentdata;
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .NOTIFY_ME_SUCCESS */ .mt:
                draft.notify = action.notifyMeResp;
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .QUICKVIEW_SUCCESS */ .dD:
                console.log("skudetaildata", action.skudetaildata);
                draft.Quickviewdata = action.skudetaildata;
                break;
        }
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadProductsReducer);


/***/ }),

/***/ 1953:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ loadProductsSaga)
/* harmony export */ });
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6477);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _HomePage_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4595);
/* harmony import */ var _MainPage_api_homeServices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4171);
/* harmony import */ var _MainPage_api_mycartAPI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6920);
/* harmony import */ var _MainPage_api_productdetail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3577);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(629);
// import { take, call, put, select } from 'redux-saga/effects';


// import Cookies from 'universal-cookie';




// import { useCookies } from "react-cookie";

function* AddToCartAPI(action) {
    try {
        const updateCartData = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.call)(_MainPage_api_mycartAPI__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.updatecart, null, action.payload.qty, action.payload.SkuId, action.payload.SKUFilterPriceId);
        const cartAllData = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.call)(_MainPage_api_mycartAPI__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getCartCommon);
        const shoppingcartDetails = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.call)(_MainPage_api_mycartAPI__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getShoppingcartDetails, action.payload.SkuId, action.payload.SKUFilterPriceId);
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
            type: _HomePage_constants__WEBPACK_IMPORTED_MODULE_5__/* .GET_COMMON_CART_SUCCESS */ .J3,
            cartAllData
        });
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
            type: _constants__WEBPACK_IMPORTED_MODULE_6__/* .ADD_TO_CART_SUCCESS */ ._T,
            updateCartData
        });
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
            type: _constants__WEBPACK_IMPORTED_MODULE_6__/* .SHOPPING_CART_DETAILS */ .P9,
            shoppingcartDetails
        });
    } catch (err) {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)(err);
    }
}
function* AddToCompare(action) {
    // const cookies = new Cookies();
    try {
        // console.log("sagacompare..", action.skuCode)
        const updateCompare = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.call)(_MainPage_api_homeServices__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.getproductcompare, action.skuCode);
        localStorage.setItem("Comapredata", JSON.stringify(updateCompare));
        // console.log("updateCompare..", updateCompare)
        if (updateCompare.length <= 2) {
        // toast("Product added to compare list successfully", {
        //   position: toast.POSITION.TOP_RIGHT
        // })
        } else {
        // toast('You have reached your maximum limit to compare items', {
        //   position: toast.POSITION.TOP_RIGHT
        // })
        }
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
            type: _constants__WEBPACK_IMPORTED_MODULE_6__/* .PRODUCT_COMPARE_SUCCESS */ .$j,
            updateCompare
        });
    // const cartAllData = yield call(mycartAPI.getCartCommon)
    // const shoppingcartDetails = yield call(mycartAPI.getShoppingcartDetails, action.payload.SkuId, action.payload.SKUFilterPriceId)
    // yield put({ type: GET_COMMON_CART_SUCCESS, cartAllData });
    // yield put({ type: ADD_TO_CART_SUCCESS, updateCartData });
    // yield put({ type: SHOPPING_CART_DETAILS, shoppingcartDetails });
    } catch (err) {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)(err);
    }
}
function* RemoveFromCartAPI(action) {
    const recievedMsg = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.call)(_MainPage_api_mycartAPI__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.RemoveCartItem, action.payload.SkuId, action.payload.SKUFilterPriceId);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
        type: _constants__WEBPACK_IMPORTED_MODULE_6__/* .RESPONCE_MSG */ .A6,
        recievedMsg
    });
    const cartAllData = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.call)(_MainPage_api_mycartAPI__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getCartCommon);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
        type: _HomePage_constants__WEBPACK_IMPORTED_MODULE_5__/* .GET_COMMON_CART_SUCCESS */ .J3,
        cartAllData
    });
    const shoppingcartDetails = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.call)(_MainPage_api_mycartAPI__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getShoppingcartDetails);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
        type: _constants__WEBPACK_IMPORTED_MODULE_6__/* .SHOPPING_CART_DETAILS */ .P9,
        shoppingcartDetails
    });
}
function* GetCompareAPI(action) {
    console.log("sagaact", action.SkuId, action.ip, action.compareflag);
    const newUpdateCompare = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.call)(_MainPage_api_homeServices__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.getnewcompare, action.SkuId, action.ip, action.compareflag);
    const compareSkcode = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.call)(_MainPage_api_homeServices__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.getproductcompare);
    console.log("compareSkcode", compareSkcode);
    console.log("newUpdateCompare", newUpdateCompare);
    (0,react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast)(newUpdateCompare);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
        type: _constants__WEBPACK_IMPORTED_MODULE_6__/* .RESPONCE_COMPARE */ .qK,
        compareSkcode
    });
}
function* AddToWishlist(action) {
    const recievedMsg = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.call)(_MainPage_api_homeServices__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.addwishlist, action.SkuId, action.SKUFilterPriceId);
    // console.log("recievedMsg", recievedMsg);
    if (recievedMsg === "Wishlist item already exist") {
        (0,react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast)("Wishlist item already exist");
    }
    if (recievedMsg === "Item Added in Wishlist") {
        (0,react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast)("Item Added in Wishlist");
    }
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
        type: _constants__WEBPACK_IMPORTED_MODULE_6__/* .RESPONCE_MSG */ .A6,
        recievedMsg
    });
    const updateWishlistData = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.call)(_MainPage_api_homeServices__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.getwishlist);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
        type: _constants__WEBPACK_IMPORTED_MODULE_6__/* .ADD_TO_WISHLIST_SUCCESS */ .md,
        updateWishlistData
    });
    localStorage.setItem("length", updateWishlistData.length);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
        type: _HomePage_constants__WEBPACK_IMPORTED_MODULE_5__/* .ADD_TO_WISHLIST_SUCCESS_HOME */ .fD,
        updateWishlistData
    });
}
function* getreview(action) {
    // console.log('QUICKVIEWj', action);
    // const recievedMsg = yield call(CustomsAP, action.SkuId, action.SKUFilterPriceId)
    const skudetaildata = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.call)(_MainPage_api_productdetail__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getSkuv, action.PageUrl);
    console.log("hghh", skudetaildata);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
        type: _constants__WEBPACK_IMPORTED_MODULE_6__/* .QUICKVIEW_SUCCESS */ .dD,
        skudetaildata
    });
}
// yield put({ type: RESPONCE_MSG, recievedMsg });
// const updateWishlistData = yield call(CustomsAPI.getwishlist)
// yield put({ type: ADD_TO_WISHLIST_SUCCESS, updateWishlistData });
// localStorage.setItem('length', updateWishlistData.length)
// y
// function* NotifyMeSaga(action) {
//   console.log("saga notify gfgf");
//   const notifyMeResp = yield call(mycartAPI.NotifyMeAPI, action.skuDetailId)
//   console.log('notifyMeResp', notifyMeResp);
//   yield put({ type: NOTIFY_ME_SUCCESS, notifyMeResp });
//   // alert('nottified')
//   // mycartAPI.NotifyMeAPI
//   // NotifyMeAPI
// }
function* recentproduct(action) {
    // console.log("loadproduct recenet action", action);
    const recentdata = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.call)(_MainPage_api_productdetail__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getrecentlyviewd, action.skuId, 1, 9);
    // console.log('recentdata', recentdata);
    localStorage.setItem("Recentdata", JSON.stringify(recentdata));
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
        type: _constants__WEBPACK_IMPORTED_MODULE_6__/* .RECENT_SUCCESS */ .gK,
        recentdata
    });
// setCookie('recentdata',skudetaildata, { path: '/' });
// mycartAPI.NotifyMeAPI
// NotifyMeAPI
}
// Individual exports for testing
function* loadProductsSaga() {
    // See example in containers/HomePage/saga.js
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.takeEvery)(_constants__WEBPACK_IMPORTED_MODULE_6__/* .ADD_TO_CART */ .G2, AddToCartAPI);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.takeEvery)(_constants__WEBPACK_IMPORTED_MODULE_6__/* .GET_TO_COMPARE */ .W, GetCompareAPI);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.takeEvery)(_constants__WEBPACK_IMPORTED_MODULE_6__/* .ADD_TO_COMPARE */ .Zd, AddToCompare);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.takeEvery)(_constants__WEBPACK_IMPORTED_MODULE_6__/* .ADD_TO_WISHLIST */ .Cm, AddToWishlist);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.takeEvery)(_constants__WEBPACK_IMPORTED_MODULE_6__/* .REMOVE_FROM_CART */ .OZ, RemoveFromCartAPI);
    // yield takeEvery(NOTIFY_ME_REQUEST, NotifyMeSaga);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.takeEvery)(_constants__WEBPACK_IMPORTED_MODULE_6__/* .QUICKVIEW */ .hV, getreview);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.takeEvery)(_constants__WEBPACK_IMPORTED_MODULE_6__/* .RECENT */ .u8, recentproduct);
}


/***/ })

};
;