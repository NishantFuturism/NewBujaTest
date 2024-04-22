"use strict";
exports.id = 148;
exports.ids = [148];
exports.modules = {

/***/ 1536:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export initialState */
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7133);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6159);
/*
 *
 * HomeScreen reducer
 *
 */ 

const initialState = {
    shoppingCartDetails: [],
    BillBoardList: [],
    DealofthdayData: [],
    Banners: [],
    Ftrstaticweb: "",
    Footerqacontent: "",
    category: [],
    Ftr: {},
    Topsellingdb: [],
    clientdata: [],
    gooleapirespo: [],
    wishlistcpount: [],
    megaMenuResp: [],
    shopbybrand: [],
    reorderdata: [],
    loading: false,
    regesterdata: [],
    regesterflag: "",
    apifailuremsg: "",
    recommendeddata: [],
    wishlistpagedata: [],
    recentdataviewd: [],
    related: []
};
/* eslint-disable default-case, no-param-reassign */ const homeScreenReducer = (state = initialState, action)=>immer__WEBPACK_IMPORTED_MODULE_0___default()(state, (draft)=>{
        switch(action.type){
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .DEFAULT_ACTION */ .YI:
                draft.loading = true;
                draft = {
                    ...draft
                };
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .DEFAULT_ACTION_FAILURE */ .MB:
                draft.apifailuremsg = action.err;
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .GET_CLIENTID_SUCCESS */ .al:
                draft.clientdata = action.clientdata;
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .SHOPPING_CART_DETAILS */ .P9:
                draft.shoppingCartDetails = action.shoppingcartDetails;
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .GET_GOOGLELOCATION_SUCCESS */ .d5:
                draft.gooleapirespo = action.gooleapirespo;
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .GET_WISHLIST_COUNT_SUCCESS */ .bF:
                draft.wishlistcpount = action.wishlistcpount;
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .BILLBOARDLIST_SUCCESS */ .F4:
                draft.BillBoardList = action.data;
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .DEALOFDAY_SUCCESS */ .xe:
                draft.loading = false;
                draft.DealofthdayData = action.Dealoftheday;
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .BANNER_SUCCESS */ .bC:
                draft.Banners = action.Banners;
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .CATEGORY_SUCCESS */ .ot:
                draft.category = action.category;
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .SHOPBY_BRAND_SUCCESS */ .BU:
                draft.shopbybrand = action.shopbybrand;
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .FOOTERSTATIC_SUCCESS */ .hC:
                draft.Ftrstaticweb = action.Ftrstaticweb;
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .FOOTERCONTENT_SUCCESS */ .zq:
                draft.Footerqacontent = action.Footerqacontent;
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .FTR_SUCCESS */ .ey:
                draft.Ftr = action.Ftr;
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .TOPSELLINGDB_SUCCESS */ .mW:
                draft.loading = false;
                draft.Topsellingdb = action.getTopsellingdb;
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .MEGA_MENU_SUCCESS */ .QU:
                draft.megaMenuResp = action.megaMenuResp;
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .RESGESTER_RESPONSE */ .Hq:
                draft.regesterflag = action.flag;
                draft.regesterdata = action.data;
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .GET_REORDER_PRODUCT_SUCCESS */ .Vt:
                draft.loading = false;
                draft.reoderlist = action.reorderdata;
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .RECOMMENDED_SUCCESS */ .UQ:
                draft.loading = false;
                draft.recommendeddata = action.recommendeddata;
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .WISHLIST_PAGED_SUCCESS */ .vB:
                draft.loading = false;
                draft.wishlistpagedata = action.wishlistp;
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .RECENTLY_VIEWED_SUCCESS */ .FF:
                draft.loading = false;
                draft.recentdataviewd = [
                    ...draft.recentdataviewd,
                    ...action.recentdata.Data
                ];
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__/* .RELATED_SUCCESS */ .C3:
                draft.loading = false;
                draft.related = action.recentdata;
                break;
        }
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeScreenReducer);


/***/ }),

