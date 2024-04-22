exports.id = 9672;
exports.ids = [9672];
exports.modules = {

/***/ 9672:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ToppSellingOriginal: () => (/* binding */ ToppSellingOriginal),
  "default": () => (/* binding */ topSeller)
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
// EXTERNAL MODULE: ./public/assets1/css/default.min.css
var default_min = __webpack_require__(4573);
// EXTERNAL MODULE: ./src/containers/HomeScreen/actions.js
var actions = __webpack_require__(6452);
// EXTERNAL MODULE: ./public/assets1/css/responsive.min.css
var responsive_min = __webpack_require__(8698);
// EXTERNAL MODULE: ./public/assets/css/style.min.css
var style_min = __webpack_require__(2269);
// EXTERNAL MODULE: ./src/containers/LoadProducts/index.js
var LoadProducts = __webpack_require__(3880);
// EXTERNAL MODULE: ./src/containers/ToppSellingOriginal/actions.js
var ToppSellingOriginal_actions = __webpack_require__(3574);
// EXTERNAL MODULE: ./src/containers/ToppSellingOriginal/carsoule.css
var carsoule = __webpack_require__(4183);
// EXTERNAL MODULE: external "immer"
var external_immer_ = __webpack_require__(7133);
var external_immer_default = /*#__PURE__*/__webpack_require__.n(external_immer_);
// EXTERNAL MODULE: ./src/containers/ToppSellingOriginal/constants.js
var constants = __webpack_require__(766);
;// CONCATENATED MODULE: ./src/containers/ToppSellingOriginal/reducer.js
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
    topsellingdata: [],
    shoppingDetailsHome: []
};
// const stateDataDealDay = useSelector(state => state.dealdayProduct)
/* eslint-disable default-case, no-param-reassign */ const ToppSellingReducer = (state = initialState, action)=>external_immer_default()(state, (draft)=>{
        switch(action.type){
            case constants/* DEFAULT_ACTION */.YI:
                break;
            case constants/* DEFAULT_ACTION_SUCCESS */.$_:
                console.log("actiontopselling", action);
                draft.topsellingdata = action.getTopsellingdb;
                break;
            case constants/* CLOSE_MSG_BAR */.jp:
                draft.IsMsgBar = false;
                break;
            case constants/* ADD_TO_CART_SUCCESS */._T:
                draft.IsMsgBar = true;
                draft.addToCartMsg = action.updateCartData.split("|")[1];
                break;
            case constants/* RESPONCE_MSG */.A6:
                draft.IsMsgBar = true;
                draft.addToCartMsg = action.recievedMsg;
                break;
            case constants/* SHOPPING_CART_DETAILS_HOME */.y7:
                draft.shoppingDetailsHome = action.shoppingcartDetails;
                break;
            case constants/* NEXT_PAGE_SUCCESS */.ED:
                draft.dealData = action.dealOfTheDayData;
                break;
        }
    });
/* harmony default export */ const reducer = (ToppSellingReducer);

// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__(6477);
// EXTERNAL MODULE: ./src/containers/HomePage/constants.js
var HomePage_constants = __webpack_require__(4595);
// EXTERNAL MODULE: ./src/containers/MainPage/api/homeServices.js
var homeServices = __webpack_require__(4171);
// EXTERNAL MODULE: ./src/containers/MainPage/api/mycartAPI.js
var mycartAPI = __webpack_require__(6920);
;// CONCATENATED MODULE: ./src/containers/ToppSellingOriginal/saga.js
/* eslint-disable no-return-assign */ 

// import { TOPSELLINGDB_SUCCESS } from '../HomeScreen/constants';



