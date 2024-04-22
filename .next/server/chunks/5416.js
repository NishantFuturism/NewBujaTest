exports.id = 5416;
exports.ids = [5416];
exports.modules = {

/***/ 7471:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Otherseller: () => (/* binding */ Otherseller),
  "default": () => (/* binding */ MySellerlist)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/utils/injectReducer.js + 1 modules
var injectReducer = __webpack_require__(3671);
// EXTERNAL MODULE: ./src/utils/injectSaga.js + 2 modules
var injectSaga = __webpack_require__(7856);
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(1187);
// EXTERNAL MODULE: ./src/components/Footer/footer.js + 5 modules
var footer = __webpack_require__(8371);
// EXTERNAL MODULE: ./src/components/Header/index.js + 22 modules
var Header = __webpack_require__(3497);
// EXTERNAL MODULE: ./src/components/SubNavigation/index.js
var SubNavigation = __webpack_require__(9474);
// EXTERNAL MODULE: ./src/containers/AddToCart/actions.js
var actions = __webpack_require__(899);
// EXTERNAL MODULE: ./src/containers/AddToCart/reducer.js
var reducer = __webpack_require__(5650);
// EXTERNAL MODULE: ./src/containers/AddToCart/saga.js
var saga = __webpack_require__(5713);
// EXTERNAL MODULE: ./public/assets/css/custombundle.css
var custombundle = __webpack_require__(2875);
// EXTERNAL MODULE: ./public/assets1/css/default.min.css
var default_min = __webpack_require__(4573);
// EXTERNAL MODULE: ./public/assets/css/responsive.min.css
var responsive_min = __webpack_require__(373);
// EXTERNAL MODULE: ./public/assets/css/style.min.css
var style_min = __webpack_require__(2269);
// EXTERNAL MODULE: ./src/containers/MainPage/api/mycartAPI.js
var mycartAPI = __webpack_require__(6920);
;// CONCATENATED MODULE: ./src/containers/AddToCart/AddtocartSeller.js
/* eslint-disable no-lonely-if */ /* eslint-disable jsx-a11y/no-static-element-interactions */ /* eslint-disable jsx-a11y/click-events-have-key-events */ /* eslint-disable react/prop-types */ /**
 *
 * AddToCart
 *
 */ 




// import { notifyMeAction } from '../LoadProducts/actions';





// import '../../../assets/css/font-awesome.min.css';


////import history from '../../utils/history';


// import Cookies from 'universal-cookie';
function AddToCart(props) {
    const router = (0,router_.useRouter)();
    console.log("saller prp", props);
    (0,injectReducer/* useInjectReducer */.v)({
        key: "addToCart",
        reducer: reducer/* default */.Z
    });
    (0,injectSaga/* useInjectSaga */.h)({
        key: "addToCart",
        saga: saga/* default */.Z
    });
    const [qty, setQty] = (0,external_react_.useState)(0);
    const [isForCart, setisForCart] = (0,external_react_.useState)(false);
    const [QtyCout, setQtyCout] = (0,external_react_.useState)(1);
    const [shoppingCart, setShoppingCart] = (0,external_react_.useState)([]);
    const [FirstCall, setFirstCall] = (0,external_react_.useState)(0);
    const [filtered, setFiltered] = (0,external_react_.useState)({});
    // const [notifyme,setNotifyme]=useState('')
    const [notifymsg, setnotifyMsg] = (0,external_react_.useState)(false);
    const [skuidvalue, setSkuidvalue] = (0,external_react_.useState)("");
    const [skuPricevalue, setSkuPriceValue] = (0,external_react_.useState)("");
    const [disable, setdisable] = (0,external_react_.useState)(true);
    // const [cartdata, setcartdata] = useState([]);
    // const [notified, setnotified] = useState({});/
    const addToCartreducer = (0,external_react_redux_.useSelector)((state)=>state.addToCart);
    const loadProducts = (0,external_react_redux_.useSelector)((state)=>state.loadProducts);
    const addtocartresponse = (0,external_react_redux_.useSelector)((state)=>state.addToCart);
    // const notifyMeResp=useSelector(state=>state.loadProducts.notify)
    // console.log("notifyMeResp",notifyMeResp);
    // const [notify, setnotify] = useState(false);
    // const [QtyCout, setQtyCout] = useState(1);
    console.log("bvnbmn", props, addToCartreducer, loadProducts);
    // console.log("cookie",cookies.get('notifySkuDetailID'));
    const dispatch = (0,external_react_redux_.useDispatch)();
    (0,external_react_.useEffect)(()=>{
        console.log("notifymsg", notifymsg);
        if (addtocartresponse && addtocartresponse.notified === "Error") {
            setnotifyMsg(false);
            // setOpenwarn(false)
            setdisable(false);
        }
    }, [
        addtocartresponse && addtocartresponse.addToCartMsg,
        notifymsg,
        disable
    ]);
    (0,external_react_.useEffect)(()=>{
        if (props) {
            // if(props.filteredata) {
            //   setFiltered(props.filtered)
            // } else
            setShoppingCart(props.shoppingCart);
            setFiltered(props.filtered);
        }
    }, [
        props
    ]);
    const AddtoCartfunction = (action, SkuId, SKUFilterPriceId)=>{
        console.log("add saller action", action, SkuId, SKUFilterPriceId);
        const qty1 = 0;
        if (SkuId) {
            // if (qty) {
            dispatch((0,actions/* addToCart */.Xq)(qty1 + 1, SkuId, SKUFilterPriceId));
            setQty(qty + 1);
        // setAddtocartclick(true)
        } else {
            if (filtered && filtered[0]) {
                dispatch((0,actions/* addToCart */.Xq)(qty + 1, filtered[0].SkuId, filtered[0].SKUFilterPriceId));
                setQty(qty + 1);
            }
        }
    // addToCartFunc(qty + 1, props.data.SkuId, filtered.SKUFilterPriceId)
    };
    (0,external_react_.useEffect)(()=>{}, [
        props
    ]);
    function IncrementDecrementCart(action, SkuId, SKUFilterPriceId) {
        console.log("click increament", action, SkuId, SKUFilterPriceId, props.PDPpage);
        if (action === "inc") {
            if (SkuId) {
                // if (qty) {
                dispatch((0,actions/* addToCart */.Xq)(qty + 1, SkuId, SKUFilterPriceId));
                if (props.cart === true) {
                    if (filtered.CappingLimit === qty) {
                        setQty(filtered.CappingLimit);
                    } else {
                        setQty(qty + 1);
                    }
                } else {
                    if (filtered.Capping === qty) {
                        setQty(filtered.Capping);
                    } else {
                        setQty(qty + 1);
                    }
                }
            } else {
                if (filtered && filtered[0]) {
                    dispatch((0,actions/* addToCart */.Xq)(qty + 1, filtered[0].SkuId, filtered[0].SKUFilterPriceId));
                    setQty(qty + 1);
                }
            }
        // addToCartFunc(qty + 1, props.data.SkuId, filtered.SKUFilterPriceId)
        }
        if (action === "dec") {
            if (qty > 0) {
                setQty(qty - 1);
                if (qty === 1) {
                    dispatch((0,actions/* removeFromCart */.h2)(SkuId, SKUFilterPriceId));
                } else {
                    dispatch((0,actions/* addToCart */.Xq)(qty - 1, SkuId, SKUFilterPriceId));
                }
            // addToCartFunc(qty - 1, props.data.SkuId, filtered.SKUFilterPriceId)
            }
        }
    }
    const QtyCoutFun = ()=>{
        setQtyCout(1);
    };
    function NotifyMe(skuid, skuPriceId, isNotified, InStock) {
        console.log("ootherseller notify");
        setSkuidvalue(skuid);
        setSkuPriceValue(skuPriceId);
        // const guest=localStorage.getItem('User')
        //   const guestflag=JSON.parse(guest)
        console.log("guestflag.isguest", notifymsg, isNotified, InStock);
        if (localStorage.getItem("CustGUID") === null || localStorage.getItem("CustGUID") === undefined) {
            router.push("/login");
        } else {
            if (isNotified === false || InStock === false) {
                // dispatch(notifyMeAction(skuid, skuPriceId))
                // notify me homepage
                mycartAPI/* default */.Z.NotifyMeAPI(skuid, skuPriceId).then((res)=>{
                    if (res === "Notified") {
                        setnotifyMsg(true);
                    }
                });
            } else {
                console.log("notified");
            // dispatch(notifyMeAction(skuid, skuPriceId))
            // setnotifyMsg(true )
            }
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
    (0,external_react_.useEffect)(()=>{
        if (notifymsg === true) {
            // setNotifyme(props&&props.data.IsNotified ? 'Notified' : 'Notify Me' )
            // setnotifyMsg(props&&props.data.IsNotified ?true:false )
            dispatch((0,actions/* notifyMeAction */.Md)(skuidvalue, skuPricevalue));
        }
    }, [
        notifymsg,
        skuidvalue,
        skuPricevalue
    ]);
    (0,external_react_.useEffect)(()=>{
        setFirstCall(FirstCall + 1);
    }, []);
    (0,external_react_.useEffect)(()=>{
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
    console.log("otherseller props", props.data, props.filtered);
    //    console.log("filtered.SKUFilterPriceId",props.data,"filtered",filtered, filtered.SKUFilterPriceId,"skulisting",props.skulisting);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            props && props.data && props.data.InStock && filtered && shoppingCart && shoppingCart.find((itm)=>itm.SKUFilterPriceId === filtered.SKUFilterPriceId) === undefined && // < div id="maindiv" className={props.skulisting ? "correction mt-10" : "correction"}>
            //   {/* <img src='add-to-basket.png' alt='' /> */}
            //   <span style={{ width: '37px', padding: '0px 2px 0px 2px' }}>
            //     <i style={{ marginRight: "55px", marginTop: "10px" }} className="lnr lnr-cart" id="addtocartimg"></i>
            //     {/* <img src={addToBasket} alt='add to cart' className='addtocartimg' /> */}
            //   </span>
            //   <span id='qtyspan' className="qtyincdec addtocartqtyDivhidden addtocartqtyDiv2706 mb-15 d-none">
            //     <input type="text" onChange={(e) => QtyCoutFun(e)} className="validateQty addtocartqtytxt addtocartqty84562 addtocartqty2706" id="qty2706" defaultValue={QtyCout} maxLength="2" required="" />
            //   </span>
            //   <div id="btndiv">
            //     <button id="btncart" className="btn-cart incdecaddtocart AddToCart2706 " type="button"
            //       onClick={() => AddtoCartfunction('inc', props.filteredata ? props.data.SkuDetailID : props.data.SkuDetailID, filtered.SKUFilterPriceId, filtered.Capping)}
            //     // onClick={() => IncrementDecrementCart('inc', props.data.SkuId, filtered.SKUFilterPriceId)}
            //     >
            //       {props.Reorder ? 'Reorder' : 'Add to cart'}
            //     </button>
            //   </div>
            // </div>
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: props.skulisting ? "afterAddtocartButtonSeller" : "afterAddtocartonPDPSeller",
                onClick: ()=>AddtoCartfunction("inc", props.filteredata ? props.data.SkuDetailID : props.data.SkuDetailID, filtered.SKUFilterPriceId, filtered.Capping),
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    id: "afterBtn",
                    children: props.Reorder ? /*#__PURE__*/ jsx_runtime.jsx("a", {
                        className: "cartText",
                        children: "Reorder"
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "cartIconwithAdd",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("i", {
                                className: "lnr lnr-cart",
                                id: "cartIcon"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                className: "cartText",
                                children: "Add to cart"
                            })
                        ]
                    })
                })
            }),
            props && props.data && props.data.InStock && filtered && shoppingCart && shoppingCart.find((itm)=>itm.SKUFilterPriceId === filtered.SKUFilterPriceId) !== undefined && /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: props.skulisting === true ? "product-qty-parenttest product-qty-parent2720 mb-10 mt-10" : "product-qty-parenttest product-qty-parent2720",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "product-qty fixhomepage IncDecQtyDiv IncrementDecrementQtyDiv2720",
                        style: {
                            display: "block"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("input", {
                                type: "button",
                                className: "IncDecQty AddUpdateqty2342  IncDecQtyforFloatingCart AddUpdateqtyfloatingcart2342",
                                value: `${qty}`
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                className: "dec qtybtn btn btn-primary",
                                "data-productid": "84576",
                                onClick: ()=>IncrementDecrementCart("dec", props.filteredata ? props.data.SkuDetailID : props.data.SkuDetailID, filtered.SKUFilterPriceId),
                                children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                    className: "fa fa-minus"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                className: "inc qtybtn btn btn-primary",
                                "data-productid": "84576",
                                onClick: ()=>IncrementDecrementCart("inc", props.filtered ? props.data.SkuDetailID : props.data.SkuDetailID, filtered.SKUFilterPriceId),
                                children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                    className: "fa fa-plus"
                                })
                            })
                        ]
                    })
                })
            }),
            props && props.data && props.data.InStock === false && /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: props && props.PDPpage ? "d-flex justify-content-start" : "d-flex justify-content-center ",
                children: /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                    children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                        className: "btn-notifyme ",
                        type: "button",
                        style: {
                            width: "100px"
                        },
                        onClick: ()=>NotifyMe(props.data.SkuId, filtered.SKUFilterPriceId, props.data.IsNotified, props.data.InStock),
                        disabled: disable,
                        href: true,
                        children: notifymsg === true || props.data.IsNotified ? "Notified" : "Notify me"
                    })
                })
            }),
            isForCart && props.PDPpage && /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "product-qty-parenttest product-qty-parent2720 mb-15",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "product-qty fixhomepage IncDecQtyDiv IncrementDecrementQtyDiv2720",
                        style: {
                            display: "block"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("input", {
                                type: "button",
                                className: "IncDecQty AddUpdateqty2342  IncDecQtyforFloatingCart AddUpdateqtyfloatingcart2342",
                                value: `${qty}`
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                className: "dec qtybtn btn btn-primary",
                                "data-productid": "84576",
                                onClick: ()=>IncrementDecrementCart("dec", props.data.SkuDetailID, filtered.SKUFilterPriceId),
                                children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                    className: "fa fa-minus"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                className: "inc qtybtn btn btn-primary",
                                "data-productid": "84576",
                                onClick: ()=>IncrementDecrementCart("inc", props.data.SkuDetailID, filtered.SKUFilterPriceId),
                                children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                    className: "fa fa-plus"
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const AddtocartSeller = (AddToCart);

// EXTERNAL MODULE: external "immer"
var external_immer_ = __webpack_require__(7133);
var external_immer_default = /*#__PURE__*/__webpack_require__.n(external_immer_);
;// CONCATENATED MODULE: ./src/containers/Otherseller/constants.js
/*
 *
 * Otherseller constants
 *
 */ const DEFAULT_ACTION = "app/Otherseller/DEFAULT_ACTION";
const GET_OTHER_SELLER = "app/Otherseller/GET_OTHER_SELLER";
const GET_OTHER_SELLER_SUCCESSS = "app/Otherseller/GET_OTHER_SELLER_SUCCESSS";
const SHOPPING_CART_DETAILS_SALLER = "app/Otherseller/SHOPPING_CART_DETAILS_SALLER";

;// CONCATENATED MODULE: ./src/containers/Otherseller/reducer.js
/*
 *
 * Otherseller reducer
 *
 */ 

const initialState = {
    sellerlist: [],
    shoppingDetailsHome: []
};
/* eslint-disable default-case, no-param-reassign */ const othersellerReducer = (state = initialState, action)=>external_immer_default()(state, (draft)=>{
        switch(action.type){
            case DEFAULT_ACTION:
                break;
            case GET_OTHER_SELLER_SUCCESSS:
                draft.sellerlist = action.listseller;
                break;
            case SHOPPING_CART_DETAILS_SALLER:
                draft.shoppingDetailsHome = action.shoppingcartDetails;
                break;
        }
    });
/* harmony default export */ const Otherseller_reducer = (othersellerReducer);

// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__(6477);
// EXTERNAL MODULE: ./src/containers/MainPage/api/productdetail.js
var productdetail = __webpack_require__(3577);
;// CONCATENATED MODULE: ./src/containers/Otherseller/saga.js




function* othersellerSaga() {
    yield (0,effects_.takeEvery)(GET_OTHER_SELLER, sellerlist);
}
function* sellerlist(action) {
    try {
        const listseller = yield (0,effects_.call)(productdetail/* default */.Z.otherselletPDP, action.skuiddeatil, action.formfielid);
        yield (0,effects_.put)({
            type: GET_OTHER_SELLER_SUCCESSS,
            listseller
        });
        const shoppingcartDetails = yield (0,effects_.call)(mycartAPI/* default */.Z.getShoppingcartDetails);
        console.log("Saga Buyprod=", shoppingcartDetails);
        yield (0,effects_.put)({
            type: SHOPPING_CART_DETAILS_SALLER,
            shoppingcartDetails
        });
    } catch (err) {
        console.log(err);
    // yield put(err);
    }
}

// EXTERNAL MODULE: ./src/containers/MyAccount/myAccountBreadcrumb.js
var myAccountBreadcrumb = __webpack_require__(3718);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__(8819);
;// CONCATENATED MODULE: ./src/pages/productsale/Sellerlist/MySellerlist.js
/* eslint-disable no-unused-vars */ /**
 *
 * Otherseller
 *
 */ 


// import { useHistory, useLocation } from 'react-router-dom';








// import history from '../../utils/history';

// import mycartAPI from '../MainPage/api/mycartAPI';





function Otherseller(props) {
    (0,injectReducer/* useInjectReducer */.v)({
        key: "otherseller",
        reducer: Otherseller_reducer
    });
    (0,injectSaga/* useInjectSaga */.h)({
        key: "otherseller",
        saga: othersellerSaga
    });
    const [isMount, setIsMount] = (0,external_react_.useState)(false);
    const [listdata, setlistdata] = (0,external_react_.useState)([]);
    const othersellerReducer = (0,external_react_redux_.useSelector)((state)=>state.otherseller);
    const sellerShoppingData = (0,external_react_redux_.useSelector)((state)=>state.otherseller);
    console.log("mnbnmb", othersellerReducer);
    const productReducer = (0,external_react_redux_.useSelector)((state)=>state.product);
    const [shoppingCart, setShoppingCart] = (0,external_react_.useState)([]);
    const [buynowclick, setBuynowclick] = (0,external_react_.useState)(false);
    // const [filtered, setFiltered]=useState(data.FilterList[0])
    const homeScreenstate = (0,external_react_redux_.useSelector)((state)=>state.homeScreen);
    const addToCartRdcr = (0,external_react_redux_.useSelector)((state)=>state.addToCart);
    console.log("saller addToCartRdcr", addToCartRdcr);
    // useEffect(() => {
    //   if (addToCartRdcr !== undefined) {
    //     setShoppingCart(addToCartRdcr.shoppingCartDetails)
    //   }
    // }, [addToCartRdcr])
    // const [skuid, setskuid] = useState('');
    const dispatch = (0,external_react_redux_.useDispatch)();
    //   const location = useLocation()
    //   const params = useHistory()
    const router = (0,router_.useRouter)();
    //   console.log('location', location, params);
    (0,external_react_.useEffect)(()=>{
        setIsMount(true);
    }, []);
    (0,external_react_.useEffect)(()=>{
    // if (location && location.state && location.state.skudetailid) {
    //   // setskuid(location.state.skudetailid)
    // }
    }, [
        router
    ]);
    (0,external_react_.useEffect)(()=>{
        if (false) {}
    }, [
        router
    ]);
    (0,external_react_.useEffect)(()=>{
        if (false) {}
    }, [
        othersellerReducer
    ]);
    // useEffect(() => {
    //   if (sellerShoppingData !== undefined) {
    //     console.log('useeffect shoppingcart', shoppingCart);
    //     setShoppingCart(sellerShoppingData.shoppingDetailsHome)
    //   }
    // }, [sellerShoppingData])
    (0,external_react_.useEffect)(()=>{
        if (false) {}
    }, [
        addToCartRdcr
    ]);
    (0,external_react_.useEffect)(()=>{
        if (false) {}
    }, [
        addToCartRdcr
    ]);
    // const handleBuynow = () => {
    //   history.push('/cart')
    // }
    const handleBuynow = ()=>{
        console.log("propschk", othersellerReducer);
        console.log("11122", othersellerReducer.sellerlist[0].FilterList[0].SKUFilterPriceId);
        let prductItem = false;
        if (shoppingCart !== undefined && shoppingCart !== "") {
            shoppingCart.forEach((element)=>{
                // if (element.SkuDetailId === filtered.SkuDetailId) {
                if (element.SKUFilterPriceId === othersellerReducer.sellerlist[0]?.FilterList[0]?.SKUFilterPriceId) {
                    prductItem = true;
                }
            // }
            });
        }
        if (prductItem === false) {
            mycartAPI/* default */.Z.updatecart(null, 1, othersellerReducer.sellerlist[0]?.FilterList[0]?.SkuDetailId, othersellerReducer.sellerlist[0]?.FilterList[0]?.SKUFilterPriceId).then((updateres)=>{});
        }
        setBuynowclick(true);
    // history.push('/cart')
    };
    (0,external_react_.useEffect)(()=>{
        if (false) {}
    }, [
        buynowclick
    ]);
    const productName =  false ? 0 : "";
    console.log("listdata, shoppingdetails, addtocart", listdata, shoppingCart, addToCartRdcr);
    if (!isMount) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(external_react_toastify_.ToastContainer, {
                position: "top-right"
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Header/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime.jsx(myAccountBreadcrumb/* default */.Z, {
                myAccount: "Products",
                productname: productName,
                activepage: "Sellers List"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                style: {
                    padding: "0px 0px 0px 27px !important"
                },
                children: /*#__PURE__*/ jsx_runtime.jsx("h1", {})
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "shopping-cart-wrapper card-details pb-70",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "container-fluid",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-12 col-sm-12 col-md-12 col-lg-12",
                            children: /*#__PURE__*/ jsx_runtime.jsx("main", {
                                id: "primary",
                                className: "site-main",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "shopping-cart",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "row",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "col-12 col-sm-12 col-md-12 col-lg-12 fixmobile",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "table-responsive sellerpdpListing",
                                                id: "last_purchaseddiv",
                                                children: [
                                                    listdata && listdata === 0 && /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        children: "no seller found"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("table", {
                                                        className: "table table-bordered",
                                                        id: "last_Purchased",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("thead", {
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime.jsx("th", {
                                                                            children: "Seller"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime.jsx("th", {
                                                                            style: {
                                                                                display: "none"
                                                                            }
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime.jsx("th", {
                                                                            style: {
                                                                                width: "150px"
                                                                            },
                                                                            children: "Price"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime.jsx("th", {
                                                                            children: "Delivery"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime.jsx("th", {
                                                                            children: "Actions"
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("tbody", {
                                                                children: (listdata || []).map((data)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                                                                        className: "pr-block",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime.jsx("td", {
                                                                                className: "text-capitalize",
                                                                                children: data.name
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime.jsx("td", {
                                                                                style: {
                                                                                    display: "none"
                                                                                },
                                                                                children: /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                                                    type: "hidden",
                                                                                    className: "PriceId",
                                                                                    value: "19051"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("td", {
                                                                                children: [
                                                                                    "₹",
                                                                                    data.SPPrice.toFixed(2)
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime.jsx("td", {
                                                                                children: data.DeliveryTime
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime.jsx("td", {
                                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                    className: "sellerbtnBox",
                                                                                    children: [
                                                                                        /*#__PURE__*/ jsx_runtime.jsx(AddtocartSeller, {
                                                                                            data: data,
                                                                                            shoppingCart: shoppingCart,
                                                                                            filtered: data,
                                                                                            notify: data.IsNotified,
                                                                                            PDPpage: true
                                                                                        }),
                                                                                        /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                                                                                            children: data.InStock ? /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                                className: "sellerbtnbuy",
                                                                                                children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                                                                    type: "button",
                                                                                                    onClick: ()=>handleBuynow(),
                                                                                                    className: "btn-cart btn_atc lg-btn buy-now mt-0",
                                                                                                    id: "sellerbuynow",
                                                                                                    children: "Buy Now"
                                                                                                })
                                                                                            }) : null
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            })
                                                                        ]
                                                                    }))
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(footer/* default */.Z, {})
        ]
    });
}
/* harmony default export */ const MySellerlist = (Otherseller);


/***/ }),

/***/ 2372:
/***/ (() => {



/***/ })

};
;