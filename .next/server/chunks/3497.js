exports.id = 3497;
exports.ids = [3497];
exports.modules = {

/***/ 3536:
/***/ (() => {

"use strict";
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/adibuja-logo.d1383566.svg","height":44,"width":172,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 3497:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Header_Header)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(6466);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(7197);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-bootstrap/NavDropdown"
var NavDropdown_ = __webpack_require__(9070);
var NavDropdown_default = /*#__PURE__*/__webpack_require__.n(NavDropdown_);
// EXTERNAL MODULE: external "react-bootstrap/Row"
var Row_ = __webpack_require__(8907);
var Row_default = /*#__PURE__*/__webpack_require__.n(Row_);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./public/assets1/css/bundle.css
var bundle = __webpack_require__(3858);
// EXTERNAL MODULE: ./public/assets1/css/font-awesome.min.css
var font_awesome_min = __webpack_require__(6061);
// EXTERNAL MODULE: ./public/assets1/css/responsive.min.css
var responsive_min = __webpack_require__(8698);
// EXTERNAL MODULE: ./public/assets/css/style.min.css
var style_min = __webpack_require__(2269);
// EXTERNAL MODULE: ./src/containers/AddToCart/index.js
var AddToCart = __webpack_require__(5810);
// EXTERNAL MODULE: ./src/containers/LoadProducts/actions.js
var actions = __webpack_require__(4172);
// EXTERNAL MODULE: ./src/containers/LocationPopup/index.js + 3 modules
var LocationPopup = __webpack_require__(7526);
// EXTERNAL MODULE: ./src/containers/MainPage/api/homeServices.js
var homeServices = __webpack_require__(4171);
// EXTERNAL MODULE: ./src/containers/MainPage/api/Locationapi.js
var Locationapi = __webpack_require__(4821);
// EXTERNAL MODULE: ./src/containers/MainPage/api/mycartAPI.js
var mycartAPI = __webpack_require__(6920);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/@icon/linearicons/linearicons.css
var linearicons = __webpack_require__(3884);
// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(6734);
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);
// EXTERNAL MODULE: ./src/utils/injectReducer.js + 1 modules
var injectReducer = __webpack_require__(3671);
// EXTERNAL MODULE: ./src/utils/injectSaga.js + 2 modules
var injectSaga = __webpack_require__(7856);
// EXTERNAL MODULE: ./public/assets1/css/default.min.css
var default_min = __webpack_require__(4573);
// EXTERNAL MODULE: ./public/assets1/img/icon/adibuja-logo.svg
var adibuja_logo = __webpack_require__(3536);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__(6695);
;// CONCATENATED MODULE: ./src/containers/MavigationBar/constants.js
/*
 *
 * MavigationBar constants
 *
 */ const DEFAULT_ACTION = "app/MavigationBar/DEFAULT_ACTION";
const OPEN_MY_CART = "app/MavigationBar/OPEN_MY_CART";
const CLOSE_MY_CART = "app/MavigationBar/CLOSE_MY_CART";
const FILTERMOB_ICON = "app/MavigationBar/FILTERMOB_ICON";
const constants_HOMECART_ICON = "app/MavigationBar/HOMECART_ICON";
const constants_GET_AI_AUTOSUGGESTION = "app/MavigationBar/GET_AI_AUTOSUGGESTION";
const GET_AI_AUTOSUGGESTION_SUCCESS = "app/MavigationBar/GET_AI_AUTOSUGGESTION_SUCCESS";
const GET_DB_AUTOSUGGESTION = "app/MavigationBar/GET_DB_AUTOSUGGESTION";
const GET_DB_AUTOSUGGESTION_SUCCESS = "app/MavigationBar/GET_DB_AUTOSUGGESTION_SUCCESS";
const constants_GET_SERACH_PRODUCTS = "app/MavigationBar/GET_SERACH_PRODUCTS";
const GET_SERACH_PRODUCTS_SUCCESS = "app/MavigationBar/GET_SERACH_PRODUCTS_SUCCESS";

;// CONCATENATED MODULE: ./src/containers/MavigationBar/actions.js
/*
 *
 * MavigationBar actions
 *
 */ 
function defaultAction() {
    return {
        type: DEFAULT_ACTION
    };
}
function isOpenMyCartAction(isOpen) {
    return {
        type: OPEN_MY_CART,
        isOpen
    };
}
function mobilefilterIcon(isActive) {
    console.log("action...", isActive);
    return {
        type: FILTERMOB_ICON,
        isActive
    };
}
function homepagecartIcon(carticon) {
    console.log("actioncart...", carticon);
    return {
        type: HOMECART_ICON,
        carticon
    };
}
function aiAutosuggestionlist(searchtext) {
    return {
        type: GET_AI_AUTOSUGGESTION,
        searchtext
    };
}
function dbAutosuggestionlist(searchtext) {
    console.log("suhh", searchtext);
    return {
        type: GET_DB_AUTOSUGGESTION,
        searchtext
    };
}
function getproducts(skuname, id, formid, staticfilterid, min, max, sortby) {
    return {
        type: GET_SERACH_PRODUCTS,
        skuname,
        id,
        formid,
        staticfilterid,
        min,
        max,
        sortby
    };
}

// EXTERNAL MODULE: ./src/containers/Cart/actions.js
var Cart_actions = __webpack_require__(6600);
// EXTERNAL MODULE: ./src/containers/HomePage/constants.js
var constants = __webpack_require__(4595);
;// CONCATENATED MODULE: ./src/containers/HomePage/actions.js
/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */ 
/**
 * Changes the input field of the form
 *
 * @param  {string} username The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_USERNAME
 */ function changeUsername(username) {
    return {
        type: CHANGE_USERNAME,
        username
    };
}
function getCommonCartAction() {
    return {
        type: constants/* GET_COMMON_CART */.gq
    };
}
function getCommonCartSuccessAction() {
    return {
        type: GET_COMMON_CART_SUCCESS
    };
}
function getgooglelogindata(googlelogindata) {
    return {
        type: GOOGLE_LOGIN,
        googlelogindata
    };
}

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
;// CONCATENATED MODULE: ./src/containers/Cart/Item.js
/* eslint-disable react/no-unescaped-entities */ /* eslint-disable jsx-a11y/anchor-is-valid */ /* eslint-disable jsx-a11y/no-noninteractive-element-interactions */ /* eslint-disable no-unused-vars */ /* eslint-disable jsx-a11y/no-static-element-interactions */ /* eslint-disable jsx-a11y/click-events-have-key-events */ 



//import { Link } from 'react-router-dom';



////import history from '../../utils/history';

// import {  } from "../DealdayProductOriginal/actions";


function Item(props) {
    console.log("ndn", props);
    const { data, shoppingCart, i } = props;
    const [qty, setQty] = (0,external_react_.useState)(1);
    const [defaultlocdata, setdefaultlocdata] = (0,external_react_.useState)([]);
    const locationPopupState = (0,external_react_redux_.useSelector)((state)=>state.locationPopup);
    console.log("locationPopupState", locationPopupState);
    // const [QtyCout, setQtyCout] = useState(1);
    // function IncrementDecrementQuantityCartFloatingCart(action) {
    //   if (action === 'Add' || action === 'Inc') {
    //     setQty(qty + 1)
    //     addToCartFunc(qty + 1, data.SkuId, data.SKUFilterPriceId)
    //   };
    //   if (action === 'Dec' && qty > 0) {
    //     setQty(qty - 1)
    //     if (qty <= 1) {
    //       removeFromCartFunc(data.SkuId, data.SKUFilterPriceId)
    //       // if (qty > 0) {
    //       // }
    //     } else {
    //       addToCartFunc(qty - 1, data.SkuId, data.SKUFilterPriceId)
    //     }
    //   }
    // }
    // const productdetail = (PageUrl) => {
    //   router.push('/product/', { skuUrl: PageUrl })
    //   localStorage.setItem('PageUrl', window.btoa(PageUrl))
    // }
    (0,external_react_.useEffect)(()=>{
        setQty(data.Quantity);
    }, [
        data
    ]);
    const dispatch = (0,external_react_redux_.useDispatch)();
    // function NotifyMeForReOrder() { }
    function remove() {
        dispatch((0,Cart_actions/* removeFromCart */.h2)(data.SkuId, data.SKUFilterPriceId));
    }
    (0,external_react_.useEffect)(()=>{
        Locationapi/* default */.Z.GoogleApi({}).then((response)=>{
            const data1 = response;
            setdefaultlocdata(data1);
            console.log("data1", data1);
        });
    }, [
        props
    ]);
    function LoadProductPDP(PageUrl) {
        // router.push(`/product/${PageUrl}`, { state: { PageUrl } })
        console.log("PageUrl", PageUrl);
        localStorage.setItem("PageUrl", window.btoa(PageUrl));
    // dispatch(getskuProductdetail(window.atob(localStorage.getItem('PageUrl'))))
    }
    console.log("data.SkuLink", data.SkuLink);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            data.IsDeliveryAvailableToPinCode === false && /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                className: "cart-prod pr-block delivery-not-available",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("input", {
                        type: "hidden",
                        className: "PriceId",
                        value: "2967"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "cart-img",
                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: `/product/${data.SkuLink}`,
                            onClick: ()=>LoadProductPDP(data.SkuLink),
                            children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                className: "img-responsive",
                                referrerPolicy: "no-referrer",
                                alt: data.DisplayName,
                                src: data.ListingImage,
                                height: "150",
                                width: "150"
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "cart-info",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("h4", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                        href: `/product/${data.SkuLink}`,
                                        onClick: ()=>LoadProductPDP(data.SkuLink),
                                        children: [
                                            " ",
                                            data.DisplayName,
                                            " (",
                                            data.ListItem,
                                            ") "
                                        ]
                                    }),
                                    " "
                                ]
                            }),
                            data.InStock && data.IsActive && /*#__PURE__*/ jsx_runtime.jsx("span", {
                                className: "Qtyx",
                                style: {
                                    fontSize: "14px !important"
                                },
                                children: `${qty} x ₹${parseFloat(data.UnitPrice).toFixed(2)}`
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                className: "Qtyx",
                                style: {
                                    fontSize: "14px !important"
                                },
                                children: (!data.InStock || !data.IsActive) && /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    style: {
                                        color: "#ff0000"
                                    },
                                    children: "Unavailable"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        className: "lbl-cant-deliver",
                        children: [
                            " Can't deliver to pin code ",
                            /*#__PURE__*/ jsx_runtime.jsx("b", {
                                children: localStorage.getItem("pincodevalue") && localStorage.getItem("pincodevalue") !== "" ? localStorage.getItem("pincodevalue") : defaultlocdata.DefaultDeliveryLocality_Pincode
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "del-icon",
                        children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                            className: "fa fa-trash",
                            title: "Remove",
                            onClick: remove,
                            "data-cartid": "124693ff-ec1e-4e5b-9616-e408fd847f71",
                            "data-isrfq": "False"
                        })
                    })
                ]
            }),
            data.IsDeliveryAvailableToPinCode === true && data.Quantity > 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                className: "cart-prod pr-block ",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("input", {
                        type: "hidden",
                        className: "PriceId",
                        value: "2720"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "cart-img",
                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: `/product/${data.SkuLink}`,
                            onClick: ()=>LoadProductPDP(data.SkuLink),
                            children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                className: "img-responsive",
                                referrerPolicy: "no-referrer",
                                alt: data.DisplayName,
                                src: data.ListingImage,
                                height: "150",
                                width: "150"
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "cart-info",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("h4", {
                                children: [
                                    " ",
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                        href: `/product/${data.SkuLink}`,
                                        onClick: ()=>LoadProductPDP(data.SkuLink),
                                        children: [
                                            data.DisplayName,
                                            " (",
                                            data.ListItem,
                                            ") "
                                        ]
                                    }),
                                    " "
                                ]
                            }),
                            data.InStock && data.IsActive && /*#__PURE__*/ jsx_runtime.jsx("span", {
                                className: "Qtyx",
                                style: {
                                    fontSize: "14px !important"
                                },
                                children: `${qty} x ₹${parseFloat(data.UnitPrice).toFixed(2)}`
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                className: "Qtyx",
                                style: {
                                    fontSize: "14px !important"
                                },
                                children: (!data.InStock || !data.IsActive) && /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    style: {
                                        color: "#ff0000"
                                    },
                                    children: "Unavailable"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "product-qty-info",
                        style: {
                            textAlign: "center"
                        },
                        children: data.InStock && data.IsActive && /*#__PURE__*/ jsx_runtime.jsx(AddToCart/* default */.Z, {
                            filtered: data,
                            shoppingCart: shoppingCart,
                            cart: true
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        className: "price-x",
                        style: {
                            width: "20%",
                            textAlign: "right",
                            marginTop: "2px"
                        },
                        children: [
                            "Price: ₹",
                            parseFloat(data.SubTotal).toFixed(2),
                            /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                            data.DeliveryChargeAmount > 0 ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                children: [
                                    " ",
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                        children: [
                                            "Delivery Charge: ₹",
                                            parseFloat(data.DeliveryChargeAmount).toFixed(2)
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("br", {})
                                ]
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        style: {
                                            color: "rgb(109, 209, 57)"
                                        },
                                        children: "FREE Delivery"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("br", {})
                                ]
                            }),
                            data.savedprice !== 0 ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                style: {
                                    fontSize: "13px",
                                    color: "#6DD139",
                                    fontWeight: "bold",
                                    lineHeight: "13px"
                                },
                                children: [
                                    "Saved ₹",
                                    parseFloat(data.savedprice).toFixed(2)
                                ]
                            }) : null
                        ]
                    })
                ]
            }, i)
        ]
    });
}
Item.propTypes = {
    shoppingCart: (external_prop_types_default()).array,
    data: (external_prop_types_default()).array,
    i: (external_prop_types_default()).number
};
const mapStateToProps = (state)=>{};
//   ({ qty: state.dealdayProduct.qty })
//   ;
function mapDispatchToProps(dispatch) {
    return {
        addToCartFunc: (qty, SkuId, SKUFilterPriceId)=>dispatch((0,Cart_actions/* addToCart */.Xq)(qty, SkuId, SKUFilterPriceId)),
        removeFromCartFunc: (SkuId, SKUFilterPriceId)=>dispatch((0,Cart_actions/* removeFromCart */.h2)(SkuId, SKUFilterPriceId))
    };
}
const withConnect = (0,external_react_redux_.connect)(mapStateToProps, mapDispatchToProps);
/* harmony default export */ const Cart_Item = ((0,external_redux_.compose)(withConnect, external_react_.memo)(Item));

// EXTERNAL MODULE: external "immer"
var external_immer_ = __webpack_require__(7133);
var external_immer_default = /*#__PURE__*/__webpack_require__.n(external_immer_);
// EXTERNAL MODULE: ./src/containers/Cart/constants.js
var Cart_constants = __webpack_require__(9912);
;// CONCATENATED MODULE: ./src/containers/Cart/reducer.js
/*
 *
 * Cart reducer
 *
 */ 
// import { getCommonCartSuccessAction } from '../HomePage/actions';

const initialState = {
    cartAllData: [],
    shoppingcartDetails: [],
    savecartpopup: false,
    addToCartMsg: "",
    IsMsgBar: false,
    cartamount: ""
};
/* eslint-disable default-case, no-param-reassign */ const cartReducer = (state = initialState, action)=>external_immer_default()(state, (draft)=>{
        switch(action.type){
            // case CART_GET_COMMON_CART_SUCCESS:
            //   draft.cartAllData = action.cartAllData
            //   break;
            case Cart_constants/* REMOVE_FROM_CART */.OZ:
                break;
            case Cart_constants/* LOAD_SAVE_CARD */.Cq:
                draft.savecartpopup = action.popup;
                break;
            case Cart_constants/* SAVE_CART_NAME */.Ny:
                break;
            case Cart_constants/* SHOPPING_CART_DETAILS */.P9:
                draft.shoppingcartDetails = action.shoppingcartDetails;
                break;
            case Cart_constants/* CLOSE_MSG_BAR */.jp:
                draft.IsMsgBar = false;
                break;
            case Cart_constants/* RESPONCE_MSG */.A6:
                draft.IsMsgBar = true;
                draft.addToCartMsg = "Cart saved successfully";
                draft.savecartpopup = false;
                break;
            case Cart_constants/* CART_AMOUNT */.Qy:
                // draft = { ...draft }
                draft.cartamount = action.amount;
                break;
        }
    });
/* harmony default export */ const reducer = (cartReducer);

// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__(6477);
// EXTERNAL MODULE: ./src/containers/MainPage/api/savecart.js
var api_savecart = __webpack_require__(7646);
;// CONCATENATED MODULE: ./src/containers/Cart/saga.js
// import { take, call, put, select } from 'redux-saga/effects';





function* AddToCartAPI(action) {
    const updateCartData = yield (0,effects_.call)(mycartAPI/* default */.Z.updatecart, null, action.payload.qty, action.payload.SkuId, action.payload.SKUFilterPriceId);
    const cartAllData = yield (0,effects_.call)(mycartAPI/* default */.Z.getCartCommon);
    yield (0,effects_.put)({
        type: constants/* GET_COMMON_CART_SUCCESS */.J3,
        cartAllData
    });
    // yield put({ type: CART_GET_COMMON_CART_SUCCESS, cartAllData });
    yield (0,effects_.put)({
        type: Cart_constants/* ADD_TO_CART_SUCCESS */._T,
        updateCartData
    });
    const shoppingcartDetails = yield (0,effects_.call)(mycartAPI/* default */.Z.getShoppingcartDetails, action.payload.SkuId, action.payload.SKUFilterPriceId);
    yield (0,effects_.put)({
        type: Cart_constants/* SHOPPING_CART_DETAILS */.P9,
        shoppingcartDetails
    });
}
function* RemoveFromCartAPI(action) {
    const recievedMsg = yield (0,effects_.call)(mycartAPI/* default */.Z.RemoveCartItem, action.payload.SkuId, action.payload.SKUFilterPriceId);
    yield (0,effects_.put)({
        type: Cart_constants/* RESPONCE_MSG */.A6,
        recievedMsg
    });
    const cartAllData = yield (0,effects_.call)(mycartAPI/* default */.Z.getCartCommon);
    yield (0,effects_.put)({
        type: constants/* GET_COMMON_CART_SUCCESS */.J3,
        cartAllData
    });
    const shoppingcartDetails = yield (0,effects_.call)(mycartAPI/* default */.Z.getShoppingcartDetails, action.payload.SkuId, action.payload.SKUFilterPriceId);
    yield (0,effects_.put)({
        type: Cart_constants/* SHOPPING_CART_DETAILS */.P9,
        shoppingcartDetails
    });
}
function* Cartnamesave(action) {
    const cartName = yield (0,effects_.call)(api_savecart/* default */.Z.addsavecart, action.cartname);
    yield (0,effects_.put)({
        type: Cart_constants/* RESPONCE_MSG */.A6,
        cartName
    });
}
// Individual exports for testing
function* cartSaga() {
    // See example in containers/HomePage/saga.js
    yield (0,effects_.takeEvery)(Cart_constants/* ADD_TO_CART */.G2, AddToCartAPI);
    yield (0,effects_.takeEvery)(Cart_constants/* REMOVE_FROM_CART */.OZ, RemoveFromCartAPI);
    yield (0,effects_.takeEvery)(Cart_constants/* SAVE_CART_NAME */.Ny, Cartnamesave);
}

// EXTERNAL MODULE: ./public/assets1/css/style.min.css
var css_style_min = __webpack_require__(3200);
// EXTERNAL MODULE: ./src/components/ShowAlert/success.js
var success = __webpack_require__(4636);
;// CONCATENATED MODULE: ./src/containers/Cart/saveCartpopup.js
/* eslint-disable jsx-a11y/label-has-associated-control */ /* eslint-disable no-useless-escape */ 







// import { toast } from 'react-toastify';
// import { ToastContainer } from 'react-bootstrap';
////import history from '../../utils/history';





function SaveCartpopup() {
    const router = (0,router_.useRouter)();
    const [deleteMsg, setdeleteMsg] = (0,external_react_.useState)("");
    const [showSuccessMsg, setShowSuccessMsg] = (0,external_react_.useState)(false);
    const [save] = (0,external_react_.useState)(false);
    // const [savecartname, setsavecartname] = useState()
    const [cartName, setCartName] = (0,external_react_.useState)("");
    const [cartNameError, setCartNameError] = (0,external_react_.useState)();
    const [savedCartList, setSavedCartList] = (0,external_react_.useState)();
    const [isError, setIsError] = (0,external_react_.useState)(false);
    const dispatch = (0,external_react_redux_.useDispatch)();
    const loadsavecardpopup = ()=>{
        dispatch((0,Cart_actions/* savecardpopup */.qT)(false));
    };
    const handlechangeCartName = (e)=>{
        if (e.target.value === undefined || e.target.value === "" || e.target.value === null) {
            setCartName("");
            setCartNameError(true);
        }
        if (e.target.value.match("^[a-zA-Z0-9][sa-zA-Z0-9 ]*$") !== null) {
            setCartName(e.target.value);
            setCartNameError(false);
        }
        if (e.target.value.length === 0) {
            setCartName("");
            setCartNameError(true);
        }
    };
    function savecart() {
        // dispatch(saveCartname(document.getElementById('listName').value))
        if (cartName === "" || cartName === undefined) {
            setCartNameError(true);
        } else {
            if (savedCartList && savedCartList.length === 0) {
                api_savecart/* default */.Z.addsavecart(cartName).then((response)=>{
                    if (response) {
                        router.push("/account/savedcartlist");
                        dispatch((0,Cart_actions/* savecardpopup */.qT)(false));
                        setShowSuccessMsg(true);
                    }
                }).catch((error)=>{
                    console.log("error:::", error);
                });
            }
            if (savedCartList && savedCartList.length !== 0) {
                api_savecart/* default */.Z.addsavecart(cartName).then((response)=>{
                    // if (response) {
                    console.log("response", response);
                    // response Cart saved successfully
                    // response Cart name already exist
                    if (response === "Cart saved successfully") {
                        setShowSuccessMsg(true);
                        setIsError(false);
                        setdeleteMsg("Cart saved successfully");
                        setTimeout(()=>{
                            setShowSuccessMsg(false);
                            setdeleteMsg("");
                            dispatch((0,Cart_actions/* savecardpopup */.qT)(false));
                            router.push("/account/savedcartlist");
                        }, 1000);
                    } else {
                        setShowSuccessMsg(true);
                        setIsError(true);
                        setdeleteMsg("Cart name already exist");
                        // setShowSuccessMsg('Cart name already exist')
                        dispatch((0,Cart_actions/* savecardpopup */.qT)(true));
                        setTimeout(()=>{
                            setShowSuccessMsg(false);
                            setShowSuccessMsg("");
                            setCartName("");
                        }, 1000);
                    }
                }).catch((error)=>{
                    console.log("error:::", error);
                });
            // dispatch(savecardpopup(true))
            // setShowSuccessMsg(true)
            // setdeleteMsg('Cart name already exist')
            // // setShowSuccessMsg('Cart name already exist')
            // setTimeout(() => {
            //   setShowSuccessMsg(false)
            //   setShowSuccessMsg('')
            //   setCartName('')
            // }, 1000)
            // return false
            }
        }
    // else {
    //   setShowSuccessMsg(true)
    //   SaveCartAPI.addsavecart(cartName)
    //     .then(response => {
    //       if (response) {
    //         router.push('/account/savedcartlist')
    //         dispatch(savecardpopup(false))
    //       }
    //     })
    //     .catch(error => {
    //       console.log('error:::', error);
    //     });
    // }
    }
    (0,external_react_.useEffect)(()=>{
        fetchlist();
    }, []);
    function fetchlist() {
        // alert('fetchlist--')
        // setloading(true)
        api_savecart/* default */.Z.savecartlisting({}).then((response)=>{
            // setloading(false)
            console.log("response--", response);
            setSavedCartList(response);
        }).catch((error)=>{
            console.log("error:::", error);
        });
    }
    // useEffect(() => {
    //   if (showSuccessMsg === true) {
    //     setdeleteMsg('Cart saved successfully')
    //     setTimeout(() => {
    //       setShowSuccessMsg(false)
    //       setsave(true)
    //     }, 1000);
    //   }
    // }, [showSuccessMsg])
    (0,external_react_.useEffect)(()=>{
        if (save === true) {
            dispatch(isOpenMyCartAction(false));
        }
    }, [
        save
    ]);
    const closemsg = ()=>{
        setShowSuccessMsg(false);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            showSuccessMsg && /*#__PURE__*/ jsx_runtime.jsx(success/* default */.Z, {
                msg: deleteMsg,
                isError: isError,
                close: closemsg
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "modal show",
                id: "SaveCartModel",
                style: {
                    paddingRight: "17px",
                    display: "block"
                },
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "modal-dialog",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "modal-content",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "modal-body text-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("button", {
                                    type: "button",
                                    className: "close",
                                    onClick: loadsavecardpopup,
                                    children: "\xd7"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "savedcart-modal",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                        type: "text",
                                                        className: "form-control",
                                                        id: "listName",
                                                        name: "listName",
                                                        placeholder: "Enter Cart Name",
                                                        onChange: (e)=>handlechangeCartName(e),
                                                        value: cartName
                                                    }),
                                                    cartNameError === true ? /* errors.LastName && */ /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "text text-danger field-validation-valid",
                                                        style: {
                                                            textAlign: "left"
                                                        },
                                                        children: "Please enter cart name."
                                                    }) : null
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                        onClick: savecart,
                                                        className: "btn btn-secondary btn-success savecart",
                                                        type: "submit",
                                                        style: {
                                                            marginTop: "2px",
                                                            marginLeft: "5px"
                                                        },
                                                        children: "Save Cart"
                                                    }),
                                                    " "
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                    id: "savecartmsg"
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/containers/Cart/index.js
/* eslint-disable jsx-a11y/anchor-is-valid */ /* eslint-disable react/prop-types */ /* eslint-disable no-unused-vars */ /* eslint-disable jsx-a11y/no-static-element-interactions */ /* eslint-disable jsx-a11y/click-events-have-key-events */ /**
 *
 * Cart
 *
 */ 


