/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import '../../../public/assets1/css/default.min.css';
import '../../../public/assets1/css/responsive.min.css';
// import '../../../public/assets1/css/style.min.css';
import '../../../public/assets/css/style.min.css';
export default function Success(props) {
  const { msg, isError } = props
  const [closeBar, setcloseBar]=useState(false)
  // function closeMsgBar() {
  //   setTimeout(() => {
  //     // setShowMsg(false)
  //     // dispatch(setInternalMsg())
  //   }, 1000);
  // }
  const handleClose=()=>{
    setcloseBar(true)
  }
  console.log('checkingprops..', props) 
  return (
    <div>
      {closeBar===false?
      <div 
        className={`topmessage alert  alert-dismissible show ${isError ? 'alert-danger' : 'alert-success'}`} 
        role="alert" 
        style={{ position: 'fixed', top: '0', zIndex: '9999999999', color: '#000'}}
      >
        {isError ? <i className="fa fa-warning cross"></i> : <i className="fa fa-check chk"></i>}
        <strong className="msg">{msg}</strong>
        <button type='button' className="close msgclose" aria-label="close" onClick={()=>handleClose()}>×</button>
      </div>
      :
      ''
  }
    </div>
  );
}