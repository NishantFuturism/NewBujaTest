import Link from 'next/link';
import Header from '../components/Header';
import App from '../containers/App'
import MainRoute from '@/containers/MainRoute';
import Constants from '@/containers/App/constants';
import Cookies from 'js-cookie';
import configureStore from '@/configureStore';
import { ConstantsValues } from '@/containers/MainPage/api/homeServices';
import { Provider } from 'react-redux';
import { httpRequest } from '@/containers/MainPage/api/apiServices';
import getDetailsFromDomain from '@/utils/getSellerDetails';
const initialState = {};
const store = configureStore(initialState);

const Home = ( {sellerDetailsFromDomain, topMenuData, footerPagesLinks, billBoardBanners, advertiseBanners, footerCategoryLinks, dealOfDayProducts, topSellingProductsData, topTrendingProductsData, featuredProductsData, newArrivalProductsData, brandsDataHomePage, dataCustId} ) => {
  return (
    <>
      <Provider store={store}>
        <MainRoute sellerDetailsFromDomain={sellerDetailsFromDomain} brandsDataHomePage={brandsDataHomePage} newArrivalProductsData={newArrivalProductsData} featuredProductsData={featuredProductsData} topTrendingProductsData={topTrendingProductsData} topSellingProductsData={topSellingProductsData} topMenuData={topMenuData} footerPagesLinks={footerPagesLinks} billBoardBanners={billBoardBanners} advertiseBanners={advertiseBanners} footerCategoryLinks={footerCategoryLinks} dealOfDayProducts={dealOfDayProducts}/>
      </Provider>
    </>

    /*<div style={{ padding: "3rem" }}>
      <h1>Hello, World!</h1>
      <p>Welcome to my Next.js project.</p>
      <Header />
      <ul>
        <li>
          <Link href="/about">
            <span>About Page</span>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <span>Contact Page</span>
          </Link>
        </li>
      </ul>
  </div>*/
  );
};

//export async function getStaticProps(context) {
export async function getServerSideProps(context) {
  //console.log('Context=======>>>', context);
  /*const dealOfDayProducts = await fetchDealOfDayProducts();
  const topSellingProductsData = await fetchTopSellingProductsData();
  const topTrendingProductsData = await fetchTopTrendingProductsData();
  const featuredProductsData = await fetchFeaturedProductsData();
  const newArrivalProductsData = await fetchNewArrivalProductsData();
  const brandsDataHomePage = await fetchBrandsDataHomePage();
  const topMenuData = await fetchTopMenuData();
  const advertiseBanners = await fetchAdvertiseBanners();
  const footerPagesLinks = await fetchFooterPagesLinks();
  const billBoardBanners = await fetchBillBoardBanners();
  const footerCategoryLinks = await fetchFooterCategoryLinks();*/
  const currentUrl = context?.req?.headers?.host || '';
  //Code to get incoming domain request and passit to seller details API
  //const sellerDetailsFromDomain = await fetchSellerDetails();
  const sellerDetailsFromDomain = await getDetailsFromDomain(currentUrl);
  let sellerIdMain = ConstantsValues.defaultSellerID;
  if (sellerDetailsFromDomain && sellerDetailsFromDomain.AdminMemberId && sellerDetailsFromDomain.AdminMemberId!=="") {
    sellerIdMain = sellerDetailsFromDomain.AdminMemberId;
  }
  const [dealOfDayProducts, topSellingProductsData, topTrendingProductsData, featuredProductsData, newArrivalProductsData, topMenuData, advertiseBanners, footerPagesLinks, billBoardBanners, footerCategoryLinks, brandsDataHomePage] = await Promise.all([
    fetchDealOfDayProducts(sellerIdMain),
    fetchTopSellingProductsData(sellerIdMain),
    fetchTopTrendingProductsData(sellerIdMain),
    fetchFeaturedProductsData(sellerIdMain),
    fetchNewArrivalProductsData(sellerIdMain),
    fetchTopMenuData(sellerIdMain),
    fetchAdvertiseBanners(sellerIdMain),
    fetchFooterPagesLinks(sellerIdMain),
    fetchBillBoardBanners(sellerIdMain),
    fetchFooterCategoryLinks(sellerIdMain),
    fetchBrandsDataHomePage(sellerIdMain),
  ]);
  
  // const dataCustId = context.req.cookies['customer-login-status'] || '000000';
  const dataCustId = Cookies.get('customer-login-status')
  return {
      props: {
          sellerDetailsFromDomain: sellerDetailsFromDomain,
          topMenuData: topMenuData,
          footerPagesLinks: footerPagesLinks,
          billBoardBanners: billBoardBanners,
          advertiseBanners: advertiseBanners,
          footerCategoryLinks: footerCategoryLinks,
          dealOfDayProducts: dealOfDayProducts,
          topSellingProductsData: topSellingProductsData,
          topTrendingProductsData: topTrendingProductsData,
          featuredProductsData: featuredProductsData,
          newArrivalProductsData: newArrivalProductsData,
          brandsDataHomePage: brandsDataHomePage,
      },
      //revalidate: 250,
  };
}

// function fetchSellerDetails() {
//   const incomingDomainName = 'primecommerce.adibuja.com';
//   //const incomingDomainName = 'adibuja.com';
//   const url = `${Constants.urls.baseUrl}${Constants.endPoints.getSellerDetails}domainurl=${incomingDomainName}`;
//   return httpRequest(url, 'GET');
// }
function fetchTopMenuData(sellerIdMain) {
  // const url = `${Constants.urls.baseUrl}${Constants.endPoints.MegaMainMenu}ClientId=1&languageId=2&IsForReact=1`;
  const url = `${Constants.urls.baseUrl}${Constants.endPoints.MultiMenu}ClientId=1&languageId=2&IsForReact=1&sellerid=${sellerIdMain}`;

  return httpRequest(url, 'GET');
}

