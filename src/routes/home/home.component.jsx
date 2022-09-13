import Directory from "../../components/directory/directory.component";
import React from "react";
const categories = [
  {
    id: 1,
    title: "hats",
    imageUrl: "./img/hat.jpg",
  },
  {
    id: 2,
    title: "jackets",
    imageUrl: "./img/jackets.jpg",
  },
  {
    id: 3,
    title: "sneakers",
    imageUrl: "./img/shoes.jpg",
  },
  {
    id: 4,
    title: "womens",
    imageUrl: "./img/womenware.jpg",
  },
  {
    id: 5,
    title: "mens",
    imageUrl: "./img/menware.jpg",
  },
];

const Home = () => {
  return <Directory categories={categories} />;
};

export default Home;
