/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/**
 *
 * LocationPopup
 *
 */
// import PropTypes from 'prop-types';
import React, { useEffect, useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { toast, ToastContainer } from 'react-toastify';
// import { compose } from 'redux';
// import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from '@/utils/injectReducer';
import { useInjectSaga } from '@/utils/injectSaga';
import Success from '../../components/ShowAlert/success';
import Warn from '../../components/ShowAlert/warn';
import Constants from '../App/constants';
import LocationApi from '../MainPage/api/Locationapi';
import { changed, getlocationtitle } from './actions';
import reducer from './reducer';
import saga from './saga';
import { Message_data } from '@/context';
import Cookies from 'js-cookie';
import SelectDeliveryLocation from '@/components/SelectDeliveryLocation';
//import DealdayProductOriginal from '../DealdayProductOriginal';
//import ToppSellingOriginal from '../ToppSellingOriginal';
// import { makeSelectLocationuser } from './selectors';
// import from 'react-router-dom';
export function LocationPopup(props) {
  const {
    input,
  } = props
  // const { popup } = props
  useInjectReducer({ key: 'locationPopup', reducer });
  useInjectSaga({ key: 'locationPopup', saga });
  const [enblesuggestion, setenblesuggestion] = useState(false)
  const [atosuggestdadta, setatosuggestdadta] = useState([])
  const [locationname, setlocationname] = useState('')
  const [Autolist, setAutolist] = useState('')
  const [current, setcurrent] = useState(false)
  const [auto, setauto] = useState(false)
  const [lat, setlat] = useState(false)
  const [long, setlong] = useState(false)
  const [address, setAddress] = useState('')
  const [pincode, setPincode] = useState('')
  const [locationupdate, setLocationUpdate] = useState(false)
  const [locationmsg, setLocationmsg] = useState('')
  const [locationstatus, setLocationstatus] = useState(false)
  const [warnstatus, setWarnstatus] = useState(false)
  const [Homerefresh, setHomerefresh] = useState(false)
  const [locationBlock, setlocationBlock] = useState(false)
  const locationPopupState = useSelector(state => state.locationPopup)
  const { selectedLocationZip, setSelectedLocationZip, selectedLocationName, setSelectedLocationName, setLocationUpdateFlag } = useContext(Message_data);
  useEffect(() => {
    // if (locationPopupState !== undefined) {
    //   if (locationPopupState.avilabiltymsg === 'NotAvailable') {
    //     alert('We are currently operational in Pune (selected locations). We are working on it and hang tight, we will serve you very soon!')
    //   }
    // }
    // dispatch(changed(locationname, atosuggestdadta));
  }, [auto])
  useEffect(() => {
    LocationApi.GoogleApi({})
      .then(response => {
        setatosuggestdadta(response)
      })
      .catch(error => {
        console.log('error:::', error);
      });
  }, []);
  useEffect(() => {
    dispatch(changed(locationname, atosuggestdadta));
  }, [auto])
  const dispatch = useDispatch();
  const autosuggestloaction = (e) => {
    setauto(true)
    //setlocationname(document.getElementById('txtSearchDeliveryLocality').value)
    setlocationname(e.target.value)
    // dispatch(changed(e.target.value, atosuggestdadta));
    const token = localStorage.getItem('generatedtoken') || Cookies.get('accessToken');
    setTimeout(() => fetch(`${Constants.urls.baseUrl}${Constants.endPoints.autocomplete}key=${atosuggestdadta.GooglePlacesApiKey}&keyword=${e.target.value}`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        accept: 'application/json',
        // accept: 'application/json',
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        // mode: 'cors',
        // "Access-Control-Allow-Headers": "*",
        // "Access-Control-Allow-Origin": "*",
        // "Access-Control-Allow-Methods": "*"
      },
      // body: JSON.stringify(form)
    })
      .then(res => res.text())
      .then(addressresponse => {
        const responsew = JSON.parse(addressresponse)
        setAutolist(responsew.predictions)
        setenblesuggestion(true)
      }), 2000)
  }
  // const URL = "https://meowfacts.herokuapp.com/"
  // async function getCatFact() {
  //   const response = await fetch(URL)
  //   console.log(await response.json())
  // }
  // useEffect(() => {
  //   getCatFact()
  // }, [])


  const findAndSetAddress = (detectMyLocationData,keyToConsider = "sublocality") => {
    let jsonParseRes = JSON.parse(detectMyLocationData)
    let resIndex = [];
    let addCompIndex = [];
    let typIndex = [];
    // console.log("is it Array",Array.isArray(detectMyLocationData.results));
    if(jsonParseRes.results && jsonParseRes.results.length > 0){
      jsonParseRes.results.map((result,resultIndex) => {
        if(resIndex.length > 0) return
        result.address_components.map((addressComponentItem,addressComponentIndex) => {
          if(addCompIndex.length > 0) return
          if(addressComponentItem.types && addressComponentItem.types.length > 0){
            addressComponentItem.types.map((type,typeIndex) => {
              if(typIndex.length > 0) return
              if(type == keyToConsider){
                // findRightAddressComponentIndex.push(resultIndex)
                resIndex.push(resultIndex);
                typIndex.push(typeIndex)
                addCompIndex.push(addressComponentIndex);
              }
            })
          }
        })
      })
    }
     if(resIndex.length > 0 && typIndex.length > 0 && addCompIndex.length > 0){
      return [jsonParseRes.results[resIndex].address_components[addCompIndex]]
     }else{
      
      return [
        {
          "long_name" : "",
          "short_name" : "",
          "types" : 
          [
            keyToConsider,
          ]
       }
      ]
     }
    


  }

  const findAndSetAddressOnLocationSelect = (addressToConsiderObj,keyToConsider = 'sublocality') => {
    
    const defaultValue = [
      {
        "long_name" : "",
        "short_name" : "",
        "types" : 
        [
          keyToConsider
        ]
     }
    ]
    
    if(addressToConsiderObj === null || addressToConsiderObj === undefined || addressToConsiderObj === ''){
      return defaultValue
    }
    let foundIndex = []
    addressToConsiderObj.address_components.map((address,parentIndex) => {
      if(foundIndex.length > 0) return
          address.types.map((type) => {
            if(foundIndex.length > 0) return
            if(type == keyToConsider){
                 foundIndex.push(parentIndex);
            }
          })
    })
     if(foundIndex.length == 0){
      
      return defaultValue
     }else{
      
      return [addressToConsiderObj.address_components[foundIndex]];
     }

  }



  useEffect(() => {
    if (current) {
      // dispatch(detectCurrentlocation(lat, long, atosuggestdadta))
    }
  }, [current, lat, long])
  const detectmylocation = () => {
    
    const error = () => {
      setlocationBlock(true)
    }
    const success = async(position) => {
      
      setlat(position.coords.latitude)
      setlong(position.coords.longitude)
      setcurrent(true)
      let keyForGoogleAPI = "";
      if (atosuggestdadta && atosuggestdadta.GooglePlacesApiKey) {
        keyForGoogleAPI = atosuggestdadta.GooglePlacesApiKey;
      } else {
       await LocationApi.GoogleApi({})
          .then(response => {
            keyForGoogleAPI = response.GooglePlacesApiKey;
          });
      }
      return fetch(`${Constants.endPoints.geocode}key=${keyForGoogleAPI}&latlng=${position.coords.latitude},${position.coords.longitude}&sensor=${true}`, {
        method: 'GET',
        headers: {
          accept: 'application/json',
          // 'Content-Type': 'application/json',
          // Authorization: `Bearer ${token}`,
        },
        // body: JSON.stringify(form)
      })
        .then(res => res.text())
        .then(addressresponse => {
          const token = localStorage.getItem('generatedtoken') || Cookies.get('accessToken');
          let tempCity = "";
          let address2 = "";
          let pincode2 = "";
          let city = "";
          //  console.log("findAndSetAddress()",findAndSetAddress(addressresponse)) ;
          if (JSON.parse(addressresponse).results && JSON.parse(addressresponse).results[0]) {
            // console.log("inside exec findAndSetAddress(addressresponse)",findAndSetAddress(addressresponse));
            // address2 = JSON.parse(addressresponse).results[0].address_components.filter(x => x.types[1] === 'sublocality')
            address2 = findAndSetAddress(addressresponse,"sublocality")
            pincode2 = findAndSetAddress(addressresponse,"postal_code") 
            // JSON.parse(addressresponse).results[0].address_components.filter(x => x.types[0] === 'postal_code')
            city = findAndSetAddress(addressresponse,"locality")
            // JSON.parse(addressresponse).results[0].address_components.filter(x => x.types[0] === 'locality')
            if (city && city[0] && city[0].long_name) {
              tempCity = city;
            } else {
              tempCity = findAndSetAddress(addressresponse,"locality")
              // JSON.parse(addressresponse).results[1].address_components.filter(x => x.types[0] === 'locality')
              if (tempCity && tempCity[0] && tempCity[0].long_name) {
                // do nothing
              } else {
                tempCity = findAndSetAddress(addressresponse,"locality")
                // JSON.parse(addressresponse).results[2].address_components.filter(x => x.types[0] === 'locality')
                if (tempCity && tempCity[0] && tempCity[0].long_name) {
                  // do nothing
                } else {
                  tempCity = findAndSetAddress(addressresponse,"locality")
                  // JSON.parse(addressresponse).results[3].address_components.filter(x => x.types[0] === 'locality')
                }
              }
            }
          } else {
            // address2 = findAndSetAddress(addressresponse,"sublocality")
            let addressRes = JSON.parse(addressresponse)?.results;
            if(addressRes?.address_components && addressRes?.address_components.length > 0){
              
              address2 = findAndSetAddressOnLocationSelect(addressRes,"sublocality")
              // pincode2 = findAndSetAddress(addressresponse,"postal_code")
              pincode2 = findAndSetAddressOnLocationSelect(addressRes,"postal_code")
              // JSON.parse(addressresponse).results.address_components.filter(x => x.types[0] === 'postal_code')
              // city = findAndSetAddress(addressresponse,"locality")
              city = findAndSetAddressOnLocationSelect(addressRes,"locality")
              // city = JSON.parse(addressresponse).results.address_components.filter(x => x.types[0] === 'locality')
              tempCity = city
            }
            
          }
          const state = findAndSetAddress(addressresponse,"administrative_area_level_1")
          // JSON.parse(addressresponse).results[0].address_components.filter(x => x.types[0] === 'administrative_area_level_1')
          const area = findAndSetAddress(addressresponse,"sublocality")
          return fetch(`${Constants.endPoints.checkserviceavailability}setsession=true&address=${address2[0].long_name}&area=${area[0].long_name}&city=${tempCity}&lat=${position.coords.latitude}&lng=${position.coords.longitude}&pincode=${pincode2[0].long_name}&placeid=${JSON.parse(addressresponse).results[0].place_id}&state=${state[0].long_name}`, {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${token}`,
            },
          })
            .then(res => res.json())
            .then(response => {
              // toast(response)
              if (response == "Available") {

                setPincode(pincode2[0].long_name) //Fix This when Luthania
          localStorage.setItem('sublocalityvalue', city[0].long_name) 
          localStorage.setItem('pincodevalue', pincode2[0].long_name)
          Cookies.set('sublocalityvalue', city[0].long_name, { expires: 15 });
          Cookies.set('pincodevalue', pincode2[0].long_name, { expires: 15 });
          Cookies.set('enteredCode', pincode2[0].long_name, {expires: 15})
          setSelectedLocationZip(pincode2[0].long_name)
          setSelectedLocationName(city[0].long_name)
          setAddress(city[0].long_name)

                setLocationstatus(true)
                setLocationmsg('Delivery location is updated ')
                setHomerefresh(true)
                setTimeout(() => {
                  props.fetchToggle()
                }, 3000);
                // toast('Delivery location is updated ')
                setLocationUpdate(true)
               Cookies.set('LocationPopupMsg', 'true');
              } else {
                setWarnstatus(true)
                setLocationmsg(`We are currently operational in Pune (selected locations). We're working on it and hang tight, we will serve you very soon!`)
                setTimeout(() => {
                  setlocationname('')
                  props.fetchToggle()
                }, 3000);
                // toast(`We are currently operational in Pune (selected locations). We're working on it and hang tight, we will serve you very soon!`)
              }
            });
        })
    }
    // navigator.geolocation.getCurrentPosition(success, error)
    navigator.geolocation.getCurrentPosition(success, error, { timeout: 10000 });
    // setlat(position.coords.latitude)
    // setlong(position.coords.longitude)
    // setcurrent(true)
    // return fetch(`${Constants.endPoints.geocode}key=${atosuggestdadta.GooglePlacesApiKey}&latlng=${position.coords.latitude},${position.coords.longitude}&sensor=${true}`, {
    //   method: 'GET',
    //   headers: {
    //     accept: 'application/json',
    //     // 'Content-Type': 'application/json',
    //     // Authorization: `Bearer ${token}`,
    //   },
    //   // body: JSON.stringify(form)
    // })
    //   .then(res => res.text())
    //   .then(addressresponse => {
    //     const token = localStorage.getItem('generatedtoken');
    //     console.log('registerresponse', addressresponse)
    //     const address2 = JSON.parse(addressresponse).results[0].address_components.filter(x => x.types[1] === 'sublocality')
    //     const pincode2 = JSON.parse(addressresponse).results[0].address_components.filter(x => x.types[0] === 'postal_code')
    //     const city = JSON.parse(addressresponse).results[0].address_components.filter(x => x.types[0] === 'locality')
    //     const state = JSON.parse(addressresponse).results[0].address_components.filter(x => x.types[0] === 'administrative_area_level_1')
    //     const area = JSON.parse(addressresponse).results[0].address_components.filter(x => x.types[1] === 'sublocality')
    //     console.log({ address2, pincode2, city });
    //     setPincode(pincode2[0].long_name)
    //     localStorage.setItem('pincodevalue',pincode2[0].long_name)
    //     setAddress(address2[0].long_name)
    //     return fetch(`${Constants.endPoints.checkserviceavailability}setsession=true&address=${address2[0].long_name}&area=${area[0].long_name}&city=${city[0].long_name}&lat=${position.coords.latitude}&lng=${position.coords.longitude}&pincode=${pincode2[0].long_name}&placeid=${JSON.parse(addressresponse).results[0].place_id}&state=${state[0].long_name}`, {
    //       method: 'GET',
    //       headers: {
    //         accept: 'application/json',
    //         Authorization: `Bearer ${token}`,
    //       },
    //     })
    //       .then(res => res.text())
    //       .then(response => {
    //         // toast(response)
    //         // console.log('DD', response)
    //         if (response !== "NotAvailable") {
    //           setLocationstatus(true)
    //           setLocationmsg('Delivery location is updated ')
    //           setHomerefresh(true)
    //           setTimeout(() => {
    //             props.fetchToggle()
    //           }, 3000);
    //           // toast('Delivery location is updated ')
    //           setLocationUpdate(true)
    //         } else {
    //           setWarnstatus(true)
    //           setLocationmsg(`We are currently operational in Pune (selected locations). We're working on it and hang tight, we will serve you very soon!`)
    //           setTimeout(() => {
    //             setlocationname('')
    //             props.fetchToggle()
    //           }, 3000);
    //           // toast(`We are currently operational in Pune (selected locations). We're working on it and hang tight, we will serve you very soon!`)
    //         }
    //       });
    //   })
    // Your Code
    // ( DO fetch call to get address from lat and lng
    // https://maps.googleapis.com/maps/api/geocode/json?key= 
    // <\API_KEY_HERE>&latlng="latitude","longitude"&sensor=true )
    // (error) => this.setState({ error: error.message }),
    // { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    // alert('location block')
  }
  // useEffect(() => {
  //   if (locationPopupState !== undefined) {
  //     setAutolist(locationPopupState.predictlist)
  //   }
  // }) // const Autolist = locationPopupState.predictlist
  function checkservice(description, selectedatavalue, placeid) {
    
    setlocationBlock(false)
    
    setlocationname(description)
    // setenteredvalue(selectedatavalue)
    const token = localStorage.getItem('generatedtoken') || Cookies.get('accessToken');
    // setenblesuggestion(false)
    // dispatch(checkserviceavailability(description, placeid, atosuggestdadta))
    return fetch(`${Constants.urls.baseUrl}${Constants.endPoints.placedetails}key=${atosuggestdadta.GooglePlacesApiKey}&placeId=${placeid}`, {
      method: 'POST',
      headers: {
        accept: 'application/json',
        // 'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      // body: JSON.stringify(form)
    })
      .then(res => res.text())
      .then(addressresponse => {
        
        const responsew = JSON.parse(addressresponse)
        
        if(responsew && responsew.status != "NOT_FOUND" && responsew.result != null){
          return fetch(`${Constants.endPoints.geocode}key=${atosuggestdadta.GooglePlacesApiKey}&latlng=${responsew.result.geometry.location.lat},${responsew.result.geometry.location.lng}&sensor=${true}`, {
            method: 'GET',
            headers: {
              accept: 'text/plain',
            },
            // body: JSON.stringify(form)
          })
            .then(res => res.text())
            .then(resaa => {
              const check = JSON.parse(resaa)
              // below code added to check if response address has zipcode or not
              
              const responseAddressList = check.results;
              let addressToConsider = "";
              for (let i = 0; i < responseAddressList.length; i += 1) {
                const formatAddressText = responseAddressList[i].formatted_address;
                if (/(\d{6})/.test(formatAddressText)) {
                  addressToConsider = responseAddressList[i];
                  break;
                }
              }
              if(addressToConsider == ''){
                setWarnstatus(true)
                setLocationmsg(`Address not found! Please search again`)
                setTimeout(() => {
                  setlocationname('')
                  props.fetchToggle()
                }, 500);
                return
              }
              // let newPinCode = "";
              
              const address1 = findAndSetAddressOnLocationSelect(addressToConsider,'sublocality')  
              // const address1 = addressToConsider.address_components.filter(x => x.types[1] === 'sublocality') //fix this
              const pincode1 = findAndSetAddressOnLocationSelect(addressToConsider,'postal_code') 
              
              let city = findAndSetAddressOnLocationSelect(addressToConsider,'locality');
              
              if(city == '' || city == undefined) city = ''
              if (city && city !== "Pune") {
                city = findAndSetAddressOnLocationSelect(addressToConsider,'administrative_area_level_3')
              }
              
              const state = findAndSetAddressOnLocationSelect(addressToConsider,'administrative_area_level_1')
              const area = findAndSetAddressOnLocationSelect(addressToConsider,'sublocality')  //Fix this
              setPincode(pincode1[0].long_name)
              if (address1.length > 0 && pincode1.length > 0 && area.length > 0 && state.length > 0 && city[0].long_name === 'Pune') {
                console.log("values stored in local and cookies")
                
              }
              if (address1.length > 0 && pincode1.length > 0 && area.length > 0 && state.length > 0) {
                // do nothing 
              } else {
                
                setWarnstatus(true)
                setLocationmsg(`Address not found! Please search again`)
                setTimeout(() => {
                  setlocationname('')
                  props.fetchToggle()
                }, 500);
              }
              // console.log("Futurism@@@",`${Constants.endPoints.checkserviceavailability}setsession=true&address=${address1[0].long_name}&area=${area[0].long_name}&city=${city[0].long_name}&lat=${responsew.result.geometry.location.lat}&lng=${responsew.result.geometry.location.lng}&pincode=${pincode1[0].long_name}&placeid=${JSON.parse(resaa).results[0].place_id}&state=${state[0].long_name}`);
              if (city && city[0] && city[0].long_name && city[0].long_name !== "" && city[0].long_name === 'Pune') {
                return fetch(`${Constants.endPoints.checkserviceavailability}setsession=true&address=${address1[0].long_name}&area=${area[0].long_name}&city=${city[0].long_name}&lat=${responsew.result.geometry.location.lat}&lng=${responsew.result.geometry.location.lng}&pincode=${pincode1[0].long_name}&placeid=${JSON.parse(resaa).results[0].place_id}&state=${state[0].long_name}`, {
                  method: 'GET',
                  // mode: 'cors',
                  headers: {
                    accept: 'application/json',
                    // 'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                  },
                })
                  .then(res => res.json())
                  .then(response => {
                    
                    // toast(response)
                    const msg = response
                    
                    if (msg === "Available") {

                      localStorage.setItem('sublocalityvalue', city[0].long_name)
                      localStorage.setItem('pincodevalue', pincode1[0].long_name)
                      Cookies.set('sublocalityvalue', city[0].long_name, { expires: 15 });
                      Cookies.set('pincodevalue', pincode1[0].long_name, { expires: 15 });
                      Cookies.set('enteredCode', pincode1[0].long_name, {expires: 15});
                      setSelectedLocationZip(pincode1[0].long_name)
                      setSelectedLocationName(city[0].long_name)
        
        
                      setAddress(address1[0].long_name)

                      setLocationstatus(true)
                      setLocationmsg('Delivery location is updated ')
                      setHomerefresh(true)
                      setTimeout(() => {
                        props.fetchToggle()
                      }, 3000);
                      // toast('Delivery location is updated ')
                      setLocationUpdate(true)
                      Cookies.set('LocationPopupMsg', 'true');
                    } else {
                      setWarnstatus(true)
                      setLocationmsg(`We are currently operational in Pune (selected locations). We're working on it and hang tight, we will serve you very soon!`)
                      setTimeout(() => {
                        setlocationname('')
                        props.fetchToggle()
                      }, 3000);
                      // toast(`We are currently operational in Pune (selected locations). We're working on it and hang tight, we will serve you very soon!`)
                    }
                    // if (response === "Available") {
                    //   toast('Delivery location is updated and Avialable')
                    // }
                    // else {
                    //   toast('Delivery location is updated and not Avialable')
                    // }
                  });
              }
              setWarnstatus(true)
              console.log("values stored in local and cookies22")
              setLocationmsg(`We are currently operational in Pune (selected locations). We're working on it and hang tight, we will serve you very soon!`)
              setTimeout(() => {
                setlocationname('')
                props.fetchToggle()
              }, 3000);
              return null;
              // });
              // const responsew = JSON.parse(addressresponse)
              // setAutolist(responsew.predictions)
              // setenblesuggestion(true)
            });
        }else{
          setWarnstatus(true)
          setLocationmsg(`We are currently operational in Pune (selected locations). We're working on it and hang tight, we will serve you very soon!`)
          setTimeout(() => {
            setlocationname('')
            props.fetchToggle()
          }, 500);
        }
        
        // const responsew = JSON.parse(addressresponse)
        // setAutolist(responsew.predictions)
        // setenblesuggestion(true)
      });
  }
  useEffect(() => {
    if (locationupdate) {
      dispatch(getlocationtitle(address, pincode, locationupdate))
    }
  }, [address, pincode, locationupdate])
  const closemsg = () => {
    // detectmylocation()
    setLocationstatus(false)
    props.fetchToggle()
  }
  
  const handleModalClose = () => {
    props.fetchToggle(); 
    if(!Cookies.get('LocationPopupMsg')) {
      Cookies.set('isLocationNotSelected', 'true', {expires: 15})
    }
    Cookies.set('LocationPopupMsg', 'true',{expires : 15});
  }
  
  return (
    <>
      <div>
        {locationstatus && <Success msg={locationmsg} close={closemsg} />}
        {warnstatus && <Warn msg={locationmsg} close={closemsg} />}
        {props?.isOutsideLocation && <Warn msg={props.locationMessage} close={closemsg} />}

        {/* <ToastContainer /> */}
        <div className='togglecityoverlay' style={{ position: 'fixed'}}>
          <div className="togglecitydrop" style={{ display: 'block' }}>
          {props.isProductPage && (
          <SelectDeliveryLocation 
            addressList={props.addressList}
            fetchCustomerAddresses={props.fetchCustomerAddresses}
            fetchCourierServiceAvailability={props.fetchCourierServiceAvailability}
            fetchToggle={props.fetchToggle}
            isUserLogin={props.isUserLogin}
            loading={props.loading}
            pinCodeCheck={props.pinCodeCheck}
            setLocationMessage={props.setLocationMessage}
            setIsOutsideLocation={props.setIsOutsideLocation}
          />
        )}
          {!props.isProductPage && (
              <span id="span"><b>Please select your delivery locality</b></span>)}
              {/* <a href className="fa fa-window-close pull-right"
                onClick={() => {
                  props.fetchToggle()
                }}
                style={{ cursor: 'pointer', fontSize: '23px', top: '2px', position: 'absolute', right: '3px' }} id="iclosepincodepopup"></a> */}
              <strong className='cross-button' onClick={handleModalClose}>&times;</strong>
              {/* <strong className='cross-button' onClick={() => {props.fetchToggle(); Cookies.set('LocationPopupMsg', 'true',{expires : 15}); }}>&times;</strong> */}
            {!props.isProductPage && <form action="#" autoComplete="off"> 
              <div className="form-row mt-10">
                {/* <style>
              .delivery-autocomplete-div {
                min - height: 20px;
              background-color: white;
              border-bottom: 1px #7b7777 solid;
              cursor: pointer;
              padding: 10px;
    }n.
            </style> */}
                <div className="form-group col-12">
                  <div id="divSearchDeliveryLocality" className="input-group">
                    <div id="inputdiv">
                      <input type="text" id="txtSearchDeliveryLocality" className="form-control" placeholder="Search Delivery Locality" onChange={(e) => autosuggestloaction(e)} value={locationname} />
                    </div>
                    <div className="input-group-append">
                      <div className="btn-group">
                        <button type="button" id="btnUseMyLocation" className="btn btn-default input-group-btn"
                          onClick={() => detectmylocation()}
                          style={{ backgroundColor: 'green', color: 'white', fontSize: '14px' }}>
                          <i className="fa fa-map-marker"></i> Detect My Location <i id="icnMyLocationSpinner" className="fa fa-spinner fa-spin" style={{ display: 'none' }}></i>
                        </button>
                      </div><br />
                    </div>
                  </div>
                  {
                    enblesuggestion ?
                      <div id="divDeliveryLocalitySuggestions"
                        style={{ position: 'absolute', zIndex: '999', width: '280px' }}>
                        {(Autolist || []).map((data,) => (
                          <ul className="list-group"
                          >
                            <li className="list-group-item delivery-autocomplete-div"
                              onClick={() => checkservice(data.description, data, data.place_id)}
                            >{data.description}</li>
                          </ul>
                        ))}
                      </div>
                      : null}
                </div>
                {locationBlock && <span style={{ color: 'red' }}>Sorry! Geo Location is not supported on your current browser! Please check your browser settings.</span>}
                <div></div>
              </div>
              <div id="HeaderNoteAlert"></div>
            </form>}
          </div>
        </div>
      </div>
      {/*Homerefresh && <DealdayProductOriginal />*/}
      {/*Homerefresh && <ToppSellingOriginal />*/}
    </>
  );
}
// function mapDispatchToProps() {
//   return {
//     // loaddeafault: evt => dispatch(defaultAction(evt))
//   };
// }
