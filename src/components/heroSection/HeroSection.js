import React from "react";
import DashedBackground from "../dashedBackground/DashedBackground";
import "./HeroSection.css";
import { heroButtonsData } from "../../Utils/Services";
const HeroSection = (props) => {
  return (
    <div className="hero-section">
      {/* If there is no text, header doesn't stay on it's place */}
      
      <div className="hero-container">
        <h1 className="hero-heading">Find Something you Love</h1>
        {/* Search Area starts here */}
          <input className="search-bar" placeholder="Search Products..."></input>
          <button className="search-bar-button">🔎</button>
        <p className="enter-to-search-phrase">Type and hit Enter to Search</p>
        <p className="browse-popular-phrase">or browse popular categories</p>
        {/* Place Bottun here */}
        <div className="hero-button-container">
            {heroButtonsData.map(buttonContext => <DashedBackground className="dashed-background-container" text={buttonContext.text} color={buttonContext.color} /> )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
