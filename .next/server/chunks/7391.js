exports.id = 7391;
exports.ids = [7391];
exports.modules = {

/***/ 9227:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/**
 * A link to a certain page, an anchor tag
 */ 
const A = styled_components__WEBPACK_IMPORTED_MODULE_0___default().a.withConfig({
    componentId: "sc-ffbf1963-0"
})`
  color: #41addd;

  &:hover {
    color: #6cc0e5;
  }
`;
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (A)));


/***/ }),

/***/ 8630:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Item)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_assets1_css_default_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4573);
/* harmony import */ var _public_assets1_css_default_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_assets1_css_default_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_assets1_css_responsive_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8698);
/* harmony import */ var _public_assets1_css_responsive_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_assets1_css_responsive_min_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_assets_css_style_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2269);
/* harmony import */ var _public_assets_css_style_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_assets_css_style_min_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7649);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_ShowAlert_warn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8659);
/* eslint-disable jsx-a11y/anchor-is-valid */ /* eslint-disable react/no-unescaped-entities */ /* eslint-disable jsx-a11y/no-noninteractive-element-interactions */ /* eslint-disable jsx-a11y/no-static-element-interactions */ /* eslint-disable jsx-a11y/click-events-have-key-events */ 


// import { Link } from 'react-router-dom';

// import '../../../assets1/css/bundle.css';

// import '../../../public/assets1/css/style.min.css';


// import mycartAPI from '../MainPage/api/mycartAPI';
//import history from '../../utils/history';


function Item(param) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    console.log("param", param);
    const { data } = param;
    //console.log("viewcart page", data);
    const [qty, setQty] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const [msgCapLimit, setmsgCapLimit] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    // function NotifyMeForReOrder() { }
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setQty(data.Quantity);
    }, [
        data
    ]);
    const locationPopupState = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.locationPopup);
    function IncrementDecrementQuantityCart(action) {
        if (action === "Inc") {
            setQty(qty + 1);
            dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_8__/* .addToCart */ .Xq)(qty + 1, data.SkuId, data.SKUFilterPriceId));
            if (data?.CappingLimit === qty) {
                setmsgCapLimit(`Order quantity limit for this product is ${data.CappingLimit}`);
            }
        }
        if (action === "Dec") {
            if (qty > 0) {
                setQty(qty - 1);
                // dispatch(addToCart(qty - 1, data.SkuId, data.SKUFilterPriceId))
                if (qty === 1) {
                    // console.log("removeitemdec=", SkuId, SKUFilterPriceId)
                    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_8__/* .removeFromCart */ .h2)(data.SkuId, data.SKUFilterPriceId));
                } else {
                    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_8__/* .addToCart */ .Xq)(qty - 1, data.SkuId, data.SKUFilterPriceId));
                }
            }
        }
    }
    const productdetail = (PageUrl)=>{
        // router.push(`/product/${PageUrl}`, { skuUrl: PageUrl })
        router.push({
            pathname: `/product/${PageUrl}`,
            skuUrl: PageUrl
        });
        localStorage.setItem("PageUrl", window.btoa(PageUrl));
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // setisError(false)
        if (msgCapLimit !== "") {
            setTimeout(()=>{
                setmsgCapLimit("");
            }, 2000);
        }
    }, [
        msgCapLimit
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            !!msgCapLimit ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ShowAlert_warn__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                msg: msgCapLimit
            }) : null,
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                className: data.IsDeliveryAvailableToPinCode ? "pr-block item " : " pr-block item delivery-not-available",
                children: [
                    data.IsDeliveryAvailableToPinCode ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                        className: "viewcartImages",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "hidden",
                                className: "PriceId",
                                value: "2720"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                referrerPolicy: "no-referrer",
                                onClick: ()=>productdetail(data.SkuLink),
                                className: "img-responsive productImg",
                                alt: "Duplicate Grapes Black",
                                src: data.ListingImage,
                                height: "150",
                                width: "150"
                            })
                        ]
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            className: "ajaxload",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                className: "img-responsive",
                                alt: "FreshOrange",
                                src: data.ListingImage,
                                height: "150",
                                width: "150"
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                        id: "viewcartproductname",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    className: "cartProductName",
                                    onClick: ()=>productdetail(data.SkuLink),
                                    children: data.DisplayName
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: "cart_pck_nm",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                        children: "Pack Size : "
                                    }),
                                    data.ListItem
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "cart_del_nm",
                                onClick: ()=>dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_8__/* .removeFromCart */ .h2)(data.SkuId, data.SKUFilterPriceId)),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    style: {
                                        cursor: "pointer"
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "lnr lnr-trash btn-remove",
                                            title: "Delete",
                                            style: {
                                                marginRight: "4px"
                                            }
                                        }),
                                        "Delete"
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "Qtyx",
                                style: {
                                    fontSize: "14px !important"
                                },
                                children: (!data.InStock || !data.IsActive) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    style: {
                                        color: "#ff0000"
                                    },
                                    children: "Unavailable"
                                })
                            })
                        ]
                    }),
                    data.IsDeliveryAvailableToPinCode ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                        className: "productBtn",
                        children: data.InStock && data.IsActive && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "product-qty-info",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "product-qty mr-3",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "button",
                                        className: "IncDecQty AddUpdateqty2342  IncDecQtyforFloatingCart AddUpdateqtyfloatingcart2342",
                                        value: `${qty}`
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        id: "btnUpdate@cart.SkuId",
                                        className: `dec qtybtn btn  ${qty < 0 ? "btnDisable" : "btn-primary"}`,
                                        "data-productid": "83769",
                                        onClick: ()=>IncrementDecrementQuantityCart("Dec"),
                                        children: qty !== 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "fa fa-minus"
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "fa fa-close"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        id: "btnUpdate@cart.SkuId",
                                        className: "inc qtybtn btn btn-primary",
                                        "data-productid": "83769",
                                        onClick: ()=>IncrementDecrementQuantityCart("Inc"),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "fa fa-plus"
                                        })
                                    })
                                ]
                            })
                        })
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                            className: "lbl-cant-deliver",
                            children: [
                                " Can't deliver to pin code ",
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("b", {
                                    children: [
                                        " ",
                                        locationPopupState && locationPopupState.pincode
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                        className: "priceCart",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "span_unit_price_nm",
                                children: "Unit Price : "
                            }),
                            " ₹",
                            parseFloat(data.UnitPrice).toFixed(2)
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                        className: "priceCart",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "span_total_price_nm",
                                children: "Sub Total Price : "
                            }),
                            " ₹",
                            parseFloat(data.SubTotal).toFixed(2)
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                        className: "priceCart",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "span_unit_price_nm",
                                children: "Delivery Chagre : "
                            }),
                            data.DeliveryChargeAmount ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                children: [
                                    "₹",
                                    parseFloat(data.DeliveryChargeAmount).toFixed(2)
                                ]
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                style: {
                                    color: "rgb(109, 209, 57)"
                                },
                                children: "FREE Delivery"
                            }),
                            " "
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 7649:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KV: () => (/* binding */ getCouponList),
/* harmony export */   SS: () => (/* binding */ removeCoupon),
/* harmony export */   TW: () => (/* binding */ getCartData),
/* harmony export */   Xq: () => (/* binding */ addToCart),
/* harmony export */   _o: () => (/* binding */ closeMsgBar),
/* harmony export */   h2: () => (/* binding */ removeFromCart),
/* harmony export */   zL: () => (/* binding */ applyCoupon)
/* harmony export */ });
/* unused harmony exports defaultAction, getCartDataSuccess, getCouponListSuccess, applyCouponSuccess, removeCouponSuccess, OpenMsgBar */
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1467);
/*
 *
 * ViewCart actions
 *
 */ 
