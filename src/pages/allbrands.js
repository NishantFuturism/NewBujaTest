import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ToastContainer } from 'react-toastify';
import CustomsAPI, { ConstantsValues } from '../containers/MainPage/api/homeServices';
import Header from '../components/Header';
import Footer from '../components/Footer/footer';
import 'react-toastify/dist/ReactToastify.css';
import Constants from '../../src/containers/App/constants';
import { httpRequest } from '../containers/MainPage/api/apiServices';
import getDetailsFromDomain from '@/utils/getSellerDetails';
import Cookies from 'js-cookie';

function ViewAllBrand({allBrandSSR ,numberOfBrands ,topMenuData ,footerPagesLinks ,footerCategoryLinks, sellerDetailsFromDomain}) {
  const [brandList, setBrandList] = useState(allBrandSSR ? allBrandSSR : []);
  const [noOfBrands, setNoOfBrands] = useState(numberOfBrands ? numberOfBrands : []);
  useEffect(() => {
    if (sellerDetailsFromDomain && sellerDetailsFromDomain?.AdminMemberId && sellerDetailsFromDomain?.AdminMemberId!==null) {
      localStorage.setItem('sellerID',sellerDetailsFromDomain?.AdminMemberId)
    }
    CustomsAPI.getBrandList(1, 1000)
      .then(response => {
        setBrandList(response.Data)
        setNoOfBrands(response.TotalNoOfPages)
      })
  }, [])
  return (
    <>
      <ToastContainer
        position="top-right"
      />
      <Header sellerDetailsFromDomain={sellerDetailsFromDomain} topMenuData={topMenuData}/>
      <div className="main-wrapper view-all-brands">
        <div className="container-fluid">
          {
            noOfBrands && noOfBrands !== "" ?
              <h1 className="brand-item-heading">Shop All Brands ({noOfBrands})</h1>
              : <div className='col-lg-12 text-center'>
                <img src='/images/adibuja-logo-animation.gif' alt='' style={{ justifySelf: 'center', width: '80px', height: '80px' }} />
                {/* <i
                  style={{ justifySelf: 'center', marginTop: '10%' }}
                  className="fa fa-spin fa-spinner fa-4x"></i> */}
              </div>
          }
          <div className="row">
            {
              brandList.map((data) => (<div className="col-lg-2 col-sm-6 col-xs-6 col-6 brand-item-detail-container">
                <div className="brand-item-detail">
                  <Link href={`/brands/${data.PageUrl}`}>
                    <img referrerpolicy="no-referrer" src={data.Thumbnail} alt={data.PageUrl} />
                    <span style={{ display: "block" }}>{data.Name}</span>
                  </Link>
                </div>
              </div>))
            }
          </div>
        </div>
      </div>
      <Footer footerPagesLinks={footerPagesLinks} footerCategoryLinks={footerCategoryLinks} newsletterdisplay="no" />
    </>
  );
}
export default ViewAllBrand;

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
  const brands = await getAllBrands(sellerIdMain);

  return {
    props: {
      topMenuData: topMenuData,
      footerPagesLinks: footerPagesLinks,
      footerCategoryLinks: footerCategoryLinks,
      allBrandSSR: brands.Data,
      numberOfBrands: brands.TotalNoOfPages,
      sellerDetailsFromDomain: sellerDetailsFromDomain,
    },
  };
}

const getAllBrands = (sellerIdMain) => {
  const IsgetAll = '1';
  const ClientId = 1;
  const url = `${Constants.urls.baseUrl}${Constants.endPoints.BrandList}ClientId=${ClientId}&IsgetAll=${IsgetAll}&displayAllBrands=${1}&PageNumber=${1}&PageSize=${1000}&sortby${'POP'}&sellerid=${sellerIdMain}`;
  // const url = `https://productionapi.adibuja.com/api/v1/getBrandListForReact?clientId=1&IsgetAll=1&displayAllBrands=1&PageNumber=1&PageSize=9&sortby=MOD`
  return httpRequest(url, 'GET');
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