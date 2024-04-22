exports.id = 9578;
exports.ids = [9578];
exports.modules = {

/***/ 9921:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A6: () => (/* binding */ RESPONCE_MSG),
/* harmony export */   ED: () => (/* binding */ NEXT_PAGE_SUCCESS),
/* harmony export */   G2: () => (/* binding */ ADD_TO_CART),
/* harmony export */   Vt: () => (/* binding */ GET_REORDER_PRODUCT_SUCCESS),
/* harmony export */   YI: () => (/* binding */ DEFAULT_ACTION),
/* harmony export */   _T: () => (/* binding */ ADD_TO_CART_SUCCESS),
/* harmony export */   bA: () => (/* binding */ SHOPPING_CART_DETAILS_REORDER),
/* harmony export */   jp: () => (/* binding */ CLOSE_MSG_BAR),
/* harmony export */   wt: () => (/* binding */ NEXT_PAGE)
/* harmony export */ });
/* unused harmony exports GET_REORDER_PRODUCT, PREVIOUS_PAGE, ADD_TO_CART_SAGA, GET_DEAL_WITH_PAGE, GET_DEAL_WITH_PAGE_SUCCESS, GET_DEAL_WITH_PAGE_SAGA */
/*
 *
 * ReorderProduct constants
 *
 */ const DEFAULT_ACTION = "app/ReorderProduct/DEFAULT_ACTION";
const GET_REORDER_PRODUCT = "app/ReorderProduct/GET_REORDER_PRODUCT";
const GET_REORDER_PRODUCT_SUCCESS = "app/ReorderProduct/GET_REORDER_PRODUCT_SUCCESS";
const NEXT_PAGE = "app/DealdayProduct/NEXT_PAGE";
const NEXT_PAGE_SUCCESS = "app/ReorderProduct/DEFAULT_ACTION";
const PREVIOUS_PAGE = "app/ReorderProduct/DEFAULT_ACTION";
const ADD_TO_CART = "app/ReorderProduct/DEFAULT_ACTION";
const ADD_TO_CART_SUCCESS = "app/ReorderProduct/DEFAULT_ACTION";
const ADD_TO_CART_SAGA = "app/ReorderProduct/DEFAULT_ACTION";
const GET_DEAL_WITH_PAGE = "app/ReorderProduct/DEFAULT_ACTION";
const GET_DEAL_WITH_PAGE_SUCCESS = "app/ReorderProduct/DEFAULT_ACTION";
const GET_DEAL_WITH_PAGE_SAGA = "app/ReorderProduct/DEFAULT_ACTION";
const CLOSE_MSG_BAR = "app/ReorderProduct/DEFAULT_ACTION";
const RESPONCE_MSG = "app/ReorderProduct/DEFAULT_ACTION";
const SHOPPING_CART_DETAILS_REORDER = "app/ReorderProduct/SHOPPING_CART_DETAILS_REORDER";


/***/ }),

/***/ 9366:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ ReorderProduct)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_elastic_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2131);
/* harmony import */ var react_elastic_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_elastic_carousel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_injectReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3671);
/* harmony import */ var _utils_injectSaga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7856);
/* harmony import */ var react_shimmer_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9777);
/* harmony import */ var react_shimmer_effects__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_shimmer_effects__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2750);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6652);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_icons_bi__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _LoadProducts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3880);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3118);
/* harmony import */ var _saga__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9175);
/* harmony import */ var _MainPage_api_Reorder__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7456);
/* harmony import */ var _MainPage_api_mycartAPI__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6920);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_14__);
/* eslint-disable no-undef */ /* eslint-disable no-unused-vars */ /* eslint-disable react/prop-types */ /**
 *
 * ReorderProduct
 *
 */ 

//import Carousel from 'react-multi-carousel';














