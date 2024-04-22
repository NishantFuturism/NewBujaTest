/* eslint-disable indent */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useState } from 'react';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import '../../public/assets1/css/bundle.css';
import '../../public/assets1/css/default.min.css';
import '../../public/assets1/css/font-awesome.min.css';
import '../../public/assets1/css/responsive.min.css';
import '../../public/assets/css/style.min.css';
import { ToastContainer } from 'react-toastify';
import Header from '../components/Header';
import LoadProducts from '../containers/LoadProducts';
import Footer from '../components/Footer/footer';
import { copyShopingCartDetails } from '../containers/HomeScreen/actions';
import 'react-toastify/dist/ReactToastify.css';
import Constants from '@/containers/App/constants';
import Cookies from 'js-cookie';
import { httpRequest } from '@/containers/MainPage/api/apiServices';
import CustomsAPI, { ConstantsValues } from '../containers/MainPage/api/homeServices';
import getDetailsFromDomain from '@/utils/getSellerDetails';
import mycartAPI from '@/containers/MainPage/api/mycartAPI';
export default function dealoftheday({topMenuData, footerPagesLinks, footerCategoryLinks,getDealoftheday,isLoading, sellerDetailsFromDomain} ) {
  const addToCart = useSelector(state => state.addToCart)
  const [loading, setloading] = useState(isLoading ? isLoading: false);
  const [dealoftheDayProduct, setDealoftheDayProduct] = useState(getDealoftheday  || []);
  const [isFilterLoader, setIsFilterLoader] = useState(false);
  const [Seleced, setSeleced] = useState('POP');
  const [shppingcart, setShppingcart] = useState([]);
  
  const sortByfiltersList = [{ ListItem: ' Name (A - Z)', id: 1, value: 'AZ' }, { ListItem: ' Name (Z - A)', id: 2, value: 'ZA' }, { ListItem: 'Price (Low - High)', id: 3, value: 'PLH' }, { ListItem: 'Price (High - Low)', id: 4, value: 'PHL' }, { ListItem: 'Popularity', id: 5, value: 'POP' }]
  const nextData = useSelector(state => state.dealdayProduct)
  console.log("dealpagedta==", nextData, addToCart);
  
  
  const router = useRouter();
  const dispatch = useDispatch();

  

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

  const changeFltr = (newFL) => {
    setSeleced(newFL);
    setIsFilterLoader(true)
    setDealoftheDayProduct([])
    
    if (newFL) {
      if (router && router.pathname !== undefined) {
        const url = router.pathname.split('/')
        
        CustomsAPI.getDealofdayWithPage(1, 100)
          .then(response => {
            setDealoftheDayProduct(response?.Data)
            setloading(false)
          })
          .catch(error => {
            console.log('error:::', error);
          })
          .finally(()=>setIsFilterLoader(false))
      }
    }
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

  return (
    <>
      <Head>
      <title>Shop Deal of the day Products</title>
      <meta name="description" content={`Shop Deal of the day Products`}></meta>
      </Head>
      <ToastContainer
        position="top-right"
      />
      <Header sellerDetailsFromDomain={sellerDetailsFromDomain} topMenuData={topMenuData} />
      <div className="main-wrapper" id="mainwraper">
        <div className="container-fluid" id="shop">
          <div className="row">
            <div className="col-lg-12 promopage">
              <h1>Deal of the day</h1>
              <div className="product-shop-main-wrapper" id="product-listing">
                <div className="col-md-12">
                  {/* <div className='top-bar-right'>
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
                  </div> */}
                </div>
                <div className="shop-product-wrap row " id="show">
                  <input type="hidden" id="hdnMaxPriceForReset" value="0" />
                  <input type="hidden" id="hdnMinPriceForReset" value="0" />
                    <div id="products" className="shop-product-wrap row grid" style={{ display: 'contents' }}>
                    {dealoftheDayProduct && !isFilterLoader && dealoftheDayProduct?.length === 0 ?
                        <div className="col-md-12" style={{ padding: '5%' }}>
                          <div className="alert alert-warning text-center">No more products</div>
                        </div> :
                        (dealoftheDayProduct || []).map(data =>(
                          data.FiltersList.length !==0 ?
                          <div className="col-lg-3 col-md-4 col-sm-6">
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
          </div>
        </div>
      </div>
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
  const getDealoftheday = await fetchDealOfDayProducts(sellerIdMain);
  
  return {
    props: {
      topMenuData: topMenuData,
      footerPagesLinks: footerPagesLinks,
      footerCategoryLinks: footerCategoryLinks,
      getDealoftheday : getDealoftheday?.Data,
      isLoading : true,
      sellerDetailsFromDomain: sellerDetailsFromDomain,
  },
  };
}


function fetchTopMenuData(sellerIdMain) {
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
  const url = `${Constants.urls.baseUrl}${Constants.endPoints.footer}pagename=${pagename}&cid=1&languageId=2&sellerid=${sellerIdMain}`;
  return httpRequest(url, 'GET');
}

function fetchDealOfDayProducts(sellerIdMain) {
  const url = `${Constants.urls.baseUrl}${Constants.endPoints.DealoftheDayPage}ClientId=${ConstantsValues.ClientId}&languageId=${ConstantsValues.languageId}&currencyCode=${ConstantsValues.currencyCode}&CustGUID=${ConstantsValues.defaultCustGUID}&cartGuid=${ConstantsValues.defaultCartGUID}&pincode=${ConstantsValues.pincode}&sortby=MOD&IsgetAll=1&PageNumber=1&PageSize=100&sellerid=${sellerIdMain}`;
  return httpRequest(url, 'GET');
  
}