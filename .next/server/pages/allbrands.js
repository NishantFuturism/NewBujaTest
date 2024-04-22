(() => {
var exports = {};
exports.id = 7874;
exports.ids = [7874];
exports.modules = {

/***/ 7833:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2Fallbrands_preferredRegion_absolutePagePath_private_next_pages_2Fallbrands_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_),
  getServerSideProps: () => (/* binding */ next_route_loaderpage_2Fallbrands_preferredRegion_absolutePagePath_private_next_pages_2Fallbrands_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_getServerSideProps),
  getStaticPaths: () => (/* binding */ getStaticPaths),
  getStaticProps: () => (/* binding */ getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./src/pages/allbrands.js
var allbrands_namespaceObject = {};
__webpack_require__.r(allbrands_namespaceObject);
__webpack_require__.d(allbrands_namespaceObject, {
  "default": () => (allbrands),
  getServerSideProps: () => (getServerSideProps)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(3185);
var module_default = /*#__PURE__*/__webpack_require__.n(pages_module);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7182);
// EXTERNAL MODULE: ./src/pages/_document.js
var _document = __webpack_require__(9987);
// EXTERNAL MODULE: ./src/pages/_app.js + 2 modules
var _app = __webpack_require__(1717);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(1187);
// EXTERNAL MODULE: ./src/containers/MainPage/api/homeServices.js
var homeServices = __webpack_require__(4171);
// EXTERNAL MODULE: ./src/components/Header/index.js + 22 modules
var Header = __webpack_require__(3497);
// EXTERNAL MODULE: ./src/components/Footer/footer.js + 5 modules
var footer = __webpack_require__(8371);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__(8819);
// EXTERNAL MODULE: ./src/containers/App/constants.js
var constants = __webpack_require__(1824);
// EXTERNAL MODULE: ./src/containers/MainPage/api/apiServices.js
var apiServices = __webpack_require__(4287);
// EXTERNAL MODULE: ./src/utils/getSellerDetails.js
var getSellerDetails = __webpack_require__(5177);
// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(6734);
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);
;// CONCATENATED MODULE: ./src/pages/allbrands.js












function ViewAllBrand({ allBrandSSR, numberOfBrands, topMenuData, footerPagesLinks, footerCategoryLinks, sellerDetailsFromDomain }) {
    const [brandList, setBrandList] = (0,external_react_.useState)(allBrandSSR ? allBrandSSR : []);
    const [noOfBrands, setNoOfBrands] = (0,external_react_.useState)(numberOfBrands ? numberOfBrands : []);
    (0,external_react_.useEffect)(()=>{
        if (sellerDetailsFromDomain && sellerDetailsFromDomain?.AdminMemberId && sellerDetailsFromDomain?.AdminMemberId !== null) {
            localStorage.setItem("sellerID", sellerDetailsFromDomain?.AdminMemberId);
        }
        homeServices/* default */.Z.getBrandList(1, 1000).then((response)=>{
            setBrandList(response.Data);
            setNoOfBrands(response.TotalNoOfPages);
        });
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(external_react_toastify_.ToastContainer, {
                position: "top-right"
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Header/* default */.Z, {
                sellerDetailsFromDomain: sellerDetailsFromDomain,
                topMenuData: topMenuData
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "main-wrapper view-all-brands",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "container-fluid",
                    children: [
                        noOfBrands && noOfBrands !== "" ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("h1", {
                            className: "brand-item-heading",
                            children: [
                                "Shop All Brands (",
                                noOfBrands,
                                ")"
                            ]
                        }) : /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-lg-12 text-center",
                            children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                src: "/images/adibuja-logo-animation.gif",
                                alt: "",
                                style: {
                                    justifySelf: "center",
                                    width: "80px",
                                    height: "80px"
                                }
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "row",
                            children: brandList.map((data)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-lg-2 col-sm-6 col-xs-6 col-6 brand-item-detail-container",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "brand-item-detail",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                            href: `/brands/${data.PageUrl}`,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                    referrerpolicy: "no-referrer",
                                                    src: data.Thumbnail,
                                                    alt: data.PageUrl
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    style: {
                                                        display: "block"
                                                    },
                                                    children: data.Name
                                                })
                                            ]
                                        })
                                    })
                                }))
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(footer/* default */.Z, {
                footerPagesLinks: footerPagesLinks,
                footerCategoryLinks: footerCategoryLinks,
                newsletterdisplay: "no"
            })
        ]
    });
}
/* harmony default export */ const allbrands = (ViewAllBrand);
async function getServerSideProps(context) {
    const currentUrl = context?.req?.headers?.host || "";
    const sellerDetailsFromDomain = await (0,getSellerDetails/* default */.Z)(currentUrl);
    let sellerIdMain = homeServices/* ConstantsValues */.r.defaultSellerID;
    if (sellerDetailsFromDomain && sellerDetailsFromDomain.AdminMemberId && sellerDetailsFromDomain.AdminMemberId !== "") {
        sellerIdMain = sellerDetailsFromDomain.AdminMemberId;
    }
    const topMenuData = await fetchTopMenuData(sellerIdMain);
    const footerPagesLinks = await fetchFooterPagesLinks(sellerIdMain);
    const footerCategoryLinks = await fetchFooterCategoryLinks(sellerIdMain);
    const brands = await getAllBrands(sellerIdMain);
    return {
        props: {
            topMenuData: topMenuData,
            footerPagesLinks: footerPagesLinks,
            footerCategoryLinks: footerCategoryLinks,
            allBrandSSR: brands.Data,
            numberOfBrands: brands.TotalNoOfPages,
            sellerDetailsFromDomain: sellerDetailsFromDomain
        }
    };
}
const getAllBrands = (sellerIdMain)=>{
    const IsgetAll = "1";
    const ClientId = 1;
    const url = `${constants/* default */.ZP.urls.baseUrl}${constants/* default */.ZP.endPoints.BrandList}ClientId=${ClientId}&IsgetAll=${IsgetAll}&displayAllBrands=${1}&PageNumber=${1}&PageSize=${1000}&sortby${"POP"}&sellerid=${sellerIdMain}`;
    // const url = `https://productionapi.adibuja.com/api/v1/getBrandListForReact?clientId=1&IsgetAll=1&displayAllBrands=1&PageNumber=1&PageSize=9&sortby=MOD`
    return (0,apiServices/* httpRequest */.c)(url, "GET");
};
function fetchTopMenuData(sellerIdMain) {
    // const url = `${Constants.urls.baseUrl}${Constants.endPoints.MegaMainMenu}ClientId=1&languageId=2&IsForReact=1`;
    const url = `${constants/* default */.ZP.urls.baseUrl}${constants/* default */.ZP.endPoints.MultiMenu}ClientId=1&languageId=2&IsForReact=1&sellerid=${sellerIdMain}`;
    return (0,apiServices/* httpRequest */.c)(url, "GET");
}
function fetchFooterCategoryLinks(sellerIdMain) {
    const url = `${constants/* default */.ZP.urls.baseUrl}${constants/* default */.ZP.endPoints.MegaMainMenu}ClientId=1&languageId=2&IsForReact=1&sellerid=${sellerIdMain}`;
    return (0,apiServices/* httpRequest */.c)(url, "GET");
}
function fetchFooterPagesLinks(sellerIdMain) {
    let pagename = "";
    const loginStatus = external_js_cookie_default().get("customer-login-status");
    if (sellerIdMain === "0") {
        if (loginStatus) {
            pagename = loginStatus;
        } else {
            pagename = "react-guest";
        }
    } else {
        if (loginStatus) {
            pagename = "react-seller-auth";
        } else {
            pagename = "react-seller-guest";
        }
    }
    //const pagename = localStorage.getItem('CustGUID') === null ? 'react-guest' : 'react-auth'
    const url = `${constants/* default */.ZP.urls.baseUrl}${constants/* default */.ZP.endPoints.footer}pagename=${pagename}&cid=1&languageId=2&sellerid=${sellerIdMain}`;
    return (0,apiServices/* httpRequest */.c)(url, "GET");
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2Fallbrands&preferredRegion=&absolutePagePath=private-next-pages%2Fallbrands.js&absoluteAppPath=private-next-pages%2F_app.js&absoluteDocumentPath=private-next-pages%2F_document.js&middlewareConfigBase64=e30%3D!

        // Next.js Route Loader
        
        

        // Import the app and document modules.
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2Fallbrands_preferredRegion_absolutePagePath_private_next_pages_2Fallbrands_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(allbrands_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(allbrands_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(allbrands_namespaceObject, "getStaticPaths")
        const next_route_loaderpage_2Fallbrands_preferredRegion_absolutePagePath_private_next_pages_2Fallbrands_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_getServerSideProps = (0,helpers/* hoist */.l)(allbrands_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(allbrands_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(allbrands_namespaceObject, "reportWebVitals")
        

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(allbrands_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(allbrands_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(allbrands_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(allbrands_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(allbrands_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/allbrands","pathname":"/allbrands","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({
          ...options,
          components: {
            App: _app["default"],
            Document: _document["default"],
          },
          userland: allbrands_namespaceObject,
        })
        
        
    

/***/ }),

/***/ 8819:
/***/ (() => {



/***/ }),

/***/ 6061:
/***/ (() => {



/***/ }),

/***/ 2372:
/***/ (() => {



/***/ }),

/***/ 6466:
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ 7197:
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ 6999:
/***/ ((module) => {

"use strict";
module.exports = require("@react-oauth/google");

/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 7318:
/***/ ((module) => {

"use strict";
module.exports = require("hoist-non-react-statics");

/***/ }),

/***/ 7133:
/***/ ((module) => {

"use strict";
module.exports = require("immer");

/***/ }),

/***/ 7644:
/***/ ((module) => {

"use strict";
module.exports = require("invariant");

/***/ }),

/***/ 6734:
/***/ ((module) => {

"use strict";
module.exports = require("js-cookie");

/***/ }),

/***/ 352:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/conformsTo");

/***/ }),

/***/ 9699:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isEmpty");

/***/ }),

/***/ 5716:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isFunction");

/***/ }),

/***/ 5795:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isObject");

/***/ }),

/***/ 7026:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isString");

/***/ }),

