/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-unused-expressions */
/**
 *
 * HomeScreen
 *
 */
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
// import {
//   Carousel
// } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useInjectReducer } from '@/utils/injectReducer';
import { useInjectSaga } from '@/utils/injectSaga';
import Constants from '../App/constants';
import '../../../public/assets1/css/responsive.min.css';
// import '../../../public/assets1/css/style.min.css';
import '../../../public/assets/css/style.min.css';
import { copyShopingCartDetails, defaultAction } from './actions';
import { defaultActiondeal } from '../DealdayProductOriginal/actions'
import reducer from './reducer';
import saga from './saga';
import { useRouter } from 'next/router';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BouncingDotsLoader from '../../components/BouncingDotsLoader';
// import Header from '../../components/Header';
// import Footer from '../../components/Footer';
// import Header from '../../components/Header';
// //import history from '../../utils/history'; 

import CategoryContent from '../CategoryContent/index';
import DealdayProductOriginal from '../DealdayProductOriginal';
// import { RecentlyViewProduct } from '../RecentlyViewProduct';
// import ReorderProduct from '../ReorderProduct';
// import { ShopBrand } from "../ShopBrand/index";
import ToppSellingOriginal from '../ToppSellingOriginal';

////import history from '../../utils/history';

// import { Carousel } from 'react-bootstrap';
import { ReorderProduct } from '../ReorderProduct';
import { RecommendedProduct } from '../RecommendedProduct/index'
import  ShopBrand  from '../ShopBrand/index';
// import { WishlistPaged } from '../WishlistPaged';
import { RecentlyViewProduct } from '../RecentlyViewProduct';
import { TopTrendingProduct } from '../TopTrending/topTrending';
import FeatureProduct  from '../FeatureProduct/index';
import { NewArrivalProduct } from '../NewArrivalProduct'
import SignIn from '../../components/Footer/signin';
import Cookies from 'js-cookie';
import Link from 'next/link';
// import Recommended from '../Recommended';
// import { Topselling } from '../Topselling';
// import { ToppSellingOriginal } from './../ToppSellingOriginal/index';
export function HomeScreen(props) {
  useInjectReducer({ key: 'homeScreen', reducer });
  useInjectSaga({ key: 'homeScreen', saga });
  const router = useRouter();
  const dispatch = useDispatch()
  const homeScreenstate = useSelector(state => state.homeScreen)
  const cart = useSelector(state => state.cart)
  const addToCart = useSelector(state => state.addToCart)
  const [page, setPage] = useState(false);
  const sendOtpApiResponse = useSelector(state => state.login)
  const [CustGUID,setCustGUID] = useState('')
  
  // console.log('dhgh', cart);
  // const [qty, setQty] = useState(0);
  // const [shoppingCart, setShoppingCart] = useState([]);
  // const [enablemodel, setenablemodel] = useState(false);
  // add loader refrence 
  // const loader=useRef(null);
  // const changeFltr = (newFL) => {
  //   setSeleced(newFL);
  //   const P = skuproduct && skuproduct.FilterList.find(i => i.ListItem === newFL);
  //   setFiltered(P);
  // };
  // console.log('prtyy', localStorage.getItem('skuproductID'))

  useEffect(() => {
    const refreshNewToken =  () => {
        
        fetch(`${Constants.urls.baseUrl}${Constants.endPoints.token}`, {
         method: 'POST',
         headers: {
           accept: 'application/x-www-form-urlencoded',
           'Content-Type': 'application/x-www-form-urlencoded',
         },
         body:
           'username=FCAPICL0100145&password=JHASGjnknkjhIhAjksnjansasasMKLAHNSJHGASB02012121&grant_type=password',
       })
         .then(res => res.json())
         .then(
           result => {
             //console.log('==================================new token',result.access_token)
             if (typeof window !== 'undefined' && window.localStorage){
               localStorage.setItem('generatedtoken',result.access_token)
             }            
           },
           
         );
     
         
     }
     refreshNewToken();
  },[])
  

  useEffect(() => {
    localStorage.setItem('ProductName', "")
    setPage(false)
    dispatch(defaultAction(localStorage.getItem('skuproduct')))
  }, []);
  useEffect(() => {
    if (addToCart !== undefined) {
      dispatch(copyShopingCartDetails(addToCart.shoppingcartDetails))
    }
  }, [addToCart]);
  useEffect(() => {
    if (cart !== undefined) {
      dispatch(copyShopingCartDetails(cart.shoppingcartDetails))
    }
  }, [cart]);
  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      setCustGUID(localStorage.getItem('CustGUID'))

    }
  }, [])

  /*const [showComponents, setShowComponents] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponents(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);*/
  
  // useEffect(()=>{
  //    if(loadProducts && loadProducts.popup)
  // },[])
  const displayimageposition1 = props.advertiseBanners !== undefined && props.advertiseBanners.length>0 && props.advertiseBanners.filter(
    position => position.DisplayPosition === 1,
  ).map(image => image.DocPath);
 
  const displayimageposition2 = props.advertiseBanners !== undefined && props.advertiseBanners.length>0 && props.advertiseBanners.filter(
    position => position.DisplayPosition === 2,
  ).map(image => image.DocPath);
  
  const displayimageposition3 = props.advertiseBanners !== undefined && props.advertiseBanners.length>0 && props.advertiseBanners.filter(
    position => position.DisplayPosition === 3,
  );
  const displayimageposition4 = props.advertiseBanners !== undefined && props.advertiseBanners.length>0 && props.advertiseBanners.filter(
    position => position.DisplayPosition === 4,
  );
  const displayimageposition5 = props.advertiseBanners !== undefined && props.advertiseBanners.length>0 && props.advertiseBanners.filter(
    position => position.DisplayPosition === 5,
  );
  // const loadproductdetail = (patrentcaturl) => {
  //   console.log('patrentcaturl', patrentcaturl);
  //   // const url = patrentcaturl.split('/')
  //   // console.log('apatrentcaturl', url);
  //   // localStorage.setItem('PageUrl', window.btoa(url[3]))
  //   // localStorage.setItem('PLPCat', pageurl)
  //   // localStorage.setItem('PLPparenturl', patrentcaturl.split('/'))
  //   // localStorage.setItem('PLPCat', url[2])
  //   // localStorage.setItem('PLPparenturl', url[1])
  //   // history.push(`/Subcategory/${patrentcaturl}`, { isURLChange: patrentcaturl })
  //   // return history.push(`/Subcategory${patrentcaturl}`,)
  // }
  function loadproductdetail(pageurl, patrentcaturl) {
    //console.log(`pmyy`, patrentcaturl);
    // localStorage.setItem('PLPCat', pageurl)
    // localStorage.setItem('PLPparenturl', '/ ')
    // return history.push(`${pageurl}`, { isURLChange: pageurl })
    const st = pageurl.toString();
    const v1 = st.split('/')
    const v3 = v1[3]
    localStorage.setItem('PLPCat', `${v1[1]}/${v1[2]}/${v1[3]}`)
    localStorage.setItem('PLPparenturl', `${v1[1]}/${v1[2]}`)
    localStorage.setItem('PageUrl', v3)
    // return router.push(`${pageurl}`, { isURLChange: pageurl })
    return router.push(
      {
        pathname: `/${pageurl}`, // not router.asPath
        // query: { isURLChange: pageurl },
      },)
  }
  function loadproductdetail1(pageurl, patrentcaturl) {
    
    const st = pageurl.toString();
    const v1 = st.split('/')
    const v3 = v1[3]
    localStorage.setItem('PLPCat', `${v1[1]}/${v1[2]}/${v1[3]}`)
    localStorage.setItem('PLPparenturl', `${v1[1]}/${v1[2]}`)
    localStorage.setItem('PageUrl', v3)
    //return router.push(`${pageurl}`)
  }
   
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  // window.onload = function () {
  //   document.getElementById('app').className = 'homehidefilter';
  // };
  // console.log("homeScreenstate", homeScreenstate);
  // setlogoutpopup(false)
  return (
    <>
      {/* <Header /> */}
      <Carousel
        showDots
        responsive={responsive}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        arrows
        autoPlay
        // infinite
        transitionDuration={500}
        containerClass="carousel-container"
      // prevIcon={
      //   <span className="carousel-control-prev-icon " />
      // }
      // prevLabel={null}
      // nextLabel={null}
      >
        {props.billBoardBanners !== undefined && props.billBoardBanners.map((data,indexes) => (
          // <Carousel.Item onClick={() => loadproductdetail(data.TargetUrl)}>
          // <div>
          <Link key={indexes} rel="preload" href={data.TargetUrl} aria-label={data.Description}><Image
            width={1519}
            height={396}
            fetchpriority="high"
            layout='responsive'
            priority={true}
            quality={10}
            loading='eager'
            //loading="eager"
            referrerPolicy='no-referrer'
            onClick={() => loadproductdetail(data.TargetUrl, null)}
            className="d-block " alt='' src={data.BillboardPath} style={{ cursor: ' pointer' }} />
          </Link>
          // </Carousel.Item>
        ))}
        
      </Carousel>
      {/* <WishlistPaged /> */}
      <DealdayProductOriginal dealOfDayProducts={props.dealOfDayProducts}/>
      <ToppSellingOriginal topSellingProductsData={props.topSellingProductsData} />
      <TopTrendingProduct topTrendingProductsData={props.topTrendingProductsData} />
      <FeatureProduct featuredProductsData={props.featuredProductsData}/>
      <NewArrivalProduct newArr1ivalProductsData={props.newArrivalProductsData}/>
      {/* homeScreenstate && homeScreenstate.loading === true ?
        <BouncingDotsLoader /> : */}
        { props.advertiseBanners && props.advertiseBanners.length>0 ?
        <section className="advBanner">
          <div className="container-fluid">
            <div className="row">

              {
                displayimageposition1 && displayimageposition1!==undefined && displayimageposition1!=="" ?
              <>
              <div className="col-lg-6 pb-20">
                <a rel="preload" href={props.advertiseBanners !== undefined && props.advertiseBanners.filter(
                  position => position.DisplayPosition === 1,
                ).map(image => image.PageURL)}><Image priority={true} quality={10} fetchpriority="high" loading="eager" layout="responsive" width={800} height={400} onClick={() => loadproductdetail1(props.advertiseBanners !== undefined && props.advertiseBanners.filter(position => position.DisplayPosition === 1,).map(image => image.PageURL), null)} referrerPolicy='no-referrer' src={displayimageposition1[1] === undefined ? displayimageposition1[0] : displayimageposition1[1]} alt="Homepage small1" style={{ width: '100%', cursor: 'pointer' }} /></a>
              </div>
              <div className="col-lg-6 pb-20">
                <a rel="preload" href={props.advertiseBanners !== undefined && props.advertiseBanners.filter(
                  position => position.DisplayPosition === 2,
                ).map(image => image.PageURL)}><Image priority={true} quality={10}  fetchpriority="high" loading="eager" layout="responsive" width={800} height={400}
                    onClick={() => loadproductdetail1(props.advertiseBanners !== undefined && props.advertiseBanners.filter(
                      position => position.DisplayPosition === 2,
                    ).map(image => image.PageURL), null)}
                    referrerPolicy='no-referrer' src={displayimageposition2[1] === undefined ? displayimageposition2[0] : displayimageposition2[1]} alt="Homepage small2" style={{ width: '100%', cursor: 'pointer' }} /></a></div> </>
                    : "" }
            </div>
            {/* new code */}
          </div>
        </section>
        : ""  
      }
        
        <CategoryContent />
        <section>
          <>{displayimageposition3 && displayimageposition3.length !== 0 && <Link rel="preload" href={displayimageposition3[0].PageURL} aria-label={displayimageposition3[0].BannerName}> <Image priority={true} quality={10} fetchpriority="high" loading="eager" width={1519} height={345} referrerPolicy='no-referrer'
            onClick={() => loadproductdetail1(displayimageposition3[0].PageURL)}
            className="d-block w-100" alt='' src={displayimageposition3[0].DocPath}/></Link>}</>
        </section>
        <ShopBrand brandsDataHomePage={props.brandsDataHomePage}/>
        <section className='homescreenbannerimage'>
            <>{displayimageposition4 && displayimageposition4.length !== 0 && <a rel="preload" href={displayimageposition4[0].PageURL} aria-label={displayimageposition4[0].BannerName}> <Image priority={true} quality={10} fetchpriority="high" loading="eager" width={1519} height={345} referrerPolicy='no-referrer'
              onClick={() => loadproductdetail1(displayimageposition4[0].PageURL)}
              className="d-block w-100" alt='' src={displayimageposition4[0].DocPath} /></a>}</>              
        </section>
        {(!CustGUID || CustGUID === null || CustGUID === undefined) ? null : <ReorderProduct />}
        {(CustGUID === null || CustGUID === undefined) ? null :
        <RecommendedProduct />}
        <RecentlyViewProduct />
        <section className='homeBannerbeforefooter'>
          
            <>{displayimageposition5 && displayimageposition5.length !== 0 && <a rel="preload" href={displayimageposition3[0].PageURL} aria-label={displayimageposition5[0].BannerName}><Image priority={true} quality={10} fetchpriority="high" loading="eager" width={1519} height={345} referrerPolicy='no-referrer'
              onClick={() => loadproductdetail1(displayimageposition5[0].PageURL)}
              className="d-block w-100" alt='' src={displayimageposition5[0].DocPath} /></a>}</>
        </section>
        {
          homeScreenstate && homeScreenstate.loading === false ?
            <>{(CustGUID === null || CustGUID === undefined || CustGUID === '00000000-0000-0000-0000-000000000000')
              ?
              <SignIn />
              :
              null}</>
            : ""
        }
    </>

  );
}
export default HomeScreen
