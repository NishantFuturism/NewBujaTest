import Head from 'next/head';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import Script from 'next/script';
import { useRouter } from 'next/router';
import getDetailsFromDomain from '@/utils/getSellerDetails';
import { ConstantsValues } from './containers/MainPage/api/homeServices';
const Layout = ({ children }) => {
const router = useRouter();
const [isHeaderRender,setIsHeaderRender] = useState(false)
const [isGoogleDivThere,setIsGoogleDivThere] = useState(false)
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

  useEffect(()=> {
    if (window.localStorage) {
      const custGuid = window.localStorage.getItem('CustGUID');
      if (custGuid) {
        document.body.setAttribute('data-custguid', window.atob(custGuid));
      } else {
        document.body.setAttribute('data-custguid', '00000000-0000-0000-0000-000000000000');
      }
    }
  },[]);

  useEffect(() => {
    if(typeof window !== 'undefined' && window.localStorage){
     setTimeout(() => {
      const isHeaderEmpty =  document.getElementById('targetHeader')
    //  if(isHeader){
    //   document.getElementById('targetHeader') == '';
    //  }
     setIsHeaderRender(isHeaderEmpty  ? true : false)

     }, 500);
     
    }
  },[router])



  

  // useEffect(() => {
  //  if(isHeaderRender){
  //   setIsGoogleDivThere(true)
  //  }else{
  //   setIsGoogleDivThere(false)
  //  }
   
  // },[isHeaderRender])

  
  const { isfallback, events } = useRouter()

    const googletranslateelementinit = () => {
      new google.translate.TranslateElement({ pagelanguage: 'en' }, 'google_element')
      $(".goog-logo-link").empty();
      $('.goog-te-gadget').html($('.goog-te-gadget').children());
      $('.goog-te-gadget span').remove();

    }
  
    useEffect(() => {
     
      const id = 'google-translate-script'
  
      const addscript = () => {
        const s = document.createElement('script')
        s.setAttribute('src', 'https://translate.google.com/translate_a/element.js?cb=googletranslateelementinit')
        s.setAttribute('id', id)
        const q = document.getElementById(id)
        if (!q) {
          document.body.appendChild(s)
          window.googletranslateelementinit = googletranslateelementinit
        }
      }
  
      const removescript = () => {
        $(".goog-logo-link").empty();
      $('.goog-te-gadget').html($('.goog-te-gadget').children());
      $('.goog-te-gadget span').remove();
        const q = document.getElementById(id)
        if (q) q.remove()
        const w = document.getElementById('google_element')
        if (w) w.innerhtml = ''
      }
  
      // isfallback || addscript()
  
      // events.on('routechangestart', removescript)
      // events.on('routechangecomplete', addscript)
  
      // return () => {
      //   events.off('routechangestart', removescript)
      //   events.off('routechangecomplete', addscript)
      // }
      if(isHeaderRender && localStorage.getItem('sellerID') === '0'){
       if(document.getElementById('targetHeader')){
        document.getElementById('targetHeader').innerHTML == ''
       }
        addscript()
      }else{
        
        // if(typeof window !== 'undefined' && window.localStorage && document.getElementById(':1.container')){
        //   let g = document.getElementById(':1.container');
        //   g.style.display = 'none'        
        // }
       
        removescript()
      }
      
    }, [isHeaderRender])

  return (
    <>
      <Head>
      <meta name="description" content="Adibuja completely alters your experience of purchasing. With a few clicks, you can order online thereby avoiding traffic jams, parking, carrying heavy bags back home. In addition to this, you also save time spent on the billing lines. We save not only your precious time but also your hard-earned money by offering you products at the lowest rates possible. Happy shopping!!!"></meta>
      <meta name="keywords" content="Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books, Fruits and Vegetables, Staples, Dairy, Packages Foods, Home care, Personal Care" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      <meta name='google-translate-customization' content='2a346d14a229c668-7e7397a8cc152430-g725eaceb7864f0fd-12' />
      {typeof window !== 'undefined' && window.localStorage && localStorage.getItem('sellerID') == '0' ?  <link rel="icon" fetchpriority="high" href="/images/favicon.ico" /> : null }

      <title>Explore Best Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More with Amazing Offers!</title>
      <script src="https://cdn.razorpay.com/widgets/affordability/affordability.js"></script>
      <script src="https://code.jquery.com/jquery-3.6.0.min.js" />
      <script type="text/javascript" src="https://devadmin.adibuja.com/scripts/screenrecord/tracker.js" async />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                if (window.localStorage) {
                  const custGuid = window.localStorage.getItem('CustGUID');
                  if (custGuid) {
                    document.body.setAttribute('data-custguid', window.atob(custGuid));
                  } else {
                    document.body.setAttribute('data-custguid', '00000000-0000-0000-0000-000000000000');
                  }
                }
              `,
            }}
          />  

        {/*}
      <script type="text/javascript"> 
      {`
        window.__lo_site_id = 241826; 
        (function () { 
        var wa = document.createElement('script'); wa.type = 'text/javascript'; wa.async = true; 
        wa.src = 'https://d10lpsik1i8c69.cloudfront.net/w.js'; 
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(wa, s); 
        })(); 
      `}
      </script>
      <script type="text/javascript">
        {`
          (function (w, d, s, l, i) { 
            w[l] = w[l] || []; w[l].push({ 
            'gtm.start': 
            new Date().getTime(), event: 'gtm.js' 
            }); var f = d.getElementsByTagName(s)[0], 
            j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src = 
            'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f); 
            })(window, document, 'script', 'dataLayer', 'GTM-TC8S673');
        `}
      </script>
      <script type=" text/javascript"> 
      {`
        !function(f,b,e,v,n,t,s) 
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod? 
        n.callMethod.apply(n,arguments):n.queue.push(arguments)}; 
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0'; 
        n.queue=[];t=b.createElement(e);t.async=!0; 
        t.src=v;s=b.getElementsByTagName(e)[0]; 
        s.parentNode.insertBefore(t,s)}(window, document,'script', 
        'https://connect.facebook.net/en_US/fbevents.js'); 
        fbq('init', '368359688407589'); 
        fbq('track', 'PageView'); 
      `}
        </script>*/}
      
      </Head>
      {typeof window !== 'undefined' && localStorage.getItem('sellerID') === '0'?    
      <div>
      {isHeaderRender && typeof window !== 'undefined' && window.localStorage && document.getElementById('targetHeader') && document.getElementById('targetHeader').innerHTML == '' && (<div className="black-bg" style={{height : '60px'}}>
      <div className="black-bg newContainerlayout" id="newMobilecontainer">
      <div className="selectlangOnheader">
                 
                     <div className="header-top-left" id="txtcentr">
                         <ul>
                             <li><a href="mailto:contactus@adibuja.com"><i className="fa fa-envelope">&nbsp; </i> <span>Email: contactus@adibuja.com</span></a></li>
                             <li><a href="tel:+91-7058702045"><i className="fa fa-phone"> </i> <span>+91-7058702045</span></a></li>
                         </ul>
                     </div>
                 
                
                     <div className="box" id="MyAccountDiv">
                         <ul>
                             <li className="settings">
                                 <div id="google_element"/>
                                    
                             </li>
     
                         </ul>
                     </div>
                     </div>
                     </div>
             </div>        
      )
      }
      </div>
      :
      null
      }
      {children}
    </>
  );
};
export default Layout;