/***/ 3076:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 4140:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 5132:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/get-img-props.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 580:
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 1937:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/Button");

/***/ }),

/***/ 5226:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/Form");

/***/ }),

/***/ 9306:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/Modal");

/***/ }),

/***/ 9070:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/NavDropdown");

/***/ }),

/***/ 8907:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/Row");

/***/ }),

/***/ 4795:
/***/ ((module) => {

"use strict";
module.exports = require("react-chatbot-kit");

/***/ }),

/***/ 5515:
/***/ ((module) => {

"use strict";
module.exports = require("react-cookie");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 6652:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/bi");

/***/ }),

/***/ 2750:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fi");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 4661:
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom");

/***/ }),

/***/ 1187:
/***/ ((module) => {

"use strict";
module.exports = require("react-toastify");

/***/ }),

/***/ 6695:
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ }),

/***/ 6537:
/***/ ((module) => {

"use strict";
module.exports = require("redux-saga");

/***/ }),

/***/ 6477:
/***/ ((module) => {

"use strict";
module.exports = require("redux-saga/effects");

/***/ }),

/***/ 6153:
/***/ ((module) => {

"use strict";
module.exports = require("universal-cookie");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [6505,1664,8719,5675,3451,3190,4834,6920,8698,8659,7062,7895,6452,3497,8371], () => (__webpack_exec__(7833)));
module.exports = __webpack_exports__;

})();