// const stateDataDealDay = useSelector(state => state.dealdayProduct)
// console.log('stateDataDealDay', stateDataDealDay);
function* AddToCartAPI(action) {
    try {
        const updateCartData = yield (0,effects_.call)(mycartAPI/* default */.Z.updatecart, null, action.payload.qty, action.payload.SkuId, action.payload.SKUFilterPriceId);
        const cartAllData = yield (0,effects_.call)(mycartAPI/* default */.Z.getCartCommon);
        const shoppingcartDetails = yield (0,effects_.call)(mycartAPI/* default */.Z.getShoppingcartDetails);
        yield (0,effects_.put)({
            type: HomePage_constants/* GET_COMMON_CART_SUCCESS */.J3,
            cartAllData
        });
        yield (0,effects_.put)({
            type: constants/* ADD_TO_CART_SUCCESS */._T,
            updateCartData
        });
        yield (0,effects_.put)({
            type: HomePage_constants/* SHOPPING_CART_DETAILS */.P9,
            shoppingcartDetails
        });
    } catch (err) {
        console.log(err);
        yield (0,effects_.put)(err);
    }
}
function* NextBtnAPI(action) {
    try {
        const dealOfTheDayData = yield (0,effects_.call)(homeServices/* default */.Z.getTopsellingdb, action.pageNum, 9, action.SkuDetailId);
        // const cartAllData = yield call(mycartAPI.getCartCommon)
        // const shoppingcartDetails = yield call(mycartAPI.getShoppingcartDetails)
        // console.log('dealOfTheDayData', dealOfTheDayData.Data, action.alldata);
        // dealOfTheDayData.Data.forEach(element => {
        //   console.log('elemen', element.SkuId);
        //   const bool = action.alldata.indexOf(itm => itm.SkuId === element.SkuId)
        //   if (bool !== (-1)) {
        //     console.log('bool if', bool);
        //   } else {
        //     console.log('bool else', bool);
        //   }
        // });
        yield (0,effects_.put)({
            type: constants/* NEXT_PAGE_SUCCESS */.ED,
            dealOfTheDayData
        });
        const shoppingcartDetails = yield (0,effects_.call)(mycartAPI/* default */.Z.getShoppingcartDetails);
        yield (0,effects_.put)({
            type: constants/* SHOPPING_CART_DETAILS_HOME */.y7,
            shoppingcartDetails
        });
    // yield put({ type: ADD_TO_CART_SUCCESS, updateCartData });
    // yield put({ type: SHOPPING_CART_DETAILS, shoppingcartDetails });
    } catch (err) {
        console.log(err);
        yield (0,effects_.put)(err);
    }
}
function* getopsellingdata() {
    const getTopsellingdb = yield (0,effects_.call)(homeServices/* default */.Z.getTopsellingdb, 1, 9);
    localStorage.setItem("getTopsellingdb", JSON.stringify(getTopsellingdb));
    yield (0,effects_.put)({
        type: constants/* DEFAULT_ACTION_SUCCESS */.$_,
        getTopsellingdb
    });
}
function* ToppSelling() {
    yield (0,effects_.takeEvery)(constants/* ADD_TO_CART */.G2, AddToCartAPI);
    yield (0,effects_.takeEvery)(constants/* NEXT_PAGE */.wt, NextBtnAPI);
    yield (0,effects_.takeEvery)(constants/* DEFAULT_ACTION */.YI, getopsellingdata);
}

// EXTERNAL MODULE: external "react-shimmer-effects"
var external_react_shimmer_effects_ = __webpack_require__(9777);
// EXTERNAL MODULE: external "react-icons/fi"
var fi_ = __webpack_require__(2750);
// EXTERNAL MODULE: external "react-icons/bi"
var bi_ = __webpack_require__(6652);
;// CONCATENATED MODULE: ./src/containers/ToppSellingOriginal/topSeller.js
/* eslint-disable import/order */ /* eslint-disable prefer-destructuring */ /* eslint-disable react/prop-types */ /* eslint-disable array-callback-return */ /* eslint-disable indent */ /* eslint-disable no-unused-vars */ /**
 *
 * DealdayProduct
 *
 */ 