//import { Link, useHistory, useLocation } from 'react-router-dom';







// import '../../../public/assets1/css/style.min.css';








function Cart(props) {
    const router = (0,router_.useRouter)();
    const { cartData, Total, mavigationBarReducer } = props;
    (0,injectReducer/* useInjectReducer */.v)({
        key: "cart",
        reducer: reducer
    });
    (0,injectSaga/* useInjectSaga */.h)({
        key: "cart",
        saga: cartSaga
    });
    const cartReducer = (0,external_react_redux_.useSelector)((state)=>state.cart);
    const [shoppingCart, setShoppingCart] = (0,external_react_.useState)([]);
    const [cartsetData, setCartsetData] = (0,external_react_.useState)([]);
    const [isLoading, setIsLoading] = (0,external_react_.useState)(false);
    const [enblefloatingCart, setenblefloatingCart] = (0,external_react_.useState)(true);
    const ref = (0,external_react_.useRef)();
    //const prevlocation = useLocation();
    // const [removeclass, setRemoveclass] = useState(false);
    const dispatch = (0,external_react_redux_.useDispatch)();
    const addToCartRdcr = (0,external_react_redux_.useSelector)((state)=>state.addToCart);
    //const history = useHistory()
    // const navRef = React.useRef(null);
    (0,external_react_.useEffect)(()=>{
        setIsLoading(true);
    }, []);
    console.log("car addToCartRdcr=", addToCartRdcr);
    console.log("cartReducer=", cartReducer);
    console.log("mycartprops=", cartData, Total);
    function closeMsgBarFunc() {
        setTimeout(()=>{
            dispatch((0,Cart_actions/* closeMsgBar */._o)());
        // setisError(false)
        }, 3000);
    }
    const handlePopupClose = ()=>{
        props.setShowCartPopup(false);
    };
    (0,external_react_.useEffect)(()=>{
        if (addToCartRdcr !== undefined) {
            dispatch((0,Cart_actions/* getcartamount */.Zv)(Total));
            setShoppingCart(addToCartRdcr.shoppingcartDetails);
        }
    }, [
        addToCartRdcr
    ]);
    // useEffect(() => {
    //   if (props !== undefined && props.cartData !== undefined && props.cartData.cart !== undefined) {
    //     props.cartData.cart.forEach((index, element) => {
    //       console.log("elementcartdata===", element);
    //       setCartsetData([...cartsetData, element.cart])
    //     })
    //   }
    // }, [props])
    (0,external_react_.useEffect)(()=>{
        if (cartData !== undefined) {
            let cartCustomArray = [];
            cartData.forEach((element)=>{
                console.log("elementcartdata===", element);
                element.cart.forEach((eleData)=>{
                    console.log("elementcartdata68===", eleData);
                    cartCustomArray = [
                        ...cartCustomArray,
                        eleData
                    ];
                // setCartsetData(element.cart)
                });
            });
            console.log("elementcartdata74===", cartCustomArray);
            setCartsetData(cartCustomArray);
        }
    }, [
        cartData
    ]);
    console.log("cartsetData74====", cartsetData);
    const loadcheckout = (e)=>{
        // localStorage.setItem('lastVisitedUrl', '/productprocced/checkout');
        // localStorage.setItem('lastVisitedUrl', '/cart');
        //router.push('/cart');
        //dispatch(isOpenMyCartAction(false))
        /*if ((localStorage.getItem('CustGUID') === null || localStorage.getItem('CustGUID') === undefined)) {
      router.push('/login')
    } else {
      // router.push('/product/checkout', { total: Total })
      // router.push({ pathname: `/productprocced/checkout`, state: { total: Total } })
      const redirectToPath = localStorage.getItem("lastVisitedUrl");
      if (redirectToPath && redirectToPath !== "") {
        router.push(redirectToPath);
      }
      dispatch(isOpenMyCartAction(false))
      router.push('/cart');
      //sessionStorage.setItem('totalamount', Total.toFixed(2))
    }*/ //dispatch(isOpenMyCartAction(false))
        e.preventDefault();
        localStorage.setItem("lastVisitedUrl", "/cart");
        dispatch(isOpenMyCartAction(false));
        if (localStorage.getItem("CustGUID") === null || localStorage.getItem("CustGUID") === undefined) {
            router.push("/login");
        } else {
            router.push({
                pathname: `/productprocced/checkout`,
                state: {
                    total: Total
                }
            });
            dispatch(isOpenMyCartAction(false));
            sessionStorage.setItem("totalamount", Total.toFixed(2));
        }
        dispatch(isOpenMyCartAction(false));
    };
    const loadsavecardpopup = ()=>{
        dispatch((0,Cart_actions/* savecardpopup */.qT)(true));
    // dispatch(isOpenMyCartAction(false))
    };
    (0,external_react_.useEffect)(()=>{
        dispatch(getCommonCartAction());
    }, []);
    (0,external_react_.useEffect)(()=>{
        let timer = null;
        if (cartsetData.length > 0) {
            timer = setTimeout(()=>{
                setIsLoading(false);
            }, 1500);
        } else {
            timer = setTimeout(()=>{
                setIsLoading(false);
            }, 1500);
        }
        return ()=>{
            timer = null;
        };
    }, [
        cartsetData
    ]);
    console.log("enblefloatingCart", enblefloatingCart);
    (0,external_react_.useEffect)(()=>{
        const checkIfClickedOutside = (e)=>{
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            if (enblefloatingCart && ref.current && !ref.current.contains(e.target)) {
                setenblefloatingCart(enblefloatingCart.isOpen);
            }
        };
        document.addEventListener("mousedown", checkIfClickedOutside);
        return ()=>{
            // Cleanup the event listener
            document.removeEventListener("mousedown", checkIfClickedOutside);
        };
    }, [
        enblefloatingCart
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            cartReducer && cartReducer.savecartpopup && /*#__PURE__*/ jsx_runtime.jsx(SaveCartpopup, {}),
            isLoading && /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                className: "cartlist mini-cart-drop-down ha-dropdown minCardList",
                id: "cart-header",
                style: {
                    display: "block"
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                        children: [
                            " ",
                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                style: {
                                    flex: 1,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    width: "100%"
                                },
                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                    src: "/images/adibuja-logo-animation.gif",
                                    alt: "",
                                    style: {
                                        width: "80px",
                                        height: "80px",
                                        alignSelf: "center"
                                    }
                                })
                            }),
                            " "
                        ]
                    }),
                    " "
                ]
            }, "q"),
            !isLoading && enblefloatingCart && /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                ref: ref,
                className: "cartlist1 mini-cart-drop-down ha-dropdown minCardList",
                id: "cart-header",
                style: {
                    display: "block"
                },
                children: [
                    cartsetData && cartsetData.length === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                        children: [
                            " ",
                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                children: "Cart is empty"
                            }),
                            " "
                        ]
                    }) : /*#__PURE__*/ jsx_runtime.jsx("li", {
                        className: "mb-15",
                        children: /*#__PURE__*/ jsx_runtime.jsx("ul", {
                            className: "cart-prod-list totalcart",
                            children: cartsetData && (cartsetData || []).map((data, i)=>/*#__PURE__*/ jsx_runtime.jsx(Cart_Item, {
                                    data: data,
                                    i: i,
                                    shoppingCart: shoppingCart
                                }))
                        })
                    }),
                    cartsetData && cartsetData !== undefined && cartsetData.length !== 0 && cartsetData.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "subtotal-text",
                                style: {
                                    marginLeft: "15px"
                                },
                                children: "Total "
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                style: {
                                    width: "60px"
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                style: {
                                    width: "60px"
                                }
                            }),
                            console.log(" cartData.length", cartsetData.length),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: cartsetData && cartsetData.length > 3 ? "greatercarttotal" : "lesscarttotal",
                                children: [
                                    "₹",
                                    Total.toFixed(2)
                                ]
                            })
                        ]
                    }),
                    cartsetData && cartsetData.length !== 0 && Total > 0 && /*#__PURE__*/ jsx_runtime.jsx("li", {
                        className: "mt-10 buttonfloting",
                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            className: "cart-button",
                            href: "/cart",
                            onClick: ()=>dispatch(isOpenMyCartAction(false)),
                            children: "view cart"
                        })
                    }),
                    cartsetData && cartsetData.length !== 0 && Total > 0 && /*#__PURE__*/ jsx_runtime.jsx("li", {
                        className: "buttonfloting chekouthide1",
                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: "",
                            className: "cart-button",
                            id: "checkoutoncart",
                            onClick: (e)=>loadcheckout(e),
                            children: "checkout"
                        })
                    }),
                    localStorage.getItem("CustGUID") && cartsetData && cartsetData.length !== 0 && /*#__PURE__*/ jsx_runtime.jsx("li", {
                        className: "buttonfloting",
                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                            className: "cart-button",
                            id: "logout",
                            onClick: loadsavecardpopup,
                            children: "Save Cart"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                        className: "buttonfloting flotingclose",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                            href: true,
                            style: {
                                backgroundColor: "#ff7060",
                                color: "#fff"
                            },
                            className: "cart-button  ha-toggle",
                            onClick: handlePopupClose,
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("i", {
                                    className: "fa fa-close"
                                }),
                                "\xa0 Close"
                            ]
                        })
                    })
                ]
            }, "q")
        ]
    });
}
/* harmony default export */ const containers_Cart = ((0,external_redux_.compose)(// withConnect,
external_react_.memo)(Cart)); // export default Cart

// EXTERNAL MODULE: ./src/containers/MavigationBar/MavigationBar.css
var MavigationBar = __webpack_require__(8739);
;// CONCATENATED MODULE: ./src/containers/MavigationBar/reducer.js
/*
 *
 * MavigationBar reducer
 *
 */ 

const reducer_initialState = {
    isOpenMyCart: false,
    dblist: [],
    searchsku: [],
    filterinfo: "",
    cartinfo: ""
};
/* eslint-disable default-case, no-param-reassign */ const mavigationBarReducer = (state = reducer_initialState, action)=>external_immer_default()(state, (draft)=>{
        switch(action.type){
            case DEFAULT_ACTION:
                break;
            case OPEN_MY_CART:
                draft.isOpenMyCart = action.isOpen;
                break;
            case GET_DB_AUTOSUGGESTION_SUCCESS:
                console.log("reducersearchlist", action.searchlist);
                draft.dblist = action.searchlist;
                break;
            case GET_SERACH_PRODUCTS_SUCCESS:
                draft.searchsku = action.skuproducts;
                break;
            case FILTERMOB_ICON:
                console.log("reducer...", action.isActive);
                draft.filterinfo = action.isActive;
                break;
            case constants_HOMECART_ICON:
                console.log("reducercart...", action.carticon);
                draft.cartinfo = action.carticon;
                break;
        }
    });
/* harmony default export */ const MavigationBar_reducer = (mavigationBarReducer);

// EXTERNAL MODULE: ./src/containers/MainPage/api/search.js
var search = __webpack_require__(6106);
;// CONCATENATED MODULE: ./src/containers/MavigationBar/saga.js



// Individual exports for testing
function* mavigationBarSaga() {
    yield (0,effects_.takeEvery)(GET_DB_AUTOSUGGESTION, getserchautosuggestlist);
    yield (0,effects_.takeEvery)(constants_GET_SERACH_PRODUCTS, getlistproducts);
// yield takeEvery(FILTERMOB_ICON, getfilterdata)
}
function* getserchautosuggestlist(action) {
    console.log("actionsearchtext..", action.searchtext);
    try {
        const searchlist = yield (0,effects_.call)(search/* default */.Z.getDBautosuggestlist, action.searchtext);
        yield (0,effects_.put)({
            type: GET_DB_AUTOSUGGESTION_SUCCESS,
            searchlist
        });
        console.log("searchlist", searchlist);
    } catch (err) {
    // yield put();
    }
}
function* getlistproducts(action) {
    try {
        const skuproducts = yield (0,effects_.call)(search/* default */.Z.getsearchlist, action.skuname, action.id, action.formid, action.staticfilterid, action.min, action.max, action.sortby);
        yield (0,effects_.put)({
            type: GET_SERACH_PRODUCTS_SUCCESS,
            skuproducts
        });
    } catch (err) {
    // yield put();
    }
} // function* getfilterdata(action) {
 //   console.log("saga...", action.isActive)
 //   try {
 //     console.log("saga...", isActive)
 //     yield put({ type: GET_MOB_FILTER_DATA, isActive });
 //   } catch (err) {
 //     // yield put();
 //   }
 // }

// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(1187);
// EXTERNAL MODULE: ./src/useLocalStorage.js
var useLocalStorage = __webpack_require__(3650);
;// CONCATENATED MODULE: ./src/containers/MavigationBar/subMenudropdown.js
/* eslint-disable react/prop-types */ 



function subMenudropdown(props) {
    const [subenablecollapse, setsubenablecollapse] = (0,external_react_.useState)(false);
    const [subIdx, setsubIdx] = (0,external_react_.useState)("");
    const router = (0,router_.useRouter)();
    const { subCatselectedIndex, setsubCatselectedIndex } = props;
    function productlistpage() {
        props.disablediv();
    }
    const handleSubmenuClick = ()=>{
        setsubenablecollapse(!subenablecollapse);
        setsubCatselectedIndex(props.subIndex);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
        className: "mega-parentsubsub",
        children: [
            props.categoryCount > 1 ? /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                href: `/category/${props.subItm.MainCategoryUrl}/${props.subItm.Sub_cat[0].SubCategoryUrl}`,
                onClick: ()=>{
                    props.setIsLoading(true);
                    productlistpage();
                },
                children: props.subItm.MainCategory
            }) : null,
            subenablecollapse && props.subIndex === subCatselectedIndex ? /*#__PURE__*/ jsx_runtime.jsx("ul", {
                className: "dropdown",
                id: "dropdowsubnmenu",
                children: props.subItm.Sub_cat.map((sub_subitm)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                        children: [
                            console.log("s10", sub_subitm),
                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                className: "activeLinkmenu",
                                href: `/category/${props.subItm.MainCategoryUrl}/${sub_subitm.SubCategoryUrl}`,
                                onClick: ()=>productlistpage(),
                                children: sub_subitm.SubCategory
                            })
                        ]
                    }))
            }) : null,
            props.categoryCount <= 1 ? /*#__PURE__*/ jsx_runtime.jsx("ul", {
                className: "dropdown",
                id: "dropdowsubnmenu",
                children: props.subItm.Sub_cat.map((sub_subitm)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                        children: [
                            console.log("s10", sub_subitm),
                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                className: "activeLinkmenu",
                                href: `/category/${props.subItm.MainCategoryUrl}/${sub_subitm.SubCategoryUrl}`,
                                onClick: ()=>productlistpage(),
                                children: sub_subitm.SubCategory
                            })
                        ]
                    }))
            }) : null,
            props.categoryCount > 1 ? /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                className: "mean-expand",
                onClick: (e)=>{
                    e.preventDefault();
                    handleSubmenuClick();
                //  setsubenablecollapse(!subenablecollapse)
                },
                href: "",
                style: {
                    fontSize: "18px"
                },
                children: subenablecollapse && props.subIndex === subCatselectedIndex ? "-" : "+"
            }) : null
        ]
    });
}
/* harmony default export */ const MavigationBar_subMenudropdown = (subMenudropdown);

;// CONCATENATED MODULE: ./src/containers/MavigationBar/Menudropdown.js
/* eslint-disable react/prop-types */ 

////import history from '../../utils/history';



function Menudropdown(props) {
    const router = (0,router_.useRouter)();
    const { disablediv, setIsLoading, selectedIndex, setselectedIndex } = props;
    console.log("props..", props);
    const [enablecollapse, setenablecollapse] = (0,external_react_.useState)(false);
    const [subCatselectedIndex, setsubCatselectedIndex] = (0,external_react_.useState)(null);
    const handleClick = ()=>{
        setenablecollapse(!enablecollapse);
        setselectedIndex(props.index);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
        className: "mega-parent",
        children: [
            console.log("itmm", props.itm, props.index),
            /*#__PURE__*/ jsx_runtime.jsx("a", {
                href: "#",
                className: "activeLinkmenu",
                children: props.itm.CategoryGroupName
            }),
            /*#__PURE__*/ jsx_runtime.jsx("span", {
                className: "lnr lnr-chevron-down"
            }),
            enablecollapse && props.index == selectedIndex ? /*#__PURE__*/ jsx_runtime.jsx("ul", {
                className: "dropdown",
                id: "dropdowsubnmenu",
                children: props.itm.Main_cat.map((subItm, subIndex)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime.jsx(MavigationBar_subMenudropdown, {
                            subItm: subItm,
                            subIndex: subIndex,
                            setIsLoading: setIsLoading,
                            disablediv: disablediv,
                            subCatselectedIndex: subCatselectedIndex,
                            setsubCatselectedIndex: setsubCatselectedIndex,
                            categoryCount: props.itm?.Main_cat?.length
                        })
                    }))
            }) : null,
            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                className: "mean-expand",
                onClick: (e)=>{
                    e.preventDefault();
                    handleClick();
                },
                href: "",
                style: {
                    fontSize: "18px"
                },
                children: enablecollapse && props.index === selectedIndex ? "-" : "+"
            })
        ]
    });
}
/* harmony default export */ const MavigationBar_Menudropdown = (Menudropdown);

// EXTERNAL MODULE: ./src/context.js
var context = __webpack_require__(7880);
// EXTERNAL MODULE: ./src/components/LoadingIndicator/LogoLoader.js
var LogoLoader = __webpack_require__(8241);
// EXTERNAL MODULE: external "react-icons/fi"
var fi_ = __webpack_require__(2750);
// EXTERNAL MODULE: external "react-icons/bi"
var bi_ = __webpack_require__(6652);
;// CONCATENATED MODULE: ./src/containers/MavigationBar/SubMenuSeller.js
/* eslint-disable react/prop-types */ 



function SubMenuSeller(props) {
    const [subenablecollapse, setsubenablecollapse] = (0,external_react_.useState)(false);
    const router = (0,router_.useRouter)();
    const { subCatselectedIndex, setsubCatselectedIndex } = props;
    const handleSubmenuClick = ()=>{
        setsubenablecollapse(!subenablecollapse);
        setsubCatselectedIndex(props.subIndex);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
        className: "megaSellersubsub",
        id: "sellerSubsub",
        children: [
            props.categoryCount > 1 ? /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                href: `/category/${props.subItm.MainCategoryUrl}/${props.subItm.Sub_cat[0].SubCategoryUrl}`,
                onClick: ()=>{
                    props.setIsLoading(true);
                // productlistpage();
                },
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "subSellerCate",
                    children: props.subItm.MainCategory
                })
            }) : null,
            subenablecollapse && props.subIndex === subCatselectedIndex ? /*#__PURE__*/ jsx_runtime.jsx("ul", {
                className: "seller-sub-menu parentSeller",
                id: "dropdowsubnmenu",
                children: props.subItm.Sub_cat.map((sub_subitm)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            className: "activeLinkmenu",
                            href: `/category/${props.subItm.MainCategoryUrl}/${sub_subitm.SubCategoryUrl}`,
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "subsubSellerCate",
                                children: sub_subitm.SubCategory
                            })
                        })
                    }))
            }) : null,
            props.categoryCount <= 1 ? /*#__PURE__*/ jsx_runtime.jsx("ul", {
                className: "seller-sub-menu parentSeller",
                id: "dropdowsubnmenu",
                children: props.subItm.Sub_cat.map((sub_subitm)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            className: "activeLinkmenu",
                            href: `/category/${props.subItm.MainCategoryUrl}/${sub_subitm.SubCategoryUrl}`,
                            children: sub_subitm.SubCategory
                        })
                    }))
            }) : null,
            props.categoryCount > 1 ? /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                className: "mean-expand",
                id: "arrowsellerMenu",
                onClick: (e)=>{
                    e.preventDefault();
                    handleSubmenuClick();
                //  setsubenablecollapse(!subenablecollapse)
                },
                href: "",
                style: {
                    fontSize: "18px"
                },
                children: subenablecollapse && props.subIndex === subCatselectedIndex ? "-" : "+"
            }) : null
        ]
    });
}
/* harmony default export */ const MavigationBar_SubMenuSeller = (SubMenuSeller);

;// CONCATENATED MODULE: ./src/containers/MavigationBar/SellerMenu.js
/* eslint-disable react/prop-types */ 




function SellerMenu(props) {
    const router = (0,router_.useRouter)();
    const { setIsLoading, selectedIndex, setselectedIndex } = props;
    const [enablecollapse, setenablecollapse] = (0,external_react_.useState)(false);
    const [subCatselectedIndex, setsubCatselectedIndex] = (0,external_react_.useState)(null);
    const handleClick = ()=>{
        setenablecollapse(!enablecollapse);
        setselectedIndex(props.index);
        document.body.classList.add("ReactModal__Body--open");
    };
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
            className: "mega-parent",
            id: "megaMenuseller",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "subSellerCate",
                    children: props.itm.CategoryGroupName
                }),
                /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                    className: "mean-expand",
                    id: "arrowsellerMenu",
                    onClick: (e)=>{
                        e.preventDefault();
                        handleClick();
                    },
                    href: "",
                    style: {
                        fontSize: "18px"
                    },
                    children: enablecollapse && props.index === selectedIndex ? "-" : "+"
                }),
                enablecollapse && props.index == selectedIndex ? /*#__PURE__*/ jsx_runtime.jsx("ul", {
                    className: "parentSeller",
                    id: "dropdowsubnmenu",
                    children: props.itm.Main_cat.map((subItm, subIndex)=>/*#__PURE__*/ jsx_runtime.jsx(MavigationBar_SubMenuSeller, {
                            subItm: subItm,
                            subIndex: subIndex,
                            setIsLoading: setIsLoading,
                            subCatselectedIndex: subCatselectedIndex,
                            setsubCatselectedIndex: setsubCatselectedIndex,
                            categoryCount: props.itm?.Main_cat?.length
                        }))
                }) : null
            ]
        })
    });
}
/* harmony default export */ const MavigationBar_SellerMenu = (SellerMenu);

