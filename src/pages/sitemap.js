import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Constants from  '../containers/App/constants';
import CustomsAPI from '../containers/MainPage/api/homeServices';
import Header from '../components/Header';
import { httpRequest } from '@/containers/MainPage/api/apiServices';
import BreadCrumb from "../components/Footer/footerBreadCrumb";
////import history from '../../utils/history';
import { useRouter } from 'next/router';
// import { Newsletter } from '../../containers/Newsletter/index';
import '../components/Footer/sitemap.css'
import '../components/Footer/advertise.css'
import getDetailsFromDomain from '@/utils/getSellerDetails';

/*const LazyComponent = dynamic(() => import('../components/Footer/Subfooter'), {
    loading: () => <LogoLoader/> , ssr : true // Fallback shown while loading
  });
export default loadable(LazyComponent);*/

const Sitemap = ({ sitemapData, sellerDetailsFromDomain }) => {
  const [Ftr, setFooter] = useState(sitemapData);
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
      <Header sellerDetailsFromDomain={sellerDetailsFromDomain}/>
      <div className='subfooterBreadcrumb'>
      {/*typeof window !== 'undefined' && window.localStorage && <BreadCrumb activepage={localStorage.getItem('footerLinks')} />*/}
      <BreadCrumb activepage="Sitemap"/>
      </div>
      
      <footer >
        {/* <Newsletter /> */}
        <br />
        <h1 style={{textAlign:'center'}}>Sitemap</h1>
        <div id="divCategoryMenuList" >
          <div className="row">
            <div className="col-12">
              <div className="main-menu-categories">
                <nav id="mobile-menu-sitemapfix">
                    <ul>
                        <li className="static">
                            <ul className="mega-menu mega-full">
                                <li> <Link href="/">Home </Link></li>                                    
                                    <li>
                                        <Link href="">Customer</Link>
                                        <ul>
                                            <li><Link href="/cart/">My Cart</Link></li>
                                            <li><Link href="/login/">Login</Link></li>
                                            <li><Link href="/register/">Register</Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link href="">Let Us Help You</Link>
                                        <ul>
                                            <li><Link href="/payment-policy/">Payment Policy</Link></li>
                                            <li><Link href="/delivery-policy/">Delivery Policy</Link></li>
                                            <li><Link href="/cancel-refund-and-exchange/">Return & Exchange</Link></li>
                                            <li><Link href="/privacy-policy/">Privacy Policy</Link></li>
                                            <li><Link href="/terms-and-conditions/">Terms & Conditions</Link></li>
                                            <li><Link href="/disclaimer/">Disclaimer</Link></li>
                                            <li><Link href="/faq/">Help & FAQ</Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link href="">Seller</Link>
                                        <ul>
                                            <li><Link href="https://seller.adibuja.com/">Login</Link></li>
                                            <li><Link href="/seller-register/">Become A Seller</Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link href="/advertise-with-us/">Advertise With Us</Link>
                                    </li>
                                    <li>
                                        <Link href="javascript:void(0);">Get To Know Us</Link>
                                        <ul>
                                            <li><Link href="/about-us/">About Adibuja</Link></li>
                                            <li><Link href="/why-adibuja/">Why Adibuja</Link></li>
                                            <li><Link href="/how-it-works/">How It Works</Link></li>                                                
                                            <li><Link href="/contact-us/">Contact Us</Link></li>
                                            <li><Link href="/careers/">Careers</Link></li>
                                            <li><Link href="/investors/">Investors</Link></li>
                                        </ul>
                                    </li>   
                                    {
                                      Ftr.map(res=>(
                                        <li className="mega-title">
                                          <Link href="">{res.DisplayName}</Link>
                                          <ul>
                                              {
                                                res.SubCatgories.map(subCat=>(
                                                  <li><Link href={`/category/${res.PageUrl}/${subCat.PageUrl}`}>{subCat.DisplayName}</Link></li>
                                                ))
                                              }
                                          </ul>
                                        </li>
                                      ))
                                    }
                                
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
            </div>  
          </div>
          
        </div>



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
  const sitemapData = await getSiteMapData();
  return {
    props: {
      sitemapData: sitemapData,
      sellerDetailsFromDomain: sellerDetailsFromDomain
    },
  };
}

function getSiteMapData() {
  const url = `${Constants.urls.baseUrl}${Constants.endPoints.categories}languageId=2`;
  return httpRequest(url, 'GET');
}
export default Sitemap;