import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHeart } from "@fortawesome/free-regular-svg-icons";
import DashedBackground from "../dashedBackground/DashedBackground";
import "./CartHolder.css";

const CartHolder = (props) => {
  const toggleHandler = () => {
     props.setIsNavExpanded(!props.isNavExpanded);
  }
  return (

    <div className="navbar-bar">
        <DashedBackground color='#81d1e5'>
          <a className="user-login">
            <FontAwesomeIcon icon={faUser} />
          </a>
          <a className="favourite-items">
            <FontAwesomeIcon icon={faHeart} />
          </a>
          <a className="shopping-cart" onClick={props.onClick}>
            🛒
          </a>
        </DashedBackground>
        
      {/* Mobile navbar Starts here */}




      <div className="navbar-button" onClick={toggleHandler} >
        <DashedBackground color='#81d1e5'> 
          <div className="mobile-navbar" >
            <svg 
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ham-burger"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
        </DashedBackground>
      </div>


      
    </div>
  );
};

export default CartHolder;