function ReorderProduct({ setRefreshCartData }) {
    (0,_utils_injectReducer__WEBPACK_IMPORTED_MODULE_4__/* .useInjectReducer */ .v)({
        key: "reorderProduct",
        reducer: _reducer__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z
    });
    (0,_utils_injectSaga__WEBPACK_IMPORTED_MODULE_5__/* .useInjectSaga */ .h)({
        key: "reorderProduct",
        saga: _saga__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z
    });
    // const [reorderedlist, setreorderedlist] = useState([])
    // const reordecrreducer = useSelector(state => state.reorderProduct)
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_14__.useRouter)();
    const [pageNum, setNPButton] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const [FirstCall, setFirstCall] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [count, setCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const [Dealofday, setgetDealofday] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [shoppingDetail, setShoppingDetail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [addToCartOBJ, setAddToCartOBJ] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const [sliceNum, setsliceNum] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [shppingcart, setShppingcart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    // const [sliceIncDec, setsliceIncDec] = useState(0);
    const [totalPages, settotalPages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const cartReducer = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.viewCart);
    // const homeScreen = useSelector(state => state.homeScreen)
    // const selector = useSelector(state => state.home);
    const nextData = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.reorderProduct);
    const addToCart = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.addToCart);
    // const viewCartState = useSelector(state => state.viewCart);
    //console.log("nextDatareorderDetails==", nextData);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
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
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        _MainPage_api_mycartAPI__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z.getShoppingcartDetails().then((res)=>{
            //console.log("reorderproductprint11", res);
            setShppingcart(res);
        });
    }, [
        cartReducer
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // dispatch(listreorder())
        _MainPage_api_Reorder__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z.Reorder({}).then((response)=>{
            // setloading(false)
            if (response !== null) {
                setgetDealofday(response.GetSku);
            }
        }).catch((error)=>{
        //console.log('error:::', error);
        });
    }, []);
    /* useEffect(() => {
    if (nextData !== undefined && nextData.dealData !== undefined) {
      if (nextData && nextData.dealData.length > 0) {
        setgetDealofday(nextData.dealData)
      }
      settotalPages(nextData.dealData.TotalNoOfPages)
    }
  }, [nextData]) */ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (FirstCall > 1 && nextData !== undefined && Dealofday !== undefined && nextData.dealData !== undefined && nextData.dealData.GetSkuRelated !== undefined) {
            //console.log('Dealofday', Dealofday, nextData);
            if (Dealofday.length > 0) {
                setgetDealofday([
                    ...Dealofday,
                    ...nextData.dealData
                ]);
            }
            setShoppingDetail(nextData.shoppingDetails);
        }
    }, [
        nextData
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
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
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setFirstCall(FirstCall + 1);
    // if (FirstCall < 1) {
    //   console.log('index in First call');
    //   dispatch(nextBtn(1, 9))
    // }
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
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
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (nextData !== undefined) {
            //console.log("useffect setShppingcart");
            setShppingcart(nextData.shoppingDetailsReorder);
        }
    }, [
        nextData
    ]);
    /* useEffect(() => {
    if (viewCartState !== undefined) {
      console.log("useffect viewcart");
      setShppingcart(viewCartState.cart)
    }
  }, [viewCartState,]); */ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (setRefreshCartData) {
            setRefreshCartData(true);
        }
        if (addToCart !== undefined && addToCart.shoppingcartDetails.length !== 0) {
            //console.log("useffect setShppingcart");
            //setShppingcart(addToCart.shoppingcartDetails)
            _MainPage_api_mycartAPI__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z.getShoppingcartDetails().then((res)=>{
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
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
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
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "previous round",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "lnr lnr-chevron-left"
                })
            })
        });
    };
    // eslint-disable-next-line react/prop-types
    const CustomNext = ({ onClick, ...rest })=>{
        const { carouselState: { currentSlide } } = rest;
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            type: "button",
            className: "arrow right",
            "aria-label": "rightbtn",
            onClick: ()=>{
                setsliceNum(sliceNum + initialWidth());
                setNPButton(pageNum + 1);
            },
            children: Dealofday && JSON.stringify(Dealofday[Dealofday.length - 5]) !== JSON.stringify(Dealofday.slice(sliceNum, Dealofday.length)[0]) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "next round",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "lnr lnr-chevron-right"
                })
            })
        });
    };
    const CustomButtonGroupAsArrows = ({ next, previous, onClick, ...rest })=>{
        const { carouselState: { currentSlide } } = rest;
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "carousel-button-group gap-4 flex justify-end  items-center w-full",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    type: "button",
                    className: "previous round1",
                    "aria-label": "previousbtn",
                    onClick: ()=>previous(),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_7__.FiChevronLeft, {})
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    type: "button",
                    className: "next round1",
                    "aria-label": "nextbtn",
                    onClick: ()=>next(),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_8__.BiChevronRight, {})
                })
            ]
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
    //dispatch(nextBtn(1, 9))
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (FirstCall < 1) {
        //dispatch(nextBtn(pageNum, 9))
        }
        //console.log('nextBtn index', pageNum);
        if (count < totalPages) {
            //dispatch(nextBtn(pageNum, 9))
            setCount(count + 1);
        }
    }, [
        pageNum
    ]);
    const Gallery = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_elastic_carousel__WEBPACK_IMPORTED_MODULE_2___default()), {
            responsive: responsive,
            // centerMode={false}
            infinite: true,
            arrows: true,
            transitionDuration: 500,
            // renderButtonGroupOutside={false}
            // renderDotsOutside={false}
            // removeArrowOnDeviceType={['mobile']}
            // swipeable
            renderButtonGroupOutside: true,
            customButtonGroup: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomButtonGroupAsArrows, {}),
            customLeftArrow: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomPrevious, {}),
            customRightArrow: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomNext, {}),
            slidesToSlide: 4,
            children: Dealofday !== undefined && Dealofday.length > 0 && (Dealofday.slice(sliceNum, sliceNum + Dealofday.length) || []).map((mapdata, i)=>mapdata.FiltersList.length !== 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "tab-content",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "tab-pane fade show active",
                        id: "brand-one",
                        style: {
                            display: "block"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "product-gallary-wrapper",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "product-gallary-active owl-carousel owl-arrow-style sale-nav owl-theme owl-loaded",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "owl-stage-outer",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "owl-stage",
                                        style: {
                                            transform: " translate3d(0px, 0px, 0px)",
                                            transition: "all 0s ease 0s"
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: " active",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LoadProducts__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
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
    //console.log(" Dealofday", Dealofday);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: Dealofday !== undefined ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container-fluid viewcartreorder",
            style: {
                display: Dealofday.length === 0 ? "none" : "block"
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "row",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "col-12",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "section-title product-spacing hm-11 mb-0",
                            style: {
                                paddingLeft: "15px"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                children: Dealofday && Dealofday.length === 0 ? null : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "dealofday",
                                    children: "Reorder"
                                })
                            })
                        }),
                        Dealofday && Dealofday.length === 0 ? null : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_elastic_carousel__WEBPACK_IMPORTED_MODULE_2___default()), {
                            breakPoints: responsive,
                            itemsToShow: 4,
                            itemsToScroll: 1,
                            pagination: false,
                            showEmptySlots: true,
                            children: Dealofday !== undefined && Dealofday.length > 0 && (Dealofday.slice(sliceNum, sliceNum + Dealofday.length) || []).map((mapdata, i)=>mapdata.FiltersList.length !== 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "tab-content",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "tab-pane fade show active",
                                        id: "brand-one",
                                        style: {
                                            display: "block"
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "product-gallary-wrapper",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "product-gallary-active owl-carousel owl-arrow-style sale-nav owl-theme owl-loaded",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "owl-stage-outer",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "owl-stage",
                                                        style: {
                                                            transform: " translate3d(0px, 0px, 0px)",
                                                            transition: "all 0s ease 0s"
                                                        },
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: " active",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LoadProducts__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
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
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (ReorderProduct)));


/***/ }),

