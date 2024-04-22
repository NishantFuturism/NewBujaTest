exports.id = 7062;
exports.ids = [7062];
exports.modules = {

/***/ 899:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Md: () => (/* binding */ notifyMeAction),
/* harmony export */   Xq: () => (/* binding */ addToCart),
/* harmony export */   h2: () => (/* binding */ removeFromCart)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1089);

/*
 *
 * AddToCart actions
 *
 */ function addToCart(qty, SkuId, SKUFilterPriceId) {
    return {
        type: _constants__WEBPACK_IMPORTED_MODULE_0__/* .ADD_TO_CART */ .G2,
        payload: {
            qty,
            SkuId,
            SKUFilterPriceId
        }
    };
}
function removeFromCart(SkuId, SKUFilterPriceId) {
    return {
        type: _constants__WEBPACK_IMPORTED_MODULE_0__/* .REMOVE_FROM_CART */ .OZ,
        payload: {
            SkuId,
            SKUFilterPriceId
        }
    };
}
function notifyMeAction(skuDetailId, skuPriceId) {
    console.log("action.skuPriceId", skuPriceId);
    return {
        type: _constants__WEBPACK_IMPORTED_MODULE_0__/* .NOTIFY_ME_REQUEST */ .Sh,
        skuDetailId,
        skuPriceId
    };
}


/***/ }),

/***/ 1089:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A6: () => (/* binding */ RESPONCE_MSG),
/* harmony export */   G2: () => (/* binding */ ADD_TO_CART),
/* harmony export */   OZ: () => (/* binding */ REMOVE_FROM_CART),
/* harmony export */   P9: () => (/* binding */ SHOPPING_CART_DETAILS),
/* harmony export */   Ru: () => (/* binding */ NOTIFY_ME_REQUEST_SUCCESS),
/* harmony export */   Sh: () => (/* binding */ NOTIFY_ME_REQUEST),
/* harmony export */   _T: () => (/* binding */ ADD_TO_CART_SUCCESS),
/* harmony export */   jp: () => (/* binding */ CLOSE_MSG_BAR)
/* harmony export */ });
/*
 *
 * AddToCart constants
 *
 */ const ADD_TO_CART = "app/AddToCart/ADD_TO_CART";
const REMOVE_FROM_CART = "app/AddToCart/REMOVE_FROM_CART";
const ADD_TO_CART_SUCCESS = "app/AddToCart/ADD_TO_CART_SUCCESS";
const SHOPPING_CART_DETAILS = "app/AddToCart/SHOPPING_CART_DETAILS";
const RESPONCE_MSG = "app/AddToCart/RESPONCE_MSG";
const CLOSE_MSG_BAR = "app/AddToCart/CLOSE_MSG_BAR";
const NOTIFY_ME_REQUEST = "app/LoadProducts/NOTIFY_ME_REQUEST";
const NOTIFY_ME_REQUEST_SUCCESS = "app/LoadProducts/NOTIFY_ME_REQUEST_SUCCESS";


/***/ }),

/***/ 5810:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export AddToCart */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_injectReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3671);
/* harmony import */ var _utils_injectSaga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7856);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4661);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(899);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5650);
/* harmony import */ var _saga__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5713);
/* harmony import */ var _public_assets_css_custombundle_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2875);
/* harmony import */ var _public_assets_css_custombundle_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_assets_css_custombundle_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _public_assets1_css_default_min_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4573);
/* harmony import */ var _public_assets1_css_default_min_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_assets1_css_default_min_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _public_assets_css_responsive_min_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(373);
/* harmony import */ var _public_assets_css_responsive_min_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_public_assets_css_responsive_min_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _public_assets_css_style_min_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2269);
/* harmony import */ var _public_assets_css_style_min_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_public_assets_css_style_min_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_ShowAlert_success__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4636);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _MainPage_api_mycartAPI__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(6920);
/* harmony import */ var _useLocalStorage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(3650);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(7880);
/* eslint-disable no-lonely-if */ /* eslint-disable jsx-a11y/no-static-element-interactions */ /* eslint-disable jsx-a11y/click-events-have-key-events */ /* eslint-disable react/prop-types */ /**
 *
 * AddToCart
 *
 */ 





// import { notifyMeAction } from '../LoadProducts/actions';






// import '../../../assets/css/font-awesome.min.css';



////import history from '../../utils/history';