function defaultAction() {
    return {
        type: DEFAULT_ACTION
    };
}
function getCartData() {
    return {
        type: _constants__WEBPACK_IMPORTED_MODULE_0__/* .GET_CART_ALL_DATA */ .Mi
    };
}
function getCartDataSuccess() {
    return {
        type: GET_CART_ALL_DATA_SUCCESS
    };
}
function addToCart(qty, SkuId, SKUFilterPriceId) {
    return {
        type: _constants__WEBPACK_IMPORTED_MODULE_0__/* .ADD_TO_CART */ .G2,
        payload: {
            qty,
            SkuId,
            SKUFilterPriceId
        }
    };
}
function removeFromCart(SkuId, CGuid) {
    return {
        type: _constants__WEBPACK_IMPORTED_MODULE_0__/* .REMOVE_FROM_CART */ .OZ,
        payload: {
            SkuId,
            CGuid
        }
    };
}
/** COUPON ACTIONS */ function getCouponList(clientId, custGUID) {
    return {
        type: _constants__WEBPACK_IMPORTED_MODULE_0__/* .GET_COUPON_LIST */ .fq,
        payload: {
            clientId,
            custGUID
        }
    };
}
function getCouponListSuccess() {
    return {
        type: GET_COUPON_LIST_SUCCESS
    };
}
function applyCoupon(couponCode) {
    console.log("actioncouponCode..", couponCode);
    return {
        type: _constants__WEBPACK_IMPORTED_MODULE_0__/* .APPLY_COUPON */ .QL,
        payload: {
            couponCode
        }
    };
}
function applyCouponSuccess() {
    return {
        type: APPLY_COUPON_SUCCESS
    };
}
function removeCoupon(couponcode) {
    return {
        type: _constants__WEBPACK_IMPORTED_MODULE_0__/* .REMOVE_COUPON */ .JQ,
        payload: {
            couponcode
        }
    };
}
function removeCouponSuccess() {
    return {
        type: REMOVE_COUPON_SUCCESS
    };
}
function OpenMsgBar(sendOtpResponse) {
    return {
        type: RESPONCE_MSG,
        sendOtpResponse
    };
}
function closeMsgBar() {
    return {
        type: _constants__WEBPACK_IMPORTED_MODULE_0__/* .CLOSE_MSG_BAR */ .jp
    };
}


/***/ }),

/***/ 1467:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A6: () => (/* binding */ RESPONCE_MSG),
/* harmony export */   DR: () => (/* binding */ APPLY_COUPON_SUCCESS),
/* harmony export */   G2: () => (/* binding */ ADD_TO_CART),
/* harmony export */   JQ: () => (/* binding */ REMOVE_COUPON),
/* harmony export */   KW: () => (/* binding */ REMOVE_FROM_CART_SUCCESS),
/* harmony export */   Mi: () => (/* binding */ GET_CART_ALL_DATA),
/* harmony export */   OZ: () => (/* binding */ REMOVE_FROM_CART),
/* harmony export */   QL: () => (/* binding */ APPLY_COUPON),
/* harmony export */   YI: () => (/* binding */ DEFAULT_ACTION),
/* harmony export */   au: () => (/* binding */ GET_COUPON_LIST_SUCCESS),
/* harmony export */   fq: () => (/* binding */ GET_COUPON_LIST),
/* harmony export */   jp: () => (/* binding */ CLOSE_MSG_BAR),
/* harmony export */   l$: () => (/* binding */ GET_CART_ALL_DATA_SUCCESS)
/* harmony export */ });
/* unused harmony exports ADD_TO_CART_SUCCESS, REMOVE_COUPON_SUCCESS */
/*
 *
 * ViewCart constants
 *
 */ const DEFAULT_ACTION = "app/ViewCart/DEFAULT_ACTION";
const GET_CART_ALL_DATA = "app/ViewCart/GET_CART_ALL_DATA";
const GET_CART_ALL_DATA_SUCCESS = "app/ViewCart/GET_CART_ALL_DATA_SUCCESS";
const ADD_TO_CART = "app/ViewCart/ADD_TO_CART";
const ADD_TO_CART_SUCCESS = "app/ViewCart/ADD_TO_CART_SUCCESS";
const REMOVE_FROM_CART = "app/ViewCart/REMOVE_FROM_CART";
const REMOVE_FROM_CART_SUCCESS = "app/ViewCart/REMOVE_FROM_CART_SUCCESS";
const APPLY_COUPON = "app/ViewCart/APPLY_COUPON";
const APPLY_COUPON_SUCCESS = "app/ViewCart/APPLY_COUPON_SUCCESS";
const GET_COUPON_LIST = "app/ViewCart/GET_COUPON_LIST";
const GET_COUPON_LIST_SUCCESS = "app/ViewCart/GET_COUPON_LIST_SUCCESS";
const REMOVE_COUPON = "app/ViewCart/REMOVE_COUPON";
const REMOVE_COUPON_SUCCESS = "app/ViewCart/REMOVE_COUPON_SUCCESS";
const RESPONCE_MSG = "app/ViewCart/RESPONCE_MSG";
const CLOSE_MSG_BAR = "app/ViewCart/CLOSE_MSG_BAR";


/***/ }),

/***/ 1164:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export initialState */
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7133);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1467);
/* eslint-disable prefer-destructuring */ /*
 *
 * ViewCart reducer
 *
 */ 

const initialState = {
    cartAllData: [],
    couponList: [],
    removeCartMsg: "",
    addToCartMsg: "",
    IsMsgBar: false,
    loading: false,
    couponsuccess: []
};
/* eslint-disable default-case, no-param-reassign */ const viewCartReducer = (state = initialState, action)=>immer__WEBPACK_IMPORTED_MODULE_0___default()(state, (draft)=>{
        console.log(action);
        switch(action.type){
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .DEFAULT_ACTION */ .YI:
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .GET_CART_ALL_DATA_SUCCESS */ .l$:
                draft.cartAllData = action.cartAllData;
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .REMOVE_FROM_CART_SUCCESS */ .KW:
                draft.removeCartMsg = action.removeApiData;
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .GET_COUPON_LIST */ .fq:
                draft.loading = true;
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .GET_COUPON_LIST_SUCCESS */ .au:
                draft.loading = false;
                draft.couponList = action.couponList;
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .RESPONCE_MSG */ .A6:
                // draft.IsMsgBar = true
                draft.addToCartMsg = action.apiData;
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .CLOSE_MSG_BAR */ .jp:
                draft.IsMsgBar = false;
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .APPLY_COUPON_SUCCESS */ .DR:
                // draft.IsMsgBar = true
                console.log("applycouponSuccess..", action.applycouponSuccess);
                draft.couponsuccess = action.applycouponSuccess;
                break;
        }
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (viewCartReducer);


/***/ }),

