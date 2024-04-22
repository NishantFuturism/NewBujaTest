(() => {
var exports = {};
exports.id = 2503;
exports.ids = [2503];
exports.modules = {

/***/ 2661:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2Fcategory_menu_list_preferredRegion_absolutePagePath_private_next_pages_2Fcategory_menu_list_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_),
  getServerSideProps: () => (/* binding */ next_route_loaderpage_2Fcategory_menu_list_preferredRegion_absolutePagePath_private_next_pages_2Fcategory_menu_list_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_getServerSideProps),
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

// NAMESPACE OBJECT: ./src/pages/category-menu-list.js
var category_menu_list_namespaceObject = {};
__webpack_require__.r(category_menu_list_namespaceObject);
__webpack_require__.d(category_menu_list_namespaceObject, {
  "default": () => (category_menu_list),
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
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(1187);
// EXTERNAL MODULE: ./src/components/Footer/footer.js + 5 modules
var footer = __webpack_require__(8371);
// EXTERNAL MODULE: ./src/components/Header/index.js + 22 modules
var Header = __webpack_require__(3497);
// EXTERNAL MODULE: ./src/containers/MainPage/api/homeServices.js
var homeServices = __webpack_require__(4171);
// EXTERNAL MODULE: ./src/containers/MyAccount/myAccountBreadcrumb.js
var myAccountBreadcrumb = __webpack_require__(3718);
// EXTERNAL MODULE: ./src/containers/MainPage/api/apiServices.js
var apiServices = __webpack_require__(4287);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__(8819);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/containers/App/constants.js
var constants = __webpack_require__(1824);
;// CONCATENATED MODULE: ./src/pages/category-menu-list.js


// import { useSelector } from 'react-redux'
// import { useHistory } from 'react-router-dom'



// import SubNavigation from '../../components/SubNavigation'

// import { ShopBrand } from '../ShopBrand'
// import ToppSellingOriginal from '../ToppSellingOriginal'



// import ToppSellingOriginal from '../ToppSellingOriginal'
// import { TopsellingProduct } from '../TopsellingProduct/index';



//export default function ViewmorePage() {
const ViewmorePage = ({ viewMoreCategories, viewMoreMegaCategories })=>{
    //const [viemoredata, setviemoredata] = useState();
    const viemoredata = viewMoreCategories;
    const viewMegaMenuDetails = viewMoreMegaCategories;
    // const history = useHistory()
    // const nextData = useSelector(state => state.ToppSelling)
    /*useEffect(() => {
    CustomsAPI.categoreyServices()
      .then(response => {
        setviemoredata(response)
        console.log("res..", response)
      })
      .catch(error => {
        console.log('error:::', error);
      });
  }, [])*/ function productlist(PageUrl, patrentcaturl) {
        console.log("productlist==", PageUrl, patrentcaturl);
        localStorage.setItem("PLPCat", `category/${patrentcaturl}/${PageUrl}`);
        localStorage.setItem("PLPparenturl", `category/${patrentcaturl}`);
    // return router.push(`category/${patrentcaturl}/${PageUrl}`, { isURLChange: `category/${patrentcaturl}/${PageUrl}` })
    }
    function productlistpage(pageurl, patrentcaturl) {
        console.log("productlistpage==", pageurl, patrentcaturl);
        localStorage.setItem("PLPCat", `category/${patrentcaturl}/${pageurl}`);
        localStorage.setItem("PLPparenturl", `category/${patrentcaturl}`);
    // return router.push(`category/${patrentcaturl}/${pageurl}`, { isURLChange: `category/${patrentcaturl}/${pageurl}` })
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(external_react_toastify_.ToastContainer, {
                position: "top-right"
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Header/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime.jsx(myAccountBreadcrumb/* default */.Z, {
                id: "viewmorebreadcrumb",
                activepage: "All Categories"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                id: "divCategoryMenuList",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "container-fluid",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-12",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "main-menu-categories",
                                children: /*#__PURE__*/ jsx_runtime.jsx("nav", {
                                    id: "mobile-menu",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                        children: /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            className: "static",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                                className: "mega-menu mega-full",
                                                style: {
                                                    cursor: "pointer"
                                                },
                                                children: viewMegaMenuDetails?.length > 0 && viewMegaMenuDetails.map((data)=>data.Main_cat !== undefined && data.Main_cat?.length > 0 && /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                                                        children: data.Main_cat?.map((item)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                                className: "mega-title",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                        href: `category/${item.MainCategoryUrl}/${item.Sub_cat?.[0].SubCategoryUrl}`,
                                                                        onClick: ()=>productlist(item.Sub_cat?.[0].SubCategoryUrl, item.MainCategoryUrl),
                                                                        children: item.MainCategory
                                                                    }),
                                                                    item?.Sub_cat?.length > 0 && item.Sub_cat.map((d)=>/*#__PURE__*/ jsx_runtime.jsx("ul", {
                                                                            children: /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                                    href: `category/${item.MainCategoryUrl}/${d.SubCategoryUrl}`,
                                                                                    onClick: ()=>productlistpage(d.SubCategoryUrl, item.MainCategoryUrl),
                                                                                    children: d.SubCategory
                                                                                })
                                                                            })
                                                                        }))
                                                                ]
                                                            }))
                                                    }))
                                            })
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
};
async function getServerSideProps() {
    const viewMoreCategories = await fetchMoreCategories();
    const viewMoreMegaCategories = await fetchMegaMenuMoreCategorires();
    return {
        props: {
            viewMoreCategories: viewMoreCategories,
            viewMoreMegaCategories: viewMoreMegaCategories
        }
    };
}
function fetchMegaMenuMoreCategorires() {
    const url = `${constants/* default */.ZP.urls.baseUrl}${constants/* default */.ZP.endPoints.MultiMenu}ClientId=1&languageId=2&IsForReact=1`;
    return (0,apiServices/* httpRequest */.c)(url, "GET");
}
function fetchMoreCategories() {
    console.log("hello logging in here menu ====================");
    const url = `${constants/* default */.ZP.urls.baseUrl}${constants/* default */.ZP.endPoints.categories}languageId=${homeServices/* ConstantsValues */.r.languageId}&levelDepth=0`;
    return (0,apiServices/* httpRequest */.c)(url, "GET");
}
/* harmony default export */ const category_menu_list = (ViewmorePage);

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2Fcategory-menu-list&preferredRegion=&absolutePagePath=private-next-pages%2Fcategory-menu-list.js&absoluteAppPath=private-next-pages%2F_app.js&absoluteDocumentPath=private-next-pages%2F_document.js&middlewareConfigBase64=e30%3D!

        // Next.js Route Loader
        
        

        // Import the app and document modules.
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2Fcategory_menu_list_preferredRegion_absolutePagePath_private_next_pages_2Fcategory_menu_list_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(category_menu_list_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(category_menu_list_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(category_menu_list_namespaceObject, "getStaticPaths")
        const next_route_loaderpage_2Fcategory_menu_list_preferredRegion_absolutePagePath_private_next_pages_2Fcategory_menu_list_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_getServerSideProps = (0,helpers/* hoist */.l)(category_menu_list_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(category_menu_list_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(category_menu_list_namespaceObject, "reportWebVitals")
        

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(category_menu_list_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(category_menu_list_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(category_menu_list_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(category_menu_list_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(category_menu_list_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/category-menu-list","pathname":"/category-menu-list","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({
          ...options,
          components: {
            App: _app["default"],
            Document: _document["default"],
          },
          userland: category_menu_list_namespaceObject,
        })
        
        
    

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
var __webpack_exports__ = __webpack_require__.X(0, [6505,1664,8719,5675,3451,3190,4834,6920,8698,8659,7062,7895,6452,3497,8371,9095], () => (__webpack_exec__(2661)));
module.exports = __webpack_exports__;

})();