/* eslint-disable indent */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
//import { useLocation } from 'react-router-dom';
import { useRouter } from 'next/router';
import '../../../public/assets1/css/bundle.css';
import '../../../public/assets1/css/default.min.css';
import '../../../public/assets1/css/font-awesome.min.css';
import '../../../public/assets1/css/responsive.min.css';
// import '../../../public/assets1/css/style.min.css';
import '../../../public/assets/css/style.min.css';
import { ToastContainer } from 'react-toastify';
import Header from '../../components/Header';
// import SubNavigation from '../../components/SubNavigation';
import LoadProducts from '../../containers/LoadProducts';
import BrandAPI from '../../containers/MainPage/api/shopbybrand';
import ToppSellingOriginal  from '../../containers/ToppSellingOriginal/index';
import Footer from '../../components/Footer/footer';
import { copyShopingCartDetails } from '../../containers/HomeScreen/actions';
import BreadCrumb from '../../containers/MyAccount/myAccountBreadcrumb';
import 'react-toastify/dist/ReactToastify.css';
import Constants from '@/containers/App/constants';
import Cookies from 'js-cookie';
import { httpRequest } from '@/containers/MainPage/api/apiServices';
import { ConstantsValues } from '../../containers/MainPage/api/homeServices';
import getDetailsFromDomain from '@/utils/getSellerDetails';
import mycartAPI from '@/containers/MainPage/api/mycartAPI';