/***/ 1026:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ viewCartSaga)
/* harmony export */ });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6477);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MainPage_api_mycartAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6920);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1467);
// import { take, call, put, select } from 'redux-saga/effects';



// Individual exports for testing
function* getCommonCartSaga() {
    try {
        const cartAllData = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_MainPage_api_mycartAPI__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getCartCommon);
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
            type: _constants__WEBPACK_IMPORTED_MODULE_2__/* .GET_CART_ALL_DATA_SUCCESS */ .l$,
            cartAllData
        });
    } catch (err) {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)();
    }
}
function* AddToCartAPI(action) {
    try {
        const apiData = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_MainPage_api_mycartAPI__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.updatecart, null, action.payload.qty, action.payload.SkuId, action.payload.SKUFilterPriceId);
        const cartAllData = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_MainPage_api_mycartAPI__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getCartCommon);
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
            type: _constants__WEBPACK_IMPORTED_MODULE_2__/* .RESPONCE_MSG */ .A6,
            apiData
        });
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
            type: _constants__WEBPACK_IMPORTED_MODULE_2__/* .GET_CART_ALL_DATA_SUCCESS */ .l$,
            cartAllData
        });
    // yield put({ type: ADD_TO_CART_SUCCESS, apiData });
    } catch (err) {
        console.log(err);
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)(err);
    }
}
function* RemoveFromCartAPI(action) {
    try {
        const removeApiData = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_MainPage_api_mycartAPI__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.RemoveCartItem, action.payload.SkuId, action.payload.CGuid);
        const cartAllData = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_MainPage_api_mycartAPI__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getCartCommon);
        // yield put({ type: GET_COMMON_CART_SUCCESS, cartAllData });
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
            type: _constants__WEBPACK_IMPORTED_MODULE_2__/* .GET_CART_ALL_DATA_SUCCESS */ .l$,
            cartAllData
        });
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
            type: _constants__WEBPACK_IMPORTED_MODULE_2__/* .REMOVE_FROM_CART_SUCCESS */ .KW,
            removeApiData
        });
    } catch (err) {
        console.log(err);
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)(err);
    }
}
function* GetCouponListAPI(action) {
    try {
        const couponList = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_MainPage_api_mycartAPI__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getCouponCodeList, action.payload.clientId, action.payload.custGUID);
        const cartAllData = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_MainPage_api_mycartAPI__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getCartCommon);
        // yield put({ type: GET_COMMON_CART_SUCCESS, cartAllData });
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
            type: _constants__WEBPACK_IMPORTED_MODULE_2__/* .GET_CART_ALL_DATA_SUCCESS */ .l$,
            cartAllData
        });
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
            type: _constants__WEBPACK_IMPORTED_MODULE_2__/* .GET_COUPON_LIST_SUCCESS */ .au,
            couponList
        });
    } catch (err) {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)(err);
    }
}
function* AppayCouponAPI(action) {
    console.log("sagacouponCode..", action.payload.couponCode);
    try {
        const applycouponSuccess = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_MainPage_api_mycartAPI__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.applyCoupon, action.payload.couponCode);
        console.log("sagacouponsuccess==", applycouponSuccess);
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_MainPage_api_mycartAPI__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.updatecart, null, applycouponSuccess.cart[0].Quantity, applycouponSuccess.cart[0].SkuId, applycouponSuccess.cart[0].SKUFilterPriceId, applycouponSuccess.couponcode);
        const cartAllData = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_MainPage_api_mycartAPI__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getCartCommon);
        console.log("sagacartAllData..", cartAllData);
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
            type: _constants__WEBPACK_IMPORTED_MODULE_2__/* .APPLY_COUPON_SUCCESS */ .DR,
            applycouponSuccess
        });
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
            type: _constants__WEBPACK_IMPORTED_MODULE_2__/* .GET_CART_ALL_DATA_SUCCESS */ .l$,
            cartAllData
        });
    } catch (err) {
        console.log(err);
    // yield put(err);
    }
}
function* RemoveCouponAPI(action) {
    try {
        const removeApiData = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_MainPage_api_mycartAPI__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getCancelCouponCode, action.payload.couponcode);
        const cartAllData = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_MainPage_api_mycartAPI__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getCartCommon);
        // yield put({ type: GET_COMMON_CART_SUCCESS, cartAllData });
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
            type: _constants__WEBPACK_IMPORTED_MODULE_2__/* .GET_CART_ALL_DATA_SUCCESS */ .l$,
            cartAllData
        });
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
            type: _constants__WEBPACK_IMPORTED_MODULE_2__/* .REMOVE_FROM_CART_SUCCESS */ .KW,
            removeApiData
        });
    } catch (err) {
        console.log(err);
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)(err);
    }
}
function* viewCartSaga() {
    // See example in containers/HomePage/saga.js
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeEvery)(_constants__WEBPACK_IMPORTED_MODULE_2__/* .GET_CART_ALL_DATA */ .Mi, getCommonCartSaga);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeEvery)(_constants__WEBPACK_IMPORTED_MODULE_2__/* .ADD_TO_CART */ .G2, AddToCartAPI);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeEvery)(_constants__WEBPACK_IMPORTED_MODULE_2__/* .REMOVE_FROM_CART */ .OZ, RemoveFromCartAPI);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeEvery)(_constants__WEBPACK_IMPORTED_MODULE_2__/* .GET_COUPON_LIST */ .fq, GetCouponListAPI);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeEvery)(_constants__WEBPACK_IMPORTED_MODULE_2__/* .APPLY_COUPON */ .QL, AppayCouponAPI);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeEvery)(_constants__WEBPACK_IMPORTED_MODULE_2__/* .REMOVE_COUPON */ .JQ, RemoveCouponAPI);
} // getCouponCodeList
 // GET_COUPON_LIST


/***/ }),

/***/ 877:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  k: () => (/* binding */ WishlistPaged)
});

// UNUSED EXPORTS: default

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__(3126);
// EXTERNAL MODULE: external "reselect"
var external_reselect_ = __webpack_require__(6814);
// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__(6695);
// EXTERNAL MODULE: ./src/utils/injectSaga.js + 2 modules
var injectSaga = __webpack_require__(7856);
// EXTERNAL MODULE: ./src/utils/injectReducer.js + 1 modules
var injectReducer = __webpack_require__(3671);
// EXTERNAL MODULE: external "react-elastic-carousel"
var external_react_elastic_carousel_ = __webpack_require__(2131);
var external_react_elastic_carousel_default = /*#__PURE__*/__webpack_require__.n(external_react_elastic_carousel_);
// EXTERNAL MODULE: external "immer"
var external_immer_ = __webpack_require__(7133);
var external_immer_default = /*#__PURE__*/__webpack_require__.n(external_immer_);
;// CONCATENATED MODULE: ./src/containers/WishlistPaged/constants.js
/*
 *
 * WishlistPaged constants
 *
 */ const constants_DEFAULT_ACTION = "app/WishlistPaged/DEFAULT_ACTION";
