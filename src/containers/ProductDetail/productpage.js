/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-param-reassign */
/* eslint-disable no-new */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable indent */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useEffect, useState } from 'react';
import ReactImageMagnify from 'react-image-magnify';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useDispatch, useSelector } from 'react-redux';
//import { Link } from 'react-router-dom';
import Link from 'next/link';
import { useRouter } from 'next/router';
import CustomsAPI, { ConstantsValues } from '../../containers/MainPage/api/homeServices';
// import Cookies from 'universal-cookie';
// import { Shimmer } from 'react-shimmer';
// import Drift from 'drift-zoom';
import '../../../public/assets1/css/bundle.css';
import '../../../public/assets1/css/font-awesome.min.css';
import '../../../public/assets1/css/responsive.min.css';
// import '../../../public/assets1/css/style.min.css';
import '../../../public/assets/css/style.min.css';
import { toast } from 'react-toastify';
// import ReactImageZoom from 'react-image-zoom';
//import history from '../../utils/history';
import AddToCart from '../AddToCart';
import mycartAPI from '../MainPage/api/mycartAPI';
import { addToComapre, addTowishlist, getcompare } from '../LoadProducts/actions';
import './productpgae.css';
import BreadCrumb from '../../containers/MyAccount/productpageBreadCrumb';
import { useLocalStorage } from '@/useLocalStorage';
import { audit } from 'rxjs';
import { Button } from 'react-bootstrap';
import { LocationPopup } from '../LocationPopup';
import CheckoutAPI from '../MainPage/api/checkout';
import moment from 'moment';
import Cookies from 'js-cookie';
import ProductDetailAPI from '../MainPage/api/productdetail';
import { Message_data } from '@/context';
import getDetailsFromDomain from '@/utils/getSellerDetails';

