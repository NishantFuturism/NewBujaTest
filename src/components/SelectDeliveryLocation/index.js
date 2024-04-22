import CheckoutAPI from '@/containers/MainPage/api/checkout';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import LogoLoader from '../LoadingIndicator/LogoLoader';
import Cookies from 'js-cookie';
import ProductDetailAPI from '@/containers/MainPage/api/productdetail';
import { Message_data } from '@/context';

const SelectDeliveryLocation = ({
  addressList,
  fetchCustomerAddresses,
  fetchCourierServiceAvailability,
  fetchToggle,
  isUserLogin,
  loading,
  pinCodeCheck,
  setLocationMessage,
  setIsOutsideLocation,
}) => {
  const router = useRouter();
  const [allAddressList, setAllAddressList] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(0);
  const [selectedPincode, setSelectedPincode] = useState(0);
  const [isValidPincode, setIsValidPincode] = useState(true);
  const [isProductNotAvailable, setIsProductNotAvailable] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { compareRefresh, setCompareRefresh, selectedLocationZip, setSelectedLocationZip, selectedLocationName, setSelectedLocationName, locationUpdateFlag, setLocationUpdateFlag } = useContext(Message_data);


  useEffect(() => {
    setLocationMessage && setLocationMessage('')
    setIsOutsideLocation && setIsOutsideLocation(false)
    setLocationUpdateFlag(false)
  }, [])

  useEffect(() => {
    setIsLoading(loading)
  }, [loading])

  useEffect(() => {
    if(addressList?.length > 0) {
      const primaryAddressIndex = addressList.findIndex(item => item.isPrimary);
      if(primaryAddressIndex !== -1) {
        setSelectedAddress(primaryAddressIndex);
      }
      setAllAddressList(addressList);
    }
  }, [addressList])

  const handleAddressChange = async (CustomerAddressId, data) => {
    const productName = router.query.productName;
    let productDetails = {}
    setSelectedPincode(data?.ZipCode)
    setIsLoading(true);
    await ProductDetailAPI.getSkuv(productName, data?.ZipCode)
      .then(response => {
        productDetails = response?.skusModelMultivariant[0]
      })
      .catch(err => console.log('Error in product API::', err))
    if(!productDetails?.IsDeliveryAvailableToPinCode) {
      setIsProductNotAvailable(true);
      setIsLoading(false)
    }else if (productDetails?.IsDeliveryAvailableToPinCode && data.CustomerAddressId === CustomerAddressId) {
      CheckoutAPI.getdefaultaddress(CustomerAddressId);
      const requestBody = {
        "DeliveryLocalityPlaceId": data.DeliveryLocalityPlaceId,
        "CustomerId": 0,
        "DeliveryLocalityCity": data.DeliveryLocalityCity,
        "billingButton": false,
        "DeliveryLocalityAddress": data.DeliveryLocalityAddress,
        "DeliveryLocalityLatitude": data.DeliveryLocalityLatitude,
        "Additional_info": null,
        "AddressTypeId": data.AddressTypeId,
        "DeliveryLocalityArea": data.DeliveryLocalityArea,
        "DeliveryLocalityState": data.DeliveryLocalityState,
        "Address2": data.Address2,
        "AddressTypeName": data.AddressTypeName,
        "StateCode": "MH",
        "DeliveryLocalityPinCode": data.ZipCode,
        "FirstName": data.FirstName,
        "AddressName": data.AddressName,
        "City": data.City,
        "CustomerAddressId": data.CustomerAddressId,
        "DeliveryLocalityCountry": "India",
        "Email": null,
        "Fax": null,
        "CountryCode": "IN",
        "Address1": data.Address1,
        "ZipCode": data.ZipCode,
        "IsLogicallyDeleted": false,
        "State": data.State,
        "DeliveryLocalityLongitude": data.DeliveryLocalityLongitude,
        "showDefaultButton": data.showDefaultButton,
        "Consignee": null,
        "isPrimary": true,
        "Country": "India",
        "Mobile": data.Mobile,
        "IsprimaryBilling": data.IsprimaryBilling,
        "LastName": data.LastName,
        "Company": null,
        "isBillingAddress": data.isBillingAddress,
        "Title": null,
      }
      localStorage.setItem('pincodevalue', data.ZipCode);
      localStorage.setItem('sublocalityvalue', data?.City)
      Cookies.set('pincodevalue', data.ZipCode, { expires: 15 });
      Cookies.set('sublocalityvalue', data?.City, { expires: 15 })
      Cookies.remove('enteredCode');
      Cookies.remove('isLocationNotSelected')
      setLocationUpdateFlag(true)

      CheckoutAPI.postUpdatedAddress(requestBody)
        .then((resp) => {
          fetchCustomerAddresses();
          localStorage.removeItem('productDeliveryData')
          fetchCourierServiceAvailability(data?.ZipCode);
        })
        .catch(err => {
          console.log('Error in update address API:', err);
        })
    }
  }

  const handlePincodeChange = event => {
    const inputPincode = event.target.value;

    const truncatedPincode = inputPincode.slice(0, 6);
    setSelectedPincode(truncatedPincode);
  }


  const applyNewPincode = async () => {
    const pincodePattern = /^\d{6}$/;
    const isValid = pincodePattern.test(selectedPincode);
    setIsValidPincode(isValid);
    
    if(isValid) {
      setIsLoading(true);
      const productName = router.query.productName;
      let productDetails = {}
      
      await ProductDetailAPI.getSkuv(productName, selectedPincode)
        .then(response => {
          productDetails = response?.skusModelMultivariant[0]
        })
        .catch(err => console.log('Error in product API::', err))
      if(!productDetails?.IsDeliveryAvailableToPinCode) {
        setIsProductNotAvailable(true);
        setIsLoading(false)
      } else if(productDetails?.IsDeliveryAvailableToPinCode) {
        fetchCourierServiceAvailability(selectedPincode, 'changeAddress');
      }
    }
  }

  return (
    <>
      {isLoading && <LogoLoader isGlobal/>}
      <div className='d-flex flex-column address-list-container'>
        <div className='mb-3' style={{ fontSize: '16px', color: '#000', fontWeight: '600'}}>Select Delivery Address</div>
        {allAddressList?.length > 0 ? (
        <div className='address-container'>
        {allAddressList.map((item, index) => (
          <div 
            key={`addressList ${index}`} 
            className='addressList-box' 
            onClick={() => handleAddressChange(item.CustomerAddressId, item)}
          >
            <Form.Check
              type="radio"
              label={
                <>
                  <div>
                    <strong>{item?.FirstName} {item?.LastName}</strong>, {item?.ZipCode}
                    <span className='address-type'>{item?.AddressTypeName?.split(' ')?.[0]}</span>
                  </div>
                  <div>{item?.Address2}</div>
                </>}
              checked={(Cookies.get('enteredCode') || Cookies.get('isLocationNotSelected')) ? false : selectedAddress === index}
            />
          </div>
        ))}
      </div>
      ) : !isUserLogin ? (
        <div className='loginOnchangepdp'>
          <img src='/images/loginonpdp.png' alt='' width="50px" height="50px"/>  
          <div>
            <div style={{color:'#000000'}}>Login to see your Addresses</div>
            <Link 
              href='/login' 
              className='mb-2' 
              id="btnLoginchangeonpdp" 
              onClick={() => localStorage.setItem('lastVisitedUrl', router.asPath)}
            >
            Log in
            </Link>
          </div> 
        </div>
      ) : addressList?.length === 0 && (
        <div className='notFound-address'>No addresses found</div>
      )}
        
        {(allAddressList?.length > 0 || isUserLogin) && <span><Link href='/account/manageaddress'>Add an address</Link></span>}
        <div className="d-flex align-items-baseline">
          <div className="pincode-line" style={{ marginRight: '10px'}}></div>
          <div className='pincode-text' style={{ color: '#000', fontWeight: '600'}}>Use pincode to check delivery info</div>
          <div className="pincode-line" style={{ marginLeft: '10px'}}></div>
        </div>
        <div className='d-flex mt-2'>
          <input 
            type="number" 
            id="txtSearchDeliveryLocality" 
            className="form-control mr-2" 
            placeholder="Enter a Pincode" 
            value={selectedPincode ? selectedPincode : ''}
            onChange={handlePincodeChange}
          />
          <Button 
            type='button' 
            variant="dark" 
            style={{ boxShadow: 'none' }} 
            active 
            onClick={applyNewPincode}
            disabled={loading}
          >Apply</Button>
        </div>
        {!isValidPincode && <p style={{ color: 'red', marginBottom: 0 }}>Invalid pincode, Please enter a valid pincode.</p>}
        {/* {pinCodeCheck && <p style={{ color: 'red' }}>Invalid pincode, Pincode is not available.</p>} */}
        {(isProductNotAvailable || pinCodeCheck) && <p style={{ color: 'red', marginBottom: 0 }}>Currently out of stock for {selectedPincode}.</p>}
      </div>
    </>
  )
}

export default SelectDeliveryLocation;