import React from "react";
import DashedBackground from "../dashedBackground/DashedBackground";
import "./HeroSection.css";
import { heroButtonsData } from "../../Utils/Services";
const HeroSection = (props) => {
  return (
    <div className="hero-section">
      {/* If there is no text, header doesn't stay on it's place */}
      .
      <div className="hero-container">
        <h1 className="hero-heading">Find Something you Love</h1>
        {/* Search Area starts here */}
        <form className="search-form">
          <input className="search-bar" placeholder="Search Products"></input>
        </form>
        <p className="enter-to-search-phrase">Type and hit Enter to Search</p>
        <p className="browse-popular-phrase">or browse popular categories</p>
        {/* Place Bottun here */}
        <div className="hero-button-container">
          
            {heroButtonsData.map(buttonContext => <DashedBackground className="small-button" text={buttonContext.text} color={buttonContext.color} /> )}
          

          {/* <DashedBackground color='#8bcedf'>
            <div className="small-button">Baby Boy 0-3</div>
          </DashedBackground>

          <DashedBackground color='#cadf68'>
            <div className="small-button">Toddler Girl 4-12</div>
          </DashedBackground>

          <DashedBackground color='#e9c35e'>
            <div className="small-button">Toddler Boy 4-12</div>
          </DashedBackground> */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
