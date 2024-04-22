"use strict";
exports.id = 795;
exports.ids = [795];
exports.modules = {

/***/ 795:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ReOrder: () => (/* binding */ ReOrder),
  "default": () => (/* binding */ myReorder)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(1187);
// EXTERNAL MODULE: ./src/components/Header/index.js + 22 modules
var Header = __webpack_require__(3497);
// EXTERNAL MODULE: ./src/containers/MainPage/api/Reorder.js
var Reorder = __webpack_require__(7456);
// EXTERNAL MODULE: ./src/containers/MyAccount/MyAccountSideNav.js
var MyAccountSideNav = __webpack_require__(1766);
// EXTERNAL MODULE: ./src/components/Footer/footer.js + 5 modules
var footer = __webpack_require__(8371);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./src/containers/AddToCart/index.js
var AddToCart = __webpack_require__(5810);
// EXTERNAL MODULE: ./src/containers/MainPage/api/mycartAPI.js
var mycartAPI = __webpack_require__(6920);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/containers/MyAccount/Loadreorder.js
/* eslint-disable jsx-a11y/anchor-is-valid */ /* eslint-disable jsx-a11y/alt-text */ /* eslint-disable react/prop-types */ 




////import history from '../../utils/history';

// import OrderdetailAPI from '../MainPage/api/orderdetail';
// import ReorderAPI from '../MainPage/api/Reorder';


function Loadreorder(props) {
    const [Seleced, setSeleced] = (0,external_react_.useState)("");
    const [filtered, setFiltered] = (0,external_react_.useState)([]);
    const [shoppingCart, setShoppingCart] = (0,external_react_.useState)([]);
    // const [showReorderFilterList, setShowReorderFilterList] = useState(props.data.FiltersList);
    // IsListItemAddedInCart
    // console.log("showReorder..", showReorder)
    // const [reOrderlist, setReOrderlist] = useState([]);
    const addtocartreducer = (0,external_react_redux_.useSelector)((state)=>state.addToCart);
    const router = (0,router_.useRouter)();
    const changeFltr = (newFL)=>{
        console.log("newFL", newFL);
        setSeleced(newFL);
        const P = props && props.data.FiltersList.find((i)=>i.ListItem === newFL);
        console.log("filterd", P);
        setFiltered(P);
    };
    (0,external_react_.useEffect)(()=>{}, []);
    // useEffect(() => {
    //   if (props.data !== undefined) {
    //     setFiltered(props.data && props.data.FiltersList)
    //   }
    // }, [props])
    (0,external_react_.useEffect)(()=>{
        setFiltered(props.data && props.data.FiltersList[0]);
    }, []);
    console.log("sssss", filtered, Seleced);
    const productdetail = (PageUrl)=>{
        // history.push(`/product/${PageUrl}`, { skuUrl: PageUrl })
        router.push({
            pathname: `/product/${PageUrl}`,
            skuUrl: PageUrl
        });
        localStorage.setItem("PageUrl", window.btoa(PageUrl));
    };
    (0,external_react_.useEffect)(()=>{
        mycartAPI/* default */.Z.getShoppingcartDetails().then((response)=>{
            setShoppingCart(response);
        }).catch((error)=>{
            console.log("error:::", error);
        });
    }, [
        addtocartreducer
    ]);
    function dateConverter(createdon) {
        const date = new Date(createdon);
        const formattedDate = date.toLocaleDateString("en-us", {
            month: "long",
            day: "numeric",
            year: "numeric"
        }).replace(/ /g, "  ");
        return formattedDate;
    }
    // function fetchorder() {
    //   ReorderAPI.Reorder({})
    //     .then(response => {
    //       setReOrderlist(response)
    //       console.log("reorderresponse..", response)
    //     })
    //     .catch(error => {
    //       console.log('error:::', error);
    //     });
    // }
    // useEffect(() => {
    //   fetchorder()
    // }, [])
    (0,external_react_.useEffect)(()=>{
        dateConverter();
    });
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
            className: "pr-block",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("td", {
                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: "#",
                        onClick: ()=>productdetail(props.data.PageUrl),
                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                            src: props.data.ListingImage,
                            width: "50",
                            height: "50"
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("td", {
                    className: "reordertext",
                    id: "reoderproductname",
                    children: [
                        console.log("propspp", props.data),
                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("strong", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                        href: "#",
                                        onClick: ()=>productdetail(props.data.PageUrl),
                                        children: [
                                            " ",
                                            props.data.Name
                                        ]
                                    }),
                                    " "
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx("td", {
                    children: dateConverter(props.data.CreatedOn)
                }),
                /*#__PURE__*/ jsx_runtime.jsx("td", {
                    style: {
                        textAlign: "center"
                    },
                    children: /*#__PURE__*/ jsx_runtime.jsx("select", {
                        className: "nice-select ddl-weight customdropdown",
                        onChange: (event)=>changeFltr(event.target.value),
                        children: props.data.FiltersList.map((itm)=>/*#__PURE__*/ jsx_runtime.jsx("option", {
                                value: itm.ListItem,
                                ...props.Reorder ? "Reorder" : "Add to cart",
                                children: itm.ListItem
                            }))
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("td", {
                    style: {
                        textAlign: "right"
                    },
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "price-box",
                        children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                            className: "",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                className: "special-price",
                                id: "reorderprice",
                                style: {
                                    textAlign: "right"
                                },
                                children: [
                                    "₹",
                                    parseFloat(filtered.FilterSPPrice).toFixed(2)
                                ]
                            })
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("td", {
                    className: "text-center",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "reorderaddtocartandqty",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(AddToCart/* default */.Z, {
                                data: props.data,
                                shoppingCart: shoppingCart,
                                filtered: filtered,
                                Reorder: true,
                                skulisting: true
                            }),
                            console.log("dataa..", props.data)
                        ]
                    })
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./src/containers/MyAccount/myAccountBreadcrumb.js
var myAccountBreadcrumb = __webpack_require__(3718);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__(8819);
;// CONCATENATED MODULE: ./src/pages/account/reorder/myReorder.js
/* eslint-disable jsx-a11y/anchor-is-valid */ /* eslint-disable jsx-a11y/alt-text */ 

// import { Link } from 'react-router-dom';

// import { useSelector } from 'react-redux';


// import SubNavigation from '../../components/SubNavigation';
// import AddToCart from '../AddToCart';
// import mycartAPI from '../MainPage/api/mycartAPI';



// import history from '../../utils/history';





function ReOrder() {
    const [isMount, setIsMount] = (0,external_react_.useState)(false);
    const [loading, setloading] = (0,external_react_.useState)(false);
    const [reorderlist, setreorderlist] = (0,external_react_.useState)({});
    // const [sort, setsort] = useState(false);
    const [sortname, setsortName] = (0,external_react_.useState)(false);
    const [Sortdata, setSortdata] = (0,external_react_.useState)([]);
    const [isUserLogin, setIsUserLogin] = (0,external_react_.useState)();
    const [showEmptyOrder, setShowEmptyOrder] = (0,external_react_.useState)(false);
    const router = (0,router_.useRouter)();
    console.log("isUserLogin--", isUserLogin);
    // const addtocartreducer = useSelector(state => state.addToCart)
    // const [shoppingCart, setShoppingCart] = useState([]);
    // const [Seleced, setSeleced] = useState('');
    // const [filtered, setFiltered] = useState([]);
    // const dispatch = useDispatch()
    (0,external_react_.useEffect)(()=>{
        setIsMount(true);
    }, []);
    (0,external_react_.useEffect)(()=>{
        if (false) {}
    }, [
        isUserLogin
    ]);
    (0,external_react_.useEffect)(()=>{
        // dispatch(listreorder())
        setloading(true);
        Reorder/* default */.Z.Reorder({}).then((response)=>{
            setloading(false);
            console.log("setreorderlist==>", response);
            setreorderlist(response);
            setSortdata(response.GetSku);
            console.log("reorder..", response);
            console.log("chkflag", response[0].FiltersList[0].IsListItemAddedInCart);
            // if (response.FiltersList.IsListItemAddedInCart === false) {
            //   alert("reorder")
            //   { props.Reorder ? 'Reorder' : 'Add to cart' }
            // }
            setShowEmptyOrder(true);
        }).catch((error)=>{
            console.log("error:::", error);
            setShowEmptyOrder(true);
        });
    }, []);
    // useEffect(() => {
    //   changereorderbutton
    // })
    // const changereorderbutton = () => {
    //   if (response[0].FiltersList[0].IsListItemAddedInCart === false) {
    //     alert("reorder")
    //   }
    //   else {
    //     alert("addtocart")
    //   }
    // }
    // const sortdata = () => {
    //   setsort(true)
    //   if (cartdata !== undefined && cartdata[0].cart !== undefined) {
    //     // cartAllData.cart[0].sort()
    //     // const data = cartdata.cart[0].sort((a, b) => (a.CartItemId > b.CartItemId) ? 1 : -1)
    //     const data = cartdata[0].cart.sort((a, b) => (a.CartItemId < b.CartItemId) ? 1 : -1)
    //     data = cartdata[0].cart.sort((a, b) => (a.SkuCode < b.SkuCode) ? 1 : -1)
    //     // setcartdata(data)
    //     // cartdata[0].cart.sort((a, b) => (a.CartItemId > b.CartItemId) ? 1 : -1)
    //     console.log('mbmnbmnb', cartdata[0].cart.sort((a, b) => (a.CartItemId < b.CartItemId) ? 1 : -1));
    //     // console.log('sort', cartAllData.cart.sort((a, b) => a.UnitPrice - b.UnitPrice), cartAllData.cart.sort().reverse());
    //   }
    // }
    // useEffect(() => {
    //   mycartAPI.getShoppingcartDetails()
    //     .then(response => {
    //       setShoppingCart(response)
    //     })
    //     .catch(error => {
    //       console.log('error:::', error);
    //     });
    // }, [])
    // const changeFltr = (newFL) => {
    //   setSeleced(newFL);
    //   const P = reorderlist && reorderlist.FiltersList.find(i => i.ListItem === newFL);
    //   console.log('filterd', P);
    //   setFiltered(P);
    // };
    // useEffect(() => {
    //   if (reorderlist !== undefined) {
    //     setFiltered(reorderlist && reorderlist.FiltersList)
    //   }
    // }, [reorderlist])
    // function dateConverter(createdon) {
    //   const date = new Date(createdon);
    //   const formattedDate = date.toLocaleDateString('en-us', {
    //     month: 'short', day: 'numeric', year: 'numeric'
    //   }).replace(/ /g, '  ');
    //   return formattedDate
    // }
    // console.log('sssss', filtered, Seleced);
    // const productdetail = (PageUrl) => {
    //   history.push('/product/', { skuUrl: PageUrl })
    //   localStorage.setItem('PageUrl', window.btoa(PageUrl))
    // }
    const sortproductname = ()=>{
        setsortName(!sortname);
        console.log("name..", reorderlist);
        const cpyData = {
            ...reorderlist
        };
        if (sortname === true) {
            const data1 = cpyData.GetSku.filter((a)=>a.Name);
            data1.sort(function(a, b) {
                if (a.Name < b.Name) {
                    return -1;
                }
                if (a.Name > b.Name) {
                    return 1;
                }
                return 0;
            });
            setSortdata(data1);
        } else {
            // if(cartdata && cartdata.length > 0){
            //   setSortdata(cartdata[0].cart)
            // }
            const data1 = reorderlist.GetSku.filter((a)=>a.Name);
            data1.sort(function(a, b) {
                if (a.Name > b.Name) {
                    return -1;
                }
                if (a.Name < b.Name) {
                    return 1;
                }
                return 0;
            });
            setSortdata(data1);
        }
    // if (cartdata !== undefined && cartdata[0].cart !== undefined) {
    //   const data = cartdata[0].cart.sort((a, b) => (a.DisplayName - b.DisplayName))
    // }
    // else {
    //   const datareverse = cartdata[0].cart.sort((a, b) => (b.DisplayName - a.DisplayName));
    // }
    // console.log('mbmnbmnb', cartdata[0].cart.sort((a, b) => (a.SPPrice - b.SPPrice).reverse));
    };
    // const sortUnitPrice = () => {
    //   setsortName(!sortname)
    //   if(sortname===true){
    //     const data1 = reorderlist.filter(a=> a.UnitPrice )
    //     data1.sort(function (a, b) {
    //       if (a.UnitPrice < b.UnitPrice) {
    //         return -1;
    //       }
    //       if (a.UnitPrice > b.UnitPrice) {
    //         return 1;
    //       }
    //       return 0;
    //     });
    //     setSortdata(data1)
    //   }else{
    //     const data1 = reorderlist.filter(a=> a.UnitPrice )
    //     data1.sort(function (a, b) {
    //       if (a.UnitPrice > b.UnitPrice) {
    //         return -1;
    //       }
    //       if (a.UnitPrice < b.UnitPrice) {
    //         return 1;
    //       }
    //       return 0;
    //     });
    //     setSortdata(data1)
    //   }
    // }
    const sortdate = ()=>{
        setsortName(!sortname);
        console.log("name..", reorderlist);
        if (sortname === true) {
            const data1 = reorderlist.GetSku.filter((a)=>a.CreatedOn);
            data1.sort(function(a, b) {
                if (a.CreatedOn < b.CreatedOn) {
                    return -1;
                }
                if (a.CreatedOn > b.CreatedOn) {
                    return 1;
                }
                return 0;
            });
            setSortdata(data1);
        } else {
            // if(cartdata && cartdata.length > 0){
            //   setSortdata(reorderlist)
            // }
            const data1 = reorderlist.GetSku.filter((a)=>a.CreatedOn);
            data1.sort(function(a, b) {
                if (a.CreatedOn > b.CreatedOn) {
                    return -1;
                }
                if (a.CreatedOn < b.CreatedOn) {
                    return 1;
                }
                return 0;
            });
            setSortdata(data1);
        }
    };
    // { console.log("chkorder..", reorderlist.GetSku.length) }
    if (!isMount) return null;
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: isUserLogin === false ? router.back({
            pathname: "/login"
        }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            children: [
                /*#__PURE__*/ jsx_runtime.jsx(external_react_toastify_.ToastContainer, {
                    position: "top-right"
                }),
                /*#__PURE__*/ jsx_runtime.jsx(Header/* default */.Z, {}),
                /*#__PURE__*/ jsx_runtime.jsx(myAccountBreadcrumb/* default */.Z, {
                    myAccount: "My Account",
                    activepage: "Reorder"
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "my-account-wrapper pb-20",
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
                                        className: "user-dashboard",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "main-dashboard",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "row",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx(MyAccountSideNav/* default */.Z, {}),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "col-12 col-sm-12 col-md-12 col-lg-10",
                                                        id: "my-account-reorder",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                className: "section-title",
                                                                id: "shoppicartheading",
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("h3", {
                                                                    children: [
                                                                        "Reorder ",
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                                            children: [
                                                                                "(",
                                                                                `${reorderlist && reorderlist.GetSku && reorderlist.GetSku.length > 0 ? reorderlist.GetSku.length : 0}`,
                                                                                ")"
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
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
                                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                        className: "shopping-cart-wrapper ",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("table", {
                                                                            className: "table table-bordered reorderonmob",
                                                                            id: "last_Purchased",
                                                                            children: [
                                                                                reorderlist && reorderlist.GetSku && reorderlist.GetSku.length > 0 ? /*#__PURE__*/ jsx_runtime.jsx("thead", {
                                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ jsx_runtime.jsx("th", {
                                                                                                children: "Product Image"
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("th", {
                                                                                                style: {
                                                                                                    textAlign: "left"
                                                                                                },
                                                                                                children: [
                                                                                                    "Product Name \xa0",
                                                                                                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                                                                        type: "button",
                                                                                                        onClick: sortproductname,
                                                                                                        className: "fa fa-sort",
                                                                                                        "aria-hidden": "true"
                                                                                                    })
                                                                                                ]
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("th", {
                                                                                                style: {
                                                                                                    textAlign: "center"
                                                                                                },
                                                                                                id: "datecolumn",
                                                                                                children: [
                                                                                                    "Purchased Date \xa0",
                                                                                                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                                                                        type: "button",
                                                                                                        onClick: sortdate,
                                                                                                        className: "fa fa-sort",
                                                                                                        "aria-hidden": "true"
                                                                                                    })
                                                                                                ]
                                                                                            }),
                                                                                            /*#__PURE__*/ jsx_runtime.jsx("th", {
                                                                                                style: {
                                                                                                    textAlign: "center"
                                                                                                },
                                                                                                children: "Pack Size"
                                                                                            }),
                                                                                            /*#__PURE__*/ jsx_runtime.jsx("th", {
                                                                                                id: "reorder_Amount",
                                                                                                style: {
                                                                                                    textAlign: "right"
                                                                                                },
                                                                                                children: "Unit Price (₹)"
                                                                                            }),
                                                                                            /*#__PURE__*/ jsx_runtime.jsx("th", {
                                                                                                style: {
                                                                                                    textAlign: "center",
                                                                                                    width: "10%"
                                                                                                },
                                                                                                children: "Action"
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                }) : /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                                                                                    children: showEmptyOrder && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                        id: "last_purchaseddiv",
                                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                            className: "col-md-12",
                                                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                                className: "alert alert-warning",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ jsx_runtime.jsx("strong", {
                                                                                                        children: "Empty Reorder "
                                                                                                    }),
                                                                                                    " ",
                                                                                                    /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                                                                                    "No Order Placed Yet."
                                                                                                ]
                                                                                            })
                                                                                        })
                                                                                    })
                                                                                }),
                                                                                loading === true ? /*#__PURE__*/ jsx_runtime.jsx("tbody", {
                                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("tr", {
                                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("td", {
                                                                                            colSpan: 6,
                                                                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                                className: "row",
                                                                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                                    className: "col-lg-12 text-center mt-25 mb-25",
                                                                                                    children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                                                                        src: "/images/adibuja-logo-animation.gif",
                                                                                                        width: "80",
                                                                                                        height: "80",
                                                                                                        alt: "",
                                                                                                        objectPosition: "center"
                                                                                                    })
                                                                                                })
                                                                                            })
                                                                                        })
                                                                                    })
                                                                                }) : /*#__PURE__*/ jsx_runtime.jsx("tbody", {
                                                                                    children: (Sortdata && Sortdata || []).map((data)=>/*#__PURE__*/ jsx_runtime.jsx(Loadreorder, {
                                                                                            data: data
                                                                                        }))
                                                                                })
                                                                            ]
                                                                        })
                                                                    })
                                                                ]
                                                            }),
                                                            reorderlist && reorderlist === null ? /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                className: "table-responsive",
                                                                id: "last_purchaseddiv",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    className: "col-md-12",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                        className: "alert alert-warning",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime.jsx("strong", {
                                                                                children: "Empty Reorder "
                                                                            }),
                                                                            " ",
                                                                            /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                                                            "No Order Placed YetZ."
                                                                        ]
                                                                    })
                                                                })
                                                            }) : null,
                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                id: "last_purchaseddiv",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    className: "col-md-12 p-0",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                        className: "cart-button-wrapper d-flex justify-content-between mt-4 mobilereorderbutton",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                                href: "/",
                                                                                className: "btn btn-secondary",
                                                                                style: {
                                                                                    backgroundColor: "#000",
                                                                                    color: "#ffffff"
                                                                                },
                                                                                children: "Continue Shopping"
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                                id: "checkouthide",
                                                                                href: "/cart",
                                                                                className: "btn btn-secondary dark align-self-end",
                                                                                style: {
                                                                                    backgroundColor: "#000",
                                                                                    color: "#ffffff"
                                                                                },
                                                                                children: "Go to Cart"
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "col-12 col-sm-12 col-md-12 col-lg-10 fixmobile"
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
        })
    });
}
/* harmony default export */ const myReorder = (ReOrder);


/***/ })

};
;