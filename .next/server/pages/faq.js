(() => {
var exports = {};
exports.id = 7746;
exports.ids = [7746];
exports.modules = {

/***/ 9268:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2Ffaq_preferredRegion_absolutePagePath_private_next_pages_2Ffaq_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_),
  getServerSideProps: () => (/* binding */ next_route_loaderpage_2Ffaq_preferredRegion_absolutePagePath_private_next_pages_2Ffaq_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_getServerSideProps),
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

// NAMESPACE OBJECT: ./src/pages/faq.js
var pages_faq_namespaceObject = {};
__webpack_require__.r(pages_faq_namespaceObject);
__webpack_require__.d(pages_faq_namespaceObject, {
  "default": () => (pages_faq),
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
// EXTERNAL MODULE: ./node_modules/@icon/linearicons/linearicons.css
var linearicons = __webpack_require__(3884);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(1187);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__(8819);
// EXTERNAL MODULE: ./src/containers/App/constants.js
var constants = __webpack_require__(1824);
// EXTERNAL MODULE: ./src/containers/MainPage/api/homeServices.js
var homeServices = __webpack_require__(4171);
// EXTERNAL MODULE: ./src/components/Header/index.js + 22 modules
var Header = __webpack_require__(3497);
// EXTERNAL MODULE: ./src/containers/MainPage/api/apiServices.js
var apiServices = __webpack_require__(4287);
// EXTERNAL MODULE: ./src/components/Footer/footer.js + 5 modules
var footer = __webpack_require__(8371);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./src/components/Footer/footerBreadCrumb.js
var footerBreadCrumb = __webpack_require__(7619);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/components/Footer/faq.css
var faq = __webpack_require__(2510);
// EXTERNAL MODULE: ./src/components/Footer/advertise.css
var advertise = __webpack_require__(7866);
// EXTERNAL MODULE: ./src/utils/getSellerDetails.js
var getSellerDetails = __webpack_require__(5177);
;// CONCATENATED MODULE: ./src/pages/faq.js














////import history from '../../utils/history';

// import { Newsletter } from '../../containers/Newsletter/index';



/*const LazyComponent = dynamic(() => import('../components/Footer/Subfooter'), {
    loading: () => <LogoLoader/> , ssr : true // Fallback shown while loading
  });
export default loadable(LazyComponent);*/ const Faq = ({ faqData, sellerDetailsFromDomain })=>{
    const [faqdata, setfaqdata] = (0,external_react_.useState)(faqData);
    const [Anwser, setAnwser] = (0,external_react_.useState)("");
    const [Ftr, setFooter] = (0,external_react_.useState)(faqData);
    const [Ftr1, setFooter1] = (0,external_react_.useState)("");
    const [menu, setMenu] = (0,external_react_.useState)([]);
    const [ID, setID] = (0,external_react_.useState)("");
    const [isActive, setisActive] = (0,external_react_.useState)(true);
    // const [enablecollapse, setenablecollapse] = useState(false)
    (0,external_react_.useEffect)(()=>{
        homeServices/* default */.Z.getFooter().then((response)=>{
            setFooter1(response);
        });
        homeServices/* default */.Z.getMegamainmenu().then((response)=>{
            setMenu(response);
        });
    }, []);
    function handleAnswer(id, anwser) {
        console.log("FAQId", id, anwser);
        setAnwser(anwser);
        setID(id);
        setisActive(!isActive);
    // setenablecollapse(!enablecollapse)
    }
    const menu1 = menu.find((res)=>res.WebPageId === 99);
    console.log("menu111", menu1);
    // const handleCollapse=()=>{
    // }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("title", {
                        children: faqData?.PageTitle
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "description",
                        content: faqData?.MetaDescription
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "keywords",
                        content: faqData?.MetaKeyword
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        property: "og:title",
                        content: faqData?.PageTitle
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        property: "og:url",
                        content: `/${faqData?.PageUrl}`
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        property: "og:description",
                        content: faqData?.MetaDescription
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Header/* default */.Z, {
                sellerDetailsFromDomain: sellerDetailsFromDomain
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "subfooterBreadcrumb",
                children: /*#__PURE__*/ jsx_runtime.jsx(footerBreadCrumb/* default */.Z, {
                    activepage: "FAQ"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("footer", {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "container mb-5",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "text-center pt-3",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                        className: "mb-2",
                                        children: "Answers To Frequently Asked Questions"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                                        referrerPolicy: "no-referrer",
                                        src: "images/faq.png",
                                        alt: "faq",
                                        style: {
                                            maxWidth: "100%"
                                        },
                                        height: "100%"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "row",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-lg-12",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "card-body",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "flex flex-column mb-5 faq-section",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "row",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "col-md-12",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        id: "accordion",
                                                        children: faqdata && faqdata.map((item)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "card mb-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                        className: "card-header bg-light",
                                                                        id: "heading-1",
                                                                        children: [
                                                                            console.log("faqdata11", faqdata),
                                                                            /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                                                                className: "mb-0",
                                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                                                    href: true,
                                                                                    className: isActive ? "text-dark" : "text-dark collapsed",
                                                                                    role: "button",
                                                                                    "ata-toggle": "collapse",
                                                                                    "aria-expanded": "false",
                                                                                    style: {
                                                                                        color: "#007bff"
                                                                                    },
                                                                                    onClick: ()=>handleAnswer(item.FAQId, item.Answer),
                                                                                    children: [
                                                                                        item.Question,
                                                                                        /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                            className: isActive && ID === item.FAQId ? "fa fa-minus" : "fa fa-plus"
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            })
                                                                        ]
                                                                    }),
                                                                    ID === item.FAQId ? /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                        id: "collapse-1",
                                                                        className: isActive ? "" : "collapse",
                                                                        "data-parent": "#accordion",
                                                                        "aria-labelledby": "heading-1",
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                            className: "card-body",
                                                                            children: /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                                                                className: "mb-0",
                                                                                children: Anwser !== "" && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                    dangerouslySetInnerHTML: {
                                                                                        __html: Anwser
                                                                                    }
                                                                                })
                                                                            })
                                                                        })
                                                                    }) : null
                                                                ]
                                                            }))
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(footer/* default */.Z, {})
        ]
    });
};
async function getServerSideProps(context) {
    const sellerDetailsFromDomain = await (0,getSellerDetails/* default */.Z)(context.req.headers.host);
    const faqData = await getFaqData();
    console.log("faqData1212", faqData);
    return {
        props: {
            faqData: faqData,
            sellerDetailsFromDomain: sellerDetailsFromDomain
        }
    };
}
function getFaqData() {
    const url = `${constants/* default */.ZP.urls.baseUrl}${constants/* default */.ZP.endPoints.FAQ}`;
    // const url = `${Constants.urls.baseUrl}${Constants.endPoints.footer}pagename=faq&cid=1&languageId=2`;
    return (0,apiServices/* httpRequest */.c)(url, "GET");
}
/* harmony default export */ const pages_faq = (Faq);

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2Ffaq&preferredRegion=&absolutePagePath=private-next-pages%2Ffaq.js&absoluteAppPath=private-next-pages%2F_app.js&absoluteDocumentPath=private-next-pages%2F_document.js&middlewareConfigBase64=e30%3D!

        // Next.js Route Loader
        
        

        // Import the app and document modules.
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2Ffaq_preferredRegion_absolutePagePath_private_next_pages_2Ffaq_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(pages_faq_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(pages_faq_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(pages_faq_namespaceObject, "getStaticPaths")
        const next_route_loaderpage_2Ffaq_preferredRegion_absolutePagePath_private_next_pages_2Ffaq_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_getServerSideProps = (0,helpers/* hoist */.l)(pages_faq_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(pages_faq_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(pages_faq_namespaceObject, "reportWebVitals")
        

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(pages_faq_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(pages_faq_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(pages_faq_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(pages_faq_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(pages_faq_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/faq","pathname":"/faq","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({
          ...options,
          components: {
            App: _app["default"],
            Document: _document["default"],
          },
          userland: pages_faq_namespaceObject,
        })
        
        
    

/***/ }),

/***/ 6061:
/***/ (() => {



/***/ }),

/***/ 2510:
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
var __webpack_exports__ = __webpack_require__.X(0, [6505,1664,8719,5675,3451,3190,4834,6920,8698,8659,7062,7895,6452,3497,8371,864], () => (__webpack_exec__(9268)));
module.exports = __webpack_exports__;

})();