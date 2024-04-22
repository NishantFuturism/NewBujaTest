"use strict";
exports.id = 8371;
exports.ids = [8371];
exports.modules = {

/***/ 8371:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ footer)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/useLocalStorage.js
var useLocalStorage = __webpack_require__(3650);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/containers/App/constants.js
var constants = __webpack_require__(1824);
// EXTERNAL MODULE: ./public/assets1/css/default.min.css
var default_min = __webpack_require__(4573);
// EXTERNAL MODULE: ./public/assets1/css/responsive.min.css
var responsive_min = __webpack_require__(8698);
// EXTERNAL MODULE: ./public/assets/css/style.min.css
var style_min = __webpack_require__(2269);
// EXTERNAL MODULE: ./src/containers/MainPage/api/homeServices.js
var homeServices = __webpack_require__(4171);
// EXTERNAL MODULE: ./src/utils/injectReducer.js + 1 modules
var injectReducer = __webpack_require__(3671);
// EXTERNAL MODULE: ./src/utils/injectSaga.js + 2 modules
var injectSaga = __webpack_require__(7856);
;// CONCATENATED MODULE: ./src/containers/Newsletter/constants.js
/*
 *
 * Newsletter constants
 *
 */ const constants_DEFAULT_ACTION = "app/Newsletter/DEFAULT_ACTION";
const constants_SUBSCRIBE_EMAIL = "app/Newsletter/SUBSCRIBE_EMAIL";
const SUBSCRIBE_EMAIL_SUCCESS = "app/Newsletter/SUBSCRIBE_EMAIL";
const LOAD_VALIDATION_POPUP = "app/Newsletter/LOAD_VALIDATION_POPUP";

;// CONCATENATED MODULE: ./src/containers/Newsletter/actions.js
/*
 *
 * Newsletter actions
 *
 */ 
function defaultAction() {
    return {
        type: DEFAULT_ACTION
    };
}
function subscribeemail(email) {
    return {
        type: SUBSCRIBE_EMAIL,
        email
    };
}
function validationmpopup(popup) {
    return {
        type: LOAD_VALIDATION_POPUP,
        popup
    };
}

// EXTERNAL MODULE: external "immer"
var external_immer_ = __webpack_require__(7133);
var external_immer_default = /*#__PURE__*/__webpack_require__.n(external_immer_);
;// CONCATENATED MODULE: ./src/containers/Newsletter/reducer.js
/*
 *
 * Newsletter reducer
 *
 */ 

const initialState = {
    emalipopup: "",
    subscribemsg: ""
};
/* eslint-disable default-case, no-param-reassign */ const newsletterReducer = (state = initialState, action)=>external_immer_default()(state, (draft)=>{
        switch(action.type){
            case constants_DEFAULT_ACTION:
                break;
            case LOAD_VALIDATION_POPUP:
                draft.emalipopup = action.popup;
                break;
            case SUBSCRIBE_EMAIL_SUCCESS:
                break;
        }
    });
/* harmony default export */ const reducer = (newsletterReducer);

// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__(6477);
;// CONCATENATED MODULE: ./src/containers/Newsletter/saga.js
/* eslint-disable no-unused-vars */ 



// Individual exports for testing
function* newsletterSaga() {
    yield (0,effects_.takeEvery)(constants_SUBSCRIBE_EMAIL, subscribe);
}
function* subscribe(action) {
    return fetch(`${constants/* default */.ZP.urls.baseUrl}${constants/* default */.ZP.endPoints.newslettersubscription}clientId=${homeServices/* ConstantsValues */.r.ClientId}&emailid=${action.email}`, {
        method: "POST",
        headers: {
            accept: "application/json"
        }
    }).then((res)=>res.json()).then((response)=>{});
}

;// CONCATENATED MODULE: ./src/containers/Newsletter/index.js
/**
 *
 * Newsletter
 *
 */ 