/***/ 3118:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export initialState */
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7133);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LoadProducts_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(629);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9921);
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
    shoppingDetails: [],
    shoppingDetailsReorder: []
};
/* eslint-disable default-case, no-param-reassign */ const reorderProductReducer = (state = initialState, action)=>immer__WEBPACK_IMPORTED_MODULE_0___default()(state, (draft)=>{
        switch(action.type){
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .DEFAULT_ACTION */ .YI:
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .GET_REORDER_PRODUCT_SUCCESS */ .Vt:
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .CLOSE_MSG_BAR */ .jp:
                draft.IsMsgBar = false;
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .ADD_TO_CART_SUCCESS */ ._T:
                draft.IsMsgBar = true;
                draft.addToCartMsg = action.updateCartData.split("|")[1];
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .RESPONCE_MSG */ .A6:
                draft.IsMsgBar = true;
                draft.addToCartMsg = action.recievedMsg;
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .NEXT_PAGE_SUCCESS */ .ED:
                draft.dealData = action.dealOfTheDayData.GetSku;
                break;
            case _LoadProducts_constants__WEBPACK_IMPORTED_MODULE_2__/* .SHOPPING_CART_DETAILS */ .P9:
                draft.shoppingDetails = action.shoppingcartDetails;
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .SHOPPING_CART_DETAILS_REORDER */ .bA:
                draft.shoppingDetailsReorder = action.shoppingcartDetails;
                break;
        }
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reorderProductReducer);


/***/ }),

