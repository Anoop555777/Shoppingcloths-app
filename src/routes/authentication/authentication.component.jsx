import React from "react";
import "./authentication.styles.scss";
import SignIn from "../../components/sign-in-form/sign-in-form.component";
import SignUp from "../../components/sign-up-form/sign-up-form.component";

const Authentication = () => {
  return (
    <div className="sign grid grid--2-cols">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Authentication;
