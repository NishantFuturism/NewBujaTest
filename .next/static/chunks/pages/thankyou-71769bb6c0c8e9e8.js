(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1225],{66465:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/thankyou",function(){return t(77178)}])},64359:function(e,n,t){"use strict";var a=t(85893),s=t(67294);n.Z=e=>{let[n,t]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{t(!0)},[]),(0,a.jsx)(a.Fragment,{children:n&&(0,a.jsxs)(a.Fragment,{children:[(null==e?void 0:e.isGlobal)&&(0,a.jsx)("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",background:"rgba(0, 0, 0, 0.2)",zIndex:"99999999999999"}}),(0,a.jsx)("div",{style:(null==e?void 0:e.isGlobal)?{position:"fixed",top:"50%",left:"50%",zIndex:"9999999999999",transform:"translate(-50%, -50%)"}:{minHeight:"100vh"},className:"container d-flex justify-content-center align-items-center h-100 category-loader",children:(0,a.jsx)("img",{src:"/images/adibuja-logo-animation.gif",alt:"",style:{justifySelf:"center",width:"80px",height:"80px"}})})]})})}},17137:function(e,n,t){"use strict";t.d(n,{E_:function(){return a},ND:function(){return s},NU:function(){return r},XA:function(){return c}});let a="app/FooterContact/SAVE_CONTACT",s="app/FooterContact/CONTACT_S_DATA",r="app/FooterContact/SHOW_CONTACT_POPUP",c="send-message-loading"},21177:function(e,n,t){"use strict";var a=t(87219),s=t(17137);let r={IsMsgbar:!1,contactusinfo:"",savecpopup:"",isLoading:!1};n.Z=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,n=arguments.length>1?arguments[1]:void 0;return(0,a.ZP)(e,e=>{switch(n.type){case s.ND:e.IsMsgbar=!0,e.contactusinfo=n.contactinfo;break;case s.NU:e.savecpopup=n.popupsave;break;case s.XA:e.isLoading=n.loading}})}},9894:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var a=t(66699),s=t(91755),r=t(20242),c={savecontatinformation:function(e){let n="".concat(s.ZP.urls.baseUrl).concat(s.ZP.endPoints.savecontatinformation);return(0,r.c)(n,"POST",e)}},i=t(17137);function*o(){yield(0,a.ib)(i.E_,l)}function*l(e){console.log("sagacontact..",e.savecdata);try{yield(0,a.gz)({type:i.XA,loading:!0});let n=yield(0,a.RE)(c.savecontatinformation,e.savecdata);yield(0,a.gz)({type:i.ND,contactinfo:n})}catch(e){console.log("Error in contact us:",e)}finally{yield(0,a.gz)({type:i.XA,loading:!1})}}},77178:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return b}});var a=t(85893),s=t(67294),r=t(4605),c=t(42657),i=t(21177),o=t(9894),l=t(41664),u=t.n(l),d=function(e){return(0,a.jsx)("div",{className:"breadcrumb-area",children:(0,a.jsx)("div",{className:"container-fluid",children:(0,a.jsx)("div",{className:"row",children:(0,a.jsx)("div",{className:"col-12",children:(0,a.jsx)("div",{className:"breadcrumb-wrap",children:(0,a.jsx)("nav",{"aria-label":"breadcrumb",children:(0,a.jsxs)("ul",{className:"breadcrumb",children:[(0,a.jsx)("li",{className:"breadcrumb-item",children:(0,a.jsx)("a",{href:"/",children:"Home"})}),e.thankyou&&(0,a.jsx)("li",{className:"breadcrumb-item",children:(0,a.jsx)(u(),{href:"/thankyou",children:e.thankyou})}),(0,a.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:e.activepage})]})})})})})})})},f=t(57596),h=t(68350),m=t(11163),p=t(88807),x=t(11560),b=function(){(0,r.v)({key:"thankyou",reducer:i.Z}),(0,c.h)({key:"thankyou",saga:o.Z});let e=(0,m.useRouter)(),[n,t]=(0,s.useState)([]);(0,s.useEffect)(()=>{(async()=>{let e=await (0,p.Z)(),n=x.r.defaultSellerID;e&&e.AdminMemberId&&""!==e.AdminMemberId&&(n=e.AdminMemberId,t(e)),localStorage.setItem("sellerID",n)})()},[]);let l=n=>{n.preventDefault(),e.push({pathname:"/contact-us"})};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(h.Z,{}),(0,a.jsx)(d,{activepage:"Thank you"}),(0,a.jsx)("div",{className:"login-wrapper pb-35",style:{paddingTop:20},children:(0,a.jsx)("div",{className:"container-fluid",children:(0,a.jsx)("div",{className:"row",children:(0,a.jsx)("div",{className:"col-12 col-sm-12 col-md-12 col-lg-12",children:(0,a.jsx)("main",{className:"site-main",id:"primary",children:(0,a.jsx)("div",{className:"user-login",children:(0,a.jsx)("div",{className:"row",children:(0,a.jsx)("div",{className:"col-12 col-sm-12 col-md-12 col-lg-8 col-xl-6 offset-lg-2 offset-xl-3",children:(0,a.jsxs)("div",{className:"login-form error-page text-center suces",style:{padding:"30px"},children:[(0,a.jsxs)("h4",{className:"thank-you-title pb-20",children:[(0,a.jsx)("br",{})," ",(0,a.jsx)("b",{children:"Thank You! Your form has been submitted successfully."}),(0,a.jsx)("br",{}),(0,a.jsx)("span",{children:" Our customer care representative will get in touch with you shortly."})]}),(0,a.jsx)("span",{className:"spanthankyouspace "}),(0,a.jsx)(u(),{href:"",onClick:e=>l(e),children:(0,a.jsxs)("button",{type:"button",className:"btn-cart  btn-secondary btn-back-black mb-15",id:"btnacnt",style:{color:"#fff !important"},children:[(0,a.jsx)("i",{className:"fa fa-phone",children:" "}),"\xa0 Contact Us"]})}),(0,a.jsxs)("p",{className:"text-center",children:["Please feel free to call our customer care representative at",(0,a.jsx)("br",{}),(0,a.jsx)("strong",{children:(0,a.jsxs)("a",{href:"tel:+91-7058702045",children:[(0,a.jsx)("i",{className:"fa fa-volume-control-phone"})," +91-7058702045"]})}),(0,a.jsx)("br",{})]}),(0,a.jsx)("span",{className:"spanthankyouspace ",children:"\xa0"}),(0,a.jsxs)("p",{className:"text-center",children:["Our knowledgeable customer care representative is available Monday to Friday – 9:00 am to 6:00 Pm or email us at",(0,a.jsx)("br",{}),(0,a.jsx)("strong",{children:(0,a.jsx)(u(),{href:"mailto:contactus@adibuja.com",children:"contactus@adibuja.com"})}),(0,a.jsx)("br",{})]}),(0,a.jsx)(u(),{href:"/",children:(0,a.jsxs)("button",{type:"button",className:"btn-cart  btn-secondary mb-15",id:"btnacnt",children:[(0,a.jsx)("i",{className:"fa fa-home",children:" "})," \xa0 Go To Homepage"]})})]})})})})})})})})}),(0,a.jsx)(f.Z,{})]})}},78088:function(){},24087:function(){},58788:function(){},20879:function(){},96962:function(){},31684:function(){},13125:function(){},92703:function(e,n,t){"use strict";var a=t(50414);function s(){}function r(){}r.resetWarningCache=s,e.exports=function(){function e(e,n,t,s,r,c){if(c!==a){var i=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:r,resetWarningCache:s};return t.PropTypes=t,t}},45697:function(e,n,t){e.exports=t(92703)()},50414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(e){e.O(0,[8523,1664,112,5675,9819,1790,1235,7700,7200,7467,8055,6852,3403,9793,6122,2293,8350,7596,7005,9774,2888,179],function(){return e(e.s=66465)}),_N_E=e.O()}]);