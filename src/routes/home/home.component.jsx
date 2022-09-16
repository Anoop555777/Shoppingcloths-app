import { Fragment, useState, useEffect } from "react";
import Directory from "../../components/directory/directory.component";
import LoadingSpinner from "../../components/UI/loadingspinner.module";
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
  const [loadingSpinner, setLoadingSpinner] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoadingSpinner(false);
    }, 1000);
  }, [loadingSpinner]);

  return (
    <Fragment>
      {loadingSpinner && <LoadingSpinner />}
      {!loadingSpinner && <Directory categories={categories} />}
    </Fragment>
  );
};

export default Home;
