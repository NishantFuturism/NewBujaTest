import Constants from '../../App/constants';
import { httpRequest } from './apiServices';
import { ConstantsValues } from './homeServices';
function sendOtprequest(username) {
  const url = `${Constants.urls.baseUrl}${Constants.endPoints.generateotpforregistrationnew}userName=${username}&sellerId=${localStorage.getItem('sellerID') === null || localStorage.getItem('sellerID') === undefined ? ConstantsValues.defaultSellerID : localStorage.getItem('sellerID')}`;
  return httpRequest(url, 'POST',);
}
function SendEmailAndSmsForRegistration(databody) {
  const url = `${Constants.urls.baseUrl}${Constants.endPoints.SendEmailAndSmsForRegistration}`;
  return httpRequest(url, 'POST', databody);
}
function SendEmailOrMobileForRegistration(userMobileNo, userEmail, password) {
  console.log('api register ', password)
  const fromSource = 'React'
  // console.log('api register ', mobileOREmail)
  const url = `${Constants.urls.baseUrl}${Constants.endPoints.SendEmailOrMobileForRegistration}fromSource=${fromSource}&EmailID=${userEmail}&PhoneNo=${userMobileNo}&password=${password}&sellerId=${localStorage.getItem('sellerID') || ConstantsValues.defaultSellerID}`;
  return httpRequest(url, 'POST',);
}
function sendUserRegistrationUsingGmailApi(userDetails) {
  const url = `${Constants.urls.baseUrl}${Constants.endPoints.register}`;
  return httpRequest(url, 'POST', userDetails);
}
// function sendOtprequestphone(username) {
//   const url = `${Constants.urls.baseUrl}${Constants.endPoints.generateotpforregistrationnew}userName=${username}`;
//   return httpRequest(url, 'POST',);
// }
const RegisterAPI = {
  sendOtprequest,
  SendEmailAndSmsForRegistration,
  SendEmailOrMobileForRegistration,
  sendUserRegistrationUsingGmailApi
}
export default RegisterAPI;