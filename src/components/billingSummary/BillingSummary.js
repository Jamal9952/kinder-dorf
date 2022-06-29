import React from "react";
import DashedBackground from "../dashedBackground/DashedBackground";
import "./BillingSummary.css";
import { useSelector } from "react-redux";
import { addItemToCart } from "../../features/cart/cartSlice";

const BillingSummary = (props) => {
  const cartItems = useSelector((state) => state.cart.items);

  const findTotalPrice = (cartItems) => {
    let total = [];
    const initialValue = 0;
    let totalPrice = cartItems.map((item) => {
      total.push(item.price)
      return total;
    });
    const totalSum = total.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue 
    );
    return totalSum;
  };
  const totalPrice = findTotalPrice(cartItems);
const shippingPrice = totalPrice == 0 ? 0 : 12 ;
  const grandTotal = totalPrice + shippingPrice;
  const total = grandTotal.toFixed(2);
  console.log("Checking values", totalPrice, shippingPrice);
  return (
    <div className="billing-summary-container">
      <div className="billing-summary-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr>
                <td className="product-title-checkout">
                  {item.title} <b>x {item.quantity}</b>
                </td>
                <td>${item.price}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            {totalPrice == 0 ?<p className="buy-something">Please buy something!</p> : <tr>
              <th>Total</th>
              <td>${totalPrice}</td>
            </tr>}
            
            <tr>
              <th>Shipping</th>
              <td>${shippingPrice}</td>
            </tr>
            <tr>
              <th>Grand Total</th>
              <td className="total-payment-data">${total}</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div className="payment-method">
        <div className="cod-payment">
          <input type="radio" />
          <label>CASH ON DELIVERY</label>
          <p className="payment-message">Pay with cash upon delivery.</p>
        </div>
        <div className="online-payment">
          <input type="radio" />
          <label>PAYPAL</label>
          <p className="payment-message">
            Pay via PayPal; you can pay with your credit card if you don’t have
            a PayPal account.
          </p>
        </div>
      </div>
      <p className="payment-message">
        Your personal data will be used to process your order, support your
        experience throughout this website, and for other purposes described in
        our privacy policy.
      </p>
      <div className="terms-and-conditions">
        <input type="checkbox" />
        <label>I HAVE READ AND AGREE TO THE WEBSITE TERMS AND CONDITIONS</label>
      </div>
      <DashedBackground color="#ff8087" text="PLACE ORDER" />
    </div>
  );
};

export default BillingSummary;
