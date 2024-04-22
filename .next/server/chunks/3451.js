"use strict";
exports.id = 3451;
exports.ids = [3451];
exports.modules = {

/***/ 4562:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ configureStore)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6695);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6537);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7826);
/**
 * Create the store with dynamic reducers
 */ 


function configureStore(initialState = {}) {
    let composeEnhancers = redux__WEBPACK_IMPORTED_MODULE_0__.compose;
    const reduxSagaMonitorOptions = {};
    /* istanbul ignore next */ if (false) {}
    const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_1___default()(reduxSagaMonitorOptions);
    // Create the store with two middlewares
    // 1. sagaMiddleware: Makes redux-sagas work
    // 2. routerMiddleware: Syncs the location/URL path to the state
    const middlewares = [
        sagaMiddleware
    ];
    const enhancers = [
        (0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)(...middlewares)
    ];
    const store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)((0,_reducers__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(), initialState, composeEnhancers(...enhancers));
    // Extensions
    store.runSaga = sagaMiddleware.run;
    store.injectedReducers = {}; // Reducer registry
    store.injectedSagas = {}; // Saga registry
    // Make reducers hot reloadable, see http://mxs.is/googmo
    /* istanbul ignore next */ if (false) {}
    return store;
}


/***/ }),

/***/ 1824:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cn: () => (/* binding */ LOGIN_REQUEST),
/* harmony export */   Nv: () => (/* binding */ LOGOUT),
/* harmony export */   P8: () => (/* binding */ LOAD_REPOS_SUCCESS),
/* harmony export */   W0: () => (/* binding */ LOAD_REPOS),
/* harmony export */   XP: () => (/* binding */ LOGIN_SUCCESS),
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   _9: () => (/* binding */ LOGIN_FAILURE),
/* harmony export */   b7: () => (/* binding */ LOAD_REPOS_ERROR)
/* harmony export */ });
/* unused harmony export Constants */
/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */ const LOAD_REPOS = "boilerplate/App/LOAD_REPOS";
const LOAD_REPOS_SUCCESS = "boilerplate/App/LOAD_REPOS_SUCCESS";
const LOAD_REPOS_ERROR = "boilerplate/App/LOAD_REPOS_ERROR";
const LOGIN_REQUEST = "USERS_LOGIN_REQUEST";
const LOGIN_SUCCESS = "USERS_LOGIN_SUCCESS";
const LOGIN_FAILURE = "USERS_LOGIN_FAILURE";
const LOGOUT = "LOGOUT";
const Constants = {
    enviroment: "production",
    urls: {
        production: "https://productionapi.adibuja.com",
        development: "https://devuiapi.adibuja.com",
        testing: "",
        live: "https://api.adibuja.com",
        baseUrl: "https://devuiapi.adibuja.com",
        //baseUrl: 'https://demoliveuiapi.adibuja.com',
        //baseUrl: 'https://api.adibuja.com',
        // baseUrl: 'https://staginguiapi.adibuja.com',
        // baseUrl: 'https://uatuiapi.adibuja.com',
        altBaseUrl: "",
        responsibleUrl: "",
        productionui: "https://api.adibuja.com"
    },
    // urls: {
    //   production: 'https://productionui.adibuja.com',
    //   development: '',
    //   testing: '',
    //   baseUrl: 'https://productionapi.adibuja.com',
    //   altBaseUrl: '',
    //   responsibleUrl: '',
    //   productionui: 'https://productionui.adibuja.com',
    // },
    authKey: "",
    endPoints: {
        Client: "/api/v1/client",
        clientaddress: "/api/v1/clientaddress?",
        ClientByClientId: "/api/v1/ClientByClientId?",
        MegaMainMenu: "/api/v1/MegaMainMenu?",
        MultiMenu: "/api/v1/MegaMenu?",
        Billboard: "/api/v1/billboards?",
        Billboardid: "/api/v1/billboard/{id}?",
        DealoftheDay: "/api/v2/getDealOfTheDayProducts?",
        DealoftheDayPage: "/api/v3/getDealOfTheDayProductsWithPagination?",
        token: "/token",
        // topsellingai: '/api/v2/AIGetTopSellingProductListAllForreact?',
        topsellingai: "/api/v2/AIGetTopSellingProductList?",
        topsellingdb: "/api/v3/getTopSellingProductList?",
        banners: "/api/v1/AdvertisementDetails?",
        Advertisement: "/api/v1/AdvertisementDetails?",
        ShopByCategory: "/api/v1/get-homepage-subcategories?",
        BrandList: "/api/v1/getBrandListForReact?",
        RecentlyPurchasedOrders: "/api/v2/get-recentlypurchasedproducts-by-customer?",
        FooterMegaMainMenu: "/api/v1/MegaMainMenu?",
        footer: "/api/v1/staticwebpage?",
        footerMiddle: "/api/v1/staticwebpagesection?",
        GetCustIdByEmail: "/api/v1/customer/GetCustIdByEmail?",
        getcustomerbyphone: "/api/v1/customer/get-customer-by-phone?",
        getcustomerbyguid: "/api/v1/customer/GetAllCustomerIdByGuid?",
        sendsms: "/api/v1/send-sms",
        generateotpforregistration: "/api/v1/customer/generate-otp-for-registration?",
        getsmstemplate: "/api/v1/get-smstemplate?",
        verifyregistrationotp: "/api/v1/customer/verify-registration-otp?",
        getverifiedemailphoneforregistration: "/api/v1/customer/get-verified-email-phone-for-registration",
        uiotpmail: "/api/v1/ui-otp-mail?",
        register: "/api/v1/customer/register",
        shortnenurl: "api/v1/shortnen-url?",
        updateCart: "/api/v1/updateCart?",
        getShoppingCartList: "/api/v1/getShoppingCartList?",
        RemoveFromCart: "/api/v1/RemoveFromCart?",
        getCartCommon: "/api/v1/GetCartInfo?",
        //getCartCommon: '/api/v1/get-cart-common?',
        couponCodeList: "/api/v1/get-couponcodelist?",
        applyCoupenCommon: "/api/v1/apply-coupon-common?",
        generatemobileotp: "/api/v1/customer/generate-mobile-otp?",
        verifyotpnumber: "/api/v1/customer/verify-otp-number?",
        generateotp: "customer/generate-otp,",
        verifyotp: " customer/verify-otp",
        skulisting: "/api/v3/skulisting?",
        skuSEOListing: "/api/v1/category?",
        generateotpforregistrationnew: "/api/v2/generate-otp-for-registration?",
        GoogleApi: "/api/v1/get-google-places-api-and-default-delivery-locality-details",
        autocomplete: "/api/v1/get-google-places-predictions-ForReact?",
        placedetails: "/api/v1/get-google-place-details-ForReact?",
        geocode: "https://maps.googleapis.com/maps/api/geocode/json?",
        // checkserviceavailability: 'https://productionapi.adibuja.com/api/v1/check-service-availability?', // for production 
        // for demo live
        //checkserviceavailability: 'https://demoliveuiapi.adibuja.com/api/v1/check-service-availability?',
        // for Stagging UI
        // checkserviceavailability: 'https://staginguiapi.adibuja.com/api/v1/check-service-availability?',
        // for DEV
        checkserviceavailability: "https://devuiapi.adibuja.com/api/v1/check-service-availability?",
        // for UAT
        //  checkserviceavailability: 'https://uatuiapi.adibuja.com/api/v1/check-service-availability?',
        // For live
        //checkserviceavailability: 'https://api.adibuja.com/api/v1/check-service-availability?',
        updateaddress: "/api/v1/update-address?",
        customeraddress: "/api/v1/customeraddress?",
        defaultaddress: "/api/v1/defaultaddress?",
        gettomorrowsdeliveryslot: "/api/v1/get-tomorrows-delivery-slot",
        serviceAvailability: "/api/ShiprocketLogistics/CourierServiceability",
        invoiceDownload: "/api/ShiprocketLogistics/GenerateInvoice?",
        getdayAftertomorrowsdeliveryslot: "/api/v1/get-dayAftertomorrows-delivery-slot",
        Cartnew: "/api/v1/Cartnew?",
        //initiatetransaction: '/api/v1/initiate-transaction?',
        initiatetransaction: "/api/v1/GenerateTransaction?",
        creditcard: "/api/v1/creditcard?",
        shiprocketCreateOrder: "/api/ShiprocketLogistics/ShiprocketCreateOrder",
        UpdateDeliveryDateAndSlotTime: "/api/v1/Update-DeliveryDateAndSlotTime?",
        sendordermail: "/api/v1/send-order-mail?",
        shoppingcartdetails: "/api/v1/get-shoppingcartdetails-by-productAndPriceId?",
        categories: "/api/v1/categories?",
        advancegetskufilter: "/api/v1/advancegetskufilter?",
        searchadvancegetskufilter: "/api/v1/searchadvancegetskufilter?",
        skuFilterlisting: "/api/v2/skuFilterlisting?",
        WishlistcartProductList: "/api/v2/WishlistcartProductList?",
        cancelCouponCode: "/api/v1/cancel-coupon-code?",
        wishlistadd: "/api/v1/wishlist-add?",
        wishlistremoveitem: "/api/v1/wishlist-remove-item?",
        wishlist: "/api/v1/wishlist?",
        sendOtpLogin: "/api/v1/customer/sendOTP?",
        forgotpassword: "/api/v1/customer/forgotpassword?",
        forgotpasswordForPhone: "/ForgotPasswordForReact?",
        verifyLoginOTP: "/api/V2/VerifyLoginUser",
        verifyLoginPassWord: "/api/v1/customer/authenticate",
        //SkuV: '/api/v2/sku?',
        Review: "/api/v1/Review?",
        SkuV: "/api/v2/PDPSkudata?",
        // skurelated: '/api/v2/skurelated?',
        // skurelated: '/api/v3/skurelated?',
        CRMTrack: "/api/v1/SearchDetails?",
        skurelated: "/api/v2/GetSimilarProductList?",
        recentlyview: "/api/v2/get-recently-products-forreact?",
        // RecommendedProducts: '/api/v2/AIGetRecommendedProducts?',
        // RecommendedProducts: '/api/v/AIGetRecommendedProducts?',
        // recommendedProductsai: '/api/v2/AIGetRecommendedProductListAllForReact?',
        recommendedProductsai: "/api/v2/AI_GetRecommendedProductsData?",
        RazorPaycreateorder: "/api/v1/RazorPay-createorder",
        captureRazorPayorder: "/api/v1/capture-RazorPay-order",
        RazorPayverifysigniture: "/api/v1/RazorPay-verify-signiture",
        customerdetail: "/api/v1/customerdetailnew?",
        // https://api.adibuja.com/api/v1/customerdetailnew?clientid=1&guid=e53162dd-b25d-4731-8c10-f08e55532222
        myorder: "/api/v1/get-orderdetails-for-myorder?",
        orderlisting: "/api/v1/get-customer-all-orders?",
        savcartlisting: "/api/v1/get-customer-saved-cart-grouplist?",
        // viewsavecart: '/api/v1/get-customer-saved-cart?',
        viewsavecart: "/api/v1/get-customer-saved-cart-all?",
        savecustomercart: "/api/v1/save-customer-cart?",
        removesavecartlistitem: "/api/v1/remove-customer-saved-cart-grouplist-item?",
        SavedCartCheckout: "/api/v1/SavedCartCheckout?",
        removesavecartlist: "/api/v1/remove-customer-saved-cart-grouplist?",
        notify: "/api/v1/notify-me-on-product-availabile-all?",
        skusfromcodes: "/api/V2/get-skusfromcodes?",
        addtocompare: "/api/v2/AddToCompare?",
        firsttimepasswordchangedornot: "/api/v1/customer/firsttimepasswordchangedornot?",
        UpdateStatusFirstTimePasswordChanged: "/api/v1/customer/UpdateStatusFirstTimePasswordChanged?",
        changePassword: "/api/v1/customer/ChangePasswordForReact",
        setupPassword: "/api/v1/customer/setup-password",
        Savefeedbackdeliveryreview: "/api/v1/Savefeedbackdeliveryreview",
        Savefeedbackorderreview: "/api/v1/Savefeedbackorderreview",
        CheckReviewIsGivenOrNot: "/api/v1/CheckReviewIsGivenOrNot",
        SaveFeedbackFromPDP: "/api/v1/SaveFeedbackFromPDP",
        GetAllReviewFromCustomerForProduct: "/api/v1/GetAllReviewFromCustomerForProduct",
        GetFeedbackDetailsOrderAndItem: "/api/v1/GetFeedbackDetailsOrderAndItem",
        AIAutosuggestion: "/api/v2/AI/ai-get-skus-for-search-autocomplete?",
        // DBAutosuggestion: '/api/v1/get-skus-for-search-autocomplete?',
        DBAutosuggestion: "/api/v2/get-ai-search-autocomplete-list?",
        skusearchlist: "/api/v2/get-skusearchlist?",
        ReorderProductList: "/api/v3/Get-Customer-Reorder-Product-List?",
        Reorder: "/api/v2/Get-Customer-Reorder-Product-List?",
        wallettransactions: "/api/v1/customer/getcustwallettransactions?",
        // cancelorder: '/api/v1/cancel-order',
        cancelorder: "/api/ShiprocketLogistics/CancelOrder",
        refundorder: "/api/v1/refund-order",
        getSellerPDPList: "/api/v2/getSellerPDPList?",
        newslettersubscription: "/api/v1/send-newslettersubscription-emailForReact?",
        //GetTrackOrderStatus: '/api/v1/GetTrackOrderStatus',
        GetTrackOrderStatus: "/api/v1/GetTrackOrderStatusNew",
        GetAllTrackOrderItemStatusDetail: "/api/v1/GetAllTrackOrderItemStatusDetail",
        OrderCancelStatusList: "/api/v1/order/getOrderCancelStatusList?",
        recentorders: "/api/v1/recent-orders?",
        payment: "https://api.razorpay.com/v1/payments/",
        //Updatedeliveryinfosendordersmsemail: '/api/v2/Update-deliveryinfo-send-order-sms-email?',
        Updatedeliveryinfosendordersmsemail: "/api/v2/UpdateDeliveryInfoAndSendOrderSMSEmail?",
        paymentdetailbyorder: "/api/v1/payment-detail-by-order?",
        deleteaddress: "/api/v1/delete-address?",
        SendEmailAndSmsForRegistration: "/api/V2/SendEmailAndSmsForRegistration",
        SendEmailOrMobileForRegistration: "/api/v1/add-customer-detail?",
        generateandsendphoneemailchangeotp: "/api/V2/generateandsendphoneemailchangeotp?",
        verifyphoneemailchangeotp: "/api/v1/customer/verify-phone-email-change-otp?",
        getbrandlistproducts: "/api/v2/getbrandlistproducts?",
        getBrandList: "/api/v1/getBrandList?",
        UpdateProfile: "/api/v1/UpdateProfile?",
        sendUpdateProfileEmail: "/api/v1/send-updateprofile-email?",
        getSmsTemplate: "/api/v1/get-smstemplate?",
        sendSMS: "/api/v1/send-sms?",
        recentlyviewd: "/api/v2/get-products-from-ids?",
        AIGetRecommendedProducts: "/api/v3/AIGetRecommendedProducts?",
        WishlistcartProductListforreact: "/api/v2/WishlistcartProductListforreact?",
        NewPassword: "/api/v1/customer/new-password?",
        NewPasswordForReact: "/newpasswordforreact?",
        GetAllTrackOrderStatusDetail: "/api/v1/GetAllTrackOrderStatusDetail",
        SavedcartProductList: "/api/v2/SavedcartProductList?",
        Getskudispplayinsubcategories: "/api/v1/getskudispplayinsubcategories?",
        FAQ: "/api/v1/faqs",
        SetupNewPasswordForReact: "/api/v1/customer/NewPasswordForReact",
        GetTopTrendingProductList: "/api/v2/GetAllTopTrendingProductsList?",
        FeatureProduct: "/api/v2/FeatureProductList?",
        NewArrivalProduct: "/api/v2/NewArrivalProductList?",
        GetChatBotResponse: "/api/v2/ai/chatbotResponce?",
        GetRemoveInactiveFromCart: "/api/v1/RemoveInactiveFromCart?",
        GetCartnew: "/api/v1/Cartnew?",
        GetRelatedCategoryList: "/api/v2/RelatedCategoryList?",
        savecontatinformation: "/api/v2/ContactUs",
        getSellerDetails: "/api/v1/get-sellerinfo-by-domain?",
        //AddShippingCharges : '/api/ShiprocketLogistics/AddShippingCharges'
        ShiprocketEnableDisable: "/api/ShiprocketLogistics/ShiprocketEnableDisable?"
    },
    messages: {
        Invalidnumber: "Please enter valid mobile number (10 digit) or Email."
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Constants); // https://devuiapi.adibuja.com/api/v2/Get-Customer-Reorder-Product-List?CustGUID=2c605971-713c-4ec5-b28e-35a436bd5431&LanguageId=2&CartGUID=c6eee012-4b52-49a8-83cc-786e3d6641fe&clientId=1&currencyCode=INR


/***/ }),

