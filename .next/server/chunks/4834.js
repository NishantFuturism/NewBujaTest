"use strict";
exports.id = 4834;
exports.ids = [4834];
exports.modules = {

/***/ 4636:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Success)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_assets1_css_default_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4573);
/* harmony import */ var _public_assets1_css_default_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_assets1_css_default_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_assets1_css_responsive_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8698);
/* harmony import */ var _public_assets1_css_responsive_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_assets1_css_responsive_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_assets_css_style_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2269);
/* harmony import */ var _public_assets_css_style_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_assets_css_style_min_css__WEBPACK_IMPORTED_MODULE_4__);
/* eslint-disable react/prop-types */ 



// import '../../../public/assets1/css/style.min.css';

function Success(props) {
    const { msg, isError } = props;
    const [closeBar, setcloseBar] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    // function closeMsgBar() {
    //   setTimeout(() => {
    //     // setShowMsg(false)
    //     // dispatch(setInternalMsg())
    //   }, 1000);
    // }
    const handleClose = ()=>{
        setcloseBar(true);
    };
    console.log("checkingprops..", props);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: closeBar === false ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: `topmessage alert  alert-dismissible show ${isError ? "alert-danger" : "alert-success"}`,
            role: "alert",
            style: {
                position: "fixed",
                top: "0",
                zIndex: "9999999999",
                color: "#000"
            },
            children: [
                isError ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "fa fa-warning cross"
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "fa fa-check chk"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                    className: "msg",
                    children: msg
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    type: "button",
                    className: "close msgclose",
                    "aria-label": "close",
                    onClick: ()=>handleClose(),
                    children: "\xd7"
                })
            ]
        }) : ""
    });
}


/***/ }),

/***/ 2754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ checkStore)
/* harmony export */ });
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7644);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_conformsTo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(352);
/* harmony import */ var lodash_conformsTo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_conformsTo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5716);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isFunction__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5795);
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isObject__WEBPACK_IMPORTED_MODULE_3__);




/**
 * Validate the shape of redux store
 */ function checkStore(store) {
    const shape = {
        dispatch: (lodash_isFunction__WEBPACK_IMPORTED_MODULE_2___default()),
        subscribe: (lodash_isFunction__WEBPACK_IMPORTED_MODULE_2___default()),
        getState: (lodash_isFunction__WEBPACK_IMPORTED_MODULE_2___default()),
        replaceReducer: (lodash_isFunction__WEBPACK_IMPORTED_MODULE_2___default()),
        runSaga: (lodash_isFunction__WEBPACK_IMPORTED_MODULE_2___default()),
        injectedReducers: (lodash_isObject__WEBPACK_IMPORTED_MODULE_3___default()),
        injectedSagas: (lodash_isObject__WEBPACK_IMPORTED_MODULE_3___default())
    };
    invariant__WEBPACK_IMPORTED_MODULE_0___default()(lodash_conformsTo__WEBPACK_IMPORTED_MODULE_1___default()(store, shape), "(src/utils...) injectors: Expected a valid redux store");
}


/***/ }),

/***/ 3671:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  v: () => (/* binding */ useInjectReducer)
});

// UNUSED EXPORTS: default

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "hoist-non-react-statics"
var external_hoist_non_react_statics_ = __webpack_require__(7318);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "invariant"
var external_invariant_ = __webpack_require__(7644);
var external_invariant_default = /*#__PURE__*/__webpack_require__.n(external_invariant_);
// EXTERNAL MODULE: external "lodash/isEmpty"
var isEmpty_ = __webpack_require__(9699);
var isEmpty_default = /*#__PURE__*/__webpack_require__.n(isEmpty_);
// EXTERNAL MODULE: external "lodash/isFunction"
var isFunction_ = __webpack_require__(5716);
var isFunction_default = /*#__PURE__*/__webpack_require__.n(isFunction_);
// EXTERNAL MODULE: external "lodash/isString"
var isString_ = __webpack_require__(7026);
var isString_default = /*#__PURE__*/__webpack_require__.n(isString_);
// EXTERNAL MODULE: ./src/utils/checkStore.js
var checkStore = __webpack_require__(2754);
// EXTERNAL MODULE: ./src/reducers.js + 3 modules
var reducers = __webpack_require__(7826);
;// CONCATENATED MODULE: ./src/utils/reducerInjectors.js