;// CONCATENATED MODULE: ./src/containers/MavigationBar/mavigationBar.js
/* eslint-disable react/button-has-type */ /* eslint-disable no-return-assign */ /* eslint-disable import/order */ /* eslint-disable jsx-a11y/no-noninteractive-element-interactions */ /* eslint-disable no-shadow */ /* eslint-disable react/prop-types */ /* eslint-disable jsx-a11y/anchor-is-valid */ /* eslint-disable jsx-a11y/click-events-have-key-events */ /* eslint-disable jsx-a11y/no-static-element-interactions */ /* eslint-disable no-unused-expressions */ /* eslint-disable-line */ /* eslint-disable no-useless-escape */ /**
 *
 * MavigationBar
 *
 */ 



// import { faSignInAlt, faCheckSquare, faUser } from '@fortawesome/free-solid-svg-icons';
// import { routeToHistory } from '../../containers/HomePage/historyPush';

// import '../../../public/assets1/css/bundle.css';
//import { useCookies } from "react-cookie";


// import { useLocation } from 'react-router-dom/cjs/react-router-dom';



// import '../../../assets1/css/font-awesome.min.css';
// import '../../../assets1/css/chat/font-awesome.min.css';

// import '../../../public/assets1/css/style.min.css';


////import history from '../../utils/history';






// import SearchAPI from '../MainPage/api/search';





// import { getlocationtitle } from "../LocationPopup/actions";










