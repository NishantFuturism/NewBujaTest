/* eslint-disable no-unused-expressions */
/**
 *
 * SearchProduct
 *
 */
import React, { useState, useEffect, useRef } from 'react';
import { useInjectSaga } from '@/utils/injectSaga';
import { useInjectReducer } from '@/utils/injectReducer';
import { useSelector, useDispatch } from 'react-redux';
import classnames from "classnames";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Multiselect from 'multiselect-react-dropdown';
import SlidingPane from "react-sliding-pane";
// import BouncingDotsLoader from '../../components/BouncingDotsLoader';
import reducer from '../containers/SearchProduct/reducer';
import saga from '../containers/SearchProduct/saga';
import Header from '../components/Header/index';
import SubNavigation from '../components/SubNavigation';
import LoadProducts from '../containers/LoadProducts';
import ProductlistingAPI from '../containers/MainPage/api/productlisting';
import SearchAPI from '../containers/MainPage/api/search';
import Footer from '../components/Footer/footer';
import { getproducts } from '../containers/MavigationBar/actions';
import Constants from '../containers/App/constants';
// import { getSearchProductlist } from './actions';
import BreadCrumb from '../containers/MyAccount/myAccountBreadcrumb';
import ToppSellingOriginal from '../containers/ToppSellingOriginal';
import { RecentlyViewProduct } from '../containers/RecentlyViewProduct';
import { copyShopingCartDetails } from '../containers/HomeScreen/actions';
import { nextBtn } from '../containers/ToppSellingOriginal/actions';
import "react-sliding-pane/dist/react-sliding-pane.css";
// import DealdayProductOriginal from '../DealdayProductOriginal';
// import { ToppSellingOriginal } from '../ToppSellingOriginal/index';
// import Slider from '../Subcategory/Slider';
// import TopsellingProduct from '../TopsellingProduct';
import '../containers/SearchProduct/slider.css'
import { ReorderProduct } from '../containers/ReorderProduct';
import { useRouter } from 'next/router';
import mycartAPI from '@/containers/MainPage/api/mycartAPI';