function injectReducerFactory(store, isValid) {
    return function injectReducer(key, reducer) {
        if (!isValid) (0,checkStore/* default */.Z)(store);
        external_invariant_default()(isString_default()(key) && !isEmpty_default()(key) && isFunction_default()(reducer), "(app/utils...) injectReducer: Expected `reducer` to be a reducer function");
        // Check `store.injectedReducers[key] === reducer` for hot reloading when a key is the same but a reducer is different
        if (Reflect.has(store.injectedReducers, key) && store.injectedReducers[key] === reducer) return;
        store.injectedReducers[key] = reducer; // eslint-disable-line no-param-reassign
        store.replaceReducer((0,reducers/* default */.Z)(store.injectedReducers));
    };
}
function reducerInjectors_getInjectors(store) {
    (0,checkStore/* default */.Z)(store);
    return {
        injectReducer: injectReducerFactory(store, true)
    };
}

;// CONCATENATED MODULE: ./src/utils/injectReducer.js





/**
 * Dynamically injects a reducer
 *
 * @param {string} key A key of the reducer
 * @param {function} reducer A reducer that will be injected
 *
 */ /* harmony default export */ const injectReducer = (({ key, reducer })=>(WrappedComponent)=>{
        class ReducerInjector extends React.Component {
            static{
                this.WrappedComponent = WrappedComponent;
            }
            static{
                this.contextType = ReactReduxContext;
            }
            static{
                this.displayName = `withReducer(${WrappedComponent.displayName || WrappedComponent.name || "Component"})`;
            }
            constructor(props, context){
                super(props, context);
                getInjectors(context.store).injectReducer(key, reducer);
            }
            render() {
                return /*#__PURE__*/ _jsx(WrappedComponent, {
                    ...this.props
                });
            }
        }
        return hoistNonReactStatics(ReducerInjector, WrappedComponent);
    });
const useInjectReducer = ({ key, reducer })=>{
    const context = external_react_default().useContext(external_react_redux_.ReactReduxContext);
    external_react_default().useEffect(()=>{
        reducerInjectors_getInjectors(context.store).injectReducer(key, reducer);
    }, []);
};



/***/ }),

/***/ 7856:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  h: () => (/* binding */ useInjectSaga)
});

// UNUSED EXPORTS: default

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "hoist-non-react-statics"
var external_hoist_non_react_statics_ = __webpack_require__(7318);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "invariant"
var external_invariant_ = __webpack_require__(7644);
var external_invariant_default = /*#__PURE__*/__webpack_require__.n(external_invariant_);
// EXTERNAL MODULE: external "lodash/isEmpty"
var isEmpty_ = __webpack_require__(9699);
var isEmpty_default = /*#__PURE__*/__webpack_require__.n(isEmpty_);
// EXTERNAL MODULE: external "lodash/isFunction"
var isFunction_ = __webpack_require__(5716);
var isFunction_default = /*#__PURE__*/__webpack_require__.n(isFunction_);
// EXTERNAL MODULE: external "lodash/isString"
var isString_ = __webpack_require__(7026);
var isString_default = /*#__PURE__*/__webpack_require__.n(isString_);
// EXTERNAL MODULE: external "lodash/conformsTo"
var conformsTo_ = __webpack_require__(352);
var conformsTo_default = /*#__PURE__*/__webpack_require__.n(conformsTo_);
// EXTERNAL MODULE: ./src/utils/checkStore.js
var checkStore = __webpack_require__(2754);
;// CONCATENATED MODULE: ./src/utils/constants.js
const RESTART_ON_REMOUNT = "@@saga-injector/restart-on-remount";
const DAEMON = "@@saga-injector/daemon";
const ONCE_TILL_UNMOUNT = "@@saga-injector/once-till-unmount";

;// CONCATENATED MODULE: ./src/utils/sagaInjectors.js







