import React, { useEffect, useState } from 'react';

const LogoLoader = (props) => {
  const [firstLoadCheck, setFirstLoadCheck] = useState(false);
  useEffect(() => {
    setFirstLoadCheck(true)
  }, [])

  const globalStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    zIndex: '9999999999999',
    transform: 'translate(-50%, -50%)'
  }

  const overLayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.2)',
    zIndex: '99999999999999',
  }
  return(
    <>
      {firstLoadCheck && 
        <>
          {props?.isGlobal && <div style={overLayStyle}></div>}
          <div style={props?.isGlobal ? globalStyle : { minHeight : '100vh' }} className="container d-flex justify-content-center align-items-center h-100 category-loader">
            <img src='/images/adibuja-logo-animation.gif' alt='' style={{ justifySelf: 'center', width: '80px', height: '80px' }} />
          </div>
        </>
      }
    </>
  )
}

export default LogoLoader;