/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { useLocalStorage } from '@/useLocalStorage';
import { useSelector } from 'react-redux';
//import { Link, useLocation } from 'react-router-dom';
import Link from 'next/link';
import Constants from '../../containers/App/constants';
import '../../../public/assets1/css/default.min.css';
import '../../../public/assets1/css/responsive.min.css';
import '../../../public/assets/css/style.min.css';
// import '../../../public/assets1/css/style.min.css';
// import './career.css'
// import './advertise.css'
// import { Image } from '../Footer/selleradvertise/images';
import CustomsAPI from '../../containers/MainPage/api/homeServices';
import { Newsletter } from '../../containers/Newsletter';
import '@icon/linearicons/linearicons.css';
////import history from '../../utils/history';
import { useRouter } from 'next/router';
import getDetailsFromDomain from '@/utils/getSellerDetails';
import { ConstantsValues } from '../../containers/MainPage/api/homeServices';
// import BreadCrumb from '../../components/Footer/footerBreadCrumb';
function Footer(props) {

  const [PLPCat, setPLPCat] = useLocalStorage('PLPCat',null);
  const [PLPparenturl, setPLPparenturl] = useLocalStorage('PLPparenturl',null);
  const [generatedtoken, setgeneratedtoken] = useLocalStorage('generatedtoken',null);
  const [pagefootert, setpagefootert] = useLocalStorage('pagefootert',null);

  const router = useRouter();
  const [Ftr, setFooter] = useState(props?.footerPagesLinks);
  // const [Megamainmenu, setMegamainmenu] = useState([]);
  const [menu, setMenu] = useState(props?.footerCategoryLinks);
  const [flag, setflag] = useState(false);
  const [visible, setVisible] = useState(false)
  // const [FirstCall, setFirstCall] = useState(0);
  // const [page, setpage] = useState(false);
  const footerData = useState(props.footerPagesLinks);
  const sendOtpApiResponse = useSelector(state => state.login)
  //const location = useLocation();
  const checkValues = ["/category/", "/product/", "allbrands", "/"];
 
  useEffect(() => {
    if (footerData !== undefined) {
      //setFooter(footerData.Ftr)
      setflag(false)
      // setMegamainmenu(footerData.megaMenuResp)
    }
  }, [footerData])
  
  useEffect(() => {
    (async ()=>{
      const sellerDetailsFromDomain = await getDetailsFromDomain();
      let sellerIdMain = ConstantsValues.defaultSellerID;
      if(sellerDetailsFromDomain && sellerDetailsFromDomain.AdminMemberId && sellerDetailsFromDomain.AdminMemberId!=="") {
        sellerIdMain = sellerDetailsFromDomain.AdminMemberId;
      }
      localStorage.setItem('sellerID',sellerIdMain);
      CustomsAPI.getMegamainmenu().then(response => {
        setMenu(response)
      })
      CustomsAPI.getFooter().then(response => {
        setFooter(response)
      })
    })()    
  }, [])

  // useEffect(() => {
  //    if(FirstCall > 0){
  //    CustomsAPI.getFooter().then(response => {
  //      setFooter(response)
  //    })
  //    }
  // }, [router.asPath,sendOtpApiResponse])

  // useEffect(() => {
  //   if (props.onclick === true) {
  //     history.push('/subfooter')
  //   }
  // }, [])
  
  const menu1 = menu?.find(res => res.WebPageId === 99);

  function productlistpage(pageurl, patrentcaturl,e) {
    //e.preventDefault();
    setPLPCat(pageurl)
    setPLPparenturl(patrentcaturl)
    // return router.push(`/${pageurl}`, { isURLChange: pageurl })
    /*return router.push(
      {
        pathname: `/${pageurl}`, // not router.asPath
        // isURLChange: pageurl,
      })*/
  }
  useEffect(() => {
    if (flag === true) {
      // return history.push('/subfooter')
    }
  }, [flag])
  /* const sendtofooterpage = (e) => {
    // console.log('ssww', e, e.target.className);
    localStorage.setItem('pagefootert', e.target.className)
    if (e.target.href !== '' && e.target.className === '') {
      history.pop()
    } else {
      localStorage.setItem('pagefootert', e.target.className)
      setflag(true)
      // history.push('/subfooter')
      // setpage(true)
    }
    // const data = document.getElementsByClassName()
  } */
  // useEffect(() => {
  //   setFirstCall(FirstCall + 1)
  // }, [])
  // useEffect(() => {
  //   if (page === true) {
  //     // window.location.reload()
  //   }
  // }, [page])
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true)
    }
    else if (scrolled <= 300) {
      setVisible(false)
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.addEventListener('scroll', toggleVisible);
    }
  })
  //window.addEventListener('scroll', toggleVisible);
  return (
    <footer className='newFooterContent' >
      {
        checkValues.some(el => router.pathname.includes(el)) ? "" : <Newsletter />
      }
      {/* newsletterend */}
      <div className="container-fluid">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 footersocial">
          {
            router && router.pathname==='/' ?
            <div className="home-heading"><h1>Adibuja: Manifest Your Nature</h1></div>
            : <div className="home-heading"><h2>Adibuja: Manifest Your Nature</h2></div>
          }
          
          <div className="indus" id="links">
            {menu1 && menu1.SubMenus.map((itm,prtIndex) => (
              <div className="flinksholder" key={prtIndex}>
                <span style={{
                  fontSize: '14px', fontWeight: 'bold', marginTop: '15px',
                }} >
                  
                  {itm.DisplayName} :
                </span>
                {itm.SubSubMenus.map((subItm,chdIndex) => (
                  <Link href={`/${subItm.PageUrl}`} data-url={subItm.PageUrl} key={chdIndex} onClick={(e) => productlistpage(subItm.PageUrl, itm.PageUrl,e)} className="flinks">
                    {subItm.DisplayName}
                   
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div /*onClick={(e) => sendtofooterpage(e)}*/ >
        {Ftr !== '' && Ftr!==undefined && Ftr.Description && <span dangerouslySetInnerHTML={{ __html: Ftr.Description }} />}
      </div>
      <div className='scroll-top' onClick={scrollToTop} style={{ display: visible ? 'inline' : 'none' }}>
        <i className="fa fa-angle-up" />
      </div>
    </footer>
  );
}
export default Footer;