//import cycling from '../../../public/images/cycling.gif'
// import Header from '../../components/Header';
function mavigationBar_MavigationBar(props) {
    const router = (0,router_.useRouter)();
    (0,injectReducer/* useInjectReducer */.v)({
        key: "mavigationBar",
        reducer: MavigationBar_reducer
    });
    (0,injectSaga/* useInjectSaga */.h)({
        key: "mavigationBar",
        saga: mavigationBarSaga
    });
    const [PLPCat, setPLPCat] = (0,external_react_.useState)("");
    const [PLPparenturl, setPLPparenturl] = (0,external_react_.useState)("");
    const [lastVisitedUrl, setlastVisitedUrl] = (0,external_react_.useState)("");
    const [search, setsearch] = (0,external_react_.useState)("");
    const [searchmob, setsearchmob] = (0,external_react_.useState)("");
    const [length, setlength] = (0,external_react_.useState)("");
    const [CustGUID, setCustGUID] = (0,external_react_.useState)("");
    const [UserFirstName, setUserFirstName] = (0,external_react_.useState)("");
    const [sublocalityvalue, setsublocalityvalue] = (0,external_react_.useState)("");
    const [pincodevalue, setpincodevalue] = (0,external_react_.useState)("");
    const [localLocName, setLocalLocName] = (0,external_react_.useState)("");
    const [localLocPin, setLocalLocPin] = (0,external_react_.useState)("");
    const selector = (0,external_react_redux_.useSelector)((state)=>state.home);
    const loadProducts = (0,external_react_redux_.useSelector)((state)=>state.loadProducts);
    const mavigationBarReducer = (0,external_react_redux_.useSelector)((state)=>state.mavigationBar);
    const locationPopupState = (0,external_react_redux_.useSelector)((state)=>state.locationPopup);
    const sendOtpApiResponse = (0,external_react_redux_.useSelector)((state)=>state.login);
    const [Megamainmenu, setMegamainmenu] = (0,external_react_.useState)([]);
    const [MegaMultiMenu, setMegaMultiMenu] = (0,external_react_.useState)([]);
    const [sub, setSub] = (0,external_react_.useState)([]);
    const [selectedIndex, setselectedIndex] = (0,external_react_.useState)(null);
    const [hideMenu, setHideMenu] = (0,external_react_.useState)(false);
    // const [subMega, setSubMega] = useState([]);
    const [hideMegaMenu, setHideMegaMenu] = (0,external_react_.useState)(false);
    const [CartData, setCart] = (0,external_react_.useState)({});
    // const [text, settext] = useState('')
    const [wishlistdata, setwishlistdata] = (0,external_react_.useState)(0);
    const [enblesuggestion, setenblesuggestion] = (0,external_react_.useState)(false);
    // const [closebar, setClosebar] = useState(false)
    const [serchlist, setserchlist] = (0,external_react_.useState)(false);
    const [divenable, setdivenable] = (0,external_react_.useState)(false);
    const [searchenable, setSearchenable] = (0,external_react_.useState)(false);
    // const [enablecollapse, setenablecollapse] = useState(false)
    // const [wishcount, setwishcount] = useState(0)
    const [isActive, setisActive] = (0,external_react_.useState)(false);
    const [defaultlocdata, setdefaultlocdata] = (0,external_react_.useState)([]);
    const [popup, setpopup] = (0,external_react_.useState)(false);
    const [AccountName, setAccountName] = (0,external_react_.useState)("");
    const [isLogin, setIsLogin] = (0,external_react_.useState)(false);
    const [anchorshow, setAnchorshow] = (0,external_react_.useState)(false);
    const [warnmsg, setWarnmsg] = (0,external_react_.useState)("");
    const [successStatus, setSuccessStatus] = (0,external_react_.useState)(false);
    const [showLogOutPopUP, setShowLogOutPopUP] = (0,external_react_.useState)(false);
    const [showCartPopup, setShowCartPopup] = (0,external_react_.useState)(false);
    const [comparePdCount, setComparePdCount] = (0,external_react_.useState)(0);
    const [menuClass, setmenuClass] = (0,external_react_.useState)(false);
    // const [productList, setProductList] = useState([])
    const [isLoading, setIsLoading] = (0,external_react_.useState)(false);
    const [isClient, setisClient] = (0,external_react_.useState)(false);
    const { compareRefresh, setCompareRefresh, selectedLocationZip, setSelectedLocationZip, selectedLocationName, setSelectedLocationName, locationUpdateFlag } = (0,external_react_.useContext)(context/* Message_data */.L);
    const topMenuData = props.topMenuData;
    let websiteMenu = [];
    let websiteMegaMenu = [];
    // if (topMenuData && topMenuData!==undefined && topMenuData.length>0) {
    //   let menu = topMenuData.find(res => res.WebPageId === 99);
    //   websiteMenu = menu.SubMenus.filter((month, idx) => idx < 8)
    // }else {
    // }
    // const prevlocation = useLocation();
    const checkValues = [
        "/category/"
    ];
    const ref = (0,external_react_.useRef)();
    const accountRef = (0,external_react_.useRef)();
    // const dataReducer = useSelector(state => state)
    // console.log("mavigationloadProducts", loadProducts);
    const dispatch = (0,external_react_redux_.useDispatch)();
    // console.log("props.menu", props);
    let timeoutMob = null;
    (0,external_react_.useEffect)(()=>{
        if (window.localStorage) {
            const custGuid = window.localStorage.getItem("CustGUID");
            if (custGuid) {
                document.body.setAttribute("data-custguid", window.atob(custGuid));
            } else {
                document.body.setAttribute("data-custguid", homeServices/* ConstantsValues */.r.defaultCustGUID);
            }
        }
        if (router && router.pathname && router.pathname.includes("/category/")) {
            dispatch(defaultAction());
        }
        setisClient(true);
    }, []);
    (0,external_react_.useEffect)(()=>{
        homeServices/* default */.Z.getproductcompare().then((response)=>{
            setComparePdCount(response.length);
        }).catch((error)=>{
            console.log("error:::", error);
        });
    }, [
        router
    ]);
    function handleCategoryNavigation(e) {
        e.preventDefault();
        if (e.target.href.includes("/category")) {
            //window.location.reload(true);
            window.location.href = e.target.href;
        } else {
            router.push(`/${catUrl}`, undefined, {
                shallow: true
            });
        }
    }
    const cartPopupHandler = ()=>{
        if (showCartPopup) {
            setShowCartPopup(false);
        } else {
            setShowCartPopup(true);
        }
    };
    (0,external_react_.useEffect)(()=>{
        setCompareRefresh(true);
        homeServices/* default */.Z.getproductcompare().then((response)=>{
            setComparePdCount(response.length);
        }).catch((error)=>{
            console.log("error:::", error);
        });
    }, [
        loadProducts
    ]);
    // useEffect(()=>{
    //   console.log('loadp',loadProducts?.newcompare)
    //   if(loadProducts?.newcompare) {
    //     setComparePdCount(loadProducts.newcompare.length)
    //   }
    // },[loadProducts])
    // useEffect(() => {  
    //   setCompareRefresh(false)
    //     // let comparedProdData = productList;
    //     console.log('chkproductList',productList)
    //     if (productList && productList.length>0) {
    //       console.log('comparelength',productList.length)
    //       setComparePdCount(productList.length)
    //     }
    // },[loadProducts])
    // useEffect(() => {
    //   setCompareRefresh(false)
    //   let comparedProdData = productList;
    //   console.log('ccc10',comparedProdData)
    //     if (comparedProdData && comparedProdData.length>0) {
    //       setComparePdCount(comparedProdData.length)
    //     } else if (comparedProdData) {
    //       setComparePdCount(comparedProdData.length)
    //     }
    // },[compareRefresh])
    (0,external_react_.useEffect)(()=>{
        if (false) {}
    }, []);
    (0,external_react_.useEffect)(()=>{
        setLocalLocName(external_js_cookie_default().get("sublocalityvalue"));
        setLocalLocPin(external_js_cookie_default().get("pincodevalue"));
    }, [
        locationUpdateFlag
    ]);
    (0,external_react_.useEffect)(()=>{
        if (props !== undefined) {
            setMegamainmenu(props.topMenuData);
            setCart(props.CartData);
            setwishlistdata(props.wishlistdata);
            setMegaMultiMenu(props.topMenuData);
        }
        setLocalLocName(external_js_cookie_default().get("sublocalityvalue"));
        setLocalLocPin(external_js_cookie_default().get("pincodevalue"));
    // if (typeof window !== 'undefined' && window.localStorage) {
    //   if (localStorage.getItem('sublocalityvalue') && localStorage.getItem('sublocalityvalue')!=="") {
    //     setLocalLocName(localStorage.getItem('sublocalityvalue'))
    //   }
    //   if (localStorage.getItem('pincodevalue') && localStorage.getItem('pincodevalue')!=="") {
    //     setLocalLocPin(localStorage.getItem('pincodevalue'))
    //   }
    // }
    }, [
        props
    ]);
    (0,external_react_.useEffect)(()=>{
        // setenblesuggestion(false)
        if (mavigationBarReducer !== undefined) {
            setserchlist(mavigationBarReducer.dblist);
            if (mavigationBarReducer.dblist && mavigationBarReducer.dblist.length > 0) {
            // setenblesuggestion(true)
            }
        }
    }, [
        mavigationBarReducer
    ]);
    (0,external_react_.useEffect)(()=>{
        if (selector !== undefined) {
            setCart(selector.allCartData);
        }
    }, [
        selector
    ]);
    // useEffect(() => {
    //   if (loadProducts !== undefined) {
    //     const wishListCount = loadProducts.updateWishlistData
    //     setwishlistdata(wishListCount.length)
    //   }
    // }, [loadProducts]);
    // useEffect(() => {
    //   if (Megamainmenu && Megamainmenu !== undefined && Megamainmenu.length>0) {
    //     const menu = Megamainmenu.find(res => res.WebPageId === 99);
    //     if (menu) {
    //       websiteMenu = menu.SubMenus.filter((month, idx) => idx < 8);
    //       // console.log("menu", menu);
    //       setSub(menu.SubMenus.filter((month, idx) => idx < 8));
    //     }
    //   }
    // }, [Megamainmenu])
    // useEffect(() => {
    //   if (sub !== undefined) {
    //     if (sub.length > 7) {
    //       setHideMenu(true)
    //     }
    //   }
    // }, [sub])
    // useEffect(() => {
    //   if (hideMenu !== undefined) {
    //     websiteMenu = sub.slice(0, 8);
    //     setSub(sub.slice(0, 8))
    //   }
    // }, [hideMenu])
    let subMega = [];
    if (topMenuData && topMenuData !== undefined && topMenuData.length > 0) {
        websiteMegaMenu = topMenuData.filter((month, idx)=>idx < 8);
        subMega = topMenuData.filter((month, idx)=>idx < 8);
    }
    if (hideMegaMenu !== undefined) {
        websiteMegaMenu = subMega.slice(0, 8);
        subMega = subMega.slice(0, 8);
    }
    (0,external_react_.useEffect)(()=>{
        if (MegaMultiMenu && MegaMultiMenu !== undefined && MegaMultiMenu.length > 0) {
            websiteMegaMenu = MegaMultiMenu.filter((month, idx)=>idx < 8);
            subMega = MegaMultiMenu.filter((month, idx)=>idx < 8);
        }
    }, [
        MegaMultiMenu
    ]);
    (0,external_react_.useEffect)(()=>{
        if (subMega !== undefined) {
            if (subMega.length > 7) {
                setHideMenu(true);
                setHideMegaMenu(true);
            }
        }
    }, [
        subMega
    ]);
    (0,external_react_.useEffect)(()=>{
        if (hideMegaMenu !== undefined) {
            websiteMegaMenu = subMega.slice(0, 8);
            subMega = subMega.slice(0, 8);
        }
    }, [
        hideMegaMenu
    ]);
    // console.log("productdata..", productdata)
    function productlistpage(pageurl, patrentcaturl) {
        setdivenable(true);
        // console.log('pmyy', 'pageurl', pageurl, 'patrentcaturl', patrentcaturl);
        localStorage.setItem("PLPCat", pageurl);
        localStorage.setItem("PLPparenturl", patrentcaturl);
    //return router.push(`/${pageurl}`, { isURLChange: pageurl })
    }
    function productlistpage1(pageurl, patrentcaturl) {
        setdivenable(true);
        // console.log('pmyy', pageurl[0], patrentcaturl);
        localStorage.setItem("PLPCat", pageurl);
        localStorage.setItem("PLPparenturl", patrentcaturl);
    //return router.push(`/${pageurl}`, { isURLChange: pageurl })
    }
    // function productlistpagemain(patrentcaturl) {
    //   // localStorage.setItem('PLPCat', pageurl)
    //   // localStorage.setItem('PLPparenturl', patrentcaturl)
    //   // return router.push(`/Subcategory/${patrentcaturl}`, { isURLChange: patrentcaturl })
    // }
    /* const getsuggestedlist = () => {
    const searchText = document.getElementById('search').value
    // console.log('test', /[^a-zA-Z0-9\-\/]/.test(searchText))
    if (/[^a-zA-Z0-9\-\/ ]/.test(searchText) === true) {
      toast('Please enter valid search text');
      document.getElementById("search").value = "";
    }
    if (/[^a-zA-Z0-9\-\/ ]/.test(searchText) === false) {
      // alert('152')
      dispatch(dbAutosuggestionlist(searchText))
      //SearchAPI.getDBautosuggestlist(searchText).then(res => {
      //  setserchlist(res)
        //return searchResultData;
      //});
      setenblesuggestion(true)
    }
  } */ const handleSearchKeyUp = ()=>{
        // const strRegex = new RegExp(/^[a-z0-9]+$/i);
        // let result = strRegex.test(document.getElementById('search').value); 
        if (document.getElementById("findProduct").value && document.getElementById("findProduct").value !== "") {
        // setenblesuggestion(true)
        } else {
        // setenblesuggestion(false)
        }
    };
    const getsuggestedlist = ()=>{
        if (document.getElementById("findProduct").value) {
            // const searchText = document.getElementById('search').value
            //clearTimeout(timeout);
            let timeout = setTimeout(function() {
                const searchText = document.getElementById("findProduct").value;
                if (/([\<])([^\>]{1,})*([\>])/i.test(searchText) === true) {
                    // alert('helllo')
                    (0,external_react_toastify_.toast)("Please enter valid search text");
                    document.getElementById("findProduct").value = "";
                } else {
                    // alert('152')
                    dispatch(dbAutosuggestionlist(searchText));
                    setenblesuggestion(true);
                /* SearchAPI.getDBautosuggestlist(searchText).then(res => {
          setserchlist(res)
          //return searchResultData;
        }); */ // setenblesuggestion(true)
                }
            }, 2000);
        }
    };
    /* useEffect(() => {
    if (text !== '') {
      //   localStorage.setItem('search', document.getElementById('search').value)
      // router.push('/product/')
    }
  }, [text]) */ /*function redirectToLogin() {
    
    localStorage.setItem('lastVisitedUrl', router.asPath);
    router.push('/login')
  }
  function redirectToRegister() {
    router.push('/register')
  }*/ const serchproduct = (e)=>{
        e.preventDefault();
        if (document.getElementById("findProduct").value === "" || document.getElementById("findProduct").value.trim() === "") {
            // toast('Please enter search text')
            setSuccessStatus(true);
            setWarnmsg("Please provide input for search");
            setTimeout(()=>{
                setSuccessStatus(false);
            }, 1000);
        // alert('Please enter search text')
        } else {
            // console.log("search function called with value");
            const searchText = document.getElementById("findProduct").value;
            if (/([\<])([^\>]{1,})*([\>])/i.test(searchText)) {
                // alert('helllo')
                (0,external_react_toastify_.toast)("Please enter valid search text");
                document.getElementById("findProduct").value = "";
            } else {
                localStorage.setItem("search", document.getElementById("findProduct").value);
                // document.getElementById('frmSearch').submit();
                router.push({
                    pathname: "/Search",
                    query: {
                        q: localStorage.getItem("search")
                    }
                });
            }
        }
    };
    /** **** mobile search **** */ const serchproductmobile = (e)=>{
        e.preventDefault();
        if (document.getElementById("searchmob").value === "") {
            // toast('Please enter search text')
            setSuccessStatus(true);
            setWarnmsg("Please provide input for search");
        // alert('Please enter search text')
        } else {
            const searchText = document.getElementById("searchmob").value;
            if (/([\<])([^\>]{1,})*([\>])/i.test(searchText)) {
                // alert('helllo')
                (0,external_react_toastify_.toast)("Please enter valid search text");
                document.getElementById("searchmob").value = "";
            } else {
                // console.log("search function called with value");
                localStorage.setItem("search", document.getElementById("searchmob").value);
                // document.getElementById('frmSearchmobile').submit();
                // router.push('/Search')
                router.push({
                    pathname: "/Search",
                    query: {
                        q: document.getElementById("searchmob").value
                    }
                });
            }
        }
    };
    const handleSearchKeyUpmob = ()=>{
        // const strRegex = new RegExp(/^[a-z0-9]+$/i);
        // let result = strRegex.test(document.getElementById('search').value); 
        if (document.getElementById("searchmob").value && document.getElementById("searchmob").value !== "") {
        // setenblesuggestion(true)
        } else {
        // setenblesuggestion(false)
        }
    };
    const getsuggestedlistmob = (e)=>{
        e.preventDefault();
        if (timeoutMob !== null) clearTimeout(timeoutMob);
        if (document.getElementById("searchmob") && document.getElementById("searchmob").value) {
            // const searchText = document.getElementById('search').value
            timeoutMob = setTimeout(function() {
                const searchText = document.getElementById("searchmob") && document.getElementById("searchmob").value ? document.getElementById("searchmob").value : "";
                if (/([\<])([^\>]{1,})*([\>])/i.test(searchText) === true) {
                    // alert('helllo')
                    (0,external_react_toastify_.toast)("Please enter valid search text");
                    document.getElementById("searchmob").value = "";
                } else {
                    // alert('152')
                    dispatch(dbAutosuggestionlist(searchText));
                    setenblesuggestion(true);
                /* SearchAPI.getDBautosuggestlist(searchText).then(res => {
          setserchlist(res)
          //return searchResultData;
        }); */ // setenblesuggestion(true)
                }
            }, 2000);
        }
    };
    /* const products = (skuname) => {
     // router.push(`/product/${skuname}`, { state: { skuname } })
     // console.log("skuname==============", skuname);
     // router.push(`/product/${skuname}`, { state: { skuname } })
     // dispatch(getproducts(skuname))
     // setenblesuggestion(false)
     // localStorage.setItem('PageUrl', window.btoa(skuname))
     // router.push('/product')
     // if (mavigationBarReducer && mavigationBarReducer.searchsku && mavigationBarReducer.searchsku.skuListingModels) {
     //   localStorage.setItem('PageUrl', window.btoa(mavigationBarReducer.searchsku.skuListingModels[0].PageUrl))
     //   router.push('/product')
     // }
     // router.push('/product')
     // setenblesuggestion(false)x
   } */ // useEffect(() => {
    //   if (mavigationBarReducer && mavigationBarReducer.searchsku && mavigationBarReducer.searchsku.skuListingModels) {
    //     localStorage.setItem('PageUrl', window.btoa(mavigationBarReducer.searchsku.skuListingModels[0].PageUrl))
    //     // router.push('/product')
    //   }
    // }, [mavigationBarReducer])
    const handleclass = ()=>{
        setSearchenable(false);
        setdivenable(false);
        setisActive(true);
        dispatch(mobilefilterIcon(true));
    //document.getElementById("MyAccountDiv").style.display="none";
    };
    const disablehandleclass = ()=>{
        setisActive(false);
        dispatch(mobilefilterIcon(false));
    //document.getElementById("MyAccountDiv").style.display="block";
    // document.getElementById("mobileMenuContainer").style.display="block";
    };
    const enablesearchbar = (e)=>{
        e.preventDefault();
        setSearchenable(true);
        setdivenable(false);
        setisActive(false);
        dispatch(mobilefilterIcon(false));
    //document.getElementById("MyAccountDiv").style.display="none";
    };
    const disablesearchbar = (e)=>{
        e.preventDefault();
        setSearchenable(false);
    //document.getElementById("MyAccountDiv").style.display="block";
    };
    const enablediv = ()=>{
        setdivenable(true);
        setSearchenable(false);
        setisActive(false);
        dispatch(mobilefilterIcon(false));
        document.body.classList.add("stopBodyscrolling");
    //document.getElementById("MyAccountDiv").style.display="none";
    // document.getElementByClassName('mydiv').style.display="none";
    };
    const disablediv = ()=>{
        setdivenable(false);
        document.body.classList.remove("stopBodyscrolling");
    //document.getElementById("MyAccountDiv").style.display="block";
    };
    // const collapse = () => {
    //   setenablecollapse(true)
    // }
    function loadwishlist() {
        if (localStorage.getItem("CustGUID") === null) {
            localStorage.setItem("lastVisitedUrl", router.asPath);
            router.push("/login");
        } else {
            router.push("/wishlist");
        }
    }
    // useEffect(()=>{
    //   console.log("skuname==============",pageUrlsave);
    //   localStorage.setItem('PageUrl', window.btoa(pageUrlsave))
    //   // router.push('/product')
    // },[pageUrlsave])
    // console.log('comlength', localStorage.getItem('Comapredatalength'));
    //  const [countafterdelete]=localStorage.getItem('countafterdelete')&& localStorage.getItem('countafterdelete')
    //  console.log("countafterdelete",countafterdelete);
    // console.log("props.wishlistdata", props.wishlistdata);
    // console.log("sub menus", sub);
    // {sub.map(itm => (
    //   <li className="mega-parent">
    //     {/* <button type='button' onClick={() => productlistpage(itm.PageUrl)}> */}
    //     <Link onClick={() => productlistpage1(itm.SubSubMenus.map(subItm => subItm.PageUrl), itm.PageUrl,)} >
    //       {itm.DisplayName}
    //     </Link>
    //     {/* </button> */}
    //     <span className="lnr lnr-chevron-down"></span>
    //     <ul className="dropdown">
    //       {itm.SubSubMenus.map(subItm => (
    //         <li>
    //           <Link onClick={() => productlistpage(subItm.PageUrl, itm.PageUrl)}>
    //             {subItm.DisplayName}
    //           </Link>
    //         </li>
    //       ))}
    //     </ul>
    //   </li>
    // ))}
    /* useEffect(() => {
    if (localStorage.getItem('length') === undefined) {
      setwishcount(0 + 0)
    }
  }, [localStorage.getItem('length') === undefined]) */ /* const submenuedit = sub.map(data => (
    data
  )) */ /* const subsubmenuedit = submenuedit.map(item => (
    item.SubSubMenus
  )) */ //console.log("savecarttotal", submenuedit, subsubmenuedit, wishcount);
    // useEffect(()=>{
    //   console.log("savecarttotal", LocaitonPopup);
    //   if(!LocaitonPopup){
    //     console.log("savecarttotal", LocaitonPopup);
    //     setpopup(true)
    //   }else{
    //     setpopup(false)
    //   }
    // },[!LocaitonPopup])
    (0,external_react_.useEffect)(()=>{
        if (external_js_cookie_default().get("LocationPopupMsg") === "false" || !external_js_cookie_default().get("LocationPopupMsg")) {
            setpopup(true);
        } else {
            setTimeout(()=>{
                fetchToggle();
            }, 3000);
        }
    }, [
        external_js_cookie_default().get("LocationPopupMsg")
    ]);
    function renderlocation() {
        setpopup(true);
    // console.log("locationPopupState.flag==========", locationPopupState.flag);
    // if (locationPopupState && locationPopupState.flag === true) {
    //   dispatch(getlocationtitle(locationPopupState.locationname, locationPopupState.pincode, false))
    // }
    // else if (locationPopupState && locationPopupState.flag === false) {
    //   dispatch(getlocationtitle(locationPopupState.locationname, locationPopupState.pincode, false))
    // }
    // else {
    //   dispatch(getlocationtitle(defaultlocdata.DefaultDeliveryLocality_Area, defaultlocdata.DefaultDeliveryLocality_Pincode, false))
    // }
    }
    function fetchToggle() {
        setpopup(false);
        // dispatch(getlocationtitle('','',true))
        if (locationPopupState && locationPopupState.flag === true) {
        // dispatch(getlocationtitle(locationPopupState.locationname, locationPopupState.pincode, true))
        }
    // setlogoutpopup(false)
    }
    (0,external_react_.useEffect)(()=>{
        Locationapi/* default */.Z.GoogleApi({}).then((response)=>{
            const data = response;
            setdefaultlocdata(data);
        });
        // alert('sendOtpApiResponse ---' + sendOtpApiResponse)
        if (localStorage.getItem("CustGUID") !== null) {
            setIsLogin(true);
            // alert('gretings' + greetings())
            // setAccountName(`Hi ${(localStorage.getItem('UserFirstName'))}`)
            if (localStorage.getItem("UserFirstName") === null || localStorage.getItem("UserFirstName") === "null") {
                setAccountName(`Hi ${greetings()}`);
            } else {
                setAccountName(`Hi ${localStorage.getItem("UserFirstName")}`);
            }
        // alert(`User First Name${ typeof localStorage.getItem('UserFirstName') }${localStorage.getItem('UserFirstName')}`)
        } else {
            setAccountName("My Account");
        }
    }, []);
    const greetings = ()=>{
        const myDate = new Date();
        const hrs = myDate.getHours();
        let greet;
        if (hrs < 12) {
            greet = "Good Morning";
        } else if (hrs >= 12 && hrs <= 17) {
            greet = "Good Afternoon";
        } else if (hrs >= 17 && hrs <= 24) {
            greet = "Good Evening";
        }
        return greet;
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    (0,external_react_.useEffect)(()=>{
        // sendOtpApiResponse && sendOtpApiResponse.customerlogindata && setAccountName(`Hi ${sendOtpApiResponse.customerlogindata.FirstName}`)
        // if (sendOtpApiResponse && sendOtpApiResponse.customerlogindata) {
        //   setAccountName(`Hi ${(greetings())}`)
        // }
        if (localStorage.getItem("CustGUID") !== null) {
            setIsLogin(true);
            if (localStorage.getItem("UserFirstName") === null || localStorage.getItem("UserFirstName") === "null") {
                // alert('360')
                setAccountName(`Hi ${greetings()}`);
            } else {
                setAccountName(`Hi ${localStorage.getItem("UserFirstName")}`);
            }
        }
    }, [
        sendOtpApiResponse
    ]);
    // const wishlist=useSelector(state => state)
    function logoutPopUp() {
        setShowLogOutPopUP(!showLogOutPopUP);
        // setIsLogin(false)
        setAnchorshow(false);
        setmenuClass(false);
    }
    function renderLogout() {
        // localStorage.removeItem('CustGUID')
        // localStorage.removeItem('UserFirstName')
        // localStorage.removeItem('CartGUID')
        // localStorage.removeItem('CartGUID')
        localStorage.clear();
        external_js_cookie_default().remove("CustGUID");
        external_js_cookie_default().remove("accessToken");
        //console.log("homepageaaa",router.asPath)
        if (router.asPath === "/") {
            window.location.reload(true);
        } else {
            router.push("/");
        }
    //
    // history.go(0)
    }
    const handledropdownclass = ()=>{
        setAnchorshow(!anchorshow);
    };
    // function closePopup() {
    //   setShow(true)
    // }
    (0,external_react_.useEffect)(()=>{
        const checkIfClickedOutside = (e)=>{
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            if (enblesuggestion && ref.current && !ref.current.contains(e.target)) {
                setenblesuggestion(false);
            }
        };
        document.addEventListener("mousedown", checkIfClickedOutside);
        return ()=>{
            // Cleanup the event listener
            document.removeEventListener("mousedown", checkIfClickedOutside);
        };
    }, [
        enblesuggestion
    ]);
    const handlepopupflow = ()=>{
    // setshowSideDrawer(true);
    // dispatch(homepagecartIcon(true))
    // console.log("chkcartvalue...", carticon)
    // Disables Background Scrolling whilst the SideDrawer/Modal is open
    // if (typeof window != 'undefined' && window.document) {
    // document.body.style.overflow = 'hidden';
    // document.body.classList.add('scroll-only-cart');
    // }
    };
    const handleWishlistpage = (e)=>{
        e.preventDefault();
        router.push({
            pathname: "/wishlist"
        });
    };
    const handleMenubar = ()=>{
        setmenuClass(true);
    };
    const handleCloseMenubar = ()=>{
        setmenuClass(false);
    };
    console.log("menuClass", menuClass);
    const handleContactpage = (e)=>{
        e.preventDefault();
        router.push({
            pathname: "/contact-us"
        });
    };
    const handleSigninpage = (e)=>{
        e.preventDefault();
        router.push({
            pathname: "/login"
        });
    };
    // const dealofdayPage = (e) => {
    //   e.preventDefault()
    //   router.push({ pathname: '/dealoftheday'})
    // }
    // const topSellerpage = (e) => {
    //   e.preventDefault()
    //   router.push({ pathname: '/topsellers'})
    // }
    // const topTreandingpage = (e) => {
    //   e.preventDefault()
    //   router.push({ pathname: '/toptrending'})
    // }
    // const newArrivalpage = (e) => {
    //   e.preventDefault()
    //   router.push({ pathname: '/newarrival'})
    // }
    // const shopBrandpage = (e) => {
    //   e.preventDefault()
    //   router.push({ pathname: '/allbrands'})
    // }
    const handleBackground = (e)=>{
        document.body.classList.add("ReactModal__Body--open");
        console.log("menuClass11", menuClass);
        if (menuClass) {
            document.body.classList.remove("ReactModal__Body--open");
        }
    };
    // useEffect(() => {
    //   setInterval(() => {
    //     setSuccessStatus(false)
    //   }, 5000);
    // }, [closemsg])
    // const closemsg = () => {
    // }
    // console.log("locationPopupState.flag", locationPopupState);
    (0,external_react_.useEffect)(()=>{
        const handleRouteChangeStart = (url)=>{
            setIsLoading(true);
        };
        const handleRouteChangeComplete = (url)=>{
            setIsLoading(false);
        };
        const handleRouteChangeError = (err, url)=>{
            setIsLoading(false);
        };
        if (!router.asPath.includes("product") || !router.asPath.includes("wishlist")) {
            router.events.on("routeChangeStart", handleRouteChangeStart);
            router.events.on("routeChangeComplete", handleRouteChangeComplete);
            router.events.on("routeChangeError", handleRouteChangeError);
        }
        return ()=>{
            router.events.off("routeChangeStart", handleRouteChangeStart);
            router.events.off("routeChangeComplete", handleRouteChangeComplete);
            router.events.off("routeChangeError", handleRouteChangeError);
        };
    }, [
        router
    ]);
    (0,external_react_.useEffect)(()=>{
        const handleOutsideClick = (event)=>{
            if (accountRef.current && !accountRef.current.contains(event.target)) {
                setAnchorshow(false);
            }
        };
        if (anchorshow) {
            document.addEventListener("click", handleOutsideClick);
        }
        return ()=>{
            document.removeEventListener("click", handleOutsideClick);
        };
    }, [
        anchorshow
    ]);
    const overLayStyle = {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.5)",
        zIndex: "99999999999999"
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
             false ? /*#__PURE__*/ 0 : null,
            isLoading && /*#__PURE__*/ jsx_runtime.jsx(LogoLoader/* default */.Z, {
                isGlobal: true
            }),
            /*#__PURE__*/ jsx_runtime.jsx(external_react_toastify_.ToastContainer, {}),
            successStatus && /*#__PURE__*/ jsx_runtime.jsx(success/* default */.Z, {
                msg: warnmsg,
                isError: true
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "header-middle ",
                children: [
                    checkValues.some((el)=>router.pathname.includes(el)) ? /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: "javascript:;",
                        onClick: handleclass,
                        className: isActive ? "active mobilefilter" : "mobilefilter",
                        style: {
                            left: "auto",
                            cursor: "pointer"
                        },
                        children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                            className: isActive ? "" : "fa fa-filter"
                        })
                    }) : null,
                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: "javascript:void(0)",
                        onClick: enablesearchbar,
                        className: searchenable ? "meanmenu-search  mobile-nav-menu-search" : "mobile-nav-menu-search",
                        style: {
                            Right: "0px",
                            Left: "auto",
                            textAlign: "center",
                            textIndent: "0px",
                            fontSize: "18px"
                        },
                        children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                            className: searchenable ? "" : "fa fa-search"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: "javascript:;",
                        onClick: enablediv,
                        className: divenable ? "meanmenu-reveal  mobile-nav-menu" : " mobile-nav-menu",
                        style: {
                            Right: "0px",
                            Left: "auto",
                            textAlign: "center",
                            textIndent: "0px",
                            fontSize: "18px"
                        },
                        children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                            className: divenable ? "" : "fa fa-bars"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "container-fluid",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "row align-items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "logo-block",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className:  false ? 0 : "logo sellerLogo",
                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            href: "/",
                                            children: props && props.sellerDetailsFromDomain && props.sellerDetailsFromDomain.LogoURL && props.sellerDetailsFromDomain.LogoURL !== "" ? /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                referrerPolicy: "no-referrer",
                                                src: props.sellerDetailsFromDomain.LogoURL,
                                                alt: "brand-logo",
                                                width: "200",
                                                height: "60"
                                            }) : props && !props.isServerSide && /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                referrerPolicy: "no-referrer",
                                                src: "/assets1/img/icon/adibuja-logo.svg",
                                                alt: "brand-logo",
                                                width: "200",
                                                height: "60"
                                            })
                                        })
                                    })
                                }),
                                popup === true ? /*#__PURE__*/ jsx_runtime.jsx(LocationPopup/* LocationPopup */.O, {
                                    data: defaultlocdata,
                                    popup: popup,
                                    fetchToggle: fetchToggle
                                }) : null,
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "deliver-to-block",
                                    "data-locality": JSON.stringify(selectedLocationZip),
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "togglecity",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx(react_fontawesome_.FontAwesomeIcon, {
                                                icon: free_solid_svg_icons_.faMapMarkerAlt
                                            }),
                                            localLocName && localLocName !== "" && localLocPin && localLocPin !== "" ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                "data-me": "first",
                                                id: "cityName",
                                                style: {
                                                    cursor: "pointer"
                                                },
                                                onClick: renderlocation,
                                                children: [
                                                    localLocName,
                                                    " ",
                                                    localLocPin
                                                ]
                                            }) : locationPopupState === undefined || locationPopupState && locationPopupState.flag === false ? defaultlocdata && /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                "data-me": "first",
                                                id: "cityName",
                                                style: {
                                                    cursor: "pointer"
                                                },
                                                onClick: renderlocation,
                                                children: [
                                                    sublocalityvalue && sublocalityvalue.trim() !== "" ? sublocalityvalue : defaultlocdata.DefaultDeliveryLocality_City,
                                                    " ",
                                                    pincodevalue && pincodevalue !== "" ? pincodevalue : defaultlocdata.DefaultDeliveryLocality_Pincode
                                                ]
                                            }) : /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                                                children: locationPopupState && locationPopupState.flag === true ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                    "data-me": "second",
                                                    id: "cityName",
                                                    style: {
                                                        cursor: "pointer"
                                                    },
                                                    onClick: renderlocation,
                                                    children: [
                                                        sublocalityvalue && sublocalityvalue.trim() !== "" ? sublocalityvalue : locationPopupState.locationname,
                                                        "  ",
                                                        pincodevalue && pincodevalue !== "" ? pincodevalue : locationPopupState.pincode
                                                    ]
                                                }) : null
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "search-block order-sm-last searchboxlayout websearch",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "header-middle-inner showform",
                                        id: "searchDiv",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                                                action: "/Search",
                                                id: "frmSearch",
                                                style: {
                                                    position: "relative"
                                                },
                                                onSubmit: serchproduct,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                        type: "text",
                                                        className: "top-cat-field txt-global-product-search ui-autocomplete-input",
                                                        style: {
                                                            opacity: isLoading ? "0.2" : "1"
                                                        },
                                                        placeholder: "Search entire store here",
                                                        id: "findProduct",
                                                        // enterKeyPressed={serchproduct}
                                                        // enterKeyPressed={(e) => serchproduct(e)
                                                        // }
                                                        onKeyUp: ()=>handleSearchKeyUp(),
                                                        onChange: getsuggestedlist
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                            type: "submit",
                                                            className: "lnr lnr-magnifier",
                                                            // id="searchbutton"
                                                            // onKeyUp={serchproduct}
                                                            onClick: serchproduct,
                                                            style: {
                                                                cursor: "pointer"
                                                            },
                                                            "aria-label": "Name"
                                                        })
                                                    })
                                                ]
                                            }),
                                            enblesuggestion && serchlist && serchlist.length > 0 ? /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                                id: "ui-id-1",
                                                className: "ui-menu ui-widget ui-widget-content ui-autocomplete ui-front",
                                                ref: ref,
                                                style: {
                                                    display: "block",
                                                    top: "42px",
                                                    left: "15px",
                                                    height: "400px",
                                                    overflow: "hidden auto",
                                                    zindex: "99999",
                                                    width: "522px"
                                                },
                                                children: serchlist.map((data, index)=>/*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                        href: `/product/${data.PageUrl}`,
                                                        className: "ui-menu-item",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            id: "ui-id-38",
                                                            tabIndex: "-1",
                                                            className: "ui-menu-item-wrapper",
                                                            children: data.SkuName
                                                        }, index)
                                                    }))
                                            }) : null
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "menu-list-block order-lg-last",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "mini-cart-option",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                    className: "settings",
                                                    ref: accountRef,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("noscript", {}),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                            href: "javascript:;",
                                                            className: "ha-toggle myaccounthelip",
                                                            title: "My Account",
                                                            onClick: handledropdownclass,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                    className: "lnr lnr-user cursor-pointer pr-0 mt-1"
                                                                }),
                                                                "\xa0",
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    className: "menu-txt cursor-pointer",
                                                                    id: "accountNameId",
                                                                    children: AccountName
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                                            className: anchorshow ? "box-dropdown ha-dropdown hide-dropdown" : "box-dropdown ha-dropdown",
                                                            style: anchorshow ? {
                                                                display: "block"
                                                            } : {
                                                                display: "none"
                                                            },
                                                            children: !isLogin && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                                            href: "/login" /*onClick={redirectToLogin}*/ ,
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                    className: "lnr lnr-enter",
                                                                                    "aria-hidden": "true"
                                                                                }),
                                                                                "\xa0 Login"
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                                            href: "/register" /*onClick={redirectToRegister}*/ ,
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                    className: "lnr lnr-user",
                                                                                    "aria-hidden": "true"
                                                                                }),
                                                                                "\xa0 Register"
                                                                            ]
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        isLogin && /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                            className: anchorshow ? "box-dropdown ha-dropdown hide-dropdown" : "box-dropdown ha-dropdown",
                                                            style: anchorshow ? {
                                                                display: "block"
                                                            } : {
                                                                display: "none"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                    className: "cursor-pointer",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                                        href: "/account/dashboard",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                                className: "lnr lnr-chart-bars",
                                                                                "aria-hidden": "true"
                                                                            }),
                                                                            "\xa0Dashboard"
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                                        href: "/account/myorders",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                                className: "lnr lnr-cart",
                                                                                "aria-hidden": "true"
                                                                            }),
                                                                            "\xa0My Order"
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                                        href: "/account/reorder",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                                className: "lnr lnr-history",
                                                                                "aria-hidden": "true"
                                                                            }),
                                                                            "\xa0Reorder"
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                                        href: "/account/savedcartlist",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                                className: "lnr lnr-pushpin",
                                                                                "aria-hidden": "true"
                                                                            }),
                                                                            "\xa0Saved Cart"
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                                        href: "javascript:;",
                                                                        onClick: (e)=>handleWishlistpage(e),
                                                                        style: {
                                                                            cursor: "pointer"
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                                className: "lnr lnr-heart",
                                                                                "aria-hidden": "true"
                                                                            }),
                                                                            "\xa0My Wishlist"
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                                        href: "/account/profile",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                                className: "lnr lnr-user",
                                                                                "aria-hidden": "true"
                                                                            }),
                                                                            "\xa0Profile"
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                                        href: "/account/manageaddress",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                                className: "lnr lnr-map-marker",
                                                                                "aria-hidden": "true"
                                                                            }),
                                                                            "\xa0Manage Addresses"
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                                        href: "/account/myorders",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                                className: "lnr lnr-location",
                                                                                "aria-hidden": "true"
                                                                            }),
                                                                            "\xa0Track Order"
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                                        href: "/account/changepassword",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                                className: "lnr lnr-lock",
                                                                                "aria-hidden": "true"
                                                                            }),
                                                                            "\xa0Manage Password"
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                    className: "cursor-pointer",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                                        href: "javascript:;",
                                                                        onClick: logoutPopUp,
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                                className: "lnr lnr-exit",
                                                                                "aria-hidden": "true"
                                                                            }),
                                                                            "\xa0Logout"
                                                                        ]
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                    className: "compare",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                        className: "ha-toggle",
                                                        href: "/compare",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                className: "lnr lnr-sync "
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                className: comparePdCount > 0 ? "count" : "no-count",
                                                                children: comparePdCount && comparePdCount > 0 ? comparePdCount : ""
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                className: "menu-txt",
                                                                children: "Compare"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                    className: "wishlist",
                                                    style: {
                                                        cursor: "pointer"
                                                    },
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                        href: "javascript:;",
                                                        className: "ha-toggle",
                                                        onClick: loadwishlist,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                className: "lnr lnr-heart"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                className: isClient && localStorage.getItem("length") > 0 ? "count" : "nocount",
                                                                children: isClient && localStorage.getItem("length") !== undefined && localStorage.getItem("length") > 0 ? localStorage.getItem("length") : ""
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                className: "menu-txt",
                                                                children: "Wishlist"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                    className: "my-cart cursor-pointer newCardListBox",
                                                    id: "cart_header",
                                                    onClick: handlepopupflow,
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                            href: "javascript:;",
                                                            className: "ha-toggle" /*onClick={() => dispatch(isOpenMyCartAction(true))}*/ ,
                                                            onClick: cartPopupHandler,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                    className: "lnr lnr-cart"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                    className: CartData.count > 0 ? "count" : "nocount",
                                                                    children: CartData && CartData.count !== undefined && CartData.count > 0 ? CartData.count : ""
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    className: "menu-txt",
                                                                    children: "Cart"
                                                                })
                                                            ]
                                                        }),
                                                        showCartPopup && /*#__PURE__*/ jsx_runtime.jsx(Cart, {
                                                            setShowCartPopup: setShowCartPopup,
                                                            cartData: CartData.count === 0 ? [] : CartData.cart,
                                                            Total: CartData.total
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                })
                            ]
                        })
                    }),
                    showLogOutPopUP && /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "modal show",
                        id: "RemoveCartItemModal",
                        style: {
                            paddingRight: "17px",
                            display: "block"
                        },
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "modal-dialog",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "modal-content",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "modal-body text-center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("button", {
                                            type: "button",
                                            className: "close",
                                            "data-dismiss": "modal",
                                            onClick: logoutPopUp,
                                            children: "\xd7"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                            src: "/images/cycling.gif",
                                                            alt: "",
                                                            style: {
                                                                width: "100px"
                                                            }
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                            children: "Are you sure you want to logout?"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                                className: "btn btn-secondary",
                                                                type: "button",
                                                                onClick: renderLogout,
                                                                children: "Yes"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                                className: "btn btn-secondary",
                                                                type: "button",
                                                                onClick: logoutPopUp,
                                                                children: "No"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    })
                ]
            }, "nav"),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "header-top-menu theme-bg sticker header-top-shadow",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "container-fluid",
                    style: {
                        borderTop: "1px #cccccc6e solid"
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-lg-12",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "top-main-menu",
                                    id: "main-menu-seller",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "position-relative main-menu",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                id: "sellerMainMenu",
                                                onClick: handleBackground,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "menu-bar sellar-category",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                className: "fa fa-bars d-none d-lg-block",
                                                                onClick: handleMenubar
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        style: menuClass ? overLayStyle : {}
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: menuClass ? "sidebar" : "sidebarLeft",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "fixed-item",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                                        className: "close-btnseller btn btn-danger",
                                                                        onClick: handleCloseMenubar,
                                                                        children: "X"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                                        className: "main-category",
                                                                        children: "Shop By Category"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                className: "megaSeller",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("nav", {
                                                                    className: "mean-nav",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                                                        style: {
                                                                            display: "block"
                                                                        },
                                                                        children: subMega && subMega.map((itm, index)=>/*#__PURE__*/ jsx_runtime.jsx(MavigationBar_SellerMenu, {
                                                                                itm: itm,
                                                                                index: index,
                                                                                setIsLoading: setIsLoading,
                                                                                selectedIndex: selectedIndex,
                                                                                setselectedIndex: setselectedIndex
                                                                            }))
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                id: "otherSell",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                                    className: "main-category",
                                                                    id: "othersellerOption",
                                                                    children: "Help & Settings"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                                className: "seller-sub-menu",
                                                                id: "sellerSettingsOptions",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                        className: "sellerMainMenu",
                                                                        id: "megaMenuseller",
                                                                        onClick: (e)=>handleContactpage(e),
                                                                        style: {
                                                                            cursor: "pointer"
                                                                        },
                                                                        children: "Customer Service"
                                                                    }),
                                                                    !isLogin && /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                            className: "sellerMainMenu",
                                                                            id: "megaMenuseller",
                                                                            onClick: (e)=>handleSigninpage(e),
                                                                            style: {
                                                                                cursor: "pointer"
                                                                            },
                                                                            children: "Signin"
                                                                        })
                                                                    }),
                                                                    isLogin && /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                            className: "sellerMainMenu",
                                                                            id: "megaMenuseller",
                                                                            onClick: logoutPopUp,
                                                                            style: {
                                                                                cursor: "pointer"
                                                                            },
                                                                            children: "Sign out"
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                className: "sellar-category",
                                                id: "sellerMainMenu",
                                                style: {
                                                    cursor: "pointer"
                                                },
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                    href: "/dealoftheday",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                            referrerPolicy: "no-referrer",
                                                            src: "/images/deal.svg",
                                                            alt: "deals"
                                                        }),
                                                        "\xa0Super Deals"
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                className: "sellar-category",
                                                id: "sellerMainMenu",
                                                style: {
                                                    cursor: "pointer"
                                                },
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                    href: "/topsellers",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                            referrerPolicy: "no-referrer",
                                                            src: "/images/discount.svg",
                                                            alt: "selling"
                                                        }),
                                                        "\xa0Top Selling"
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                className: "sellar-category",
                                                id: "sellerMainMenu",
                                                style: {
                                                    cursor: "pointer"
                                                },
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                    href: "/toptrending",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                            referrerPolicy: "no-referrer",
                                                            src: "/images/purchase.svg",
                                                            alt: "trending"
                                                        }),
                                                        "\xa0Top Trending"
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                className: "sellar-category",
                                                id: "sellerMainMenu",
                                                style: {
                                                    cursor: "pointer"
                                                },
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                    href: "/newarrival",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                            referrerPolicy: "no-referrer",
                                                            src: "/images/out-box.svg",
                                                            alt: "new"
                                                        }),
                                                        "\xa0New Releases"
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                className: "sellar-category",
                                                id: "sellerMainMenu",
                                                style: {
                                                    cursor: "pointer"
                                                },
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                    href: "/allbrands",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                            referrerPolicy: "no-referrer",
                                                            src: "/images/shopping-bag.svg",
                                                            alt: "brand"
                                                        }),
                                                        "\xa0 Shop By Brands"
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-12 d-block d-lg-none",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "mobile-menu mean-container",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "mean-bar",
                                        children: [
                                            checkValues.some((el)=>router.pathname.includes(el)) ? /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                href: "javascript:;",
                                                onClick: disablehandleclass,
                                                className: isActive ? "closeactive mobilefilter" : "mobilefilter",
                                                style: {
                                                    left: "auto",
                                                    cursor: "pointer"
                                                },
                                                children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                    className: isActive ? "fa fa-close" : "fa fa-filter"
                                                })
                                            }) : null,
                                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                href: "javascript:void(0)",
                                                onClick: disablesearchbar,
                                                className: searchenable ? "meanmenu-search" : "mobile-nav-menu-search",
                                                style: {
                                                    Right: "0px",
                                                    Left: "auto",
                                                    textAlign: "center",
                                                    textIndent: "0px",
                                                    fontSize: "18px"
                                                },
                                                children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                    className: searchenable ? "fa fa-close" : "fa fa-search"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                href: "javascript:;",
                                                onClick: disablediv,
                                                className: divenable ? "meanmenu-reveal" : "mobile-nav-menu",
                                                style: {
                                                    Right: "0px",
                                                    Left: "auto",
                                                    textAlign: "center",
                                                    textIndent: "5px",
                                                    fontSize: "18px"
                                                },
                                                children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                    className: divenable ? "fa fa-close" : "fa fa-bar"
                                                })
                                            }),
                                            divenable ? /*#__PURE__*/ jsx_runtime.jsx("nav", {
                                                className: "mean-nav",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                    style: {
                                                        display: "block"
                                                    },
                                                    children: [
                                                        subMega && subMega.map((itm, index)=>// console.log('itm10',itm)
                                                            /*#__PURE__*/ jsx_runtime.jsx(MavigationBar_Menudropdown, {
                                                                itm: itm,
                                                                index: index,
                                                                disablediv: disablediv,
                                                                setIsLoading: setIsLoading,
                                                                selectedIndex: selectedIndex,
                                                                setselectedIndex: setselectedIndex
                                                            })),
                                                        (subMega?.length > 7 || hideMenu) && /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                style: {
                                                                    color: "#f76d5e",
                                                                    fontWeight: "400"
                                                                },
                                                                href: "/category-menu-list",
                                                                children: "View More..."
                                                            })
                                                        })
                                                    ]
                                                })
                                            }) : null
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                })
            }),
            searchenable === true ? /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "search-block order-sm-last searchboxlayout position-relative",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "header-middle-inner-mob showformmob",
                    id: "searchDivMob",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                            action: "/Search",
                            id: "frmSearchmobile",
                            className: "mobsearchbox",
                            onSubmit: serchproductmobile,
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                    type: "text",
                                    className: "top-cat-field txt-global-product-search ui-autocomplete-input",
                                    placeholder: "Search entire store here",
                                    id: "searchmob",
                                    // enterKeyPressed={serchproduct}
                                    // enterKeyPressed={(e) => serchproduct(e)
                                    // }
                                    onKeyUp: ()=>handleSearchKeyUpmob(),
                                    onChange: getsuggestedlistmob
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("i", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                        type: "submit",
                                        className: "fa fa-search newSearch",
                                        id: "searchbutton",
                                        // onKeyUp={serchproduct}
                                        // onClick={serchproduct}
                                        style: {
                                            cursor: "pointer"
                                        }
                                    })
                                })
                            ]
                        }),
                        enblesuggestion && serchlist && serchlist.length > 0 ? /*#__PURE__*/ jsx_runtime.jsx("ul", {
                            id: "ui-id-1",
                            className: "ui-menu ui-widget ui-widget-content ui-autocomplete ui-front",
                            ref: ref,
                            style: {
                                display: "block",
                                top: "42px",
                                left: "15px",
                                height: "400px",
                                overflow: "hidden auto",
                                zindex: "99999",
                                width: "522px"
                            },
                            children: serchlist.map((data, index)=>/*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    href: `/product/${data.PageUrl}`,
                                    className: "ui-menu-item",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        id: "ui-id-38",
                                        tabIndex: "-1",
                                        className: "ui-menu-item-wrapper",
                                        children: data.SkuName
                                    }, index)
                                }))
                        }) : null
                    ]
                })
            }) : null
        ]
    });
}
/* harmony default export */ const mavigationBar = ((/* unused pure expression or super */ null && (mavigationBar_MavigationBar)));

// EXTERNAL MODULE: ./src/components/Header/Header.css
var Header = __webpack_require__(2372);
// EXTERNAL MODULE: external "react-bootstrap/Modal"
var Modal_ = __webpack_require__(9306);
var Modal_default = /*#__PURE__*/__webpack_require__.n(Modal_);
// EXTERNAL MODULE: ./src/containers/HomeScreen/actions.js
var HomeScreen_actions = __webpack_require__(6452);
;// CONCATENATED MODULE: ./src/components/Header/registerpopup.js





function Registerpopup() {
    const dispatch = (0,external_react_redux_.useDispatch)();
    const cancelpopup = ()=>{
        dispatch((0,HomeScreen_actions/* resgesterresponse */.VX)(false));
    };
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx((Modal_default()), {
            show: true,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "login-form error-page text-center suces",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                        type: "button",
                        className: "close",
                        "data-dismiss": "modal",
                        onClick: cancelpopup,
                        children: "\xd7"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("h4", {
                        className: "thank-you-title pb-20",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("i", {
                                className: "fa fa-check-circle fa-2x",
                                style: {
                                    color: "green"
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                            " You are successfully registered.",
                            /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                children: " Thank you for your registration and Newsletter Subscription."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                        className: "text-center",
                        children: [
                            "Please feel free to call our Sales Representatives at ",
                            /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                            /*#__PURE__*/ jsx_runtime.jsx("strong", {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                    href: "tel:+91-7058702045",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("i", {
                                            className: "fa fa-volume-control-phone"
                                        }),
                                        " +91-7058702045"
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("br", {})
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("hr", {
                        className: "spc"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                        className: "spanthankyouspace ",
                        children: "\xa0\xa0"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                        href: "/account/dashboard",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                            type: "button",
                            className: "btn-cart  btn-secondary btn-back-black mb-15",
                            id: "btnacnt",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("i", {
                                    className: "fa fa-user",
                                    children: " "
                                }),
                                "\xa0 Go to My Account"
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                        href: "/",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                            type: "button",
                            className: "btn-cart  btn-secondary btn-back-green mb-15",
                            id: "btnacnt",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("i", {
                                    className: "fa fa-shopping-cart ",
                                    children: " "
                                }),
                                " \xa0 Continue Shopping"
                            ]
                        })
                    })
                ]
            })
        })
    });
}

// EXTERNAL MODULE: external "react-chatbot-kit"
var external_react_chatbot_kit_ = __webpack_require__(4795);
var external_react_chatbot_kit_default = /*#__PURE__*/__webpack_require__.n(external_react_chatbot_kit_);
;// CONCATENATED MODULE: ./src/components/ChatBot/ActionProvider.js




const ActionProvider = ({ createChatBotMessage, setState, children })=>{
    const handleHello = ()=>{
        const botMessage = createChatBotMessage("Welcome to Amy Bot!");
        setState((prev)=>({
                ...prev,
                messages: [
                    ...prev.messages,
                    botMessage
                ]
            }));
    };
    /* const returnChatBotResponse = (response) => (<div>
    <h4>{response.message}</h4>
    {response && response.option ?
      response.option.map((data) =>
        <div style={{ marginTop: "10px" }}>
          <div><a href={data.PageUrl}><img alt="product" referrerpolicy="no-referrer" src={data.Image} /></a></div>
          <a href={data.PageUrl}><h7>{data.DisplayName}</h7></a>
        </div>
      ) : ""
    }
  </div>) */ const returnChatBotResponse = (response)=>{
        // const botReponseData = "";
        if (response && response.option && response.option[0].OrderNumber && response.option[0].OrderNumber !== "") {
            return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h4", {
                        className: "hey",
                        children: response.message
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("h5", {
                        children: [
                            "Order Number: ",
                            response.option[0].OrderNumber
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("h5", {
                        children: [
                            "Order Amount: ",
                            response.option[0].OrderAmount
                        ]
                    })
                ]
            });
        }
        if (response && response.option) {
            return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h4", {
                        children: response.message
                    }),
                    response.option.map((data)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            style: {
                                marginTop: "10px"
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                        href: data.PageUrl,
                                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                            alt: "product",
                                            referrerpolicy: "no-referrer",
                                            src: data.Image
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("a", {
                                    href: data.PageUrl,
                                    children: /*#__PURE__*/ jsx_runtime.jsx("h7", {
                                        children: data.DisplayName
                                    })
                                })
                            ]
                        }))
                ]
            });
        }
        if (response.message && response.message === null) {
            return /*#__PURE__*/ jsx_runtime.jsx("h4", {
                children: "Please submit valid request"
            });
        }
        return /*#__PURE__*/ jsx_runtime.jsx("div", {
            children: /*#__PURE__*/ jsx_runtime.jsx("h4", {
                children: response.message
            })
        });
    };
    const handleUserInputChatBot = (userResponse)=>{
        if (userResponse) {
            fetch("https://api.ipify.org?format=json").then((response)=>response.json()).then((data)=>{
                console.log("chatbotIPAddress==", data.ip);
                homeServices/* default */.Z.getChatBotAIResponse(userResponse, data.ip).then((response)=>response).then((response)=>{
                    let initialResp = "";
                    if (response.message === "NonAI") {
                        initialResp = /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                    children: "Only logged in user can see the details."
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("h4", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                                            href: "/login",
                                            children: "Click here"
                                        }),
                                        " to login"
                                    ]
                                })
                            ]
                        });
                    } else {
                        initialResp = returnChatBotResponse(response);
                    }
                    const botMessage = createChatBotMessage(initialResp);
                    setState((prev)=>({
                            ...prev,
                            messages: [
                                ...prev.messages,
                                botMessage
                            ]
                        }));
                }).catch((err)=>{
                    console.log(err);
                });
            });
        }
    };
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        children: external_react_default().Children.map(children, (child)=>/*#__PURE__*/ external_react_default().cloneElement(child, {
                actions: {
                    handleHello,
                    handleUserInputChatBot
                }
            }))
    });
};
ActionProvider.propTypes = {
};
/* harmony default export */ const ChatBot_ActionProvider = (ActionProvider);

