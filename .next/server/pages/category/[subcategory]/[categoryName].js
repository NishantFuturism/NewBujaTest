(() => {
var exports = {};
exports.id = 4829;
exports.ids = [4829];
exports.modules = {

/***/ 6413:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2Fcategory_2F_5Bsubcategory_5D_2F_5BcategoryName_5D_preferredRegion_absolutePagePath_private_next_pages_2Fcategory_2F_5Bsubcategory_5D_2F_5BcategoryName_5D_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_),
  getServerSideProps: () => (/* binding */ next_route_loaderpage_2Fcategory_2F_5Bsubcategory_5D_2F_5BcategoryName_5D_preferredRegion_absolutePagePath_private_next_pages_2Fcategory_2F_5Bsubcategory_5D_2F_5BcategoryName_5D_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_getServerSideProps),
  getStaticPaths: () => (/* binding */ getStaticPaths),
  getStaticProps: () => (/* binding */ getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./src/pages/category/[subcategory]/[categoryName].js
var _categoryName_namespaceObject = {};
__webpack_require__.r(_categoryName_namespaceObject);
__webpack_require__.d(_categoryName_namespaceObject, {
  Subcategory: () => (Subcategory),
  "default": () => (_categoryName_),
  getServerSideProps: () => (getServerSideProps)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(3185);
var module_default = /*#__PURE__*/__webpack_require__.n(pages_module);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7182);
// EXTERNAL MODULE: ./src/pages/_document.js
var _document = __webpack_require__(9987);
// EXTERNAL MODULE: ./src/pages/_app.js + 2 modules
var _app = __webpack_require__(1717);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@icon/linearicons/linearicons.css
var linearicons = __webpack_require__(3884);
;// CONCATENATED MODULE: external "lodash/debounce"
const debounce_namespaceObject = require("lodash/debounce");
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce_namespaceObject);
// EXTERNAL MODULE: external "lodash/groupBy"
var groupBy_ = __webpack_require__(8492);
var groupBy_default = /*#__PURE__*/__webpack_require__.n(groupBy_);
;// CONCATENATED MODULE: external "lodash/set"
const set_namespaceObject = require("lodash/set");
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./src/utils/injectReducer.js + 1 modules
var injectReducer = __webpack_require__(3671);
// EXTERNAL MODULE: ./src/utils/injectSaga.js + 2 modules
var injectSaga = __webpack_require__(7856);
// EXTERNAL MODULE: ./public/assets1/css/bundle.css
var bundle = __webpack_require__(3858);
// EXTERNAL MODULE: ./public/assets1/css/default.min.css
var default_min = __webpack_require__(4573);
// EXTERNAL MODULE: ./public/assets1/css/responsive.min.css
var responsive_min = __webpack_require__(8698);
// EXTERNAL MODULE: ./public/assets/css/style.min.css
var style_min = __webpack_require__(2269);
// EXTERNAL MODULE: ./src/components/Header/index.js + 22 modules
var Header = __webpack_require__(3497);
// EXTERNAL MODULE: ./src/components/SubNavigation/index.js
var SubNavigation = __webpack_require__(9474);
// EXTERNAL MODULE: ./src/containers/LoadProducts/index.js
var LoadProducts = __webpack_require__(3880);
// EXTERNAL MODULE: ./src/containers/App/constants.js
var constants = __webpack_require__(1824);
// EXTERNAL MODULE: ./src/containers/MainPage/api/productlisting.js
var productlisting = __webpack_require__(9597);
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(1187);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__(8819);
;// CONCATENATED MODULE: ./src/containers/Subcategory/constants.js
/*
 *
 * Subcategory constants
 *
 */ const constants_DEFAULT_ACTION = "app/Subcategory/DEFAULT_ACTION";
const constants_PRODUCT_LIST = "app/Subcategory/PRODUCT_LIST";
const constants_PRODUCT_LIST_SUCCESS = "app/Subcategory/PRODUCT_LIST_SUCCESS";
const constants_PRODUCT_LIST_FAILURE = "app/Subcategory/PRODUCT_LIST_FAILURE";
const constants_PRODUCT_BRAND_LIST_FILTER = "app/Subcategory/PRODUCT_BRAND_LIST_FILTER";
const constants_PRODUCT_BRAND_LIST_FILTER_SUCCESS = "app/Subcategory/PRODUCT_BRAND_LIST_FILTER_SUCCESS";
const SHOPPING_CART_DETAILS = "app/Subcategory/SHOPPING_CART_DETAILS";
const RemoveOldData = "app/Subcategory/RemoveOldData";

;// CONCATENATED MODULE: ./src/containers/Subcategory/actions.js
/*
 *
 * Subcategory actions
 *
 */ 
function defaultAction(data) {
    return {
        type: DEFAULT_ACTION,
        data
    };
}
function getproductlist(page, caturl, parentcatURL, min, max) {
    console.log(" caturl, parentcatURL", caturl, parentcatURL);
    return {
        type: PRODUCT_LIST,
        page,
        caturl,
        parentcatURL,
        min,
        max
    };
}
function getproductlistsuccess(productdata) {
    return {
        type: PRODUCT_LIST_SUCCESS,
        productdata
    };
}
function getproductlistfailure(error) {
    return {
        type: PRODUCT_LIST_FAILURE,
        error
    };
}
function getbrandListfilter(valueString, valuepackString, fieldString, valuediscountstring, caturl, min, max, sortby) {
    console.log("getbrandListfilter action", min, max, sortby);
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
function RemovingOldData() {
    return {
        type: RemoveOldData
    };
}
function getbrandListfiltersuccess() {
    return {
        type: PRODUCT_BRAND_LIST_FILTER_SUCCESS
    };
}

// EXTERNAL MODULE: external "immer"
var external_immer_ = __webpack_require__(7133);
var external_immer_default = /*#__PURE__*/__webpack_require__.n(external_immer_);
;// CONCATENATED MODULE: ./src/containers/Subcategory/reducer.js
/*
 *
 * Subcategory reducer
 *
 */ 

const initialState = {
    subCategoryProductList: {},
    shoppingCartDetails: [],
    error: "",
    caturl: "",
    filterdata: [],
    advanceSkusListingByFilterModels: [],
    productlistdata: [],
    productlist: [],
    scrollvalue: 400,
    parentcaturl: [],
    url: [],
    divenable: false,
    CategoryName: "",
    loading: ""
};
/* eslint-disable default-case, no-param-reassign */ const subcategoryReducer = (state = initialState, action)=>external_immer_default()(state, (draft)=>{
        switch(action.type){
            case constants_PRODUCT_LIST:
                draft.loading = true;
                draft = {
                    ...draft
                };
                break;
            case constants_PRODUCT_LIST_SUCCESS:
                draft.loading = false;
                draft.subCategoryProductList = action.subCategoryProductList;
                draft.productlist = draft.productlist.concat(action.subCategoryProductList.skuListingModels);
                break;
            case constants_PRODUCT_BRAND_LIST_FILTER_SUCCESS:
                draft.loading = false;
                draft.advanceSkusListingByFilterModels = action.brandlistfilterdata.advanceSkusListingByFilterModels;
                break;
            case SHOPPING_CART_DETAILS:
                // draft = { ...draft, shoppingCartDetails: action.shoppingcartDetails }
                draft.shoppingCartDetails = action.shoppingcartDetails;
                break;
            case RemoveOldData:
                draft.productlist = [];
                break;
        }
    });
/* harmony default export */ const reducer = (subcategoryReducer);

// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__(6477);
// EXTERNAL MODULE: ./src/containers/MainPage/api/homeServices.js
var homeServices = __webpack_require__(4171);
// EXTERNAL MODULE: ./src/containers/MainPage/api/mycartAPI.js
var mycartAPI = __webpack_require__(6920);
;// CONCATENATED MODULE: ./src/containers/Subcategory/saga.js





function* subcategorySaga() {
    yield (0,effects_.takeEvery)(constants_PRODUCT_LIST, getrepos);
    yield (0,effects_.takeEvery)(constants_PRODUCT_BRAND_LIST_FILTER, getbrandfilter);
}
function* getrepos(action) {
    console.log("caturl--------", action.caturl);
    if (action.caturl && action.caturl !== undefined) {
        const subCategoryProductList = yield (0,effects_.call)(homeServices/* default */.Z.getSubCategoryProductList, action.page, action.caturl, action.parentcatURL, action.min, action.max);
        yield (0,effects_.put)({
            type: constants_PRODUCT_LIST_SUCCESS,
            subCategoryProductList
        });
        const shoppingcartDetails = yield (0,effects_.call)(mycartAPI/* default */.Z.getShoppingcartDetails);
        yield (0,effects_.put)({
            type: SHOPPING_CART_DETAILS,
            shoppingcartDetails
        });
    }
}
function* getbrandfilter(action) {
    const brandlistfilterdata = yield (0,effects_.call)(productlisting/* default */.Z.getskuFilterlisting, action.valueString, action.valuepackString, action.fieldString, action.valuediscountstring, action.caturl, action.min, action.max, action.sortby);
    yield (0,effects_.put)({
        type: constants_PRODUCT_BRAND_LIST_FILTER_SUCCESS,
        brandlistfilterdata
    });
}

// EXTERNAL MODULE: ./src/containers/Subcategory/slider.css
var slider = __webpack_require__(554);
// EXTERNAL MODULE: ./src/components/Footer/footer.js + 5 modules
var footer = __webpack_require__(8371);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./src/containers/HomeScreen/actions.js
var actions = __webpack_require__(6452);
// EXTERNAL MODULE: external "multiselect-react-dropdown"
var external_multiselect_react_dropdown_ = __webpack_require__(9261);
var external_multiselect_react_dropdown_default = /*#__PURE__*/__webpack_require__.n(external_multiselect_react_dropdown_);
// EXTERNAL MODULE: external "react-sliding-pane"
var external_react_sliding_pane_ = __webpack_require__(7453);
var external_react_sliding_pane_default = /*#__PURE__*/__webpack_require__.n(external_react_sliding_pane_);
// EXTERNAL MODULE: ./node_modules/react-sliding-pane/dist/react-sliding-pane.css
var react_sliding_pane = __webpack_require__(8191);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react-multi-carousel"
var external_react_multi_carousel_ = __webpack_require__(5804);
// EXTERNAL MODULE: ./node_modules/react-multi-carousel/lib/styles.css
var styles = __webpack_require__(2694);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react-icons/fi"
var fi_ = __webpack_require__(2750);
// EXTERNAL MODULE: external "react-icons/bi"
var bi_ = __webpack_require__(6652);
// EXTERNAL MODULE: ./src/containers/RelatedCategory/relatedcategory.css
var relatedcategory = __webpack_require__(9770);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/containers/RelatedCategory/index.js
/* eslint-disable react/prop-types */ /* eslint-disable jsx-a11y/click-events-have-key-events */ /* eslint-disable jsx-a11y/no-noninteractive-element-interactions */ /* eslint-disable no-unused-vars */ /**
 *
 * RelatedCategory
 *
 */ 




// import '../../../assets1/css/bundle.css';

// import '../../../public/assets1/css/style.min.css';


//import { Link } from 'react-router-dom';


// import { compose } from 'redux';
// import { createStructuredSelector } from 'reselect';
// import { useInjectReducer } from 'utils/injectReducer';
// import { useInjectSaga } from 'utils/injectSaga';
// import { ShimmerThumbnail } from "react-shimmer-effects";


// import reducer from './reducer';
// import saga from './saga';
//import history from '../../utils/history';
// import { nextBtn } from './actions';
// import './carsoule.css';



// import Slider from 'react-slick'
function RelatedCategory(props) {
    //   useInjectReducer({ key: 'shopBrand', reducer });
    //   useInjectSaga({ key: 'shopBrand', saga });
    const [nexta, setnext] = (0,external_react_.useState)(false);
    const [BrandList, setgetBrandList] = (0,external_react_.useState)([]);
    const [pageNum, setNPButton] = (0,external_react_.useState)(1);
    const [FirstCall, setFirstCall] = (0,external_react_.useState)(0);
    const [count, setCount] = (0,external_react_.useState)(1);
    const [Dealofday, setgetDealofday] = (0,external_react_.useState)(props.relatedCategoryDetails || []);
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
    const router = (0,router_.useRouter)();
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
        // localStorage.setItem('PLPCat', PageUrl)
        const st = PageUrl.toString();
        const v1 = st.split("/");
        const v3 = v1[2];
        // const st1 = v1.toString();
        // console.log('pmyy', st, v1, v3, st1, pageurl, patrentcaturl);
        // localStorage.setItem('PLPCat', pageurl)
        // localStorage.setItem('PLPparenturl', '/')
        localStorage.setItem("PLPCat", `${v1[0]}/${v1[1]}/${v1[2]}`);
        localStorage.setItem("PLPparenturl", `${v1[0]}/${v1[1]}`);
        // localStorage.setItem('PageUrl', v3)
        // localStorage.setItem('PLPparenturl', patrentcaturl)
        // history.push(`/brands/${PageUrl}`, { state: { PageUrl } })
        let catURL;
        if (localStorage.getItem("PLPCat") !== undefined) {
            catURL = localStorage.getItem("PLPCat").split("/");
        }
        homeServices/* default */.Z.getRelatedCategoryList(catURL[2]).then((response)=>{
            setgetDealofday(response);
        // { splitarray=Dealofday.length > 0 ?  Dealofday.splice(0,2):null}
        // setunsetfilter(response)
        });
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
    // dispatch(nextBtn(pageNum, 9))
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
                max: 475
            },
            items: 1
        }
    };
    const CustomButtonGroupAsArrows = ({ next, previous, onClick, ...rest })=>{
        const { carouselState: { currentSlide } } = rest;
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("button", {
                    type: "button",
                    className: "previous round1",
                    onClick: ()=>{
                        setsliceNum(sliceNum - initialWidth());
                        if (Dealofday.length > 5 && sliceNum < 5) {
                            // setsliceNum(Dealofday.length - 5)
                            changeSliceNumBack();
                        // previous()
                        }
                    },
                    children: /*#__PURE__*/ jsx_runtime.jsx(fi_.FiChevronLeft, {})
                }),
                /*#__PURE__*/ jsx_runtime.jsx("button", {
                    type: "button",
                    className: "next round1",
                    onClick: ()=>{
                        setnext(true);
                        setsliceNum(sliceNum + initialWidth());
                        setNPButton(pageNum + 1);
                    },
                    children: Dealofday && JSON.stringify(Dealofday[Dealofday.length - 5]) !== JSON.stringify(Dealofday.slice(sliceNum, Dealofday.length)[0]) && /*#__PURE__*/ jsx_runtime.jsx(bi_.BiChevronRight, {})
                })
            ]
        });
    };
    const Gallery = (d)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "container-fluid ",
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "related-content",
                children: Dealofday !== undefined && (Dealofday.slice(sliceNum, sliceNum + Dealofday.length) || []).map((mapdata, i)=>// <>
                    //   {/* <div className="owl-stage" style={{ transform: 'translate3d(-3915.62px, 0px, 0px)', transition: 'all 0.25s ease 0s', width: '5638.5px' }}>
                    //     <div className="owl-item cloned" style={{ width: '151.625px', marginRight: '5px' }}> */}
                    //   {/* <img referrerPolicy='no-referrer' src={mapdata.Thumbnail} style={{ width: 'inherit !important' }} alt="Kaveri Camphor" /> */}
                    //   <img src="https://productionadmin.adibuja.com/Media/Images/250x250/image_not_found.jpg" referrerPolicy='no-referrer' alt="britannia" onClick={() => brandProduct(mapdata.PageUrl)} />
                    //   {/* </div>
                    //   </div> */}
                    // </>
                    /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                        children: mapdata.CategoryImage ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "related-content-item",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: `/category/${mapdata.PageUrl.replace("category/", "")}`,
                                        children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                src: mapdata.CategoryImage,
                                                referrerPolicy: "no-referrer",
                                                alt: "britannia",
                                                onClick: ()=>brandProduct(mapdata.PageUrl)
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                    href: `/category/${mapdata.PageUrl.replace("category/", "")}`,
                                    onClick: ()=>brandProduct(mapdata.PageUrl),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                            children: mapdata.DisplayName
                                        }),
                                        " "
                                    ]
                                })
                            ]
                        }) : /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {})
                    }))
            })
        });
    function DisplayAllBrands() {}
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "container-fluid subcatWrapper",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "row pr-0 ml-0",
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "col-lg-12",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    children: [
                        Dealofday !== undefined && Dealofday.length > 0 ? /*#__PURE__*/ jsx_runtime.jsx("div", {
                            style: {
                                marginTop: "1px ",
                                fontSize: "20px"
                            },
                            children: /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                children: "Related Categories"
                            })
                        }) : null,
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "related-content",
                            children: Dealofday !== undefined && (Dealofday.slice(sliceNum, sliceNum + Dealofday.length) || []).map((mapdata, i)=>mapdata.CategoryImage ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "related-content-item",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                href: `/category/${mapdata.PageUrl.replace("category/", "")}`,
                                                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                        src: mapdata.CategoryImage,
                                                        referrerPolicy: "no-referrer",
                                                        alt: "britannia",
                                                        width: 100,
                                                        height: 0,
                                                        layout: "responsive",
                                                        onClick: ()=>brandProduct(mapdata.PageUrl)
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            href: `/category/${mapdata.PageUrl.replace("category/", "")}`,
                                            onClick: ()=>brandProduct(mapdata.PageUrl),
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                style: {
                                                    color: "black"
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                                        children: mapdata.DisplayName
                                                    }),
                                                    " "
                                                ]
                                            })
                                        })
                                    ]
                                }) : /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {}))
                        })
                    ]
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
external_react_.memo)(RelatedCategory);

