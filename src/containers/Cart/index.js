/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/**
 *
 * Cart
 *
 */
import React, { memo, useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { Link, useHistory, useLocation } from 'react-router-dom';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { compose } from 'redux';
import { useInjectReducer } from '@/utils/injectReducer';
import { useInjectSaga } from '@/utils/injectSaga';
import '../../../public/assets1/css/default.min.css';
import '../../../public/assets1/css/responsive.min.css';
// import '../../../public/assets1/css/style.min.css';
import '../../../public/assets/css/style.min.css';
import { isOpenMyCartAction } from '../MavigationBar/actions';
import { closeMsgBar, getcartamount, savecardpopup } from './actions';
import { getCommonCartAction } from '../HomePage/actions'
import Item from './Item';
import reducer from './reducer';
import saga from './saga';
import SaveCartpopup from './saveCartpopup';
export function Cart(props) {
  const router = useRouter();
  const { cartData, Total, mavigationBarReducer } = props
  useInjectReducer({ key: 'cart', reducer });
  useInjectSaga({ key: 'cart', saga });
  const cartReducer = useSelector(state => state.cart)
  const [shoppingCart, setShoppingCart] = useState([]);
  const [cartsetData, setCartsetData] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  const [enblefloatingCart, setenblefloatingCart]=useState(true);
  
  const ref = useRef()
  //const prevlocation = useLocation();
  // const [removeclass, setRemoveclass] = useState(false);
  const dispatch = useDispatch()
  const addToCartRdcr = useSelector(state => state.addToCart)
  //const history = useHistory()
  // const navRef = React.useRef(null);

  useEffect(() => {
    setIsLoading(true)
  },[])

  console.log("car addToCartRdcr=", addToCartRdcr);
  console.log("cartReducer=", cartReducer);
  console.log("mycartprops=", cartData, Total);
  function closeMsgBarFunc() {
    setTimeout(() => {
      dispatch(closeMsgBar())
      // setisError(false)
    }, 3000);
  }
  const handlePopupClose = () => {
    props.setShowCartPopup(false)
  }
  useEffect(() => {
    if (addToCartRdcr !== undefined) {
      dispatch(getcartamount(Total))
      setShoppingCart(addToCartRdcr.shoppingcartDetails)
    }
  }, [addToCartRdcr])
  // useEffect(() => {
  //   if (props !== undefined && props.cartData !== undefined && props.cartData.cart !== undefined) {
  //     props.cartData.cart.forEach((index, element) => {
  //       console.log("elementcartdata===", element);
  //       setCartsetData([...cartsetData, element.cart])
  //     })
  //   }
  // }, [props])
  useEffect(() => {
    if (cartData !== undefined) {
      let cartCustomArray = [];
      cartData.forEach((element) => {
        console.log("elementcartdata===", element);
        element.cart.forEach((eleData) => {
          console.log("elementcartdata68===", eleData);
          cartCustomArray = [...cartCustomArray, eleData];
          // setCartsetData(element.cart)
        })
      })
      console.log("elementcartdata74===", cartCustomArray);
      setCartsetData(cartCustomArray)
    }
  }, [cartData])
  console.log("cartsetData74====", cartsetData);

  const loadcheckout = (e) => {
    // localStorage.setItem('lastVisitedUrl', '/productprocced/checkout');
    // localStorage.setItem('lastVisitedUrl', '/cart');
    //router.push('/cart');
    //dispatch(isOpenMyCartAction(false))
    /*if ((localStorage.getItem('CustGUID') === null || localStorage.getItem('CustGUID') === undefined)) {
      router.push('/login')
    } else {
      // router.push('/product/checkout', { total: Total })
      // router.push({ pathname: `/productprocced/checkout`, state: { total: Total } })
      const redirectToPath = localStorage.getItem("lastVisitedUrl");
      if (redirectToPath && redirectToPath !== "") {
        router.push(redirectToPath);
      }
      dispatch(isOpenMyCartAction(false))
      router.push('/cart');
      //sessionStorage.setItem('totalamount', Total.toFixed(2))
    }*/
    //dispatch(isOpenMyCartAction(false))
    e.preventDefault();
    localStorage.setItem('lastVisitedUrl', '/cart');
    dispatch(isOpenMyCartAction(false))
    if ((localStorage.getItem('CustGUID') === null || localStorage.getItem('CustGUID') === undefined)) {
      router.push('/login')
    } 
    else {
      router.push({ pathname: `/productprocced/checkout`, state: { total: Total } })
      dispatch(isOpenMyCartAction(false))
      sessionStorage.setItem('totalamount', Total.toFixed(2))
    }
    dispatch(isOpenMyCartAction(false))
  }

  const loadsavecardpopup = () => {
    dispatch(savecardpopup(true))
    // dispatch(isOpenMyCartAction(false))
  }
  useEffect(() => {
    dispatch(getCommonCartAction())
  }, [])

  useEffect(() => {
    let timer = null;
    if(cartsetData.length > 0){
     timer = setTimeout(() => {setIsLoading(false)},1500)
    }else{
     timer = setTimeout(() => {setIsLoading(false)},1500)
    }
    return () => {timer = null}
   },[cartsetData])

  console.log('enblefloatingCart',enblefloatingCart)
  useEffect(() => {
    const checkIfClickedOutside = e => {   
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (enblefloatingCart && ref.current && !ref.current.contains(e.target)) {
         setenblefloatingCart(enblefloatingCart.isOpen)
      }
    }
    document.addEventListener("mousedown", checkIfClickedOutside)
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [enblefloatingCart])

  
  return (
    <>
      {cartReducer && cartReducer.savecartpopup && <SaveCartpopup />}
      {isLoading && (
        <ul key='q' className="cartlist mini-cart-drop-down ha-dropdown minCardList" id="cart-header" style={{ display: 'block' }}>
         <li> <span style={{flex :1,display : 'flex',justifyContent : 'center',alignItems : 'center',width : '100%'}}><img src='/images/adibuja-logo-animation.gif' alt='' style={{ width: '80px', height: '80px',alignSelf : 'center' }} />
        </span> </li> </ul>)}

      {!isLoading && enblefloatingCart && (<ul key='q' ref={ref} className="cartlist1 mini-cart-drop-down ha-dropdown minCardList" id="cart-header" style={{ display: 'block' }}>
        {cartsetData && cartsetData.length === 0 ? <li> <span>Cart is empty</span> </li> :
          (<li className="mb-15">
            <ul className="cart-prod-list totalcart">
              {cartsetData && (cartsetData || []).map((data, i) =>
                <Item data={data} i={i} shoppingCart={shoppingCart}></Item>
              )}
            </ul>
          </li>)}
        {cartsetData && cartsetData !== undefined && cartsetData.length !== 0 && cartsetData.length > 0 && <li>
          <div className="subtotal-text" style={{ marginLeft: '15px' }}>Total </div>
          <div style={{ width: '60px' }}></div>
          <div style={{ width: '60px' }}></div>
          {console.log(" cartData.length", cartsetData.length)}
          <div className={cartsetData && cartsetData.length > 3 ? 'greatercarttotal' : 'lesscarttotal'} >
            ₹{Total.toFixed(2)}
          </div>
        </li>}
        {
          cartsetData && cartsetData.length !== 0 && Total > 0 && <li className="mt-10 buttonfloting">
            {/*<Link className="cart-button" href="/cart" onClick={() => dispatch(isOpenMyCartAction(false))} >view cart</Link>*/}
            <Link className="cart-button" href="/cart" onClick={() => dispatch(isOpenMyCartAction(false))} >view cart</Link>
          </li>
        }
        {
          cartsetData && cartsetData.length !== 0 && Total > 0 &&
          <li className="buttonfloting chekouthide1">
            {/*<Link href="/cart" className="cart-button" id="checkoutoncart" onClick={loadcheckout}>checkout</Link>*/}
            <Link href="" className="cart-button" id="checkoutoncart" onClick={(e) => loadcheckout(e)}>checkout</Link>
          </li>
        }
        {
          localStorage.getItem('CustGUID') && cartsetData && cartsetData.length !== 0 &&
          <li className="buttonfloting">
            <a className="cart-button" id="logout" onClick={loadsavecardpopup} >Save Cart</a>
          </li>
        }
        <li className="buttonfloting flotingclose">
          <a href style={{ backgroundColor: '#ff7060', color: '#fff' }} className="cart-button  ha-toggle" onClick={handlePopupClose} >
            <i className="fa fa-close"></i>&nbsp; Close</a></li>
      </ul >)}
   
    </>
  );
}
export default compose(
  // withConnect,
  memo
)(Cart);
// export default Cart