import React from "react";
import "./Checkout.css";
import Header from "../../components/header/Header";
import Banner from "./../../components/banner/Banner";
import BillingDetails from "../../components/billingDetails/BillingDetails";
import { checkoutBannerData } from "../../Utils/Services";

const Checkout = () => {
  return (
    <div>
      <Header />
      {checkoutBannerData.map((data) => (
        <Banner
          link={data.link}
          home={data.home}
          page={data.page}
          heading={data.heading}
        />))}
        <BillingDetails />
    </div>
  );
};

export default Checkout;
