exports.id = 2004;
exports.ids = [2004];
exports.modules = {

/***/ 9365:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ReturnOrders)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4409);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _containers_MainPage_api_homeServices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4171);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3497);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_SubNavigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9474);
/* harmony import */ var _components_Footer_footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8371);
/* harmony import */ var _containers_MainPage_api_orderdetail__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3172);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _containers_MyAccount_orderDetailsBreadcrumb__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2072);
/* eslint-disable no-shadow */ /* eslint-disable react/prop-types */ /* eslint-disable jsx-a11y/label-has-associated-control */ 

// import { useDispatch, useSelector } from 'react-redux';
// import { Modal } from 'react-bootstrap';
// import { Link } from 'react-router-dom';



// import { orderreturnpopup, } from './actions';
// import { ToastContainer } from 'react-toastify';

// import history from '../../utils/history';






function ReturnOrders() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const [orderItemDetails, setOrderItemDetails] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [orderStatus, setOrderstatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [refundmode, setrefundmode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [refundAll, setRefundAll] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [ItemQty, setItemQty] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [ItemQtyTemp, setItemQtyTemp] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    // const [payemntmethod, setpaymentmethod] = useState('')
    const [reasonlist, setreasonlist] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [error, seterror] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [singleItemReturnId, setSingleItemReturnId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [error1, seterror1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [refundtext, setrefundtext] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { register, handleSubmit, formState: { errors } } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)();
    const reason11 = reasonlist && reasonlist.filter((d)=>d.OrderStatusId === 11);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (false) {}
    }, []);
    //console.log("orderqty==", ItemQty, singleItemReturnId);
    const ReturnOrderHandler = ()=>{
        if (localStorage.getItem("returnAll") && localStorage.getItem("returnAll") === "yes") {
            const comment = document.getElementById("orderReturnComment").value;
            const orderReturnvalue = document.getElementById("orderReturnReasonId").value;
            const orderItemValue = document.getElementById("orderItemCondition").value;
            if (comment === "") {
                seterror(true);
                seterror1(true);
            } else {
                seterror(false);
                seterror1(false);
                const formdata = {
                    "OrderGuid": orderItemDetails && orderItemDetails.OrderGUID,
                    "CustomerGuid": `${localStorage.getItem("CustGUID") === null || localStorage.getItem("CustGUID") === undefined ? _containers_MainPage_api_homeServices__WEBPACK_IMPORTED_MODULE_4__/* .ConstantsValues */ .r.defaultCustGUID : window.atob(localStorage.getItem("CustGUID"))}`,
                    "CurrencyName": _containers_MainPage_api_homeServices__WEBPACK_IMPORTED_MODULE_4__/* .ConstantsValues */ .r.currencyCode,
                    "OrderStatusId": 11,
                    "OrderNumber": orderItemDetails && orderItemDetails.OrderNumber,
                    "CurrencySymbol": "₹",
                    "AdminEmail": "",
                    "OrderItemId": 0,
                    "ItemCondition": orderItemValue,
                    "refundExchange": 0,
                    "RefundMode": refundmode,
                    "IsRefundAll": true,
                    "qtyReturned": 1,
                    "orderReturnReason": orderReturnvalue,
                    "orderReturnComment": comment
                };
                //console.log("formdata..", formdata)
                _containers_MainPage_api_orderdetail__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z.orderReturn(formdata).then((resreturnorder)=>{
                //console.log("resreturnorder==", resreturnorder);
                });
                localStorage.removeItem("returnAll");
                (0,react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast)("Request for Order Return has been successfully submitted");
                setTimeout(()=>{
                    if (orderItemDetails && orderItemDetails.OrderNumber) {
                        router.push(`/account/myorders/myorder-detail/${orderItemDetails.OrderNumber}`);
                    }
                }, 4000);
            }
        } else {
            const comment = document.getElementById("orderReturnComment").value;
            const qtyvalue = document.getElementById("Qty_Id").value;
            const orderReturnvalue = document.getElementById("orderReturnReasonId").value;
            const orderItemValue = document.getElementById("orderItemCondition").value;
            //console.log(`commentlog${comment}`);
            if (comment === "") {
                seterror(true);
                seterror1(true);
            } else {
                seterror(false);
                seterror1(false);
                const formdata = {
                    "OrderGuid": orderItemDetails && orderItemDetails.OrderGUID,
                    "CustomerGuid": `${localStorage.getItem("CustGUID") === null || localStorage.getItem("CustGUID") === undefined ? _containers_MainPage_api_homeServices__WEBPACK_IMPORTED_MODULE_4__/* .ConstantsValues */ .r.defaultCustGUID : window.atob(localStorage.getItem("CustGUID"))}`,
                    "CurrencyName": _containers_MainPage_api_homeServices__WEBPACK_IMPORTED_MODULE_4__/* .ConstantsValues */ .r.currencyCode,
                    "OrderStatusId": 11,
                    "OrderNumber": orderItemDetails && orderItemDetails.OrderNumber,
                    "CurrencySymbol": "₹",
                    "AdminEmail": "",
                    "OrderItemId": localStorage.getItem("orderItemDetId"),
                    "ItemCondition": orderItemValue,
                    "refundExchange": 0,
                    "RefundMode": refundmode,
                    "IsRefundAll": false,
                    "qtyReturned": qtyvalue,
                    "orderReturnReason": orderReturnvalue,
                    "orderReturnComment": comment
                };
                // console.log("formdata..", formdata)
                _containers_MainPage_api_orderdetail__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z.orderReturn(formdata).then((resreturnorder)=>{
                //console.log("resreturnorder==", resreturnorder);
                });
                (0,react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast)("Request for Return has been successfully submitted");
                setTimeout(()=>{
                    if (orderItemDetails && orderItemDetails.OrderNumber) {
                        router.push(`/account/myorders/myorder-detail/${orderItemDetails.OrderNumber}`);
                    }
                }, 4000);
            }
        }
    // dispatch(orderreturnpopup(false))
    };
    const handleItemQty = (e)=>{
        //console.log("handlechange==", e);
        if (e.target.value > 0 && Number(ItemQty) >= e.target.value || Number(ItemQty) === e.target.value) {
            //setItemQty(e.target.value)
            setItemQtyTemp(e.target.value);
        }
    };
    function onchangevalidatemessage(e) {
        // setFname(e.target.value.replace("/[^a-zA-Z\d]/ig,"))
        if (e.target.value.match("^[a-zA-Z ]*$") != null) {
            setMessage(e.target.value);
        }
        if (e.target.value.length === 0) {
            setMessage("");
        }
        if (e.target.value.trim() === "") {
            setMessage("");
        }
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_3__.ToastContainer, {
                position: "top-right"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_MyAccount_orderDetailsBreadcrumb__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                myAccount: "My Account",
                activepage: "Return Order"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "shopping-cart-wrapper order-details pb-70",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container-fluid",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-lg-3"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "col-lg-4 col-md-12 col-sm-12 col-xs-12 col-lg-6",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                                        id: "primary",
                                        className: "site-main",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "shopping-cart",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "modal-body",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        className: "reviewtitle uppercase"
                                                    }),
                                                    refundAll === true ? null : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                        className: "requiredlbl",
                                                        children: "Qty"
                                                    }),
                                                    refundAll === true ? null : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        id: "Qty_Id",
                                                        type: "number",
                                                        className: "form-control",
                                                        "data-val": "true",
                                                        "data-val-required": "The Qty field is required.",
                                                        name: "Qty_Name",
                                                        onChange: (e)=>handleItemQty(e),
                                                        value: ItemQtyTemp
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "mb-10 form-group",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                className: "requiredlbl",
                                                                children: "Reason"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                                                                className: "form-control valid",
                                                                id: "orderReturnReasonId",
                                                                "data-val": "true",
                                                                "data-val-required": "This field is required",
                                                                name: "orderReturnReason",
                                                                children: reason11 && reason11.map((data)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("option", {
                                                                        // onChange={() => handlechange(data.EmailMessage, data.OrderStatusId)}
                                                                        value: data.OrderReasonId,
                                                                        children: [
                                                                            data.Reasons,
                                                                            " "
                                                                        ]
                                                                    }))
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "mb-10 form-group",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                className: "requiredlbl",
                                                                children: "Item Condition"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                                                className: "form-control valid",
                                                                id: "orderItemCondition",
                                                                "data-val": "true",
                                                                "data-val-required": "This field is required",
                                                                name: "orderCancelReason",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: 1,
                                                                        children: "Open"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: 2,
                                                                        children: "Closed"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: 2,
                                                                        children: "Damaged"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "mb-10 form-group",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                htmlFor: "orderReturnComment",
                                                                children: [
                                                                    "Comment",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "text-danger",
                                                                        children: "*"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                                type: "text",
                                                                rows: "3",
                                                                className: "form-control input-validation-error",
                                                                placeholder: "Your comment",
                                                                required: "",
                                                                id: "orderReturnComment",
                                                                name: "orderReturnComment",
                                                                value: message,
                                                                onChange: (e)=>onchangevalidatemessage(e),
                                                                ...register("comment", {
                                                                    required: true
                                                                })
                                                            }),
                                                            errors.comment ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "text text-danger field-validation-error",
                                                                "data-valmsg-for": "orderReturnComment",
                                                                "data-valmsg-replace": "true",
                                                                children: "Please enter comment "
                                                            }) : null
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "mb-10 form-group",
                                                        id: "RefundModeDiv",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                className: "",
                                                                children: [
                                                                    "Refund Mode : ",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            htmlFor: "Bank",
                                                                            id: "spanCancelMode"
                                                                        })
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                type: "text",
                                                                id: "orderCancelMode",
                                                                value: refundtext,
                                                                className: "form-control",
                                                                disabled: true
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        type: "button",
                                                        id: " submitCancelbtn",
                                                        onClick: handleSubmit(ReturnOrderHandler),
                                                        className: "btn btn-primary",
                                                        style: {
                                                            backgroundColor: "#007bff",
                                                            borderColor: "#007bff"
                                                        },
                                                        children: "Confirm"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "cart-button-wrapper d-flex justify-content-between mt-4",
                                                        children:  false ? /*#__PURE__*/ 0 : null
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer_footer__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
        ]
    });
}


/***/ }),

/***/ 2372:
/***/ (() => {



/***/ })

};
;