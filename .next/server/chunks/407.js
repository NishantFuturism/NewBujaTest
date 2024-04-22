"use strict";
exports.id = 407;
exports.ids = [407];
exports.modules = {

/***/ 407:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Savecartcheckoutmodel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_injectReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3671);
/* harmony import */ var _utils_injectSaga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7856);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7469);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5281);
/* harmony import */ var _saga__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(322);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);





//import history from '../../utils/history';




function Savecartcheckoutmodel() {
    (0,_utils_injectReducer__WEBPACK_IMPORTED_MODULE_3__/* .useInjectReducer */ .v)({
        key: "myAccount",
        reducer: _reducer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z
    });
    (0,_utils_injectSaga__WEBPACK_IMPORTED_MODULE_4__/* .useInjectSaga */ .h)({
        key: "myAccount",
        saga: _saga__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z
    });
    const myaccountReducer = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.myAccount);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    const [ViewCart, setViewCart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const cancelpopup = ()=>{
        dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_8__/* .loadsavecheckoutpopup */ .hv)(false));
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (ViewCart) {
            // router.push('/cart', { savecart: myaccountReducer.savecart })
            router.push({
                pathname: `/cart`,
                savecart: myaccountReducer.savecart
            });
        }
    }, [
        ViewCart
    ]);
    const Yescheckout = ()=>{
        dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_8__/* .savecartcheckout */ .A_)(myaccountReducer.namecart, true));
        setViewCart(true);
    };
    const Nocheckout = ()=>{
        dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_8__/* .savecartcheckout */ .A_)(myaccountReducer.namecart, false));
        setViewCart(true);
    // history.push('/account/savedcartlist/savedcartlistitem', { savecart: myaccountReducer.savecart })
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "modal show",
        id: "SaveCartcheckoutModel",
        style: {
            display: "block"
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "modal-dialog",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "modal-content",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "modal-body text-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "button",
                                className: "close",
                                "data-dismiss": "modal",
                                onClick: cancelpopup,
                                children: "\xd7"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: "Would you like to merge saved items with existing cart items?"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: "If no, then the existing cart items will get detached from the cart."
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "modal-footer",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "btn btn-secondary",
                                onClick: Yescheckout,
                                type: "button",
                                children: "Yes"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "btn btn-danger",
                                onClick: Nocheckout,
                                type: "button",
                                children: "No"
                            })
                        ]
                    })
                ]
            })
        })
    });
}


/***/ })

};
;