/***/ 9175:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ reorderProductSaga)
/* harmony export */ });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6477);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HomePage_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4595);
/* harmony import */ var _MainPage_api_mycartAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6920);
/* harmony import */ var _MainPage_api_Reorder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7456);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9921);





// Individual exports for testing
function* reorderProductSaga() {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeEvery)(_constants__WEBPACK_IMPORTED_MODULE_3__/* .ADD_TO_CART */ .G2, AddToCartAPI);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeEvery)(_constants__WEBPACK_IMPORTED_MODULE_3__/* .NEXT_PAGE */ .wt, NextBtnAPI);
}
function* AddToCartAPI(action) {
    try {
        const updateCartData = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_MainPage_api_mycartAPI__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.updatecart, null, action.payload.qty, action.payload.SkuId, action.payload.SKUFilterPriceId);
        const cartAllData = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_MainPage_api_mycartAPI__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getCartCommon);
        const shoppingcartDetails = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_MainPage_api_mycartAPI__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getShoppingcartDetails);
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
            type: _HomePage_constants__WEBPACK_IMPORTED_MODULE_4__/* .GET_COMMON_CART_SUCCESS */ .J3,
            cartAllData
        });
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
            type: _constants__WEBPACK_IMPORTED_MODULE_3__/* .ADD_TO_CART_SUCCESS */ ._T,
            updateCartData
        });
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
            type: _HomePage_constants__WEBPACK_IMPORTED_MODULE_4__/* .SHOPPING_CART_DETAILS */ .P9,
            shoppingcartDetails
        });
    } catch (err) {
        console.log(err);
    }
}
function* NextBtnAPI(action) {
    try {
        const dealOfTheDayData = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_MainPage_api_Reorder__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.productReorder, action.pageNum, 9);
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
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
            type: _constants__WEBPACK_IMPORTED_MODULE_3__/* .NEXT_PAGE_SUCCESS */ .ED,
            dealOfTheDayData
        });
        const shoppingcartDetails = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_MainPage_api_mycartAPI__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getShoppingcartDetails);
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
            type: _constants__WEBPACK_IMPORTED_MODULE_3__/* .SHOPPING_CART_DETAILS_REORDER */ .bA,
            shoppingcartDetails
        });
    // yield put({ type: ADD_TO_CART_SUCCESS, updateCartData });
    // yield put({ type: SHOPPING_CART_DETAILS, shoppingcartDetails });
    } catch (err) {
        console.log(err);
    }
}


/***/ }),

/***/ 2694:
/***/ (() => {



/***/ })

};
;