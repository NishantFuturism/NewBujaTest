"use strict";
exports.id = 6660;
exports.ids = [6660];
exports.modules = {

/***/ 6660:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  FeatureProduct: () => (/* binding */ FeatureProduct),
  "default": () => (/* binding */ featureProduct)
});

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
// EXTERNAL MODULE: external "react-icons/fi"
var fi_ = __webpack_require__(2750);
// EXTERNAL MODULE: external "react-icons/bi"
var bi_ = __webpack_require__(6652);
// EXTERNAL MODULE: ./src/containers/LoadProducts/index.js
var LoadProducts = __webpack_require__(3880);
// EXTERNAL MODULE: external "immer"
var external_immer_ = __webpack_require__(7133);
var external_immer_default = /*#__PURE__*/__webpack_require__.n(external_immer_);
// EXTERNAL MODULE: ./src/containers/LoadProducts/constants.js
var constants = __webpack_require__(629);
;// CONCATENATED MODULE: ./src/containers/FeatureProduct/constants.js
/*
 *
 * ReorderProduct constants
 *
 */ const DEFAULT_ACTION = "app/FeatureProduct/DEFAULT_ACTION";
const GET_REORDER_PRODUCT = "app/FeatureProduct/GET_REORDER_PRODUCT";
const GET_REORDER_PRODUCT_SUCCESS = "app/FeatureProduct/GET_REORDER_PRODUCT_SUCCESS";
const NEXT_PAGE = "app/DealdayProduct/NEXT_PAGE";
const NEXT_PAGE_SUCCESS = "app/FeatureProduct/DEFAULT_ACTION";
const PREVIOUS_PAGE = "app/FeatureProduct/DEFAULT_ACTION";
const ADD_TO_CART = "app/FeatureProduct/DEFAULT_ACTION";
const ADD_TO_CART_SUCCESS = "app/FeatureProduct/DEFAULT_ACTION";
const ADD_TO_CART_SAGA = "app/FeatureProduct/DEFAULT_ACTION";
const GET_DEAL_WITH_PAGE = "app/FeatureProduct/DEFAULT_ACTION";
const GET_DEAL_WITH_PAGE_SUCCESS = "app/FeatureProduct/DEFAULT_ACTION";
const GET_DEAL_WITH_PAGE_SAGA = "app/FeatureProduct/DEFAULT_ACTION";
const CLOSE_MSG_BAR = "app/FeatureProduct/DEFAULT_ACTION";
const RESPONCE_MSG = "app/FeatureProduct/DEFAULT_ACTION";

;// CONCATENATED MODULE: ./src/containers/FeatureProduct/reducer.js
/* eslint-disable prefer-destructuring */ /*
 *
 * ReorderProduct reducer
 *
 */ 


const initialState = {
    reoderlist: [],
    dealData: [],
    name: "",
    qty: 0,
    addToCartMsg: "",
    IsMsgBar: false,
    shoppingDetails: []
};
/* eslint-disable default-case, no-param-reassign */ const featureProductReducer = (state = initialState, action)=>external_immer_default()(state, (draft)=>{
        switch(action.type){
            case DEFAULT_ACTION:
                break;
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
                console.log("s", action);
                draft.dealData = action.dealOfTheDayData.GetSku;
                break;
            case constants/* SHOPPING_CART_DETAILS */.P9:
                draft.shoppingDetails = action.shoppingcartDetails;
                break;
        }
    });
/* harmony default export */ const reducer = (featureProductReducer);

// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__(6477);
// EXTERNAL MODULE: ./src/containers/HomePage/constants.js
var HomePage_constants = __webpack_require__(4595);
// EXTERNAL MODULE: ./src/containers/MainPage/api/mycartAPI.js
var mycartAPI = __webpack_require__(6920);
// EXTERNAL MODULE: ./src/containers/MainPage/api/homeServices.js
var homeServices = __webpack_require__(4171);
;// CONCATENATED MODULE: ./src/containers/FeatureProduct/saga.js





// Individual exports for testing
function* reorderProductSaga() {
    yield (0,effects_.takeEvery)(ADD_TO_CART, AddToCartAPI);
    yield (0,effects_.takeEvery)(NEXT_PAGE, NextBtnAPI);
}
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
            type: ADD_TO_CART_SUCCESS,
            updateCartData
        });
        yield (0,effects_.put)({
            type: HomePage_constants/* SHOPPING_CART_DETAILS */.P9,
            shoppingcartDetails
        });
    } catch (err) {
        console.log(err);
    }
}
function* NextBtnAPI(action) {
    try {
        const dealOfTheDayData = yield (0,effects_.call)(homeServices/* default */.Z.featureProduct, action.pageNum, 9);
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
            type: NEXT_PAGE_SUCCESS,
            dealOfTheDayData
        });
        const shoppingcartDetails = yield (0,effects_.call)(mycartAPI/* default */.Z.getShoppingcartDetails);
    // yield put({ type: SHOPPING_CART_DETAILS_REORDER, shoppingcartDetails });
    // yield put({ type: ADD_TO_CART_SUCCESS, updateCartData });
    // yield put({ type: SHOPPING_CART_DETAILS, shoppingcartDetails });
    } catch (err) {
        console.log(err);
    }
}

// EXTERNAL MODULE: ./src/containers/HomeScreen/actions.js
var actions = __webpack_require__(6452);
;// CONCATENATED MODULE: ./src/containers/FeatureProduct/featureProduct.js
/* eslint-disable no-undef */ /* eslint-disable no-unused-vars */ /* eslint-disable react/prop-types */ /**
 *
 * ReorderProduct
 *
 */ 