const allowedModes = [
    RESTART_ON_REMOUNT,
    DAEMON,
    ONCE_TILL_UNMOUNT
];
const checkKey = (key)=>external_invariant_default()(isString_default()(key) && !isEmpty_default()(key), "(app/utils...) injectSaga: Expected `key` to be a non empty string");
const checkDescriptor = (descriptor)=>{
    const shape = {
        saga: (isFunction_default()),
        mode: (mode)=>isString_default()(mode) && allowedModes.includes(mode)
    };
    external_invariant_default()(conformsTo_default()(descriptor, shape), "(app/utils...) injectSaga: Expected a valid saga descriptor");
};
function injectSagaFactory(store, isValid) {
    return function injectSaga(key, descriptor = {}, args) {
        if (!isValid) (0,checkStore/* default */.Z)(store);
        const newDescriptor = {
            ...descriptor,
            mode: descriptor.mode || DAEMON
        };
        const { saga, mode } = newDescriptor;
        checkKey(key);
        checkDescriptor(newDescriptor);
        let hasSaga = Reflect.has(store.injectedSagas, key);
        if (false) {}
        if (!hasSaga || hasSaga && mode !== DAEMON && mode !== ONCE_TILL_UNMOUNT) {
            /* eslint-disable no-param-reassign */ store.injectedSagas[key] = {
                ...newDescriptor,
                task: store.runSaga(saga, args)
            };
        /* eslint-enable no-param-reassign */ }
    };
}
function ejectSagaFactory(store, isValid) {
    return function ejectSaga(key) {
        if (!isValid) (0,checkStore/* default */.Z)(store);
        checkKey(key);
        if (Reflect.has(store.injectedSagas, key)) {
            const descriptor = store.injectedSagas[key];
            if (descriptor.mode && descriptor.mode !== DAEMON) {
                descriptor.task.cancel();
                // Clean up in production; in development we need `descriptor.saga` for hot reloading
                if (true) {
                    // Need some value to be able to detect `ONCE_TILL_UNMOUNT` sagas in `injectSaga`
                    store.injectedSagas[key] = "done"; // eslint-disable-line no-param-reassign
                }
            }
        }
    };
}
function sagaInjectors_getInjectors(store) {
    (0,checkStore/* default */.Z)(store);
    return {
        injectSaga: injectSagaFactory(store, true),
        ejectSaga: ejectSagaFactory(store, true)
    };
}

;// CONCATENATED MODULE: ./src/utils/injectSaga.js





/**
 * Dynamically injects a saga, passes component's props as saga arguments
 *
 * @param {string} key A key of the saga
 * @param {function} saga A root saga that will be injected
 * @param {string} [mode] By default (constants.DAEMON) the saga will be started
 * on component mount and never canceled or started again. Another two options:
 *   - constants.RESTART_ON_REMOUNT — the saga will be started on component mount and
 *   cancelled with `task.cancel()` on component unmount for improved performance,
 *   - constants.ONCE_TILL_UNMOUNT — behaves like 'RESTART_ON_REMOUNT' but never runs it again.
 *
 */ /* harmony default export */ const injectSaga = (({ key, saga, mode })=>(WrappedComponent)=>{
        class InjectSaga extends React.Component {
            static{
                this.WrappedComponent = WrappedComponent;
            }
            static{
                this.contextType = ReactReduxContext;
            }
            static{
                this.displayName = `withSaga(${WrappedComponent.displayName || WrappedComponent.name || "Component"})`;
            }
            constructor(props, context){
                super(props, context);
                this.injectors = getInjectors(context.store);
                this.injectors.injectSaga(key, {
                    saga,
                    mode
                }, this.props);
            }
            componentWillUnmount() {
                this.injectors.ejectSaga(key);
            }
            render() {
                return /*#__PURE__*/ _jsx(WrappedComponent, {
                    ...this.props
                });
            }
        }
        return hoistNonReactStatics(InjectSaga, WrappedComponent);
    });
const useInjectSaga = ({ key, saga, mode })=>{
    const context = external_react_default().useContext(external_react_redux_.ReactReduxContext);
    external_react_default().useEffect(()=>{
        const injectors = sagaInjectors_getInjectors(context.store);
        injectors.injectSaga(key, {
            saga,
            mode
        });
        return ()=>{
            injectors.ejectSaga(key);
        };
    }, []);
};



/***/ })

};
;