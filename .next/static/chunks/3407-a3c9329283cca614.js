(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3407],{63407:function(e,a,t){"use strict";t.r(a),t.d(a,{DealdayProductOriginal:function(){return u},default:function(){return m}});var s=t(85893),i=t(67294),d=t(99035);t(89444);var l=t(14416);t(4605),t(42657);var n=t(9954);t(22222),t(12042),t(87219),t(66699);var c=t(11560),o=t(99093);t(86893),t(47516),t(42923);var r=t(32725),h=t(11163);function u(e){(0,h.useRouter)();let[a,t]=(0,r._)("pincodevalue",null),[u,m]=(0,i.useState)(1),[w,p]=(0,i.useState)(0),[f,v]=(0,i.useState)(1),[x,g]=(0,i.useState)(e.dealOfDayProducts&&e.dealOfDayProducts.Data||[]),[y,S]=(0,i.useState)([]),[N,j]=(0,i.useState)({}),[D,P]=(0,i.useState)(0),[E,T]=(0,i.useState)(!1),[b,k]=(0,i.useState)([]),[O,_]=(0,i.useState)(1),[C,M]=(0,i.useState)(!1),[F,Z]=(0,i.useState)(""),I=(0,l.v9)(e=>e.homeScreen);(0,l.v9)(e=>e.dealdayProduct);let L=(0,l.v9)(e=>e.dealdayProduct);(0,l.v9)(e=>e.dealdayProduct);let z=(0,l.v9)(e=>e.loadProducts),A=(0,l.v9)(e=>e.addToCart),G=(0,l.v9)(e=>e.viewCart),K=(0,l.I0)(),Q=()=>{let e=0;return window.matchMedia("(min-width:2001px) and (max-width: 2500px)").matches&&(e=1),window.matchMedia("(min-width:1281px) and (max-width: 2000px)").matches&&(e=1),window.matchMedia("(min-width:997px) and (max-width:1280px)").matches&&(e=1),window.matchMedia("(min-width:465px) and (max-width: 996px)").matches&&(e=1),window.matchMedia("(min-width:0px) and (max-width: 464px)").matches&&(e=1),e};return(0,i.useEffect)(()=>{void 0!==z&&T(z.notify)},[z]),(0,i.useEffect)(()=>{x&&x.length>9&&D>x.length-9&&x.length-D<5&&P(x.length-Q()-1)},[D]),(0,i.useEffect)(()=>{var a;(null===(a=e.dealOfDayProducts)||void 0===a?void 0:a.Data)||(p(w+1),c.Z.getDealofdayWithPage(u,9).then(e=>{e&&e.Data&&(g(e.Data),_(e.Data.TotalNoOfPages))}))},[]),(0,i.useEffect)(()=>{!0===C&&void 0!==L&&(g([...x,...L.dealData]),S(L.shoppingDetails))},[L,C,a]),(0,i.useEffect)(()=>{void 0!==y&&y.forEach(e=>{(function(e,a){let t={};t["".concat(e)]=a,j({...N,...t})})(e.SKUFilterPriceId,e.Quantity)})},[y]),(0,i.useEffect)(()=>{w>0&&f<O&&""!==a&&(K({type:"app/DealdayProduct/NEXT_PAGE",pageNum:u,pageSize:9}),v(f+1))},[u,a]),(0,i.useEffect)(()=>{I&&!0===I.loading&&Z(!0)},[I]),(0,i.useEffect)(()=>{o.Z.getShoppingcartDetails().then(e=>{k(e)})},[A,G]),(0,s.jsx)(s.Fragment,{children:x&&void 0!==x&&x.length>0?(0,s.jsx)("div",{className:"container-fluid homescreenproductsection crossSellingParent",children:(0,s.jsx)("div",{className:"row",children:(0,s.jsxs)("div",{className:"col-12 crossSellingChild ",children:[(0,s.jsx)("div",{className:"section-title product-spacing hm-11 mb-0",style:{paddingLeft:"15px"},children:(0,s.jsx)("h3",{children:(0,s.jsx)("span",{className:"dealofday",children:"Deal Of The Day"})})}),(0,s.jsx)(d.Z,{breakPoints:[{width:1,itemsToShow:1},{width:475,itemsToShow:2},{width:651,itemsToShow:3},{width:995,itemsToShow:4},{width:1280,itemsToShow:4}],itemsToShow:4,itemsToScroll:1,pagination:!1,showEmptySlots:!0,children:void 0!==x&&(x.slice(D,D+x.length)||[]).map((e,a)=>0!==e.FiltersList.length?(0,s.jsx)("div",{className:"tab-content",style:{margin:"15px"},children:(0,s.jsx)("div",{className:"tab-pane fade show active",id:"brand-one",style:{display:"block"},children:(0,s.jsx)("div",{className:"product-gallary-wrapper",children:(0,s.jsx)("div",{className:"product-gallary-active owl-carousel owl-arrow-style sale-nav owl-theme owl-loaded",children:(0,s.jsx)("div",{className:"owl-stage-outer",children:(0,s.jsx)("div",{className:"owl-stage",style:{transform:" translate3d(0px, 0px, 0px)",transition:"all 0s ease 0s"},children:(0,s.jsx)("div",{className:"active",children:(0,s.jsx)(n.y,{source:"dealofday",data:e,shppingcart:b,index:a,notify:E,skulisting:!0})})})})})})})},a):null)})]})})}):null})}var m=u},12042:function(){}}]);