import { React, useState } from "react";
import "./Header.css";
import BrandLogo from "../brandLogo/BrandLogo";
import Navbar from "../navbar/Navbar";
import CartHolder from "../cartHolder/CartHolder";

const Header = (props) => {
  const [isNavExpanded , setIsNavExpanded] = useState(true);

  return (
    <div className="header">
      <div className="inner-header">
        <div>
          <BrandLogo />
          <Navbar isNavExpanded= {isNavExpanded}/>
        </div>
        <CartHolder onClick={props.onShowCart} setIsNavExpanded = {setIsNavExpanded} isNavExpanded={isNavExpanded}/>
      </div>
    </div>
  );
};

export default Header;
