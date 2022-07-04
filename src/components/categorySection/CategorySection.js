import React from "react";
import "./CategorySection.css";
import CategoryCard from "../categoryCard/CategoryCard";
import { popularCategoriesData } from "../../Utils/Services";
import { Link } from "react-router-dom";
const CategorySection = () => {
  return (
    <div className="category-section">
      {popularCategoriesData.map((cardData) => (
        <Link to={`/shop/${cardData.title.toLowerCase()}`}>
          <CategoryCard
            img={cardData.img}
            title={cardData.title}
            quantity={cardData.quantity}
          />
        </Link>
      ))}
    </div>
  );
};

export default CategorySection;
