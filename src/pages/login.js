/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-expressions */
/* eslint-disable indent */
/* eslint-disable camelcase */
/* eslint-disable no-useless-escape */
/**
 *
 * Login
 *
 */
import React, { useEffect, useState } from 'react';
// import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
// import GoogleLogin from 'react-google-login';
import { GoogleLogin } from '@react-oauth/google';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
//import { Link, useHistory, useLocation } from 'react-router-dom';
import Link from 'next/link';
import { ToastContainer } from 'react-toastify';
import { useInjectReducer } from '@/utils/injectReducer';
import { useInjectSaga } from '@/utils/injectSaga';
import jwt_Decode from "jwt-decode";

import '../../public/assets1/css/bundle.css';
import '../../public/assets/css/style.min.css';
import '../../public/assets1/css/default.min.css';
import '../../public/assets1/css/responsive.min.css';
// import '../../public/assets1/css/style.min.css';

// import '../../../assets/css/bundle.css';
// import '../../../assets1/css/default.min.css';
// import '../../../assets1/css/responsive.min.css';
// import '../../../assets1/css/style.min.css';
import adibujalogo from '../../public/assets1/img/icon/adibuja-logo.svg';
import Success from "../components/ShowAlert/success";
import mycartAPI from "../containers/MainPage/api/mycartAPI";
import { ConstantsValues } from "../containers/MainPage/api/homeServices";
// import history from '../../utils/history';
import Input from '../containers/HomePage/Input';
// import registerOrignalReducer from '../RegisterOrignal/reducer';
import { changeUsername, closeMsgBar, DirectMessage, logindata, loginwithotp, userRegisterationUsingGmail, getCustIdByEmail } from '../containers/Login/actions';
import reducer from '../containers/Login/reducer';
import saga from '../containers/Login/saga';
import 'react-toastify/dist/ReactToastify.css';
import getDetailsFromDomain from '@/utils/getSellerDetails';
import NavigationLoader from '@/containers/NavigationLoader';
import PrivacyFooter from '@/components/Footer/PrivacyFooter';
// import SignIn from '../../components/Footer/signin';
export function Login() {
  useInjectReducer({ key: 'login', reducer });
  useInjectSaga({ key: 'login', saga });
  const [Uname, setUname] = useState('');
  const [passwordInputValue, setPasswordInputValue] = useState('');
  //const location = useLocation();
  //const history = useHistory()
  const router = useRouter(); 
  //console.log('useEffect on router update', router)
  
  // const [UOtp, setUOtp]=useState('');
  const [firstLoadCheck, setFirstLoadCheck] = useState(0);
  const [isError, setisError] = useState(false);
  // const [TimerShow, setTimerShow] = useState(false);
  const [ResendShow, setResendShow] = useState(false);
  // const [LoginNowEnable, setLoginNowEnable] = useState(false);
  const [isExist, setisExist] = useState();
  const [showSendOTP, setShowSendOTP] = useState(true);
  const [UpdatedTimer, setUpdatedTimer] = useState(60);
  const [disableinput, setdisableinput] = useState(false);
  const [enablechangeview, setenablechangeview] = useState(false);
  const [enabledone, setenabledone] = useState(false);
  const [loginnow, setloginnow] = useState(false);
  const [clockStarted, setClockStarted] = useState(false);
  const [googleSignInEmailId, setGoogleSignInEmailId] = useState('')
  const [googleSignInFirstName, setGoogleSignInFirstName] = useState('')
  const [googleSignInLastName, setGoogleSignInLastName] = useState('')
  const [googleLoginResponseCount, setGoogleLoginResponseCount] = useState(0)
  const [homeReducerData,setHomeReducerData] = useState('');
  const [isValidPincode, setIsValidPincode] = useState(false)
  const [logoURL, setLogoURL] = useState('')
  const [isClient, setIsClient] = useState(false);
  const [sellerName, setSellerName] = useState('Adibuja');
  const [isUserInactive, setIsUserInactive] = useState(false);

  useEffect(() => {
    (async ()=> {
      const sellerDetailsFromDomain = await getDetailsFromDomain();
      let sellerIdMain = ConstantsValues.defaultSellerID;
      if(sellerDetailsFromDomain && sellerDetailsFromDomain?.AdminMemberId) {
        sellerIdMain = sellerDetailsFromDomain.AdminMemberId;
        setSellerName(sellerDetailsFromDomain.CompanyName);
      }
      if(sellerDetailsFromDomain?.LogoURL) {
        setLogoURL(sellerDetailsFromDomain.LogoURL)
      } else {
        setLogoURL('')
      }
      setIsClient(true);
      localStorage.setItem('sellerID', sellerIdMain);
    })();
  }, [])

  const handleclick = () => {
    // router.push('/login/form')
    router.push({ pathname: '/login/form', state: { Uname } })
    // document.getElementById('sendloginUserWithOTP').click()
    // document.getElementById('registerUserWithOTP').click()
  }
  const sendOtpApiResponse = useSelector(state => state.login)
  const gmailLoginResponse = useSelector(state => state.login)
  //console.log("sendOtpApiResponse", sendOtpApiResponse)
  const getCustomerRegisteredDetailUsingGmail = useSelector(state => state.login)
  //const homeReducerData = useSelector(state => state.home)
  
  //const homeReducerData = useSelector(state => state.homeScreen)
  useEffect(() => {
    //console.log('useEffect run on 1st render',homeReducerData)
    mycartAPI.getCartCommon()
        .then(response => {
          setHomeReducerData(response)
        })
        .catch(error => {
          //console.log('error:::', error);
        });
    setFirstLoadCheck(firstLoadCheck + 1)
    setResendShow(false)
    // setShowSendOTP(true)
    setUname('')
    setPasswordInputValue('')
  }, [])
  useEffect(() => {
    //console.log('useEffect on router update', router)
  if (typeof window !== 'undefined' && window.localStorage) {
    if (localStorage.getItem("UserMobileEmailFromRegister") && localStorage.getItem("rediractFromRegister") === "/register") {
      //console.log("autovv..", router.query.data)
      setUname(localStorage.getItem("UserMobileEmailFromRegister"))
      localStorage.setItem('UserMobileEmailFromRegister', '')
      
    }
  }
  }, [])
  // useEffect(() => {
  //   console.log('useEffect run on location update')
  //   if (location && location.state) {
  //     console.log("autovv..", location.state)
  //     setUname(location.state.userName)
  //   }
  // }, [location])
  useEffect(() => {
    //console.log('useEffect run on Uname update')
    // console.log('Uname != ""', Uname != "")
    // console.log('location.state.userName===', location)
    // console.log('location.state.userName===', location.state)
    // if ((Uname != "") && location.state.userName != "") {
  if (typeof window !== 'undefined' && window.localStorage) {
    if ((Uname !== "") && localStorage.getItem("rediractFromRegister") === "/register") {
      // console.log('Uname and location.state.userName is not blank')
      // document.getElementById('registerUserWithOTP').click()
      setTimeout(() => {
        // alert('check timer for 1sec')
        setenabledone(true);
        // document.getElementById('btnRegisterChangeUserName').click()
        document.getElementById('sendloginUserWithOTP').click()
      }, 1000)
      localStorage.setItem('rediractFromRegister', '')
    }
  }
    // enabledone
  }, [Uname])
  // useEffect(() => {
  //   setFirstLoadCheck(firstLoadCheck + 1)
  //   setResendShow(false)
  //   setShowSendOTP(true)
  // }, [])
  useEffect(() => {
    //console.log('useEffect run on updated timer')
    if (firstLoadCheck > 0 && UpdatedTimer === 0) {
      setResendShow(true)
      setClockStarted(false);
    }
    if (firstLoadCheck > 0 && clockStarted === true && UpdatedTimer > 0) {
      setTimeout(() => {
        const time = UpdatedTimer - 1
        setUpdatedTimer(time)
      }, 1000);
    }
    // else {
    //   // setTimerShow(false)
    //   setClockStarted(false);
    //   // setResendShow(true)
    //   // setUpdatedTimer(60)
    // }
  }, [UpdatedTimer])
  const submit = (LocationUserName) => {
    //console.log("LocationUserName=", LocationUserName);
    setenablechangeview(true)
    // const emailphone = new RegExp(/^(?:\d{10}|\w+@\w+\.\w{2,3})$/)
    // const emailphone = new RegExp('^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|(^[0-9]{10})+$');
    const emailRegExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    const phoneRegExp = new RegExp(/^\d{10}$/)
    if (firstLoadCheck > 0) {
      if ((!emailRegExp.test(Uname)) && (!phoneRegExp.test(Uname))) {
        setResendShow(false)
        setisError(true)
        setShowSendOTP(true)
        dispatch(DirectMessage('Please enter valid mobile number (10 digit) or email'))
        // document.getElementById('txtUserNameForOTP').focus()
        // setTimerShow(false)
        // enablechangeview
        setenablechangeview(false)
        setdisableinput(false)
        setenabledone(false)
        setClockStarted(false);
        // clearTimeout()
      } else if (Uname) {
        // alert('else if part of submit')
        // console.log('timer...', TimerShow)
        //console.log("valueee", Uname)
        setResendShow(false)
        setenabledone(true)
        setdisableinput(true)
        // console.log('timer1...', UpdatedTimer)
        // setPasswordInputValue('')
        // document.getElementById('txtLoginOTP').value === ''
        dispatch(changeUsername(Uname))
        document.getElementById("txtLoginOTP").focus()
        setShowSendOTP(false)
        // setTimerShow(true)
        setClockStarted(true)
        setUpdatedTimer(59)
        clearTimeout()
      } else {
        // alert('else part of submit')
        setResendShow(false)
        // setTimerShow(false)
        setClockStarted(false);
        setShowSendOTP(true)
        setisError(true)
        clearTimeout()
        dispatch(DirectMessage('User Name can not be empty'))
      }
    }
    // else if (LocationUserName) {
    //   console.log("LocationUserName=", LocationUserName);
    //   dispatch(DirectMessage('Mobile No is already Register'))
    //   dispatch(changeUsername(LocationUserName))
    //   setTimerShow(true)
    //   setShowSendOTP(true)
    //   setUpdatedTimer(59)
    //   clearTimeout()
    // }
  }
  // useEffect(() => {
  //   console.log('value', enabledone === false);
  //   if (enabledone === true && Uname) {
  //     setenabledone(true)
  //     closeMsgBar()
  //   }
  //   // }
  // }, [submit]);
  // useEffect(() => {
  //   console.log("value", enabledone === false);
  //   if (enabledone === true)
  //     setenabledone(true)
  // }, [submit])
  useEffect(() => {
    // console.log("sendOtpResponsevvv...", sendOtpApiResponse.sendOtpResponse)
    firstLoadCheck > 0 && sendOtpApiResponse && sendOtpApiResponse.sendOtpResponse && sendOtpApiResponse.sendOtpResponse &&
      setisExist(sendOtpApiResponse.sendOtpResponse.IsCustomerExist)
  }, [sendOtpApiResponse])
  useEffect(() => {
    
    if (firstLoadCheck > 0 && Uname && sendOtpApiResponse && sendOtpApiResponse.customerlogindata !== undefined && sendOtpApiResponse.customerlogindata.GUID === '00000000-0000-0000-0000-000000000000' && loginnow === false) {
      // alert('useEffect sendOtpApiResponse dependency')
      
      setisError(true)
      dispatch(DirectMessage('redirecting to registration page...'))
      setTimeout(() => {
        router.push({ pathname: '/register', query: { data: Uname }})
      }, 1000)
    }
    if (firstLoadCheck > 0 && sendOtpApiResponse && sendOtpApiResponse.customerlogindata !== undefined && sendOtpApiResponse.customerlogindata.GUID !== '00000000-0000-0000-0000-000000000000'
      && sendOtpApiResponse.customerlogindata !== '') {
        
      // alert(`useEffect sendOtpApiResponse dependency sendOtpApiResponse.customerlogindata${sendOtpApiResponse.customerlogindata}`)
      dispatch(logindata(sendOtpApiResponse.customerlogindata))
      // commented below code to redirect user to last visited page
      // router.push('/')
      const redirectToPath = localStorage.getItem("lastVisitedUrl");
      
      // router.push(redirectToPath);
      if (redirectToPath && redirectToPath !== "") {
        router.push(redirectToPath);
        //window.location.href = redirectToPath;
      } else {
        router.push('/')
      }
      // localStorage.setItem('isLogin', true)
      Cookies.set('CustGUID', sendOtpApiResponse.customerlogindata.GUID, { expires: 15 })
      localStorage.setItem('CustGUID', window.btoa(sendOtpApiResponse.customerlogindata.GUID))
      localStorage.setItem('ClientId', window.btoa(sendOtpApiResponse.customerlogindata.ClientId))
      localStorage.setItem('UserFirstName', (sendOtpApiResponse.customerlogindata.FirstName))
      localStorage.setItem('User', JSON.stringify(sendOtpApiResponse.customerlogindata))
      // localStorage.setItem('UserLastName', window.btoa(sendOtpApiResponse.customerlogindata.LastName))
      localStorage.setItem('UserLastName', (sendOtpApiResponse.customerlogindata.LastName))
      localStorage.setItem('UserLastPhone', sendOtpApiResponse.customerlogindata.Phone)
      // localStorage.setItem('Email', window.btoa(sendOtpApiResponse.customerlogindata.Email))
      localStorage.setItem('Email', (sendOtpApiResponse.customerlogindata.Email))
      localStorage.setItem('CustomerId', window.btoa(sendOtpApiResponse.customerlogindata.CustomerId))
      // localStorage.setItem('LoginID', (location.state.Uname))
      // window.onbeforeunload = function () {
      //   localStorage.removeItem(key); // key to be provided
      //   return '';
      // };
      // /call Update cart API after login
      
      // if (homeReducerData && homeReducerData.cart) {
      //   if(homeReducerData && homeReducerData.cart && homeReducerData.cart.length > 0 && homeReducerData.cart[0] && homeReducerData.cart[0].Quantity && homeReducerData.cart[0].SkuId && homeReducerData.cart[0].SKUFilterPriceId){
      //     mycartAPI.updatecart(null, homeReducerData.cart[0].Quantity, homeReducerData.cart[0].SkuId, homeReducerData.cart[0].SKUFilterPriceId);
      //   }else if(homeReducerData && homeReducerData.cart && homeReducerData.cart.length > 0 && homeReducerData.cart[0] && homeReducerData.cart[0].Quantity && homeReducerData.cart[0].SkuId && homeReducerData.cart[0].SKUFilterPriceId && homeReducerData.cart[0].cart && homeReducerData.cart[0].cart.length > 0 && homeReducerData.cart[0].cart[0] && homeReducerData.cart[0].cart[0].Quantity && homeReducerData.cart[0].cart[0].SkuId && homeReducerData.cart[0].cart[0].SKUFilterPriceId){
      //     mycartAPI.updatecart(null, homeReducerData.cart[0].cart[0].Quantity, homeReducerData.cart[0].cart[0].SkuId, homeReducerData.cart[0].cart[0].SKUFilterPriceId);
      //   }
      // }
      if (homeReducerData && homeReducerData.cart && homeReducerData.cart[0]) {
        mycartAPI.updatecart(null, homeReducerData.cart[0].cart[0].Quantity, homeReducerData.cart[0].cart[0].SkuId, homeReducerData.cart[0].cart[0].SKUFilterPriceId, homeReducerData?.couponcode);
      }
    }
    if (firstLoadCheck > 0 && !isValidPincode && document.getElementById('txtLoginOTP').value !== '' && sendOtpApiResponse.customerlogindata !== '' && sendOtpApiResponse.customerlogindata.GUID === '00000000-0000-0000-0000-000000000000') {
      // alert('please enter valid OTP')
      setisError(true)
      dispatch(DirectMessage("Please enter valid OTP"))
      setIsValidPincode(true);
    }
    else {
      
    }
  }, [sendOtpApiResponse])
  useEffect(() => {
    
    if (firstLoadCheck > 0 && Uname && isExist !== undefined && !isExist) {
      setisError(true)
      dispatch(DirectMessage('This phone number does not exist, redirecting to registration page...'))
      setTimeout(() => {
        setisError(true)
        // setisExist()
        localStorage.setItem('UserMobileEmailFromLogin', Uname)
        localStorage.setItem('rediractFromLogin', "/login")
        router.push({ pathname: '/register' })
        // document.getElementById('registerUserWithOTP').click()
      }, 2000);
    }
    if (firstLoadCheck > 0 && isExist) {
      // setLoginNowEnable(true)
      // setTimerShow(true)
      setClockStarted(true);
    }
  }, [isExist])
  const updatesuccessMsg = useSelector(state => state.login)
  function closeMsgBarFunc() {
    setTimeout(() => {
      dispatch(closeMsgBar())
      setisError(false)
    }, 5000);
  }
  useEffect(() => {
    if(updatesuccessMsg?.addToCartMsg?.includes('inactive')) {
      setIsUserInactive(true);
    } else {
      setIsUserInactive(false);
    }
    
    closeMsgBarFunc()
  }, [updatesuccessMsg])
  useEffect(() => {
    // alert('userRegistrationUsingGmailLoginResponse')
    // console.log('registerOrignal---', typeof registerOrignal.userRegistrationUsingGmailLoginResponse)
    
    if (gmailLoginResponse && gmailLoginResponse.userRegistrationUsingGmailLoginResponse !== 'undefined' && gmailLoginResponse.userRegistrationUsingGmailLoginResponse !== undefined) {
      if (googleLoginResponseCount < 1 && gmailLoginResponse.userRegistrationUsingGmailLoginResponse
        !== '' && gmailLoginResponse.userRegistrationUsingGmailLoginResponse
        === "Email Already Exist") {
        // alert('Email Already Exist')
        // dispatch(sendOtp(document.getElementById('txtRegisterUserNameForOTP').value))
        const clientid = 1
        const emailId = googleSignInEmailId
        const customerType = 1
        dispatch(getCustIdByEmail(clientid, emailId, customerType))
        setGoogleLoginResponseCount(1)
      }
      if (googleLoginResponseCount < 1 && gmailLoginResponse.userRegistrationUsingGmailLoginResponse
        !== '' && gmailLoginResponse.userRegistrationUsingGmailLoginResponse
        === "Phone number Already Exist") {
        const clientid = 1
        const emailId = googleSignInEmailId
        const customerType = 1
        dispatch(getCustIdByEmail(clientid, emailId, customerType))
        setGoogleLoginResponseCount(1)
      }
      if (googleLoginResponseCount < 1 && gmailLoginResponse.userRegistrationUsingGmailLoginResponse !== '' && gmailLoginResponse.userRegistrationUsingGmailLoginResponse !== undefined && gmailLoginResponse.userRegistrationUsingGmailLoginResponse !== 'Email Already Exist') {
        // alert('Email is not Already Exist')
        const clientid = 1
        const emailId = googleSignInEmailId
        const customerType = 1
        dispatch(getCustIdByEmail(clientid, emailId, customerType))
        setGoogleLoginResponseCount(1)
      }
    }
  }, [gmailLoginResponse])
  useEffect(() => {
    // alert('getCustomerRegisteredDetailUsingGmail')
    
    if (getCustomerRegisteredDetailUsingGmail && getCustomerRegisteredDetailUsingGmail.getCustIdByGmailLogin !== 'undefined' && getCustomerRegisteredDetailUsingGmail.getCustIdByGmailLogin !== undefined) {
      if ((getCustomerRegisteredDetailUsingGmail.getCustIdByGmailLogin).length > 0) {
        Cookies.set('CustGUID',getCustomerRegisteredDetailUsingGmail.getCustIdByGmailLogin[0].GUID, { expires: 15 })
        localStorage.setItem('CustGUID', window.btoa(getCustomerRegisteredDetailUsingGmail.getCustIdByGmailLogin[0].GUID))
        // localStorage.setItem('ClientId', window.btoa(sendOtpApiResponse.customerlogindata.ClientId))
        localStorage.setItem('UserFirstName', googleSignInFirstName)
        localStorage.setItem('User', JSON.stringify(getCustomerRegisteredDetailUsingGmail.getCustIdByGmailLogin))
        localStorage.setItem('UserLastName', googleSignInLastName)
        localStorage.setItem('UserLastPhone', null)
        localStorage.setItem('Email', (getCustomerRegisteredDetailUsingGmail.getCustIdByGmailLogin[0].Email))
        /* setTimeout(() => {
          router.push('/')
        }, 100) */
        if (homeReducerData && homeReducerData.cart && homeReducerData.cart[0]) {
          mycartAPI.updatecart(null, homeReducerData.cart[0].cart[0].Quantity, homeReducerData.cart[0].cart[0].SkuId, homeReducerData.cart[0].cart[0].SKUFilterPriceId, homeReducerData?.couponcode);
        }
        const redirectToPath = localStorage.getItem("lastVisitedUrl");
        if (redirectToPath && redirectToPath !== "") {
          // router.push(redirectToPath);
          setTimeout(() => {
            router.push(redirectToPath)
          }, 100)
        } else {
          setTimeout(() => {
            router.push('/')
          }, 100)
        }
      }
    }
  }, [getCustomerRegisteredDetailUsingGmail])
  const dispatch = useDispatch()
  // function onChangeUsername(id) {
  //   if (Uname !== undefined) {
  //     dispatch(changeUsername(id))
  //   }
  // }
  function onchangeFunc(e) {
    // console.log("autovalue", e.target.value)
    // if (e.target.value.match("^(?! )[A-Za-z0-9-@.()]*(?<! )$") != null) {
    //   console.log("autovalue", e.target.value)
    //   setUname(e.target.value)
    // }
    if (/\s/g.test(e.target.value) === true) {
      const removeSpaceValue = e.target.value.replace(/\s/g, '');
      setUname(removeSpaceValue)
    } else {
      setUname(e.target.value)
    }
  }
  // const onResponse = (response) => {
  //   console.log(response)
  // };
  // const responseGoogle = () => {
  // }
  const Loginnow = () => {
    //alert('Login')
    
    // console.log('passwordInputValue285', passwordInputValue)
    // setUOtp(document.getElementById('txtLoginOTP').value)
    // const emailphone = new RegExp('^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|(^[0-9]{10})+$');
    setIsValidPincode(false)
    const emailRegExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    const phoneRegExp = new RegExp(/^\d{10}$/)
    if (Uname === "") {
      // toast("Please enter mobile number (10 digit) or email")
      setisError(true);
      dispatch(DirectMessage("Please enter valid mobile number (10 digit) or email"))
    }
    else if ((!emailRegExp.test(Uname)) && (!phoneRegExp.test(Uname))) {
      setisError(true);
      dispatch(DirectMessage("Please enter valid mobile number (10 digit) or email"))
    }
    else if (document.getElementById('txtLoginOTP').value === '') {
      setisError(true)
      dispatch(DirectMessage("Please enter OTP"))
    }
    else if (document.getElementById('txtLoginOTP').value === '' && sendOtpApiResponse.customerlogindata === '') {
      // toast("Please enter OTP")
      setisError(true)
      dispatch(DirectMessage("Please enter OTP"))
    }
    setloginnow(true)
    dispatch(loginwithotp(document.getElementById('txtUserNameForOTP').value, document.getElementById('txtLoginOTP').value))
    mycartAPI.getCartCommon().then(res => {
      res.CartGuid !== undefined && res.CartGuid !== null ? localStorage.setItem('CartGUID', window.btoa(res.CartGuid)) : localStorage.setItem('CartGUID', window.btoa(ConstantsValues.defaultCartGUID))
    })
  }
  const terms = () => {
    localStorage.setItem('pagefootert', "terms-and-conditions-react")
    //router.push('/terms-and-conditions')
  }
  const policy = () => {
    localStorage.setItem('pagefootert', "privacy-policy-react")
    //router.push('/privacy-policy')
  }
  const deliverypolicy = () => {
    localStorage.setItem('pagefootert', "delivery-policy-react")
    //router.push('/delivery-policy')
  }
  const ResendBlock = () => (
    <div id="NotYetReceived" >
      <p align="center">
        Not received / expired your OTP? &nbsp;
        <a href="#" style={{ color: 'dodgerblue', display: 'block', textAlign: 'center' }}>
          <i className="fa fa-refresh"></i>
          <span onClick={submit} id="btnResendOTPNew">&nbsp;Resend OTP</span></a>
      </p >
    </div >
  )
  const TimerForOTP = () => (
    <div id="resendOtpTimerNewdiv">
      <p id="resendOtpTimerNew" className="text-center">
        00:{UpdatedTimer < 10 ? 0 : ''}{UpdatedTimer}
      </p>
    </div>
  )
  function changebuttonevent() {
    setdisableinput(false)
    setenabledone(false)
    setClockStarted(false);
    setUpdatedTimer(60)
    console.log('chkeResendShow',ResendShow)
    if(ResendShow === true){
    setResendShow(false)    
    }   
  }
  function arrowevent() {
    setenablechangeview(false)
    setShowSendOTP(true)
  }
  const googleAuthSuccessResponseMessage = (response) => {
    //console.log('Google response message', response);
    const userObject = jwt_Decode(response.credential);
    //console.log('userObject', userObject)
    setGoogleSignInEmailId(userObject.email)
    setGoogleSignInFirstName(userObject.given_name)
    setGoogleSignInLastName(userObject.family_name)
    if (userObject.email !== '') {
      const userDetails = {
        ClientId: 1,
        Title: null,
        CustGuid: null,
        Name: userObject.given_name,
        LastName: userObject.family_name,
        Email: userObject.email,
        Company: null,
        Mobile: null,
        Phone: null,
        Fax: null,
        Password: null,
        ConfirmPassword: null,
        Comments: null,
        TaxId: null,
        Type: null,
        PreferredLanguageId: 0,
        designation: null,
        companyType: null,
        country: null,
        state: null,
        address1: null,
        address2: null,
        city: null,
        statecode: null,
        selectedCountry: null,
        selectedState: null,
        countryCode: null,
        ZipCode: null,
        NewsLetterSubscribed: false,
        Consignee: null,
        Telephone: null,
        isPrimary: false,
        isGuest: false,
        ReceiveOffers: false,
        IsEmailVerified: userObject.email_verified,
        IsPhoneVerified: false,
        BirthDate: null,
        CustomerType: 1,
        Extra1: null,
        SellerId: localStorage.getItem('sellerID') || ConstantsValues.defaultSellerID,
        businessCustomerDetail: {
          BusinessCustomerDetailsId: 0,
          CustomerId: 0,
          GUID: null,
          CompanyName: null,
          GSTNumber: null,
          BusinessName: null,
          BusinessAddress: null,
          BusinessPinCode: null,
          BusinessCity: null,
          BusinessState: null,
          Extra1: null,
          Extra2: null
        }
      }
      // dispatch(sendOtp(document.getElementById('txtRegisterUserNameForOTP').value))
      dispatch(userRegisterationUsingGmail(userDetails))
    }
  };
  const googleAuthErrorResponseMessage = (error) => {
    //console.log(error);
    setisError(true)
  };
  const createAnAccount = (e) => {
    // alert('createAnAccount btn clicked')
    e.preventDefault()
    router.push({ pathname: '/register', state: { Uname: null }, rediractFrom: '/login' })
  }
  return (
    <>
      <NavigationLoader />
      <ToastContainer
        position="top-right"
      // draggable={true}
      // autoClose={50000}
      />
      {updatesuccessMsg !== undefined && updatesuccessMsg.IsMsgBar && < Success isError={isError || isUserInactive} msg={updatesuccessMsg.addToCartMsg} />}
      {/* {isError ? <Showalert /> : null} */}
      {/* {isSuccess ? <ShowalertSuccess /> : null} */}
      {/* <div className="login-wrapper pb-35" style={{ marginTop: 20 }}></div> */}
      <div className="login-wrapper pb-35">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
              <div className="section-title text-center">
                <p align="center" style={{ padding: '10px,0px' }}>
                  <Link href="/">
                    {isClient ? <img referrerPolicy='no-referrer' alt="brand-logo" src={`${logoURL ? logoURL : '/assets1/img/icon/adibuja-logo.svg'}`} style={{ paddingLeft: '23px' }} width="198px" height="42px" /> : ''}
                  </Link>
                </p>
              </div>
              <main id="primary" className="site-main">
                <div className="user-login">
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-8 offset-xl-2">
                      <div className="login-form">
                        <div id="divloginwithotp" >
                          <h3 align="center">Login Using OTP</h3>
                          <br />
                          {enablechangeview === false ?
                            <div className="form-group row align-items-center">
                              <div className='loginText' style={{ width: '80%', display: 'block', position: 'relative', alignSelf: 'center', margin: '0 auto' }}>
                                <div className="input-group" style={{ alignSelf: 'center ' }}>
                                  <Input
                                    name="UserName"
                                    id="txtUserNameForOTP"
                                    value={Uname}
                                    disabled={disableinput}
                                    className="form-control"
                                    onChange={e => onchangeFunc(e)}
                                    placeholder="Mobile No. / Email"
                                  />
                                </div>
                                <p>
                                  <a href
                                    id="sendloginUserWithOTP" type='button' onClick={submit} style={{
                                      display: showSendOTP ? 'inline-block' : 'none',
                                    }}>
                                    Send OTP
                                  </a>
                                </p>
                              </div>
                            </div> :
                            <div className="form-group row align-items-center mb-4 reg_Otp_rw">
                              <label htmlFor="email" className="col-sm-3"></label>
                              <div className="rgt_ipt_box">
                                <div className="input-group">
                                  <div className="input-group-prepend">
                                    <div className="input-group-text" id="registerBackIcon" style={{ cursor: 'pointer', display: 'none' }} onClick={arrowevent}></div>
                                  </div>
                                  <input
                                    defaultValue={Uname}
                                    className="form-control"
                                    name="UserName"
                                    id="txtUserNameForOTP"
                                    placeholder="Mobile No. / Email"
                                    type="text"
                                    disabled={disableinput}
                                    autoComplete="off" required=""
                                    onChange={e => onchangeFunc(e)}
                                  />
                                  {/* <input type="hidden" id="hdnIsUserCameFromLoginAfterUserNotExistsError" value="yes" /> */}
                                  <div className="input-group-append">
                                    {enabledone ?
                                      <div className="btn-group">
                                        <button type="button" id="btnRegisterChangeUserName" className="btn btn-default 
                                      input-group-btn"
                                          onClick={changebuttonevent}
                                          style={{ backgroundColor: 'rgb(233, 236, 239)', border: '1px solid rgb(206, 212, 218) !important' }}>Change</button>
                                      </div> : null}
                                    {enabledone === false ?
                                      <div className="btn-group">
                                        <button type="button" id="btnRegisterChangeUserNameDone" className="btn btn-default input-group-btn"
                                          onClick={submit}
                                          style={{ backgroundColor: '#e9ecef', border: '1px solid #ced4da !important' }}>Done</button>
                                      </div> : null}
                                  </div>
                                </div>
                                <span className="text text-danger validation-error field-validation-valid" data-valmsg-for="UserName" data-valmsg-replace="true"></span>
                                <p>
                                  <a href id="registerUserWithOTP" style={{ color: 'gray', position: 'absolute', top: '7px', right: '26px', zIndex: 10, display: 'none' }}>Send OTP</a>
                                </p>
                              </div>
                            </div>}
                          <br />
                          <div className="login-box text-center">
                            <input defaultValue="" type="hidden" id="returnurl" name="returnurl" />
                            <h3 style={{ color: '#888888' }}>Enter OTP</h3><br />
                          </div>
                          <div id="divOuter">
                            <div id="divInner">
                              <Input 
                                disabled={isUserInactive} 
                                defaultValue={passwordInputValue} 
                                type='password' 
                                maxLength={4} 
                                id="txtLoginOTP" 
                                required="" 
                                autoComplete="new-password" 
                                className={isUserInactive ? 'inputDisabled' : ''}
                              />
                            </div>
                          </div>
                          <br />
                          {/* {!isError && TimerShow && <TimerForOTP />} */}
                          {(clockStarted && !isUserInactive) ? <TimerForOTP /> : null}
                          {(ResendShow && !isUserInactive) && <ResendBlock />}
                          <div id="resendOtpTimerNewdiv">
                            <p id="resendOtpTimerNew" className="text-center"></p>
                          </div>
                          <div className="login-box text-center" >
                            <button disabled={isUserInactive} type="button" id="btnLoginWithOTP" className="btn btn-secondary mb-4 mt-4 " onClick={Loginnow} >Login Now</button>
                          </div>
                          <div className="login-box text-center">
                            - <strong>OR</strong> -
                            <br />
                            <button type="button" id="btnLoginWithPassword" className="btn btn-secondary mb-4 mt-4 " onClick={handleclick}>Login with Password</button>
                          </div>
                          {/* <LoginwithPassword /> */}
                          <p align="center">
                            By continuing, you agree to our <a onClick={terms} href="/terms-and-conditions" style={{ color: 'dodgerblue', cursor: 'pointer', target: "_blank", rel: "noopener noreferrer" }}>Terms &amp; Conditions</a> and <a href="/privacy-policy" onClick={policy} style={{ color: 'dodgerblue', cursor: 'pointer', target: "_blank" }} >Privacy Policy</a>
                          </p>
                          <br />
                          <div className="text-center pt-20 pb-20 top-bordered" style={{ borderTop: 'none' }}>
                            <p>
                              <b>New To {sellerName}?&nbsp;
                                {
                                  // eslint-disable-next-line anchor-is-valid
                                }
                                <Link
                                href=""
                                  // to="/register"
                                  onClick={(e) => createAnAccount(e)}
                                  className='create-acnt'>
                                  <u>Create an account</u>
                                </Link>
                              </b>
                            </p>
                          </div>
                          <div className="text-center pt-20 top-bordered" style={{ borderTop: 'none' }}>
                            <section>
                              <h4 style={{ paddingBottom: '8px' }}>Use another service to log in.</h4>
                              <form method="post" className="form-horizontal" action="/Account/ExternalLogin">
                                <div>
                                    {/* <button type="submit" className="btntest fa fa-google"
                                      style={{ backgroundColor: '#ec4f1e', marginRight: '20px', borderRadius: '6px' }}
                                      name="provider" defaultValue="" title="Log in using your Google account" disabled></button> */}
                                    {/* <GoogleLogin
                                      clientId="1028275409428-d2a7sbt66295nmec2jsmmr9t0isloqdp.apps.googleusercontent.com"
                                      render={renderProps => (
                                        <button type="submit"
                                          onClick={renderProps.onClick}
                                          className="btntest fa fa-google"
                                          style={{ backgroundColor: '#ec4f1e', marginRight: '20px', borderRadius: '6px' }}
                                          name="provider" defaultValue="" title="Log in using your Google account"></button>
                                      )}
                                      buttonText="Login"
                                      onSuccess={responseGoogle}
                                      onFailure={responseGoogle}
                                      redirectUri='http://localhost:44338/login'
                                    /> */}
                                    <div className='google-login-div'>
                                      <GoogleLogin
                                        style={{ width: '25% !important', margin: 'auto !important' }}
                                        onSuccess={googleAuthSuccessResponseMessage}
                                        onError={googleAuthErrorResponseMessage} />
                                    </div>
                                    {/* <button type="submit" className="btntest fa fa-facebook"
                                      style={{ backgroundColor: '#3a5793', marginRight: 0, borderRadius: '6px', width: '45px' }}
                                      formTarget="_blank" name="provider" defaultValue="" title="Log in using your Facebook account" disabled></button> */}
                                    {/* <FacebookLogin
                                      appId="233261671133083"
                                      autoLoad={false}
                                      callback={onResponse}
                                      render={renderProps => (
                                        <button type="submit" className="btntest fa fa-facebook"
                                          onClick={renderProps.onClick}
                                          style={{ backgroundColor: '#3a5793', marginRight: 0, borderRadius: '6px', padding: '12px 16.5px' }}
                                          formTarget="_blank" name="provider" defaultValue="" title="Log in using your Facebook account"></button>
                                      )}
                                    /> */}
                                </div>
                                <input name="__RequestVerificationToken" type="hidden" defaultValue="" />
                                <input name="__RequestVerificationToken" type="hidden" defaultValue="" /></form>
                            </section>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-top not-visible"> <i className="fa fa-angle-up"></i> </div>
      <PrivacyFooter />
      {/* {localStorage.getItem('CustGUID') !== '00000000-0000-0000-0000-000000000000' ?
        null : <SignIn />} */}
      {/* {sendOtpApiResponse && sendOtpApiResponse.customerlogindata.GUID !== '00000000-0000-0000-0000-000000000000' ?
        <SignIn /> : null
      } */}
    </>
  );
}
export default Login
