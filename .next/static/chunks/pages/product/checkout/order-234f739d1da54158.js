(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8693,1765],{55405:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/product/checkout/order",function(){return a(60546)}])},32314:function(e,t,a){"use strict";var o=a(85893),l=a(67294),r=a(41664),c=a.n(r),n=a(88807),s=a(11560);t.Z=()=>{let[e,t]=(0,l.useState)("");return(0,l.useEffect)(()=>{(async()=>{let e=await (0,n.Z)();s.r.defaultSellerID,e&&(null==e?void 0:e.AdminMemberId)&&(e.AdminMemberId,t(e.CompanyName))})()},[]),(0,o.jsxs)("div",{style:{textAlign:"center"},className:"check_foot",children:[(0,o.jsx)("form",{id:"mc-form"}),(0,o.jsx)("p",{align:"center",style:{paddingTop:"10px"},children:(0,o.jsxs)("small",{children:[(0,o.jsx)("a",{href:"/delivery-policy",onClick:()=>{localStorage.setItem("pagefootert","delivery-policy-react")},style:{color:"dodgerblue",cursor:"pointer"},children:"Delivery Policy"}),"\xa0\xa0",localStorage.getItem("sellerID")&&"0"===localStorage.getItem("sellerID")?(0,o.jsx)(c(),{href:"/faq",style:{color:"dodgerblue"},children:"Help"}):""]})}),(0,o.jsx)("div",{children:localStorage.getItem("sellerID")&&"0"===localStorage.getItem("sellerID")?(0,o.jsx)("p",{align:"center",style:{paddingTop:"0px",paddingBottom:"35px"},children:(0,o.jsx)("small",{children:"2024 \xa9 Adibuja Private Limited, All Rights Reserved"})}):(0,o.jsx)("p",{align:"center",style:{paddingTop:"0px",paddingBottom:"35px"},children:(0,o.jsxs)("small",{children:["Copyright 2024 \xa9",e," | Powered by ",(0,o.jsx)("a",{href:"https://www.adibuja.com/",target:"_blank",children:"Adibuja"}),",  All Rights Reserved"]})})})]})}},64359:function(e,t,a){"use strict";var o=a(85893),l=a(67294);t.Z=e=>{let[t,a]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{a(!0)},[]),(0,o.jsx)(o.Fragment,{children:t&&(0,o.jsxs)(o.Fragment,{children:[(null==e?void 0:e.isGlobal)&&(0,o.jsx)("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",background:"rgba(0, 0, 0, 0.2)",zIndex:"99999999999999"}}),(0,o.jsx)("div",{style:(null==e?void 0:e.isGlobal)?{position:"fixed",top:"50%",left:"50%",zIndex:"9999999999999",transform:"translate(-50%, -50%)"}:{minHeight:"100vh"},className:"container d-flex justify-content-center align-items-center h-100 category-loader",children:(0,o.jsx)("img",{src:"/images/adibuja-logo-animation.gif",alt:"",style:{justifySelf:"center",width:"80px",height:"80px"}})})]})})}},58968:function(e,t,a){"use strict";a.d(t,{Z:function(){return l}});var o=a(85893);function l(e){let{msg:t}=e;return(0,o.jsx)("div",{children:(0,o.jsxs)("div",{className:"topmessage alert alert-danger alert-dismissible show",role:"alert",style:{position:"fixed",top:"0",zIndex:"9999999999",color:"#000"},children:[(0,o.jsx)("i",{className:"fa fa-warning cross"}),(0,o.jsx)("strong",{className:"msg",children:t})]})})}a(67294),a(20879),a(31684),a(24087)},99093:function(e,t,a){"use strict";var o=a(91755),l=a(20242),r=a(11560);t.Z={updatecart:function(e,t,a,c,n){let s=localStorage.getItem("pincodevalue")&&""!==localStorage.getItem("pincodevalue")?localStorage.getItem("pincodevalue"):"411045",i="".concat(o.ZP.urls.baseUrl).concat(o.ZP.endPoints.updateCart,"IsRFQ=false&IsAssembled=false&City=pune&Country=India&IpAddress=").concat(e,"&SessionId=").concat(r.r.SessionId,"&clientId=").concat(r.r.ClientId,"&couponCode=").concat(n,"&cartGUID=").concat(null===localStorage.getItem("CartGUID")||void 0===localStorage.getItem("CartGUID")?r.r.defaultCartGUID:window.atob(localStorage.getItem("CartGUID")),"&CustGUID=").concat(null===localStorage.getItem("CustGUID")||void 0===localStorage.getItem("CustGUID")?r.r.defaultCustGUID:window.atob(localStorage.getItem("CustGUID")),"&qnt=").concat(t,"&skuId=").concat(a,"&skufilterpriceid=").concat(c,"&currencyCode=").concat(r.r.currencyCode,"&pincode=").concat(s,"&billingAddressId=&shippingMethodName=&shippingRate=&shippingAddressId=&sellerid=").concat(null===localStorage.getItem("sellerID")||void 0===localStorage.getItem("sellerID")?r.r.defaultSellerID:localStorage.getItem("sellerID"));return(0,l.c)(i,"post")},getShoppingCartList:function(){let e="".concat(o.ZP.urls.baseUrl).concat(o.ZP.endPoints.getShoppingCartList,"CustGUID=").concat(null===localStorage.getItem("CustGUID")||void 0===localStorage.getItem("CustGUID")?r.r.defaultCustGUID:window.atob(localStorage.getItem("CustGUID")));return(0,l.c)(e,"get")},RemoveCartItem:function(e,t){let a=localStorage.getItem("pincodevalue")&&""!==localStorage.getItem("pincodevalue")?localStorage.getItem("pincodevalue"):"411045",c="".concat(o.ZP.urls.baseUrl).concat(o.ZP.endPoints.RemoveFromCart,"IsRFQ=false&SkuFilterPriceId=").concat(t,"&cartGUID=").concat(null===localStorage.getItem("CartGUID")||void 0===localStorage.getItem("CartGUID")?r.r.defaultCartGUID:window.atob(localStorage.getItem("CartGUID")),"&CustGUID=").concat(null===localStorage.getItem("CustGUID")||void 0===localStorage.getItem("CustGUID")?r.r.defaultCustGUID:window.atob(localStorage.getItem("CustGUID")),"&skuId=").concat(e,"&currencyCode=").concat(r.r.currencyCode,"&pincode=").concat(a,"&sellerid=").concat(null===localStorage.getItem("sellerID")||void 0===localStorage.getItem("sellerID")?r.r.defaultSellerID:localStorage.getItem("sellerID"));return(0,l.c)(c,"post")},getCartCommon:function(){let e=localStorage.getItem("pincodevalue")&&""!==localStorage.getItem("pincodevalue")?localStorage.getItem("pincodevalue"):r.r.pincode,t="".concat(o.ZP.urls.baseUrl).concat(o.ZP.endPoints.getCartCommon,"isUserAuthenticated=").concat(!(null===localStorage.getItem("CustGUID")||void 0===localStorage.getItem("CustGUID")),"&addressid=").concat(r.r.addressid,"&cartId=").concat(null===localStorage.getItem("CartGUID")||void 0===localStorage.getItem("CartGUID")?r.r.defaultCartGUID:window.atob(localStorage.getItem("CartGUID")),"&clientId=").concat(r.r.ClientId,"&currencyName=").concat(r.r.currencyCode,"&currencySymbol=").concat(r.r.currencyCode,"&CustGUID=").concat(null===localStorage.getItem("CustGUID")||void 0===localStorage.getItem("CustGUID")?r.r.defaultCustGUID:window.atob(localStorage.getItem("CustGUID")),"&languageId=2&pincode=").concat(e,"&sellerid=").concat(null===localStorage.getItem("sellerID")||void 0===localStorage.getItem("sellerID")?r.r.defaultSellerID:localStorage.getItem("sellerID"));return(0,l.c)(t,"get")},getCouponCodeList:function(){let e="".concat(o.ZP.urls.baseUrl).concat(o.ZP.endPoints.couponCodeList,"clientId=1&CustGUID=").concat(null===localStorage.getItem("CustGUID")||void 0===localStorage.getItem("CustGUID")?r.r.defaultCustGUID:window.atob(localStorage.getItem("CustGUID")),"&sellerid=").concat(localStorage.getItem("sellerID")||r.r.defaultSellerID);return(0,l.c)(e,"get")},applyCoupon:function(e){let t="".concat(o.ZP.urls.baseUrl).concat(o.ZP.endPoints.applyCoupenCommon,"isUserAuthenticated=").concat(!(null===localStorage.getItem("CustGUID")||void 0===localStorage.getItem("CustGUID")),"&CouponCode=").concat(e,"&addressid=").concat(r.r.addressid,"&cartId=").concat(null===localStorage.getItem("CartGUID")||void 0===localStorage.getItem("CartGUID")?r.r.defaultCartGUID:window.atob(localStorage.getItem("CartGUID")),"&clientId=1&currencyName=").concat(r.r.currencyCode,"&currencySymbol=").concat(r.r.currencySymbol,"&CustGUID=").concat(null===localStorage.getItem("CustGUID")||void 0===localStorage.getItem("CustGUID")?r.r.defaultCustGUID:window.atob(localStorage.getItem("CustGUID")),"&durationId=0&pincode=").concat(r.r.pincode,"&sellerid=").concat(localStorage.getItem("sellerID")||r.r.defaultSellerID);return(0,l.c)(t,"GET")},getShoppingcartDetails:function(e,t){let a="".concat(o.ZP.urls.baseUrl).concat(o.ZP.endPoints.shoppingcartdetails,"ShoppingCartGUID=").concat(null===localStorage.getItem("CartGUID")||void 0===localStorage.getItem("CartGUID")?r.r.defaultCartGUID:window.atob(localStorage.getItem("CartGUID")),"&CustGUID=").concat(null===localStorage.getItem("CustGUID")||void 0===localStorage.getItem("CustGUID")?r.r.defaultCustGUID:window.atob(localStorage.getItem("CustGUID")),"&skufilterpriceid=").concat(t,"&SkuDetailId=").concat(e,"&sellerId=").concat(null===localStorage.getItem("sellerID")||void 0===localStorage.getItem("sellerID")?r.r.defaultSellerID:localStorage.getItem("sellerID"));return(0,l.c)(a,"get")},getCancelCouponCode:function(e){let t="".concat(o.ZP.urls.baseUrl).concat(o.ZP.endPoints.cancelCouponCode,"CustGUID=").concat(null===localStorage.getItem("CustGUID")||void 0===localStorage.getItem("CustGUID")?r.r.defaultCustGUID:window.atob(localStorage.getItem("CustGUID")),"&cartId=").concat(null===localStorage.getItem("CartGUID")||void 0===localStorage.getItem("CartGUID")?r.r.defaultCartGUID:window.atob(localStorage.getItem("CartGUID")),"&clientId=1&CouponCode=").concat(e,"&sellerid=").concat(localStorage.getItem("sellerID")||r.r.defaultSellerID);return(0,l.c)(t,"get")},NotifyMeAPI:function(e,t){let a="".concat(o.ZP.urls.baseUrl).concat(o.ZP.endPoints.notify,"skuDetailId=").concat(e,"&CustGUID=").concat(null===localStorage.getItem("CustGUID")||void 0===localStorage.getItem("CustGUID")?r.r.defaultCustGUID:window.atob(localStorage.getItem("CustGUID")),"&clientId=").concat(r.r.ClientId,"&skuPriceId=").concat(t,"&sellerid=").concat(localStorage.getItem("sellerID")||r.r.defaultSellerID);return(0,l.c)(a,"post")},removeInactiveFromCart:function(){let e="".concat(o.ZP.urls.baseUrl).concat(o.ZP.endPoints.GetRemoveInactiveFromCart,"cartGUID=").concat(null===localStorage.getItem("CartGUID")||void 0===localStorage.getItem("CartGUID")?r.r.defaultCartGUID:window.atob(localStorage.getItem("CartGUID")),"&custGUID=").concat(null===localStorage.getItem("CustGUID")||void 0===localStorage.getItem("CustGUID")?r.r.defaultCustGUID:window.atob(localStorage.getItem("CustGUID")),"&sellerid=").concat(null===localStorage.getItem("sellerID")||void 0===localStorage.getItem("sellerID")?r.r.defaultSellerID:localStorage.getItem("sellerID"));return(0,l.c)(e,"POST")},getCartnew:function(){let e=localStorage.getItem("pincodevalue")&&""!==localStorage.getItem("pincodevalue")?localStorage.getItem("pincodevalue"):r.r.pincode,t="".concat(o.ZP.urls.baseUrl).concat(o.ZP.endPoints.GetCartnew,"cartGuid=").concat(null===localStorage.getItem("CartGUID")||void 0===localStorage.getItem("CartGUID")?r.r.defaultCartGUID:window.atob(localStorage.getItem("CartGUID")),"&custGUID=").concat(null===localStorage.getItem("CustGUID")||void 0===localStorage.getItem("CustGUID")?r.r.defaultCustGUID:window.atob(localStorage.getItem("CustGUID")),"&skufilterpriceid=0&clientId=1&fixedShippingDurationId=0&CurrencyCode=").concat(r.r.currencyCode,"&pincode=").concat(e,"&sellerid=").concat(null===localStorage.getItem("sellerID")||void 0===localStorage.getItem("sellerID")?r.r.defaultSellerID:localStorage.getItem("sellerID"));return(0,l.c)(t,"GET")}}},23494:function(e,t,a){"use strict";a.d(t,{f:function(){return c}});var o=a(91755),l=a(20242),r=a(11560);let c={RAZOR_PAY_KEY:"rzp_test_VCsnPXPPhGYPJC",RAZOR_PAY_SECRET:"P23u4yFZujPDoFaOr64e70fC"};t.Z={initiatetransaction:function(e){let t="".concat(o.ZP.urls.baseUrl).concat(o.ZP.endPoints.initiatetransaction,"CustGUID=").concat(null===localStorage.getItem("CustGUID")||void 0===localStorage.getItem("CustGUID")?r.r.defaultCustGUID:window.atob(localStorage.getItem("CustGUID")),"&cartGuid=").concat(null===localStorage.getItem("CartGUID")||void 0===localStorage.getItem("CartGUID")?r.r.defaultCartGUID:window.atob(localStorage.getItem("CartGUID")),"&OrderGuid=").concat(r.r.OrderGuid,"&PayModeTypes=").concat(e);return(0,l.c)(t,"POST")},createOrderid:function(e){let t="".concat(o.ZP.urls.baseUrl).concat(o.ZP.endPoints.RazorPaycreateorder);return(0,l.c)(t,"POST",e)},captutreRazorpay:function(e){let t="".concat(o.ZP.urls.baseUrl).concat(o.ZP.endPoints.captureRazorPayorder);return(0,l.c)(t,"POST",e)},razorpayVerifysignature:function(e){console.log(e);let t="".concat(o.ZP.urls.baseUrl).concat(o.ZP.endPoints.RazorPayverifysigniture);return(0,l.c)(t,"POST",e)},placeordercreditcard:function(e,t,a){let n="".concat(o.ZP.urls.baseUrl).concat(o.ZP.endPoints.creditcard,"cartId=").concat(null===localStorage.getItem("CartGUID")||void 0===localStorage.getItem("CartGUID")?r.r.defaultCartGUID:window.atob(localStorage.getItem("CartGUID")),"&transaction=").concat(e,"&customer=").concat(null===localStorage.getItem("CustGUID")||void 0===localStorage.getItem("CustGUID")?r.r.defaultCustGUID:window.atob(localStorage.getItem("CustGUID")),"&authLoginId=").concat(c.RAZOR_PAY_KEY,"&transactionKey=").concat(c.RAZOR_PAY_SECRET,"&clientId=").concat(r.r.ClientId,"&cardNumber=&expiration=&cardCode=&orderComment=&orderPlacedForm=").concat("Reactweb","&CurrencyCode=INR&billingAddress=").concat(a,"&shippingAddress=").concat(a,"&isDevelopment=false&fixedShippingDurationId=1&paymentmode=").concat(t,"&carttype=&storeCard=false&SavedCardId=&RefOrderId=&sellerid=").concat(null===localStorage.getItem("sellerID")||void 0===localStorage.getItem("sellerID")?r.r.defaultSellerID:localStorage.getItem("sellerID"));return(0,l.c)(n,"POST")},getcustomerwalletbalance:function(){let e="".concat(o.ZP.urls.baseUrl).concat(o.ZP.endPoints.customerdetail,"clientid=").concat(r.r.ClientId,"&guid=").concat(null===localStorage.getItem("CustGUID")||void 0===localStorage.getItem("CustGUID")?r.r.defaultCustGUID:window.atob(localStorage.getItem("CustGUID")));return(0,l.c)(e,"GET")},updateDeliveryslotTime:function(e,t,a,c){let n=""!==localStorage.getItem("Email")&&void 0!==localStorage.getItem("Email")?localStorage.getItem("Email"):null,s=""!==localStorage.getItem("UserLastPhone")&&void 0!==localStorage.getItem("UserLastPhone")?localStorage.getItem("UserLastPhone"):null,i=""!==localStorage.getItem("UserFirstName")&&void 0!==localStorage.getItem("UserFirstName")?localStorage.getItem("UserFirstName"):null,d=""!==localStorage.getItem("UserLastName")&&void 0!==localStorage.getItem("UserLastName")?localStorage.getItem("UserLastName"):null,u="".concat(o.ZP.urls.baseUrl).concat(o.ZP.endPoints.Updatedeliveryinfosendordersmsemail,"currencyCode=").concat(r.r.currencyCode,"&custGUID=").concat(null===localStorage.getItem("CustGUID")||void 0===localStorage.getItem("CustGUID")?r.r.defaultCustGUID:window.atob(localStorage.getItem("CustGUID")),"&Instructionfordelivery=").concat(c,"&clientId=").concat(r.r.ClientId,"&email=").concat(n,"&phone=").concat(s,"&fullName=").concat(i).concat(d,"&OrderNumber=").concat(e,"&sellerid=").concat(null===localStorage.getItem("sellerID")||void 0===localStorage.getItem("sellerID")?r.r.defaultSellerID:localStorage.getItem("sellerID"));return console.log("url1delivery====",u),(0,l.c)(u,"POST")},paymentinfo:function(e){let t="".concat(o.ZP.urls.baseUrl).concat(o.ZP.endPoints.payment).concat(e);return(0,l.c)(t,"GET")},paymentdetailsbyorder:function(e){let t="".concat(o.ZP.urls.baseUrl).concat(o.ZP.endPoints.paymentdetailbyorder,"OrderNumber=").concat(e,"&CustomerGuid=").concat(null===localStorage.getItem("CustGUID")||void 0===localStorage.getItem("CustGUID")?r.r.defaultCustGUID:window.atob(localStorage.getItem("CustGUID")),"&CurrencyCode=").concat(r.r.currencyCode);return(0,l.c)(t,"POST")},shiprocketCreateOrder:function(e,t,a,n){let s=localStorage.getItem("pincodevalue")&&""!==localStorage.getItem("pincodevalue")?localStorage.getItem("pincodevalue"):"411045",i="".concat(o.ZP.urls.baseUrl).concat(o.ZP.endPoints.shiprocketCreateOrder),d={cartId:null===localStorage.getItem("CartGUID")||void 0===localStorage.getItem("CartGUID")?r.r.defaultCartGUID:window.atob(localStorage.getItem("CartGUID")),custGuid:null===localStorage.getItem("CustGUID")||void 0===localStorage.getItem("CustGUID")?r.r.defaultCustGUID:window.atob(localStorage.getItem("CustGUID")),pincode:s,addressId:a,authLoginId:c.RAZOR_PAY_KEY,transactionKey:c.RAZOR_PAY_SECRET,clientId:r.r.ClientId,languageId:2,cardNumber:"",expiration:"",cardCode:"",orderComment:"",orderPlacedForm:"Reactweb",currencyName:"INR",currencySymbol:"INR",isUserAuthenticated:!0,sellerId:null===localStorage.getItem("sellerID")||void 0===localStorage.getItem("sellerID")?r.r.defaultSellerID:localStorage.getItem("sellerID"),paymentMethod:"COD"===n?"COD":"Prepaid",billingAddress:a,shippingAddress:a,isDevelopment:!1,fixedShippingDurationId:0,paymentMode:t,cartType:"",storeCard:!1,savedCardId:"",refOrderId:"",customerPaymentProfileId:"",customerType:0,sessionId:"",transactionId:e};return(0,l.c)(i,"POST",d)}}},523:function(e,t,a){"use strict";var o=a(85893),l=a(64359),r=a(11163),c=a(67294);t.Z=()=>{let[e,t]=(0,c.useState)(!1),a=(0,r.useRouter)();return(0,c.useEffect)(()=>{let e=e=>{t(!0)},o=e=>{t(!1)},l=(e,a)=>{t(!1)};return a.events.on("routeChangeStart",e),a.events.on("routeChangeComplete",o),a.events.on("routeChangeError",l),()=>{a.events.off("routeChangeStart",e),a.events.off("routeChangeComplete",o),a.events.off("routeChangeError",l)}},[a]),(0,o.jsx)(o.Fragment,{children:e?(0,o.jsx)(l.Z,{isGlobal:!0}):""})}},12797:function(e,t,a){"use strict";a.d(t,{X$:function(){return l},by:function(){return r}});var o=a(74934);function l(e){return{type:o.eM,customeraddressId:e}}function r(e){return{type:o.Bm,paymentmethod:e}}},74934:function(e,t,a){"use strict";a.d(t,{$s:function(){return I},Bm:function(){return y},Gg:function(){return D},Np:function(){return m},QL:function(){return c},Ss:function(){return s},VZ:function(){return d},XN:function(){return u},YA:function(){return n},YI:function(){return o},YY:function(){return r},Ye:function(){return l},eM:function(){return p},iY:function(){return C},nH:function(){return f},qg:function(){return i},v8:function(){return g},x9:function(){return S},ym:function(){return h}});let o="app/ProceedToBuy/DEFAULT_ACTION",l="app/ProceedToBuy/INITIATE_TRANSACTION",r="app/ProceedToBuy/INITIATE_TRANSACTION_SUCCESS",c="app/ProceedToBuy/TRANSACTON_ID_SUCCESS",n="app/ProceedToBuy/CREATE_ORDER_ID",s="app/ProceedToBuy/CREATE_ORDER_ID",i="app/ProceedToBuy/CAPTURE_RAZORPAY",d="app/ProceedToBuy/CAPTURE_RAZORPAY",u="app/ProceedToBuy/PLACE_ORDER_CREDIT_CARD",g="app/ProceedToBuy/PLACE_ORDER_CREDIT_CARD",I="app/ProceedToBuy/UPDATE_DELIVERY_SLOTS",m="app/ProceedToBuy/UPDATE_DELIVERY_SLOTS",p="app/ProceedToBuy/SELECT_DEFAULT_ADDRESS",C="app/ProceedToBuy/GET_WALLETBALANCE",S="app/ProceedToBuy/GET_WALLETBALANCE_SUCCESS",D="app/ProceedToBuy/SELECT_DEFAULT_ADDRESS_SUCCESS",f="app/ProceedToBuy/VALUES_ADDRESS_PAGE",h="app/ProceedToBuy/SLOT_DATE",y="app/ProceedToBuy/PAYMENTMETHOD"},60546:function(e,t,a){"use strict";a.r(t),a.d(t,{OrderPlacemode:function(){return h}});var o=a(85893),l=a(67294),r=a(48107),c=a(14416),n=a(41664),s=a.n(n),i=a(11163),d=a(76494),u=a(22920);a(58788),a(24087),a(20879),a(63959),a(96962);var g=a(11560),I=a(23494),m=a(12797),p=a(99093),C=a(58968);a(78088);var S=a(88807),D=a(523),f=a(32314);function h(e){let[t,a]=(0,l.useState)(""),[n,h]=(0,l.useState)(""),[y,U]=(0,l.useState)(""),[v,G]=(0,l.useState)(""),[P,b]=(0,l.useState)(),[x,w]=(0,l.useState)(0),[j,R]=(0,l.useState)(""),[T,E]=(0,l.useState)(""),[N,A]=(0,l.useState)(""),[_,Z]=(0,l.useState)(""),[O,k]=(0,l.useState)(!1),[L,W]=(0,l.useState)(!1),[B,F]=(0,l.useState)(!1),[z,Y]=(0,l.useState)(!1),[M,V]=(0,l.useState)(""),[K,X]=(0,l.useState)(0),[H,q]=(0,l.useState)(!1),[J,Q]=(0,l.useState)(!1),[$,ee]=(0,l.useState)(!1),[et,ea]=(0,l.useState)(""),[eo,el]=(0,l.useState)({});(0,c.v9)(e=>e.addToCart);let[er,ec]=(0,l.useState)(""),[en,es]=(0,l.useState)(!1),[ei,ed]=(0,l.useState)(!1),[eu,eg]=(0,l.useState)(!1),[eI,em]=(0,l.useState)(!1),[ep,eC]=(0,l.useState)(""),[eS,eD]=(0,l.useState)(!0),[ef,eh]=(0,l.useState)(""),[ey,eU]=(0,l.useState)(!1),ev=(0,c.v9)(e=>e.proceedToBuy),eG=(0,c.I0)(),eP=(0,i.useRouter)(),{setPaymentInfoSuccessPage:eb}=(0,l.useContext)(r.L);(0,l.useEffect)(()=>{(async()=>{let e=await (0,S.Z)(),t=g.r.defaultSellerID;e&&(null==e?void 0:e.AdminMemberId)&&(t=e.AdminMemberId),(null==e?void 0:e.LogoURL)?eh(e.LogoURL):eh(""),eU(!0),localStorage.setItem("sellerID",t)})()},[]),(0,l.useEffect)(()=>{if(window.localStorage){localStorage.getItem("CustGUID")||eP.push("/");let e=localStorage.getItem("CustGUID");e&&"00000000-0000-0000-0000-000000000000"===e&&eP.push("/")}}),(0,l.useEffect)(()=>{I.Z.getcustomerwalletbalance({}).then(e=>{w(e.WalletBalance),0===e.WalletBalance&&eg(!0)}).catch(e=>{})},[]),(0,l.useEffect)(()=>{p.Z.getCartCommon().then(e=>{e&&e.CartGuid&&""!==e.CartGuid?localStorage.setItem("CartGUID",window.btoa(e.CartGuid)):localStorage.setItem("CartGUID",window.btoa("00000000-0000-0000-0000-000000000000")),U(e.total)}).catch(e=>{})},[]),(0,l.useEffect)(()=>{R(window.atob(localStorage.getItem("CustomerAddressId"))),E(window.atob(localStorage.getItem("SlotID"))),A(window.atob(localStorage.getItem("Instruction"))),Z(localStorage.getItem("FromTime"))},[]),(0,l.useEffect)(()=>{let e=window.btoa(localStorage.getItem("UserFirstName"));h(e),function(){let e=new Date,t="".concat(e.getFullYear(),"-").concat(e.getMonth()+1,"-").concat(e.getDate()," ").concat(e.getHours(),":").concat(e.getMinutes(),":").concat(e.getSeconds());a(t)}()},[]),(0,l.useEffect)(()=>{let e=document.createElement("script");e.src="https://checkout.razorpay.com/v1/checkout.js",e.async=!0,e.onload=()=>{},e.onerror=()=>{},document.body.appendChild(e)},[]);let ex=e=>{eD(!1),setTimeout(()=>{eD(!0)},6e3),p.Z.removeInactiveFromCart().then(t=>{"Success"===t&&p.Z.getCartnew().then(t=>{30===t[0].Total?(em(!0),eC("Sorry! There are no items in the cart which are available in the selected delivery locality."),setTimeout(()=>{em(!1)},3e3)):t[0].Total>0?(console.log("cartReducer==response==",K,v,t[0].Total),K===t[0].Total-t[0].CouponValue?e.detail&&1!==e.detail||("C"===v?(eG((0,m.by)(er)),ej()):"R"===v?(eG((0,m.by)(er)),ew()):"WR"===v?(eG((0,m.by)(er)),ew()):"W"===v&&(eG((0,m.by)(er)),ej())):setTimeout(()=>{em(!1),e.detail&&1!==e.detail||("C"===v?(eG((0,m.by)(er)),ej()):"R"===v?(eG((0,m.by)(er)),ew()):"WR"===v?(eG((0,m.by)(er)),ew()):"W"===v&&(eG((0,m.by)(er)),ej()))},4e3)):(em(!0),eC("Sorry! There are no items in the cart,"),setTimeout(()=>{em(!1),eP.push({pathname:"/"})},4e3))}).catch(e=>{})})};(0,l.useEffect)(()=>{let e=document.createElement("script");e.src="https://checkout.razorpay.com/v1/checkout.js",e.async=!0,document.body.appendChild(e)},[]);let ew=()=>{let e="WR"===v?100*K:100*y;console.log("RemAmount===",K,y,e),console.log("updatedelivery time===",_,T,N),I.Z.initiatetransaction(v).then(a=>{if(a){localStorage.setItem("transactionid",a);let o={currency:g.r.currencyCode,amount:e,key:"rzp_test_VCsnPXPPhGYPJC",secret:"P23u4yFZujPDoFaOr64e70fC",orderId:"",paymentId:"",signature:"",date:t,TransactionGuid:a,errors:"",message:"",status:"",description:"",PaymentMethod:v};I.Z.createOrderid(o).then(o=>{localStorage.setItem("orderID",o);let l=document.createElement("script");l.src="https://checkout.razorpay.com/v1/checkout.js",l.async=!0,l.onload=()=>{},l.onerror=()=>{},document.body.appendChild(l);let r={key:I.f.RAZOR_PAY_KEY,amount:e,currency:g.r.currencyCode,name:"Adibuja",description:"Test Transaction",image:"/images/bot-logo.svg",order_id:o,handler:async function(e){(function(e,a,o,l){console.log("placeorder",{paymentType:P,CustomerAddressId:j,recivedata:a});let r={currency:"INR",signature:e.razorpaySignature,amount:100*K,key:I.f.RAZOR_PAY_KEY,secret:I.f.RAZOR_PAY_SECRET,orderId:l,paymentId:e.razorpayPaymentId,date:t,TransactionGuid:o,errors:"",message:"",status:"",description:"",PaymentMethod:v};F(!0),I.Z.shiprocketCreateOrder(localStorage.getItem("transactionid"),P,j,er).then(e=>{console.log("shiprocketCreateOrder",e);let t=e.split(":")[1].trim();localStorage.setItem("OrderNumber",window.btoa(t)),I.Z.captutreRazorpay(r).then(e=>{console.log("captuure",e),"success"===e?I.Z.razorpayVerifysignature(r).then(e=>{console.log("verify",e),F(!0),e?(I.Z.updateDeliveryslotTime(t,_,T,N),eb({amount:y,paymentmethod:er}),eP.push("/product/checkout/order/paymentsuccess")):((0,u.Am)("Payment failed"),F(!1))}).catch(e=>{}):((0,u.Am)("Something went wrong"),F(!1))}).catch(e=>{})}).catch(e=>{(0,u.Am)("Something went wrong"),F(!1)})})({razorpayPaymentId:e.razorpay_payment_id,razorpayOrderId:e.razorpay_order_id,razorpaySignature:e.razorpay_signature},ev,a,o)},prefill:{name:n,email:localStorage.getItem("UserLastPhone")?localStorage.getItem("Email"):null,contact:"null"!==localStorage.getItem("UserLastPhone")?localStorage.getItem("UserLastPhone"):"9999999999"},notes:{address:"Razorpay Corporate Office"},theme:{color:"#3399cc"}},c=new window.Razorpay(r);c.on("payment.failed",function(e){}),c.open()}).catch(e=>{})}}).catch(e=>{})};function ej(){console.log("CODPaymentsection"),F(!0),I.Z.initiatetransaction(v).then(e=>{e&&(F(!0),I.Z.shiprocketCreateOrder(e,P,j,er).then(e=>{console.log("shiprocketCreateOrder",e);let t=e.split(":")[1].trim();console.log("shiprocketCreateOrder",t),localStorage.setItem("timeslotupdated",JSON.stringify(e)),localStorage.setItem("OrderNumber",window.btoa(t)),I.Z.updateDeliveryslotTime(t,_,T,N),eb({amount:y,paymentmethod:er}),F(!0),eP.push("/product/checkout/order/paymentsuccess")}).catch(e=>{console.log("error:::",e),(0,u.Am)("Something went wrong"),F(!1)}))}).catch(e=>{})}let eR=e=>{!0===en&&y>x?(X(y),es(!en),Y(!0),G("R"),b(4),ec("Card")):!1===en&&y>x?(X(y-x),es(!en),Y(!1),G("WR"),b(4),ec("WR")):!1===en&&y<x?(es(!0),Q(!0),q(!0),Y(!0),W(!1),k(!1),G("W"),b(0),ec("Wallet")):!0===en&&y<x?(es(!1),Q(!1),q(!1),Y(!1),W(!0),G("R"),b(4),ec("Card")):!0===en&&y===x?(es(!1),Q(!1),q(!1),Y(!1),W(!0),G("R"),b(4),ec("Card")):!1===en&&y===x?(es(!0),Q(!0),q(!0),Y(!0),W(!1),k(!1),G("W"),b(0),ec("Wallet")):(es(!en),Q(!1),q(!1),Y(!0),G("R"),b(4),ec("Card"))};(0,l.useEffect)(()=>{x>0&&(y<x&&(es(!0),G("W"),ec("Wallet"),X(y),q(!0),Q(!0)),y===x&&(es(!0),Y(!0),eg(!1),G("W"),ec("Wallet"),X(y),q(!0),Q(!0),W(!1)),y>5e3&&(ed(!0),W(!0),es(!0),Q(!1),q(!0),ee(!0),ea("Cash on Delivery is applicable only for bills up to Rs. 5000/-"),setTimeout(()=>{ee(!1)},3e3))),0===x&&y>5e3&&(console.log("594 walletbalance====="),ee(!0),ea("Cash on Delivery is applicable only for bills up to Rs. 5000/-"),setTimeout(()=>{ee(!1)},3e3))},[y,x]),(0,l.useEffect)(()=>{ei&&y>x&&(q(!0),Q(!1),W(!0),ec("WR"),G("WR"),b(4)),ei&&y<x&&(q(!0),Q(!0),W(!1),G("W"),b(0),ec("Wallet")),ei&&y===x&&(q(!0),Q(!0),W(!1),G("W"),b(0),ec("Wallet"))},[ei]),(0,l.useEffect)(()=>{},[z]),(0,l.useEffect)(()=>{!1===en&&0===x&&y>5e3&&X(y)},[z]),(0,l.useEffect)(()=>{y>0&&(x>0&&y>x&&(es(!0),eg(!1),q(!1),Q(!1),W(!0),ec("WR"),V(4),G("WR"),b(4)),0===x&&!0===eu&&(y>5e3?(eg(!0),W(!0),q(!0)):(eg(!0),W(!0),q(!1)),Q(!1),X(y),b(4),ec("R"),G("R"),V(4)),x>0&&y<x&&(console.log("codcheck",O),eg(!1),k(!1),W(!1),es(!0),G("W"),ec("Wallet"),X(y),q(!0),Q(!0),b(0)))},[y,x,eu]),(0,l.useEffect)(()=>{!0===L&&!0===en&&y<x&&"W"===er?X(y-x):!0===L&&!0===en&&y>x&&"WR"===er&&X(y-x),!1===en&&y>x&&"WR"===er&&X(y-x)},[L,en,er,y,x]);let eT=e=>{!0===ei&&y>x?(V(e.target.value),q(!0),Q(!1),k(!1),eg(!1),W(!0),es(!0),Y(!1),ec("Card"),G("R"),b(4)):0===x?(eg(!0),k(!1),W(!0),V(e.target.value),Q(!1),q(!1),G("R"),b(4),ec("Card")):x>0&&x>y&&y<5e3?(es(!1),q(!1),k(!1),Q(!1),W(!0),G("R"),ec("Card"),b(4)):(V(e.target.value),es(!1),Q(!1),q(!1),W(!0),G("R"),b(4),k(!1),ec("Card"),X(y))},eE=e=>{V(e.target.value),x>0&&x>y&&y<5e3?(console.log("662cod",en,O),q(!1),k(!0),Q(!1),W(!1),G("C"),ec("COD"),b(3)):!0===ei?(console.log("662cod",en,O),q(!0),W(!0),es(!0),k(!1),G("R"),ec("R"),b(4)):x>0&&x<y&&y<5e3?(console.log("662cod",en,O),q(!1),k(!0),Q(!1),W(!1),G("C"),ec("COD"),b(3),es(!1),X(y)):0===x&&y<5e3?(console.log("662cod",en,O),q(!1),k(!0),Q(!1),W(!1),G("C"),ec("COD"),b(3),es(!1),X(y)):!1===en&&y===x?(console.log("handle wallet="),es(!0),Q(!0),q(!1),Y(!1),W(!1),k(!0),G("C"),ec("COD"),b(3),X(y)):!0===en&&y===x&&(console.log("handle wallet="),es(!0),Q(!0),q(!1),Y(!1),W(!1),k(!0),G("C"),ec("COD"),b(3),X(y))};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(D.Z,{}),(0,o.jsx)(u.Ix,{position:"top-right"}),$&&(0,o.jsx)(C.Z,{msg:et}),eI&&(0,o.jsx)(C.Z,{msg:ep}),(0,o.jsx)("div",{className:"login-wrapper pb-35 proceedMainContainer",children:(0,o.jsx)("div",{className:"container-fluid",children:(0,o.jsx)("div",{className:"row",children:(0,o.jsx)("div",{className:"col-12 col-sm-12 col-md-12 col-lg-12",children:(0,o.jsxs)("main",{className:"site-main",id:"primary",children:[(0,o.jsxs)("div",{className:"user-login proceedtobuyStatusbar",children:[(0,o.jsx)("div",{className:"row",children:(0,o.jsx)("div",{className:"col-12 col-sm-12 col-md-12",children:(0,o.jsx)("div",{className:"section-title text-center",children:(0,o.jsx)("p",{align:"center",style:{padding:"10px 0px"},children:(0,o.jsx)(s(),{href:"/",children:ey?(0,o.jsx)("img",{referrerPolicy:"no-referrer",alt:"brand-logo",src:"".concat(ef||"/assets1/img/icon/adibuja-logo.svg"),style:{paddingLeft:"23px"},width:"198px",height:"42px"}):""})})})})}),(0,o.jsx)(d.default,{barStyle:"solid",steps:[{title:"Sign in",href:"/login/"},{title:"Shopping Cart",href:"/cart/"},{title:"Address Delivery Slot",href:"/productprocced/checkout"},{title:"Payment & Order Placed"}],activeStep:4,activeColor:"#f07100",completeColor:"#f07100"})]}),!0===B?(0,o.jsx)("div",{className:"row",style:{zIndex:1},children:(0,o.jsx)("div",{className:"col-lg-12 text-center mt-25 mb-25",children:(0,o.jsx)("img",{src:"/images/adibuja-logo-animation.gif",alt:"",style:{justifySelf:"center",width:"80px",height:"80px"}})})}):(0,o.jsx)("div",{className:"mainbodycontent",children:(0,o.jsx)("div",{className:"checkout-wrapper pt-10 pb-70 checkout-wrapper-container",children:(0,o.jsx)("div",{className:"container",children:(0,o.jsx)("div",{className:"row",children:(0,o.jsx)("div",{className:"col-12 col-sm-12 col-md-12 col-lg-12",children:(0,o.jsx)("main",{id:"primary",className:"site-main",children:(0,o.jsx)("div",{className:"user-actions-area",children:(0,o.jsx)("div",{className:"row",children:(0,o.jsxs)("div",{className:"col-12 col-sm-12 col-md-12 col-lg-12",children:[B?(0,o.jsx)("div",{className:"row",style:{zIndex:1},children:(0,o.jsx)("div",{className:"col-lg-12 text-center mt-25 mb-25",children:(0,o.jsx)("img",{src:"/images/adibuja-logo-animation.gif",alt:"",style:{justifySelf:"center",width:"80px",height:"80px"}})})}):null,(0,o.jsx)("div",{className:"checkout-area",children:(0,o.jsx)("div",{className:"row",children:(0,o.jsx)("div",{id:"divPayment",className:"col-12 col-sm-12 col-md-12 col-lg-12",children:(0,o.jsxs)("div",{id:"payment_stage",className:"checkout-form",children:[(0,o.jsxs)("div",{className:"section-title left-aligned",children:[(0,o.jsxs)("h3",{style:{textTransform:"none"},children:["Amount to pay: ",(0,o.jsxs)("span",{id:"final_amount",children:[" ₹",y]})]}),(0,o.jsx)("br",{})]}),(0,o.jsx)("div",{className:"col-lg-12 checkoutPadding",children:(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:"custom-checkbox",style:{marginTop:"10px",opacity:O||!0===eu?.2:1},children:(0,o.jsxs)("label",{className:"wall_lab_tx",htmlFor:"wallet",style:{cursor:O||!0===eu?"not-allowed":"pointer"},children:[(0,o.jsx)("input",{type:"checkbox",onChange:e=>eR(e),name:"paymentmodewallet",id:"wallet",disabled:!!O||0===x,checked:!!en,value:"W"}),"Wallet Balance (₹",x.toFixed(2),")",(0,o.jsx)("br",{})]})}),(0,o.jsx)("div",{className:"divwalletnote",children:"NOTE : Wallet Balance will be applicable on Pay Online only."}),(0,o.jsxs)("div",{id:"divPay",children:[(0,o.jsx)("div",{className:"custom-radio cod_radio",style:{opacity:J?.2:1},children:(0,o.jsxs)("label",{className:"paymentoptionctr",children:[(0,o.jsxs)("b",{children:[" Pay Online",(0,o.jsx)("br",{}),"(Debit / Credit Card, UPI, Net Banking etc.)"]}),(0,o.jsx)("input",{type:"radio",name:"paymentmode",checked:L,onChange:e=>eT(e),id:"razorpay",value:"4"}),(0,o.jsx)("span",{className:J?null:"checkmark"})]})}),(0,o.jsx)("div",{className:"custom-radio cod_radio",style:{opacity:H?.2:1},children:(0,o.jsxs)("label",{className:"paymentoptionctr",children:[(0,o.jsx)("b",{children:"Cash On Delivery"}),(0,o.jsx)("input",{type:"radio",checked:O,onChange:e=>eE(e),name:"paymentmode",id:"cod",value:"3"}),(0,o.jsx)("span",{className:H?null:"checkmark"})]})})]})]})}),(0,o.jsxs)("div",{className:"col-lg-12 amt_btn_rW checkoutAmount",children:[(0,o.jsx)("div",{className:"order-1 w-50",children:(0,o.jsx)("input",{onClick:()=>eP.back(),style:{width:"100%"},type:"button",id:"show",className:"btn btn-secondary ",value:"<< Back"})}),(0,o.jsxs)("div",{className:"order-lg-last w-50",children:[(0,o.jsx)("input",{disabled:!eS||!0!==eS,onClick:e=>ex(e),style:{width:"100%",fontWeight:"bolder",height:"36px"},type:"button",id:"frmsubmit",name:"paymentsubmitbtn",className:"btn btn-success save razorpaybtn btnproceedtobuy",value:"Place Your Order ( ₹".concat(parseFloat(K).toFixed(2),")")}),(0,o.jsx)("div",{id:"payment_message"})]})]})]})})})})]})})})})})})})})})]})})})})}),(0,o.jsx)(f.Z,{})]})}t.default=h},63959:function(){},24087:function(){},58788:function(){},20879:function(){},96962:function(){},31684:function(){}},function(e){e.O(0,[1664,6494,1862,7467,8055,6852,3403,9793,9774,2888,179],function(){return e(e.s=55405)}),_N_E=e.O()}]);