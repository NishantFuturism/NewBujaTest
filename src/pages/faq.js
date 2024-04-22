import '@icon/linearicons/linearicons.css';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Constants from  '../containers/App/constants';
import CustomsAPI from '../containers/MainPage/api/homeServices';
import Header from '../components/Header';
import { httpRequest } from '@/containers/MainPage/api/apiServices';
import Footer from '../components/Footer/footer';
import Head from 'next/head';
import BreadCrumb from "../components/Footer/footerBreadCrumb";
////import history from '../../utils/history';
import { useRouter } from 'next/router';
// import { Newsletter } from '../../containers/Newsletter/index';
import '../components/Footer/faq.css'
import '../components/Footer/advertise.css'
import getDetailsFromDomain from '@/utils/getSellerDetails';

/*const LazyComponent = dynamic(() => import('../components/Footer/Subfooter'), {
    loading: () => <LogoLoader/> , ssr : true // Fallback shown while loading
  });
export default loadable(LazyComponent);*/

const Faq = ({ faqData, sellerDetailsFromDomain }) => {
  const [faqdata, setfaqdata] = useState(faqData)
  const [Anwser, setAnwser] = useState('')
  const [Ftr, setFooter] = useState(faqData);
  const [Ftr1, setFooter1] = useState('');
  const [menu, setMenu] = useState([]);
  const [ID, setID] = useState('')
  const [isActive, setisActive] = useState(true)
  // const [enablecollapse, setenablecollapse] = useState(false)
  useEffect(()=>{
    
    CustomsAPI.getFooter().then(response => {

      setFooter1(response)
    })
    CustomsAPI.getMegamainmenu().then(response => {
      setMenu(response)
    })
  },[])
  function handleAnswer(id, anwser) {
     console.log("FAQId",id,anwser)
    setAnwser(anwser)
    setID(id)
    setisActive(!isActive)
    // setenablecollapse(!enablecollapse)
  }
  const menu1 = menu.find(res => res.WebPageId === 99);
  console.log('menu111',menu1)

  // const handleCollapse=()=>{
    
  // }
  return (
    <>
    <Head>
      <title>{faqData?.PageTitle}</title>
      <meta name="description" content={faqData?.MetaDescription} />
      <meta name="keywords" content={faqData?.MetaKeyword}></meta>
      <meta property="og:title" content={faqData?.PageTitle} />
      <meta property="og:url" content={`/${faqData?.PageUrl}`} />
      <meta property="og:description" content={faqData?.MetaDescription}/>
    </Head>
    <Header sellerDetailsFromDomain={sellerDetailsFromDomain}/>
    <div className='subfooterBreadcrumb'>
    <BreadCrumb activepage="FAQ"/>
    </div>
    {/* <div className='footerContent'>
      {Ftr !== '' && Ftr !== undefined && Ftr.Description && Ftr.Description!=="" ? <span dangerouslySetInnerHTML={{ __html: Ftr.Description }} /> : <div class="container-fluid"><h3 style={{textAlign:'center'}}>Somethign went wrong!</h3></div>}
    </div> */}
    <footer >
      {/* <Newsletter /> */}
      <br />
    
    <div className='container mb-5'>
    <div className='text-center pt-3'>
    <h2 className='mb-2'>Answers To Frequently Asked Questions</h2>
    <img referrerPolicy='no-referrer' src="images/faq.png" alt="faq" style={{ maxWidth:'100%' }}  height="100%" /> 
    </div> 
       <div className="row">
            <div className="col-lg-12">
                <div className="card-body">
                    <div className="flex flex-column mb-5 faq-section">
                        <div className="row">
                            <div className="col-md-12">
                             
                                <div id="accordion">
                                {faqdata && faqdata.map((item) => (
                                    <div className="card mb-3">
                                      
                                        <div className="card-header bg-light" id="heading-1">
                                          {console.log('faqdata11',faqdata)}                                        
                                            <h5 className="mb-0">                                                                                   
                                               <a href className={isActive ? 'text-dark' : 'text-dark collapsed'}  role="button" ata-toggle="collapse" aria-expanded="false" style={{ color: '#007bff' }} onClick={() => handleAnswer(item.FAQId, item.Answer)}>{item.Question}                                            
                                               {/* <span>{enablecollapse && ID === item.FAQId ? "-" : "+"}</span> */}
                                               <i className={isActive && ID === item.FAQId ? 'fa fa-minus' : 'fa fa-plus'}></i>    
                                               </a>                                                                                                                                
                                            </h5>
                                                                                 
                                        </div> 
                                                                       
                                        {ID === item.FAQId ?
                                         <div id="collapse-1" className={isActive ? '' : 'collapse'} data-parent="#accordion" aria-labelledby="heading-1">
                                          <div className="card-body">
                                          <h5 className="mb-0"> 
                                              {Anwser !== '' && <div dangerouslySetInnerHTML={{ __html: Anwser }} />}
                                          </h5>                                        
                                          </div> 
                                          </div>  
                                        : null}
                                                                                                     
                                  </div>
                                ))}
                              
                              </div>                               
                           </div>
                        </div>
                      </div>                
                </div>
            </div>
      </div>
    </div>
{/* 
      <div>
        {Ftr1 !== '' && Ftr1!==undefined && Ftr1.Description && <span dangerouslySetInnerHTML={{ __html: Ftr1.Description }} />}
      </div> */}
    </footer>
    <Footer />
  </>

  );
}

export async function getServerSideProps(context) {
  const sellerDetailsFromDomain = await getDetailsFromDomain(context.req.headers.host);
  const faqData = await getFaqData();
  console.log('faqData1212',faqData)
  return {
    props: {
      faqData: faqData,
      sellerDetailsFromDomain: sellerDetailsFromDomain
    },
  };
}

function getFaqData() {
  const url = `${Constants.urls.baseUrl}${Constants.endPoints.FAQ}`;
  // const url = `${Constants.urls.baseUrl}${Constants.endPoints.footer}pagename=faq&cid=1&languageId=2`;
  return httpRequest(url, 'GET');
}
export default Faq;