// EXTERNAL MODULE: ./src/components/Footer/signin.js
var signin = __webpack_require__(119);
// EXTERNAL MODULE: ./src/containers/MainPage/api/apiServices.js
var apiServices = __webpack_require__(4287);
;// CONCATENATED MODULE: external "react-intersection-observer"
const external_react_intersection_observer_namespaceObject = require("react-intersection-observer");
// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(6734);
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);
// EXTERNAL MODULE: ./src/utils/getSellerDetails.js
var getSellerDetails = __webpack_require__(5177);
;// CONCATENATED MODULE: ./src/pages/category/[subcategory]/[categoryName].js
/* eslint-disable no-param-reassign */ /* eslint-disable import/order */ /* eslint-disable jsx-a11y/click-events-have-key-events */ /* eslint-disable jsx-a11y/no-static-element-interactions */ /* eslint-disable no-unused-vars */ /* eslint-disable no-nested-ternary */ /* eslint-disable eqeqeq */ /* eslint-disable consistent-return */ /* eslint-disable no-else-return */ /* eslint-disable jsx-a11y/label-has-associated-control */ /* eslint-disable react/prop-types */ /* eslint-disable no-lone-blocks */ /* eslint-disable no-unused-expressions */ /**
 *
 * Subcategory
 *
 */ 








