//import Carousel from 'react-multi-carousel';



// import useStateIfMounted from 'use-state-if-mounted';




// import '../../../public/assets1/css/bundle.css';

// import '../../../public/assets1/css/style.min.css';


// import { initialWidth, responsive } from '../MainPage/commonFunctions/customCaurosalBtn';









// import defaultAction from './actions';
function ToppSellingOriginal(props) {
    // eslint-disable-next-line prefer-const
    (0,injectReducer/* useInjectReducer */.v)({
        key: "ToppSelling",
        reducer: reducer
    });
    (0,injectSaga/* useInjectSaga */.h)({
        key: "ToppSelling",
        saga: ToppSelling
    });
    const [pageNum, setNPButton] = (0,external_react_.useState)(1);
    const [FirstCall, setFirstCall] = (0,external_react_.useState)(0);
    const [count, setCount] = (0,external_react_.useState)(1);
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
    const [topSelling, setTopSelling] = (0,external_react_.useState)(props.topSellingProductsData && props.topSellingProductsData.skuListingModels || []);
    const [sliceNum, setsliceNum] = (0,external_react_.useState)(0);
    // const [sliceIncDec, setsliceIncDec] = useState(0);
    const [totalPages, settotalPages] = (0,external_react_.useState)(1);
    const [nexta, setnext] = (0,external_react_.useState)(false);
    const homeScreen = (0,external_react_redux_.useSelector)((state)=>state.homeScreen);
    const [shppingcart, setShppingcart] = (0,external_react_.useState)([]);
    // const mainPage = useSelector(state => state.mainPage)
    const [nextData, setNextData] = (0,external_react_.useState)(props.topSellingProductsData && props.topSellingProductsData.skuListingModels || []);
    const nextData1 = (0,external_react_redux_.useSelector)((state)=>state.ToppSelling && state.ToppSelling.dealData);
    const addToCart = (0,external_react_redux_.useSelector)((state)=>state.addToCart);
    // console.log("topselling nextData=", nextData);
    // console.log("topselling homeScreen=", homeScreen);
    // console.log('z', homeScreen, props, nextData);
    const dispatch = (0,external_react_redux_.useDispatch)();
    const store = (0,external_react_redux_.useStore)();
    (0,external_react_.useEffect)(()=>{
        const Topproduct = localStorage.getItem("getTopsellingdb");
        const topsellproduct = JSON.parse(Topproduct);
    }, []);
    // console.log('bbh', Topproduct, JSON.parse(Topproduct));
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
    // useEffect(() => {
    //   if (homeScreen === undefined) {
    //     dispatch(defaultAction())
    //   }
    // }, [homeScreen])
    // console.log('store', store.getState());
    // useEffect(() => {
    //   if (Topproduct !== undefined) {
    //     setTopSelling(JSON.parse(Topproduct).Data)
    //     settotalPages(JSON.parse(Topproduct).TotalNoOfPages)
    //   }
    // }, [])
    // useEffect(() => {
    //   if (FirstCall > 0 && topSellingDB !== undefined) {
    //     setTopSelling([...topSelling, ...topSellingDB.Topsellingdb])
    //   }
    // }, [topSellingDB])
    /*useEffect(() => {
    if (props && props.searchtopsell) {
      // else {
      setTopSelling(props.searchtopsell.dealData)
      // settotalPages(props && props.deal && props.deal.TotalNoOfPages)
      // }
    }
  }, [props])
  useEffect(() => {
    if (FirstCall > 0 && homeScreen !== undefined && homeScreen.Topsellingdb !== undefined) {
      setTopSelling(homeScreen.Topsellingdb.Data)
      settotalPages(homeScreen.Topsellingdb.TotalNoOfPages)
    }
    // else {
    //   setTopSelling(props && props.deal && props.deal.Data)
    //   settotalPages(props && props.deal && props.TotalNoOfPages)
    // }
  }, [homeScreen,])*/ // useEffect(() => {
    //   if (homeScreen !== undefined && homeScreen.DealofthdayData !== undefined) {
    //     setTopSelling(homeScreen.DealofthdayData.Data)
    //     settotalPages(homeScreen.DealofthdayData.TotalNoOfPages)
    //   }
    // }, [homeScreen])
    (0,external_react_.useEffect)(()=>{
        // if (topSelling.length > 9 && sliceNum > topSelling.length - 9) {
        //   setTopSelling([...topSelling, ...topSelling])
        // }
        if (topSelling.length > 9 && sliceNum > topSelling.length - 9 && topSelling.length - sliceNum < 5) {
            // setsliceNum(topSelling.length - 5)
            changeSliceNum();
        }
    }, [
        sliceNum
    ]);
    function changeSliceNum() {
        setsliceNum(topSelling.length - initialWidth() - 1);
    }
    function changeSliceNumBack() {
        setsliceNum(0);
    }
    (0,external_react_.useEffect)(()=>{
        setFirstCall(FirstCall + 1);
    //dispatch(nextBtn(1, 9, props.SkuDetailId))
    }, []);
    (0,external_react_.useEffect)(()=>{
        if (nexta === true && nextData !== undefined) {
            setTopSelling([
                ...topSelling,
                ...nextData.dealData.skuListingModels
            ]);
        }
    }, [
        nextData
    ]);
    /*useEffect(() => {
    
    CustomsAPI.getTopsellingdb(1, 8, props.SkuDetailId)
      .then(response => {
        setTopSelling(response.skuListingModels)
        
      })
  }, [])*/ (0,external_react_.useEffect)(()=>{
        if (nextData !== undefined) {
            // console.log("useffect setShppingcart");
            setShppingcart(nextData.shoppingDetailsHome);
        }
    }, [
        nextData
    ]);
    (0,external_react_.useEffect)(()=>{
        if (addToCart !== undefined) {
            dispatch((0,actions/* copyShopingCartDetails */.YG)(addToCart.shoppingcartDetails));
            //setShppingcart(addToCart.shoppingcartDetails)
            mycartAPI/* default */.Z.getShoppingcartDetails().then((res)=>{
                //console.log("reorderproductprint11", res);
                setShppingcart(res);
            });
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
    //     breakpoint: { max: 1280, min: 997 },
    //     items: 4,
    //   },
    //   miniTablet: {
    //     breakpoint: { max: 996, min: 465 },
    //     items: 3,
    //   },
    //   mobile: {
    //     breakpoint: { max: 464, min: 0 },
    //     items: 1,
    //   },
    // };
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
                if (topSelling.length > 5 && sliceNum < 5) {
                    // setsliceNum(Dealofday.length - 5)
                    changeSliceNumBack();
                }
            },
            children: sliceNum !== 0 && /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "previous round",
                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                    className: "lnr lnr-chevron-left"
                })
            })
        });
    };
    // // eslint-disable-next-line react/prop-types
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
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
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
    // const CustomButtonGroupAsArrows = ({ next, previous, onClick, ...rest }) => {
    //   const { carouselState: { currentSlide } } = rest;
    //   return (
    //     <div className="carousel-button-group gap-4 flex justify-end 
    //         items-center w-full">
    //       <button type="button" className='previous round1' onClick={() =>
    //         previous()}>
    //         <FiChevronLeft />
    //       </button>
    //       <button type="button" className='next round1' onClick={() => next()}>
    //         <BiChevronRight />
    //       </button>
    //     </div>
    //   );
    // }
    // useMemo(() => {
    //   setTopSelling(homeScreen.Topsellingdb.Data)
    //   settotalPages(homeScreen.Topsellingdb.TotalNoOfPages)
    // }, [homeScreen]
    // )
    (0,external_react_.useEffect)(()=>{
        // console.log('Dealofday', Dealofday);
        if (FirstCall > 0 && count < totalPages && props.SkuDetailId !== undefined) {
            dispatch((0,ToppSellingOriginal_actions/* nextBtn */.Ms)(pageNum, 9, props.SkuDetailId));
            setCount(count + 1);
        }
    }, [
        pageNum
    ]);
    // console.log("topSelling", topSelling, props);
    const Gallery = (d)=>/*#__PURE__*/ jsx_runtime.jsx((external_react_elastic_carousel_default()), {
            responsive: responsive,
            infinite: true,
            arrows: true,
            transitionDuration: 500,
            renderButtonGroupOutside: true,
            customButtonGroup: /*#__PURE__*/ jsx_runtime.jsx(CustomButtonGroupAsArrows, {}),
            customLeftArrow: /*#__PURE__*/ jsx_runtime.jsx(CustomPrevious, {}),
            customRightArrow: /*#__PURE__*/ jsx_runtime.jsx(CustomNext, {}),
            slidesToSlide: 1,
            children: topSelling !== undefined && (topSelling.slice(sliceNum, sliceNum + topSelling.length) || []).map((mapdata, i)=>mapdata.FiltersList.length !== 0 ? /*#__PURE__*/ jsx_runtime.jsx("div", {
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
                                            className: " active",
                                            children: /*#__PURE__*/ jsx_runtime.jsx(LoadProducts/* LoadProducts */.y, {
                                                source: "topseller",
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
    // //console.log('sssasa', homeScreen);
    // console.log(JSON.stringify(Dealofday[0]) !== JSON.stringify(Dealofday.slice(sliceNum, sliceNum + 8)[0]))
    const Shimmergallery = (d)=>/*#__PURE__*/ jsx_runtime.jsx((external_react_elastic_carousel_default()), {
            responsive: responsive,
            infinite: true,
            arrows: true,
            transitionDuration: 500,
            renderButtonGroupOutside: true,
            customButtonGroup: /*#__PURE__*/ jsx_runtime.jsx(CustomButtonGroupAsArrows, {}),
            // customLeftArrow={<CustomPrevious />}
            // customRightArrow={<CustomNext />}
            slidesToSlide: 1,
            children: shimmerdata.map((itm)=>itm.FiltersList.length !== 0 ? /*#__PURE__*/ jsx_runtime.jsx("div", {
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
                }, sliceNum) : null)
        });
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: topSelling !== undefined ? /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "container-fluid homescreenselling crossSellingParent",
            style: {
                display: topSelling.length === 0 ? "none" : "block"
            },
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "row",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "col-12 crossSellingChild",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "section-title product-spacing hm-11 mb-0  ",
                            style: {
                                marginLeft: "15px"
                            },
                            children: /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                children: topSelling && topSelling.length === 0 ? null : /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    children: "Top Sellers"
                                })
                            })
                        }),
                        topSelling && topSelling.length === 0 ? null : /*#__PURE__*/ jsx_runtime.jsx((external_react_elastic_carousel_default()), {
                            breakPoints: responsive,
                            itemsToShow: 4,
                            itemsToScroll: 1,
                            pagination: false,
                            showEmptySlots: true,
                            children: topSelling !== undefined && (topSelling.slice(sliceNum, sliceNum + topSelling.length) || []).map((mapdata, i)=>mapdata.FiltersList.length !== 0 ? /*#__PURE__*/ jsx_runtime.jsx("div", {
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
                                                            className: " active",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx(LoadProducts/* LoadProducts */.y, {
                                                                source: "topseller",
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
                                }, i) : null)
                        })
                    ]
                })
            })
        }) : null
    });
}
/* harmony default export */ const topSeller = (ToppSellingOriginal);


/***/ }),

/***/ 2694:
/***/ (() => {



/***/ }),

/***/ 4183:
/***/ (() => {



/***/ })

};
;