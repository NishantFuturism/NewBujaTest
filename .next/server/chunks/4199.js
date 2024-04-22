exports.id = 4199;
exports.ids = [4199];
exports.modules = {

/***/ 4199:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Products: () => (/* binding */ Products),
  "default": () => (/* binding */ containers_Products)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__(6695);
// EXTERNAL MODULE: external "reselect"
var external_reselect_ = __webpack_require__(6814);
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
// EXTERNAL MODULE: external "immer"
var external_immer_ = __webpack_require__(7133);
var external_immer_default = /*#__PURE__*/__webpack_require__.n(external_immer_);
;// CONCATENATED MODULE: ./src/containers/Products/constants.js
/*
 *
 * Products constants
 *
 */ const DEFAULT_ACTION = "app/Products/DEFAULT_ACTION";
const ADD_TO_COMPARE = "app/Products/ADD_TO_COMPARE";

;// CONCATENATED MODULE: ./src/containers/Products/reducer.js
/*
 *
 * Products reducer
 *
 */ 

const initialState = {
    skucode: []
};
/* eslint-disable default-case, no-param-reassign */ const productsReducer = (state = initialState, action)=>external_immer_default()(state, (draft)=>{
        switch(action.type){
            case DEFAULT_ACTION:
                console.log("action sku", action);
                draft.skucode = action.SkuCode;
                break;
        }
    });
/* harmony default export */ const reducer = (productsReducer);

;// CONCATENATED MODULE: ./src/containers/Products/saga.js
// import { take, call, put, select } from 'redux-saga/effects';
// Individual exports for testing
function* productsSaga() {
// See example in containers/HomePage/saga.js
}

;// CONCATENATED MODULE: ./src/containers/Products/selectors.js


/**
 * Direct selector to the products state domain
 */ const selectProductsDomain = (state)=>state.products || initialState;
/**
 * Other specific selectors
 */ /**
 * Default selector used by Products
 */ const makeSelectProducts = ()=>(0,external_reselect_.createSelector)(selectProductsDomain, (substate)=>substate);
/* harmony default export */ const selectors = (makeSelectProducts);


// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/containers/AddToCart/index.js
var AddToCart = __webpack_require__(5810);
// EXTERNAL MODULE: ./src/containers/MainPage/api/mycartAPI.js
var mycartAPI = __webpack_require__(6920);
// EXTERNAL MODULE: ./src/containers/MainPage/api/homeServices.js
var homeServices = __webpack_require__(4171);
// EXTERNAL MODULE: ./src/context.js
var context = __webpack_require__(7880);
// EXTERNAL MODULE: ./src/containers/LoadProducts/actions.js
var actions = __webpack_require__(4172);
// EXTERNAL MODULE: ./src/containers/LoadProducts/reducer.js
var LoadProducts_reducer = __webpack_require__(538);
// EXTERNAL MODULE: ./src/containers/LoadProducts/saga.js
var saga = __webpack_require__(1953);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/utils/getSellerDetails.js
var getSellerDetails = __webpack_require__(5177);
// EXTERNAL MODULE: ./src/containers/Products/loadcompare.css
var loadcompare = __webpack_require__(4169);
;// CONCATENATED MODULE: ./src/containers/Products/Loadcompare.js
/* eslint-disable jsx-a11y/click-events-have-key-events */ /* eslint-disable jsx-a11y/no-static-element-interactions */ /* eslint-disable jsx-a11y/alt-text */ /* eslint-disable jsx-a11y/anchor-is-valid */ /* eslint-disable react/prop-types */ /* eslint-disable no-undef */ // import { Select } from 'antd';



// import { Link } from 'react-router-dom';

//import history from '../../utils/history';







// import loaderimg from '../../images/adibuja-logo-animation.gif';







// import Select from './select';

function Loadcompare(props) {
    const router = (0,router_.useRouter)();
    const dispatch = (0,external_react_redux_.useDispatch)();
    console.log("props..", props);
    (0,injectReducer/* useInjectReducer */.v)({
        key: "loadProducts",
        reducer: LoadProducts_reducer/* default */.Z
    });
    (0,injectSaga/* useInjectSaga */.h)({
        key: "loadProducts",
        saga: saga/* default */.Z
    });
    // const [Seleced, setSeleced] = useState('');
    // const [filtered, setFiltered] = useState([]);
    const [shoppingCart, setShoppingCart] = (0,external_react_.useState)([]);
    const [data, setdata] = (0,external_react_.useState)([]);
    const [compareProductList, setCompareProductList] = (0,external_react_.useState)([]);
    const [productList, setProductList] = (0,external_react_.useState)([]);
    const [loading, setloading] = (0,external_react_.useState)(false);
    const { compareRefresh, setCompareRefresh } = (0,external_react_.useContext)(context/* Message_data */.L);
    // const [noItemInCompareList, setNoItemInCompareList] = useState(true)
    const addToCartRdcr = (0,external_react_redux_.useSelector)((state)=>state.addToCart);
    // const products = useSelector(state => state.products)
    const loadProducts = (0,external_react_redux_.useSelector)((state)=>state.loadProducts);
    console.log("loadProducts11", loadProducts);
    const productdetail = (PageUrl, e)=>{
        e.preventDefault();
        // router.push(`/product/${PageUrl}`, { skuUrl: PageUrl })
        localStorage.setItem("PageUrl", window.btoa(PageUrl));
        router.push({
            pathname: `/product/${PageUrl}`,
            skuUrl: PageUrl
        });
    };
    (0,external_react_.useEffect)(()=>{
        (async ()=>{
            const sellerDetailsFromDomain = await (0,getSellerDetails/* default */.Z)();
            let sellerIdMain = homeServices/* ConstantsValues */.r.defaultSellerID;
            if (sellerDetailsFromDomain && sellerDetailsFromDomain.AdminMemberId && sellerDetailsFromDomain.AdminMemberId !== "") {
                sellerIdMain = sellerDetailsFromDomain.AdminMemberId;
            }
            localStorage.setItem("sellerID", sellerIdMain);
        })();
    }, []);
    (0,external_react_.useEffect)(()=>{
        mycartAPI/* default */.Z.getShoppingcartDetails().then((response)=>{
            setShoppingCart(response);
        }).catch((error)=>{
            console.log("error:::", error);
        });
    }, [
        addToCartRdcr
    ]);
    const deleteProduct = (SkuId)=>{
        setCompareRefresh(false);
        // const cflag=true;
        fetch("https://api.ipify.org?format=json").then((response)=>response.json()).then((data)=>{
            // CustomsAPI.getnewcompare(SkuId, data.ip, cflag)
            // dispatch(getcompare(SkuId, data.ip,cflag))
            dispatch((0,actions/* getcompare */.WS)(SkuId, data.ip, true));
        // toast('The record has been deleted successfully.')
        }).catch((error)=>console.log(error));
    };
    (0,external_react_.useEffect)(()=>{
        // setTimeout(() => {
        setloading(true);
        // }, 1500);
        homeServices/* default */.Z.getproductcompare().then((response)=>{
            console.log("uuuuusss", response);
            setProductList(response);
        }).catch((error)=>{
            console.log("error:::", error);
        }).finally(()=>setloading(false));
    }, []);
    (0,external_react_.useEffect)(()=>{
        if (loadProducts) {
            setProductList(loadProducts?.newcompare);
        }
    }, [
        loadProducts
    ]);
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: productList && productList.length > 0 ? /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "table-responsive  text-center pr-block ProductComparison",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("table", {
                id: "comparefix",
                className: "table table-bordered compare-style",
                style: {
                    display: "flex"
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("thead", {
                        className: "comparethead",
                        style: {
                            border: "1px solid #dee2e6"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("tr", {
                                children: /*#__PURE__*/ jsx_runtime.jsx("td", {
                                    className: "product-title width-2-per textbold compareproimg",
                                    style: {
                                        whiteSpace: "nowrap"
                                    },
                                    children: "Product Image"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("tr", {
                                children: /*#__PURE__*/ jsx_runtime.jsx("td", {
                                    className: "product-title textbold comparenameall",
                                    children: "Product Name"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("tr", {
                                children: /*#__PURE__*/ jsx_runtime.jsx("td", {
                                    className: "product-title width-10-per textbold comparenameall",
                                    children: "Pack Size "
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("tr", {
                                children: /*#__PURE__*/ jsx_runtime.jsx("td", {
                                    className: "product-title width-10-per textbold price",
                                    children: "Price "
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("tr", {
                                children: /*#__PURE__*/ jsx_runtime.jsx("td", {
                                    className: "product-title width-10-per textbold compaction",
                                    children: "Actions"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("tbody", {
                        children: (productList !== undefined && productList || []).map((item, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("td", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("tr", {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("td", {
                                            className: "width-30-per position-relative",
                                            align: "center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                    className: "lnr lnr-trash close-btnx btncompare",
                                                    style: {
                                                        cursor: "pointer"
                                                    },
                                                    onClick: ()=>deleteProduct(item.SkuId)
                                                }),
                                                console.log("i20", item),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    style: {
                                                        positionL: "relative",
                                                        cursor: "pointer"
                                                    },
                                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                        href: `/product/${item.PageUrl}`,
                                                        onClick: (e)=>productdetail(item.PageUrl, e),
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                            src: item.ListingImage,
                                                            referrerPolicy: "no-referrer",
                                                            className: "js-lazy-img",
                                                            width: "150",
                                                            height: "150",
                                                            alt: ""
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("tr", {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("td", {
                                            className: "width-30-per",
                                            children: [
                                                " ",
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                    className: "compareproname",
                                                    children: [
                                                        " ",
                                                        item.SkuDisplayName
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("tr", {
                                        children: /*#__PURE__*/ jsx_runtime.jsx("td", {
                                            className: "pk-size width-30-per",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                children: [
                                                    item.FilterList[0]?.ListItem,
                                                    " "
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("tr", {
                                        children: /*#__PURE__*/ jsx_runtime.jsx("td", {
                                            className: "pk-size width-30-per",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                children: [
                                                    "₹",
                                                    item.FilterList[0]?.FilterSPPrice
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("tr", {
                                        children: item.IsDeliveryAvailableToPinCode ? /*#__PURE__*/ jsx_runtime.jsx("td", {
                                            className: "pr-block  text-center width-30-per SkuId_83839 available ",
                                            children: /*#__PURE__*/ jsx_runtime.jsx(AddToCart/* default */.Z, {
                                                data: item,
                                                shoppingCart: shoppingCart,
                                                filtered: item.FilterList[0],
                                                skulisting: item.skulisting,
                                                notify: "",
                                                wishlist: false
                                            })
                                        }) : /*#__PURE__*/ jsx_runtime.jsx("td", {
                                            className: "mycart_3",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                className: "lbl-cant-deliver",
                                                children: [
                                                    " Can not deliver to pin code ",
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("b", {
                                                        children: [
                                                            item.DeliveryLocalityPincode,
                                                            " "
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                ]
                            }, index))
                    })
                ]
            })
        }) : loading ? /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "col-lg-12 text-center mt-25 mb-25 compareLoadimg",
            style: {
                width: "100% "
            },
            children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                src: "/images/adibuja-logo-animation.gif",
                alt: "",
                style: {
                    height: "80px",
                    justifyContent: "center"
                }
            })
        }) : !loading && /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "col-md-12",
            style: {
                padding: "5%"
            },
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "alert alert-warning",
                children: "Products Not Found"
            })
        })
    });
}

;// CONCATENATED MODULE: ./src/containers/MyAccount/compareBreadCrumb.js
/* eslint-disable react/prop-types */ // import React from "react";



function BreadCrumb(props) {
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "breadcrumb-area",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "container-fluid",
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "row",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "col-12",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "breadcrumb-wrap",
                        children: /*#__PURE__*/ jsx_runtime.jsx("nav", {
                            "aria-label": "breadcrumb",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                className: "breadcrumb",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                        className: "breadcrumb-item",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                            href: "/",
                                            children: "Home"
                                        })
                                    }),
                                    props.compare && /*#__PURE__*/ jsx_runtime.jsx("li", {
                                        className: "breadcrumb-item",
                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            href: "/compare",
                                            children: props.compare
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                        className: "breadcrumb-item active",
                                        "aria-current": "page",
                                        children: props.activepage
                                    })
                                ]
                            })
                        })
                    })
                })
            })
        })
    });
}
// BreadCrumb.propTypes = {};
/* harmony default export */ const compareBreadCrumb = (BreadCrumb);

;// CONCATENATED MODULE: ./src/containers/Products/index.js
/* eslint-disable react/prop-types */ /* eslint-disable no-nested-ternary */ /* eslint-disable jsx-a11y/click-events-have-key-events */ /* eslint-disable jsx-a11y/no-static-element-interactions */ /**
 *
 * Products
 *
 */ 

// import { useCookies } from "react-cookie";





// import '../../../public/assets1/css/bundle.css';
// import '../../../public/assets1/css/default.min.css';
// import '../../../public/assets1/css/font-awesome.min.css';
// import '../../../public/assets1/css/responsive.min.css';
// import '../../../public/assets1/css/style.min.css';




// import AddToCart from '../AddToCart';
// import mycartAPI from '../MainPage/api/mycartAPI';
// import history from '../../utils/history';
// import AddItem from './AddItem';


// import Select from './select';

// import { ToppSellingOriginal } from '../ToppSellingOriginal/index';
// import RelatedProduct from '../RelatedProduct';
// import TopsellingProduct from '../TopsellingProduct';




// import RecentlyViewProduct from '../RecentlyViewProduct';
// import ReorderProduct from '../ReorderProduct';
function Products() {
    (0,injectReducer/* useInjectReducer */.v)({
        key: "products",
        reducer: reducer
    });
    (0,injectSaga/* useInjectSaga */.h)({
        key: "products",
        saga: productsSaga
    });
    // const [cookies, removeCookie] = useCookies(['name']);
    // const [Seleced, setSeleced] = useState('');
    // const [shoppingCart, setShoppingCart] = useState([]);
    // const [filtered, setFiltered] = useState([]);
    // const [productdata, setproductdata] = useState([]);
    // const [Seleced, setSeleced] = useState('');
    // const [pdata, setpdata] = useState([]);
    // const addToCartRdcr = useSelector(state => state.addToCart)
    const [sellerDetailsFromDomain, setSellerDetailsFromDomain] = (0,external_react_.useState)([]);
    const homeScreen = (0,external_react_redux_.useSelector)((state)=>state.homeScreen);
    // const [productdata, setproductdata] = useState([]);
    // const Product = cookies.name
    const productcompareReducer = (0,external_react_redux_.useSelector)((state)=>state.products);
    const reducerproducts = (0,external_react_redux_.useSelector)((state)=>state.loadProducts);
    (0,external_react_.useEffect)(()=>{
        (async ()=>{
            const sellerDetailsFromDomain = await (0,getSellerDetails/* default */.Z)();
            let sellerIdMain = homeServices/* ConstantsValues */.r.defaultSellerID;
            if (sellerDetailsFromDomain && sellerDetailsFromDomain.AdminMemberId && sellerDetailsFromDomain.AdminMemberId !== "") {
                sellerIdMain = sellerDetailsFromDomain.AdminMemberId;
                setSellerDetailsFromDomain(sellerDetailsFromDomain);
            }
            localStorage.setItem("sellerID", sellerIdMain);
        })();
    }, []);
    //console.log('products++', reducerproducts);
    //console.log('productcompareReducer', productcompareReducer, homeScreen);
    // const changeFltr = (newFL, item) => {
    //   setSeleced(newFL);
    //   const P = item.FilterList ? item.FilterList.find(i => i.ListItem === newFL) : item.FiltersList.find(i => i.ListItem === newFL)
    //   console.log('filterd', item);
    //   setFiltered(P);
    // };
    // useEffect(() => {
    //   if (props.data !== undefined) {
    //     setFiltered(props.data && props.data.FiltersList)
    //   }
    // }, [props])
    // useEffect(() => {
    //   setFiltered(props.data.FilterList[0] ? props.data.FilterList[0] : props.data.FiltersList[0])
    // }, [])
    // useEffect(() => {
    //   if (productcompareReducer !== undefined) {
    //     setFiltered(productcompareReducer.skucode)
    //   }
    // }, [productcompareReducer])
    // useEffect(() => {
    //   if (addToCartRdcr !== undefined) {
    //     setShoppingCart(addToCartRdcr.shoppingCartDetails)
    //   }
    // }, [addToCartRdcr])
    // useEffect(() => {
    //   if (homeScreen !== undefined) {
    //     setShoppingCart(homeScreen.shoppingCartDetails)
    //   }
    // }, [homeScreen])
    // useEffect(() => {
    //   mycartAPI.getShoppingcartDetails()
    //     .then(response => {
    //       console.log('uuuuusss', response)
    //       setShoppingCart(response)
    //     })
    //     .catch(error => {
    //       console.log('error:::', error);
    //     });
    // }, [])
    // useEffect(() => {
    //   setpdata(productdata.join(JSON.parse(data)))
    // }, [data])
    // const productdata = JSON.parse(data)
    // console.log({ Product }, JSON.parse(data));
    // function deleteProduct(SkuId) {
    //   // removeCookie('name', { path: '/' })
    //   // console.log(productdata.length, SkuId);
    //   localStorage.key('Comapredata')
    //   productdata.pop(SkuId)
    // }
    // const productdetail = (PageUrl) => {
    //   history.push('/product/', { skuUrl: PageUrl })
    //   localStorage.setItem('PageUrl', window.btoa(PageUrl))
    // }
    // console.log('propduct', filtered,);
    // const SelectDrop = props => (
    //   <td className="pk-size width-30-per">
    //     <select onChange={event => changeFltr(event.target.value, props)} value={Seleced} >
    //       {props && props.data.FilterList.map(itm => (
    //         <option value={itm.ListItem}>{itm.ListItem}</option>
    //       ))}
    //     </select>
    //   </td>
    // )
    // console.log(' 83746', productdata);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(external_react_toastify_.ToastContainer, {
                position: "top-right"
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Header/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime.jsx(compareBreadCrumb, {
                activepage: "Compare"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "comparison-wrapper pb-50",
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
                                    className: "comparison",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "row",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "col-12 col-sm-12 col-md-12 col-lg-12",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "section-title",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                        children: "Product Comparison"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "table-responsive",
                                                    id: "last_purchaseddiv",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                            type: "hidden",
                                                            id: "countcart",
                                                            "data-countval": "2"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                            type: "hidden",
                                                            className: "PriceId",
                                                            value: "14424"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx(Loadcompare, {
                                                            msg: "No more products"
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
            }),
            /*#__PURE__*/ jsx_runtime.jsx(footer/* default */.Z, {})
        ]
    });
}
const mapStateToProps = (0,external_reselect_.createStructuredSelector)({
    products: selectors()
});
function mapDispatchToProps(dispatch) {
    return {
        dispatch
    };
}
const withConnect = (0,external_react_redux_.connect)(mapStateToProps, mapDispatchToProps);
/* harmony default export */ const containers_Products = ((0,external_redux_.compose)(withConnect, external_react_.memo)(Products));


/***/ }),

/***/ 4169:
/***/ (() => {



/***/ })

};
;