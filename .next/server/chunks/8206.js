"use strict";
exports.id = 8206;
exports.ids = [8206];
exports.modules = {

/***/ 8206:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Paymentsucces: () => (/* binding */ Paymentsucces),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7880);
/* harmony import */ var _containers_MainPage_api_payment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1419);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_getSellerDetails__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5177);
/* harmony import */ var _containers_MainPage_api_homeServices__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4171);
/* harmony import */ var _components_Footer_PrivacyFooter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6881);
/* harmony import */ var _containers_MainPage_api_orderdetail__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3172);
/* eslint-disable jsx-a11y/click-events-have-key-events */ /* eslint-disable jsx-a11y/no-static-element-interactions */ /* eslint-disable react/prop-types */ /* eslint-disable react/button-has-type */ 


//import { Link } from 'react-router-dom';



// import { Stepper } from 'react-stepper-horizontal';

//import router from '@/utils/router';






function Paymentsucces(props) {
    //console.log({ props });
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const [isClient, setIsClient] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [successdata, setsuccessdata] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    // const [amount, setamount] = useState([]);
    const [paymentdata, setpaymentdata] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    //const [paymentMethod, setPaymentMethod] = useState('');
    const [logoURL, setLogoURL] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    // const [totime, settotime] = useState('');
    // const [day, setDay] = useState('')
    // const [currentdate, setCurrentdate] = useState('')
    const dataReducer = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.proceedToBuy);
    //const {paymentInfoSuccessPage} = useContext(Message_data);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (async ()=>{
            const sellerDetailsFromDomain = await (0,_utils_getSellerDetails__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)();
            // console.log("sellerDetailsFromDomain==", sellerDetailsFromDomain)
            let sellerIdMain = _containers_MainPage_api_homeServices__WEBPACK_IMPORTED_MODULE_10__/* .ConstantsValues */ .r.defaultSellerID;
            if (sellerDetailsFromDomain && sellerDetailsFromDomain?.AdminMemberId) {
                sellerIdMain = sellerDetailsFromDomain.AdminMemberId;
            }
            if (sellerDetailsFromDomain?.LogoURL) {
                setLogoURL(sellerDetailsFromDomain.LogoURL);
            } else {
                setLogoURL("");
            }
            setIsClient(true);
            localStorage.setItem("sellerID", sellerIdMain);
        })();
    }, []);
    // useEffect(() => {
    //  if(Object.keys(paymentInfoSuccessPage)?.length > 0){
    //   console.log("paymentInfoSuccessPage===", paymentInfoSuccessPage);
    //   if(paymentInfoSuccessPage.paymentmethod === 'R'){
    //     setPaymentMethod('Netbanking')
    //   }
    //   if(paymentInfoSuccessPage.paymentmethod === 'C'){
    //     setPaymentMethod('Netbanking')
    //   }
    //   if(paymentInfoSuccessPage.paymentmethod === 'Card'){
    //     setPaymentMethod('Netbanking')
    //   }
    //   if(paymentInfoSuccessPage.paymentmethod === 'COD'){
    //     setPaymentMethod('COD')
    //   }
    //   if(paymentInfoSuccessPage.paymentmethod === 'WR'){
    //     setPaymentMethod('Wallet + Netbanking')
    //   }
    //   if(paymentInfoSuccessPage.paymentmethod === 'Wallet'){
    //     setPaymentMethod('Wallet')
    //   }
    //  }else{
    //   router.push(`/account/myorders`)
    //  }
    // }, [])
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
    // const slot = {
    //   "OrderNumber": credit.OrderId,
    //   "DeliverySlotDate": action.DeliverySlotDate,
    //   "DeliverySlotTimeId": action.DeliverySlotID,
    //   "InstructionForDeliverySlot": action.InstructionForDeliverySlot
    // }
    // const updateslot = yield call(PaymentAPI.updateDeliveryslotTime, slot)
    // console.log({ updateslot });
    // router.push('/product/checkout/order/paymentsuccess', { pamentsuccess: credit, totalamount: action.amount })
    }, []);
    // useEffect(() => {
    //   if (data.fromtime !== undefined) {
    //     setfromtime(data.fromtime)
    //     settotime(data.totime)
    //   }
    // }, [data])
    // useEffect(() => {
    //   getCurrentDate();
    // }, [])
    // function getCurrentDate() {
    //   const Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    //   const Days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    //   const today = new Date();
    //   const Day = Days[today.getDay()]
    //   const date = `${today.getDate()} ${Months[today.getMonth()]} ${today.getFullYear()}`;
    //   const cDate = date;
    //   setCurrentdate(cDate)
    //   setDay(Day)
    // }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (dataReducer !== undefined) {
            setpaymentdata(dataReducer);
        }
    });
    // useEffect(() => {
    //   console.log({ dataReducer });
    //   const paymentdataf = localStorage.getItem('timeslotupdated')
    //   setsuccessdata(JSON.parse(paymentdataf))
    // }, [props])
    const vieworder = ()=>{
        //router.push(`/account/myorders/myorder-detail/${window.atob(localStorage.getItem('OrderNumber'))}`)
        router.push(`/account/myorders`);
    };
    // useEffect(() => {
    //   setamount(window.atob(localStorage.getItem('totalamount')));
    // })
    // useEffect(() => {
    //   if (typeof window !== 'undefined' && window.localStorage) {
    //   PaymentAPI.paymentdetailsbyorder(window.atob(localStorage.getItem('OrderNumber')))
    //     .then(response => {
    //       console.log('uuuuudetails', response)
    //       setsuccessdata(response)
    //     })
    //     .catch(error => {
    //       toast(error)
    //       //console.log('error:::', error);
    //     });
    //   }
    // }, [])
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (false) {}
    }, []);
    const loadorderdeatl = (e, OrderNumber)=>{
        e.preventDefault();
        // router.push(`/account/myorders/myorder-detail/${OrderNumber}`, { OrderNumber })
        router.push({
            pathname: `/account/myorders/myorder-detail/${OrderNumber}`,
            query: {
                OrderNumber
            }
        });
        localStorage.setItem("OrderNumber", window.btoa(OrderNumber));
    // localStorage.setItem('OrderStatus', window.btoa(OrderStatus))
    };
    const deliverypolicy = ()=>{
        localStorage.setItem("pagefootert", "delivery-policy-react");
    };
    //console.log({ successdata, paymentdata });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_5__.ToastContainer, {
                position: "top-right"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "login-wrapper pb-35",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container-fluid",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-12 col-sm-12 col-md-12 col-lg-12",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                                className: "site-main",
                                id: "primary",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "user-login",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "row",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "col-12 col-sm-12 col-md-12",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "section-title text-center",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        align: "center",
                                                        style: {
                                                            padding: "10px 0px"
                                                        },
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            href: "/",
                                                            children: isClient ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                referrerPolicy: "no-referrer",
                                                                alt: "brand-logo",
                                                                src: `${logoURL ? logoURL : "/assets1/img/icon/adibuja-logo.svg"}`,
                                                                style: {
                                                                    paddingLeft: "23px"
                                                                },
                                                                width: "198px",
                                                                height: "42px"
                                                            }) : ""
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mainbodycontent thankyouContent",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "login-wrapper pb-35",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "container-fluid",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "row",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "col-12 col-sm-12 col-md-12 col-lg-12 mt-30",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                                                            id: "primary",
                                                            className: "site-main",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "user-login",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "row",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12",
                                                                        children: isClient ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            className: "login-form error-page text-center",
                                                                            children: [
                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                                                                    className: "thank-you-title pb-0",
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                            className: "fa fa-check-circle fa-2x",
                                                                                            style: {
                                                                                                color: "green",
                                                                                                marginBottom: "10px"
                                                                                            }
                                                                                        }),
                                                                                        " ",
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                                        " Your order has been placed successfully!"
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                    style: {
                                                                                        paddingTop: "10px"
                                                                                    },
                                                                                    children: " Save the details for future reference "
                                                                                }),
                                                                                !JSON.parse(localStorage.getItem("isLogisticsEnable")) ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                                            className: "bigfont",
                                                                                            children: [
                                                                                                " Order Number:",
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                                                    href: "",
                                                                                                    onClick: (e)=>{
                                                                                                        loadorderdeatl(e, window.atob(localStorage.getItem("OrderNumber")));
                                                                                                    },
                                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                        className: "thank-you-title pb-20",
                                                                                                        style: {
                                                                                                            color: "Green",
                                                                                                            cursor: "pointer"
                                                                                                        },
                                                                                                        children:  false ? 0 : null
                                                                                                    })
                                                                                                }),
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                                            className: "bigfont",
                                                                                            style: {
                                                                                                lineHeight: "2rem"
                                                                                            },
                                                                                            children: [
                                                                                                "Delivery Date and Slot: ",
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                    className: "thank-you-title pb-20",
                                                                                                    children:  false ? /*#__PURE__*/ 0 : null
                                                                                                })
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                }) : null,
                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                                    className: "bigfont",
                                                                                    children: [
                                                                                        "Total Amount: ",
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                            className: "thank-you-title pb-20",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                                    style: {
                                                                                                        color: "green"
                                                                                                    },
                                                                                                    children: [
                                                                                                        "₹",
                                                                                                        successdata && successdata[0]?.TotalOrderAmount
                                                                                                    ]
                                                                                                }),
                                                                                                " "
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                                    className: "bigfont",
                                                                                    children: [
                                                                                        " Payment Method: ",
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                            className: "thank-you-title pb-20",
                                                                                            style: {
                                                                                                color: "green"
                                                                                            },
                                                                                            children: [
                                                                                                " ",
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {}),
                                                                                                successdata && successdata[0]?.PaymentMethodName,
                                                                                                " "
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {}),
                                                                                 false ? /*#__PURE__*/ 0 : null
                                                                            ]
                                                                        }) : null
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-12",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "checkout-steps checkout-steps container chkout_stps"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "scroll-top not-visible",
                                        children: [
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "fa fa-angle-up"
                                            }),
                                            " "
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer_PrivacyFooter__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {})
                                ]
                            })
                        })
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Paymentsucces);


/***/ })

};
;