;// CONCATENATED MODULE: ./src/components/ChatBot/MessageParser.js



const MessageParser = ({ children, actions })=>{
    const parse = (message)=>{
        actions.handleUserInputChatBot(message);
    };
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        children: external_react_default().Children.map(children, (child)=>/*#__PURE__*/ external_react_default().cloneElement(child, {
                parse,
                actions: {}
            }))
    });
};
MessageParser.propTypes = {
};
/* harmony default export */ const ChatBot_MessageParser = (MessageParser);

;// CONCATENATED MODULE: ./public/images/minimize-chatbox.png
/* harmony default export */ const minimize_chatbox = ({"src":"/_next/static/media/minimize-chatbox.b50679c1.png","height":225,"width":225,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAAAAADhZOFXAAAARklEQVR42h3LMRKAMAgF0X+TUMnQkVSQs6l42KTFK8hYvW0WwqTaWMDdAO8M8hXPdoLifvMsKjKvgmxFbCMcYwJzMITbv3+NGhIjFu66SAAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./public/images/bot-logo.png
/* harmony default export */ const bot_logo = ({"src":"/_next/static/media/bot-logo.72dbb22d.png","height":492,"width":492,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA7ElEQVR42iWPIU/DUBSFb5AzBCxpyyBsVIDC4TAIJAQIIcvCmvdoCQliAsEvQILBYeA3oB8GydRAIkgQJFUg+pLeb6/bTa455yTnO9KcZvOpFhuOvOvVROETh43TmTlopeTrJSeC9gSKLpgINXGJTVLRi02nh4I+31XcXzPeEf6yTkWeUJvYidoVr6dC/f0FozdeWsLT7hq/vSU4T7zovnh9vKUej+DjndfhGQ8d4fMogWI5BPri9OYAzRYqrrb5H+7xcywVtg22qbjcSulL2QiaLcJgDvJVCJBqZkumocDiaHhs29cmcmHq1JwAvnSQmkvdxLMAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/components/ChatBot/chatbotConfig.js






const handleChatBotClose = ()=>{
    const x = document.getElementsByClassName("react-chatbot-kit-chat-container");
    if (x[0].style.display === "none") {
        x[0].style.display = "block";
    } else {
        x[0].style.display = "none";
    }
};
const chatbotConfig = {
    botName: "Adibuja Bot",
    initialMessages: [
        (0,external_react_chatbot_kit_.createChatBotMessage)("Welcome to Amy Bot!")
    ],
    customComponents: {
        header: ()=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "chatbot-header",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "chatbot-header-left",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                fetchpriority: "high",
                                loading: "eager",
                                alt: "chatbot-header",
                                src: "/images/bot-logo-icon.png",
                                width: 24,
                                height: 24
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                style: {
                                    marginLeft: "5px"
                                },
                                children: [
                                    "Amy ",
                                    /*#__PURE__*/ jsx_runtime.jsx("b", {
                                        children: "bot"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        style: {
                            flex: "1"
                        },
                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                            fetchpriority: "high",
                            loading: "eager",
                            alt: "close",
                            role: "presentation",
                            onClick: handleChatBotClose,
                            onKeyPress: handleChatBotClose,
                            src: "/images/minimize-chatbox.png",
                            width: 27,
                            height: 27
                        })
                    }),
                    " "
                ]
            })
    }
};
/* harmony default export */ const ChatBot_chatbotConfig = (chatbotConfig);

;// CONCATENATED MODULE: ./src/components/ChatBot/ChatbotLogo.js


// import '../../../public/assets1/css/style.min.css';

const ChatBotLogo = ()=>{
    const chatBotLogoClickHandler = ()=>{
        const x = document.getElementsByClassName("react-chatbot-kit-chat-container");
        if (x[0].style.display === "") {
            x[0].style.display = "block";
        } else if (x[0].style.display === "none") {
            x[0].style.display = "block";
        } else {
            x[0].style.display = "none";
        }
    };
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "chatbot-logo-initial",
            title: "Amy Chatbot",
            style: {
                display: "block"
            },
            children: [
                " ",
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                    id: "chatbot-logo-initial-span",
                    children: [
                        " ",
                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                            alt: "amy-chatbot",
                            "aria-label": "chatbotimg",
                            onClick: chatBotLogoClickHandler,
                            onKeyPress: chatBotLogoClickHandler,
                            src: "/images/bot-logo-icon.png",
                            style: {
                                width: "45px",
                                height: "45px"
                            },
                            className: "img-responsive center-block width-100"
                        }),
                        " "
                    ]
                }),
                " "
            ]
        })
    });
};
/* harmony default export */ const ChatbotLogo = (ChatBotLogo);

// EXTERNAL MODULE: ./src/utils/getSellerDetails.js
var getSellerDetails = __webpack_require__(5177);
;// CONCATENATED MODULE: ./src/components/Header/index.js
/* eslint-disable no-return-assign */ /* eslint-disable import/no-unresolved */ /* eslint-disable jsx-a11y/anchor-has-content */ /* eslint-disable jsx-a11y/label-has-associated-control */ /* eslint-disable no-lonely-if */ /* eslint-disable react/prop-types */ /* eslint-disable no-unused-expressions */ /* eslint-disable jsx-a11y/no-static-element-interactions */ /* eslint-disable jsx-a11y/anchor-is-valid */ /* eslint-disable jsx-a11y/click-events-have-key-events */ 










// import '../../../public/assets1/css/style.min.css';


//import { router.push } from '../../containers/HomePage/historyPush';







////import history from '../../utils/history';









