/* eslint-disable */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Link, useHistory } from 'react-router-dom';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useInjectReducer } from '@/utils/injectReducer';
import { useInjectSaga } from '@/utils/injectSaga';
import '../../public/assets1/css/bundle.css';
import '../../public/assets1/css/default.min.css';
import '../../public/assets/css/responsive.min.css';
import '../../public/assets/css/style.min.css';
import { ToastContainer } from 'react-toastify';
import adibujalogo from '../../public/assets1/img/icon/adibuja-logo.svg';
import Success from "../components/ShowAlert/success";
import { closeMsgBar } from '../containers/Login/actions';
import reducer from '../containers/Login/reducer';
import saga from '../containers/Login/saga';
import Api from '../containers/MainPage/api/homeServices'
// const api=Api.forgotpasswordApi;
import 'react-toastify/dist/ReactToastify.css';
import Constants from '../containers/App/constants';
import Image from 'next/image';
import getDetailsFromDomain from '@/utils/getSellerDetails';
import { ConstantsValues } from '@/containers/MainPage/api/homeServices';
import PrivacyFooter from '@/components/Footer/PrivacyFooter';
import NavigationLoader from '@/containers/NavigationLoader';
export function forgotPassward() {
  useInjectReducer({ key: 'login', reducer });
  useInjectSaga({ key: 'login', saga });
  const dispatch = useDispatch()
  const [Uname, setUname] = useState('');
  const [newname, setNewname] = useState('');
  const [firstLoadCheck, setFirstLoadCheck] = useState(0);
  const updatesuccessMsg = useSelector(state => state.login)
  const [isError, setisError] = useState(false);
  const [emailsuccess, setEmailSuccess] = useState(false);
  const [emailmessage, setemailmessage] = useState('')
  const [smssuccess, setSmsSuccess] = useState(false);
  const [smsmessage, setSmsmessage] = useState(false);
  const [resetMyPasswordBtnDisabled, setResetMyPasswordBtnDisabled] = useState(false);
  const [logoURL, setLogoURL] = useState('')
  const [isClient, setIsClient] = useState(false);
  // const sendOtpApiResponse = useSelector(state => state.login)
//   const history = useHistory()
const router = useRouter();

useEffect(() => {
  (async ()=> {
    const sellerDetailsFromDomain = await getDetailsFromDomain();
    console.log("sellerDetailsFromDomain==", sellerDetailsFromDomain)
    let sellerIdMain = ConstantsValues.defaultSellerID;
    if(sellerDetailsFromDomain && sellerDetailsFromDomain?.AdminMemberId) {
      sellerIdMain = sellerDetailsFromDomain.AdminMemberId;
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

  function closeMsgBarFunc() {
    setTimeout(() => {
      dispatch(closeMsgBar())
      setisError(false)
    }, 3000);
  }
  useEffect(() => {
    setFirstLoadCheck(firstLoadCheck + 1)
  }, [])
  useEffect(() => {
    closeMsgBarFunc()
  }, [updatesuccessMsg])
  function submit() {
    setResetMyPasswordBtnDisabled(true)
    setUname(document.getElementById('txtUserName').value)
    // dispatch(forgotPasswordAction(document.getElementById('txtUserName').value))
    if (localStorage.getItem('generatedtoken') !== null) {
      console.log('54--', localStorage.getItem('generatedtoken'))
      Api.forgotpasswordApi(document.getElementById('txtUserName').value)
        .then(response => {
          if (response.MessageTypeID === 3) {
            console.log('--response-if-case', response)
            setEmailSuccess(true)
            setemailmessage(response.Message)
            setTimeout(() => {
              setEmailSuccess(false)
              router.push({ pathname: '/login' })
            }, 3000);
          } else if (response.MessageTypeID === 8) {
            console.log('--response--else-case', response)
            setSmsSuccess(true)
            setisError(false)
            setSmsmessage(response.Message)
            setTimeout(() => {
              setSmsSuccess(false)
              router.push({ pathname: '/login' })
            }, 3000);
          } else {
            // alert('Else case' + JSON.stringify(response))
            setResetMyPasswordBtnDisabled(false)
            setSmsSuccess(true)
            setisError(true)
            setSmsmessage(response.Message)
            setTimeout(() => {
              setSmsSuccess(false)
            }, 3000)
          }
        })
        .catch(error => {
          console.log('error:::', error);
        });
    } else {
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
        .then(result => {
          result && localStorage.setItem('generatedtoken', result.access_token);
          Api.forgotpasswordApi(document.getElementById('txtUserName').value)
            .then(response => {
              if (response.MessageTypeID === 3) {
                console.log('--response-if-case', response)
                setEmailSuccess(true)
                setemailmessage(response.Message)
                setTimeout(() => {
                  setEmailSuccess(false)
                  router.push({ pathname: '/login' })
                }, 3000);
              } else if (response.MessageTypeID === 8) {
                console.log('--response--else-case', response)
                setSmsSuccess(true)
                setisError(false)
                setSmsmessage(response.Message)
                setTimeout(() => {
                  setSmsSuccess(false)
                  router.push({ pathname: '/login' })
                }, 3000);
              } else {
                // alert('Else case' + JSON.stringify(response))
                setResetMyPasswordBtnDisabled(false)
                setSmsSuccess(true)
                setisError(true)
                setSmsmessage(response.Message)
                setTimeout(() => {
                  setSmsSuccess(false)
                }, 3000)
              }
            })
            .catch(error => {
              console.log('error:::', error);
            });
        });
    }
  }
  // useEffect(() => {
  //   const emailphone = new RegExp(/^(?:\d{10}|\w+@\w+\.\w{2,3})$/)
  //   if (firstLoadCheck > 0) {
  //     if (!emailphone.test(Uname)) {
  //       setisError(true)
  //       dispatch(DirectMessage('Please enter mobile number (10 digit) or Email'))
  //       // document.getElementById('txtUserNameForOTP').focus()
  //     } else if (Uname) {
  //       console.log("name..", Uname)
  //       dispatch(changeUsername(Uname))
  //       document.getElementById("txtUserName").focus()
  //     } else {
  //       setisError(false)
  //       dispatch(DirectMessage('Invalid mobile number, Please try again!'))
  //     }
  //   }
  // }, [Uname])
  // const deliverypolicy = () => {
  //   localStorage.setItem('pagefootert', "delivery-policy-react")
  //   history.push('/subfooter')
  // }
  function onchangeFunc(e) {
    console.log("autovalue", e.target.value)
    // if (e.target.value.match("[^ ]") != null) ^(?! )[A-Za-z0-9-()]*(?<! )$

    // if (e.target.value.match("^(?! )[A-Za-z0-9-@.()]*(?<! )$") != null) {
    //   setNewname(e.target.value)
    // }

    if (/\s/g.test(e.target.value) === true) {
      const removeSpaceValue = e.target.value.replace(/\s/g, '');
      setNewname(removeSpaceValue)
    } else {
      setNewname(e.target.value)
    }
  }
  return (
    <>
      <NavigationLoader />
      <ToastContainer
        position="top-right"
      // draggable={true}
      // autoClose={50000}
      />
      {updatesuccessMsg !== undefined && updatesuccessMsg.IsMsgBar && < Success isError={isError} msg={updatesuccessMsg.addToCartMsg} />}
      <div className="login-wrapper pb-35">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
              <main className="site-main" id="primary">
                <div className="user-login">
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-12">
                      <div className="section-title text-center">
                        <p align="center" style={{
                          padding: '10px 0px'
                        }}>
                          <Link href="/">
                            {/* < img referrerPolicy='no-referrer' alt="brand-logo" src={adibujalogo} style={{ paddingLeft: '23px' }} width="198px" height="42px" /> */}
                            {isClient ? <img src={`${logoURL ? logoURL : '/assets1/img/icon/adibuja-logo.svg'}`} width="198" height="42" alt='brand-logo' style={{ paddingLeft: '23px' }} objectPosition={'center'} /> : ''}
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mainbodycontent">
                  <div className="login-wrapper pb-35">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                          <main id="primary" className="site-main">
                            <div className="user-login">
                              <div className="row">
                                <div className="col-12 col-sm-12 col-md-12">
                                  <div className="section-title text-center">
                                    <h3>Forgot Your Password?</h3>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-6 offset-lg-2 offset-xl-3">
                                  <div className="login-form">
                                    <form action="/forgotpassword" id="frm_chng_password" >
                                      <div className="form-group row align-items-center mb-4">
                                        <label htmlFor="email" className="col-sm-3"></label>
                                        <div className="col-sm-6">
                                          <input id="txtUserName" className="form-control" placeholder="Mobile Number (10 digit) / Email" required="" type="text" value={newname} onChange={e => onchangeFunc(e)} defaultValue={Uname} />
                                          <span className="text text-danger field-validation-valid" data-valmsg-for="UserName" data-valmsg-replace="true"></span>
                                        </div>
                                      </div>
                                      <div className="login-box text-center">
                                        <p style={{ color: "blue" }}>
                                          We will send you an email/SMS with a link to reset your password.
                                        </p>
                                        <button
                                          type="button"
                                          className="btn btn-secondary mb-4 mt-4"
                                          id="reset"
                                          onClick={submit}
                                          disabled={resetMyPasswordBtnDisabled}
                                        >Reset my password
                                        </button>
                                        <br />
                                        {emailsuccess && < Success isError={isError} msg={emailmessage} />}
                                        {smssuccess && < Success isError={isError} msg={smsmessage} />}
                                      </div>
                                      <div className="text-center pt-20 top-bordered">
                                        <p><Link href="/login">Back to Login</Link> </p>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </main>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="scroll-top not-visible"> <i className="fa fa-angle-up"></i> </div>
                <PrivacyFooter />
              </main >
            </div >
          </div >
        </div >
      </div >
    </>
  );
}
export default forgotPassward;