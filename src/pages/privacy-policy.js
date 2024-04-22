import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Constants from  '../containers/App/constants';
import CustomsAPI, { ConstantsValues } from '../containers/MainPage/api/homeServices';
import Header from '../components/Header';
import { httpRequest } from '@/containers/MainPage/api/apiServices';
import BreadCrumb from "../components/Footer/footerBreadCrumb";
import Head from 'next/head';
////import history from '../../utils/history';
import { useRouter } from 'next/router';
// import { Newsletter } from '../../containers/Newsletter/index';
import '../components/Footer/career.css'
import '../components/Footer/advertise.css'
import getDetailsFromDomain from '@/utils/getSellerDetails';

/*const LazyComponent = dynamic(() => import('../components/Footer/Subfooter'), {
    loading: () => <LogoLoader/> , ssr : true // Fallback shown while loading
  });
export default loadable(LazyComponent);*/

const PrivacyPolicy = ({ privacyPolicyData, sellerIDFromServer, sellerDetailsFromDomain }) => {
  const [Ftr, setFooter] = useState(privacyPolicyData);
  const [Ftr1, setFooter1] = useState('');
  const [menu, setMenu] = useState([]);

  useEffect(()=>{
    localStorage.setItem('sellerID', sellerIDFromServer)
    CustomsAPI.getFooter().then(response => {

      setFooter1(response)
    })
    CustomsAPI.getMegamainmenu().then(response => {
      setMenu(response)
    })
  },[])
  const menu1 = menu.find(res => res.WebPageId === 99);
  // const sendtofooterpage = (e) => {
  //   console.log('ssww', e.target.className);
  //   if (e.target.className === "about-us-react") {
  //     setflag(true)
  //     localStorage.setItem('pagefootert', "about-us")
  //     router.push(`/about-us`)
  //   } else if (e.target.className === "why-adibuja-react") {
  //     setflag(true)
  //     localStorage.setItem('pagefootert', "why-adibuja")
  //     router.push(`/why-adibuja`)
  //   } else if (e.target.className === "how-it-works-react") {
  //     setflag(true)
  //     localStorage.setItem('pagefootert', "how-it-works")
  //     router.push(`/how-it-works`)
  //   } else if (e.target.className === "coming-soon-react") {
  //     setflag(true)
  //     localStorage.setItem('pagefootert', "coming-soon")
  //     router.push(`/coming-soon`)
  //   } else if (e.target.className === "contact-us-react") {
  //     setflag(true)
  //     localStorage.setItem('pagefootert', "contact-us")
  //     router.push(`/contact-us`)
  //   } else if (e.target.className === "careers-react") {
  //     setflag(true)
  //     localStorage.setItem('pagefootert', "careers")
  //     router.push(`/careers`)
  //   } else if (e.target.className === "investors-react") {
  //     setflag(true)
  //     localStorage.setItem('pagefootert', "investors")
  //     router.push(`/investors`)
  //   } else if (e.target.className === "help-and-faq-react") {
  //     setflag(true)
  //     localStorage.setItem('pagefootert', "faq")
  //     router.push(`/faq`)
  //   } else if (e.target.className === "disclaimer-react") {
  //     setflag(true)
  //     localStorage.setItem('pagefootert', "disclaimer")
  //     router.push(`/disclaimer`)
  //   } else if (e.target.className === "cancel-refund-and-exchange-react") {
  //     setflag(true)
  //     localStorage.setItem('pagefootert', "cancel-refund-and-exchange")
  //     router.push(`/cancel-refund-and-exchange`)
  //   } else if (e.target.className === "delivery-policy-react") {
  //     setflag(true)
  //     localStorage.setItem('pagefootert', "delivery-policy")
  //     router.push(`/delivery-policy`)
  //   } else if (e.target.className === "payment-policy-react") {
  //     setflag(true)
  //     localStorage.setItem('pagefootert', "payment-policy")
  //     router.push(`/payment-policy`)
  //   } else if (e.target.className === "terms-and-conditions-react") {
  //     setflag(true)
  //     localStorage.setItem('pagefootert', "terms-and-conditions")
  //     router.push(`/terms-and-conditions`)
  //   } else if (e.target.className === "privacy-policy-react") {
  //     setflag(true)
  //     localStorage.setItem('pagefootert', "privacy-policy")
  //     router.push(`/privacy-policy`)
  //   } else if (e.target.className === "sitemap-react") {
  //     localStorage.setItem('pagefootert', "Sitemap")
  //     router.push(`/Sitemap`)
  //   } else {
  //     // setflag(false)
  //     // localStorage.setItem('pagefootert', e.target.className)
  //     // router.push(`/${e.target.className}`)
  //   }
  //   // if (e.target.href !== '' && e.target.className === '') {
  //   //   history.pop()
  //   // } else {
  //   //   localStorage.setItem('pagefootert', e.target.className)
  //   // }
  // }
  return (
    <>
      <Head>
        <title>{privacyPolicyData?.PageTitle}</title>
        <meta name="description" content={privacyPolicyData?.MetaDescription} />
        <meta name="keywords" content={privacyPolicyData?.MetaKeyword}></meta>
        <meta property="og:title" content={privacyPolicyData?.PageTitle} />
        <meta property="og:url" content={`/${privacyPolicyData?.PageUrl}`} />
        <meta property="og:description" content={privacyPolicyData?.MetaDescription}/>
      </Head>
      <Header sellerDetailsFromDomain={sellerDetailsFromDomain}/>
      <div className='subfooterBreadcrumb'>
      {/*typeof window !== 'undefined' && window.localStorage && <BreadCrumb activepage={localStorage.getItem('footerLinks')} />*/}
      <BreadCrumb activepage="Privacy Policy"/>
      </div>
      <div className='footerContent'>
        {Ftr !== '' && Ftr !== undefined && Ftr.Description && Ftr.Description!=="" ? <span dangerouslySetInnerHTML={{ __html: Ftr.Description }} /> : <div className="container-fluid"><h3 style={{textAlign:'center'}}>Somethign went wrong!</h3></div>}
      </div>
      <footer >
        {/* <Newsletter /> */}
        <br />
        <div className="container-fluid">
          <div className=" footercategory col-lg-12 col-md-12 col-sm-12 col-xs-12 footersocial">
            <div className="indus" id="links">
              {menu1 && menu1.SubMenus.map(itm => (
                <div className="flinksholder" key={itm.SubSubMenus.DisplayName}>
                  <span style={{
                    fontSize: '14px', fontWeight: 'bold', marginTop: '15px',
                  }} >
                    {itm.DisplayName} :
                  </span>
                  {itm.SubSubMenus.map(subItm => (
                    <a href={`/${subItm.PageUrl}`} data-url={subItm.PageUrl}  /*onClick={(e) => productlistpage(subItm.PageUrl, itm.PageUrl,e)}*/ className="flinks">
                      {subItm.DisplayName}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div /*onClick={(e) => sendtofooterpage(e)}*/ >
          {Ftr1 !== '' && Ftr1!==undefined && Ftr1.Description && <span dangerouslySetInnerHTML={{ __html: Ftr1.Description }} />}
        </div>
      </footer>
    </>
  );
}

export async function getServerSideProps(context) {
  const sellerDetailsFromDomain = await getDetailsFromDomain(context.req.headers.host);
  let sellerIdMain = ConstantsValues.defaultSellerID;
  if(sellerDetailsFromDomain?.AdminMemberId) {
    sellerIdMain = sellerDetailsFromDomain.AdminMemberId;
  }
  const privacyPolicyData = await getPrivacyPolicyData(sellerIdMain);
  
  return {
    props: {
      privacyPolicyData: privacyPolicyData,
      sellerIDFromServer: sellerIdMain,
      sellerDetailsFromDomain: sellerDetailsFromDomain
    },
  };
}

function getPrivacyPolicyData(sellerIdMain) {
  const url = `${Constants.urls.baseUrl}${Constants.endPoints.footer}pagename=privacy-policy&cid=1&languageId=2&sellerid=${sellerIdMain}`;
  return httpRequest(url, 'GET');
}
export default PrivacyPolicy;