// import Cookies from 'universal-cookie';
// import addToBasket from '../../images/add-to-basket.png'
function AddToCart(props) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_14__.useRouter)();
    const { cartRefresh, setCartRefresh } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context__WEBPACK_IMPORTED_MODULE_18__/* .Message_data */ .L);
    //console.log('props.addtocart', props.filtered);
    (0,_utils_injectReducer__WEBPACK_IMPORTED_MODULE_3__/* .useInjectReducer */ .v)({
        key: "addToCart",
        reducer: _reducer__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z
    });
    (0,_utils_injectSaga__WEBPACK_IMPORTED_MODULE_4__/* .useInjectSaga */ .h)({
        key: "addToCart",
        saga: _saga__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z
    });
    const [CustGUID, setCustGUID] = (0,_useLocalStorage__WEBPACK_IMPORTED_MODULE_17__/* .useLocalStorage */ ._)("CustGUID", null);
    const [qty, setQty] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [isForCart, setisForCart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [QtyCout, setQtyCout] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const [shoppingCart, setShoppingCart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [FirstCall, setFirstCall] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [filtered, setFiltered] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    // const [notifyme,setNotifyme]=useState('')
    const [notifymsg, setnotifyMsg] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    //const location = useLocation();
    // const [skuidvalue,setSkuidvalue]=useState('')
    // const [skuPricevalue, setSkuPriceValue] = useState('');
    const [msg, setMsg] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [openwarn, setOpenwarn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    // const [disable,setdisable]=useState(true)
    // const [addtocartclick,setAddtocartclick]=useState(false)
    // const [cartdata, setcartdata] = useState([]);
    // const [notified, setnotified] = useState({});/
    // const addToCartreducer = useSelector(state => state.addToCart)
    // const loadProducts = useSelector(state => state.loadProducts)
    // const addtocartresponse = useSelector(state => state.addToCart)
    // console.log('adtocrt, adtorsp', addToCartreducer, loadProducts, addtocartresponse);
    // console.log("Addcart shoppingCart=", props.shoppingCart);
    //  console.log("filtered=", filtered);
    // const notifyMeResp=useSelector(state=>state.loadProducts.notify)
    // console.log("notifyMeResp",notifyMeResp);
    // const [notify, setnotify] = useState(false);
    // const [QtyCout, setQtyCout] = useState(1);
    // console.log('bvnbmn', props, addToCartreducer, loadProducts);
    // console.log("cookie",cookies.get('notifySkuDetailID'));
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    // console.log("addtocartresponse", addtocartresponse);
    // useEffect(() => {
    //   console.log("notifymsg", notifymsg);
    //   // if (addtocartresponse && addtocartresponse.notified==='Error') {
    //   //   history.push('/login')
    //   //   setnotifyMsg(false)
    //   //   setOpenwarn(false)
    //   //   setdisable(false)
    //   // }
    // }, [addtocartresponse && addtocartresponse.addToCartMsg, notifymsg])
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (notifymsg === true) {
            // toast('Thank you! We will notify you once the product will be available.')
            setOpenwarn(true);
            setMsg("Thank you! We will notify you once the product will be available.");
            setTimeout(()=>{
                setOpenwarn(false);
            }, 3000);
        }
    }, [
        notifymsg
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (props !== undefined) {
            setShoppingCart(props.shoppingCart);
            setFiltered(props.filtered);
        }
    }, [
        props
    ]);
    const AddtoCartfunction = (action, SkuId, SKUFilterPriceId)=>{
        setCartRefresh(true);
        const qty1 = 0;
        if (SkuId) {
            // if (qty) {
            dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_19__/* .addToCart */ .Xq)(qty1 + 1, SkuId, SKUFilterPriceId));
            setQty(qty + 1);
        // setAddtocartclick(true)
        } else {
            if (filtered && filtered[0]) {
                dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_19__/* .addToCart */ .Xq)(qty + 1, filtered[0].SkuId, filtered[0].SKUFilterPriceId));
                setQty(qty + 1);
            }
        }
    /*if (router.pathname === '/cart') {
      
      mycartAPI.getCartCommon()
        .then(response => {
          //console.log('uuuuu', response)
          // setwalletbalance(response.WalletBalance)
          // setamount(response.total)
        })
        .catch(error => {
          //console.log('error:::', error);
        });
    }*/ // addToCartFunc(qty + 1, props.data.SkuId, filtered.SKUFilterPriceId)
    };
    function IncrementDecrementCart(action, SkuId, SKUFilterPriceId) {
        setCartRefresh(true);
        // console.log('DEC-action', action, SkuId, SKUFilterPriceId);
        if (action === "inc") {
            if (SkuId) {
                // if (qty) {
                dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_19__/* .addToCart */ .Xq)(qty + 1, SkuId, SKUFilterPriceId));
                // console.log("inc add to cart=", props);
                if (props.cart === true) {
                    if (filtered.CappingLimit === qty) {
                        setQty(filtered.CappingLimit);
                    } else {
                        setQty(qty + 1);
                    }
                } else {
                    if (filtered.Capping === qty && !props?.isQuickView) {
                        // console.log("limit..", filtered.Capping)
                        // console.log("checkqty..", qty)
                        setOpenwarn(true);
                        setMsg(`Order quantity limit for this product is ${props.filtered.Capping}`);
                        setQty(filtered.Capping);
                    } else {
                        setQty(qty + 1);
                    }
                }
            } else {
                if (filtered && filtered[0]) {
                    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_19__/* .addToCart */ .Xq)(qty + 1, filtered[0].SkuId, filtered[0].SKUFilterPriceId));
                    setQty(qty + 1);
                }
            }
        // addToCartFunc(qty + 1, props.data.SkuId, filtered.SKUFilterPriceId)
        }
        if (action === "dec") {
            if (qty > 0) {
                setQty(qty - 1);
                if (qty === 1) {
                    // console.log("removeitemdec=", SkuId, SKUFilterPriceId)
                    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_19__/* .removeFromCart */ .h2)(SkuId, SKUFilterPriceId));
                } else {
                    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_19__/* .addToCart */ .Xq)(qty - 1, SkuId, SKUFilterPriceId));
                }
            // addToCartFunc(qty - 1, props.data.SkuId, filtered.SKUFilterPriceId)
            }
        }
    }
    const QtyCoutFun = ()=>{
        setQtyCout(1);
    };
    function NotifyMe(skuid, skuPriceId, isNotified, InStock) {
        // setSkuidvalue(skuid)
        // setSkuPriceValue(skuPriceId)
        // const guest=localStorage.getItem('User')
        //   const guestflag=JSON.parse(guest)
        if (localStorage.getItem("CustGUID") === null) {
            localStorage.setItem("lastVisitedUrl", router.asPath);
            router.push("/login");
        } else {
            if (isNotified === false || InStock === false) {
                // dispatch(notifyMeAction(skuid, skuPriceId))
                // notify me homepage
                _MainPage_api_mycartAPI__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z.NotifyMeAPI(skuid, skuPriceId).then((res)=>{
                    if (res === "SMS sent successfully" || res === "Email sent successfully") {
                        setnotifyMsg(true);
                        // setOpenwarn(true)
                        (0,react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast)("Thank you! We will notify you once the product will be available.");
                    // setMsg('Thank you! We will notify you once the product will be available.')
                    }
                });
            }
        // else {
        //   // console.log("notified");
        //   // dispatch(notifyMeAction(skuid, skuPriceId))
        //   // setnotifyMsg(true )
        // }
        }
    // if(userdetail && userdetail.isguest===false){
    //   history.push('/login')
    // }
    // else{
    // dispatch(notifyMeAction(skuid, skuPriceId))
    // }
    // setnotify(true)
    }
    // useEffect(()=>{
    //   const guest=localStorage.getItem('User')
    //   const guestflag=JSON.parse(guest)
    //   if(notifymsg===true){
    //     if( guestflag && guestflag.isguest===false){
    //       // setNotifyme(props&&props.data.IsNotified ? 'Notified' : 'Notify Me' )
    //       // setnotifyMsg(props&&props.data.IsNotified ?true:false )
    //       dispatch(notifyMeAction(skuidvalue, skuPricevalue))
    //     }
    //     else{
    //       history.push('/login')
    //     }
    //   }
    // },[notifymsg,skuidvalue,skuPricevalue])
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setFirstCall(FirstCall + 1);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (shoppingCart !== undefined && props && props.data) {
            setisForCart(false);
            if (FirstCall === 0) {
                const itmQuntity = shoppingCart.filter((itm)=>itm.SKUFilterPriceId === props.data.FiltersList[0].SKUFilterPriceId);
                const obj = itmQuntity[0];
                if (obj !== undefined) {
                    setQty(obj.Quantity);
                }
            } else {
                if (filtered) {
                    const itmQuntity = shoppingCart.filter((itm)=>itm.SKUFilterPriceId === filtered.SKUFilterPriceId);
                    const obj = itmQuntity[0];
                    if (obj !== undefined) {
                        setQty(obj.Quantity);
                    }
                }
            }
        } else {
            if (filtered) {
                if (filtered.Quantity) {
                    setQty(filtered.Quantity);
                    setisForCart(true);
                }
                if (filtered.SkuQuantity) {
                    setQty(filtered.SkuQuantity);
                }
            }
        }
    }, [
        filtered,
        shoppingCart
    ]);
    const close = ()=>{};
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setInterval(()=>{
            setOpenwarn(false);
        }, 5000);
    }, [
        close
    ]);
    // useEffect(() => {
    //  
    //   if (loadProducts !== undefined && shoppingCart !== undefined) {
    //     const loadShop = loadProducts.shoppingCartDetails
    //     // const arr = [...shoppingCart, ...loadShop]
    //     // setShoppingCart(arr)
    //   
    //   }
    // }, [loadProducts])
    // console.log("props.data.IsNotifiedy",props.data.IsNotifiedy,props.data.SkuId);
    // console.log("filtered.SKUFilterPriceId", props.data, "filtered", filtered, filtered.SKUFilterPriceId, "skulisting", props.skulisting);
    //console.log("condition IsAddedInCart=", props.filtered)
    // console.log("filterlistdataaa", props.data.FiltersList[0])
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            openwarn && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ShowAlert_success__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                msg: msg,
                close: close
            }),
            props && props.data && props.data.InStock && filtered && shoppingCart && shoppingCart.find((itm)=>itm.SKUFilterPriceId === filtered.SKUFilterPriceId) === undefined && filtered && (!props.data.IsAddedInCart || !filtered.IsAddedInCart || filtered.Quantity === 0) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: props.skulisting ? "afterAddtocartButton" : "afterAddtocartonPDP",
                onClick: ()=>AddtoCartfunction("inc", props.filteredata ? props.data.SkuDetailID : props.data.SkuId, filtered.SKUFilterPriceId, filtered.Capping),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    id: "afterBtn",
                    children: props.Reorder ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: "cartText",
                        children: "Reorder"
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "cartIconwithAdd",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "lnr lnr-cart",
                                id: "cartIcon"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: "cartText",
                                children: "Add to cart"
                            })
                        ]
                    })
                })
            }),
            props && props.data && props.data.InStock && filtered && shoppingCart && shoppingCart.find((itm)=>itm.SKUFilterPriceId === filtered.SKUFilterPriceId) !== undefined && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: props.skulisting === true ? "product-qty-parenttest product-qty-parent2720 addtocart-productqty" : "product-qty-parenttest product-qty-parent2720 margin-bottom-0px",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "product-qty fixhomepage IncDecQtyDiv IncrementDecrementQtyDiv2720",
                        style: {
                            display: "block"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "button",
                                className: "IncDecQty AddUpdateqty2342  IncDecQtyforFloatingCart AddUpdateqtyfloatingcart2342",
                                value: `${qty}`
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "dec qtybtn btn btn-primary",
                                "data-productid": "84576",
                                onClick: ()=>IncrementDecrementCart("dec", props.filteredata ? props.data.SkuDetailID : props.data.SkuId, filtered.SKUFilterPriceId),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "fa fa-minus"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "inc qtybtn btn btn-primary",
                                "data-productid": "84576",
                                onClick: ()=>IncrementDecrementCart("inc", props.filteredata ? props.data.SkuDetailID : props.data.SkuId, filtered.SKUFilterPriceId),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "fa fa-plus"
                                })
                            })
                        ]
                    })
                })
            }),
            props && props.data && props.data.InStock === false && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: props && props.PDPpage ? "d-flex justify-content-start" : "d-flex justify-content-center ",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "btn-notifyme ",
                        type: "button",
                        id: "cartnotify",
                        onClick: ()=>NotifyMe(props.data.SkuId || filtered.SkuDetailID, filtered.SKUFilterPriceId, props.data.IsNotified, props.data.InStock),
                        disabled: notifymsg === true || props?.data?.IsNotified,
                        children: notifymsg === true || props.data.IsNotified ? "Notified" : "Notify me"
                    })
                })
            }),
            isForCart && props.cart && props.filtered.InStock ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "product-qty-parenttest product-qty-parent2720 mb-15",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "product-qty fixhomepage IncDecQtyDiv IncrementDecrementQtyDiv2720",
                        style: {
                            display: "block"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "button",
                                className: "IncDecQty AddUpdateqty2342  IncDecQtyforFloatingCart AddUpdateqtyfloatingcart2342",
                                value: `${qty}`
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "dec qtybtn btn btn-primary",
                                "data-productid": "84576",
                                onClick: ()=>IncrementDecrementCart("dec", filtered.SkuId, filtered.SKUFilterPriceId),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "fa fa-minus"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "inc qtybtn btn btn-primary",
                                "data-productid": "84576",
                                onClick: ()=>IncrementDecrementCart("inc", filtered.SkuId, filtered.SKUFilterPriceId),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "fa fa-plus"
                                })
                            })
                        ]
                    })
                })
            }) : isForCart && props.cart && props.filtered.InStock === false && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: "btn-notifyme ",
                    type: "button",
                    id: "cartnotify",
                    onClick: ()=>NotifyMe(props.filtered.SkuId || filtered.SkuDetailID, filtered.SKUFilterPriceId, props.filtered.IsNotified, props.filtered.InStock),
                    disabled: notifymsg === true || props?.data?.IsNotified,
                    children: notifymsg === true || props.filtered.IsNotified ? "Notified" : "Notify me"
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddToCart);


