"use strict";
exports.id = 1766;
exports.ids = [1766];
exports.modules = {

/***/ 1766:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6734);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);
// import React, { useState } from 'react';



//import history from '../../utils/history';


function MyAccountSideNav() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const [showLogOutPopUP, setShowLogOutPopUP] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    // const [change, setChange] = useState(false)
    // const [active, setActive] = useState(false)
    function logoutPopUp() {
        setShowLogOutPopUP(!showLogOutPopUP);
    }
    function renderLogout() {
        // localStorage.removeItem('CustGUID')
        // localStorage.removeItem('UserFirstName')
        // localStorage.removeItem('CartGUID')
        // localStorage.removeItem('CartGUID')
        // localStorage.clear()
        // router.push('/')
        localStorage.clear();
        js_cookie__WEBPACK_IMPORTED_MODULE_4___default().remove("CustGUID");
        js_cookie__WEBPACK_IMPORTED_MODULE_4___default().remove("accessToken");
        //console.log("homepageaaa",router.asPath)
        if (router.asPath === "/") {
            window.location.reload(true);
        } else {
            router.push("/");
        }
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        console.log("router log", router);
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-12 col-sm-12 col-md-12 col-lg-2",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                    className: "nav flex-column dashboard-list myaccountIcons",
                    role: "tablist",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                className: router.pathname === "/account/dashboard" ? "nav-link active" : "nav-link",
                                href: "/account/dashboard",
                                children: [
                                    "\xa0",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "lnr lnr-chart-bars",
                                        "aria-hidden": "true"
                                    }),
                                    "\xa0Dashboard"
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                className: router.pathname === "/account/myorders" ? "nav-link active" : "nav-link",
                                href: "/account/myorders",
                                children: [
                                    "\xa0",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "lnr lnr-cart",
                                        "aria-hidden": "true"
                                    }),
                                    "\xa0My Order"
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                className: router.pathname === "/account/reorder" ? "nav-link active" : "nav-link",
                                href: "/account/reorder",
                                children: [
                                    "\xa0",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "lnr lnr-history",
                                        "aria-hidden": "true"
                                    }),
                                    "\xa0Reorder"
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                className: router.pathname === "/wishlist" ? "nav-link active" : "nav-link",
                                href: "/wishlist",
                                children: [
                                    "\xa0",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "lnr lnr-heart",
                                        "aria-hidden": "true"
                                    }),
                                    "\xa0My Wishlist"
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                className: router.pathname === "/account/transactions" ? "nav-link active" : "nav-link",
                                href: "/account/transactions",
                                children: [
                                    "\xa0",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "lnr lnr-pushpin",
                                        "aria-hidden": "true"
                                    }),
                                    "\xa0Wallet Transactions"
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                className: router.pathname === "/account/savedcartlist" ? "nav-link active" : "nav-link",
                                href: "/account/savedcartlist",
                                children: [
                                    "\xa0",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "lnr lnr-pushpin",
                                        "aria-hidden": "true"
                                    }),
                                    "\xa0Saved Cart"
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                className: router.pathname === "/account/manageaddress" ? "nav-link active" : "nav-link",
                                href: "/account/manageaddress",
                                children: [
                                    "\xa0",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "lnr lnr-map-marker",
                                        "aria-hidden": "true"
                                    }),
                                    "\xa0Manage Addresses"
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                className: router.pathname === "/account/profile" ? "nav-link active" : "nav-link",
                                href: "/account/profile",
                                children: [
                                    "\xa0",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "lnr lnr-user",
                                        "aria-hidden": "true"
                                    }),
                                    "\xa0Profile"
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                className: router.pathname === "/account/changepassword" ? "nav-link active" : "nav-link",
                                href: "/account/changepassword",
                                children: [
                                    "\xa0",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "lnr lnr-lock",
                                        "aria-hidden": "true"
                                    }),
                                    "\xa0Manage Password"
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                className: "nav-link",
                                id: "logout",
                                href: "javascript:;",
                                onClick: logoutPopUp,
                                children: [
                                    "\xa0",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "lnr lnr-exit",
                                        "aria-hidden": "true"
                                    }),
                                    "\xa0logout"
                                ]
                            })
                        })
                    ]
                })
            }),
            showLogOutPopUP && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "modal show",
                id: "RemoveCartItemModal",
                style: {
                    paddingRight: "17px",
                    display: "block"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "modal-dialog",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "modal-content",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "modal-body text-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    type: "button",
                                    className: "close",
                                    "data-dismiss": "modal",
                                    onClick: logoutPopUp,
                                    children: "\xd7"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: "/images/cycling.gif",
                                                    alt: "",
                                                    style: {
                                                        width: "100px"
                                                    }
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: "Are you sure you want to logout?"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        className: "btn btn-secondary",
                                                        type: "button",
                                                        onClick: renderLogout,
                                                        children: "Yes"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        className: "btn btn-secondary",
                                                        type: "button",
                                                        onClick: logoutPopUp,
                                                        children: "No"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                })
            })
        ]
    });
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyAccountSideNav);


/***/ })

};
;