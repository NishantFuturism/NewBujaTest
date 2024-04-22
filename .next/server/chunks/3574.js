"use strict";
exports.id = 3574;
exports.ids = [3574];
exports.modules = {

/***/ 3574:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ms: () => (/* binding */ nextBtn)
/* harmony export */ });
/* unused harmony exports defaultAction, addToCart, closeMsgBar */
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(766);
/*
 *
 * DealdayProduct actions
 *
 */ 
function defaultAction() {
    return {
        type: DEFAULT_ACTION
    };
}
function nextBtn(pageNum, pageSize, SkuDetailId) {
    return {
        type: _constants__WEBPACK_IMPORTED_MODULE_0__/* .NEXT_PAGE */ .wt,
        pageNum,
        pageSize,
        SkuDetailId
    };
}
function addToCart(qty, SkuId, SKUFilterPriceId) {
    return {
        type: ADD_TO_CART,
        payload: {
            qty,
            SkuId,
            SKUFilterPriceId
        }
    };
}
function closeMsgBar() {
    return {
        type: CLOSE_MSG_BAR
    };
} // export function removeFromCart(qty, SkuId, SKUFilterPriceId) {
 //   console.log(qty, SkuId, SKUFilterPriceId);
 //   return {
 //     type: REMOVE_FROM_CART, payload: { qty, SkuId, SKUFilterPriceId }
 //   };
 // }


/***/ }),

/***/ 766:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $_: () => (/* binding */ DEFAULT_ACTION_SUCCESS),
/* harmony export */   A6: () => (/* binding */ RESPONCE_MSG),
/* harmony export */   ED: () => (/* binding */ NEXT_PAGE_SUCCESS),
/* harmony export */   G2: () => (/* binding */ ADD_TO_CART),
/* harmony export */   YI: () => (/* binding */ DEFAULT_ACTION),
/* harmony export */   _T: () => (/* binding */ ADD_TO_CART_SUCCESS),
/* harmony export */   jp: () => (/* binding */ CLOSE_MSG_BAR),
/* harmony export */   wt: () => (/* binding */ NEXT_PAGE),
/* harmony export */   y7: () => (/* binding */ SHOPPING_CART_DETAILS_HOME)
/* harmony export */ });
/* unused harmony exports PREVIOUS_PAGE, ADD_TO_CART_SAGA, GET_DEAL_WITH_PAGE, GET_DEAL_WITH_PAGE_SUCCESS, GET_DEAL_WITH_PAGE_SAGA */
/*
 *
 * ToppSelling constants
 *
 */ const DEFAULT_ACTION = "app/ToppSelling/DEFAULT_ACTION";
const DEFAULT_ACTION_SUCCESS = "app/ToppSelling/DEFAULT_ACTION_SUCCESS";
const NEXT_PAGE = "app/ToppSelling/NEXT_PAGE";
const NEXT_PAGE_SUCCESS = "app/ToppSelling/NEXT_PAGE_SUCCESS";
const PREVIOUS_PAGE = "app/ToppSelling/PREVIOUS_PAGE";
const ADD_TO_CART = "app/ToppSelling/ADD_TO_CART";
const ADD_TO_CART_SUCCESS = "app/ToppSelling/ADD_TO_CART_SUCCESS";
const ADD_TO_CART_SAGA = "app/ToppSelling/ADD_TO_CART_SAGA";
const GET_DEAL_WITH_PAGE = "app/ToppSelling/GET_DEAL_WITH_PAGE";
const GET_DEAL_WITH_PAGE_SUCCESS = "app/ToppSelling/GET_DEAL_WITH_PAGE_SUCCESS";
const GET_DEAL_WITH_PAGE_SAGA = "app/ToppSelling/GET_DEAL_WITH_PAGE_SAGA";
const CLOSE_MSG_BAR = "app/ToppSelling/CLOSE_MSG_BAR";
const RESPONCE_MSG = "app/ToppSelling/RESPONCE_MSG";
const SHOPPING_CART_DETAILS_HOME = "app/ToppSelling/SHOPPING_CART_DETAILS_HOME"; // export const REMOVE_FROM_CART_SAGA = 'app/ToppSelling/REMOVE_FROM_CART_SAGA';


/***/ })

};
;