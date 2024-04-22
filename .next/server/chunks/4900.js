exports.id = 4900;
exports.ids = [4900];
exports.modules = {

/***/ 4900:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  DealdayProductOriginal: () => (/* binding */ DealdayProductOriginal),
  "default": () => (/* binding */ dealOfTheDay)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-elastic-carousel"
var external_react_elastic_carousel_ = __webpack_require__(2131);
var external_react_elastic_carousel_default = /*#__PURE__*/__webpack_require__.n(external_react_elastic_carousel_);
// EXTERNAL MODULE: ./node_modules/react-multi-carousel/lib/styles.css
var styles = __webpack_require__(2694);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./src/utils/injectReducer.js + 1 modules
var injectReducer = __webpack_require__(3671);
// EXTERNAL MODULE: ./src/utils/injectSaga.js + 2 modules
var injectSaga = __webpack_require__(7856);
// EXTERNAL MODULE: ./src/containers/LoadProducts/index.js
var LoadProducts = __webpack_require__(3880);
// EXTERNAL MODULE: external "reselect"
var external_reselect_ = __webpack_require__(6814);
;// CONCATENATED MODULE: ./src/containers/DealdayProductOriginal/constants.js
/*
 *
 * DealdayProduct constants
 *
 */ const constants_DEFAULT_ACTION = "app/DealdayProduct/DEFAULT_ACTION";
const constants_DEFAULT_ACTION_DEAL_SUCCESS = "app/DealdayProduct/DEFAULT_ACTION_DEAL_SUCCESS";
const constants_NEXT_PAGE = "app/DealdayProduct/NEXT_PAGE";
const constants_NEXT_PAGE_SUCCESS = "app/DealdayProduct/NEXT_PAGE_SUCCESS";
const PREVIOUS_PAGE = "app/DealdayProduct/PREVIOUS_PAGE";
const constants_ADD_TO_CART = "app/DealdayProduct/ADD_TO_CART";
const constants_ADD_TO_CART_SUCCESS = "app/DealdayProduct/ADD_TO_CART_SUCCESS";
const ADD_TO_CART_SAGA = "app/DealdayProduct/ADD_TO_CART_SAGA";
const GET_DEAL_WITH_PAGE = "app/DealdayProduct/GET_DEAL_WITH_PAGE";
const GET_DEAL_WITH_PAGE_SUCCESS = "app/DealdayProduct/GET_DEAL_WITH_PAGE_SUCCESS";
const GET_DEAL_WITH_PAGE_SAGA = "app/DealdayProduct/GET_DEAL_WITH_PAGE_SAGA";
const constants_CLOSE_MSG_BAR = "app/DealdayProduct/CLOSE_MSG_BAR";
const constants_RESPONCE_MSG = "app/DealdayProduct/RESPONCE_MSG";
const constants_SHOPPING_CART_DETAILS_HOME = "app/DealdayProduct/SHOPPING_CART_DETAILS_HOME"; // export const REMOVE_FROM_CART_SAGA = 'app/DealdayProduct/REMOVE_FROM_CART_SAGA';

;// CONCATENATED MODULE: ./src/containers/DealdayProductOriginal/actions.js
/*
 *
 * DealdayProduct actions
 *
 */ 
function defaultActiondeal() {
    return {
        type: DEFAULT_ACTION
    };
}
function nextBtn(pageNum, pageSize) {
    return {
        type: constants_NEXT_PAGE,
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

// EXTERNAL MODULE: ./src/containers/DealdayProductOriginal/carsoule.css
var carsoule = __webpack_require__(5465);
// EXTERNAL MODULE: external "immer"
var external_immer_ = __webpack_require__(7133);
;// CONCATENATED MODULE: ./src/containers/DealdayProductOriginal/reducer.js
/* eslint-disable no-case-declarations */ /* eslint-disable prefer-destructuring */ /* eslint-disable consistent-return */ /*
 *
 * DealdayProduct reducer
 *
 */ 


const initialState = {
    dealData: [],
    name: "",
    qty: 0,
    addToCartMsg: "",
    IsMsgBar: false,
    shoppingDetails: [],
    shoppingDetailsHome: [],
    DealofthdayData: []
};
// const stateDataDealDay = useSelector(state => state.dealdayProduct)
/* eslint-disable default-case, no-param-reassign */ const dealdayProductReducer = (state = initialState, action)=>produce(state, (draft)=>{
        switch(action.type){
            case CLOSE_MSG_BAR:
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
                draft.dealData = action.dealOfTheDayData.Data;
                break;
            case SHOPPING_CART_DETAILS:
                draft.shoppingDetails = action.shoppingcartDetails;
                break;
            case SHOPPING_CART_DETAILS_HOME:
                console.log("reduceraction deal=", action.shoppingcartDetails);
                draft.shoppingDetailsHome = action.shoppingcartDetails;
                break;
            case DEFAULT_ACTION_DEAL_SUCCESS:
                draft.DealofthdayData = action.dealOfTheDayData;
                break;
        }
    });
/* harmony default export */ const reducer = ((/* unused pure expression or super */ null && (dealdayProductReducer)));

// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__(6477);
// EXTERNAL MODULE: ./src/containers/MainPage/api/homeServices.js
var homeServices = __webpack_require__(4171);
// EXTERNAL MODULE: ./src/containers/MainPage/api/mycartAPI.js
var api_mycartAPI = __webpack_require__(6920);
;// CONCATENATED MODULE: ./src/containers/DealdayProductOriginal/saga.js
/* eslint-disable no-return-assign */ 




function* AddToCartAPI(action) {
    try {
        const updateCartData = yield call(mycartAPI.updatecart, null, action.payload.qty, action.payload.SkuId, action.payload.SKUFilterPriceId);
        const cartAllData = yield call(mycartAPI.getCartCommon);
        const shoppingcartDetails = yield call(mycartAPI.getShoppingcartDetails);
        yield put({
            type: GET_COMMON_CART_SUCCESS,
            cartAllData
        });
        yield put({
            type: ADD_TO_CART_SUCCESS,
            updateCartData
        });
        yield put({
            type: SHOPPING_CART_DETAILS,
            shoppingcartDetails
        });
    } catch (err) {
        console.log(err);
    }
}
function* NextBtnAPI(action) {
    try {
        const dealOfTheDayData = yield call(CustomsAPI.getDealofdayWithPage, action.pageNum, 9);
        const cartAllData = yield call(mycartAPI.getCartCommon);
        yield put({
            type: NEXT_PAGE_SUCCESS,
            dealOfTheDayData
        });
        yield put({
            type: DEFAULT_ACTION_DEAL_SUCCESS,
            dealOfTheDayData
        });
        yield put({
            type: GET_COMMON_CART_SUCCESS,
            cartAllData
        });
        const shoppingcartDetails = yield call(mycartAPI.getShoppingcartDetails);
        console.log("saga dealdayproduct=", shoppingcartDetails);
        yield put({
            type: SHOPPING_CART_DETAILS_HOME,
            shoppingcartDetails
        });
    } catch (err) {
        console.log(err);
    }
}
// function* NextBtnAPI(action) {
//   try {
//     const dealOfTheDayData = yield call(CustomsAPI.getDealofdayWithPage, action.pageNum, 9)
//     yield put({ type: NEXT_PAGE_SUCCESS, dealOfTheDayData });
//   } catch (err) {
//     console.log(err);
//   }
// }
function* deal() {
    yield takeEvery(ADD_TO_CART, AddToCartAPI);
    yield takeEvery(NEXT_PAGE, NextBtnAPI);
// yield takeEvery(DEFAULT_ACTION, NextBtnAPI);
}

// EXTERNAL MODULE: external "react-icons/fi"
var fi_ = __webpack_require__(2750);
// EXTERNAL MODULE: external "react-icons/bi"
var bi_ = __webpack_require__(6652);
// EXTERNAL MODULE: external "react-shimmer-effects"
var external_react_shimmer_effects_ = __webpack_require__(9777);
// EXTERNAL MODULE: ./src/useLocalStorage.js
var useLocalStorage = __webpack_require__(3650);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/containers/DealdayProductOriginal/dealOfTheDay.js
/* eslint-disable import/order */ /* eslint-disable prefer-destructuring */ /* eslint-disable react/prop-types */ /* eslint-disable array-callback-return */ /* eslint-disable indent */ /* eslint-disable no-unused-vars */ /**
 *
 * DealdayProduct
 *
 */ 

//import Carousel from 'react-multi-carousel';




// import useStateIfMounted from 'use-state-if-mounted';


// import '../../../assets1/css/default.min.css';
// // import '../../../public/assets1/css/bundle.css';
// import '../../../public/assets1/css/responsive.min.css';
// import '../../../public/assets1/css/style.min.css';


// import { initialWidth, responsive } from '../MainPage/commonFunctions/customCaurosalBtn';











// import { Wishlist } from 'containers/Wishlist/Loadable';
function DealdayProductOriginal(props) {
    // eslint-disable-next-line prefer-const
    // const { isActive } = props;
    // console.log("isActive..", isActive)
    // useInjectReducer({ key: 'dealdayProduct', reducer });
    // useInjectSaga({ key: 'deal', saga });
    // const [isSliding, setIsSliding] = useState(true);
    const router = (0,router_.useRouter)();
    const [pincodevalue, setpincodevalue] = (0,useLocalStorage/* useLocalStorage */._)("pincodevalue", null);
    const [pageNum, setNPButton] = (0,external_react_.useState)(1);
    const [FirstCall, setFirstCall] = (0,external_react_.useState)(0);
    const [count, setCount] = (0,external_react_.useState)(1);
    const [Dealofday, setgetDealofday] = (0,external_react_.useState)(props.dealOfDayProducts && props.dealOfDayProducts.Data || []);
    const [shoppingDetail, setShoppingDetail] = (0,external_react_.useState)([]);
    const [addToCartOBJ, setAddToCartOBJ] = (0,external_react_.useState)({});
    const [sliceNum, setsliceNum] = (0,external_react_.useState)(0);
    const [notify, setnotify] = (0,external_react_.useState)(false);
    const [shppingcart, setShppingcart] = (0,external_react_.useState)([]);
    // const [sliceIncDec, setsliceIncDec] = useState(0);
    const [totalPages, settotalPages] = (0,external_react_.useState)(1);
    const [nexta, setnext] = (0,external_react_.useState)(false);
    const [enableshimmer, setenableshimmer] = (0,external_react_.useState)("");
    const data = (0,external_react_redux_.useSelector)((state)=>state.homeScreen);
    const data1 = (0,external_react_redux_.useSelector)((state)=>state.dealdayProduct);
    const shimmerdata = [
        {
            "id": 1
        },
        {
            "id": 2
        },
        {
            "id": 3
        },
        {
            "id": 4
        },
        {
            "id": 5
        },
        {
            "id": 6
        },
        {
            "id": 7
        }
    ];
    const nextData = (0,external_react_redux_.useSelector)((state)=>state.dealdayProduct);
    const shoppingData = (0,external_react_redux_.useSelector)((state)=>state.dealdayProduct);
    const loadProducts = (0,external_react_redux_.useSelector)((state)=>state.loadProducts);
    const addToCart = (0,external_react_redux_.useSelector)((state)=>state.addToCart);
    const cartReducer = (0,external_react_redux_.useSelector)((state)=>state.viewCart);
    const dispatch = (0,external_react_redux_.useDispatch)();
    const myDataSelector = (state)=>state.dealdayProduct;
    // console.log("delaypage props=", props);
    //console.log("deal shoppingData=", shoppingData, data);
    // console.log("deal addToCart=", addToCart);
    // console.log('nn', loadProducts);
    const initialWidth = ()=>{
        // setsliceIncDec(floor(window.innerWidth / 251))
        let countSlice = 0;
        if (window.matchMedia("(min-width:2001px) and (max-width: 2500px)").matches) {
            countSlice = 1;
        }
        if (window.matchMedia("(min-width:1281px) and (max-width: 2000px)").matches) {
            countSlice = 1;
        }
        if (window.matchMedia("(min-width:997px) and (max-width:1280px)").matches) {
            countSlice = 1;
        }
        if (window.matchMedia("(min-width:465px) and (max-width: 996px)").matches) {
            countSlice = 1;
        }
        if (window.matchMedia("(min-width:0px) and (max-width: 464px)").matches) {
            countSlice = 1;
        }
        return countSlice;
    };
    /*useEffect(() => {
    mycartAPI.getShoppingcartDetails()
      .then((res) => {
        //console.log("reorderproductprint11", res);
        setShppingcart(res)
      })
  }, [router])*/ (0,external_react_.useEffect)(()=>{
        if (loadProducts !== undefined) {
            setnotify(loadProducts.notify);
        }
    }, [
        loadProducts
    ]);
    (0,external_react_.useEffect)(()=>{
        // if (Dealofday.length > 9 && sliceNum > Dealofday.length - 9) {
        //   setgetDealofday([...Dealofday, ...Dealofday])
        // }
        if (Dealofday && Dealofday.length > 9 && sliceNum > Dealofday.length - 9 && Dealofday.length - sliceNum < 5) {
            // setsliceNum(Dealofday.length - 5)
            changeSliceNum();
        }
    }, [
        sliceNum
    ]);
    // const handleItemClick = () => {
    //   setIsSliding(false);
    // }
    function changeSliceNum() {
        setsliceNum(Dealofday.length - initialWidth() - 1);
    }
    function changeSliceNumBack() {
        setsliceNum(0);
    }
    (0,external_react_.useEffect)(()=>{
        if (!props.dealOfDayProducts?.Data) {
            setFirstCall(FirstCall + 1);
            // dispatch(nextBtn(pageNum, 9))
            homeServices/* default */.Z.getDealofdayWithPage(pageNum, 9).then((response)=>{
                if (response && response.Data) {
                    setgetDealofday(response.Data);
                    settotalPages(response.Data.TotalNoOfPages);
                }
            });
        }
    }, []);
    // useEffect(() => {
    //   if (nextData !== undefined && nextData.dealData !== undefined) {
    //     setgetDealofday(nextData.dealData.Data)
    //     settotalPages(nextData.dealData.TotalNoOfPages)
    //   }
    // }, [nextData])
    (0,external_react_.useEffect)(()=>{
        if (nexta === true && nextData !== undefined) {
            setgetDealofday([
                ...Dealofday,
                ...nextData.dealData
            ]);
            setShoppingDetail(nextData.shoppingDetails);
        }
    }, [
        nextData,
        nexta,
        pincodevalue
    ]);
    (0,external_react_.useEffect)(()=>{
        if (shoppingDetail !== undefined) {
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
            // setnext(true)
            },
            children: Dealofday && JSON.stringify(Dealofday[Dealofday.length - 5]) !== JSON.stringify(Dealofday.slice(sliceNum, Dealofday.length)[0]) && /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "next round",
                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                    className: "lnr lnr-chevron-right"
                })
            })
        });
    };
    const CustomButtonGroupAsArrows = ({ next, previous, goToSlide, ...rest })=>{
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
        if (FirstCall > 0 && count < totalPages && pincodevalue !== "") {
            dispatch(nextBtn(pageNum, 9));
            setCount(count + 1);
        }
    }, [
        pageNum,
        pincodevalue
    ]);
    (0,external_react_.useEffect)(()=>{
        if (data && data.loading === true) {
            setenableshimmer(true);
        }
    }, [
        data
    ]);
    /*useEffect(() => {
    // console.log("useffect setShppingcart");
    mycartAPI.getShoppingcartDetails()
      .then((res) => {
        //console.log("resdealday=", res);
        setShppingcart(res)
      })
  }, []);*/ (0,external_react_.useEffect)(()=>{
        // console.log("ADDDDTODCART",addToCart);
        // if (addToCart !== undefined) {//console.log('heyyouarehereee',data)
        //dispatch(copyShopingCartDetails(addToCart.shoppingcartDetails))
        //setShppingcart(addToCart.shoppingcartDetails)
        //   console.log("new Deal Add Log",addToCart);
        //   if (props && props.setRefreshCartData) {
        //     props.setRefreshCartData(true)
        // }
        api_mycartAPI/* default */.Z.getShoppingcartDetails().then((res)=>{
            setShppingcart(res);
        });
    // }
    }, [
        addToCart,
        cartReducer
    ]);
    /* useEffect(() => {
     if (addToCart !== undefined && addToCart.shoppingcartDetails.length !== 0) {
       // console.log("useffect setShppingcart");
       setShppingcart(addToCart.shoppingcartDetails)
     }
   }, [addToCart,]); */ // useEffect(() => {
    //   if (data && data.loading === false) {
    //     setenableshimmer(false)
    //   }
    // }, [data])
    const Shimmergallery = (d)=>/*#__PURE__*/ jsx_runtime.jsx((external_react_elastic_carousel_default()), {
            responsive: responsive,
            // centerMode={false}
            infinite: true,
            arrows: true,
            transitionDuration: 500,
            renderButtonGroupOutside: true,
            renderArrowsWhenDisabled: false,
            customButtonGroup: /*#__PURE__*/ jsx_runtime.jsx(CustomButtonGroupAsArrows, {}),
            // renderButtonGroupOutside={false}
            // renderDotsOutside={false}
            // removeArrowOnDeviceType={['mobile']}
            // swipeable
            customLeftArrow: /*#__PURE__*/ jsx_runtime.jsx(CustomPrevious, {}),
            customRightArrow: /*#__PURE__*/ jsx_runtime.jsx(CustomNext, {}),
            children: shimmerdata.map((itm)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
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
                                        children: /*#__PURE__*/ jsx_runtime.jsx(external_react_shimmer_effects_.ShimmerPostItem, {
                                            card: true,
                                            title: true,
                                            cta: true
                                        })
                                    })
                                })
                            })
                        })
                    })
                }))
        });
    const Gallery = (d)=>/*#__PURE__*/ jsx_runtime.jsx((external_react_elastic_carousel_default()), {
            responsive: responsive,
            swipeable: false,
            draggable: false,
            keyBoardControl: true,
            arrows: true,
            // shouldResetAutoplay={false}
            // focusOnSelect={false}
            transitionDuration: 500,
            renderButtonGroupOutside: true,
            renderArrowsWhenDisabled: false,
            customButtonGroup: /*#__PURE__*/ jsx_runtime.jsx(CustomButtonGroupAsArrows, {}),
            customLeftArrow: /*#__PURE__*/ jsx_runtime.jsx(CustomPrevious, {}),
            customRightArrow: /*#__PURE__*/ jsx_runtime.jsx(CustomNext, {}),
            children: Dealofday !== undefined && (Dealofday.slice(sliceNum, sliceNum + Dealofday.length) || []).map((mapdata, i)=>mapdata.FiltersList.length !== 0 ? /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "tab-content",
                    style: {
                        margin: "15px"
                    },
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
                                            className: "active",
                                            children: /*#__PURE__*/ jsx_runtime.jsx(LoadProducts/* LoadProducts */.y, {
                                                source: "dealofday",
                                                data: mapdata,
                                                shppingcart: shppingcart,
                                                index: i,
                                                notify: notify,
                                                skulisting: true
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                }, i) : null)
        });
    // console.log("data.DealofthdayData.Data", Dealofday);
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: Dealofday && Dealofday !== undefined && Dealofday.length > 0 ? /*#__PURE__*/ jsx_runtime.jsx("div", {
            className:  false ? 0 : "container-fluid homescreenproductsection dealofparent",
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "row",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className:  false ? 0 : "col-12 dealofChild ",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "section-title product-spacing hm-11 mb-0",
                            style: {
                                paddingLeft: "15px"
                            },
                            children: /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    className: "dealofday",
                                    children: "Deal Of The Day"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx((external_react_elastic_carousel_default()), {
                            breakPoints: responsive,
                            itemsToShow: 4,
                            itemsToScroll: 1,
                            pagination: false,
                            showEmptySlots: true,
                            children: Dealofday !== undefined && (Dealofday.slice(sliceNum, sliceNum + Dealofday.length) || []).map((mapdata, i)=>mapdata.FiltersList.length !== 0 ? /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "tab-content",
                                    style: {
                                        margin: "15px"
                                    },
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
                                                            className: "active",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx(LoadProducts/* LoadProducts */.y, {
                                                                source: "dealofday",
                                                                data: mapdata,
                                                                shppingcart: shppingcart,
                                                                index: i,
                                                                notify: notify,
                                                                skulisting: true
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                }, i) : null)
                        })
                    ]
                })
            })
        }) : null
    });
}
/* harmony default export */ const dealOfTheDay = (DealdayProductOriginal);


/***/ }),

/***/ 5465:
/***/ (() => {



/***/ })

};
;