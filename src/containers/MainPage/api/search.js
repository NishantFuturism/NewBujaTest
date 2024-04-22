import Constants from '../../App/constants';
import { httpRequest } from './apiServices';
import { ConstantsValues } from './homeServices';
function getAIautosuggestlist(todoserach) {
  const url = `${Constants.urls.baseUrl}${Constants.endPoints.AIAutosuggestion}clientId=${ConstantsValues.ClientId}&pincode=${ConstantsValues.pincode}&q=${todoserach}`;
  return httpRequest(url, 'POST',);
}
function getDBautosuggestlist(todoserach) {
  const url = `${Constants.urls.baseUrl}${Constants.endPoints.DBAutosuggestion}clientId=${ConstantsValues.ClientId}&LanguageId=${ConstantsValues.languageId}&pincode=${localStorage.getItem('pincodevalue') && localStorage.getItem('pincodevalue') !== "" ? localStorage.getItem('pincodevalue') : ConstantsValues.pincode}&q=${todoserach}&sellerid=${localStorage.getItem('sellerID') || ConstantsValues.defaultSellerID}`;
  return httpRequest(url, 'GET',);
}
function getsearchlist(NAME, Id, Fordfildid, staticfilterid, min, max, sortby) {
  // const url = `${Constants.urls.baseUrl}${Constants.endPoints.skusearchlist}clientId=${ConstantsValues.ClientId}&CatUrl=${NAME}&LanguageId=${ConstantsValues.languageId}&currencyCode=${'2'}&CustGUID=${(localStorage.getItem('CustGUID') === null || localStorage.getItem('CustGUID') === undefined) ? ConstantsValues.defaultCustGUID : window.atob(localStorage.getItem('CustGUID'))}&CartGUID=${(localStorage.getItem('CartGUID') === null || localStorage.getItem('CartGUID') === undefined) ? ConstantsValues.defaultCartGUID : window.atob(localStorage.getItem('CartGUID'))}&minPrice=&maxPrice=&filterval=&applicationids=&industriesids=&pageNo=&limit=${'40'}&sortby=&IsFeatured=&pincode=&requestfrom=&formfieldId=&IsAIAPIDown=&requestfrom=`;
  let url
  if (Id === "" && Fordfildid === "") {
    url = `${Constants.urls.baseUrl}${Constants.endPoints.skusearchlist}CurrencyCode=${ConstantsValues.currencyCode}&IsFeatured=0&clientId=${ConstantsValues.ClientId}&custGUID=${(localStorage.getItem('CustGUID') === null || localStorage.getItem('CustGUID') === undefined) ? ConstantsValues.defaultCustGUID : window.atob(localStorage.getItem('CustGUID'))}&fixedShippingDurationId=0&languageId=${ConstantsValues.languageId}&limit=1000&sortby=${sortby}&pageNo=1&cartGuid=${(localStorage.getItem('CartGUID') === null || localStorage.getItem('CartGUID') === undefined) ? ConstantsValues.defaultCartGUID : window.atob(localStorage.getItem('CartGUID'))}&catUrl=${NAME}&formfieldId=${Fordfildid}&filterval=${Id}&staticfilterid=${staticfilterid}&maxPrice=${max}&minPrice=${min}&pincode=${ConstantsValues.pincode}&sellerid=${localStorage.getItem('sellerID') || ConstantsValues.defaultSellerID}`;
  }
  else if ((Id !== "" && Fordfildid !== "") && staticfilterid !== "") {
    url = `${Constants.urls.baseUrl}${Constants.endPoints.skusearchlist}CurrencyCode=${ConstantsValues.currencyCode}&IsFeatured=0&clientId=${ConstantsValues.ClientId}&custGUID=${(localStorage.getItem('CustGUID') === null || localStorage.getItem('CustGUID') === undefined) ? ConstantsValues.defaultCustGUID : window.atob(localStorage.getItem('CustGUID'))}&fixedShippingDurationId=0&languageId=${ConstantsValues.languageId}&limit=1000&sortby=${sortby}&pageNo=1&cartGuid=${(localStorage.getItem('CartGUID') === null || localStorage.getItem('CartGUID') === undefined) ? ConstantsValues.defaultCartGUID : window.atob(localStorage.getItem('CartGUID'))}&catUrl=${NAME}&formfieldId=${Fordfildid}&filterval=${Id}&staticfilterid=${staticfilterid}&maxPrice=${max}&minPrice=${min}&pincode=${ConstantsValues.pincode}&sellerid=${localStorage.getItem('sellerID') || ConstantsValues.defaultSellerID}`;
  }
  else {
    url = `${Constants.urls.baseUrl}${Constants.endPoints.skusearchlist}CurrencyCode=${ConstantsValues.currencyCode}&IsFeatured=0&clientId=${ConstantsValues.ClientId}&custGUID=${(localStorage.getItem('CustGUID') === null || localStorage.getItem('CustGUID') === undefined) ? ConstantsValues.defaultCustGUID : window.atob(localStorage.getItem('CustGUID'))}&fixedShippingDurationId=0&languageId=${ConstantsValues.languageId}&limit=1000&sortby=${sortby}&pageNo=1&cartGuid=${(localStorage.getItem('CartGUID') === null || localStorage.getItem('CartGUID') === undefined) ? ConstantsValues.defaultCartGUID : window.atob(localStorage.getItem('CartGUID'))}&catUrl=${NAME}&formfieldId=${Fordfildid}&filterval=${Id}&maxPrice=${max}&minPrice=${min}&pincode=${ConstantsValues.pincode}&sellerid=${localStorage.getItem('sellerID') || ConstantsValues.defaultSellerID}`;
  }
  // const url = `${Constants.urls.baseUrl}${Constants.endPoints.skusearchlist}CurrencyCode=${ConstantsValues.currencyCode}&cartGuid=${(localStorage.getItem('CartGUID') === null || localStorage.getItem('CartGUID') === undefined) ? ConstantsValues.defaultCartGUID : window.atob(localStorage.getItem('CartGUID'))}&catUrl=${NAME}&clientId=1&custGUID=${(localStorage.getItem('CustGUID') === null || localStorage.getItem('CustGUID') === undefined) ? ConstantsValues.defaultCustGUID : window.atob(localStorage.getItem('CustGUID'))}&fixedShippingDurationId=0&languageId=2&limit=40`;
  return httpRequest(url, 'GET',);
}
function getCRMTrackSearch(SearchItem, IPAddress, currentDate, genrateToken) {
  console.log("CRM deatils===", SearchItem, IPAddress, localStorage.getItem('CustGUID'))
  if(localStorage.getItem('CustGUID') !== null && localStorage.getItem('CustGUID') !== undefined){
    if('00000000-0000-0000-0000-000000000000' === localStorage.getItem('CustGUID')){
      var UserType = 'Visitor'
    }else{
      var UserType = 'RegisteredUser'
    }
  }
  console.log("UserType=", UserType)
  if(localStorage.getItem('Email') !== 'null' && localStorage.getItem('Email') !== undefined && localStorage.getItem('Email') !== ''){
     var UserName = localStorage.getItem('Email'); 
     console.log("UserName=", UserName)
  }else if(localStorage.getItem('UserLastPhone') !== 'null' && localStorage.getItem('UserLastPhone') !== undefined){
    var UserName = localStorage.getItem('UserLastPhone'); 
    console.log("UserName=", UserName)
  }else{
    var UserName = 'Guest'
  }
  console.log("UserName=", UserName)
  //const url = `${Constants.urls.baseUrl}${Constants.endPoints.CRMTrack}SearchItem=${false}&IPAddress=${IPAddress}&Username=${UserName}&UserType=${UserType}&Geolocation=${"Pune,Maharashtra,India(Lon:73.765585,Lat:18.5681)"}&ModifiedOn=${currentDate}&CreatedOn=${currentDate}&EmailAddress=${UserName}&SkuId=${SkuId}&CategoryId=${''}&IsSearchedItem=${'false'}&IsViewedItem=${true}&FromSource=${'ReactWeb'}`
  const url = `${Constants.urls.baseUrl}${Constants.endPoints.CRMTrack}`;
  const dataBody = {
    "SearchItem": SearchItem,
    "IPAddress": IPAddress,
    "Username": UserName,
    "UserType": UserType,
    "Geolocation": "Pune,Maharashtra,India(Lon:73.765585,Lat:18.5681)",
    "CreatedOn": currentDate,
    "ModifiedOn": currentDate,
    "EmailAddress": UserName,
    "SkuId": 0,
    "CategoryId": "",
    "IsSearchedItem": true,
   "IsAddedToCart": false,
    "IsViewedItem": false,
    "AddToCartCount": 0,
    "ProductViewCount": 0,
    "ProductQty": "",
    "FromSource": "ReactWeb",
    "SellerId": localStorage.getItem('sellerID') || ConstantsValues.defaultSellerID,
  };
 // const token = localStorage.getItem('generatedtoken');
  var options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${genrateToken}`,
    },
    body: JSON.stringify(dataBody)
  }
  fetch(url, options)
  .then((rescrm)=>{
    console.log("rescrm=", rescrm)
  })
  //return httpRequest(url, 'POST', dataBody);

}

const SearchAPI = {
  getAIautosuggestlist,
  getDBautosuggestlist,
  getsearchlist,
  getCRMTrackSearch
}
export default SearchAPI;