/***/ 6530:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ homeScreenSaga)
/* harmony export */ });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6477);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MainPage_api_homeServices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4171);
/* harmony import */ var _MainPage_api_mycartAPI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6920);
/* harmony import */ var _MainPage_api_productdetail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3577);
/* harmony import */ var _MainPage_api_Reorder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7456);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6734);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6159);






// import ReorderAPI from '../MainPage/api/Reorder';

// Individual exports for testing
// const initialWidth = () => {
//   const count = window.innerWidth / 251
//   return floor(count) + 4
// }
function* gethomedata() {
    try {
        // yield startLoadin('data', 'Dealoftheday')
        //const data = yield call(CustomsAPI.getBillBoard)
        //yield put({ type: BILLBOARDLIST_SUCCESS, data });
        const Banners = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_MainPage_api_homeServices__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getBanners);
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
            type: _constants__WEBPACK_IMPORTED_MODULE_6__/* .BANNER_SUCCESS */ .bC,
            Banners
        });
        //const Dealoftheday = yield call(CustomsAPI.getDealofdayWithPage, 1, 100)
        //yield put({ type: DEALOFDAY_SUCCESS, Dealoftheday });
        //const getTopsellingdb = yield call(CustomsAPI.getTopsellingdb, 1, 100)
        //yield put({ type: TOPSELLINGDB_SUCCESS, getTopsellingdb })
        const category = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_MainPage_api_homeServices__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getShopbycategory);
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
            type: _constants__WEBPACK_IMPORTED_MODULE_6__/* .CATEGORY_SUCCESS */ .ot,
            category
        });
        const shoppingcartDetails = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_MainPage_api_mycartAPI__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.getShoppingcartDetails);
        // console.log("saga shoppingcartDetails=", shoppingcartDetails);
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
            type: _constants__WEBPACK_IMPORTED_MODULE_6__/* .SHOPPING_CART_DETAILS */ .P9,
            shoppingcartDetails
        });
        // if (getTopsellingdb.Data.length === 0) {
        //   getTopsellingdb = yield call(CustomsAPI.getTopsellingAI, 1, 9)
        //   yield put({ type: TOPSELLINGDB_SUCCESS, getTopsellingdb })
        // }
        // above commented changes made for detect loc product listing
        // yield put({ type: DEFAULT_ACTION_SUCCESS, reorderdata });
        // const gooleapirespo = yield call(LocationApi.GoogleApi)
        // yield put({ type: GET_GOOGLELOCATION_SUCCESS, gooleapirespo });
        // const wishlistcpount = yield call(CustomsAPI.getwishlist)
        // yield put({ type: GET_WISHLIST_COUNT_SUCCESS, wishlistcpount });
        // // yield initialWidth()
        // const clientdata = yield call(CustomsAPI.getClientid)
        // yield put({ type: GET_CLIENTID_SUCCESS, clientdata });
        // const recommendeddata = yield call(ProductDetailAPI.getrecomended, 1, 9)
        // const megaMenuResp = yield call(CustomsAPI.getMegamainmenu)
        // yield put({ type: RECOMMENDED_SUCCESS, recommendeddata });
        const recentdata = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_MainPage_api_productdetail__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getrecentlyviewd, js_cookie__WEBPACK_IMPORTED_MODULE_5___default().get("recentlyViewed"), 1, 9) // action.skuId 
        ;
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
            type: _constants__WEBPACK_IMPORTED_MODULE_6__/* .RECENTLY_VIEWED_SUCCESS */ .FF,
            recentdata
        });
        const shopbybrand = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_MainPage_api_homeServices__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getBrandList, 1, 9);
        // console.log('bran', shopbybrand);
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
            type: _constants__WEBPACK_IMPORTED_MODULE_6__/* .SHOPBY_BRAND_SUCCESS */ .BU,
            shopbybrand
        });
        const Ftrstaticweb = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_MainPage_api_homeServices__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getFooterstaticwebsection);
        const wishlistp = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_MainPage_api_homeServices__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getwhishlistpaged, 1, 9);
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
            type: _constants__WEBPACK_IMPORTED_MODULE_6__/* .WISHLIST_PAGED_SUCCESS */ .vB,
            wishlistp
        });
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
            type: _constants__WEBPACK_IMPORTED_MODULE_6__/* .FOOTERSTATIC_SUCCESS */ .hC,
            Ftrstaticweb
        });
        const Footerqacontent = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_MainPage_api_homeServices__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getFooterstaticparamqacontent);
        // console.log('s', Footerqacontent);
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
            type: _constants__WEBPACK_IMPORTED_MODULE_6__/* .FOOTERCONTENT_SUCCESS */ .zq,
            Footerqacontent
        });
        const Ftr = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_MainPage_api_homeServices__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getFooter);
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
            type: _constants__WEBPACK_IMPORTED_MODULE_6__/* .FTR_SUCCESS */ .ey,
            Ftr
        });
        const reorderdata = sessionStorage.getItem("CustGUID") === null ? null : yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_MainPage_api_Reorder__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.productReorder, 1, 9);
        // if (reorderdata.Message) {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
            type: _constants__WEBPACK_IMPORTED_MODULE_6__/* .GET_REORDER_PRODUCT_SUCCESS */ .Vt,
            reorderdata
        });
    // }
    } catch (err) {
    // yield put({ type: DEFAULT_ACTION_SUCCESS, err });
    }
}
function* homeScreenSaga() {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeEvery)(_constants__WEBPACK_IMPORTED_MODULE_6__/* .DEFAULT_ACTION */ .YI, gethomedata);
}


