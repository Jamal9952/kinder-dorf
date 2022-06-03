import React from "react";
import "./BrandingSection.css";
import BrandCard from "../brandCard/BrandCard";
import SpecialFont from "../specialFont/SpecialFont";
import ProductCard from "../productCard/ProductCard";
import DashedBackground from "../dashedBackground/DashedBackground";
import { brandCardsData } from "../../Utils/Services";

const BrandingSection = (props) => {
  return (
    <div className="branding-section">
      <div className="brand-card-container">
       {brandCardsData.map(cardData => <BrandCard icon={cardData.icon} title={cardData.title} desc={cardData.desc} /> )}
      </div>
      <SpecialFont title="You'll ❤ This" desc="We’ve picked few pieces we’re pretty sure you’ll love." descSecLine="Check back often and enjoy." />
      <div className="brand-product-container">
        <ProductCard />        
        <ProductCard />    
        <ProductCard />    
        <ProductCard />    
        <ProductCard />  
      </div>
      <DashedBackground>
        Shop Products!
      </DashedBackground>
    </div>
  );
};

export default BrandingSection;