/***/ }),

/***/ 5650:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export initialState */
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7133);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1089);
/* eslint-disable prefer-destructuring */ /*
 *
 * AddToCart reducer
 *
 */ 

const initialState = {
    shoppingcartDetails: [],
    addToCartMsg: "",
    IsMsgBar: false,
    updateWishlistData: [],
    notified: false
};
/* eslint-disable default-case, no-param-reassign */ const addToCartReducer = (state = initialState, action)=>immer__WEBPACK_IMPORTED_MODULE_0___default()(state, (draft)=>{
        switch(action.type){
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .CLOSE_MSG_BAR */ .jp:
                draft.IsMsgBar = false;
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .SHOPPING_CART_DETAILS */ .P9:
                draft.shoppingcartDetails = action.shoppingcartDetails;
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .ADD_TO_CART_SUCCESS */ ._T:
                console.log("reducer addtocart=", action);
                draft.IsMsgBar = true;
                draft.addToCartMsg = action.updateCartData.split("|")[1];
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .RESPONCE_MSG */ .A6:
                draft.IsMsgBar = true;
                draft.addToCartMsg = action.recievedMsg;
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .NOTIFY_ME_REQUEST_SUCCESS */ .Ru:
                draft.IsMsgBar = true;
                // draft.addToCartMsg = "Notified"
                draft.notified = action.notifyMeResp;
                break;
        }
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addToCartReducer);


/***/ }),

