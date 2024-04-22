/**
 *
 * MainRoute
 *
 */
import React, {useEffect} from 'react';
import { useInjectReducer } from '@/utils/injectReducer';
import { useInjectSaga } from '@/utils/injectSaga';
// import '../../../assets1/css/default.min.css';
// // import '../../../public/assets1/css/bundle.css';
// import '../../../assets1/css/responsive.min.css';
// import '../../../assets1/css/style.min.css';
import { ToastContainer } from 'react-toastify';
import HomePage from '../HomePage/index';
import reducer from './reducer';
import saga from './saga';
import 'react-toastify/dist/ReactToastify.css';
import { ConstantsValues } from '../MainPage/api/homeServices';
export function MainRoute(props) {
  useInjectReducer({ key: 'mainRoute', reducer });
  useInjectSaga({ key: 'mainRoute', saga });
  useEffect(()=>{
    if (props.sellerDetailsFromDomain && props.sellerDetailsFromDomain.AdminMemberId) {
      localStorage.setItem('sellerID',props.sellerDetailsFromDomain.AdminMemberId)
    } else {
      localStorage.setItem('sellerID',ConstantsValues.defaultSellerID)
    }
    
    //localStorage.setItem('sellerID',props.sellerDetailsFromDomain)
  },[])
  // const [Megamainmenu, setMegamainmenu] = useState([]);
  // const data = localStorage.getItem('googlesignindata',);
  // const dispatch = useDispatch()
  // const menubar = useSelector(state => state.mainRoute)
  // useEffect(() => {
  //   if (menubar !== undefined) {
  //     setMegamainmenu(menubar.megaMenuResp);
  //   }
  // }, [menubar]);
  // useEffect(() => {
  //   if (Megamainmenu.length === 0) { dispatch(megaMenuAction()) }
  // }, []);
  return (
    <>
      
      {/* <FormattedMessage {...messages.header} /> */}
      <ToastContainer
        position="top-right"
      // draggable={true}
      // autoClose={50000}
      />
      <HomePage sellerDetailsFromDomain={props.sellerDetailsFromDomain} brandsDataHomePage={props.brandsDataHomePage} newArrivalProductsData={props.newArrivalProductsData} featuredProductsData={props.featuredProductsData} topTrendingProductsData={props.topTrendingProductsData} topSellingProductsData={props.topSellingProductsData} dealOfDayProducts={props.dealOfDayProducts} topMenuData={props.topMenuData} footerPagesLinks={props.footerPagesLinks} billBoardBanners={props.billBoardBanners} advertiseBanners={props.advertiseBanners} footerCategoryLinks={props.footerCategoryLinks}/>
    </>
  );
}
export default MainRoute
