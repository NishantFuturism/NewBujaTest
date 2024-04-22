exports.id = 7418;
exports.ids = [7418];
exports.modules = {

/***/ 6881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_getSellerDetails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5177);
/* harmony import */ var _containers_MainPage_api_homeServices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4171);





const PrivacyFooter = ()=>{
    const [sellerName, setSellerName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        //call seller details API to get seller name
        (async ()=>{
            const sellerDetailsFromDomain = await (0,_utils_getSellerDetails__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
            let sellerIdMain = _containers_MainPage_api_homeServices__WEBPACK_IMPORTED_MODULE_4__/* .ConstantsValues */ .r.defaultSellerID;
            if (sellerDetailsFromDomain && sellerDetailsFromDomain?.AdminMemberId) {
                sellerIdMain = sellerDetailsFromDomain.AdminMemberId;
                setSellerName(sellerDetailsFromDomain.CompanyName);
            }
        })();
    }, []);
    const deliverypolicy = ()=>{
        localStorage.setItem("pagefootert", "delivery-policy-react");
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        style: {
            textAlign: "center"
        },
        className: "check_foot",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                id: "mc-form"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                align: "center",
                style: {
                    paddingTop: "10px"
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("small", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "/delivery-policy",
                            onClick: deliverypolicy,
                            style: {
                                color: "dodgerblue",
                                cursor: "pointer"
                            },
                            children: "Delivery Policy"
                        }),
                        "\xa0\xa0",
                         false ? /*#__PURE__*/ 0 : ""
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children:  false ? /*#__PURE__*/ 0 : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    align: "center",
                    style: {
                        paddingTop: "0px",
                        paddingBottom: "35px"
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("small", {
                        children: [
                            "Copyright 2024 \xa9",
                            sellerName,
                            " | Powered by ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "https://www.adibuja.com/",
                                target: "_blank",
                                children: "Adibuja"
                            }),
                            ",  All Rights Reserved"
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PrivacyFooter);


/***/ }),

/***/ 8819:
/***/ (() => {



/***/ })

};
;