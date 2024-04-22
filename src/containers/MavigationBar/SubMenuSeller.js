/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

function SubMenuSeller(props) {
  const [subenablecollapse, setsubenablecollapse] = useState(false);
  const router = useRouter();
  const { subCatselectedIndex, setsubCatselectedIndex } = props;

  const handleSubmenuClick = () => {
    setsubenablecollapse(!subenablecollapse);
    setsubCatselectedIndex(props.subIndex);
  };

  return (
    <li className="megaSellersubsub" id="sellerSubsub">
      {props.categoryCount > 1 ? (
        <Link
          href={`/category/${props.subItm.MainCategoryUrl}/${
            props.subItm.Sub_cat[0].SubCategoryUrl
          }`}
          onClick={() => {
            props.setIsLoading(true);
            // productlistpage();
          }}
        >
        <div className="subSellerCate">
          {props.subItm.MainCategory}
          </div>
        </Link>
      ) : null}
      {subenablecollapse && props.subIndex === subCatselectedIndex ? (
        <ul className="seller-sub-menu parentSeller" id="dropdowsubnmenu">
          {props.subItm.Sub_cat.map((sub_subitm) => (
            <li>
              <Link
                className="activeLinkmenu"
                href={`/category/${props.subItm.MainCategoryUrl}/${
                  sub_subitm.SubCategoryUrl
                }`}
                // onClick={() => productlistpage()}
              >
                 <div className="subsubSellerCate">
                {sub_subitm.SubCategory}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      ) : null}

      {props.categoryCount <= 1 ? (
        <ul className="seller-sub-menu parentSeller" id="dropdowsubnmenu">
          {props.subItm.Sub_cat.map((sub_subitm) => (
            <li>
              <Link
                className="activeLinkmenu"
                href={`/category/${props.subItm.MainCategoryUrl}/${
                  sub_subitm.SubCategoryUrl
                }`}
                // onClick={() => productlistpage()}
              >
                {sub_subitm.SubCategory}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}

      {props.categoryCount > 1 ? (
        <Link
          className="mean-expand" id="arrowsellerMenu"
          onClick={(e) => {
            e.preventDefault();
            handleSubmenuClick();
            //  setsubenablecollapse(!subenablecollapse)
          }}
          href=""
          style={{ fontSize: "18px" }}
        >
          {subenablecollapse && props.subIndex === subCatselectedIndex
            ? "-"
            : "+"}
        </Link>
      ) : null}
    </li>
  );
}
export default SubMenuSeller;
