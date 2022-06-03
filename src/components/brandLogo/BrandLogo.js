import React from "react";
import logo from "../../assets/logo.png";
import "./BrandLogo.css";
import DashedBackground from "../dashedBackground/DashedBackground";
const BrandLogo = () => {
  return (
    <div className="brand-logo">
      <DashedBackground color= '#fb6f91'>
        <div className="brand--name">KinderDorf</div>
      </DashedBackground>
      <div className="brand--img">
        <img src={logo}></img>
      </div>
    </div>
  );
};

export default BrandLogo;
