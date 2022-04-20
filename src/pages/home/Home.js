import React from 'react'
import './Home.css'
import Header from '../../components/header/Header'
import HeroSection from '../../components/hero-section/HeroSection'
import BrandingSection from '../../components/branding-section/BrandingSection'
import CommerceSection from '../../components/commerce-section/CommerceSection'
import PopularCategoriesSection from '../../components/popular-categories-section/PopularCategoriesSection'
import NewArrivalSection from '../../components/new-arrival-section/NewArrivalSection'
import SubscriptionSection from '../../components/subscription-section/SubscriptionSection'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <div>
        <Header />
        <HeroSection />
        <BrandingSection />
        <CommerceSection />
        <PopularCategoriesSection />
        <NewArrivalSection />
        <SubscriptionSection />
        <Footer />
    </div>
  )
}

export default Home