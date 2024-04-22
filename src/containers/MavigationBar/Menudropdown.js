/* eslint-disable react/prop-types */
import React, { useState , useEffect} from 'react';
////import history from '../../utils/history';
import { useRouter } from 'next/router';
import Link from 'next/link';
import SubMenudropdown from './subMenudropdown';
function Menudropdown(props) {
  const router = useRouter();
  const {disablediv, setIsLoading,selectedIndex, setselectedIndex} = props;
  console.log("props..", props)
  const [enablecollapse, setenablecollapse] = useState(false)
  const [subCatselectedIndex, setsubCatselectedIndex] = useState(null)
 
  const handleClick=()=>{
    setenablecollapse(!enablecollapse)
    setselectedIndex(props.index)   
  }
  return (
    <li className="mega-parent" >
            { console.log('itmm',props.itm, props.index)}
            <a href="#" className='activeLinkmenu'>
              {props.itm.CategoryGroupName}
            </a>
            <span className="lnr lnr-chevron-down"></span>
                              
      {(enablecollapse && props.index == selectedIndex ) ?
        <ul className="dropdown" id='dropdowsubnmenu' >
          {props.itm.Main_cat.map((subItm, subIndex) => (           
            <li>
               {/* {props.itm?.Main_cat?.length > 1 ?     */}
               <SubMenudropdown subItm={subItm} subIndex={subIndex} setIsLoading={setIsLoading} disablediv={disablediv} subCatselectedIndex={subCatselectedIndex} setsubCatselectedIndex={setsubCatselectedIndex} categoryCount={props.itm?.Main_cat?.length}/>
               {/* : null 
               } */}
            </li>
          ))}
        </ul>
        : null}   
          
      <Link className="mean-expand"
        onClick={(e) => {
        e.preventDefault();  
        handleClick()     
        }}     
        href="" style={{ fontSize: '18px' }}>{(enablecollapse && props.index === selectedIndex)  ? "-" : "+"}</Link>
    </li>
  )
}
export default Menudropdown;