/***/ 4287:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ httpRequest)
/* harmony export */ });
/* harmony import */ var _App_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1824);
/* harmony import */ var _homeServices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4171);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6734);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* eslint-disable import/no-cycle */ /* eslint-disable no-unused-expressions */ /* eslint-disable no-alert */ 


//import history from '../../../utils/history';
// function fetchtoken() {
//   fetch(`${Constants.urls.baseUrl}${Constants.endPoints.token}`, {
//     method: 'POST',
//     headers: {
//       accept: 'application/x-www-form-urlencoded',
//       'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     body:
//       'username=FCAPICL0100145&password=JHASGjnknkjhIhAjksnjansasasMKLAHNSJHGASB02012121&grant_type=password',
//   })
//     .then(res => res.json())
//     .then(
//       result => {
//         result && localStorage.setItem('generatedtoken', result.access_token);
//       },
//       function (error) {
//         // this.setState({ buttonload: false });
//         console.log(error);
//       },
//     );
// }
const refreshNewToken = async ()=>{
    const latestToken = await fetch(`${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.token}`, {
        method: "POST",
        headers: {
            accept: "application/x-www-form-urlencoded",
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "username=FCAPICL0100145&password=JHASGjnknkjhIhAjksnjansasasMKLAHNSJHGASB02012121&grant_type=password"
    }).then((res)=>res.json()).then((result)=>{
        //console.log('==================================new token',result.access_token)
        js_cookie__WEBPACK_IMPORTED_MODULE_2___default().set("accessToken", result.access_token);
        if (false) {}
        return result.access_token;
    });
    if (latestToken) {
        return latestToken;
    } else {
        return "";
    }
};
const httpRequest = async (url, method, body)=>{
    let originalBody = body;
    if (false) {} else {
        let tokennew = js_cookie__WEBPACK_IMPORTED_MODULE_2___default().get("accessToken");
        if (tokennew === undefined) {
            tokennew = await refreshNewToken();
        }
        // const tokennew = await refreshNewToken()
        //console.log('==================================new token2',tokennew)
        const dataBody = JSON.stringify(body);
        //const token = localStorage.getItem('generatedtoken');
        // const token = "HVWcC7M_c0jg0kOEg5U0SDmajp37BfxojHvboS6CgbKzOSDLlviz6v5KyzoJoLkv5WP6AAg0f_e0_b0_udZGygAcMNSvUJGvT-Yfef9dwGwMdbKyH_nyOwRsQA5XXGtPSyajfGKZt2eddoVgbSe9G-lp12UWO8l7896KgSWMY-Sv06ugHvwHq_XpP-qnlGcN-fik08B4bWmK9EqLPGnESGYSdHS1UGk32XqXTip2SvM2GfsV-N1A_dGJjlcOSgAwBxivWUYpO1ff8HlecyaFF-7qc6sHBPlDIBSsRYDoiOXWV6LyC9-9kPOLK7UvRbYImsvndI3cCFLuPR-o8-WobcZoy96zxDo6vdafmzsa8es";
        const headers = {
            accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${tokennew}`
        };
        return fetch(url, {
            method,
            headers,
            // mode: 'no-cors',
            body: dataBody
        }).then(async (res)=>{
            if (res.status === 403) {
                const tokennew = await refreshNewToken();
                if (tokennew) {
                    httpRequest(url, method, originalBody);
                    return "cancelOperation";
                }
            } else if (res.status === 500) {
                //router.push('/NotFoundPage')
                return "cancelOperation";
            }
            return res.text();
        }).then((responseBodyAsText)=>{
            try {
                if (responseBodyAsText) {
                    if (url.includes("/api/v1/updateCart") && window.atob(localStorage.getItem("CartGUID")) === _homeServices__WEBPACK_IMPORTED_MODULE_1__/* .ConstantsValues */ .r.defaultCartGUID) {
                        localStorage.setItem("CartGUID", window.btoa(JSON.parse(responseBodyAsText).split("|")[0]));
                    }
                    const bodyAsJson = JSON.parse(responseBodyAsText);
                    return bodyAsJson;
                } else {
                    return "cancelOperation";
                }
            } catch (e) {
                console.log("loggingerror22----------------------", responseBodyAsText);
                if (responseBodyAsText === "cancelOperation") {
                    return Promise.reject();
                }
            // throw Error(responseBodyAsText);
            }
        });
    }
};


/***/ }),

/***/ 4171:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   r: () => (/* binding */ ConstantsValues)
/* harmony export */ });
/* harmony import */ var _App_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1824);
/* harmony import */ var _apiServices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4287);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6734);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* eslint-disable import/no-cycle */ /* eslint-disable no-unused-vars */ 


const currencyCode = "INR";
const currencySymbol = "INR";
const defaultCustGUID = "00000000-0000-0000-0000-000000000000";
const defaultCartGUID = "00000000-0000-0000-0000-000000000000";
const SessionId = "CfDJ8PlXllZqijtJolwhmU1uZnfpSCN0EABydOtT3JZjYadBTuE//3Im9p03yl3XW74aaanzmroV9h++IkJHZz5tYGpgWvKJ2ytPwklDvo7dxz7711pvIyvQwJcIbgMUwKtqwhhZxQbu9MyMP9Jr/rddUKE0TtYLZsDybAlfRkjeFZOG";
const pincode = "411045";
const sortby = "MOD";
const IsgetAll = "1";
const addressid = "0";
const ClientId = 1;
const languageId = 2;
const defaultLocation = "Pune";
const defaultSellerID = "0";
const wishlistGUID = "00000000-0000-0000-0000-000000000000";
const OrderGuid = "00000000-0000-0000-0000-000000000000";
function categoreyServices(params = {}) {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.categories}languageId=${ConstantsValues.languageId}&levelDepth=0`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "GET");
}
function getClientid() {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.Client}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "GET");
}
function getMegamainmenu() {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.MegaMainMenu}ClientId=${ClientId}&languageId=${languageId}&IsForReact=1&sellerid=${localStorage.getItem("sellerID") || ConstantsValues.defaultSellerID}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "GET");
}
function getMultiMenu() {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.MultiMenu}ClientId=${ClientId}&languageId=${languageId}&IsForReact=1&sellerid=${localStorage.getItem("sellerID") || ConstantsValues.defaultSellerID}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "GET");
}
function getBillBoard() {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.Billboard}languageId=${languageId}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "GET");
}
function getBillBoardid() {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.Billboardid}${ClientId}languageId=${languageId}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "GET");
}
// function getDealofday() {
//   const url=`${Constants.urls.baseUrl}${Constants.endPoints.DealoftheDay}ClientId=${ClientId}&languageId=${languageId}&currencyCode=${currencyCode}&CustGUID=${CustGUID}&CartGUID=${CartGUID}&pincode=${pincode}&sortby=${sortby}&IsgetAll=${IsgetAll}`;
//    let url="https://productionapi.adibuja.com/api/v2/getDealOfTheDayProduct/s?clientId=1&LanguageId=2&currencyCode=INR&CustGUID=90971FEB-9C29-426E-8404-0865A4CA035A&CartGUID=2BA8ED78-2067-4CC5-B261-1F1847F1F984&pincode=411045&sortby=MOD&IsgetAll=0"
//   return httpRequest(url, 'GET');
// }
function getDealofdayWithPage(pageNum, PageSize) {
    let pinvalue = localStorage.getItem("pincodevalue") !== "" && localStorage.getItem("pincodevalue") !== null ? localStorage.getItem("pincodevalue") : pincode;
    if (pinvalue === null) {
        pinvalue = pincode;
    }
    //console.log(`heyiminhomepage${pinvalue}`);
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.DealoftheDayPage}ClientId=${ClientId}&languageId=${languageId}&currencyCode=${currencyCode}&CustGUID=${localStorage.getItem("CustGUID") === null || localStorage.getItem("CustGUID") === undefined ? defaultCustGUID : window.atob(localStorage.getItem("CustGUID"))}&cartGuid=${localStorage.getItem("CartGUID") === null || localStorage.getItem("CartGUID") === undefined ? ConstantsValues.defaultCartGUID : window.atob(localStorage.getItem("CartGUID"))}&pincode=${pinvalue}&sortby=${sortby}&IsgetAll=${IsgetAll}&PageNumber=${pageNum}&PageSize=${PageSize}&sellerid=${localStorage.getItem("sellerID") || ConstantsValues.defaultSellerID}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "GET");
}
function getwhishlistpaged(pageNum, PageSize) {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.WishlistcartProductListforreact}ClientId=${ClientId}&languageId=${languageId}&currencyCode=${currencyCode}&CustGUID=${localStorage.getItem("CustGUID") === null || localStorage.getItem("CustGUID") === undefined ? defaultCustGUID : window.atob(localStorage.getItem("CustGUID"))}&cartGuid=${localStorage.getItem("CartGUID") === null || localStorage.getItem("CartGUID") === undefined ? ConstantsValues.defaultCartGUID : window.atob(localStorage.getItem("CartGUID"))}&pincode=${pincode}&sortby=${sortby}&IsgetAll=${IsgetAll}&PageNumber=${pageNum}&PageSize=${PageSize}&sellerid=${localStorage.getItem("sellerID") || ConstantsValues.defaultSellerID}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "POST");
}
function getTopsellingdb(pageNum, PageSize, SkuDetailId) {
    let pinvalue = localStorage.getItem("pincodevalue") !== "" && localStorage.getItem("pincodevalue") !== null ? localStorage.getItem("pincodevalue") : pincode;
    if (pinvalue === null) {
        pinvalue = pincode;
    }
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.topsellingai}ClientId=${ClientId}&languageId=${languageId}&currencyCode=${currencyCode}&CustGUID=${localStorage.getItem("CustGUID") === null || localStorage.getItem("CustGUID") === undefined ? defaultCustGUID : window.atob(localStorage.getItem("CustGUID"))}&cartGuid=${localStorage.getItem("CartGUID") === null || localStorage.getItem("CartGUID") === undefined ? ConstantsValues.defaultCartGUID : window.atob(localStorage.getItem("CartGUID"))}&pincode=${pinvalue}&sortby=${sortby}&IsgetAll=${IsgetAll}&PageNumber=${pageNum}&PageSize=${PageSize}&SkuDetailid=${SkuDetailId || 0}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "POST");
}
function getTopsellingAI(pageNum, PageSize) {
    let pinvalue = localStorage.getItem("pincodevalue") !== "" && localStorage.getItem("pincodevalue") !== null ? localStorage.getItem("pincodevalue") : pincode;
    if (pinvalue === null) {
        pinvalue = pincode;
    }
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.topsellingdb}ClientId=${ClientId}&languageId=${languageId}&currencyCode=${currencyCode}&CustGUID=${localStorage.getItem("CustGUID") === null || localStorage.getItem("CustGUID") === undefined ? defaultCustGUID : window.atob(localStorage.getItem("CustGUID"))}&cartGuid=${localStorage.getItem("CartGUID") === null || localStorage.getItem("CartGUID") === undefined ? ConstantsValues.defaultCartGUID : window.atob(localStorage.getItem("CartGUID"))}&pincode=${pinvalue}&sortby=${sortby}&IsgetAll=${IsgetAll}&PageNumber=${pageNum}&PageSize=${PageSize}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "GET");
}
// function updateCart() {
// const url=`${ Constants.urls.baseUrl }${ Constants.endPoints.updateCart }ClientId=${ ClientId }&languageId=${ languageId }&currencyCode=${ currencyCode }&CustGUID=${ CustGUID }&CartGUID=${ CartGUID }&pincode=${ pincode }&sortby=${ sortby }&IsgetAll=${ IsgetAll }&PageNumber=${ param.PageNumber }&PageSize=${ param.PageSize }`;
// const url=`${ Constants.urls.baseUrl }${ Constants.endPoints.updateCart }`
//   const data={
//     productId: 84576,
//     Qty: 2,
//     isAdd: false,
//     custCountry: 'India',
//     custcity: 'Mumbai',
//     skufilterpriceid: 2720
//   }
//   return httpRequest('url', 'POST');
// }
function getBanners() {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.banners}ClientId=${ClientId}&sellerid=${localStorage.getItem("sellerID") || ConstantsValues.defaultSellerID}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "GET");
}
function getSubCategoryProductList(page, caturl, parentCatURL, min, max, Seleced) {
    //console.log('finaltesting1',caturl)
    //console.log('finaltesting2',parentCatURL)
    // const url=`https://productionapi.adibuja.com/api/v2/skulisting?clientId=${ConstantsValues.ClientId}&catUrl=${caturl}&languageId=2&CurrencyCode=INR&CustGUID=${(localStorage.getItem('CustGUID') === null || localStorage.getItem('CustGUID') === undefined) defaultCustGUID : window.atob(localStorage.getItem('CustGUID'))}&cartGuid=${ConstantsValues.defaultCartGUID}&fixedShippingDurationId=0&pageNo=${page}&limit=8&sortby=POP&pincode=${ConstantsValues.pincode}&defaultListing=false`;
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.skulisting}clientId=${ConstantsValues.ClientId}&catUrl=${caturl}&parentCatURL=${parentCatURL}&languageId=2&CurrencyCode=INR&CustGUID=${localStorage.getItem("CustGUID") === null || localStorage.getItem("CustGUID") === undefined ? defaultCustGUID : window.atob(localStorage.getItem("CustGUID"))}&cartGuid=${localStorage.getItem("CartGUID") === null || localStorage.getItem("CartGUID") === undefined ? ConstantsValues.defaultCartGUID : window.atob(localStorage.getItem("CartGUID"))}&fixedShippingDurationId=0&pageNo=${page}&limit=20&sortby=${Seleced}&pincode=${ConstantsValues.pincode}&defaultListing=false&minPrice=${min}&maxPrice=${max}&sellerid=${localStorage.getItem("sellerID") || ConstantsValues.defaultSellerID}`;
    //console.log('finaltesting3',url)
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "GET");
}
function getShopbycategory() {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.ShopByCategory}ClientId=${ClientId}&sellerid=${localStorage.getItem("sellerID") || ConstantsValues.defaultSellerID}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "GET");
}
// function getRecommendedproducts() {
//   const url = `${Constants.urls.baseUrl}${Constants.endPoints.RecommendedProducts}ClientId=${ClientId}`;
//   return httpRequest(url, 'GET');
// }
function getBrandList(PageNumber, PageSize) {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.BrandList}ClientId=${ClientId}&IsgetAll=${IsgetAll}&displayAllBrands=${1}&PageNumber=${PageNumber}&PageSize=${PageSize}&sortby${"POP"}&sellerid=${localStorage.getItem("sellerID") || ConstantsValues.defaultSellerID}`;
    // const url = `https://productionapi.adibuja.com/api/v1/getBrandListForReact?clientId=1&IsgetAll=1&displayAllBrands=1&PageNumber=1&PageSize=9&sortby=MOD`
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "GET");
}
function getBrands() {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.brands}languageId=${languageId}`;
    // let url ="https://productionapi.adibuja.com/api/v1/getBrandList?clientId=1&IsgetAll=0"
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "GET");
}
// let and='&'
function getFooter(Description) {
    let pagename = "";
    if (localStorage.getItem("sellerID") && localStorage.getItem("sellerID") === "0") {
        pagename = localStorage.getItem("CustGUID") === null ? "react-guest" : "react-auth";
    } else {
        pagename = localStorage.getItem("CustGUID") === null ? "react-seller-guest" : "react-seller-auth";
    }
    // let url ="https://productionapi.adibuja.com/api/v1/staticwebpage?pagename=footer&cid=1&languageId=2"
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.footer}pagename=${pagename}&cid=${ClientId}&languageId=${languageId}&sellerid=${localStorage.getItem("sellerID") || ConstantsValues.defaultSellerID}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "GET");
}
function getFooterr(Description) {
    const pagename = localStorage.getItem("CustGUID") === null ? "react-guest" : "react-auth";
    // let url ="https://productionapi.adibuja.com/api/v1/staticwebpage?pagename=footer&cid=1&languageId=2"
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.footer}pagename=${Description}&cid=${ClientId}&languageId=${languageId}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "GET");
}
function geTopsellingai() {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.topsellingai}languageId=${languageId}&IsgetAll=${IsgetAll}&SkuDetailid=${0}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "GET");
}
const pageurl = "usp-icons";
// o  cnst cid=2
function getFooterstaticwebsection() {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.footerMiddle}pageurl=${"react-footer-section"}&cid=${ClientId}&languageId=${languageId}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "GET");
}
const qacontent = "footer-qacontent";
function getFooterstaticparamqacontent() {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.footerMiddle}pageurl=${qacontent}&cid=${ClientId}&languageId=${languageId}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "GET");
}
function getcustomerbyphone(username) {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.getcustomerbyphone}clientid=${ClientId}&phone=${username}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "POST");
}
function getcustomerbyguid(Guid) {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.getcustomerbyguid}clientid=${ClientId}&custGuid=${Guid}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "POST");
}
function generateotpforregistration(mobile, number) {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.generateotpforregistration}number=${mobile}&email=${number}&clientid=${ClientId}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "POST");
}
function generateotpforregistration1(mobile, number) {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.generateotpforregistration}number=${number}&email=${mobile}&clientid=${ClientId}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "POST");
}
function getsmstemplate(ID) {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.getsmstemplate}Id=${ID}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "GET");
}
function sendsms(username, demo, sender, text) {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.sendsms}?numbers=${username}&message=${demo}${text}&sender=${sender}&clientid=${ClientId}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "POST");
}
function GetCustIdByEmail(username) {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.GetCustIdByEmail}clientid=${ClientId}&email=${username}&sellerid=${localStorage.getItem("sellerID") || ConstantsValues.defaultSellerID}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "POST");
}
function getCustIdUsingGmailId(clientid, emailId, customerType) {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.GetCustIdByEmail}clientid=${clientid}&email=${emailId}&customerType=${customerType}&sellerid=${localStorage.getItem("sellerID") || ConstantsValues.defaultSellerID}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "POST");
}
function uiotpmail(username, resotp) {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.uiotpmail}clientid=${ClientId}&emailid=${username}&otp=${resotp}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "POST");
}
function verifyregistrationotp(CustomerRegistrationOTPGUID, otp) {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.verifyregistrationotp}CustomerRegistrationOTPGUID=${CustomerRegistrationOTPGUID}&otp=${otp}&clientid=${ClientId}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "POST");
}
function getverifiedemailphoneforregistration(CustomerRegistrationOTPGUID) {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.getverifiedemailphoneforregistration}?CustomerRegistrationOTPGUID=${CustomerRegistrationOTPGUID}&clientid=${ClientId}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "POST");
}
function generatemobileotp(username) {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.generatemobileotp}number=${username}&ClientId=${ClientId}&isGuest=${false}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "POST");
}
function verifyotpnumber(username, otp) {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.verifyotpnumber}Number=${username}&ClientId=${ClientId}&otp=${otp}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "POST");
}
function generateotp(username) {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.generateotp}Email=${username}&ClientId=${ClientId}&isGuest=${false}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "POST");
}
function verifyotp(username, otp) {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.verifyotp}Email=${username}&ClientId=${ClientId}&otp=${otp}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "POST");
}
function generateotpforregistrationnew(username) {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.generateotpforregistrationnew}userName=${username}&sellerId=${localStorage.getItem("sellerID") || defaultSellerID}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "POST");
}
// function getwishlist(username) {
//   const url = `${Constants.urls.baseUrl}${Constants.endPoints.wishlist}customerGUID=${(localStorage.getItem('CustGUID') === null || localStorage.getItem('CustGUID') === undefined) ? defaultCustGUID : window.atob(localStorage.getItem('CustGUID'))}&ClientId=${ClientId}&CurrencyCode=${currencyCode}&languageId=${languageId}&wishlistGUID=${wishlistGUID}&pincode=${pincode}`;
//   return httpRequest(url, 'GET');
// }
function getwishlist() {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.wishlist}cartGUID=${localStorage.getItem("CartGUID") === null || localStorage.getItem("CartGUID") === undefined ? ConstantsValues.defaultCartGUID : window.atob(localStorage.getItem("CartGUID"))}&customerGUID=${localStorage.getItem("CustGUID") === null || localStorage.getItem("CustGUID") === undefined ? defaultCustGUID : window.atob(localStorage.getItem("CustGUID"))}&ClientId=${ClientId}&CurrencyCode=${currencyCode}&languageId=${languageId}&wishlistGUID=${wishlistGUID}&PageNumber=${1}&PageSize=${9}&pincode=${pincode}&sellerid=${localStorage.getItem("sellerID") || ConstantsValues.defaultSellerID}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "GET");
}
function addwishlist(SkuId, SKUFilterPriceId) {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.wishlistadd}customerGUID=${localStorage.getItem("CustGUID") === null || localStorage.getItem("CustGUID") === undefined ? defaultCustGUID : window.atob(localStorage.getItem("CustGUID"))}&wishlistGUID=${wishlistGUID}&wishlistName=yourWish&skuId=${SkuId}&skufilterPriceId=${SKUFilterPriceId}&quantity=1&sellerid=${localStorage.getItem("sellerID") || ConstantsValues.defaultSellerID}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "POST");
}
function removewishlist(SkuId, WishlistGUID, SKUFilterPriceId) {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.wishlistremoveitem}customerGUID=${localStorage.getItem("CustGUID") === null || localStorage.getItem("CustGUID") === undefined ? defaultCustGUID : window.atob(localStorage.getItem("CustGUID"))}&wishlistGUID=${WishlistGUID}&skuId=${SkuId}&skufilterPriceId=${SKUFilterPriceId}&sellerid=${localStorage.getItem("sellerID") || ConstantsValues.defaultSellerID}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "POST");
}
function sendOtpLoginApi(userID) {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.sendOtpLogin}userName=${userID}&customerType=${"1"}&sellerId=${localStorage.getItem("sellerID") === null || localStorage.getItem("sellerID") === undefined ? ConstantsValues.defaultSellerID : localStorage.getItem("sellerID")}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "POST");
}
function sendOtpRegisterApi(userID) {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.sendOtpLogin}userName=${userID}&customerType=${"1"}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "POST");
}
function sendOtpRegistrationApi(userID) {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.generateotpforregistrationnew}userName=${userID}&sellerId=${localStorage.getItem("sellerID") || defaultSellerID}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "POST");
}
function sendUserRegistrationUsingGmailApi(userDetails) {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.register}userName=${userDetails}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "POST", userDetails);
}
function forgotpasswordApi(id) {
    const SellerId = localStorage.getItem("sellerID") === null || localStorage.getItem("sellerID") === undefined ? ConstantsValues.defaultSellerID : localStorage.getItem("sellerID");
    const UserName = id;
    const CType = 1;
    const ClId = 1;
    const obj = {
        UserName,
        CType,
        ClId,
        SellerId
    };
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.forgotpasswordForPhone}`;
    //console.log("url", url);
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "POST", obj);
}
function NewPasswordForReact(token, username, newpassword, confirmpassword, isFirstTimePasswordChange) {
    const Token = token;
    // const ClientId='1'
    const Username = username;
    const NewPassword = newpassword;
    const ConfirmPassword = confirmpassword;
    const IsPasswordChangedForFirstTimeFlag = isFirstTimePasswordChange;
    // const obj = { Token, Email,CustomerType ,NewPassword,ConfirmPassword,IsPasswordChangedForFirstTimeFlag}
    const obj = {
        Token,
        Username,
        NewPassword,
        ConfirmPassword,
        IsPasswordChangedForFirstTimeFlag,
        ClientId
    };
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.NewPasswordForReact}`;
    //console.log("url", url);
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "POST", obj);
}
// function NewPasswordForReactApi(token, username) {
//   // const url = `${Constants.urls.baseUrl}${Constants.endPoints.NewPasswordForReact}token=41f03dee-d3b2-4008-9d8d-bc140631f47e&Username=ankitad@futurismtechnologies.com&CustomerType=1`
//   const url = `${Constants.urls.baseUrl}${Constants.endPoints.NewPasswordForReactApi}token=${token}&Username=${username}&CustomerType=1`
//   return httpRequest(url, 'POST',);
// }
function NewPasswordApi(token, username, n1passwordTxt, cnfpasswordTxt, IsPasswordChangedForFirstTime) {
    // const url = `${Constants.urls.baseUrl}${Constants.endPoints.NewPassword}Token=${token}&UserName=${username}&NewPassword=${n1passwordTxt}&ConfirmPassword=${cnfpasswordTxt}&ClientId=1&IsPasswordChangedForFirstTimeFlag=${IsPasswordChangedForFirstTime}&CustomerType=1`
    //console.log('256--', token, username, n1passwordTxt, cnfpasswordTxt, IsPasswordChangedForFirstTime)
    const obj = {
        Token: token,
        UserName: username,
        NewPassword: n1passwordTxt,
        ConfirmPassword: cnfpasswordTxt,
        ClientId: 1,
        IsPasswordChangedForFirstTimeFlag: IsPasswordChangedForFirstTime,
        CustomerType: 1,
        SellerId: localStorage.getItem("sellerID") || ConstantsValues.defaultSellerID
    };
    //console.log('266--', obj)
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.SetupNewPasswordForReact}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "POST", obj);
}
function verifyOTP(UserName, OTP) {
    const SellerId = localStorage.getItem("sellerID") === null || localStorage.getItem("sellerID") === undefined ? ConstantsValues.defaultSellerID : localStorage.getItem("sellerID");
    const obj = {
        UserName,
        OTP,
        SellerId
    };
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.verifyLoginOTP}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "POST", obj);
}
function verifyRegistrationOTP(customerRegistrationOTPGUID, OTP) {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.verifyregistrationotp}customerRegistrationOTPGUID=${customerRegistrationOTPGUID}&otp=${OTP}&clientid=${ConstantsValues.ClientId}&sellerId=${localStorage.getItem("sellerID") || defaultSellerID}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "POST");
}
function verifyuserRegistrationOTP(customerRegistrationOTPGUID, OTP) {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.verifyregistrationotp}customerRegistrationOTPGUID=${customerRegistrationOTPGUID}&otp=${OTP}&clientid=${ConstantsValues.ClientId}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "POST");
}
function verifyPassword(UserName, Password) {
    const SellerId = localStorage.getItem("sellerID") === null || localStorage.getItem("sellerID") === undefined ? ConstantsValues.defaultSellerID : localStorage.getItem("sellerID");
    const CustomerType = 1;
    const obj = {
        UserName,
        Password,
        CustomerType,
        SellerId
    };
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.verifyLoginPassWord}`;
    // console.log("token..", token)
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "POST", obj);
}
function subscribeemail(email) {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.newslettersubscription}clientId=${ConstantsValues.ClientId}&emailid=${email}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "POST");
}
function getproductcompare() {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.skusfromcodes}cartId=${localStorage.getItem("CartGUID") === null || localStorage.getItem("CartGUID") === undefined ? ConstantsValues.defaultCartGUID : window.atob(localStorage.getItem("CartGUID"))}&custGuid=${localStorage.getItem("CustGUID") === null || localStorage.getItem("CustGUID") === undefined ? ConstantsValues.defaultCustGUID : window.atob(localStorage.getItem("CustGUID"))}&CurrencyCode=INR&sellerid=${localStorage.getItem("sellerID") || ConstantsValues.defaultSellerID}`;
    // const url = `${Constants.urls.baseUrl}${Constants.endPoints.skusfromcodes}cartId=${(localStorage.getItem('CartGUID') === null || localStorage.getItem('CartGUID') === undefined) ? ConstantsValues.defaultCartGUID : window.atob(localStorage.getItem('CartGUID'))}&custGuid=${localStorage.getItem('CustGUID') === null ? defaultCustGUID : window.atob(localStorage.getItem('CustGUID'))}&SkuCodes=hari-pyajspring-onion&CurrencyCode=${ConstantsValues.currencyCode}&clientId=${ConstantsValues.ClientId}&languageId=${ConstantsValues.languageId}&pincode=${ConstantsValues.pincode}`
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "GET");
}
function getnewcompare(SkuId, ip, compareflag) {
    // const flag=false
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.addtocompare}custguid=${localStorage.getItem("CustGUID") === null || localStorage.getItem("CustGUID") === undefined ? ConstantsValues.defaultCustGUID : window.atob(localStorage.getItem("CustGUID"))}&skudetailid=${SkuId}&sessionid=${SessionId}&ipAddress=${ip}&flag=${compareflag}&sellerid=${localStorage.getItem("sellerID") || ConstantsValues.defaultSellerID}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "POST");
}
function getFAQ() {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.FAQ}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "GET");
}
function getTopTrendingProductList(pageNum, PageSize, SkuDetailId) {
    if (false) {} else {
        const productcategory = "";
        const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.GetTopTrendingProductList}pincode=${ConstantsValues.pincode}&LanguageId=${ConstantsValues.languageId}&CartGUID=${ConstantsValues.defaultCartGUID}&CustGUID=${ConstantsValues.defaultCustGUID}&clientId=${ConstantsValues.ClientId}&currencyCode=${currencyCode}&IsgetAll=${IsgetAll}&PageNumber=${pageNum}&PageSize=${PageSize}&skudetailid=${SkuDetailId || 0}&sellerid=${ConstantsValues.defaultSellerID}`;
        return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "GET");
    }
}
function featureProduct() {
    const productcategory = "";
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.FeatureProduct}clientId=${ConstantsValues.ClientId}&LanguageId=${ConstantsValues.languageId}&currencyCode=${ConstantsValues.currencyCode}&CartGUID=${ConstantsValues.defaultCartGUID}&CustGUID=${ConstantsValues.defaultCustGUID}&pincode=${ConstantsValues.pincode}&Category=${productcategory}&sellerid=${localStorage.getItem("sellerID") || ConstantsValues.defaultSellerID}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "GET");
}
function newArrivalProduct() {
    const productcategory = "";
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.NewArrivalProduct}clientId=${ConstantsValues.ClientId}&LanguageId=${ConstantsValues.languageId}&currencyCode=${ConstantsValues.currencyCode}&CartGUID=${ConstantsValues.defaultCartGUID}&CustGUID=${ConstantsValues.defaultCustGUID}&pincode=${ConstantsValues.pincode}&Category=${productcategory}&sellerid=${localStorage.getItem("sellerID") || ConstantsValues.defaultSellerID}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "GET");
}
// function getChatBotAIResponse(userResponse) {
//   const url = `${Constants.urls.baseUrl}${Constants.endPoints.GetChatBotResponse}user_response=${userResponse}&CustGUID=${(localStorage.getItem('CustGUID') === null || localStorage.getItem('CustGUID') === undefined) ? ConstantsValues.defaultCustGUID : window.atob(localStorage.getItem('CustGUID'))}`;
//   return httpRequest(url, 'GET');
// }
function getChatBotAIResponse(userResponse, IPAddress) {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.GetChatBotResponse}UserRequest=${userResponse}&custguid=${localStorage.getItem("CustGUID") === null || localStorage.getItem("CustGUID") === undefined ? ConstantsValues.defaultCustGUID : window.atob(localStorage.getItem("CustGUID"))}&IPAddress=${IPAddress}&SessionId=${SessionId}&sellerid=${localStorage.getItem("sellerID") || ConstantsValues.defaultSellerID}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "GET");
}
function getRelatedCategoryList(catURL) {
    const url = `${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.endPoints.GetRelatedCategoryList}&clientId=${ConstantsValues.ClientId}&LanguageId=${ConstantsValues.languageId}&CategoryName=${catURL}&sellerid=${localStorage.getItem("sellerID") || ConstantsValues.defaultSellerID}`;
    return (0,_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "GET");
}
const CustomsAPI = {
    getFooterr,
    verifyPassword,
    verifyOTP,
    verifyRegistrationOTP,
    verifyuserRegistrationOTP,
    forgotpasswordApi,
    sendOtpLoginApi,
    sendOtpRegisterApi,
    sendOtpRegistrationApi,
    sendUserRegistrationUsingGmailApi,
    getCustIdUsingGmailId,
    getDealofdayWithPage,
    getSubCategoryProductList,
    categoreyServices,
    getClientid,
    getMegamainmenu,
    getMultiMenu,
    getBillBoard,
    getBillBoardid,
    getBanners,
    getShopbycategory,
    getBrandList,
    getBrands,
    // getRecommendedproducts,
    getFooter,
    geTopsellingai,
    getTopsellingdb,
    // getDealofday,
    getFooterstaticwebsection,
    getFooterstaticparamqacontent,
    getcustomerbyphone,
    getcustomerbyguid,
    generateotpforregistration,
    getsmstemplate,
    sendsms,
    GetCustIdByEmail,
    uiotpmail,
    verifyregistrationotp,
    getverifiedemailphoneforregistration,
    generateotpforregistration1,
    generatemobileotp,
    verifyotp,
    verifyotpnumber,
    generateotp,
    generateotpforregistrationnew,
    getwishlist,
    addwishlist,
    removewishlist,
    getproductcompare,
    getnewcompare,
    subscribeemail,
    getwhishlistpaged,
    getTopsellingAI,
    NewPasswordApi,
    NewPasswordForReact,
    getFAQ,
    getTopTrendingProductList,
    featureProduct,
    newArrivalProduct,
    getChatBotAIResponse,
    getRelatedCategoryList
};
const ConstantsValues = {
    SessionId,
    defaultCustGUID,
    defaultCartGUID,
    pincode,
    sortby,
    IsgetAll,
    ClientId,
    languageId,
    currencyCode,
    addressid,
    currencySymbol,
    OrderGuid,
    defaultLocation,
    defaultSellerID
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomsAPI);


