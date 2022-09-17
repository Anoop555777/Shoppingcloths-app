import { Fragment, useState, useEffect } from "react";
import LoadingSpinner from "../../components/UI/loadingspinner.module";
import { useSelector } from "react-redux";
import ProductCard from "../../components/product-card/product-card.component";

const Shop = () => {
  const data = useSelector((state) => state.data);
  const [loadingSpinner, setLoadingSpinner] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoadingSpinner(false);
    }, 1000);
  }, [loadingSpinner]);

  return (
    <Fragment>
      {loadingSpinner && <LoadingSpinner />}

      {!loadingSpinner &&
        data.map((el, i) => <ProductCard item={el} key={i} />)}
    </Fragment>
  );
};

export default Shop;
