/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/prop-types */
/* eslint-disable indent */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
/**
 *
 * Product
 *
 */
import React, { use, useEffect, useState } from 'react';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import { serialize } from 'next-mdx-remote/serialize';
import { useRouter } from 'next/router';
import { Helmet } from 'react-helmet-async';
import Link from 'next/link';
import { useInjectReducer } from '@/utils/injectReducer';
import { useInjectSaga } from '@/utils/injectSaga';
import '../../../public/assets1/css/bundle.css';
import '../../../public/assets1/css/default.min.css';
import '../../../public/assets1/css/font-awesome.min.css';
import '../../../public/assets1/css/responsive.min.css';
// import '../../../public/assets1/css/style.min.css';
import '../../../public/assets/css/style.min.css';
import '../../containers/DealdayProductOriginal/carsoule.css'
import { ToastContainer } from 'react-toastify';
import Footer from '../../components/Footer/footer';
import Header from '../../components/Header';
import SubNavigation from '../../components/SubNavigation';
import OrderdetailAPI from '../../containers/MainPage/api/orderdetail';
import { RecentlyViewProduct } from '../../containers/RecentlyViewProduct';
import { RelatedProduct } from "../../containers/RelatedProduct/index";
import { TopTrendingProduct } from '../../containers/TopTrending/topTrending';
import { ReorderProduct } from '../../containers/ReorderProduct';
import { NewArrivalProduct } from '../../containers/NewArrivalProduct'
import Constants from '../../containers/App/constants';
import { getreviw, getskuProductdetail } from '../../containers/ProductDetail/actions';
import Productpage from '../../containers/ProductDetail/productpage';
import reducer from '../../containers/ProductDetail/reducer';
import saga from '../../containers/ProductDetail/saga';
import { default as homeSaga } from "../../containers/HomeScreen/saga";
import { default as homeReducer } from "../../containers/HomeScreen/reducer";
import 'react-toastify/dist/ReactToastify.css';
import { FeatureProduct } from '../../containers/FeatureProduct/featureProduct';
import { RecommendedProduct } from '../../containers/RecommendedProduct/index';
import SignIn from '../../components/Footer/signin';
import { useLocalStorage } from '@/useLocalStorage';
import { httpRequest } from '../../containers/MainPage/api/apiServices';
import { ConstantsValues } from '../../containers/MainPage/api/homeServices';
import { storeRecentlyViewed } from '@/storeRecentlyViewed';
import LogoLoader from '@/components/LoadingIndicator/LogoLoader';
import ProductDetailAPI from '../../containers/MainPage/api/productdetail';
import Cookies from 'js-cookie';
import ToppSellingOriginal from '@/containers/ToppSellingOriginal';
import getDetailsFromDomain from '../../utils/getSellerDetails'
//export function Product(props) {
const Product = ({ productData, topMenuData, footerPagesLinks, footerCategoryLinks, similarProductsData, topTrendingProductsData, featuredProductsData, topSellingProductsData, newArrivalProductsData, addressData, serviceAvailabilityDetails, loginUserFlag, enteredPincode, sellerId, sellerDetailsFromDomain, currentDomain }) => {
  //console.log("productData===", productData);
  useInjectReducer({ key: 'product', reducer });
  useInjectSaga({ key: 'product', saga });

  useInjectReducer({ key: 'homeScreen', reducer : homeReducer });
  useInjectSaga({ key: 'homeScreen', saga :  homeSaga });

  const MAX_RECENT_PRODUCTS = 15;
  const [PageUrl, setPageUrl] = useLocalStorage('PageUrl',null);
  const [ProductName, setProductName] = useLocalStorage('ProductName',null);
  const [SkuDetailId, setSkuDetailId] = useLocalStorage('SkuDetailId',null);
  const [varientData, setvarientData] = useState([])
  const [varientTraversData, setvarientTraversData] = useState([])
  const [CustGUID, setCustGUID] = useState('');
  const [isClient, setIsClient] = useState(false);
  const [metaDomain, setMetaDomain] = useState("Adibuja.com");
  const [sellerRegisterUrl, setSellerRegisterUrl] = useState("https://seller.adibuja.com/seller-register");
  const [prductdetaildata, setPrductdetaildata] = useState(productData && productData.skusModelMultivariant[0]);
  //const prductdetaildata = productData && productData.skusModelMultivariant[0];
  //console.log("prductdetaildata===", prductdetaildata);
  const [generatedtoken, setgeneratedtoken] = useLocalStorage('generatedtoken',null);
  //const [prductdetaildata, setprductdetaildata] = useState(productData || {});
  //const prductdetaildata = productData;
  //const prductdetaildata = productData && productData.skusModelMultivariant && productData.skusModelMultivariant[0];
  const router = useRouter();
  const [reviewres, setReviewres] = useState([])
  const [limit, setLimit] = useState(5)
  const max = 50;
  const skuproduct = useSelector(state => state.product)
  //console.log('--------------------------productdata',skuproduct.skudetaildata)
  /*useEffect(() => {
    console.log("HeyRohit",productData)
    if (productData !== undefined) {
      setprductdetaildata(productData)
    }
  }, [productData])*/
  
  /*useEffect(() => {
    OrderdetailAPI.GetAllReviewFromCustomerForProduct(prductdetaildata.SkuId)
      .then(response => {
        setReviewres(response)
      })
  }, [prductdetaildata])*/
  const dispatch = useDispatch()
  function fetchproductVarient(PageURL) {
   //console.log("99PageURL==", PageURL);
   router.push(`/product/${PageURL}`)
  //  ProductDetailAPI.getSkuv(PageURL)
  //  .then((PDPRes)=>{
  //     console.log("PDPRes==", PDPRes);
  //     setPrductdetaildata(PDPRes.skusModelMultivariant[0])
  //  })
  }
  // function fetchproductdetail(PageURL) {
  //   setPageUrl(window.btoa(PageURL))
  //  dispatch(getskuProductdetail(PageURL))
  //  dispatch(getreviw(window.atob(PageUrl)))
  // }
  useEffect(() => {
    //console.log("Cookies.get('CustGUID')", Cookies.get('CustGUID'))
    if(productData && productData.skusModelMultivariant && productData.skusModelMultivariant.length > 0 && productData.skusModelMultivariant[0].SkuId){
      setPrductdetaildata(productData.skusModelMultivariant[0])
    }
  }, [productData]);

  useEffect(() => {
    //console.log('recentlyviewedproducts>>>>>',prductdetaildata)
    if (prductdetaildata && prductdetaildata.SkuId) {
      storeRecentlyViewed(prductdetaildata.SkuId);
    }
    
  }, [productData]);

  useEffect(() => {
    if (productData && productData.SellerRegisterUrl && productData.SellerRegisterUrl!=="") {
      setSellerRegisterUrl(productData.SellerRegisterUrl)
    }
    if (currentDomain && currentDomain!==null) {
      setMetaDomain(currentDomain)
    }
    setIsClient(true)
    if (typeof window !== 'undefined' && window.localStorage) {
      setCustGUID(localStorage.getItem('CustGUID'))
      if(sellerId) {
        localStorage.setItem('sellerID', sellerId)
      } else {
        localStorage.setItem('sellerID', ConstantsValues.defaultSellerID)
      } 
    }
  },[])

  useEffect(() => {
    //console.log('executing this',prductdetaildata.SkuId)
    OrderdetailAPI.GetAllReviewFromCustomerForProduct(prductdetaildata?.SkuId)
      .then(response => {
        setReviewres(response)
      })
  },[prductdetaildata])

  // useEffect(() => {
  //   const date = new Date();
  //   let day = date.getDate();
  //   let month = date.getMonth() + 1;
  //   let year = date.getFullYear();
  //   let hr = date.getHours();
  //   let min = date.getMinutes();
  //   let sec = date.getSeconds();
  //   let mls = date.getMilliseconds();

  //   // This arrangement can be altered based on how we want the date's format to appear.
  //   let currentDate = `${year}-${month}-${day}T${hr}:${min}:${sec}:${mls}Z`;
  //   fetch('https://api.ipify.org?format=json')
  //     .then(response => response.json())
  //     .then(data =>{ 
  //       //console("IP Address==", data.ip)
  //       ProductDetailAPI.getCRMTrackPDP(prductdetaildata.SkuId, data.ip, currentDate)
  //     })
  //     .catch(error => console.log(error))
  // }, [prductdetaildata]);

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
            //console("IP Address==", data.ip)
            ProductDetailAPI.getCRMTrackPDP(prductdetaildata.SkuId, data.ip, currentDate, localStorage.getItem('generatedtoken'))
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
  
  /*useEffect(() => {
    
    fetchproductdetail()
    window.scrollTo(0, 0);
    
  }, [])*/
  /*useEffect(() => {
    setProductName("")
    if (generatedtoken) {
    
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
        .then(result => {
          if (result && result !== "") {
            setgeneratedtoken(result.access_token)
          }
          window.location.reload(true);
          
        },
         
        ).catch(() => {
          console.log("error")
          
        })
    }
  }, [])*/
  function dateConverter(createdon) {
    const date = new Date(createdon);
    const formattedDate = date.toLocaleDateString('en-us', {
      month: 'short', day: 'numeric', year: 'numeric'
    }).replace(/ /g, '  ');
    return formattedDate
    
  }
  const loadMoreReviews = () => {
    
    if (limit <= max) {
     
      const limitarr = limit + 5;
      setLimit(limitarr)
    }
  }

  return (
    <>
        <Head>
        <title>{prductdetaildata?.PageTitle}</title>
        <meta name="description" content={prductdetaildata?.MetaDescription} />
        <meta property="og:image" content={prductdetaildata?.ListingImage} />
        <meta name="keywords" content={prductdetaildata?.MetaKeyword}></meta>
        <meta property="og:site_name" content={metaDomain} />
        <meta property="og:type" content={prductdetaildata?.SkyType} />
        <meta property="og:url" content={`${prductdetaildata?.DomainName}product/${prductdetaildata?.PageUrl}`} />
        <meta property="og:title" content={prductdetaildata?.PageTitle} />
        <meta property="og:description" content={prductdetaildata?.MetaDescription}/>
      </Head>
      <ToastContainer
        position="top-right"

      />
      {/* {
        isClient ?
        <Header /> : ""
      } */}
      <Header sellerDetailsFromDomain={sellerDetailsFromDomain} topMenuData={topMenuData}/>
      {/*<SubNavigation />*/}
      <Productpage 
        data={prductdetaildata}
        sellerRegisterUrl={sellerRegisterUrl} 
        varientData={productData && productData.variantList} 
        varientTraversData={productData && productData.variant}  
        setsendURLPDP={(e) => fetchproductVarient(e)}
        addressData={addressData}
        serviceAvailabilityDetails={serviceAvailabilityDetails} 
        loginUserFlag={loginUserFlag}
        enteredPincode={enteredPincode}
        isLogisticsEnable={productData?.IsLogisticsEnable}
        sellerId={sellerId}
      />       
      <div id="tab_review" className="mb-0">
        {
          prductdetaildata !== undefined && prductdetaildata.length !== 0 ?
            <>
              <RelatedProduct SkuDetailId={prductdetaildata.SkuId} similarProductsData={similarProductsData}/>
              <TopTrendingProduct SkuDetailId={prductdetaildata.SkuId} topTrendingProductsData={topTrendingProductsData}/>
              <ToppSellingOriginal SkuDetailId={prductdetaildata.SkuId} topSellingProductsData={topSellingProductsData}/>
            </>
            :
            null
        }
        {/* {<TopTrendingProduct productName={prductdetaildata} />} */}
        {<FeatureProduct productName={prductdetaildata} featuredProductsData={featuredProductsData}/>}
        {<NewArrivalProduct productName={prductdetaildata} newArrivalProductsData={newArrivalProductsData}/>}
        {/*{(CustGUID === null || CustGUID === undefined) ? null : <ReorderProduct />}
        {(CustGUID === null || CustGUID === undefined) ? null :
        <RecommendedProduct />}*/}
        <RecentlyViewProduct />
        {(CustGUID === null || CustGUID === undefined) ? null : <RecommendedProduct />}
        {
          isClient ?
        <div id="ReviewForm" className='container-fluid mt-0' style={{display: reviewres.length === 0 ? 'none' : 'block'}} ><link href="/assets1/css/font-awesome4.7.0.min.css" rel="stylesheet" />
          {reviewres && reviewres.length !== 0 ?
            <>
              <h3>Customer Review</h3>
              <div>
                {reviewres.slice(0, limit).map((data) =>
                  <div id="customerreview" ><link href="/assets1/css/font-awesome4.7.0.min.css" rel="stylesheet" />
                    <table className="table table-striped table-bordered" >
                      <tbody><tr>
                        <td>
                          <strong>{data.FirstName} </strong>
                        </td>
                        <td className="pdpdate" style={{ textAlign: 'right' }}>
                          {dateConverter(data.CommentDate)}
                        </td>
                      </tr>
                        <tr>
                          <td colSpan="2">
                            {data.Comment}
                            <div className="product-ratings">
                              <ul className="ratting d-flex mt-2">
                                <li>
                                  {data.Rating === 5 ?
                                    <>
                                      <i style={{ color: '#ff7060' }} className="checked fa fa-star">
                                      </i>
                                      <i style={{ color: '#ff7060' }} className="checked fa fa-star">
                                      </i>
                                      <i style={{ color: '#ff7060' }} className="checked fa fa-star">
                                      </i>
                                      <i style={{ color: '#ff7060' }} className="checked fa fa-star">
                                      </i>
                                      <i style={{ color: '#ff7060' }} className="checked fa fa-star">
                                      </i></>
                                    :
                                    <>
                                      {data.Rating === 4 ?
                                        <>
                                          <i style={{ color: '#ff7060' }} className="checked fa fa-star"></i>
                                          <i style={{ color: '#ff7060' }} className="checked fa fa-star"> </i>
                                          <i style={{ color: '#ff7060' }} className="checked fa fa-star"></i>
                                          <i style={{ color: '#ff7060' }} className="checked fa fa-star"></i>
                                        </>
                                        :
                                        <>
                                          {data.Rating === 3 ?
                                            <>
                                              <i style={{ color: '#ff7060' }} className="checked fa fa-star"></i>
                                              <i style={{ color: '#ff7060' }} className="checked fa fa-star"> </i>
                                              <i style={{ color: '#ff7060' }} className="checked fa fa-star"></i></>
                                            :
                                            <>
                                              {data.Rating === 2 ?
                                                <>
                                                  <i style={{ color: '#ff7060' }} className="checked fa fa-star"></i>
                                                  <i style={{ color: '#ff7060' }} className="checked fa fa-star"> </i></>
                                                :
                                                <>
                                                  {data.Rating === 1 ?
                                                    <>
                                                      <i style={{ color: '#ff7060' }} className="checked fa fa-star"></i>
                                                    </>
                                                    : null}
                                                </>
                                              }
                                            </>
                                          }
                                        </>
                                      }
                                    </>
                                  }
                                 
                                </li>
                              
                              </ul>
                            </div>
                          </td>
                        </tr>
                      </tbody></table>
                  </div>
                )}
              </div>
              {
                limit && limit < reviewres.length ? <button data-limit={reviewres.length} id="customerreviews" type="button" onClick={loadMoreReviews}>Show More</button>
                  : ""
              }
            </>
            :
         
            null
          }
        </div>
        : "" }
      </div >
      {
        reviewres && reviewres !== "" && prductdetaildata && prductdetaildata !== undefined && prductdetaildata !== "" ?
          <> {(CustGUID === null || CustGUID === undefined || CustGUID === '00000000-0000-0000-0000-000000000000')
            ?
            <SignIn />
            :
            null}</>
          : ""
      }
      <Footer footerPagesLinks={footerPagesLinks} footerCategoryLinks={footerCategoryLinks}/>
    </>
  );
}
//export default Product


