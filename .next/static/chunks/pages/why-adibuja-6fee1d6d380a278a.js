(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4878],{56457:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/why-adibuja",function(){return t(74014)}])},19033:function(e,n,t){"use strict";var i=t(85893);t(67294),n.Z=function(e){return(0,i.jsx)("div",{className:"breadcrumb-area",children:(0,i.jsx)("div",{className:"container-fluid",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-12",children:(0,i.jsx)("div",{className:"breadcrumb-wrap",children:(0,i.jsx)("nav",{"aria-label":"breadcrumb",children:(0,i.jsxs)("ul",{className:"breadcrumb",children:[(0,i.jsx)("li",{className:"breadcrumb-item",children:(0,i.jsx)("a",{href:"/",children:"Home"})}),e.activepage&&(0,i.jsx)("li",{className:"breadcrumb-item",children:e.activepage})]})})})})})})})}},64359:function(e,n,t){"use strict";var i=t(85893),s=t(67294);n.Z=e=>{let[n,t]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{t(!0)},[]),(0,i.jsx)(i.Fragment,{children:n&&(0,i.jsxs)(i.Fragment,{children:[(null==e?void 0:e.isGlobal)&&(0,i.jsx)("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",background:"rgba(0, 0, 0, 0.2)",zIndex:"99999999999999"}}),(0,i.jsx)("div",{style:(null==e?void 0:e.isGlobal)?{position:"fixed",top:"50%",left:"50%",zIndex:"9999999999999",transform:"translate(-50%, -50%)"}:{minHeight:"100vh"},className:"container d-flex justify-content-center align-items-center h-100 category-loader",children:(0,i.jsx)("img",{src:"/images/adibuja-logo-animation.gif",alt:"",style:{justifySelf:"center",width:"80px",height:"80px"}})})]})})}},74014:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSP:function(){return d}});var i=t(85893),s=t(67294);t(14416),t(41664),t(22920),t(78088);var r=t(11560),a=t(68350),c=t(19033),o=t(9008),l=t.n(o);t(11163),t(11401),t(97352);var d=!0;n.default=e=>{let{whyAdibujaData:n,sellerDetailsFromDomain:t}=e,[o,d]=(0,s.useState)(n),[u,f]=(0,s.useState)(""),[m,p]=(0,s.useState)([]);(0,s.useEffect)(()=>{r.Z.getFooter().then(e=>{f(e)}),r.Z.getMegamainmenu().then(e=>{p(e)})},[]);let h=m.find(e=>99===e.WebPageId);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(l(),{children:[(0,i.jsx)("title",{children:null==n?void 0:n.PageTitle}),(0,i.jsx)("meta",{name:"description",content:null==n?void 0:n.MetaDescription}),(0,i.jsx)("meta",{name:"keywords",content:null==n?void 0:n.MetaKeyword}),(0,i.jsx)("meta",{property:"og:title",content:null==n?void 0:n.PageTitle}),(0,i.jsx)("meta",{property:"og:url",content:"/".concat(null==n?void 0:n.PageUrl)}),(0,i.jsx)("meta",{property:"og:description",content:null==n?void 0:n.MetaDescription})]}),(0,i.jsx)(a.Z,{sellerDetailsFromDomain:t}),(0,i.jsx)("div",{className:"subfooterBreadcrumb",children:(0,i.jsx)(c.Z,{activepage:"Why Adibuja"})}),(0,i.jsx)("div",{className:"footerContent",children:""!==o&&void 0!==o&&o.Description&&""!==o.Description?(0,i.jsx)("span",{dangerouslySetInnerHTML:{__html:o.Description}}):(0,i.jsx)("div",{className:"container-fluid",children:(0,i.jsx)("h3",{style:{textAlign:"center"},children:"Somethign went wrong!"})})}),(0,i.jsxs)("footer",{children:[(0,i.jsx)("br",{}),(0,i.jsx)("div",{className:"container-fluid",children:(0,i.jsx)("div",{className:" footercategory col-lg-12 col-md-12 col-sm-12 col-xs-12 footersocial",children:(0,i.jsx)("div",{className:"indus",id:"links",children:h&&h.SubMenus.map(e=>(0,i.jsxs)("div",{className:"flinksholder",children:[(0,i.jsxs)("span",{style:{fontSize:"14px",fontWeight:"bold",marginTop:"15px"},children:[e.DisplayName," :"]}),e.SubSubMenus.map(e=>(0,i.jsx)("a",{href:"/".concat(e.PageUrl),"data-url":e.PageUrl,className:"flinks",children:e.DisplayName}))]},e.SubSubMenus.DisplayName))})})}),(0,i.jsx)("div",{children:""!==u&&void 0!==u&&u.Description&&(0,i.jsx)("span",{dangerouslySetInnerHTML:{__html:u.Description}})})]})]})}},78088:function(){},24087:function(){},58788:function(){},20879:function(){},96962:function(){},31684:function(){},97352:function(){},11401:function(){},13125:function(){},92703:function(e,n,t){"use strict";var i=t(50414);function s(){}function r(){}r.resetWarningCache=s,e.exports=function(){function e(e,n,t,s,r,a){if(a!==i){var c=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:r,resetWarningCache:s};return t.PropTypes=t,t}},45697:function(e,n,t){e.exports=t(92703)()},50414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(e){e.O(0,[8523,1664,112,5675,9819,1790,1235,7700,2680,7467,8055,6852,3403,9793,6122,2293,8350,3271,9774,2888,179],function(){return e(e.s=56457)}),_N_E=e.O()}]);