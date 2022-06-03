import React from "react";
import "./BrandingSection.css";
import BrandCard from "../brandCard/BrandCard";
import SpecialFont from "../specialFont/SpecialFont";
import ProductCard from "../productCard/ProductCard";
import DashedBackground from "../dashedBackground/DashedBackground";
import { brandCardsData, productCardData } from "../../Utils/Services";

const BrandingSection = (props) => {
  return (
    <div className="branding-section">
      <div className="brand-card-container">
       {brandCardsData.map(brandCard => <BrandCard icon={brandCard.icon} title={brandCard.title} desc={brandCard.desc} /> )}
      </div>
      <SpecialFont title="You'll ❤ This" desc="We’ve picked few pieces we’re pretty sure you’ll love." descSecLine="Check back often and enjoy." />
      <div className="brand-product-container">
        {productCardData.map(productCard => <ProductCard img={productCard.img} title={productCard.title} price={productCard.price}/>)}
      </div>
      <DashedBackground color="#81d1e5">
        <div className="brand-btn-text">Shop Recommendations</div>
      </DashedBackground>
    </div>
  );
};

export default BrandingSection;
