import React from "react";
import "./ProductCard.css";

const ProductCard = (props) => {
  return (
    <div style={{width : `${props.width}`}}className="product-card">
      <a>
        <img src={props.img} className="product-img"></img>
      </a>
      <div className="product-summary">
        <a className="product-name">
          <span className="product-name">{props.title}</span> <br/>
        </a>
        <span className="product-price">${props.price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