/***/ }),

/***/ 7880:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ Message_data),
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Message_data = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
function Context({ children }) {
    const [cartRefresh, setCartRefresh] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [compareRefresh, setCompareRefresh] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [shoppingCartData, setShoppingCartData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [selectedLocationName, setSelectedLocationName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [selectedLocationZip, setSelectedLocationZip] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [paymentInfoSuccessPage, setPaymentInfoSuccessPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const [locationUpdateFlag, setLocationUpdateFlag] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Message_data.Provider, {
        value: {
            cartRefresh,
            setCartRefresh,
            compareRefresh,
            setCompareRefresh,
            shoppingCartData,
            setShoppingCartData,
            selectedLocationZip,
            setSelectedLocationZip,
            selectedLocationName,
            setSelectedLocationName,
            locationUpdateFlag,
            setLocationUpdateFlag,
            paymentInfoSuccessPage,
            setPaymentInfoSuccessPage
        },
        children: children
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Context);


/***/ }),

/***/ 1717:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "react-cookie"
var external_react_cookie_ = __webpack_require__(5515);
// EXTERNAL MODULE: external "@react-oauth/google"
var google_ = __webpack_require__(6999);
// EXTERNAL MODULE: ./src/configureStore.js
var configureStore = __webpack_require__(4562);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(6734);
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);
// EXTERNAL MODULE: ./src/containers/App/constants.js
var constants = __webpack_require__(1824);
;// CONCATENATED MODULE: ./src/AccessTokenProvider.js





const AccessTokenContext = /*#__PURE__*/ (0,external_react_.createContext)();
function AccessTokenProvider({ children }) {
    const [accessToken, setAccessToken] = (0,external_react_.useState)(null);
    const router = (0,router_.useRouter)();
    (0,external_react_.useEffect)(()=>{
        const fetchAccessToken = ()=>{
            // Check if the access token is already in the cookies
            const tokenFromCookies = external_js_cookie_default().get("accessToken");
            if (tokenFromCookies) {
                setAccessToken(tokenFromCookies);
            } else {
                // Simulate API call to fetch the access token
                fetch(`${constants/* default */.ZP.urls.baseUrl}${constants/* default */.ZP.endPoints.token}`, {
                    method: "POST",
                    headers: {
                        accept: "application/x-www-form-urlencoded",
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: "username=FCAPICL0100145&password=JHASGjnknkjhIhAjksnjansasasMKLAHNSJHGASB02012121&grant_type=password"
                }).then((res)=>res.json()).then((result)=>{
                    setAccessToken(result.access_token);
                    external_js_cookie_default().set("accessToken", result.access_token);
                }, (error)=>{
                    console.error("Error fetching access token:", error);
                });
            }
        };
        fetchAccessToken();
    }, [
        router.asPath
    ]);
    return /*#__PURE__*/ jsx_runtime.jsx(AccessTokenContext.Provider, {
        value: {
            accessToken,
            setAccessToken
        },
        children: children
    });
}
function useAccessToken() {
    return useContext(AccessTokenContext);
}

// EXTERNAL MODULE: ./src/containers/MainPage/api/homeServices.js
var homeServices = __webpack_require__(4171);
// EXTERNAL MODULE: ./src/context.js
var context = __webpack_require__(7880);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/script.js
var script = __webpack_require__(4298);
// EXTERNAL MODULE: ./src/utils/getSellerDetails.js
var getSellerDetails = __webpack_require__(5177);
;// CONCATENATED MODULE: ./src/Layout.js








const Layout = ({ children })=>{
    const router = (0,router_.useRouter)();
    const [isHeaderRender, setIsHeaderRender] = (0,external_react_.useState)(false);
    const [isGoogleDivThere, setIsGoogleDivThere] = (0,external_react_.useState)(false);
    const [sellerDetailsContact, setsellerDetailsContact] = (0,external_react_.useState)([]);
    (0,external_react_.useEffect)(()=>{
        (async ()=>{
            const sellerDetailsFromDomain = await (0,getSellerDetails/* default */.Z)();
            let sellerIdMain = homeServices/* ConstantsValues */.r.defaultSellerID;
            if (sellerDetailsFromDomain && sellerDetailsFromDomain.AdminMemberId && sellerDetailsFromDomain.AdminMemberId !== "") {
                sellerIdMain = sellerDetailsFromDomain.AdminMemberId;
                setsellerDetailsContact(sellerDetailsFromDomain);
            }
            localStorage.setItem("sellerID", sellerIdMain);
        })();
    }, []);
    (0,external_react_.useEffect)(()=>{
        if (window.localStorage) {
            const custGuid = window.localStorage.getItem("CustGUID");
            if (custGuid) {
                document.body.setAttribute("data-custguid", window.atob(custGuid));
            } else {
                document.body.setAttribute("data-custguid", "00000000-0000-0000-0000-000000000000");
            }
        }
    }, []);
    (0,external_react_.useEffect)(()=>{
        if (false) {}
    }, [
        router
    ]);
    // useEffect(() => {
    //  if(isHeaderRender){
    //   setIsGoogleDivThere(true)
    //  }else{
    //   setIsGoogleDivThere(false)
    //  }
    // },[isHeaderRender])
    const { isfallback, events } = (0,router_.useRouter)();
    const googletranslateelementinit = ()=>{
        new google.translate.TranslateElement({
            pagelanguage: "en"
        }, "google_element");
        $(".goog-logo-link").empty();
        $(".goog-te-gadget").html($(".goog-te-gadget").children());
        $(".goog-te-gadget span").remove();
    };
    (0,external_react_.useEffect)(()=>{
        const id = "google-translate-script";
        const addscript = ()=>{
            const s = document.createElement("script");
            s.setAttribute("src", "https://translate.google.com/translate_a/element.js?cb=googletranslateelementinit");
            s.setAttribute("id", id);
            const q = document.getElementById(id);
            if (!q) {
                document.body.appendChild(s);
                window.googletranslateelementinit = googletranslateelementinit;
            }
        };
        const removescript = ()=>{
            $(".goog-logo-link").empty();
            $(".goog-te-gadget").html($(".goog-te-gadget").children());
            $(".goog-te-gadget span").remove();
            const q = document.getElementById(id);
            if (q) q.remove();
            const w = document.getElementById("google_element");
            if (w) w.innerhtml = "";
        };
        // isfallback || addscript()
        // events.on('routechangestart', removescript)
        // events.on('routechangecomplete', addscript)
        // return () => {
        //   events.off('routechangestart', removescript)
        //   events.off('routechangecomplete', addscript)
        // }
        if (isHeaderRender && localStorage.getItem("sellerID") === "0") {
            if (document.getElementById("targetHeader")) {
                document.getElementById("targetHeader").innerHTML == "";
            }
            addscript();
        } else {
            // if(typeof window !== 'undefined' && window.localStorage && document.getElementById(':1.container')){
            //   let g = document.getElementById(':1.container');
            //   g.style.display = 'none'        
            // }
            removescript();
        }
    }, [
        isHeaderRender
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "description",
                        content: "Adibuja completely alters your experience of purchasing. With a few clicks, you can order online thereby avoiding traffic jams, parking, carrying heavy bags back home. In addition to this, you also save time spent on the billing lines. We save not only your precious time but also your hard-earned money by offering you products at the lowest rates possible. Happy shopping!!!"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "keywords",
                        content: "Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books, Fruits and Vegetables, Staples, Dairy, Packages Foods, Home care, Personal Care"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "google-translate-customization",
                        content: "2a346d14a229c668-7e7397a8cc152430-g725eaceb7864f0fd-12"
                    }),
                     false ? /*#__PURE__*/ 0 : null,
                    /*#__PURE__*/ jsx_runtime.jsx("title", {
                        children: "Explore Best Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More with Amazing Offers!"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("script", {
                        src: "https://cdn.razorpay.com/widgets/affordability/affordability.js"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("script", {
                        src: "https://code.jquery.com/jquery-3.6.0.min.js"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("script", {
                        type: "text/javascript",
                        src: "https://devadmin.adibuja.com/scripts/screenrecord/tracker.js",
                        async: true
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("script", {
                        dangerouslySetInnerHTML: {
                            __html: `
                if (window.localStorage) {
                  const custGuid = window.localStorage.getItem('CustGUID');
                  if (custGuid) {
                    document.body.setAttribute('data-custguid', window.atob(custGuid));
                  } else {
                    document.body.setAttribute('data-custguid', '00000000-0000-0000-0000-000000000000');
                  }
                }
              `
                        }
                    })
                ]
            }),
             false ? /*#__PURE__*/ 0 : null,
            children
        ]
    });
};
/* harmony default export */ const src_Layout = (Layout);

;// CONCATENATED MODULE: ./src/pages/_app.js





//import { useStore } from '../redux/store';









function MyApp({ Component, pageProps }) {
    if (external_js_cookie_default().get("sublocalityvalue") && external_js_cookie_default().get("sublocalityvalue") == "" && external_js_cookie_default().get("pincodevalue") && external_js_cookie_default().get("pincodevalue") == "") {
        external_js_cookie_default().set("sublocalityvalue", homeServices/* ConstantsValues */.r.defaultLocation);
        external_js_cookie_default().set("pincodevalue", homeServices/* ConstantsValues */.r.pincode);
    } else if (!external_js_cookie_default().get("sublocalityvalue") && !external_js_cookie_default().get("pincodevalue")) {
        external_js_cookie_default().set("sublocalityvalue", homeServices/* ConstantsValues */.r.defaultLocation);
        external_js_cookie_default().set("pincodevalue", homeServices/* ConstantsValues */.r.pincode);
    }
    const store = (0,configureStore/* default */.Z)({});
    if (false) {}
    //Cookies.remove('accessTokenAuthentication');
    // if (typeof window !== 'undefined' && window.localStorage) {
    //   (function (){        
    //     fetch(`${Constants.urls.baseUrl}${Constants.endPoints.token}`, {
    //       method: 'POST',
    //       headers: {
    //         accept: 'application/x-www-form-urlencoded',
    //         'Content-Type': 'application/x-www-form-urlencoded',
    //       },
    //       body:
    //         'username=FCAPICL0100145&password=JHASGjnknkjhIhAjksnjansasasMKLAHNSJHGASB02012121&grant_type=password',
    //     })
    //     .then(res => res.json())
    //     .then(
    //       result => {
    //         if (result) {
    //           localStorage.setItem('generatedtoken', result.access_token)
    //         }
    //       },
    //     );
    //   })()
    // }
    const router = (0,router_.useRouter)();
    //Old test ID
    //761974021170-sgabqvrl0lli4rjtalfgiqg8trt87aq6.apps.googleusercontent.com
    //Live ID
    //1028275409428-6g381q56uu3k19pgqib0jvpsghm6s649.apps.googleusercontent.com
    return /*#__PURE__*/ jsx_runtime.jsx(google_.GoogleOAuthProvider, {
        clientId: "1028275409428-6g381q56uu3k19pgqib0jvpsghm6s649.apps.googleusercontent.com",
        children: /*#__PURE__*/ jsx_runtime.jsx(external_react_redux_.Provider, {
            store: store,
            children: /*#__PURE__*/ jsx_runtime.jsx(src_Layout, {
                children: /*#__PURE__*/ jsx_runtime.jsx(external_react_cookie_.CookiesProvider, {
                    children: /*#__PURE__*/ jsx_runtime.jsx(AccessTokenProvider, {
                        children: /*#__PURE__*/ jsx_runtime.jsx(context/* default */.Z, {
                            children: /*#__PURE__*/ (0,external_react_.createElement)(Component, {
                                ...pageProps,
                                key: router.asPath
                            })
                        })
                    })
                })
            })
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 9987:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6734);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6859);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_2__);



class MyDocument extends (next_document__WEBPACK_IMPORTED_MODULE_2___default()) {
    render() {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_2__.Html, {
            lang: "en",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_2__.Head, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                            src: "https://cdn.razorpay.com/widgets/affordability/affordability.js"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            name: "robots",
                            content: "INDEX,FOLLOW"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_2__.Main, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_2__.NextScript, {})
                    ]
                })
            ]
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyDocument);


/***/ }),

/***/ 7826:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ createReducer)
});

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__(6695);
// EXTERNAL MODULE: external "immer"
var external_immer_ = __webpack_require__(7133);
var external_immer_default = /*#__PURE__*/__webpack_require__.n(external_immer_);
// EXTERNAL MODULE: ./src/containers/App/constants.js
var constants = __webpack_require__(1824);
;// CONCATENATED MODULE: ./src/containers/App/reducer.js
/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */ 