const NEXT_PAGE = "app/WishlistPaged/NEXT_PAGE";
const constants_ADD_TO_CART = "app/WishlistPaged/ADD_TO_CART";
const constants_CLOSE_MSG_BAR = "app/WishlistPaged/CLOSE_MSG_BAR";
const ADD_TO_CART_SUCCESS = "app/WishlistPaged/ADD_TO_CART_SUCCESS";
const RESPONCE_MSG = "app/WishlistPaged/RESPONCE_MSG";
const NEXT_PAGE_SUCCESS = "app/WishlistPaged/NEXT_PAGE_SUCCESS";
const SHOPPING_CART_DETAILS = "app/WishlistPaged/SHOPPING_CART_DETAILS";

;// CONCATENATED MODULE: ./src/containers/WishlistPaged/reducer.js
/* eslint-disable prefer-destructuring */ /*
 *
 * WishlistPaged reducer
 *
 */ 

const initialState = {
    dealData: [],
    name: "",
    qty: 0,
    addToCartMsg: "",
    IsMsgBar: false,
    shoppingDetails: [],
    DealofthdayData: []
};
/* eslint-disable default-case, no-param-reassign */ const wishlistPagedReducer = (state = initialState, action)=>external_immer_default()(state, (draft)=>{
        switch(action.type){
            case constants_DEFAULT_ACTION:
                break;
            case constants_CLOSE_MSG_BAR:
                draft.IsMsgBar = false;
                break;
            case ADD_TO_CART_SUCCESS:
                draft.IsMsgBar = true;
                draft.addToCartMsg = action.updateCartData.split("|")[1];
                break;
            case RESPONCE_MSG:
                draft.IsMsgBar = true;
                draft.addToCartMsg = action.recievedMsg;
                break;
            case NEXT_PAGE_SUCCESS:
                draft.dealData = action.dealOfTheDayData;
                break;
            case SHOPPING_CART_DETAILS:
                draft.shoppingDetails = action.shoppingcartDetails;
                break;
        }
    });
/* harmony default export */ const reducer = (wishlistPagedReducer);

;// CONCATENATED MODULE: ./src/containers/WishlistPaged/selectors.js


/**
 * Direct selector to the wishlistPaged state domain
 */ const selectWishlistPagedDomain = (state)=>state.wishlistPaged || initialState;
/**
 * Other specific selectors
 */ /**
 * Default selector used by WishlistPaged
 */ const makeSelectWishlistPaged = ()=>(0,external_reselect_.createSelector)(selectWishlistPagedDomain, (substate)=>substate);
/* harmony default export */ const selectors = (makeSelectWishlistPaged);


// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__(6477);
// EXTERNAL MODULE: ./src/containers/HomePage/constants.js
var constants = __webpack_require__(4595);
// EXTERNAL MODULE: ./src/containers/MainPage/api/homeServices.js
var homeServices = __webpack_require__(4171);
// EXTERNAL MODULE: ./src/containers/MainPage/api/mycartAPI.js
var mycartAPI = __webpack_require__(6920);
;// CONCATENATED MODULE: ./src/containers/WishlistPaged/saga.js





// Individual exports for testing
function* wishlistPagedSaga() {
    yield (0,effects_.takeEvery)(constants_ADD_TO_CART, AddToCartAPI);
    yield (0,effects_.takeEvery)(NEXT_PAGE, NextBtnAPI);
// yield takeEvery(DEFAULT_ACTION, dealday);
}
function* AddToCartAPI(action) {
    try {
        const updateCartData = yield (0,effects_.call)(mycartAPI/* default */.Z.updatecart, null, action.payload.qty, action.payload.SkuId, action.payload.SKUFilterPriceId);
        const cartAllData = yield (0,effects_.call)(mycartAPI/* default */.Z.getCartCommon);
        const shoppingcartDetails = yield (0,effects_.call)(mycartAPI/* default */.Z.getShoppingcartDetails);
        yield (0,effects_.put)({
            type: constants/* GET_COMMON_CART_SUCCESS */.J3,
            cartAllData
        });
        yield (0,effects_.put)({
            type: ADD_TO_CART_SUCCESS,
            updateCartData
        });
        yield (0,effects_.put)({
            type: constants/* SHOPPING_CART_DETAILS */.P9,
            shoppingcartDetails
        });
    } catch (err) {
        console.log(err);
    }
}
function* NextBtnAPI(action) {
    try {
        const dealOfTheDayData = yield (0,effects_.call)(homeServices/* default */.Z.getwhishlistpaged, action.pageNum, 9);
        yield (0,effects_.put)({
            type: NEXT_PAGE_SUCCESS,
            dealOfTheDayData
        });
    } catch (err) {
        console.log(err);
    }
}

// EXTERNAL MODULE: ./src/containers/LoadProducts/index.js
var LoadProducts = __webpack_require__(3880);
// EXTERNAL MODULE: external "react-icons/fi"
var fi_ = __webpack_require__(2750);
// EXTERNAL MODULE: external "react-icons/bi"
var bi_ = __webpack_require__(6652);
// EXTERNAL MODULE: ./node_modules/react-multi-carousel/lib/styles.css
var styles = __webpack_require__(2694);
;// CONCATENATED MODULE: ./src/containers/WishlistPaged/actions.js
/*
 *
 * WishlistPaged actions
 *
 */ 