function Newsletter() {
    (0,injectReducer/* useInjectReducer */.v)({
        key: "newsletter",
        reducer: reducer
    });
    (0,injectSaga/* useInjectSaga */.h)({
        key: "newsletter",
        saga: newsletterSaga
    });
    // const [enablepopup, setenablepopup] = useState(false);
    // const [msg, setmsg] = useState('');
    const [Email, setEmail] = (0,external_react_.useState)("");
    const dispatch = (0,external_react_redux_.useDispatch)();
    const newsletterReducer = (0,external_react_redux_.useSelector)((state)=>state.newsletter);
    console.log("newsletterReducer", newsletterReducer);
    const emailsubscribe = ()=>{
        const email = document.getElementById("mc-email").value;
        setEmail(email);
        const emailphone = new RegExp(/^(?:\d{10}|\w+@\w+\.\w{2,3})$/);
        const token = localStorage.getItem("generatedtoken");
        // dispatch(subscribeemail())
        if (!emailphone.test(email)) {
            // dispatch(validationmpopup(true))
            alert("Please enter valid email");
        } else {
            fetch(`${constants/* default */.ZP.urls.baseUrl}${constants/* default */.ZP.endPoints.newslettersubscription}clientId=${homeServices/* ConstantsValues */.r.ClientId}&emailid=${email}`, {
                method: "POST",
                headers: {
                    accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }).then((res)=>res.json()).then((response)=>{
                // setmsg(response)
                if (response === 1) {
                    alert("Subscribe Successfully");
                    setEmail("");
                } else {
                    setEmail("");
                    alert("Email already subscribed");
                }
            // setenablepopup(true)
            });
        }
    };
    const Popup = ()=>/*#__PURE__*/ jsx_runtime.jsx("div", {
            id: "messagebox",
            className: "modal fade show",
            role: "dialog",
            style: {
                display: "block"
            },
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "modal-dialog",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "modal-content",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "modal-body",
                        style: {
                            textAlign: "center"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                id: "displaymsg",
                                style: {
                                    color: "rgb(240, 173, 78)"
                                },
                                children: "Please enter valid email"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                id: "okbtn",
                                onClick: ()=>dispatch(validationmpopup(false)),
                                type: "button",
                                className: "btn btn-default",
                                "data-dismiss": "modal",
                                children: "OK"
                            })
                        ]
                    })
                })
            })
        });
    // const Successfulalert = () =>
    //   <div id="messagebox" className="modal fade show" role="dialog" style={{ display: 'block' }}>
    //     <div className="modal-dialog">
    //       <div className="modal-content">
    //         <div className="modal-body" style={{ textAlign: 'center' }}>
    //           <p id="displaymsg"><i className="fa fa-spinner fa-spin"></i>{msg}</p><br />
    //           <button id="okbtn" type="button" className="btn btn-default" data-dismiss="modal" style={{ display: 'block' }}>OK</button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    const onchangeEmail = ()=>{
        const email = document.getElementById("mc-email").value;
        setEmail(email);
    // const emailphone = new RegExp(/^(?:\d{10}|\w+@\w+\.\w{2,3})$/);
    // const { value } = document.getElementById('mc-email').value
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            newsletterReducer && newsletterReducer.emalipopup && /*#__PURE__*/ jsx_runtime.jsx(Popup, {}),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "newsletter-group",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "container-fluid",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "col-lg-12",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "newsletter-box",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "newsletter-inner",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "newsletter-title",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                        children: "Sign Up For Newsletters"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        children: "Be the First to Know. Sign up for newsletter today"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "newsletter-box",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                                                    id: "mc-form",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                            type: "hidden",
                                                            id: "g-recaptcha-response",
                                                            name: "g-recaptcha-response",
                                                            defaultValue: ""
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                            type: "hidden",
                                                            name: "action",
                                                            defaultValue: ""
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                            type: "email",
                                                            id: "mc-email",
                                                            autoComplete: "off",
                                                            className: "email-box",
                                                            placeholder: "Enter your email",
                                                            name: "EMAIL",
                                                            value: Email,
                                                            onChange: onchangeEmail
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                            onClick: emailsubscribe,
                                                            className: "newsletter-btn",
                                                            type: "button",
                                                            id: "mc-submit",
                                                            children: "subscribe!"
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "mailchimp-alerts",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "mailchimp-submitting"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "mailchimp-success"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "mailchimp-error"
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const containers_Newsletter = ((/* unused pure expression or super */ null && (Newsletter)));

// EXTERNAL MODULE: ./node_modules/@icon/linearicons/linearicons.css
var linearicons = __webpack_require__(3884);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/utils/getSellerDetails.js
var getSellerDetails = __webpack_require__(5177);
;// CONCATENATED MODULE: ./src/components/Footer/footer.js
/* eslint-disable consistent-return */ /* eslint-disable react/prop-types */ /* eslint-disable jsx-a11y/no-static-element-interactions */ /* eslint-disable jsx-a11y/click-events-have-key-events */ /* eslint-disable jsx-a11y/anchor-is-valid */ 



//import { Link, useLocation } from 'react-router-dom';





// import '../../../public/assets1/css/style.min.css';
// import './career.css'
// import './advertise.css'
// import { Image } from '../Footer/selleradvertise/images';



////import history from '../../utils/history';



