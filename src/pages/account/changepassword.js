/* eslint-disable default-case */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
// import { is } from 'immutable';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { toast, ToastContainer } from 'react-toastify';
// import { toast } from 'react-toastify';
import { useInjectReducer } from '@/utils/injectReducer';
import { useInjectSaga } from '@/utils/injectSaga';
import '../../../public/assets1/css/default.min.css';
// import '../../../assets1/css/bundle.css';
// import './Header.css';
import '../../../public/assets1/css/responsive.min.css';
// import '../../../public/assets1/css/style.min.css';
import '../../../public/assets/css/style.min.css';
import Footer from '../../components/Footer/footer';
import Header from '../../components/Header';
// import SubNavigation from '../../components/SubNavigation';
// import managePasswordAPI from '../MainPage/api/managePasswordAPI';
import { isFirstTimeUpdateAction, setpassword } from '../../containers/MyAccount/actions';
import BreadCrumb from '../../containers/MyAccount/myAccountBreadcrumb';
import MyAccountSideNav from '../../containers/MyAccount/MyAccountSideNav';
import reducer from '../../containers/MyAccount/reducer';
import saga from '../../containers/MyAccount/saga';

import managePasswordAPI from '../../containers/MainPage/api/managePasswordAPI';
////import history from '../../utils/history';
import { useRouter } from 'next/router';