const Subcategory = ({ categoryData, categorySEOData, advanceFilterData, page: currentPage, topMenuData, footerPagesLinks, footerCategoryLinks, relatedCategoryDetails, sellerDetailsFromDomain, currentDomain })=>{
    let categoryDetails = categoryData?.skuListingModels || [];
    (0,injectReducer/* useInjectReducer */.v)({
        key: "subcategory",
        reducer: reducer
    });
    (0,injectSaga/* useInjectSaga */.h)({
        key: "subcategory",
        saga: subcategorySaga
    });
    const router = (0,router_.useRouter)();
    const footerData = (0,external_react_redux_.useSelector)((state)=>state.homeScreen);
    const [advancegetskufilterdata, setadvancegetskufilterdata] = (0,external_react_.useState)([]);
    const [FirstCall, setFirstCall] = (0,external_react_.useState)(0);
    const [page, setPage] = (0,external_react_.useState)(currentPage);
    const [scrollvalue, setscrollvalue] = (0,external_react_.useState)(100);
    const [initialCall, setInitialCall] = (0,external_react_.useState)(false);
    const [valueString, setValueString] = (0,external_react_.useState)("");
    const [valuepackString, setvaluepackString] = (0,external_react_.useState)("");
    const [RAMString, setRAMString] = (0,external_react_.useState)("");
    const [RAMFilterId, setRAMFilterId] = (0,external_react_.useState)("");
    const [fieldString, setfieldString] = (0,external_react_.useState)("");
    const [valuediscountstring, setvaluediscountstring] = (0,external_react_.useState)("");
    const [parentcatURL, setParentcatURL] = (0,external_react_.useState)("");
    const [enableshowmore, setenableshowmore] = (0,external_react_.useState)(false);
    const nextData = (0,external_react_redux_.useSelector)((state)=>state.ToppSelling);
    const [URL, setURL] = (0,external_react_.useState)("");
    const [Reset, setReset] = (0,external_react_.useState)(false);
    const [notify, setnotify] = (0,external_react_.useState)(false);
    const [loading, setloading] = (0,external_react_.useState)(false);
    const range = (0,external_react_.useRef)(null);
    const minValRef = (0,external_react_.useRef)(null);
    const maxValRef = (0,external_react_.useRef)(null);
    const dropdownRef = (0,external_react_.useRef)(null);
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
        },
        {
            "id": 8
        }
    ];
    const loadProducts = (0,external_react_redux_.useSelector)((state)=>state.loadProducts);
    const [groupedData, setgroupedData] = (0,external_react_.useState)(categoryDetails);
    const [shppingcart, setShppingcart] = (0,external_react_.useState)([]);
    const [unsetfilter, setunsetfilter] = (0,external_react_.useState)([]);
    const [Seleced, setSeleced] = (0,external_react_.useState)("");
    const [metaDomain, setMetaDomain] = (0,external_react_.useState)("Adibuja.com");
    const [filterproduct, setfilterproduct] = (0,external_react_.useState)([]);
    const [filterflag, setFilterflag] = (0,external_react_.useState)(false);
    const [checked, setChecked] = (0,external_react_.useState)(true);
    const [min, setMin] = (0,external_react_.useState)(0);
    const [max, setMax] = (0,external_react_.useState)(0);
    const [min2, setMin2] = (0,external_react_.useState)(0);
    const [max2, setMax2] = (0,external_react_.useState)(0);
    const [sliderValue, setSliderValue] = (0,external_react_.useState)(0);
    const [sliderValue2, setSliderValue2] = (0,external_react_.useState)(0);
    const [isActive, setisActive] = (0,external_react_.useState)(true);
    const [categoryName, setcategoryName] = (0,external_react_.useState)([]);
    const [checkfilterflag, setcheckfilterflag] = (0,external_react_.useState)(false);
    const [productcount, setproductcount] = (0,external_react_.useState)();
    const [breadcrumbProdcount, setbreadcrumbProdcount] = (0,external_react_.useState)("");
    const [productcategoryName, setproductcategoryName] = (0,external_react_.useState)("");
    const [parentcategoryName, setparentcategoryName] = (0,external_react_.useState)("");
    const [selectedBrand, setselectedBrand] = (0,external_react_.useState)([]);
    const [selectedPacksize, setselectedPacksize] = (0,external_react_.useState)([]);
    const [selectedFood, setselectedFood] = (0,external_react_.useState)([]);
    const [selectedPrimaryCamera, setselectedPrimaryCamera] = (0,external_react_.useState)([]);
    const [selectedDiscount, setselectedDiscount] = (0,external_react_.useState)([]);
    const [selectedRAM, setselectedRAM] = (0,external_react_.useState)([]);
    const [selectedIntStorage, setselectedIntStorage] = (0,external_react_.useState)([]);
    const [selectedColor, setselectedColor] = (0,external_react_.useState)([]);
    const [selectedWeight, setselectedWeight] = (0,external_react_.useState)([]);
    const [selectedGlassType, setselectedGlassType] = (0,external_react_.useState)([]);
    const [selectedCountry, setselectedCountry] = (0,external_react_.useState)([]);
    const [selectItemDisp, setSelectItemDisp] = (0,external_react_.useState)([]);
    const [isSticky, setIsSticky] = (0,external_react_.useState)(false);
    const [advfilterData, setAdvfilterData] = (0,external_react_.useState)(Object.entries(groupBy_default()(advanceFilterData, (v)=>v.Caption)) || []);
    const [preselectItem, setpreselectItem] = (0,external_react_.useState)([]);
    const [pagerefresh, setPageRefresh] = (0,external_react_.useState)(1);
    const [productsFound, setProductsFound] = (0,external_react_.useState)(false);
    const [isClient, setIsClient] = (0,external_react_.useState)(false);
    const [customInitialCall, setCustomInitialCall] = (0,external_react_.useState)(false);
    const [initialData, setInitialData] = (0,external_react_.useState)([]);
    const [isSamePage, setIsSamePage] = (0,external_react_.useState)(false);
    const [isOpen, setIsOpen] = (0,external_react_.useState)(false);
    const [selectedValue, setSelectedValue] = (0,external_react_.useState)("");
    const [maxValue, setMaxValue] = (0,external_react_.useState)(0);
    const [minValue, setMinValue] = (0,external_react_.useState)(0);
    const [isLastPage, setIsLastPage] = (0,external_react_.useState)(false);
    const [filterpopup, setfilterpopup] = (0,external_react_.useState)({
        isPaneOpen: false,
        isPaneOpenLeft: false
    });
    const [filterdynamicpopup, setfilterdynamicpopup] = (0,external_react_.useState)({
        isPaneOpen: false,
        isPaneOpenLeft: false
    });
    const [isSortLoading, setIsSortLoading] = (0,external_react_.useState)(false);
    const [filterPage, setFilterPage] = (0,external_react_.useState)(1);
    const [filterProductCount, setFilterProductCount] = (0,external_react_.useState)(0);
    const dispatch = (0,external_react_redux_.useDispatch)();
    const SubcategoryState = (0,external_react_redux_.useSelector)((state)=>state.subcategory);
    const homestate = (0,external_react_redux_.useSelector)((state)=>state.homeScreen);
    const addToCart = (0,external_react_redux_.useSelector)((state)=>state.addToCart);
    const mavigationBarReducer = (0,external_react_redux_.useSelector)((state)=>state.mavigationBar);
    const sortByfiltersList = [
        {
            ListItem: "Sort By",
            id: 1,
            value: ""
        },
        {
            ListItem: "Name (A - Z)",
            id: 1,
            value: "AZ"
        },
        {
            ListItem: "Name (Z - A)",
            id: 2,
            value: "ZA"
        },
        {
            ListItem: "Price (Low - High)",
            id: 3,
            value: "PLH"
        },
        {
            ListItem: "Price (High - Low)",
            id: 4,
            value: "PHL"
        },
        {
            ListItem: "Popularity",
            id: 5,
            value: "POP"
        }
    ];
    let fixIntCount;
    let Finalnopages;
    let TotalproductCount;
    const [showBreadcrumb, setShowBreadcrumb] = (0,external_react_.useState)(false);
    const { ref, inView } = (0,external_react_intersection_observer_namespaceObject.useInView)();
    if (groupedData && groupedData !== undefined && groupedData?.length > 0) {
        TotalproductCount = groupedData[0].OverAllCount;
        Finalnopages = TotalproductCount / 20;
        fixIntCount = Math.ceil(Finalnopages);
    }
    (0,external_react_.useEffect)(()=>{
        if (false) {} else {
            localStorage.setItem("sellerID", homeServices/* ConstantsValues */.r.defaultSellerID);
        }
    }, [
        sellerDetailsFromDomain
    ]);
    (0,external_react_.useEffect)(()=>{
        if (inView && fixIntCount >= page && fixIntCount > 1 && !filterProductCount) {
            setPage(page + 1);
        // let url = router.asPath?.split('?')
        // router.push({
        //   pathname: url[0],
        //   query: { page: page + 1 },
        // }, undefined, { shallow: true });
        } else if (inView && filterProductCount >= filterPage && filterProductCount > 1) {
            setFilterPage(filterPage + 1);
        }
    }, [
        inView
    ]);
    (0,external_react_.useEffect)(()=>{
        ClearAllFilter();
        setgroupedData(categoryDetails);
        setAdvfilterData(Object.entries(groupBy_default()(advanceFilterData, (v)=>v.Caption)));
        dispatch(RemovingOldData());
    }, [
        categoryData,
        advanceFilterData
    ]);
    (0,external_react_.useEffect)(()=>{
        let response = categoryData;
        if (response && response.skuListingModels && response.skuListingModels.length > 0 && response.skuListingModels[0].ParentCategoryName) {
            setparentcategoryName(response.skuListingModels[0].ParentCategoryName);
            setproductcategoryName(response.skuListingModels[0].CategoryName);
            setProductsFound(true);
        } else {
            setReset(true);
            setProductsFound(false);
        }
        if (response?.skuListingModels?.length > 0) {
            setbreadcrumbProdcount(response.OverAllCount);
            setMin(response.minprice);
            setMax(response.maxprice - 1);
            setMin2(response.minprice + 1);
            setMax2(response.maxprice);
            setSliderValue(response.minprice);
            setSliderValue2(response.maxprice);
            setMaxValue(response.maxprice);
            setMinValue(response.minprice);
        }
    }, [
        categoryData
    ]);
    (0,external_react_.useEffect)(()=>{
        if (page !== 1 && fixIntCount >= page && fixIntCount > 1 && !router.query?.page) {
            fetchCategoryDetails();
        }
        if (page === fixIntCount) {
            setIsLastPage(true);
        }
    }, [
        page
    ]);
    (0,external_react_.useEffect)(()=>{
        if (filterPage !== 1 && filterProductCount >= filterPage && filterProductCount > 1) {
            fetchCategoryFilteredData(filterPage, "isSameFilter");
        }
        if (filterPage === filterProductCount) {
            setIsLastPage(true);
        }
    }, [
        filterPage
    ]);
    (0,external_react_.useEffect)(()=>{
        const { page, categoryName, subcategory } = router.query;
        ClearAllFilter();
        setPage(page || 1);
        const result = checkSameCategory(initialData, categoryDetails);
        if (groupedData?.length > 0 && result) {
            setIsSamePage(true);
            fetchCategoryDetails("samePage");
        } else {
            fetchCategoryDetails("initialCall");
            setInitialData(categoryDetails);
        }
        setURL(categoryName);
        setParentcatURL(subcategory);
        mycartAPI/* default */.Z.getShoppingcartDetails().then((response)=>{
            setShppingcart(response);
        }).catch((error)=>{
            console.log("Error in cart API:::", error);
        });
    }, [
        router
    ]);
    (0,external_react_.useEffect)(()=>{
        if (Reset && (valueString || valuepackString || fieldString || valuediscountstring || URL || sliderValue || sliderValue2 || Seleced)) {
            setIsLastPage(false);
            setIsSamePage(false);
            setPage(1);
            setcheckfilterflag(true);
            fetchCategoryFilteredData(filterPage);
            setgroupedData([]);
        }
    }, [
        valueString,
        valuepackString,
        fieldString,
        valuediscountstring,
        URL,
        sliderValue,
        sliderValue2,
        Seleced
    ]);
    (0,external_react_.useEffect)(()=>{
        if (loadProducts !== undefined) {
            setnotify(loadProducts.notify);
        }
    }, [
        loadProducts
    ]);
    (0,external_react_.useEffect)(()=>{
        if (SubcategoryState !== undefined && SubcategoryState.shoppingCartDetails && SubcategoryState.shoppingCartDetails.length > 0) {
            setShppingcart(SubcategoryState.shoppingCartDetails);
        }
    }, [
        SubcategoryState
    ]);
    (0,external_react_.useEffect)(()=>{
        if (addToCart !== undefined) {
            dispatch((0,actions/* copyShopingCartDetails */.YG)(addToCart?.shoppingcartDetails));
            if (addToCart && addToCart?.shoppingcartDetails) {
                setShppingcart(addToCart.shoppingcartDetails);
            }
        }
    }, [
        addToCart
    ]);
    (0,external_react_.useEffect)(()=>{
        if (currentDomain && currentDomain !== null) {
            setMetaDomain(currentDomain);
        }
        fetch(`${constants/* default */.ZP.urls.baseUrl}${constants/* default */.ZP.endPoints.token}`, {
            method: "POST",
            headers: {
                accept: "application/x-www-form-urlencoded",
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: "username=FCAPICL0100145&password=JHASGjnknkjhIhAjksnjansasasMKLAHNSJHGASB02012121&grant_type=password"
        }).then((res)=>res.json()).then((result)=>{
            localStorage.setItem("generatedtoken", result.access_token);
        });
    }, []);
    (0,external_react_.useEffect)(()=>{
        window.onload = function() {
            document.getElementById("__next").className = "pdp-category-page";
        };
    });
    (0,external_react_.useEffect)(()=>{
        setIsClient(true);
        setisActive(true);
        window.onload = function() {
            document.getElementById("__next").className = "filtericon-category-page";
        };
    }, []);
    (0,external_react_.useEffect)(()=>{
        document.addEventListener("click", handleClickOutside);
        return ()=>{
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);
    const checkSameCategory = (arr1, arr2)=>{
        if (arr1.length !== arr2.length) {
            return false;
        }
        for(let i = 0; i < arr1.length; i++){
            if (JSON.stringify(arr1[i]) !== JSON.stringify(arr2[i])) {
                return false;
            }
        }
        return true;
    };
    const handleClickOutside = (event)=>{
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };
    const toggleDropdown = ()=>{
        setIsOpen(!isOpen);
    };
    const fetchCategoryDetails = (param)=>{
        if (param === "samePage") {
            setgroupedData([]);
        }
        homeServices/* default */.Z.getSubCategoryProductList(param === "samePage" ? 1 : page, router.query.categoryName, router.query.subcategory, null, null, null, sellerDetailsFromDomain?.AdminMemberId).then((response)=>{
            if (response.skuListingModels && response.skuListingModels.length > 0) {
                if (param === "resetFilter") {
                    setgroupedData(response.skuListingModels);
                    setMin(response.minprice);
                    setMax(response.maxprice - 1);
                    setMin2(response.minprice + 1);
                    setMax2(response.maxprice);
                    setSliderValue(response.minprice);
                    setSliderValue2(response.maxprice);
                    setMaxValue(response.maxprice);
                    setMinValue(response.minprice);
                } else if (param === "initialCall") {
                    setgroupedData(response.skuListingModels);
                } else {
                    setgroupedData((prevData)=>[
                            ...prevData,
                            ...response.skuListingModels
                        ]);
                }
                setbreadcrumbProdcount(response.OverAllCount);
                setparentcategoryName(response.skuListingModels[0].ParentCategoryName);
                setproductcategoryName(response.skuListingModels[0].CategoryName);
                setProductsFound(true);
            } else {
                setIsLastPage(true);
                setReset(true);
                setProductsFound(false);
            }
        }).catch((err)=>{
            console.log("Error In category API:::", err);
            setIsSamePage(false);
        }).finally(()=>setloading(false));
    };
    const fetchCategoryFilteredData = (page, source)=>{
        setIsSortLoading(true);
        let pageNumber;
        if (!source) {
            setgroupedData((prevArray)=>[]);
            pageNumber = 1;
            setFilterPage(1);
            window.scrollTo(0, 0);
        } else {
            pageNumber = page;
        }
        const sortby = Seleced ? Seleced : checkfilterflag ? "POP" : "";
        productlisting/* default */.Z.getskuFilterlisting(valueString, valuepackString, fieldString, valuediscountstring, URL, sliderValue, sliderValue2, sortby, pageNumber).then((response)=>{
            if (!source) {
                setgroupedData(response.advanceSkusListingByFilterModels);
                setbreadcrumbProdcount(response.OverAllCount);
                let count = Math.ceil(response.OverAllCount / 20);
                setFilterProductCount(count);
            } else {
                setgroupedData((prevData)=>[
                        ...prevData,
                        ...response.advanceSkusListingByFilterModels
                    ]);
            }
            if (response.advanceSkusListingByFilterModels?.length === 0) setIsLastPage(true);
            if (response.advanceSkusListingByFilterModels?.length < 5 && filterProductCount >= filterPage && filterProductCount !== 1) {
                setFilterPage(filterPage + 1);
            }
            setIsSortLoading(false);
        }).catch((err)=>{
            console.log("Error in category filter API", err);
            setIsSortLoading(false);
        });
    };
    const filteronChange = (selectedList, selectedItem)=>{
        const finalseletItem = [
            ...selectItemDisp,
            ...selectedList
        ];
        const uniqueNames = finalseletItem.filter((val, id, disparray)=>disparray.indexOf(val) == id);
        setSelectItemDisp(uniqueNames);
        setpreselectItem(selectedList);
        setReset(true);
        if (selectedItem.FieldId === 0 && selectedItem.StaticFilter === 0) {
            if (valueString.length !== "") {
                valueString.includes(`${selectedItem.valueId}`) ? setValueString(removeFromString(valueString, `${selectedItem.valueId}`)) : setValueString(removedoubleComma(`${valueString},${selectedItem.valueId}`));
            } else {
                setValueString(`${selectedItem.valueId}`);
            }
        }
        // RAM, Color, Camera, etc...
        if (selectedItem.FieldId !== 0 && selectedItem.fitlerName !== "Pack Size") {
            if (valuepackString.length !== 0) {
                valuepackString.includes(`${selectedItem.Value}`) ? setvaluepackString(removeFromString(valuepackString, `${selectedItem.Value}`)) : setvaluepackString(removedoubleComma(`${valuepackString},${selectedItem.Value}`));
                setfieldString(`${fieldString},${selectedItem.FieldId}`);
            } else {
                setvaluepackString(`${selectedItem.Value}`);
                setfieldString(`${selectedItem.FieldId}`);
            }
        }
        // Pack size
        if (selectedItem.fitlerName === "Pack Size") {
            if (valuepackString.length !== 0) {
                valuepackString.includes(`${selectedItem.valueId}`) ? setvaluepackString(removeFromString(valuepackString, `${selectedItem.valueId}`)) : setvaluepackString(removedoubleComma(`${valuepackString},${selectedItem.valueId}`));
                setfieldString(`${fieldString},${selectedItem.FieldId}`);
            } else {
                setvaluepackString(`${selectedItem.valueId}`);
                setfieldString(`${selectedItem.FieldId}`);
            }
        }
        if (selectedItem.StaticFilter !== 0) {
            if (valuediscountstring !== "") {
                valuediscountstring.includes(`${selectedItem.valueId}`) ? setvaluediscountstring(removeFromString(valuediscountstring, `${selectedItem.valueId}`)) : setvaluediscountstring(removedoubleComma(`${valuediscountstring},${selectedItem.valueId}`));
            } else {
                setvaluediscountstring(`${selectedItem.valueId}`);
            }
        }
    };
    const RemoveSelectItem = (selectedList, selectedItem)=>{
        setSelectItemDisp((current)=>current.filter((selectItem)=>selectItem.name !== selectedItem.name));
        setpreselectItem((currentpre)=>currentpre.filter((curpreselectItem)=>curpreselectItem.name !== selectedItem.name));
        setReset(true);
        if (selectedItem.FieldId === 0 && selectedItem.StaticFilter === 0) {
            if (valueString.length !== "") {
                valueString.includes(`${selectedItem.valueId}`) ? setValueString(removeFromString(valueString, `${selectedItem.valueId}`)) : setValueString(removedoubleComma(`${valueString},${selectedItem.valueId}`));
            } else {
                setValueString(`${selectedItem.valueId}`);
            }
        }
        // RAM, Color, Camera, etc...
        if (selectedItem.FieldId !== 0 && selectedItem.fitlerName !== "Pack Size") {
            if (valuepackString.length !== 0) {
                if (valuepackString.includes(`${selectedItem.Value}`)) {
                    setvaluepackString(removeFromString(valuepackString, `${selectedItem.Value}`));
                    setfieldString(removeFromString(fieldString, `${selectedItem.FieldId}`));
                } else {
                    setvaluepackString(removedoubleComma(`${valuepackString},${selectedItem.Value}`));
                    setfieldString(removedoubleComma(`${fieldString}, ${selectedItem.FieldId}`));
                }
            } else {
                setvaluepackString(`${selectedItem.Value}`);
                setfieldString(`${selectedItem.FieldId}`);
            }
        }
        // Pack size
        if (selectedItem.fitlerName === "Pack Size") {
            if (valuepackString.length !== 0) {
                if (valuepackString.includes(`${selectedItem.valueId}`)) {
                    setvaluepackString(removeFromString(valuepackString, `${selectedItem.valueId}`));
                    setfieldString(removeFromString(fieldString, `${selectedItem.FieldId}`));
                } else {
                    setvaluepackString(removedoubleComma(`${valuepackString},${selectedItem.valueId}`));
                    setfieldString(removedoubleComma(`${fieldString}, ${selectedItem.FieldId}`));
                }
            } else {
                setvaluepackString(`${selectedItem.valueId}`);
                setfieldString(`${selectedItem.FieldId}`);
            }
        }
        if (selectedItem.StaticFilter !== 0) {
            if (valuediscountstring !== "") {
                valuediscountstring.includes(`${selectedItem.valueId}`) ? setvaluediscountstring(removeFromString(valuediscountstring, `${selectedItem.valueId}`)) : setvaluediscountstring(removedoubleComma(`${valuediscountstring},${selectedItem.valueId}`));
            } else {
                setvaluediscountstring(`${selectedItem.valueId}`);
            }
        }
    };
    const removedoubleComma = (string)=>{
        return string.replace(",,", ",");
    };
    const removeFromString = (stringValue = "", valueId)=>{
        let str = stringValue.replace(valueId, "");
        str = removedoubleComma(str);
        if (str.startsWith(",")) {
            str = str.substring(1, str.length);
            return str;
        } else {
            return str;
        }
    };
    const handleFilterByPrice = debounce_default()((e, type)=>{
        if (type === "max") {
            setSliderValue2(e.target.value);
        } else if (type === "min") {
            setSliderValue(e.target.value);
        }
    }, 300);
    const handleMaxValue = (event)=>{
        setReset(true);
        if (event.target.value > sliderValue) {
            setMaxValue(event.target.value);
            handleFilterByPrice(event, "max");
        }
    };
    const handleMinValue = (event)=>{
        setReset(true);
        if (event.target.value < sliderValue2) {
            setMinValue(event.target.value);
            handleFilterByPrice(event, "min");
        }
    };
    const changeFltr = (newFL)=>{
        setReset(true);
        setSeleced(newFL);
        setIsOpen(false);
        setcheckfilterflag(true);
        setSelectedValue(sortByfiltersList.find((item)=>item.value === newFL)?.ListItem || "");
    };
    const handlefilter = ()=>{
        document.getElementById("newpositionfilter").scroll({
            top: 0,
            behavior: "smooth"
        });
    };
    const handlefilterResult = ()=>{
        document.getElementById("hidefilterResult").className = "closefilter";
    };
    const ClearAllFilter = (param)=>{
        const { page: routePage } = router.query;
        setSelectItemDisp("");
        setpreselectItem("");
        setselectedPacksize("");
        setselectedBrand("");
        setselectedDiscount("");
        setselectedFood("");
        setselectedFood("");
        setselectedPrimaryCamera("");
        setselectedGlassType("");
        setselectedIntStorage("");
        setselectedWeight("");
        setselectedRAM("");
        setselectedColor("");
        window.scrollTo(0, 0);
        document.getElementsByClassName("multiselectdrop");
        setValueString("");
        setvaluepackString("");
        setfieldString("");
        setvaluediscountstring("");
        setSeleced("");
        setPage(routePage || 1);
        setReset(false);
        setloading(false);
        setisActive(true);
        setIsSamePage(false);
        setSelectedValue("");
        setFilterPage(1);
        setFilterProductCount(0);
        setIsLastPage(false);
        if (param === "resetFilter") {
            setloading(true);
            setgroupedData([]);
            fetchCategoryDetails(param);
            document.getElementById("hidefilterResult").className = "closefilter";
        } else {
            setcheckfilterflag(false);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("title", {
                        children: categorySEOData?.PageTitle
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "description",
                        content: categorySEOData?.MetaDescription
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "keywords",
                        content: categorySEOData?.MetaKeyword
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        property: "og:image",
                        content: categorySEOData?.CategoryImage
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        property: "og:site_name",
                        content: metaDomain
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        property: "og:title",
                        content: categorySEOData?.PageTitle
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        property: "og:description",
                        content: categorySEOData?.MetaDescription
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(external_react_toastify_.ToastContainer, {
                position: "top-right"
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Header/* default */.Z, {
                sellerDetailsFromDomain: sellerDetailsFromDomain,
                topMenuData: topMenuData
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: groupedData && groupedData != "" ? "main-wrapper mt-0" : "",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "container-fluid subcatWrapper",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-lg-12",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "product-shop-main-wrapper newfilterAlign",
                                    id: "product-listing",
                                    children: [
                                        groupedData && groupedData?.length > 0 || checkfilterflag || isSamePage ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "row plp-breadcrumb",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "col-lg-9 col-md-6 col-sm-9",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx(SubNavigation/* default */.Z, {
                                                                URL: URL,
                                                                Productcount: breadcrumbProdcount,
                                                                FliterFlag: filterflag,
                                                                ResetFlag: Reset,
                                                                parentcategoryName: parentcategoryName,
                                                                productcategoryName: productcategoryName
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "col-lg-3 col-md-6 col-sm-3",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                className: "top-bar-right",
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                    className: "product-view-mode",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                                            className: isActive ? "active" : "",
                                                                            "data-target": "grid",
                                                                            onClick: ()=>setisActive(!isActive),
                                                                            type: "button",
                                                                            children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                className: "fa fa-th"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                                            className: isActive ? "" : "active",
                                                                            "data-target": "list",
                                                                            onClick: ()=>setisActive(!isActive),
                                                                            type: "button",
                                                                            style: {
                                                                                marginRight: "0px"
                                                                            },
                                                                            children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                className: "fa fa-list"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "row col-lg-12",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                                        children: categorySEOData?.Name
                                                    })
                                                }),
                                                advfilterData && advfilterData !== undefined ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "top-filter top-filter-category newfilterposition",
                                                    id: "newpositionfilter",
                                                    onClick: handlefilter,
                                                    style: {
                                                        zIndex: filterdynamicpopup.isPaneOpen ? "0" : "888"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                className: "filter-box",
                                                                ref: dropdownRef,
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                        className: "multiselect-container multiSelectContainer",
                                                                        id: "multiselectContainerReact",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "search-wrapper searchWrapper",
                                                                                // style={{
                                                                                //   width: '100%',
                                                                                //   padding: '7px 16px'
                                                                                // }}
                                                                                onClick: toggleDropdown,
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                                        style: {
                                                                                            margin: "0"
                                                                                        },
                                                                                        children: selectedValue ? selectedValue : "Sort By"
                                                                                    }),
                                                                                    isClient && /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                                        src: "/images/dropdownsort.png",
                                                                                        alt: "",
                                                                                        className: "icon_cancel icon_down_dir"
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            isOpen && /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                                                                className: "mt-1 optionListContainer displayNone optionContainer",
                                                                                children: sortByfiltersList.map((item, idx)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                                        className: "option  highlightOption highlight",
                                                                                        onClick: ()=>changeFltr(item.value),
                                                                                        children: item.ListItem
                                                                                    }, `Sort ${idx}`))
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            })
                                                        }),
                                                        advfilterData.map((advfilterbox, index)=>{
                                                            advfilterbox[1].sort((a, b)=>a.ListItemValue.localeCompare(b.ListItemValue));
                                                            advfilterbox[1].sort((a, b)=>{
                                                                const aValue = parseInt(a.ListItemValue);
                                                                const bValue = parseInt(b.ListItemValue);
                                                                return aValue - bValue;
                                                            });
                                                            return index <= 3 && advfilterbox[0] !== "Price" ? /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    className: "filter-box",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx((external_multiselect_react_dropdown_default()), {
                                                                        showArrow: true,
                                                                        options: (advfilterbox !== undefined && advfilterbox.length > 0 && advfilterbox[1] || []).map((data, indexd)=>({
                                                                                name: data.ListItemValue,
                                                                                id: indexd + 1,
                                                                                valueId: data.valueId,
                                                                                FieldId: data.FieldId,
                                                                                Value: data.Value,
                                                                                StaticFilter: data.StaticFilter,
                                                                                fitlerName: advfilterbox[0]
                                                                            })),
                                                                        selectedValues: preselectItem,
                                                                        onSelect: filteronChange,
                                                                        onRemove: RemoveSelectItem,
                                                                        displayValue: "name" // Property name to display in the dropdown options
                                                                        ,
                                                                        placeholder: advfilterbox[0],
                                                                        showCheckbox: true
                                                                    })
                                                                })
                                                            }) : null;
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "single-sidebar mb-45 price-filter",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                                                        children: "Filter By Price"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                        className: "panel panel-default single-sidebar",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                            className: "position-relative rangeslider",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                                                    type: "range",
                                                                                    min: min,
                                                                                    max: max,
                                                                                    value: minValue,
                                                                                    onChange: handleMinValue,
                                                                                    className: external_classnames_default()("thumb thumb--zindex-3", {
                                                                                        "thumb--zindex-5": ""
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                                                    type: "range",
                                                                                    min: min2,
                                                                                    max: max2,
                                                                                    value: maxValue,
                                                                                    onChange: handleMaxValue,
                                                                                    className: "thumb thumb--zindex-4"
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                    className: "slider",
                                                                                    children: [
                                                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                            className: "slider__track"
                                                                                        }),
                                                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                            ref: range,
                                                                                            className: "slider__range"
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                            className: "slider__left-value",
                                                                                            children: [
                                                                                                "₹ ",
                                                                                                sliderValue
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                            className: "slider__right-value",
                                                                                            children: [
                                                                                                "₹ ",
                                                                                                sliderValue2
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        advfilterData && advfilterData?.length > 0 ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "morefilter d-flex",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                    className: "morefilterTitle btn btn-success",
                                                                    onClick: ()=>setfilterdynamicpopup({
                                                                            isPaneOpen: true
                                                                        }),
                                                                    children: "More Filters"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                    className: "clearAll1 btn btn-info",
                                                                    style: {
                                                                        display: Reset === true ? "inline-block" : "none"
                                                                    },
                                                                    onClick: ()=>ClearAllFilter("resetFilter"),
                                                                    children: "Clear All"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx((external_react_sliding_pane_default()), {
                                                                    className: "some-custom-class",
                                                                    overlayClassName: "some-custom-overlay-class",
                                                                    isOpen: filterdynamicpopup.isPaneOpen,
                                                                    title: "More Filters",
                                                                    closeIcon: "X",
                                                                    onRequestClose: ()=>setfilterdynamicpopup({
                                                                            isPaneOpen: false
                                                                        }),
                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                        className: "row morefilter",
                                                                        children: [
                                                                            advfilterData.map((advfilterbox, index)=>advfilterbox[0] !== "Price" ? /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                    className: "col-lg-12",
                                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                        className: "more-filter-box",
                                                                                        children: /*#__PURE__*/ jsx_runtime.jsx((external_multiselect_react_dropdown_default()), {
                                                                                            options: (advfilterbox !== undefined && advfilterbox.length > 0 && advfilterbox[1] || []).map((data, indexm)=>({
                                                                                                    name: data.ListItemValue,
                                                                                                    id: indexm + 1,
                                                                                                    valueId: data.valueId,
                                                                                                    FieldId: data.FieldId,
                                                                                                    Value: data.Value,
                                                                                                    StaticFilter: data.StaticFilter,
                                                                                                    fitlerName: advfilterbox[0]
                                                                                                })),
                                                                                            // Options to display in the dropdown
                                                                                            selectedValues: preselectItem,
                                                                                            onSelect: filteronChange,
                                                                                            onRemove: RemoveSelectItem,
                                                                                            displayValue: "name" // Property name to display in the dropdown options
                                                                                            ,
                                                                                            placeholder: advfilterbox[0],
                                                                                            showCheckbox: true
                                                                                        })
                                                                                    })
                                                                                }) : null),
                                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                className: "col-lg-12",
                                                                                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                                    className: "clearAll2 btn btn-info",
                                                                                    onClick: ()=>ClearAllFilter("resetFilter"),
                                                                                    style: {
                                                                                        display: Reset === true ? "inline-block" : "none"
                                                                                    },
                                                                                    children: "Clear All"
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            ]
                                                        }) : null
                                                    ]
                                                }) : null
                                            ]
                                        }) : "",
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "row",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "col-lg-12 selecteedItemdisp",
                                                children: selectItemDisp && selectItemDisp?.length > 0 && selectItemDisp?.map((selectfilterItem)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                        className: "selectItemName",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                children: selectfilterItem.name
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                className: "crossIcon",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                    className: "fa fa-times",
                                                                    "aria-hidden": "true",
                                                                    onClick: (e)=>RemoveSelectItem(e, selectfilterItem)
                                                                })
                                                            })
                                                        ]
                                                    }))
                                            })
                                        }),
                                        groupedData?.length > 0 ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            id: "products",
                                            className: "shop-product-wrap row ",
                                            "data-group": groupedData,
                                            children: [
                                                groupedData.map((data, i)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: isActive ? "col-lg-3 c" : "col-lg-12 e",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx(LoadProducts/* LoadProducts */.y, {
                                                            data: data,
                                                            shppingcart: shppingcart,
                                                            index: i,
                                                            skulisting: true,
                                                            notify: notify,
                                                            isActive: isActive
                                                        })
                                                    })),
                                                SubcategoryState && SubcategoryState.loading === true && Reset === false ? /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "col-lg-12 text-center mt-25 mb-25",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                        src: "/images/adibuja-logo-animation.gif",
                                                        alt: "",
                                                        style: {
                                                            justifySelf: "center",
                                                            width: "80px",
                                                            height: "80px"
                                                        }
                                                    })
                                                }) : null
                                            ]
                                        }) : isSortLoading || loading || isSamePage ? /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "row rr",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "col-lg-12 text-center mt-25 mb-60",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "loaderimgsearch",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                        src: "/images/adibuja-logo-animation.gif",
                                                        alt: "",
                                                        style: {
                                                            justifySelf: "center",
                                                            width: "80px",
                                                            height: "80px"
                                                        }
                                                    })
                                                })
                                            })
                                        }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "col-md-12",
                                                    style: {
                                                        padding: "5%"
                                                    },
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "alert alert-warning text-center",
                                                        children: "Products Not Found"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "col-lg-6"
                                                })
                                            ]
                                        }),
                                        isClient && (fixIntCount >= page && fixIntCount > 1 || filterProductCount >= filterPage && filterProductCount > 1) && !isLastPage && groupedData?.length > 0 && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "d-flex justify-content-center align-items-center spinner-container m-0",
                                            ref: ref,
                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "row rr",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "col-lg-12 text-center mt-25 mb-25",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                        src: "/images/adibuja-logo-animation.gif",
                                                        alt: "",
                                                        style: {
                                                            justifySelf: "center",
                                                            width: "80px",
                                                            height: "80px"
                                                        }
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: mavigationBarReducer && mavigationBarReducer !== undefined && mavigationBarReducer.filterinfo === true ? "shop-sidebar-inner mb-30 active" : "shop-sidebar-inner mb-30 closeactive",
                                id: "hidefilterResult",
                                children: groupedData && groupedData != "" && groupedData?.length !== 0 && advfilterData && advfilterData?.length > 1 || checkfilterflag || isSamePage ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "row ",
                                    style: {
                                        zIndex: filterdynamicpopup.isPaneOpen ? "0" : "888"
                                    },
                                    children: [
                                        advfilterData.map((advfilterbox, index)=>advfilterbox[0] !== "Price" ? /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "col-lg-2",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "filter-box",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx((external_multiselect_react_dropdown_default()), {
                                                        options: (advfilterbox !== undefined && advfilterbox.length > 0 && advfilterbox[1] || []).map((data, indexd)=>({
                                                                name: data.ListItemValue,
                                                                id: indexd + 1,
                                                                valueId: data.valueId,
                                                                FieldId: data.FieldId,
                                                                StaticFilter: data.StaticFilter,
                                                                Value: data.Value,
                                                                fitlerName: advfilterbox[0]
                                                            })),
                                                        // Options to display in the dropdown
                                                        selectedValues: preselectItem,
                                                        onSelect: filteronChange,
                                                        onRemove: RemoveSelectItem,
                                                        displayValue: "name" // Property name to display in the dropdown options
                                                        ,
                                                        placeholder: advfilterbox[0],
                                                        showCheckbox: true
                                                    })
                                                })
                                            }) : null),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "col-lg-2",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "single-sidebar mb-45 price-filter",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                                        children: "Filter By Price"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "panel panel-default single-sidebar",
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "position-relative rangeslider",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                                    type: "range",
                                                                    min: min,
                                                                    max: max,
                                                                    value: minValue,
                                                                    onChange: handleMinValue,
                                                                    className: external_classnames_default()("thumb thumb--zindex-3", {
                                                                        "thumb--zindex-5": ""
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                                    type: "range",
                                                                    min: min2,
                                                                    max: max2,
                                                                    value: maxValue,
                                                                    onChange: handleMaxValue,
                                                                    className: "thumb thumb--zindex-4"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                    className: "slider",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                            className: "slider__track"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                            ref: range,
                                                                            className: "slider__range"
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                            className: "slider__left-value",
                                                                            children: [
                                                                                "₹ ",
                                                                                sliderValue
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                            className: "slider__right-value",
                                                                            children: [
                                                                                "₹ ",
                                                                                sliderValue2
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("button", {
                                            className: "btn btn-secondary mt-0",
                                            type: "button",
                                            onClick: handlefilterResult,
                                            id: "btn",
                                            children: "Hide filter"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("button", {
                                            className: "clearAll2 btn btn-info mt-0",
                                            onClick: ()=>ClearAllFilter("resetFilter"),
                                            style: {
                                                display: Reset === true ? "inline-block" : "none"
                                            },
                                            children: "Clear All"
                                        })
                                    ]
                                }) : null
                            })
                        ]
                    })
                })
            }),
            groupedData && groupedData?.length > 0 || checkfilterflag || isSamePage ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("hr", {}),
                    /*#__PURE__*/ jsx_runtime.jsx(RelatedCategory, {
                        categorySEOData: categorySEOData,
                        relatedCategoryDetails: relatedCategoryDetails
                    })
                ]
            }) : null,
            isClient && groupedData && groupedData?.length > 0 ? /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                children: localStorage.getItem("CustGUID") === null || localStorage.getItem("CustGUID") === undefined || localStorage.getItem("CustGUID") === "00000000-0000-0000-0000-000000000000" ? /*#__PURE__*/ jsx_runtime.jsx(signin/* default */.Z, {}) : null
            }) : "",
            /*#__PURE__*/ jsx_runtime.jsx(footer/* default */.Z, {
                footerData: footerData && footerData,
                footerPagesLinks: footerPagesLinks,
                footerCategoryLinks: footerCategoryLinks
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                style: {
                    display: "none"
                },
                children: fixIntCount && !router.query?.page && Array.from({
                    length: fixIntCount
                }, (_, index)=>index + 1)?.slice(currentPage)?.map((page, index)=>/*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: `${router.asPath.split("?")?.[0]}?page=${page}`
                    }, index))
            })
        ]
    });
};
async function getServerSideProps(context) {
    const currentDomain = context?.req?.headers?.host || "";
    const { page, subcategory, categoryName } = context.query;
    const sellerDetailsFromDomain = await (0,getSellerDetails/* default */.Z)(context.req.headers.host);
    let sellerIdMain = homeServices/* ConstantsValues */.r.defaultSellerID;
    if (sellerDetailsFromDomain?.AdminMemberId) {
        sellerIdMain = sellerDetailsFromDomain.AdminMemberId;
    }
    try {
        const categoryData = await fetchCategoryData(page || 1, subcategory, categoryName, sellerIdMain);
        const categorySEOData = await fetchCategorySEOData(categoryName, sellerIdMain);
        const advanceFilterData = await fetchAdvanceGetSkuFilter(categoryName, categoryData?.minprice, categoryData?.maxprice, sellerIdMain);
        const topMenuData = await fetchTopMenuData(sellerIdMain);
        const footerPagesLinks = await fetchFooterPagesLinks(sellerIdMain);
        const footerCategoryLinks = await fetchFooterCategoryLinks(sellerIdMain);
        const relatedCategoryDetails = await fetchRelatedCategoryDetails(categoryName, sellerIdMain);
        return {
            props: {
                categoryData: categoryData,
                categorySEOData: categorySEOData,
                advanceFilterData: advanceFilterData,
                page: page || 1,
                topMenuData: topMenuData,
                footerPagesLinks: footerPagesLinks,
                footerCategoryLinks: footerCategoryLinks,
                relatedCategoryDetails: relatedCategoryDetails,
                sellerDetailsFromDomain: sellerDetailsFromDomain,
                currentDomain: currentDomain
            }
        };
    } catch (err) {
        return {
            props: {
                categoryData: [],
                categorySEOData: [],
                advanceFilterData: [],
                page: page || 1,
                topMenuData: [],
                footerPagesLinks: [],
                footerCategoryLinks: [],
                relatedCategoryDetails: [],
                sellerDetailsFromDomain: sellerDetailsFromDomain,
                currentDomain: currentDomain
            }
        };
    }
}
function fetchCategoryData(page, parentCatURL, caturl, sellerIdMain) {
    const url = `${constants/* default */.ZP.urls.baseUrl}${constants/* default */.ZP.endPoints.skulisting}clientId=${homeServices/* ConstantsValues */.r.ClientId}&catUrl=${caturl}&parentCatURL=${parentCatURL}&languageId=2&CurrencyCode=INR&CustGUID=${homeServices/* ConstantsValues */.r.defaultCustGUID}&cartGuid=${homeServices/* ConstantsValues */.r.defaultCartGUID}&fixedShippingDurationId=0&pageNo=${page}&limit=20&sortby=null&pincode=${homeServices/* ConstantsValues */.r.pincode}&defaultListing=false&minPrice=null&maxPrice=null&sellerid=${sellerIdMain}`;
    return (0,apiServices/* httpRequest */.c)(url, "GET");
}
function fetchCategorySEOData(categoryName, sellerIdMain) {
    const url = `${constants/* default */.ZP.urls.baseUrl}${constants/* default */.ZP.endPoints.skuSEOListing}url=${categoryName}&languageId=2&sellerid=${sellerIdMain}`;
    return (0,apiServices/* httpRequest */.c)(url, "GET");
}
function fetchAdvanceGetSkuFilter(caturl, min, max, sellerIdMain) {
    const url = `${constants/* default */.ZP.urls.baseUrl}${constants/* default */.ZP.endPoints.advancegetskufilter}clientid=${homeServices/* ConstantsValues */.r.ClientId}&caturl=${caturl}&languageId=${homeServices/* ConstantsValues */.r.languageId}&pincode=${homeServices/* ConstantsValues */.r.pincode}&filterValueIds=yes&isFeatured=0&minPrice=${min}&maxPrice=${max}&pageNo=1&limit=8&sellerid=${sellerIdMain}`;
    return (0,apiServices/* httpRequest */.c)(url, "POST");
}
function fetchTopMenuData(sellerIdMain) {
    const url = `${constants/* default */.ZP.urls.baseUrl}${constants/* default */.ZP.endPoints.MultiMenu}ClientId=1&languageId=2&IsForReact=1&sellerid=${sellerIdMain}`;
    return (0,apiServices/* httpRequest */.c)(url, "GET");
}
function fetchRelatedCategoryDetails(catURL, sellerIdMain) {
    const url = `${constants/* default */.ZP.urls.baseUrl}${constants/* default */.ZP.endPoints.GetRelatedCategoryList}&clientId=${homeServices/* ConstantsValues */.r.ClientId}&LanguageId=${homeServices/* ConstantsValues */.r.languageId}&CategoryName=${catURL}&sellerid=${sellerIdMain}`;
    return (0,apiServices/* httpRequest */.c)(url, "GET");
}
function fetchFooterCategoryLinks(sellerIdMain) {
    const url = `${constants/* default */.ZP.urls.baseUrl}${constants/* default */.ZP.endPoints.MegaMainMenu}ClientId=1&languageId=2&IsForReact=1&sellerid=${sellerIdMain}`;
    return (0,apiServices/* httpRequest */.c)(url, "GET");
}
function fetchFooterPagesLinks(sellerIdMain) {
    let pagename = "";
    const loginStatus = external_js_cookie_default().get("customer-login-status");
    if (sellerIdMain === "0") {
        if (loginStatus) {
            pagename = loginStatus;
        } else {
            pagename = "react-guest";
        }
    } else {
        if (loginStatus) {
            pagename = "react-seller-auth";
        } else {
            pagename = "react-seller-guest";
        }
    }
    const url = `${constants/* default */.ZP.urls.baseUrl}${constants/* default */.ZP.endPoints.footer}pagename=${pagename}&cid=1&languageId=2&sellerid=${sellerIdMain}`;
    return (0,apiServices/* httpRequest */.c)(url, "GET");
}
/* harmony default export */ const _categoryName_ = (Subcategory);

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2Fcategory%2F%5Bsubcategory%5D%2F%5BcategoryName%5D&preferredRegion=&absolutePagePath=private-next-pages%2Fcategory%2F%5Bsubcategory%5D%2F%5BcategoryName%5D.js&absoluteAppPath=private-next-pages%2F_app.js&absoluteDocumentPath=private-next-pages%2F_document.js&middlewareConfigBase64=e30%3D!

        // Next.js Route Loader
        
        

        // Import the app and document modules.
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2Fcategory_2F_5Bsubcategory_5D_2F_5BcategoryName_5D_preferredRegion_absolutePagePath_private_next_pages_2Fcategory_2F_5Bsubcategory_5D_2F_5BcategoryName_5D_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(_categoryName_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(_categoryName_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(_categoryName_namespaceObject, "getStaticPaths")
        const next_route_loaderpage_2Fcategory_2F_5Bsubcategory_5D_2F_5BcategoryName_5D_preferredRegion_absolutePagePath_private_next_pages_2Fcategory_2F_5Bsubcategory_5D_2F_5BcategoryName_5D_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_getServerSideProps = (0,helpers/* hoist */.l)(_categoryName_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(_categoryName_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(_categoryName_namespaceObject, "reportWebVitals")
        

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(_categoryName_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(_categoryName_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(_categoryName_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(_categoryName_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(_categoryName_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/category/[subcategory]/[categoryName]","pathname":"/category/[subcategory]/[categoryName]","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({
          ...options,
          components: {
            App: _app["default"],
            Document: _document["default"],
          },
          userland: _categoryName_namespaceObject,
        })
        
        
    

/***/ }),

/***/ 2694:
/***/ (() => {



/***/ }),

/***/ 6061:
/***/ (() => {



/***/ }),

/***/ 2372:
/***/ (() => {



/***/ }),

/***/ 9770:
/***/ (() => {



/***/ }),

/***/ 554:
/***/ (() => {



/***/ }),

/***/ 6466:
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ 7197:
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ 6999:
/***/ ((module) => {

"use strict";
module.exports = require("@react-oauth/google");

/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 9003:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 7318:
/***/ ((module) => {

"use strict";
module.exports = require("hoist-non-react-statics");

/***/ }),

/***/ 7133:
/***/ ((module) => {

"use strict";
module.exports = require("immer");

/***/ }),

/***/ 7644:
/***/ ((module) => {

"use strict";
module.exports = require("invariant");

/***/ }),

/***/ 6734:
/***/ ((module) => {

"use strict";
module.exports = require("js-cookie");

/***/ }),

/***/ 352:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/conformsTo");

/***/ }),

/***/ 8492:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/groupBy");

/***/ }),

/***/ 9699:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isEmpty");

/***/ }),

/***/ 5716:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isFunction");

/***/ }),

/***/ 5795:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isObject");

/***/ }),

