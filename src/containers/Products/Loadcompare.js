/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
// import { Select } from 'antd';
import React, { useEffect, useState, useContext} from 'react'
import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
//import history from '../../utils/history';
import { useRouter } from 'next/router';
import AddToCart from '../AddToCart';
import mycartAPI from '../MainPage/api/mycartAPI';
import CustomsAPI from '../../containers/MainPage/api/homeServices';
import { Message_data } from '@/context';
import { useDispatch } from 'react-redux';
import {  getcompare } from '../../containers/LoadProducts/actions';
// import loaderimg from '../../images/adibuja-logo-animation.gif';
import { useInjectReducer } from '@/utils/injectReducer';
import { useInjectSaga } from '@/utils/injectSaga';
import reducer from '../../containers/LoadProducts/reducer';
import saga from '../../containers/LoadProducts/saga';
import Link from 'next/link';
import getDetailsFromDomain from '@/utils/getSellerDetails';
import { ConstantsValues } from '../../containers/MainPage/api/homeServices';
// import Select from './select';
import './loadcompare.css'
export default function Loadcompare(props) {
  const router = useRouter();
  const dispatch = useDispatch()
  console.log("props..", props)

  useInjectReducer({ key: 'loadProducts', reducer });
  useInjectSaga({ key: 'loadProducts', saga });
  // const [Seleced, setSeleced] = useState('');
  // const [filtered, setFiltered] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [data, setdata] = useState([]);
  const [compareProductList,setCompareProductList] = useState([]);
  const [productList, setProductList] = useState([])
  const [loading, setloading] = useState(false);
  const { compareRefresh, setCompareRefresh } = useContext(Message_data);
  // const [noItemInCompareList, setNoItemInCompareList] = useState(true)
  const addToCartRdcr = useSelector(state => state.addToCart)
  // const products = useSelector(state => state.products)
  const loadProducts = useSelector(state => state.loadProducts)
  console.log('loadProducts11',loadProducts)

  const productdetail = (PageUrl,e) => {
    e.preventDefault();
    // router.push(`/product/${PageUrl}`, { skuUrl: PageUrl })
    localStorage.setItem('PageUrl', window.btoa(PageUrl))
    router.push(
      {
        pathname: `/product/${PageUrl}`, // not router.asPath
        skuUrl: PageUrl,
      })

  }
  useEffect(()=>{
  (async ()=>{
      const sellerDetailsFromDomain = await getDetailsFromDomain();
      let sellerIdMain = ConstantsValues.defaultSellerID;
      if(sellerDetailsFromDomain && sellerDetailsFromDomain.AdminMemberId && sellerDetailsFromDomain.AdminMemberId!=="") {
        sellerIdMain = sellerDetailsFromDomain.AdminMemberId;
      }
      localStorage.setItem('sellerID',sellerIdMain);
    })()
  },[])
  
  useEffect(() => {
    mycartAPI.getShoppingcartDetails()
      .then(response => {
          setShoppingCart(response)   
      })
      .catch(error => {
        console.log('error:::', error);
      });
  }, [addToCartRdcr])


  const deleteProduct=(SkuId)=> {
    setCompareRefresh(false)
    // const cflag=true;
    fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data =>{ 
      // CustomsAPI.getnewcompare(SkuId, data.ip, cflag)
      // dispatch(getcompare(SkuId, data.ip,cflag))
      dispatch(getcompare(SkuId, data.ip, true))
      // toast('The record has been deleted successfully.')
    })
    .catch(error => console.log(error))  
  }

  useEffect(() => {
    // setTimeout(() => {
      setloading(true)
    // }, 1500);
    CustomsAPI.getproductcompare()
      .then(response => {
        console.log('uuuuusss', response)
        setProductList(response)
      })
      .catch(error => {
        console.log('error:::', error);
      })
      .finally(()=>setloading(false))
  }, [])

  
  useEffect(()=>{  
    if(loadProducts) {
      setProductList(loadProducts?.newcompare)
    }
  },[loadProducts])


  return (
    <>
      {/* { props.data === null ? <div className="col-md-12" style={{ padding: '5%' }}>
        <div className="alert alert-warning">No more products</div>
      </div> : */}
      {
        productList && productList.length > 0 ?
          <div className="table-responsive  text-center pr-block ProductComparison">
            <table id="comparefix" className="table table-bordered compare-style" style={{
              display: 'flex'
            }}>
              <thead className='comparethead' style={{ border: '1px solid #dee2e6' }}>
                <tr>
                  <td className="product-title width-2-per textbold compareproimg" style={{ whiteSpace: 'nowrap' }}>Product Image</td>
                </tr>
                <tr>
                  <td className="product-title textbold comparenameall">Product Name</td>
                  {/* {(loadProducts && loadProducts.comaprelist || []).map((item) =>
                      <td className="width-30-per" style={{ minWidth: '300px' }} > <span> {item.SkuCode}</span>
                      </td>
                    )} */}
                </tr>
                <tr>
                  <td className="product-title width-10-per textbold comparenameall">
                    Pack Size </td>
                  {/* {(loadProducts && loadProducts.comaprelist || []).map((item) =>
                      <td className="pk-size width-30-per">
                        <span>{item.FilterList[0].ListItem} </span>
                      </td>
                    )} */}
                </tr>
                <tr>
                  <td className="product-title width-10-per textbold price">
                    Price </td>
                  {/* {(loadProducts && loadProducts.comaprelist || []).map((item) =>
                      <td className="pk-size width-30-per">
                        <span>₹ {item.FilterList[0].FilterSPPrice} </span>
                      </td>
                      // <SelectDrop data={item} />
                    )} */}
                </tr>
                {/* <tr>
              <td className="product-title width-10-per textbold">Price</td>
              {(props && props.data || []).map((item) =>
                <td className="width-30-per" style={{ minWidth: '300px' }}>
                  <span id="spprice83839">
                    {products && products.skucode && item.SkuId === products.skucode.SkuDetailId && products.skucode.FilterSPPrice}
                    ₹  {item.SkuId === filtered.SkuDetailId ? filtered.FilterSPPrice : null}
                  </span>
                </td>
              )}
            </tr> */}
                <tr>
                  <td className="product-title width-10-per textbold compaction">Actions</td>
                  {/* {(loadProducts && loadProducts.comaprelist || []).map((item, index) =>
                      <td className="pr-block  text-center width-30-per SkuId_83839 available ">
                        {console.log('index', item)}
                        <AddToCart data={item} shoppingCart={shoppingCart} filtered={item.FilterList} skulisting={item.skulisting}
                          notify={loadProducts.comaprelist.IsNotified} wishlist={false} />
                      </td>
                    )} */}
                </tr>
              </thead>
              <tbody>
                {(productList !== undefined && productList || []).map((item, index) =>
                    <td key={index}>
                    <tr>
                      <td className="width-30-per position-relative" align="center">
                        <i className="lnr lnr-trash close-btnx btncompare"
                          style={{ cursor: 'pointer' }}
                          onClick={() => deleteProduct(item.SkuId)}
                        ></i>
                        {console.log('i20',item)}
                        <div
                          style={{ positionL: 'relative', cursor: 'pointer' }}>
                          <Link href={`/product/${item.PageUrl}`} onClick={(e) => productdetail(item.PageUrl,e)}>
                            <img src={item.ListingImage}
                              referrerPolicy='no-referrer'
                              className="js-lazy-img" width="150" height="150" alt='' />
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="width-30-per" > <span className='compareproname'> {item.SkuDisplayName}</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="pk-size width-30-per">
                        <span>{item.FilterList[0]?.ListItem} </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="pk-size width-30-per">
                        <span>₹{item.FilterList[0]?.FilterSPPrice}</span>
                      </td>
                    </tr>
                    
                    <tr>
                      {
                        item.IsDeliveryAvailableToPinCode ?
                          <td className="pr-block  text-center width-30-per SkuId_83839 available ">
                            <AddToCart data={item} shoppingCart={shoppingCart} filtered={item.FilterList[0]} skulisting={item.skulisting}
                              notify="" wishlist={false} />
                          </td>
                          : <td className="mycart_3" >
                            <span className="lbl-cant-deliver"> Can not deliver to pin code <b>{item.DeliveryLocalityPincode} </b></span>
                          </td>
                      }
                    </tr>
                  </td>
                )}
                </tbody>
            </table >
          </div >        
          :
              
          loading ?(
          <div className='col-lg-12 text-center mt-25 mb-25 compareLoadimg' style={{  width: '100% '}}>
          <img src='/images/adibuja-logo-animation.gif' alt='' style={{height:'80px', justifyContent:'center'}}/>
          {/* <Image src={"/images/adibuja-logo-animation.gif"} width="80" height="20" alt='' objectPosition={'center'} /> */}
          </div>)
          : 
          !loading  && (<div className="col-md-12" style={{ padding: '5%' }}>           
            <div className='alert alert-warning'>
              Products Not Found
            </div>           
          </div>)
                 
      }
      {/* }  */}
    </>
  )
}
