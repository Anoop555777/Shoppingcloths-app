import React from "react";
import CategoryItem from "../category-item/category-item.component";
import "./directory.styles.scss";
const Directory = ({ categories }) => {
  return (
    <div className="container">
      <div className="container--categories grid grid--3-cols">
        {categories.map((el) => (
          <CategoryItem id={el.id} data={el} />
        ))}
      </div>
    </div>
  );
};

export default Directory;
