/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React, { useEffect, useState, useContext } from 'react';
import { useSelector } from 'react-redux';
//import { Link } from 'react-router-dom';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { toast, ToastContainer } from 'react-toastify';
// import { Stepper } from 'react-stepper-horizontal';
import { Message_data } from '@/context';


//import router from '@/utils/router';
import PaymentAPI from '../../../../../containers/MainPage/api/payment';
import 'react-toastify/dist/ReactToastify.css';
import getDetailsFromDomain from '@/utils/getSellerDetails';
import { ConstantsValues } from '@/containers/MainPage/api/homeServices';
import PrivacyFooter from '@/components/Footer/PrivacyFooter';
import OrderdetailAPI from '@/containers/MainPage/api/orderdetail';
export function Paymentsucces(props) {
  //console.log({ props });
  const router = useRouter();
  const [isClient, setIsClient] = useState(false)

  const [successdata, setsuccessdata] = useState([]);
  // const [amount, setamount] = useState([]);
  const [paymentdata, setpaymentdata] = useState([]);
  //const [paymentMethod, setPaymentMethod] = useState('');
  const [logoURL, setLogoURL] = useState('')
  // const [totime, settotime] = useState('');
  // const [day, setDay] = useState('')
  // const [currentdate, setCurrentdate] = useState('')
  const dataReducer = useSelector(state => state.proceedToBuy)
  //const {paymentInfoSuccessPage} = useContext(Message_data);
  
  useEffect(() => {
    (async ()=> {
      const sellerDetailsFromDomain = await getDetailsFromDomain();
     // console.log("sellerDetailsFromDomain==", sellerDetailsFromDomain)
      let sellerIdMain = ConstantsValues.defaultSellerID;
      if(sellerDetailsFromDomain && sellerDetailsFromDomain?.AdminMemberId) {
        sellerIdMain = sellerDetailsFromDomain.AdminMemberId;
      }
      if(sellerDetailsFromDomain?.LogoURL) {
        setLogoURL(sellerDetailsFromDomain.LogoURL)
      } else {
        setLogoURL('')
      }
      setIsClient(true)
      localStorage.setItem('sellerID', sellerIdMain);
    })();
  }, [])

  // useEffect(() => {
  //  if(Object.keys(paymentInfoSuccessPage)?.length > 0){
  //   console.log("paymentInfoSuccessPage===", paymentInfoSuccessPage);
  //   if(paymentInfoSuccessPage.paymentmethod === 'R'){
  //     setPaymentMethod('Netbanking')
  //   }
  //   if(paymentInfoSuccessPage.paymentmethod === 'C'){
  //     setPaymentMethod('Netbanking')
  //   }
  //   if(paymentInfoSuccessPage.paymentmethod === 'Card'){
  //     setPaymentMethod('Netbanking')
  //   }
  //   if(paymentInfoSuccessPage.paymentmethod === 'COD'){
  //     setPaymentMethod('COD')
  //   }
  //   if(paymentInfoSuccessPage.paymentmethod === 'WR'){
  //     setPaymentMethod('Wallet + Netbanking')
  //   }
  //   if(paymentInfoSuccessPage.paymentmethod === 'Wallet'){
  //     setPaymentMethod('Wallet')
  //   }
  //  }else{
  //   router.push(`/account/myorders`)
  //  }
  // }, [])
  useEffect(() => {
    // const slot = {
    //   "OrderNumber": credit.OrderId,
    //   "DeliverySlotDate": action.DeliverySlotDate,
    //   "DeliverySlotTimeId": action.DeliverySlotID,
    //   "InstructionForDeliverySlot": action.InstructionForDeliverySlot
    // }
    // const updateslot = yield call(PaymentAPI.updateDeliveryslotTime, slot)
    // console.log({ updateslot });
    // router.push('/product/checkout/order/paymentsuccess', { pamentsuccess: credit, totalamount: action.amount })
  }, [])
  // useEffect(() => {
  //   if (data.fromtime !== undefined) {
  //     setfromtime(data.fromtime)
  //     settotime(data.totime)
  //   }
  // }, [data])
  // useEffect(() => {
  //   getCurrentDate();
  // }, [])
  // function getCurrentDate() {
  //   const Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  //   const Days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  //   const today = new Date();
  //   const Day = Days[today.getDay()]
  //   const date = `${today.getDate()} ${Months[today.getMonth()]} ${today.getFullYear()}`;
  //   const cDate = date;
  //   setCurrentdate(cDate)
  //   setDay(Day)
  // }
  useEffect(() => {
    if (dataReducer !== undefined) {
      setpaymentdata(dataReducer)
    }
  })
  // useEffect(() => {
  //   console.log({ dataReducer });
  //   const paymentdataf = localStorage.getItem('timeslotupdated')
  //   setsuccessdata(JSON.parse(paymentdataf))
  // }, [props])
  const vieworder = () => {
    //router.push(`/account/myorders/myorder-detail/${window.atob(localStorage.getItem('OrderNumber'))}`)
    router.push(`/account/myorders`)
  }
  // useEffect(() => {
  //   setamount(window.atob(localStorage.getItem('totalamount')));
  // })
  // useEffect(() => {
  //   if (typeof window !== 'undefined' && window.localStorage) {
  //   PaymentAPI.paymentdetailsbyorder(window.atob(localStorage.getItem('OrderNumber')))
  //     .then(response => {
  //       console.log('uuuuudetails', response)
  //       setsuccessdata(response)
  //     })
  //     .catch(error => {
  //       toast(error)
  //       //console.log('error:::', error);
  //     });
  //   }
  // }, [])
  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      OrderdetailAPI.getmyorder(window.atob(localStorage.getItem('OrderNumber')))
      .then(response => {
        setsuccessdata(response)
      })
      .catch(error => {
        toast(error)
        //console.log('error:::', error);
      });
    }
  }, [])
  const loadorderdeatl = (e,OrderNumber) => {
    e.preventDefault();
    // router.push(`/account/myorders/myorder-detail/${OrderNumber}`, { OrderNumber })
    router.push(
      {
        pathname: `/account/myorders/myorder-detail/${OrderNumber}`, // not router.asPath
        query: { OrderNumber },
      })
    localStorage.setItem('OrderNumber', window.btoa(OrderNumber))
    // localStorage.setItem('OrderStatus', window.btoa(OrderStatus))
  }
  const deliverypolicy = () => {
    localStorage.setItem('pagefootert', "delivery-policy-react")

  }
  //console.log({ successdata, paymentdata });
  return (
    <>
      <ToastContainer
        position="top-right"
      // draggable={true}
      // autoClose={50000}
      />
      <div className="login-wrapper pb-35">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
              <main className="site-main" id="primary">
                <div className="user-login">
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-12">
                      <div className="section-title text-center">
                        <p align="center" style={{ padding: '10px 0px' }}>
                          <Link href="/">
                            {isClient ? <img referrerPolicy='no-referrer' alt="brand-logo" src={`${logoURL ? logoURL : '/assets1/img/icon/adibuja-logo.svg'}`} style={{ paddingLeft: '23px' }} width="198px"
                              height="42px" /> : ''}
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mainbodycontent thankyouContent">
                  <div className="login-wrapper pb-35">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 mt-30">
                          <main id="primary" className="site-main">
                            <div className="user-login">
                              <div className="row">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                {isClient ? (<div className="login-form error-page text-center">
                                    <h2 className="thank-you-title pb-0"><i className="fa fa-check-circle fa-2x"
                                      style={{ color: 'green', marginBottom: '10px' }}></i> <br /> Your order has been placed successfully!</h2>
                                    <p style={{ paddingTop: '10px' }}> Save the details for future reference </p>
                                    {!JSON.parse(localStorage.getItem('isLogisticsEnable')) ? (
                                      <>
                                        <p className="bigfont" > Order Number: 
                                        <Link href="" onClick={(e) => {loadorderdeatl(e,window.atob(localStorage.getItem('OrderNumber')))}} >
                                          <span className="thank-you-title pb-20" style={{ color: 'Green', cursor: 'pointer' }}>
                                          {typeof window !== 'undefined' && window.localStorage ? window.atob(localStorage.getItem('OrderNumber')): null } 
                                          </span>
                                          </Link> 
                                          <br /></p>
                                        <p className="bigfont" style={{ lineHeight:'2rem' }}>Delivery Date and Slot: <span className="thank-you-title pb-20">
                                          {typeof window !== 'undefined' && window.localStorage ? (<span
                                            style={{ color: 'green' }}>
                                            {localStorage.getItem('deliverydate')} (Between {localStorage.getItem('delveryfrom')} - {localStorage.getItem('delveryrto')})</span>) : null}
                                        </span> 
                                        </p>
                                      </>
                                    ) : null}
                                    <p className="bigfont">Total Amount: <span className="thank-you-title pb-20"><span
                                      style={{ color: 'green' }}>₹{
                                      successdata && successdata[0]?.TotalOrderAmount
                                      //paymentInfoSuccessPage?.amount
                                      }</span> </span></p>
                                    <p className="bigfont"> Payment Method: <span className="thank-you-title pb-20" style={{ color: 'green' }}> <span
                                    ></span>{
                                    successdata && successdata[0]?.PaymentMethodName
                                    //paymentMethod
                                    } </span></p>
                                    <hr />
                                    <p></p>
                                    {typeof window !== 'undefined' && window.localStorage ? (<p className="text-center orderstatusButton">
                                      <Link href={`/account/myorders`}>
                                        <button type='button' className="btn-cart lg-btn btn-secondary ml-1" >
                                          <i className="fa fa-file-text-o" onClick={vieworder}>
                                          </i>&nbsp; View Order</button>
                                      </Link>
                                      <span className="spanthankyouspace"></span><Link href="/account/dashboard"><button
                                        className="btn-cart lg-btn btn-secondary ml-1"><i className="fa fa-user"> </i>&nbsp; Go to My
                                        Account</button></Link>
                                      <Link href="/"><button className="btn-cart lg-btn btn-secondary ml-1" ><i
                                        className="fa fa-shopping-cart"> </i>&nbsp; Continue Shopping</button></Link>
                                      <a href='tel:+91-7058702045'> <button className="btn-cart lg-btn btn-secondary ml-1"><i
                                        className="fa fa-phone"> </i>&nbsp; +91-7058702045</button></a>
                                    </p>) : null}
                                  </div>) : null}
                                </div>
                              </div>
                            </div>
                          </main>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="checkout-steps checkout-steps container chkout_stps">
                  </div>
                </div>
                <div className="scroll-top not-visible"> <i className="fa fa-angle-up"></i> </div>
                <PrivacyFooter />
              </main>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}
export default Paymentsucces
