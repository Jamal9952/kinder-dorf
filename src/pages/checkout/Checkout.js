import React from "react";
import "./Checkout.css";
import Header from "../../components/header/Header";
import Banner from "./../../components/banner/Banner";
import BillingDetails from "../../components/billingDetails/BillingDetails";
import { checkoutBannerData } from "../../Utils/Services";
import Footer from "../../components/footer/Footer";
import BillingSummary from "../../components/billingSummary/BillingSummary";

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
        <div className="checkout-content">
        <BillingDetails />
        <BillingSummary />
        </div>
        <Footer />
    </div>
  );
};

export default Checkout;