/***/ }),

/***/ 1254:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  l: () => (/* binding */ RecommendedProduct)
});

// UNUSED EXPORTS: default

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
// EXTERNAL MODULE: external "react-icons/fi"
var fi_ = __webpack_require__(2750);
// EXTERNAL MODULE: external "react-icons/bi"
var bi_ = __webpack_require__(6652);
// EXTERNAL MODULE: ./src/containers/HomeScreen/actions.js
var actions = __webpack_require__(6452);
// EXTERNAL MODULE: ./src/containers/LoadProducts/index.js
var LoadProducts = __webpack_require__(3880);
// EXTERNAL MODULE: ./src/containers/MainPage/api/mycartAPI.js
var mycartAPI = __webpack_require__(6920);
;// CONCATENATED MODULE: ./src/containers/RecommendedProduct/constants.js
/*
 *
 * RecommendedProduct constants
 *
 */ const constants_DEFAULT_ACTION = "app/RecommendedProduct/DEFAULT_ACTION";
const NEXT_PAGE = "app/RecommendedProduct/NEXT_PAGE";
const NEXT_PAGE_SUCCESS = "app/RecommendedProduct/NEXT_PAGE_SUCCESS";
const PREVIOUS_PAGE = "app/RecommendedProduct/PREVIOUS_PAGE";
const constants_ADD_TO_CART = "app/RecommendedProduct/ADD_TO_CART";
const ADD_TO_CART_SUCCESS = "app/RecommendedProduct/ADD_TO_CART_SUCCESS";
const ADD_TO_CART_SAGA = "app/RecommendedProduct/ADD_TO_CART_SAGA";
const GET_DEAL_WITH_PAGE = "app/RecommendedProduct/GET_DEAL_WITH_PAGE";
const GET_DEAL_WITH_PAGE_SUCCESS = "app/RecommendedProduct/GET_DEAL_WITH_PAGE_SUCCESS";
const GET_DEAL_WITH_PAGE_SAGA = "app/RecommendedProduct/GET_DEAL_WITH_PAGE_SAGA";
const constants_CLOSE_MSG_BAR = "app/RecommendedProduct/CLOSE_MSG_BAR";
const RESPONCE_MSG = "app/RecommendedProduct/RESPONCE_MSG";
const SHOPPING_CART_DETAILS_HOME = "app/RecommendedProduct/SHOPPING_CART_DETAILS_HOME";

