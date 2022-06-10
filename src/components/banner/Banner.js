import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";
const Banner = (props) => {
  return (
    <div className="banner">
      {/* BREADCRUMB */}
      <div className="breadcrumb">
        <Link to="/">{props.home}</Link>
        <span style={{ opacity: 0.5 }}>
          <span className="breadcrumb-delimiter">/</span>
          {props.page}
        </span>
      </div>
      {/* END OF BREADCRUMB */}
      <h1 className="banner-heading">{props.heading}</h1>
      <p className="banner-content">We’ve picked few pieces we’re pretty sure you’ll ❤. Check back often and enjoy.</p>
    </div>
  );
};

export default Banner;
