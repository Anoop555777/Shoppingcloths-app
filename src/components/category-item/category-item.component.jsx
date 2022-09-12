import React from "react";
import "./category-item.styles.scss";
const Catogory = (props) => {
  return (
    <div className="container--category">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${props.data.imageUrl})`,
        }}
      />
      <div className="container--category-body">
        <h2>{props.data.title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default Catogory;
