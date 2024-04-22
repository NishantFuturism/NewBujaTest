/* eslint-disable react/prop-types */
import React from 'react';
import '../../../public/assets1/css/default.min.css';
import '../../../public/assets1/css/responsive.min.css';
// import '../../../public/assets1/css/style.min.css';
import '../../../public/assets/css/style.min.css';
export default function Warn(props) {
  const { msg } = props
  return (
    <div>
      <div 
        className="topmessage alert alert-danger alert-dismissible show" 
        role="alert"
        style={{ position: 'fixed', top: '0', zIndex: '9999999999', color: '#000'}}
      >
        <i className="fa fa-warning cross"></i><strong className="msg">{msg}</strong>
        {/* <button type='button' className="close msgclose" aria-label="close" onClick={() => {
          props.fetchToggle()
        }}>×</button> */}
        {/* <Link to="/register" className="close msgclose" aria-label="close" onClick={() => setIsError(false)}>×</Link> */}
      </div>
    </div>
  );
}