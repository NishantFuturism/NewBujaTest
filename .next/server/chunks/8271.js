exports.id = 8271;
exports.ids = [8271];
exports.modules = {

/***/ 3726:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Orderdeatails: () => (/* binding */ Orderdeatails),
  "default": () => (/* binding */ OrderDetails)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__(6695);
// EXTERNAL MODULE: external "reselect"
var external_reselect_ = __webpack_require__(6814);
// EXTERNAL MODULE: ./src/utils/injectReducer.js + 1 modules
var injectReducer = __webpack_require__(3671);
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(1187);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__(8819);
// EXTERNAL MODULE: ./src/components/Header/index.js + 22 modules
var Header = __webpack_require__(3497);
// EXTERNAL MODULE: ./src/components/SubNavigation/index.js
var SubNavigation = __webpack_require__(9474);
// EXTERNAL MODULE: ./src/containers/MainPage/api/checkout.js
var checkout = __webpack_require__(5938);
// EXTERNAL MODULE: ./src/containers/MainPage/api/orderdetail.js
var orderdetail = __webpack_require__(3172);
;// CONCATENATED MODULE: ./src/containers/Orderdeatails/constants.js
/*
 *
 * Orderdeatails constants
 *
 */ const constants_DEFAULT_ACTION = "app/Orderdeatails/DEFAULT_ACTION";
const constants_MAKE_PAYMENT = "app/Orderdeatails/MAKE_PAYMENT";
const MAKE_PAYMENT_SUCCESS = "app/Orderdeatails/MAKE_PAYMENT_SUCCESS";
const MAKE_PAYMENT_FAILURE = "app/Orderdeatails/MAKE_PAYMENT_FAILURE";
const constants_SUBMIT_DELIVERY_FEEDBACK = "app/Orderdeatails/SUBMIT_DELIVERY_FEEDBACK";
const constants_DETAILS_ITEM = "app/Orderdeatails/SUBMIT_DELIVERY_FEEDBACK";
const DETAILS_ITEM_SUCCESS = "app/Orderdeatails/SUBMIT_DELIVERY_FEEDBACK";
const constants_CANCEL_ORDER_POPUP = "app/Orderdeatails/CANCEL_ORDER_POPUP";
const constants_RETURN_ORDER_POPUP = "app/Orderdeatails/RETURN_ORDER_POPUP";
const constants_CONFIRM_CANCEL_ORDER = "app/Orderdeatails/CONFIRM_CANCEL_ORDER";
const constants_GET_FEEDBACK_DEATAILS_ORDERITEM = "app/Orderdeatails/GET_FEEDBACK_DEATAILS_ORDERITEM";
const GET_FEEDBACK_DEATAILS_ORDERITEM_SUCCESS = "app/Orderdeatails/GET_FEEDBACK_DEATAILS_ORDERITEM";
const constants_SUBMIT_ORDER_FEEDBACK = "app/Orderdeatails/SUBMIT_ORDER_FEEDBACK";
const constants_CANCEL_ORDER_LIST_REASONS = "app/Orderdeatails/CANCEL_ORDER_LIST_REASONS";
const constants_CONFIRM_CANCEL_ORDER_SUCCESS = "app/Orderdeatails/CONFIRM_CANCEL_ORDER_SUCCESS";
const SHOW_DELIVERY_POPUP = "app/Orderdeatails/SHOW_DELIVERY_POPUP";
const SAVE_FEEDBACK_DELIVERY = "app/Orderdeatails/SAVE_FEEDBACK_DELIVERY";
const SHOW_ORDER_POPUP = "app/Orderdeatails/SHOW_ORDER_POPUP";
const SAVE_ORDER_REVIEW = "app/Orderdeatails/SAVE_ORDER_REVIEW";
const constants_CANCEL_FEEDBACK = "app/Orderdeatails/CANCEL_FEEDBACK";
const SAVE_DATA_FEEDBACK = "app/Orderdeatails/SAVE_DATA_FEEDBACK";
const SAVE_DATA_ORDER_REVIEW = "app/Orderdeatails/SAVE_DATA_ORDER_REVIEW";
const INFO_REVIEW = "app/Orderdeatails/INFO_REVIEW";
const CHECK_REVIEW = "app/Orderdeatails/CHECK_REVIEW";
const FEEDBACK_REVIEW = "app/Orderdeatails/FEEDBACK_REVIEW";
const ORDER_REVIEW_DATA = "app/Orderdeatails/ORDER_REVIEW_DATA";
const REVIEW_GIVEN = "app/Orderdeatails/REVIEW_GIVEN";
const ORDER_CHECK_REVIEW_GIVEN = "app/Orderdeatails/ORDER_CHECK_REVIEW_GIVEN";
const PRODUCT_FEEDBACK_REVIEW = "app/Orderdeatails/PRODUCT_FEEDBACK_REVIEW";

;// CONCATENATED MODULE: ./src/containers/Orderdeatails/actions.js
/*
 *
 * Orderdeatails actions
 *
 */ 

function defaultAction() {
    return {
        type: DEFAULT_ACTION
    };
}
function makepayment() {
    return {
        type: MAKE_PAYMENT
    };
}
function ordercancelpopup(cancelpopup) {
    return {
        type: CANCEL_ORDER_POPUP,
        cancelpopup
    };
}
function orderreturnpopup(returnorderpopup, itemdetails) {
    return {
        type: RETURN_ORDER_POPUP,
        returnorderpopup,
        itemdetails
    };
}
function deliverypopup(popupfeedb) {
    console.log("popupfeedb", popupfeedb);
    return {
        type: SHOW_DELIVERY_POPUP,
        popupfeedb
    };
}
function orderpopup(popreview) {
    return {
        type: SHOW_ORDER_POPUP,
        popreview
    };
}
function deliveryfeedback(databody, checkdata) {
    return {
        type: SUBMIT_DELIVERY_FEEDBACK,
        databody,
        checkdata
    };
}
function getitems(databody) {
    return {
        type: DETAILS_ITEM,
        databody
    };
}
function confirmcanelorder(databody) {
    return {
        type: CONFIRM_CANCEL_ORDER,
        databody
    };
}
function confirmcanelordersuccess() {
    return {
        type: CONFIRM_CANCEL_ORDER_SUCCESS
    };
}
function submitordereviefeedback(databody, checkdata) {
    return {
        type: SUBMIT_ORDER_FEEDBACK,
        databody,
        checkdata
    };
}
function getreviewitemdeatils(databody) {
    return {
        type: GET_FEEDBACK_DEATAILS_ORDERITEM,
        databody
    };
}
function getothersellerlist(databody) {
    return {
        type: GET_OTHER_SELLER,
        databody
    };
}
function getordercancelreasonlist() {
    return {
        type: CANCEL_ORDER_LIST_REASONS
    };
}
function savedeliveryfeedback(feedbackdata) {
    return {
        type: SAVE_FEEDBACK_DELIVERY,
        feedbackdata
    };
}
function orderreviewformpdp(orderdatapdp) {
    return {
        type: SAVE_ORDER_REVIEW,
        orderdatapdp
    };
}
function savefeedbackorderreview(productdata) {
    return {
        type: FEEDBACK_REVIEW,
        productdata
    };
}
function CheckReview(givendata) {
    return {
        type: REVIEW_GIVEN,
        givendata
    };
}
function cancelfeedbackdelivery(canceldata) {
    return {
        type: CANCEL_FEEDBACK,
        canceldata
    };
}

// EXTERNAL MODULE: external "react-bootstrap/Modal"
var Modal_ = __webpack_require__(9306);
var Modal_default = /*#__PURE__*/__webpack_require__.n(Modal_);
// EXTERNAL MODULE: ./src/containers/MainPage/api/homeServices.js
var homeServices = __webpack_require__(4171);
// EXTERNAL MODULE: external "react-hook-form"
var external_react_hook_form_ = __webpack_require__(4409);
;// CONCATENATED MODULE: ./src/containers/Orderdeatails/cancelorder.js
/* eslint-disable no-shadow */ /* eslint-disable react/prop-types */ /* eslint-disable jsx-a11y/label-has-associated-control */ 



// import { toast, ToastContainer } from 'react-toastify';




function Cancelorder(props) {
    const dispatch = (0,external_react_redux_.useDispatch)();
    const [details, setdetails] = (0,external_react_.useState)([]);
    const [date, setdate] = (0,external_react_.useState)("");
    const [reasonlist, setreasonlist] = (0,external_react_.useState)([]);
    const [payemntmethod, setpaymentmethod] = (0,external_react_.useState)("");
    const [refundtext, setrefundtext] = (0,external_react_.useState)("");
    const [refundmode, setrefundmode] = (0,external_react_.useState)(0);
    const [error, seterror] = (0,external_react_.useState)(false);
    const [error1, seterror1] = (0,external_react_.useState)(false);
    const [msg, setmsg] = (0,external_react_.useState)("");
    const [message, setMessage] = (0,external_react_.useState)("");
    // const [statusid, setstatusid] = useState('')
    const OrderReducer = (0,external_react_redux_.useSelector)((state)=>state.orderdeatails);
    console.log("chkorderdetails..", OrderReducer);
    console.log("cancel orderprops..", props);
    const cancelpopup = ()=>{
        // dispatch(ordercancelpopup(false))
        props.setcancelbutton(false);
    };
    (0,external_react_.useEffect)(()=>{
        if (localStorage.getItem("OrderItemDetails") !== undefined) {
            const data = localStorage.getItem("OrderItemDetails");
            // if (props && props.OrderItemDetails !== undefined) {
            setdetails(JSON.parse(data));
        }
    // }
    }, [
        localStorage.getItem("OrderItemDetails")
    ]);
    (0,external_react_.useEffect)(()=>{
        if (props && props.OrderItemDetails !== undefined) {
            props.OrderItemDetails.forEach((element)=>{
                setpaymentmethod(element.PaymentMethodName);
            });
        }
    }, [
        props
    ]);
    console.log("payemntmethod=", payemntmethod);
    (0,external_react_.useEffect)(()=>{
        if (payemntmethod === "Wallet") {
            setrefundtext("Wallet");
            setrefundmode(2);
        } else if (payemntmethod === "Netbanking") {
            setrefundtext("Bank");
            setrefundmode(1);
        } else {
            setrefundtext("Bank");
            setrefundmode(1);
        }
    }, [
        payemntmethod
    ]);
    (0,external_react_.useEffect)(()=>{
        getCurrentDate();
    }, []);
    (0,external_react_.useEffect)(()=>{
        // dispatch(getordercancelreasonlist())
        orderdetail/* default */.Z.cancelreasonlist({}).then((response)=>{
            console.log("gha", response);
            setreasonlist(response);
        }).catch((error)=>{
            console.log("error:::", error);
        });
    }, [
        OrderReducer
    ]);
    function getCurrentDate() {
        const tempDate = new Date();
        const date = `${tempDate.getFullYear()}-${tempDate.getMonth() + 1}-${tempDate.getDate()} ${tempDate.getHours()}:${tempDate.getMinutes()}:${tempDate.getSeconds()}`;
        const currDate = date;
        setdate(currDate);
    }
    const { register, handleSubmit, formState: { errors } } = (0,external_react_hook_form_.useForm)();
    const CancelOrder = ()=>{
        const comment = document.getElementById("orderCancelComment").value;
        const cancalationvalue = document.getElementById("orderCancelReasonId").value;
        if (document.getElementById("orderCancelComment").value === "" || cancalationvalue === "") {
            seterror(true);
            seterror1(true);
        } else {
            const formdata = {
                "OrderGuid": details[0].OrderGUID,
                "CustomerGuid": `${localStorage.getItem("CustGUID") === null || localStorage.getItem("CustGUID") === undefined ? homeServices/* ConstantsValues */.r.defaultCustGUID : window.atob(localStorage.getItem("CustGUID"))}`,
                "CurrencyName": homeServices/* ConstantsValues */.r.currencyCode,
                "OrderStatusId": 7,
                "orderCancelReason": cancalationvalue,
                "orderCancelComment": comment,
                "OrderNumber": window.atob(localStorage.getItem("OrderNumber")),
                "IsCancelAll": true,
                "RefundMode": refundmode,
                "CurrencySymbol": "₹",
                "AdminEmail": "",
                "DateOfAction": date,
                "ModifiedBy": null,
                "EmailMessage": msg,
                "SellerId": localStorage.getItem("sellerID") || homeServices/* ConstantsValues */.r.defaultSellerID
            };
            // dispatch(confirmcanelorder(formdata))
            orderdetail/* default */.Z.ordercanceled(formdata).then((rescancelorder)=>{
                console.log("rescancelorder==", rescancelorder);
            });
            console.log("formdata..", formdata);
            // dispatch(ordercancelpopup(false))
            props.setcancelbutton(false);
            setTimeout(()=>{
                props.setIsOrderCancelled(true);
            }, 1500);
        }
    };
    const reason7 = reasonlist && reasonlist.filter((d)=>d.OrderStatusId === 7);
    console.log("reason7", reason7);
    (0,external_react_.useEffect)(()=>{
        if (OrderReducer && OrderReducer.cancel === true) {
        // toast('Order cancelled successfully')
        }
    }, [
        OrderReducer.cancel
    ]);
    function handlechange(EmailMessage) {
        setmsg(EmailMessage);
    // setstatusid(id)
    }
    function commentHandle(e) {
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
    console.log("orderreducser", OrderReducer);
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((Modal_default()), {
            show: true,
            animation: true,
            style: {
                transition: "all 0.55s ease-in -out"
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "modal-header",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("h2", {
                            className: "modal-title-site text-center",
                            children: "Cancel"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("button", {
                            type: "button",
                            className: "close",
                            "data-dismiss": "modal",
                            "aria-hidden": "true",
                            onClick: cancelpopup,
                            children: " \xd7 "
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "modal-body",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("h3", {
                            className: "reviewtitle uppercase"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                            id: "OrderGuid_Id",
                            type: "hidden",
                            "data-val": "true",
                            "data-val-required": "The OrderGuidId field is required.",
                            name: "OrderGuidId",
                            value: "91b63912-6a54-4e79-9a2b-2851ff63f503"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                            id: "OrderNumberId",
                            type: "hidden",
                            name: "OrderNumber",
                            value: "OC5180"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                            id: "IsCancelAllId",
                            type: "hidden",
                            "data-val": "true",
                            "data-val-required": "The IsCancelAll field is required.",
                            name: "IsCancelAll",
                            value: "true"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                            id: "qtyCancelledId",
                            type: "hidden",
                            "data-val": "true",
                            "data-val-required": "The qtyCancelled field is required.",
                            name: "qtyCancelled",
                            value: "1"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                            id: "RefundMode",
                            type: "hidden",
                            "data-val": "true",
                            "data-val-required": "The RefundMode field is required.",
                            name: "RefundMode",
                            value: "2"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "mb-10 form-group",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("label", {
                                    className: "requiredlbl",
                                    children: "Reason"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                /*#__PURE__*/ jsx_runtime.jsx("select", {
                                    className: "form-control valid",
                                    id: "orderCancelReasonId",
                                    "data-val": "true",
                                    "data-val-required": "This field is required",
                                    name: "orderCancelReason",
                                    children: reason7 && reason7.map((data)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("option", {
                                            onChange: ()=>handlechange(data.EmailMessage, data.OrderStatusId),
                                            value: data.OrderReasonId,
                                            ...register("reason", {
                                                required: true
                                            }),
                                            children: [
                                                data.Reasons,
                                                " "
                                            ]
                                        }))
                                }),
                                errors.reason ? /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    className: "text text-danger field-validation-valid",
                                    "data-valmsg-for": "orderCancelReason",
                                    "data-valmsg-replace": "true",
                                    children: " Please enter order cancel reason"
                                }) : null
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "mb-10 form-group",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                    htmlFor: "orderCancelComment",
                                    children: [
                                        "Comment",
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            className: "text-danger",
                                            children: "*"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("textarea", {
                                    className: "form-control input-validation-error",
                                    required: true,
                                    placeholder: "Your comment",
                                    id: "orderCancelComment",
                                    name: "orderCancelComment",
                                    value: message,
                                    ...register("comment", {
                                        required: true
                                    }),
                                    onChange: (e)=>commentHandle(e)
                                }),
                                errors.comment && /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    className: "text text-danger field-validation-error",
                                    children: "Please enter comment "
                                })
                            ]
                        }),
                        payemntmethod === "Netbanking" || payemntmethod === "Wallet" ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "mb-10 form-group",
                            id: "RefundModeDiv",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                    className: "",
                                    children: [
                                        "Refund Mode : ",
                                        /*#__PURE__*/ jsx_runtime.jsx("strong", {
                                            children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                htmlFor: "Bank",
                                                id: "spanCancelMode"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                    type: "text",
                                    id: "orderCancelMode",
                                    value: refundtext,
                                    className: "form-control",
                                    disabled: true
                                })
                            ]
                        }) : null,
                        /*#__PURE__*/ jsx_runtime.jsx("button", {
                            type: "button",
                            id: " submitCancelbtn",
                            onClick: handleSubmit(CancelOrder),
                            className: "btn btn-primary",
                            style: {
                                backgroundColor: "#007bff",
                                borderColor: "#007bff"
                            },
                            children: "Confirm"
                        })
                    ]
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./src/utils/injectSaga.js + 2 modules
var injectSaga = __webpack_require__(7856);
// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(6466);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(7197);
// EXTERNAL MODULE: external "immer"
var external_immer_ = __webpack_require__(7133);
var external_immer_default = /*#__PURE__*/__webpack_require__.n(external_immer_);
;// CONCATENATED MODULE: ./src/containers/Orderdeatails/reducer.js
/*
 *
 * Orderdeatails reducer
 *
 */ 

const initialState = {
    popupcancel: "",
    returnorderpopup: "",
    returnOrderDetails: "",
    popupfeedback: "",
    productorderpop: "",
    savethedeliveryf: "",
    fdeliverymsg: "",
    adddeliveryf: "",
    savetheorderreview: "",
    feedbackorder: "",
    giventhereview: false,
    reviewdetails: "",
    itemsdata: [],
    ordercancel: false,
    cancelpopup: "",
    IsMsgbar: false
};
/* eslint-disable default-case, no-param-reassign */ const orderdeatailsReducer = (state = initialState, action)=>external_immer_default()(state, (draft)=>{
        switch(action.type){
            case constants_DEFAULT_ACTION:
                break;
            case constants_MAKE_PAYMENT:
                break;
            case MAKE_PAYMENT_SUCCESS:
                break;
            case constants_CANCEL_ORDER_POPUP:
                draft.popupcancel = action.cancelpopup;
                break;
            case constants_RETURN_ORDER_POPUP:
                console.log("reducer order=", action);
                draft.returnorderpopup = action.returnorderpopup;
                draft.returnOrderDetails = action.itemdetails;
                break;
            case SHOW_DELIVERY_POPUP:
                console.log("reducerpopupfeedb", action.popupfeedb);
                draft.popupfeedback = action.popupfeedb;
                break;
            case DETAILS_ITEM_SUCCESS:
                // console.log("itemd..", itemd)
                // draft.itemsdata = action.detaildata
                draft.itemsdata = action.itemd;
                break;
            case constants_CONFIRM_CANCEL_ORDER_SUCCESS:
                draft.ordercancel = action.cancel;
                break;
            case SHOW_ORDER_POPUP:
                console.log("chkreviewpop", action.popreview);
                draft.productorderpop = action.popreview;
                break;
            case SAVE_DATA_FEEDBACK:
                draft.IsMsgbar = true;
                draft.savethedeliveryf = action.savefeedbackinfo;
                break;
            case SAVE_DATA_ORDER_REVIEW:
                draft.savetheorderreview = action.saveinfo;
                break;
            case INFO_REVIEW:
                draft.reviewdetails = action.saveorderinfo;
                break;
            case ORDER_REVIEW_DATA:
                draft.feedbackorder = action.reviewfeedback;
                break;
            case ORDER_CHECK_REVIEW_GIVEN:
                draft.IsMsgbar = true;
                draft.giventhereview = action.datacheck;
                break;
            case constants_CANCEL_FEEDBACK:
                console.log("chkvaluecancel..", action.canceldata);
                draft.cancelpopup = action.canceldata;
                break;
        }
    });
/* harmony default export */ const reducer = (orderdeatailsReducer);

// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__(6477);
;// CONCATENATED MODULE: ./src/containers/Orderdeatails/saga.js
/* eslint-disable no-unused-vars */ 


function* orderdeatailsSaga() {
    yield (0,effects_.takeEvery)(constants_MAKE_PAYMENT, makecodepaymentcard);
    yield (0,effects_.takeEvery)(constants_DETAILS_ITEM, getdetailsitem);
    yield (0,effects_.takeEvery)(constants_CONFIRM_CANCEL_ORDER, ordercancel);
    yield (0,effects_.takeEvery)(constants_CANCEL_ORDER_LIST_REASONS, cancellistorder);
    yield (0,effects_.takeEvery)(SAVE_FEEDBACK_DELIVERY, savedfeedback);
    yield (0,effects_.takeEvery)(SAVE_ORDER_REVIEW, savetheorderreview);
    yield (0,effects_.takeEvery)(FEEDBACK_REVIEW, reviewsave);
    yield (0,effects_.takeEvery)(REVIEW_GIVEN, givenreview);
}
function* makecodepaymentcard(action) {
    console.log({
        action
    });
}
function* getdetailsitem(action) {
// try {
//   const detaildata = yield call(OrderdetailAPI.getorderdetailsfeedbackitems, action.databody)
//   yield put({ type: DETAILS_ITEM_SUCCESS, detaildata });
// } catch (err) {
//   console.log(err);
//   // yield put(err);
// }
}
function* ordercancel(action) {
    try {
        const cancel = yield (0,effects_.call)(orderdetail/* default */.Z.ordercanceled, action.databody);
        // alert(cancel)
        yield (0,effects_.put)({
            type: constants_CONFIRM_CANCEL_ORDER_SUCCESS,
            cancel
        });
    } catch (err) {
        console.log(err);
    // yield put(err);
    }
}
function* cancellistorder(action) {
    try {
        const cancelreasonlist = yield (0,effects_.call)(orderdetail/* default */.Z.cancelreasonlist);
        yield (0,effects_.put)({
            type: DETAILS_ITEM_SUCCESS,
            cancelreasonlist
        });
    } catch (err) {
        console.log(err);
    // yield put(err);
    }
}
function* savedfeedback(action) {
    const savefeedbackinfo = yield (0,effects_.call)(orderdetail/* default */.Z.Savefeedbackdeliveryreview, action.feedbackdata);
    yield (0,effects_.put)({
        type: SAVE_DATA_FEEDBACK,
        savefeedbackinfo
    });
}
function* savetheorderreview(action) {
    console.log("scheorder..", action.orderdatapdp);
    const saveinfo = yield (0,effects_.call)(orderdetail/* default */.Z.SaveFeedbackFromPDP, action.orderdatapdp);
    yield (0,effects_.put)({
        type: SAVE_DATA_ORDER_REVIEW,
        saveinfo
    });
    console.log("saveinfo..", saveinfo);
}
function* reviewsave(action) {
    const reviewfeedback = yield (0,effects_.call)(orderdetail/* default */.Z.Saveorderreviewfeedback, action.productdata);
    yield (0,effects_.put)({
        type: ORDER_REVIEW_DATA,
        reviewfeedback
    });
    console.log("sagareviewfeedback..", reviewfeedback);
}
function* givenreview(action) {
    const datacheck = yield (0,effects_.call)(orderdetail/* default */.Z.CheckReviewIsGivenOrNot, action.givendata);
    yield (0,effects_.put)({
        type: ORDER_CHECK_REVIEW_GIVEN,
        datacheck
    });
}

// EXTERNAL MODULE: ./src/components/ShowAlert/success.js
var success = __webpack_require__(4636);
;// CONCATENATED MODULE: ./src/containers/Orderdeatails/feedbackdelivery.js












function FeedbackDelivery(props) {
    /* eslint-disable react/prop-types */ const { closebar, setClosebar } = props;
    (0,injectReducer/* useInjectReducer */.v)({
        key: "feedbackdelivery",
        reducer: reducer
    });
    (0,injectSaga/* useInjectSaga */.h)({
        key: "feedbackdelivery",
        saga: orderdeatailsSaga
    });
    const dispatch = (0,external_react_redux_.useDispatch)();
    const [show, setShow] = (0,external_react_.useState)(false);
    const [showmsg, setShowmsg] = (0,external_react_.useState)("");
    const [currentdate, setCurrentdate] = (0,external_react_.useState)("");
    const [day, setDay] = (0,external_react_.useState)("");
    const [ratingfeedback, setRatingFeedback] = (0,external_react_.useState)(0);
    const [hover, setHover] = (0,external_react_.useState)(0);
    // const [editStar, seteditStar] = useState(0)
    const [editingText, setEditingText] = (0,external_react_.useState)("");
    const [isError, setisError] = (0,external_react_.useState)(false);
    const [OrderItemDetails, setOrderItemDetails] = (0,external_react_.useState)([]);
    const oldText = (0,external_react_.useRef)("");
    const FDelivery = (0,external_react_redux_.useSelector)((state)=>state.feedbackdelivery);
    console.log("fdelivery...", FDelivery);
    (0,external_react_.useEffect)(()=>{
        getCurrentDate();
    }, []);
    function getCurrentDate() {
        const Months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];
        const Days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ];
        const today = new Date();
        const Day = Days[today.getDay()];
        const date = `${today.getDate()} ${Months[today.getMonth()]} ${today.getFullYear()}`;
        const cDate = date;
        setCurrentdate(cDate);
        setDay(Day);
    }
    // useEffect(() => {
    //   console.log("fdeli..", FDelivery)
    //   if (FDelivery && FDelivery.giventhereview === false) {
    //     setShowmsg("Feedback successfully submitted")
    //   }
    //    if (FDelivery && FDelivery.giventhereview === true && FDelivery.giventhereview !== false) {
    //     setShowmsg("You have Already submitted")
    //     // setClosebar(true)
    //   }
    //   else {
    //     console.log("nothing")
    //   }
    // }, [FDelivery])
    (0,external_react_.useEffect)(()=>{
        orderdetail/* default */.Z.getmyorder(window.atob(localStorage.getItem("OrderNumber"))).then((response)=>{
            setOrderItemDetails(response);
        });
    }, []);
    console.log("OrderItemDetails", OrderItemDetails);
    function dateConverter(createdon) {
        const date = new Date(createdon);
        const formattedDate = date.toLocaleDateString("en-GB", {
            month: "long",
            day: "numeric",
            year: "numeric"
        }).replace(/ /g, "  ");
        return formattedDate;
    }
    const savefeedback = ()=>{
        setShow(true);
        const textarea = document.getElementById("txtcommentdelivery").value;
        oldText.current = textarea;
        setEditingText(oldText.current);
        const orderN = window.atob(localStorage.getItem("OrderNumber"));
        const savefdata = {
            "OrderNumber": orderN,
            "FeedbackreviewId": 0,
            "FeedbackTypeId": 2,
            "OrderItemId": 0,
            "Rating": ratingfeedback,
            "Pros": textarea,
            // "Cons": "",
            "Comment": textarea,
            "IsApprovedByAdmin": true,
            "FeedbackDate": currentdate
        };
        if (textarea !== "" && ratingfeedback !== "") {
            dispatch(savedeliveryfeedback(savefdata));
            dispatch(CheckReview(savefdata));
            setClosebar(false);
            setShow(true);
            setisError(false);
            setShowmsg("Feedback successfully submitted");
        } else {
            setisError(true);
            setShowmsg("Please give rating for Delivery Feedback.");
            setClosebar(true);
        }
    };
    const ratefeedback = (value)=>{
        console.log("chkeee..", value);
        setRatingFeedback(value);
    };
    const closemsg = ()=>{};
    (0,external_react_.useEffect)(()=>{
        setInterval(()=>{
            setShow(false);
        }, 5000);
    }, [
        closemsg
    ]);
    const handletext = (e)=>{
        setEditingText(e.target.value);
    };
    const handlerating = (key)=>{
        const setstar = key;
        // seteditStar(e.target.value)
        localStorage.setItem("inputstarValue", setstar);
    };
    (0,external_react_.useEffect)(()=>{
        // seteditStar(localStorage.getItem("inputstarValue"));
        localStorage.getItem("inputstarValue");
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            show && /*#__PURE__*/ jsx_runtime.jsx(success/* default */.Z, {
                msg: showmsg,
                close: closemsg,
                isError: isError
            }),
            closebar ? /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "modal fade show",
                id: "DeliveryfeedbackModal",
                role: "dialog",
                style: {
                    display: "block"
                },
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "modal-dialog modal-mg",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "modal-content ",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "modal-header",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                        children: /*#__PURE__*/ jsx_runtime.jsx("b", {
                                            children: "Delivery Feedback"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                                        type: "button",
                                        className: "close",
                                        "data-dismiss": "modal",
                                        onClick: ()=>setClosebar(false),
                                        style: {
                                            color: "#000000"
                                        },
                                        children: "x"
                                    }),
                                    " ",
                                    /*#__PURE__*/ jsx_runtime.jsx("br", {})
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "modal-body",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            style: {
                                                color: "forestgreen",
                                                fontSize: "30px"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime.jsx("b", {
                                                children: "Delivered"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                            children: [
                                                "Order delivered on ",
                                                day,
                                                ", ",
                                                dateConverter(OrderItemDetails[0]?.DeliveryDate)
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        style: {
                                            marginTop: "20px"
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                children: /*#__PURE__*/ jsx_runtime.jsx("b", {
                                                    children: "Rate your delivery experience"
                                                })
                                            }),
                                            "\xa0\xa0"
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        children: [
                                            ...Array(5)
                                        ].map((star, index)=>{
                                            const ifeedb = index + 1;
                                            // console.log("chkindex..", index)
                                            return /*#__PURE__*/ jsx_runtime.jsx(react_fontawesome_.FontAwesomeIcon, {
                                                type: "button",
                                                icon: free_solid_svg_icons_.faStar,
                                                // value={editStar}
                                                onChange: handlerating,
                                                color: ratingfeedback >= ifeedb ? "orange" : "lightgrey",
                                                style: {
                                                    fontSize: "1.5em",
                                                    borderColor: "orange"
                                                },
                                                className: index < (hover || ratingfeedback) ? "on" : "off",
                                                // selected={index < selectedrating}
                                                // {console.log("checkvalue..", e.target.value)}                     
                                                // onClick={setSelectedRating(index + 1)}
                                                onClick: ()=>ratefeedback(ifeedb),
                                                onMouseEnter: ()=>setHover(ifeedb),
                                                onMouseLeave: ()=>setHover(ratingfeedback)
                                            }, ifeedb);
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                name: "ratingvaluedelivery",
                                                type: "hidden",
                                                id: "ratingvaluedelivery",
                                                value: "0"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                name: "DeliveryFeedbackreviewId",
                                                type: "hidden",
                                                value: "0",
                                                id: "DeliveryFeedbackreviewId"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        style: {
                                            marginTop: "20px"
                                        },
                                        children: /*#__PURE__*/ jsx_runtime.jsx("label", {
                                            htmlFor: "comment-id",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("b", {
                                                children: " Comments  :"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        children: /*#__PURE__*/ jsx_runtime.jsx("textarea", {
                                            rows: "3",
                                            id: "txtcommentdelivery",
                                            value: editingText,
                                            onChange: handletext,
                                            // onKeyUp={onPressEnter}
                                            cols: "",
                                            style: {
                                                width: "80%"
                                            },
                                            placeholder: "Please enter comments here about your experience with the seller."
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "modal-footer",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                                        type: "button",
                                        id: "submitfeedback",
                                        className: "btn btn-success",
                                        onClick: ()=>savefeedback(),
                                        children: /*#__PURE__*/ jsx_runtime.jsx("b", {
                                            children: "Submit Feedback"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                                        type: "button",
                                        className: "btn btn-danger",
                                        id: "cancelfeedback",
                                        "data-dismiss": "modal",
                                        onClick: ()=>setClosebar(false),
                                        children: /*#__PURE__*/ jsx_runtime.jsx("b", {
                                            children: "Cancel"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("br", {})
                                ]
                            })
                        ]
                    })
                })
            }) : null
        ]
    });
}
/* harmony default export */ const feedbackdelivery = (FeedbackDelivery);

;// CONCATENATED MODULE: ./src/containers/Orderdeatails/Orderreviewlistitem.js
/* eslint-disable react/prop-types */ 




function Orderreviewlistitem(props) {
    const { feedbackItemReview } = props;
    const [editingProductText, setEditingProductText] = (0,external_react_.useState)("");
    const [ratingproduct, setRatingproduct] = (0,external_react_.useState)(0);
    const [hoverproductorder, setHoverproductorder] = (0,external_react_.useState)(0);
    const [productTextdisabled, setproductTextdisabled] = (0,external_react_.useState)(false);
    const [productRatingdisabled, setproductRatingdisabled] = (0,external_react_.useState)(false);
    const [propsData, setpropsData] = (0,external_react_.useState)({
        "Comment": "",
        "OrderItemID": "",
        "ProductImage": "",
        "ProductName": "",
        "PackSize": "",
        "Rating": ""
    });
    const detailsitems = {
        "OrderNumber": window.atob(localStorage.getItem("OrderNumber")),
        "FeedbackTypeId": 1
    };
    (0,external_react_.useEffect)(()=>{
        orderdetail/* default */.Z.getorderdetailsfeedbackitems(detailsitems).then((response)=>{
            response.feedbackItemReviewDetail.map((saveproductdata)=>{
                feedbackItemReview.map((data)=>{
                    if (data.OrderItemID === saveproductdata.OrderItemID) {
                        if (data.Comment !== "" && data.Rating !== "") {
                            setEditingProductText(data.Comment);
                            setRatingproduct(data.Rating);
                        }
                        if (saveproductdata.Comment !== "" && saveproductdata.Rating === "") {
                            setEditingProductText(saveproductdata.Comment);
                        }
                        if (saveproductdata.Comment === "" && saveproductdata.Rating !== "") {
                            setRatingproduct(saveproductdata.Rating);
                        } else {
                            console.log("nothing");
                        }
                    }
                });
            });
        }).catch((error)=>{
            console.log(error);
        });
    }, []);
    console.log("propsproduct", propsData);
    const handleproducttext = (e)=>{
        console.log("17", e.target.value);
        e.preventDefault();
        const savecomment = propsData;
        console.log("savecomment", savecomment);
        const finalsavecomment = {
            ...savecomment,
            "Comment": e.target.value
        };
        console.log("finalsavecomment", finalsavecomment);
        setEditingProductText(e.target.value);
        setpropsData(finalsavecomment);
    };
    (0,external_react_.useEffect)(()=>{
        props.productpassComment(propsData);
    }, [
        editingProductText
    ]);
    const handleProductrating = (star)=>{
        console.log("hvalue", star, props.data);
        const savedata = propsData;
        console.log("savedata", savedata);
        const finalsavedata = {
            ...savedata,
            "Rating": star
        };
        console.log("finalsavedata", finalsavedata);
        setRatingproduct(star, finalsavedata) // color
        ;
        setpropsData(finalsavedata);
    };
    (0,external_react_.useEffect)(()=>{
        props.productpassRating(propsData);
    }, [
        ratingproduct
    ]);
    (0,external_react_.useEffect)(()=>{
        if (props.data !== undefined) {
            console.log("props.data", props.data.OrderItemID);
            setpropsData({
                "Comment": props.data.Comment,
                "OrderItemID": props.data.OrderItemID,
                "ProductImage": props.data.ProductImage,
                "ProductName": props.data.ProductName,
                "PackSize": props.data.PackSize,
                "Rating": props.data.Rating
            });
            console.log("ProductName", props.data.OrderItemId);
        }
    }, [
        props
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("td", {
                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                    src: propsData.ProductImage,
                    alt: "",
                    style: {
                        width: "60px",
                        height: "60px"
                    }
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("td", {
                children: propsData.ProductName
            }),
            /*#__PURE__*/ jsx_runtime.jsx("td", {
                children: propsData.PackSize
            }),
            /*#__PURE__*/ jsx_runtime.jsx("td", {
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "row ",
                    children: [
                        console.log("chkorderitemid..", `${propsData.OrderItemID}`),
                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                            children: [
                                ...Array(5)
                            ].map((star, index)=>{
                                const proindex = index + 1;
                                // { console.log('proindex', proindex, ratingproduct) }
                                return /*#__PURE__*/ jsx_runtime.jsx(react_fontawesome_.FontAwesomeIcon, {
                                    id: `${propsData.OrderItemID}`,
                                    type: "button",
                                    icon: free_solid_svg_icons_.faStar,
                                    disabled: !!productRatingdisabled,
                                    color: propsData.Rating >= proindex ? "orange" : "lightgrey",
                                    style: {
                                        fontSize: "1.5em",
                                        borderColor: "orange"
                                    },
                                    className: index <= (hoverproductorder || propsData.Rating) ? "on" : "off",
                                    // onClick={() => setRatingproduct(proindex)}
                                    onClick: ()=>handleProductrating(proindex),
                                    onMouseEnter: ()=>setHoverproductorder(proindex),
                                    onMouseLeave: ()=>setHoverproductorder(propsData.Rating)
                                }, proindex);
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("td", {
                children: /*#__PURE__*/ jsx_runtime.jsx("textarea", {
                    id: "feedbackItemReviewDetail_0__Comment",
                    value: propsData.Comment,
                    onChange: (e)=>handleproducttext(e),
                    disabled: !!productTextdisabled,
                    placeholder: "Comment",
                    name: "feedbackItemReviewDetail[0].Comment",
                    style: {
                        width: "100%"
                    }
                })
            })
        ]
    });
}
/* harmony default export */ const Orderdeatails_Orderreviewlistitem = (Orderreviewlistitem);

;// CONCATENATED MODULE: ./src/containers/Orderdeatails/detailorder.js
/* eslint-disable no-shadow */ 













function DetailDelivery(props) {
    /* eslint-disable react/prop-types */ const { closeorder, setCloseorder } = props;
    (0,injectReducer/* useInjectReducer */.v)({
        key: "detaildelivery",
        reducer: reducer
    });
    (0,injectSaga/* useInjectSaga */.h)({
        key: "detaildelivery",
        saga: orderdeatailsSaga
    });
    const dispatch = (0,external_react_redux_.useDispatch)();
    const [currentdate, setCurrentdate] = (0,external_react_.useState)("");
    const [show, setShow] = (0,external_react_.useState)(false);
    const [showmsg, setShowmsg] = (0,external_react_.useState)("");
    const [ratingorder, setRatingOrder] = (0,external_react_.useState)(0);
    const [hoverorder, setHoverorder] = (0,external_react_.useState)(0);
    const [editingText, setEditingText] = (0,external_react_.useState)("");
    const [orderdetailsanditem, setOrderDetailsAnditem] = (0,external_react_.useState)();
    // const [productid, setProductId] = useState([])
    const [feedbackItemReview, setfeedbackItemReview] = (0,external_react_.useState)([]);
    const [orderTextdisabled, setorderTextdisabled] = (0,external_react_.useState)(false);
    const [orderRatingdisabled, setorderRatingdisabled] = (0,external_react_.useState)(false);
    const [isError, setisError] = (0,external_react_.useState)(false);
    // const [ratingproduct, setRatingproduct] = useState([])
    const DataDelivery = (0,external_react_redux_.useSelector)((state)=>state.detaildelivery);
    console.log("chkdataDelivery..", DataDelivery);
    const detailsitems = {
        "OrderNumber": window.atob(localStorage.getItem("OrderNumber")),
        "FeedbackTypeId": 1
    };
    (0,external_react_.useEffect)(()=>{
        orderdetail/* default */.Z.getorderdetailsfeedbackitems(detailsitems).then((response)=>{
            console.log("chkresp..", response);
            setOrderDetailsAnditem(response);
            if (response.feedbackOrderViewModel.Pros !== "" && response.feedbackOrderViewModel.Rating !== "") {
                setEditingText(response.feedbackOrderViewModel.Pros);
                console.log("re", response.feedbackOrderViewModel.Pros);
                setorderTextdisabled(true);
                setRatingOrder(response.feedbackOrderViewModel.Rating);
                setorderRatingdisabled(true);
            }
            if (response.feedbackOrderViewModel.Pros !== "" && response.feedbackOrderViewModel.Rating === "") {
                setEditingText(response.feedbackOrderViewModel.Pros);
                setorderTextdisabled(true);
            }
            if (response.feedbackOrderViewModel.Pros === "" && response.feedbackOrderViewModel.Rating !== "") {
                setRatingOrder(response.feedbackOrderViewModel.Rating);
                setorderRatingdisabled(true);
            } else {
                console.log("nothing");
            }
        }).catch((error)=>{
            console.log(error);
        });
    }, []);
    console.log("64", orderdetailsanditem);
    (0,external_react_.useEffect)(()=>{
        if (orderdetailsanditem && orderdetailsanditem.feedbackItemReviewDetail) {
            setfeedbackItemReview(orderdetailsanditem.feedbackItemReviewDetail);
        }
    }, [
        orderdetailsanditem
    ]);
    const handleComment = (e)=>{
        console.log("chkcommenteee", e);
        if (feedbackItemReview !== undefined && feedbackItemReview.length !== undefined) {
            const updatedCommentList = feedbackItemReview.map((mapcommentdata)=>{
                console.log("mapcommentdata", mapcommentdata);
                if (mapcommentdata !== undefined) {
                    if (mapcommentdata.OrderItemID === e.OrderItemID) {
                        return {
                            ...mapcommentdata,
                            "Comment": e.Comment,
                            "FeedbackTypeId": 1
                        };
                    }
                }
                return mapcommentdata;
            });
            setfeedbackItemReview(updatedCommentList);
            console.log("updatedCommentList", updatedCommentList);
        }
    };
    const handleRatingStar = (e)=>{
        console.log("chkee", e);
        console.log("starfeedbackItemReview", feedbackItemReview);
        if (feedbackItemReview !== undefined && feedbackItemReview.length !== undefined) {
            const updatelistData = feedbackItemReview.map((mapdata)=>{
                console.log("mm20", mapdata);
                if (mapdata !== undefined) {
                    console.log("mdata", mapdata.OrderItemID);
                    if (mapdata.OrderItemID === e.OrderItemID) {
                        return {
                            ...mapdata,
                            "Rating": e.Rating
                        };
                    }
                }
                return mapdata;
            });
            setfeedbackItemReview(updatelistData);
            console.log("updatelistData", updatelistData);
        }
    };
    console.log("110", feedbackItemReview);
    (0,external_react_.useEffect)(()=>{
        getCurrentDate();
    }, []);
    function getCurrentDate() {
        const Months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];
        const today = new Date();
        const date = `${today.getDate()} ${Months[today.getMonth()]} ${today.getFullYear()} `;
        const cDate = date;
        setCurrentdate(cDate);
    }
    (0,external_react_.useEffect)(()=>{
        console.log("dataDelivery...", DataDelivery);
        if (DataDelivery && DataDelivery.giventhereview === false) {
            setShowmsg("Review Submitted successfully");
        } else {
            console.log("nothing");
        }
    }, [
        DataDelivery
    ]);
    const savefeedbackorder = ()=>{
        setCloseorder(false);
        setShow(true);
        const commenttext = document.getElementById("feedbackOrderViewModel_Pros").value;
        const productcomment = document.getElementById(`feedbackItemReviewDetail_0__Comment`).value;
        console.log("productcomment", productcomment);
        const orderN = window.atob(localStorage.getItem("OrderNumber"));
        const orderdatapdp = {
            "OrderNumber": orderN,
            "FeedbackreviewId": 0,
            "FeedbackTypeId": 1,
            "OrderItemId": 0,
            "Rating": ratingorder,
            "Pros": commenttext,
            // "Cons": "string",
            "Comment": commenttext,
            "IsApprovedByAdmin": true,
            "FeedbackDate": currentdate
        };
        const productdata = {
            "feedbackOrderViewModel": {
                "OrderNumber": orderN,
                "FeedbackreviewId": 0,
                "FeedbackTypeId": 1,
                "OrderItemId": 0,
                "Rating": ratingorder,
                "Pros": commenttext,
                // "Cons": "string",
                "Comment": commenttext,
                "IsApprovedByAdmin": true,
                "FeedbackDate": currentdate
            },
            // "feedbackItemReviewDetail":
            //   [
            //     {
            //       "FeedbackreviewId": 0,
            //       "OrderId": "",
            //       "OrderNumber": orderN,
            //       "OrderItemID": productid,
            //       "ProductImage": "",
            //       "ProductName": "",
            //       "PackSize": "",
            //       "FeedbackTypeId": 1,
            //       "Pros": productcomment,
            //       // "Cons": "string",
            //       "Reviewtitle": "",
            //       "Rating": ratingproduct.index,
            //       "Comment": productcomment,
            //       "IsApprovedByAdmin": false,
            //       "FeedbackDate": currentdate
            //     },
            //   ]
            "feedbackItemReviewDetail": feedbackItemReview
        };
        if (commenttext !== "" && ratingorder !== "") {
            dispatch(orderreviewformpdp(orderdatapdp));
            console.log("productdata..", productdata);
            dispatch(savefeedbackorderreview(productdata));
            setCloseorder(false);
            setisError(false);
            setShow(true);
            setShowmsg("Review Submitted successfully");
        } else {
            setisError(true);
            setShowmsg("Please give rating for Order.");
            setCloseorder(true);
        }
    };
    const rateorderreview = (value)=>{
        setRatingOrder(value);
    };
    const handletext = (e)=>{
        setEditingText(e.target.value);
    // localStorage.setItem("inputcommentValue", e.target.value);
    };
    // useEffect(() => {
    //   setEditingText(localStorage.getItem("inputcommentValue"));
    // }, []);
    const Ratingord = ()=>/*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "col-md-2 ",
            children: [
                ...Array(5)
            ].map((star, index)=>{
                const i = index + 1;
                return /*#__PURE__*/ jsx_runtime.jsx(react_fontawesome_.FontAwesomeIcon, {
                    type: "button",
                    icon: free_solid_svg_icons_.faStar,
                    disabled: !!orderRatingdisabled,
                    color: ratingorder >= i ? "orange" : "lightgrey",
                    style: {
                        fontSize: "1.5em",
                        borderColor: "orange"
                    },
                    className: index <= (hoverorder || ratingorder) ? "on" : "off",
                    onClick: ()=>rateorderreview(i),
                    onMouseEnter: ()=>setHoverorder(i),
                    onMouseLeave: ()=>setHoverorder(ratingorder)
                }, i);
            })
        });
    const closemsg = ()=>{};
    (0,external_react_.useEffect)(()=>{
        setInterval(()=>{
            setShow(false);
        }, 4000);
    }, [
        closemsg
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            show && /*#__PURE__*/ jsx_runtime.jsx(success/* default */.Z, {
                msg: showmsg,
                close: closemsg,
                isError: isError
            }),
            closeorder ? /*#__PURE__*/ jsx_runtime.jsx((Modal_default()), {
                show: true,
                dialogClassName: "showmodal w-100 order-review-modal",
                role: "dialog",
                style: {
                    maxWidth: "90%",
                    maxHeight: "100%",
                    margin: "auto"
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "modal-content ",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "modal-header",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                    className: "modal-title-site text-center",
                                    children: "Order Review"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("button", {
                                    type: "button",
                                    className: "close",
                                    "data-dismiss": "modal",
                                    onClick: ()=>setCloseorder(false),
                                    style: {
                                        color: "#000000"
                                    },
                                    children: "x"
                                }),
                                " ",
                                /*#__PURE__*/ jsx_runtime.jsx("br", {})
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "modal-body",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "row",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "col-md-2",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                children: /*#__PURE__*/ jsx_runtime.jsx("b", {
                                                    children: "Rate this Order"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "col-md-10",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                children: /*#__PURE__*/ jsx_runtime.jsx("b", {
                                                    children: "Comment"
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "row",
                                    style: {
                                        marginTop: "5px"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx(Ratingord, {}),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "col-md-10",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("textarea", {
                                                id: "feedbackOrderViewModel_Pros",
                                                name: "feedbackOrderViewModel.Pros",
                                                value: editingText,
                                                onChange: (e)=>handletext(e),
                                                disabled: !!orderTextdisabled,
                                                placeholder: "Comment",
                                                style: {
                                                    width: "100%"
                                                }
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("br", {})
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "row",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                        children: /*#__PURE__*/ jsx_runtime.jsx("b", {
                                            children: "\xa0\xa0 Product Review"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    style: {
                                        overflowY: "scroll",
                                        maxHeight: "350px",
                                        marginTop: "10px",
                                        marginBottom: "10px"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            id: "collapseProduct",
                                            role: "tabpanel",
                                            "aria-labelledby": "headingTax",
                                            "data-parent": "#cart_accordion",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("table", {
                                                id: "tblOrderDetailwithreview",
                                                className: "table",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("thead", {
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                                                            className: "thfix",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("th", {
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("b", {
                                                                        children: "Product Image"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("th", {
                                                                    className: "textalignleft",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("b", {
                                                                        children: "Product Name"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("th", {
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("b", {
                                                                        children: "Pack Size"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("th", {
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("b", {
                                                                        children: "Rating"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("th", {
                                                                    style: {
                                                                        textAlign: "center"
                                                                    },
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("b", {
                                                                        children: "Comment"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("tbody", {
                                                        children: (feedbackItemReview || []).map((data)=>/*#__PURE__*/ jsx_runtime.jsx(Orderdeatails_Orderreviewlistitem, {
                                                                data: data,
                                                                productpassRating: (e)=>handleRatingStar(e),
                                                                productpassComment: (e)=>handleComment(e),
                                                                feedbackItemReview: feedbackItemReview
                                                            }))
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "modal-footer",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                    type: "button",
                                                    id: "submitfeedback",
                                                    className: "btn btn-success",
                                                    onClick: ()=>savefeedbackorder(),
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("b", {
                                                        children: "Submit Feedback"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                    type: "button",
                                                    className: "btn btn-danger",
                                                    id: "cancelfeedback",
                                                    "data-dismiss": "modal",
                                                    onClick: ()=>setCloseorder(false),
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("b", {
                                                        children: "Cancel"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("br", {})
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }) : null
        ]
    });
}
/* harmony default export */ const detailorder = (DetailDelivery);

;// CONCATENATED MODULE: ./src/containers/Orderdeatails/selectors.js


/**
 * Direct selector to the orderdeatails state domain
 */ const selectOrderdeatailsDomain = (state)=>state.orderdeatails || initialState;
/**
 * Other specific selectors
 */ /**
 * Default selector used by Orderdeatails
 */ const makeSelectOrderdeatails = ()=>(0,external_reselect_.createSelector)(selectOrderdeatailsDomain, (substate)=>substate);
/* harmony default export */ const selectors = (makeSelectOrderdeatails);


// EXTERNAL MODULE: ./src/components/Footer/footer.js + 5 modules
var footer = __webpack_require__(8371);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/containers/MyAccount/orderDetailsBreadcrumb.js
var orderDetailsBreadcrumb = __webpack_require__(2072);
// EXTERNAL MODULE: external "react-bootstrap/Spinner"
var Spinner_ = __webpack_require__(3742);
// EXTERNAL MODULE: external "react-bootstrap/Button"
var Button_ = __webpack_require__(1937);
;// CONCATENATED MODULE: ./src/pages/account/myorders/myorder-detail/[OrderNumber]/OrderDetails.js
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */ /* eslint-disable jsx-a11y/click-events-have-key-events */ /* eslint-disable react/prop-types */ /**
 *
 * Orderdeatails
 *
 */ // import { Footer } from 'antd/lib/layout/layout';







// import { useInjectSaga } from 'utils/injectSaga';




// import history from '../../utils/history';




// import Returnorder from './Returnorder'



// import saga from './saga';







// import history from '../../utils/history';
// import { Modal } from 'react-bootstrap'
function Orderdeatails() {
    console.log("i called here");
    (0,injectReducer/* useInjectReducer */.v)({
        key: "orderdeatails",
        reducer: reducer
    });
    // useInjectSaga({ key: 'orderdeatails', saga });
    const [addressdata, setaddressdata] = (0,external_react_.useState)("");
    // const [statuscancel, setstatuscancel] = useState(false)
    const [OrderItemDetails, setOrderItemDetails] = (0,external_react_.useState)([]);
    // const [orderstatus, setOrderstatus] = useState(false)
    // const [ordercancelmsg, setordercancelmsg] = useState('')
    // const [clickcancelorder, setClickcancelorder] = useState(false)
    // const [refundone, setrefundone] = useState(false)
    const [closebar, setClosebar] = (0,external_react_.useState)(false);
    const [closeorder, setCloseorder] = (0,external_react_.useState)(false);
    const [refundAll, setRefundAll] = (0,external_react_.useState)(false);
    const [refundItem, setRefundItem] = (0,external_react_.useState)(false);
    const [isOrderCancelled, setIsOrderCancelled] = (0,external_react_.useState)(false);
    const [orderCloseBar, setorderCloseBar] = (0,external_react_.useState)("");
    const [feedbackCloseBar, setfeedbackCloseBar] = (0,external_react_.useState)("");
    const [showMsg, setShowMsg] = (0,external_react_.useState)(false);
    const [isError, setIsError] = (0,external_react_.useState)("");
    const [msg, setMsg] = (0,external_react_.useState)("");
    // const [paymentmethod, setpaymentmethod] = useState('')
    const [cancelbutton, setcancelbutton] = (0,external_react_.useState)(false);
    const [isUserLogin, setIsUserLogin] = (0,external_react_.useState)();
    const [invoiceUrl, setInvoiceUrl] = (0,external_react_.useState)("");
    const [showMessage, setShowMessage] = (0,external_react_.useState)(false);
    const [btnLoading, setBtnLoading] = (0,external_react_.useState)(false);
    const OrderReducer = (0,external_react_redux_.useSelector)((state)=>state.orderdeatails);
    const FDelivery = (0,external_react_redux_.useSelector)((state)=>state.feedbackdelivery);
    console.log("fd20...", FDelivery);
    console.log("OrderReducer", OrderReducer);
    const router = (0,router_.useRouter)();
    // const trackordeReducer = useSelector(state => state.trackorder)
    // const [activesteps, setactivestep] = useState(0)
    const dispatch = (0,external_react_redux_.useDispatch)();
    // const fetchorder = () => {
    //   console.log("window.atob(localStorage.getItem('OrderNumber')==", window.atob(localStorage.getItem('OrderNumber')));
    //   OrderdetailAPI.getmyorder(window.atob(localStorage.getItem('OrderNumber')))
    //     .then(response => {
    //       setOrderItemDetails(response)
    //       console.log("chkres..", response)
    //       console.log("chkstatus..", response[0].Status)
    //       localStorage.setItem('OrderStatus', window.btoa(response[0].Status))
    //       // setOrderstatus(response)
    //       // setpaymentmethod(response[0].PaymentMethodName)
    //       localStorage.setItem('OrderItemDetails', JSON.stringify(response))
    //       // if (response[0].Status === 'Completed') {
    //       //   // setenablebutton(true)
    //       // }
    //       CheckoutAPI.getcustomeraddress({})
    //         .then(res => {
    //           const data = res.filter(id => id.CustomerAddressId === response[0].BillingAddressId)
    //           setaddressdata(data)
    //         })
    //       // OrderdetailAPI.getmyorder(window.atob(localStorage.getItem('OrderStatus')))
    //       // .then(resp => {
    //       // })
    //     })
    //     .catch(error => {
    //       console.log('error:::', error);
    //     });
    // }
    const detailfeedback = {
        "OrderNumber":  false ? 0 : "",
        "FeedbackTypeId": 2
    };
    (0,external_react_.useEffect)(()=>{
        orderdetail/* default */.Z.CheckReviewIsGivenOrNot(detailfeedback).then((response)=>{
            console.log("feedbackres", response);
            setfeedbackCloseBar(response);
        });
    }, []);
    const detailsitems = {
        "OrderNumber":  false ? 0 : "",
        "FeedbackTypeId": 1
    };
    (0,external_react_.useEffect)(()=>{
        orderdetail/* default */.Z.getorderdetailsfeedbackitems(detailsitems).then((response)=>{
            console.log("mainchkresp..", response);
            setorderCloseBar(response);
        // const getResponse = response.feedbackItemReviewDetail;
        // console.log('getResponse', getResponse)
        });
    }, []);
    console.log("111", orderCloseBar);
    (0,external_react_.useEffect)(()=>{
        orderdetail/* default */.Z.getmyorder(window.atob(localStorage.getItem("OrderNumber"))).then((response)=>{
            setOrderItemDetails(response);
            let iteCheck = false;
            response[0].OrderItemDetails.forEach((dataitem)=>{
                // console.log("loggingqtyreturned" + iteCheck)
                if ((response[0].OrderStatusId === 6 || response[0].OrderStatusId === 11) && dataitem.ValidityInMins > 0 && dataitem.qtyReturned === 0 && iteCheck === false) {
                    setRefundAll(true);
                } else {
                    iteCheck = true;
                    setRefundAll(false);
                }
                if ((response[0].OrderStatusId === 6 || response[0].OrderStatusId === 11) && dataitem.ValidityInMins > 0 && dataitem.qtyReturned === 0) {
                    setRefundItem(true);
                }
            });
            console.log("chkres..", response);
            console.log("chkstatus..", response[0].Status);
            localStorage.setItem("OrderStatus", window.btoa(response[0].Status));
            // setOrderstatus(response)
            // setpaymentmethod(response[0].PaymentMethodName)
            localStorage.setItem("OrderItemDetails", JSON.stringify(response));
            // if (response[0].Status === 'Completed') {
            //   // setenablebutton(true)
            // }
            checkout/* default */.Z.getcustomeraddress(response[0].ShippingAddressId)// .then(res => {
            //   const data = res.filter(id => id.CustomerAddressId === response[0].BillingAddressId)
            //   setaddressdata(data)
            // })
            .then((res)=>{
                // const data = res.filter(id => id.isPrimary === true)
                //const data = res.filter(id => id.CustomerAddressId === response[0].BillingAddressId)
                // const data = res.filter(id => (id.CustomerAddressId === response[0].BillingAddressId) && (id.isPrimary === true))
                console.log("data addredd==", res);
                setaddressdata(res);
            });
        // OrderdetailAPI.getmyorder(window.atob(localStorage.getItem('OrderStatus')))
        // .then(resp => {
        // })
        }).catch((error)=>{
            console.log("error:::", error);
        });
    }, []);
    (0,external_react_.useEffect)(()=>{
        if (OrderItemDetails.length > 0 && OrderItemDetails[0].IsLogisticsEnable && (OrderItemDetails[0].Status.trim() === "Completed" || OrderItemDetails[0].Status.trim() === "Request for Refund" || OrderItemDetails[0].Status.trim() === "Partially Refunded" || OrderItemDetails[0].Status.trim() === "Refund In Process" || OrderItemDetails[0].Status.trim() === "Refunded")) {
            handleInvoiceDownload();
        }
    }, [
        OrderItemDetails
    ]);
    // useEffect(() => {
    //   if (typeof window !== 'undefined' && window.localStorage) {
    //     OrderdetailAPI.getorderdetailsfeedbackitems(detailsitems)	
    //     .then(response => {	
    //       console.log("mainchkresp..", response)	
    //       setorderCloseBar(response)	
    //       // const getResponse = response.feedbackItemReviewDetail;	
    //       // console.log('getResponse', getResponse)	
    //     });
    //     OrderdetailAPI.getmyorder(window.atob(localStorage.getItem('OrderNumber')))
    //     .then(response => {
    //       setOrderItemDetails(response)
    //       let iteCheck = false;
    //       response[0].OrderItemDetails.forEach(dataitem => {
    //         // console.log("loggingqtyreturned" + iteCheck)
    //         if ((response[0].OrderStatusId === 6 || response[0].OrderStatusId === 11) && dataitem.ValidityInMins > 0 && dataitem.qtyReturned === 0 && iteCheck === false) {
    //           setRefundAll(true)
    //         } else {
    //           iteCheck = true;
    //           setRefundAll(false)
    //         }
    //       })
    //       console.log("chkres..", response)
    //       console.log("chkstatus..", response[0].Status)
    //       localStorage.setItem('OrderStatus', window.btoa(response[0].Status))
    //       // setOrderstatus(response)
    //       // setpaymentmethod(response[0].PaymentMethodName)
    //       localStorage.setItem('OrderItemDetails', JSON.stringify(response))
    //       // if (response[0].Status === 'Completed') {
    //       //   // setenablebutton(true)
    //       // }
    //       CheckoutAPI.getcustomeraddress({})
    //         .then(res => {
    //           const data = res.filter(id => id.CustomerAddressId === response[0].BillingAddressId)
    //           setaddressdata(data)
    //         })
    //       // OrderdetailAPI.getmyorder(window.atob(localStorage.getItem('OrderStatus')))
    //       // .then(resp => {
    //       // })
    //     })
    //     .catch(error => {
    //       console.log('error:::', error);
    //     });
    //   }
    // }, [])
    (0,external_react_.useEffect)(()=>{
        console.log("calledincancelorder");
        // setIsOrderCancelled(false)
        if (false) {}
    }, [
        isOrderCancelled
    ]);
    // useEffect(() => {
    //   (OrderItemDetails || []).forEach(data =>
    //     data.OrderItemDetails.forEach(dataitem => {
    //       if (data.OrderStatusId === 6 && dataitem.ValidityInMins > 0 && dataitem.qtyReturned === 0) {
    //         setRefundAll(true)
    //       } else {
    //         setRefundAll(false)
    //       }
    //     }
    //     ))
    // }, [OrderItemDetails])
    // console.log("refundAllcheck==", refundAll)
    // useEffect(() => {
    //   fetchorder()
    // }, [OrderReducer, clickcancelorder])
    // useEffect(() => {
    //   if (OrderReducer && OrderReducer.ordercancel === true && clickcancelorder === true) {
    //     // setstatuscancel(true)
    //     setOrderstatus(true)
    //     setordercancelmsg('Order cancelled successfully')
    //     setTimeout(() => {
    //       setOrderstatus(false)
    //     }, 3000);
    //     // toast('Order cancelled successfully')
    //     // window.atob(localStorage.setItem('OrderStatus', 'Cancelled'))
    //     localStorage.setItem('OrderStatus', window.btoa('Cancelled'))
    //     // if (window.btoa(localStorage.getItem('OrderStatus')) === 'Cancelled') {
    //     //   setcancelbutton(false)
    //     // }
    //     // window.btoa(localStorage.setItem('OrderStatus', 'Cancelled'))
    //     fetchorder()
    //   }
    // }, [OrderReducer && OrderReducer.ordercancel, clickcancelorder])
    // useEffect(() => {
    //   if (OrderReducer && OrderReducer.ordercancel === true && clickcancelorder === true) {
    //     setOrderstatus(true)
    //     setordercancelmsg('Order cancelled successfully')
    //   }
    // }, [OrderReducer && OrderReducer.ordercancel, clickcancelorder])
    // useEffect(() => {
    //   if (OrderReducer && OrderReducer.orderreview === true) {
    //     toast('Review submitted successfully')
    //     // setcancelbutton(false)
    //     fetchorder()
    //   }
    // }, [OrderReducer])
    // useEffect(() => {
    //   if ()
    // }, [])
    function formatDate(d) {
        const myDate = new Date(d);
        // let hrs = ((myDate.getHours() > 12) ? myDate.getHours() - 12 : myDate.getHours());
        // const amPM = ((myDate.getHours() >= 12) ? "PM" : "AM");
        // // setampm(amPM)
        // if (hrs === 0) hrs = 12;
        const twoDigitMinutes = myDate.toLocaleString("en-us", {
            hour: "2-digit",
            minute: "2-digit"
        });
        // const formattedDate = `${hrs}:${myDate.getMinutes('mm')} ${amPM}`;
        return twoDigitMinutes;
    }
    function dateConverter(createdon) {
        const date = new Date(createdon);
        const formattedDate = date.toLocaleDateString("en-us", {
            month: "long",
            day: "numeric",
            year: "numeric"
        }).replace(/ /g, "  ");
        return formattedDate;
    }
    // useEffect(() => {
    //  
    // }, [])
    // const loaddeliverfeedbackpopup = () => {
    //   dispatch(deliveryfeedbackpopup(true))
    // }
    // const orderreviewfeedbackpopup = () => {
    //   dispatch(feedbackpopups(true))
    //   // dispatch(getitems(itemobject))
    // }
    const productdetail = (PageUrl)=>{
        // router.push(`/product/${PageUrl}`, { skuUrl: PageUrl })
        router.push({
            pathname: `/product/${PageUrl}`,
            skuUrl: PageUrl
        });
        localStorage.setItem("PageUrl", window.btoa(PageUrl));
    };
    const trackpackage = ()=>{
        const ordernumber = window.atob(localStorage.getItem("OrderNumber"));
        router.push(`/account/myorders/myorder-detail/${ordernumber}/trackorder`);
    };
    const ordercancel = ()=>{
        // setClickcancelorder(true)
        // dispatch(ordercancelpopup(true))
        // setIsOrderCancelled(true)
        setcancelbutton(true);
    };
    // const returnOrder = (itemdetails) => {
    //   console.log("itemdetails==", itemdetails)
    //   setrefundone(true)
    //   dispatch(orderreturnpopup(true, itemdetails))
    // }
    // const returnOrderAll = () => {
    //   console.log("enter all refund All==")
    //   dispatch(orderreturnpopup(true))
    //   setrefundone(false)
    // }
    // // console.log(paymentmethod, OrderItemDetails.map(d => d.OrderItemDetails));
    // useEffect(() => {
    //   // const status = OrderItemDetails.map(d => d.OrderItemDetails)
    //   // console.log('status', status.map(f => f.map(g => g.OrderItemStatus)));
    //   setStatus(trackordeReducer && trackordeReducer.orderstatus[0].OrderStatus)
    // }, [trackordeReducer])
    // console.log('s', Status);
    // useEffect(() => {
    //   const formbody =
    //   {
    //     "OrderNumber": window.atob(localStorage.getItem('OrderNumber')),
    //     "ClientID": ConstantsValues.ClientId
    //   }
    //   dispatch(trackorder(formbody))
    // }, [])
    const deliveryfeedbackcall = ()=>{
        console.log("FD200", FDelivery);
        console.log("feedbackCloseBar", feedbackCloseBar);
        if (feedbackCloseBar === false) {
            dispatch(deliverypopup(true));
            setClosebar(true);
        } else {
            dispatch(deliverypopup(false));
            setShowMsg(true);
            setIsError(true);
            setMsg("Already submitted feedback for this order");
        }
    //  if(FDelivery && FDelivery.savethedeliveryf === 1 ){
    //   dispatch(deliverypopup(false))
    //   setClosebar(false)
    //   setShowMsg(true)
    //   setIsError(true)
    //   setMsg('Already submitted feedback for this order')
    // }
    // else{
    //   dispatch(deliverypopup(true))
    //   setClosebar(true)
    // }
    };
    const orderreviewcall = ()=>{
        console.log("23", orderCloseBar.feedbackItemReviewDetail);
        if (orderCloseBar.feedbackItemReviewDetail.length > 0) {
            dispatch(orderpopup(true));
            setCloseorder(true);
        } else {
            dispatch(orderpopup(false));
            setShowMsg(true);
            setIsError(true);
            setMsg("You have already submitted review for this order");
        }
    };
    const handleInvoiceDownload = ()=>{
        try {
            orderdetail/* default */.Z.downloadInvoice(OrderItemDetails?.[0]?.OrderNumber).then((response)=>{
                if (response?.invoice_url) {
                    setInvoiceUrl(response.invoice_url);
                }
            // else {
            //   setInvoiceUrl('https://s3-ap-south-1.amazonaws.com/kr-shipmultichannel-mum/2879174/invoices/Retail000383323f287-f015-4732-900d-f3a1c60810e2.pdf')
            // }
            });
        } catch (error) {
            console.error("Error downloading file:", error);
        }
    };
    const orders =  false ? 0 : "";
    console.log("orderstatus..", orders);
    // const closemsg = () => {
    //   setOrderstatus(false)
    // }
    function returnOrderHandler(orderNum) {
        console.log(`heycalledhere${orderNum}`);
        localStorage.setItem("returnAll", "yes");
        // localStorage.setItem('orderNum', orderNum)
        router.push(`/account/myorders/return-order/${window.atob(localStorage.getItem("OrderNumber"))}`);
    }
    function returnOrderItemHandler(orderItemDet, ItemQuantity) {
        if (localStorage.getItem("returnAll") && localStorage.getItem("returnAll") !== "") {
            localStorage.removeItem("returnAll");
        }
        localStorage.setItem("orderItemDetId", orderItemDet);
        localStorage.setItem("orderItemQty", ItemQuantity);
        router.push(`/account/myorders/return-order/${window.atob(localStorage.getItem("OrderNumber"))}`);
    }
    (0,external_react_.useEffect)(()=>{
        if (Object.prototype.hasOwnProperty.call(localStorage, "CustGUID")) {
            if (window.atob(localStorage.getItem("CustGUID")) !== null || window.atob(localStorage.getItem("CustGUID")) !== undefined || window.atob(localStorage.getItem("CustGUID")) !== "00000000-0000-0000-0000-000000000000") {
                console.log("51");
                setIsUserLogin(true);
            } else {
                console.log("54");
                setIsUserLogin(false);
            }
        } else {
            setIsUserLogin(false);
        }
    }, [
        isUserLogin
    ]);
    const closemsg = ()=>{};
    (0,external_react_.useEffect)(()=>{
        setInterval(()=>{
            setShowMsg(false);
        }, 3000);
    }, [
        closemsg
    ]);
    const checkOrderpage = ()=>{
        router.push({
            pathname: "/"
        });
    };
    const handleDownload = async ()=>{
        try {
            setBtnLoading(true);
            await new Promise((resolve)=>setTimeout(resolve, 1000));
            setBtnLoading(false);
        } catch (error) {
            console.error("Error:", error);
            setBtnLoading(false);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            showMsg && /*#__PURE__*/ jsx_runtime.jsx(success/* default */.Z, {
                isError: isError,
                msg: msg,
                close: closemsg
            }),
            /*#__PURE__*/ jsx_runtime.jsx(external_react_toastify_.ToastContainer, {
                position: "top-right"
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Header/* default */.Z, {}),
            OrderReducer !== undefined && OrderReducer.popupfeedback && /*#__PURE__*/ jsx_runtime.jsx(feedbackdelivery, {
                closebar: closebar,
                setClosebar: setClosebar
            }),
            OrderReducer && OrderReducer.productorderpop && /*#__PURE__*/ jsx_runtime.jsx(detailorder, {
                closeorder: closeorder,
                setCloseorder: setCloseorder
            }),
            cancelbutton && /*#__PURE__*/ jsx_runtime.jsx(Cancelorder, {
                OrderItemDetails: OrderItemDetails,
                setIsOrderCancelled: setIsOrderCancelled,
                setcancelbutton: setcancelbutton
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "orderBreadcrumb",
                children: /*#__PURE__*/ jsx_runtime.jsx(orderDetailsBreadcrumb/* default */.Z, {
                    myAccount: "My Account",
                    activepage: "Order Details"
                })
            }),
            isUserLogin === false ? checkOrderpage() : /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "shopping-cart-wrapper order-details pb-70",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "container-fluid",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-12 col-sm-12 col-md-12 col-lg-12",
                            children: /*#__PURE__*/ jsx_runtime.jsx("main", {
                                id: "primary",
                                className: "site-main newOrderbox",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "shopping-cart",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "row",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "col-12 col-sm-12 col-md-12 col-lg-12 extraSmallmobile",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "cart-accordion-wrapper mt-full mt-40",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        id: "cart_accordion",
                                                        className: "mt-4",
                                                        role: "tablist",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "card",
                                                                style: {
                                                                    marginBottom: "0px",
                                                                    borderBottom: "0px"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                        className: "card-header",
                                                                        role: "tab",
                                                                        id: "headingTax",
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                                            className: "mb-0",
                                                                            children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                                className: "OrderDetails active",
                                                                                children: "Order Details"
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                        className: "card-header",
                                                                        role: "tab",
                                                                        id: "headingTax",
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                                            className: "mb-0 orderbutton",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                                                "data-toggle": "collapse",
                                                                                "aria-expanded": "true",
                                                                                "aria-controls": "OrderDetails",
                                                                                className: "OrderDetails active",
                                                                                children: [
                                                                                    "Order Details",
                                                                                    /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                        className: "ion ion-ios-arrow-down"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                        id: "OrderDetails",
                                                                        className: "collapse show",
                                                                        role: "tabpanel",
                                                                        "aria-labelledby": "headingTax",
                                                                        "data-parent": "#cart_accordion",
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                            className: "card-body",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "row",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                        className: "col-lg-3 mb-2",
                                                                                        id: "orderItemmob",
                                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                            className: "product-item",
                                                                                            children: (OrderItemDetails || []).map((data)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                                    className: "product-caption",
                                                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                                                                                children: [
                                                                                                                    /*#__PURE__*/ jsx_runtime.jsx("strong", {
                                                                                                                        children: "Order Number:\xa0"
                                                                                                                    }),
                                                                                                                    data.OrderNumber
                                                                                                                ]
                                                                                                            }),
                                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                                                                                children: [
                                                                                                                    /*#__PURE__*/ jsx_runtime.jsx("strong", {
                                                                                                                        children: "Order Status:\xa0"
                                                                                                                    }),
                                                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                                                                                        children: [
                                                                                                                            data.Status,
                                                                                                                            " "
                                                                                                                        ]
                                                                                                                    }),
                                                                                                                    "                                                                        "
                                                                                                                ]
                                                                                                            }),
                                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                                                                                children: [
                                                                                                                    /*#__PURE__*/ jsx_runtime.jsx("strong", {
                                                                                                                        children: "Order Date:  "
                                                                                                                    }),
                                                                                                                    " ",
                                                                                                                    dateConverter(data.CreatedOn)
                                                                                                                ]
                                                                                                            }),
                                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                                                                                children: [
                                                                                                                    /*#__PURE__*/ jsx_runtime.jsx("strong", {
                                                                                                                        children: "Sub Total:"
                                                                                                                    }),
                                                                                                                    "  ₹",
                                                                                                                    data.OrderAmount.toFixed(2),
                                                                                                                    "     "
                                                                                                                ]
                                                                                                            }),
                                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                                                                                children: [
                                                                                                                    /*#__PURE__*/ jsx_runtime.jsx("strong", {
                                                                                                                        children: "Delivery Charge:"
                                                                                                                    }),
                                                                                                                    " ₹",
                                                                                                                    data.DeliveryChargeAmount.toFixed(2)
                                                                                                                ]
                                                                                                            }),
                                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                                                                                children: [
                                                                                                                    /*#__PURE__*/ jsx_runtime.jsx("strong", {
                                                                                                                        children: "Total:"
                                                                                                                    }),
                                                                                                                    "  ₹",
                                                                                                                    data.TotalOrderAmount.toFixed(2),
                                                                                                                    "(Inc. of all taxes)"
                                                                                                                ]
                                                                                                            }),
                                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                                                                                children: [
                                                                                                                    /*#__PURE__*/ jsx_runtime.jsx("strong", {
                                                                                                                        children: "Delivery Details:"
                                                                                                                    }),
                                                                                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                                                                        className: "thank-you-title pb-20 ml-1",
                                                                                                                        children: data.DeliveryDate ? dateConverter(data.DeliveryDate) : ""
                                                                                                                    })
                                                                                                                ]
                                                                                                            })
                                                                                                        ]
                                                                                                    })
                                                                                                }))
                                                                                        })
                                                                                    }),
                                                                                    (addressdata || []).map((data)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                            className: "col-lg-3 mb-2",
                                                                                            id: "orderItemmob",
                                                                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                                className: "product-item",
                                                                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                                    className: "product-caption",
                                                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                                        className: "product-name customer_address",
                                                                                                        "data-id": "32830",
                                                                                                        "data-type": "Shipping",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                                                                                children: " Billing & Delivery Address"
                                                                                                            }),
                                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                                                children: [
                                                                                                                    data.FirstName,
                                                                                                                    " ",
                                                                                                                    data.LastName
                                                                                                                ]
                                                                                                            }),
                                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                                                children: [
                                                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                                                                                        children: [
                                                                                                                            data.Address1,
                                                                                                                            ", ",
                                                                                                                            data.Address2,
                                                                                                                            ", "
                                                                                                                        ]
                                                                                                                    }),
                                                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                                                                                        children: [
                                                                                                                            data.City,
                                                                                                                            ", ",
                                                                                                                            data.State,
                                                                                                                            ", ",
                                                                                                                            data.Country,
                                                                                                                            ", "
                                                                                                                        ]
                                                                                                                    }),
                                                                                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                                                                        children: data.ZipCode
                                                                                                                    })
                                                                                                                ]
                                                                                                            }),
                                                                                                            /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                                                                                children: [
                                                                                                                    " Mobile: ",
                                                                                                                    data.Mobile
                                                                                                                ]
                                                                                                            })
                                                                                                        ]
                                                                                                    })
                                                                                                })
                                                                                            })
                                                                                        })),
                                                                                    (OrderItemDetails || []).map((data)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                            className: "col-lg-3 mb-2",
                                                                                            id: "orderItemmob",
                                                                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                                className: "product-item",
                                                                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                                    className: "product-caption",
                                                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                                        className: "product-name",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                                                                                type: "hidden",
                                                                                                                id: "hdnPaymentMethodName",
                                                                                                                value: "COD"
                                                                                                            }),
                                                                                                            /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                                                                                type: "hidden",
                                                                                                                id: "hdnWalletAmtUsed",
                                                                                                                value: "0.00"
                                                                                                            }),
                                                                                                            /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                                                                                type: "hidden",
                                                                                                                id: "hdnPaymentTypes",
                                                                                                                value: "COD"
                                                                                                            }),
                                                                                                            /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                                                                                type: "hidden",
                                                                                                                id: "hdnPaymentAmount",
                                                                                                                value: "52.50"
                                                                                                            }),
                                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                                                                                children: [
                                                                                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                                                                                            children: "Payment Information"
                                                                                                                        })
                                                                                                                    }),
                                                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                                                                                        children: [
                                                                                                                            " ",
                                                                                                                            /*#__PURE__*/ jsx_runtime.jsx("strong", {
                                                                                                                                children: "Payment Method:\xa0"
                                                                                                                            }),
                                                                                                                            data.PaymentMethodName
                                                                                                                        ]
                                                                                                                    }),
                                                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                                                                                        children: [
                                                                                                                            /*#__PURE__*/ jsx_runtime.jsx("strong", {
                                                                                                                                children: "Payment Amount: "
                                                                                                                            }),
                                                                                                                            "₹",
                                                                                                                            data.TotalOrderAmount.toFixed(2),
                                                                                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                                                                className: "d-lg-none"
                                                                                                                            })
                                                                                                                        ]
                                                                                                                    })
                                                                                                                ]
                                                                                                            })
                                                                                                        ]
                                                                                                    })
                                                                                                })
                                                                                            })
                                                                                        })),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                        className: "col-lg-3 mb-2",
                                                                                        id: "orderItemmob",
                                                                                        children: [
                                                                                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                                                                onClick: trackpackage,
                                                                                                type: "button",
                                                                                                id: "trackerorder",
                                                                                                "data-target": "#Mymodal",
                                                                                                "data-toggle": "modal",
                                                                                                className: "btn btn-info widthbutton",
                                                                                                style: {
                                                                                                    background: "#000000",
                                                                                                    width: 250
                                                                                                },
                                                                                                children: "Track Package"
                                                                                            }),
                                                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                                children: OrderItemDetails.length > 0 && (OrderItemDetails[0] && OrderItemDetails[0].Status && OrderItemDetails[0].Status?.trim() === "Completed" || OrderItemDetails[0].Status?.trim() === "Request for Refund" || OrderItemDetails[0].Status?.trim() === "Partially Refunded" || OrderItemDetails[0].Status?.trim() === "Refund In Process" || OrderItemDetails[0].Status?.trim() === "Refunded") ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                                                                            onClick: deliveryfeedbackcall,
                                                                                                            type: "button",
                                                                                                            id: "deliverfeedback",
                                                                                                            "data-target": "#Mymodal",
                                                                                                            "data-toggle": "modal",
                                                                                                            className: "btn btn-info widthbutton",
                                                                                                            style: {
                                                                                                                marginTop: "10px",
                                                                                                                width: 250,
                                                                                                                background: "#ff7060"
                                                                                                            },
                                                                                                            children: "Leave Delivered Feedback"
                                                                                                        }),
                                                                                                        /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                                                                            onClick: orderreviewcall,
                                                                                                            type: "button",
                                                                                                            id: "orderreview",
                                                                                                            "data-target": "#Mymodal",
                                                                                                            "data-toggle": "modal",
                                                                                                            className: "btn btn-info widthbutton",
                                                                                                            style: {
                                                                                                                marginTop: "10px",
                                                                                                                width: 250,
                                                                                                                background: "#ff7060"
                                                                                                            },
                                                                                                            children: "Write an Order Review"
                                                                                                        }),
                                                                                                        OrderItemDetails[0]?.IsLogisticsEnable && (invoiceUrl ? /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                                                                            id: "invoiceDownload",
                                                                                                            "data-target": "#Mymodal",
                                                                                                            "data-toggle": "modal",
                                                                                                            className: "btn btn-info widthbutton",
                                                                                                            style: {
                                                                                                                marginTop: "10px",
                                                                                                                width: 250,
                                                                                                                background: "#ff7060",
                                                                                                                padding: "5px"
                                                                                                            },
                                                                                                            onClick: handleDownload,
                                                                                                            disabled: btnLoading,
                                                                                                            children: btnLoading ? /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                                                                children: "Downloading..."
                                                                                                            }) : /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                                                                href: invoiceUrl,
                                                                                                                style: {
                                                                                                                    color: "#fff",
                                                                                                                    textDecoration: "none"
                                                                                                                },
                                                                                                                children: "Download Invoice"
                                                                                                            })
                                                                                                        }) : /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                                                                            id: "invoiceDownload",
                                                                                                            "data-target": "#Mymodal",
                                                                                                            "data-toggle": "modal",
                                                                                                            className: "btn btn-info widthbutton",
                                                                                                            style: {
                                                                                                                marginTop: "10px",
                                                                                                                width: 250,
                                                                                                                background: "#ff7060",
                                                                                                                padding: "5px"
                                                                                                            },
                                                                                                            onClick: ()=>setShowMessage(true),
                                                                                                            children: "Download Invoice"
                                                                                                        })),
                                                                                                        showMessage ? /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                                            className: "mt-1",
                                                                                                            style: {
                                                                                                                color: "red"
                                                                                                            },
                                                                                                            children: "Sorry!! Invoice not generated."
                                                                                                        }) : ""
                                                                                                    ]
                                                                                                }) : null
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            })
                                                                        })
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "OrderItemListHeader d-flex align-items-center justify-content-end my-2",
                                                                style: {
                                                                    marginLeft: "0px"
                                                                },
                                                                children: [
                                                                     false ? 0 : null,
                                                                    refundAll ? /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                        className: "",
                                                                        style: {
                                                                            marginRight: "15px"
                                                                        },
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                                            id: "returnOrderAll",
                                                                            type: "button",
                                                                            className: "btn btn-secondary",
                                                                            onClick: ()=>returnOrderHandler(OrderItemDetails.OrderNumber),
                                                                            children: "Return Order"
                                                                        })
                                                                    }) : null
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "card",
                                                    style: {
                                                        marginBottom: "0px",
                                                        borderTop: "0px"
                                                    },
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        id: "collapseProduct",
                                                        role: "tabpanel",
                                                        "aria-labelledby": "headingTax",
                                                        "data-parent": "#cart_accordion",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "table-responsive newOrderinfo",
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("table", {
                                                                id: "tblOrderDetail",
                                                                className: "table ",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("thead", {
                                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                                                                            style: {
                                                                                whiteSpace: "nowrap",
                                                                                overflow: "hidden"
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime.jsx("td", {
                                                                                    children: "Product Image"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("td", {
                                                                                    className: "textalignleft orderProductname",
                                                                                    children: "Product Name"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("td", {
                                                                                    children: "Pack Size"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("td", {
                                                                                    children: "Status"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("td", {
                                                                                    className: "textalignright",
                                                                                    children: "Unit Price (₹)"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("td", {
                                                                                    children: "Quantity"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("td", {
                                                                                    children: "Qty Cancelled"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("td", {
                                                                                    children: "Qty Returned"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("td", {
                                                                                    className: "textalignright",
                                                                                    children: "Total (₹)"
                                                                                }),
                                                                                refundItem ? /*#__PURE__*/ jsx_runtime.jsx("td", {
                                                                                    className: "textalignright",
                                                                                    children: "Action"
                                                                                }) : null
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("tbody", {
                                                                        children: [
                                                                            (OrderItemDetails || []).map((data)=>data.OrderItemDetails && data.OrderItemDetails.map((dataitem)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                                                                                        className: "rowOrderdetail",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("td", {
                                                                                                children: [
                                                                                                    /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                                                                        type: "hidden",
                                                                                                        id: "PaymentReferenceNumber"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                                                        href: true,
                                                                                                        onClick: ()=>productdetail(dataitem.SkuLink),
                                                                                                        style: {
                                                                                                            cursor: "pointer"
                                                                                                        },
                                                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                                                            src: dataitem.ListingImage,
                                                                                                            "data-width": "150",
                                                                                                            "data-height": "150",
                                                                                                            width: "150",
                                                                                                            height: "150",
                                                                                                            className: "img-responsive js-lazy-img",
                                                                                                            alt: "Cucumber Green/Kheera Hara/Kakdi Hari",
                                                                                                            title: ""
                                                                                                        })
                                                                                                    })
                                                                                                ]
                                                                                            }),
                                                                                            /*#__PURE__*/ jsx_runtime.jsx("td", {
                                                                                                className: "textalignleft orderProductname",
                                                                                                onClick: ()=>productdetail(dataitem.SkuLink),
                                                                                                children: dataitem.DisplayName
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("td", {
                                                                                                children: [
                                                                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                                                        style: {
                                                                                                            display: "none"
                                                                                                        },
                                                                                                        className: "moblbldsp",
                                                                                                        children: "Pack Size : "
                                                                                                    }),
                                                                                                    dataitem.ListItem
                                                                                                ]
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("td", {
                                                                                                children: [
                                                                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                                                        style: {
                                                                                                            display: "none"
                                                                                                        },
                                                                                                        className: "moblbldsp",
                                                                                                        children: "Order Status : "
                                                                                                    }),
                                                                                                    dataitem.OrderItemStatus === "Awaiting Fullfillment" ? "Awaiting Fulfillment" : dataitem.OrderItemStatus
                                                                                                ]
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("td", {
                                                                                                className: " newOrderiteminfo",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                                                        style: {
                                                                                                            display: "none"
                                                                                                        },
                                                                                                        className: "moblbldsp",
                                                                                                        children: "Unit Price : "
                                                                                                    }),
                                                                                                    "₹",
                                                                                                    dataitem.UnitPrice.toFixed(2)
                                                                                                ]
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("td", {
                                                                                                children: [
                                                                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                                                        style: {
                                                                                                            display: "none"
                                                                                                        },
                                                                                                        className: "moblbldsp",
                                                                                                        children: "Qty : "
                                                                                                    }),
                                                                                                    dataitem.Quantity
                                                                                                ]
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("td", {
                                                                                                children: [
                                                                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                                                        style: {
                                                                                                            display: "none"
                                                                                                        },
                                                                                                        className: "moblbldsp",
                                                                                                        children: "Qty Cancelled : "
                                                                                                    }),
                                                                                                    dataitem.qtyCancelled
                                                                                                ]
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("td", {
                                                                                                children: [
                                                                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                                                        style: {
                                                                                                            display: "none"
                                                                                                        },
                                                                                                        className: "moblbldsp",
                                                                                                        children: "Qty Returned : "
                                                                                                    }),
                                                                                                    dataitem.qtyReturned
                                                                                                ]
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("td", {
                                                                                                className: " newOrderiteminfo",
                                                                                                style: {
                                                                                                    textAlign: "right"
                                                                                                },
                                                                                                children: [
                                                                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                                                        style: {
                                                                                                            display: "none"
                                                                                                        },
                                                                                                        className: "moblbldsp ",
                                                                                                        children: "Total Price : "
                                                                                                    }),
                                                                                                    "₹",
                                                                                                    dataitem.Total.toFixed(2)
                                                                                                ]
                                                                                            }),
                                                                                            (data.OrderStatusId === 6 || data.OrderStatusId === 11) && dataitem.ValidityInMins > 0 && dataitem.qtyReturned === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("td", {
                                                                                                children: [
                                                                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                                                        style: {
                                                                                                            display: "none"
                                                                                                        },
                                                                                                        className: "moblbldsp ",
                                                                                                        children: "Action : "
                                                                                                    }),
                                                                                                    (data.OrderStatusId === 6 || data.OrderStatusId === 11) && dataitem.ValidityInMins > 0 && dataitem.qtyReturned === 0 ? /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                                                                        onClick: ()=>returnOrderItemHandler(dataitem.OrderItemId, dataitem.Quantity),
                                                                                                        id: "returnOrder",
                                                                                                        type: "button",
                                                                                                        className: "btn btn-secondary",
                                                                                                        children: "Return"
                                                                                                    }) : null
                                                                                                ]
                                                                                            }) : null
                                                                                        ]
                                                                                    }))),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                                                                                className: "newOrderiteminfo wrapOrderitem",
                                                                                style: {
                                                                                    whiteSpace: "nowrap",
                                                                                    overflow: "hidden"
                                                                                },
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime.jsx("td", {
                                                                                        className: "tdhide",
                                                                                        colSpan: "7"
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime.jsx("td", {
                                                                                        colSpan: "1",
                                                                                        style: {
                                                                                            fontWeight: "600",
                                                                                            color: "#111"
                                                                                        },
                                                                                        className: "textalignleft orderTotalMobile",
                                                                                        children: "Sub Total"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("td", {
                                                                                        colSpan: "1",
                                                                                        className: "textalignright",
                                                                                        children: [
                                                                                            "₹",
                                                                                            OrderItemDetails.map((data)=>data.OrderAmount.toFixed(2))
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                                                                                className: "newOrderiteminfo wrapOrderitem",
                                                                                style: {
                                                                                    whiteSpace: "nowrap",
                                                                                    overflow: "hidden"
                                                                                },
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime.jsx("td", {
                                                                                        className: "tdhide",
                                                                                        colSpan: "7"
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime.jsx("td", {
                                                                                        colSpan: "1",
                                                                                        style: {
                                                                                            fontWeight: "600",
                                                                                            color: "#111"
                                                                                        },
                                                                                        className: "textalignleft orderTotalMobile",
                                                                                        children: "Delivery Charge"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("td", {
                                                                                        colSpan: "1",
                                                                                        className: "textalignright",
                                                                                        children: [
                                                                                            "₹",
                                                                                            OrderItemDetails.map((data)=>data.DeliveryChargeAmount.toFixed(2))
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                                                                                className: "newOrderiteminfo wrapOrderitem",
                                                                                style: {
                                                                                    whiteSpace: "nowrap",
                                                                                    overflow: "hidden"
                                                                                },
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime.jsx("td", {
                                                                                        className: "tdhide",
                                                                                        colSpan: "7"
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime.jsx("td", {
                                                                                        colSpan: "1",
                                                                                        style: {
                                                                                            fontWeight: "600",
                                                                                            color: "#111"
                                                                                        },
                                                                                        className: "textalignleft orderTotalMobile",
                                                                                        children: "Coupon Amount"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("td", {
                                                                                        colSpan: "1",
                                                                                        className: "textalignright",
                                                                                        children: [
                                                                                            "(-) ₹",
                                                                                            OrderItemDetails.map((data)=>data.CouponValue.toFixed(2))
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                                                                                className: "newOrderiteminfo wrapOrderitem",
                                                                                style: {
                                                                                    whiteSpace: "nowrap",
                                                                                    overflow: "hidden"
                                                                                },
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime.jsx("td", {
                                                                                        className: "tdhide",
                                                                                        colSpan: "7"
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime.jsx("td", {
                                                                                        colSpan: "1",
                                                                                        style: {
                                                                                            fontWeight: "600",
                                                                                            color: "#111"
                                                                                        },
                                                                                        className: "textalignleft orderTotalMobile",
                                                                                        children: "Total"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("td", {
                                                                                        colSpan: "1",
                                                                                        className: "textalignright",
                                                                                        children: [
                                                                                            "₹",
                                                                                            OrderItemDetails.map((data)=>data.TotalOrderAmount.toFixed(2))
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "cart-button-wrapper d-flex justify-content-between mt-4",
                                                    style: {
                                                        paddingBottom: "20px"
                                                    },
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                            href: "/account/myorders",
                                                            className: "btn btn-secondary order-btn",
                                                            children: "← Back to My Order "
                                                        }),
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                            href: "/",
                                                            className: "btn btn-secondary order-btn",
                                                            children: " Go to Shop "
                                                        }),
                                                        " "
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
    orderdeatails: selectors()
});
function mapDispatchToProps(dispatch) {
    return {
        dispatch
    };
}
const withConnect = (0,external_react_redux_.connect)(mapStateToProps, mapDispatchToProps);
/* harmony default export */ const OrderDetails = ((0,external_redux_.compose)(withConnect)(Orderdeatails));


/***/ }),

/***/ 2372:
/***/ (() => {



/***/ })

};
;