import React from 'react'
import { useState } from "react";

import './Home.css'
import Header from '../../components/header/Header'
import Cart from '../../components/cart/Cart'
import HeroSection from '../../components/heroSection/HeroSection'
import BrandingSection from '../../components/brandingSection/BrandingSection'

import PopularCategoriesSection from '../../components/popularCategoriesSection/PopularCategoriesSection'
import NewArrivalSection from '../../components/newArrivalSection/NewArrivalSection'
import SubscriptionSection from '../../components/subscriptionSection/SubscriptionSection'
import Footer from '../../components/footer/Footer'

const Home = () => {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };


  return (
    <div>
        {cartIsShown && <Cart onClick={showCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <HeroSection />
        <BrandingSection />
        <PopularCategoriesSection />
        <NewArrivalSection />
        <SubscriptionSection />
        <Footer />
    </div>
  )
}

export default Home