//import Carousel from 'react-multi-carousel';




// import { ShimmerPostItem } from 'react-shimmer-effects';



// import { nextBtn } from './actions';





function FeatureProduct(props) {
    (0,injectReducer/* useInjectReducer */.v)({
        key: "featureProduct",
        reducer: reducer
    });
    (0,injectSaga/* useInjectSaga */.h)({
        key: "featureProduct",
        saga: reorderProductSaga
    });
    // const [reorderedlist, setreorderedlist] = useState([])
    // const reordecrreducer = useSelector(state => state.reorderProduct)
    const [pageNum, setNPButton] = (0,external_react_.useState)(1);
    const [FirstCall, setFirstCall] = (0,external_react_.useState)(0);
    const [count, setCount] = (0,external_react_.useState)(1);
    const [Dealofday, setgetDealofday] = (0,external_react_.useState)(props.featuredProductsData && props.featuredProductsData.Data || []);
    const [shoppingDetail, setShoppingDetail] = (0,external_react_.useState)([]);
    const [addToCartOBJ, setAddToCartOBJ] = (0,external_react_.useState)({});
    const [sliceNum, setsliceNum] = (0,external_react_.useState)(0);
    const [shppingcart, setShppingcart] = (0,external_react_.useState)([]);
    // const [sliceIncDec, setsliceIncDec] = useState(0);
    const [totalPages, settotalPages] = (0,external_react_.useState)(1);
    // const homeScreen = useSelector(state => state.homeScreen)
    const nextData = (0,external_react_redux_.useSelector)((state)=>state.featureProduct);
    const addToCart = (0,external_react_redux_.useSelector)((state)=>state.addToCart);
    // console.log('dd', nextData);
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
    /*useEffect(() => {
    
      setTimeout(() => {
        CustomsAPI.featureProduct({})
          .then(response => {
           
            if (response !== null) {
              setgetDealofday(response.Data)
            }
          })
          .catch(error => {
            
          });
      }, 1500);
   
  }, [])*/ // useEffect(() => {
    //   if (nextData !== undefined && nextData.dealData !== undefined) {
    //     if (nextData && nextData.dealData.length > 0) {
    //       setgetDealofday(nextData.dealData)
    //     }
    //     settotalPages(nextData.dealData.TotalNoOfPages)
    //   }
    // }, [nextData])
    // useEffect(() => {
    //   if (FirstCall > 1 && nextData !== undefined && Dealofday !== undefined && nextData.dealData !== undefined && nextData.dealData.GetSkuRelated !== undefined) {
    //     console.log('Dealofday', Dealofday, nextData);
    //     if (Dealofday.length > 0) {
    //       setgetDealofday([...Dealofday, ...nextData.dealData])
    //     }
    //     setShoppingDetail(nextData.shoppingDetails)
    //   }
    // }, [nextData])
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
    // useEffect(() => {
    //   if (addToCart !== undefined && addToCart.shoppingcartDetails.length !== 0) {
    //     console.log("useffect setShppingcart");
    //     setShppingcart(addToCart.shoppingcartDetails)
    //   }
    // }, [addToCart,]);
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
        if (nextData !== undefined) {
            // console.log("useffect setShppingcart");
            mycartAPI/* default */.Z.getShoppingcartDetails().then((res)=>{
                //console.log("resdealday=", res);
                setShppingcart(res);
            });
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
    (0,external_react_.useEffect)(()=>{
        if (FirstCall < 1) {
        // dispatch(nextBtn(pageNum, 9))
        }
        //console.log('nextBtn index', pageNum);
        if (count < totalPages) {
            // dispatch(nextBtn(pageNum, 9))
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
            children: Dealofday !== undefined && Dealofday.length > 0 && (Dealofday.slice(sliceNum, sliceNum + Dealofday.length) || []).map((mapdata, i)=>mapdata.FiltersList.length !== 0 ? /*#__PURE__*/ jsx_runtime.jsx("div", {
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
                                                source: "featured",
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
        });
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: Dealofday !== undefined ? /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "container-fluid featuredproduct crossSellingParent",
            style: {
                display: Dealofday.length === 0 ? "none" : "block"
            },
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "row",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "col-12 crossSellingChild",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "section-title product-spacing hm-11 mb-0",
                            style: {
                                paddingLeft: "15px"
                            },
                            children: /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                children: Dealofday && Dealofday.length === 0 ? null : /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    className: "dealofday",
                                    children: "Featured"
                                })
                            })
                        }),
                        Dealofday && Dealofday.length === 0 ? null : /*#__PURE__*/ jsx_runtime.jsx((external_react_elastic_carousel_default()), {
                            breakPoints: responsive,
                            itemsToShow: 4,
                            itemsToScroll: 1,
                            pagination: false,
                            showEmptySlots: true,
                            children: Dealofday !== undefined && Dealofday.length > 0 && (Dealofday.slice(sliceNum, sliceNum + Dealofday.length) || []).map((mapdata, i)=>mapdata.FiltersList.length !== 0 ? /*#__PURE__*/ jsx_runtime.jsx("div", {
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
                                                            children: /*#__PURE__*/ jsx_runtime.jsx(LoadProducts/* default */.Z, {
                                                                source: "featured",
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
/* harmony default export */ const featureProduct = (FeatureProduct);


/***/ })

};
;