;// CONCATENATED MODULE: ./src/containers/RecommendedProduct/actions.js
/*
 *
 * RecommendedProduct actions
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

// EXTERNAL MODULE: external "immer"
var external_immer_ = __webpack_require__(7133);
var external_immer_default = /*#__PURE__*/__webpack_require__.n(external_immer_);
;// CONCATENATED MODULE: ./src/containers/RecommendedProduct/reducer.js
/* eslint-disable prefer-destructuring */ /*
 *
 * RecommendedProduct reducer
 *
 */ 

const initialState = {
    dealData: [],
    name: "",
    qty: 0,
    addToCartMsg: "",
    IsMsgBar: false
};
/* eslint-disable default-case, no-param-reassign */ const recommendedProductReducer = (state = initialState, action)=>external_immer_default()(state, (draft)=>{
        switch(action.type){
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
            case SHOPPING_CART_DETAILS_HOME:
                draft.shoppingDetailsHome = action.shoppingcartDetails;
                break;
        }
    });
/* harmony default export */ const reducer = (recommendedProductReducer);

// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__(6477);
// EXTERNAL MODULE: ./src/containers/HomePage/constants.js
var constants = __webpack_require__(4595);
// EXTERNAL MODULE: ./src/containers/MainPage/api/productdetail.js
var productdetail = __webpack_require__(3577);
;// CONCATENATED MODULE: ./src/containers/RecommendedProduct/saga.js





// Individual exports for testing
function* recommendedProductSaga() {
    yield (0,effects_.takeEvery)(constants_ADD_TO_CART, AddToCartAPI);
    yield (0,effects_.takeEvery)(NEXT_PAGE, NextBtnAPI);
}
// function* getrepos(action) {
//   console.log('action saga', action);
//   try {
//     const recomendedproductdata = yield call(ProductDetailAPI.getrecomended)
//     yield put({ type: GET_RECOMENDED_PRODUCTS_SUCCESS, recomendedproductdata });
//   } catch (err) {
//     yield put();
//   }
// }
function* AddToCartAPI(action) {
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
}
function* NextBtnAPI(action) {
    const dealOfTheDayData = yield (0,effects_.call)(productdetail/* default */.Z.getrecomended, action.pageNum, 9);
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
    yield (0,effects_.put)({
        type: SHOPPING_CART_DETAILS_HOME,
        shoppingcartDetails
    });
// yield put({ type: ADD_TO_CART_SUCCESS, updateCartData });
// yield put({ type: SHOPPING_CART_DETAILS, shoppingcartDetails });
}

;// CONCATENATED MODULE: ./src/containers/RecommendedProduct/index.js
/* eslint-disable prefer-destructuring */ /* eslint-disable react/prop-types */ /* eslint-disable array-callback-return */ /* eslint-disable indent */ /* eslint-disable no-unused-vars */ /**
 *
 * RecommendedProduct
 *
 */ 

//import Carousel from 'react-multi-carousel';



// import useStateIfMounted from 'use-state-if-mounted';





// import '../../../assets1/css/default.min.css';
// // import '../../../public/assets1/css/bundle.css';
// import '../../../public/assets1/css/responsive.min.css';
// import '../../../public/assets1/css/style.min.css';


// import { initialWidth, responsive } from '../MainPage/commonFunctions/customCaurosalBtn';

// import './carsoule.css';