// The initial state of the App
const initialState = {
    loading: false,
    error: false,
    currentUser: false,
    userData: {
        repositories: false
    },
    user: ""
};
/* eslint-disable default-case, no-param-reassign */ const appReducer = (state = initialState, action)=>external_immer_default()(state, ()=>{
        switch(action.type){
            case constants/* LOAD_REPOS */.W0:
                break;
            case constants/* LOAD_REPOS_SUCCESS */.P8:
                break;
            case constants/* LOAD_REPOS_ERROR */.b7:
                break;
            case constants/* LOGIN_REQUEST */.Cn:
                break;
            case constants/* LOGIN_SUCCESS */.XP:
                return {
                };
            case constants/* LOGIN_FAILURE */._9:
                return {};
            case constants/* LOGOUT */.Nv:
                return {};
        }
        return "";
    });
/* harmony default export */ const reducer = (appReducer);

;// CONCATENATED MODULE: ./src/containers/LanguageProvider/constants.js
/*
 *
 * LanguageProvider constants
 *
 */ const CHANGE_LOCALE = "app/LanguageToggle/CHANGE_LOCALE";

;// CONCATENATED MODULE: ./src/containers/LanguageProvider/reducer.js
/*
 *
 * LanguageProvider reducer
 *
 */ 

//import { DEFAULT_LOCALE } from '../../i18n';
const reducer_initialState = {
    locale: "en"
};
/* eslint-disable default-case, no-param-reassign */ const languageProviderReducer = (state = reducer_initialState, action)=>external_immer_default()(state, (draft)=>{
        switch(action.type){
            case CHANGE_LOCALE:
                draft.locale = action.locale;
                break;
        }
    });
