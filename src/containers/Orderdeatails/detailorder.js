/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useInjectReducer } from '@/utils/injectReducer';
import { useInjectSaga } from '@/utils/injectSaga';
import { Modal } from "react-bootstrap";
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { orderreviewformpdp, savefeedbackorderreview } from './actions';
import OrderdetailAPI from '../MainPage/api/orderdetail';
import reducer from './reducer';
import saga from './saga';
import Orderreviewlistitem from './Orderreviewlistitem'
import Success from '../../components/ShowAlert/success';
function DetailDelivery(props) {
  /* eslint-disable react/prop-types */
  const { closeorder, setCloseorder } = props;
  useInjectReducer({ key: 'detaildelivery', reducer });
  useInjectSaga({ key: 'detaildelivery', saga });
  const dispatch = useDispatch()
  const [currentdate, setCurrentdate] = useState('')
  const [show, setShow] = useState(false);
  const [showmsg, setShowmsg] = useState('');
  const [ratingorder, setRatingOrder] = useState(0)
  const [hoverorder, setHoverorder] = useState(0)
  const [editingText, setEditingText] = useState("")
  const [orderdetailsanditem, setOrderDetailsAnditem] = useState()
  // const [productid, setProductId] = useState([])
  const [feedbackItemReview, setfeedbackItemReview] = useState([])
  const [orderTextdisabled, setorderTextdisabled] = useState(false)
  const [orderRatingdisabled, setorderRatingdisabled] = useState(false)
  const [isError, setisError] = useState(false);
  // const [ratingproduct, setRatingproduct] = useState([])
  const DataDelivery = useSelector(state => state.detaildelivery)
  console.log("chkdataDelivery..", DataDelivery)
  const detailsitems = {
    "OrderNumber": window.atob(localStorage.getItem('OrderNumber')),
    "FeedbackTypeId": 1
  }
  useEffect(() => {
    OrderdetailAPI.getorderdetailsfeedbackitems(detailsitems)
      .then(response => {
        console.log("chkresp..", response)
        setOrderDetailsAnditem(response)
        if (response.feedbackOrderViewModel.Pros !== "" && response.feedbackOrderViewModel.Rating !== "") {
          setEditingText(response.feedbackOrderViewModel.Pros)
          console.log('re', response.feedbackOrderViewModel.Pros)
          setorderTextdisabled(true)
          setRatingOrder(response.feedbackOrderViewModel.Rating)
          setorderRatingdisabled(true)
        }
        if (response.feedbackOrderViewModel.Pros !== "" && response.feedbackOrderViewModel.Rating === "") {
          setEditingText(response.feedbackOrderViewModel.Pros)
          setorderTextdisabled(true)
        }
        if (response.feedbackOrderViewModel.Pros === "" && response.feedbackOrderViewModel.Rating !== "") {
          setRatingOrder(response.feedbackOrderViewModel.Rating)
          setorderRatingdisabled(true)
        }
        else {
          console.log('nothing')
        }
      })
      .catch(error => {
        console.log(error);
      });
  }, [])
  console.log('64', orderdetailsanditem)
  useEffect(() => {
    if (orderdetailsanditem && orderdetailsanditem.feedbackItemReviewDetail) {
      setfeedbackItemReview(orderdetailsanditem.feedbackItemReviewDetail)
    }
  }, [orderdetailsanditem])
  const handleComment = (e) => {
    console.log('chkcommenteee', e)
    if (feedbackItemReview !== undefined && feedbackItemReview.length !== undefined) {
      const updatedCommentList = feedbackItemReview.map((mapcommentdata) => {
        console.log('mapcommentdata', mapcommentdata)
        if (mapcommentdata !== undefined) {
          if (mapcommentdata.OrderItemID === e.OrderItemID) {
            return { ...mapcommentdata, "Comment": e.Comment, "FeedbackTypeId": 1  };
          }
        }
        return mapcommentdata
      })
      setfeedbackItemReview(updatedCommentList)
      console.log('updatedCommentList', updatedCommentList)
    }
  }
  const handleRatingStar = (e) => {
    console.log("chkee", e)
    console.log("starfeedbackItemReview", feedbackItemReview)
    if (feedbackItemReview !== undefined && feedbackItemReview.length !== undefined) {
      const updatelistData = feedbackItemReview.map((mapdata) => {
        console.log('mm20', mapdata)
        if (mapdata !== undefined) {
          console.log('mdata', mapdata.OrderItemID)
          if (mapdata.OrderItemID === e.OrderItemID) {
            return { ...mapdata, "Rating": e.Rating };
          }
        }
        return mapdata
      })
      setfeedbackItemReview(updatelistData)
      console.log('updatelistData', updatelistData)
    }
  }
  console.log('110', feedbackItemReview)
  useEffect(() => {
    getCurrentDate()
  }, [])
  function getCurrentDate() {
    const Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const today = new Date();
    const date = `${today.getDate()} ${Months[today.getMonth()]} ${today.getFullYear()} `;
    const cDate = date;
    setCurrentdate(cDate)
  }
  useEffect(() => {
    console.log("dataDelivery...", DataDelivery)
    if (DataDelivery && DataDelivery.giventhereview === false) {
      setShowmsg("Review Submitted successfully")
    }
    else {
      console.log("nothing")
    }
  }, [DataDelivery])
  const savefeedbackorder = () => {
    setCloseorder(false)
    setShow(true)
    const commenttext = (document.getElementById('feedbackOrderViewModel_Pros').value)
    const productcomment = (document.getElementById(`feedbackItemReviewDetail_0__Comment`).value)
    console.log('productcomment', productcomment)
    const orderN = window.atob(localStorage.getItem('OrderNumber'))
    const orderdatapdp = {
      "OrderNumber": orderN,
      "FeedbackreviewId": 0,
      "FeedbackTypeId": 1,
      "OrderItemId": 0,
      "Rating": ratingorder,
      "Pros": commenttext,
      // "Cons": "string",
      "Comment": commenttext,
      "IsApprovedByAdmin": true,
      "FeedbackDate": currentdate
    }
    const productdata = {
      "feedbackOrderViewModel": {
        "OrderNumber": orderN,
        "FeedbackreviewId": 0,
        "FeedbackTypeId": 1,
        "OrderItemId": 0,
        "Rating": ratingorder,
        "Pros": commenttext,
        // "Cons": "string",
        "Comment": commenttext,
        "IsApprovedByAdmin": true,
        "FeedbackDate": currentdate
      },
      // "feedbackItemReviewDetail":
      //   [
      //     {
      //       "FeedbackreviewId": 0,
      //       "OrderId": "",
      //       "OrderNumber": orderN,
      //       "OrderItemID": productid,
      //       "ProductImage": "",
      //       "ProductName": "",
      //       "PackSize": "",
      //       "FeedbackTypeId": 1,
      //       "Pros": productcomment,
      //       // "Cons": "string",
      //       "Reviewtitle": "",
      //       "Rating": ratingproduct.index,
      //       "Comment": productcomment,
      //       "IsApprovedByAdmin": false,
      //       "FeedbackDate": currentdate
      //     },
      //   ]
      "feedbackItemReviewDetail": feedbackItemReview
    }

    if(commenttext !=="" && ratingorder !== ""){
      dispatch(orderreviewformpdp(orderdatapdp))
      console.log("productdata..", productdata)
      dispatch(savefeedbackorderreview(productdata))
      setCloseorder(false)
      setisError(false)
      setShow(true)
      setShowmsg("Review Submitted successfully")
    }
    else{
      setisError(true)
      setShowmsg("Please give rating for Order.")
      setCloseorder(true)
    }
  }


  const rateorderreview = (value) => {
    setRatingOrder(value)
  }
  const handletext = (e) => {
    setEditingText(e.target.value)
    // localStorage.setItem("inputcommentValue", e.target.value);
  }
  // useEffect(() => {
  //   setEditingText(localStorage.getItem("inputcommentValue"));
  // }, []);
  const Ratingord = () =>
    <div className="col-md-2 ">
      {[...Array(5)].map((star, index) => {
        const i = index + 1;
        return (
          <FontAwesomeIcon
            type="button"
            key={i}
            icon={faStar}
            disabled={!!orderRatingdisabled}
            color={ratingorder >= i ? "orange" : "lightgrey"}
            style={{ fontSize: '1.5em', borderColor: 'orange' }}
            className={index <= (hoverorder || ratingorder) ? "on" : "off"}
            onClick={() => rateorderreview(i)}
            onMouseEnter={() => setHoverorder(i)}
            onMouseLeave={() => setHoverorder(ratingorder)}
          >
          </FontAwesomeIcon>
        );
      })}
    </div>
  const closemsg = () => {
  }
  useEffect(() => {
    setInterval(() => {
      setShow(false)
    }, 4000);
  }, [closemsg])
 
  return (
    <>
      {show && <Success msg={showmsg} close={closemsg} isError={isError}/>}
      {closeorder ? <Modal show dialogClassName="showmodal w-100 order-review-modal" role="dialog"
        style={{ maxWidth: '90%', maxHeight: '100%', margin: 'auto' }}>
        <div className="modal-content ">
          <div className="modal-header">
            <h2 className="modal-title-site text-center">Order Review</h2>
            <button type="button" className="close" data-dismiss="modal" onClick={() => setCloseorder(false)} style={{ color: '#000000' }}>x</button> <br />
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-md-2">
                <h3><b>Rate this Order</b></h3>
              </div>
              <div className="col-md-10">
                <h3><b>Comment</b></h3>
              </div>
            </div>
            <div className="row" style={{ marginTop: '5px' }}>
              <Ratingord />
              {/* <div className="row" style={{ marginTop: '5px' }}></div> */}
              <div className="col-md-10">
                <textarea id="feedbackOrderViewModel_Pros" name="feedbackOrderViewModel.Pros" value={editingText} onChange={(e)=>handletext(e)} disabled={!!orderTextdisabled} placeholder="Comment" style={{ width: '100%' }}></textarea>
              </div>
              <br />
            </div>
            <br />
            <div className="row">
              <h4><b>&nbsp;&nbsp; Product Review</b></h4>
            </div>
            <div style={{ overflowY: 'scroll', maxHeight: '350px', marginTop: '10px', marginBottom: '10px' }}>
              <div id="collapseProduct" role="tabpanel" aria-labelledby="headingTax" data-parent="#cart_accordion">
                <table id="tblOrderDetailwithreview" className="table">
                  <thead>
                    <tr className="thfix">
                      <th><b>Product Image</b></th>
                      <th className="textalignleft" ><b>Product Name</b></th>
                      <th><b>Pack Size</b></th>
                      <th><b>Rating</b></th>
                      <th style={{ textAlign: 'center' }}><b>Comment</b></th>
                    </tr>
                  </thead>
                  <tbody>
                    {(feedbackItemReview || []).map(data =>
                      <Orderreviewlistitem data={data} productpassRating={(e) => handleRatingStar(e)}
                        productpassComment={(e) => handleComment(e)} feedbackItemReview={feedbackItemReview} />
                      // <Orderreviewlistitem productOrderId={productOrderId} productid={productid} data={data} onRatingtoProductReview={onRatingtoProductReview}
                      // />
                    )}
                    {/* {(orderdetailsanditem.feedbackItemReviewDetail || []).map(data =>
                      <tr>
                        {console.log('chkdata', [data.OrderItemID])}
                        <td>
                          {console.log("chkimg..", `${ data.ProductImage } `)}
                          <img src={data.ProductImage} alt="" style={{ width: '60px', height: '60px' }} />
                        </td>
                        <td>
                          {console.log("chkthev..", `${ data.ProductName } `)}
                          {data.ProductName}
                        </td>
                        <td>
                          {console.log("chksize..", `${ data.PackSize } `)}
                          {data.PackSize}
                        </td>
                        <td>
                          <div className="row ">
                            {console.log("chkorderitemid..", `${ data.OrderItemID } `)}
                            <span id={data.OrderItemID}>
                              {[...Array(5)].map((star, index) => {
                                const proindex = index + 1;
                                return (
                                  <FontAwesomeIcon
                                    id={`${ data.OrderItemID } `}
                                    type="button"
                                    key={proindex}
                                    icon={faStar}
                                    color={ratingproduct >= proindex ? "orange" : "lightgrey"}
                                    style={{ fontSize: '1.5em', borderColor: 'orange' }}
                                    className={index <= (hoverproductorder || ratingproduct) ? "on" : "off"}
                                    onClick={() => ratingproductorder(proindex)}
                                    onMouseEnter={() => setHoverproductorder(proindex)}
                                    onMouseLeave={() => setHoverproductorder(ratingproduct)}
                                  >
                                    {console.log("chk-index-id..", proindex, `${ data.OrderItemID } `)}
                                  </FontAwesomeIcon>
                                );
                              })}
                            </span>
                          </div>
                        </td>
                        <td id={data.OrderItemID}>
                          <textarea id={`feedbackItemReviewDetail_0__Comment`} value={editingProductText} onChange={(e) => handleproducttext(e)} placeholder='Comment here to rate this product' name="feedbackItemReviewDetail[0].Comment" style={{ width: '100%' }}></textarea>
                        </td>
                      </tr >
                    )} */}
                  </tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button type="button" id="submitfeedback" className="btn btn-success"
                  onClick={() => savefeedbackorder()} ><b>Submit Feedback</b></button>
                <button type="button" className="btn btn-danger" id="cancelfeedback" data-dismiss="modal" onClick={() => setCloseorder(false)}><b>Cancel</b></button><br />
              </div>
            </div>
          </div>
        </div>
      </Modal> : null}
    </>
  )
}
export default DetailDelivery;
