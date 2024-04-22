/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import SubMenuSeller from "./SubMenuSeller";

function SellerMenu(props) {
  const router = useRouter();
  const {
    setIsLoading,
    selectedIndex,
    setselectedIndex,
  } = props;
  const [enablecollapse, setenablecollapse] = useState(false);
  const [subCatselectedIndex, setsubCatselectedIndex] = useState(null);

  const handleClick = () => {
    setenablecollapse(!enablecollapse);
    setselectedIndex(props.index);
    document.body.classList.add('ReactModal__Body--open');
  };
  return (
    <>
    <li className="mega-parent" id="megaMenuseller">
        <div className="subSellerCate">
         {props.itm.CategoryGroupName}
        </div>
      <Link
        className="mean-expand" id="arrowsellerMenu"
        onClick={(e) => {
          e.preventDefault();
          handleClick();
        }}
        href=""
        style={{ fontSize: "18px" }}>
        {enablecollapse && props.index === selectedIndex ? "-" : "+"}
      </Link>     

      {enablecollapse && props.index == selectedIndex ? (
        <ul className="parentSeller" id="dropdowsubnmenu">
          {props.itm.Main_cat.map((subItm, subIndex) => (
            
              <SubMenuSeller
                subItm={subItm}
                subIndex={subIndex}             
                setIsLoading={setIsLoading}
                subCatselectedIndex={subCatselectedIndex}
                setsubCatselectedIndex={setsubCatselectedIndex}
                categoryCount={props.itm?.Main_cat?.length}
              />        
          ))}        
        </ul>   
      ) : null}  
      
    </li>    
    </>
  );
  
}
export default SellerMenu;