// import { Divider } from 'rc-menu';
// import { ReorderProduct } from '../ReorderProduct';
export function SearchProduct() {
  useInjectReducer({ key: 'searchProduct', reducer });
  useInjectSaga({ key: 'searchProduct', saga });

  const router = useRouter();
  const { asPath } = router;
  const [searchText, setSearchText] = useState(decodeURIComponent(asPath.split('=')?.[1]))
  const [isLoading,setIsLoading] = useState(false);
  const [CustGUID,setCustGUID] = useState('');
  const [searchproduct, setsearchproduct] = useState([]);
  const [advancegetskufilterdata, setadvancegetskufilterdata] = useState([]);
  const [shoppingcart, setShoppingcart] = useState([]);
  // const [initialCall, setInitialCall] = useState(false);
  const [valueString, setValueString] = useState('');
  const [BrandList, setBrandList] = useState([]);
  const [valuepackString, setvaluepackString] = useState('');
  const [fieldString, setfieldString] = useState('');
  const [valuediscountstring, setvaluediscountstring] = useState('');
  // const [loading, setloading] = useState(false);
  const [Weight, setWeight] = useState([]);
  const [GlassType, setGlassType] = useState([]);
  const [PrimaryCamera, setPrimaryCamera] = useState([]);
  const [InternalStorage, setInternalStorage] = useState([]);
  // const [Reset, setReset] = useState(false);
  const [RAM, setRAM] = useState([]);
  const [Color, setColor] = useState([]);
  const [skuids, setSkuIds] = useState([])
  const [showFilters, setShowFilters] = useState(false)
  // const [filterList,setFilterlist]=useState([])
  const [filterproduct, setfilterproduct] = useState([]);
  const [filterflag, setFilterflag] = useState(false)
  // const [checkboxflag, setCheckboxflag] = useState(false)
  const [firstTime, setFirstTime] = useState(false);
  const [min, setmin] = useState();
  const [max, setMax] = useState();
  // const [unsetfilter,setunsetfilter]= useState([]);
  const [productcount, setProductCount] = useState('')
  const [PackSize, setPackSize] = useState([]);
  const [FoodPreference, setFoodPreference] = useState([]);
  // const [CountryOfOrigin, setCountryOfOrigin] = useState([]);
  const [Discount, setDiscount] = useState([]);
  const [Seleced, setSeleced] = useState('POP');
  const [isFilterLoading,setIsFilterLoading] = useState(false);
  // const [selectedPacksize, setselectedPacksize] = useState([]);
  // const [selectedFood, setselectedFood] = useState([]);
  // const [selectedDiscount, setselectedDiscount] = useState([]);
  const checkboxflag = true;
  const selectedPacksize = [];
  const selectedFood = [];
  const selectedDiscount = [];
  // const [selectedCountry, setselectedCountry] = useState([]);
  // const [filtered, setFiltered] = useState([]);
  // const [sortByfiltersList,setsortByfiltersList]=useState([])
  const [filterpopup, setfilterpopup] = useState({
    isPaneOpen: false,
    isPaneOpenLeft: false,
  });
  const sortByfiltersList = [{ ListItem: ' Name (A - Z)', id: 1, value: 'AZ' }, { ListItem: ' Name (Z - A)', id: 2, value: 'ZA' }, { ListItem: 'Price (Low - High)', id: 3, value: 'PLH' }, { ListItem: 'Price (High - Low)', id: 4, value: 'PHL' }, { ListItem: 'Popularity', id: 5, value: 'POP' }]
  // const [minVal, setMinVal] = useState('');
  // const [maxVal, setMaxVal] = useState('');
  const range = useRef(null);
  // const minRef = useRef(null);
  // const maxRef = useRef(null);
  // const [parentcatURL, setParentcatURL] = useState('');
  // const [loading, setloading] = useState(false);
  const navigatorReducer = useSelector(state => state.mavigationBar)
  const searchProductdetails = useSelector(state => state.searchProduct)
  const addToCart = useSelector(state => state.addToCart)
  const nextData = useSelector(state => state.ToppSelling)
  const dispatch = useDispatch()
  


  useEffect(() => {
    const handleStart = () => {
      // setIsLoading(true);
      // setIsFilterLoading(true)
    };
    const handleComplete = () => {
      SearchAPI.getsearchlist(searchText || localStorage.getItem('search'), "", "", "", null, null, "")
        .then(response => {
          setFilterflag(false)
          setSeleced('POP')
          setfilterproduct([])
          console.log("responseresponse", response);

          if (response && response.skuListingModels && Array.isArray(response.skuListingModels) && response.skuListingModels.length>0) {
            setProductCount(response.skuListingModels.length)
            const searchSkuListingModels = response.skuListingModels;
            searchSkuListingModels.sort((a, b) => b.rank - a.rank);
            searchSkuListingModels.sort((a, b) => b.InStock - a.InStock)
            setsearchproduct(searchSkuListingModels)
  
          } else {
            setProductCount(0)
            setsearchproduct([])
            
          }

                    // setsearchproduct(response.skuListingModels)
          // setIsLoading(false)
          // setIsFilterLoading(false)
          
        })

        
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [typeof window !== 'undefined' && window.localStorage ? localStorage.getItem('search') : undefined])

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      if (localStorage.getItem('generatedtoken') !== null) {
          const date = new Date();
          let day = date.getDate();
          let month = date.getMonth() + 1;
          let year = date.getFullYear();
          let hr = date.getHours();
          let min = date.getMinutes();
          let sec = date.getSeconds();
          let mls = date.getMilliseconds();
      
          // This arrangement can be altered based on how we want the date's format to appear.
          let currentDate = `${year}-${month}-${day}T${hr}:${min}:${sec}:${mls}Z`;
          fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data =>{ 
              console.log("IP Address==", localStorage.getItem('search'))
              SearchAPI.getCRMTrackSearch(searchText || localStorage.getItem('search'), data.ip, currentDate, localStorage.getItem('generatedtoken'))
            })

            
            .catch(error => console.log(error))
      } else {
        fetch(`${Constants.urls.baseUrl}${Constants.endPoints.token}`, {
          method: 'POST',
          headers: {
            accept: 'application/x-www-form-urlencoded',
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body:
            'username=FCAPICL0100145&password=JHASGjnknkjhIhAjksnjansasasMKLAHNSJHGASB02012121&grant_type=password',
        })
          .then(res => res.json())
          .then(
            result => {
              if (result) {
                localStorage.setItem('generatedtoken', result.access_token)
              }
            },
          );
      }
  }
  }, [typeof window !== 'undefined' && window.localStorage ?  localStorage.getItem('generatedtoken') : null]);

  useEffect(() => {
    if (navigatorReducer !== undefined && navigatorReducer.searchsku !== undefined && navigatorReducer.searchsku.skuListingModels !== undefined && navigatorReducer.searchsku.skuListingModels !== null) {
      // setloading(false)
      setmin(navigatorReducer.searchsku.minprice)
      setMax(navigatorReducer.searchsku.maxprice)
      setProductCount(navigatorReducer.searchsku.skuListingModels && navigatorReducer.searchsku.skuListingModels.length)
      const searchSkuListingModels = navigatorReducer.searchsku.skuListingModels;
      searchSkuListingModels.sort((a, b) => b.rank - a.rank);
      searchSkuListingModels.sort((a, b) => b.InStock - a.InStock)
      setsearchproduct(searchSkuListingModels)
      // setsearchproduct(navigatorReducer.searchsku.skuListingModels)
      setFilterflag(false)
      setIsLoading(false);
    }
    else {
      // setloading(true)
    }
  }, [navigatorReducer && navigatorReducer.searchsku,])
  /* useEffect(() => {
     dispatch(getSearchProductlist())
   }, []); */
  useEffect(() => {
    if (searchproduct && searchproduct !== '') {
      if (Array.isArray(searchproduct)) {
        setSkuIds(searchproduct.map(id => id.SkuId))
      }
      // setFilterlist(searchproduct.map(id => id.FiltersList))
    }
  }, [searchproduct])
  useEffect(() => {
    dispatch(nextBtn(1, 9));
    setFirstTime(true);
  }, [])
  
  useEffect(() => {
    // setFirstTime(true);
    
    // if (firstTime === true) {
      
    //   window.location.reload(false);
    //   // setFirstTime(false);
    // }
    // window.location.reload(false);
    setShowFilters(false);
    // setloading(false)
    if (typeof window !== 'undefined' && window.localStorage) {

        setCustGUID(localStorage.getItem('CustGUID'));
        dispatch(getproducts(searchText || localStorage.getItem('search'), "", "", "", ""))
        dispatch(nextBtn(1, 9));

        mycartAPI.getShoppingcartDetails()
        .then(response => {
          setShoppingcart(response)
        })
        .catch(error => {
          console.log('Error in cart API:::', error);
        });
    }
    
  }, [])
  useEffect(() => {
    
    if (skuids && skuids !== '') {
      ProductlistingAPI.searchadvancegetskufilter(searchText || localStorage.getItem('search'), 0, 0, skuids)
        .then(response => {
          setadvancegetskufilterdata(response)
          // setunsetfilter(response)
        })
    }
  }, [skuids])
  useEffect(() => {
    setBrandList(advancegetskufilterdata.filter(
      Caption => Caption.Caption === 'Brand List'
    ))
    setPackSize(advancegetskufilterdata.filter(
      Caption => Caption.Caption === 'Pack Size'
    ))
    //  console.log("PackSize", PackSize);
    setFoodPreference(advancegetskufilterdata.filter(
      Caption => Caption.Caption === 'Food Preference'
    ))
    // setCountryOfOrigin(advancegetskufilterdata.filter(
    //   Caption => Caption.Caption === 'Country Of Origin'
    // ))
    setDiscount(advancegetskufilterdata.filter(
      Caption => Caption.Caption === 'Discount'
    ))
    setWeight(advancegetskufilterdata.filter(
      Caption => Caption.Caption === 'Weight'
    ))
    setGlassType(advancegetskufilterdata.filter(
      Caption => Caption.Caption === 'Glass Type'
    ))
    setPrimaryCamera(advancegetskufilterdata.filter(
      Caption => Caption.Caption === 'Primary Camera'
    ))
    setInternalStorage(advancegetskufilterdata.filter(
      Caption => Caption.Caption === 'Internal Storage'
    ))
    setRAM(advancegetskufilterdata.filter(
      Caption => Caption.Caption === 'RAM'
    ))
    setColor(advancegetskufilterdata.filter(
      Caption => Caption.Caption === 'Color'
    ))
  }, [advancegetskufilterdata])
  
  // useEffect(() => {
  //   if (searchProductdetails !== undefined) {
  //     setShoppingcart(searchProductdetails.shoppingCartDetailsSearch)
  //   }
  // }, [searchProductdetails]);
  useEffect(() => {
    if (addToCart !== undefined && addToCart?.shoppingcartDetails) {
      dispatch(copyShopingCartDetails(addToCart.shoppingcartDetails))
      setShoppingcart(addToCart.shoppingcartDetails)
    }
  }, [addToCart,]);
  // useEffect(()=>{
  //   ProductlistingAPI.getskuFilterlisting(null,34,7,null,'onion',0,0)
  //   .then(response => {
  //     console.log("getskuFilterlisting",response);
  //   })
  // },[advancegetskufilterdata])
  // const BrandList = advancegetskufilterdata.filter(
  //   Caption => Caption.Caption === 'Brand List'
  // )
  // const price = advancegetskufilterdata.filter(
  //   Caption => Caption.Caption === 'Price'
  // )
  // useEffect(() => {
  //   if (valuepackString !==0 && fieldString !==0 ) {
  //     SearchAPI.getsearchlist(localStorage.getItem('search'), valuepackString,fieldString,"",null,null)
  //       .then(response => {
  //         console.log("responseresponse",response);
  //         setProductCount(response.OverAllCount)
  //         setfilterproduct(response.skuListingModels )
  //         setFilterflag(true)
  //       })
  //   }
  // }, [valuepackString,fieldString])
  useEffect(() => {
    if (checkboxflag === true) {
      SearchAPI.getsearchlist(searchText || localStorage.getItem('search'), "", "", "", null, null, "")
        .then(response => {
          // console.log("responseresponse", response);
          // if(response && response.skuListingModels && response.skuListingModels.length > 0)
          if (response && response.skuListingModels && Array.isArray(response.skuListingModels) && response.skuListingModels.length>0) {
            setProductCount(response.skuListingModels.length)
          const searchSkuListingModels = response.skuListingModels;
          searchSkuListingModels.sort((a, b) => b.rank - a.rank);
          searchSkuListingModels.sort((a, b) => b.InStock - a.InStock)
          setsearchproduct(searchSkuListingModels)
          } else {
            setProductCount(0)
            setsearchproduct([])
          }

          /*setProductCount(response.skuListingModels && response.skuListingModels.length)
          const searchSkuListingModels = response.skuListingModels;
          searchSkuListingModels.sort((a, b) => b.rank - a.rank);
          setsearchproduct(searchSkuListingModels)*/
          // setsearchproduct(response.skuListingModels)
        })
    }
  }, [checkboxflag, navigatorReducer])
  // const handleChange = (e) => {
  //   console.log("eeeeeeee", e.target.checked);
  //   if (e.target.checked === false) {
  //     setCheckboxflag(true)
  //   }
  // }
  const filterPacksizelist = (selectedList, selectedItem) => {
    // setReset(true)
    // console.log("valueId", valueId);
    if (valuepackString.length !== 0) {
      valuepackString.includes(`${selectedItem.valueId}`) ? setvaluepackString(removeFromString(valuepackString, `${selectedItem.valueId}`)) : setvaluepackString(removedoubleComma(`${valuepackString},${selectedItem.valueId}`))
      // console.log('packsizejkk', `${fieldString},${FieldId})`)
      setfieldString(`${fieldString},${selectedItem.FieldId}`)
    } else {
      setvaluepackString(`${selectedItem.valueId}`)
      setfieldString(`${selectedItem.FieldId}`)
    }
    // dispatch(defaultAction(SubcategoryState.advanceSkusListingByFilterModels))
    // setloading(false)
    // setgroupedData(Object.entries(groupBy(SubcategoryState.advanceSkusListingByFilterModels, v => v.CategoryName)))
    // setproductlistingdata(SubcategoryState.advanceSkusListingByFilterModels)
    // setcheckedfilter(true)
  }
  const filterDiscountlist = (selectedList, selectedItem) => {
    
    if (valuediscountstring !== '') {
      valuediscountstring.includes(`${selectedItem.valueId}`) ? setvaluediscountstring(removeFromString(valuediscountstring, `${selectedItem.valueId}`)) :
        (setvaluediscountstring(removedoubleComma(`${valuediscountstring},${selectedItem.valueId}`)))
    } else {
      setvaluediscountstring(`${selectedItem.valueId}`)
    }
  }
  const filterWeight = (selectedList, selectedItem) => {
    if (valuepackString.length !== 0) {
      valuepackString.includes(`${selectedItem.name}`) ? setvaluepackString(removeFromString(valuepackString, `${selectedItem.name}`)) : setvaluepackString(removedoubleComma(`${valuepackString},${selectedItem.name}`))
      // console.log('packsizejkk', `${fieldString},${FieldId})`)
      setfieldString(`${fieldString},${selectedItem.FieldId}`)
    } else {
      setvaluepackString(`${selectedItem.name}`)
      setfieldString(`${selectedItem.FieldId}`)
    }
  }
  const filterRAM = (selectedList, selectedItem) => {
    
    if (valuepackString.length !== 0) {
      valuepackString.includes(`${selectedItem.name}`) ? setvaluepackString(removeFromString(valuepackString, `${selectedItem.name}`)) : setvaluepackString(removedoubleComma(`${valuepackString},${selectedItem.name}`))
      // console.log('packsizejkk', `${fieldString},${FieldId})`)
      setfieldString(`${fieldString},${selectedItem.FieldId}`)
    } else {
      setvaluepackString(`${selectedItem.name}`)
      setfieldString(`${selectedItem.FieldId}`)
    }
  }
  const filterPrimaryCamera = (selectedList, selectedItem) => {
    
    if (valuepackString.length !== 0) {
      valuepackString.includes(`${selectedItem.name}`) ? setvaluepackString(removeFromString(valuepackString, `${selectedItem.name}`)) : setvaluepackString(removedoubleComma(`${valuepackString},${selectedItem.name}`))
      // console.log('packsizejkk', `${fieldString},${FieldId})`)
      setfieldString(`${fieldString},${selectedItem.FieldId}`)
    } else {
      setvaluepackString(`${selectedItem.name}`)
      setfieldString(`${selectedItem.FieldId}`)
    }
  }
  const filterInternalStorage = (selectedList, selectedItem) => {
    
    if (valuepackString.length !== 0) {
      valuepackString.includes(`${selectedItem.name}`) ? setvaluepackString(removeFromString(valuepackString, `${selectedItem.name}`)) : setvaluepackString(removedoubleComma(`${valuepackString},${selectedItem.name}`))
      // console.log('packsizejkk', `${fieldString},${FieldId})`)
      setfieldString(`${fieldString},${selectedItem.FieldId}`)
    } else {
      setvaluepackString(`${selectedItem.name}`)
      setfieldString(`${selectedItem.FieldId}`)
    }
  }
  const filterColor = (selectedList, selectedItem) => {
    
    if (valuepackString.length !== 0) {
      valuepackString.includes(`${selectedItem.name}`) ? setvaluepackString(removeFromString(valuepackString, `${selectedItem.name}`)) : setvaluepackString(removedoubleComma(`${valuepackString},${selectedItem.name}`))
      // console.log('packsizejkk', `${fieldString},${FieldId})`)
      setfieldString(`${fieldString},${selectedItem.FieldId}`)
    } else {
      setvaluepackString(`${selectedItem.name}`)
      setfieldString(`${selectedItem.FieldId}`)
    }
  }
  const filterGlassType = (selectedList, selectedItem) => {
    
    if (valuepackString.length !== 0) {
      valuepackString.includes(`${selectedItem.name}`) ? setvaluepackString(removeFromString(valuepackString, `${selectedItem.name}`)) : setvaluepackString(removedoubleComma(`${valuepackString},${selectedItem.name}`))
      // console.log('packsizejkk', `${fieldString},${FieldId})`)
      setfieldString(`${fieldString},${selectedItem.FieldId}`)
    } else {
      setvaluepackString(`${selectedItem.name}`)
      setfieldString(`${selectedItem.FieldId}`)
    }
  }
  const filterbrandlist = (selectedList, selectedItem) => {
    
    if (valueString.length !== '') {
      
      valueString.includes(`${selectedItem.valueId}`)
        ?
        setValueString(removeFromString(valueString, `${selectedItem.valueId}`))
        :
        setValueString(removedoubleComma(`${valueString},${selectedItem.valueId}`))
    } else {
      
      setValueString(`${selectedItem.valueId}`)
    }
  }
  // useEffect(() => {
  //   const sortby = Seleced || ''
  //   const minval = min || ''
  //   const maxval = max || ''
  //   if ((valuediscountstring !== 0 && fieldString !== 0) && valuepackString !== 0) {
  //     SearchAPI.getsearchlist(localStorage.getItem('search'), valuepackString, fieldString, valuediscountstring, minval, maxval, sortby)
  //       .then(response => {
  //         console.log("responseresponse", response);
  //         setProductCount(response.skuListingModels && response.skuListingModels.length)
  //         const searchSkuListingModels = response.skuListingModels;
  //         searchSkuListingModels.sort((a, b) => b.rank - a.rank);
  //         setfilterproduct(searchSkuListingModels)
  //         setFilterflag(true)
  //       })
  //   } else {
  //     SearchAPI.getsearchlist(localStorage.getItem('search'), "", "", valuediscountstring, minval, maxval, sortby)
  //       .then(response => {
  //         console.log("responseresponse", response);
  //         setProductCount(response.skuListingModels && response.skuListingModels.length)
  //         const searchSkuListingModels = response.skuListingModels;
  //         searchSkuListingModels.sort((a, b) => b.rank - a.rank);
  //         setfilterproduct(searchSkuListingModels)
  //         // setfilterproduct(response.skuListingModels)
  //         setFilterflag(true)
  //       })
  //   }
  // }, [valuediscountstring, fieldString, valuepackString, Seleced])

  // const filterbrandlist = (valueId) => {
  //   console.log('filter value');
  //   if (valueString.length !== 0) {
  //     valueString.includes(`${valueId}`) ? setValueString(removeFromString(valueString, `${valueId}`)) : setValueString(removedoubleComma(`${valueString},${valueId}`))
  //     // setValueString(`${valueString},${valueId}`)
  //   } else {
  //     setValueString(`${valueId}`)
  //   }
  //   // setproductlistingdata(SubcategoryState.advanceSkusListingByFilterModels)
  //   // setcheckedfilter(true)
  // }
  function removedoubleComma(string) {
    return string.replace(',,', ',')
  }
  function removeFromString(stringValue = '', valueId) {
    let str = stringValue.replace(valueId, '')
    str = removedoubleComma(str)
    if (str.startsWith(',')) {
      str = str.substring(1, str.length)
      return str
    }
    return str
  }
  // useEffect(() => {
  //   console.log('filter value useEffect');
  //   if (valueString.length === valuepackString.length === valuediscountstring.length === 0
  //   ) {
  //     setInitialCall(true)
  //   } else {
  //     setInitialCall(false)
  //   }
  //   if (!initialCall) {
  //     // dispatch(RemovingOldData())l
  //     setloading(true)
  //     dispatch(getbrandListfilter(valueString, valuepackString, fieldString, valuediscountstring, URL[2]))
  //     ProductlistingAPI.getskuFilterlisting(valueString, valuepackString, fieldString, valuediscountstring, localStorage.getItem('search'))
  //       .then(response => {
  //         console.log('filter', response);
  //         setsearchproduct(response.advanceSkusListingByFilterModels)
  //         setloading(false)
  //       })
  //   }
  // }, [valueString, valuepackString, fieldString, valuediscountstring, URL])
  // const handleMaxValue = (event) => {
  //   // setMaxVal(event.target.value)
  //   const valuedis = valuediscountstring || ''
  //   const fieldS = fieldString || ''
  //   const valuepack = valuepackString || ''
  //   const sortby = Seleced || ''
  //   if (event.target.value > min) {
  //     setMax(event.target.value)
  //   }
  //   console.log("eventmax", event.target.value);
  //   SearchAPI.getsearchlist(localStorage.getItem('search'), valuepack, fieldS, valuedis, min, event.target.value, sortby)
  //     .then(response => {
  //       console.log("responseresponse", response);
  //       setProductCount(response.skuListingModels && response.skuListingModels.length)
  //       const searchSkuListingModels = response.skuListingModels;
  //       searchSkuListingModels.sort((a, b) => b.rank - a.rank);
  //       setfilterproduct(searchSkuListingModels)
  //       // setfilterproduct(response.skuListingModels)
  //       setFilterflag(true)
  //     })
  // }
  // const handleMinValue = (event) => {
  //   // setMinVal(event.target.value)
  //   const valuedis = valuediscountstring || ''
  //   const fieldS = fieldString || ''
  //   const valuepack = valuepackString || ''
  //   const sortby = Seleced || ''
  //   if (event.target.value < max) {
  //     setmin(event.target.value)
  //   }
  //   console.log("eventmin", event.target.value);
  //   SearchAPI.getsearchlist(localStorage.getItem('search'), valuepack, fieldS, valuedis, event.target.value, max, sortby)
  //     .then(response => {
  //       console.log("responseresponse", response);
  //       setProductCount(response.skuListingModels && response.skuListingModels.length)
  //       const searchSkuListingModels = response.skuListingModels;
  //       searchSkuListingModels.sort((a, b) => b.rank - a.rank);
  //       setfilterproduct(searchSkuListingModels)
  //       // setfilterproduct(response.skuListingModels)
  //       setFilterflag(true)
  //     })
  // }
  const ClearAllFilter = () => {
    // setInitialCall(true)
    // setReset(false)
    // setcheckfilterflag(false)
    // setFilterflag(false)
    window.scrollTo(0, 0)
    document.getElementsByClassName('multiselectdrop')
    setValueString('')
    setvaluepackString('')
    setvaluediscountstring('')
    setSeleced('POP')
    setmin(navigatorReducer.searchsku.minprice)
    setMax(navigatorReducer.searchsku.maxprice)
  }
  // const handlechange = (e) => {
  //   const { value } = e.target
  //   console.log("value",value,value.length)
  //   let list=[];
  //   let filtered=[]
  //   if(value.length === 0){
  //     list= unsetfilter.filter(item => item.Caption === 'Pack Size')
  //     // setadvancegetskufilterdata(list)
  //     setPackSize (list)
  //   }
  //   else{
  //     filtered = unsetfilter.filter(item => item.ListItemValue.toLowerCase().includes(value.toLowerCase()))
  //     console.log("filtered==============",filtered);
  //     setPackSize(filtered)
  //   }
  // }
  const changeFltr = (newFL) => {
    setIsLoading(true)
    setIsFilterLoading(true);
    setSeleced(newFL);
    const sortby = newFL || ''
    if ((valuediscountstring !== 0 && fieldString !== 0) && valuepackString !== 0) {
      SearchAPI.getsearchlist(searchText || localStorage.getItem('search'), valuepackString, fieldString, valuediscountstring, min, max, sortby)
        .then(response => {
          setProductCount(response.skuListingModels && response.skuListingModels.length)
          const searchSkuListingModels = response.skuListingModels;
          //searchSkuListingModels.sort((a, b) => b.rank - a.rank);
          searchSkuListingModels.sort((a, b) => b.InStock - a.InStock)
          setfilterproduct(searchSkuListingModels)
          // setfilterproduct(response.skuListingModels)
          setFilterflag(true)
          setIsFilterLoading(false);
          setIsLoading(false)
        })
    } else {
      SearchAPI.getsearchlist(searchText || localStorage.getItem('search'), "", "", "", "", "", newFL)
        .then(response => {
          setProductCount(response.skuListingModels && response.skuListingModels.length)
          const searchSkuListingModels = response.skuListingModels;
          //searchSkuListingModels.sort((a, b) => b.rank - a.rank);
          searchSkuListingModels.sort((a, b) => b.InStock - a.InStock)
          setfilterproduct(searchSkuListingModels)
          // setfilterproduct(response.skuListingModels)
          setFilterflag(true)
          setIsFilterLoading(false);
          setIsLoading(false)
        })
    }
    // const P = sortByfiltersList.find(i => i.ListItem === newFL);
    // setFiltered(P);
  };
  // const handleReset = () => {
  //   SearchAPI.getsearchlist(localStorage.getItem('search'), "", "", "", "")
  //     .then(response => {
  //       console.log("responseresponse", response);
  //       setProductCount(response.skuListingModels && response.skuListingModels.length)
  //       setfilterproduct(response.skuListingModels)
  //       setFilterflag(true)
  //     })
  // }

  return (
    <div>
      <ToastContainer
        position="top-right"
      // draggable={true}
      // autoClose={50000}
      />
      <Header />
      <BreadCrumb activepage="Search" />
      
      <div className='main-wrapper search-main-wrapper' >
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="product-shop-main-wrapper" id="product-listing">
                <div className='row'>
                  <div className='col-lg-10'>
                    {searchproduct && searchproduct.length === 0 ?
                      <div>
                        {productcount === 0 ? <>
                          <div className="col-md-12" style={{ padding: '5%' }}>
                            <div className="alert alert-warning">There are no results for {searchText.replace(/\+/g," ") || localStorage.getItem('search').replace(/\+/g," ")}</div>
                          </div>
                        </> :
                          <div className='searchLoader' >
                            <img src='/images/adibuja-logo-animation.gif' alt='' style={{ justifySelf: 'center', width: '80px', height: '80px' }} />
                          </div>
                        }
                      </div>
                      :
                      <div className="shop-baner-img mb-70 shop-baner-search">
                        {productcount > 0 ? <h3>Search Results : {searchText.replace(/\+/g," ") || localStorage.getItem('search').replace(/\+/g," ")}
                          <> {'('}{productcount} Items{')'}</>
                        </h3> : <h3>Search Results : {searchText.replace(/\+/g," ") || localStorage.getItem('search').replace(/\+/g," ")}
                        </h3>}
                        <div
                          id="paginginfo"
                          data-itemcount=""
                          data-paginationlimit={40}
                          data-filters=""
                          data-page={1}
                          data-limit={40}
                        />
                      </div>
                    }
                  </div>
                  <div className='col-lg-2'>
                    {productcount && productcount > 0 ?
                      <div className="top-bar-right">
                        <div className="product-short">
                          <select
                            className="nice-select"
                            name="sortby"
                            // onChange=""
                            id="sortby_limit"
                            // style={{ display: "none" }}
                            onChange={event => changeFltr(event.target.value)} value={Seleced} >
                            <option selected>Sort By</option>
                            {sortByfiltersList.map(itm => (
                              <option value={itm.value}>{itm.ListItem}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      : null}
                  </div>
                </div>
                {/* {groupedData.length === 0 ?
                  <div style={{ Width: '100%' }} className="alert alert-warning">Products Not Found</div> : null} */}
                <div id="paginginfo">
                </div>
                <div className="short-description mb-10 mt-10" style={{ wordBreak: 'break-all' }}>
                </div>
                {
                  <div>
                    {filterflag === true ?
                      <div id="products" className="shop-product-wrap row " >
                        {filterproduct && filterproduct.length === 0 ?
                          null
                          /* <>
                            <div className="col-md-12" style={{ padding: '5%' }}>
                              <div className="alert alert-warning">No more products</div>
                            </div>
                          </> */
                          :
                          <>
                            {isLoading && (<div className='row rr'>
<div className='col-lg-12 text-center mt-25 mb-60' ><div className='loaderimgsearch' >
  {console.log("inside second loader")}
                            <img src='/images/adibuja-logo-animation.gif' alt='' style={{ justifySelf: 'center', width: '80px', height: '80px' }} />
                          </div></div></div>)}
                            {!isLoading && filterproduct && filterproduct?.length > 0 && filterproduct.map(data =>
                              <div className='col-lg-3'>
                                <LoadProducts data={data} shppingcart={shoppingcart} skulisting />
                              </div>
                            )}
                          </>
                        }
                      </div>
                      :
                      <>
                        <div id="products" className="shop-product-wrap row " >
                          {searchproduct && searchproduct.length === 0 ?
                            null
                            :
                            <>
                              {isFilterLoading && (<div className='row rr'>
<div className='col-lg-12 text-center mt-25 mb-60' ><div className='loaderimgsearch' >
{console.log("inside third loader")}
                            <img src='/images/adibuja-logo-animation.gif' alt='' style={{ justifySelf: 'center', width: '80px', height: '80px' }} />
                          </div></div></div>)}
                              {!isFilterLoading && (searchproduct || []).map(data =>
                                <div className='col-lg-3' >
                                  <LoadProducts data={data} shppingcart={shoppingcart} skulisting />
                                </div>
                              )}
                            </>
                          }
                        </div>
                      </>
                    }
                  </div>
                }
                <div>
                </div>
              </div>
            </div>
            
          </div>      
        </div>
      </div>
      {/* <div className='col-lg-12' > */}
           <div id="tab_review" className="mb-40 searchOnmobile">
              <ToppSellingOriginal searchtopsell={nextData} />
              {(CustGUID === null || CustGUID === undefined) ? null : <ReorderProduct />}
              <RecentlyViewProduct />
           </div>
      {/* </div>   */}
      <Footer />
    </div>
  );
}
export default (SearchProduct); 