function Header_Header(props) {
    const router = (0,router_.useRouter)();
    const [PhoneNumber, setPhoneNumber] = (0,external_react_.useState)("");
    const [Email, setEmail] = (0,external_react_.useState)("");
    const [AccountName, setAccountName] = (0,external_react_.useState)("");
    const [defaultlocdata, setdefaultlocdata] = (0,external_react_.useState)([]);
    const [wishlistdata, setwishlistdata] = (0,external_react_.useState)();
    const [popup, setpopup] = (0,external_react_.useState)(false);
    const [isError, setisError] = (0,external_react_.useState)(false);
    const [IsMsgBarMyAcc, setIsMsgBarMyAcc] = (0,external_react_.useState)(false);
    const [myAccErrorMsg, setMyAccErrorMsg] = (0,external_react_.useState)("");
    const [IsMsgBarCart, setIsMsgBarCart] = (0,external_react_.useState)(false);
    const [shoppingCart, setShoppingCart] = (0,external_react_.useState)([]);
    const [CartErrorMsg, setCartErrorMsg] = (0,external_react_.useState)("");
    const [isLogin, setIsLogin] = (0,external_react_.useState)(false);
    const [isSticky, setIsSticky] = (0,external_react_.useState)(false);
    const [isClient, setIsClient] = (0,external_react_.useState)(false);
    const [isServerSide, setIsServerSide] = (0,external_react_.useState)(true);
    const [filtered, setFiltered] = (0,external_react_.useState)([]);
    const [menu, setMenu] = (0,external_react_.useState)([]);
    const [multiMenu, setMultiMenu] = (0,external_react_.useState)([]);
    const [CartData, setCartData] = (0,external_react_.useState)([]);
    const [quiickviewdata, setsetquiickviewdata] = (0,external_react_.useState)({});
    const [Seleced, setSeleced] = (0,external_react_.useState)("");
    const [sellerDetailsFromDomain, setSellerDetailsFromDomain] = (0,external_react_.useState)([]);
    const [id, setId] = (0,external_react_.useState)("mobileMenuContainer");
    const loadProducts = (0,external_react_redux_.useSelector)((state)=>state.loadProducts);
    const addToCartRdcr = (0,external_react_redux_.useSelector)((state)=>state.addToCart);
    const myAcc = (0,external_react_redux_.useSelector)((state)=>state.myAccount);
    const sendOtpApiResponse = (0,external_react_redux_.useSelector)((state)=>state.login);
    const homeReducerData = (0,external_react_redux_.useSelector)((state)=>state.home);
    const wishlistReducer = (0,external_react_redux_.useSelector)((state)=>state.wishlist);
    const CartReducer = (0,external_react_redux_.useSelector)((state)=>state.cart);
    const homeScreenstate = (0,external_react_redux_.useSelector)((state)=>state.homeScreen);
    const locationPopupState = (0,external_react_redux_.useSelector)((state)=>state.locationPopup);
    const addToCart = (0,external_react_redux_.useSelector)((state)=>state.addToCart);
    const dispatch = (0,external_react_redux_.useDispatch)();
    (0,external_react_.useEffect)(()=>{
        if (homeScreenstate !== undefined) {
            setShoppingCart(homeScreenstate.shoppingCartDetails);
        }
    }, [
        homeScreenstate
    ]);
    (0,external_react_.useEffect)(()=>{
        if (props && !props.sellerDetailsFromDomain) {
            (async ()=>{
                const sellerDetailsFromDomain = await (0,getSellerDetails/* default */.Z)();
                let sellerIdMain = homeServices/* ConstantsValues */.r.defaultSellerID;
                if (sellerDetailsFromDomain && sellerDetailsFromDomain.AdminMemberId && sellerDetailsFromDomain.AdminMemberId !== "") {
                    sellerIdMain = sellerDetailsFromDomain.AdminMemberId;
                    setSellerDetailsFromDomain(sellerDetailsFromDomain);
                }
                setIsServerSide(false);
                localStorage.setItem("sellerID", sellerIdMain);
            })();
        }
    }, []);
    (0,external_react_.useEffect)(()=>{
        mycartAPI/* default */.Z.getShoppingcartDetails().then((response)=>{
            setShoppingCart(response);
        }).catch((error)=>{
            console.log("Error in cart API:::", error);
        });
    }, []);
    (0,external_react_.useEffect)(()=>{
        if (addToCart !== undefined) {
            setShoppingCart(addToCart?.shoppingCartDetails || addToCart?.shoppingcartDetails);
        }
    }, [
        addToCart
    ]);
    (0,external_react_.useEffect)(()=>{
        if (IsMsgBarCart) {
            setTimeout(()=>{
                setCartErrorMsg("");
            }, 3000);
        }
    }, [
        IsMsgBarCart
    ]);
    (0,external_react_.useEffect)(()=>{}, [
        CartReducer
    ]);
    (0,external_react_.useEffect)(()=>{
        if (CartErrorMsg) {
            addToCartRdcr && setIsMsgBarCart(addToCartRdcr.IsMsgBar);
            wishlistReducer && setIsMsgBarCart(wishlistReducer.IsMsgBar);
        } else {
            setIsMsgBarCart(false);
        }
    }, [
        CartErrorMsg,
        wishlistReducer
    ]);
    (0,external_react_.useEffect)(()=>{
        // console.log('addToCartRdcr', addToCartRdcr);
        addToCartRdcr && setCartErrorMsg(addToCartRdcr.addToCartMsg);
        wishlistReducer && setCartErrorMsg(wishlistReducer.addToCartMsg);
    }, [
        addToCartRdcr,
        wishlistReducer
    ]);
    (0,external_react_.useEffect)(()=>{
        loadProducts && setCartErrorMsg(loadProducts.addToCartMsg);
    // console.log('loadProducts', loadProducts);
    }, [
        loadProducts
    ]);
    (0,external_react_.useEffect)(()=>{
        if (IsMsgBarMyAcc) {
            setTimeout(()=>{
                setIsMsgBarMyAcc(false);
            }, 3000);
        }
    }, [
        IsMsgBarMyAcc
    ]);
    (0,external_react_.useEffect)(()=>{
        // localStorage.setItem('pincodevalue', '411045')
        mycartAPI/* default */.Z.getCartCommon().then((res)=>{
            if (false) {}
        });
        homeServices/* default */.Z.getMegamainmenu().then((response)=>{
            // console.log("menu response", response);
            setMenu(response);
        });
        homeServices/* default */.Z.getMultiMenu().then((response)=>{
            //setMenu(response)
            setMultiMenu(response);
        });
        homeServices/* default */.Z.getClientid({}).then((response)=>{
            setEmail(response.Email);
            setPhoneNumber(response.PhoneNumber);
        });
        Locationapi/* default */.Z.GoogleApi({}).then((response)=>{
            const data = response;
            setdefaultlocdata(data);
        });
        homeServices/* default */.Z.getwishlist({}).then((response)=>{
            // console.log("header wish count=", response)
            setwishlistdata(response.length);
            if (false) {}
        // toast(response)
        });
        if (false) {}
    }, [
        wishlistReducer,
        loadProducts,
        addToCart
    ]);
    (0,external_react_.useEffect)(()=>{
        if (myAcc) {
            // console.log('myAcc', myAcc)
            switch(myAcc.updateStatus){
                case 1:
                    setMyAccErrorMsg("Password has been changed successfully!");
                    setIsMsgBarMyAcc(true);
                    setisError(false);
                     false ? 0 : "";
                    router.push("/");
                    break;
                case 3:
                    setIsMsgBarMyAcc(true);
                    setisError(true);
                    break;
                case 4:
                    setisError(true);
                    setIsMsgBarMyAcc(true);
                    setMyAccErrorMsg("Current password and new password should not be same");
                    break;
                default:
                    break;
            }
        }
    }, [
        myAcc
    ]);
    (0,external_react_.useEffect)(()=>{
        sendOtpApiResponse && sendOtpApiResponse.customerlogindata && setAccountName(`Hi ${sendOtpApiResponse.customerlogindata.FirstName}`);
    }, [
        sendOtpApiResponse
    ]);
    // const wishlist=useSelector(state => state)
    (0,external_react_.useEffect)(()=>{
        setIsClient(true);
        if (false) {}
    }, []);
    (0,external_react_.useEffect)(()=>{
        if (homeReducerData) {
            // console.log('homeReducerData', homeReducerData.allCartData);
            setCartData(homeReducerData.allCartData);
        }
    }, [
        homeReducerData
    ]);
    (0,external_react_.useEffect)(()=>{
        if (loadProducts && loadProducts.addToCartMsg.includes("limit")) {
            setisError(true);
        }
        if (loadProducts) {
        // setCartData(loadProducts.allCartData)
        // setwishlistdata(loadProducts.updateWishlistData)
        }
        closeMsgBarFunc();
    }, [
        loadProducts
    ]);
    const handleScroll = ()=>{
        if (window.scrollY > 0) {
            setIsSticky(true);
        }
        if (window.scrollY < 1) {
            setIsSticky(false);
        }
    };
    (0,external_react_.useEffect)(()=>{
        if (false) {}
    }, [
        handleScroll
    ]);
    function renderlocation() {
        setpopup(true);
    }
    function closeMsgBarFunc() {
        setTimeout(()=>{
            //dispatch(closeMsgBar())
            setisError(false);
        }, 3000);
    }
    function renderLogout() {
        if (false) {}
        router.push("/");
    //history.go(0)
    }
    function fetchToggle() {
        setpopup(false);
    }
    (0,external_react_.useEffect)(()=>{
    // dispatch(getlocationtitle('','',undefined))
    });
    function trackorder() {
        if (false) {}
    }
    const validateInput = (e)=>{
        let newText = e.trim();
        if (newText && newText.length > 0) {
            return true;
        } else {
            return false;
        }
    };
    // const Logoutmodal=() =>
    (0,external_react_.useEffect)(()=>{
        if (quiickviewdata.FilterList !== undefined) {
            setFiltered(quiickviewdata.FilterList[0]);
        }
    }, [
        quiickviewdata
    ]);
    const cancelpopup = ()=>{
        dispatch((0,actions/* enablequickreviw */.Yj)(false));
        document.body.style.overflow = "visible";
    };
    (0,external_react_.useEffect)(()=>{
        if (loadProducts !== undefined && loadProducts.Quickviewdata && loadProducts.Quickviewdata?.skusModelMultivariant?.length > 0) {
            // setsetquiickviewdata(loadProducts.Quickviewdata)
            setsetquiickviewdata(loadProducts.Quickviewdata.skusModelMultivariant[0]);
        } else {
            setsetquiickviewdata({});
        }
    }, [
        loadProducts
    ]);
    const changeFltr = (newFL)=>{
        setSeleced(newFL);
        const P = quiickviewdata?.FilterList?.find((i)=>i.ListItem === newFL);
        setFiltered(P);
    };
    const quickviewcontainer = ()=>{
        return(// < Modal show>
        // quiickviewdata !== undefined &&
        /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
            children: quiickviewdata?.SkuCode ? /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "modal fade show",
                role: "dialog",
                id: "QuickView",
                style: {
                    display: "block",
                    paddingLeft: "0px"
                },
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "modal-dialog modal-lg modal-dialog-centered",
                        id: "modell",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "modal-content",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "modal-header",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                        type: "button",
                                        id: "btnClosePopup",
                                        onClick: cancelpopup,
                                        className: "close",
                                        "data-dismiss": "modal",
                                        children: "\xd7"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "modal-body pr-block",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "row",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "col-lg-5",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "product-large-slider",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "pro-large-img",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                            className: "js-lazy-img",
                                                            referrerPolicy: "no-referrer",
                                                            src: quiickviewdata.ListingImage,
                                                            height: "250",
                                                            width: "250",
                                                            alt: quiickviewdata.SkuCode
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "col-lg-7",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "product-details-inner",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "product-details-contentt",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                className: "pro-details-name mb-10",
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("h3", {
                                                                    children: [
                                                                        quiickviewdata.SkuCode,
                                                                        " "
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                className: "price-box mb-0",
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                    className: "price-box",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                            className: "regular-price",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                                                className: "special-price",
                                                                                id: "spprice83938",
                                                                                children: [
                                                                                    "₹",
                                                                                    filtered.FilterSPPrice
                                                                                ]
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                            className: "old-price",
                                                                            id: "oldprice83938",
                                                                            style: {
                                                                                display: filtered.IsDiscountedSFP ? "inline-block" : "none"
                                                                            },
                                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("del", {
                                                                                children: [
                                                                                    "₹",
                                                                                    filtered.FilterMRPPrice
                                                                                ]
                                                                            })
                                                                        }),
                                                                        filtered && /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                                            className: "label_sale label-modalproduct",
                                                                            style: {
                                                                                display: filtered.IsDiscountedSFP ? "inline-block" : "none",
                                                                                width: "max-content",
                                                                                color: "#ffffff"
                                                                            },
                                                                            id: "discountpercent83938",
                                                                            children: [
                                                                                filtered.FilterDiscount,
                                                                                "% off"
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "ratings",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                        id: "savedrstextid83938",
                                                                        className: "saved-rs-text",
                                                                        style: {
                                                                            visibility: filtered.IsDiscountedSFP ? "visible" : "hidden"
                                                                        },
                                                                        children: "You Save:"
                                                                    }),
                                                                    " ",
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                                        className: "saved-rs-text",
                                                                        id: "savedrsid83938",
                                                                        style: {
                                                                            visibility: filtered.IsDiscountedSFP ? "visible" : "hidden"
                                                                        },
                                                                        children: [
                                                                            " ₹",
                                                                            filtered.FilterSavedRs
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            quiickviewdata && quiickviewdata.ShortDescription !== null ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "product-detail-sort-des pb-0 pt-0 product-quickView-desc",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                        style: {
                                                                            fontSize: "14pt"
                                                                        },
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("b", {
                                                                            children: "Overview"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                            dangerouslySetInnerHTML: {
                                                                                __html: `${quiickviewdata.ShortDescription}`
                                                                            }
                                                                        })
                                                                    })
                                                                ]
                                                            }) : null,
                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                className: "pro-details-list pt-2",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                                children: "Availability :"
                                                                            }),
                                                                            quiickviewdata.InStock ? "In Stock" : null
                                                                        ]
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                style: {
                                                                    overflow: "hidden",
                                                                    marginBottom: "5px"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                                        type: "hidden",
                                                                        className: "PriceId",
                                                                        value: "2471"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                                        style: {
                                                                            textAlign: "right",
                                                                            clear: "both",
                                                                            float: "left",
                                                                            marginRight: "15px",
                                                                            Color: "#111",
                                                                            fontSize: "14px",
                                                                            fontWeight: "500",
                                                                            marginBottom: "10px"
                                                                        },
                                                                        children: "Pack Size"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                                        style: {
                                                                            display: "flex"
                                                                        },
                                                                        children: [
                                                                            ":",
                                                                            "\xa0",
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "uom-box packsizeBox",
                                                                                children: [
                                                                                    quiickviewdata.FilterList?.length === 1 && /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                                        children: quiickviewdata.FilterList[0].ListItem
                                                                                    }),
                                                                                    quiickviewdata.FilterList?.length > 1 && /*#__PURE__*/ jsx_runtime.jsx("select", {
                                                                                        className: "selectpackSize",
                                                                                        onChange: (event)=>{
                                                                                            changeFltr(event.target.value);
                                                                                        // localStorage.setItem('selectedPacksize', event.target.value)
                                                                                        },
                                                                                        value: Seleced,
                                                                                        children: quiickviewdata && quiickviewdata.FilterList.map((itm)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("option", {
                                                                                                value: itm.ListItem,
                                                                                                children: [
                                                                                                    itm.ListItem,
                                                                                                    " - ₹",
                                                                                                    parseFloat(itm.FilterSPPrice).toFixed(2),
                                                                                                    "  ",
                                                                                                    filtered.IsDiscountedSFP ? `${filtered.FilterDiscount} % off` : null
                                                                                                ]
                                                                                            }))
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx(AddToCart/* default */.Z, {
                                                                data: quiickviewdata,
                                                                shoppingCart: shoppingCart,
                                                                filtered: filtered,
                                                                PDPpage: true,
                                                                style: {
                                                                    marginRight: "-5px"
                                                                },
                                                                isQuickView: true
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                className: "clearfix",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("br", {})
                                                            })
                                                        ]
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                })
            }) : ""
        }));
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            isClient ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx((external_react_chatbot_kit_default()), {
                        config: ChatBot_chatbotConfig,
                        validator: validateInput,
                        actionProvider: ChatBot_ActionProvider,
                        messageParser: ChatBot_MessageParser
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(ChatbotLogo, {})
                ]
            }) : "",
            loadProducts && loadProducts.popup === true ? quickviewcontainer() : null,
            homeScreenstate && homeScreenstate.regesterflag && /*#__PURE__*/ jsx_runtime.jsx(Registerpopup, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("header", {
                className: `header-pos adibuja-header ${isSticky ? "stykeyheader" : ""}`,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "header-top black-bg",
                        style: {
                            display: "none"
                        },
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "container-fluid",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((Row_default()), {
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "col-lg-6 col-12",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "header-top-left",
                                            id: "txtcentr",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                            onClick: ()=>window.location = "mailto:contactus@adibuja.com",
                                                            // onClick={() => router.push("tel:+91-7058702045")}
                                                            style: {
                                                                cursor: "pointer"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx(react_fontawesome_.FontAwesomeIcon, {
                                                                    icon: free_solid_svg_icons_.faEnvelope
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                                    children: [
                                                                        " Email: ",
                                                                        Email,
                                                                        " "
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                            href: "tel:+91-7058702045",
                                                            style: {
                                                                cursor: "pointer"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx(react_fontawesome_.FontAwesomeIcon, {
                                                                    icon: free_solid_svg_icons_.faPhoneAlt
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                    children: PhoneNumber
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "col-lg-6 col-12",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "header-top-right d-flex align-items-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(react_fontawesome_.FontAwesomeIcon, {
                                                    icon: free_solid_svg_icons_.faUser
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)((NavDropdown_default()), {
                                                    title: AccountName,
                                                    id: "header-nav-dropdown",
                                                    children: [
                                                        !isLogin && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                                        href: "/login",
                                                                        children: [
                                                                            " ",
                                                                            /*#__PURE__*/ jsx_runtime.jsx(react_fontawesome_.FontAwesomeIcon, {
                                                                                icon: free_solid_svg_icons_.faSignInAlt
                                                                            }),
                                                                            "Login"
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                                        href: "/register",
                                                                        children: [
                                                                            " ",
                                                                            /*#__PURE__*/ jsx_runtime.jsx(react_fontawesome_.FontAwesomeIcon, {
                                                                                icon: free_solid_svg_icons_.faCheckSquare
                                                                            }),
                                                                            "Register"
                                                                        ]
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        isLogin && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((NavDropdown_default()).Item, {
                                                                        onClick: ()=>router.push("/account/dashboard"),
                                                                        children: [
                                                                            " ",
                                                                            /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                className: "fa fa-tachometer mr-3",
                                                                                children: " "
                                                                            }),
                                                                            "Dashboard"
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((NavDropdown_default()).Item, {
                                                                        onClick: ()=>router.push("/account/myorders"),
                                                                        children: [
                                                                            " ",
                                                                            /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                className: "fa fa-shopping-basket  mr-3",
                                                                                "aria-hidden": "true"
                                                                            }),
                                                                            "My Order"
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((NavDropdown_default()).Item, {
                                                                        onClick: ()=>router.push("/Wishlist"),
                                                                        children: [
                                                                            " ",
                                                                            /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                className: "fa fa-heart mr-3",
                                                                                children: " "
                                                                            }),
                                                                            "My Wishlist"
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((NavDropdown_default()).Item, {
                                                                        onClick: ()=>router.push("/account/profile"),
                                                                        children: [
                                                                            " ",
                                                                            /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                className: "fa fa-user-circle-o mr-3",
                                                                                children: " "
                                                                            }),
                                                                            "Profile"
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((NavDropdown_default()).Item, {
                                                                        onClick: ()=>router.push("/account/changepassword"),
                                                                        children: [
                                                                            " ",
                                                                            /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                className: "fa fa-key mr-3",
                                                                                children: " "
                                                                            }),
                                                                            "Manage Password"
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((NavDropdown_default()).Item, {
                                                                        onClick: renderLogout,
                                                                        children: [
                                                                            " ",
                                                                            /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                className: "fa fa-power-off mr-3",
                                                                                children: " "
                                                                            }),
                                                                            "Logout"
                                                                        ]
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "togglecity align-items-center d-flex",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx(react_fontawesome_.FontAwesomeIcon, {
                                                            icon: free_solid_svg_icons_.faMapMarkerAlt
                                                        }),
                                                        locationPopupState === undefined ? defaultlocdata && /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                            id: "cityName",
                                                            style: {
                                                                cursor: "pointer"
                                                            },
                                                            onClick: renderlocation,
                                                            children: [
                                                                defaultlocdata.DefaultDeliveryLocality_Area,
                                                                " ",
                                                                defaultlocdata.DefaultDeliveryLocality_Pincode
                                                            ]
                                                        }) : locationPopupState && /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                            id: "cityName",
                                                            style: {
                                                                cursor: "pointer"
                                                            },
                                                            onClick: renderlocation,
                                                            children: [
                                                                locationPopupState.locationname,
                                                                " ",
                                                                locationPopupState.pincode
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(mavigationBar_MavigationBar, {
                        isServerSide: isServerSide,
                        sellerDetailsFromDomain: props.sellerDetailsFromDomain || sellerDetailsFromDomain,
                        CartData: CartData,
                        wishlistdata: wishlistdata,
                        menu: menu,
                        multiMenu: props && props.topMenuData ? props.topMenuData : multiMenu,
                        topMenuData: props && props.topMenuData ? props.topMenuData : multiMenu
                    }),
                    popup === true ? /*#__PURE__*/ jsx_runtime.jsx(LocationPopup/* LocationPopup */.O, {
                        data: defaultlocdata,
                        popup: popup,
                        fetchToggle: fetchToggle
                    }) : null,
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-12 d-block d-lg-none",
                        id: setId,
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "mobile-menu mean-container",
                            children: /*#__PURE__*/ jsx_runtime.jsx(mavigationBar_MavigationBar, {
                                sellerDetailsFromDomain: props.sellerDetailsFromDomain || sellerDetailsFromDomain,
                                CartData: CartData,
                                id: id,
                                wishlistdata: wishlistdata,
                                menu: menu,
                                multiMenu: props && props.topMenuData ? props.topMenuData : multiMenu,
                                topMenuData: props && props.topMenuData ? props.topMenuData : multiMenu
                            })
                        })
                    })
                ]
            }, "header"),
            IsMsgBarCart && /*#__PURE__*/ jsx_runtime.jsx(success/* default */.Z, {
                isError: isError,
                msg: CartErrorMsg
            }),
            IsMsgBarMyAcc && /*#__PURE__*/ jsx_runtime.jsx(success/* default */.Z, {
                isError: isError,
                msg: myAccErrorMsg
            })
        ]
    });
}


/***/ }),

/***/ 7526:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  O: () => (/* binding */ LocationPopup)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./src/utils/injectReducer.js + 1 modules
var injectReducer = __webpack_require__(3671);
// EXTERNAL MODULE: ./src/utils/injectSaga.js + 2 modules
var injectSaga = __webpack_require__(7856);
// EXTERNAL MODULE: ./src/components/ShowAlert/success.js
var success = __webpack_require__(4636);
// EXTERNAL MODULE: ./src/components/ShowAlert/warn.js
var warn = __webpack_require__(8659);
// EXTERNAL MODULE: ./src/containers/App/constants.js
var constants = __webpack_require__(1824);
// EXTERNAL MODULE: ./src/containers/MainPage/api/Locationapi.js
var Locationapi = __webpack_require__(4821);
// EXTERNAL MODULE: ./src/containers/LocationPopup/actions.js
var actions = __webpack_require__(9221);
// EXTERNAL MODULE: external "immer"
var external_immer_ = __webpack_require__(7133);
var external_immer_default = /*#__PURE__*/__webpack_require__.n(external_immer_);
// EXTERNAL MODULE: ./src/containers/LocationPopup/constants.js
var LocationPopup_constants = __webpack_require__(3510);
;// CONCATENATED MODULE: ./src/containers/LocationPopup/reducer.js
/*
 *
 * LocationPopup reducer
 *
 */ 

const initialState = {
    close: false,
    input: "",
    lat: "",
    lng: "",
    atosuggestdadta: [],
    predictlist: [],
    avilabiltymsg: "",
    locationname: "",
    pincode: "",
    flag: false
};
/* eslint-disable default-case, no-param-reassign */ const locationPopupReducer = (state = initialState, action)=>external_immer_default()(state, (draft)=>{
        switch(action.type){
            case LocationPopup_constants/* DEFAULT_ACTION */.YI:
                break;
            case LocationPopup_constants/* ONCHANGE_LOCATIONT */.Z_:
                console.log("action", action);
                break;
            case LocationPopup_constants/* DETECT_MY_LOCATION */.bz:
                break;
            case LocationPopup_constants/* ONCHANGE_LOCATION_SUCCESS */.AJ:
                draft.predictlist = action.predictions;
                break;
            case LocationPopup_constants/* AVILABILYTY_MSG */.Xd:
                draft.avilabiltymsg = action.checkserviceavailability;
                break;
            case LocationPopup_constants/* LOCATIONNAME_PINCODE */.BP:
                draft.locationname = action.locationname;
                draft.pincode = action.pincode;
                draft.flag = action.flag;
                break;
        }
    });
/* harmony default export */ const reducer = (locationPopupReducer);

// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__(6477);
// EXTERNAL MODULE: ./src/utils/request.js
var request = __webpack_require__(1515);
;// CONCATENATED MODULE: ./src/containers/LocationPopup/saga.js
/* eslint-disable no-unused-vars */ // import { getLocation } from 'connected-react-router';



// import { DEFAULT_ACTION } from '../RegisterOrignal/constants';

// Individual exports for testing
function* locationPopupSaga() {
    yield (0,effects_.takeEvery)(LocationPopup_constants/* ONCHANGE_LOCATIONT */.Z_, getrepos);
    yield (0,effects_.takeEvery)(LocationPopup_constants/* DETECT_MY_LOCATION */.bz, getcuurentlocation);
    yield (0,effects_.takeEvery)(LocationPopup_constants/* CHECK_SERVICE_AVALABILITY */.ZZ, getavailability);
}
function* getcuurentlocation(action) {
    console.log("ac", action);
    const getyourplace = yield (0,effects_.call)(request/* requestlocation */.KF, `${constants/* default */.ZP.endPoints.geocode}key=${action.atosuggestdadta.GooglePlacesApiKey}&latlng=${action.lat},${action.lng}&sensor=${true}`, "GET");
    console.log({
        getyourplace
    });
    const address = getyourplace.results[0].address_components.filter((x)=>x.types[1] === "sublocality");
    const pincode = getyourplace.results[0].address_components.filter((x)=>x.types[0] === "postal_code");
    const city = getyourplace.results[0].address_components.filter((x)=>x.types[0] === "locality");
    const state = getyourplace.results[0].address_components.filter((x)=>x.types[0] === "administrative_area_level_1");
    const area = getyourplace.results[0].address_components.filter((x)=>x.types[1] === "sublocality");
    console.log({
        address,
        pincode,
        city
    });
    const checkserviceavailability = yield (0,effects_.call)(request/* requestlocationservice */.lj, `${constants/* default */.ZP.endPoints.checkserviceavailability}setsession=true&address=${address[0].long_name}&area=${area[0].long_name}&city=${city[0].long_name}&lat=${action.lat}&lng=${action.lng}&pincode=${pincode[0].long_name}&placeid=${getyourplace.results[0].place_id}&state=${state[0].long_name}`, "GET");
    console.log({
        checkserviceavailability
    });
    yield (0,effects_.put)({
        type: LocationPopup_constants/* AVILABILYTY_MSG */.Xd,
        checkserviceavailability
    });
    // alert(`delivery location ${checkserviceavailability} `,)
    if (checkserviceavailability === "NotAvailable") {
        alert("We are currently operational in Pune (selected locations). We are working on it and hang tight, we will serve you very soon!");
    } else {
        alert(checkserviceavailability);
    }
}
function* getrepos(action) {
    console.log("acek", action);
    console.log({
        action
    });
    // fetch(`${Constants.endPoints.autocomplete}?key=${action.atosuggestdadta.GooglePlacesApiKey}&input=${action.input}&components=country:in`, {
    //   method: 'GET',
    //   mode: 'no-cors',
    //   headers: {
    //     accept: 'application/json',
    //     // 'Content-Type': 'application/json',
    //     // Authorization: `Bearer ${token}`,
    //   },
    //   // body: JSON.stringify(form)
    // })
    //   .then(res => console.log('hh', res.text()))
    // // .then(addressresponse => {
    // //   console.log('registerresponse', addressresponse)
    // // setenblesuggestion(true)
    // // alert(addressresponse)
    // // toast(addressresponse)
    // // props.fetchaddress()
    // // props.cancelform()
    // // }
    // // ); s
    const { GooglePlacesApiKey } = action.atosuggestdadta;
    const placeid = action.atosuggestdadta.DefaultDeliveryLocality_PlaceId;
    // const repos = yield call(requestlocationservice, `${Constants.endPoints.autocomplete}?key=${GooglePlacesApiKey}&input=${action.input}&components=country:in`, 'GET')
    // const { predictions } = repos
    console.log(GooglePlacesApiKey);
// yield put({ type: ONCHANGE_LOCATION_SUCCESS, predictions })
}
function* getavailability(action) {
    console.log({
        action
    });
    console.log("ac", action);
    const placedetails = yield (0,effects_.call)(request/* requestlocation */.KF, `${constants/* default */.ZP.endPoints.placedetails}key=${action.atosuggestdadta.GooglePlacesApiKey}&place_id=${action.ID}`, "GET");
    console.log({
        placedetails
    });
    console.log(placedetails.result.geometry.location.lat);
    const getyourplaceauto = yield (0,effects_.call)(request/* requestlocation */.KF, `${constants/* default */.ZP.endPoints.geocode}key=${action.atosuggestdadta.GooglePlacesApiKey}&latlng=${placedetails.result.geometry.location.lat},${placedetails.result.geometry.location.lng}&sensor=${true}`, "GET");
    console.log({
        getyourplaceauto
    });
    const address = getyourplaceauto.results[0].address_components.filter((x)=>x.types[1] === "sublocality");
    const pincode = getyourplaceauto.results[0].address_components.filter((x)=>x.types[0] === "postal_code");
    const city = getyourplaceauto.results[0].address_components.filter((x)=>x.types[0] === "locality");
    const state = getyourplaceauto.results[0].address_components.filter((x)=>x.types[0] === "administrative_area_level_1");
    const area = getyourplaceauto.results[0].address_components.filter((x)=>x.types[1] === "sublocality");
    console.log({
        address,
        pincode,
        city
    });
    const checkserviceavailability = yield (0,effects_.call)(request/* requestlocation */.KF, `${constants/* default */.ZP.endPoints.checkserviceavailability}setsession=true&address=${address[0].long_name}&area=${area[0].long_name}&city=${city[0].long_name}&lat=${placedetails.result.geometry.location.lat}&lng=${placedetails.result.geometry.location.lng}&pincode=${pincode[0].long_name}&placeid=${getyourplaceauto.results[0].place_id}&state=${state[0].long_name}`, "GET");
    console.log({
        checkserviceavailability
    });
    yield (0,effects_.put)({
        type: LocationPopup_constants/* AVILABILYTY_MSG */.Xd,
        checkserviceavailability
    });
    // alert(`delivery location ${checkserviceavailability} `,)
    if (checkserviceavailability === "NotAvailable") {
        alert("We are currently operational in Pune (selected locations). We are working on it and hang tight, we will serve you very soon!");
    } else {
        alert(checkserviceavailability);
    }
}

// EXTERNAL MODULE: ./src/context.js
var context = __webpack_require__(7880);
// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(6734);
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);
// EXTERNAL MODULE: ./src/containers/MainPage/api/checkout.js
var checkout = __webpack_require__(5938);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react-bootstrap/Button"
var Button_ = __webpack_require__(1937);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "react-bootstrap/Form"
var Form_ = __webpack_require__(5226);
var Form_default = /*#__PURE__*/__webpack_require__.n(Form_);
// EXTERNAL MODULE: ./src/components/LoadingIndicator/LogoLoader.js
var LogoLoader = __webpack_require__(8241);
// EXTERNAL MODULE: ./src/containers/MainPage/api/productdetail.js
var productdetail = __webpack_require__(3577);
;// CONCATENATED MODULE: ./src/components/SelectDeliveryLocation/index.js











const SelectDeliveryLocation = ({ addressList, fetchCustomerAddresses, fetchCourierServiceAvailability, fetchToggle, isUserLogin, loading, pinCodeCheck, setLocationMessage, setIsOutsideLocation })=>{
    const router = (0,router_.useRouter)();
    const [allAddressList, setAllAddressList] = (0,external_react_.useState)([]);
    const [selectedAddress, setSelectedAddress] = (0,external_react_.useState)(0);
    const [selectedPincode, setSelectedPincode] = (0,external_react_.useState)(0);
    const [isValidPincode, setIsValidPincode] = (0,external_react_.useState)(true);
    const [isProductNotAvailable, setIsProductNotAvailable] = (0,external_react_.useState)(false);
    const [isLoading, setIsLoading] = (0,external_react_.useState)(false);
    const { compareRefresh, setCompareRefresh, selectedLocationZip, setSelectedLocationZip, selectedLocationName, setSelectedLocationName, locationUpdateFlag, setLocationUpdateFlag } = (0,external_react_.useContext)(context/* Message_data */.L);
    (0,external_react_.useEffect)(()=>{
        setLocationMessage && setLocationMessage("");
        setIsOutsideLocation && setIsOutsideLocation(false);
        setLocationUpdateFlag(false);
    }, []);
    (0,external_react_.useEffect)(()=>{
        setIsLoading(loading);
    }, [
        loading
    ]);
    (0,external_react_.useEffect)(()=>{
        if (addressList?.length > 0) {
            const primaryAddressIndex = addressList.findIndex((item)=>item.isPrimary);
            if (primaryAddressIndex !== -1) {
                setSelectedAddress(primaryAddressIndex);
            }
            setAllAddressList(addressList);
        }
    }, [
        addressList
    ]);
    const handleAddressChange = async (CustomerAddressId, data)=>{
        const productName = router.query.productName;
        let productDetails = {};
        setSelectedPincode(data?.ZipCode);
        setIsLoading(true);
        await productdetail/* default */.Z.getSkuv(productName, data?.ZipCode).then((response)=>{
            productDetails = response?.skusModelMultivariant[0];
        }).catch((err)=>console.log("Error in product API::", err));
        if (!productDetails?.IsDeliveryAvailableToPinCode) {
            setIsProductNotAvailable(true);
            setIsLoading(false);
        } else if (productDetails?.IsDeliveryAvailableToPinCode && data.CustomerAddressId === CustomerAddressId) {
            checkout/* default */.Z.getdefaultaddress(CustomerAddressId);
            const requestBody = {
                "DeliveryLocalityPlaceId": data.DeliveryLocalityPlaceId,
                "CustomerId": 0,
                "DeliveryLocalityCity": data.DeliveryLocalityCity,
                "billingButton": false,
                "DeliveryLocalityAddress": data.DeliveryLocalityAddress,
                "DeliveryLocalityLatitude": data.DeliveryLocalityLatitude,
                "Additional_info": null,
                "AddressTypeId": data.AddressTypeId,
                "DeliveryLocalityArea": data.DeliveryLocalityArea,
                "DeliveryLocalityState": data.DeliveryLocalityState,
                "Address2": data.Address2,
                "AddressTypeName": data.AddressTypeName,
                "StateCode": "MH",
                "DeliveryLocalityPinCode": data.ZipCode,
                "FirstName": data.FirstName,
                "AddressName": data.AddressName,
                "City": data.City,
                "CustomerAddressId": data.CustomerAddressId,
                "DeliveryLocalityCountry": "India",
                "Email": null,
                "Fax": null,
                "CountryCode": "IN",
                "Address1": data.Address1,
                "ZipCode": data.ZipCode,
                "IsLogicallyDeleted": false,
                "State": data.State,
                "DeliveryLocalityLongitude": data.DeliveryLocalityLongitude,
                "showDefaultButton": data.showDefaultButton,
                "Consignee": null,
                "isPrimary": true,
                "Country": "India",
                "Mobile": data.Mobile,
                "IsprimaryBilling": data.IsprimaryBilling,
                "LastName": data.LastName,
                "Company": null,
                "isBillingAddress": data.isBillingAddress,
                "Title": null
            };
            localStorage.setItem("pincodevalue", data.ZipCode);
            localStorage.setItem("sublocalityvalue", data?.City);
            external_js_cookie_default().set("pincodevalue", data.ZipCode, {
                expires: 15
            });
            external_js_cookie_default().set("sublocalityvalue", data?.City, {
                expires: 15
            });
            external_js_cookie_default().remove("enteredCode");
            external_js_cookie_default().remove("isLocationNotSelected");
            setLocationUpdateFlag(true);
            checkout/* default */.Z.postUpdatedAddress(requestBody).then((resp)=>{
                fetchCustomerAddresses();
                localStorage.removeItem("productDeliveryData");
                fetchCourierServiceAvailability(data?.ZipCode);
            }).catch((err)=>{
                console.log("Error in update address API:", err);
            });
        }
    };
    const handlePincodeChange = (event)=>{
        const inputPincode = event.target.value;
        const truncatedPincode = inputPincode.slice(0, 6);
        setSelectedPincode(truncatedPincode);
    };
    const applyNewPincode = async ()=>{
        const pincodePattern = /^\d{6}$/;
        const isValid = pincodePattern.test(selectedPincode);
        setIsValidPincode(isValid);
        if (isValid) {
            setIsLoading(true);
            const productName = router.query.productName;
            let productDetails = {};
            await productdetail/* default */.Z.getSkuv(productName, selectedPincode).then((response)=>{
                productDetails = response?.skusModelMultivariant[0];
            }).catch((err)=>console.log("Error in product API::", err));
            if (!productDetails?.IsDeliveryAvailableToPinCode) {
                setIsProductNotAvailable(true);
                setIsLoading(false);
            } else if (productDetails?.IsDeliveryAvailableToPinCode) {
                fetchCourierServiceAvailability(selectedPincode, "changeAddress");
            }
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            isLoading && /*#__PURE__*/ jsx_runtime.jsx(LogoLoader/* default */.Z, {
                isGlobal: true
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "d-flex flex-column address-list-container",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "mb-3",
                        style: {
                            fontSize: "16px",
                            color: "#000",
                            fontWeight: "600"
                        },
                        children: "Select Delivery Address"
                    }),
                    allAddressList?.length > 0 ? /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "address-container",
                        children: allAddressList.map((item, index)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "addressList-box",
                                onClick: ()=>handleAddressChange(item.CustomerAddressId, item),
                                children: /*#__PURE__*/ jsx_runtime.jsx((Form_default()).Check, {
                                    type: "radio",
                                    label: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("strong", {
                                                        children: [
                                                            item?.FirstName,
                                                            " ",
                                                            item?.LastName
                                                        ]
                                                    }),
                                                    ", ",
                                                    item?.ZipCode,
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        className: "address-type",
                                                        children: item?.AddressTypeName?.split(" ")?.[0]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                children: item?.Address2
                                            })
                                        ]
                                    }),
                                    checked: external_js_cookie_default().get("enteredCode") || external_js_cookie_default().get("isLocationNotSelected") ? false : selectedAddress === index
                                })
                            }, `addressList ${index}`))
                    }) : !isUserLogin ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "loginOnchangepdp",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("img", {
                                src: "/images/loginonpdp.png",
                                alt: "",
                                width: "50px",
                                height: "50px"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        style: {
                                            color: "#000000"
                                        },
                                        children: "Login to see your Addresses"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: "/login",
                                        className: "mb-2",
                                        id: "btnLoginchangeonpdp",
                                        onClick: ()=>localStorage.setItem("lastVisitedUrl", router.asPath),
                                        children: "Log in"
                                    })
                                ]
                            })
                        ]
                    }) : addressList?.length === 0 && /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "notFound-address",
                        children: "No addresses found"
                    }),
                    (allAddressList?.length > 0 || isUserLogin) && /*#__PURE__*/ jsx_runtime.jsx("span", {
                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: "/account/manageaddress",
                            children: "Add an address"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "d-flex align-items-baseline",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "pincode-line",
                                style: {
                                    marginRight: "10px"
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "pincode-text",
                                style: {
                                    color: "#000",
                                    fontWeight: "600"
                                },
                                children: "Use pincode to check delivery info"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "pincode-line",
                                style: {
                                    marginLeft: "10px"
                                }
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "d-flex mt-2",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("input", {
                                type: "number",
                                id: "txtSearchDeliveryLocality",
                                className: "form-control mr-2",
                                placeholder: "Enter a Pincode",
                                value: selectedPincode ? selectedPincode : "",
                                onChange: handlePincodeChange
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx((Button_default()), {
                                type: "button",
                                variant: "dark",
                                style: {
                                    boxShadow: "none"
                                },
                                active: true,
                                onClick: applyNewPincode,
                                disabled: loading,
                                children: "Apply"
                            })
                        ]
                    }),
                    !isValidPincode && /*#__PURE__*/ jsx_runtime.jsx("p", {
                        style: {
                            color: "red",
                            marginBottom: 0
                        },
                        children: "Invalid pincode, Please enter a valid pincode."
                    }),
                    (isProductNotAvailable || pinCodeCheck) && /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                        style: {
                            color: "red",
                            marginBottom: 0
                        },
                        children: [
                            "Currently out of stock for ",
                            selectedPincode,
                            "."
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_SelectDeliveryLocation = (SelectDeliveryLocation);

;// CONCATENATED MODULE: ./src/containers/LocationPopup/index.js
/* eslint-disable jsx-a11y/anchor-has-content */ /* eslint-disable jsx-a11y/no-noninteractive-element-interactions */ /* eslint-disable react/prop-types */ /* eslint-disable jsx-a11y/click-events-have-key-events */ /**
 *
 * LocationPopup
 *
 */ // import PropTypes from 'prop-types';



// import { toast, ToastContainer } from 'react-toastify';
// import { compose } from 'redux';
// import { createStructuredSelector } from 'reselect';












//import DealdayProductOriginal from '../DealdayProductOriginal';
//import ToppSellingOriginal from '../ToppSellingOriginal';
// import { makeSelectLocationuser } from './selectors';
// import from 'react-router-dom';
function LocationPopup(props) {
    const { input } = props;
    // const { popup } = props
    (0,injectReducer/* useInjectReducer */.v)({
        key: "locationPopup",
        reducer: reducer
    });
    (0,injectSaga/* useInjectSaga */.h)({
        key: "locationPopup",
        saga: locationPopupSaga
    });
    const [enblesuggestion, setenblesuggestion] = (0,external_react_.useState)(false);
    const [atosuggestdadta, setatosuggestdadta] = (0,external_react_.useState)([]);
    const [locationname, setlocationname] = (0,external_react_.useState)("");
    const [Autolist, setAutolist] = (0,external_react_.useState)("");
    const [current, setcurrent] = (0,external_react_.useState)(false);
    const [auto, setauto] = (0,external_react_.useState)(false);
    const [lat, setlat] = (0,external_react_.useState)(false);
    const [long, setlong] = (0,external_react_.useState)(false);
    const [address, setAddress] = (0,external_react_.useState)("");
    const [pincode, setPincode] = (0,external_react_.useState)("");
    const [locationupdate, setLocationUpdate] = (0,external_react_.useState)(false);
    const [locationmsg, setLocationmsg] = (0,external_react_.useState)("");
    const [locationstatus, setLocationstatus] = (0,external_react_.useState)(false);
    const [warnstatus, setWarnstatus] = (0,external_react_.useState)(false);
    const [Homerefresh, setHomerefresh] = (0,external_react_.useState)(false);
    const [locationBlock, setlocationBlock] = (0,external_react_.useState)(false);
    const locationPopupState = (0,external_react_redux_.useSelector)((state)=>state.locationPopup);
    const { selectedLocationZip, setSelectedLocationZip, selectedLocationName, setSelectedLocationName, setLocationUpdateFlag } = (0,external_react_.useContext)(context/* Message_data */.L);
    (0,external_react_.useEffect)(()=>{
    // if (locationPopupState !== undefined) {
    //   if (locationPopupState.avilabiltymsg === 'NotAvailable') {
    //     alert('We are currently operational in Pune (selected locations). We are working on it and hang tight, we will serve you very soon!')
    //   }
    // }
    // dispatch(changed(locationname, atosuggestdadta));
    }, [
        auto
    ]);
    (0,external_react_.useEffect)(()=>{
        Locationapi/* default */.Z.GoogleApi({}).then((response)=>{
            setatosuggestdadta(response);
        }).catch((error)=>{
            console.log("error:::", error);
        });
    }, []);
    (0,external_react_.useEffect)(()=>{
        dispatch((0,actions/* changed */.fq)(locationname, atosuggestdadta));
    }, [
        auto
    ]);
    const dispatch = (0,external_react_redux_.useDispatch)();
    const autosuggestloaction = (e)=>{
        setauto(true);
        //setlocationname(document.getElementById('txtSearchDeliveryLocality').value)
        setlocationname(e.target.value);
        // dispatch(changed(e.target.value, atosuggestdadta));
        const token = localStorage.getItem("generatedtoken") || external_js_cookie_default().get("accessToken");
        setTimeout(()=>fetch(`${constants/* default */.ZP.urls.baseUrl}${constants/* default */.ZP.endPoints.autocomplete}key=${atosuggestdadta.GooglePlacesApiKey}&keyword=${e.target.value}`, {
                method: "POST",
                mode: "cors",
                headers: {
                    accept: "application/json",
                    // accept: 'application/json',
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            }).then((res)=>res.text()).then((addressresponse)=>{
                const responsew = JSON.parse(addressresponse);
                setAutolist(responsew.predictions);
                setenblesuggestion(true);
            }), 2000);
    };
    // const URL = "https://meowfacts.herokuapp.com/"
    // async function getCatFact() {
    //   const response = await fetch(URL)
    //   console.log(await response.json())
    // }
    // useEffect(() => {
    //   getCatFact()
    // }, [])
    const findAndSetAddress = (detectMyLocationData, keyToConsider = "sublocality")=>{
        let jsonParseRes = JSON.parse(detectMyLocationData);
        let resIndex = [];
        let addCompIndex = [];
        let typIndex = [];
        // console.log("is it Array",Array.isArray(detectMyLocationData.results));
        if (jsonParseRes.results && jsonParseRes.results.length > 0) {
            jsonParseRes.results.map((result, resultIndex)=>{
                if (resIndex.length > 0) return;
                result.address_components.map((addressComponentItem, addressComponentIndex)=>{
                    if (addCompIndex.length > 0) return;
                    if (addressComponentItem.types && addressComponentItem.types.length > 0) {
                        addressComponentItem.types.map((type, typeIndex)=>{
                            if (typIndex.length > 0) return;
                            if (type == keyToConsider) {
                                // findRightAddressComponentIndex.push(resultIndex)
                                resIndex.push(resultIndex);
                                typIndex.push(typeIndex);
                                addCompIndex.push(addressComponentIndex);
                            }
                        });
                    }
                });
            });
        }
        if (resIndex.length > 0 && typIndex.length > 0 && addCompIndex.length > 0) {
            return [
                jsonParseRes.results[resIndex].address_components[addCompIndex]
            ];
        } else {
            return [
                {
                    "long_name": "",
                    "short_name": "",
                    "types": [
                        keyToConsider
                    ]
                }
            ];
        }
    };
    const findAndSetAddressOnLocationSelect = (addressToConsiderObj, keyToConsider = "sublocality")=>{
        const defaultValue = [
            {
                "long_name": "",
                "short_name": "",
                "types": [
                    keyToConsider
                ]
            }
        ];
        if (addressToConsiderObj === null || addressToConsiderObj === undefined || addressToConsiderObj === "") {
            return defaultValue;
        }
        let foundIndex = [];
        addressToConsiderObj.address_components.map((address, parentIndex)=>{
            if (foundIndex.length > 0) return;
            address.types.map((type)=>{
                if (foundIndex.length > 0) return;
                if (type == keyToConsider) {
                    foundIndex.push(parentIndex);
                }
            });
        });
        if (foundIndex.length == 0) {
            return defaultValue;
        } else {
            return [
                addressToConsiderObj.address_components[foundIndex]
            ];
        }
    };
    (0,external_react_.useEffect)(()=>{
        if (current) {
        // dispatch(detectCurrentlocation(lat, long, atosuggestdadta))
        }
    }, [
        current,
        lat,
        long
    ]);
    const detectmylocation = ()=>{
        const error = ()=>{
            setlocationBlock(true);
        };
        const success = async (position)=>{
            setlat(position.coords.latitude);
            setlong(position.coords.longitude);
            setcurrent(true);
            let keyForGoogleAPI = "";
            if (atosuggestdadta && atosuggestdadta.GooglePlacesApiKey) {
                keyForGoogleAPI = atosuggestdadta.GooglePlacesApiKey;
            } else {
                await Locationapi/* default */.Z.GoogleApi({}).then((response)=>{
                    keyForGoogleAPI = response.GooglePlacesApiKey;
                });
            }
            return fetch(`${constants/* default */.ZP.endPoints.geocode}key=${keyForGoogleAPI}&latlng=${position.coords.latitude},${position.coords.longitude}&sensor=${true}`, {
                method: "GET",
                headers: {
                    accept: "application/json"
                }
            }).then((res)=>res.text()).then((addressresponse)=>{
                const token = localStorage.getItem("generatedtoken") || external_js_cookie_default().get("accessToken");
                let tempCity = "";
                let address2 = "";
                let pincode2 = "";
                let city = "";
                //  console.log("findAndSetAddress()",findAndSetAddress(addressresponse)) ;
                if (JSON.parse(addressresponse).results && JSON.parse(addressresponse).results[0]) {
                    // console.log("inside exec findAndSetAddress(addressresponse)",findAndSetAddress(addressresponse));
                    // address2 = JSON.parse(addressresponse).results[0].address_components.filter(x => x.types[1] === 'sublocality')
                    address2 = findAndSetAddress(addressresponse, "sublocality");
                    pincode2 = findAndSetAddress(addressresponse, "postal_code");
                    // JSON.parse(addressresponse).results[0].address_components.filter(x => x.types[0] === 'postal_code')
                    city = findAndSetAddress(addressresponse, "locality");
                    // JSON.parse(addressresponse).results[0].address_components.filter(x => x.types[0] === 'locality')
                    if (city && city[0] && city[0].long_name) {
                        tempCity = city;
                    } else {
                        tempCity = findAndSetAddress(addressresponse, "locality");
                        // JSON.parse(addressresponse).results[1].address_components.filter(x => x.types[0] === 'locality')
                        if (tempCity && tempCity[0] && tempCity[0].long_name) {
                        // do nothing
                        } else {
                            tempCity = findAndSetAddress(addressresponse, "locality");
                            // JSON.parse(addressresponse).results[2].address_components.filter(x => x.types[0] === 'locality')
                            if (tempCity && tempCity[0] && tempCity[0].long_name) {
                            // do nothing
                            } else {
                                tempCity = findAndSetAddress(addressresponse, "locality");
                            // JSON.parse(addressresponse).results[3].address_components.filter(x => x.types[0] === 'locality')
                            }
                        }
                    }
                } else {
                    // address2 = findAndSetAddress(addressresponse,"sublocality")
                    let addressRes = JSON.parse(addressresponse)?.results;
                    if (addressRes?.address_components && addressRes?.address_components.length > 0) {
                        address2 = findAndSetAddressOnLocationSelect(addressRes, "sublocality");
                        // pincode2 = findAndSetAddress(addressresponse,"postal_code")
                        pincode2 = findAndSetAddressOnLocationSelect(addressRes, "postal_code");
                        // JSON.parse(addressresponse).results.address_components.filter(x => x.types[0] === 'postal_code')
                        // city = findAndSetAddress(addressresponse,"locality")
                        city = findAndSetAddressOnLocationSelect(addressRes, "locality");
                        // city = JSON.parse(addressresponse).results.address_components.filter(x => x.types[0] === 'locality')
                        tempCity = city;
                    }
                }
                const state = findAndSetAddress(addressresponse, "administrative_area_level_1");
                // JSON.parse(addressresponse).results[0].address_components.filter(x => x.types[0] === 'administrative_area_level_1')
                const area = findAndSetAddress(addressresponse, "sublocality");
                return fetch(`${constants/* default */.ZP.endPoints.checkserviceavailability}setsession=true&address=${address2[0].long_name}&area=${area[0].long_name}&city=${tempCity}&lat=${position.coords.latitude}&lng=${position.coords.longitude}&pincode=${pincode2[0].long_name}&placeid=${JSON.parse(addressresponse).results[0].place_id}&state=${state[0].long_name}`, {
                    method: "GET",
                    headers: {
                        accept: "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }).then((res)=>res.json()).then((response)=>{
                    // toast(response)
                    if (response == "Available") {
                        setPincode(pincode2[0].long_name) //Fix This when Luthania
                        ;
                        localStorage.setItem("sublocalityvalue", city[0].long_name);
                        localStorage.setItem("pincodevalue", pincode2[0].long_name);
                        external_js_cookie_default().set("sublocalityvalue", city[0].long_name, {
                            expires: 15
                        });
                        external_js_cookie_default().set("pincodevalue", pincode2[0].long_name, {
                            expires: 15
                        });
                        external_js_cookie_default().set("enteredCode", pincode2[0].long_name, {
                            expires: 15
                        });
                        setSelectedLocationZip(pincode2[0].long_name);
                        setSelectedLocationName(city[0].long_name);
                        setAddress(city[0].long_name);
                        setLocationstatus(true);
                        setLocationmsg("Delivery location is updated ");
                        setHomerefresh(true);
                        setTimeout(()=>{
                            props.fetchToggle();
                        }, 3000);
                        // toast('Delivery location is updated ')
                        setLocationUpdate(true);
                        external_js_cookie_default().set("LocationPopupMsg", "true");
                    } else {
                        setWarnstatus(true);
                        setLocationmsg(`We are currently operational in Pune (selected locations). We're working on it and hang tight, we will serve you very soon!`);
                        setTimeout(()=>{
                            setlocationname("");
                            props.fetchToggle();
                        }, 3000);
                    // toast(`We are currently operational in Pune (selected locations). We're working on it and hang tight, we will serve you very soon!`)
                    }
                });
            });
        };
        // navigator.geolocation.getCurrentPosition(success, error)
        navigator.geolocation.getCurrentPosition(success, error, {
            timeout: 10000
        });
    // setlat(position.coords.latitude)
    // setlong(position.coords.longitude)
    // setcurrent(true)
    // return fetch(`${Constants.endPoints.geocode}key=${atosuggestdadta.GooglePlacesApiKey}&latlng=${position.coords.latitude},${position.coords.longitude}&sensor=${true}`, {
    //   method: 'GET',
    //   headers: {
    //     accept: 'application/json',
    //     // 'Content-Type': 'application/json',
    //     // Authorization: `Bearer ${token}`,
    //   },
    //   // body: JSON.stringify(form)
    // })
    //   .then(res => res.text())
    //   .then(addressresponse => {
    //     const token = localStorage.getItem('generatedtoken');
    //     console.log('registerresponse', addressresponse)
    //     const address2 = JSON.parse(addressresponse).results[0].address_components.filter(x => x.types[1] === 'sublocality')
    //     const pincode2 = JSON.parse(addressresponse).results[0].address_components.filter(x => x.types[0] === 'postal_code')
    //     const city = JSON.parse(addressresponse).results[0].address_components.filter(x => x.types[0] === 'locality')
    //     const state = JSON.parse(addressresponse).results[0].address_components.filter(x => x.types[0] === 'administrative_area_level_1')
    //     const area = JSON.parse(addressresponse).results[0].address_components.filter(x => x.types[1] === 'sublocality')
    //     console.log({ address2, pincode2, city });
    //     setPincode(pincode2[0].long_name)
    //     localStorage.setItem('pincodevalue',pincode2[0].long_name)
    //     setAddress(address2[0].long_name)
    //     return fetch(`${Constants.endPoints.checkserviceavailability}setsession=true&address=${address2[0].long_name}&area=${area[0].long_name}&city=${city[0].long_name}&lat=${position.coords.latitude}&lng=${position.coords.longitude}&pincode=${pincode2[0].long_name}&placeid=${JSON.parse(addressresponse).results[0].place_id}&state=${state[0].long_name}`, {
    //       method: 'GET',
    //       headers: {
    //         accept: 'application/json',
    //         Authorization: `Bearer ${token}`,
    //       },
    //     })
    //       .then(res => res.text())
    //       .then(response => {
    //         // toast(response)
    //         // console.log('DD', response)
    //         if (response !== "NotAvailable") {
    //           setLocationstatus(true)
    //           setLocationmsg('Delivery location is updated ')
    //           setHomerefresh(true)
    //           setTimeout(() => {
    //             props.fetchToggle()
    //           }, 3000);
    //           // toast('Delivery location is updated ')
    //           setLocationUpdate(true)
    //         } else {
    //           setWarnstatus(true)
    //           setLocationmsg(`We are currently operational in Pune (selected locations). We're working on it and hang tight, we will serve you very soon!`)
    //           setTimeout(() => {
    //             setlocationname('')
    //             props.fetchToggle()
    //           }, 3000);
    //           // toast(`We are currently operational in Pune (selected locations). We're working on it and hang tight, we will serve you very soon!`)
    //         }
    //       });
    //   })
    // Your Code
    // ( DO fetch call to get address from lat and lng
    // https://maps.googleapis.com/maps/api/geocode/json?key= 
    // <\API_KEY_HERE>&latlng="latitude","longitude"&sensor=true )
    // (error) => this.setState({ error: error.message }),
    // { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    // alert('location block')
    };
    // useEffect(() => {
    //   if (locationPopupState !== undefined) {
    //     setAutolist(locationPopupState.predictlist)
    //   }
    // }) // const Autolist = locationPopupState.predictlist
    function checkservice(description, selectedatavalue, placeid) {
        setlocationBlock(false);
        setlocationname(description);
        // setenteredvalue(selectedatavalue)
        const token = localStorage.getItem("generatedtoken") || external_js_cookie_default().get("accessToken");
        // setenblesuggestion(false)
        // dispatch(checkserviceavailability(description, placeid, atosuggestdadta))
        return fetch(`${constants/* default */.ZP.urls.baseUrl}${constants/* default */.ZP.endPoints.placedetails}key=${atosuggestdadta.GooglePlacesApiKey}&placeId=${placeid}`, {
            method: "POST",
            headers: {
                accept: "application/json",
                // 'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        }).then((res)=>res.text()).then((addressresponse)=>{
            const responsew = JSON.parse(addressresponse);
            if (responsew && responsew.status != "NOT_FOUND" && responsew.result != null) {
                return fetch(`${constants/* default */.ZP.endPoints.geocode}key=${atosuggestdadta.GooglePlacesApiKey}&latlng=${responsew.result.geometry.location.lat},${responsew.result.geometry.location.lng}&sensor=${true}`, {
                    method: "GET",
                    headers: {
                        accept: "text/plain"
                    }
                }).then((res)=>res.text()).then((resaa)=>{
                    const check = JSON.parse(resaa);
                    // below code added to check if response address has zipcode or not
                    const responseAddressList = check.results;
                    let addressToConsider = "";
                    for(let i = 0; i < responseAddressList.length; i += 1){
                        const formatAddressText = responseAddressList[i].formatted_address;
                        if (/(\d{6})/.test(formatAddressText)) {
                            addressToConsider = responseAddressList[i];
                            break;
                        }
                    }
                    if (addressToConsider == "") {
                        setWarnstatus(true);
                        setLocationmsg(`Address not found! Please search again`);
                        setTimeout(()=>{
                            setlocationname("");
                            props.fetchToggle();
                        }, 500);
                        return;
                    }
                    // let newPinCode = "";
                    const address1 = findAndSetAddressOnLocationSelect(addressToConsider, "sublocality");
                    // const address1 = addressToConsider.address_components.filter(x => x.types[1] === 'sublocality') //fix this
                    const pincode1 = findAndSetAddressOnLocationSelect(addressToConsider, "postal_code");
                    let city = findAndSetAddressOnLocationSelect(addressToConsider, "locality");
                    if (city == "" || city == undefined) city = "";
                    if (city && city !== "Pune") {
                        city = findAndSetAddressOnLocationSelect(addressToConsider, "administrative_area_level_3");
                    }
                    const state = findAndSetAddressOnLocationSelect(addressToConsider, "administrative_area_level_1");
                    const area = findAndSetAddressOnLocationSelect(addressToConsider, "sublocality") //Fix this
                    ;
                    setPincode(pincode1[0].long_name);
                    if (address1.length > 0 && pincode1.length > 0 && area.length > 0 && state.length > 0 && city[0].long_name === "Pune") {
                        console.log("values stored in local and cookies");
                    }
                    if (address1.length > 0 && pincode1.length > 0 && area.length > 0 && state.length > 0) {
                    // do nothing 
                    } else {
                        setWarnstatus(true);
                        setLocationmsg(`Address not found! Please search again`);
                        setTimeout(()=>{
                            setlocationname("");
                            props.fetchToggle();
                        }, 500);
                    }
                    // console.log("Futurism@@@",`${Constants.endPoints.checkserviceavailability}setsession=true&address=${address1[0].long_name}&area=${area[0].long_name}&city=${city[0].long_name}&lat=${responsew.result.geometry.location.lat}&lng=${responsew.result.geometry.location.lng}&pincode=${pincode1[0].long_name}&placeid=${JSON.parse(resaa).results[0].place_id}&state=${state[0].long_name}`);
                    if (city && city[0] && city[0].long_name && city[0].long_name !== "" && city[0].long_name === "Pune") {
                        return fetch(`${constants/* default */.ZP.endPoints.checkserviceavailability}setsession=true&address=${address1[0].long_name}&area=${area[0].long_name}&city=${city[0].long_name}&lat=${responsew.result.geometry.location.lat}&lng=${responsew.result.geometry.location.lng}&pincode=${pincode1[0].long_name}&placeid=${JSON.parse(resaa).results[0].place_id}&state=${state[0].long_name}`, {
                            method: "GET",
                            // mode: 'cors',
                            headers: {
                                accept: "application/json",
                                // 'Content-Type': 'application/json',
                                Authorization: `Bearer ${token}`
                            }
                        }).then((res)=>res.json()).then((response)=>{
                            // toast(response)
                            const msg = response;
                            if (msg === "Available") {
                                localStorage.setItem("sublocalityvalue", city[0].long_name);
                                localStorage.setItem("pincodevalue", pincode1[0].long_name);
                                external_js_cookie_default().set("sublocalityvalue", city[0].long_name, {
                                    expires: 15
                                });
                                external_js_cookie_default().set("pincodevalue", pincode1[0].long_name, {
                                    expires: 15
                                });
                                external_js_cookie_default().set("enteredCode", pincode1[0].long_name, {
                                    expires: 15
                                });
                                setSelectedLocationZip(pincode1[0].long_name);
                                setSelectedLocationName(city[0].long_name);
                                setAddress(address1[0].long_name);
                                setLocationstatus(true);
                                setLocationmsg("Delivery location is updated ");
                                setHomerefresh(true);
                                setTimeout(()=>{
                                    props.fetchToggle();
                                }, 3000);
                                // toast('Delivery location is updated ')
                                setLocationUpdate(true);
                                external_js_cookie_default().set("LocationPopupMsg", "true");
                            } else {
                                setWarnstatus(true);
                                setLocationmsg(`We are currently operational in Pune (selected locations). We're working on it and hang tight, we will serve you very soon!`);
                                setTimeout(()=>{
                                    setlocationname("");
                                    props.fetchToggle();
                                }, 3000);
                            // toast(`We are currently operational in Pune (selected locations). We're working on it and hang tight, we will serve you very soon!`)
                            }
                        // if (response === "Available") {
                        //   toast('Delivery location is updated and Avialable')
                        // }
                        // else {
                        //   toast('Delivery location is updated and not Avialable')
                        // }
                        });
                    }
                    setWarnstatus(true);
                    console.log("values stored in local and cookies22");
                    setLocationmsg(`We are currently operational in Pune (selected locations). We're working on it and hang tight, we will serve you very soon!`);
                    setTimeout(()=>{
                        setlocationname("");
                        props.fetchToggle();
                    }, 3000);
                    return null;
                // });
                // const responsew = JSON.parse(addressresponse)
                // setAutolist(responsew.predictions)
                // setenblesuggestion(true)
                });
            } else {
                setWarnstatus(true);
                setLocationmsg(`We are currently operational in Pune (selected locations). We're working on it and hang tight, we will serve you very soon!`);
                setTimeout(()=>{
                    setlocationname("");
                    props.fetchToggle();
                }, 500);
            }
        // const responsew = JSON.parse(addressresponse)
        // setAutolist(responsew.predictions)
        // setenblesuggestion(true)
        });
    }
    (0,external_react_.useEffect)(()=>{
        if (locationupdate) {
            dispatch((0,actions/* getlocationtitle */.ym)(address, pincode, locationupdate));
        }
    }, [
        address,
        pincode,
        locationupdate
    ]);
    const closemsg = ()=>{
        // detectmylocation()
        setLocationstatus(false);
        props.fetchToggle();
    };
    const handleModalClose = ()=>{
        props.fetchToggle();
        if (!external_js_cookie_default().get("LocationPopupMsg")) {
            external_js_cookie_default().set("isLocationNotSelected", "true", {
                expires: 15
            });
        }
        external_js_cookie_default().set("LocationPopupMsg", "true", {
            expires: 15
        });
    };
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            children: [
                locationstatus && /*#__PURE__*/ jsx_runtime.jsx(success/* default */.Z, {
                    msg: locationmsg,
                    close: closemsg
                }),
                warnstatus && /*#__PURE__*/ jsx_runtime.jsx(warn/* default */.Z, {
                    msg: locationmsg,
                    close: closemsg
                }),
                props?.isOutsideLocation && /*#__PURE__*/ jsx_runtime.jsx(warn/* default */.Z, {
                    msg: props.locationMessage,
                    close: closemsg
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "togglecityoverlay",
                    style: {
                        position: "fixed"
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "togglecitydrop",
                        style: {
                            display: "block"
                        },
                        children: [
                            props.isProductPage && /*#__PURE__*/ jsx_runtime.jsx(components_SelectDeliveryLocation, {
                                addressList: props.addressList,
                                fetchCustomerAddresses: props.fetchCustomerAddresses,
                                fetchCourierServiceAvailability: props.fetchCourierServiceAvailability,
                                fetchToggle: props.fetchToggle,
                                isUserLogin: props.isUserLogin,
                                loading: props.loading,
                                pinCodeCheck: props.pinCodeCheck,
                                setLocationMessage: props.setLocationMessage,
                                setIsOutsideLocation: props.setIsOutsideLocation
                            }),
                            !props.isProductPage && /*#__PURE__*/ jsx_runtime.jsx("span", {
                                id: "span",
                                children: /*#__PURE__*/ jsx_runtime.jsx("b", {
                                    children: "Please select your delivery locality"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("strong", {
                                className: "cross-button",
                                onClick: handleModalClose,
                                children: "\xd7"
                            }),
                            !props.isProductPage && /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                                action: "#",
                                autoComplete: "off",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "form-row mt-10",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "form-group col-12",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        id: "divSearchDeliveryLocality",
                                                        className: "input-group",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                id: "inputdiv",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                                    type: "text",
                                                                    id: "txtSearchDeliveryLocality",
                                                                    className: "form-control",
                                                                    placeholder: "Search Delivery Locality",
                                                                    onChange: (e)=>autosuggestloaction(e),
                                                                    value: locationname
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "input-group-append",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                        className: "btn-group",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                                                            type: "button",
                                                                            id: "btnUseMyLocation",
                                                                            className: "btn btn-default input-group-btn",
                                                                            onClick: ()=>detectmylocation(),
                                                                            style: {
                                                                                backgroundColor: "green",
                                                                                color: "white",
                                                                                fontSize: "14px"
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                    className: "fa fa-map-marker"
                                                                                }),
                                                                                " Detect My Location ",
                                                                                /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                    id: "icnMyLocationSpinner",
                                                                                    className: "fa fa-spinner fa-spin",
                                                                                    style: {
                                                                                        display: "none"
                                                                                    }
                                                                                })
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("br", {})
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    enblesuggestion ? /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        id: "divDeliveryLocalitySuggestions",
                                                        style: {
                                                            position: "absolute",
                                                            zIndex: "999",
                                                            width: "280px"
                                                        },
                                                        children: (Autolist || []).map((data)=>/*#__PURE__*/ jsx_runtime.jsx("ul", {
                                                                className: "list-group",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                    className: "list-group-item delivery-autocomplete-div",
                                                                    onClick: ()=>checkservice(data.description, data, data.place_id),
                                                                    children: data.description
                                                                })
                                                            }))
                                                    }) : null
                                                ]
                                            }),
                                            locationBlock && /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                style: {
                                                    color: "red"
                                                },
                                                children: "Sorry! Geo Location is not supported on your current browser! Please check your browser settings."
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {})
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        id: "HeaderNoteAlert"
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
} // function mapDispatchToProps() {
 //   return {
 //     // loaddeafault: evt => dispatch(defaultAction(evt))
 //   };
 // }


/***/ }),

/***/ 6106:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _App_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1824);
/* harmony import */ var _apiServices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4287);
/* harmony import */ var _homeServices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4171);



