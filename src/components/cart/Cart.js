import React from "react";
import Modal from "../modal/Modal";
import "./Cart.css";
import { useDispatch } from "react-redux";
import { toggle } from "../../features/ui/uiSlice";
import { removeFromCart } from "../../features/cart/cartSlice";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();
  const closeCartHandler = () => {
    dispatch(toggle());
  };

  const removeItemHandler = () => {
    dispatch(removeFromCart());
  }
  return (
    <>
      <Modal visibility={props.visibility}>
        <div className="cart-items">
          <h3>Cart</h3>
          {cartItems.map((cartItem) => (
            <div className="cart-item">
              <h2 >{cartItem.title}</h2>
              <div className="price">{cartItem.price}</div>
              <div className="summary">x{cartItem.quantity}</div>
              <button className="item-quantity-btn" onClick={removeItemHandler}>-</button>
              <button className="item-quantity-btn">+</button>
            </div>
          ))}

          <div className="actions">
            {cartItems.length !== 0 && <button className="button">Order</button>}
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
