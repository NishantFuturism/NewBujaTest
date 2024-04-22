import Constants from '../../App/constants';
import { httpRequest } from './apiServices';
import { ConstantsValues } from './homeServices';
function firsttimepasswordchange(ID) {
  // const obj = { UserName, Password }
  console.log("aid..", ID)
  const url = `${Constants.urls.baseUrl}${Constants.endPoints.firsttimepasswordchangedornot}data=${ID}&sellerId=${localStorage.getItem('sellerID') || ConstantsValues.defaultSellerID}`
  return httpRequest(url, 'POST');
}
function UpdateStatusFirstTime(ID) {
  const url = `${Constants.urls.baseUrl}${Constants.endPoints.UpdateStatusFirstTimePasswordChanged}data=${ID}`
  return httpRequest(url, 'POST');
}
function setupPasswordAPI(username, NewPassword, ConfirmPassword) {
  // const token = localStorage.getItem('generatedtoken');
  console.log("3valuees..", username, NewPassword, ConfirmPassword)
  const obj = { 
    username, 
    IsPasswordChangedForFirstTimeFlag: false, 
    NewPassword, ConfirmPassword, 
    ClientId: 1, 
    Token: null,
    SellerId: localStorage.getItem('sellerID') || ConstantsValues.defaultSellerID
  }
  const url = `${Constants.urls.baseUrl}${Constants.endPoints.SetupNewPasswordForReact}`
  return httpRequest(url, 'POST', obj);
}
function changePasswordAPI(UserName, NewPassword, OldPassword) {
  console.log('dd', UserName, NewPassword, OldPassword);
  const obj = {
    "UserName": UserName,
    "OldPassword": NewPassword,
    "NewPassword": OldPassword,
    "ClientId": 1,
    "CustomerType": 1,
    "SellerId": localStorage.getItem('sellerID') || ConstantsValues.defaultSellerID
  }
  const url = `${Constants.urls.baseUrl}${Constants.endPoints.changePassword}`
  return httpRequest(url, 'POST', obj);
}
// function verifyPassword(UserName, Password) {
//   const obj = { UserName, Password }
//   const url = `${Constants.urls.baseUrl}${Constants.endPoints.verifyLoginPassWord}`
//   return httpRequest(url, 'POST', obj);
// }
const managePasswordAPI = {
  firsttimepasswordchange, UpdateStatusFirstTime, setupPasswordAPI, changePasswordAPI
}
export default managePasswordAPI;