function fetchTopSellingProductsData(sellerIdMain) {
  
  const url = `${Constants.urls.baseUrl}${Constants.endPoints.topsellingai}ClientId=${ConstantsValues.ClientId}&languageId=${ConstantsValues.languageId}&currencyCode=${ConstantsValues.currencyCode}&CustGUID=${ConstantsValues.defaultCustGUID}&cartGuid=${ConstantsValues.defaultCartGUID}&pincode=${ConstantsValues.pincode}&sortby=MOD&IsgetAll=0&PageNumber=1&PageSize=10&SkuDetailid=0&sellerid=${sellerIdMain}`;
  
  return httpRequest(url, 'POST');
}

function fetchTopTrendingProductsData(sellerIdMain) {

  const url = `${Constants.urls.baseUrl}${Constants.endPoints.GetTopTrendingProductList}pincode=${ConstantsValues.pincode}&LanguageId=${ConstantsValues.languageId}&CartGUID=${ConstantsValues.defaultCartGUID}&CustGUID=${ConstantsValues.defaultCustGUID}&clientId=${ConstantsValues.ClientId}&currencyCode=${ConstantsValues.currencyCode}&IsgetAll=0&PageNumber=1&PageSize=10&skudetailid=0&sellerid=${sellerIdMain}`;
  return httpRequest(url, 'GET');
}

function fetchFeaturedProductsData(sellerIdMain) {
  const productcategory = "";
  const url = `${Constants.urls.baseUrl}${Constants.endPoints.FeatureProduct}clientId=${ConstantsValues.ClientId}&LanguageId=${ConstantsValues.languageId}&currencyCode=${ConstantsValues.currencyCode}&CartGUID=${ConstantsValues.defaultCartGUID}&CustGUID=${ConstantsValues.defaultCustGUID}&pincode=${ConstantsValues.pincode}&Category=${productcategory}&sellerid=${sellerIdMain}`;
  return httpRequest(url, 'GET');
}
function fetchNewArrivalProductsData(sellerIdMain) {
  const productcategory = "";
  const url = `${Constants.urls.baseUrl}${Constants.endPoints.NewArrivalProduct}clientId=${ConstantsValues.ClientId}&LanguageId=${ConstantsValues.languageId}&currencyCode=${ConstantsValues.currencyCode}&CartGUID=${ConstantsValues.defaultCartGUID}&CustGUID=${ConstantsValues.defaultCustGUID}&pincode=${ConstantsValues.pincode}&Category=${productcategory}&sellerid=${sellerIdMain}`;
  return httpRequest(url, 'GET');
}

function fetchBillBoardBanners(sellerIdMain) {
  const url = `${Constants.urls.baseUrl}${Constants.endPoints.Billboard}languageId=2&sellerid=${sellerIdMain}`;
  return httpRequest(url, 'GET');
}

function fetchAdvertiseBanners(sellerIdMain) {
  const url = `${Constants.urls.baseUrl}${Constants.endPoints.banners}ClientId=1&sellerid=${sellerIdMain}`;
  return httpRequest(url, 'GET');
}

function fetchFooterCategoryLinks(sellerIdMain) {
  const url = `${Constants.urls.baseUrl}${Constants.endPoints.MegaMainMenu}ClientId=1&languageId=2&IsForReact=1&sellerid=${sellerIdMain}`;
  return httpRequest(url, 'GET');
}

function fetchBrandsDataHomePage(sellerIdMain) {
  const url = `${Constants.urls.baseUrl}${Constants.endPoints.BrandList}ClientId=${ConstantsValues.ClientId}&IsgetAll=0&displayAllBrands=${1}&PageNumber=1&PageSize=100&sortby=${'POP'}&sellerid=${sellerIdMain}`;
  
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

function fetchDealOfDayProducts(sellerIdMain) {
  
  const url = `${Constants.urls.baseUrl}${Constants.endPoints.DealoftheDayPage}ClientId=${ConstantsValues.ClientId}&languageId=${ConstantsValues.languageId}&currencyCode=${ConstantsValues.currencyCode}&CustGUID=${ConstantsValues.defaultCustGUID}&cartGuid=${ConstantsValues.defaultCartGUID}&pincode=${ConstantsValues.pincode}&sortby=MOD&IsgetAll=1&PageNumber=1&PageSize=9&sellerid=${sellerIdMain}`;
  return httpRequest(url, 'GET');

  /*let shippingZip = "411045";
  const startTime = performance.now();
  const url = `${Constants.urls.baseUrl}${Constants.endPoints.DealoftheDayPage}ClientId=${ConstantsValues.ClientId}&languageId=${ConstantsValues.languageId}&currencyCode=${ConstantsValues.currencyCode}&CustGUID=${ConstantsValues.defaultCustGUID}&cartGuid=${ConstantsValues.defaultCartGUID}&pincode=${shippingZip}&sortby=MOD&IsgetAll=1&PageNumber=1&PageSize=9`;
  const apiRequest = httpRequest(url, 'GET');
  apiRequest.then(() => {
    const endTime = performance.now();
    // Calculate the processing time in milliseconds
    const processingTime = endTime - startTime;
    console.log(`API request processed in================ ${processingTime} milliseconds`);
  });*/
  
}


export default Home; 