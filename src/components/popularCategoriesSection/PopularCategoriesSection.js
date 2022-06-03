import React from "react";
import "./PopularCategoriesSection.css";
import SpecialFont from "../specialFont/SpecialFont";
import CategoryCard from "../categoryCard/CategoryCard";
import { popularCategoriesData } from "../../Utils/Services";

const PopularCategoriesSection = (props) => {
  return (
    <div className="popular-categories-section">
      <SpecialFont
        title="Popular Categories"
        desc="We’ve picked few pieces we’re pretty sure you’ll love."
        descSecLine="Check back often and enjoy."
      />
      <div className="category-cards-container">
        {popularCategoriesData.map(cardData => <CategoryCard img={cardData.img} title={cardData.title} quantity={cardData.quantity}/> )}
      </div>
    </div>
  );
};

export default PopularCategoriesSection;
