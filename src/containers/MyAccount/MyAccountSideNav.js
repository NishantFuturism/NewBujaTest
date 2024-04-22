// import React, { useState } from 'react';
import React, {useEffect, useState} from 'react';
import Link from 'next/link';
//import history from '../../utils/history';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

function MyAccountSideNav() {
  const router = useRouter();
  const [showLogOutPopUP, setShowLogOutPopUP] = useState(false);
  // const [change, setChange] = useState(false)
  // const [active, setActive] = useState(false)


  function logoutPopUp(){
    setShowLogOutPopUP(!showLogOutPopUP)
  }
  
  function renderLogout() {
    // localStorage.removeItem('CustGUID')
    // localStorage.removeItem('UserFirstName')
    // localStorage.removeItem('CartGUID')
    // localStorage.removeItem('CartGUID')
    // localStorage.clear()
    // router.push('/')

    localStorage.clear()
    Cookies.remove('CustGUID');
    Cookies.remove('accessToken');
    //console.log("homepageaaa",router.asPath)
    if (router.asPath==='/') {
      window.location.reload(true);
    } else {
      router.push('/')
    }
  }

  useEffect(()=> {
    console.log('router log',router)
  },[])

  return (
    <>
      <div className="col-12 col-sm-12 col-md-12 col-lg-2">
        < ul className="nav flex-column dashboard-list myaccountIcons" role="tablist">
          <li><Link className={router.pathname==='/account/dashboard' ? 'nav-link active' : 'nav-link'}  href="/account/dashboard">&nbsp;<span className="lnr lnr-chart-bars" aria-hidden="true"></span>&nbsp;Dashboard</Link></li>
          <li><Link className={router.pathname==='/account/myorders' ? 'nav-link active' : 'nav-link'}  href="/account/myorders">&nbsp;<span className="lnr lnr-cart" aria-hidden="true"></span>&nbsp;My Order
          </Link></li>
          <li><Link className={router.pathname==='/account/reorder' ? 'nav-link active' : 'nav-link'} href="/account/reorder">&nbsp;<span className="lnr lnr-history" aria-hidden="true"></span>&nbsp;Reorder</Link></li>
          <li><Link className={router.pathname==='/wishlist' ? 'nav-link active' : 'nav-link'} href="/wishlist">&nbsp;<span className="lnr lnr-heart" aria-hidden="true"></span>&nbsp;My Wishlist</Link>
          </li>
          <li><Link className={router.pathname==='/account/transactions' ? 'nav-link active' : 'nav-link'} href="/account/transactions">&nbsp;<span className="lnr lnr-pushpin" aria-hidden="true"></span>&nbsp;Wallet Transactions</Link></li>
          <li><Link className={router.pathname==='/account/savedcartlist' ? 'nav-link active' : 'nav-link'} href="/account/savedcartlist">&nbsp;<span className="lnr lnr-pushpin" aria-hidden="true"></span>&nbsp;Saved Cart</Link></li>
          <li><Link className={router.pathname==='/account/manageaddress' ? 'nav-link active' : 'nav-link'} href="/account/manageaddress">&nbsp;<span className="lnr lnr-map-marker" aria-hidden="true"></span>&nbsp;Manage Addresses</Link></li>
          <li><Link className={router.pathname==='/account/profile' ? 'nav-link active' : 'nav-link'} href="/account/profile">&nbsp;<span className="lnr lnr-user" aria-hidden="true"></span>&nbsp;Profile</Link>
          </li>
          <li><Link className={router.pathname==='/account/changepassword' ? 'nav-link active' : 'nav-link'} href="/account/changepassword">&nbsp;<span className="lnr lnr-lock" aria-hidden="true"></span>&nbsp;Manage Password
          </Link></li>
          <li><Link className='nav-link' id="logout" href="javascript:;" onClick={logoutPopUp}>&nbsp;<span className="lnr lnr-exit" aria-hidden="true"></span>&nbsp;logout</Link></li>
        </ul>
        {/* <ul className="nav flex-column dashboard-list" role="tablist">
      <li><Link to="/account/dashboard" onChange={handlechange} className={change ? 'm-active nav-link' : 'nav-link'}><i className="fa fa-tachometer"></i>&nbsp;  Dashboard</Link></li>
      <li> <Link to="/account/myorders" onChange={handlechange} className={change ? 'm-active nav-link' : 'nav-link'}><i className="fa fa-shopping-basket"></i>&nbsp;  My Order
      </Link></li>
      <li> <Link to="/account/reorder" onChange={handlechange} className={change ? 'm-active nav-link' : 'nav-link'}><i className="fa fa-repeat"></i>&nbsp;  Reorder</Link></li>
      <li> <Link to="/Wishlist" onChange={handlechange()} className={change ? 'm-active nav-link' : 'nav-link'}><i className="fa fa-heart"></i>&nbsp;  My Wishlist</Link>
      </li>
      <li> <Link to="/account/transactions" onChange={handlechange} className={change ? 'm-active nav-link' : 'nav-link'}><i className="fa fa-credit-card-alt"></i>&nbsp;  Wallet Transactions</Link></li>
      <li> <Link to="/account/savedcartlist" onChange={handlechange} className={change ? 'm-active nav-link' : 'nav-link'}><i className="fa fa-shopping-bag"></i>&nbsp;  Saved Cart</Link></li>
      <li><Link to="/account/manageaddress" onChange={handlechange} className={change ? 'm-active nav-link' : 'nav-link'}><i className="fa fa-address-card"></i>&nbsp;  Manage Addresses</Link></li>
      <li><Link to="/account/profile" onChange={handlechange} className={change ? 'm-active nav-link' : 'nav-link'}><i className="fa fa-user-circle-o"></i>&nbsp; Profile</Link>
      </li>
      <li><Link to="/account/changepassword" onChange={handlechange} className={change ? 'm-active nav-link' : 'nav-link'}><i className="fa fa-key"></i>&nbsp;  Manage Password
      </Link></li>
      <li><Link id="logout" href onClick={renderLogout}><i className="fa fa-power-off "></i>&nbsp;  logout</Link></li>
    </ul> */}
      </div >
      {showLogOutPopUP &&
          <div className="modal show" id="RemoveCartItemModal" style={{ paddingRight: '17px', display: 'block' }}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-body text-center">
                  <button type="button" className="close" data-dismiss="modal" onClick={logoutPopUp}>×</button>
                  <div>
                    <ul>
                      <li><img src='/images/cycling.gif' alt='' style={{ width: '100px' }} /></li>
                      <li><p>Are you sure you want to logout?</p></li>
                      <li>
                        <button className="btn btn-secondary" type="button" onClick={renderLogout}>Yes</button>
                        <button className="btn btn-secondary" type="button" onClick={logoutPopUp}>No</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
    </>
  )
};
export default MyAccountSideNav;