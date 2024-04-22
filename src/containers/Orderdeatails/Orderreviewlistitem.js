/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import OrderdetailAPI from '../MainPage/api/orderdetail';
function Orderreviewlistitem(props) {
  const { feedbackItemReview } = props
  const [editingProductText, setEditingProductText] = useState("")
  const [ratingproduct, setRatingproduct] = useState(0)
  const [hoverproductorder, setHoverproductorder] = useState(0)
  const [productTextdisabled, setproductTextdisabled] = useState(false)
  const [productRatingdisabled, setproductRatingdisabled] = useState(false)
  const [propsData, setpropsData] = useState({
    "Comment": "",
    "OrderItemID": "",
    "ProductImage": "",
    "ProductName": "",
    "PackSize": "",
    "Rating": ""
  })
  const detailsitems = {
    "OrderNumber": window.atob(localStorage.getItem('OrderNumber')),
    "FeedbackTypeId": 1
  }
  useEffect(() => {
    OrderdetailAPI.getorderdetailsfeedbackitems(detailsitems)
      .then(response => {
        response.feedbackItemReviewDetail.map((saveproductdata) => {
          feedbackItemReview.map((data) => {
            if (data.OrderItemID === saveproductdata.OrderItemID) {
              if (data.Comment !== "" && data.Rating !== "") {
                setEditingProductText(data.Comment)
                setRatingproduct(data.Rating)
              }
              if (saveproductdata.Comment !== "" && saveproductdata.Rating === "") {
                setEditingProductText(saveproductdata.Comment)
              }
              if (saveproductdata.Comment === "" && saveproductdata.Rating !== "") {
                setRatingproduct(saveproductdata.Rating)
              }
              else {
                console.log('nothing')
              }
            }
          })
        })
      })
      .catch(error => {
        console.log(error);
      });
  }, [])
  console.log('propsproduct', propsData)
  const handleproducttext = (e) => {
    console.log('17', e.target.value)
    e.preventDefault();
    const savecomment = propsData;
    console.log('savecomment', savecomment)
    const finalsavecomment = { ...savecomment, "Comment": e.target.value };
    console.log('finalsavecomment', finalsavecomment)
    setEditingProductText(e.target.value)
    setpropsData(finalsavecomment)
  }
  useEffect(() => {
    props.productpassComment(propsData)
  }, [editingProductText])
  const handleProductrating = (star) => {
    console.log('hvalue', star, props.data)
    const savedata = propsData;
    console.log('savedata', savedata)
    const finalsavedata = { ...savedata, "Rating": star };
    console.log('finalsavedata', finalsavedata)
    setRatingproduct(star, finalsavedata) // color
    setpropsData(finalsavedata)
  }
  useEffect(() => {
    props.productpassRating(propsData)
  }, [ratingproduct])
  useEffect(() => {
    if (props.data !== undefined) {
      console.log('props.data', props.data.OrderItemID)
      setpropsData({
        "Comment": props.data.Comment,
        "OrderItemID": props.data.OrderItemID,
        "ProductImage": props.data.ProductImage,
        "ProductName": props.data.ProductName,
        "PackSize": props.data.PackSize,
        "Rating": props.data.Rating
      })
      console.log("ProductName", props.data.OrderItemId)
    }
  }, [props])
  return (
    <tr>
      <td>
        {/* {console.log("chkimg..", `${props.data.ProductImage}`)} */}
        <img src={propsData.ProductImage} alt="" style={{ width: '60px', height: '60px' }} />
      </td>
      <td>
        {/* {console.log("chkthev..", `${propsData.ProductName}`)} */}
        {propsData.ProductName}
      </td>
      <td>
        {/* {console.log("chksize..", `${props.data.PackSize}`)} */}
        {propsData.PackSize}
      </td>
      <td>
        <div className="row ">
          {console.log("chkorderitemid..", `${propsData.OrderItemID}`)}
          <span >
            {[...Array(5)].map((star, index) => {
              const proindex = index + 1;
              // { console.log('proindex', proindex, ratingproduct) }
              return (
                <FontAwesomeIcon
                  id={`${propsData.OrderItemID}`}
                  type="button"
                  key={proindex}
                  icon={faStar}
                  disabled={!!productRatingdisabled}
                  color={propsData.Rating >= proindex ? "orange" : "lightgrey"}
                  style={{ fontSize: '1.5em', borderColor: 'orange', }}
                  className={index <= (hoverproductorder || propsData.Rating) ? "on" : "off"}
                  // onClick={() => setRatingproduct(proindex)}
                  onClick={() => handleProductrating(proindex)}
                  onMouseEnter={() => setHoverproductorder(proindex)}
                  onMouseLeave={() => setHoverproductorder(propsData.Rating)}
                />
              );
            })}
          </span>
        </div>
      </td>
      <td >
        <textarea id='feedbackItemReviewDetail_0__Comment' value={propsData.Comment} onChange={(e) => handleproducttext(e)} disabled={!!productTextdisabled} placeholder='Comment' name="feedbackItemReviewDetail[0].Comment" style={{ width: '100%' }}></textarea>
      </td>
    </tr >
  )
}
export default Orderreviewlistitem;