/***/ 5713:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ addToCartSaga)
/* harmony export */ });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6477);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6153);
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(universal_cookie__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _HomePage_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4595);
/* harmony import */ var _MainPage_api_mycartAPI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6920);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1089);
// import { take, call, put, select } from 'redux-saga/effects';




////import history from '../../utils/history';


function* AddToCartAPI(action) {
    try {
        const updateCartData = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_MainPage_api_mycartAPI__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.updatecart, null, action.payload.qty, action.payload.SkuId, action.payload.SKUFilterPriceId);
        // if(action.payload.qty === 1){
        //   mycartAPI.AddShippingCharges(action.payload.SkuId, action.payload.SKUFilterPriceId)
        // }
        const cartAllData = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_MainPage_api_mycartAPI__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.getCartCommon);
        const shoppingcartDetails = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_MainPage_api_mycartAPI__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.getShoppingcartDetails);
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
            type: _constants__WEBPACK_IMPORTED_MODULE_4__/* .ADD_TO_CART_SUCCESS */ ._T,
            updateCartData
        });
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
            type: _HomePage_constants__WEBPACK_IMPORTED_MODULE_5__/* .GET_COMMON_CART_SUCCESS */ .J3,
            cartAllData
        });
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
            type: _constants__WEBPACK_IMPORTED_MODULE_4__/* .SHOPPING_CART_DETAILS */ .P9,
            shoppingcartDetails
        });
    } catch (err) {
        console.log(err);
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)(err);
    }
}
function* RemoveFromCartAPI(action) {
    const recievedMsg = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_MainPage_api_mycartAPI__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.RemoveCartItem, action.payload.SkuId, action.payload.SKUFilterPriceId);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
        type: _constants__WEBPACK_IMPORTED_MODULE_4__/* .RESPONCE_MSG */ .A6,
        recievedMsg
    });
    const cartAllData = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_MainPage_api_mycartAPI__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.getCartCommon);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
        type: _HomePage_constants__WEBPACK_IMPORTED_MODULE_5__/* .GET_COMMON_CART_SUCCESS */ .J3,
        cartAllData
    });
    const shoppingcartDetails = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_MainPage_api_mycartAPI__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.getShoppingcartDetails);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
        type: _constants__WEBPACK_IMPORTED_MODULE_4__/* .SHOPPING_CART_DETAILS */ .P9,
        shoppingcartDetails
    });
}
// Individual exports for testing
function* addToCartSaga() {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeEvery)(_constants__WEBPACK_IMPORTED_MODULE_4__/* .ADD_TO_CART */ .G2, AddToCartAPI);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeEvery)(_constants__WEBPACK_IMPORTED_MODULE_4__/* .REMOVE_FROM_CART */ .OZ, RemoveFromCartAPI);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeEvery)(_constants__WEBPACK_IMPORTED_MODULE_4__/* .NOTIFY_ME_REQUEST */ .Sh, NotifyMeSaga);
// See example in containers/HomePage/saga.js
}
function* NotifyMeSaga(action) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    console.log("saga notify");
    const notifyMeResp = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_MainPage_api_mycartAPI__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.NotifyMeAPI, action.skuDetailId, action.skuPriceId);
    console.log("notifyMeResp", notifyMeResp, action.skuPriceId);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
        type: _constants__WEBPACK_IMPORTED_MODULE_4__/* .NOTIFY_ME_REQUEST_SUCCESS */ .Ru,
        notifyMeResp
    });
    if (notifyMeResp === false) {
        const cookies = new (universal_cookie__WEBPACK_IMPORTED_MODULE_1___default())();
        cookies.set("notifySkuDetailID", action.skuDetailId);
        console.log(cookies.get("notifySkuDetailID"));
        router.push("/login");
    }
// mycartAPI.NotifyMeAPI
// NotifyMeAPI
}


/***/ }),

/***/ 4595:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J3: () => (/* binding */ GET_COMMON_CART_SUCCESS),
/* harmony export */   OY: () => (/* binding */ CHANGE_USERNAME),
/* harmony export */   P9: () => (/* binding */ SHOPPING_CART_DETAILS),
/* harmony export */   bw: () => (/* binding */ GOOGLE_LOGIN),
/* harmony export */   fD: () => (/* binding */ ADD_TO_WISHLIST_SUCCESS_HOME),
/* harmony export */   gq: () => (/* binding */ GET_COMMON_CART)
/* harmony export */ });
/* unused harmony exports SUBMIT_FORM, GET_TEXT, ADD_TO_WISHLIST, GET_COMMON_CART_ERROR */
/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */ const CHANGE_USERNAME = "boilerplate/Home/CHANGE_USERNAME";
const SUBMIT_FORM = "adibuja/Home/SUBMIT_FORM";
const GET_TEXT = "boilerplate/Home/CHANGE_USERNAME";
const GET_COMMON_CART = "app/Home/GET_COMMON_CART";
const GET_COMMON_CART_SUCCESS = "app/Home/GET_COMMON_CART_SUCCESS";
const ADD_TO_WISHLIST = "app/Home/ADD_TO_WISHLIST";
const ADD_TO_WISHLIST_SUCCESS_HOME = "app/Home/ADD_TO_WISHLIST_SUCCESS_HOME";
const GET_COMMON_CART_ERROR = "app/Home/GET_COMMON_CART_ERROR";
const GOOGLE_LOGIN = "app/Home/GOOGLE_LOGIN";
const SHOPPING_CART_DETAILS = "app/Home/SHOPPING_CART_DETAILS";


/***/ }),

/***/ 4172:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WS: () => (/* binding */ getcompare),
/* harmony export */   Yj: () => (/* binding */ enablequickreviw),
/* harmony export */   zL: () => (/* binding */ addTowishlist)
/* harmony export */ });
/* unused harmony exports defaultAction, addToCart, removeFromCart, removeFromWishlist, closeMsgBar, notifyMeAction, getskuUrl, getrecent, getbrandListfilter */
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(629);
/*
 *
 * LoadProducts actions
 *
 */ 
