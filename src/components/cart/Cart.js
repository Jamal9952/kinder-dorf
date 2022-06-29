import React from "react";
import Modal from "../modal/Modal";
import "./Cart.css";
import { useDispatch } from "react-redux";
import { toggle } from "../../features/ui/uiSlice";
import {
  addItemFromCart,
  removeItemFromCart,
} from "../../features/cart/cartSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();
  const closeCartHandler = () => {
    dispatch(toggle());
  };
  const addToCartHandler = () => {
    dispatch(addItemFromCart(cartItems[0]));
  };
  const removeItemHandler = () => {
    dispatch(removeItemFromCart(cartItems[0]));
  };
  return (
    <>
      <Modal visibility={props.visibility}>
        <div className="cart-items">
          <h3>Cart</h3>
          {cartItems.map((cartItem) => (
            <div className="cart-item">
              <h2>{cartItem.title}</h2>
              <div className="price">{cartItem.price.toFixed(2)}</div>
              <div className="summary">x{cartItem.quantity}</div>
              <button className="item-quantity-btn" onClick={removeItemHandler}>
                -
              </button>
              <button className="item-quantity-btn" onClick={addToCartHandler}>
                +
              </button>
            </div>
          ))}

          <div className="actions">
            {cartItems.length !== 0 && (
              <Link to="/checkout">
                <button className="button" onClick={closeCartHandler}>
                  Order
                </button>
              </Link> 
            )}
            <button className="button" onClick={closeCartHandler}>
              Close
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Cart;
