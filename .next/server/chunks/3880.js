exports.id = 3880;
exports.ids = [3880];
exports.modules = {

/***/ 3880:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   y: () => (/* binding */ LoadProducts)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icon_linearicons_linearicons_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3884);
/* harmony import */ var _icon_linearicons_linearicons_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_icon_linearicons_linearicons_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9012);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_tooltip_dist_react_tooltip_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9435);
/* harmony import */ var react_tooltip_dist_react_tooltip_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_tooltip_dist_react_tooltip_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_loading_skeleton_dist_skeleton_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6593);
/* harmony import */ var react_loading_skeleton_dist_skeleton_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton_dist_skeleton_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_injectReducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3671);
/* harmony import */ var _utils_injectSaga__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7856);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6466);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _public_assets1_css_bundle_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3858);
/* harmony import */ var _public_assets1_css_bundle_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_public_assets1_css_bundle_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _public_assets1_css_default_min_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(4573);
/* harmony import */ var _public_assets1_css_default_min_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_public_assets1_css_default_min_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _public_assets_css_responsive_min_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(373);
/* harmony import */ var _public_assets_css_responsive_min_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_public_assets_css_responsive_min_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _public_assets_css_style_min_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2269);
/* harmony import */ var _public_assets_css_style_min_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_public_assets_css_style_min_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(2076);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_tooltip__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(6964);
/* harmony import */ var react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _AddToCart__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(5810);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(4172);
/* harmony import */ var _containers_MainPage_api_homeServices__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(4171);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(538);
/* harmony import */ var _saga__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(1953);
/* harmony import */ var _Loadproduct_css__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(6657);
/* harmony import */ var _Loadproduct_css__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_Loadproduct_css__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(7880);
/* harmony import */ var _utils_getSellerDetails__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(5177);
/* eslint-disable no-var */ /* eslint-disable vars-on-top */ /* eslint-disable no-lonely-if */ /* eslint-disable no-unused-expressions */ /* eslint-disable jsx-a11y/label-has-associated-control */ /* eslint-disable jsx-a11y/anchor-is-valid */ /* eslint-disable jsx-a11y/no-noninteractive-element-interactions */ /* eslint-disable jsx-a11y/no-static-element-interactions */ /* eslint-disable jsx-a11y/click-events-have-key-events */ /* eslint-disable react/prop-types */ /**
 *
 * LoadProducts
 *
 */ // import { Skeleton } from 'antd';
// import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




// import PropTypes from 'prop-types';
// import { compose } from 'redux';
// import { useCookies } from "react-cookie";




//import { Link } from 'react-router-dom';







// import '../../../assets/css/font-awesome.min.css';



// import { ToastContainer, toast } from 'react-toastify';

// import { defaultAction } from '../HomeScreen/actions';


////import history from '../../utils/history';


// import { getskuProductdetail } from '../ProductDetail/actions';







