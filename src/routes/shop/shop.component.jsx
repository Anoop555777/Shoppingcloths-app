import { Fragment, useState, useEffect } from "react";
import LoadingSpinner from "../../components/UI/loadingspinner.module";
const Shop = () => {
  const [loadingSpinner, setLoadingSpinner] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoadingSpinner(false);
    }, 1000);
  }, [loadingSpinner]);

  return (
    <Fragment>
      {loadingSpinner && <LoadingSpinner />}
      {!loadingSpinner && <div>hii</div>}
    </Fragment>
  );
};

export default Shop;
