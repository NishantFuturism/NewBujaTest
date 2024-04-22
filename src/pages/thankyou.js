import React, {useEffect, useState} from 'react';
// import { Modal } from 'react-bootstrap';
import { useInjectReducer } from '@/utils/injectReducer';
import { useInjectSaga } from '@/utils/injectSaga';
import reducer from '../containers/FooterContact/reducer'
import saga from '../containers/FooterContact/saga';
import BreadCrumb from '@/containers/FooterContact/contactbreadcrumb';
import Footer from '../components/Footer/footer';
import Header from '../components/Header';
import { useRouter } from 'next/router';
import Link from 'next/link';
import getDetailsFromDomain from '@/utils/getSellerDetails';
import { ConstantsValues } from '../containers/MainPage/api/homeServices';

function Thankyou() {
  useInjectReducer({ key: 'thankyou', reducer });
  useInjectSaga({ key: 'thankyou', saga });
  const router = useRouter();
  const [sellerDetailsContact, setsellerDetailsContact] = useState([]);

  useEffect(()=>{
    (async ()=>{
      const sellerDetailsFromDomain = await getDetailsFromDomain();
      let sellerIdMain = ConstantsValues.defaultSellerID;
      if(sellerDetailsFromDomain && sellerDetailsFromDomain.AdminMemberId && sellerDetailsFromDomain.AdminMemberId!=="") {
        sellerIdMain = sellerDetailsFromDomain.AdminMemberId;
        setsellerDetailsContact(sellerDetailsFromDomain)      
      }
      localStorage.setItem('sellerID',sellerIdMain);   
    })()
  },[])

  const Contactus = (e) => {
    e.preventDefault()
    router.push({ pathname: '/contact-us' })
  }

  return (
    <>
      <Header/>
      <BreadCrumb activepage="Thank you" />
      <div className="login-wrapper pb-35" style={{ paddingTop: 20 }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
              <main className="site-main" id="primary">
                <div className="user-login">
                  <div className="row">
                    <div className='col-12 col-sm-12 col-md-12 col-lg-8 col-xl-6 offset-lg-2 offset-xl-3'>
                      <div className="login-form error-page text-center suces" style={{ padding: '30px' }}>
                        <h4 className="thank-you-title pb-20">
                          <br /> <b>Thank You! Your form has been submitted successfully.</b>
                          <br /><span> Our customer care representative will get in touch with you shortly.</span>
                        </h4>
                        <span className="spanthankyouspace "></span>
                        <Link href="" onClick={(e) => Contactus(e)}>
                          <button type='button' className="btn-cart  btn-secondary btn-back-black mb-15" id="btnacnt" style={{ color: '#fff !important'}}>
                            <i className="fa fa-phone"> </i>&nbsp; Contact Us</button></Link>
                        <p className="text-center">
                          Please feel free to call our customer care representative at<br />
                          <strong><a href="tel:+91-7058702045"><i className="fa fa-volume-control-phone"></i> +91-7058702045</a></strong>
                          <br />
                        </p>
                        <span className="spanthankyouspace ">&nbsp;</span>
                        <p className="text-center">
                          Our knowledgeable customer care representative is available Monday to Friday – 9:00 am to 6:00 Pm or email us at<br />
                          <strong><Link  href="mailto:contactus@adibuja.com">contactus@adibuja.com</Link></strong>
                          <br />
                        </p>
                        <Link href="/">
                          <button type='button' className="btn-cart  btn-secondary mb-15" id="btnacnt"><i className="fa fa-home"> </i> &nbsp; Go To Homepage</button></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
      {/* </Modal> */}
      <Footer />
    </>
  )
}
export default Thankyou;