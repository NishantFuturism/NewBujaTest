/* eslint-disable react/prop-types */
// import React from "react";
import React from 'react';
import Link from 'next/link';
function BreadCrumb(props) {
  return (
    <div className="breadcrumb-area">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="breadcrumb-wrap">
              <nav aria-label="breadcrumb">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item"><a href="/">Home</a></li>
                  {props.data.BreadCrumb && <li className="breadcrumb-item"><Link href='/compare'>{props.data.BreadCrumb}</Link></li>}
                  <li className="breadcrumb-item active" aria-current="page">{props.activepage}</li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// BreadCrumb.propTypes = {};
export default (BreadCrumb)
