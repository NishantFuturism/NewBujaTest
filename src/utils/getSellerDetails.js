import axios from 'axios';
import { httpRequest } from '@/containers/MainPage/api/apiServices';
import Constants from '@/containers/App/constants';

const defaultResponse = {
  "Id": 0,
  "BPCode": "",
  "BPName": "",
  "BPUserName": null,
  "BPType": null,
  "EMail": "contactus@adibuja.com",
  "Phone": null,
  "Mobile": null,
  "CompanyName": "Adibuja",
  "Website": null,
  "FacebookUrl": null,
  "InstagramUrl": null,
  "TwitterUrl": null,
  "NoOfProducts": null,
  "AdditionalProductInfo": null,
  "AccountBalance": null,
  "CreditLimit": null,
  "GroupCode": null,
  "PaymentTermsCode": null,
  "OrdersBal": null,
  "DNotesBal": null,
  "PriceListNo": null,
  "BPCurrency": null,
  "Discount": null,
  "Remarks": null,
  "AgreementNum": null,
  "CreateDate": null,
  "UpdateDate": null,
  "ClientId": "1",
  "isActive": false,
  "IsLogicalDeleted": false,
  "isNew": false,
  "isApproved": false,
  "IsRejected": false,
  "BPCurrencyName": null,
  "PaymentTermsName": null,
  "ShowPassword": null,
  "AdminMemberId": 0,
  "LogoURL": "/assets1/img/icon/adibuja-logo.svg",
  "SupportEmail": null,
  "SupportPhoneNo": null,
  "AboutUS": null,
  "StoreURL": "adibuja.com",
  "DomainURL": "adibuja.com"
}

const getDetailsFromDomain = async (request) => {
  //console.log("getting called in seller details",request)
  // Call the API to get seller ID based on the request
  //const incomingDomainName = request.replace(/^www\./,'');
  let incomingDomainName = "";
  if (request && request!=="") {
    incomingDomainName = request.replace(/^www\./,'');
  } else {
    const currentUrl = window.location.origin;
    incomingDomainName = currentUrl.replace(/^https?\:\/\/(www\.)?/,'');
  }
  // const incomingDomainName = 'devprimecommerce.adibuja.com';
  // const incomingDomainName = 'adibuja.com';
  const url = `${Constants.urls.baseUrl}${Constants.endPoints.getSellerDetails}domainurl=${incomingDomainName}`;
  const responseData = await httpRequest(url, 'GET');
  if(responseData?.AdminMemberId) {
    return responseData;
  } else {
    return defaultResponse;
  }
};

export default getDetailsFromDomain;