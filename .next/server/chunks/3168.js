exports.id = 3168;
exports.ids = [3168];
exports.modules = {

/***/ 8547:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  a: () => (/* binding */ RecentlyViewProduct),
  Z: () => (/* binding */ containers_RecentlyViewProduct)
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
// EXTERNAL MODULE: ./src/containers/MainPage/api/mycartAPI.js
var mycartAPI = __webpack_require__(6920);
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
// EXTERNAL MODULE: ./src/containers/MainPage/api/productdetail.js
var productdetail = __webpack_require__(3577);
;// CONCATENATED MODULE: ./src/containers/RecentlyViewProduct/constants.js
/*
 *
 * RecentlyViewProduct constants
 *
 */ const constants_DEFAULT_ACTION = "app/RecentlyViewProduct/DEFAULT_ACTION";
const NEXT_PAGE = "app/RecentlyViewProduct/NEXT_PAGE";
const constants_ADD_TO_CART = "app/RecentlyViewProduct/ADD_TO_CART";
const ADD_TO_CART_SUCCESS = "app/RecentlyViewProduct/ADD_TO_CART_SUCCESS";
const RESPONCE_MSG = "app/RecentlyViewProduct/RESPONCE_MSG";
const NEXT_PAGE_SUCCESS = "app/RecentlyViewProduct/NEXT_PAGE_SUCCESS";
const SHOPPING_CART_DETAILS = "app/RecentlyViewProduct/SHOPPING_CART_DETAILS";
const constants_CLOSE_MSG_BAR = "app/RecentlyViewProduct/CLOSE_MSG_BAR";
const constants_GET_RECENTLYVIEWED_PRODUCTS = "app/RecentlyViewProduct/GET_RECENTLYVIEWED_PRODUCTS";
const constants_GET_RECENTLYVIEWED_PRODUCTS_SUCCESS = "app/RecentlyViewProduct/GET_RECENTLYVIEWED_PRODUCTS_SUCCESS";
const constants_GET_RECENTLYVIEWED_PRODUCTS_FAILURE = "app/RecentlyViewProduct/GET_RECENTLYVIEWED_PRODUCTS_FAILURE";
const SHOPPING_CART_DETAILS_RECENT = "app/RecentlyViewProduct/SHOPPING_CART_DETAILS_RECENT";

;// CONCATENATED MODULE: ./src/containers/RecentlyViewProduct/actions.js
/*
 *
 * RecentlyViewProduct actions
 *
 */ 
function defaultAction() {
    return {
        type: DEFAULT_ACTION
    };
}
function getRecentlyviewedproduct(skuid) {
    console.log("rectent action", skuid);
    return {
        type: GET_RECENTLYVIEWED_PRODUCTS,
        skuid
    };
}
function getRecentlyviewedproductsuccess() {
    return {
        type: GET_RECENTLYVIEWED_PRODUCTS_SUCCESS
    };
}
function getRecentlyviewedproductfailure() {
    return {
        type: GET_RECENTLYVIEWED_PRODUCTS_FAILURE
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

// EXTERNAL MODULE: external "immer"
var external_immer_ = __webpack_require__(7133);
var external_immer_default = /*#__PURE__*/__webpack_require__.n(external_immer_);
;// CONCATENATED MODULE: ./src/containers/RecentlyViewProduct/reducer.js
/* eslint-disable prefer-destructuring */ /*
 *
 * RecentlyViewProduct reducer
 *
 */ 

const initialState = {
    dealData: [],
    name: "",
    qty: 0,
    addToCartMsg: "",
    IsMsgBar: false,
    shoppingDetails: [],
    shoppingDetailsRecent: [],
    DealofthdayData: [],
    Viewed: []
};
/* eslint-disable default-case, no-param-reassign */ // const Viewed = [];
const recentlyViewProductReducer = (state = initialState, action)=>external_immer_default()(state, (draft)=>{
        switch(action.type){
            case constants_DEFAULT_ACTION:
                draft.loading = true;
                draft = {
                    ...draft
                };
                break;
            case constants_GET_RECENTLYVIEWED_PRODUCTS:
                break;
            case constants_GET_RECENTLYVIEWED_PRODUCTS_SUCCESS:
                break;
            case constants_GET_RECENTLYVIEWED_PRODUCTS_FAILURE:
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
                draft.dealData = action.dealOfTheDayData.Data;
                break;
            case SHOPPING_CART_DETAILS:
                draft.shoppingDetails = action.shoppingcartDetails;
                break;
            case SHOPPING_CART_DETAILS_RECENT:
                draft.shoppingDetailsRecent = action.shoppingcartDetails;
                break;
        }
    });
/* harmony default export */ const reducer = (recentlyViewProductReducer);

// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__(6477);
;// CONCATENATED MODULE: ./src/containers/RecentlyViewProduct/saga.js




function* recentlyViewProductSaga() {
    yield (0,effects_.takeEvery)(constants_GET_RECENTLYVIEWED_PRODUCTS, getrepos);
}
function* getrepos(action) {
    try {
        const skudetaildata = yield (0,effects_.call)(productdetail/* default */.Z.getrecentlyviewd, localStorage.getItem("skuproduct1"), 1, 9);
        yield (0,effects_.put)({
            type: constants_GET_RECENTLYVIEWED_PRODUCTS,
            skudetaildata
        });
        const shoppingcartDetails = yield (0,effects_.call)(mycartAPI/* default */.Z.getShoppingcartDetails);
        yield (0,effects_.put)({
            type: SHOPPING_CART_DETAILS_RECENT,
            shoppingcartDetails
        });
    } catch (err) {
        yield (0,effects_.put)();
    }
}

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(6734);
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);
;// CONCATENATED MODULE: ./src/containers/RecentlyViewProduct/index.js
/* eslint-disable react/no-unused-prop-types */ /* eslint-disable no-unused-vars */ /* eslint-disable react/prop-types */ /* eslint-disable no-shadow */ /**
 *
 * RecentlyViewProduct
 *
 */ 

// import { propTypes } from 'react-bootstrap/esm/Image';
//import Carousel from 'react-multi-carousel';



// import { compose } from 'redux';
// import { createStructuredSelector } from 'reselect';












// import makeSelectRecentlyViewProduct from './selectors';
// import { RecentlyViewProduct } from './index';
// import { makeSelectHomeScreen } from '../HomeScreen/selectors'
// import { getrecent } from '../LoadProducts/actions';
function RecentlyViewProduct() {
    (0,injectReducer/* useInjectReducer */.v)({
        key: "recentlyViewProduct",
        reducer: reducer
    });
    (0,injectSaga/* useInjectSaga */.h)({
        key: "recentlyViewProduct",
        saga: recentlyViewProductSaga
    });
    const loadProducts = (0,external_react_redux_.useSelector)((state)=>state.loadProducts);
    // const [Recentlyvieweddata, setRecentlyvieweddata] = useState([]);
    // console.log('viewed', loadProducts,);
    // useEffect(() => {
    //   if (loadProducts !== undefined) {
    //     setRecentlyvieweddata(loadProducts.recentlist)
    //     // localStorage.setItem('Recentdata', JSON.stringify(loadProducts.recentlist))
    //   }
    // }, [loadProducts])
    //const datsee = localStorage.getItem('Recentdata')
    // console.log('sSS', JSON.parse(datsee),);
    // useEffect(() => {
    //   if (data !== undefined) {
    //     setRecentlyvieweddata(JSON.parse(data))
    //   } else {
    //     setRecentlyvieweddata(loadProducts.recentlist)
    //   }
    // }, [data, loadProducts])
    const [pageNum, setNPButton] = (0,external_react_.useState)(1);
    const [FirstCall, setFirstCall] = (0,external_react_.useState)(0);
    const [count, setCount] = (0,external_react_.useState)(1);
    const [Dealofday, setgetDealofday] = (0,external_react_.useState)([]);
    const [shoppingDetail, setShoppingDetail] = (0,external_react_.useState)([]);
    const [addToCartOBJ, setAddToCartOBJ] = (0,external_react_.useState)({});
    const [sliceNum, setsliceNum] = (0,external_react_.useState)(0);
    // const [sliceIncDec, setsliceIncDec] = useState(0);
    const [totalPages, settotalPages] = (0,external_react_.useState)(1);
    const [enableshimmer, setenableshimmer] = (0,external_react_.useState)("");
    const [shppingcart, setShppingcart] = (0,external_react_.useState)([]);
    const [next, setnext] = (0,external_react_.useState)(false);
    //const recentdata = localStorage.getItem('Recentdata')
    const Homedata = (0,external_react_redux_.useSelector)((state)=>state.homeScreen);
    const recentViewData = (0,external_react_redux_.useSelector)((state)=>state.recentlyViewProduct);
    const addToCart = (0,external_react_redux_.useSelector)((state)=>state.addToCart);
    const cartReducer = (0,external_react_redux_.useSelector)((state)=>state.viewCart);
    // const data = JSON.parse(recentdata)
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
    // const nextData = useSelector(state => state.dealdayProduct)
    const dispatch = (0,external_react_redux_.useDispatch)();
    const myDataSelector = (state)=>state.dealdayProduct;
    // console.log('nnkkkk', myDataSelector,);
    // console.log('homerecentdata', Homedata);
    // console.log("recentlyviewdata", recentViewData);
    // console.log("recently nextData", nextData);
    // console.log("recently addToCart", addToCart);
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
    //   dispatch(getrecent(localStorage.getItem('skuproductID')))
    // }, [])
    // useEffect(() => {
    //   if (localStorage.getItem('skuproduct1') !== undefined) {
    //     dispatch(getRecentlyviewedproduct(localStorage.getItem('skuproduct1')))
    //   }
    // }, [])
    (0,external_react_.useEffect)(()=>{
        if (FirstCall > 0 && Homedata !== undefined && Homedata.recentdataviewd !== undefined) {
            const jsonObject = Homedata.recentdataviewd.map(JSON.stringify);
            const uniqueSet = new Set(jsonObject);
            const uniqueArray = Array.from(uniqueSet).map(JSON.parse);
            if (uniqueArray.length !== 0) {
                setgetDealofday(uniqueArray);
                settotalPages(Homedata.recentdataviewd.TotalNoOfPages);
            }
        } else {
            productdetail/* default */.Z.getrecentlyviewd(external_js_cookie_default().get("recentlyViewed"), 1, 9).then((resrecentlyAPI)=>{
                const jsonObject = resrecentlyAPI?.Data.map(JSON.stringify);
                const uniqueSet = new Set(jsonObject);
                const uniqueArray = Array.from(uniqueSet).map(JSON.parse);
                if (uniqueArray.length !== 0) {
                    setgetDealofday(uniqueArray);
                //settotalPages(Homedata.recentdataviewd.TotalNoOfPages)
                }
            });
        }
    }, [
        Homedata,
        external_js_cookie_default().get("recentlyViewed")
    ]);
    // useEffect(() => {
    //   if (FirstCall > 0 && recentViewData !== undefined && recentViewData.Viewed !== undefined) {
    //     setgetDealofday(recentViewData.Viewed.Data)
    //     settotalPages(recentViewData.Viewed.TotalNoOfPages)
    //   }
    // }, [recentViewData])
    (0,external_react_.useEffect)(()=>{
        setFirstCall(FirstCall + 1);
        dispatch(nextBtn(pageNum, 9));
    // dispatch(getRecentlyviewedproduct(localStorage.getItem('skuproduct1')))
    }, []);
    (0,external_react_.useEffect)(()=>{
        if (next === true && Homedata && Homedata !== undefined) {
            // console.log("Homedata.recentdataviewd=", Homedata.recentdataviewd)
            setgetDealofday([
                ...Dealofday,
                ...Homedata.recentdataviewd
            ]);
        }
    }, [
        Homedata
    ]);
    (0,external_react_.useEffect)(()=>{
        // console.log("useffect setShppingcart");
        //setShppingcart(addToCart.shoppingcartDetails)
        mycartAPI/* default */.Z.getShoppingcartDetails().then((res)=>{
            //console.log("reorderproductprint11", res);
            setShppingcart(res);
        });
    }, [
        addToCart,
        cartReducer
    ]);
    (0,external_react_.useEffect)(()=>{
        if (recentViewData !== undefined && recentViewData.shoppingDetailsRecent && recentViewData.shoppingDetailsRecent.length > 0) {
            // console.log("useffect setShppingcart");
            setShppingcart(recentViewData.shoppingDetailsRecent);
        }
    }, [
        recentViewData
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
    // useEffect(() => {
    //   setFirstCall(FirstCall + 1)
    //   dispatch(getrecent(localStorage.getItem('skuproductID')))
    // }, [])
    // useEffect(() => {
    //   if (nextData !== undefined && nextData.dealData !== undefined) {
    //     setgetDealofday(nextData.dealData.Data)
    //     settotalPages(nextData.dealData.TotalNoOfPages)
    //   }
    // }, [nextData])
    // useEffect(() => {
    //   if (next === true && recentViewData.Viewed !== undefined) {
    //     console.log("Homedata.recentdataviewd=", recentViewData.Viewed)
    //     setgetDealofday([...Dealofday, ...recentViewData.Viewed.Data])
    //   }
    // }, [recentViewData])
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
    const CustomNext = ({ onClick, ...rest })=>// const { carouselState: { currentSlide } } = rest;
        /*#__PURE__*/ jsx_runtime.jsx("button", {
            type: "button",
            className: "arrow right",
            "aria-label": "rightbtn",
            onClick: ()=>{
                setsliceNum(sliceNum + initialWidth());
                setNPButton(pageNum + 1);
                setnext(true);
            },
            children: Dealofday && JSON.stringify(Dealofday[Dealofday.length - 5]) !== JSON.stringify(Dealofday.slice(sliceNum, Dealofday.length)[0]) && /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "next round",
                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                    className: "lnr lnr-chevron-right"
                })
            })
        });
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
        if (FirstCall > 0 && count < totalPages) {
            dispatch(nextBtn(pageNum, 9));
            setCount(count + 1);
        }
    }, [
        pageNum
    ]);
    (0,external_react_.useEffect)(()=>{
        if (Homedata && Homedata.loading === true) {
            setenableshimmer(true);
        }
    }, [
        Homedata
    ]);
    // useEffect(() => {
    //   if (data && data.loading === false) {
    //     setenableshimmer(false)
    //   }
    // }, [data])
    // console.log("recently Dealofday", Dealofday);
    const Shimmergallery = (d)=>/*#__PURE__*/ jsx_runtime.jsx((external_react_elastic_carousel_default()), {
            responsive: responsive,
            // centerMode={false}
            infinite: true,
            arrows: false,
            transitionDuration: 500,
            // renderButtonGroupOutside={false}
            // renderDotsOutside={false}
            // removeArrowOnDeviceType={['mobile']}
            // swipeable
            // customLeftArrow={<CustomPrevious />}
            // customRightArrow={<CustomNext />}
            slidesToSlide: 4,
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
                }, sliceNum))
        });
    const Gallery = (d)=>/*#__PURE__*/ jsx_runtime.jsx((external_react_elastic_carousel_default()), {
            responsive: responsive,
            // centerMode={false}
            infinite: true,
            arrows: true,
            transitionDuration: 500,
            renderButtonGroupOutside: true,
            // renderButtonGroupOutside={false}
            // renderDotsOutside={false}
            // removeArrowOnDeviceType={['mobile']}
            // swipeable
            customButtonGroup: /*#__PURE__*/ jsx_runtime.jsx(CustomButtonGroupAsArrows, {}),
            customLeftArrow: /*#__PURE__*/ jsx_runtime.jsx(CustomPrevious, {}),
            customRightArrow: /*#__PURE__*/ jsx_runtime.jsx(CustomNext, {}),
            slidesToSlide: 4,
            children: Dealofday !== undefined && (Dealofday.slice(sliceNum, sliceNum + Dealofday.length) || []).map((mapdata, i)=>mapdata.FiltersList.length !== 0 ? /*#__PURE__*/ jsx_runtime.jsx("div", {
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
                                            transform: "translate3d(0px, 0px, 0px)",
                                            transition: "all 0s ease 0s"
                                        },
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
                }, i) : null)
        });
    // console.log('Recentlyvieweddata', Recentlyvieweddata);
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: Dealofday !== undefined ? /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "container-fluid viewcartreorder homescreenrecently",
            style: {
                display: Dealofday.length === 0 ? "none" : "block"
            },
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "row",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "col-12",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "section-title product-spacing hm-11 mb-0",
                            children: /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                children: Dealofday && Dealofday.length === 0 ? null : /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    children: "Recently Viewed Product"
                                })
                            })
                        }),
                        Dealofday && Dealofday.length === 0 ? null : /*#__PURE__*/ jsx_runtime.jsx((external_react_elastic_carousel_default()), {
                            breakPoints: responsive,
                            itemsToShow: 4,
                            itemsToScroll: 1,
                            pagination: false,
                            showEmptySlots: true,
                            children: Dealofday !== undefined && (Dealofday.slice(sliceNum, sliceNum + Dealofday.length) || []).map((mapdata, i)=>mapdata.FiltersList.length !== 0 ? /*#__PURE__*/ jsx_runtime.jsx("div", {
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
                                                            transform: "translate3d(0px, 0px, 0px)",
                                                            transition: "all 0s ease 0s"
                                                        },
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
                                }, i) : null)
                        })
                    ]
                })
            })
        }) : null
    });
}
// RecentlyViewProduct.propTypes = {
//   recentlyViewProduct: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
//   repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
// };
/* harmony default export */ const containers_RecentlyViewProduct = (RecentlyViewProduct);


/***/ }),

/***/ 6061:
/***/ (() => {



/***/ })

};
;