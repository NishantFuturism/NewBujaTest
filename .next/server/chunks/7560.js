exports.id = 7560;
exports.ids = [7560];
exports.modules = {

/***/ 7560:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ShopBrand)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-multi-carousel"
var external_react_multi_carousel_ = __webpack_require__(5804);
var external_react_multi_carousel_default = /*#__PURE__*/__webpack_require__.n(external_react_multi_carousel_);
// EXTERNAL MODULE: ./node_modules/react-multi-carousel/lib/styles.css
var styles = __webpack_require__(2694);
// EXTERNAL MODULE: ./public/assets1/css/default.min.css
var default_min = __webpack_require__(4573);
// EXTERNAL MODULE: ./public/assets1/css/responsive.min.css
var responsive_min = __webpack_require__(8698);
// EXTERNAL MODULE: ./public/assets/css/style.min.css
var style_min = __webpack_require__(2269);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__(6695);
// EXTERNAL MODULE: external "reselect"
var external_reselect_ = __webpack_require__(6814);
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
// EXTERNAL MODULE: external "immer"
var external_immer_ = __webpack_require__(7133);
var external_immer_default = /*#__PURE__*/__webpack_require__.n(external_immer_);
;// CONCATENATED MODULE: ./src/containers/ShopBrand/constants.js
/*
import { NEXT_PAGE } from '../ToppSellingOriginal/constants';
 *
 * ShopBrand constants
 *
 */ const constants_DEFAULT_ACTION = "app/ShopBrand/DEFAULT_ACTION";
const constants_GET_BRAND_PRODUCTS = "app/ShopBrand/GET_BRAND_PRODUCTS";
const NEXT_PAGE = "app/ShopBrand/NEXT_PAGE";
const NEXT_PAGE_SUCCESS = "app/ShopBrand/NEXT_PAGE_SUCCESS";
const SHOPPING_CART_DETAILS_HOME = "app/ShopBrand/SHOPPING_CART_DETAILS_HOME";

;// CONCATENATED MODULE: ./src/containers/ShopBrand/reducer.js
/*
 *
 * ShopBrand reducer
 *
 */ 

const reducer_initialState = {
    dealData: [],
    name: "",
    qty: 0,
    addToCartMsg: "",
    IsMsgBar: false,
    DealofthdayData: [],
    shoppingDetailsHome: []
};
/* eslint-disable default-case, no-param-reassign */ const shopBrandReducer = (state = reducer_initialState, action)=>external_immer_default()(state, (draft)=>{
        switch(action.type){
            case constants_DEFAULT_ACTION:
                break;
            case NEXT_PAGE_SUCCESS:
                // console.log("action.dealOfTheDayData.Data", action.dealOfTheDayData.Data);
                draft.dealData = action.dealOfTheDayData.Data;
                break;
            case SHOPPING_CART_DETAILS_HOME:
                // console.log("reduceraction deal=", action.shoppingcartDetails)
                draft.shoppingDetailsHome = action.shoppingcartDetails;
                break;
        }
    });
/* harmony default export */ const reducer = (shopBrandReducer);

// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__(6477);
// EXTERNAL MODULE: ./src/containers/MainPage/api/homeServices.js
var homeServices = __webpack_require__(4171);
// EXTERNAL MODULE: ./src/containers/MainPage/api/mycartAPI.js
var mycartAPI = __webpack_require__(6920);
;// CONCATENATED MODULE: ./src/containers/ShopBrand/saga.js