/***/ 7026:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isString");

/***/ }),

/***/ 9261:
/***/ ((module) => {

"use strict";
module.exports = require("multiselect-react-dropdown");

/***/ }),

/***/ 3076:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 4140:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 5132:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/get-img-props.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 580:
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 1937:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/Button");

/***/ }),

/***/ 6964:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/Carousel");

/***/ }),

/***/ 5226:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/Form");

/***/ }),

/***/ 9306:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/Modal");

/***/ }),

/***/ 9070:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/NavDropdown");

/***/ }),

/***/ 8907:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/Row");

/***/ }),

/***/ 4795:
/***/ ((module) => {

"use strict";
module.exports = require("react-chatbot-kit");

/***/ }),

/***/ 5515:
/***/ ((module) => {

"use strict";
module.exports = require("react-cookie");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 6652:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/bi");

/***/ }),

/***/ 2750:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fi");

/***/ }),

/***/ 9012:
/***/ ((module) => {

"use strict";
module.exports = require("react-loading-skeleton");

/***/ }),

/***/ 5804:
/***/ ((module) => {

"use strict";
module.exports = require("react-multi-carousel");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 4661:
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom");

/***/ }),

/***/ 7453:
/***/ ((module) => {

"use strict";
module.exports = require("react-sliding-pane");

/***/ }),

/***/ 1187:
/***/ ((module) => {

"use strict";
module.exports = require("react-toastify");

/***/ }),

/***/ 2076:
/***/ ((module) => {

"use strict";
module.exports = require("react-tooltip");

/***/ }),

/***/ 6695:
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ }),

/***/ 6537:
/***/ ((module) => {

"use strict";
module.exports = require("redux-saga");

/***/ }),

/***/ 6477:
/***/ ((module) => {

"use strict";
module.exports = require("redux-saga/effects");

/***/ }),

/***/ 6153:
/***/ ((module) => {

"use strict";
module.exports = require("universal-cookie");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [6505,1664,8719,5675,3451,3190,4834,6920,8698,8659,7062,7895,6452,3497,8371,2447,3880,9474,2859,7636], () => (__webpack_exec__(6413)));
module.exports = __webpack_exports__;

})();