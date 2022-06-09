import React from "react";
import "./CategoryCard.css";

const CategoryCard = (props) => {
  return (
      <div className="category-card-container">
    <div className="category-card">
        <img className="category-img" src={props.img} alt="This is an image" />
        <h2 className="category-card-content">
          <span className="category-title"> {props.title} </span> <br />
          <span className="category-quantity"> {props.quantity} </span>
        </h2>
    </div>
    </div>
  );
};

export default CategoryCard;