export async function getServerSideProps(context) {
    const currentDomain = context?.req?.headers?.host || '';
    const sellerDetails = await getDetailsFromDomain(currentDomain);
    const sellerId = sellerDetails?.AdminMemberId || ConstantsValues.defaultSellerID;
    const { req, query } = context;
    const { productName } = context.query;
    const productData = await fetchProductData(productName, context, sellerId);
    const topMenuData = await fetchTopMenuData(sellerId);
    
    if (productData?.skusModelMultivariant?.length === 0) {
      return {
        redirect: {
          destination: `/Search?q=${productName}`,
          permanent: false,
        },
      };
    }

    const similarProductsData = await fetchSimilarProductsData(productData, context, sellerId);
    const topTrendingProductsData = await fetchTopTrendingProductsData(productData, context, sellerId);
    const topSellingProductsData = await fetchTopSellingProductsData(productData, context, sellerId); 
    const featuredProductsData = await fetchFeaturedProductsData(productData, context, sellerId);
    const newArrivalProductsData = await fetchNewArrivalProductsData(productData, context, sellerId);
    const footerPagesLinks = await fetchFooterPagesLinks(sellerId);
    const footerCategoryLinks = await fetchFooterCategoryLinks(sellerId);
    
    const addressData = (productData?.skusModelMultivariant[0]?.InStock && productData?.IsLogisticsEnable) ? await fetchCustomerAddresses(context) : [];
    let serviceAvailabilityDetails;
    try {
      serviceAvailabilityDetails = (productData?.skusModelMultivariant[0]?.InStock && productData?.IsLogisticsEnable) ? await fetchCourierServiceAvailability(productData, addressData, context) : {};
    } catch(err) {
      serviceAvailabilityDetails = {}
    }

    const loginUserFlag = context.req.cookies['CustGUID'] ?? false;
    const enteredPincode = context.req.cookies['enteredCode'] ?? '0';

    return {
      props: {
        productData: productData,
        topMenuData: topMenuData,
        footerPagesLinks: footerPagesLinks,
        footerCategoryLinks: footerCategoryLinks,
        similarProductsData: similarProductsData,
        topTrendingProductsData: topTrendingProductsData,
        featuredProductsData: featuredProductsData,
        topSellingProductsData: topSellingProductsData,
        newArrivalProductsData: newArrivalProductsData,
        addressData: !context.req.cookies['isLocationNotSelected'] ? addressData : [],
        serviceAvailabilityDetails: serviceAvailabilityDetails,
        loginUserFlag: loginUserFlag,
        enteredPincode: enteredPincode,
        sellerId : sellerId,
        sellerDetailsFromDomain: sellerDetails,
        currentDomain: currentDomain,
      },
    };
  }

  function fetchProductData(skuurl, context, sellerId) {
    let custGuidAPI = ConstantsValues.defaultCustGUID;
    if (context.req.cookies['CustGUID'] && context.req.cookies['CustGUID']!=="") {
      custGuidAPI = context.req.cookies['CustGUID']
    }
    
    const url = `${Constants.urls.baseUrl}${Constants.endPoints.SkuV}clientId=${ConstantsValues.ClientId}&custGUID=${custGuidAPI}&cartGuid=${ConstantsValues.defaultCartGUID}&fixedShippingDurationId=0&skuUrl=${skuurl}&languageid=${ConstantsValues.languageId}&CurrencyCode=${ConstantsValues.currencyCode}&pincode=${context.req.cookies['enteredCode'] || context.req.cookies['pincodevalue'] || ConstantsValues.pincode}&sellerid=${sellerId}`;
    return httpRequest(url, 'POST');
  }

  function fetchTopMenuData(sellerId) {
    const url = `${Constants.urls.baseUrl}${Constants.endPoints.MultiMenu}ClientId=1&languageId=2&IsForReact=1&sellerid=${sellerId}`;
    return httpRequest(url, 'GET');
  }

  const fetchCustomerAddresses = (context) => {
    let custGuidAPI = ConstantsValues.defaultCustGUID;
    if (context.req.cookies['CustGUID'] && context.req.cookies['CustGUID']!=="") {
      custGuidAPI = context.req.cookies['CustGUID']
    }
    
    const url = `${Constants.urls.baseUrl}${Constants.endPoints.customeraddress}clientid=${ConstantsValues.ClientId}&customerGuid=${custGuidAPI}&addressId=0`;
    return httpRequest(url, 'GET');
  }

  const fetchCourierServiceAvailability = (productData, addressData, context) => {
    let custGuidAPI = ConstantsValues.defaultCustGUID;
    if (context.req.cookies['CustGUID'] && context.req.cookies['CustGUID']!=="") {
      custGuidAPI = context.req.cookies['CustGUID']
    }

    const filtered = productData?.skusModelMultivariant?.[0]?.FilterList?.[0];
    let primaryData = addressData?.find(item => item.isPrimary);

    if(context.req.cookies['enteredCode'] || context.req.cookies['isLocationNotSelected']) {
      primaryData = {}
    }
    
    const requestBody = {
      skuDetailId: filtered?.SkuDetailId || 0,
      skuFilterPriceId: filtered?.SKUFilterPriceId || 0,
      clientId: ConstantsValues.ClientId,
      languageId: ConstantsValues.languageId,
      pincode: primaryData?.ZipCode || context.req.cookies['enteredCode'] || context.req.cookies['pincodevalue'] || ConstantsValues.pincode,
      soldby: "Adibuja",
      custGuid: custGuidAPI,
      ShoppingCartGUID: ConstantsValues.defaultCartGUID
    }
    
    const url = `${Constants.urls.baseUrl}${Constants.endPoints.serviceAvailability}`;
    return httpRequest(url, 'POST', requestBody);
  }

  function fetchSimilarProductsData(productData, context, sellerId) {
    let productDataSkuId = productData && productData.skusModelMultivariant[0];
    let custGuidAPI = ConstantsValues.defaultCustGUID;
    if (context.req.cookies['CustGUID'] && context.req.cookies['CustGUID']!=="") {
      custGuidAPI = context.req.cookies['CustGUID']
    }
    const url = `${Constants.urls.baseUrl}${Constants.endPoints.skurelated}clientId=${ConstantsValues.ClientId}&CustGUID=${custGuidAPI}&cartGuid=${ConstantsValues.defaultCartGUID}&Skuid=${productDataSkuId.SkuId || 0}&languageId=${ConstantsValues.languageId}&CurrencyCode=${ConstantsValues.currencyCode}&PageNumber=1&PageSize=10&IsgetAll=${0}&sellerid=${sellerId}`;
    return httpRequest(url, 'GET');
  }

  function fetchTopTrendingProductsData(productData, context, sellerId) {
    let productDataSkuId = productData && productData.skusModelMultivariant[0];
    let custGuidAPI = ConstantsValues.defaultCustGUID;
    if (context.req.cookies['CustGUID'] && context.req.cookies['CustGUID']!=="") {
      custGuidAPI = context.req.cookies['CustGUID']
    }
    const url = `${Constants.urls.baseUrl}${Constants.endPoints.GetTopTrendingProductList}pincode=${ConstantsValues.pincode}&LanguageId=${ConstantsValues.languageId}&CartGUID=${ConstantsValues.defaultCartGUID}&CustGUID=${custGuidAPI}&clientId=${ConstantsValues.ClientId}&currencyCode=${ConstantsValues.currencyCode}&IsgetAll=0&PageNumber=1&PageSize=10&skudetailid=${productDataSkuId.SkuId || 0}&sellerid=${sellerId}`;
    return httpRequest(url, 'GET');
  }

  function fetchFeaturedProductsData(productData, context, sellerId) {
    const productcategory = "";
    //let productDataSkuId = productData && productData.skusModelMultivariant[0];
    let custGuidAPI = ConstantsValues.defaultCustGUID;
    if (context.req.cookies['CustGUID'] && context.req.cookies['CustGUID']!=="") {
      custGuidAPI = context.req.cookies['CustGUID']
    }
    const url = `${Constants.urls.baseUrl}${Constants.endPoints.FeatureProduct}clientId=${ConstantsValues.ClientId}&LanguageId=${ConstantsValues.languageId}&currencyCode=${ConstantsValues.currencyCode}&CartGUID=${ConstantsValues.defaultCartGUID}&CustGUID=${custGuidAPI}&pincode=${ConstantsValues.pincode}&Category=${productcategory}&sellerid=${sellerId}`;
    return httpRequest(url, 'GET');
  }

  function fetchTopSellingProductsData(productData, context, sellerId) {
    let productDataSkuId = productData && productData.skusModelMultivariant[0];
    let custGuidAPI = ConstantsValues.defaultCustGUID;
    if (context.req.cookies['CustGUID'] && context.req.cookies['CustGUID']!=="") {
      custGuidAPI = context.req.cookies['CustGUID']
    }
    const url = `${Constants.urls.baseUrl}${Constants.endPoints.topsellingai}ClientId=${ConstantsValues.ClientId}&languageId=${ConstantsValues.languageId}&currencyCode=${ConstantsValues.currencyCode}&CustGUID=${custGuidAPI}&cartGuid=${ConstantsValues.defaultCartGUID}&pincode=${ConstantsValues.pincode}&sortby=MOD&IsgetAll=0&PageNumber=1&PageSize=10&SkuDetailid=${productDataSkuId.SkuId || 0}&sellerid=${sellerId}`;
    return httpRequest(url, 'POST');
  }

  function fetchNewArrivalProductsData(productData, context, sellerId) {
    const productcategory = "";
    let custGuidAPI = ConstantsValues.defaultCustGUID;
    if (context.req.cookies['CustGUID'] && context.req.cookies['CustGUID']!=="") {
      custGuidAPI = context.req.cookies['CustGUID']
    }
    const url = `${Constants.urls.baseUrl}${Constants.endPoints.NewArrivalProduct}clientId=${ConstantsValues.ClientId}&LanguageId=${ConstantsValues.languageId}&currencyCode=${ConstantsValues.currencyCode}&CartGUID=${ConstantsValues.defaultCartGUID}&CustGUID=${custGuidAPI}&pincode=${ConstantsValues.pincode}&Category=${productcategory}&sellerid=${sellerId}`;
    return httpRequest(url, 'GET');
  }

  function fetchFooterPagesLinks(sellerId) {

    let pagename = "";
    
    const loginStatus = Cookies.get('customer-login-status')
    if (sellerId==='0') {
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

    const url = `${Constants.urls.baseUrl}${Constants.endPoints.footer}pagename=${pagename}&cid=1&languageId=2&sellerid=${sellerId}`;
    return httpRequest(url, 'GET');
  }

  function fetchFooterCategoryLinks(sellerId) {
    const url = `${Constants.urls.baseUrl}${Constants.endPoints.MegaMainMenu}ClientId=1&languageId=2&IsForReact=1&sellerid=${sellerId}`;
    return httpRequest(url, 'GET');
  }
  
  export default Product;