function getAIautosuggestlist(todoserach) {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.AIAutosuggestion}clientId=${_homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.ClientId}&pincode=${_homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.pincode}&q=${todoserach}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "POST");
}
function getDBautosuggestlist(todoserach) {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.DBAutosuggestion}clientId=${_homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.ClientId}&LanguageId=${_homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.languageId}&pincode=${localStorage.getItem("pincodevalue") && localStorage.getItem("pincodevalue") !== "" ? localStorage.getItem("pincodevalue") : _homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.pincode}&q=${todoserach}&sellerid=${localStorage.getItem("sellerID") || _homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.defaultSellerID}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "GET");
}
function getsearchlist(NAME, Id, Fordfildid, staticfilterid, min, max, sortby) {
    // const url = `${Constants.urls.baseUrl}${Constants.endPoints.skusearchlist}clientId=${ConstantsValues.ClientId}&CatUrl=${NAME}&LanguageId=${ConstantsValues.languageId}&currencyCode=${'2'}&CustGUID=${(localStorage.getItem('CustGUID') === null || localStorage.getItem('CustGUID') === undefined) ? ConstantsValues.defaultCustGUID : window.atob(localStorage.getItem('CustGUID'))}&CartGUID=${(localStorage.getItem('CartGUID') === null || localStorage.getItem('CartGUID') === undefined) ? ConstantsValues.defaultCartGUID : window.atob(localStorage.getItem('CartGUID'))}&minPrice=&maxPrice=&filterval=&applicationids=&industriesids=&pageNo=&limit=${'40'}&sortby=&IsFeatured=&pincode=&requestfrom=&formfieldId=&IsAIAPIDown=&requestfrom=`;
    let url;
    if (Id === "" && Fordfildid === "") {
        url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.skusearchlist}CurrencyCode=${_homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.currencyCode}&IsFeatured=0&clientId=${_homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.ClientId}&custGUID=${localStorage.getItem("CustGUID") === null || localStorage.getItem("CustGUID") === undefined ? _homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.defaultCustGUID : window.atob(localStorage.getItem("CustGUID"))}&fixedShippingDurationId=0&languageId=${_homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.languageId}&limit=1000&sortby=${sortby}&pageNo=1&cartGuid=${localStorage.getItem("CartGUID") === null || localStorage.getItem("CartGUID") === undefined ? _homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.defaultCartGUID : window.atob(localStorage.getItem("CartGUID"))}&catUrl=${NAME}&formfieldId=${Fordfildid}&filterval=${Id}&staticfilterid=${staticfilterid}&maxPrice=${max}&minPrice=${min}&pincode=${_homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.pincode}&sellerid=${localStorage.getItem("sellerID") || _homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.defaultSellerID}`;
    } else if (Id !== "" && Fordfildid !== "" && staticfilterid !== "") {
        url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.skusearchlist}CurrencyCode=${_homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.currencyCode}&IsFeatured=0&clientId=${_homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.ClientId}&custGUID=${localStorage.getItem("CustGUID") === null || localStorage.getItem("CustGUID") === undefined ? _homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.defaultCustGUID : window.atob(localStorage.getItem("CustGUID"))}&fixedShippingDurationId=0&languageId=${_homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.languageId}&limit=1000&sortby=${sortby}&pageNo=1&cartGuid=${localStorage.getItem("CartGUID") === null || localStorage.getItem("CartGUID") === undefined ? _homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.defaultCartGUID : window.atob(localStorage.getItem("CartGUID"))}&catUrl=${NAME}&formfieldId=${Fordfildid}&filterval=${Id}&staticfilterid=${staticfilterid}&maxPrice=${max}&minPrice=${min}&pincode=${_homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.pincode}&sellerid=${localStorage.getItem("sellerID") || _homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.defaultSellerID}`;
    } else {
        url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.skusearchlist}CurrencyCode=${_homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.currencyCode}&IsFeatured=0&clientId=${_homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.ClientId}&custGUID=${localStorage.getItem("CustGUID") === null || localStorage.getItem("CustGUID") === undefined ? _homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.defaultCustGUID : window.atob(localStorage.getItem("CustGUID"))}&fixedShippingDurationId=0&languageId=${_homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.languageId}&limit=1000&sortby=${sortby}&pageNo=1&cartGuid=${localStorage.getItem("CartGUID") === null || localStorage.getItem("CartGUID") === undefined ? _homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.defaultCartGUID : window.atob(localStorage.getItem("CartGUID"))}&catUrl=${NAME}&formfieldId=${Fordfildid}&filterval=${Id}&maxPrice=${max}&minPrice=${min}&pincode=${_homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.pincode}&sellerid=${localStorage.getItem("sellerID") || _homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.defaultSellerID}`;
    }
    // const url = `${Constants.urls.baseUrl}${Constants.endPoints.skusearchlist}CurrencyCode=${ConstantsValues.currencyCode}&cartGuid=${(localStorage.getItem('CartGUID') === null || localStorage.getItem('CartGUID') === undefined) ? ConstantsValues.defaultCartGUID : window.atob(localStorage.getItem('CartGUID'))}&catUrl=${NAME}&clientId=1&custGUID=${(localStorage.getItem('CustGUID') === null || localStorage.getItem('CustGUID') === undefined) ? ConstantsValues.defaultCustGUID : window.atob(localStorage.getItem('CustGUID'))}&fixedShippingDurationId=0&languageId=2&limit=40`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "GET");
}
function getCRMTrackSearch(SearchItem, IPAddress, currentDate, genrateToken) {
    console.log("CRM deatils===", SearchItem, IPAddress, localStorage.getItem("CustGUID"));
    if (localStorage.getItem("CustGUID") !== null && localStorage.getItem("CustGUID") !== undefined) {
        if ("00000000-0000-0000-0000-000000000000" === localStorage.getItem("CustGUID")) {
            var UserType = "Visitor";
        } else {
            var UserType = "RegisteredUser";
        }
    }
    console.log("UserType=", UserType);
    if (localStorage.getItem("Email") !== "null" && localStorage.getItem("Email") !== undefined && localStorage.getItem("Email") !== "") {
        var UserName = localStorage.getItem("Email");
        console.log("UserName=", UserName);
    } else if (localStorage.getItem("UserLastPhone") !== "null" && localStorage.getItem("UserLastPhone") !== undefined) {
        var UserName = localStorage.getItem("UserLastPhone");
        console.log("UserName=", UserName);
    } else {
        var UserName = "Guest";
    }
    console.log("UserName=", UserName);
    //const url = `${Constants.urls.baseUrl}${Constants.endPoints.CRMTrack}SearchItem=${false}&IPAddress=${IPAddress}&Username=${UserName}&UserType=${UserType}&Geolocation=${"Pune,Maharashtra,India(Lon:73.765585,Lat:18.5681)"}&ModifiedOn=${currentDate}&CreatedOn=${currentDate}&EmailAddress=${UserName}&SkuId=${SkuId}&CategoryId=${''}&IsSearchedItem=${'false'}&IsViewedItem=${true}&FromSource=${'ReactWeb'}`
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.CRMTrack}`;
    const dataBody = {
        "SearchItem": SearchItem,
        "IPAddress": IPAddress,
        "Username": UserName,
        "UserType": UserType,
        "Geolocation": "Pune,Maharashtra,India(Lon:73.765585,Lat:18.5681)",
        "CreatedOn": currentDate,
        "ModifiedOn": currentDate,
        "EmailAddress": UserName,
        "SkuId": 0,
        "CategoryId": "",
        "IsSearchedItem": true,
        "IsAddedToCart": false,
        "IsViewedItem": false,
        "AddToCartCount": 0,
        "ProductViewCount": 0,
        "ProductQty": "",
        "FromSource": "ReactWeb",
        "SellerId": localStorage.getItem("sellerID") || _homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.defaultSellerID
    };
    // const token = localStorage.getItem('generatedtoken');
    var options = {
        method: "POST",
        headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${genrateToken}`
        },
        body: JSON.stringify(dataBody)
    };
    fetch(url, options).then((rescrm)=>{
        console.log("rescrm=", rescrm);
    });
//return httpRequest(url, 'POST', dataBody);
}
const SearchAPI = {
    getAIautosuggestlist,
    getDBautosuggestlist,
    getsearchlist,
    getCRMTrackSearch
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchAPI);


/***/ }),

/***/ 3200:
/***/ (() => {



/***/ }),

/***/ 8739:
/***/ (() => {



/***/ })

};
;