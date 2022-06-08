import React from "react";
import "./Footer.css";
import footerLogo from "../../assets/footerLogo.png";
import FooterContent from "./FooterContent";
import { footerData } from "../../Utils/Services";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = (props) => {
  return (
    <div className="footer">
      {/* Footer Navigation and Logo portion Starts here  */}
      <div className="footer-nav-container">
        <ul className="footer-nav-list">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>BabyStreet Shop</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
          <li>
            <a>My Account</a>
          </li>
          <li>
            <a>Wishlist</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
        </ul>

        <div className="footer-logo">
          <img src={footerLogo}></img>
        </div>
      </div>
      {/* Footer Navigation and logo portion Ends here  */}

      {/* Page's links - main content starts here */}
      <div className="footer-content-container">
        {footerData.map((content) => (
          <FooterContent heading={content.heading} content={content.content} />
        ))}
      </div>
      {/* Page's links - main content starts here */}

      {/* Social Media links start here */}
      <div className="media-details">
        <div className="media-link-container">
          <ul>
            <li><FontAwesomeIcon icon="fa-brands fa-facebook-f" /></li>
            <li>Jamal Ahmed</li>
          </ul>
        </div>
        <div className="project-details">
          <p>KinderDorf theme by Jamal Ahmed | All rights reserved!</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
