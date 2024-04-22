import Constants from '../../App/constants';
import { httpRequest } from './apiServices';
import { ConstantsValues } from './homeServices';
const addressId = 0
const customerAddress = {
  "CustomerAddressId": 0,
  "AddressTypeId": 0,
  "Title": "string",
  "FirstName": "mayur",
  "LastName": "S",
  "Mobile": "8999468734",
  "CustomerId": "8713b493-e5f5-440b-a9ce-c77ff59591ae",
  "Address1": "pune",
  "Address2": "baner",
  "City": "Pune",
  "StateCode": "4410",
  "State": "Mharashtra",
  "CountryCode": "91",
  "Country": "India",
  "ZipCode": "411045",
  "isPrimary": true,
  "AddressName": "Pune",
  "IsLogicallyDeleted": true,
  "Consignee": "string",
  "isBillingAddress": 0,
  "Additional_info": "string",
  "Company": "string",
  "Email": "string",
  "Fax": "string",
  "IsprimaryBilling": true,
  "AddressTypeName": "string",
  "DeliveryLocalityLatitude": 0,
  "DeliveryLocalityLongitude": 0,
  "DeliveryLocalityPlaceId": "string",
  "DeliveryLocalityAddress": "string",
  "DeliveryLocalityArea": "string",
  "DeliveryLocalityCity": "string",
  "DeliveryLocalityState": "string",
  "DeliveryLocalityCountry": "string",
  "DeliveryLocalityPinCode": "string",
  "billingButton": true,
  "showDefaultButton": true
}
function addupdateAddress() {
  const url = `${Constants.urls.baseUrl}${Constants.endPoints.updateaddress}clientid=${ConstantsValues.ClientId}&customerGuid=${(localStorage.getItem('CustGUID') === null || localStorage.getItem('CustGUID') === undefined) ? ConstantsValues.defaultCustGUID : window.atob(localStorage.getItem('CustGUID'))}&customerAddress=${customerAddress}`;
  return httpRequest(url, 'POST');
}
function getfirstDeliveryslot() {
  const url = `${Constants.urls.baseUrl}${Constants.endPoints.gettomorrowsdeliveryslot}`;
  return httpRequest(url, 'GET');
}
function getsecondDeliveryslot() {
  const url = `${Constants.urls.baseUrl}${Constants.endPoints.getdayAftertomorrowsdeliveryslot}`;
  return httpRequest(url, 'GET');
}
function getcustomeraddress(addressID) {
  console.log("addressID===", addressID);
  const url = `${Constants.urls.baseUrl}${Constants.endPoints.customeraddress}clientid=${ConstantsValues.ClientId}&customerGuid=${(localStorage.getItem('CustGUID') === null || localStorage.getItem('CustGUID') === undefined) ? ConstantsValues.defaultCustGUID : window.atob(localStorage.getItem('CustGUID'))}&addressId=${typeof addressID !== 'object' && addressID ? addressID : addressId}&sellerid=${localStorage.getItem('sellerID') === null || localStorage.getItem('sellerID') === undefined ? ConstantsValues.defaultSellerID : localStorage.getItem('sellerID')}`;
  return httpRequest(url, 'GET');
}
function getdefaultaddress(customeraddressID) {
  const url = `${Constants.urls.baseUrl}${Constants.endPoints.defaultaddress}clientid=${ConstantsValues.ClientId}&customerGuid=${(localStorage.getItem('CustGUID') === null || localStorage.getItem('CustGUID') === undefined) ? ConstantsValues.defaultCustGUID : window.atob(localStorage.getItem('CustGUID'))}&customerAddressId=${customeraddressID}&isBilling=false`;
  return httpRequest(url, 'POST');
}
function deleteaddress(id) {
  const url = `${Constants.urls.baseUrl}${Constants.endPoints.deleteaddress}clientid=${ConstantsValues.ClientId}&customerGuid=${(localStorage.getItem('CustGUID') === null || localStorage.getItem('CustGUID') === undefined) ? ConstantsValues.defaultCustGUID : window.atob(localStorage.getItem('CustGUID'))}&addressId=${id}`;
  return httpRequest(url, 'POST');
}
function postUpdatedAddress(body) {
  const url = `${Constants.urls.baseUrl}${Constants.endPoints.updateaddress}clientid=${'1'}&customerGuid=${(localStorage.getItem('CustGUID') === null || localStorage.getItem('CustGUID') === undefined) ? ConstantsValues.defaultCustGUID : window.atob(localStorage.getItem('CustGUID'))}`;
  return httpRequest(url, 'POST', body);
}
function getServiceAvailability(body) {
  const url = `${Constants.urls.baseUrl}${Constants.endPoints.serviceAvailability}`;
  return httpRequest(url, 'POST', body);
}
function checkLogisticsStatus() {
  const url = `${Constants.urls.baseUrl}${Constants.endPoints.ShiprocketEnableDisable}clientid=${ConstantsValues.ClientId}&SellerId=${localStorage.getItem('sellerID') || ConstantsValues.defaultSellerID}`;
  return httpRequest(url, 'GET');
}
const CheckoutAPI = {
  addupdateAddress,
  getfirstDeliveryslot,
  getcustomeraddress,
  getsecondDeliveryslot,
  getdefaultaddress,
  deleteaddress,
  postUpdatedAddress,
  getServiceAvailability,
  checkLogisticsStatus
}
export default CheckoutAPI;
