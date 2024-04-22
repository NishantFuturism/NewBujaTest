/* eslint-disable react/button-has-type */
/* eslint-disable no-return-assign */
/* eslint-disable import/order */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-expressions */
/* eslint-disable-line */
/* eslint-disable no-useless-escape */
/**
 *
 * MavigationBar
 *
 */
import Link from 'next/link';
import Image from 'next/image';
import '@icon/linearicons/linearicons.css';
// import { faSignInAlt, faCheckSquare, faUser } from '@fortawesome/free-solid-svg-icons';
// import { routeToHistory } from '../../containers/HomePage/historyPush';
import React, { useEffect, useRef, useState, useContext } from 'react';
// import '../../../public/assets1/css/bundle.css';
//import { useCookies } from "react-cookie";
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
// import { useLocation } from 'react-router-dom/cjs/react-router-dom';
import { useInjectReducer } from '@/utils/injectReducer';
import { useInjectSaga } from '@/utils/injectSaga';
import '../../../public/assets1/css/default.min.css';
// import '../../../assets1/css/font-awesome.min.css';
// import '../../../assets1/css/chat/font-awesome.min.css';
import '../../../public/assets1/css/responsive.min.css';
// import '../../../public/assets1/css/style.min.css';
import '../../../public/assets/css/style.min.css';
import adibujalogo from '../../../public/assets1/img/icon/adibuja-logo.svg';
////import history from '../../utils/history';
import { useRouter } from 'next/router';
import { Cart } from "../Cart/index";
import { dbAutosuggestionlist, isOpenMyCartAction, mobilefilterIcon, defaultAction } from './actions';
import './MavigationBar.css';
import reducer from './reducer';
import saga from './saga';
// import SearchAPI from '../MainPage/api/search';
import { toast, ToastContainer } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { LocationPopup } from "../LocationPopup";
import { useLocalStorage } from '../../useLocalStorage';
// import { getlocationtitle } from "../LocationPopup/actions";
import LocationApi from "../MainPage/api/Locationapi";
import CustomsAPI from "../MainPage/api/homeServices";
import Success from '../../components/ShowAlert/success';
import Menudropdown from "./Menudropdown";
import { Message_data } from '@/context';
import LogoLoader from '@/components/LoadingIndicator/LogoLoader';
import { ConstantsValues } from '../MainPage/api/homeServices';
import { FiChevronLeft } from 'react-icons/fi';
import { BiChevronRight } from 'react-icons/bi';
import SellerMenu from './SellerMenu'
//import cycling from '../../../public/images/cycling.gif'
// import Header from '../../components/Header';
export function MavigationBar(props) {
  const router = useRouter();
  useInjectReducer({ key: 'mavigationBar', reducer });
  useInjectSaga({ key: 'mavigationBar', saga });

  const [PLPCat, setPLPCat] = useState('');
  const [PLPparenturl, setPLPparenturl] = useState('');
  const [lastVisitedUrl, setlastVisitedUrl] = useState('');
  const [search, setsearch] = useState('');
  const [searchmob, setsearchmob] = useState('');
  const [length, setlength] = useState('');
  const [CustGUID, setCustGUID] = useState('');
  const [UserFirstName, setUserFirstName] = useState('');
  const [sublocalityvalue, setsublocalityvalue] = useState('');
  const [pincodevalue, setpincodevalue] = useState('');
  const [localLocName,setLocalLocName] = useState('');
  const [localLocPin,setLocalLocPin] = useState('');
  const selector = useSelector(state => state.home)
  const loadProducts = useSelector(state => state.loadProducts)
  const mavigationBarReducer = useSelector(state => state.mavigationBar)
  const locationPopupState = useSelector(state => state.locationPopup)
  const sendOtpApiResponse = useSelector(state => state.login)
  const [Megamainmenu, setMegamainmenu] = useState([]);
  const [MegaMultiMenu, setMegaMultiMenu] = useState([]);
  const [sub, setSub] = useState([]);
  const [selectedIndex, setselectedIndex] = useState(null)
  const [hideMenu, setHideMenu] = useState(false);
  // const [subMega, setSubMega] = useState([]);
  const [hideMegaMenu, setHideMegaMenu] = useState(false);
  const [CartData, setCart] = useState({})
  // const [text, settext] = useState('')
  const [wishlistdata, setwishlistdata] = useState(0)
  const [enblesuggestion, setenblesuggestion] = useState(false)
  // const [closebar, setClosebar] = useState(false)
  const [serchlist, setserchlist] = useState(false)
  const [divenable, setdivenable] = useState(false)
  const [searchenable, setSearchenable] = useState(false)
  // const [enablecollapse, setenablecollapse] = useState(false)
  // const [wishcount, setwishcount] = useState(0)
  const [isActive, setisActive] = useState(false)
  const [defaultlocdata, setdefaultlocdata] = useState([])
  const [popup, setpopup] = useState(false)
  const [AccountName, setAccountName] = useState('')
  const [isLogin, setIsLogin] = useState(false);
  const [anchorshow, setAnchorshow] = useState(false);
  const [warnmsg, setWarnmsg] = useState('')
  const [successStatus, setSuccessStatus] = useState(false)
  const [showLogOutPopUP, setShowLogOutPopUP] = useState(false);
  const [showCartPopup, setShowCartPopup] = useState(false);
  const [comparePdCount,setComparePdCount] = useState(0);
  const [menuClass, setmenuClass]=useState(false)
  // const [productList, setProductList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isClient, setisClient]=useState(false)
  const { compareRefresh, setCompareRefresh, selectedLocationZip, setSelectedLocationZip, selectedLocationName, setSelectedLocationName, locationUpdateFlag } = useContext(Message_data);


  const topMenuData=props.topMenuData;
  let websiteMenu = [];
  let  websiteMegaMenu = [];
  // if (topMenuData && topMenuData!==undefined && topMenuData.length>0) {
  //   let menu = topMenuData.find(res => res.WebPageId === 99);
  //   websiteMenu = menu.SubMenus.filter((month, idx) => idx < 8)
  // }else {

  // }

  
 
  // const prevlocation = useLocation();
  const checkValues = ["/category/"];
  const ref = useRef()
  const accountRef = useRef();
  // const dataReducer = useSelector(state => state)
  
  // console.log("mavigationloadProducts", loadProducts);
  const dispatch = useDispatch()
  // console.log("props.menu", props);

  let timeoutMob = null;

  useEffect(()=> {
    if (window.localStorage) {
      const custGuid = window.localStorage.getItem('CustGUID');
      if (custGuid) {
        document.body.setAttribute('data-custguid', window.atob(custGuid));
      } else {
        document.body.setAttribute('data-custguid', ConstantsValues.defaultCustGUID);
      }
    }
    if (router && router.pathname && router.pathname.includes('/category/')) {
      dispatch(defaultAction())
    }
    setisClient(true)
  },[])

  useEffect(() => {
    CustomsAPI.getproductcompare()
      .then(response => {
        
        setComparePdCount(response.length)
      })
      .catch(error => {
        console.log('error:::', error);
      });
  }, [router])


  function handleCategoryNavigation(e) {
    e.preventDefault();
    if (e.target.href.includes('/category')) {     
      //window.location.reload(true);
      window.location.href=e.target.href;
    } else {
      router.push(`/${catUrl}`, undefined, { shallow: true });
    }   
  }

  const cartPopupHandler = () => {
    if (showCartPopup) {
      setShowCartPopup(false)
    } else {
      setShowCartPopup(true)
    }    
  }
  
  useEffect(() => {
    setCompareRefresh(true)
    CustomsAPI.getproductcompare()
      .then(response => {
        
        setComparePdCount(response.length)
      })
      .catch(error => {
        console.log('error:::', error);
      });
  }, [loadProducts])


  // useEffect(()=>{
  //   console.log('loadp',loadProducts?.newcompare)
  //   if(loadProducts?.newcompare) {
  //     setComparePdCount(loadProducts.newcompare.length)
  //   }
  // },[loadProducts])
  
  // useEffect(() => {  
  //   setCompareRefresh(false)
  //     // let comparedProdData = productList;
  //     console.log('chkproductList',productList)
  //     if (productList && productList.length>0) {
  //       console.log('comparelength',productList.length)
  //       setComparePdCount(productList.length)
  //     }
  // },[loadProducts])

  // useEffect(() => {
  //   setCompareRefresh(false)
  //   let comparedProdData = productList;
  //   console.log('ccc10',comparedProdData)
  //     if (comparedProdData && comparedProdData.length>0) {
  //       setComparePdCount(comparedProdData.length)
  //     } else if (comparedProdData) {
  //       setComparePdCount(comparedProdData.length)
  //     }
  // },[compareRefresh])


  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      setPLPCat(localStorage.getItem('PLPCat'));
      setPLPparenturl(localStorage.getItem('PLPparenturl'));
      setlastVisitedUrl(localStorage.getItem('lastVisitedUrl'));
      setsearch(localStorage.getItem('search'));
      setsearchmob(localStorage.getItem('searchmob'));
      setlength(localStorage.getItem('length'));
      setCustGUID(localStorage.getItem('CustGUID'));
      setUserFirstName(localStorage.getItem('UserFirstName'));
      setsublocalityvalue(sublocalityvalue);
      setpincodevalue(pincodevalue);
    }
  },[])

  useEffect(()=>{
    setLocalLocName(Cookies.get('sublocalityvalue'))
    setLocalLocPin(Cookies.get('pincodevalue'))
  },[locationUpdateFlag])

  useEffect(() => {
    if (props !== undefined) {
      setMegamainmenu(props.topMenuData);
      setCart(props.CartData)
      setwishlistdata(props.wishlistdata)
      setMegaMultiMenu(props.topMenuData)
    }
    setLocalLocName(Cookies.get('sublocalityvalue'))
    setLocalLocPin(Cookies.get('pincodevalue'))
    // if (typeof window !== 'undefined' && window.localStorage) {
    //   if (localStorage.getItem('sublocalityvalue') && localStorage.getItem('sublocalityvalue')!=="") {
    //     setLocalLocName(localStorage.getItem('sublocalityvalue'))
    //   }
    //   if (localStorage.getItem('pincodevalue') && localStorage.getItem('pincodevalue')!=="") {
    //     setLocalLocPin(localStorage.getItem('pincodevalue'))
    //   }
    // }
  }, [props]);
  useEffect(() => {
    // setenblesuggestion(false)
    if (mavigationBarReducer !== undefined) {
      
      setserchlist(mavigationBarReducer.dblist)
      if (mavigationBarReducer.dblist && mavigationBarReducer.dblist.length > 0) {
        // setenblesuggestion(true)
      }
    }
  }, [mavigationBarReducer])
  useEffect(() => {
    if (selector !== undefined) {
      setCart(selector.allCartData)
    }
  }, [selector]);
  // useEffect(() => {
  //   if (loadProducts !== undefined) {
  //     const wishListCount = loadProducts.updateWishlistData
  //     setwishlistdata(wishListCount.length)
  //   }
  // }, [loadProducts]);
  // useEffect(() => {
  //   if (Megamainmenu && Megamainmenu !== undefined && Megamainmenu.length>0) {
  //     const menu = Megamainmenu.find(res => res.WebPageId === 99);
  //     if (menu) {
  //       websiteMenu = menu.SubMenus.filter((month, idx) => idx < 8);
  //       // console.log("menu", menu);
  //       setSub(menu.SubMenus.filter((month, idx) => idx < 8));
  //     }
  //   }
  // }, [Megamainmenu])
  // useEffect(() => {
  //   if (sub !== undefined) {
  //     if (sub.length > 7) {
  //       setHideMenu(true)
  //     }
  //   }
  // }, [sub])

  // useEffect(() => {
  //   if (hideMenu !== undefined) {
  //     websiteMenu = sub.slice(0, 8);
  //     setSub(sub.slice(0, 8))
  //   }
  // }, [hideMenu])

  let subMega = [];
  if (topMenuData && topMenuData !== undefined && topMenuData.length>0) {
    websiteMegaMenu = topMenuData.filter((month, idx) => idx < 8);
    subMega = topMenuData.filter((month, idx) => idx < 8);
  }

  if (hideMegaMenu !== undefined) {
    websiteMegaMenu = subMega.slice(0, 8);
    subMega = subMega.slice(0, 8);
  }
  
  useEffect(() => {
    if (MegaMultiMenu && MegaMultiMenu !== undefined && MegaMultiMenu.length>0) {
      websiteMegaMenu = MegaMultiMenu.filter((month, idx) => idx < 8);
      subMega = MegaMultiMenu.filter((month, idx) => idx < 8);
    }
  }, [MegaMultiMenu])

   useEffect(() => {
    if (subMega !== undefined) {
      if (subMega.length > 7) {
        setHideMenu(true);
        setHideMegaMenu(true);
      }
    }
  }, [subMega])

  useEffect(() => {
    if (hideMegaMenu !== undefined) {
      websiteMegaMenu = subMega.slice(0, 8);
      subMega = subMega.slice(0, 8);
    }
  }, [hideMegaMenu])
  // console.log("productdata..", productdata)
  function productlistpage(pageurl, patrentcaturl) {
    setdivenable(true)
    // console.log('pmyy', 'pageurl', pageurl, 'patrentcaturl', patrentcaturl);
    localStorage.setItem('PLPCat', pageurl)
    localStorage.setItem('PLPparenturl', patrentcaturl)
    //return router.push(`/${pageurl}`, { isURLChange: pageurl })
  }
  function productlistpage1(pageurl, patrentcaturl) {
    
    setdivenable(true)
    // console.log('pmyy', pageurl[0], patrentcaturl);
    localStorage.setItem('PLPCat', pageurl)
    localStorage.setItem('PLPparenturl', patrentcaturl)
    //return router.push(`/${pageurl}`, { isURLChange: pageurl })
  }
  // function productlistpagemain(patrentcaturl) {
  //   // localStorage.setItem('PLPCat', pageurl)
  //   // localStorage.setItem('PLPparenturl', patrentcaturl)
  //   // return router.push(`/Subcategory/${patrentcaturl}`, { isURLChange: patrentcaturl })
  // }
  /* const getsuggestedlist = () => {
    const searchText = document.getElementById('search').value
    // console.log('test', /[^a-zA-Z0-9\-\/]/.test(searchText))
    if (/[^a-zA-Z0-9\-\/ ]/.test(searchText) === true) {
      toast('Please enter valid search text');
      document.getElementById("search").value = "";
    }
    if (/[^a-zA-Z0-9\-\/ ]/.test(searchText) === false) {
      // alert('152')
      dispatch(dbAutosuggestionlist(searchText))
      //SearchAPI.getDBautosuggestlist(searchText).then(res => {
      //  setserchlist(res)
        //return searchResultData;
      //});
      setenblesuggestion(true)
    }
  } */
  const handleSearchKeyUp = () => {   
    // const strRegex = new RegExp(/^[a-z0-9]+$/i);
    // let result = strRegex.test(document.getElementById('search').value); 
    if (document.getElementById('findProduct').value && document.getElementById('findProduct').value !== "") {
      // setenblesuggestion(true)
    } else {
      // setenblesuggestion(false)
    }
  }
  const getsuggestedlist = () => {
    if (document.getElementById('findProduct').value) {
      // const searchText = document.getElementById('search').value
      //clearTimeout(timeout);
    let timeout = setTimeout(function () {
      const searchText = document.getElementById('findProduct').value
      
      if (/([\<])([^\>]{1,})*([\>])/i.test(searchText) === true) {
        // alert('helllo')
        toast('Please enter valid search text');
        document.getElementById("findProduct").value = "";
      }
     else {
        // alert('152')
        dispatch(dbAutosuggestionlist(searchText))
        setenblesuggestion(true)
        /* SearchAPI.getDBautosuggestlist(searchText).then(res => {
          setserchlist(res)
          //return searchResultData;
        }); */
        // setenblesuggestion(true)
      }
    }, 2000); }
  }
  /* useEffect(() => {
    if (text !== '') {
      //   localStorage.setItem('search', document.getElementById('search').value)
      // router.push('/product/')
    }
  }, [text]) */
  /*function redirectToLogin() {
    
    localStorage.setItem('lastVisitedUrl', router.asPath);
    router.push('/login')
  }
  function redirectToRegister() {
    router.push('/register')
  }*/
  const serchproduct = (e) => {
    e.preventDefault();
    
    if (document.getElementById('findProduct').value === '' || document.getElementById('findProduct').value.trim() === "") {
      // toast('Please enter search text')
      setSuccessStatus(true)
      setWarnmsg("Please provide input for search")
      setTimeout(() => {
        setSuccessStatus(false)
      }, 1000);
      // alert('Please enter search text')
    } else {
      // console.log("search function called with value");
      const searchText = document.getElementById('findProduct').value;
      if (/([\<])([^\>]{1,})*([\>])/i.test(searchText)) {
        // alert('helllo')
        toast('Please enter valid search text');
        document.getElementById("findProduct").value = "";
      } else {
        localStorage.setItem('search', document.getElementById('findProduct').value)
        // document.getElementById('frmSearch').submit();
        router.push( {
          pathname : '/Search',
          query : { q : localStorage.getItem('search') }
        })
      }
    }
  }
  /** **** mobile search **** */
  const serchproductmobile = (e) => {
    e.preventDefault();
    
    if (document.getElementById('searchmob').value === '') {
      // toast('Please enter search text')
      setSuccessStatus(true)
      setWarnmsg("Please provide input for search")   
      // alert('Please enter search text')
    } else {
      const searchText = document.getElementById('searchmob').value;
      if (/([\<])([^\>]{1,})*([\>])/i.test(searchText)) {
        // alert('helllo')
        toast('Please enter valid search text');
        document.getElementById("searchmob").value = "";
      } else {
        // console.log("search function called with value");
        localStorage.setItem('search', document.getElementById('searchmob').value)
        // document.getElementById('frmSearchmobile').submit();
        // router.push('/Search')
        router.push({
          pathname : '/Search',
          query : { q : document.getElementById('searchmob').value }
        })
      }
    }
  }
  const handleSearchKeyUpmob = () => {
    
    // const strRegex = new RegExp(/^[a-z0-9]+$/i);
    // let result = strRegex.test(document.getElementById('search').value); 
    if (document.getElementById('searchmob').value && document.getElementById('searchmob').value !== "") {
      // setenblesuggestion(true)
    } else {
      // setenblesuggestion(false)
    }
  }
  const getsuggestedlistmob = (e) => {
    e.preventDefault()
    if(timeoutMob !== null) clearTimeout(timeoutMob);
    if (document.getElementById('searchmob') && document.getElementById('searchmob').value) {
      
      // const searchText = document.getElementById('search').value
      
      timeoutMob = setTimeout(function () {
      const searchText = document.getElementById('searchmob') && document.getElementById('searchmob').value ? document.getElementById('searchmob').value : ''
      
      if (/([\<])([^\>]{1,})*([\>])/i.test(searchText) === true) {
        // alert('helllo')
        toast('Please enter valid search text');
        document.getElementById("searchmob").value = "";
      }
     else {
        // alert('152')
        dispatch(dbAutosuggestionlist(searchText))
        setenblesuggestion(true)
        /* SearchAPI.getDBautosuggestlist(searchText).then(res => {
          setserchlist(res)
          //return searchResultData;
        }); */
        // setenblesuggestion(true)
      }
    }, 2000); }

  }
  /* const products = (skuname) => {
     // router.push(`/product/${skuname}`, { state: { skuname } })
     // console.log("skuname==============", skuname);
     // router.push(`/product/${skuname}`, { state: { skuname } })
     // dispatch(getproducts(skuname))
     // setenblesuggestion(false)
     // localStorage.setItem('PageUrl', window.btoa(skuname))
     // router.push('/product')
     // if (mavigationBarReducer && mavigationBarReducer.searchsku && mavigationBarReducer.searchsku.skuListingModels) {
     //   localStorage.setItem('PageUrl', window.btoa(mavigationBarReducer.searchsku.skuListingModels[0].PageUrl))
     //   router.push('/product')
     // }
     // router.push('/product')
     // setenblesuggestion(false)x
   } */
  // useEffect(() => {
  //   if (mavigationBarReducer && mavigationBarReducer.searchsku && mavigationBarReducer.searchsku.skuListingModels) {
  //     localStorage.setItem('PageUrl', window.btoa(mavigationBarReducer.searchsku.skuListingModels[0].PageUrl))
  //     // router.push('/product')
  //   }
  // }, [mavigationBarReducer])
  const handleclass = () => {
    setSearchenable(false)
    setdivenable(false)
    setisActive(true)
    dispatch(mobilefilterIcon(true))
    //document.getElementById("MyAccountDiv").style.display="none";
  }
  const disablehandleclass = () => {
    setisActive(false)
    dispatch(mobilefilterIcon(false))
    //document.getElementById("MyAccountDiv").style.display="block";
    // document.getElementById("mobileMenuContainer").style.display="block";
  }
  const enablesearchbar = (e) => {
    e.preventDefault()
    setSearchenable(true)
    setdivenable(false)
    setisActive(false)
    dispatch(mobilefilterIcon(false))
    //document.getElementById("MyAccountDiv").style.display="none";
  }
  const disablesearchbar = (e) => {
    e.preventDefault()
    setSearchenable(false)
    //document.getElementById("MyAccountDiv").style.display="block";
  }
  const enablediv = () => {
    setdivenable(true)
    setSearchenable(false)
    setisActive(false)
    dispatch(mobilefilterIcon(false))
    document.body.classList.add('stopBodyscrolling');
    //document.getElementById("MyAccountDiv").style.display="none";
    // document.getElementByClassName('mydiv').style.display="none";
  }
  const disablediv = () => {
    setdivenable(false)
    document.body.classList.remove("stopBodyscrolling");
    //document.getElementById("MyAccountDiv").style.display="block";
  }

  // const collapse = () => {
  //   setenablecollapse(true)
  // }
  function loadwishlist() {
    if (localStorage.getItem('CustGUID') === null) {
      localStorage.setItem('lastVisitedUrl', router.asPath);
      router.push('/login')
    } else {
      router.push('/wishlist')
    }
  }
  // useEffect(()=>{
  //   console.log("skuname==============",pageUrlsave);
  //   localStorage.setItem('PageUrl', window.btoa(pageUrlsave))
  //   // router.push('/product')
  // },[pageUrlsave])
  // console.log('comlength', localStorage.getItem('Comapredatalength'));
  //  const [countafterdelete]=localStorage.getItem('countafterdelete')&& localStorage.getItem('countafterdelete')
  //  console.log("countafterdelete",countafterdelete);
  // console.log("props.wishlistdata", props.wishlistdata);
  // console.log("sub menus", sub);
  // {sub.map(itm => (
  //   <li className="mega-parent">
  //     {/* <button type='button' onClick={() => productlistpage(itm.PageUrl)}> */}
  //     <Link onClick={() => productlistpage1(itm.SubSubMenus.map(subItm => subItm.PageUrl), itm.PageUrl,)} >
  //       {itm.DisplayName}
  //     </Link>
  //     {/* </button> */}
  //     <span className="lnr lnr-chevron-down"></span>
  //     <ul className="dropdown">
  //       {itm.SubSubMenus.map(subItm => (
  //         <li>
  //           <Link onClick={() => productlistpage(subItm.PageUrl, itm.PageUrl)}>
  //             {subItm.DisplayName}
  //           </Link>
  //         </li>
  //       ))}
  //     </ul>
  //   </li>
  // ))}
  /* useEffect(() => {
    if (localStorage.getItem('length') === undefined) {
      setwishcount(0 + 0)
    }
  }, [localStorage.getItem('length') === undefined]) */
  /* const submenuedit = sub.map(data => (
    data
  )) */
  /* const subsubmenuedit = submenuedit.map(item => (
    item.SubSubMenus
  )) */
  //console.log("savecarttotal", submenuedit, subsubmenuedit, wishcount);
  
  // useEffect(()=>{
  //   console.log("savecarttotal", LocaitonPopup);
  //   if(!LocaitonPopup){
  //     console.log("savecarttotal", LocaitonPopup);
  //     setpopup(true)
  //   }else{
  //     setpopup(false)
  //   }
  // },[!LocaitonPopup])
  useEffect(()=>{
    if(Cookies.get('LocationPopupMsg') === 'false' || !Cookies.get('LocationPopupMsg')){
      setpopup(true)
    }else{
      setTimeout(() => {
        fetchToggle()
      }, 3000);
    }
  },[Cookies.get('LocationPopupMsg')])
  function renderlocation() {
    setpopup(true)
    // console.log("locationPopupState.flag==========", locationPopupState.flag);
    // if (locationPopupState && locationPopupState.flag === true) {
    //   dispatch(getlocationtitle(locationPopupState.locationname, locationPopupState.pincode, false))
    // }
    // else if (locationPopupState && locationPopupState.flag === false) {
    //   dispatch(getlocationtitle(locationPopupState.locationname, locationPopupState.pincode, false))
    // }
    // else {
    //   dispatch(getlocationtitle(defaultlocdata.DefaultDeliveryLocality_Area, defaultlocdata.DefaultDeliveryLocality_Pincode, false))
    // }
  }
  function fetchToggle() {
    setpopup(false)
    // dispatch(getlocationtitle('','',true))
    if (locationPopupState && locationPopupState.flag === true) {
      // dispatch(getlocationtitle(locationPopupState.locationname, locationPopupState.pincode, true))
    }
    // setlogoutpopup(false)
  }
  
  useEffect(() => {
    LocationApi.GoogleApi({})
      .then(response => {
        const data = response
        setdefaultlocdata(data)
      })
    // alert('sendOtpApiResponse ---' + sendOtpApiResponse)
    if (localStorage.getItem('CustGUID') !== null) {
      setIsLogin(true)
      // alert('gretings' + greetings())
      // setAccountName(`Hi ${(localStorage.getItem('UserFirstName'))}`)
      if (localStorage.getItem('UserFirstName') === null || localStorage.getItem('UserFirstName') === 'null') {
        setAccountName(`Hi ${(greetings())}`)
      } else {
        setAccountName(`Hi ${localStorage.getItem('UserFirstName')}`)
      }
      // alert(`User First Name${ typeof localStorage.getItem('UserFirstName') }${localStorage.getItem('UserFirstName')}`)
    }
    else {
      setAccountName('My Account')
    }
  }, [])
  const greetings = () => {
    const myDate = new Date();
    const hrs = myDate.getHours();
    let greet;
    if (hrs < 12) {
      greet = 'Good Morning';
    } else if (hrs >= 12 && hrs <= 17) {
      greet = 'Good Afternoon';
    } else if (hrs >= 17 && hrs <= 24) {
      greet = 'Good Evening';
    }
    return greet;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  useEffect(() => {
    // sendOtpApiResponse && sendOtpApiResponse.customerlogindata && setAccountName(`Hi ${sendOtpApiResponse.customerlogindata.FirstName}`)
    // if (sendOtpApiResponse && sendOtpApiResponse.customerlogindata) {
    //   setAccountName(`Hi ${(greetings())}`)
    // }
    if (localStorage.getItem('CustGUID') !== null) {
      setIsLogin(true)
      if (localStorage.getItem('UserFirstName') === null || localStorage.getItem('UserFirstName') === 'null') {
        // alert('360')
        setAccountName(`Hi ${(greetings())}`)
      } else {
        setAccountName(`Hi ${localStorage.getItem('UserFirstName')}`)
      }
    }
  }, [sendOtpApiResponse])
  // const wishlist=useSelector(state => state)
  function logoutPopUp() {
    setShowLogOutPopUP(!showLogOutPopUP)
    // setIsLogin(false)
    setAnchorshow(false)
    setmenuClass(false)
  }
  function renderLogout() {
    // localStorage.removeItem('CustGUID')
    // localStorage.removeItem('UserFirstName')
    // localStorage.removeItem('CartGUID')
    // localStorage.removeItem('CartGUID')
    localStorage.clear()
    Cookies.remove('CustGUID');
    Cookies.remove('accessToken');
    //console.log("homepageaaa",router.asPath)
    if (router.asPath==='/') {
      window.location.reload(true);
    } else {
      router.push('/')
    }
    //
    // history.go(0)
  }
  const handledropdownclass = () => {
    setAnchorshow(!anchorshow)
  }
  // function closePopup() {
  //   setShow(true)
  // }
  useEffect(() => {
    const checkIfClickedOutside = e => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (enblesuggestion && ref.current && !ref.current.contains(e.target)) {
        setenblesuggestion(false)
      }
    }
    document.addEventListener("mousedown", checkIfClickedOutside)
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [enblesuggestion])
  const handlepopupflow = () => {
    // setshowSideDrawer(true);
    // dispatch(homepagecartIcon(true))
    // console.log("chkcartvalue...", carticon)
    // Disables Background Scrolling whilst the SideDrawer/Modal is open
    // if (typeof window != 'undefined' && window.document) {
    // document.body.style.overflow = 'hidden';
    // document.body.classList.add('scroll-only-cart');
    // }
  }

  const handleWishlistpage = (e) => {
    e.preventDefault()
    router.push({ pathname: '/wishlist' })
  }

  const handleMenubar=()=>{
    setmenuClass(true)
  }
  const handleCloseMenubar=()=>{
    setmenuClass(false)
  }
  console.log('menuClass',menuClass)
  const handleContactpage = (e) => {
    e.preventDefault()
    router.push({ pathname: '/contact-us' })
  }
  const handleSigninpage = (e) => {
    e.preventDefault()
    router.push({ pathname: '/login' })
  }
  // const dealofdayPage = (e) => {
  //   e.preventDefault()
  //   router.push({ pathname: '/dealoftheday'})
  // }
  // const topSellerpage = (e) => {
  //   e.preventDefault()
  //   router.push({ pathname: '/topsellers'})
  // }
  // const topTreandingpage = (e) => {
  //   e.preventDefault()
  //   router.push({ pathname: '/toptrending'})
  // }
  // const newArrivalpage = (e) => {
  //   e.preventDefault()
  //   router.push({ pathname: '/newarrival'})
  // }
  // const shopBrandpage = (e) => {
  //   e.preventDefault()
  //   router.push({ pathname: '/allbrands'})
  // }

  const handleBackground=(e)=>{
  document.body.classList.add('ReactModal__Body--open');
  console.log('menuClass11',menuClass)
  if(menuClass){
    document.body.classList.remove('ReactModal__Body--open');
  }
  }
  // useEffect(() => {
  //   setInterval(() => {
  //     setSuccessStatus(false)
  //   }, 5000);
  // }, [closemsg])
  // const closemsg = () => {
  // }
  // console.log("locationPopupState.flag", locationPopupState);

  useEffect(() => {
    const handleRouteChangeStart = (url) => {
      setIsLoading(true)
    };
  
    const handleRouteChangeComplete = (url) => {
      setIsLoading(false)
    };
  
    const handleRouteChangeError = (err, url) => {
      setIsLoading(false)
    };
  
    if(!router.asPath.includes('product') || !router.asPath.includes('wishlist')) {
      router.events.on('routeChangeStart', handleRouteChangeStart);
      router.events.on('routeChangeComplete', handleRouteChangeComplete);
      router.events.on('routeChangeError', handleRouteChangeError);
    }
  
    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
      router.events.off('routeChangeError', handleRouteChangeError);
    };
  }, [router]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (accountRef.current && !accountRef.current.contains(event.target)) {
        setAnchorshow(false);
      }
    };

    if (anchorshow) {
      document.addEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [anchorshow]);

  const overLayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.5)',
    zIndex: '99999999999999',
  }

  return (
    <>
        {typeof window !== 'undefined' && localStorage.getItem('sellerID') === '0' ?  <div id='targetHeader'></div>: null}
       
      {/* {
        checkValues.some(el => location.pathname.includes(el)) ? "" : ""
      } */}
      {isLoading && <LogoLoader isGlobal/>}
      <ToastContainer />
      {successStatus && <Success msg={warnmsg} isError  />}
      <div className="header-middle " key='nav'>
        {
          checkValues.some(el => router.pathname.includes(el)) ?
            < Link href="javascript:;"
              onClick={handleclass}
              className={isActive ? 'active mobilefilter' : 'mobilefilter'}
              style={{ left: 'auto', cursor: 'pointer' }}>
              <i className={isActive ? '' : 'fa fa-filter'}></i>
            </Link>
            :
            null
        }
        <Link href="javascript:void(0)"
          onClick={enablesearchbar}
          className={searchenable ? 'meanmenu-search  mobile-nav-menu-search' : 'mobile-nav-menu-search'} style={{ Right: '0px', Left: 'auto', textAlign: 'center', textIndent: '0px', fontSize: '18px' }}>
          <i className={searchenable ? '' : "fa fa-search"}></i>
        </Link>
        {/* <Link href className="searchx">
          <i className="fa fa-search" />
        </Link> */}
        <Link href="javascript:;"
          onClick={enablediv}
          className={divenable ? 'meanmenu-reveal  mobile-nav-menu' : ' mobile-nav-menu'} style={{ Right: '0px', Left: 'auto', textAlign: 'center', textIndent: '0px', fontSize: '18px' }}>
          <i className={divenable ? '' : "fa fa-bars"}></i>
        </Link>
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="logo-block">
            <div className={typeof window !== 'undefined' && localStorage.getItem('sellerID') === '0' ? "logo" : "logo sellerLogo"}>
                <Link href="/">
                  {
                    props && props.sellerDetailsFromDomain && props.sellerDetailsFromDomain.LogoURL && props.sellerDetailsFromDomain.LogoURL!=="" ?
                    <img referrerPolicy='no-referrer' src={props.sellerDetailsFromDomain.LogoURL} alt="brand-logo" width="200" height="60" />
                    :
                    props && !props.isServerSide && 
                    <img referrerPolicy='no-referrer' src="/assets1/img/icon/adibuja-logo.svg" alt="brand-logo" width="200" height="60" />
                  }
                  
                </Link>
              </div>
            </div>
            {/* <Header /> */}
            {popup === true ?
              <LocationPopup data={defaultlocdata} popup={popup} fetchToggle={fetchToggle} />
              : null}
            <div className='deliver-to-block' data-locality={JSON.stringify(selectedLocationZip)}>
              <div className="togglecity" >
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                {
                  localLocName && localLocName!=='' && localLocPin && localLocPin!=="" ?
                  <span data-me='first' id="cityName" style={{ cursor: 'pointer' }} onClick={renderlocation}>
                    {localLocName} {localLocPin}
                  </span>
                  :
                locationPopupState === undefined || locationPopupState && locationPopupState.flag === false ?
                  defaultlocdata && <span data-me='first' id="cityName" style={{ cursor: 'pointer' }} onClick={renderlocation}>
                    {sublocalityvalue && sublocalityvalue.trim() !== "" ? sublocalityvalue : defaultlocdata.DefaultDeliveryLocality_City} {pincodevalue && pincodevalue !== "" ? pincodevalue : defaultlocdata.DefaultDeliveryLocality_Pincode}
                  </span> :
                  <>{locationPopupState && locationPopupState.flag === true ? <span data-me='second' id="cityName" style={{ cursor: 'pointer' }} onClick={renderlocation}>
                    {sublocalityvalue && sublocalityvalue.trim() !== "" ? sublocalityvalue : locationPopupState.locationname}  {pincodevalue && pincodevalue !== "" ? pincodevalue : locationPopupState.pincode}
                  </span> : null}</>
                }
              </div>
            </div>
            <div className="search-block order-sm-last searchboxlayout websearch">
              <div className="header-middle-inner showform" id="searchDiv">
                <form action="/Search" id="frmSearch" style={{ position: 'relative' }} onSubmit={serchproduct}>
                  <input
                    type="text"
                    className="top-cat-field txt-global-product-search ui-autocomplete-input"
                    style={{ opacity: isLoading ? '0.2' : '1' }}
                    placeholder="Search entire store here"
                    id="findProduct"
                    // enterKeyPressed={serchproduct}
                    // enterKeyPressed={(e) => serchproduct(e)
                    // }
                    onKeyUp={() => handleSearchKeyUp()}
                    onChange={getsuggestedlist}
                  />
                  <span>
                    <button
                      type="submit"
                      className="lnr lnr-magnifier"
                      // id="searchbutton"
                      // onKeyUp={serchproduct}
                      onClick={serchproduct}
                      style={{ cursor: 'pointer' }}
                      aria-label="Name"
                      >
                    </button>
                  </span>
                  {/* <button className="top-search-btn" id="searchbutton"
                    onKeyUp={serchproduct}
                    onClick={serchproduct} >Search</button> */}
                </form>
                {enblesuggestion && serchlist && serchlist.length > 0 ?
                  <ul id="ui-id-1" className="ui-menu ui-widget ui-widget-content ui-autocomplete ui-front" ref={ref}
                    style={{ display: 'block', top: '42px', left: '15px', height: '400px', overflow: 'hidden auto', zindex: '99999', width: '522px' }}
                  >
                    {serchlist.map((data, index) =>
                      <Link href={`/product/${data.PageUrl}`} className="ui-menu-item"
                      // <Link  className="ui-menu-item"
                      ><div key={index} id="ui-id-38" tabIndex="-1"
                          className="ui-menu-item-wrapper">{data.SkuName}</div></Link>
                    )}</ul>
                  : null}
              </div>
            </div>
            <div className="menu-list-block order-lg-last">
              <div className="mini-cart-option">
                <ul>
                <li className='settings' ref={accountRef}>
                    <noscript></noscript>
                    <a href="javascript:;" className="ha-toggle myaccounthelip" title="My Account" onClick={handledropdownclass}>
                      <span className="lnr lnr-user cursor-pointer pr-0 mt-1"></span>&nbsp;
                      <div className='menu-txt cursor-pointer' id='accountNameId'>
                        {AccountName}
                      </div></a>
                    {/* <NavDropdown title={AccountName}> */}
                    {/* <NavDropdown title={props.userdata.googlesignindata ? `Hi ${props.userdata.googlesignindata.givenName}` : "My Account"} id="header-nav-dropdown"> */}
                    <ul
                      className={anchorshow ? 'box-dropdown ha-dropdown hide-dropdown' : 'box-dropdown ha-dropdown'}
                      style={anchorshow ? { display: 'block' } : { display: 'none' }}>
                      {!isLogin && (<>
                        <li>
                          <Link href="/login" /*onClick={redirectToLogin}*/>
                            <i className="lnr lnr-enter" aria-hidden="true"></i>&nbsp; Login
                          </Link>
                        </li>
                        <li>
                          <Link href="/register" /*onClick={redirectToRegister}*/>
                            <i className="lnr lnr-user" aria-hidden="true"></i>&nbsp; Register
                          </Link>
                        </li>
                      </>)}
                    </ul>
                    {isLogin && (
                      <ul className={anchorshow ? 'box-dropdown ha-dropdown hide-dropdown' : 'box-dropdown ha-dropdown'}
                        style={anchorshow ? { display: 'block' } : { display: 'none' }}>
                        <li className='cursor-pointer'>
                          <a href="/account/dashboard">
                            <span className="lnr lnr-chart-bars" aria-hidden="true"></span>&nbsp;Dashboard
                          </a>
                        </li>
                        <li>
                          <a href="/account/myorders">
                            <span className="lnr lnr-cart" aria-hidden="true"></span>&nbsp;My Order
                          </a>
                        </li>
                        <li>
                          <a href="/account/reorder">
                            <span className="lnr lnr-history" aria-hidden="true"></span>&nbsp;Reorder
                          </a>
                        </li>
                        <li>
                          <a href="/account/savedcartlist">
                            <span className="lnr lnr-pushpin" aria-hidden="true"></span>&nbsp;Saved Cart
                          </a>
                        </li>
                        <li>
                          <a href="javascript:;" onClick={(e) => handleWishlistpage(e)} style={{cursor:'pointer'}}>
                            <span className="lnr lnr-heart" aria-hidden="true"></span>&nbsp;My Wishlist
                          </a>
                        </li>
                        <li>
                          <a href="/account/profile">
                            <span className="lnr lnr-user" aria-hidden="true"></span>&nbsp;Profile
                          </a>
                        </li>
                        <li>
                          <a href="/account/manageaddress">
                            <span className="lnr lnr-map-marker" aria-hidden="true"></span>&nbsp;Manage Addresses
                          </a>
                        </li>
                        <li>
                          <a href="/account/myorders">
                            <span className="lnr lnr-location" aria-hidden="true"></span>&nbsp;Track Order
                          </a>
                        </li>
                        <li>
                          <a href="/account/changepassword">
                            <span className="lnr lnr-lock" aria-hidden="true"></span>&nbsp;Manage Password
                          </a>
                        </li>
                        <li className='cursor-pointer'>
                          <a href="javascript:;" onClick={logoutPopUp}
                            // renderLogout
                            >
                            <span className="lnr lnr-exit" aria-hidden="true"></span>&nbsp;Logout
                          </a>
                        </li>
                      </ul>
                    )}
                    {/* </NavDropdown> */}
                  </li>
                  <li className="compare">
                    {/* <Link className="ha-toggle" to="/products/compare">
                       <FontAwesomeIcon icon={faSync} />
                       <span className="count" id="compareCount">
                         0
                       </span>
                       Product Compare
                     </Link>
                      */}
                    <Link className="ha-toggle" href="/compare">
                      <span className="lnr lnr-sync "></span>
                      <span className={comparePdCount > 0 ? 'count' : 'no-count'}>
                        {comparePdCount && comparePdCount > 0 ? comparePdCount : ""}
                        {/* {countafterdelete.length} */}                  
                      </span>
                      <div className='menu-txt'>
                        Compare
                      </div>
                    </Link>
                  </li>
                  <li className="wishlist" style={{ cursor: 'pointer' }}>
                    <a href="javascript:;" className="ha-toggle" onClick={loadwishlist}>
                      <span className='lnr lnr-heart' ></span>
                      {/* <FontAwesomeIcon icon={faHeart} /> */}
                      <span className={isClient && localStorage.getItem('length') > 0 ? 'count' : 'nocount'}>
                        {/* {wishlistdata !== undefined && wishlistdata > 0 ? wishlistdata : ''} */}
                        {isClient && localStorage.getItem('length') !== undefined && localStorage.getItem('length') > 0 ? localStorage.getItem('length') :''}                       
                      </span>                      
                      <div className='menu-txt'>
                        Wishlist
                      </div>
                    </a>
                  </li>
                  <li className="my-cart cursor-pointer newCardListBox"
                    id="cart_header"
                    onClick={handlepopupflow}
                  // onClick={() => dispatch(isOpenMyCartAction(true))}
                  // open={showSideDrawer} 
                  >
                    <a href="javascript:;" className="ha-toggle" /*onClick={() => dispatch(isOpenMyCartAction(true))}*/ onClick={cartPopupHandler} >
                      <span className="lnr lnr-cart"></span>
                      <span className={CartData.count > 0 ? 'count' : 'nocount'}>
                        {CartData && CartData.count !== undefined && CartData.count > 0 ? CartData.count : ''}
                      </span>
                      <div className='menu-txt'> 
                        Cart
                      </div>
                    </a>
                    
                    {/*CartData !== undefined && mavigationBarReducer && mavigationBarReducer.isOpenMyCart && <Cart cartData={CartData.count === 0 ? [] : CartData.cart} Total={CartData.subtotal}></Cart>
                    */}
                    {
                      showCartPopup && <Cart setShowCartPopup={setShowCartPopup} cartData={CartData.count === 0 ? [] : CartData.cart} Total={CartData.total}></Cart>
                    }
                    {/* {selector.allCartData.count === 0 && <Rendercartlist />} */}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* start: showLogOutPopUP  */}
        {showLogOutPopUP &&
          <div className="modal show" id="RemoveCartItemModal" style={{ paddingRight: '17px', display: 'block' }}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-body text-center">
                  <button type="button" className="close" data-dismiss="modal" onClick={logoutPopUp}>×</button>
                  <div>
                    <ul>
                      <li><img src='/images/cycling.gif' alt='' style={{ width: '100px' }} /></li>
                      <li><p>Are you sure you want to logout?</p></li>
                      <li>
                        <button className="btn btn-secondary" type="button" onClick={renderLogout}>Yes</button>
                        <button className="btn btn-secondary" type="button" onClick={logoutPopUp}>No</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
        {/* end: showLogOutPopUP  */}
      </div>
      
      <div className="header-top-menu theme-bg sticker header-top-shadow">
        <div className="container-fluid" style={{ borderTop: '1px #cccccc6e solid', }}>
          <div className="row">
            <div className="col-lg-12" >
            {/* {props && props.sellerDetailsFromDomain && props.sellerDetailsFromDomain.AdminMemberId!=="" ? */}
            {/* {props && props.sellerDetailsFromDomain?.length!== 0? */}
              <div className="top-main-menu" id='main-menu-seller'>          
                <div className="position-relative main-menu">                
                  
                        <li id='sellerMainMenu' onClick={handleBackground}>
                        <div className='menu-bar sellar-category'>
                          <span>
                          <i className='fa fa-bars d-none d-lg-block' onClick={handleMenubar}></i>
                          </span>                                              
                        </div>
                        {/* <ul> */}
                        <div style={menuClass ? overLayStyle : {}} ></div>
                        <div className={menuClass ? 'sidebar' : 'sidebarLeft'}>
                           <div className='fixed-item'> 
                           <button className='close-btnseller btn btn-danger' onClick={handleCloseMenubar}>X</button>
                           <h4 className='main-category'>Shop By Category</h4>
                          </div>    

                          <div className='megaSeller'>
                          <nav className="mean-nav">
                            <ul style={{ display: 'block' }}>
                              {subMega && subMega.map((itm, index) => (                                                  
                              <SellerMenu itm={itm} index={index} setIsLoading={setIsLoading} selectedIndex={selectedIndex} setselectedIndex={setselectedIndex} />
                              ))}                                                           
                           </ul>                                                                        
                          </nav>                       
                          </div> 
                      
                          <div id='otherSell'>
                          <h4 className='main-category' id='othersellerOption'>Help & Settings</h4> 
                          </div>
                                                               
                           <ul className='seller-sub-menu' id='sellerSettingsOptions'>
                              <li className="sellerMainMenu" id="megaMenuseller" onClick={(e) => handleContactpage(e)} style={{cursor:'pointer'}}>                            
                              Customer Service                                                        
                              </li>                            
                              {!isLogin && (<>
                              <li className="sellerMainMenu" id="megaMenuseller" onClick={(e) => handleSigninpage(e)} style={{cursor:'pointer'}}>                              
                              Signin                               
                              </li>
                              </>)} 
                              {isLogin && (<>
                                <li className="sellerMainMenu" id="megaMenuseller" onClick={logoutPopUp} style={{cursor:'pointer'}}>                           
                              Sign out                           
                              </li> 
                              </>)}                                                           
                           </ul>                                                                                                    
                          </div>                       
                          </li>                        
                        <li className='sellar-category' id='sellerMainMenu' style={{cursor:'pointer'}}><Link href="/dealoftheday">
                          <img referrerPolicy='no-referrer' src="/images/deal.svg" alt="deals"/>&nbsp;Super Deals 
                          </Link>                     
                        </li>                      
                        <li className='sellar-category' id='sellerMainMenu' style={{cursor:'pointer'}}><Link href="/topsellers">
                          <img referrerPolicy='no-referrer' src="/images/discount.svg" alt="selling"/>&nbsp;Top Selling  
                          </Link>
                        </li>  
                        <li className='sellar-category' id='sellerMainMenu' style={{cursor:'pointer'}}><Link href="/toptrending">
                          <img referrerPolicy='no-referrer' src="/images/purchase.svg" alt="trending"/>&nbsp;Top Trending
                          </Link>
                        </li> 
                        <li className='sellar-category' id='sellerMainMenu' style={{cursor:'pointer'}}><Link href="/newarrival">
                          <img referrerPolicy='no-referrer' src="/images/out-box.svg" alt="new"/>&nbsp;New Releases
                          </Link> 
                        </li> 
                        <li className='sellar-category' id='sellerMainMenu' style={{cursor:'pointer'}}><Link href="/allbrands">
                          <img referrerPolicy='no-referrer' src="/images/shopping-bag.svg" alt="brand"/>&nbsp; Shop By Brands
                          </Link>
                        </li>    
                </div>           
              </div>
              {/* :
              <div className="top-main-menu" id='main-menu'>
                <div className="position-relative main-menu">
                  <div className="mean-push"></div>
                  <nav id="mobile-menu" style={{ display: 'block' }}>
                    <ul>
                      {subMega && subMega.map((itm, index) => (
                        <li key={index} className="mega-parent" style={{position:'inherit'}}>
                          <a href="javascript:;" className='activeLinkmenu' style={{cursor: 'default'}}>
                            {itm?.CategoryGroupName}
                          </a>
                          <span className="lnr lnr-chevron-down"></span>
                          <ul className="dropdown" style={{width:'100%'}}>
                          <div className='d-flex multilevelMegaMenu' style={{flexDirection:"row",  background: "#fff", gap:'10px',flexWrap:'wrap' ,height:'500px',overflow:'overlay'}}>
                           
                            {itm?.Main_cat?.map((subItm, index) => (                         
                              <div key={index} className='d-flex' style={{flexDirection:"column"}}> 
                              {itm?.Main_cat?.length > 1 ?                                                     
                               <Link href={`/category/${subItm?.MainCategoryUrl}/${subItm?.Sub_cat[0]?.SubCategoryUrl}`} style={{fontWeight:"400", fontSize:"13px",color:'#ff7060'}}>                           
                                {subItm?.MainCategory}                                                           
                                </Link>
                                :null
                              }                             
                                  {
                                    subItm?.Sub_cat?.map((subsubItem, index) =>(
                                        <li key={index}><Link href={`/category/${subItm?.MainCategoryUrl}/${subsubItem?.SubCategoryUrl}`} style={{fontWeight:"400"}} >
                                        {subsubItem?.SubCategory}</Link></li>
                                    ))
                                  }
                              </div>
                            
                            ))}
                            </div>
                          </ul>
                        </li>
                      ))}
                       {(subMega?.length > 7 || hideMegaMenu) && (
                        <li className='viewCategory'>
                          <Link style={{ color: '#f76d5e', fontWeight: '600' }} href="/category-menu-list">
                            View More...</Link>
                        </li>)}
                    </ul>
                  </nav>
                </div>
              </div>
            } */}
            </div>
            <div className="col-12 d-block d-lg-none"> 
              <div className="mobile-menu mean-container">
                <div className="mean-bar">
                    {
                      checkValues.some(el => router.pathname.includes(el)) ?
                      <Link href="javascript:;"
                      onClick={disablehandleclass}
                      className={isActive ? 'closeactive mobilefilter' : 'mobilefilter'}
                      style={{ left: 'auto', cursor: 'pointer' }}>
                      <i className={isActive ? 'fa fa-close' : 'fa fa-filter'}></i>
                      </Link>
                        :
                        null
                    }              
                  <Link href="javascript:void(0)"
                    onClick={disablesearchbar}
                    className={searchenable ? 'meanmenu-search' : 'mobile-nav-menu-search'} style={{ Right: '0px', Left: 'auto', textAlign: 'center', textIndent: '0px', fontSize: '18px' }}>
                    <i className={searchenable ? 'fa fa-close' : "fa fa-search"}></i>
                  </Link>
                  <Link href="javascript:;"
                    onClick={disablediv}
                    className={divenable ? 'meanmenu-reveal' : 'mobile-nav-menu'} style={{ Right: '0px', Left: 'auto', textAlign: 'center', textIndent: '5px', fontSize: '18px' }}>
                    <i className={divenable ? 'fa fa-close' : 'fa fa-bar'}></i>
                  </Link>
                  {divenable ?
                    <nav className="mean-nav">
                      <ul style={{ display: 'block' }}>
                        {/* {websiteMenu.map((itm) => (
                          <Menudropdown itm={itm} disablediv={disablediv} setIsLoading={setIsLoading} />
                        ))}
                        {hideMenu && (
                          <li>
                            <Link style={{ color: '#f76d5e', fontWeight: '600' }} href="/category-menu-list">
                              View More...</Link>
                          </li>)} */}

                          {subMega && subMega.map((itm, index) => (
                            // console.log('itm10',itm)
                            <Menudropdown itm={itm} index={index} disablediv={disablediv} setIsLoading={setIsLoading} selectedIndex={selectedIndex} setselectedIndex={setselectedIndex} />
                          // <li className="mega-parent">
                          // <a href='#'className='activeLinkmenu'>
                          //   {itm.CategoryGroupName}
                          // </a>
                          // <span className="lnr lnr-chevron-down"></span>
                          // </li>
                          ))}
                          {(subMega?.length > 7 || hideMenu )&& (
                            <li>
                              <Link style={{ color: '#f76d5e', fontWeight: '400' }} href="/category-menu-list">
                                View More...</Link>
                            </li>)}

                      </ul >
                    </nav > : null}
                </div >
              </div >
            </div >
          </div >
        </div >
      </div >
      
      {
        searchenable === true ?
          <div className="search-block order-sm-last searchboxlayout position-relative">
            <div className="header-middle-inner-mob showformmob" id="searchDivMob">
              <form action="/Search" id="frmSearchmobile" className='mobsearchbox' onSubmit={serchproductmobile}>
                <input
                  type="text"
                  className="top-cat-field txt-global-product-search ui-autocomplete-input"
                  placeholder="Search entire store here"
                  id="searchmob"
                  // enterKeyPressed={serchproduct}
                  // enterKeyPressed={(e) => serchproduct(e)
                  // }
                  onKeyUp={() => handleSearchKeyUpmob()}
                  onChange={getsuggestedlistmob}
                />
                <i>
                  <button
                    type="submit"
                    className="fa fa-search newSearch"
                    id="searchbutton"
                    // onKeyUp={serchproduct}
                    // onClick={serchproduct}
                    style={{ cursor: 'pointer' }}>
                  </button>
                </i>
                {/* <button className="top-search-btn" id="searchbutton"
                    onKeyUp={serchproduct}
                    onClick={serchproduct} >Search</button> */}
              </form>
              {enblesuggestion && serchlist && serchlist.length > 0 ?
                <ul id="ui-id-1" className="ui-menu ui-widget ui-widget-content ui-autocomplete ui-front" ref={ref}
                  style={{ display: 'block', top: '42px', left: '15px', height: '400px', overflow: 'hidden auto', zindex: '99999', width: '522px' }}
                >
                  {serchlist.map((data, index) =>
                    <Link href={`/product/${data.PageUrl}`} className="ui-menu-item"
                    // <Link  className="ui-menu-item"
                    ><div key={index} id="ui-id-38" tabIndex="-1"
                        className="ui-menu-item-wrapper">{data.SkuName}</div></Link>
                  )}</ul>
                : null}
            </div>
          </div>
          :
          null
      }
    </>
  );
}
export default MavigationBar
