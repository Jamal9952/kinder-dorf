import React from "react";
import "./ProductCard.css";
import ProductImage from "../../assets/productImage.jpg";

const ProductCard = () => {
  return (
    <div className="product-card">
      <a>
        <img src={ProductImage} className="product-img"></img>
      </a>
      <div className="product-summary">
        <a className="product-name">
          <span className="product-name">Demin Jumpsuit</span> <br/>
        </a>
        <span className="product-price">$50.70</span>
      </div>
    </div>
  );
};

export default ProductCard;
