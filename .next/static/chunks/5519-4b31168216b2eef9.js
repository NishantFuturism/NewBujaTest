(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5519],{65519:function(e,s,l){"use strict";l.r(s),l.d(s,{default:function(){return w}});var a=l(85893),o=l(67294),t=l(41664),c=l.n(t),n=l(4605),r=l(42657),i=l(14416);l(20879),l(31684),l(24087);var d=l(22920),m=l(11560);l(55783);var h=l(75408),u=l(91164),g=l(11163),x=l(62944);l(78088),l(32694);var f=l(91755);l(25675);var p=l(88807);function w(){(0,n.v)({key:"login",reducer:h.Z}),(0,r.h)({key:"login",saga:u.Z});let[e,s]=(0,o.useState)(!1),[l,t]=(0,o.useState)(!1),[w,j]=(0,o.useState)(!1),[N,v]=(0,o.useState)(!1),[S,b]=(0,o.useState)(!1),[y,P]=(0,o.useState)(!1),[k,C]=(0,o.useState)(!1),[A,I]=(0,o.useState)(!1),[T,D]=(0,o.useState)(!1),[E,R]=(0,o.useState)(""),[Z,L]=(0,o.useState)("");console.log("cnfpasswordTxt---",Z);let[M,_]=(0,o.useState)(),[F,q]=(0,o.useState)(),[H,O]=(0,o.useState)(!1),[U,B]=(0,o.useState)(""),[G,J]=(0,o.useState)(!0),V=(0,i.v9)(e=>e);console.log("footerData",V),(0,i.I0)();let z=(0,i.v9)(e=>e.login);console.log("loginData",z);let[K,Q]=(0,o.useState)(""),[W,X]=(0,o.useState)(),Y=(0,g.useRouter)();return(0,o.useEffect)(()=>{(async()=>{let e=await (0,p.Z)();console.log("sellerDetailsFromDomain==",e);let s=m.r.defaultSellerID;e&&(null==e?void 0:e.AdminMemberId)&&(s=e.AdminMemberId),(null==e?void 0:e.LogoURL)?Q(e.LogoURL):Q(""),X(!0),localStorage.setItem("sellerID",s)})()},[]),(0,o.useEffect)(()=>{v(!0),J(!0);let{search:e}=location;if(console.log("search--",e),""!==e){let s=e.slice(7,43);q(e.slice(7,43));let l=e.slice(53);console.log("66---",l),console.log("69--",l.indexOf("&"));let a=l.indexOf("&");console.log("71--",a);let o=e.slice(53,53+a);console.log("74-",o),_(o),console.log("spttoken",s,F,o)}},[]),(0,o.useEffect)(()=>{""!==E&&""!==Z&&E!==Z&&(v(!1),J(!0)),""!==E&&""!==Z&&E===Z&&(v(!0),J(!1))},[Z]),(0,o.useEffect)(()=>{E.length>=8&&P(!0);let e=new RegExp(/.*[0-9]+.*/),l=new RegExp(/.*[A-Z]+.*/),a=new RegExp(/.*[^A-Za-z0-9].*/);l.test(E)&&t(!0),a.test(E)&&b(!0),""!==E&&s(!0),e.test(E)&&j(!0),!0===y&&I(!1)},[E]),(0,o.useEffect)(()=>{console.log("loginData--",z),console.log("usernameValue--",M),void 0!==z&&(""!==z.getNewPasswordResponse||void 0!==z.getNewPasswordResponse||null!==z.getNewPasswordResponse)&&z.getNewPasswordResponse===M&&(O(!0),B("Password Set Successfully"),setTimeout(()=>{O(!1),Y.push("/login/form")},3e3))},[z]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d.Ix,{position:"top-right"}),H&&(0,a.jsx)(x.Z,{msg:U}),(0,a.jsx)("div",{className:"login-wrapper pb-35",children:(0,a.jsxs)("div",{className:"container-fluid",children:[(0,a.jsx)("div",{className:"row",children:(0,a.jsx)("div",{className:"col-12 col-sm-12 col-md-12 col-lg-12",children:(0,a.jsx)("div",{className:"section-title text-center",children:(0,a.jsx)("p",{align:"center",style:{padding:"10px,0px"},children:(0,a.jsx)(c(),{href:"/",children:W?(0,a.jsx)("img",{style:{paddingLeft:"23px"},referrerPolicy:"no-referrer",src:"".concat(K||"/assets1/img/icon/adibuja-logo.svg"),width:"198",height:"42",alt:"brand-logo",objectPosition:"center"}):""})})})})}),(0,a.jsx)("div",{className:"row",children:(0,a.jsxs)("div",{className:"col-12 col-sm-12 col-md-12 col-lg-8 col-xl-6 offset-lg-2 offset-xl-3",children:[(0,a.jsx)("div",{className:"section-title text-center",children:(0,a.jsx)("h3",{children:"Set Password?"})}),(0,a.jsxs)("div",{className:"login-form set-password-form",children:[(0,a.jsxs)("div",{className:"form-group row mb-4",children:[(0,a.jsxs)("label",{className:"col-12 col-sm-12 col-md-4 col-form-label",htmlFor:"NewPassword",children:["New Password ",(0,a.jsx)("span",{className:"text-danger",children:"*"})," "]}),(0,a.jsxs)("div",{className:"col-12 col-sm-12 col-md-8",children:[(0,a.jsx)("input",{type:k?"text":"password",className:"form-control",id:"npassword",onClick:function(e){R(e.target.value),I(!0)},onChange:e=>R(e.target.value),placeholder:"New Password ",required:""}),(0,a.jsx)("button",{className:"pass-show-btn mt-0",type:"button",children:(0,a.jsx)("i",{id:"pass-statust",onClick:()=>C(!k),className:"fa ".concat(k?"fa-eye-slash":"fa-eye")})})]}),A&&(0,a.jsxs)("div",{id:"pswd_info1",children:[(0,a.jsx)("h4",{children:"Password must meet the following requirements"}),(0,a.jsxs)("ul",{children:[(0,a.jsxs)("div",{style:{color:"".concat(e?"green":"red")},children:[(0,a.jsx)("i",{className:"fa ".concat(e?"fa-check":"fa-close")}),(0,a.jsxs)("li",{style:{diaplay:"inline"},id:"letter",className:"invalidpswd",children:[" At least ",(0,a.jsx)("strong",{children:"one letter"})]})]}),(0,a.jsxs)("div",{style:{color:"".concat(l?"green":"red")},children:[(0,a.jsx)("i",{className:"fa ".concat(l?"fa-check":"fa-close"),children:" "}),(0,a.jsxs)("li",{id:"capital",className:"invalidpswd",children:["  At least ",(0,a.jsx)("strong",{children:" one capital letter"})]})]}),(0,a.jsxs)("div",{style:{color:"".concat(w?"green":"red")},children:[(0,a.jsx)("i",{className:"fa ".concat(w?"fa-check":"fa-close"),children:" "}),(0,a.jsxs)("li",{id:"number",className:"invalidpswd",children:["  At least ",(0,a.jsx)("strong",{children:" one number"})]})]}),(0,a.jsxs)("div",{style:{color:"".concat(S?"green":"red")},children:[(0,a.jsx)("i",{className:"fa ".concat(S?"fa-check":"fa-close"),children:" "}),(0,a.jsxs)("li",{id:"schar",className:"invalidpswd",children:["  At least ",(0,a.jsx)("strong",{children:" one special character"})]})]}),(0,a.jsxs)("div",{style:{color:"".concat(y?"green":"red")},children:[(0,a.jsx)("i",{className:"fa ".concat(y?"fa-check":"fa-close"),children:" "}),(0,a.jsxs)("li",{id:"length",className:"invalidpswd",children:["  Be at least ",(0,a.jsx)("strong",{children:"8 characters"})]})]})]})]})]}),(0,a.jsxs)("div",{className:"form-group row mb-4",children:[(0,a.jsxs)("label",{className:"col-12 col-sm-12 col-md-4 col-form-label",htmlFor:"ConfirmPassword",children:["Confirm Password ",(0,a.jsx)("span",{className:"text-danger",children:"*"})]}),(0,a.jsxs)("div",{className:"col-12 col-sm-12 col-md-8",children:[(0,a.jsx)("input",{type:T?"text":"password",onClick:function(){Z&&E===Z&&v(!0)},onChange:e=>L(e.target.value),className:"form-control",id:"cnfpassword",placeholder:"Confirm Password ",required:""}),(0,a.jsx)("button",{className:"pass-show-btn mt-0",type:"button",children:(0,a.jsx)("i",{id:"pass-statust",onClick:()=>D(!T),className:"fa ".concat(T?"fa-eye-slash":"fa-eye")})}),!1===N&&(0,a.jsx)("span",{className:"text text-danger field-validation-valid",children:"New Password and Confirm password must be same"})]})]}),(0,a.jsx)("div",{className:"login-box mt-5 text-center",children:(0,a.jsx)("button",{type:"submit",onClick:()=>{console.log("newPasswordAndConfirmPasswordAreSame..",N),console.log("spttoken--",F),console.log("usernameValue--",M),console.log("n1passwordTxt--",E),console.log("cnfpasswordTxt--",Z),fetch("".concat(f.ZP.urls.baseUrl).concat(f.ZP.endPoints.token),{method:"POST",headers:{accept:"application/x-www-form-urlencoded","Content-Type":"application/x-www-form-urlencoded"},body:"username=FCAPICL0100145&password=JHASGjnknkjhIhAjksnjansasasMKLAHNSJHGASB02012121&grant_type=password"}).then(e=>e.json()).then(e=>{e&&localStorage.setItem("generatedtoken",e.access_token),m.Z.NewPasswordApi(F,M,E,Z,!0).then(e=>{e&&1===e.MessageTypeID&&(O(!0),B("Password Set Successfully"),setTimeout(()=>{O(!1),Y.push("/login/form")},3e3)),e&&3===e.MessageTypeID&&(O(!0),B("Password added successfully, Please login again!"),setTimeout(()=>{O(!1),localStorage.clear(),Y.push("/login/form")},3e3)),e&&1===e.MessageTypeID&&(O(!0),B("Password added successfully, Please login again!"),setTimeout(()=>{O(!1),localStorage.clear(),Y.push("/login/form")},3e3))})})},className:"btn btn-secondary mb-4 mt-4",id:"save",disabled:G,children:"Save"})}),(0,a.jsx)("br",{}),(0,a.jsx)("div",{children:(0,a.jsx)("label",{className:"text text-success",id:"SuccessMssg",children:" "})})]})]})})]})})]})}},32694:function(){}}]);