import { Fragment, useState, useEffect } from "react";
import "./authentication.styles.scss";
import SignIn from "../../components/sign-in-form/sign-in-form.component";
import SignUp from "../../components/sign-up-form/sign-up-form.component";
import LoadingSpinner from "../../components/UI/loadingspinner.module";

const Authentication = () => {
  const [loadingSpinner, setLoadingSpinner] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoadingSpinner(false);
    }, 1000);
  }, [loadingSpinner]);

  return (
    <Fragment>
      {loadingSpinner && <LoadingSpinner />}
      {!loadingSpinner && (
        <div className="sign grid grid--2-cols">
          <SignIn />
          <SignUp />
        </div>
      )}
    </Fragment>
  );
};

export default Authentication;
