import React from "react";
import logo from "../../assets/logo.png";
import "./BrandLogo.css";
import DashedBackground from "../dashedBackground/DashedBackground";
import { Link } from "react-router-dom";


const BrandLogo = () => {
  return (
    <div className="brand-logo">
      <Link to={"/"} style={{color:"white"}}>
      <DashedBackground color= '#fb6f91'>
        <div className="brand--name">KinderDorf</div>
      </DashedBackground>
      <div className="brand--img">
        <img src={logo}></img>
      </div>
      </Link>
    </div>
  );
};

export default BrandLogo;