/* harmony default export */ const LanguageProvider_reducer = (languageProviderReducer);

;// CONCATENATED MODULE: ./src/reducers.js
/**
 * Combine all reducers in this file and export the combined reducers.
 */ 


/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */ function createReducer(injectedReducers = {}) {
    const rootReducer = (0,external_redux_.combineReducers)({
        global: reducer,
        language: LanguageProvider_reducer,
        ...injectedReducers
    });
    return rootReducer;
}


/***/ }),

/***/ 5177:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers_MainPage_api_apiServices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4287);
/* harmony import */ var _containers_App_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1824);



const defaultResponse = {
    "Id": 0,
    "BPCode": "",
    "BPName": "",
    "BPUserName": null,
    "BPType": null,
    "EMail": "contactus@adibuja.com",
    "Phone": null,
    "Mobile": null,
    "CompanyName": "Adibuja",
    "Website": null,
    "FacebookUrl": null,
    "InstagramUrl": null,
    "TwitterUrl": null,
    "NoOfProducts": null,
    "AdditionalProductInfo": null,
    "AccountBalance": null,
    "CreditLimit": null,
    "GroupCode": null,
    "PaymentTermsCode": null,
    "OrdersBal": null,
    "DNotesBal": null,
    "PriceListNo": null,
    "BPCurrency": null,
    "Discount": null,
    "Remarks": null,
    "AgreementNum": null,
    "CreateDate": null,
    "UpdateDate": null,
    "ClientId": "1",
    "isActive": false,
    "IsLogicalDeleted": false,
    "isNew": false,
    "isApproved": false,
    "IsRejected": false,
    "BPCurrencyName": null,
    "PaymentTermsName": null,
    "ShowPassword": null,
    "AdminMemberId": 0,
    "LogoURL": "/assets1/img/icon/adibuja-logo.svg",
    "SupportEmail": null,
    "SupportPhoneNo": null,
    "AboutUS": null,
    "StoreURL": "adibuja.com",
    "DomainURL": "adibuja.com"
};
const getDetailsFromDomain = async (request)=>{
    //console.log("getting called in seller details",request)
    // Call the API to get seller ID based on the request
    //const incomingDomainName = request.replace(/^www\./,'');
    let incomingDomainName = "";
    if (request && request !== "") {
        incomingDomainName = request.replace(/^www\./, "");
    } else {
        const currentUrl = window.location.origin;
        incomingDomainName = currentUrl.replace(/^https?\:\/\/(www\.)?/, "");
    }
    // const incomingDomainName = 'devprimecommerce.adibuja.com';
    // const incomingDomainName = 'adibuja.com';
    const url = `${_containers_App_constants__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP.urls.baseUrl}${_containers_App_constants__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP.endPoints.getSellerDetails}domainurl=${incomingDomainName}`;
    const responseData = await (0,_containers_MainPage_api_apiServices__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)(url, "GET");
    if (responseData?.AdminMemberId) {
        return responseData;
    } else {
        return defaultResponse;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDetailsFromDomain);


/***/ })

};
;