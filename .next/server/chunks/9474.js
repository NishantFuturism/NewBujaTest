"use strict";
exports.id = 9474;
exports.ids = [9474];
exports.modules = {

/***/ 9474:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* eslint-disable react/prop-types */ /**
 *
 * SubNavigation
 *
 */ 

//import { useLocation } from 'react-router-dom';



// //import history from '../../utils/history';
function SubNavigation(props) {
    const [breadcrumb, setbreadcrumb] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [subcatCount, setSubcatCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    //const location = useLocation()
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const SubcategoryState = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.subcategory);
    //console.log("SubcategoryStatenavigation=", SubcategoryState);
    //console.log("propssubnavigation=", props);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (router) {
            // const name = location.charAt(0).toUpperCase()
            // console.log('bvggh', name);
            const linkPath = router.asPath.split("/");
            //console.log("logginginsubc2",linkPath);
            linkPath.shift();
            const pathArray = linkPath.map((path, i)=>({
                    breadcrumb: path,
                    href: `/${linkPath.slice(0, i + 1).join("/")}`
                }));
            setbreadcrumb(pathArray);
        }
    }, [
        router
    ]);
    /*useEffect(() => {
    setbreadcrumb(props && props.URL && props.URL.map((path, i) => ({ breadcrumb: path, href: `/${props.URL.slice(0, i + 1).join('/')}` })))
  }, [props])*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (SubcategoryState !== undefined && SubcategoryState.advanceSkusListingByFilterModels.length !== 0) {
            setSubcatCount(SubcategoryState.advanceSkusListingByFilterModels[0].overAllCount);
        }
    }, [
        SubcategoryState,
        router
    ]);
    if (!breadcrumb) {
        return null;
    }
    if (!breadcrumb) {
        return null;
    }
    //console.log('sslocation'+breadcrumb);
    // const routes = [
    //   { path: '/Search/', breadcrumb: 'Search' },
    //   { path: '/example', breadcrumb: 'Custom Example' },
    //   // { path: '/custom-props, breadcrumb: CustomPropsBreadcrumb, ,}
    // ]
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "breadcrumb-area plp-breadcrumb-style",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: `container-fluid ${router.pathname.includes("/category/") ? "subcategory-page" : ""}`,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "row",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col-12",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "breadcrumb-wrap",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                            "aria-label": "breadcrumb",
                            className: "d-flex align-items-center",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                className: "breadcrumb",
                                "data-bd": JSON.stringify(breadcrumb),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "breadcrumb-item",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: "/",
                                            children: "Home"
                                        })
                                    }),
                                    breadcrumb.filter((data)=>data.breadcrumb !== "category").map((data, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                            className: "breadcrumb-item active",
                                            "aria-current": "page",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    href: breadcrumb[2]?.href,
                                                    style: {
                                                        color: "#333131"
                                                    },
                                                    children: index === 0 ? props.parentcategoryName : props.productcategoryName
                                                }),
                                                " "
                                            ]
                                        }, index)),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "prodCount",
                                            style: {
                                                marginLeft: "5px",
                                                fontSize: "16px",
                                                color: "#6c757d"
                                            },
                                            children: `${`(${props.Productcount || 0})`}`
                                        })
                                    })
                                ]
                            })
                        })
                    })
                })
            })
        })
    }, "nav");
}
SubNavigation.propTypes = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(SubNavigation));


/***/ })

};
;