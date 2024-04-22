import React, { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux'
// import { useHistory } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import Footer from '../components/Footer/footer'
import Header from '../components/Header'
// import SubNavigation from '../../components/SubNavigation'
import CustomsAPI from '../containers/MainPage/api/homeServices'
// import { ShopBrand } from '../ShopBrand'
// import ToppSellingOriginal from '../ToppSellingOriginal'
import BreadCrumb from '../containers/MyAccount/myAccountBreadcrumb';
import { httpRequest } from '@/containers/MainPage/api/apiServices';
import { ConstantsValues } from '../containers/MainPage/api/homeServices';
// import ToppSellingOriginal from '../ToppSellingOriginal'
// import { TopsellingProduct } from '../TopsellingProduct/index';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import Constants from '@/containers/App/constants';
//export default function ViewmorePage() {
const ViewmorePage = ( { viewMoreCategories, viewMoreMegaCategories } ) => {
  //const [viemoredata, setviemoredata] = useState();
  const viemoredata = viewMoreCategories; 
  const viewMegaMenuDetails = viewMoreMegaCategories;

  // const history = useHistory()
  // const nextData = useSelector(state => state.ToppSelling)
  /*useEffect(() => {
    CustomsAPI.categoreyServices()
      .then(response => {
        setviemoredata(response)
        console.log("res..", response)
      })
      .catch(error => {
        console.log('error:::', error);
      });
  }, [])*/
  function productlist(PageUrl, patrentcaturl) {
    console.log("productlist==", PageUrl, patrentcaturl);
    localStorage.setItem('PLPCat', `category/${patrentcaturl}/${PageUrl}`)
    localStorage.setItem('PLPparenturl', `category/${patrentcaturl}`)
    // return router.push(`category/${patrentcaturl}/${PageUrl}`, { isURLChange: `category/${patrentcaturl}/${PageUrl}` })
  }
  function productlistpage(pageurl, patrentcaturl) {
    console.log("productlistpage==", pageurl, patrentcaturl);
    localStorage.setItem('PLPCat', `category/${patrentcaturl}/${pageurl}`)
    localStorage.setItem('PLPparenturl', `category/${patrentcaturl}`)
    // return router.push(`category/${patrentcaturl}/${pageurl}`, { isURLChange: `category/${patrentcaturl}/${pageurl}` })
  }
  return (
    <>
      <ToastContainer
        position="top-right"
      // draggable={true}
      // autoClose={50000}
      />
      <Header />
      <BreadCrumb id="viewmorebreadcrumb" activepage="All Categories" />
      {/* <SubNavigation /> */}
      {/* <div id="divCategoryMenuList">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="main-menu-categories">
                <nav id="mobile-menu">
                  <ul>
                    <li className="static">
                      <ul className="mega-menu mega-full" style={{ cursor: 'pointer' }}>
                        {(viemoredata || []).map(data =>
                          data.SubCatgories !== undefined && data.SubCatgories.length !== 0 &&
                          <li className="mega-title" >
                            {/* <Link to={(data.SubSubMenus.map(subItm => subItm.PageUrl), data.PageUrl)} onClick={() => productlist(data.SubSubMenus.map(subItm => subItm.PageUrl), data.PageUrl,)} >
                              {data.DisplayName}
                            </Link>
                            {/* <a href
                              onClick={() => productlist(data.SubSubMenus.map(subItm => subItm.PageUrl), data.PageUrl)}
                            >{data.DisplayName}</a> */}
                            {/* <a href={data.SubCatgories.length === 0 && data.SubCatgories.PageUrl}
                              onClick={() => productlist(data.SubCatgories.PageUrl, data.PageUrl)}
                            >{data.DisplayName}</a> */}
                            {/* <Link href={`category/${data.PageUrl}/${data.SubCatgories[0].PageUrl}`}
                              onClick={() => productlist(data.SubCatgories[0].PageUrl, data.PageUrl)}
                            >{data.DisplayName}</Link>
                            {console.log("category..", data.PageUrl)}
                            {data.SubCatgories.map(d =>
                              <ul>
                                <li><Link href={`category/${data.PageUrl}/${d.PageUrl}`}
                                  onClick={() => productlistpage(d.PageUrl, data.PageUrl)}
                                >{d.DisplayName}</Link></li>
                              </ul>
                            )}
                          </li>
                        )}
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div id="divCategoryMenuList">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="main-menu-categories">
                <nav id="mobile-menu">
                  <ul>
                    <li className="static">
                      <ul className="mega-menu mega-full" style={{ cursor: 'pointer' }}>
                        {viewMegaMenuDetails?.length > 0 && viewMegaMenuDetails.map(data =>
                          data.Main_cat !== undefined && data.Main_cat?.length > 0 && (
                          <>
                            {data.Main_cat?.map(item => (
                              <li className="mega-title" >
                                <Link href={`category/${item.MainCategoryUrl}/${item.Sub_cat?.[0].SubCategoryUrl}`}
                                  onClick={() => productlist(item.Sub_cat?.[0].SubCategoryUrl, item.MainCategoryUrl)}
                                >{item.MainCategory}</Link>
                                {item?.Sub_cat?.length > 0 && item.Sub_cat.map(d =>
                                  <ul>
                                    <li>
                                      <Link href={`category/${item.MainCategoryUrl}/${d.SubCategoryUrl}`}
                                      onClick={() => productlistpage(d.SubCategoryUrl, item.MainCategoryUrl)}
                                      >{d.SubCategory}
                                      </Link>
                                    </li>
                                  </ul>
                                )}
                              </li>
                            ))}
                          </>)
                        )}
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <ShopBrand />
      <ToppSellingOriginal deal={nextData && nextData.dealData} /> */}
      <Footer />
    </>
  )
}

export async function getServerSideProps() {
  const viewMoreCategories = await fetchMoreCategories();
  const viewMoreMegaCategories = await fetchMegaMenuMoreCategorires();
  return {
      props: {
        viewMoreCategories: viewMoreCategories,
        viewMoreMegaCategories: viewMoreMegaCategories
      },
  };
}

function fetchMegaMenuMoreCategorires() {
  const url = `${Constants.urls.baseUrl}${Constants.endPoints.MultiMenu}ClientId=1&languageId=2&IsForReact=1`;
  return httpRequest(url, 'GET');
}

function fetchMoreCategories() {console.log('hello logging in here menu ====================')
  const url = `${Constants.urls.baseUrl}${Constants.endPoints.categories}languageId=${ConstantsValues.languageId}&levelDepth=0`;
  return httpRequest(url, 'GET');
}

export default ViewmorePage;
