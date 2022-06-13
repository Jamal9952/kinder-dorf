import React from "react";
import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
// import DashedBackground from "../dashedBackground/DashedBackground";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const categories = ["girls", "boys", "kids", "shirts", "pants", "shoes"];

const Navbar = (props) => {
  return (
    <div className={props.isNavExpanded ? "navbarActive" : "navbar"}>
      {/* Mobile View Bar starts here*/}
      <div className="task-container">
        <div className="menu-container">
          <p>Menu</p>
        </div>
        <div className="icon-container">
          <div className="mobile-wish-list">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
          <div className="close-navbar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
      </div> 
      {/* Mobile View Bar ends here */}
      <ul className="navlink-list">
        <li className="navlink-links">
          <Link to="/">Home</Link>
        </li>
        <li className="dropdown cool-sticker-rot navlink-links">
          <Link to="/shop" className="shop-btn">
            Shop 
            {/* <FontAwesomeIcon className="arrow-down" icon={faAngleDown} /> */}
            <span className="cool-sticker">COOL</span>
            {/* <div className="shop-dropdown-content">
              <h4 className="dropdown-head">Categories</h4>
              <ul>
                {categories.map((category) => (
                  <li>{category}</li>
                ))}
              </ul>
            </div> */}
          </Link>
        </li >
        <li className="dropdown navlink-links">
          <Link to="/blog">
            Blog 
            {/* <FontAwesomeIcon className="arrow-down" icon={faAngleDown} /> */}
            <div className="dropdown-content">
              <h4 className="dropdown-head">Categories</h4>
              <ul className="dropdown-list">
                {categories.map((category) => (
                  <li>{category}</li>
                ))}
              </ul>
            </div>
          </Link>
        </li>
        <li className="dropdown navlink-links">
          <Link to="/lookbook">
            LookBook{" "}
            {/* <FontAwesomeIcon className="arrow-down" icon={faAngleDown} /> */}
            <div className="dropdown-content">
              <h4 className="dropdown-head">Categories</h4>
              <ul className="dropdown-list">
                {categories.map((category) => (
                  <li>{category}</li>
                ))}
              </ul>
            </div>
          </Link>
        </li>
        <li className="dropdown navlink-links">
          <Link to="">
            Pages 
            {/* <FontAwesomeIcon className="arrow-down" icon={faAngleDown} /> */}
            <div className="dropdown-content">
              <h4 className="dropdown-head">Categories</h4>
              <ul className="dropdown-list">
                {categories.map((category) => (
                  <li>{category}</li>
                ))}
              </ul>
            </div>
          </Link>
        </li>
        <li className="navlink-links">
          <Link to="/features">Features</Link>
        </li>
      </ul>

      {/* Mobile Menu Starts Here */}
      {/* <div className="menu-button">
        <DashedBackground>
          <div className="mobile-menu">
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
      </div> */}
    </div>
  );
};

export default Navbar;
