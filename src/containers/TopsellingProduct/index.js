/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */
/* eslint-disable array-callback-return */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/**
 *
 * RelatedProduct
 *
 */
import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useDispatch, useSelector } from 'react-redux';
// import useStateIfMounted from 'use-state-if-mounted';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
// import '../../../assets1/css/default.min.css';
// // import '../../../assets1/css/bundle.css';
// import '../../../assets1/css/responsive.min.css';
// import '../../../assets1/css/style.min.css';
import { LoadProducts } from '../LoadProducts';
// import { initialWidth, responsive } from '../MainPage/commonFunctions/customCaurosalBtn';
import { nextBtn } from './actions';
// import './carsoule.css';
import reducer from './reducer';
import saga from './saga';
export function TopsellingProduct() {
  useInjectReducer({ key: 'relatedProduct', reducer });
  useInjectSaga({ key: 'relatedProduct', saga });
  const [pageNum, setNPButton] = useState(1);
  const [FirstCall, setFirstCall] = useState(0);
  const [count, setCount] = useState(1);
  const [Dealofday, setgetDealofday] = useState([]);
  const [shoppingDetail, setShoppingDetail] = useState([]);
  const [addToCartOBJ, setAddToCartOBJ] = useState({});
  const [sliceNum, setsliceNum] = useState(0);
  // const [sliceIncDec, setsliceIncDec] = useState(0);
  const [totalPages, settotalPages] = useState(1);
  // const homeScreen = useSelector(state => state.homeScreen)
  const nextData = useSelector(state => state.relatedProduct)
  const dispatch = useDispatch()
  const initialWidth = () => {
    // setsliceIncDec(floor(window.innerWidth / 251))
    let countSlice = 0
    if (window.matchMedia('(min-width:2001px) and (max-width: 2500px)').matches) {
      countSlice = 5
    }
    if (window.matchMedia('(min-width:1281px) and (max-width: 2000px)').matches) {
      countSlice = 4
    }
    if (window.matchMedia('(min-width:997px) and (max-width:1280px)').matches) {
      countSlice = 3
    }
    if (window.matchMedia('(min-width:465px) and (max-width: 996px)').matches) {
      countSlice = 2
    }
    if (window.matchMedia('(min-width:0px) and (max-width: 464px)').matches) {
      countSlice = 1
    }
    return countSlice
  }
  useEffect(() => {
    if (nextData !== undefined && nextData.dealData !== undefined) {
      setgetDealofday(nextData.dealData.GetSkuRelated)
      settotalPages(nextData.dealData.TotalNoOfPages)
    }
  }, [nextData])
  useEffect(() => {
    if (FirstCall > 1 && nextData !== undefined && Dealofday !== undefined && nextData.dealData !== undefined && nextData.dealData.GetSkuRelated !== undefined) {
      //console.log('Dealofday', Dealofday, nextData);
      setgetDealofday([...Dealofday, ...nextData.dealData.GetSkuRelated])
      setShoppingDetail(nextData.shoppingDetails)
    }
  }, [nextData])
  useEffect(() => {
    // if (Dealofday.length > 9 && sliceNum > Dealofday.length - 9) {
    //   setgetDealofday([...Dealofday, ...Dealofday])
    // }
    if (Dealofday.length > 9 && sliceNum > Dealofday.length - 9 && Dealofday.length - sliceNum < 5) {
      // setsliceNum(Dealofday.length - 5)
      changeSliceNum()
    }
  }, [sliceNum])
  function changeSliceNum() {
    setsliceNum(Dealofday.length - initialWidth() - 1)
  }
  function changeSliceNumBack() {
    setsliceNum(0)
  }
  useEffect(() => {
    setFirstCall(FirstCall + 1)
    // if (FirstCall < 1) {
    //   console.log('index in First call');
    //   dispatch(nextBtn(1, 9))
    // }
  }, [FirstCall])
  useEffect(() => {
    if (shoppingDetail !== undefined) {
      // console.log('shoppingDetailmm', addToCartOBJ)
      shoppingDetail.forEach(itm => {
        objCreation(itm.SKUFilterPriceId, itm.Quantity)
      })
    }
  }, [shoppingDetail])
  function objCreation(SKUFilterPriceId, Quantity) {
    const obj = {}
    obj[`${SKUFilterPriceId}`] = Quantity
    setAddToCartOBJ({ ...addToCartOBJ, ...obj })
  }
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 2500, min: 2001 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 2000, min: 1281 },
      items: 6, partialVisibilityGutter: 10
    },
    tablet: {
      breakpoint: { max: 1280, min: 996 },
      items: 4,
    },
    miniTablet: {
      breakpoint: { max: 996, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 463 },
      items: 1,
    },
    smallScreenmobile: {
      breakpoint: { max: 475, min: 1 },
      items: 1,
    }
  };
  const CustomPrevious = ({ onClick, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    return <button type="button" className="arrow right"
      onClick={() => {
        setsliceNum(sliceNum - initialWidth())
        if (Dealofday.length > 5 && sliceNum < 5) {
          // setsliceNum(Dealofday.length - 5)
          changeSliceNumBack()
        }
      }}>
      {sliceNum !== 0 && (
        // <div className="owl-controls">
        //   <div className="owl-nav">
        <div className="previous round" >
          <span className="lnr lnr-chevron-left"></span>
        </div>
        //   </div>
        // </div>
      )}
      {/* previous */}
    </button>
  }
  // eslint-disable-next-line react/prop-types
  const CustomNext = ({ onClick, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    return <button type="button" className="arrow right"
      onClick={() => {
        setsliceNum(sliceNum + initialWidth())
        setNPButton(pageNum + 1)
      }}>
      {Dealofday && (JSON.stringify(Dealofday[Dealofday.length - 5]) !== JSON.stringify(Dealofday.slice(sliceNum, Dealofday.length)[0])) &&
        (< div className="next round" >
          <span className="lnr lnr-chevron-right"></span>
        </div>)
      }
    </button >
  }
  useEffect(() => {
    if (FirstCall < 1) {
      dispatch(nextBtn(pageNum, 9))
    }
    //console.log('nextBtn index', pageNum);
    if (count < totalPages) {
      dispatch(nextBtn(pageNum, 9))
      setCount(count + 1)
    }
  }, [pageNum])
  const Gallery = () => (
    <Carousel
      responsive={responsive}
      // centerMode={false}
      infinite
      arrows
      transitionDuration={500}
      // renderButtonGroupOutside={false}
      // renderDotsOutside={false}
      // removeArrowOnDeviceType={['mobile']}
      // swipeable
      customLeftArrow={<CustomPrevious />}
      customRightArrow={<CustomNext />}
      slidesToSlide={4}
    >
      {Dealofday !== undefined && (Dealofday.slice(sliceNum, sliceNum + Dealofday.length) || []).map((mapdata, i) => (
        <div className="tab-content" key={sliceNum}>
          <div className="tab-pane fade show active" id="brand-one" style={{ display: 'block' }} >
            <div className="product-gallary-wrapper">
              <div className="product-gallary-active owl-carousel owl-arrow-style sale-nav owl-theme owl-loaded">
                <div className="owl-stage-outer">
                  <div className="owl-stage"
                    style={{
                      transform: ' translate3d(0px, 0px, 0px)', transition: 'all 0s ease 0s',
                    }} >
                    <div className=" active" >
                      {/* <Product addToCartOBJ={addToCartOBJ} data={mapdata} index={i} /> */}
                      <LoadProducts data={mapdata} index={i} skulisting />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
  // console.log('deal of the day', sliceNum, Dealofday, pageNum);
  return (
    <>
      <div className="container-fluid">
        <div className="row" >
          <div className="col-12" >
            <div className="section-title product-spacing hm-11 mb-0">
              <h3>
                {nextData && nextData.loading === 0 ? null :
                  <span>Topselling Products</span>}
              </h3>
              {/* <button type="button" style={{
              backgroundColor: 'transparent', color: 'red', cursor: 'pointer', float: 'right', marginTop: '10px',
            }} >
              VIEW ALL
            </button> */}
            </div>
            {/* <div style={{ margin: '0 auto' }}> */}
            {nextData && nextData.length === 0 ? null :
              <Gallery />
            }
            {/* <ProductGallery dealProduct={dealProduct} /> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
export default TopsellingProduct;
