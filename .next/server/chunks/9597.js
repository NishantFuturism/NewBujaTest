exports.id = 9597;
exports.ids = [9597];
exports.modules = {

/***/ 7004:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Trackorder: () => (/* binding */ trackmyorder_Trackorder),
  "default": () => (/* binding */ trackmyorder)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(2245);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-bootstrap/Accordion"
var Accordion_ = __webpack_require__(2423);
var Accordion_default = /*#__PURE__*/__webpack_require__.n(Accordion_);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/utils/injectReducer.js + 1 modules
var injectReducer = __webpack_require__(3671);
// EXTERNAL MODULE: ./src/utils/injectSaga.js + 2 modules
var injectSaga = __webpack_require__(7856);
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(1187);
// EXTERNAL MODULE: ./src/components/Header/index.js + 22 modules
var Header = __webpack_require__(3497);
// EXTERNAL MODULE: ./src/components/SubNavigation/index.js
var SubNavigation = __webpack_require__(9474);
// EXTERNAL MODULE: ./src/containers/MainPage/api/homeServices.js
var homeServices = __webpack_require__(4171);
// EXTERNAL MODULE: ./src/containers/MainPage/api/payment.js
var payment = __webpack_require__(1419);
// EXTERNAL MODULE: ./src/containers/App/constants.js
var constants = __webpack_require__(1824);
// EXTERNAL MODULE: ./src/containers/MainPage/api/apiServices.js
var apiServices = __webpack_require__(4287);
;// CONCATENATED MODULE: ./src/containers/MainPage/api/trackorder.js


function trackorederstatus(databody) {
    const url = `${constants/* default */.ZP.urls.baseUrl}${constants/* default */.ZP.endPoints.GetTrackOrderStatus}`;
    return (0,apiServices/* httpRequest */.c)(url, "POST", databody);
}
function trackorederstatusDetailsItem(orstatusid, OrderGuid, CustGuid) {
    const body = {
        "OrderNumber": window.atob(localStorage.getItem("OrderNumber")),
        "OrderStatusID": orstatusid,
        "ClientID": 1,
        "OrderGuid": OrderGuid,
        "CustGuid": CustGuid
    };
    const url = `${constants/* default */.ZP.urls.baseUrl}${constants/* default */.ZP.endPoints.GetAllTrackOrderItemStatusDetail}`;
    return (0,apiServices/* httpRequest */.c)(url, "POST", body);
}
function GetAllTrackOrderStatusDetail(databody) {
    const url = `${constants/* default */.ZP.urls.baseUrl}${constants/* default */.ZP.endPoints.GetAllTrackOrderStatusDetail}`;
    return (0,apiServices/* httpRequest */.c)(url, "POST", databody);
}
const TrackOrderAPI = {
    trackorederstatus,
    trackorederstatusDetailsItem,
    GetAllTrackOrderStatusDetail
};
/* harmony default export */ const trackorder = (TrackOrderAPI);

// EXTERNAL MODULE: external "immer"
var external_immer_ = __webpack_require__(7133);
var external_immer_default = /*#__PURE__*/__webpack_require__.n(external_immer_);
;// CONCATENATED MODULE: ./src/containers/Trackorder/constants.js
/*
 *
 * Trackorder constants
 *
 */ const DEFAULT_ACTION = "app/Trackorder/DEFAULT_ACTION";
const TRACK_ORDER = "app/Trackorder/TRACK_ORDER";
const TRACK_ORDER_SUCCESS = "app/Trackorder/TRACK_ORDER_SUCCESS";
const GET_DETAILS_ITEM = "app/Trackorder/GET_DETAILS_ITEM";
const GET_DETAILS_ITEM_SUCCESS = "app/Trackorder/GET_DETAILS_ITEM_SUCCESS";

;// CONCATENATED MODULE: ./src/containers/Trackorder/reducer.js
/*
 *
 * Trackorder reducer
 *
 */ 

const initialState = {
    orderstatus: [],
    orderitem: []
};
/* eslint-disable default-case, no-param-reassign */ const trackorderReducer = (state = initialState, action)=>external_immer_default()(state, (draft)=>{
        switch(action.type){
            case DEFAULT_ACTION:
                break;
            case TRACK_ORDER_SUCCESS:
                console.log("TRACK_ORDER_SUCCESS", action);
                draft.orderstatus = action.orderstatus;
                break;
            case GET_DETAILS_ITEM_SUCCESS:
                console.log("TRACK_ORDER_SUCCESS", action);
                draft.orderitem = action.orderstatusitem;
                break;
        }
    });
/* harmony default export */ const reducer = (trackorderReducer);

// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__(6477);
;// CONCATENATED MODULE: ./src/containers/Trackorder/saga.js



// Individual exports for testing
function* trackorderSaga() {
    yield (0,effects_.takeEvery)(TRACK_ORDER, ordertrack);
    yield (0,effects_.takeEvery)(GET_DETAILS_ITEM, detailitems);
}
function* ordertrack(action) {
    console.log("TRACK_ORDER", action);
    try {
        const orderstatus = yield (0,effects_.call)(trackorder.trackorederstatus, action.databody);
        console.log({
            orderstatus
        });
        // const details = {
        //   "OrderNumber": window.atob(localStorage.getItem('OrderNumber')),
        //   "OrderStatusID": orderstatus.,
        //   "ClientID": 1
        // }
        yield (0,effects_.put)({
            type: TRACK_ORDER_SUCCESS,
            orderstatus
        });
    } catch (err) {
    // yield put();
    }
}
function* detailitems(action) {
    console.log("detailstem", action);
// try {
//   const orderstatusitem = yield call(TrackOrderAPI.trackorederstatus, action.databody)
//   console.log({ orderstatusitem });
//   yield put({ type: GET_DETAILS_ITEM_SUCCESS, orderstatusitem });
// } catch (err) {
// yield put();
// }
}

// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__(8819);
// EXTERNAL MODULE: ./src/containers/Trackorder/Trackorder.css
var Trackorder = __webpack_require__(3164);
// EXTERNAL MODULE: ./src/components/Footer/footer.js + 5 modules
var footer = __webpack_require__(8371);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/containers/MyAccount/orderDetailsBreadcrumb.js
var orderDetailsBreadcrumb = __webpack_require__(2072);
;// CONCATENATED MODULE: ./src/pages/account/myorders/myorder-detail/[OrderNumber]/trackorder/trackmyorder.js
/* eslint-disable jsx-a11y/anchor-is-valid */ /* eslint-disable jsx-a11y/alt-text */ /* eslint-disable jsx-a11y/label-has-associated-control */ /**
 *
 * Trackorder
 *
 */ 


// import { Accordion } from 'react-bootstrap';


// import { Link, useLocation } from 'react-router-dom';

// import Stepper from 'react-stepper-horizontal';














// import history from '../../utils/history';



// import { slice } from 'lodash';
function trackmyorder_Trackorder() {
    (0,injectReducer/* useInjectReducer */.v)({
        key: "trackorder",
        reducer: reducer
    });
    (0,injectSaga/* useInjectSaga */.h)({
        key: "trackorder",
        saga: trackorderSaga
    });
    const [orderstatus, setorderstatus] = (0,external_react_.useState)();
    // const [statustitle, setstatustitle] = useState('ordered')
    // const [statustitle1, setstatustitle1] = useState('')
    // const [statustitle2, setstatustitle2] = useState('')
    // const [statustitle3, setstatustitle3] = useState('')
    const [orderstatusitemdetails, setorderstatusitemdetails] = (0,external_react_.useState)([]);
    const [orderstatusitem, setorderstatusitem] = (0,external_react_.useState)([]);
    const [handleClick, sethandleClick] = (0,external_react_.useState)(false);
    const [stepper, setStepper] = (0,external_react_.useState)([]);
    const [skuids, setSkuIds] = (0,external_react_.useState)([]);
    const [trackOrderStatus, setTrackOrderStatus] = (0,external_react_.useState)([]);
    // const [status, setstatus] = useState(0)
    // const [activesteps, setactivestep] = useState(0)
    const dispatch = (0,external_react_redux_.useDispatch)();
    const trackordeReducer = (0,external_react_redux_.useSelector)((state)=>state.trackorder);
    console.log({
        trackordeReducer
    });
    const [isUserLogin, setIsUserLogin] = (0,external_react_.useState)();
    console.log("isUserLogin--", isUserLogin);
    //   const location = useLocation();
    const router = (0,router_.useRouter)();
    //   console.log('location--', location)
    (0,external_react_.useEffect)(()=>{
        if (false) {}
    }, [
        isUserLogin
    ]);
    (0,external_react_.useEffect)(()=>{
        if (false) {}
    }, []);
    //   useEffect(()=>{
    // if(window.atob(localStorage.getItem('OrderStatus'))=== )
    // }, [])
    // useEffect(() => {
    //   if (window.atob(localStorage.getItem('OrderStatus')) === 'Completed') {
    //     setstatus('Completed')
    //     setactivestep(4)
    //   }
    // }, [])
    // useEffect(() => {
    //   if (window.atob(localStorage.getItem('OrderStatus')) === 'Completed' || 'Completed') {
    //     setorderstatus(3)
    //   } else if (window.atob(localStorage.getItem('OrderStatus')) === 'Shipped') {
    //     setorderstatus(2)
    //   }
    // }, [])
    (0,external_react_.useEffect)(()=>{
    // setStepper([{title: 'Ordered'}, {title: 'Under Process'},{title: 'Shipped'}, {title: 'Delivered'}])
    }, []);
    (0,external_react_.useEffect)(()=>{
        if (false) {}
    }, [
         false ? 0 : undefined
    ]);
    //   console.log('dd', window.atob(localStorage.getItem('OrderStatus')));
    (0,external_react_.useEffect)(()=>{
        if (false) {}
    }, []);
    const handlestatusclick = (id)=>{
        sethandleClick(!handleClick);
        let dataOrder = localStorage.getItem("OrderItemDetails");
        // if (props && props.OrderItemDetails !== undefined) {
        dataOrder = JSON.parse(dataOrder);
        let OrderGuid = dataOrder && dataOrder[0] && dataOrder[0].OrderGUID ? dataOrder[0].OrderGUID : homeServices/* ConstantsValues */.r.OrderGuid;
        let CustGuid = window.atob(localStorage.getItem("CustGUID"));
        trackorder.trackorederstatusDetailsItem(id, OrderGuid, CustGuid).then((resp)=>{
            console.log("uuuuudetails", resp);
            // setorderstatusitemdetails1(resp)    
            setorderstatusitemdetails(resp);
        // setsuccessdata(response)
        }).catch((error)=>{
            // toast(error)
            console.log("error:::", error);
        });
    };
    (0,external_react_.useEffect)(()=>{
        console.log("orderstatusitem");
        setSkuIds(orderstatusitem.map((id)=>id.OrderStatusId));
    }, [
        orderstatusitem
    ]);
    (0,external_react_.useEffect)(()=>{
        console.log("skuids", skuids);
        // 1   Awaiting Fullfillment
        if (skuids.includes(1)) {
            // alert('166')
            setStepper([
                {
                    title: "Ordered"
                },
                {
                    title: "Under Process"
                },
                {
                    title: "Shipped"
                },
                {
                    title: "Delivered"
                }
            ]);
            setorderstatus(0);
        }
        // 1   Awaiting Fullfillment
        // 2   Awaiting Shipment
        if (skuids.includes(1) && skuids.includes(2)) {
            // alert('175')
            setStepper([
                {
                    title: "Ordered"
                },
                {
                    title: "Under Process"
                },
                {
                    title: "Shipped"
                },
                {
                    title: "Delivered"
                }
            ]);
            setorderstatus(1);
        }
        // 1   Awaiting Fullfillment
        // 2   Awaiting Shipment
        // 3   Awaiting Payment
        // same as [1, 2, 3, 11: cancell order]
        // same as [1, 2, 3, 13: Refund in process]
        if (skuids.includes(1) && skuids.includes(2) && skuids.includes(3)) {
            // alert('188')
            setStepper([
                {
                    title: "Ordered"
                },
                {
                    title: "Under Process"
                },
                {
                    title: "Shipped"
                },
                {
                    title: "Delivered"
                }
            ]);
            setorderstatus(1);
        }
        // 1   Awaiting Fullfillment
        // 2   Awaiting Shipment
        // 4   Patially Shipped
        if (skuids.includes(1) && skuids.includes(2) && skuids.includes(4)) {
            // alert('197')
            setStepper([
                {
                    title: "Ordered"
                },
                {
                    title: "Under Process"
                },
                {
                    title: "Patially Shipped"
                },
                {
                    title: "Delivered"
                }
            ]);
            setorderstatus(2);
        }
        // 1   Awaiting Fullfillment
        // 2   Awaiting Shipment
        // 4   Patially Shipped
        // 5   Shipped
        if (skuids.includes(1) && skuids.includes(2) && skuids.includes(4) && skuids.includes(5)) {
            // alert('207')
            setStepper([
                {
                    title: "Ordered"
                },
                {
                    title: "Under Process"
                },
                {
                    title: "Shipped"
                },
                {
                    title: "Delivered"
                }
            ]);
            setorderstatus(2);
        }
        // 1   Awaiting Fullfillment
        // 10
        // 11
        // 12 Partially refunded
        if (skuids.includes(1) && skuids.includes(10) && skuids.includes(11) && skuids.includes(12)) {
            // alert('211')
            setStepper([
                {
                    title: "Ordered"
                },
                {
                    title: "Partially Refunded"
                }
            ]);
            setorderstatus(1);
        }
        // 1   Awaiting Fullfillment
        // 2   Awaiting Shipment
        // 3   Awaiting Payment
        // 10
        // 11
        // 12 Partially refunded
        if (skuids.includes(1) && skuids.includes(2) && skuids.includes(3) && skuids.includes(10) && skuids.includes(11) && skuids.includes(12)) {
            // alert('220')
            setStepper([
                {
                    title: "Ordered"
                },
                {
                    title: "Partially Refunded"
                }
            ]);
            setorderstatus(1);
        }
        // 1   Awaiting Fullfillment
        // 2   Awaiting Shipment
        // 3   Awaiting Payment
        // 9   refunded
        // 10
        // 11
        // 12
        if (skuids.includes(1) && skuids.includes(2) && skuids.includes(3) && skuids.includes(10) && skuids.includes(11) && skuids.includes(12) && skuids.includes(9)) {
            // alert('233')
            setStepper([
                {
                    title: "Ordered"
                },
                {
                    title: "Refunded"
                }
            ]);
            setorderstatus(1);
        }
        // 1   Awaiting Fullfillment
        // 8   Payment Failed
        if (skuids.includes(1) && skuids.includes(8)) {
            // alert('242')
            setStepper([
                {
                    title: "Ordered"
                },
                {
                    title: "Payment Failed"
                }
            ]);
            setorderstatus(2);
        }
        // 1   Awaiting Fullfillment
        // 2   Awaiting Shipment
        // 3   Awaiting Payment
        // 8   Payment Failed
        if (skuids.includes(1) && skuids.includes(2) && skuids.includes(3) && skuids.includes(8)) {
            // alert('252')
            setStepper([
                {
                    title: "Ordered"
                },
                {
                    title: "Under Process"
                },
                {
                    title: "Payment Failed"
                }
            ]);
            setorderstatus(2);
        }
        // 1   Awaiting Fullfillment
        // 2   Awaiting Shipment
        // 3   Awaiting Payment
        // 4   Patially Shipped
        if (skuids.includes(1) && skuids.includes(2) && skuids.includes(3) && skuids.includes(4)) {
            // alert('264')
            setStepper([
                {
                    title: "Ordered"
                },
                {
                    title: "Under Process"
                },
                {
                    title: "Patially Shipped"
                },
                {
                    title: "Delivered"
                }
            ]);
            setorderstatus(2);
        }
        // 1   Awaiting Fullfillment
        // 2   Awaiting Shipment
        // 3   Awaiting Payment
        // 4   Patially Shipped
        // 5   Shipped
        if (skuids.includes(1) && skuids.includes(2) && skuids.includes(3) && skuids.includes(4) && skuids.includes(5)) {
            // alert('276')
            setStepper([
                {
                    title: "Ordered"
                },
                {
                    title: "Under Process"
                },
                {
                    title: "Shipped"
                },
                {
                    title: "Delivered"
                }
            ]);
            setorderstatus(2);
        }
        // 1   Awaiting Fullfillment
        // 2   Awaiting Shipment
        // 3   Awaiting Payment
        // 4   Patially Shipped
        // 5   Shipped
        // 6   Completed
        if (skuids.includes(1) && skuids.includes(2) && skuids.includes(3) && skuids.includes(4) && skuids.includes(5) && skuids.includes(6)) {
            // alert('289')
            setStepper([
                {
                    title: "Ordered"
                },
                {
                    title: "Under Process"
                },
                {
                    title: "Shipped"
                },
                {
                    title: "Delivered"
                }
            ]);
            setorderstatus(3);
        }
        // 1   Awaiting Fullfillment
        // 2   Awaiting Shipment
        // 3   Awaiting Payment
        // 4   Patially Shipped
        // 5   Shipped
        // 6   Completed
        // 8   Payment Failed
        if (skuids.includes(1) && skuids.includes(2) && skuids.includes(3) && skuids.includes(4) && skuids.includes(5) && skuids.includes(6) && skuids.includes(8)) {
            // alert('303')
            setStepper([
                {
                    title: "Ordered"
                },
                {
                    title: "Under Process"
                },
                {
                    title: "Shipped"
                },
                {
                    title: "Payment Failed"
                }
            ]);
            setorderstatus(3);
        }
        // 7 Cancelled
        // This case handle in  case 1 : Awaiting Fullfillment
        // 1   Awaiting Fullfillment
        // 5   Payment Failed
        if (skuids.includes(1) && skuids.includes(5)) {
            // alert('290')
            setStepper([
                {
                    title: "Ordered"
                },
                {
                    title: "Under Process"
                },
                {
                    title: "Shipped"
                },
                {
                    title: "Delivered"
                }
            ]);
            setorderstatus(2);
        }
        // 1   Awaiting Fullfillment
        // 5   Payment Failed
        // 6   Completed
        if (skuids.includes(1) && skuids.includes(5) && skuids.includes(6)) {
            // alert('298')
            setStepper([
                {
                    title: "Ordered"
                },
                {
                    title: "Under Process"
                },
                {
                    title: "Shipped"
                },
                {
                    title: "Delivered"
                }
            ]);
            setorderstatus(3);
        }
    // if (skuids.includes(2) || skuids.includes(3)) {
    //   if (skuids.includes(2)) {
    //     if (skuids.includes(3) && skuids.includes(6)) {
    //       setStepper([{ title: 'Ordered' }, { title: 'Under Process' }, { title: 'Shipped' }, { title: 'Delivered' }])
    //       setorderstatus(3)
    //     }
    //     else {
    //       setStepper([{ title: 'Ordered' }, { title: 'Under Process' }, { title: 'Shipped' }, { title: 'Delivered' }])
    //       setorderstatus(2)
    //     }
    //   }
    //   if (skuids.includes(3)) {
    //     if (skuids.includes(6)) {
    //       setStepper([{ title: 'Ordered' }, { title: 'Under Process' }, { title: 'Shipped' }, { title: 'Delivered' }])
    //       setorderstatus(3)
    //     }
    //     else {
    //       setStepper([{ title: 'Ordered' }, { title: 'Under Process' }, { title: 'Shipped' }, { title: 'Delivered' }])
    //       setorderstatus(1)
    //     }
    //   }
    // }
    // 4   Partially Shipped
    // 5   Shipped
    // if (skuids.includes(4) || skuids.includes(5)) {
    //   if (skuids.includes(4)) {
    //     setStepper([{ title: 'Ordered' }, { title: 'Under Process' }, { title: 'Partially Shipped' }, { title: 'Delivered' }])
    //     setorderstatus(2)
    //   }
    //   if (skuids.includes(5)) {
    //     if (skuids.includes(5)) {
    //       setStepper([{ title: 'Ordered' }, { title: 'Under Process' }, { title: 'Shipped' }, { title: 'Delivered' }])
    //       setorderstatus(2)
    //     }
    //     if (skuids.includes(7)) {
    //       setStepper([{ title: 'Ordered' }, { title: 'Shipped' }, { title: 'Cancelled' }])
    //       setorderstatus(2)
    //     }
    //   }
    // }
    // 6  Completed
    // if (skuids.includes(6)) {
    //   alert('hello')
    //   if (skuids.includes(10)) {
    //     setStepper([{ title: 'Ordered' }, { title: 'Delivered' }, { title: 'Request for Refund ' }, { title: 'Partially Refunded' }])
    //     setorderstatus(2)
    //   }
    //   if (skuids.includes(9)) {
    //     setStepper([{ title: 'Ordered' }, { title: 'Delivered' }, { title: 'Request for Refund ' }, { title: 'Refunded' }])
    //     setorderstatus(2)
    //   }
    //   if (skuids.includes(5)) {
    //     setStepper([{ title: 'Ordered' }, { title: 'Under Process' }, { title: 'Shipped' }, { title: 'Delivered' }])
    //     setorderstatus(3)
    //   }
    // }
    // 7   Cancelled
    // if (skuids.includes(7)) {
    //   if (skuids.includes(10)) {
    //     setStepper([{ title: 'Ordered' }, { title: 'Cancelled' }, { title: 'Request for Refund ' }, { title: 'Partially Refunded' }])
    //     setorderstatus(2)
    //   }
    //   if (skuids.includes(12)) {
    //     setStepper([{ title: 'Ordered' }, { title: 'Cancelled' }, { title: 'Refund In Process ' }, { title: ' Refunded' }])
    //     setorderstatus(2)
    //   }
    //   if (skuids.includes(11)) {
    //     if (skuids.includes(9)) {
    //       setStepper([{ title: 'Ordered' }, { title: 'Cancelled' }, { title: 'Request for Refund ' }, { title: 'Refunded' }])
    //       setorderstatus(2)
    //     }
    //   }
    //   else {
    //     setStepper([{ title: 'Ordered' }, { title: 'Cancelled' }])
    //     setorderstatus(3)
    //   }
    // }
    // else {
    //   setStepper([{ title: 'Ordered' }, { title: 'Under Process' }, { title: 'Shipped' }, { title: 'Delivered' }])
    //   setorderstatus(1)
    // }
    // 8   Payment Failed
    // if (skuids.includes(8)) {
    //   setStepper([{title: 'Ordered'}, {title: 'Cancelled'}])
    // }
    // 9	    Refunded
    // if (skuids.includes(9)) {
    //   if (skuids.includes(6)) {
    //   }
    //   if(skuids.includes(7)){
    //     // setStepper([{title: 'Ordered'},{title: 'Under Process'}, {title: 'Cancelled'}, {title: 'Refunded'}])
    //     // setorderstatus(4) 
    //   }
    //   else {
    //   }
    // }
    // 10	Partially Refunded
    // if (skuids.includes(10)) {
    //   if (skuids.includes(6)) {
    //   //  setStepper([{}])
    //   }
    //   else {
    //   }
    // }
    // 11	Request for Refund
    //    if (skuids.includes(11)) {
    //     if (skuids.includes(7)) {
    //       setStepper([{title: 'Ordered'},{title: 'Cancelled'}])
    //       setorderstatus(3)  
    //     }
    // }
    // 12	Refund In Process
    // if (skuids.includes(12)) {
    //   if (skuids.includes(6)) {
    //   }
    //   else{
    //     setStepper([{title: 'Ordered'},{title: 'Under Process'}, {title: 'Shipped'}, {title: 'Delivered'}])
    //     setorderstatus(0)
    //   }
    // }
    }, [
        skuids
    ]);
    console.log("setorderstatusitemdetails", orderstatusitemdetails, orderstatus, stepper);
    const getDate = (date)=>{
        // const d = new Date(date);
        // let month = d.getMonth()
        // let getdate = d.getDate()
        // return month + " " + getdate
        const displayDate = external_moment_default()(date).format("MMMM DD, YYYY ");
        console.log("date", displayDate);
        return displayDate;
    };
    const checkLastVisitedPage = ()=>{
        localStorage.setItem("lastVisitedUrl", "/account/myorders/myorder-detail/OC8209/trackorder");
        router.push({
            pathname: "/login"
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            // (isUserLogin === true || isUserLogin !== null || isUserLogin !== undefined)
            isUserLogin === false ? checkLastVisitedPage() : /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "Track-order",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(external_react_toastify_.ToastContainer, {
                        position: "top-right"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(Header/* default */.Z, {}),
                    /*#__PURE__*/ jsx_runtime.jsx(orderDetailsBreadcrumb/* default */.Z, {
                        myAccount: "My Account",
                        activepage: "Track Order"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "container-fluid",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h4", {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("b", {
                            children: [
                                "Order Number : ",
                                 false ? 0 : ""
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                    /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                    console.log("trackOrderStatus--", trackOrderStatus),
                    trackOrderStatus.map((item, index)=>{
                        console.log("574", item, index);
                        console.log("617", item, index);
                        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "trackorder",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "red-dot"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: index === 0 ? "track-order-border-left-transparent pl-3 pt-2" : "track-order-border-left pl-3 pt-2",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "badge badge-light",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                        children: item.OrderStatus
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: trackOrderStatus.length - 1 === index ? "track-order-border-left-transparent pl-3 pb-3" : "track-order-border-left pl-3 pb-3",
                                            children: getDate(item.CreatedDate)
                                        })
                                    ]
                                })
                            ]
                        }, index);
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)((Accordion_default()), {
                        defaultActiveKey: "0",
                        flush: true,
                        style: {
                            width: "100%"
                        },
                        children: [
                            orderstatusitem && orderstatusitem.map((itm, btnIndex)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                    type: "button",
                                    style: {
                                        fontSize: "15px",
                                        fontStyle: "bold"
                                    },
                                    onClick: ()=>{
                                        handlestatusclick(itm.OrderStatusId, itm.OrderNumber);
                                    },
                                    children: [
                                        " + ",
                                        itm.OrderStatusName
                                    ]
                                }, btnIndex)),
                            /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                                children: handleClick === true && /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                                    children: /*#__PURE__*/ jsx_runtime.jsx((Accordion_default()).Item, {
                                        eventKey: "0",
                                        children: /*#__PURE__*/ jsx_runtime.jsx((Accordion_default()).Body, {
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("table", {
                                                className: "table",
                                                id: "trackordertable",
                                                style: {
                                                    width: "100%"
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("thead", {
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("th", {
                                                                    className: "alignleft",
                                                                    style: {
                                                                        textAlign: "left"
                                                                    },
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                                        children: "Product Image"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("th", {
                                                                    className: "alignleft",
                                                                    style: {
                                                                        textAlign: "left"
                                                                    },
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                                        children: "Product Name"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("th", {
                                                                    className: "alignleft",
                                                                    style: {
                                                                        textAlign: "left"
                                                                    },
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                                        children: "Pack Size"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("th", {
                                                                    className: "alignleft",
                                                                    style: {
                                                                        textAlign: "left"
                                                                    },
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                                        children: "Date"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("th", {
                                                                    className: "alignleft",
                                                                    style: {
                                                                        textAlign: "left"
                                                                    },
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                                        children: "Item Status"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("tbody", {
                                                        children: orderstatusitemdetails && orderstatusitemdetails.map((item, orderIndex)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("td", {
                                                                        className: "alignleft",
                                                                        style: {
                                                                            textAlign: "left"
                                                                        },
                                                                        children: [
                                                                            console.log("item.ProductImage", item),
                                                                            /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                                                src: item.ProductImage,
                                                                                width: "60",
                                                                                height: "60",
                                                                                alt: item.ProductName,
                                                                                objectPosition: "center"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("td", {
                                                                        className: "alignleft",
                                                                        children: item.ProductName
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("td", {
                                                                        className: "alignleft",
                                                                        children: item.PackSize
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("td", {
                                                                        className: "alignleft",
                                                                        children: item.Date
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("td", {
                                                                        className: "alignleft",
                                                                        children: item.OrderItemStatus
                                                                    })
                                                                ]
                                                            }, orderIndex))
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "cart-button-wrapper d-flex justify-content-between mt-4",
                        id: "trackorderbackbtn",
                        style: {
                            paddingBottom: "20px"
                        },
                        children: [
                            " ",
                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: `/account/myorders/myorder-detail/${ false ? 0 : ""}`,
                                className: "btn btn-secondary order-btn",
                                children: "← Back to My Order "
                            }),
                            " "
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(footer/* default */.Z, {})
        ]
    });
}
/* harmony default export */ const trackmyorder = (trackmyorder_Trackorder);


/***/ }),

/***/ 3164:
/***/ (() => {



/***/ })

};
;