function defaultAction() {
    return {
        type: DEFAULT_ACTION
    };
}
function nextBtn(pageNum, pageSize) {
    return {
        type: NEXT_PAGE,
        pageNum,
        pageSize
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
}

// EXTERNAL MODULE: external "react-shimmer-effects"
var external_react_shimmer_effects_ = __webpack_require__(9777);
;// CONCATENATED MODULE: ./src/containers/WishlistPaged/index.js
/* eslint-disable import/order */ /* eslint-disable no-unused-vars */ /* eslint-disable react/prop-types */ /**
 *
 * WishlistPaged
 *
 */ 








//import Carousel from 'react-multi-carousel';




//import messages from './messages';







function WishlistPaged(props) {
    (0,injectReducer/* useInjectReducer */.v)({
        key: "wishlistPaged",
        reducer: reducer
    });
    (0,injectSaga/* useInjectSaga */.h)({
        key: "wishlistPaged",
        saga: wishlistPagedSaga
    });
    const [pageNum, setNPButton] = (0,external_react_.useState)(1);
    const [FirstCall, setFirstCall] = (0,external_react_.useState)(0);
    const [count, setCount] = (0,external_react_.useState)(1);
    const [Dealofday, setgetDealofday] = (0,external_react_.useState)([]);
    const [shoppingDetail, setShoppingDetail] = (0,external_react_.useState)([]);
    const [addToCartOBJ, setAddToCartOBJ] = (0,external_react_.useState)({});
    const [sliceNum, setsliceNum] = (0,external_react_.useState)(0);
    const [shppingcart, setShppingcart] = (0,external_react_.useState)([]);
    // const [sliceIncDec, setsliceIncDec] = useState(0);
    const [totalPages, settotalPages] = (0,external_react_.useState)(1);
    // const homeScreen = useSelector(state => state.homeScreen)
    const nextData = (0,external_react_redux_.useSelector)((state)=>state.wishlistPaged);
    const addToCart = (0,external_react_redux_.useSelector)((state)=>state.addToCart);
    const cartReducer = (0,external_react_redux_.useSelector)((state)=>state.viewCart);
    // console.log('vv', addToCart);
    const dispatch = (0,external_react_redux_.useDispatch)();
    const initialWidth = ()=>{
        // setsliceIncDec(floor(window.innerWidth / 251))
        let countSlice = 0;
        if (window.matchMedia("(min-width:2001px) and (max-width: 2500px)").matches) {
            countSlice = 5;
        }
        if (window.matchMedia("(min-width:1281px) and (max-width: 2000px)").matches) {
            countSlice = 4;
        }
        if (window.matchMedia("(min-width:997px) and (max-width:1280px)").matches) {
            countSlice = 3;
        }
        if (window.matchMedia("(min-width:465px) and (max-width: 996px)").matches) {
            countSlice = 2;
        }
        if (window.matchMedia("(min-width:0px) and (max-width: 464px)").matches) {
            countSlice = 1;
        }
        return countSlice;
    };
    (0,external_react_.useEffect)(()=>{
        if (nextData !== undefined && nextData.dealData !== undefined) {
            setgetDealofday(nextData.dealData.Data);
            settotalPages(nextData.dealData.TotalNoOfPages);
        }
    }, [
        nextData
    ]);
    (0,external_react_.useEffect)(()=>{
        mycartAPI/* default */.Z.getShoppingcartDetails().then((res)=>{
            //console.log("reorderproductprint11", res);
            setShppingcart(res);
        });
    }, [
        cartReducer
    ]);
    (0,external_react_.useEffect)(()=>{
        if (FirstCall > 1 && nextData !== undefined && Dealofday !== undefined && nextData.dealData !== undefined && nextData.dealData.GetSkuRelated !== undefined) {
            //console.log('Dealofday', Dealofday, nextData);
            setgetDealofday([
                ...Dealofday,
                ...nextData.dealData.data
            ]);
            setShoppingDetail(nextData.shoppingDetails);
        }
    }, [
        nextData
    ]);
    (0,external_react_.useEffect)(()=>{
        // if (Dealofday.length > 9 && sliceNum > Dealofday.length - 9) {
        //   setgetDealofday([...Dealofday, ...Dealofday])
        // }
        if (Dealofday.length > 9 && sliceNum > Dealofday.length - 9 && Dealofday.length - sliceNum < 5) {
            // setsliceNum(Dealofday.length - 5)
            changeSliceNum();
        }
    }, [
        sliceNum
    ]);
    function changeSliceNum() {
        setsliceNum(Dealofday.length - initialWidth() - 1);
    }
    function changeSliceNumBack() {
        setsliceNum(0);
    }
    (0,external_react_.useEffect)(()=>{
        setFirstCall(FirstCall + 1);
    // if (FirstCall < 1) {
    //   console.log('index in First call');
    //   dispatch(nextBtn(1, 9))
    // }
    }, []);
    (0,external_react_.useEffect)(()=>{
        if (shoppingDetail !== undefined) {
            // console.log('shoppingDetailmm', addToCartOBJ)
            shoppingDetail.forEach((itm)=>{
                objCreation(itm.SKUFilterPriceId, itm.Quantity);
            });
        }
    }, [
        shoppingDetail
    ]);
    function objCreation(SKUFilterPriceId, Quantity) {
        const obj = {};
        obj[`${SKUFilterPriceId}`] = Quantity;
        setAddToCartOBJ({
            ...addToCartOBJ,
            ...obj
        });
    }
    const responsive = [
        {
            width: 1,
            itemsToShow: 1
        },
        {
            width: 475,
            itemsToShow: 2
        },
        {
            width: 651,
            itemsToShow: 3
        },
        {
            width: 995,
            itemsToShow: 4
        },
        {
            width: 1280,
            itemsToShow: 4
        }
    ];
    // useEffect(() => {
    //   if (nextData !== undefined) {
    //     console.log("useffect setShppingcart");
    //     setShppingcart(nextData.shoppingDetailsReorder)
    //   }
    // }, [nextData]);
    (0,external_react_.useEffect)(()=>{
        if (addToCart !== undefined && addToCart.shoppingcartDetails.length !== 0) {
            //console.log("useffect setShppingcart");
            setShppingcart(addToCart.shoppingcartDetails);
        }
    }, [
        addToCart
    ]);
    // const responsive = {
    //   superLargeDesktop: {
    //     breakpoint: { max: 2500, min: 2001 },
    //     items: 6,
    //   },
    //   desktop: { breakpoint: { max: 2000, min: 1281 }, items: 5, partialVisibilityGutter: 10 },
    //   tablet: {
    //     breakpoint: { max: 1280, min: 996 },
    //     items: 4,
    //   },
    //   miniTablet: {
    //     breakpoint: { max: 996, min: 464 },
    //     items: 2,
    //   },
    //   mobile: {
    //     breakpoint: { max: 463 },
    //     items: 1,
    //   },
    // };
    const CustomPrevious = ({ onClick, ...rest })=>{
        const { carouselState: { currentSlide } } = rest;
        return /*#__PURE__*/ jsx_runtime.jsx("button", {
            type: "button",
            className: "arrow right",
            "aria-label": "rightbtn",
            onClick: ()=>{
                setsliceNum(sliceNum - initialWidth());
                if (Dealofday.length > 5 && sliceNum < 5) {
                    // setsliceNum(Dealofday.length - 5)
                    changeSliceNumBack();
                }
            },
            children: sliceNum !== 0 && // <div className="owl-controls">
            //   <div className="owl-nav">
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "previous round",
                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                    className: "lnr lnr-chevron-left"
                })
            })
        });
    };
    // eslint-disable-next-line react/prop-types
    const CustomNext = ({ onClick, ...rest })=>{
        const { carouselState: { currentSlide } } = rest;
        return /*#__PURE__*/ jsx_runtime.jsx("button", {
            type: "button",
            className: "arrow right",
            "aria-label": "rightbtn",
            onClick: ()=>{
                setsliceNum(sliceNum + initialWidth());
                setNPButton(pageNum + 1);
            },
            children: Dealofday && JSON.stringify(Dealofday[Dealofday.length - 5]) !== JSON.stringify(Dealofday.slice(sliceNum, Dealofday.length)[0]) && /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "next round",
                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                    className: "lnr lnr-chevron-right"
                })
            })
        });
    };
    const CustomButtonGroupAsArrows = ({ next, previous, onClick, ...rest })=>{
        const { carouselState: { currentSlide } } = rest;
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "carousel-button-group gap-4 flex justify-end  items-center w-full",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("button", {
                    type: "button",
                    className: "previous round1",
                    "aria-label": "previousbtn",
                    onClick: ()=>previous(),
                    children: /*#__PURE__*/ jsx_runtime.jsx(fi_.FiChevronLeft, {})
                }),
                /*#__PURE__*/ jsx_runtime.jsx("button", {
                    type: "button",
                    className: "next round1",
                    "aria-label": "nextbtn",
                    onClick: ()=>next(),
                    children: /*#__PURE__*/ jsx_runtime.jsx(bi_.BiChevronRight, {})
                })
            ]
        });
    };
    (0,external_react_.useEffect)(()=>{
        dispatch(nextBtn(1, 9));
    }, []);
    (0,external_react_.useEffect)(()=>{
        if (FirstCall < 1) {
            dispatch(nextBtn(pageNum, 9));
        }
        //console.log('nextBtn index', pageNum);
        if (count < totalPages) {
            dispatch(nextBtn(pageNum, 9));
            setCount(count + 1);
        }
    }, [
        pageNum
    ]);
    const Gallery = ()=>/*#__PURE__*/ jsx_runtime.jsx((external_react_elastic_carousel_default()), {
            responsive: responsive,
            // centerMode={false}
            arrows: true,
            transitionDuration: 500,
            // renderButtonGroupOutside={false}
            // renderDotsOutside={false}
            // removeArrowOnDeviceType={['mobile']}
            // swipeable
            renderButtonGroupOutside: true,
            customButtonGroup: /*#__PURE__*/ jsx_runtime.jsx(CustomButtonGroupAsArrows, {}),
            customLeftArrow: /*#__PURE__*/ jsx_runtime.jsx(CustomPrevious, {}),
            customRightArrow: /*#__PURE__*/ jsx_runtime.jsx(CustomNext, {}),
            slidesToSlide: 4,
            children: Dealofday !== undefined && Dealofday !== null && (Dealofday.slice(sliceNum, sliceNum + Dealofday.length) || []).map((mapdata, i)=>mapdata.FiltersList.length !== 0 ? /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "tab-content",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "tab-pane fade show active",
                        id: "brand-one",
                        style: {
                            display: "block"
                        },
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "product-gallary-wrapper",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "product-gallary-active owl-carousel owl-arrow-style sale-nav owl-theme owl-loaded",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "owl-stage-outer",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "owl-stage",
                                        style: {
                                            transform: " translate3d(0px, 0px, 0px)",
                                            transition: "all 0s ease 0s"
                                        },
                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: " active",
                                            children: /*#__PURE__*/ jsx_runtime.jsx(LoadProducts/* default */.Z, {
                                                data: mapdata,
                                                shppingcart: shppingcart,
                                                index: i,
                                                skulisting: true
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                }, sliceNum) : null)
        });
    // console.log('deal of the day', sliceNum, Dealofday, pageNum);
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: Dealofday !== undefined && Dealofday !== null ? /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "container-fluid checkoutwishlist",
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "row",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "col-12",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "mt-0 section-title product-spacing hm-11 mb-0",
                            style: {
                                paddingLeft: "15px"
                            },
                            children: /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                children: Dealofday && Dealofday.length === 0 ? null : /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    className: "dealofday",
                                    children: "Wishlist"
                                })
                            })
                        }),
                        Dealofday && Dealofday.length === 0 ? null : /*#__PURE__*/ jsx_runtime.jsx((external_react_elastic_carousel_default()), {
                            breakPoints: responsive,
                            itemsToShow: 4,
                            itemsToScroll: 1,
                            pagination: false,
                            showEmptySlots: true,
                            children: Dealofday !== undefined && Dealofday !== null && (Dealofday.slice(sliceNum, sliceNum + Dealofday.length) || []).map((mapdata, i)=>mapdata.FiltersList.length !== 0 ? /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "tab-content",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "tab-pane fade show active",
                                        id: "brand-one",
                                        style: {
                                            display: "block"
                                        },
                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "product-gallary-wrapper",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "product-gallary-active owl-carousel owl-arrow-style sale-nav owl-theme owl-loaded",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "owl-stage-outer",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "owl-stage",
                                                        style: {
                                                            transform: " translate3d(0px, 0px, 0px)",
                                                            transition: "all 0s ease 0s"
                                                        },
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: " active",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx(LoadProducts/* default */.Z, {
                                                                data: mapdata,
                                                                shppingcart: shppingcart,
                                                                index: i,
                                                                skulisting: true
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                }, sliceNum) : null)
                        })
                    ]
                })
            })
        }) : null
    });
}
const mapStateToProps = (0,external_reselect_.createStructuredSelector)({
    wishlistPaged: selectors()
});
function mapDispatchToProps(dispatch) {
    return {
        dispatch
    };
}
const withConnect = (0,external_react_redux_.connect)(mapStateToProps, mapDispatchToProps);
/* harmony default export */ const containers_WishlistPaged = ((0,external_redux_.compose)(withConnect)(WishlistPaged));


