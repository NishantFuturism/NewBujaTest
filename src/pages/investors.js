import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Constants from  '../containers/App/constants';
import CustomsAPI from '../containers/MainPage/api/homeServices';
import Header from '../components/Header';
import Head from 'next/head';
import { httpRequest } from '@/containers/MainPage/api/apiServices';
import BreadCrumb from "../components/Footer/footerBreadCrumb";
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

const Investors = ({ investorsData, sellerDetailsFromDomain }) => {
  const [Ftr, setFooter] = useState(investorsData);
  const [Ftr1, setFooter1] = useState('');
  const [menu, setMenu] = useState([]);

  useEffect(()=>{
    
    CustomsAPI.getFooter().then(response => {

      setFooter1(response)
    })
    CustomsAPI.getMegamainmenu().then(response => {
      setMenu(response)
    })
  },[])
  const menu1 = menu.find(res => res.WebPageId === 99);
  
  return (
    <>
      <Head>
        <title>{investorsData?.PageTitle}</title>
        <meta name="description" content={investorsData?.MetaDescription} />
        <meta name="keywords" content={investorsData?.MetaKeyword}></meta>
        <meta property="og:title" content={investorsData?.PageTitle} />
        <meta property="og:url" content={`/${investorsData?.PageUrl}`} />
        <meta property="og:description" content={investorsData?.MetaDescription}/>
      </Head>
      <Header sellerDetailsFromDomain={sellerDetailsFromDomain}/>
      <div className='subfooterBreadcrumb'>
      {/*typeof window !== 'undefined' && window.localStorage && <BreadCrumb activepage={localStorage.getItem('footerLinks')} />*/}
      <BreadCrumb activepage="Investors"/>
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
  const investorsData = await getInvestorsDataData();
  
  return {
    props: {
      investorsData: investorsData,
      sellerDetailsFromDomain: sellerDetailsFromDomain
    },
  };
}

function getInvestorsDataData() {
  const url = `${Constants.urls.baseUrl}${Constants.endPoints.footer}pagename=investors&cid=1&languageId=2`;
  return httpRequest(url, 'GET');
}
export default Investors;