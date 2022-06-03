import React from "react";
import "./BrandCard.css";

const BrandCard = (props) => {
  return (
    
      <div className="brand-card">
        <div className="brand-card-icon">{props.icon}</div>
        <h5 className="brand-card-heading">{props.title}</h5>
        <div className="brand-card-content">{props.desc}</div>
      </div>
   
  );
};

export default BrandCard;