function defaultAction() {
    return {
        type: DEFAULT_ACTION
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
// export function addToComapre(skuCode) {
//   console.log('actiomn..', skuCode);
//   return {
//     type: ADD_TO_COMPARE,
//     skuCode
//   };
// }
function getcompare(SkuId, ip, compareflag) {
    console.log("act", SkuId, ip, compareflag);
    return {
        type: _constants__WEBPACK_IMPORTED_MODULE_0__/* .GET_TO_COMPARE */ .W,
        SkuId,
        ip,
        compareflag
    };
}
function removeFromCart(SkuId, SKUFilterPriceId) {
    return {
        type: REMOVE_FROM_CART,
        payload: {
            SkuId,
            SKUFilterPriceId
        }
    };
}
function addTowishlist(SkuId, SKUFilterPriceId) {
    return {
        type: _constants__WEBPACK_IMPORTED_MODULE_0__/* .ADD_TO_WISHLIST */ .Cm,
        SkuId,
        SKUFilterPriceId
    };
}
function removeFromWishlist(SkuId, SKUFilterPriceId) {
    return {
        type: REMOVE_FROM_WISHLIST,
        SkuId,
        SKUFilterPriceId
    };
}
function closeMsgBar() {
    return {
        type: CLOSE_MSG_BAR
    };
}
function notifyMeAction(skuDetailId) {
    return {
        type: NOTIFY_ME_REQUEST,
        skuDetailId
    };
}
function enablequickreviw(popup, PageUrl) {
    console.log("QUICKVIEWd", PageUrl);
    return {
        type: _constants__WEBPACK_IMPORTED_MODULE_0__/* .QUICKVIEW */ .hV,
        popup,
        PageUrl
    };
}
function getskuUrl(skuurl) {
    console.log("rectent action", skuurl);
    return {
        type: SKUURL,
        skuurl
    };
}
function getrecent(skuId) {
    console.log("rectent action", skuId);
    return {
        type: RECENT,
        skuId
    };
}
function getbrandListfilter(valueString, valuepackString, fieldString, valuediscountstring, caturl, min, max, sortby) {
    return {
        type: PRODUCT_BRAND_LIST_FILTER,
        valueString,
        valuepackString,
        fieldString,
        valuediscountstring,
        caturl,
        min,
        max,
        sortby
    };
}


/***/ }),

/***/ 629:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $j: () => (/* binding */ PRODUCT_COMPARE_SUCCESS),
/* harmony export */   A6: () => (/* binding */ RESPONCE_MSG),
/* harmony export */   Cm: () => (/* binding */ ADD_TO_WISHLIST),
/* harmony export */   DN: () => (/* binding */ SKUURL),
/* harmony export */   G2: () => (/* binding */ ADD_TO_CART),
/* harmony export */   OZ: () => (/* binding */ REMOVE_FROM_CART),
/* harmony export */   P9: () => (/* binding */ SHOPPING_CART_DETAILS),
/* harmony export */   W: () => (/* binding */ GET_TO_COMPARE),
/* harmony export */   YI: () => (/* binding */ DEFAULT_ACTION),
/* harmony export */   Zd: () => (/* binding */ ADD_TO_COMPARE),
/* harmony export */   _T: () => (/* binding */ ADD_TO_CART_SUCCESS),
/* harmony export */   dD: () => (/* binding */ QUICKVIEW_SUCCESS),
/* harmony export */   gK: () => (/* binding */ RECENT_SUCCESS),
/* harmony export */   hV: () => (/* binding */ QUICKVIEW),
/* harmony export */   jp: () => (/* binding */ CLOSE_MSG_BAR),
/* harmony export */   md: () => (/* binding */ ADD_TO_WISHLIST_SUCCESS),
/* harmony export */   mt: () => (/* binding */ NOTIFY_ME_SUCCESS),
/* harmony export */   qK: () => (/* binding */ RESPONCE_COMPARE),
/* harmony export */   u8: () => (/* binding */ RECENT)
/* harmony export */ });
/* unused harmony exports ADD_TO_COMPARE_SUCCESS, NOTIFY_ME_REQUEST, REMOVE_FROM_WISHLIST, PRODUCT_BRAND_LIST_FILTER */
/*
 *
 * LoadProducts constants
 *
 */ const DEFAULT_ACTION = "app/LoadProducts/DEFAULT_ACTION";
const ADD_TO_CART = "app/LoadProducts/ADD_TO_CART";
const PRODUCT_COMPARE_SUCCESS = "app/LoadProducts/PRODUCT_COMPARE_SUCCESS";
const RESPONCE_COMPARE = "app/LoadProducts/RESPONCE_COMPARE";
const ADD_TO_COMPARE = "app/LoadProducts/ADD_TO_COMPARE";
const GET_TO_COMPARE = "app/LoadProducts/GET_TO_COMPARE";
const ADD_TO_COMPARE_SUCCESS = "app/LoadProducts/ADD_TO_COMPARE_SUCCESS";
const ADD_TO_CART_SUCCESS = "app/LoadProducts/ADD_TO_CART_SUCCESS";
const REMOVE_FROM_CART = "app/LoadProducts/REMOVE_FROM_CART";
const ADD_TO_WISHLIST = "app/LoadProducts/ADD_TO_WISHLIST";
const ADD_TO_WISHLIST_SUCCESS = "app/LoadProducts/ADD_TO_WISHLIST_SUCCESS";
const SHOPPING_CART_DETAILS = "app/LoadProducts/SHOPPING_CART_DETAILS";
const CLOSE_MSG_BAR = "app/LoadProducts/CLOSE_MSG_BAR";
const RESPONCE_MSG = "app/LoadProducts/RESPONCE_MSG";
const NOTIFY_ME_REQUEST = "app/LoadProducts/NOTIFY_ME_REQUEST";
const NOTIFY_ME_SUCCESS = "app/LoadProducts/NOTIFY_ME_SUCCESS";
const REMOVE_FROM_WISHLIST = "app/LoadProducts/REMOVE_FROM_WISHLIST";
const QUICKVIEW = "app/LoadProducts/QUICKVIEW";
const QUICKVIEW_SUCCESS = "app/LoadProducts/QUICKVIEW_SUCCESS";
const SKUURL = "app/LoadProducts/SKUURL";
const RECENT = "app/LoadProducts/RECENT";
const RECENT_SUCCESS = "app/LoadProducts/RECENT_SUCCESS";
const PRODUCT_BRAND_LIST_FILTER = "app/LoadProducts/PRODUCT_BRAND_LIST_FILTER";


/***/ }),

/***/ 3577:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _App_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1824);
/* harmony import */ var _apiServices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4287);
/* harmony import */ var _homeServices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4171);



