exports.id = 7464;
exports.ids = [7464];
exports.modules = {

/***/ 7464:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Subfooter)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _containers_App_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1824);
/* harmony import */ var _containers_MainPage_api_homeServices__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4171);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3497);
/* harmony import */ var _footerBreadCrumb__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7619);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _career_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6388);
/* harmony import */ var _career_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_career_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _advertise_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7866);
/* harmony import */ var _advertise_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_advertise_css__WEBPACK_IMPORTED_MODULE_12__);
/* eslint-disable jsx-a11y/click-events-have-key-events */ /* eslint-disable jsx-a11y/no-static-element-interactions */ /* eslint-disable jsx-a11y/anchor-is-valid */ 









////import history from '../../utils/history';

// import { Newsletter } from '../../containers/Newsletter/index';


function Subfooter(props) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter)();
    const [isMount, setIsMount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [Ftr, setFooter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [Ftr1, setFooter1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [menu, setMenu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [flag, setflag] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const footerData = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.homeScreen);
    console.log("ss", footerData);
    // const location = useLocation()
    // console.log('location', location);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setIsMount(true);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (false) {}
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const footerUrl = router.pathname;
        console.log("footerUrl", footerUrl);
        const footerUrlNew = footerUrl.replace("/", "");
        console.log("footerUrlNew", footerUrlNew);
        console.log(`inthefooter${footerUrlNew}`);
        localStorage.setItem("footerLinks", footerUrlNew);
        _containers_MainPage_api_homeServices__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getFooterr(footerUrlNew).then((response)=>{
            setFooter(response.Description);
        }).catch((error)=>{
            console.log("error:::", error);
        });
    }, [
        props,
        Ftr
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (false) {}
    }, [
         false ? 0 : null
    ]);
    // useEffect(() => {
    //   if (localStorage.getItem('pagefootert') === 'sitemap-react') {
    //     router.push('/Sitemap')
    //   }
    //   if (localStorage.getItem('pagefootert') === 'contact-us-react') {
    //     router.push('/contactus')
    //   }
    //   if (localStorage.getItem('pagefootert') === 'help-and-faq-react') {
    //     router.push('/faq')
    //   }
    //   // careers-react
    // }, [Ftr])
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (footerData !== undefined) {
            setFooter1(footerData.Ftr);
        }
    }, [
        footerData
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        _containers_MainPage_api_homeServices__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getFooter().then((response)=>{
            setFooter1(response);
        });
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        _containers_MainPage_api_homeServices__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getMegamainmenu().then((response)=>{
            setMenu(response);
        });
    }, []);
    const menu1 = menu.find((res)=>res.WebPageId === 99);
    function productlistpage(pageurl, patrentcaturl) {
        localStorage.setItem("PLPCat", pageurl);
        localStorage.setItem("PLPparenturl", patrentcaturl);
        return router.push({
            pathname: `/${pageurl}`
        });
    // return router.push(`/${pageurl}`, { isURLChange: pageurl })
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (flag === true) {
            window.location.reload();
        }
    }, [
        flag
    ]);
    const sendtofooterpage = (e)=>{
        console.log("ssww", e.target.className);
        if (e.target.className === "about-us-react") {
            setflag(true);
            localStorage.setItem("pagefootert", "about-us");
            router.push(`/about-us`);
        } else if (e.target.className === "why-adibuja-react") {
            setflag(true);
            localStorage.setItem("pagefootert", "why-adibuja");
            router.push(`/why-adibuja`);
        } else if (e.target.className === "how-it-works-react") {
            setflag(true);
            localStorage.setItem("pagefootert", "how-it-works");
            router.push(`/how-it-works`);
        } else if (e.target.className === "coming-soon-react") {
            setflag(true);
            localStorage.setItem("pagefootert", "coming-soon");
            router.push(`/coming-soon`);
        } else if (e.target.className === "contact-us-react") {
            setflag(true);
            localStorage.setItem("pagefootert", "contact-us");
            router.push(`/contact-us`);
        } else if (e.target.className === "careers-react") {
            setflag(true);
            localStorage.setItem("pagefootert", "careers");
            router.push(`/careers`);
        } else if (e.target.className === "investors-react") {
            setflag(true);
            localStorage.setItem("pagefootert", "investors");
            router.push(`/investors`);
        } else if (e.target.className === "help-and-faq-react") {
            setflag(true);
            localStorage.setItem("pagefootert", "faq");
            router.push(`/faq`);
        } else if (e.target.className === "disclaimer-react") {
            setflag(true);
            localStorage.setItem("pagefootert", "disclaimer");
            router.push(`/disclaimer`);
        } else if (e.target.className === "cancel-refund-and-exchange-react") {
            setflag(true);
            localStorage.setItem("pagefootert", "cancel-refund-and-exchange");
            router.push(`/cancel-refund-and-exchange`);
        } else if (e.target.className === "delivery-policy-react") {
            setflag(true);
            localStorage.setItem("pagefootert", "delivery-policy");
            router.push(`/delivery-policy`);
        } else if (e.target.className === "payment-policy-react") {
            setflag(true);
            localStorage.setItem("pagefootert", "payment-policy");
            router.push(`/payment-policy`);
        } else if (e.target.className === "terms-and-conditions-react") {
            setflag(true);
            localStorage.setItem("pagefootert", "terms-and-conditions");
            router.push(`/terms-and-conditions`);
        } else if (e.target.className === "privacy-policy-react") {
            setflag(true);
            localStorage.setItem("pagefootert", "privacy-policy");
            router.push(`/privacy-policy`);
        } else if (e.target.className === "sitemap-react") {
            localStorage.setItem("pagefootert", "Sitemap");
            router.push(`/Sitemap`);
        } else {
        // setflag(false)
        // localStorage.setItem('pagefootert', e.target.className)
        // router.push(`/${e.target.className}`)
        }
    // if (e.target.href !== '' && e.target.className === '') {
    //   history.pop()
    // } else {
    //   localStorage.setItem('pagefootert', e.target.className)
    // }
    };
    const Gallery = ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_4__.ToastContainer, {
                    position: "top-right"
                }),
                Ftr !== "" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    dangerouslySetInnerHTML: {
                        __html: Ftr
                    }
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "container-fluid",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "footercategory col-lg-12 col-md-12 col-sm-12 col-xs-12 footersocial",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "indus",
                                    id: "links",
                                    children: menu1 && menu1.SubMenus.map((itm)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flinksholder",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    style: {
                                                        fontSize: "14px",
                                                        fontWeight: "bold",
                                                        marginTop: "15px"
                                                    },
                                                    children: [
                                                        itm.DisplayName,
                                                        " :"
                                                    ]
                                                }),
                                                itm.SubSubMenus.map((subItm)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                        href: "",
                                                        onClick: ()=>productlistpage(subItm.PageUrl, itm.PageUrl),
                                                        className: "flinks",
                                                        children: subItm.DisplayName
                                                    }))
                                            ]
                                        }, itm.SubSubMenus.DisplayName))
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            onClick: (e)=>sendtofooterpage(e),
                            children: Ftr1 !== "" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                dangerouslySetInnerHTML: {
                                    __html: Ftr1.Description
                                }
                            })
                        })
                    ]
                })
            ]
        });
    if (!isMount) return null;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children:  false ? /*#__PURE__*/ 0 : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Header__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "subfooterBreadcrumb",
                    children:  false && /*#__PURE__*/ 0
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "footerContent",
                    children: Ftr !== "" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        dangerouslySetInnerHTML: {
                            __html: Ftr
                        }
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "container-fluid",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: " footercategory col-lg-12 col-md-12 col-sm-12 col-xs-12 footersocial",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "indus",
                                    id: "links",
                                    children: menu1 && menu1.SubMenus.map((itm)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flinksholder",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    style: {
                                                        fontSize: "14px",
                                                        fontWeight: "bold",
                                                        marginTop: "15px"
                                                    },
                                                    children: [
                                                        itm.DisplayName,
                                                        " :"
                                                    ]
                                                }),
                                                itm.SubSubMenus.map((subItm)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                        href: "",
                                                        onClick: ()=>productlistpage(subItm.PageUrl, itm.PageUrl),
                                                        className: "flinks",
                                                        children: subItm.DisplayName
                                                    }))
                                            ]
                                        }, itm.SubSubMenus.DisplayName))
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            onClick: (e)=>sendtofooterpage(e),
                            children: Ftr1 !== "" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                dangerouslySetInnerHTML: {
                                    __html: Ftr1.Description
                                }
                            })
                        })
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 6388:
/***/ (() => {



/***/ })

};
;