/***/ }),

/***/ 8801:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  m: () => (/* binding */ SaveCartList)
});

// UNUSED EXPORTS: default

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-elastic-carousel"
var external_react_elastic_carousel_ = __webpack_require__(2131);
var external_react_elastic_carousel_default = /*#__PURE__*/__webpack_require__.n(external_react_elastic_carousel_);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./src/utils/injectReducer.js + 1 modules
var injectReducer = __webpack_require__(3671);
// EXTERNAL MODULE: ./src/utils/injectSaga.js + 2 modules
var injectSaga = __webpack_require__(7856);
// EXTERNAL MODULE: external "react-shimmer-effects"
var external_react_shimmer_effects_ = __webpack_require__(9777);
// EXTERNAL MODULE: external "react-icons/fi"
var fi_ = __webpack_require__(2750);
// EXTERNAL MODULE: external "react-icons/bi"
var bi_ = __webpack_require__(6652);
// EXTERNAL MODULE: ./src/containers/LoadProducts/index.js
var LoadProducts = __webpack_require__(3880);
;// CONCATENATED MODULE: ./src/containers/saveCartListing/constants.js
/*
 *
 * ReorderProduct constants
 *
 */ const constants_DEFAULT_ACTION = "app/ReorderProduct/DEFAULT_ACTION";
const constants_GET_REORDER_PRODUCT = "app/ReorderProduct/GET_REORDER_PRODUCT";
const GET_REORDER_PRODUCT_SUCCESS = "app/ReorderProduct/GET_REORDER_PRODUCT_SUCCESS";
const NEXT_PAGE = "app/DealdayProduct/NEXT_PAGE";
const NEXT_PAGE_SUCCESS = "app/ReorderProduct/DEFAULT_ACTION";
const PREVIOUS_PAGE = "app/ReorderProduct/DEFAULT_ACTION";
const constants_ADD_TO_CART = "app/ReorderProduct/DEFAULT_ACTION";
const ADD_TO_CART_SUCCESS = "app/ReorderProduct/DEFAULT_ACTION";
const ADD_TO_CART_SAGA = "app/ReorderProduct/DEFAULT_ACTION";
const GET_DEAL_WITH_PAGE = "app/ReorderProduct/DEFAULT_ACTION";
const GET_DEAL_WITH_PAGE_SUCCESS = "app/ReorderProduct/DEFAULT_ACTION";
const GET_DEAL_WITH_PAGE_SAGA = "app/ReorderProduct/DEFAULT_ACTION";
const constants_CLOSE_MSG_BAR = "app/ReorderProduct/DEFAULT_ACTION";
const RESPONCE_MSG = "app/ReorderProduct/DEFAULT_ACTION";

;// CONCATENATED MODULE: ./src/containers/saveCartListing/actions.js
/*
 *
 * ReorderProduct actions
 *
 */ 