function getSkuv(skuurl, pincode) {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.SkuV}clientId=${_homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.ClientId}&custGUID=${localStorage.getItem("CustGUID") === null || localStorage.getItem("CustGUID") === undefined ? _homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.defaultCustGUID : window.atob(localStorage.getItem("CustGUID"))}&cartGuid=${localStorage.getItem("CartGUID") === null || localStorage.getItem("CartGUID") === undefined ? _homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.defaultCartGUID : window.atob(localStorage.getItem("CartGUID"))}&fixedShippingDurationId=0&skuUrl=${skuurl}&languageid=${_homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.languageId}&CurrencyCode=${_homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.currencyCode}&pincode=${pincode || _homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.pincode}&sellerid=${localStorage.getItem("sellerID") === null || localStorage.getItem("sellerID") === undefined ? _homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.defaultSellerID : localStorage.getItem("sellerID")}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "POST");
}
function getRelatedproduct(pageNum, PageSize, SkuDetailId) {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.skurelated}clientId=${_homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.ClientId}&CustGUID=${localStorage.getItem("CustGUID") === null || localStorage.getItem("CustGUID") === undefined ? _homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.defaultCustGUID : window.atob(localStorage.getItem("CustGUID"))}&cartGuid=${localStorage.getItem("CartGUID") === null || localStorage.getItem("CartGUID") === undefined ? _homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.defaultCartGUID : window.atob(localStorage.getItem("CartGUID"))}&Skuid=${SkuDetailId}&languageId=${_homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.languageId}&CurrencyCode=${_homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.currencyCode}&PageNumber=${pageNum}&PageSize=${PageSize}&IsgetAll=${0}&sellerid=${localStorage.getItem("sellerID") === null || localStorage.getItem("sellerID") === undefined ? _homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.defaultSellerID : localStorage.getItem("sellerID")}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "GET");
}
function getCustomerreview(skuUrl) {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.Review}custGUID=${localStorage.getItem("CustGUID") === null || localStorage.getItem("CustGUID") === undefined ? _homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.defaultCustGUID : window.atob(localStorage.getItem("CustGUID"))}&skuurl=${skuUrl}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "GET");
}
function getrecentlyviewd(skuId) {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.recentlyview}clientId=${"1"}&custGuid=${localStorage.getItem("CustGUID") === null || localStorage.getItem("CustGUID") === undefined ? _homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.defaultCustGUID : window.atob(localStorage.getItem("CustGUID"))}&cartId=${localStorage.getItem("CartGUID") === null || localStorage.getItem("CartGUID") === undefined ? _homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.defaultCartGUID : window.atob(localStorage.getItem("CartGUID"))}&fixedShippingDurationId=0&skuIds=${skuId}&languageId=${_homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.languageId}&CurrencyCode=${_homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.currencyCode}&pincode=${_homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.pincode}&PageNumber=${1}&PageSize=${9}&sellerid=${localStorage.getItem("sellerID") === null || localStorage.getItem("sellerID") === undefined ? _homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.defaultSellerID : localStorage.getItem("sellerID")}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "GET");
}
// function getrecomended() {
//   // const url = `https://devuiapi.adibuja.com/api/v2/AIGetRecommendedProductListAllForReact?clientId=1&LanguageId=2&currencyCode=INR&CustomerId=50548&PageNumber=1&PageSize=9&pincode=411045&IsgetAll=1`
//   const url = `${Constants.urls.baseUrl}${Constants.endPoints.recommendedProductsai}
//   ClientId=${ConstantsValues.ClientId}&
//   languageId=${ConstantsValues.languageId}&
//   currencyCode=${ConstantsValues.currencyCode}&
//   CustomerId=${(localStorage.getItem('CustomerId') === null || localStorage.getItem('CustomerId') === undefined) ? ConstantsValues.defaultCustGUID : window.atob(localStorage.getItem('CustomerId'))}&
//   pincode=${ConstantsValues.pincode}&
//   sortby=${ConstantsValues.sortby}&
//   IsgetAll=${ConstantsValues.IsgetAll}&
//   PageNumber=1&PageSize=9 `;
//   return httpRequest(url, 'POST');
// }
function getrecomended() {
    // const url = `https://devuiapi.adibuja.com/api/v2/AIGetRecommendedProductListAllForReact?clientId=1&LanguageId=2&currencyCode=INR&CustomerId=50548&PageNumber=1&PageSize=9&pincode=411045&IsgetAll=1`
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.recommendedProductsai}ClientId=${_homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.ClientId}&languageId=${_homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.languageId}&currencyCode=${_homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.currencyCode}&CustGUID=${localStorage.getItem("CustGUID") === null || localStorage.getItem("CustGUID") === undefined ? _homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.defaultCustGUID : window.atob(localStorage.getItem("CustGUID"))}&CartGUID=${localStorage.getItem("CartGUID") === null || localStorage.getItem("CartGUID") === undefined ? _homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.defaultCartGUID : window.atob(localStorage.getItem("CartGUID"))}&IsgetAll=0&pincode=${_homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.pincode}&sortby=${_homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.sortby}&sellerid=${localStorage.getItem("sellerID") === null || localStorage.getItem("sellerID") === undefined ? _homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.defaultSellerID : localStorage.getItem("sellerID")}&skuID=0`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "POST");
}
function otherselletPDP(skuiddeatil, formfielid) {
    // const url = `${Constants.urls.baseUrl}${Constants.endPoints.getSellerPDPList}custGUID=${(localStorage.getItem('CustGUID') === null || localStorage.getItem('CustGUID') === undefined) ? ConstantsValues.defaultCustGUID : window.atob(localStorage.getItem('CustGUID'))}&skuDetailId=${skuDetailId}&cartGuid=${(localStorage.getItem('CartGUID') === null || localStorage.getItem('CartGUID') === undefined) ? ConstantsValues.defaultCartGUID : window.atob(localStorage.getItem('CartGUID'))}&pincode=${ConstantsValues.pincode}&CurrencyCode=${ConstantsValues.currencyCode}`;
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.getSellerPDPList}CurrencyCode=${_homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.currencyCode}&formFIeldValueID=${formfielid}&skuDetailId=${skuiddeatil}&clientId=${_homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.ClientId}&cartId=${localStorage.getItem("CartGUID") === null || localStorage.getItem("CartGUID") === undefined ? _homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.defaultCartGUID : window.atob(localStorage.getItem("CartGUID"))}&custGuid=${localStorage.getItem("CustGUID") === null || localStorage.getItem("CustGUID") === undefined ? _homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.defaultCustGUID : window.atob(localStorage.getItem("CustGUID"))}&pincode=${_homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.pincode}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "GET");
}
// const url=`${ Constants.urls.baseUrl }${ Constants.endPoints.DealoftheDayPage };
function getCRMTrackPDP(SkuId, IPAddress, currentDate, genrateToken) {
    if (localStorage.getItem("CustGUID") !== null && localStorage.getItem("CustGUID") !== undefined) {
        if ("00000000-0000-0000-0000-000000000000" === localStorage.getItem("CustGUID")) {
            var UserType = "Visitor";
        } else {
            var UserType = "RegisteredUser";
        }
    }
    if (localStorage.getItem("Email") !== "null" && localStorage.getItem("Email") !== undefined && localStorage.getItem("Email") !== "") {
        var UserName = localStorage.getItem("Email");
    } else if (localStorage.getItem("UserLastPhone") !== "null" && localStorage.getItem("UserLastPhone") !== undefined) {
        var UserName = localStorage.getItem("UserLastPhone");
    } else {
        var UserName = "Guest";
    }
    //const url = `${Constants.urls.baseUrl}${Constants.endPoints.CRMTrack}SearchItem=${false}&IPAddress=${IPAddress}&Username=${UserName}&UserType=${UserType}&Geolocation=${"Pune,Maharashtra,India(Lon:73.765585,Lat:18.5681)"}&ModifiedOn=${currentDate}&CreatedOn=${currentDate}&EmailAddress=${UserName}&SkuId=${SkuId}&CategoryId=${''}&IsSearchedItem=${'false'}&IsViewedItem=${true}&FromSource=${'ReactWeb'}`
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.CRMTrack}`;
    const dataBody = {
        //"SearchItem": false,
        "IPAddress": IPAddress,
        "Username": UserName,
        "UserType": UserType,
        "Geolocation": "Pune,Maharashtra,India(Lon:73.765585,Lat:18.5681)",
        //"CreatedOn": currentDate,
        "ModifiedOn": currentDate,
        "EmailAddress": UserName,
        "SkuId": SkuId,
        //"CategoryId": "",
        //"IsSearchedItem": false,
        // "IsAddedToCart": true,
        "IsViewedItem": true,
        //"AddToCartCount": 0,
        //"ProductViewCount": 0,
        //"ProductQty": "",
        "FromSource": "ReactWeb",
        "SellerId": localStorage.getItem("sellerID") || _homeServices__WEBPACK_IMPORTED_MODULE_2__/* .ConstantsValues */ .r.defaultSellerID
    };
    //const token = localStorage.getItem('generatedtoken');
    var options = {
        method: "POST",
        headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${genrateToken}`
        },
        body: JSON.stringify(dataBody)
    };
    fetch(url, options).then((rescrm)=>{});
