import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import getDetailsFromDomain from '@/utils/getSellerDetails';
import { ConstantsValues } from '@/containers/MainPage/api/homeServices';

const PrivacyFooter = () => {

    const [sellerName, setSellerName] = useState('');
    useEffect(()=>{
        //call seller details API to get seller name
        (async ()=> {
            const sellerDetailsFromDomain = await getDetailsFromDomain();
            let sellerIdMain = ConstantsValues.defaultSellerID;
            if(sellerDetailsFromDomain && sellerDetailsFromDomain?.AdminMemberId) {
              sellerIdMain = sellerDetailsFromDomain.AdminMemberId;
              setSellerName(sellerDetailsFromDomain.CompanyName);
            }
          })();
    },[])

    const deliverypolicy = () => {
        localStorage.setItem('pagefootert', "delivery-policy-react")
    }

    return (
        <div style={{ textAlign: 'center' }} className="check_foot">
            <form id="mc-form">
            </form>
            <p align="center" style={{ paddingTop: '10px' }}>
                <small>
                <a href="/delivery-policy" onClick={deliverypolicy} style={{ color: 'dodgerblue', cursor: 'pointer' }}>Delivery Policy</a>&nbsp;&nbsp;
                {
                    typeof window!=='undefined' && localStorage.getItem('sellerID') && localStorage.getItem('sellerID')==='0' ?
                <Link href="/faq" style={{ color: 'dodgerblue' }}>Help</Link>
                : "" }
                </small>
            </p>
            <div>
            {
                    typeof window!=='undefined' && localStorage.getItem('sellerID') && localStorage.getItem('sellerID')==='0' ?
                    <p align="center" style={{ paddingTop: '0px', paddingBottom: '35px' }}><small>2024 &copy; Adibuja Private Limited, All Rights Reserved</small></p>
                    :

                <p align="center" style={{ paddingTop: '0px', paddingBottom: '35px' }}><small>Copyright 2024 &copy;{sellerName} | Powered by <a href='https://www.adibuja.com/' target='_blank'>Adibuja</a>,  All Rights Reserved</small></p>
            }
            </div>
        </div>
    );
}

export default PrivacyFooter;

