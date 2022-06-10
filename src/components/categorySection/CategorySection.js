import React from "react";
import "./CategorySection.css";
import CategoryCard from "../categoryCard/CategoryCard";
import { popularCategoriesData } from "../../Utils/Services";
const CategorySection = () => {
  return (
    <div className="category-section">
     {popularCategoriesData.map(cardData => <CategoryCard img={cardData.img} title={cardData.title} quantity={cardData.quantity}/> )}
    </div>
  );
};

export default CategorySection;