function defaultAction() {
    return {
        type: DEFAULT_ACTION
    };
}
function getReorderproduct() {
    return {
        type: GET_REORDER_PRODUCT
    };
}
function nextBtn(pageNum, pageSize) {
    return {
        type: NEXT_PAGE,
        pageNum,
        pageSize
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
}

// EXTERNAL MODULE: ./src/containers/MainPage/api/savecart.js
var savecart = __webpack_require__(7646);
// EXTERNAL MODULE: ./src/containers/MainPage/api/mycartAPI.js
var mycartAPI = __webpack_require__(6920);
;// CONCATENATED MODULE: ./src/containers/saveCartListing/index.js
/* eslint-disable no-undef */ /* eslint-disable no-unused-vars */ /* eslint-disable react/prop-types */ /**
 *
 * SaveCartList
 *
 */ 

//import Carousel from 'react-multi-carousel';









// import reducer from './reducer';
// import saga from './saga';


function SaveCartList(props) {
    //   useInjectReducer({ key: 'reorderProduct', reducer });
    //   useInjectSaga({ key: 'reorderProduct', saga });
    // const [reorderedlist, setreorderedlist] = useState([])
    // const reordecrreducer = useSelector(state => state.reorderProduct)
    const [pageNum, setNPButton] = (0,external_react_.useState)(1);
    const [FirstCall, setFirstCall] = (0,external_react_.useState)(0);
    const [count, setCount] = (0,external_react_.useState)(1);
    const [Dealofday, setgetDealofday] = (0,external_react_.useState)([]);
    const [shoppingDetail, setShoppingDetail] = (0,external_react_.useState)([]);
    const [shppingcart, setShppingcart] = (0,external_react_.useState)([]);
    const [addToCartOBJ, setAddToCartOBJ] = (0,external_react_.useState)({});
    const [sliceNum, setsliceNum] = (0,external_react_.useState)(0);
    // const [sliceIncDec, setsliceIncDec] = useState(0);
    const [totalPages, settotalPages] = (0,external_react_.useState)(1);
    // const homeScreen = useSelector(state => state.homeScreen)
    const nextData = (0,external_react_redux_.useSelector)((state)=>state.reorderProduct);
    const cartReducer = (0,external_react_redux_.useSelector)((state)=>state.viewCart);
    const addToCart = (0,external_react_redux_.useSelector)((state)=>state.addToCart);
    //console.log('dd', nextData);
    let showSavedCart = true;
    const dispatch = (0,external_react_redux_.useDispatch)();
    const initialWidth = ()=>{
        // setsliceIncDec(floor(window.innerWidth / 251))
        let countSlice = 0;
        if (window.matchMedia("(min-width:2001px) and (max-width: 2500px)").matches) {
            countSlice = 5;
        }
        if (window.matchMedia("(min-width:1281px) and (max-width: 2000px)").matches) {
            countSlice = 4;
        }
        if (window.matchMedia("(min-width:997px) and (max-width:1280px)").matches) {
            countSlice = 3;
        }
        if (window.matchMedia("(min-width:465px) and (max-width: 996px)").matches) {
            countSlice = 2;
        }
        if (window.matchMedia("(min-width:0px) and (max-width: 464px)").matches) {
            countSlice = 1;
        }
        return countSlice;
    };
    (0,external_react_.useEffect)(()=>{
        //console.log('savecartlisting1')
        mycartAPI/* default */.Z.getShoppingcartDetails().then((res)=>{
            //console.log("reorderproductprint11", res);
            setShppingcart(res);
        });
    }, [
        cartReducer
    ]);
    (0,external_react_.useEffect)(()=>{
        console.log("slideNum", sliceNum);
    }, [
        sliceNum
    ]);
    (0,external_react_.useEffect)(()=>{
        mycartAPI/* default */.Z.getShoppingcartDetails().then((res)=>{
            //console.log("reorderproductprint11", res);
            setShppingcart(res);
        });
    }, [
        addToCart
    ]);
    (0,external_react_.useEffect)(()=>{
        //console.log('savecartlisting2')
        // dispatch(listreorder())
        mycartAPI/* default */.Z.getShoppingcartDetails().then((res)=>{
            //console.log("reorderproductprint11", res);
            setShppingcart(res);
        });
        savecart/* default */.Z.savedcartProductList({}).then((response)=>{
            //console.log("savedcartProductList", response);
            // setloading(false)
            setgetDealofday(response.skuListingModels);
        }).catch((error)=>{
        //console.log('error:::', error);
        });
    }, []);
    (0,external_react_.useEffect)(()=>{
        //console.log('savecartlisting333')
        if (nextData !== undefined && nextData.dealData !== undefined && nextData.dealData.length > 0) {
            //console.log(`savedcartProductList12${JSON.stringify(nextData)}`)
            setgetDealofday(nextData.dealData);
            settotalPages(nextData.dealData.TotalNoOfPages);
        }
    }, [
        nextData
    ]);
    (0,external_react_.useEffect)(()=>{
        if (FirstCall > 1 && nextData !== undefined && Dealofday !== undefined && nextData.dealData !== undefined && nextData.dealData.GetSkuRelated !== undefined) {
            //console.log('savedcartProductList123')
            //console.log('Dealofday', Dealofday, nextData);
            setgetDealofday([
                ...Dealofday,
                ...nextData.dealData
            ]);
            setShoppingDetail(nextData.shoppingDetails);
        }
    }, [
        nextData
    ]);
    (0,external_react_.useEffect)(()=>{
        // if (Dealofday.length > 9 && sliceNum > Dealofday.length - 9) {
        //   setgetDealofday([...Dealofday, ...Dealofday])
        // }
        if (Dealofday.length > 9 && sliceNum > Dealofday.length - 9 && Dealofday.length - sliceNum < 5) {
            // setsliceNum(Dealofday.length - 5)
            changeSliceNum();
        }
    }, [
        sliceNum
    ]);
    function changeSliceNum() {
        setsliceNum(Dealofday.length - initialWidth() - 1);
    }
    function changeSliceNumBack() {
        setsliceNum(0);
    }
    (0,external_react_.useEffect)(()=>{
        setFirstCall(FirstCall + 1);
    // if (FirstCall < 1) {
    //   console.log('index in First call');
    //   dispatch(nextBtn(1, 9))
    // }
    }, []);
    (0,external_react_.useEffect)(()=>{
        //console.log('savecartlisting3')
        if (shoppingDetail !== undefined) {
            // console.log('shoppingDetailmm', addToCartOBJ)
            shoppingDetail.forEach((itm)=>{
                objCreation(itm.SKUFilterPriceId, itm.Quantity);
            });
        }
    }, [
        shoppingDetail
    ]);
    function objCreation(SKUFilterPriceId, Quantity) {
        const obj = {};
        obj[`${SKUFilterPriceId}`] = Quantity;
        setAddToCartOBJ({
            ...addToCartOBJ,
            ...obj
        });
    }
    const responsive = [
        {
            width: 1,
            itemsToShow: 1
        },
        {
            width: 475,
            itemsToShow: 2
        },
        {
            width: 651,
            itemsToShow: 3
        },
        {
            width: 995,
            itemsToShow: 4
        },
        {
            width: 1280,
            itemsToShow: 4
        }
    ];
    // const responsive = {
    //   superLargeDesktop: {
    //     breakpoint: { max: 2500, min: 2001 },
    //     items: 6,
    //   },
    //   desktop: { breakpoint: { max: 2000, min: 1281 }, items: 5, partialVisibilityGutter: 10 },
    //   tablet: {
    //     breakpoint: { max: 1280, min: 996 },
    //     items: 4,
    //   },
    //   miniTablet: {
    //     breakpoint: { max: 996, min: 464 },
    //     items: 2,
    //   },
    //   mobile: {
    //     breakpoint: { max: 463 },
    //     items: 1,
    //   },
    // };
    const CustomPrevious = ({ onClick, ...rest })=>{
        const { carouselState: { currentSlide } } = rest;
        return /*#__PURE__*/ jsx_runtime.jsx("button", {
            type: "button",
            className: "arrow right",
            "aria-label": "rightbtn",
            onClick: ()=>{
                setsliceNum(sliceNum - initialWidth());
                if (Dealofday.length > 5 && sliceNum < 5) {
                    // setsliceNum(Dealofday.length - 5)
                    changeSliceNumBack();
                }
            },
            children: sliceNum !== 0 && // <div className="owl-controls">
            //   <div className="owl-nav">
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "previous round",
                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                    className: "lnr lnr-chevron-left"
                })
            })
        });
    };
    // eslint-disable-next-line react/prop-types
    const CustomNext = ({ onClick, ...rest })=>{
        const { carouselState: { currentSlide } } = rest;
        return /*#__PURE__*/ jsx_runtime.jsx("button", {
            type: "button",
            className: "arrow right",
            "aria-label": "rightbtn",
            onClick: ()=>{
                setsliceNum(sliceNum + initialWidth());
                setNPButton(pageNum + 1);
            },
            children: Dealofday && JSON.stringify(Dealofday[Dealofday.length - 5]) !== JSON.stringify(Dealofday.slice(sliceNum, Dealofday.length)[0]) && /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "next round",
                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                    className: "lnr lnr-chevron-right"
                })
            })
        });
    };
    const CustomButtonGroupAsArrows = ({ next, previous, onClick, ...rest })=>{
        const { carouselState: { currentSlide } } = rest;
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "carousel-button-group gap-4 flex justify-end  items-center w-full",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("button", {
                    type: "button",
                    className: "previous round1",
                    "aria-label": "previousbtn",
                    onClick: ()=>previous(),
                    children: /*#__PURE__*/ jsx_runtime.jsx(fi_.FiChevronLeft, {})
                }),
                /*#__PURE__*/ jsx_runtime.jsx("button", {
                    type: "button",
                    className: "next round1",
                    "aria-label": "nextbtn",
                    onClick: ()=>next(),
                    children: /*#__PURE__*/ jsx_runtime.jsx(bi_.BiChevronRight, {})
                })
            ]
        });
    };
    (0,external_react_.useEffect)(()=>{
        dispatch(nextBtn(1, 9));
    }, []);
    (0,external_react_.useEffect)(()=>{
        if (FirstCall < 1) {
            dispatch(nextBtn(pageNum, 9));
        }
        //console.log('nextBtn index', pageNum);
        if (count < totalPages) {
            dispatch(nextBtn(pageNum, 9));
            setCount(count + 1);
        }
    }, [
        pageNum
    ]);
    const Gallery = ()=>/*#__PURE__*/ jsx_runtime.jsx((external_react_elastic_carousel_default()), {
            responsive: responsive,
            // centerMode={false}
            infinite: true,
            arrows: true,
            transitionDuration: 500,
            renderButtonGroupOutside: true,
            renderArrowsWhenDisabled: false,
            customButtonGroup: /*#__PURE__*/ jsx_runtime.jsx(CustomButtonGroupAsArrows, {}),
            customLeftArrow: /*#__PURE__*/ jsx_runtime.jsx(CustomPrevious, {}),
            customRightArrow: /*#__PURE__*/ jsx_runtime.jsx(CustomNext, {}),
            children: Dealofday !== undefined && (Dealofday.slice(sliceNum, sliceNum + Dealofday.length) || []).map((mapdata, i)=>mapdata.FiltersList.length !== 0 ? /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "tab-content",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "tab-pane fade show active",
                        id: "brand-one",
                        style: {
                            display: "block"
                        },
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "product-gallary-wrapper saved-cart-listing",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "product-gallary-active owl-carousel owl-arrow-style sale-nav owl-theme owl-loaded",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "owl-stage-outer",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "owl-stage",
                                        style: {
                                            transform: " translate3d(0px, 0px, 0px)",
                                            transition: "all 0s ease 0s"
                                        },
                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: " active",
                                            children: /*#__PURE__*/ jsx_runtime.jsx(LoadProducts/* default */.Z, {
                                                data: mapdata,
                                                shppingcart: shppingcart,
                                                index: i,
                                                skulisting: true
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                }, sliceNum) : null)
        });
    // console.log('deal of the day', sliceNum, Dealofday, pageNum);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            console.log("Dealofday==>>Saved", Dealofday),
            Dealofday !== undefined && Dealofday !== null ? /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "container-fluid savecartonview",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "col-12",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "section-title product-spacing hm-11 mb-0",
                                children: /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                    class: JSON.stringify(Dealofday),
                                    children: Dealofday && Dealofday.length > 0 && Dealofday[0].FiltersList && Dealofday[0].FiltersList.length > 0 && showSavedCart ? /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        className: "dealofday",
                                        children: "Saved Cart"
                                    }) : null
                                })
                            }),
                            Dealofday && Dealofday.length > 0 && Dealofday[0].FiltersList && Dealofday[0].FiltersList.length > 0 && showSavedCart && /*#__PURE__*/ jsx_runtime.jsx((external_react_elastic_carousel_default()), {
                                breakPoints: responsive,
                                itemsToShow: 4,
                                itemsToScroll: 1,
                                pagination: false,
                                showEmptySlots: true,
                                children: Dealofday !== undefined && (Dealofday.slice(sliceNum, sliceNum + Dealofday.length) || []).map((mapdata, i)=>{
                                    showSavedCart = mapdata.FiltersList.length === 0 ? false : true;
                                    console.log("inside ShowSavedCart", showSavedCart);
                                    return mapdata.FiltersList.length !== 0 ? /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "tab-content",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "tab-pane fade show active",
                                            id: "brand-one",
                                            style: {
                                                display: "block"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "product-gallary-wrapper saved-cart-listing",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "product-gallary-active owl-carousel owl-arrow-style sale-nav owl-theme owl-loaded",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "owl-stage-outer",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "owl-stage",
                                                            style: {
                                                                transform: " translate3d(0px, 0px, 0px)",
                                                                transition: "all 0s ease 0s"
                                                            },
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                className: " active",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx(LoadProducts/* default */.Z, {
                                                                    data: mapdata,
                                                                    shppingcart: shppingcart,
                                                                    index: i,
                                                                    skulisting: true
                                                                })
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    }, sliceNum) : null;
                                })
                            })
                        ]
                    })
                })
            }) : null
        ]
    });
}
/* harmony default export */ const saveCartListing = ((/* unused pure expression or super */ null && (SaveCartList)));


/***/ }),

/***/ 2192:
/***/ (() => {



/***/ })

};
;