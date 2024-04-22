/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */
// import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useInjectReducer } from '@/utils/injectReducer';
import { useInjectSaga } from '@/utils/injectSaga';
import Header from '@/components/Header';
import Footer from '@/components/Footer/footer';
import Constants from '../App/constants';
import HomeScreen from '../HomeScreen';
import reducer from './reducer';
import saga from './saga';
import Link from 'next/link';
import { useLocalStorage } from '../../useLocalStorage';
import Head from 'next/head';
export function HomePage(props) {
  const key = 'home';
  const [generatedtoken, setgeneratedtoken] = useLocalStorage('generatedtoken',null);
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const [headercall, setheadercall] = useState(false);
  const [currenttime, setcurrentdate] = useState('');
  const [expirytime, setexpirytime] = useState('');
  const [footercall, setfootercall] = useState(false);

  useEffect(() => {

  // if (typeof window !== 'undefined' && window.localStorage) {
  //   localStorage.removeItem('generatedtoken')
  // }

    const now = new Date();
    setcurrentdate(now.getTime())
    display();
    if (currenttime < expirytime) {
      setheadercall(false)
      // setPage(false)
      // console.log('POST');
      setfootercall(false)
    } else {
 
      // fetch(`${Constants.urls.baseUrl}${Constants.endPoints.token}`, {
      //   method: 'POST',
      //   headers: {
      //     accept: 'application/x-www-form-urlencoded',
      //     'Content-Type': 'application/x-www-form-urlencoded',
      //   },
      //   body:
      //     'username=FCAPICL0100145&password=JHASGjnknkjhIhAjksnjansasasMKLAHNSJHGASB02012121&grant_type=password',
      // })
      //   .then(res => res.json())
      //   .then(
      //     result => {
      //       setgeneratedtoken(result.access_token);
      //       localStorage.setItem('generatedtoken', result.access_token)
      //       setheadercall(true)
      //       setfootercall(true)
      //       const now = new Date();
      //       const time = now.getTime();
      //       const expireTime = time + 1000 * 36000;
      //       setexpirytime(expireTime)
      //     },
      //   );
    }
  }, [])

  function display() {
    const now = new Date();
    const time = now.getTime();
    const expireTime = time + 1000 * 36000;
    now.setTime(expireTime);
    document.cookie = `cookie=ok;expires=${now.toUTCString()};path=/`;
  }

  return (
    <>
      <Header sellerDetailsFromDomain={props.sellerDetailsFromDomain} topMenuData={props.topMenuData}/>
      {/*headercall === true ?
      <Header topMenuData={props.topMenuData}/>
                            : null*/}
      <HomeScreen sellerDetailsFromDomain={props.sellerDetailsFromDomain} brandsDataHomePage={props.brandsDataHomePage} featuredProductsData={props.featuredProductsData} newArrivalProductsData={props.newArrivalProductsData} topTrendingProductsData={props.topTrendingProductsData} topSellingProductsData={props.topSellingProductsData} dealOfDayProducts={props.dealOfDayProducts} billBoardBanners={props.billBoardBanners} advertiseBanners={props.advertiseBanners}/>
      <Footer footerPagesLinks={props.footerPagesLinks} footerCategoryLinks={props.footerCategoryLinks}/>
      {/*footercall === true ?
      <Footer />
                          : null*/}
    </>
  ); 
}
export default HomePage
