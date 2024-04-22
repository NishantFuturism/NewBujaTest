"use strict";
exports.id = 6452;
exports.ids = [6452];
exports.modules = {

/***/ 6452:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VX: () => (/* binding */ resgesterresponse),
/* harmony export */   YG: () => (/* binding */ copyShopingCartDetails),
/* harmony export */   yN: () => (/* binding */ defaultAction)
/* harmony export */ });
/* unused harmony exports getBillBoardlist, msgshow, recentlylist */
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6159);
/*
 *
 * HomeScreen actions
 *
 */ 
function defaultAction(id) {
    // console.log('bilboard', id);
    return {
        type: _constants__WEBPACK_IMPORTED_MODULE_0__/* .DEFAULT_ACTION */ .YI,
        id
    };
}
function getBillBoardlist() {
    return {
        type: BILLBOARDLIST_SUCCESS
    };
}
function copyShopingCartDetails(shoppingcartDetails) {
    return {
        type: _constants__WEBPACK_IMPORTED_MODULE_0__/* .SHOPPING_CART_DETAILS */ .P9,
        shoppingcartDetails
    };
}
function msgshow(msg) {
    return {
        type: RES_MSG,
        msg
    };
}
function resgesterresponse(flag, data) {
    return {
        type: _constants__WEBPACK_IMPORTED_MODULE_0__/* .RESGESTER_RESPONSE */ .Hq,
        flag,
        data
    };
}
function recentlylist(skuID) {
    // console.log('actiomn');
    return {
        type: RECENTLY_LIST,
        skuID
    };
}


/***/ }),

/***/ 6159:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BU: () => (/* binding */ SHOPBY_BRAND_SUCCESS),
/* harmony export */   C3: () => (/* binding */ RELATED_SUCCESS),
/* harmony export */   F4: () => (/* binding */ BILLBOARDLIST_SUCCESS),
/* harmony export */   FF: () => (/* binding */ RECENTLY_VIEWED_SUCCESS),
/* harmony export */   Hq: () => (/* binding */ RESGESTER_RESPONSE),
/* harmony export */   MB: () => (/* binding */ DEFAULT_ACTION_FAILURE),
/* harmony export */   P9: () => (/* binding */ SHOPPING_CART_DETAILS),
/* harmony export */   QU: () => (/* binding */ MEGA_MENU_SUCCESS),
/* harmony export */   UQ: () => (/* binding */ RECOMMENDED_SUCCESS),
/* harmony export */   Vt: () => (/* binding */ GET_REORDER_PRODUCT_SUCCESS),
/* harmony export */   YI: () => (/* binding */ DEFAULT_ACTION),
/* harmony export */   al: () => (/* binding */ GET_CLIENTID_SUCCESS),
/* harmony export */   bC: () => (/* binding */ BANNER_SUCCESS),
/* harmony export */   bF: () => (/* binding */ GET_WISHLIST_COUNT_SUCCESS),
/* harmony export */   d5: () => (/* binding */ GET_GOOGLELOCATION_SUCCESS),
/* harmony export */   ey: () => (/* binding */ FTR_SUCCESS),
/* harmony export */   hC: () => (/* binding */ FOOTERSTATIC_SUCCESS),
/* harmony export */   mW: () => (/* binding */ TOPSELLINGDB_SUCCESS),
/* harmony export */   ot: () => (/* binding */ CATEGORY_SUCCESS),
/* harmony export */   vB: () => (/* binding */ WISHLIST_PAGED_SUCCESS),
/* harmony export */   xe: () => (/* binding */ DEALOFDAY_SUCCESS),
/* harmony export */   zq: () => (/* binding */ FOOTERCONTENT_SUCCESS)
/* harmony export */ });
/* unused harmony exports RES_MSG, RECENTLY_LIST */
/*
 *
 * HomeScreen constants
 *
 */ const DEFAULT_ACTION = "app/HomeScreen/DEFAULT_ACTION";
const DEFAULT_ACTION_FAILURE = "app/MyAccount/DEFAULT_ACTION_FAILURE";
const BILLBOARDLIST_SUCCESS = "app/HomeScreen/BILLBOARDLIST_SUCCESS";
const DEALOFDAY_SUCCESS = "app/HomeScreen/DEALOFDAY_SUCCESS";
const BANNER_SUCCESS = "app/HomeScreen/BANNER_SUCCESS";
const CATEGORY_SUCCESS = "app/HomeScreen/CATEGORY_SUCCESS";
const FOOTERSTATIC_SUCCESS = "app/HomeScreen/FOOTERSTATIC_SUCCESS";
const FOOTERCONTENT_SUCCESS = "app/HomeScreen/FOOTERCONTENT_SUCCESS";
const FTR_SUCCESS = "app/HomeScreen/FTR_SUCCESS";
const TOPSELLINGDB_SUCCESS = "app/HomeScreen/TOPSELLINGDB_SUCCESS";
const GET_CLIENTID_SUCCESS = "app/HomeScreen/GET_CLIENTID_SUCCESS";
const GET_GOOGLELOCATION_SUCCESS = "app/HomeScreen/GET_GOOGLELOCATION_SUCCESS";
const GET_WISHLIST_COUNT_SUCCESS = "app/HomeScreen/GET_WISHLIST_COUNT_SUCCESS";
const MEGA_MENU_SUCCESS = "app/HomeScreen/MEGA_MENU_SUCCESS";
const SHOPPING_CART_DETAILS = "app/HomeScreen/MEGA_MENU_SUCCESS";
const SHOPBY_BRAND_SUCCESS = "app/HomeScreen/SHOPBY_BRAND_SUCCESS";
const GET_REORDER_PRODUCT_SUCCESS = "app/ReorderProduct/GET_REORDER_PRODUCT_SUCCESS";
const RES_MSG = "app/ReorderProduct/RES_MSG";
const RESGESTER_RESPONSE = "app/ReorderProduct/RESGESTER_RESPONSE";
const RECOMMENDED_SUCCESS = "app/HomeScreen/RECOMMENDED_SUCCESS";
const WISHLIST_PAGED_SUCCESS = "app/HomeScreen/WISHLIST_PAGED_SUCCESS";
const RECENTLY_VIEWED_SUCCESS = "app/HomeScreen/RECENTLY_VIEWED_SUCCESS";
const RECENTLY_LIST = "app/HomeScreen/RECENTLY_LIST";
const RELATED_SUCCESS = "app/HomeScreen/RELATED_SUCCESS"; // export const LOADING = 'app/ReorderProduct/LOADING';
 // export const GET_REORDER_PRODUCT_SUCCESS = 'app/ReorderProduct/GET_REORDER_PRODUCT_SUCCESS';


/***/ })

};
;