import React from "react";
import "./BillingDetails.css";
import Cities from "../../Utils/Cities";

const BillingDetails = () => {
  return (
    <div className="billing-details-container">
      <h2 className="biling-details-heading">Billing Details</h2>

     <form>
    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.." />

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

    <label for="city">City</label>
    <Cities />

    <label for="address">Address</label>
    <input type="text" id="address" name="address" placeholder="Your Adress.." />

    <label for="phone">Phone</label>
    <input type="number" id="phone" name="phone" placeholder="Phone Number.."></input>
    
    <label for="email">Email Address</label>
    <input type="email" id="email" name="email" placeholder="Email Address.."></input>

    <label for="subject">Order Notes(OPTIONAL)</label>
    <textarea id="subject" name="subject" placeholder="Notes about your order, e.g. special notes for delivery."></textarea>

    <input type="submit" value="Submit" />
  </form>
    </div>
  );
};

export default BillingDetails;
