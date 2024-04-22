exports.id = 2248;
exports.ids = [2248];
exports.modules = {

/***/ 2248:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  CategoryContent: () => (/* binding */ CategoryContent),
  "default": () => (/* binding */ categoryContent)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "lodash/groupBy"
var groupBy_ = __webpack_require__(8492);
var groupBy_default = /*#__PURE__*/__webpack_require__.n(groupBy_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__(6695);
// EXTERNAL MODULE: external "reselect"
var external_reselect_ = __webpack_require__(6814);
// EXTERNAL MODULE: ./src/utils/injectReducer.js + 1 modules
var injectReducer = __webpack_require__(3671);
// EXTERNAL MODULE: ./src/utils/injectSaga.js + 2 modules
var injectSaga = __webpack_require__(7856);
// EXTERNAL MODULE: ./public/assets1/css/bundle.css
var bundle = __webpack_require__(3858);
// EXTERNAL MODULE: ./public/assets1/css/responsive.min.css
var responsive_min = __webpack_require__(8698);
// EXTERNAL MODULE: ./public/assets/css/style.min.css
var style_min = __webpack_require__(2269);
// EXTERNAL MODULE: external "react-shimmer-effects"
var external_react_shimmer_effects_ = __webpack_require__(9777);
// EXTERNAL MODULE: external "immer"
var external_immer_ = __webpack_require__(7133);
var external_immer_default = /*#__PURE__*/__webpack_require__.n(external_immer_);
;// CONCATENATED MODULE: ./src/containers/CategoryContent/constants.js
/*
 *
 * CategoryContent constants
 *
 */ const DEFAULT_ACTION = "app/CategoryContent/DEFAULT_ACTION";

;// CONCATENATED MODULE: ./src/containers/CategoryContent/reducer.js
/*
 *
 * CategoryContent reducer
 *
 */ 

const initialState = {};
/* eslint-disable default-case, no-param-reassign */ const categoryContentReducer = (state = initialState, action)=>external_immer_default()(state, ()=>{
        switch(action.type){
            case DEFAULT_ACTION:
                break;
        }
    });
/* harmony default export */ const reducer = (categoryContentReducer);

;// CONCATENATED MODULE: ./src/containers/CategoryContent/saga.js
// import { take, call, put, select } from 'redux-saga/effects';
// Individual exports for testing
function* categoryContentSaga() {
// See example in containers/HomePage/saga.js
}

;// CONCATENATED MODULE: ./src/containers/CategoryContent/selectors.js


/**
 * Direct selector to the categoryContent state domain
 */ const selectCategoryContentDomain = (state)=>state.categoryContent || initialState;
/**
 * Other specific selectors
 */ /**
 * Default selector used by CategoryContent
 */ const makeSelectCategoryContent = ()=>(0,external_reselect_.createSelector)(selectCategoryContentDomain, (substate)=>substate);
/* harmony default export */ const selectors = (makeSelectCategoryContent);


// EXTERNAL MODULE: ./src/containers/CategoryContent/categorycontent.css
var categorycontent = __webpack_require__(2446);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/containers/CategoryContent/categoryContent.js
/* eslint-disable no-unused-vars */ /* eslint-disable jsx-a11y/click-events-have-key-events */ /* eslint-disable jsx-a11y/no-noninteractive-element-interactions */ /* eslint-disable array-callback-return */ /* eslint-disable no-unused-expressions */ /* eslint-disable no-return-assign */ /**
 *
 * CategoryContent
 *
 */ 



//import { Link } from 'react-router-dom';







// import '../../../public/assets1/css/style.min.css';


////import history from '../../utils/history';





function CategoryContent() {
    (0,injectReducer/* useInjectReducer */.v)({
        key: "categoryContent",
        reducer: reducer
    });
    (0,injectSaga/* useInjectSaga */.h)({
        key: "categoryContent",
        saga: categoryContentSaga
    });
    const [homeScreensDAta, sethomeScreensDAta] = (0,external_react_.useState)([]);
    const [groupedData, setGroupedData] = (0,external_react_.useState)();
    const homeScreenstate = (0,external_react_redux_.useSelector)((state)=>state.homeScreen);
    const shimmerdata = [
        {
            "id": 1
        },
        {
            "id": 2
        },
        {
            "id": 3
        },
        {
            "id": 4
        },
        {
            "id": 5
        },
        {
            "id": 6
        }
    ];
    // const groupBy = (x, f) => x.reduce((a, b) => ((a[f(b)] ||= []).push(b), a), {});
    (0,external_react_.useEffect)(()=>{
        if (homeScreensDAta && homeScreensDAta.length !== 0) {
            setGroupedData(Object.entries(groupBy_default()(homeScreensDAta, (v)=>v.SectionName)));
        }
    }, [
        homeScreensDAta
    ]);
    (0,external_react_.useEffect)(()=>{
        if (homeScreenstate !== undefined) {
            sethomeScreensDAta(homeScreenstate.category);
        }
    }, [
        homeScreenstate
    ]);
    // function productlistpage(patrentcaturl) {
    //   console.log('patrentcaturl', patrentcaturl);
    //   const url = patrentcaturl.split('/')
    //   console.log({ url });
    //   localStorage.setItem('PageUrl', window.btoa(url[2]))
    //   // localStorage.setItem('PLPCat', pageurl)
    //   // localStorage.setItem('PLPparenturl', patrentcaturl.split('/'))
    //   return history.push(`/Subcategory/${patrentcaturl}`,)
    // }
    function productlistpage(pageurl, patrentcaturl) {
        localStorage.setItem("PLPCat", pageurl);
        localStorage.setItem("PLPparenturl", pageurl);
    // return history.push(`/${pageurl}`, { isURLChange: pageurl })
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                children: groupedData && groupedData.length > 0 ? /*#__PURE__*/ jsx_runtime.jsx("section", {
                    style: {
                        backgroundColor: "#D9FFE2"
                    },
                    className: "pt-10 pb-10",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "container-fluid",
                        style: {
                            backgroundColor: "#D9FFE2"
                        },
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "titleofCate",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-lg-12",
                                children: /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                    style: {
                                        fontSize: "1.6em",
                                        lineHeight: "34px"
                                    },
                                    children: "Shop by Category"
                                })
                            })
                        })
                    })
                }) : null
            }),
            /*#__PURE__*/ jsx_runtime.jsx("section", {
                className: "categoryholder",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "container-fluid pt-20 pb-20",
                    children: groupedData && groupedData.map((arr, i)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "catonMobile",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                    children: arr[0]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "row catboxcate",
                                    children: arr[1].map((itm, i)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "col-lg-2 col-sm-6 col-xs-6 col-6",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                    href: itm.PageUrl,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                            referrerPolicy: "no-referrer",
                                                            src: itm.CategoryImage,
                                                            alt: `${itm.SectionName}-${itm.ImageAlt}`,
                                                            width: 300,
                                                            height: 0,
                                                            style: {
                                                                width: "300px",
                                                                height: "auto"
                                                            },
                                                            onClick: ()=>productlistpage(itm.PageUrl)
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            children: itm.DisplayName
                                                        })
                                                    ]
                                                })
                                            })
                                        }, i))
                                })
                            ]
                        }, i))
                })
            })
        ]
    });
}
const mapStateToProps = (0,external_reselect_.createStructuredSelector)({
    categoryContent: selectors()
});
function mapDispatchToProps(dispatch) {
    return {
        dispatch
    };
}
const withConnect = (0,external_react_redux_.connect)(mapStateToProps, mapDispatchToProps);
/* harmony default export */ const categoryContent = ((0,external_redux_.compose)(withConnect, external_react_.memo)(CategoryContent));


/***/ }),

/***/ 2446:
/***/ (() => {



/***/ })

};
;