import 'react-toastify/dist/ReactToastify.css';
import Warn from '../../components/ShowAlert/warn';
import Success from '../../components/ShowAlert/success';
export function ManagePassword() {
  useInjectReducer({ key: 'myAccount', reducer });
  useInjectSaga({ key: 'myAccount', saga });
  const [FirstLoad, setFirstLoad] = useState(0);
  // const [isVarified, setIsVarified] = useState(false);
  const [oneLetter, setOneLetter] = useState(false);
  const [oneCapital, setOneCapital] = useState(false);
  const [oneNumber, setNumber] = useState(false);
  const [sameOrNot, setsameOrNot] = useState(false);
  const [oneSpacialChar, setOneSpacialChar] = useState(false);
  const [eightChars, setEightChars] = useState(false);
  const [Shown1password, setShown1password] = useState(false);
  const [showValidation, setValidation] = useState(false);
  const [ShowOpassword, setShowOpassword] = useState(false);
  const [ShowCnfpassword, setShowCnfpassword] = useState(false);
  const [n1passwordTxt, setn1passwordTxt] = useState('');
  const [OpasswordTxt, setOpasswordTxt] = useState('');
  const [cnfpasswordTxt, setcnfpasswordTxt] = useState('');
  const [isFirstTimeUpdate, setisFirstTimeUpdate] = useState('');
  const [passWord, setpassWord] = useState("");
  const [warnmsg, setWarnmsg] = useState('')
  const [Warnstatus, setWarnstatus] = useState(false)
  const [showSuccessAlert, setShowSuccessAlert] = useState(false)
  const [successAlertMsg, setSuccessAlertMsg] = useState(false)
  const [updateButtonClicked, setUpdateButtonClicked] = useState(false)
  const [showCurrPswError, setShowCurrPswError] = useState(false)
  const [showNewPswError, setShowNewPswError] = useState(false)
  const [showConfirmPswError, setShowConfirmPswError] = useState(false)
  const myAccountData = useSelector(state => state.myAccount)
  const [isUserLogin, setIsUserLogin] = useState()
  const router = useRouter();

  console.log('isUserLogin--', isUserLogin)
  // const data = useSelector(state => state.myAccount)
  const dispatch = useDispatch()
  console.log('myAccountData', myAccountData);
  useEffect(()=>{
    if(n1passwordTxt === '' && OpasswordTxt === '' && cnfpasswordTxt === ''){
      setUpdateButtonClicked(true)
    }
  },[n1passwordTxt])
  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {

    // setufirstname(window.atob(localStorage.getItem('UserFirstName')))
    // setlastnamw(window.atob(localStorage.getItem('UserLastName')))
    // setphone(localStorage.getItem('UserLastPhone'))
    console.log(`47--${window.atob(localStorage.getItem('CustGUID'))}`)
    // console.log(`48--${ localStorage.hasOwnProperty('CustGUID')}`)
    if (Object.prototype.hasOwnProperty.call(localStorage, 'CustGUID')) {
      if (window.atob(localStorage.getItem('CustGUID')) !== null || window.atob(localStorage.getItem('CustGUID')) !== undefined || window.atob(localStorage.getItem('CustGUID')) !== '00000000-0000-0000-0000-000000000000') {
        console.log('51')
        setIsUserLogin(true)
      } else {
        console.log('54')
        setIsUserLogin(false)
      }
    }
    else {
      setIsUserLogin(false)
    }
}
  }, [isUserLogin])
  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
    setFirstLoad(FirstLoad + 1)
    if (window.atob(localStorage.getItem('LoingID')) && window.atob(localStorage.getItem('LoingID')) !== "" && window.atob(localStorage.getItem('LoingID')).length === 10) {
      console.log("rf..", window.atob(localStorage.getItem('LoingID')))
      dispatch(isFirstTimeUpdateAction(window.atob(localStorage.getItem('LoingID'))));
      setpassWord(window.atob(localStorage.getItem('LoingID')))
    }
    if (localStorage.getItem('Email') && (localStorage.getItem('Email')) !== "" && (localStorage.getItem('Email')).length > 10) {
      console.log("rf1..", localStorage.getItem('Email'))
      dispatch(isFirstTimeUpdateAction(localStorage.getItem('Email')));
      setpassWord(localStorage.getItem('Email'))
    }
    else if (localStorage.getItem('RegisterID') && localStorage.getItem('RegisterID') !== "") {
      console.log("rf2..", localStorage.getItem('RegisterID'))
      dispatch(isFirstTimeUpdateAction(localStorage.getItem('RegisterID')));
      setpassWord(localStorage.getItem('RegisterID'))
      console.log("passWord..", passWord)
    }
    // else if(window.atob(localStorage.getItem('Email'))&& window.atob(localStorage.getItem('Email'))!=='')
    // {
    //   dispatch(isFirstTimeUpdateAction(window.atob(localStorage.getItem('Email')))); 
    // }
    else {
      console.log("notthing");
    }
}
  }, [])
  // useEffect(() => {
  //   if (myAccountData && myAccountData.updateStatus === 1) {
  //     toast("Password change successfully")
  //   }
  // })
  useEffect(() => {
    if (n1passwordTxt !== cnfpasswordTxt) {
      setsameOrNot(true)
    } else {
      setsameOrNot(false)
      if (OpasswordTxt && eightChars && oneLetter && oneCapital && oneSpacialChar && oneNumber) {
        // setIsVarified(true)
      }
    }
  }, [cnfpasswordTxt])
  useEffect(() => {
    if (n1passwordTxt.length >= 8) {
      setEightChars(true)
    }
    const atleastOneNumber = new RegExp(/.*[0-9]+.*/)
    const atleastOneCap = new RegExp(/.*[A-Z]+.*/)
    const atleastOneSpecialChar = new RegExp(/.*[^A-Za-z0-9].*/)
    if (atleastOneCap.test(n1passwordTxt)) {
      setOneCapital(true)
    }
    if (atleastOneSpecialChar.test(n1passwordTxt)) {
      setOneSpacialChar(true)
    }
    if (n1passwordTxt !== '') {
      setOneLetter(true)
    }
    if (atleastOneNumber.test(n1passwordTxt)) {
      setNumber(true)
    }
    if (oneCapital && oneSpacialChar && oneLetter && oneNumber && n1passwordTxt.length > 7) {
      setValidation(false)
    }
    if(showNewPswError) {
      setOneCapital(false);
      setOneLetter(false);
      setNumber(false);
      setOneSpacialChar(false);
      setEightChars(false);
    }
  }, [n1passwordTxt, showNewPswError])
  useEffect(() => {
    console.log('myAccountData--', myAccountData)
    if (myAccountData && myAccountData.updatestatus !== undefined) {
      console.log("myAccountData.updatestatus", myAccountData.updatestatus);
      if (myAccountData && myAccountData.updatestatus.MessageTypeID === 3) {
        toast("Incorrect Password")
      }
      else if (myAccountData && myAccountData.updatestatus.MessageTypeID === 2) {
        toast("Incorrect current password")
      }
    }
  }, [myAccountData && myAccountData.updatestatus])
  useEffect(() => {
    console.log('myAccountData1', myAccountData);
    if (myAccountData && myAccountData.isFirstTime === 'True') {
      setisFirstTimeUpdate('True')
    } else {
      setisFirstTimeUpdate(false)
    }
    if (myAccountData && myAccountData.spassword.MessageTypeID === 3) {
      setShowSuccessAlert(true)
      setSuccessAlertMsg('Password added successfully, Please login again!')
      setTimeout(() => {
        setShowSuccessAlert(false)
        localStorage.clear()
        router.push("/")
      }, 3000)
    }
  }, [myAccountData])
  function submit() {
    // console.log("chkval..", window.atob(localStorage.getItem('LoingID')) || localStorage.getItem('RegisterID'))
    let username
    if (localStorage.getItem('UserLastPhone') !== 'null' && localStorage.getItem('UserLastPhone') !== '' && localStorage.getItem('UserLastPhone') !== undefined) {
      username = localStorage.getItem('UserLastPhone')
      console.log('User Email:- 168', localStorage.getItem('UserLastPhone'))
    } else if (localStorage.getItem('Email') !== 'null' && localStorage.getItem('Email') !== '' && localStorage.getItem('Email') !== undefined) {
      username = localStorage.getItem('Email')
      console.log('User Email:- 168', localStorage.getItem('Email'))
    }
    console.log('User Email:- 168', localStorage.getItem('Email'))
    console.log('User Phone no:-169', localStorage.getItem('UserLastPhone'))
    if (isFirstTimeUpdate) {
      console.log("isFirstTimeUpdate..", isFirstTimeUpdate)
      console.log("updateval1..", username, OpasswordTxt, n1passwordTxt)
      
      console.log('273', showCurrPswError, showNewPswError, showConfirmPswError, sameOrNot)
      if (OpasswordTxt === '' || OpasswordTxt === null || OpasswordTxt.length === 0) {
        // alert(262)
        setShowCurrPswError(true)
      }
      if (n1passwordTxt === '' || n1passwordTxt === null || n1passwordTxt.length === 0) {
        setShowNewPswError(true)
      }
      if (cnfpasswordTxt === '' || cnfpasswordTxt === null || cnfpasswordTxt.length === 0) {
        setShowConfirmPswError(true)
      }
      if (n1passwordTxt !== cnfpasswordTxt) {
        setsameOrNot(true)
      }
      setUpdateButtonClicked(true)
      
      if(showCurrPswError === false && showNewPswError === false && showConfirmPswError === false && sameOrNot === false){
      // dispatch(updatePasswordAction(username, OpasswordTxt, n1passwordTxt))
      managePasswordAPI.changePasswordAPI(username, OpasswordTxt, n1passwordTxt)
        .then(response => {
          if (response.MessageTypeID === 2) {
            setWarnstatus(true)
            setWarnmsg(response.Message)
            setisFirstTimeUpdate('True')
            setTimeout(() => {
              setWarnstatus(false)
              setUpdateButtonClicked(false)
            }, 3000);
          }
          if (response.MessageTypeID === 3) {
            setWarnstatus(true)
            setWarnmsg(response.Message)
            setisFirstTimeUpdate('True')
            setTimeout(() => {
              setWarnstatus(false)
              setUpdateButtonClicked(false)
            }, 3000);
          }
          if (response.MessageTypeID === 6 || response.MessageTypeID === 4) {
            setShowSuccessAlert(true)
            setSuccessAlertMsg('Password reset successfully, Please login again!')
            setTimeout(() => {
              setShowSuccessAlert(false)
              localStorage.clear()
              router.push("/")
            }, 3000);
          }
        })
        .catch(error => {
          console.log('error:::', error);
        });
      }
      
    } else {
      console.log("isFirstTimeUpdate1..", isFirstTimeUpdate)
      console.log("usernamevalue..", username)
    // dispatch(setpassword(username, n1passwordTxt, cnfpasswordTxt))
    if (n1passwordTxt === '' || n1passwordTxt === null || n1passwordTxt.length === 0) {
      setShowNewPswError(true)
    }
    if (cnfpasswordTxt === '' || cnfpasswordTxt === null || cnfpasswordTxt.length === 0) {
      setShowConfirmPswError(true)
    }
    console.log('295', showNewPswError, showConfirmPswError, sameOrNot)
    setUpdateButtonClicked(true)
     managePasswordAPI.setupPasswordAPI(username, n1passwordTxt, cnfpasswordTxt)
     .then((setpass)=>{
      console.log("225usernamevalue..", setpass)
      if (setpass.MessageTypeID === 1) {
        setShowSuccessAlert(true)
        setSuccessAlertMsg('Password reset successfully, Please login again!')
        setTimeout(() => {
          setShowSuccessAlert(false)
          localStorage.clear()
          router.push("/")
        }, 3000);
      }
      // if (setpass && setpass.isFirstTime === 'True') {
      //   setisFirstTimeUpdate('True')
      // } else {
      //   setisFirstTimeUpdate(false)
      // }
      if (setpass && setpass.MessageTypeID === 3) {
        setShowSuccessAlert(true)
        setSuccessAlertMsg('Password added successfully, Please login again!')
        setTimeout(() => {
          setShowSuccessAlert(false)
          localStorage.clear()
          router.push("/")
        }, 3000)
      }
      if (setpass && setpass.MessageTypeID === 1) {
        setShowSuccessAlert(true)
        setSuccessAlertMsg('Password added successfully, Please login again!')
        setTimeout(() => {
          setShowSuccessAlert(false)
          localStorage.clear()
          router.push("/")
        }, 3000)
      }
     })
      // dispatch(passwordresponse(spassword))
      // localStorage.clear()
      // history.push("/")
    }
  }
  function setNewPassword(e) {
    console.log("pswdvalue..", e.target.value)
    setn1passwordTxt(e.target.value)
    setValidation(true)
  }
  function showSameError() {
    if (cnfpasswordTxt && n1passwordTxt === cnfpasswordTxt) {
      setsameOrNot(false)
    }
  }
  const handleChangeCurrent = (e) => {
    setOpasswordTxt(e.target.value)
    if (e.target.value === '' || e.target.value === null || e.target.value.length === 0) {
      setShowCurrPswError(true)
    }else{
      setShowCurrPswError(false)
    }

    if ((n1passwordTxt !== cnfpasswordTxt) || (e.target.value === '' || e.target.value === null || e.target.value.length === 0) || 
    (n1passwordTxt === '' || n1passwordTxt === null || n1passwordTxt.length === 0) ||
    (cnfpasswordTxt === '' || cnfpasswordTxt === null || cnfpasswordTxt.length === 0)) {
      setUpdateButtonClicked(true)
    }else{
      setUpdateButtonClicked(false)
    }
  }
  const handleChangeNew = (e) => {
    setn1passwordTxt(e.target.value)
    console.log("handleChangeConfirm=", e, n1passwordTxt, e.target.value);
    if (e.target.value === '' || e.target.value === null || e.target.value.length === 0) {
      setShowNewPswError(true)
    } else {
      setShowNewPswError(false)
    }

    if (cnfpasswordTxt === e.target.value && (e.target.value !== '' && e.target.value !== null && e.target.value.length !== 0)) {
      setUpdateButtonClicked(false)
    }else{
      setUpdateButtonClicked(true)
    }
  }
  const handleChangeConfirm = (e) => {
    console.log("356handleChangeConfirm=", n1passwordTxt, e.target.value);
    setcnfpasswordTxt(e.target.value)
    if (e.target.value === '' || e.target.value === null || e.target.value.length === 0) {
      setShowConfirmPswError(true)
    } else {
      setShowConfirmPswError(false)
    }

    if (n1passwordTxt === e.target.value && (e.target.value !== '' && e.target.value !== null && e.target.value.length !== 0)) {
      setUpdateButtonClicked(false)
    }else{
      setUpdateButtonClicked(true)
    }
  }
  const closemsg = () => {
    // detectmylocation()
    setWarnstatus(false)
  }
  console.log('paa', isFirstTimeUpdate);
  return (
    <>
      {
        // (isUserLogin === true || isUserLogin !== null || isUserLogin !== undefined)
        (isUserLogin === false)
          ?
          router.back({ pathname: '/login', })
          :
          <div>
            <ToastContainer
              position="top-right"
            // draggable={true}
            // autoClose={50000}
            />
            {showSuccessAlert && <Success msg={successAlertMsg} close={closemsg} />}
            {Warnstatus && <Warn msg={warnmsg} close={closemsg} />}
            <Header />
            <BreadCrumb myAccount="My Account" activepage="Setup Password" />
            {/* <SubNavigation /> */}
            <div className="my-account-wrapper pb-20">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                    <main id="primary" className="site-main">
                      <div className="user-dashboard">
                        <div className="main-dashboard">
                          <div className="row">
                            <MyAccountSideNav />
                            <div className="col-12 col-sm-12 col-md-12 col-lg-10">
                              <div className="tab-content dashboard-content" id="profile">
                                {isFirstTimeUpdate === 'True' ? <h3>Change Password</h3> : <h3> Setup Password</h3>}
                                <div id="updatepasswordform" className="login-form">
                                  {/* <form action="/changepassword" id="frm_chng_password" method="post" noValidate="novalidate"> */}
                                  {/* <input name="__RequestVerificationToken" type="hidden" value="CfDJ8PTROn1IXadAuEGiURnaXAxp5cS6lYENt7BAYHrZ2mYN_gS7EQYcP67GppOVtEw8oVLxK5PW_gvSg_zDxHprPCaL57Ywd4rv2P1LVC_Jv-1ifSxQ9UQ-CZGjiMa1B4f74vRAc00SyzbQqyESb5Qfw8DMsbiWMoN762W4sktCWt__Cn2okWX4SAzMHUMqXgIRMg"> */}
                                  {isFirstTimeUpdate === 'True' && <div className="form-group row">
                                    <label htmlFor="inputpassword" className="col-12 col-sm-12 col-md-4 col-lg-3 col-form-label">Current Password <span className="text-danger">*</span></label>
                                    <div className="col-12 col-sm-12 col-md-8 col-lg-6">
                                      <input type={ShowOpassword ? 'text' : "password"} className="form-control" id="opassword" placeholder="Current Password " onChange={e => handleChangeCurrent(e)}  required="" name="OldPassword" />
                                      <button className="pass-show-btn mt-0" type="button">
                                        <i id="pass-statust" onClick={() => setShowOpassword(!ShowOpassword)} className={`fa ${ShowOpassword ? 'fa-eye' : 'fa-eye-slash' }`}>
                                        </i>
                                      </button>
                                      {
                                          showCurrPswError &&
                                          <span className="text text-danger field-validation-valid" >
                                            Please enter current password</span>
                                      }
                                    </div>
                                  </div>}
                                  <div className="form-group row">
                                    <label htmlFor="newpassword" className="col-12 col-sm-12 col-md-4 col-lg-3 col-form-label">New Password <span className="text-danger">*</span></label>
                                    <div className="col-12 col-sm-12 col-md-8 col-lg-6">
                                      <input type={Shown1password ? 'text' : "password"} className="form-control" id="n1password" onClick={setNewPassword} onChange={e => handleChangeNew(e)} placeholder="New Password " required="" name="NewPassword" />
                                      <button className="pass-show-btn mt-0" type="button">
                                        {/* {!Shown1password ? */}
                                        <i id="pass-statust" onClick={() => setShown1password(!Shown1password)}
                                          className={`fa ${Shown1password ? 'fa-eye' : 'fa-eye-slash' }`}></i>
                                        {/* : <i id="pass-statust" onClick={() => setShown1password(!Shown1password)} className="fa-eye-slash"></i>
                                  } */}
                                      </button>
                                    
                                      {
                                        showNewPswError &&
                                        <span className="text text-danger field-validation-valid" >
                                          Please enter new password</span>
                                      }
                                      {showValidation && <div id="pswd_info1">
                                      <h4>Password must meet the following requirements</h4>
                                      <ul>
                                        <div style={{ color: `${oneLetter ? 'green' : 'red'}` }}>
                                          <i className={`fa ${oneLetter ? 'fa-check' : 'fa-close'}`} ></i>
                                          <li style={{ diaplay: 'inline' }} id="letter" className="invalidpswd">  At least <strong>one letter</strong></li>
                                        </div>
                                        <div style={{ color: `${oneCapital ? 'green' : 'red'}` }}>
                                          <i className={`fa ${oneCapital ? 'fa-check' : 'fa-close'}`} > </i>
                                          <li id="capital" className="invalidpswd">  At least <strong> one capital letter
                                          </strong></li>
                                        </div>
                                        <div style={{ color: `${oneNumber ? 'green' : 'red'}` }}>
                                          <i className={`fa ${oneNumber ? 'fa-check' : 'fa-close'}`} > </i>
                                          <li id="number" className="invalidpswd">  At least <strong> one number</strong></li>
                                        </div>
                                        <div style={{ color: `${oneSpacialChar ? 'green' : 'red'}` }}>
                                          <i className={`fa ${oneSpacialChar ? 'fa-check' : 'fa-close'}`} > </i>
                                          <li id="schar" className="invalidpswd">  At least <strong> one special character</strong></li>
                                        </div>
                                        <div style={{ color: `${eightChars ? 'green' : 'red'}` }}>
                                          <i className={`fa ${eightChars ? 'fa-check' : 'fa-close'}`} > </i>
                                          <li id="length" className="invalidpswd">  Be at least <strong>8 characters</strong></li>
                                        </div>
                                      </ul>
                                    </div>
                                    }
                                    </div>
                                    
                                  </div>
                                  <div className="form-group row">
                                    <label htmlFor="c-password" className="col-12 col-sm-12 col-md-4 col-lg-3 col-form-label">Confirm Password <span className="text-danger">*</span></label>
                                    <div className="col-12 col-sm-12 col-md-8 col-lg-6">
                                      <input type={ShowCnfpassword ? 'text' : "password"} onClick={showSameError} onChange={(e)=> handleChangeConfirm(e)} className="form-control" id="cnfpassword" placeholder="Confirm Password " required="" name="ConfirmPassword" />
                                      <button className="pass-show-btn mt-0" type="button" >
                                        <i id="pass-statust" onClick={() => setShowCnfpassword(!ShowCnfpassword)} className={`fa ${ShowCnfpassword ? 'fa-eye' : 'fa-eye-slash'}`}></i>
                                      </button>
                                      {
                                        showConfirmPswError ?
                                        <span className="text text-danger field-validation-valid" >
                                          Please enter confirm password</span>
                                      : sameOrNot && <span className="text text-danger field-validation-valid" >
                                        New Password and Confirm password must be same</span>}
                                    </div>
                                  </div>
                                  <div className="form-group row">
                                    <div className="col-12 col-sm-12 col-md-4 col-lg-3 col-form-label">&nbsp;</div>
                                    <div className="col-12 col-sm-12 col-md-8 col-lg-6">
                                      <Link href={"#"}>
                                        <button
                                          type="submit"
                                          disabled={updateButtonClicked}
                                          className="btn btn-secondary mr-2"
                                          onClick={submit}
                                          style={{ marginLeft: "0" }}>
                                          <i className="fa fa-save" ></i>
                                          {!isFirstTimeUpdate ? ' Save' : ' Update'}
                                        </button>
                                      </Link>
                                      {isFirstTimeUpdate &&
                                        <Link
                                          href="/account/dashboard"
                                          className="btn btn-secondary">
                                          <i className="fa fa-times"></i> Cancel
                                        </Link>}
                                    </div>
                                  </div>
                                  <div className="col-md-12 col-sm-12">
                                  </div>
                                  {/* </form> */}
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
            </div >
            <Footer />
          </div>
      }
    </>
  )
}
export default ManagePassword