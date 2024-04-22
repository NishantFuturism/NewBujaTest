/* eslint-disable no-param-reassign */
/* eslint-disable import/order */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
/* eslint-disable no-nested-ternary */
/* eslint-disable eqeqeq */
/* eslint-disable consistent-return */
/* eslint-disable no-else-return */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-expressions */
/**
 *
 * Subcategory
 *
 */
import '@icon/linearicons/linearicons.css';
import { debounce, groupBy, set } from 'lodash';
import Head from 'next/head';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useInjectReducer } from '@/utils/injectReducer';
import { useInjectSaga } from '@/utils/injectSaga';
import '../../../../public/assets1/css/bundle.css';
import '../../../../public/assets1/css/default.min.css';
import '../../../../public/assets1/css/responsive.min.css';
import '../../../../public/assets/css/style.min.css';
import Header from '../../../components/Header';
import SubNavigation from '../../../components/SubNavigation';
import { LoadProducts } from '../../../containers/LoadProducts';
import Constants from '../../../containers/App/constants';
import ProductlistingAPI from '../../../containers/MainPage/api/productlisting';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { defaultAction, getbrandListfilter, getproductlist, RemovingOldData } from '../../../containers/Subcategory/actions';
import reducer from '../../../containers/Subcategory/reducer';
import saga from '../../../containers/Subcategory/saga';
import mycartAPI from '@/containers/MainPage/api/mycartAPI';
import "../../../containers/Subcategory/slider.css";
import Footer from '../../../components/Footer/footer';
import classnames from "classnames";
import { copyShopingCartDetails } from '../../../containers/HomeScreen/actions';
import CustomsAPI, { ConstantsValues } from '../../../containers/MainPage/api/homeServices';
import Multiselect from 'multiselect-react-dropdown';
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { useRouter } from 'next/router';
import { RelatedCategory } from '../../../containers/RelatedCategory';
import SignIn from '../../../components/Footer/signin';
import { httpRequest } from '@/containers/MainPage/api/apiServices';
import { useInView } from "react-intersection-observer";
import Link from 'next/link';
import Cookies from 'js-cookie';
import getDetailsFromDomain from '@/utils/getSellerDetails';