// import { NEXT_PAGE_SUCCESS } from '../BrandShop/constants';
// Individual exports for testing
function* shopBrandSaga() {
    yield (0,effects_.takeEvery)(NEXT_PAGE, NextBtnAPI);
}
function* NextBtnAPI(action) {
    try {
        const dealOfTheDayData = yield (0,effects_.call)(homeServices/* default */.Z.getBrandList, action.pageNum, 9);
        yield (0,effects_.put)({
            type: NEXT_PAGE_SUCCESS,
            dealOfTheDayData
        });
        const shoppingcartDetails = yield (0,effects_.call)(mycartAPI/* default */.Z.getShoppingcartDetails);
        // console.log("saga dealdayproduct=", shoppingcartDetails);
        yield (0,effects_.put)({
            type: SHOPPING_CART_DETAILS_HOME,
            shoppingcartDetails
        });
    } catch (err) {
    // console.log(err);
    }
} // function* NextBtnAPI(action) {
 //   const dealOfTheDayData = yield call(CustomsAPI.getBrandList, action.pageNum, 9)
 //   // const cartAllData = yield call(mycartAPI.getCartCommon)
 //   // const shoppingcartDetails = yield call(mycartAPI.getShoppingcartDetails)
 //   // console.log('dealOfTheDayData', dealOfTheDayData.Data, action.alldata);
 //   // dealOfTheDayData.Data.forEach(element => {
 //   //   console.log('elemen', element.SkuId);
 //   //   const bool = action.alldata.indexOf(itm => itm.SkuId === element.SkuId)
 //   //   if (bool !== (-1)) {
 //   //     console.log('bool if', bool);
 //   //   } else {
 //   //     console.log('bool else', bool);
 //   //   }
 //   // });
 //   yield put({ type: NEXT_PAGE_SUCCESS, dealOfTheDayData });
 //   // yield put({ type: ADD_TO_CART_SUCCESS, updateCartData });
 //   // yield put({ type: SHOPPING_CART_DETAILS, shoppingcartDetails });
 // }

;// CONCATENATED MODULE: ./src/containers/ShopBrand/selectors.js


/**
 * Direct selector to the shopBrand state domain
 */ const selectShopBrandDomain = (state)=>state.shopBrand || initialState;
/**
 * Other specific selectors
 */ /**
 * Default selector used by ShopBrand
 */ const makeSelectShopBrand = ()=>createSelector(selectShopBrandDomain, (substate)=>substate);
/* harmony default export */ const selectors = ((/* unused pure expression or super */ null && (makeSelectShopBrand)));


// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/containers/ShopBrand/actions.js
/*
 *
 * ShopBrand actions
 *
 */ 
function defaultAction() {
    return {
        type: DEFAULT_ACTION
    };
}
function getbrandProducts() {
    return {
        type: GET_BRAND_PRODUCTS
    };
}
function nextBtn(pageNum, pageSize) {
    // console.log("pageNum",pageNum);
    return {
        type: NEXT_PAGE,
        pageNum,
        pageSize
    };
}

// EXTERNAL MODULE: ./src/containers/ShopBrand/carsoule.css
var carsoule = __webpack_require__(6839);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/containers/ShopBrand/shopBrand.js
/* eslint-disable react/prop-types */ /* eslint-disable jsx-a11y/click-events-have-key-events */ /* eslint-disable jsx-a11y/no-noninteractive-element-interactions */ /* eslint-disable no-unused-vars */ /**
 *
 * ShopBrand
 *
 */ 




// import '../../../assets1/css/bundle.css';

// import '../../../public/assets1/css/style.min.css';


//import { Link } from 'react-router-dom';











////import history from '../../utils/history';