// import BreadCrumb from '../../components/Footer/footerBreadCrumb';
function Footer(props) {
    const [PLPCat, setPLPCat] = (0,useLocalStorage/* useLocalStorage */._)("PLPCat", null);
    const [PLPparenturl, setPLPparenturl] = (0,useLocalStorage/* useLocalStorage */._)("PLPparenturl", null);
    const [generatedtoken, setgeneratedtoken] = (0,useLocalStorage/* useLocalStorage */._)("generatedtoken", null);
    const [pagefootert, setpagefootert] = (0,useLocalStorage/* useLocalStorage */._)("pagefootert", null);
    const router = (0,router_.useRouter)();
    const [Ftr, setFooter] = (0,external_react_.useState)(props?.footerPagesLinks);
    // const [Megamainmenu, setMegamainmenu] = useState([]);
    const [menu, setMenu] = (0,external_react_.useState)(props?.footerCategoryLinks);
    const [flag, setflag] = (0,external_react_.useState)(false);
    const [visible, setVisible] = (0,external_react_.useState)(false);
    // const [FirstCall, setFirstCall] = useState(0);
    // const [page, setpage] = useState(false);
    const footerData = (0,external_react_.useState)(props.footerPagesLinks);
    const sendOtpApiResponse = (0,external_react_redux_.useSelector)((state)=>state.login);
    //const location = useLocation();
    const checkValues = [
        "/category/",
        "/product/",
        "allbrands",
        "/"
    ];
    (0,external_react_.useEffect)(()=>{
        if (footerData !== undefined) {
            //setFooter(footerData.Ftr)
            setflag(false);
        // setMegamainmenu(footerData.megaMenuResp)
        }
    }, [
        footerData
    ]);
    (0,external_react_.useEffect)(()=>{
        (async ()=>{
            const sellerDetailsFromDomain = await (0,getSellerDetails/* default */.Z)();
            let sellerIdMain = homeServices/* ConstantsValues */.r.defaultSellerID;
            if (sellerDetailsFromDomain && sellerDetailsFromDomain.AdminMemberId && sellerDetailsFromDomain.AdminMemberId !== "") {
                sellerIdMain = sellerDetailsFromDomain.AdminMemberId;
            }
            localStorage.setItem("sellerID", sellerIdMain);
            homeServices/* default */.Z.getMegamainmenu().then((response)=>{
                setMenu(response);
            });
            homeServices/* default */.Z.getFooter().then((response)=>{
                setFooter(response);
            });
        })();
    }, []);
    // useEffect(() => {
    //    if(FirstCall > 0){
    //    CustomsAPI.getFooter().then(response => {
    //      setFooter(response)
    //    })
    //    }
    // }, [router.asPath,sendOtpApiResponse])
    // useEffect(() => {
    //   if (props.onclick === true) {
    //     history.push('/subfooter')
    //   }
    // }, [])
    const menu1 = menu?.find((res)=>res.WebPageId === 99);
    function productlistpage(pageurl, patrentcaturl, e) {
        //e.preventDefault();
        setPLPCat(pageurl);
        setPLPparenturl(patrentcaturl);
    // return router.push(`/${pageurl}`, { isURLChange: pageurl })
    /*return router.push(
      {
        pathname: `/${pageurl}`, // not router.asPath
        // isURLChange: pageurl,
      })*/ }
    (0,external_react_.useEffect)(()=>{
        if (flag === true) {
        // return history.push('/subfooter')
        }
    }, [
        flag
    ]);
    /* const sendtofooterpage = (e) => {
    // console.log('ssww', e, e.target.className);
    localStorage.setItem('pagefootert', e.target.className)
    if (e.target.href !== '' && e.target.className === '') {
      history.pop()
    } else {
      localStorage.setItem('pagefootert', e.target.className)
      setflag(true)
      // history.push('/subfooter')
      // setpage(true)
    }
    // const data = document.getElementsByClassName()
  } */ // useEffect(() => {
    //   setFirstCall(FirstCall + 1)
    // }, [])
    // useEffect(() => {
    //   if (page === true) {
    //     // window.location.reload()
    //   }
    // }, [page])
    const toggleVisible = ()=>{
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };
    const scrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    (0,external_react_.useEffect)(()=>{
        if (false) {}
    });
    //window.addEventListener('scroll', toggleVisible);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("footer", {
        className: "newFooterContent",
        children: [
            checkValues.some((el)=>router.pathname.includes(el)) ? "" : /*#__PURE__*/ jsx_runtime.jsx(Newsletter, {}),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "container-fluid",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "col-lg-12 col-md-12 col-sm-12 col-xs-12 footersocial",
                    children: [
                        router && router.pathname === "/" ? /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "home-heading",
                            children: /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                children: "Adibuja: Manifest Your Nature"
                            })
                        }) : /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "home-heading",
                            children: /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                children: "Adibuja: Manifest Your Nature"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "indus",
                            id: "links",
                            children: menu1 && menu1.SubMenus.map((itm, prtIndex)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flinksholder",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                            style: {
                                                fontSize: "14px",
                                                fontWeight: "bold",
                                                marginTop: "15px"
                                            },
                                            children: [
                                                itm.DisplayName,
                                                " :"
                                            ]
                                        }),
                                        itm.SubSubMenus.map((subItm, chdIndex)=>/*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                href: `/${subItm.PageUrl}`,
                                                "data-url": subItm.PageUrl,
                                                onClick: (e)=>productlistpage(subItm.PageUrl, itm.PageUrl, e),
                                                className: "flinks",
                                                children: subItm.DisplayName
                                            }, chdIndex))
                                    ]
                                }, prtIndex))
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                children: Ftr !== "" && Ftr !== undefined && Ftr.Description && /*#__PURE__*/ jsx_runtime.jsx("span", {
                    dangerouslySetInnerHTML: {
                        __html: Ftr.Description
                    }
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "scroll-top",
                onClick: scrollToTop,
                style: {
                    display: visible ? "inline" : "none"
                },
                children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                    className: "fa fa-angle-up"
                })
            })
        ]
    });
}
/* harmony default export */ const footer = (Footer);


/***/ })

};
;