//return httpRequest(url, 'POST', dataBody);
}
const ProductDetailAPI = {
    getSkuv,
    getCustomerreview,
    getRelatedproduct,
    getrecentlyviewd,
    getrecomended,
    otherselletPDP,
    getCRMTrackPDP
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductDetailAPI); // https://productionapi.adibuja.com/api/v2/getSellerPDPList?CurrencyCode=INR&formFIeldValueID=5&skuDetailId=83839&clientId=1&cartId=6aaa1ba3-4f43-4f1f-850b-fe4cad0a8686&custGuid=ea6abe12-9c64-4c68-99f6-e4691d4957ab&pincode=411045
 // https://productionapi.adibuja.com/api/v3/getDealOfTheDayProductsWithPagination?ClientId=1&languageId=2&currencyCode=INR&CustGUID=ea6abe12-9c64-4c68-99f6-e4691d4957ab&cartGuid=394d4e4e-e9c0-43d9-9efb-cc3ece41dbc3&pincode=411045&sortby=MOD&IsgetAll=1&PageNumber=1&PageSize=9


/***/ }),

/***/ 7646:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6734);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1824);
/* harmony import */ var _apiServices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4287);
/* harmony import */ var _homeServices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4171);




function savecartlisting() {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP.endPoints.savcartlisting}custGUID=${localStorage.getItem("CustGUID") === null || localStorage.getItem("CustGUID") === undefined ? _homeServices__WEBPACK_IMPORTED_MODULE_3__/* .ConstantsValues */ .r.defaultCustGUID : window.atob(localStorage.getItem("CustGUID"))}&CurrencyCode=${_homeServices__WEBPACK_IMPORTED_MODULE_3__/* .ConstantsValues */ .r.currencyCode}&pincode=${js_cookie__WEBPACK_IMPORTED_MODULE_0___default().get("pincodevalue") || localStorage.getItem("pincodevalue") || _homeServices__WEBPACK_IMPORTED_MODULE_3__/* .ConstantsValues */ .r.pincode}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_2__/* .httpRequest */ .c)(url, "GET");
}
// function savecartItemlisting(listname) {
//   // const url = `${Constants.urls.baseUrl}${Constants.endPoints.viewsavecart}CustGUID=${(localStorage.getItem('CustGUID') === null || localStorage.getItem('CustGUID') === undefined) ? ConstantsValues.defaultCustGUID : window.atob(localStorage.getItem('CustGUID'))}&listname=${listname}&CurrencyCode=${ConstantsValues.currencyCode}&pincode=411045`;
//   const url = `${Constants.urls.baseUrl}${Constants.endPoints.viewsavecart}CustGUID=${(localStorage.getItem('CustGUID') === null || localStorage.getItem('CustGUID') === undefined) ? ConstantsValues.defaultCustGUID : window.atob(localStorage.getItem('CustGUID'))}&listname=${listname}&CurrencyCode=${ConstantsValues.currencyCode}&pincode=${Cookies.get('pincodevalue') || localStorage.getItem('pincodevalue')}`;
//   return httpRequest(url, 'GET',);
// }
function savecartItemlisting(listname) {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP.endPoints.viewsavecart}custGuid=${localStorage.getItem("CustGUID") === null || localStorage.getItem("CustGUID") === undefined ? _homeServices__WEBPACK_IMPORTED_MODULE_3__/* .ConstantsValues */ .r.defaultCustGUID : window.atob(localStorage.getItem("CustGUID"))}&cartId=${localStorage.getItem("CartGUID") === null || localStorage.getItem("CartGUID") === undefined ? _homeServices__WEBPACK_IMPORTED_MODULE_3__/* .ConstantsValues */ .r.defaultCartGUID : window.atob(localStorage.getItem("CartGUID"))}&addressid=1&clientId=${_homeServices__WEBPACK_IMPORTED_MODULE_3__/* .ConstantsValues */ .r.ClientId}&listName=${listname}&pinCode=${js_cookie__WEBPACK_IMPORTED_MODULE_0___default().get("pincodevalue") || localStorage.getItem("pincodevalue") || _homeServices__WEBPACK_IMPORTED_MODULE_3__/* .ConstantsValues */ .r.pincode}&currencyName=${_homeServices__WEBPACK_IMPORTED_MODULE_3__/* .ConstantsValues */ .r.currencySymbol}&currencySymbol=${_homeServices__WEBPACK_IMPORTED_MODULE_3__/* .ConstantsValues */ .r.currencyCode}&isUserAuthenticated=${!(localStorage.getItem("CustGUID") === null || localStorage.getItem("CustGUID") === undefined)}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_2__/* .httpRequest */ .c)(url, "GET");
}
function removesavecartlist(listname) {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP.endPoints.removesavecartlist}CustGUID=${localStorage.getItem("CustGUID") === null || localStorage.getItem("CustGUID") === undefined ? _homeServices__WEBPACK_IMPORTED_MODULE_3__/* .ConstantsValues */ .r.defaultCustGUID : window.atob(localStorage.getItem("CustGUID"))}&ListName=${listname}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_2__/* .httpRequest */ .c)(url, "POST");
}
function removesavecartlistitem(listname, SkuId) {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP.endPoints.removesavecartlistitem}CustGUID=${localStorage.getItem("CustGUID") === null || localStorage.getItem("CustGUID") === undefined ? _homeServices__WEBPACK_IMPORTED_MODULE_3__/* .ConstantsValues */ .r.defaultCustGUID : window.atob(localStorage.getItem("CustGUID"))}&ListName=${listname}&skuId=${SkuId}&skufilterpriceid=`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_2__/* .httpRequest */ .c)(url, "POST");
}
function addsavecart(name) {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP.endPoints.savecustomercart}CustGUID=${localStorage.getItem("CustGUID") === null || localStorage.getItem("CustGUID") === undefined ? _homeServices__WEBPACK_IMPORTED_MODULE_3__/* .ConstantsValues */ .r.defaultCustGUID : window.atob(localStorage.getItem("CustGUID"))}&ListName=${name}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_2__/* .httpRequest */ .c)(url, "POST");
}
function savecartcheckout(cartname, flag) {
    const token = localStorage.getItem("generatedtoken");
    const flagforupdate = flag;
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP.endPoints.SavedCartCheckout}CustGUID=${localStorage.getItem("CustGUID") === null || localStorage.getItem("CustGUID") === undefined ? _homeServices__WEBPACK_IMPORTED_MODULE_3__/* .ConstantsValues */ .r.defaultCustGUID : window.atob(localStorage.getItem("CustGUID"))}&ipAddress=192.168.17.50&sessionId=${token}&country=India&city=pune&CartName=${cartname}&CurrencyCode=${_homeServices__WEBPACK_IMPORTED_MODULE_3__/* .ConstantsValues */ .r.currencyCode}&flags=${flagforupdate}&clientId=${_homeServices__WEBPACK_IMPORTED_MODULE_3__/* .ConstantsValues */ .r.ClientId}&cartGUID=${localStorage.getItem("CartGUID") === null || localStorage.getItem("CartGUID") === undefined ? _homeServices__WEBPACK_IMPORTED_MODULE_3__/* .ConstantsValues */ .r.defaultCartGUID : window.atob(localStorage.getItem("CartGUID"))}&IsRFQ=false&pincode=${_homeServices__WEBPACK_IMPORTED_MODULE_3__/* .ConstantsValues */ .r.pincode}&sellerid=${localStorage.getItem("sellerID") || _homeServices__WEBPACK_IMPORTED_MODULE_3__/* .ConstantsValues */ .r.defaultSellerID} `;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_2__/* .httpRequest */ .c)(url, "POST");
}
function savedcartProductList() {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP.endPoints.SavedcartProductList}CustGUID=${localStorage.getItem("CustGUID") === null || localStorage.getItem("CustGUID") === undefined ? _homeServices__WEBPACK_IMPORTED_MODULE_3__/* .ConstantsValues */ .r.defaultCustGUID : window.atob(localStorage.getItem("CustGUID"))}&CurrencyCode=${_homeServices__WEBPACK_IMPORTED_MODULE_3__/* .ConstantsValues */ .r.currencyCode}&clientId=${_homeServices__WEBPACK_IMPORTED_MODULE_3__/* .ConstantsValues */ .r.ClientId}&cartGUID=${localStorage.getItem("CartGUID") === null || localStorage.getItem("CartGUID") === undefined ? _homeServices__WEBPACK_IMPORTED_MODULE_3__/* .ConstantsValues */ .r.defaultCartGUID : window.atob(localStorage.getItem("CartGUID"))}&pincode=${_homeServices__WEBPACK_IMPORTED_MODULE_3__/* .ConstantsValues */ .r.pincode}&LanguageId=${_homeServices__WEBPACK_IMPORTED_MODULE_3__/* .ConstantsValues */ .r.languageId}  `;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_2__/* .httpRequest */ .c)(url, "POST");
}
const SaveCartAPI = {
    savecartlisting,
    savecartItemlisting,
    removesavecartlist,
    removesavecartlistitem,
    addsavecart,
    savecartcheckout,
    savedcartProductList
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SaveCartAPI); // IsRFQ = false & flags=true & CartName=fed % 20feed & CurrencyCode=INR & CustGUID=ea6abe12 - 9c64 - 4c68 - 99f6 - e4691d4957ab & cartGUID=36ab7759 - e175 - 4145 - b7d4 - 9db5815855e2 & city=pune & clientId=1 & country=India & ipAddress=192.168.7.40 & pincode=411045 & sessionId=0B1569B4 - B319 - 46A0 - B442 - B5442914744C


/***/ }),

/***/ 3650:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ useLocalStorage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>{
        try {
            // Get the value from localStorage, or return the initial value if not present
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            // If there's an error (e.g., if localStorage is disabled), return the initial value
            return initialValue;
        }
    });
    const setValue = (value)=>{
        try {
            // Save the value to localStorage
            window.localStorage.setItem(key, value);
            setStoredValue(value);
        } catch (error) {
            // Handle errors (e.g., if localStorage is full or disabled)
            console.error("Error storing data in localStorage:", error);
        }
    };
    return [
        storedValue,
        setValue
    ];
}


/***/ }),

/***/ 3884:
/***/ (() => {



/***/ }),

/***/ 2875:
/***/ (() => {



/***/ }),

/***/ 373:
/***/ (() => {



/***/ })

};
;