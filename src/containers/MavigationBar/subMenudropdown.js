/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

function subMenudropdown(props) {
const [subenablecollapse, setsubenablecollapse] = useState(false)
const [subIdx, setsubIdx] = useState('')
const router = useRouter();
const {subCatselectedIndex, setsubCatselectedIndex} = props

 function productlistpage() {
  props.disablediv()
}

const handleSubmenuClick=()=>{
  setsubenablecollapse(!subenablecollapse)
  setsubCatselectedIndex(props.subIndex)
}

return (
               
<li className="mega-parentsubsub" >
    
       {/* {console.log('itmmsubItm',props.sub_subitm.SubCategory)}
        {props.sub_subitm.SubCategory} */}

            
{props.categoryCount > 1 ?<Link 
              href={`/category/${props.subItm.MainCategoryUrl}/${props.subItm.Sub_cat[0].SubCategoryUrl}`}
              onClick={() => {
                props.setIsLoading(true)
                productlistpage()
              }}
            >
              {props.subItm.MainCategory}
             </Link> : null }
             {subenablecollapse && props.subIndex === subCatselectedIndex ?             
               <ul className="dropdown" id='dropdowsubnmenu'>
                {props.subItm.Sub_cat.map(sub_subitm=>(    
                                         
                 <li>        
                   {console.log('s10',sub_subitm)}                             
                   <Link 
                    className='activeLinkmenu'
                    href={`/category/${props.subItm.MainCategoryUrl}/${sub_subitm.SubCategoryUrl}`}
                    onClick={() => productlistpage()}
                  >                        
                    {sub_subitm.SubCategory}         
                   </Link>
                   
                 </li>             
                 ))}
               </ul>
               :null} 
                     
              {props.categoryCount <= 1 ?             
               <ul className="dropdown" id='dropdowsubnmenu'>
                {props.subItm.Sub_cat.map(sub_subitm=>(    
                                         
                 <li>        
                   {console.log('s10',sub_subitm)}                             
                   <Link 
                    className='activeLinkmenu'
                    href={`/category/${props.subItm.MainCategoryUrl}/${sub_subitm.SubCategoryUrl}`}
                    onClick={() => productlistpage()}
                  >                        
                    {sub_subitm.SubCategory}         
                   </Link>
                   
                 </li>             
                 ))}
               </ul>
               :null} 
               
       
              {  props.categoryCount > 1  ? <Link className="mean-expand"
                 onClick={(e) => {
                   e.preventDefault(); 
                   handleSubmenuClick()
                  //  setsubenablecollapse(!subenablecollapse)
                 }}     
               href="" style={{ fontSize: '18px' }}>{subenablecollapse && props.subIndex === subCatselectedIndex ? "-" : "+"}</Link> : null}        
 </li>
     
  )
}
export default subMenudropdown;