export default function BrandProducts({topMenuData, footerPagesLinks, footerCategoryLinks,getBrandProducts,isLoading, pageHeading, sellerDetailsFromDomain} ) {
  const brandlistdata = useSelector(state => state.homeScreen)
  const addToCart = useSelector(state => state.addToCart)
  const [urlpage, seturlpage] = useState('');
  const [brandName, setBrandName] = useState('')
  const [loading, setloading] = useState(isLoading ? isLoading: false);
  const [brandproductdata, setbrandproductdata] = useState(getBrandProducts  || []);
  const [isFilterLoader, setIsFilterLoader] = useState(false);
  const [Seleced, setSeleced] = useState('POP');
  const sortByfiltersList = [{ ListItem: ' Name (A - Z)', id: 1, value: 'AZ' }, { ListItem: ' Name (Z - A)', id: 2, value: 'ZA' }, { ListItem: 'Price (Low - High)', id: 3, value: 'PLH' }, { ListItem: 'Price (High - Low)', id: 4, value: 'PHL' }, { ListItem: 'Popularity', id: 5, value: 'POP' }]
  const nextData = useSelector(state => state.ToppSelling)
  const [shppingcart, setShppingcart] = useState([]);
  
  const router = useRouter();
  //const Location = useLocation()
  //console.log('location', Location);
  const dispatch = useDispatch()
  useEffect(() => {
    if (sellerDetailsFromDomain && sellerDetailsFromDomain?.AdminMemberId && sellerDetailsFromDomain?.AdminMemberId!==null) {
      localStorage.setItem('sellerID',sellerDetailsFromDomain?.AdminMemberId)
    }
    window.scroll(0, 0)
  }, []);
  useEffect(() => {
    if (addToCart !== undefined) {
      dispatch(copyShopingCartDetails(addToCart.shoppingcartDetails))
    }
  }, [addToCart]);

  
  useEffect(() => {
    setloading(true)
    if (router && router.pathname !== undefined) {
      //const url = router.pathname.split('/')
      //console.log('url', router.query.brandName);
      BrandAPI.brandlistproduct(router.query.brandName, Seleced)
        .then(response => {
          
          setbrandproductdata(response.skuListingModels)
          setloading(false)
        })
        .catch(error => {
          console.log('error:::', error);
        });
      seturlpage(router.query.brandName)
    }
  }, [router])
  const changeFltr = (newFL) => {
    setSeleced(newFL);
    setIsFilterLoader(true)
    setbrandproductdata([])
    
    if (newFL) {
      if (router && router.pathname !== undefined) {
        const url = router.pathname.split('/')
        
        BrandAPI.brandlistproduct(urlpage, newFL)
          .then(response => {
            
            setbrandproductdata(response.skuListingModels)
            setloading(false)
          })
          .catch(error => {
            console.log('error:::', error);
          })
          .finally(()=>setIsFilterLoader(false))
      }
    }
    else {
      // SearchAPI.getsearchlist(localStorage.getItem('search'), "", "", "", "", "", newFL)
      //   .then(response => {
      //     console.log("responseresponse", response);
      //     setProductCount(response.skuListingModels && response.skuListingModels.length)
      //     setfilterproduct(response.skuListingModels)
      //     setFilterflag(true)
      //   })
    }
    // const P = sortByfiltersList.find(i => i.ListItem === newFL);
    // setFiltered(P);
  };
  useEffect(() => {
    if (addToCart !== undefined) {
      
      setShppingcart(addToCart.shoppingcartDetails)
    }
    mycartAPI.getShoppingcartDetails()
    .then((res) => {
      setShppingcart(res)
    }) 
  }, [addToCart]);
  // console.log(urlpage);
  return (
    <>
      <Head>
      {/* <title>{urlpage && urlpage.charAt(0).toUpperCase() + urlpage.slice(1).replace(/\-/g,' ')}</title> */}
      <title>Shop {pageHeading && pageHeading.charAt(0).toUpperCase() + pageHeading.slice(1).replace(/\-/g,' ')} Products</title>
      <meta name="description" content={`Shop ${pageHeading && pageHeading.charAt(0).toUpperCase() + pageHeading.slice(1).replace(/\-/g,' ')} Products`}></meta>
      </Head>
      <ToastContainer
        position="top-right"
      // draggable={true}
      // autoClose={50000}
      />
      <Header sellerDetailsFromDomain={sellerDetailsFromDomain} topMenuData={topMenuData} />
      <BreadCrumb myAccount="Brand" activepage={urlpage} />
      {/* <SubNavigation /> */}
      <div className="main-wrapper" id="mainwraper">
        <div className="container-fluid" id="shop">
          <div className="row">
            <div className="col-lg-12 brandpage">
              <h1>{pageHeading && pageHeading.charAt(0).toUpperCase() + pageHeading.slice(1).replace(/\-/g,' ')}</h1>
              <div className="product-shop-main-wrapper" id="product-listing">
                {/* <div className="shop-baner-img mb-70">
                  <br />
                  <div id="paginginfo" data-itemcount="" data-paginationlimit="40" data-filters="" data-page="1"
                    data-limit="40"></div>
                </div> */}
                {/* <div className="shop-top-bar mb-30">
                  <div className="row" id="pageTopFilters">
                    <div className="col-md-6">
                      <div className="top-bar-left">
                        <div className="product-page">
                          <div className="showingleft">Showing <span id="start-index">1</span> to <span id="end-index">1</span> of
                            <span id="total-product-count">1</span> (<span id="current-page">1</span> page)</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="top-bar-right">
                        <div className="per-page">
                          <p className="showleft">Show : </p>
                          <select className="nice-select" name="limit"
                            onChange="if (!window.__cfRLUnblockHandlers) return false; ChangeBrandLimit(this.value)"
                            id="pagination_limit111" style={{ display: 'none' }}>
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                            <option value="40" selected="">40</option>
                            <option value="50">50</option>
                            <option value="60">60</option>
                            <option value="70">70</option>
                            <option value="100">100</option>
                          </select>
                          <div className="nice-select" ><span className="current">40</span>
                            <ul className="list">
                              <li data-value="10" className="option">10</li>
                              <li data-value="20" className="option">20</li>
                              <li data-value="30" className="option">30</li>
                              <li data-value="40" className="option selected">40</li>
                              <li data-value="50" className="option">50</li>
                              <li data-value="60" className="option">60</li>
                              <li data-value="70" className="option">70</li>
                              <li data-value="100" className="option">100</li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-short">
                          <p className="sortleft">Sort By : </p>
                          <select className="nice-select" name="sortby"
                            onChange="if (!window.__cfRLUnblockHandlers) return false; ChangeSortOrder(this.value)"
                            id="sortby_limit" style={{ display: 'none' }}>
                            <option value="AZ"> Name(A - Z)</option>
                            <option value="ZA">Name(Z - A)</option>
                            <option value="PLH"> Price(Low - High)</option>
                            <option value="PHL"> Price(High - Low)</option>
                            <option value="POP" selected="">Popularity</option>
                          </select>
                          <div className="nice-select" ><span className="current">Popularity</span>
                            <ul className="list">
                              <li data-value="AZ" className="option"> Name(A - Z)</li>
                              <li data-value="ZA" className="option">Name(Z - A)</li>
                              <li data-value="PLH" className="option"> Price(Low - High)</li>
                              <li data-value="PHL" className="option"> Price(High - Low)</li>
                              <li data-value="POP" className="option selected">Popularity</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                <div className="col-md-12">
                  <div className='top-bar-right'>
                    <div className='product-view-mode' id="made" >
                      <div className="product-short" id="sortby">
                        <p>Sort By : </p>
                        &nbsp; &nbsp;
                        <select
                          className="nice-select"
                          name="sortby"
                          // onChange=""
                          id="sortby_limit"
                          // style={{ display: "none" }}
                          onChange={event => changeFltr(event.target.value)} value={Seleced}
                        >
                          {sortByfiltersList.map(itm => (
                            // console.log('chk100',itm)
                             <option value={itm.value}>{itm.ListItem}</option>                         
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="shop-product-wrap row " id="show">
                  <input type="hidden" id="hdnMaxPriceForReset" value="0" />
                  <input type="hidden" id="hdnMinPriceForReset" value="0" />
                  
                    <div id="products" className="shop-product-wrap row grid" style={{ display: 'contents' }}>
                      {brandproductdata && !isFilterLoader && brandproductdata.length === 0 ?
                        <div className="col-md-12" style={{ padding: '5%' }}>
                          <div className="alert alert-warning">No more products</div>
                        </div> :
                        (brandproductdata || []).map(data =>(
                          data.FiltersList.length !==0 ?
                          <div className="col-lg-3 col-md-4 col-sm-6 brand-product">
                          <LoadProducts data={data} shppingcart={shppingcart} skulisting />
                        </div>
                        :
                        null
                        )                        
                        )}
                    </div>
                  <div id="quick_views">
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-12 ">
              <div className="pagination-area pt-35 pb-20 mb-30">
                <div className="row">
                  <div className="col-12">
                    <ul style={{ margin: 0 }} className="pagination pagination-box"></ul>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <ToppSellingOriginal deal={nextData && nextData.dealData} />
      <Footer footerPagesLinks={footerPagesLinks} footerCategoryLinks={footerCategoryLinks} />
    </>
  )
}


export async function getServerSideProps(context) { 
  const currentUrl = context?.req?.headers?.host || '';
  const sellerDetailsFromDomain = await getDetailsFromDomain(currentUrl);
  let sellerIdMain = ConstantsValues.defaultSellerID;
  if (sellerDetailsFromDomain && sellerDetailsFromDomain.AdminMemberId && sellerDetailsFromDomain.AdminMemberId!=="") {
    sellerIdMain = sellerDetailsFromDomain.AdminMemberId;
  }
  const topMenuData = await fetchTopMenuData(sellerIdMain);
  const footerPagesLinks = await fetchFooterPagesLinks(sellerIdMain);
  const footerCategoryLinks = await fetchFooterCategoryLinks(sellerIdMain);
  const getBrandProducts = await fetchListByBrand(context.query.brandName,'POP',sellerIdMain);
  const pageHeading  = context.query.brandName;
  
  return {
    props: {
      topMenuData: topMenuData,
      footerPagesLinks: footerPagesLinks,
      footerCategoryLinks: footerCategoryLinks,
      getBrandProducts : getBrandProducts.skuListingModels,
      pageHeading: pageHeading,
      isLoading : true,
      sellerDetailsFromDomain: sellerDetailsFromDomain,
  },
  };
}


function fetchTopMenuData(sellerIdMain) {
  // const url = `${Constants.urls.baseUrl}${Constants.endPoints.MegaMainMenu}ClientId=1&languageId=2&IsForReact=1`;
  const url = `${Constants.urls.baseUrl}${Constants.endPoints.MultiMenu}ClientId=1&languageId=2&IsForReact=1&sellerid=${sellerIdMain}`;

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
  //const pagename = localStorage.getItem('CustGUID') === null ? 'react-guest' : 'react-auth'
  const url = `${Constants.urls.baseUrl}${Constants.endPoints.footer}pagename=${pagename}&cid=1&languageId=2&sellerid=${sellerIdMain}`;
  return httpRequest(url, 'GET');
}

function fetchListByBrand(pageurl,sortby,sellerIdMain) {
  //Note LocalStorage is not accessible so setting Default values for now but in future we need to set the values from cookies
  const url = `${Constants.urls.baseUrl}${Constants.endPoints.getbrandlistproducts}clientId=${ConstantsValues.ClientId}&pincode=${ConstantsValues.pincode}&LanguageId=${ConstantsValues.languageId}&currencyCode=${ConstantsValues.currencyCode}&CustGUID=${ConstantsValues.defaultCustGUID}&CartGUID=${ConstantsValues.defaultCartGUID}&ManufacturerPageURL=${pageurl}&limit=${1000}&sortby=${sortby}&IsgetAll=${1}&sellerid=${sellerIdMain}`;
  return httpRequest(url, 'GET',);
  
}