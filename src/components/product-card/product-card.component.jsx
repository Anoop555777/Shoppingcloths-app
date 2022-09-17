import React from "react";
import "./product-card.styles.scss";
const ProductCard = ({ item }) => {
  console.log(item);
  return (
    <div className="container">
      <h1 className="primary__heading margin__bottom--md">{item.title}</h1>
      <div className="grid grid--4-cols">
        {item.items
          .filter((_, i) => i < 4)
          .map((data) => {
            return (
              <div className="shop__content grid grid--2-cols">
                <img
                  src={data.imageUrl}
                  alt="productimage"
                  className="product__img"
                />

                <p className="shop__content-name">{data.name}</p>

                <p className="shop__content-price display-right">
                  ₹{data.price * 70}
                </p>

                <button className="shop__btn">Add To card</button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProductCard;