export const Subcategory = ({ 
  categoryData, 
  categorySEOData, 
  advanceFilterData, 
  page: currentPage,
  topMenuData,
  footerPagesLinks,
  footerCategoryLinks,
  relatedCategoryDetails,
  sellerDetailsFromDomain,
  currentDomain
}) => {
  let categoryDetails = categoryData?.skuListingModels || [];
  useInjectReducer({ key: 'subcategory', reducer });
  useInjectSaga({ key: 'subcategory', saga });
  const router = useRouter();
  const footerData = useSelector(state => state.homeScreen)
  const [advancegetskufilterdata, setadvancegetskufilterdata] = useState([]);
  const [FirstCall, setFirstCall] = useState(0);
  const [page, setPage] = useState(currentPage);
  const [scrollvalue, setscrollvalue] = useState(100);
  const [initialCall, setInitialCall] = useState(false);
  const [valueString, setValueString] = useState('');
  const [valuepackString, setvaluepackString] = useState('');
  const [RAMString, setRAMString] = useState('');
  const [RAMFilterId, setRAMFilterId] = useState('');
  const [fieldString, setfieldString] = useState('');
  const [valuediscountstring, setvaluediscountstring] = useState('');
  const [parentcatURL, setParentcatURL] = useState('');
  const [enableshowmore, setenableshowmore] = useState(false);
  const nextData = useSelector(state => state.ToppSelling)
  const [URL, setURL] = useState('');
  const [Reset, setReset] = useState(false);
  const [notify, setnotify] = useState(false);
  const [loading, setloading] = useState(false);
  const range = useRef(null);
  const minValRef = useRef(null);
  const maxValRef = useRef(null);
  const dropdownRef = useRef(null);
  const shimmerdata = [{ 'id': 1 }, { 'id': 2 }, { 'id': 3 }, { 'id': 4 }, { 'id': 5 }, { 'id': 6 }, { 'id': 7 }, { 'id': 8 }]
  const loadProducts = useSelector(state => state.loadProducts)
  const [groupedData, setgroupedData] = useState(categoryDetails);
  const [shppingcart, setShppingcart] = useState([]);
  const [unsetfilter, setunsetfilter] = useState([]);
  const [Seleced, setSeleced] = useState('');
  const [metaDomain, setMetaDomain] = useState("Adibuja.com")
  const [filterproduct, setfilterproduct] = useState([]);
  const [filterflag, setFilterflag] = useState(false)
  const [checked, setChecked] = useState(true);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const [min2, setMin2] = useState(0);
  const [max2, setMax2] = useState(0);
  const [sliderValue, setSliderValue] = useState(0);
  const [sliderValue2, setSliderValue2] = useState(0);
  const [isActive, setisActive] = useState(true)
  const [categoryName, setcategoryName] = useState([]);
  const [checkfilterflag, setcheckfilterflag] = useState(false)
  const [productcount, setproductcount] = useState()
  const [breadcrumbProdcount, setbreadcrumbProdcount] = useState('')
  const [productcategoryName, setproductcategoryName] = useState('')
  const [parentcategoryName, setparentcategoryName] = useState('')
  const [selectedBrand, setselectedBrand] = useState([]);
  const [selectedPacksize, setselectedPacksize] = useState([]);
  const [selectedFood, setselectedFood] = useState([]);
  const [selectedPrimaryCamera, setselectedPrimaryCamera] = useState([]);
  const [selectedDiscount, setselectedDiscount] = useState([]);
  const [selectedRAM, setselectedRAM] = useState([]);
  const [selectedIntStorage, setselectedIntStorage] = useState([]);
  const [selectedColor, setselectedColor] = useState([]);
  const [selectedWeight, setselectedWeight] = useState([]);
  const [selectedGlassType, setselectedGlassType] = useState([]);
  const [selectedCountry, setselectedCountry] = useState([]);
  const [selectItemDisp, setSelectItemDisp] = useState([]);
  const [isSticky, setIsSticky] = useState(false);
  const [advfilterData, setAdvfilterData] = useState(Object.entries(groupBy(advanceFilterData, v => v.Caption)) || []);
  const [preselectItem, setpreselectItem] = useState([]);
  const [pagerefresh, setPageRefresh] = useState(1);
  const [productsFound, setProductsFound] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [customInitialCall, setCustomInitialCall] = useState(false);
  const [initialData, setInitialData] = useState([])
  const [isSamePage, setIsSamePage] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('')
  const [maxValue, setMaxValue] = useState(0);
  const [minValue, setMinValue] = useState(0);
  const [isLastPage, setIsLastPage] = useState(false);
  const [filterpopup, setfilterpopup] = useState({
    isPaneOpen: false,
    isPaneOpenLeft: false,
  });
  const [filterdynamicpopup, setfilterdynamicpopup] = useState({
    isPaneOpen: false,
    isPaneOpenLeft: false,
  });
  const [isSortLoading,setIsSortLoading] = useState(false);
  const [filterPage, setFilterPage] = useState(1);
  const [filterProductCount, setFilterProductCount] = useState(0);
  const dispatch = useDispatch()
  const SubcategoryState = useSelector(state => state.subcategory)
  const homestate = useSelector(state => state.homeScreen)
  const addToCart = useSelector(state => state.addToCart)
  const mavigationBarReducer = useSelector(state => state.mavigationBar)
  const sortByfiltersList = [
    { ListItem: 'Sort By', id: 1, value: '' }, 
    { ListItem: 'Name (A - Z)', id: 1, value: 'AZ' }, 
    { ListItem: 'Name (Z - A)', id: 2, value: 'ZA' }, 
    { ListItem: 'Price (Low - High)', id: 3, value: 'PLH' }, 
    { ListItem: 'Price (High - Low)', id: 4, value: 'PHL' }, 
    { ListItem: 'Popularity', id: 5, value: 'POP' }
  ]
  
  let fixIntCount;
  let Finalnopages;
  let TotalproductCount;

  const [showBreadcrumb, setShowBreadcrumb] = useState(false);

  const { ref, inView } = useInView();
  
  if (groupedData && groupedData !== undefined && groupedData?.length>0 ) {
    TotalproductCount = groupedData[0].OverAllCount;
    Finalnopages = TotalproductCount / 20;
    fixIntCount = Math.ceil(Finalnopages);
  }

  useEffect(() => {
    if(typeof window !== 'undefined' && sellerDetailsFromDomain?.AdminMemberId) {
      localStorage.setItem('sellerID', sellerDetailsFromDomain.AdminMemberId);
    } else {
      localStorage.setItem('sellerID', ConstantsValues.defaultSellerID);
    }
  }, [sellerDetailsFromDomain])

  useEffect(() => {
    if (inView && fixIntCount >= page && fixIntCount > 1 && !filterProductCount) {
      setPage(page + 1)
      // let url = router.asPath?.split('?')
      // router.push({
      //   pathname: url[0],
      //   query: { page: page + 1 },
      // }, undefined, { shallow: true });
    } else if(inView && filterProductCount >= filterPage && filterProductCount > 1) {
      setFilterPage(filterPage + 1)
    }
  }, [inView]);

  useEffect(() => {
    ClearAllFilter()
    setgroupedData(categoryDetails)
    setAdvfilterData(Object.entries(groupBy(advanceFilterData, v => v.Caption)))
    dispatch(RemovingOldData())
  }, [categoryData, advanceFilterData]);

  useEffect(() => {
    let response = categoryData;
    if (response && response.skuListingModels && response.skuListingModels.length>0 && response.skuListingModels[0].ParentCategoryName) {
      setparentcategoryName(response.skuListingModels[0].ParentCategoryName)
      setproductcategoryName(response.skuListingModels[0].CategoryName)
      setProductsFound(true)
    } else {
      setReset(true)
      setProductsFound(false)
    }

    if(response?.skuListingModels?.length > 0) {
      setbreadcrumbProdcount(response.OverAllCount)
      setMin(response.minprice)
      setMax(response.maxprice - 1)
      setMin2(response.minprice + 1)
      setMax2(response.maxprice)
      setSliderValue(response.minprice);
      setSliderValue2(response.maxprice);
      setMaxValue(response.maxprice)
      setMinValue(response.minprice)
    }
  }, [categoryData])

  useEffect(() => {
    if(page !== 1 && fixIntCount >= page && fixIntCount > 1 && !router.query?.page) {
      fetchCategoryDetails()
    }
    if(page === fixIntCount) {
      setIsLastPage(true);
    }
  }, [page])

  useEffect(() => {
    if(filterPage !== 1 && filterProductCount >= filterPage && filterProductCount > 1) {
      fetchCategoryFilteredData(filterPage, 'isSameFilter');
    }
    if(filterPage === filterProductCount) {
      setIsLastPage(true);
    }
  }, [filterPage])

  useEffect(() => {
    const {page, categoryName, subcategory} = router.query;
    ClearAllFilter()
    setPage(page || 1)
    const result = checkSameCategory(initialData, categoryDetails)
    if(groupedData?.length > 0 && result) {
      setIsSamePage(true)
      fetchCategoryDetails('samePage')
    } else {
      fetchCategoryDetails('initialCall')
      setInitialData(categoryDetails)
    }
    setURL(categoryName)
    setParentcatURL(subcategory)
    mycartAPI.getShoppingcartDetails()
      .then(response => {
        setShppingcart(response)
      })
      .catch(error => {
        console.log('Error in cart API:::', error);
      });
  }, [router])

  useEffect(() => {
    if(Reset && (valueString || valuepackString || fieldString || valuediscountstring || URL || sliderValue || sliderValue2 || Seleced)) {
      setIsLastPage(false);
      setIsSamePage(false)
      setPage(1)
      setcheckfilterflag(true)
      fetchCategoryFilteredData(filterPage)
      setgroupedData([])
    }
  }, [valueString,valuepackString, fieldString, valuediscountstring, URL, sliderValue, sliderValue2, Seleced])

  useEffect(() => {
    if (loadProducts !== undefined) {
      setnotify(loadProducts.notify)
    }
  }, [loadProducts])

  useEffect(() => {
    if (SubcategoryState !== undefined && SubcategoryState.shoppingCartDetails && SubcategoryState.shoppingCartDetails.length>0) {
      setShppingcart(SubcategoryState.shoppingCartDetails)
    }
  }, [SubcategoryState]);

  useEffect(() => {
    if (addToCart !== undefined) {
      dispatch(copyShopingCartDetails(addToCart?.shoppingcartDetails))
      if (addToCart && addToCart?.shoppingcartDetails) {
        setShppingcart(addToCart.shoppingcartDetails)
      }
    }
  }, [addToCart]);

  useEffect(() => {
    if (currentDomain && currentDomain!==null) {
      setMetaDomain(currentDomain)
    }
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
      .then(result => {
          localStorage.setItem('generatedtoken', result.access_token);
        },
      );
  }, [])

  useEffect(() => {
    window.onload = function () {
      document.getElementById('__next').className = 'pdp-category-page';
    };
  })

  useEffect(() => {
    setIsClient(true);
    setisActive(true)
    window.onload = function () {
      document.getElementById('__next').className = 'filtericon-category-page';
    };
  }, []) 

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const checkSameCategory = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
      return false;
    }
    for (let i = 0; i < arr1.length; i++) {
      if (JSON.stringify(arr1[i]) !== JSON.stringify(arr2[i])) {
        return false;
      }
    }
    return true;
  }

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const fetchCategoryDetails = (param) => {
    if(param === 'samePage') {
      setgroupedData([])
    }
    CustomsAPI.getSubCategoryProductList(param === 'samePage' ? 1 : page, router.query.categoryName, router.query.subcategory, null, null, null, sellerDetailsFromDomain?.AdminMemberId)
    .then(response => {
      if (response.skuListingModels && response.skuListingModels.length > 0) {
        if(param === 'resetFilter') {
          setgroupedData(response.skuListingModels);
          setMin(response.minprice)
          setMax(response.maxprice - 1)
          setMin2(response.minprice + 1)
          setMax2(response.maxprice)
          setSliderValue(response.minprice);
          setSliderValue2(response.maxprice);
          setMaxValue(response.maxprice)
          setMinValue(response.minprice)
        } else if(param === 'initialCall') {
          setgroupedData(response.skuListingModels)
        } else {
          setgroupedData(prevData => [...prevData, ...response.skuListingModels]);
        }
        setbreadcrumbProdcount(response.OverAllCount)
        setparentcategoryName(response.skuListingModels[0].ParentCategoryName)
        setproductcategoryName(response.skuListingModels[0].CategoryName)
        setProductsFound(true)
      } else {
        setIsLastPage(true);
        setReset(true)
        setProductsFound(false)
      }
    })
    .catch(err => {
      console.log('Error In category API:::', err);
      setIsSamePage(false)
    })
    .finally(() => setloading(false))
  }

  const fetchCategoryFilteredData = (page, source) => {
    setIsSortLoading(true);
    let pageNumber;
    if(!source) {
      setgroupedData((prevArray) => []);
      pageNumber = 1;
      setFilterPage(1);
      window.scrollTo(0, 0);
    } else {
      pageNumber = page;
    }
    
    const sortby = Seleced ? Seleced : checkfilterflag ? 'POP' : '';
    ProductlistingAPI.getskuFilterlisting(valueString,valuepackString, fieldString, valuediscountstring, URL, sliderValue, sliderValue2, sortby, pageNumber)
    .then(response => {
      if(!source) {
        setgroupedData(response.advanceSkusListingByFilterModels);
        setbreadcrumbProdcount(response.OverAllCount)
        let count = Math.ceil(response.OverAllCount / 20);
        setFilterProductCount(count);
      } else {
        setgroupedData(prevData => [...prevData, ...response.advanceSkusListingByFilterModels]);
      }
      if(response.advanceSkusListingByFilterModels?.length === 0) setIsLastPage(true);
      if(response.advanceSkusListingByFilterModels?.length < 5 && filterProductCount >= filterPage && filterProductCount !== 1) {
        setFilterPage(filterPage + 1)
      }
      setIsSortLoading(false)
    }).catch((err) => {
      console.log("Error in category filter API", err)
      setIsSortLoading(false)
    })
  }

  const filteronChange = (selectedList, selectedItem) => {
    const finalseletItem = [...selectItemDisp, ...selectedList];
    const uniqueNames = finalseletItem.filter((val, id, disparray) => disparray.indexOf(val) == id);
    setSelectItemDisp(uniqueNames);
    setpreselectItem(selectedList);
    setReset(true);
    if (selectedItem.FieldId === 0 && selectedItem.StaticFilter === 0) {
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
    // RAM, Color, Camera, etc...
    if (selectedItem.FieldId !== 0 && selectedItem.fitlerName !== "Pack Size") {
      
      if (valuepackString.length !== 0) {
        valuepackString.includes(`${selectedItem.Value}`) ? 
          setvaluepackString(removeFromString(valuepackString, `${selectedItem.Value}`)) 
        : 
          setvaluepackString(removedoubleComma(`${valuepackString},${selectedItem.Value}`))
          setfieldString(`${fieldString},${selectedItem.FieldId}`)
      } else {
        setvaluepackString(`${selectedItem.Value}`)
        setfieldString(`${selectedItem.FieldId}`)
      }
    }
    // Pack size
    if (selectedItem.fitlerName === "Pack Size") {
      if (valuepackString.length !== 0) {
        valuepackString.includes(`${selectedItem.valueId}`) ? setvaluepackString(removeFromString(valuepackString, `${selectedItem.valueId}`)) : setvaluepackString(removedoubleComma(`${valuepackString},${selectedItem.valueId}`))
        setfieldString(`${fieldString},${selectedItem.FieldId}`)
      } else {
        setvaluepackString(`${selectedItem.valueId}`)
        setfieldString(`${selectedItem.FieldId}`)
      }
    }
    if (selectedItem.StaticFilter !== 0) {
      
      if (valuediscountstring !== '') {
        valuediscountstring.includes(`${selectedItem.valueId}`) ? setvaluediscountstring(removeFromString(valuediscountstring, `${selectedItem.valueId}`)) :
          (setvaluediscountstring(removedoubleComma(`${valuediscountstring},${selectedItem.valueId}`)))
      } else {
        setvaluediscountstring(`${selectedItem.valueId}`)
      }
    }
  }
  const RemoveSelectItem = (selectedList, selectedItem) => {
    setSelectItemDisp((current) =>
      current.filter((selectItem) => selectItem.name !== selectedItem.name)
    );
    setpreselectItem((currentpre) =>
      currentpre.filter((curpreselectItem) => curpreselectItem.name !== selectedItem.name)
    );
    setReset(true);
    if (selectedItem.FieldId === 0 && selectedItem.StaticFilter === 0) {
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
    // RAM, Color, Camera, etc...
    if (selectedItem.FieldId !== 0 && selectedItem.fitlerName !== "Pack Size") {
      if (valuepackString.length !== 0) {
        if(valuepackString.includes(`${selectedItem.Value}`)){          
          setvaluepackString(removeFromString(valuepackString, `${selectedItem.Value}`))
          setfieldString(removeFromString(fieldString, `${selectedItem.FieldId}`))
        }else{
          setvaluepackString(removedoubleComma(`${valuepackString},${selectedItem.Value}`))
          setfieldString(removedoubleComma(`${fieldString}, ${selectedItem.FieldId}`))
        }
      } else {
        setvaluepackString(`${selectedItem.Value}`)
        setfieldString(`${selectedItem.FieldId}`)
      }
    }
    // Pack size
    if (selectedItem.fitlerName === "Pack Size") {
      if (valuepackString.length !== 0) {
        if(valuepackString.includes(`${selectedItem.valueId}`)){
          setvaluepackString(removeFromString(valuepackString, `${selectedItem.valueId}`))
          setfieldString(removeFromString(fieldString, `${selectedItem.FieldId}`)) 
        }else{
          setvaluepackString(removedoubleComma(`${valuepackString},${selectedItem.valueId}`))
          setfieldString(removedoubleComma(`${fieldString}, ${selectedItem.FieldId}`))
        }
      } else {
        setvaluepackString(`${selectedItem.valueId}`)
        setfieldString(`${selectedItem.FieldId}`)
      }
    }
    if (selectedItem.StaticFilter !== 0) {
      if (valuediscountstring !== '') {
        valuediscountstring.includes(`${selectedItem.valueId}`) ? setvaluediscountstring(removeFromString(valuediscountstring, `${selectedItem.valueId}`)) :
          (setvaluediscountstring(removedoubleComma(`${valuediscountstring},${selectedItem.valueId}`)))
      } else {
        setvaluediscountstring(`${selectedItem.valueId}`)
      }
    }
  }

  const removedoubleComma = string => {
    return string.replace(',,', ',')
  }

  const removeFromString = (stringValue = '', valueId) => {
    let str = stringValue.replace(valueId, '')
    str = removedoubleComma(str)
    if (str.startsWith(',')) {
      str = str.substring(1, str.length)
      return str
    } else {
      return str
    }
  }

  const handleFilterByPrice = debounce((e, type) => {
    if(type === 'max') {
      setSliderValue2(e.target.value)
    } else if(type === 'min') {
      setSliderValue(e.target.value)
    }
  }, 300);

  const handleMaxValue = (event) => {
    setReset(true)
    if (event.target.value > sliderValue) {
      setMaxValue(event.target.value);
      handleFilterByPrice(event, 'max');
    }
  }

  const handleMinValue = (event) => {
    setReset(true)
    if (event.target.value < sliderValue2) {
      setMinValue(event.target.value)
      handleFilterByPrice(event, 'min');
    }
  }

  const changeFltr = (newFL) => {
    setReset(true)
    setSeleced(newFL);
    setIsOpen(false);
    setcheckfilterflag(true)
    setSelectedValue(sortByfiltersList.find(item => item.value === newFL)?.ListItem || '');
  };

  const handlefilter = () => {
    document.getElementById('newpositionfilter').scroll({ top: 0, behavior: 'smooth' });
  }

  const handlefilterResult = () => {
    document.getElementById('hidefilterResult').className = 'closefilter';
  }

  const ClearAllFilter = (param) => {
    const {page: routePage} = router.query;
    setSelectItemDisp('')
    setpreselectItem('')
    setselectedPacksize('');
    setselectedBrand('');
    setselectedDiscount('');
    setselectedFood('')
    setselectedFood('');
    setselectedPrimaryCamera('')
    setselectedGlassType('');
    setselectedIntStorage('');
    setselectedWeight('');
    setselectedRAM('');
    setselectedColor('');
    window.scrollTo(0, 0);
    document.getElementsByClassName('multiselectdrop')
    setValueString('')
    setvaluepackString('')
    setfieldString('')
    setvaluediscountstring('')
    setSeleced('')
    setPage(routePage || 1)
    setReset(false)
    setloading(false);
    setisActive(true)
    setIsSamePage(false)
    setSelectedValue('')
    setFilterPage(1);
    setFilterProductCount(0);
    setIsLastPage(false);
    if(param === 'resetFilter') {
      setloading(true);
      setgroupedData([]);
      fetchCategoryDetails(param);
      document.getElementById('hidefilterResult').className = 'closefilter';
    } else {
      setcheckfilterflag(false)
    }
  }

  return (
    <>
      <Head> 
        <title>{categorySEOData?.PageTitle}</title>
        <meta name="description" content={categorySEOData?.MetaDescription} />
        <meta name="keywords" content={categorySEOData?.MetaKeyword}></meta>
        <meta property="og:image" content={categorySEOData?.CategoryImage} />
        <meta property="og:site_name" content={metaDomain} /> 
        <meta property="og:title" content={categorySEOData?.PageTitle} />
        <meta property="og:description" content={categorySEOData?.MetaDescription}/>
        {/* <link rel="canonical" href="https://optinmonster.com/seo-ranking-factors/" /> */}
      </Head>
      <ToastContainer
        position="top-right"
      />
      <Header sellerDetailsFromDomain={sellerDetailsFromDomain} topMenuData={topMenuData}/>

      <div className={groupedData && groupedData != "" ? 'main-wrapper mt-0' : ""}>
        <div className="container-fluid subcatWrapper">
          <div className="row">
            <div className="col-lg-12">
              <div className="product-shop-main-wrapper newfilterAlign" id="product-listing">
                {(groupedData && groupedData?.length > 0) || checkfilterflag || isSamePage ? 
                  <>
                    <div className="row plp-breadcrumb">
                      <div className="col-lg-9 col-md-6 col-sm-9">
                        <SubNavigation 
                          URL={URL} 
                          Productcount={breadcrumbProdcount} 
                          FliterFlag={filterflag} 
                          ResetFlag={Reset} 
                          parentcategoryName={parentcategoryName} 
                          productcategoryName={productcategoryName}
                        />
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-3">
                        <div className="top-bar-right">
                          <div className="product-view-mode">
                            <button 
                              className={isActive ? 'active' : ''} 
                              data-target="grid" 
                              onClick={() => setisActive(!isActive)} 
                              type="button"
                            >
                              <i className='fa fa-th'></i>
                            </button>
                            <button 
                              className={isActive ? '' : 'active'} 
                              data-target="list" 
                              onClick={() => setisActive(!isActive)} 
                              type="button" 
                              style={{ marginRight: '0px' }}
                            >
                              <i className="fa fa-list"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='row col-lg-12'>
                      <h1>{categorySEOData?.Name}</h1>
                    </div>
                    {(advfilterData && advfilterData !== undefined) ?
                      <div 
                        className='top-filter top-filter-category newfilterposition' 
                        id='newpositionfilter' 
                        onClick={handlefilter} 
                        style={{ zIndex: filterdynamicpopup.isPaneOpen ? "0" : "888" }}
                      >
                        {/* <div className='filterSorting'>
                          <select
                            className="nice-select"
                            name="sortby"
                            id="sortby_limit"
                            value={Seleced}
                            onChange={event => changeFltr(event.target.value)} >
                            {sortByfiltersList.map(itm => (
                              <option value={itm.value}>{itm.ListItem}</option>
                            ))}
                          </select>
                          {isClient && (<img src='/images/dropdownsort.png' alt=''></img>)}
                        </div> */}
                        <div>
                        <div className='filter-box' ref={dropdownRef}>
                          <div>
                          <div className='multiselect-container multiSelectContainer' id='multiselectContainerReact'>
                            <div 
                              className="search-wrapper searchWrapper"
                              // style={{
                              //   width: '100%',
                              //   padding: '7px 16px'
                              // }}
                              onClick={toggleDropdown}
                            >
                              <p style={{ margin: '0'}}>{selectedValue ? selectedValue : 'Sort By'}</p>
                              {isClient && (<img src='/images/dropdownsort.png' alt='' className='icon_cancel icon_down_dir'></img>)}
                            </div>

                            {isOpen && (
                              <ul className='mt-1 optionListContainer displayNone optionContainer'>
                                {sortByfiltersList.map((item, idx) => (
                                  <li
                                    key={`Sort ${idx}`}
                                    className='option  highlightOption highlight'
                                    onClick={() => changeFltr(item.value)}
                                  >
                                    {item.ListItem}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                          </div>
                        </div>
                        </div>

                        {advfilterData.map((advfilterbox, index) => {
                          advfilterbox[1].sort((a,b) => a.ListItemValue.localeCompare(b.ListItemValue));
                          advfilterbox[1].sort((a, b) => {
                            const aValue = parseInt(a.ListItemValue);
                            const bValue = parseInt(b.ListItemValue);
                            return aValue - bValue;
                          });
                          return (
                          index <= 3 && advfilterbox[0] !== "Price" ?
                            <div>
                              <div className="filter-box">
                                <Multiselect
                                  showArrow
                                  options={(advfilterbox !== undefined && advfilterbox.length > 0 && advfilterbox[1] || []).map((data, indexd) => ({ name: data.ListItemValue, id: indexd + 1, valueId: data.valueId, FieldId: data.FieldId, Value: data.Value, StaticFilter: data.StaticFilter, fitlerName: advfilterbox[0] }))}
                                  selectedValues={preselectItem} // Preselected value to persist in dropdown
                                  onSelect={filteronChange} // Function will trigger on select event
                                  onRemove={RemoveSelectItem} // Function will trigger on remove event
                                  displayValue="name" // Property name to display in the dropdown options
                                  placeholder={advfilterbox[0]}
                                  showCheckbox
                                />
                              </div>
                            </div>
                            :
                            null
                        )})
                        }
                        <div>
                          <div className="single-sidebar mb-45 price-filter">
                            <h5>Filter By Price</h5>
                            <div className="panel panel-default single-sidebar">
                              <div className='position-relative rangeslider' >
                                <input
                                  type="range"
                                  min={min}
                                  max={max}
                                  value={minValue}
                                  onChange={handleMinValue}
                                  className={classnames("thumb thumb--zindex-3", {"thumb--zindex-5": ''})}
                                />
                                <input
                                  type="range"
                                  min={min2}
                                  max={max2}
                                  value={maxValue}
                                  onChange={handleMaxValue}
                                  className="thumb thumb--zindex-4"
                                />
                                <div className="slider">
                                  <div className="slider__track" />
                                  <div ref={range} className="slider__range" />
                                  <div className="slider__left-value">₹ {sliderValue}</div>
                                  <div className="slider__right-value">₹ {sliderValue2}</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {advfilterData && advfilterData?.length > 0  ?
                          <div className="morefilter d-flex"><br />
                            <span className='morefilterTitle btn btn-success' onClick={() => setfilterdynamicpopup({ isPaneOpen: true })}>
                              More Filters
                            </span>
                            <span 
                              className='clearAll1 btn btn-info' 
                              style={{ display: Reset === true ? "inline-block" : "none" }} 
                              onClick={() => ClearAllFilter('resetFilter')}
                            >Clear All</span>
                            <SlidingPane
                              className="some-custom-class"
                              overlayClassName="some-custom-overlay-class"
                              isOpen={filterdynamicpopup.isPaneOpen}
                              title="More Filters"
                              closeIcon="X"
                              onRequestClose={() => setfilterdynamicpopup({ isPaneOpen: false })}
                            >
                              <div className='row morefilter'>
                                {advfilterData.map((advfilterbox, index) => (
                                  advfilterbox[0] !== "Price" ?
                                    <div className='col-lg-12'>
                                      <div className="more-filter-box">
                                        <Multiselect
                                          options={(advfilterbox !== undefined && advfilterbox.length > 0 && advfilterbox[1] || []).map((data, indexm) => ({ name: data.ListItemValue, id: indexm + 1, valueId: data.valueId, FieldId: data.FieldId, Value: data.Value,  StaticFilter: data.StaticFilter, fitlerName: advfilterbox[0] }))}
                                          // Options to display in the dropdown
                                          selectedValues={preselectItem} // Preselected value to persist in dropdown
                                          onSelect={filteronChange} // Function will trigger on select event
                                          onRemove={RemoveSelectItem} // Function will trigger on remove event
                                          displayValue="name" // Property name to display in the dropdown options
                                          placeholder={advfilterbox[0]}
                                          showCheckbox
                                        />
                                      </div>
                                    </div>
                                    :
                                    null
                                ))}
                                <div className="col-lg-12">
                                  <span className='clearAll2 btn btn-info' onClick={() => ClearAllFilter('resetFilter')} style={{ display: Reset === true ? "inline-block" : "none" }} >Clear All</span>
                                </div>
                              </div>
                            </SlidingPane>
                          </div>
                          :
                          null
                        }
                      </div>
                      : null
                    }
                  </> : ''}
                <div className='row'>
                  <div className='col-lg-12 selecteedItemdisp' >
                    {selectItemDisp && selectItemDisp?.length > 0 && selectItemDisp?.map((selectfilterItem) => (
                      <span className='selectItemName'>
                        <span>{selectfilterItem.name}</span>
                        <span className='crossIcon'>
                          <span className="fa fa-times" aria-hidden="true" onClick={(e) => RemoveSelectItem(e, selectfilterItem)}></span>
                        </span>
                      </span>
                    ))}
                    {/* {groupedData && groupedData?.length === 0 && Reset === true && selectItemDisp && (
                      <span 
                        className='clearAll1 btn btn-info' 
                        style={{ display: Reset === true ? "inline-block" : "none" }} 
                        onClick={() => ClearAllFilter('resetFilter')}
                      >Clear All</span>
                    )} */}
                  </div>
                </div>

                {groupedData?.length > 0 ? (
                  <div id="products" className="shop-product-wrap row " data-group={groupedData} >
                    {groupedData.map((data, i) => 
                      <div className={isActive ? 'col-lg-3 c' : 'col-lg-12 e'}>
                        <LoadProducts 
                          data={data} 
                          shppingcart={shppingcart} 
                          index={i} 
                          skulisting 
                          notify={notify} 
                          isActive={isActive} 
                        />
                      </div>
                    )}
                    {SubcategoryState && SubcategoryState.loading === true && Reset === false ?
                      <div className='col-lg-12 text-center mt-25 mb-25' >
                        <img src='/images/adibuja-logo-animation.gif' alt='' style={{ justifySelf: 'center', width: '80px', height: '80px' }} />
                      </div>
                    : null}
                  </div>
                  ) : (isSortLoading || loading || isSamePage) ? (
                    <div className='row rr'>
                      <div className='col-lg-12 text-center mt-25 mb-60' >
                        <div className='loaderimgsearch' >
                          <img src='/images/adibuja-logo-animation.gif' alt='' style={{ justifySelf: 'center', width: '80px', height: '80px' }} />
                        </div>
                      </div>
                    </div>) : (
                    <>
                      <div className="col-md-12" style={{ padding: '5%' }}>
                        <div className="alert alert-warning text-center">Products Not Found</div>
                      </div>
                      <div className='col-lg-6'></div>
                    </>
                  )
                }
                {isClient && ((fixIntCount >= page && fixIntCount > 1) || (filterProductCount >= filterPage && filterProductCount > 1)) && !isLastPage && groupedData?.length > 0 && (
                  <div 
                    className="d-flex justify-content-center align-items-center spinner-container m-0" 
                    ref={ref}
                  >
                    <div className='row rr'>
                      <div className='col-lg-12 text-center mt-25 mb-25'>
                        <img 
                          src='/images/adibuja-logo-animation.gif' 
                          alt='' 
                          style={{ justifySelf: 'center', width: '80px', height: '80px' }} 
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className={mavigationBarReducer && mavigationBarReducer !== undefined && 
              mavigationBarReducer.filterinfo === true ? 'shop-sidebar-inner mb-30 active' : 'shop-sidebar-inner mb-30 closeactive'} 
              id='hidefilterResult'>
              {(groupedData && groupedData != "" && groupedData?.length !== 0 && advfilterData && advfilterData?.length > 1) || checkfilterflag || isSamePage ?
                <div className='row ' style={{ zIndex: filterdynamicpopup.isPaneOpen ? "0" : "888" }}>
                  {advfilterData.map((advfilterbox, index) => (
                    advfilterbox[0] !== "Price" ?
                      <div className='col-lg-2'>
                        <div className="filter-box">
                          <Multiselect
                            options={(advfilterbox !== undefined && advfilterbox.length > 0 && advfilterbox[1] || []).map((data, indexd) => ({ name: data.ListItemValue, id: indexd + 1, valueId: data.valueId, FieldId: data.FieldId, StaticFilter: data.StaticFilter, Value: data.Value, fitlerName: advfilterbox[0] }))}
                            // Options to display in the dropdown
                            selectedValues={preselectItem} // Preselected value to persist in dropdown
                            onSelect={filteronChange} // Function will trigger on select event
                            onRemove={RemoveSelectItem} // Function will trigger on remove event
                            displayValue="name" // Property name to display in the dropdown options
                            placeholder={advfilterbox[0]}
                            showCheckbox
                          />
                        </div>
                      </div>
                      :
                      null
                  ))}
                  <div className='col-lg-2'>
                    <div className="single-sidebar mb-45 price-filter">
                      <h5>Filter By Price</h5>
                      <div className="panel panel-default single-sidebar">
                        <div className='position-relative rangeslider' >
                          <input
                            type="range"
                            min={min}
                            max={max}
                            value={minValue}
                            onChange={handleMinValue}
                            className={classnames("thumb thumb--zindex-3", {"thumb--zindex-5": ''})}
                          />
                          <input
                            type="range"
                            min={min2}
                            max={max2}
                            value={maxValue}
                            onChange={handleMaxValue}
                            className="thumb thumb--zindex-4"
                          />
                          <div className="slider">
                            <div className="slider__track" />
                            <div ref={range} className="slider__range" />
                            <div className="slider__left-value">₹ {sliderValue}</div>
                            <div className="slider__right-value">₹ {sliderValue2}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="btn btn-secondary mt-0" type="button" onClick={handlefilterResult} id='btn' >Hide filter</button>
                  <button className='clearAll2 btn btn-info mt-0' onClick={() => ClearAllFilter('resetFilter')} style={{ display: Reset === true ? "inline-block" : "none" }} >Clear All</button>
                </div>
                : null
              }
            </div>
          </div>
        </div>
      </div>
      {(groupedData && groupedData?.length > 0) || checkfilterflag || isSamePage ? (
        <>
          <hr></hr>
          <RelatedCategory categorySEOData={categorySEOData} relatedCategoryDetails={relatedCategoryDetails} />
        </>) : null}
      {isClient && groupedData && groupedData?.length > 0 ?
        <>
          {(localStorage.getItem('CustGUID') === null || 
            localStorage.getItem('CustGUID') === undefined || 
            localStorage.getItem('CustGUID') === '00000000-0000-0000-0000-000000000000')
            ?
            <SignIn />
            :
            null}
        </>
          : ""}
      <Footer footerData={footerData && footerData} footerPagesLinks={footerPagesLinks} footerCategoryLinks={footerCategoryLinks} />
      <div style={{ display: 'none'}}>
        {fixIntCount && !router.query?.page && Array.from({ length: fixIntCount }, (_, index) => index + 1)?.slice(currentPage)?.map((page, index) => 
          <Link href={`${router.asPath.split('?')?.[0]}?page=${page}`} key={index}></Link>
        )}
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  const currentDomain = context?.req?.headers?.host || '';
  const { page, subcategory, categoryName } = context.query  
  const sellerDetailsFromDomain = await getDetailsFromDomain(context.req.headers.host);
  let sellerIdMain = ConstantsValues.defaultSellerID;
  if(sellerDetailsFromDomain?.AdminMemberId) {
    sellerIdMain = sellerDetailsFromDomain.AdminMemberId;
  }

  try{
    const categoryData = await fetchCategoryData(page || 1, subcategory, categoryName, sellerIdMain);
    const categorySEOData = await fetchCategorySEOData(categoryName, sellerIdMain);
    const advanceFilterData = await fetchAdvanceGetSkuFilter(categoryName, categoryData?.minprice, categoryData?.maxprice, sellerIdMain)
    const topMenuData = await fetchTopMenuData(sellerIdMain);
    const footerPagesLinks = await fetchFooterPagesLinks(sellerIdMain);
    const footerCategoryLinks = await fetchFooterCategoryLinks(sellerIdMain);
    const relatedCategoryDetails = await fetchRelatedCategoryDetails(categoryName, sellerIdMain);
  
    return {
      props: {
        categoryData: categoryData,
        categorySEOData: categorySEOData,
        advanceFilterData: advanceFilterData,
        page: page || 1,
        topMenuData: topMenuData,
        footerPagesLinks: footerPagesLinks,
        footerCategoryLinks: footerCategoryLinks,
        relatedCategoryDetails: relatedCategoryDetails,
        sellerDetailsFromDomain: sellerDetailsFromDomain,
        currentDomain: currentDomain,
      },
    };
  } catch(err) {
    return {
      props: {
        categoryData: [],
        categorySEOData: [],
        advanceFilterData: [],
        page: page || 1,
        topMenuData: [],
        footerPagesLinks: [],
        footerCategoryLinks: [],
        relatedCategoryDetails: [],
        sellerDetailsFromDomain: sellerDetailsFromDomain,
        currentDomain: currentDomain,
      }
    }
  }
}

function fetchCategoryData(page, parentCatURL, caturl, sellerIdMain) {
  const url = `${Constants.urls.baseUrl}${Constants.endPoints.skulisting}clientId=${ConstantsValues.ClientId}&catUrl=${caturl}&parentCatURL=${parentCatURL}&languageId=2&CurrencyCode=INR&CustGUID=${ConstantsValues.defaultCustGUID}&cartGuid=${ConstantsValues.defaultCartGUID}&fixedShippingDurationId=0&pageNo=${page}&limit=20&sortby=null&pincode=${ConstantsValues.pincode}&defaultListing=false&minPrice=null&maxPrice=null&sellerid=${sellerIdMain}`;

  return httpRequest(url, 'GET');
}

function fetchCategorySEOData(categoryName, sellerIdMain) {
  const url = `${Constants.urls.baseUrl}${Constants.endPoints.skuSEOListing}url=${categoryName}&languageId=2&sellerid=${sellerIdMain}`;
  return httpRequest(url, 'GET');
}

function fetchAdvanceGetSkuFilter(caturl, min, max, sellerIdMain) {
  const url = `${Constants.urls.baseUrl}${Constants.endPoints.advancegetskufilter}clientid=${ConstantsValues.ClientId}&caturl=${caturl}&languageId=${ConstantsValues.languageId}&pincode=${ConstantsValues.pincode}&filterValueIds=yes&isFeatured=0&minPrice=${min}&maxPrice=${max}&pageNo=1&limit=8&sellerid=${sellerIdMain}`;
  return httpRequest(url, 'POST');
}

function fetchTopMenuData(sellerIdMain) {
  const url = `${Constants.urls.baseUrl}${Constants.endPoints.MultiMenu}ClientId=1&languageId=2&IsForReact=1&sellerid=${sellerIdMain}`;

  return httpRequest(url, 'GET');
}

function fetchRelatedCategoryDetails(catURL, sellerIdMain) {
  const url = `${Constants.urls.baseUrl}${Constants.endPoints.GetRelatedCategoryList}&clientId=${ConstantsValues.ClientId}&LanguageId=${ConstantsValues.languageId}&CategoryName=${catURL}&sellerid=${sellerIdMain}`;

  return httpRequest(url, 'GET');
}

function fetchFooterCategoryLinks(sellerIdMain) {
  const url = `${Constants.urls.baseUrl}${Constants.endPoints.MegaMainMenu}ClientId=1&languageId=2&IsForReact=1&sellerid=${sellerIdMain}`;
  return httpRequest(url, 'GET');
}

function fetchFooterPagesLinks(sellerIdMain) {
  let pagename = "";
  const loginStatus = Cookies.get('customer-login-status')
  if (sellerIdMain==='0') {
    if (loginStatus) {
      pagename = loginStatus;
    } else {
      pagename = 'react-guest';
    }
  } else {
    if (loginStatus) {
      pagename = 'react-seller-auth';
    } else {
      pagename = 'react-seller-guest';
    }
  }
  const url = `${Constants.urls.baseUrl}${Constants.endPoints.footer}pagename=${pagename}&cid=1&languageId=2&sellerid=${sellerIdMain}`;

  return httpRequest(url, 'GET');
}

export default Subcategory;