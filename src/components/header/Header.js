import React from "react";
import { useState } from "react";
import "./Header.css";
import BrandLogo from "../brandLogo/BrandLogo";
import Navbar from "../navbar/Navbar";
import CartHolder from "../cartHolder/CartHolder";

const Header = (props) => {
  const [isNavExpanded , setIsNavExpanded] = useState(true);

  return (
    <div className="header">
      <div className="inner-header">
        <div className="logo-nav">
          <BrandLogo />
          <Navbar isNavExpanded= {isNavExpanded}/>
        </div>
        <CartHolder setIsNavExpanded = {setIsNavExpanded} isNavExpanded={isNavExpanded}/>
      </div>
    </div>
  );
};

export default Header;