// import mycartAPI from '../MainPage/api/mycartAPI';
// import { MagnifierContainer, MagnifierPreview, MagnifierZoom } from 'react-image-magnifiers';
// import ZoomImage from './ZoomImage';
function Productpage(props) {
  let addressListDetails = {};
  if(props?.addressData?.length > 0 && (!props?.enteredPincode || props.enteredPincode === '0')) {
    addressListDetails = props.addressData.find(item => item.isPrimary)
  } else if(props?.enteredPincode) {
    addressListDetails = {};
  }

  if(props?.serviceAvailabilityDetails?.city) {
    props.serviceAvailabilityDetails.city = props.serviceAvailabilityDetails.city.charAt(0) + props.serviceAvailabilityDetails.city.slice(1)?.toLowerCase()
  }

  const router = useRouter();
  const [ProductName, setProductName] = useLocalStorage('ProductName',null);
  const [CustGUID, setCustGUID] = useLocalStorage('CustGUID',null);
  const [skuproduct1, setskuproduct1] = useLocalStorage('skuproduct1',null);
  const [ValueId, setValueId] = useLocalStorage('ValueId',null);
  const [skudetailid, setskudetailid] = useLocalStorage('skudetailid',null);
  const [varientData, setvarientData] = useState([]);
  const [varientselect, setvarientselect] = useState([]);
  const [filtered, setFiltered] = useState(props?.data?.FilterList[0]);
  const dispatch = useDispatch()
  const [Seleced, setSeleced] = useState('');
  // const [qty, setQty] = useState(0);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [SkuImageModel, setSkuImageModel] = useState([]);
  const [buynowclick, setBuynowclick] = useState(false);
  const [msgVarDisp, setMsgVarDisp] = useState();
  // const [LocalStorageRecent, setLocalStorageRecent] = useState([]);
  // const [skucode, setskucode] = useState('');
  const [image, setimage] = useState('');
  const [zoomimage, setzoomimage] = useState('');
  const locationPopupState = useSelector(state => state.locationPopup)
  const skuproduct = useSelector(state => state.product)
  
  const loadProducts = useSelector(state => state.loadProducts)
  const [isClient,setIsClient] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(addressListDetails);
  const [showLocationPopup, setShowLocationPopup] = useState(false);
  const [addressList, setAddressList] = useState(props?.addressData || []);
  const [isDesktop, setIsDesktop] = useState(true);
  const [productDeliveryDetails, setProductDeliveryDetails] = useState(props.serviceAvailabilityDetails);
  const [isUserLogin, setIsUserLogin] = useState(props.loginUserFlag || false);
  const [loading, setLoading] = useState(false);
  const [pinCodeCheck, setPinCodeCheck] = useState(false);
  const [isOutsideLocation, setIsOutsideLocation] = useState(false);
  const [locationMessage, setLocationMessage] = useState('')
  const { compareRefresh, setCompareRefresh, selectedLocationZip, setSelectedLocationZip, selectedLocationName, setSelectedLocationName, locationUpdateFlag, setLocationUpdateFlag } = useContext(Message_data);
  console.log('propssss',props)
  // const [QtyCout, setQtyCout] = useState(1);
  // const [reviewdata, setSeleced] = useState('');
  /* useEffect(() => {
    new Drift(document.querySelector("img"), {
      paneContainer: document.querySelector("p")
    });
  }, []) */

  useEffect(() => {
    setIsClient(true);
  }, [])

  useEffect(() => {
    if(props?.data?.InStock) {
      if(typeof window !== 'undefined' && (localStorage.getItem('CustGUID') || Cookies.get('CustGUID')) && !Cookies.get('enteredCode')) {
        setIsUserLogin(true)
        fetchCustomerAddresses('firstCall');
      } else if(Cookies.get('enteredCode')) {
        const code = Cookies.get('enteredCode');
        fetchCourierServiceAvailability(code, 'changeAddress')
      } else {
        fetchCourierServiceAvailability()
      }
    }
  }, [typeof window !== 'undefined' && (Cookies.get('enteredCode') || Cookies.get('pincodevalue') || localStorage.getItem('pincodevalue'))])

  useEffect(() => {
    if(typeof window !== 'undefined') {
      const handleResize = () => {
        setIsDesktop(window.innerWidth >= 768);
      };
  
      handleResize();
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [])

  useEffect(() => {
    // localStorage.setItem('skuproduct1', skuproduct.skudetaildata.SkuId);
    if (skuproduct !== undefined) {
      //   const SkuIdData = skuproduct.skudetaildata.SkuId;
      //   Cookies.get('SkuIdData', SkuIdData)
      if (skuproduct1 && skuproduct1 !== "") {
        const existingSku = skuproduct1;
        const newSku = skuproduct.skudetaildata.SkuId;
        const recentlyViewedPds = `${existingSku},${newSku}`;
        setskuproduct1(recentlyViewedPds);
      } else if (skuproduct.skudetaildata.SkuId !== undefined) {
        setskuproduct1(skuproduct.skudetaildata.SkuId);
      }
    }
  }, [skuproduct])
  const addToCartRdcr = useSelector(state => state.addToCart)
  
  const changeFltr = (newFL,) => {
    setSeleced(newFL);
    const P = props.data.FilterList ? props.data.FilterList.find(i => i.ListItem === newFL) : props.data.FiltersList.find(i => i.ListItem === newFL);
    setFiltered(P);
  };
  // const { IsDiscountedSFP } = filtered;
  // useEffect(() => {
  //   setFiltered(props.data.FilterList ? props.data.FilterList : props.data.FiltersList[0])
  // }, [props])
  useEffect(() => {
    if (props?.data?.FilterList && props?.data?.FilterList !== undefined) {
      setFiltered(props.data.FilterList[0])
    }
  }, [props,])

  //Multivarient Code
  useEffect(() => {
    if (props?.data?.selectedVariants && props?.data?.selectedVariants !== undefined) {
      const varientdefault = [];
      let finalselected = [];
      props.data.selectedVariants.forEach((selectVData) => {
       // console.log("119SelectedVarient===", selectVData)
        if(selectVData && selectVData.Value && selectVData.Value !== null && selectVData.Value !== ""){
          finalselected = [...finalselected, selectVData]
        }
      })
      const valuesselectVar = finalselected.filter((ele, ind) => ind === finalselected.findIndex(elem => elem.Caption === ele.Caption))
      //console.log("144varientdefaultData===", finalselected)
      setvarientselect(valuesselectVar)
    }
  }, [props?.data?.selectedVariants])
  useEffect(() => {
    if (props !== undefined && props?.varientData !== undefined && props?.data?.selectedVariants !== undefined) {
      let finalvarData = [];
      props.varientData.map((unicVData) => {
        // console.log("uniqueNamesData===", unicVData);
        const values = unicVData.values.filter((ele, ind) => ind === unicVData.values.findIndex(elem => elem.variantName === ele.variantName))
        const finalVData = [{
          "Caption": unicVData.Caption,
          "values": values
        }];
        finalvarData = [...finalvarData, ...finalVData];
        // console.log("uniqueNamesData===", finalvarData);
      })
      //console.log("uniqueNamesGroups===", finalvarData);
      setvarientData(finalvarData)
    }
  }, [props && props?.varientData, props?.data?.selectedVariants])
  useEffect(() => {
    if (props?.varientTraversData && props?.varientTraversData !== undefined) {
      let finalInstcok = [];
      let finalOutstcok = [];
      props.varientTraversData.forEach((selectVData) => {
        if (selectVData.Instock === "1") {
          finalInstcok = [...finalInstcok, selectVData.variantComb]
        }
        if (selectVData.Instock === "0") {
          finalOutstcok = [...finalOutstcok, selectVData.variantComb]
        }
      })
    //  console.log("154varientdefaultData===", finalInstcok, finalOutstcok)
      // setInstock(finalInstcok)
      // setOutstock(finalOutstcok)
    }
  }, [props.varientTraversData])

  useEffect(() => {
    if(isOutsideLocation) {
      setTimeout(() => {
        setIsOutsideLocation(false);
      }, 3000)
    }
  }, [isOutsideLocation])
  const handleVarientImg = (selectVarient, selectCaption) => {
    setMsgVarDisp(true)
  //  console.log("v172arientselect===", selectVarient, selectCaption);
    let finalselected;
    props.data.selectedVariants.forEach((selectVData) => {
      if (selectVData.Caption === selectCaption) {
        finalselected = {
          "Caption": selectCaption,
          "Value": selectVarient,
        }
      }
    })
    console.log("167finalselected==", finalselected);
    const selectVrData = [...varientselect, finalselected]
    const oldDetails = selectVrData.find(user => user.Caption === finalselected.Caption);
    oldDetails && Object.assign(oldDetails, finalselected);
    const fvalues = selectVrData.filter((ele, ind) => ind === selectVrData.findIndex(elem => elem.Caption === ele.Caption))
    setvarientselect(fvalues)
   // console.log("167finalselected==", varientselect, fvalues, oldDetails);
    let TraverPageURL;
    if (props.varientTraversData !== undefined) {
      props.varientTraversData.forEach((vTraversData) => {
      //  console.log("204TraverPageURL==", vTraversData, varientselect);
        if (varientselect !== undefined) {
         // console.log("204TraverPageURL==", vTraversData.variantComb, varientselect);
          //if (JSON.stringify(vTraversData.variantComb) === JSON.stringify(varientselect)) {
            if([...new Set(vTraversData.variantComb.map(JSON.stringify))].every(item => new Set(varientselect.map(JSON.stringify)).has(item))){
          //  console.log("204TraverPageURL==", vTraversData.variantComb, varientselect);
            TraverPageURL = vTraversData.PageUrl
            props.setsendURLPDP(TraverPageURL);
          }
        }
      })
    }
    if (TraverPageURL === undefined) {
      if (props.varientTraversData !== undefined) {
        props.varientTraversData.forEach((vTraversData) => {
          if (varientselect !== undefined) {
            vTraversData.variantComb.forEach((combData) => {
              if (TraverPageURL === undefined) {
                if (combData.Value === selectVarient) {
                  TraverPageURL = vTraversData.PageUrl
                  props.setsendURLPDP(TraverPageURL);
                }
              }
            })
          }
        })
      }
    }
    
   // console.log("TraverPageURL==", TraverPageURL);
    // localStorage.setItem('PageUrl', window.btoa(TraverPageURL))
    // dispatch(getskuProductdetail(window.atob(localStorage.getItem('PageUrl'))))
  }
  // function AddToWishlist(SkuId, SKUFilterPriceId) {
  //   if (CustGUID === null) {
  //     history.push('/login')
  //   } else {
  //     dispatch(addTowishlist(SkuId, SKUFilterPriceId))
  //   }
  // }
  async function AddToWishlist(filter) { 
    const sellerDetailsFromDomain = await getDetailsFromDomain();
    let sellerIdMain = ConstantsValues.defaultSellerID;
    if(sellerDetailsFromDomain && sellerDetailsFromDomain.AdminMemberId && sellerDetailsFromDomain.AdminMemberId!=="") {
      sellerIdMain = sellerDetailsFromDomain.AdminMemberId;
    }
    localStorage.setItem('sellerID',sellerIdMain);
    // console.log('bbnn', loadProducts);
    if (localStorage.getItem('CustGUID')  === null) {
      // history.push('/login')4
      localStorage.setItem('lastVisitedUrl', router.asPath);
      router.push('/login');
    } else {
      dispatch(addTowishlist(filter.SkuDetailId, filter.SKUFilterPriceId))
    }
  }
  useEffect(() => {
    
    if (props?.data?.SkuImageModel && props?.data?.SkuImageModel !== undefined) {
      setSkuImageModel(props.data.SkuImageModel)
    }
    else {
      setSkuImageModel(props.data)
    }
  }, [props])
  // function IncrementDecrementCart(action, SkuId, SKUFilterPriceId) {
  //   if (action === 'inc') {
  //     setQty(qty + 1)
  //     dispatch(addToCart(qty + 1, SkuId, SKUFilterPriceId))
  //     // addToCartFunc(qty + 1, props.data.SkuId, filtered.SKUFilterPriceId)
  //   }
  //   if (action === 'dec') {
  //     // console.log('qty', qty);
  //     setQty(qty - 1)
  //     if (qty === 1) {
  //       dispatch(removeFromCart(SkuId, SKUFilterPriceId))
  //     } else {
  //       dispatch(addToCart(qty - 1, SkuId, SKUFilterPriceId))
  //     }
  //     // console.log('dec', shoppingCart.find(itm => itm.SKUFilterPriceId === filtered.SKUFilterPriceId));
  //     // addToCartFunc(qty - 1, props.data.SkuId, filtered.SKUFilterPriceId)
  //   }
  // }
  useEffect(() => {
    if (skuproduct !== undefined) {
      setShoppingCart(skuproduct.shoppingDetailsHome)
    }
  }, [skuproduct])
  useEffect(() => {
    // console.log('homeScreen', homeScreen);
    if (addToCartRdcr !== undefined) {
      setShoppingCart(addToCartRdcr.shoppingcartDetails)
    }
  }, [addToCartRdcr])
  
  // const QtyCoutFun = () => {
  //   setQtyCout(1)
  // }
  function PDAPpage(e,skuid, ValueId, SkuCode) {
    e.preventDefault();
    console.log('sss', skuid, ValueId, SkuCode);
    setskudetailid(skuid)
    setValueId(ValueId)
    localStorage.setItem('skudetailid',skuid)
    router.push(`/productsale/Sellerlist/`)
    // history.push({ pathname: `/product/${SkuCode}/Sellerlist`, state: { skudetailid: 'dhdhdh' } })
  }
  // const imagedata = {
  //   // width: 400,
  //   //  zoomStyle: 'opacity: 0.1;background-color: white;', 
  //   zoomLensStyle: 'opacity: 0.4;background-color: gray; height : 20;width:20',
  //   scale: 'default', zoomPosition: 'default',
  //   // height: 500,
  //   zoomWidth: 10, img: "https://productionadmin.adibuja.com/Media/Images/250x250//Plum Imported.png"
  // };

 
  async function addcompare(SkuId) {
    const sellerDetailsFromDomain = await getDetailsFromDomain();
    let sellerIdMain = ConstantsValues.defaultSellerID;
    if(sellerDetailsFromDomain && sellerDetailsFromDomain.AdminMemberId && sellerDetailsFromDomain.AdminMemberId!=="") {
      sellerIdMain = sellerDetailsFromDomain.AdminMemberId;
    }
    localStorage.setItem('sellerID',sellerIdMain);
    const compareflag=false;
    fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data =>{ 
      // CustomsAPI.getnewcompare(SkuId, data.ip)
      dispatch(getcompare(SkuId, data.ip, compareflag))
    })
    .catch(error => console.log(error))
  }

  // useEffect(() => {
  //   if (shoppingCart !== undefined && shoppingCart !== "") {
  //     shoppingCart.forEach(element => {
  //       console.log("filterelement==", element, element.SkuDetailId, props.data.SkuId)
  //       if (element.SkuDetailId === props.data.SkuId) {
  //         setprodQuantity(element.Quantity)
  //       }
  //     })
  //   }
  // }, [shoppingCart])
  const handleBuynow = () => {
    //     skuId: 
    // 86573
    // skufilterpriceid: 
    // 12650
    // console.log("SkuId, SKUFilterPriceId)", SkuId, SKUFilterPriceId);
    // const qty = 0
    // dispatch(addToCart(qty + 1, SkuId, SKUFilterPriceId))
    // setViewCart(true)
    // console.log("packdropdown", Seleced);
    // const prodQuantity = "";
    // console.log("packdropdown222", props.data, filtered.ListItem, filtered.Quantity, filtered.SkuDetailId, filtered.SKUFilterPriceId);
    let prductItem = false;
    if (shoppingCart !== undefined && shoppingCart !== "") {
      shoppingCart.forEach(element => {
        
        // if (element.SkuDetailId === filtered.SkuDetailId) {
        if (element.SKUFilterPriceId === filtered.SKUFilterPriceId) {
          
          prductItem = true;
        }
        // }
      })
    }
    
    if (prductItem === false) {
      mycartAPI.updatecart(null, 1, filtered.SkuDetailId, filtered.SKUFilterPriceId)
        .then((updateres) => {
          
        })
    }
    // if (addToCartRdcr === ) {
    //   mycartAPI.updatecart(null, 1, filtered.SkuDetailId, filtered.SKUFilterPriceId)
    //     .then((updateres) => {
    //       console.log("updateres===>", updateres);
    //     })
    // }
    // history.push('/cart')
    // mycartAPI.updatecart(null, 1, props.data.SkuId, filtered.SKUFilterPriceId)
    //   .then((updateres) => {
    //     console.log("updateres===>", updateres);
    //   })
    // setBuynowclick(true)
    // mycartAPI.updatecart(null, 1, props.data.SkuId, filtered.SKUFilterPriceId)
    //   .then((updateres) => {
    //     console.log("updateres===>", updateres);
    //   })
    setBuynowclick(true)
    // console.log("packdropdown", prodQuantity, filtered);
    // history.push('/cart')
  }
  useEffect(() => {
    if (buynowclick) {
      router.push('/cart')
    }
  }, [buynowclick])
  // },[buynowclick])
  // const firstimage = 
  // const zoomimage = SkuImageModel.map(d => d.ZoomImage)
  // useEffect(() => {
  //   setzoomimage(SkuImageModel && SkuImageModel.map(d => d.ZoomImage))
  // }, [image])
  useEffect(() => {
    
    // if (SkuImageModel && SkuImageModel.length > 0) {
    //   setimage(SkuImageModel && SkuImageModel[0].PDPImage !== "undefined" && SkuImageModel[0].PDPImage)
    //   setzoomimage(SkuImageModel && SkuImageModel[0].ZoomImage)
    // }
    // else {
    //   setimage(SkuImageModel && SkuImageModel.map(d => d.PDPImage[0]))
    //   setzoomimage(SkuImageModel && SkuImageModel.map(d => d.ZoomImage))
    // }

    if (filtered && filtered.imagegallery && filtered.imagegallery.length > 0) {
      console.log("imgsection", filtered)
      setimage(filtered && filtered.imagegallery[0].PDPImage !== "undefined" && filtered && filtered.imagegallery[0].PDPImage)
      setzoomimage(filtered && filtered.imagegallery[0].ZoomImage)
    }else{
      console.log("imgsection", SkuImageModel)
      setimage((SkuImageModel && SkuImageModel.length > 0 && SkuImageModel[0].PDPImage) || (props && props?.data && props?.data?.ListingImage))
      setzoomimage((SkuImageModel && SkuImageModel.length > 0 && SkuImageModel[0].ZoomImage) || (props && props?.data && props?.data?.ListingImage))
      // setimage(SkuImageModel && SkuImageModel.map(d => d.PDPImage))
      // setzoomimage(SkuImageModel && SkuImageModel.map(d => d.ZoomImage))
    }
  }, [props, filtered])
  function changeimage(imaged, changezoom) {
     console.log("change", imaged, changezoom);
    setimage(imaged)
    setzoomimage(changezoom)
  }
  function addDefaultSrc(ev) {
    
    // ev.target.src = SkuImageModel.map(d => d.PDPImage)
    console.log('200',ev.target.src, `${props.data.PageUrl}`)
    if (ev.target.src === `https://stageuinextreact.adibuja.com/product/${props.data.PageUrl}`) {
      ev.target.src = 'https://devadmin.adibuja.com/Media/Images/250x250/image_not_found.jpg'
    }
    // setimage(SkuImageModel.map(d => d.PDPImage[0]))
  }
  const handleReview=()=>{
    // window.scrollTo(0, 3250);
    // window.scrollTo({ top: 70, behavior: 'smooth'});
  }
  
  // useEffect(() => {
  //   addDefaultSrc()
  // }, [])
  // console.log('product-details-main-wrappe', SkuImageModel.map(d => d.PDPImage), image[0], zoomimage[0]);
  useEffect(() => {
    mycartAPI.getShoppingcartDetails()
      .then((res) => {
        //console.log("reorderproductprint11", res);
        setShoppingCart(res)
      })
  },[router])

  useEffect(()=>{
//  document.body.style.overflow = "hidden";
    document.body.classList.add('stopBodyscrollingOnPDP');
  },[])

  useEffect(() => {
    if(Cookies.get('isLocationNotSelected')) {
      setSelectedAddress({})
    } else if(addressList?.length > 0 && !Cookies.get('enteredCode')) {
      const findSelectedAddress = addressList.find(item => item.isPrimary)
      setSelectedAddress(findSelectedAddress)
    }
  }, [addressList])

  const fetchCustomerAddresses = (param) => {
    CheckoutAPI.getcustomeraddress({})
      .then(response => {
        const sortedData = response?.sort((a, b) => (b.isPrimary ? 1 : -1) - (a.isPrimary ? 1 : -1));
        setAddressList(sortedData);
        if(param && Cookies.get('enteredCode')) {
          const pincode = Cookies.get('enteredCode');
          fetchCourierServiceAvailability(pincode);
        } else if(param && !Cookies.get('isLocationNotSelected')) {
          fetchCourierServiceAvailability(sortedData?.[0]?.ZipCode);
        }else if(Cookies.get('isLocationNotSelected')) {
          fetchCourierServiceAvailability();
        } 
      }).catch(err => {
        console.log("Error in address API:::", err);
      });
  }

  const fetchCourierServiceAvailability = async (zipcode, type) => {
    const requestBody = {
      skuDetailId: filtered?.SkuDetailId || 0,
      skuFilterPriceId: filtered?.SKUFilterPriceId || 0,
      clientId: ConstantsValues.ClientId,
      languageId: ConstantsValues.languageId,
      pincode: zipcode || Cookies.get('enteredCode') || Cookies.get('pincodevalue') || localStorage.getItem('pincodevalue') || ConstantsValues.pincode,
      soldby: "Adibuja",
      custGuid: localStorage.getItem('CustGUID') ? window.atob(localStorage.getItem('CustGUID')) : ConstantsValues.defaultCustGUID,
      ShoppingCartGUID: localStorage.getItem('CartGUID') ? window.atob(localStorage.getItem('CartGUID')) : ConstantsValues.defaultCartGUID
    }
    setLoading(true);

    CheckoutAPI.getServiceAvailability(requestBody)
      .then(resp => {
        setIsOutsideLocation(false)
        setLocationMessage('')
        if(resp?.Message?.includes('error')) {
          setPinCodeCheck(true);
          setLoading(false);
        } else if(Object.keys(resp)?.length > 0) {
          setPinCodeCheck(false)
          if(!resp?.city && !resp?.postcode) {
            setLoading(false);
            setIsOutsideLocation(true);
            setLocationMessage(`We are currently operational in Pune (selected locations). We're working on it and hang tight, we will serve you very soon!`)
          } else {
            resp.city = resp?.city.charAt(0) + resp?.city.slice(1).toLowerCase();
            setProductDeliveryDetails(resp)
            if (type) {
              localStorage.setItem('pincodevalue', resp?.postcode);
              localStorage.setItem('sublocalityvalue', resp?.city)
              Cookies.set('pincodevalue', resp?.postcode, { expires: 15 });
              Cookies.set('sublocalityvalue', resp?.city, { expires: 15 })
              setLocationUpdateFlag(true)
              setSelectedAddress({})
              Cookies.set('enteredCode', resp?.postcode, { expires: 15 });
              Cookies.remove('isLocationNotSelected');
            }
            setLoading(false);
            setShowLocationPopup(false);
          }
        }
      })
      .catch(err => {
        setLoading(false);
        setShowLocationPopup(false);
        console.log('Error in service availablity API:', err);
      })
      .finally(() => setLoading(false))
  }

  useEffect(()=> {
    const key = "rzp_test_VCsnPXPPhGYPJC"; //Replace it with your Live Key before uploading on live
    //const key = "rzp_live_a2drmSnqSRpolp"; //Replace it with your Live Key before uploading on live
    const amount = filtered.FilterSPPrice;    
    const widgetConfig = {
      "key": key,
      "amount": amount,
    };
    const rzpAffordabilitySuite = new RazorpayAffordabilitySuite(widgetConfig);
    rzpAffordabilitySuite.render();
  },[])

  return (
    <>
      <BreadCrumb product="product" activepage={props?.data?.SkuDisplayName} className="productpageBreadcrumb" />
     {showLocationPopup ?
        <LocationPopup 
          fetchToggle={() => setShowLocationPopup(false)} 
          addressList={addressList} 
          fetchCustomerAddresses={fetchCustomerAddresses} 
          fetchCourierServiceAvailability={fetchCourierServiceAvailability}
          isUserLogin={isUserLogin}
          loading={loading}
          pinCodeCheck={pinCodeCheck}
          isOutsideLocation={isOutsideLocation}
          locationMessage={locationMessage}
          setLocationMessage={setLocationMessage}
          setIsOutsideLocation={setIsOutsideLocation}
          isProductPage
        />
      : ''}
      <div className="product-details-main-wrapper pb-0 pt-35" data-product-link="montrese-workstation-in-white-colour"
        data-category-link="">
        <div className="container-fluid">
        <div className="row" id="product_detail">
        
            <SkeletonTheme>
              
            </SkeletonTheme>
         
            <div className="col-lg-5 col-md-10 col-sm-10 col-12 zoomer">
              
              {isClient && props && props.data && props.data.ListingImage &&
                (< ReactImageMagnify
                  referrerPolicy='no-referrer'
                  {...{
                    smallImage: {
                      alt: "",
                      isFluidWidth: true,
                      src: image,
                    
                      onError: (e) => addDefaultSrc(e)
               
                    },
                    largeImage: {
                      alt: "",
                      src: zoomimage,
                      width: 2000, // incoming image width should come
                      height: 1800, // incoming height  should come
                    },
                    enlargedImageContainerStyle: {
                      zIndex: "100",
                      backgroundColor: "#fff"
                    },
                    enlargedImageContainerDimensions: {
                      width: '150%',
                      height: 580
                    },
                  }}
                />)
              }
              <div className="pro-nav slick-initialized slick-slider slick-vertical" id="gallery_01" ust>
                <div className="slick-list draggable justify-content-center">
                  <div className="slick-track" style={{ opacity: 1, height: '306px', }}>
                    {filtered && filtered.imagegallery.length > 0 ? (filtered.imagegallery || []).map(data =>
                      <div className="pro-nav-thumb slick-slide slick-current slick-active" id="thumbnailimage" data-slick-index="0"
                        aria-hidden="false" style={{ width: '102px' }} >
                        <a href onClick={() => changeimage(data.PDPImage, data.ZoomImage)}
                          className="active">
                          <img src={data.SmallImage}
                            alt="Montrese Workstation in White Colour" width="150" height="150" />
                        </a>
                      </div>
                    )
                  :
                    SkuImageModel && SkuImageModel.length > 0 && (SkuImageModel || []).map(data =>
                      <div className="pro-nav-thumb slick-slide slick-current slick-active" id="thumbnailimage" data-slick-index="0"
                        aria-hidden="false" style={{ width: '102px' }} >
                        <a href onClick={() => changeimage(data.PDPImage, data.ZoomImage)}
                          className="active">
                          <img src={data.SmallImage}
                            alt="Montrese Workstation in White Colour" width="150" height="150" />
                        </a>
                      </div>
                    )
                  }
                  </div>
                </div>
              </div>
            </div>

            {props && props.data ?
              <div className="col-lg-7 col-md-12">
                <div className="product-details-inner pr-block" id="productdetails">
                  <div className="product-details-contentt">
                    <div className="pro-details-name">
                      <h1>{props.data.SkuDisplayName || <Skeleton width={80} />}</h1>
                    </div>
                    <div className="pro-details-review mb-10">
                      <ul>
                        <li>
                          {<div dangerouslySetInnerHTML={{ __html: props.data.ratings }} /> || <Skeleton width={80} />}
                         
                        </li>
                        <li><Link href="#ReviewForm" id="ReviewsButton">{props.data.ReviewCount} Review(s)</Link></li>
                      </ul>
                    </div>
                    <div className="price-box" style={{ marginBottom: '7px' }}>
                      <div className="price-box">
                        <span id="mrpprice84284" className="mrp-price">M.R.P:</span> <span className="mrp-price mrp-price-marginleft"
                          id="oldprice84284"><del>₹{filtered.FilterMRPPrice || <Skeleton width={80} />}</del> &nbsp;&nbsp;</span>
                        <span className="selling-price">Price:</span> <span className="selling-price"><span className="" id="spprice84284">
                          ₹{filtered.FilterSPPrice}</span></span>
                        {filtered.FilterDiscount !== 0 ?
                          <span className="you-save label_discount btn-cart ml-1" id="discountpercent84284"> {filtered.FilterDiscount}% off</span> : null}
                        <br />
                        {filtered.FilterSavedRs !== 0 ?
                          // <div className='productSaveprice'>
                          //   <span id="savedrstextid84284" className="saved-rs-text">You Save
                          //   </span> &nbsp;
                          //   <span>:</span>
                          // </div> 
                           <div className="product-size d-flex align-items-center mt-10">
                            <label className="saved-rs-text"  id="savedrstextid84284">You Save</label>
                            <label className="sellername saved-rs-text" id="savedrstextid84284"> :&nbsp;₹{filtered.FilterSavedRs}</label>
                            </div>                     
                          : null}
                        
                        {/* {filtered.FilterSavedRs !== 0 ?
                          <span className="saved-rs-text"
                            id="savedrsid84284"> ₹{filtered.FilterSavedRs}</span> : null} */}
                        {/* <span id="taxvalueid84284" className="Tax-type">
                          &nbsp;</span> */}
                      </div>
                    </div>
                   
                    <div className="product-size d-flex align-items-center">
                      <label>Pack Size</label>
                      <input type="hidden" className="PriceId" value="190" />
                      :&nbsp;{props.data.FilterList !== undefined && props.data.FilterList.length === 1 && (
                        <span>{props.data.FilterList[0].ListItem}</span>
                      )}
                      {props.data.FilterList !== undefined && props.data.FilterList.length > 1 && (
                        <select className="nice-select ddl-weight" style={{ display: 'none' }}
                          onChange={event =>
                            changeFltr(event.target.value, props.data.SkuId)
                          }
                          value={Seleced}>
                    
                          {props.data.FilterList !== undefined && (props.data.FilterList.map(itm => (
                            <option value={itm.ListItem}>{itm.ListItem}</option>
                          )))}
                        </select>
                      )}
                     
                    </div>
                    <div className="product-size d-flex align-items-center mt-10">
                      <label>Sold by</label>
                      <label className="sellername" id="sellerNameLabel"> :&nbsp;{props.data.SellerName}</label>
                    </div>
                    {props?.isLogisticsEnable && props?.data?.InStock && props.data.IsDeliveryAvailableToPinCode && (selectedAddress?.ZipCode || productDeliveryDetails?.postcode) && (
                      <>
                        <div className={`product-size d-flex ${selectedAddress?.Address2 ? 'align-items-start' : 'align-items-baseline'} mt-10`}>
                          <label className='text-nowrap'>Deliver to</label>
                          :&nbsp;{selectedAddress?.Address2 ? (
                            <>
                              <label className="sellername" id="sellerNameLabel">
                                <span>
                                  {`${isDesktop ? `${selectedAddress?.FirstName} ${selectedAddress?.LastName}` : `${selectedAddress?.FirstName}...`}, ${selectedAddress?.ZipCode || ''}`}
                                  <p className='mb-0'>{isDesktop ? selectedAddress?.Address2?.length > 40 ? `${selectedAddress?.Address2?.slice(0, 40)}...` : selectedAddress?.Address2 : `${selectedAddress?.Address2?.slice(0, 12)}...`}</p>
                                </span>
                              </label>
                            </>) : props?.enteredPincode && productDeliveryDetails?.postcode && (
                              <label className='mr-2'>{`${isDesktop ? productDeliveryDetails?.city : productDeliveryDetails?.city?.length > 5 ? `${productDeliveryDetails.city.slice(0, 5)}...` : productDeliveryDetails?.city}, ${productDeliveryDetails.postcode}`}</label>
                            )
                          }
                          <Button type='button' variant="dark" style={{ boxShadow: 'none', fontSize: '15px', padding: '5px' }} onClick={() => {setShowLocationPopup(true); setPinCodeCheck(false)}} active>{`${isUserLogin ? 'Change' : 'Enter Pincode'}`}</Button>
                        </div>
                        <div className="product-size d-flex align-items-start mt-10">
                          <label className='text-nowrap'>Delivery By</label>
                          <label className="sellername" id="sellerNameLabel"> :&nbsp;{productDeliveryDetails?.etd ? moment(productDeliveryDetails.etd, 'MMM D, YYYY').format('MMM D, dddd') : ''}</label>
                        </div>
                        <div className="product-size d-flex align-items-start mt-10">
                          <label className='text-nowrap'>Delivery Charges</label>
                          <label className="sellername" id="sellerNameLabel"> :&nbsp;{productDeliveryDetails?.rate != 0 ? `₹${Math.round(productDeliveryDetails.rate)?.toFixed(2)}` : productDeliveryDetails?.rate == 0 ? <span style={{ color: 'green'}}>FREE Delivery</span> : '-'}</label>
                        </div>
                      </>
                    )}
                    <div className="pro-quantity-box mb-20 mt-10">
                      <div className="qty-boxx">
                        
                        <div className="clearfix"> </div>
                       
                        {props.data.IsDeliveryAvailableToPinCode && props.data.IsDeliveryAvailableToPinCode ?
                          <AddToCart data={props.data} shoppingCart={shoppingCart} filtered={filtered} PDPpage /> :
                          <div className="delivery-not-available-pdp">
                            Can't deliver to pin code <b>{locationPopupState && locationPopupState.pincode}</b>
                          </div>}
                        
                          {((props.data.InStock === false) || (props.data.InStock && !props.data.IsDeliveryAvailableToPinCode)) ? null :
                         
                          <button type='button' onClick={() => handleBuynow()} className="btn-cart btn_atc md-btn buy-now" >
                            Buy Now
                          </button>}
                        <div className="clearfix"></div>
                      </div>
                    </div>
                    <br />
                    {
                      varientData && varientData.length !== 0 && varientData.map((vData, vindex) =>
                        vData.values && vData.values !== undefined && vindex === 0 ?
                          <div className='row product-size' id="prodMobile" style={{ marginBottom: "15px" }}>
                            <div className='col-lg-2 col-md-2 col-xs-12 multilevelHeading' style={{width:"auto", display:'flex'}}>
                              <label style={{ marginTop: "10px" }}><b>{vData.Caption}</b></label>
                              <div style={{ marginTop: "10px" }}>:</div>
                            </div>
                            <div className='responsiveMultivariant'>
                            {
                              vData.values.map((vrData, indexImg) => {
                                let finalSelectVar = [];
                                let dyselectstate;
                                varientselect.map((selectVRselect, indexselect) => {
                                  indexselect === vindex ?
                                    dyselectstate = {
                                      "Caption": vData.Caption,
                                      "Value": vrData.variantName
                                    }
                                    :
                                    dyselectstate = {
                                      "Caption": selectVRselect.Caption,
                                      "Value": selectVRselect.Value
                                    }
                                  finalSelectVar = [...finalSelectVar, dyselectstate]
                                })
                                { console.log("finalSelectVar====", finalSelectVar) }
                                return (
                                  varientselect.map((selectVRData) => {
                                    let Instockatus = false;
                                    let Outstockatus = false;
                                    return (
                                      selectVRData.Caption === vData.Caption ?
                                     
                                        <div className='col-lg-1 col-md-2 col-sm-2 col-xs-3' id='imgSmallscreen' onClick={() => handleVarientImg(vrData.variantName, vData.Caption)} style={selectVRData.Value === vrData.variantName ? { marginRight: "25px", border: "1px solid #000", borderRadius: "5px", marginBottom: "20px", marginBottom: "20px", padding: "5px", width:"auto", cursor: "pointer" } : { marginRight: "25px", border: "1px solid #ccc", borderRadius: "5px", marginBottom: "20px", padding: "0px", cursor: "pointer", width:"auto" }}>
                                          <div className='varientImg'>
                                            <button  style={{ padding: "0px", marginLeft: "12%", marginTop: "5%" }} >
                                              {
                                                props && props.varientTraversData.map((InstockData) =>
                                                (
                                                  //JSON.stringify(finalSelectVar) === JSON.stringify(InstockData.variantComb) && InstockData.Instock === true ?
                                                  [...new Set(finalSelectVar.map(JSON.stringify))].every(item => new Set(InstockData.variantComb.map(JSON.stringify)).has(item)) && InstockData.Instock === true ?
                                                    Instockatus = true
                                                    : Outstockatus = true
                                                )
                                                )
                                              }
                                              {
                                                Instockatus === true && Outstockatus === true ?
                                                  <div>
                                                    <img src={vrData.SmallImage} width="60" height="100" style={{ opacity: "1", cursor: "pointer" }} />
                                                  </div>
                                                  :
                                                  null
                                              }
                                              {
                                                Instockatus === true && Outstockatus === false ?
                                                  <div>
                                                    <img src={vrData.SmallImage} width="60" height="100" style={{ opacity: "1", cursor: "pointer" }} />
                                                  </div>
                                                  :
                                                  null
                                              }
                                              {
                                                Instockatus === false && Outstockatus === true ?
                                                  <img src={vrData.SmallImage} width="60" height="100" style={{ opacity: "0.2", cursor: "pointer" }} />
                                                  :
                                                  null
                                              }
                                                {
                                                Instockatus === false && Outstockatus === false ?
                                                  <img src={vrData.SmallImage} width="60" height="100" style={{ opacity: "0.2", cursor: "pointer" }} />
                                                  :
                                                  null
                                              }
                                            </button>
                                          </div>
                                          <div className='text-center' style={{ wordWrap: "break-word" }}>{vrData.variantName}</div>
                                          <div>
                                            {
                                              Instockatus === true && Outstockatus === true ?
                                                <div className='text-center' style={{ color: "#080", fontSize:"12px" }}>Instock</div>
                                                :
                                                null
                                            }
                                          </div>
                                          <div>
                                            {
                                              Instockatus === true && Outstockatus === false ?
                                                <div className='text-center' style={{ color: "#080", fontSize:"12px" }}>Instock</div>
                                                :
                                                null
                                            }
                                          </div>
                                          <div>
                                            {
                                              Instockatus === false && Outstockatus === true ?
                                                <div className='text-center' style={{ color: "#a00", fontSize:"10px" }}>Out of stock</div>
                                                :
                                                null
                                            }
                                          </div>
                                          <div>
                                            {
                                              Instockatus === false && Outstockatus === false ?
                                                <div className='text-center' style={{ color: "#a00", fontSize:"10px" }}>Out of stock</div>
                                                :
                                                null
                                            }
                                          </div>
                                        </div>
                                     
                                        :
                                        null
                                    )
                                  })
                                )
                              }
                              )
                            }
                            </div>
                          </div>
                          :
                          <div>
                          <div className='row product-size' id="prodMobile">
                            <div className='col-lg-2 col-md-2 col-sm-2 col-xs-3 multilevelHeading' style={{width:"auto", display:'flex'}}>
                              <label style={{ marginTop: "15px" }}><b>{vData.Caption}</b></label>
                              <div style={{ marginTop: "15px" }}>:</div>
                            </div>
                            {
                              vData.values.map((vrData, index) => {
                                let finalSelectVar = [];
                                let dyselectstate;
                                varientselect.map((selectVRselect, indexselect) => {
                                  indexselect === vindex ?
                                    dyselectstate = {
                                      "Caption": vData.Caption,
                                      "Value": vrData.variantName
                                    }
                                    :
                                    dyselectstate = {
                                      "Caption": selectVRselect.Caption,
                                      "Value": selectVRselect.Value
                                    }
                                  finalSelectVar = [...finalSelectVar, dyselectstate]
                                })
                                { console.log("finalSelectVar====", finalSelectVar) }
                                return (
                                  varientselect.map((selectVRData) => {
                                    let Instockatus = false;
                                    let Outstockatus = false;
                                    return (
                                      selectVRData.Caption === vData.Caption ?
                                        <div className='col-lg-1 col-md-2 col-sm-2 col-xs-2 multilevelSmallscreen' style={{ marginRight: "25px", marginBottom: "20px", textAlign: "center", padding: "5px", width:"auto" }}>
                                          {
                                            props && props.varientTraversData.map((InstockData) => (
                                              //JSON.stringify(finalSelectVar) === JSON.stringify(InstockData.variantComb) && InstockData.Instock === true ?
                                              [...new Set(finalSelectVar.map(JSON.stringify))].every(item => new Set(InstockData.variantComb.map(JSON.stringify)).has(item)) && InstockData.Instock === true ?
                                              Instockatus = true
                                                : Outstockatus = true
                                            ))
                                          }
                                          {
                                            Instockatus === true && Outstockatus === true ?
                                              <div style={selectVRData.Value !== vrData.variantName ? { border: "1px solid #000", borderRadius: "5px", width: "100%", height: "35px", padding: "5px", paddingTop: "1px", cursor: "pointer", } : { border: "0px solid #000", borderRadius: "5px", backgroundColor: "#343a40", width: "100%", height: "35px", padding: "5px", paddingTop: "1px", color: "#fff", cursor: "pointer" }} onClick={() => handleVarientImg(vrData.variantName, vData.Caption)}>
                                                <div style={{  marginTop: "5px", fontSize: "14px" }}>
                                                  {vrData.variantName}
                                                </div>
                                              </div>
                                              :
                                              null
                                          }
                                          {
                                            Instockatus === true && Outstockatus === false ?
                                              <div style={selectVRData.Value !== vrData.variantName ? { border: "1px solid #000", borderRadius: "5px", width: "100%", height: "35px", padding: "5px", paddingTop: "1px", cursor: "pointer", } : { border: "0px solid #000", borderRadius: "5px", backgroundColor: "#343a40", width: "100%", height: "35px", padding: "5px", paddingTop: "1px", color: "#fff", cursor: "pointer" }} onClick={() => handleVarientImg(vrData.variantName, vData.Caption)}>
                                                <div style={{  marginTop: "5px", fontSize: "14px" }}>
                                                  {vrData.variantName}
                                                </div>
                                              </div>
                                              :
                                              null
                                          }
                                          {
                                            Instockatus === false && Outstockatus === true ?
                                              <div style={selectVRData.Value !== vrData.variantName ? { border: "1px solid #000", borderRadius: "5px", width: "100%", height: "35px", padding: "1px 1px 1px 5px", cursor: "pointer" } : { border: "0px solid #000", borderRadius: "5px", backgroundColor: "#343a40", width: "100%", height: "35px", padding: "5px", paddingTop: "1px", color: "#fff", cursor: "pointer" }} onClick={() => handleVarientImg(vrData.variantName, vData.Caption)}>
                                                <div className="variantNotavai" style={
                                                  selectVRData.Value !== vrData.variantName ?
                                                    {
                                                      borderBottom: "2px solid #000",
                                                      width: "",
                                                      transform: "rotate(42deg)",
                                                      transformOrigin: "top left",
                                                      marginLeft: "9px",
                                                      marginTop: "-2px",
                                                    }
                                                    :
                                                    {
                                                      borderBottom: "0px !important",
                                                      width: "0%",
                                                      transform: "rotate(42deg)",
                                                      transformOrigin: "top left",
                                                      marginLeft: "-10px",
                                                      marginTop: "-2px",
                                                    }
                                                }>
                                                </div>
                                                <div style={{  marginTop: "5px", fontSize: "14px" }}>
                                                  {vrData.variantName}
                                                </div>
                                              </div>
                                              :
                                              null
                                          }
                                           {
                                            Instockatus === false && Outstockatus === false ?
                                              <div style={selectVRData.Value !== vrData.variantName ? { border: "1px solid #000", borderRadius: "5px", width: "100%", height: "35px", padding: "1px 1px 1px 5px", cursor: "pointer" } : { border: "0px solid #000", borderRadius: "5px", backgroundColor: "#343a40", width: "100%", height: "35px", padding: "5px", paddingTop: "1px", color: "#fff", cursor: "pointer" }} onClick={() => handleVarientImg(vrData.variantName, vData.Caption)}>
                                                <div style={
                                                  selectVRData.Value !== vrData.variantName ?
                                                    {
                                                      borderBottom: "2px solid #000",
                                                      width: "",
                                                      transform: "rotate(42deg)",
                                                      transformOrigin: "top left",
                                                      marginLeft: "9px",
                                                      marginTop: "-2px",
                                                    }
                                                    :
                                                    {
                                                      borderBottom: "0px !important",
                                                      width: "0%",
                                                      transform: "rotate(42deg)",
                                                      transformOrigin: "top left",
                                                      marginLeft: "-10px",
                                                      marginTop: "-2px",
                                                    }
                                                }>
                                                </div>
                                                <div style={{ marginTop: "5px", fontSize: "14px" }}>
                                                  {vrData.variantName}
                                                </div>
                                              </div>
                                              :
                                              null
                                          }
                                        </div>
                                        :
                                        null
                                    )
                                  })
                                )
                              })
                            }
                          </div>
                          </div>
                      )
                    }
                    {
                      props && props.varientData && props.varientData.length > 0 && msgVarDisp ?
                      <h4  style={{color:"#090", marginLeft:"15%", marginBottom:"20px"}}><b>Updated other options based on this selection</b></h4>
                      :
                        null
                    }
                    <strong>Available offers</strong>
                    <div id="razorpay-affordability-widget"> </div>
                    <div className="useful-links pdpLinks mb-20">
                      <ul>
                        <li> 
                          <Link 
                            href="#" 
                            onClick={(e) => { 
                              e.preventDefault();
                              AddToWishlist(filtered)
                            }} 
                            title="Add to Wishlist"><i className="fa fa-heart-o"></i>add to wish list</Link> </li>
                        <li> <Link href="#" onClick={(e) => {e.preventDefault(); addcompare(props.data.SkuId)}} title="Compare Product"><i className="fa fa-refresh"></i>
                        compare this product</Link> </li>
                
                        {
                          props?.sellerId==="0" ? 
                          <>
                            <li> <Link href="#" onClick={(e) => PDAPpage(e,props.data.SkuId, filtered.ValueId, props.data.ProductName)} > 
                            <i className="fa fa-address-book-o"></i>                        
                            Other Sellers
                            </Link> </li>
                            <li> <a target="_blank" href={props.sellerRegisterUrl} ><i className="fa fa-balance-scale"></i> Sell on Adibuja</a></li>
                          </>
                          :
                          ""
                        }
                      </ul> 
                    </div>
                    
                  </div>
                </div>
                        </div>
                        :
                        <div className="col-md-12" style={{ padding: '5%' }}>
                        <div className="alert alert-warning text-center">Products Not Found</div>
                      </div>
                        }
            
          </div>
          <div className='productdesc'>
            {props?.data?.LongDescription && props?.data?.LongDescription !== null ?
              <span dangerouslySetInnerHTML={{ __html: props.data.LongDescription }} />
              :
              null}
          </div>
          {props?.data?.ProductSpecification?.length > 0 ? (
            <div className='specification-container'>
              <h3 className='productSpecificationText mb-2'>Product Specifications:</h3>
              <div className="specification-table" >
              {props.data.ProductSpecification.map((item, idx) => (
                <div className='specification-row' key={`spec-${idx}`}>
                  <div className="specification-column">{item?.Name}</div>
                  <div className="specification-column">{item?.Value}</div>
                </div>
              ))}
              </div>              
            </div>
          ) : ''}
        </div>
      </div>
    </>
  )
}
export default Productpage