function RecommendedProduct() {
    (0,injectReducer/* useInjectReducer */.v)({
        key: "recommendedProduct",
        reducer: reducer
    });
    (0,injectSaga/* useInjectSaga */.h)({
        key: "recommendedProduct",
        saga: recommendedProductSaga
    });
    const [pageNum, setNPButton] = (0,external_react_.useState)(1);
    const [FirstCall, setFirstCall] = (0,external_react_.useState)(0);
    const [count, setCount] = (0,external_react_.useState)(1);
    const [Dealofday, setgetDealofday] = (0,external_react_.useState)([]);
    const [shppingcart, setShppingcart] = (0,external_react_.useState)([]);
    const [shoppingDetail, setShoppingDetail] = (0,external_react_.useState)([]);
    const [addToCartOBJ, setAddToCartOBJ] = (0,external_react_.useState)({});
    const [sliceNum, setsliceNum] = (0,external_react_.useState)(0);
    // const [sliceIncDec, setsliceIncDec] = useState(0);
    const [totalPages, settotalPages] = (0,external_react_.useState)(1);
    const homeScreen = (0,external_react_redux_.useSelector)((state)=>state.homeScreen);
    // console.log('hj', homeScreen);
    const nextData = (0,external_react_redux_.useSelector)((state)=>state.recommendedProduct);
    const addToCart = (0,external_react_redux_.useSelector)((state)=>state.addToCart);
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
        if (FirstCall > 0 && homeScreen !== undefined && homeScreen.recommendeddata !== undefined) {
            // setgetDealofday(homeScreen.recommendeddata.Data)
            settotalPages(homeScreen.recommendeddata.TotalNoOfPages);
        }
    }, [
        homeScreen
    ]);
    (0,external_react_.useEffect)(()=>{
        // if (Dealofday.length > 9 && sliceNum > Dealofday.length - 9) {
        //   setgetDealofday([...Dealofday, ...Dealofday])
        // }
        if (Dealofday?.length > 9 && sliceNum > Dealofday.length - 9 && Dealofday.length - sliceNum < 5) {
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
    }, []);
    (0,external_react_.useEffect)(()=>{
        if (nextData !== undefined) {
            // setgetDealofday([...Dealofday, ...nextData.dealData])
            setShoppingDetail(nextData.shoppingDetails);
        }
    }, [
        nextData
    ]);
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
        if (false) {}
    }, []);
    (0,external_react_.useEffect)(()=>{
        if (FirstCall > 0 && count < totalPages) {
            dispatch(nextBtn(pageNum, 9));
            setCount(count + 1);
        }
    }, [
        pageNum
    ]);
    (0,external_react_.useEffect)(()=>{
        if (nextData !== undefined) {
            // console.log("useffect setShppingcart");
            mycartAPI/* default */.Z.getShoppingcartDetails().then((res)=>{
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
                setShppingcart(res);
            });
        }
    }, [
        addToCart
    ]);
    const Gallery = (d)=>/*#__PURE__*/ jsx_runtime.jsx((external_react_elastic_carousel_default()), {
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
            children: Dealofday?.length > 0 && (Dealofday.slice(sliceNum, sliceNum + Dealofday.length) || []).map((mapdata, i)=>mapdata.FiltersList.length !== 0 ? /*#__PURE__*/ jsx_runtime.jsx("div", {
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
    // console.log("Dealofday====",Dealofday);
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: homeScreen && homeScreen.loading !== true && Dealofday !== null && Dealofday !== undefined ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "container-fluid homescreenrecommended",
            style: {
                display: Dealofday.length === 0 ? "none" : "block"
            },
            children: [
                console.log("Dealofday", Dealofday),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "col-12",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "section-title product-spacing hm-11 mb-0",
                                children: /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                    children: Dealofday && Dealofday.length === 0 ? null : /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        className: "dealofday",
                                        children: "Recommended"
                                    })
                                })
                            }),
                            Dealofday && Dealofday.length === 0 ? null : /*#__PURE__*/ jsx_runtime.jsx((external_react_elastic_carousel_default()), {
                                breakPoints: responsive,
                                itemsToShow: 4,
                                itemsToScroll: 1,
                                pagination: false,
                                children: Dealofday?.length > 0 && (Dealofday.slice(sliceNum, sliceNum + Dealofday.length) || []).map((mapdata, i)=>mapdata.FiltersList.length !== 0 ? /*#__PURE__*/ jsx_runtime.jsx("div", {
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
            ]
        }) : null
    });
}
/* harmony default export */ const containers_RecommendedProduct = ((/* unused pure expression or super */ null && (RecommendedProduct)));


/***/ })

};
;