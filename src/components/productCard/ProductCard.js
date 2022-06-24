import React from "react";
import "./ProductCard.css";
import { useDispatch } from 'react-redux';
import { addItemToCart } from "../../features/cart/cartSlice";

const ProductCard = (props) => {
  const dispatch = useDispatch();
  
  const addToCartHandler = () => {
    dispatch(addItemToCart({
      id: props.id,
      title: props.title,
      price: props.price,
      quantity: 1,
    }))
  }
  return (
    <div style={{width : `${props.width}`}} className= {props.className ? props.className : "product-card" } >
      <a>
        <img src={props.img} className="product-img"></img>
      </a>
      <div className="product-summary">
        <a className="product-name">
          <span className="product-name">{props.title}</span><br/>
        </a>
        <span className="product-price">${props.price}</span>
        <span className="product-buy" onClick={addToCartHandler}>👜</span>
      </div>
      
    </div>
  );
};

export default ProductCard;