// import topSeller from '../../images/top-selling.png'
// import topTrand from '../../images/top-tranding.png'
// import newArrival from '../../images/new-arrival.png'
// import featured from '../../images/featured.png'
// import dealofday from '../../images/deal-of-the-day.png'
// import Success from '../../components/ShowAlert/success';
// import { RecentlyViewProduct } from '../RecentlyViewProduct';
// import ReorderProduct from '../ReorderProduct';
// import mycartAPI from '../MainPage/api/mycartAPI';
// import { getRecentlyviewedproduct } from '../RecentlyViewProduct/actions';
function LoadProducts(props) {
    // const [, setCookie,] = useCookies(['name']);
    // const { isListView, setisListView } = props;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_21__.useRouter)();
    const [isClient, setIsClient] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    //console.log(`rohitaaaa${JSON.stringify(props)}`);
    const { isActive } = props;
    const { compareRefresh, setCompareRefresh } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context__WEBPACK_IMPORTED_MODULE_27__/* .Message_data */ .L);
    // console.log("isActive..", isActive)
    // const { addToCartFunc, closeMsgBarFunc } = props
    const [FirstCall, setFirstCall] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);
    const [shoppingCart, setShoppingCart] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
    const [ProdImg, setProdImg] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    // const [selectItemDisp, setSelectItemDisp] = useState([]);
    // const [selectedproduct, setselectedproduct] = useState([]);
    //console.log(ProdImg);
    // const [showthumbnailimg, setShowThumbnailImg] = useState('false')
    // const [min, setmin] = useState('');
    // const [max, setMax] = useState('');
    // const [qty, setQty] = useState(0);
    // const [QtyCout, setQtyCout] = useState(1);
    // const [productcount, setproductcount] = useState()
    (0,_utils_injectReducer__WEBPACK_IMPORTED_MODULE_9__/* .useInjectReducer */ .v)({
        key: "loadProducts",
        reducer: _reducer__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z
    });
    (0,_utils_injectSaga__WEBPACK_IMPORTED_MODULE_10__/* .useInjectSaga */ .h)({
        key: "loadProducts",
        saga: _saga__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z
    });
    // console.log('Loadproduct props=', props);
    // console.log('props.shppingcart=', props.shppingcart);
    // const homeScreen = useSelector(state => state.homeScreen);
    // console.log('loadproduct homeScreen=', homeScreen);
    const loadProducts = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)((state)=>state.loadProducts);
    // const SubcategoryState = useSelector(state => state.subcategory)
    //console.log("Loaddd..", loadProducts)
    // console.log("filterproduct..", filterproduct)
    // console.log("SubcategoryState..", SubcategoryState)
    // console.log('loadproducts homeScreen=', homeScreen);
    // console.log("skulisting", props.skulisting);
    const [Seleced, setSeleced] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    // const [SelecedPackSize, setSelecedPackSize] = useState([]);
    // const [initialCall, setInitialCall] = useState(false);
    // const [skuname, setskuname] = useState('');
    // const [name, setname] = useState('');
    // const [initialCall, setInitialCall] = useState(false);
    // const addToCartRdcr = useSelector(state => state.addToCart)
    // const loadreducer = useSelector(state => state.loadProducts)
    // const [firstcall, setFirstCall] = useState(0);
    // const [filterprop, setfilterprop] = useState([]);
    // const [setCookie] = useCookies(["Product"]);
    // const [qty, setQty] = useState(0);
    // const [capping, setcapping] = useState(0);
    // const [QtyCout, setQtyCout] = useState(1);
    // const [data, setdata] = useState([]);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();
    // const filterlist = props !==
    const [filtered, setFiltered] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(props.data.FiltersList[0]);
    // const [skuID, setskuID] = useState('');
    // const [recent, setrecent] = useState(false);
    const [filtererror, setfiltererror] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const [filteredImageGallery, setFilteredImageGallery] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
    // const [notify, setnotify] = useState(false);
    // const loadProducts = useSelector(state => state.loadProducts)
    // const addToCartreducer = useSelector(state => state.addToCart)
    // const [show, setShow] = useState(false);
    // const [showmsg, setShowmsg] = useState('');
    // const [fill, setfill] = useState(false);
    // const [ setfiltererror] = useState(false);
    // const [skucode1, setskucode1] = useState([]);
    // console.log('homescreen', homeScreen, addToCartRdcr);
    // const [compareitem, setcompareitem] = useState('');
    // console.log('bbnn', loadProducts);
    // console.log('locader SubcategoryState=', SubcategoryState, addToCartreducer);
    // console.log("setFiltered loadproduct", filtered)
    // console.log("setFiltered Seleced", Seleced)
    const changeFltr = (newFL)=>{
        setSeleced(newFL);
        const P = props.data.FiltersList.find((i)=>i.ListItem === newFL);
        //console.log("P97=", P);
        const filteredImageData = props.data.imagegallery?.filter((item)=>item?.SkuFilterpriceId === P?.SKUFilterPriceId);
        const defaultImageData = props.data.imagegallery?.filter((item)=>item?.SkuFilterpriceId === 0);
        if (filteredImageData?.length > 0) {
            setFilteredImageGallery(filteredImageData);
        } else if (defaultImageData?.length > 0) {
            setFilteredImageGallery([
                defaultImageData[0]
            ]);
        }
        setFiltered(P);
    // setSelecedPackSize([...SelecedPackSize, ...newFL.toString()]);
    // localStorage.setItem('selectedPacksize', newFL)
    };
    // console.log("setSelecedPackSize==", SelecedPackSize);
    // useEffect(() => {
    //   if (loadProducts !== undefined) {
    //     setnotify(loadProducts.notify)
    //   }
    // }, [loadProducts])
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        // setSeleced(localStorage.getItem('selectedPacksize'));
        let productFiltersPosition = 0;
        let lastSelectedVariant = "";
        if (props.shppingcart && props.shppingcart !== "" && props.data.FiltersList[1]) {
            const sortShoppingCartArray = props.shppingcart.sort((a, b)=>a.ShoppingCartItemId - b.ShoppingCartItemId);
            for(var i = 0; i < sortShoppingCartArray.length; i += 1){
                const shoppingCartItemId = sortShoppingCartArray[i].SKUFilterPriceId;
                for(var j = 0; j < props.data.FiltersList.length; j += 1){
                    const filterListItemId = props.data.FiltersList[j].SKUFilterPriceId;
                    if (filterListItemId === shoppingCartItemId) {
                        productFiltersPosition = j;
                        lastSelectedVariant = props.data.FiltersList[j].ListItem;
                        break;
                    }
                }
            }
            setSeleced(lastSelectedVariant);
            if (lastSelectedVariant) {
                const lastSelectedData = props.data.FiltersList.find((i)=>i.ListItem === lastSelectedVariant);
                const filteredImageData = props.data.imagegallery?.filter((item)=>item?.SkuFilterpriceId === lastSelectedData?.SKUFilterPriceId);
                const defaultImageData = props.data.imagegallery?.filter((item)=>item?.SkuFilterpriceId === 0);
                if (filteredImageData?.length > 0) {
                    setFilteredImageGallery(filteredImageData);
                } else if (defaultImageData?.length > 0) {
                    setFilteredImageGallery([
                        defaultImageData[0]
                    ]);
                }
            } else {
                filteredImageGalleryDetails();
            }
            setFiltered(props.data && props.data.FiltersList[productFiltersPosition]);
        //console.log('coming here1')
        //console.log("P97=1");
        } else {
            //console.log("P97=2");
            //console.log('coming here2')
            filteredImageGalleryDetails();
            setFiltered(props.data && props.data.FiltersList[0]);
        }
    // setFiltered(props.data && props.data.FiltersList[0])
    }, [
        props.shppingcart
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        filteredImageGalleryDetails();
        setIsClient(true);
        if (props.data.FiltersList[0] === undefined) {
            setfiltererror(true);
        }
    }, []);
    const filteredImageGalleryDetails = ()=>{
        if (props.data.FiltersList?.length > 1) {
            const filteredImageData = props.data.imagegallery?.filter((item)=>item?.SkuFilterpriceId === props.data.FiltersList[0]?.SKUFilterPriceId);
            const defaultImageData = props.data.imagegallery?.filter((item)=>item?.SkuFilterpriceId === 0);
            if (filteredImageData?.length > 0) {
                setFilteredImageGallery(filteredImageData);
            } else if (defaultImageData?.length > 0) {
                setFilteredImageGallery([
                    defaultImageData[0]
                ]);
            }
        } else if (props.data.FiltersList?.length === 1) {
            setFilteredImageGallery(props.data.imagegallery);
        }
    };
    // useEffect(() => {
    //   mycartAPI.getShoppingcartDetails()
    //     .then(response => {
    //       console.log('uuuuusss', response)
    //       setShoppingCart(response)
    //     })
    //     .catch(error => {
    //       console.log('error:::', error);
    //     });
    // }, [SubcategoryState])
    // useEffect(() => {
    //   mycartAPI.getShoppingcartDetails()
    //     .then(response => {
    //       console.log('uuuuusss', response)
    //       setShoppingCart(response)
    //     })
    //     .catch(error => {
    //       console.log('error:::', error);
    //     });
    // }, [SubcategoryState])
    //   if (loadreducer && loadreducer.IsMsgBar === true) {
    //     setfill(true)
    //   }
    // }, [loadreducer])
    // useEffect(() => {
    //   if (skucode.length === 0) {
    //     setInitialCall(true)
    //     console.log('w',);
    //     setname(skuname)
    //   } else {
    //     setInitialCall(false)
    //   }
    // }, [])
    // function NotifyMe() {
    //   dispatch(notifyMeAction(filtered.SKUFilterPriceId))
    // }
    // useEffect(() => {
    //   // console.log('homeScreen', homeScreen);
    //   if (loadProducts !== undefined && shoppingCart !== undefined) {
    //     // const loadShop = loadProducts.shoppingCartDetails
    //     // const arr = [...shoppingCart, ...loadShop]
    //     setShoppingCart(loadProducts.shoppingCartDetails)
    //     // console.log('loadProducts loadProducts', shoppingCart, loadShop);
    //   }
    // }, [])
    // useEffect(() => {
    //   if (homeScreen !== undefined) {
    //     setShoppingCart(homeScreen.shoppingCartDetails)
    //   }
    // }, [homeScreen,])
    // function IncrementDecrementCart(action) {
    //   if (action === 'inc') {
    //     setQty(qty + QtyCout)
    //     addToCartFunc(qty + 1, props.data.SkuId, filtered.SKUFilterPriceId)
    //     setTimeout(() => {
    //       closeMsgBarFunc()
    //     }, 5000)
    //   }
    //   if (action === 'dec') {
    //     setQty(qty - QtyCout)
    //     addToCartFunc(qty - 1, props.data.SkuId, filtered.SKUFilterPriceId)
    //     setTimeout(() => {
    //       closeMsgBarFunc()
    //     }, 5000)
    //   }
    // }
    // const QtyCoutFun = (e) => {
    //   setQtyCout(1)
    // }
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (props.shppingcart !== undefined) {
            setShoppingCart(props.shppingcart);
        }
    }, [
        props.shppingcart
    ]);
    // useEffect(() => {
    //   // console.log('homeScreen', homeScreen);
    //   if (props.skulisting === true && addToCartRdcr !== undefined) {
    //     setShoppingCart(addToCartRdcr.shoppingcartDetails)
    //   }
    // }, [addToCartRdcr, homeScreen])
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        setFirstCall(FirstCall + 1);
    }, []);
    /* useEffect(() => {
    if (props !== undefined && props.data !== undefined) {
      setFiltered(props.data.FiltersList && props.data.FiltersList[0])
      // setSeleced(props.data.FiltersList && props.data.FiltersList[0].ListItem)
    }
  }, [props,]) */ async function AddToWishlist(filter) {
        const sellerDetailsFromDomain = await (0,_utils_getSellerDetails__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z)();
        let sellerIdMain = _containers_MainPage_api_homeServices__WEBPACK_IMPORTED_MODULE_23__/* .ConstantsValues */ .r.defaultSellerID;
        if (sellerDetailsFromDomain && sellerDetailsFromDomain.AdminMemberId && sellerDetailsFromDomain.AdminMemberId !== "") {
            sellerIdMain = sellerDetailsFromDomain.AdminMemberId;
        }
        localStorage.setItem("sellerID", sellerIdMain);
        // console.log('bbnn', loadProducts);
        if (localStorage.getItem("CustGUID") === null) {
            localStorage.setItem("lastVisitedUrl", router.asPath);
            router.push("/login");
        } else {
            dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_29__/* .addTowishlist */ .zL)(filter.SkuDetailId, filter.SKUFilterPriceId));
        // setShowmsg()
        // console.log("msgchk..", loadProducts.receivemsg)
        // setShowmsg(loadProducts.receivemsg)
        // setShow(true)
        // console.log("chkwishlist..", loadProducts)
        // setShowmsg(loadProducts.receivemsg)
        // setShow(true)
        }
    }
    // useEffect(() => {
    //   console.log('bbnn', loadProducts);
    //   if (loadProducts !== undefined && loadProducts.receivemsg) {
    //     console.log("responsemsg..", loadProducts.receivemsg)
    //     setShowmsg(loadProducts.receivemsg)
    //     setShow(true)
    //   }
    // }, [loadProducts])
    // useEffect(() => {
    //   // const arr = []
    //   // console.log('skucode', skucode, skucode.indexOf(skuname));
    //   // const array = skucode
    //   // if (!initialCall && !array.includes(name)) {
    //   //   array.push(skuname);
    //   // }
    //   // console.log('skuname', localStorage.getItem('skuproduct'));
    //   // console.log('skuid', localStorage.getItem('skuproductID'));
    //   // if ( )
    //   // if (!skucode.includes(skucode)) {
    //   //   console.log('✅ array contains apple');
    //   //   skucode.push(props.index)
    //   // }
    //   // const uniqueNames = Array.from(new Set(skucode));
    //   // console.log('hhjj', uniqueNames);
    //   // if ()
    // }, [])
    // function removedoubleComma(string) {
    //   return string.replace(',', ',')
    // }
    // function removedoubleComma(string) {
    //   return string.replace(',,', ',')
    // }
    // useEffect(() => {
    //   // localStorage.setItem('skuproductID', skuID)
    //   if (compared === true) {
    //     localStorage.setItem('skuproduct', skucode)
    //   }
    // }, [compared])
    // function removeFromString(stringValue = '', SkuCode) {
    //   let str = stringValue.replace(SkuCode, '')
    //   str = removedoubleComma(str)
    //   if (str.startsWith(',')) {
    //     str = str.substring(1, str.length)
    //     return str
    //   }
    //   return str
    // }
    // toast.configure();
    function AddToCompare(SkuCode, PageUrl) {
        // setrecent(true)
        let compare = [];
        compare = localStorage.getItem("skuproduct");
        // console.log("skupro..", skuproduct)
        // console.log('compare', compare, !compare.includes(SkuCode));
        if (compare && !compare.includes(SkuCode)) {
            if (compare === "") {
                compare += `${SkuCode}`;
            // setShowmsg(loadProducts.addToCartMsg)
            // console.log('Product added to compare list successfully')
            } else {
                compare += `,${SkuCode}`;
            // console.log('Product added to compare list successfully')
            }
            // console.log('comparxxe', compare);
            localStorage.setItem("skuproduct", compare);
            // dispatch(getrecent(compare))
            // dispatch(defaultAction(compare))
            // const mySubString = ",";
            // const count = localStorage.getItem('skuproduct').split(mySubString).length - 1;
            //router.push(`/product/${PageUrl}`, { skuUrl: PageUrl })
            localStorage.setItem("PageUrl", window.btoa(PageUrl));
        // if (count === 3) {
        //   // alert('You have reached your maximum limit')
        // } else {
        // dispatch(addToComapre(localStorage.getItem('skuproduct')))
        }
    // } else {
    //   alert('Already added')
    // }
    }
    //origin function back - 23-08-23
    /*const AddToCompare1 = (SkuCode) => {
    console.log("load..", SkuCode)
    // console.log("skuid..", (loadProducts.comaprelist).SkuId)
    // const finalseletItem = [selectItemDisp, ...SkuCode];
    // const uniqueNames = finalseletItem.filter((val, id, disparray) => disparray.indexOf(val) == id);
    // setSelectItemDisp(uniqueNames);
    const compare = localStorage.setItem('skuproduct1', SkuCode)
    //console.log('compare..', compare)
    if ((loadProducts.comaprelist).length <= 2) {
      dispatch(addToComapre(localStorage.getItem('skuproduct1')))
      toast("Product added to compare list successfully")
      // setShow(true);
      // setShowmsg("Product added to compare list successfully")
    }
    else {
      toast('You have reached your maximum limit to compare items')
    }
  }*/ async function AddToCompare1(SkuId) {
        const sellerDetailsFromDomain = await (0,_utils_getSellerDetails__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z)();
        let sellerIdMain = _containers_MainPage_api_homeServices__WEBPACK_IMPORTED_MODULE_23__/* .ConstantsValues */ .r.defaultSellerID;
        if (sellerDetailsFromDomain && sellerDetailsFromDomain.AdminMemberId && sellerDetailsFromDomain.AdminMemberId !== "") {
            sellerIdMain = sellerDetailsFromDomain.AdminMemberId;
        }
        localStorage.setItem("sellerID", sellerIdMain);
        const compareflag = false;
        fetch("https://api.ipify.org?format=json").then((response)=>response.json()).then((data)=>{
            // CustomsAPI.getnewcompare(SkuId, data.ip)
            dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_29__/* .getcompare */ .WS)(SkuId, data.ip, compareflag));
        }).catch((error)=>console.log(error));
    }
    function LoadProduct(event, PageUrl) {
        //console.log("eventttt", event);
        // console.log("PageUrl", PageUrl);
        dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_29__/* .enablequickreviw */ .Yj)(true, PageUrl));
        // document.body.style.overflow = "hidden";
        // document.body.classList.add('ReactModal__Body--open');
        localStorage.setItem("PageUrl", window.btoa(PageUrl));
        event.stopPropagation();
    // dispatch(getskuProductdetail(window.atob(localStorage.getItem('PageUrl'))))
    }
    // const productdetail = (PageUrl, SkuId) => {
    // useEffect(() => {
    // if (skucode.length === 0
    // ) {
    //   setInitialCall(true)
    // } else {
    //   setInitialCall(false)
    // }
    // if (FirstCall > 0 && !initialCall) {
    // const mySubString = ",";
    // const count = (localStorage.getItem('skuproduct')).split(mySubString).length - 1;
    // console.log('count', count);
    // if (count === 3) {
    //   alert('max limit')
    // } else {
    // }
    // }, [])
    // console.log('as', localStorage.getItem('skuproduct'));
    // console.log('aSs', localStorage.getItem('skuproductID'));
    // console.log("props.data", props.data, props.data.PageUrl, props);
    function LoadProductPDP(PageUrl) {
        // history.push(`/product/${PageUrl}`, { state: { PageUrl } })
        //   console.log("PageUrl", PageUrl);
        // console.log("window.btoa(PageUrl)=", window.btoa(`/product/${PageUrl}`), window.btoa(PageUrl));
        localStorage.setItem("PageUrl", window.btoa(PageUrl));
    //window.location.href=`/product/${PageUrl}`;
    //router.push(`/product/${PageUrl}`, undefined, { shallow: true });
    // dispatch(getskuProductdetail(window.atob(localStorage.getItem('PageUrl'))))
    }
    // useEffect(() => {
    //   setInterval(() => {
    //     setShow(false)
    //   }, 3000);
    // }, [closemsg])
    // const closemsg = () => {
    // }
    // console.log("product URL=", props.data);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (props !== undefined) {
            setProdImg(props.data && props.data.ListingImage);
        }
    }, [
        props
    ]);
    const changeImg = (Img)=>{
        // console.log("ProdImg..", ProdImg)
        setProdImg(Img);
    };
    //console.log(changeImg);
    // const handleviewmore = () => {
    //   toast("imgview")
    // }
    // const handleQuickLink=()=>{
    //   // alert('hiee')
    //   // document.getElementById('__next').style.overflow='hidden';
    //      document.body.style.overflow = "hidden";
    // }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4__.SkeletonTheme, {
                children: isActive || isActive === undefined ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: filtererror ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        children: "no data"
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: props.skulisting ? "product-item subproduct_item mb-30 pr-block" : "product-item  mb-30 pr-block",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "product-thumb",
                                children: [
                                    isClient && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
                                        href: `/product/${props.data.PageUrl}`,
                                        className: "ajaxload",
                                        onClick: ()=>LoadProductPDP(props.data.PageUrl || props.data.SkuLink),
                                        children: filteredImageGallery?.length && filteredImageGallery?.length > 1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_20___default()), {
                                            interval: null,
                                            indicators: true,
                                            children: filteredImageGallery.map((imgData, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_20___default().Item), {
                                                    interval: 0,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                        alt: props.data.Name,
                                                        referrerPolicy: "no-referrer",
                                                        className: "pri-img",
                                                        id: `productlistingimages-${props.data.SkuId}`,
                                                        src: imgData.PDPImage,
                                                        loading: "lazy",
                                                        width: 250,
                                                        height: 250,
                                                        onClick: ()=>AddToCompare(props.data.SkuId, props.data.SkuLink ? props.data.SkuLink : props.data.PageUrl)
                                                    })
                                                }, index))
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            alt: props.data.Name,
                                            referrerPolicy: "no-referrer",
                                            className: "pri-img",
                                            loading: "lazy",
                                            id: `productlistingimages-${props.data.SkuId}`,
                                            src: filteredImageGallery?.length > 0 ? filteredImageGallery[0]?.PDPImage : props.data.ListingImage,
                                            width: 250,
                                            height: 250,
                                            onClick: ()=>AddToCompare(props.data.SkuId, props.data.SkuLink ? props.data.SkuLink : props.data.PageUrl)
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "box-label",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                id: "showicons",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        style: {
                                                            display: props.data.IsDealOfTheDay && props.source !== "dealofday" ? "block" : "none"
                                                        },
                                                        children: filtered && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            id: "discountpercent84562",
                                                            className: " label-product label_sale dealofdaytext",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                type: "button",
                                                                children: "Deals"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        style: {
                                                            display: props.data.IsTopSelling && props.source !== "topseller" ? "block" : "none"
                                                        },
                                                        children: filtered && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            id: "discountpercent84562",
                                                            className: " label-product label_sale topsellingtext",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                type: "button",
                                                                children: "Best Seller"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        style: {
                                                            display: props.data.IsTopTrending && props.source !== "toptrend" ? "block" : "none"
                                                        },
                                                        children: filtered && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            id: "discountpercent84562",
                                                            className: " label-product label_sale toptrendingtext",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                type: "button",
                                                                children: "Trending"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        style: {
                                                            display: props.data.IsFeatured && props.source !== "featured" ? "block" : "none"
                                                        },
                                                        children: filtered && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            id: "discountpercent84562",
                                                            className: " label-product label_sale featuredtext",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                type: "button",
                                                                children: "Featured"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        style: {
                                                            display: props.data.IsNewArrival && props.source !== "newarrival" ? "block" : "none"
                                                        },
                                                        children: filtered && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            id: "discountpercent84562",
                                                            className: " label-product label_sale newArrivaltext",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                type: "button",
                                                                children: "New"
                                                            })
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "action-links",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        onClick: ()=>AddToWishlist(filtered),
                                                        title: "Add to Wishlist",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "lnr lnr-heart"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                        onClick: ()=>AddToCompare1(props.data.SkuId),
                                                        title: "Compare",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "lnr lnr-sync"
                                                            }),
                                                            " "
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        to: true,
                                                        title: "Quick view",
                                                        className: "LoadProduct'coffee-bean') quickmodalview",
                                                        onClick: (event)=>LoadProduct(event, props.data.PageUrl),
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "lnr lnr-magnifier" /*onClick={handleQuickLink}*/ 
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "greenveg ",
                                        style: {
                                            display: props.data.IsVeg ? "block" : "none"
                                        },
                                        children: filtered && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                children: props.data.IsVeg
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "rednonveg",
                                        style: {
                                            display: props.data.IsNonVeg ? "block" : "none"
                                        },
                                        children: filtered && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                children: props.data.IsNonVeg
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "Eggiterian",
                                        style: {
                                            display: props.data.IsEggiterian ? "block" : "none"
                                        },
                                        children: filtered && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                children: props.data.IsEggiterian
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "product-caption",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "product-name",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                            children: props.data.DisplayName && props.data.DisplayName !== "" || props.data.Name && props.data.Name !== "" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                href: `/product/${props.data.PageUrl}`,
                                                onClick: ()=>LoadProductPDP(props.data.PageUrl || props.data.SkuLink),
                                                prefetch: false,
                                                children: props.data.DisplayName ? props.data.DisplayName : props.data.Name
                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                href: `/product/${props.data.PageUrl}`,
                                                onClick: ()=>LoadProductPDP(props.data.PageUrl || props.data.SkuLink),
                                                prefetch: false,
                                                children: props.data.name ? props.data.name : props.data.SkuCode
                                            })
                                        })
                                    }),
                                    filtered && filtered.FilterSPPrice ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "price-box",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "regular-price",
                                                        children: filtered && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            className: "special-price",
                                                            id: "spprice84562",
                                                            children: [
                                                                "₹",
                                                                parseFloat(filtered.FilterSPPrice).toFixed(2)
                                                            ]
                                                        })
                                                    }),
                                                    filtered.FilterSPPrice !== filtered.FilterMRPPrice ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: filtered && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "old-price",
                                                            id: "oldprice84562",
                                                            style: {
                                                                display: filtered.IsDiscountedSFP ? "inline-block" : "none"
                                                            },
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("del", {
                                                                children: [
                                                                    "M.R.P: ₹",
                                                                    parseFloat(filtered.FilterMRPPrice).toFixed(2)
                                                                ]
                                                            })
                                                        })
                                                    }) : null
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                style: {
                                                    fontSize: "12px",
                                                    color: "#3CC191",
                                                    fontWeight: "500",
                                                    display: "inline-block",
                                                    textAlign: "right"
                                                },
                                                children: filtered && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    id: "discountpercent84562",
                                                    style: {
                                                        display: filtered.IsDiscountedSFP ? "block" : "none"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            style: {
                                                                color: "#989595",
                                                                fontWeight: 500
                                                            },
                                                            children: "You Save"
                                                        }),
                                                        "\xa0₹",
                                                        parseFloat(filtered.FilterSavedRs).toFixed(2),
                                                        " (",
                                                        filtered.FilterDiscount,
                                                        "% Off)"
                                                    ]
                                                })
                                            })
                                        ]
                                    }) : "",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "starReating",
                                        children: [
                                            ...Array(5)
                                        ].map((star, index)=>{
                                            const ifeedb = index + 1;
                                            // console.log("chkindex..", index)
                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__.FontAwesomeIcon, {
                                                type: "button",
                                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__.faStar,
                                                color: props.data.Rating >= ifeedb ? "#222222" : "lightgrey",
                                                style: {
                                                    fontSize: "0.8em",
                                                    borderColor: "orange"
                                                },
                                                className: index ? "on" : "off"
                                            }, ifeedb);
                                        })
                                    }),
                                    props && props.data && !props.data.InStock && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        className: "lbl-notavailable",
                                        children: "Not Available"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "twobox",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "uom-box",
                                                children: [
                                                    isClient && props.data.FiltersList.length === 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: props.data.FiltersList[0].ListItem
                                                    }),
                                                    isClient && props.data.FiltersList.length > 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                                                        onChange: (event)=>{
                                                            changeFltr(event.target.value);
                                                        // localStorage.setItem('selectedPacksize', event.target.value)
                                                        },
                                                        value: Seleced,
                                                        "aria-label": "State",
                                                        children: props.data.FiltersList.map((itm, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("option", {
                                                                value: itm.ListItem,
                                                                children: [
                                                                    itm.ListItem,
                                                                    " - ₹",
                                                                    parseFloat(itm.FilterSPPrice).toFixed(2),
                                                                    "  ",
                                                                    filtered.IsDiscountedSFP ? `${filtered.FilterDiscount} % off` : null
                                                                ]
                                                            }, index))
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "addtocartlistingbox" /*style={{ display: 'flex', alignItems: 'center' }}*/ ,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AddToCart__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                                                    data: props.data,
                                                    shoppingCart: shoppingCart,
                                                    filtered: filtered,
                                                    skulisting: props.skulisting,
                                                    notify: props.data.IsNotified,
                                                    wishlist: false
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }, props.index)
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    role: "tabpanel",
                    "aria-labelledby": "headingTax",
                    "data-parent": "#cart_accordion",
                    id: "listviewproducts",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "table",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "thfix"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "listviewinfo",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "productlistimg",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "product-thumb",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                    href: `/product/${props.data.PageUrl}`,
                                                    className: "ajaxload",
                                                    onClick: ()=>LoadProductPDP(props.data.PageUrl || props.data.SkuLink),
                                                    children: props && props.data && props.data.ListingImage ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        referrerPolicy: "no-referrer",
                                                        // onClick={() => productdetail(props.data.SkuLink ? props.data.SkuLink : props.data.PageUrl, props.data.SkuId)}
                                                        onClick: ()=>AddToCompare(props.data.SkuId, props.data.SkuLink ? props.data.SkuLink : props.data.PageUrl),
                                                        // onClick={()=>productdetail(props.data.SkuLink ,props.data.SkuId)}
                                                        className: "pri-img",
                                                        src: props.data.ListingImage,
                                                        onError: (e)=>{
                                                            e.target.src = "https://productionadmin.adibuja.com/Media/Images/250x250/image_not_found.jpg" // some replacement image
                                                            ;
                                                        // e.target.style = 'padding: 8px; margin: 16px' // inline styles in html format
                                                        },
                                                        alt: "Exautic beans"
                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                        width: "250%",
                                                        height: "250%"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "box-label",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "action-links",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                                href: "#",
                                                                onClick: ()=>AddToWishlist(filtered),
                                                                title: "Add to Wishlist",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "lnr lnr-heart"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                                href: "#",
                                                                onClick: ()=>AddToCompare1(props.data.SkuId),
                                                                title: "Compare",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                        className: "lnr lnr-sync"
                                                                    }),
                                                                    " "
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "greenveg greenIcon",
                                                    style: {
                                                        display: props.data.IsVeg ? "block" : "none"
                                                    },
                                                    children: filtered && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            children: props.data.IsVeg
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "rednonveg redIcon",
                                                    style: {
                                                        display: props.data.IsNonVeg ? "block" : "none"
                                                    },
                                                    children: filtered && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            children: props.data.IsNonVeg
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "Eggiterian yelloIcon",
                                                    style: {
                                                        display: props.data.IsEggiterian ? "block" : "none"
                                                    },
                                                    children: filtered && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            children: props.data.IsEggiterian
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "productlistdata",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "listviewProductname",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "product-name listname",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: `/product/${props.data.PageUrl}`,
                                                            onClick: ()=>LoadProductPDP(props.data.PageUrl || props.data.SkuLink),
                                                            children: props.data.SkuCode ? props.data.SkuCode : props.data.DisplayName
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "listviewRegularprice",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "price-box list",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "regular-price",
                                                                    children: filtered && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                        className: "special-price",
                                                                        id: "spprice84562",
                                                                        children: [
                                                                            "₹",
                                                                            parseFloat(filtered.FilterSPPrice).toFixed(2)
                                                                        ]
                                                                    })
                                                                }),
                                                                filtered && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "old-price",
                                                                    id: "oldprice84562",
                                                                    style: {
                                                                        display: filtered.IsDiscountedSFP ? "inline-block" : "none"
                                                                    },
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("del", {
                                                                        children: [
                                                                            "₹",
                                                                            parseFloat(filtered.FilterMRPPrice).toFixed(2)
                                                                        ]
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        style: {
                                                            fontSize: "12px",
                                                            color: "#3CC191",
                                                            fontWeight: "500",
                                                            display: "inline-block",
                                                            textAlign: "right"
                                                        },
                                                        children: filtered && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            id: "discountpercent84562",
                                                            style: {
                                                                display: filtered.IsDiscountedSFP ? "block" : "none"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    style: {
                                                                        color: "#989595",
                                                                        fontWeight: 500
                                                                    },
                                                                    children: "You Save"
                                                                }),
                                                                "\xa0₹",
                                                                parseFloat(filtered.FilterSavedRs).toFixed(2),
                                                                " (",
                                                                filtered.FilterDiscount,
                                                                "% Off)"
                                                            ]
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "starReating",
                                                children: [
                                                    ...Array(5)
                                                ].map((star, index)=>{
                                                    const ifeedb = index + 1;
                                                    // console.log("chkindex..", index)
                                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__.FontAwesomeIcon, {
                                                        type: "button",
                                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__.faStar,
                                                        color: props.data.Rating >= ifeedb ? "#222222" : "lightgrey",
                                                        style: {
                                                            fontSize: "0.8em",
                                                            borderColor: "orange"
                                                        },
                                                        className: index ? "on" : "off"
                                                    }, ifeedb);
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "productdropdwon",
                                                "data-filter": JSON.stringify(filtered),
                                                children: [
                                                    props && props.data && !props.data.InStock && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                        className: "lbl-notavailable",
                                                        children: "Not Available"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "uom-box",
                                                        children: [
                                                            props.data.FiltersList.length === 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: props.data.FiltersList[0].ListItem
                                                            }),
                                                            props.data.FiltersList.length > 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                                                                onChange: (event)=>{
                                                                    changeFltr(event.target.value);
                                                                // localStorage.setItem('selectedPacksize', event.target.value)
                                                                },
                                                                value: Seleced,
                                                                children: props.data.FiltersList.map((itm, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("option", {
                                                                        value: itm.ListItem,
                                                                        children: [
                                                                            itm.ListItem,
                                                                            " - ₹",
                                                                            parseFloat(itm.FilterSPPrice).toFixed(2),
                                                                            "  ",
                                                                            filtered.IsDiscountedSFP ? `${filtered.FilterDiscount} % off` : null
                                                                        ]
                                                                    }, index))
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "addtocartlistingbox",
                                                    style: {
                                                        display: "flex",
                                                        alignItems: "center"
                                                    },
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AddToCart__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                                                        data: props.data,
                                                        shoppingCart: shoppingCart,
                                                        filtered: filtered,
                                                        skulisting: props.skulisting,
                                                        notify: props.data.IsNotified,
                                                        wishlist: false
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_tooltip__WEBPACK_IMPORTED_MODULE_19__.Tooltip, {
                id: "my-tooltip"
            })
        ]
    });
}
// LoadProducts.propTypes = {
//   addToCartFunc: PropTypes.func,
//   closeMsgBarFunc: PropTypes.func,
// };
// function mapDispatchToProps(dispatch) {
//   return {
//     addToCartFunc: (qty, SkuId, SKUFilterPriceId) => dispatch(addToCart(qty, SkuId, SKUFilterPriceId)),
//     closeMsgBarFunc: () => dispatch(closeMsgBar())
//   };
// }
// const withConnect = connect(
//   null,
//   mapDispatchToProps,
// );
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadProducts);


/***/ }),

/***/ 6593:
/***/ (() => {



/***/ }),

/***/ 9435:
/***/ (() => {



/***/ }),

/***/ 6657:
/***/ (() => {



/***/ })

};
;