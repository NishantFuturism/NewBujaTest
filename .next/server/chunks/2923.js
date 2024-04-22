"use strict";
exports.id = 2923;
exports.ids = [2923];
exports.modules = {

/***/ 5829:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Input = styled_components__WEBPACK_IMPORTED_MODULE_0___default().input.withConfig({
    componentId: "sc-c87f1da-0"
})`
  // outline: none;
  // border: none;
  // border-bottom: 1px dotted #999;
  // background-color: transparent;
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);


/***/ }),

/***/ 2923:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: () => (/* binding */ AddressForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4409);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _App_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1824);
/* harmony import */ var _HomePage_Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5829);
/* harmony import */ var _MainPage_api_homeServices__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4171);
/* harmony import */ var _MainPage_api_checkout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5938);
/* harmony import */ var _MainPage_api_profile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3843);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6734);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_10__);
/* eslint-disable no-const-assign */ /* eslint-disable react/prop-types */ /* eslint-disable consistent-return */ /* eslint-disable no-useless-escape */ 


// import { useDispatch, useSelector } from 'react-redux';


// import { string } from 'prop-types';





// import { updateprofile } from '../MyAccount/actions'


function AddressForm(props) {
    const { register, handleSubmit, formState: { errors } } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)();
    console.log("props---", props);
    const [atosuggestdadta, setatosuggestdadta] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    console.log("atosuggestdadta---", atosuggestdadta);
    const [refreshlist, setrefreshlist] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    // const [ciustomerid, setciustomerid] = useState('')
    // const [phonuser, setphonuser] = useState('')
    // const [customeraddressid, setcustomeraddressid] = useState(0)
    const [Seleced, setSeleced] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [Firstname, setFirstName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [firstNameError, setFirstNameError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [LastName, setLastName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [lastNameError, setLastNameError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    console.log("Firstname--", Firstname);
    const [mobNo, setMobno] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [mobileNoError, setMobileNoError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [address1, setAddress1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [address1Error, setAddress1Error] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [address2, setAddress2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [address2Error, setAddress2Error] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [usrPincode, setPincode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [usrPincodeError, setPincodeError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [userCity, setUserCity] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [userCityError, setUserCityError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [customerAddressList, setCustomerAddressList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [primaryAdreesId, setPrimaryAdreesId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [showInfoPopUP, setShowInfoPopUP] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    let token = null;
    console.log("customerAddressList---", customerAddressList.length);
    const sortByfiltersList = [
        {
            ListItem: "Other",
            id: 3,
            value: "Other"
        },
        {
            ListItem: " Home Address",
            id: 1,
            value: "Home Address"
        },
        {
            ListItem: " Work/Office Address",
            id: 2,
            value: "Work/Office Address"
        }
    ];
    // const [lastname, setlastname]=useState([])
    const addressform = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.proceedToBuy);
    console.log({
        addressform
    });
    // const dispatch = useDispatch();
    // const encodedData = window.btoa(response.GUID); // encode a string                             
    // console.log("getcustomerbyphone", encodedData);
    // localStorage.setItem('CustGUID', encodedData)
    // console.log("getcustomerbyphone", response);
    // const encodedFirstName = localStorage.getItem('UserFirstName');
    // const Firstname = encodedFirstName;
    // const lastname = window.atob(localStorage.getItem('UserLastName'))
    let phone = "";
    const addresstype = props.AddressTypeName.map((id)=>id.AddressTypeName);
    console.log("addresstype", addresstype);
    const addresstypelist = [
        ...new Set(addresstype)
    ];
    console.log("addresstypelist", addresstypelist);
    const profileReducer = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.myAccount);
    console.log("profileReducer--", profileReducer);
    // useEffect(() => {
    //   if (props.userdetail !== undefined) {
    //     setlastname(props.userdetail.customerlogindata)
    //   }
    // }, [props.userdetail])
    // useEffect(() => {
    //   onSubmit()
    // }, [])
    // useEffect(() => {
    //   if (props.editdata !== undefined) {
    //     setcustomeraddressid(props.editdata.CustomerAddressId)
    //   }
    // })
    // useEffect(() => {
    //   if (props.userdetail !== undefined) {
    //     setciustomerid(props.userdetail.CustomerId)
    //   }
    // }, [])
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        fetch(`${_App_constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP.endPoints.token}`, {
            method: "POST",
            headers: {
                accept: "application/x-www-form-urlencoded",
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: "username=FCAPICL0100145&password=JHASGjnknkjhIhAjksnjansasasMKLAHNSJHGASB02012121&grant_type=password"
        }).then(async (res)=>{
            if (res.status === 200) {
                let resp = await res.json();
                console.log("converted token", resp);
                if (resp && resp.access_token) {
                    localStorage.setItem("generatedtoken", resp.access_token);
                }
            }
        });
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (phone === null) {
        // setphonuser('')
        }
    }, [
        phone
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (props !== undefined) {
            setatosuggestdadta(props.atosuggestdadta);
        // setlastname(props.userdetail.customerlogindata.LastName)
        }
    }, [
        props
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        fetchaddress();
    }, []);
    function fetchaddress() {
        // alert('fetchaddresslist from index')
        _MainPage_api_checkout__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.getcustomeraddress({}).then((response)=>{
            const customerAdressId = response?.find((item)=>item.isPrimary)?.CustomerAddressId;
            setPrimaryAdreesId(customerAdressId);
            setCustomerAddressList(response);
        }).catch((err)=>{
            throw err;
        });
    }
    // const onSubmit = (data) => {
    //   console.log('data', data, props.userdetail);
    //   // dispatch(updateaAddress(data))
    //   // console.log(document.getElementById('btnSaveCustAddress'))
    //   const token = localStorage.getItem('generatedtoken');
    //   const formdata = JSON.stringify({
    //     "CustomerAddressId": customeraddressid,
    //     "AddressTypeId": data.AddressTypeId,
    //     "Title": "string",
    //     "FirstName": data.FirstName,
    //     "LastName": data.LastName,
    //     "Mobile": data.Mobile,
    //     "CustomerId": '37936',
    //     "Address1": data.Address1,
    //     "Address2": data.Address2,
    //     "City": data.City,
    //     "StateCode": null,
    //     "State": "string",
    //     "CountryCode": data.CountryCode,
    //     "Country": data.CountryCode,
    //     "ZipCode": data.ZipCode,
    //     "isPrimary": false,
    //     "AddressName": null,
    //     "IsLogicallyDeleted": true,
    //     "Consignee": null,
    //     "isBillingAddress": 0,
    //     "Additional_info": null,
    //     "Company": null,
    //     "Email": null,
    //     "Fax": null,
    //     "IsprimaryBilling": false,
    //     "AddressTypeName": "string",
    //     "DeliveryLocalityLatitude": atosuggestdadta.DefaultDeliveryLocality_Lat,
    //     "DeliveryLocalityLongitude": atosuggestdadta.DefaultDeliveryLocality_Long,
    //     "DeliveryLocalityPlaceId": atosuggestdadta.DefaultDeliveryLocality_PlaceId,
    //     "DeliveryLocalityAddress": atosuggestdadta.DefaultDeliveryLocality_Address,
    //     "DeliveryLocalityArea": atosuggestdadta.DefaultDeliveryLocality_Area,
    //     "DeliveryLocalityCity": atosuggestdadta.DefaultDeliveryLocality_City,
    //     "DeliveryLocalityState": atosuggestdadta.DefaultDeliveryLocality_State,
    //     "DeliveryLocalityCountry": "",
    //     "DeliveryLocalityPinCode": atosuggestdadta.DefaultDeliveryLocality_Pincode,
    //     "billingButton": false,
    //     "showDefaultButton": false
    //   })
    //   const formdata =
    //     JSON.stringify({
    //       CustomerAddressId: customeraddressid,
    //       AddressTypeId: data.AddressTypeId,
    //       Title: "string",
    //       FirstName: data.FirstName,
    //       LastName: data.LastName,
    //       Mobile: data.Mobile,
    //       CustomerId: ciustomerid,
    //       Address1: data.Address1,
    //       Address2: data.Address2,
    //       City: data.City,
    //       StateCode: "string",
    //       State: "Mharashtra",
    //       CountryCode: data.CountryCode,
    //       Country: "India",
    //       ZipCode: data.ZipCode,
    //       isPrimary: false,
    //       AddressName: data.City,
    //       IsLogicallyDeleted: true,
    //       Consignee: "string",
    //       isBillingAddress: 0,
    //       Additional_info: "string",
    //       Company: "string",
    //       Email: "string",
    //       Fax: "string",
    //       IsprimaryBilling: false,
    //       AddressTypeName: "string",
    //       DeliveryLocalityLatitude: atosuggestdadta.DefaultDeliveryLocality_Lat,
    //       DeliveryLocalityLongitude: atosuggestdadta.DefaultDeliveryLocality_Long,
    //       DeliveryLocalityPlaceId: atosuggestdadta.DefaultDeliveryLocality_PlaceId,
    //       DeliveryLocalityAddress: atosuggestdadta.DefaultDeliveryLocality_Address,
    //       DeliveryLocalityArea: atosuggestdadta.DefaultDeliveryLocality_Area,
    //       DeliveryLocalityCity: atosuggestdadta.DefaultDeliveryLocality_City,
    //       DeliveryLocalityState: atosuggestdadta.DefaultDeliveryLocality_State,
    //       DeliveryLocalityCountry: '',
    //       DeliveryLocalityPinCode: atosuggestdadta.DefaultDeliveryLocality_Pincode,
    //       billingButton: false,
    //       showDefaultButton: false
    //     })
    //   console.log({ formdata });
    //   return fetch(`${Constants.urls.baseUrl}${Constants.endPoints.updateaddress}clientid=${ConstantsValues.ClientId}&customerGuid=${(localStorage.getItem('CustGUID') === null || localStorage.getItem('CustGUID') === undefined) ? ConstantsValues.defaultCustGUID : window.atob(localStorage.getItem('CustGUID'))}`, {
    //     method: 'POST',
    //     headers: {
    //       accept: 'application/json',
    //       'Content-Type': 'application/json',
    //       Authorization: `Bearer ${token}`,
    //     },
    //     body: formdata
    //   })
    //     .then(res => res.json()
    //       .then(response => {
    //         console.log({ response });
    //         alert(response)
    //         props.fetchaddress()
    //         props.cancelform()
    //       }))
    // }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
    // props.setlist(true)
    // props.fetchaddress()
    }, [
        refreshlist
    ]);
    function onSubmitForm(data) {
        console.log("aa", data, address1);
        token = localStorage.getItem("generatedtoken");
        const userDeatils = JSON.parse(localStorage.getItem("User"));
        console.log("token", token);
        console.log(`Firstname--${Firstname}`);
        console.log(`LastName--${LastName}`);
        if (Firstname === undefined || Firstname === "") {
            // firstNameError
            setFirstNameError(true);
        }
        if (LastName === undefined || LastName === "") {
            setLastNameError(true);
        }
        if (mobNo === undefined || mobNo === "") {
            setMobileNoError(true);
        }
        if (address1 === undefined || address1 === "") {
            // alert('address1--', address1)
            setAddress1Error(true);
        }
        if (address1?.length < 6) {
            setAddress1Error(true);
        }
        if (userCity === undefined || userCity === "") {
            setUserCityError(true);
        }
        if (Firstname !== undefined && Firstname !== "" && LastName !== undefined && LastName !== "" && mobNo !== undefined && mobNo !== "" && address1 !== undefined && address1 !== "" && address1?.length >= 6 && userCity !== undefined && userCity !== "" && !usrPincodeError) {
            // alert(`Firstname--${ Firstname}`)
            // alert(`LastName--${ LastName}`)
            // alert(`address1--${address1}`)
            const form = {
                // 'token': token,
                "DeliveryLocalityPlaceId": atosuggestdadta.DefaultDeliveryLocality_PlaceId,
                // "CustomerId": props.edit === true ? props.editdata.CustomerId : props.userdetail.CustomerId,
                "CustomerId": props.editdata1.CustomerId ? props.editdata1.CustomerId : userDeatils[0]?.CustomerId,
                "DeliveryLocalityCity": atosuggestdadta.DefaultDeliveryLocality_City,
                "billingButton": false,
                "DeliveryLocalityAddress": atosuggestdadta.DefaultDeliveryLocality_Address,
                "DeliveryLocalityLatitude": atosuggestdadta.DefaultDeliveryLocality_Lat,
                "Additional_info": null,
                "AddressTypeId": Seleced !== "" ? Seleced : props.editdata1.AddressTypeId,
                "DeliveryLocalityArea": atosuggestdadta.DefaultDeliveryLocality_Area,
                "DeliveryLocalityState": atosuggestdadta.DefaultDeliveryLocality_State,
                "Address2": document.getElementById("Address2").value,
                "AddressTypeName": null,
                "StateCode": "MH",
                "DeliveryLocalityPinCode": usrPincode !== "" ? usrPincode : atosuggestdadta.DefaultDeliveryLocality_Pincode,
                // "FirstName": data.FirstName,
                "FirstName": document.getElementById("FirstName").value,
                "AddressName": null,
                // "City": data.City,
                "City": document.getElementById("City").value,
                "CustomerAddressId": props.edit ? props.editdata1.CustomerAddressId : 0,
                "DeliveryLocalityCountry": "India",
                "Email": null,
                "Fax": null,
                "CountryCode": "IN",
                // "Address1": data.Address1,
                "Address1": address1,
                // "Address2" :  props.edit ? props.editdata1.DeliveryLocalityAddress : ,
                "ZipCode": document.getElementById("ZipCode").value,
                "IsLogicallyDeleted": null,
                "State": document.getElementById("StateCode").value,
                "DeliveryLocalityLongitude": atosuggestdadta.DefaultDeliveryLocality_Long,
                "showDefaultButton": false,
                "Consignee": null,
                // "isPrimary": !!props.edit,
                "isPrimary": props.edit ? props.editdata1.isPrimary : false,
                "Country": "India",
                // "Mobile": data.Mobile,
                "Mobile": document.getElementById("Mobile").value,
                "IsprimaryBilling": props.editdata1.IsprimaryBilling ? props.editdata1.IsprimaryBilling : false,
                // "LastName": data.LastName,
                "LastName": document.getElementById("LastName").value,
                "Company": null,
                "isBillingAddress": 0,
                "Title": null
            };
            console.log("hggh", form);
            console.log("hggh222222", token);
            return fetch(`${_App_constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP.urls.baseUrl}${_App_constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP.endPoints.updateaddress}clientid=${"1"}&customerGuid=${localStorage.getItem("CustGUID") === null || localStorage.getItem("CustGUID") === undefined ? _MainPage_api_homeServices__WEBPACK_IMPORTED_MODULE_7__/* .ConstantsValues */ .r.defaultCustGUID : window.atob(localStorage.getItem("CustGUID"))}`, {
                method: "POST",
                headers: {
                    accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(form)
            }).then((res)=>res.text()).then((addressresponse)=>{
                console.log("registerresponse", addressresponse);
                // alert(addressresponse)
                console.log("customerAddressList-----", customerAddressList);
                if (customerAddressList.length === 0 && (localStorage.getItem("UserFirstName") === "" || localStorage.getItem("UserFirstName") === null || localStorage.getItem("UserFirstName") === "null" || localStorage.getItem("UserFirstName") === undefined || localStorage.getItem("UserFirstName") === "undefined") && (localStorage.getItem("UserLastName") === "" || localStorage.getItem("UserLastName") === null || localStorage.getItem("UserLastName") === "null" || localStorage.getItem("UserLastName") === undefined || localStorage.getItem("UserLastName") === "undefined")) {
                    // alert(`customerAddressList-----${ customerAddressList}`)
                    // setTimeout(() => {
                    //   saveProfileData()
                    // }, 2000)
                    setShowInfoPopUP(true);
                } else {
                    console.log("address form data--", form);
                    (0,react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast)(addressresponse);
                    setrefreshlist(true);
                    if (!props.edit && primaryAdreesId) {
                        _MainPage_api_checkout__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.getdefaultaddress(primaryAdreesId);
                    }
                    fetchaddress();
                    props.cancelform();
                    props.fetchAddressOfIndexPage() // this call is to check address list is empty or not before proceeding to buy
                    ;
                }
            });
        }
    }
    const localStorageDataUpdated = (title, fName, lName, emailVal, mobileVal, companyValue, receiveOfferValue)=>{
        localStorage.setItem("UserTitle", title);
        localStorage.setItem("UserFirstName", fName);
        localStorage.setItem("UserLastName", lName);
        localStorage.setItem("Email", emailVal);
        localStorage.setItem("UserLastPhone", mobileVal);
        localStorage.setItem("UserCompanyName", companyValue);
        localStorage.setItem("UserReceiveOffer", receiveOfferValue);
    };
    const saveProfileData = ()=>{
        setShowInfoPopUP(false);
        // alert('saveProfileData--')
        const userTitileValue = null;
        const firstNameTrim = Firstname.trim();
        const lastNameTrim = LastName.trim();
        let emailWithSpace;
        let mobilevalue;
        const companyNameTrim = "";
        const receivedOfferCheckboxValue = false;
        // If localStorage of email is not null 
        if (localStorage.getItem("Email") !== "" || localStorage.getItem("Email") !== null || localStorage.getItem("Email") !== "null" || localStorage.getItem("Email") !== undefined || localStorage.getItem("Email") !== "undefined") {
            emailWithSpace = localStorage.getItem("Email").trim();
        }
        // If localStorage of email is null
        if (localStorage.getItem("Email") === "" || localStorage.getItem("Email") === null || localStorage.getItem("Email") === "null" || localStorage.getItem("Email") === undefined || localStorage.getItem("Email") === "undefined") {
            emailWithSpace = "";
        }
        // If localStorage of mobile no is not null 
        if (localStorage.getItem("UserLastPhone") !== "" || localStorage.getItem("UserLastPhone") !== null || localStorage.getItem("UserLastPhone") !== "null" || localStorage.getItem("UserLastPhone") !== undefined || localStorage.getItem("UserLastPhone") !== "undefined") {
            mobilevalue = localStorage.getItem("UserLastPhone");
        }
        // If localStorage of mobile no is null 
        if (localStorage.getItem("UserLastPhone") === "" || localStorage.getItem("UserLastPhone") === null || localStorage.getItem("UserLastPhone") === "null" || localStorage.getItem("UserLastPhone") === undefined || localStorage.getItem("UserLastPhone") === "undefined") {
            mobilevalue = null;
        }
        // when user login with email id then UpdateProfile Api call
        if (emailWithSpace !== "") {
            // alert('364')
            // set mobile value which user is entered in the form
            // mobilevalue = mobNo
            mobilevalue = "" // we not to use null because we get the error "User with this phone number already exists" 
            ;
            _MainPage_api_profile__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z.updatationprofile(userTitileValue, firstNameTrim, lastNameTrim, emailWithSpace, mobilevalue, companyNameTrim, receivedOfferCheckboxValue);
            localStorageDataUpdated(userTitileValue, firstNameTrim, lastNameTrim, emailWithSpace, mobilevalue, companyNameTrim, receivedOfferCheckboxValue);
        }
        // when user login with mobile no. then UpdateProfile Api call 
        if (mobilevalue !== "") {
            // dispatch(updateprofile(userTitileValue, firstNameTrim, lastNameTrim, mobilevalue, companyNameTrim, receivedOfferCheckboxValue))
            // alert('364')
            emailWithSpace = "";
            _MainPage_api_profile__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z.updatationprofile(userTitileValue, firstNameTrim, lastNameTrim, emailWithSpace, mobilevalue, companyNameTrim, receivedOfferCheckboxValue);
            localStorageDataUpdated(userTitileValue, firstNameTrim, lastNameTrim, emailWithSpace, mobilevalue, companyNameTrim, receivedOfferCheckboxValue);
        }
        (0,react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast)("Address Saved");
        setrefreshlist(true);
        fetchaddress();
        props.cancelform();
        props.fetchAddressOfIndexPage() // this call is to check address list is empty or not before proceeding to buy
        ;
    };
    // useEffect(() => {
    //   props.fetchaddress()
    // }, [])
    const changeFltr = (newFL)=>{
        setSeleced(newFL);
        console.log("newFLnewFL", newFL);
    // const P = sortByfiltersList.find(i => i.ListItem === newFL);
    // setFiltered(P);
    };
    const handlechangeFirstname = (e)=>{
        // alert('handlechangeFirstname' + e.target.value)
        console.log(`280${e.target.value}`);
        if (e.target.value === undefined || e.target.value === "" || e.target.value === null) {
            setFirstName("");
            setFirstNameError(true);
        }
        if (e.target.value.match("^[a-zA-Z][sa-zA-Z ]*$") !== null) {
            setFirstName(e.target.value);
            setFirstNameError(false);
        }
        if (e.target.value.length === 0) {
            setFirstName("");
            setFirstNameError(true);
        }
    };
    const handlechangeLastname = (e)=>{
        if (e.target.value === undefined || e.target.value === "" || e.target.value === null) {
            setLastName("");
            setLastNameError(true);
        }
        if (e.target.value.match("^[a-zA-Z][sa-zA-Z ]*$") !== null) {
            setLastName(e.target.value);
            setLastNameError(false);
        }
        if (e.target.value.length === 0) {
            setLastName("");
            setLastNameError(true);
        }
    };
    const onchangemobileno = (e)=>{
        // if (e.target.value.match("[1-9]{0}[0-9]{0}") != null) {
        console.log("e.target.value---", e.target.value);
        const enteredMobValue = e.target.value;
        // console.log('enteredMobValue length', enteredMobValue.length)
        if (enteredMobValue === undefined || enteredMobValue === "" || enteredMobValue === null) {
            console.log("mobile no is empty");
            // alert('326')
            setMobno("");
            setMobileNoError(true);
        }
        // if (enteredMobValue.match("^[1-9]*$") !== null) {
        //   setMobileNoError(false)
        //   setMobno(e.target.value.slice(0, 10));
        // }
        if (enteredMobValue.match(/^\d{10}$/)) {
            setMobno(enteredMobValue);
            setMobileNoError(false);
        } else {
            setMobno("");
            setMobileNoError(true);
        }
    };
    const onchangeAddress = (e)=>{
        console.log(`onchangeAddress--${e.target.value}`);
        if (e.target.value === undefined || e.target.value === "" || e.target.value === null) {
            setAddress1Error(true);
            setAddress1("");
        }
        // console.log('address---', e.target.value.length)
        if (e.target.value.match("^[a-zA-Z0-9][sa-zA-Z0-9 ]*$") !== null) {
            setAddress1Error(false);
            setAddress1(e.target.value);
        }
        if (e.target.value.length === 0) {
            setAddress1Error(true);
            setAddress1("");
        }
        if (e.target.value.length < 6) {
            setAddress1Error(true);
        }
    };
    const onchangeAddress2 = (e)=>{
        console.log(`onchangeAddress--${e.target.value}`);
        if (e.target.value === undefined || e.target.value === null) {
            setAddress2Error(true);
            setAddress2("");
        }
        // console.log('address---', e.target.value.length)
        if (e.target.value.match("^[a-zA-Z0-9][sa-zA-Z0-9 ]*$") !== null) {
            setAddress2Error(false);
            setAddress2(e.target.value);
        }
        if (e.target.value.length === 0) {
            setAddress2("");
        }
    };
    function validatePincode(pincode) {
        const pincodeRegex = /^\d{6}$/;
        return pincodeRegex.test(pincode);
    }
    const onChangePincode = (e)=>{
        setPincode(e.target.value);
        if (!validatePincode(e.target.value)) {
            setPincodeError(true);
        } else {
            setPincodeError(false);
        }
    };
    const onchangeCity = (e)=>{
        if (e.target.value === undefined || e.target.value === "" || e.target.value === null) {
            setUserCityError(true);
        } else if (e.target.value !== null) {
            setUserCityError(false);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (props && props.edit === false) {
            setSeleced(3);
        }
    }, [
        props && props.edit
    ]);
    // useEffect(() => {
    //   if (props && props.editdata1) {
    //     console.log('props.editdata1.FirstName--', props.editdata1)
    //     // let firstName = props.editdata1.FirstName
    //     setFirstName(props.editdata1.FirstName)
    //     setLastName(props.editdata1.LastName)
    //     setMobno(props.editdata1.Mobile)
    //     setAddress1(props.editdata1.Address1)
    //   }
    // }, [props && props.editdata1])
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (false) {}
    }, [
        props
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setUserCity(atosuggestdadta.DefaultDeliveryLocality_City);
        setPincode(atosuggestdadta.DefaultDeliveryLocality_Pincode);
    }, [
        atosuggestdadta
    ]);
    // useEffect(() => {
    //   if (props && props.editdata) {
    //     let firstName = props.editdata1.FirstName
    //     setFirstName(firstName)
    //     setLastName(props.editdata1.LastName)
    //     setMobno(props.editdata1.Mobile)
    //   }
    // })
    console.log("props.pin", props.Pin, props.editdata, "props.Address", atosuggestdadta);
    console.log("propssssssssssssssss", props);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            showInfoPopUP && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "modal show",
                id: "RemoveCartItemModal",
                style: {
                    paddingRight: "17px",
                    display: "block"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "modal-dialog",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "modal-content",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "modal-body text-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    type: "button",
                                    className: "close",
                                    "data-dismiss": "modal"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: "Your details have been saved to your profile. Feel free to update them anytime by visiting your profile page."
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                className: "mt-2",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    className: "btn btn-secondary",
                                                    type: "button",
                                                    onClick: saveProfileData,
                                                    children: "Ok"
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                id: "frm_address",
                style: {
                    marginTop: "30px"
                },
                onSubmit: handleSubmit(onSubmitForm),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "form-group row align-items-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-12 col-sm-12 text-center text-capitalize",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                        children: props && props.edit ? "Update Address" : "Enter new address details"
                                    }),
                                    " "
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "form-row mb-3",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "form-group col-12 col-sm-12 col-md-6",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                        htmlFor: "FirstName",
                                        children: [
                                            "First Name ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-danger",
                                                children: "*"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HomePage_Input__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        type: "text",
                                        id: "FirstName",
                                        className: "form-control ",
                                        required: "",
                                        placeholder: "Enter First Name",
                                        onChange: (e)=>handlechangeFirstname(e),
                                        // value={props.edit ? props.editdata1.FirstName : Firstname}
                                        // defaultValue={props.edit ? props.editdata1.FirstName : Firstname}
                                        value: Firstname
                                    }),
                                    firstNameError === true ? // errors.FirstName &&
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text text-danger field-validation-valid",
                                        style: {
                                            textalign: "left"
                                        },
                                        children: "Please enter first name."
                                    }) : null
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "form-group col-12 col-sm-12 col-md-6",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                        htmlFor: "LastName",
                                        children: [
                                            "Last Name ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-danger",
                                                children: "*"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HomePage_Input__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        type: "text",
                                        id: "LastName",
                                        className: "form-control",
                                        required: "",
                                        placeholder: "Enter Last Name",
                                        onChange: (e)=>handlechangeLastname(e),
                                        // value={props.edit ? props.editdata1.LastName : LastName}
                                        value: LastName
                                    }),
                                    lastNameError === true ? /* errors.LastName && */ /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text text-danger field-validation-valid",
                                        style: {
                                            textalign: "left"
                                        },
                                        children: "Please enter last name."
                                    }) : null
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "form-row mb-3",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "form-group col-12 col-sm-12 col-md-6",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                        htmlFor: "Mobile",
                                        children: [
                                            "Phone no. ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-danger",
                                                children: "*"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HomePage_Input__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        type: "number",
                                        id: "Mobile",
                                        placeholder: "Please Enter Phone no",
                                        className: "form-control ",
                                        maxLength: 10,
                                        // pattern='^(\+)?(1\s*[-\/\.]?)?(\((\d{3})\)|(\d{3}))\s*[-\/\.]?\s*(\d{3})\s*[-\/\.]?\s*(\d{4})\s*(([xX]|[eE][xX][tT])\.?\s*(\d+))*$'
                                        // required=""
                                        // value={mobno}
                                        defaultValue: mobNo,
                                        // value={props.edit ? props.editdata1.LastName : LastName}
                                        onChange: onchangemobileno
                                    }),
                                    mobileNoError === true ? // errors.Mobile &&
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text text-danger field-validation-valid",
                                        style: {
                                            textalign: "left"
                                        },
                                        children: "Please enter a valid Phone no."
                                    }) : null
                                ]
                            }),
                            props && props.edit ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "form-group col-12 col-sm-12 col-md-6",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                        htmlFor: "ZipCode",
                                        children: [
                                            "Pin Code ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-danger",
                                                children: "*"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                     false && /*#__PURE__*/ 0,
                                    usrPincodeError ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text text-danger field-validation-valid",
                                        style: {
                                            textalign: "left"
                                        },
                                        children: "Please enter valid pincode."
                                    }) : null,
                                    errors.ZipCode && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text text-danger field-validation-valid",
                                        style: {
                                            textalign: "left"
                                        },
                                        children: "Please enter Pin Code."
                                    })
                                ]
                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "form-group col-12 col-sm-12 col-md-6",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                        htmlFor: "ZipCode",
                                        children: [
                                            "Pin Code ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-danger",
                                                children: "*"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                     false && /*#__PURE__*/ 0,
                                    errors.ZipCode && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text text-danger field-validation-valid",
                                        style: {
                                            textalign: "left"
                                        },
                                        children: "Please enter Pin Code."
                                    }),
                                    usrPincodeError ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text text-danger field-validation-valid",
                                        style: {
                                            textalign: "left"
                                        },
                                        children: "Please enter valid pincode."
                                    }) : null
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "form-row mb-3",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "form-group col-12 col-sm-12 col-md-6",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                        htmlFor: "Address1",
                                        children: [
                                            "Address 1 ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-danger",
                                                children: "*"
                                            })
                                        ]
                                    }),
                                     false && /*#__PURE__*/ 0,
                                    address1Error === true ? // errors.Address1 &&
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text text-danger field-validation-valid",
                                        style: {
                                            textalign: "left"
                                        },
                                        children: "Please enter minimum 6 characters"
                                    }) : null
                                ]
                            }),
                            props && props.edit ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "form-group col-12 col-sm-12 col-md-6",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        htmlFor: "Address2",
                                        children: "Address 2 "
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                     false && /*#__PURE__*/ 0,
                                    console.log("props.editdata1", props.editdata1),
                                    address2Error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text text-danger field-validation-valid",
                                        style: {
                                            textalign: "left"
                                        },
                                        children: "Please enter valid Address2 ."
                                    })
                                ]
                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "form-group col-12 col-sm-12 col-md-6",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        htmlFor: "Address2",
                                        "data-pro": JSON.stringify(props),
                                        children: "Address 2 "
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                     false ? 0 : null
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "form-row mb-3",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "form-group col-12 col-sm-12 col-md-6",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                        htmlFor: "City",
                                        children: [
                                            "City ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-danger",
                                                children: "*"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HomePage_Input__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        type: "text",
                                        id: "City",
                                        className: "form-control ",
                                        // required=""
                                        // defaultValue={props.edit ? props.editdata.City : atosuggestdadta.DefaultDeliveryLocality_City}
                                        // defaultValue={props && props.edit ? props.editdata1.City : atosuggestdadta.DefaultDeliveryLocality_City}
                                        defaultValue: props && props.edit ? props.editdata1.City : userCity,
                                        // {...register('City', { required: true })}
                                        onChange: (e)=>onchangeCity(e),
                                        disabled: true
                                    }),
                                    userCityError === true ? // errors.City &&
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text text-danger field-validation-valid",
                                        style: {
                                            textalign: "left"
                                        },
                                        children: "Please enter City."
                                    }) : null
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "form-group col-12 col-sm-12 col-md-6",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                        htmlFor: "StateCode",
                                        children: [
                                            "State ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-danger",
                                                children: "*"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                                        className: "form-control",
                                        style: {
                                            backgroundColor: "#e9ecef"
                                        },
                                        id: "StateCode",
                                        name: "StateCode",
                                        // {...register('StateCode',{ required: true } )}
                                        value: atosuggestdadta.DefaultDeliveryLocality_State,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: atosuggestdadta.DefaultDeliveryLocality_State,
                                            children: atosuggestdadta.DefaultDeliveryLocality_State
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "form-row mb-3",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "form-group col-12 col-sm-12 col-md-6",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                        htmlFor: "CountryCode",
                                        children: [
                                            "Country ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-danger",
                                                children: "*"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                                        className: "form-control",
                                        value: props.edit ? props.editdata1.AddressTypeName : null,
                                        style: {
                                            backgroundColor: "#e9ecef"
                                        },
                                        id: "CountryCode",
                                        name: "CountryCode",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "India",
                                            children: "India"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "form-group col-12 col-sm-12 col-md-6",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                        htmlFor: "AddressTypeName",
                                        children: [
                                            "Address Type ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-danger",
                                                children: "*"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                                        className: "form-control",
                                        id: "AddressTypeId",
                                        ...register("AddressTypeId", {
                                            required: true
                                        }),
                                        name: "AddressTypeId",
                                        onChange: (event)=>changeFltr(event.target.value),
                                        value: Seleced || props && props.editdata1 && props.editdata1.AddressTypeId,
                                        children: sortByfiltersList.map((itm)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                value: itm.id,
                                                children: itm.ListItem
                                            }))
                                    }),
                                    errors.AddressTypeId && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text text-danger field-validation-valid",
                                        style: {
                                            textalign: "left"
                                        },
                                        children: "Please enter Address Type."
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "form-row mb-3",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "hidden",
                            value: "2",
                            "data-val": "true",
                            "data-val-required": "Please select any one Billing/Shipping/Both.",
                            id: "IsBillingAddress",
                            name: "IsBillingAddress"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "form-row mb-3",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "form-group col-12 col-sm-12 col-md-6",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "register-box d-flex mt-half",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "hidden",
                                        "data-val": "true",
                                        "data-val-required": "The IsPrimary field is required.",
                                        id: "IsPrimary",
                                        name: "IsPrimary",
                                        value: "False"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "hidden",
                                        "data-val": "true",
                                        "data-val-required": "The IsprimaryBilling field is required.",
                                        id: "IsprimaryBilling",
                                        name: "IsprimaryBilling",
                                        value: "False"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        type: "submit",
                                        id: "btnSaveCustAddress",
                                        className: "view-profile btn btn-secondary update-add ",
                                        onSubmit: handleSubmit(onSubmitForm),
                                        children: props.edit ? "Update" : "Save"
                                    }),
                                    "\xa0",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        type: "button",
                                        className: "btn btn-secondary",
                                        onClick: ()=>{
                                            props.cancelform();
                                        },
                                        children: "Cancel"
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        ]
    });
}


/***/ })

};
;