// import Slider from 'react-slick'
function ShopBrand(props) {
    (0,injectReducer/* useInjectReducer */.v)({
        key: "shopBrand",
        reducer: reducer
    });
    (0,injectSaga/* useInjectSaga */.h)({
        key: "shopBrand",
        saga: shopBrandSaga
    });
    const router = (0,router_.useRouter)();
    const [nexta, setnext] = (0,external_react_.useState)(false);
    const [BrandList, setgetBrandList] = (0,external_react_.useState)([]);
    const [pageNum, setNPButton] = (0,external_react_.useState)(1);
    const [FirstCall, setFirstCall] = (0,external_react_.useState)(0);
    const [count, setCount] = (0,external_react_.useState)(1);
    const [Dealofday, setgetDealofday] = (0,external_react_.useState)(props.brandsDataHomePage && props.brandsDataHomePage.Data || []);
    const [sliceNum, setsliceNum] = (0,external_react_.useState)(0);
    const [totalPages, settotalPages] = (0,external_react_.useState)(1);
    const [showpre, setShowpre] = (0,external_react_.useState)(false);
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
        }
    ];
    const homeScreen = (0,external_react_redux_.useSelector)((state)=>state.homeScreen);
    // console.log("shop by brand", homeScreen);
    // useEffect(() => {
    //   if (brandlistdata && brandlistdata.shopbybrand !== undefined) {
    //     setgetBrandList(brandlistdata.shopbybrand)
    //   }
    //   // CustomsAPI.getBrandList({})
    //   //   .then(response => {
    //   //     console.log('getBrandList', response);
    //   //     setgetBrandList(response);
    //   //   })
    //   //   .catch(error => {
    //   //     console.log('error:::', error);
    //   //   });
    // }, [brandlistdata]);
    function brandProduct(PageUrl) {
    //router.push(`/brands/${PageUrl}`, { state: { PageUrl } })
    }
    const nextData = (0,external_react_redux_.useSelector)((state)=>state.shopBrand);
    // console.log("nextData", nextData);
    const dispatch = (0,external_react_redux_.useDispatch)();
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
    (0,external_react_.useEffect)(()=>{
        window.scrollTo(0, 0);
    }, []);
    (0,external_react_.useEffect)(()=>{
        if (FirstCall > 0 && homeScreen !== undefined && homeScreen.shopbybrand !== undefined) {
            // setgetDealofday(homeScreen.recommendeddata.Data)
            setgetDealofday(homeScreen.shopbybrand.Data);
            settotalPages(homeScreen.shopbybrand.TotalNoOfPages);
        }
    }, [
        homeScreen
    ]);
    (0,external_react_.useEffect)(()=>{
        // if (Dealofday.length > 9 && sliceNum > Dealofday.length - 9) {
        //   setgetDealofday([...Dealofday, ...Dealofday])
        // }
        if (Dealofday.length > 9 && sliceNum > Dealofday.length - 9 && Dealofday.length - sliceNum < initialWidth() + 1) {
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
        dispatch(nextBtn(pageNum, 9));
    }, [
        pageNum
    ]);
    (0,external_react_.useEffect)(()=>{
        if (nexta === true && nextData !== undefined) {
            setgetDealofday([
                ...Dealofday,
                ...nextData.dealData
            ]);
        // setShoppingDetail(nextData.shoppingDetails)
        }
    }, [
        nextData,
        nexta
    ]);
    // useEffect(() => {
    //   if (nextData !== undefined) {
    //     setgetDealofday([...Dealofday, ...nextData.dealData])
    //     // setShoppingDetail(nextData.shoppingDetails)
    //   }
    // }, [nextData])
    // useEffect(() => {
    //   if (shoppingDetail !== undefined) {
    //     // console.log('shoppingDetailmm', addToCartOBJ)
    //     shoppingDetail.forEach(itm => {
    //       objCreation(itm.SKUFilterPriceId, itm.Quantity)
    //     })
    //   }
    // }, [shoppingDetail])
    function objCreation(SKUFilterPriceId, Quantity) {
        const obj = {};
        obj[`${SKUFilterPriceId}`] = Quantity;
    // setAddToCartOBJ({ ...addToCartOBJ, ...obj })
    }
    const responsive = {
        superLargeDesktop: {
            breakpoint: {
                max: 2500,
                min: 2001
            },
            items: 8
        },
        desktop: {
            breakpoint: {
                max: 2000,
                min: 1281
            },
            items: 8,
            partialVisibilityGutter: 10
        },
        tablet: {
            breakpoint: {
                max: 1280,
                min: 996
            },
            items: 4
        },
        miniTablet: {
            breakpoint: {
                max: 995,
                min: 651
            },
            items: 3
        },
        mobile: {
            breakpoint: {
                max: 650,
                min: 475
            },
            items: 2
        },
        smallScreenmobile: {
            breakpoint: {
                max: 475,
                min: 0
            },
            items: 1
        }
    };
    // eslint-disable-next-line react/prop-types
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
    const CustomButtonGroupAsArrows = ({ next, previous, onClick, ...rest })=>{
        const { carouselState: { currentSlide } } = rest;
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "carousel-button-group gap-4 flex justify-end  items-center w-full",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("button", {
                    type: "button",
                    className: "previous round1",
                    id: "prevRound1",
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
    //     <div>
    //       <button type="button" className='previous round1' onClick={() => {
    //         setsliceNum(sliceNum - initialWidth())
    //         if (Dealofday.length > 5 && sliceNum < 5) {
    //           // setsliceNum(Dealofday.length - 5)
    //           changeSliceNumBack()
    //           // previous()
    //         }
    //       }}>
    //         <FiChevronLeft />
    //         {/* )} */}
    //       </button>
    //       <button type="button" className='next round1' onClick={() => {
    //         setnext(true)
    //         setsliceNum(sliceNum + initialWidth())
    //         setNPButton(pageNum + 1)
    //       }}
    //       >
    //         {Dealofday && (JSON.stringify(Dealofday[Dealofday.length - 5]) !== JSON.stringify(Dealofday.slice(sliceNum, Dealofday.length)[0])) &&
    //           (
    //             <BiChevronRight />
    //           )
    //         }
    //       </button>
    //     </div>
    //   );
    // }
    // useEffect(() => {
    //   if (FirstCall > 0 && count < totalPages) {
    //     dispatch(nextBtn(pageNum, 9))
    //     setCount(count + 1)
    //   }
    // }, [pageNum])
    const Gallery = (d)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
            id: "brandsSlider1",
            children: /*#__PURE__*/ jsx_runtime.jsx((external_react_multi_carousel_default()), {
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
                slidesToSlide: 1,
                children: Dealofday !== undefined && (Dealofday.slice(sliceNum, sliceNum + Dealofday.length) || []).map((mapdata, i)=>// <>
                    //   {/* <div className="owl-stage" style={{ transform: 'translate3d(-3915.62px, 0px, 0px)', transition: 'all 0.25s ease 0s', width: '5638.5px' }}>
                    //     <div className="owl-item cloned" style={{ width: '151.625px', marginRight: '5px' }}> */}
                    //   {/* <img referrerPolicy='no-referrer' src={mapdata.Thumbnail} style={{ width: 'inherit !important' }} alt="Kaveri Camphor" /> */}
                    //   <img src="https://productionadmin.adibuja.com/Media/Images/250x250/image_not_found.jpg" referrerPolicy='no-referrer' alt="britannia" onClick={() => brandProduct(mapdata.PageUrl)} />
                    //   {/* </div>
                    //   </div> */}
                    // </>
                    /*#__PURE__*/ jsx_runtime.jsx((external_react_default()).Fragment, {
                        children: mapdata.Thumbnail ? /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                style: {
                                    marginRight: "5px",
                                    height: "80px"
                                },
                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    href: `/brands/${mapdata.PageUrl}`,
                                    children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        style: {
                                            margin: "0px 10px 0px 10px"
                                        },
                                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                            className: "",
                                            src: mapdata.Thumbnail,
                                            referrerPolicy: "no-referrer",
                                            alt: "britannia",
                                            width: 162,
                                            height: 0,
                                            style: {
                                                width: "162px",
                                                height: "auto"
                                            },
                                            onClick: ()=>brandProduct(mapdata.PageUrl)
                                        })
                                    })
                                })
                            })
                        }) : /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {})
                    }, `shopbrand ${i}`))
            })
        });
    function DisplayAllBrands() {}
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "container-fluid ",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "row",
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "col-12",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "container-fluid pt-60 pb-20 homescreenshopbybrand",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        children: Dealofday !== undefined ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    style: {
                                        float: "left"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                        children: "Shop by Brands"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "brandViewall",
                                    style: {
                                        paddingTop: "10px",
                                        float: "right"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                        style: {
                                            color: "black",
                                            fontWeight: "600"
                                        },
                                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                            href: "/allbrands",
                                            children: "View All"
                                        })
                                    })
                                }),
                                Dealofday && Dealofday.length === 0 ? null : // <Gallery />
                                Gallery()
                            ]
                        }) : null
                    })
                })
            })
        })
    });
}
function mapDispatchToProps(dispatch) {
    return {
        dispatch
    };
}
const withConnect = (0,external_react_redux_.connect)(// mapStateToProps,
external_react_.memo)(ShopBrand);


/***/ }),

/***/ 6839:
/***/ (() => {



/***/ })

};
;