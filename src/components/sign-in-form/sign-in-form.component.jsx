import React from "react";
import classes from "./sign.module.scss";
const SignIn = () => {
  return (
    <div className={classes.sign__form}>
      <h1 className="primary__heading margin__bottom--sm">
        label work need to be done I already have an account
      </h1>
      <h3 className="secondary__heading margin__bottom--lg">
        Sign in with your email and password
      </h3>
      <form className={classes.form}>
        <div className={classes.form__group}>
          <input
            type="email"
            className={classes.form__input}
            placeholder=""
            id="email"
            required
          />
          <label htmlFor="email" className={classes.form__label}>
            Email
          </label>
        </div>

        <div className={classes.form__group}>
          <input
            type="password"
            className={classes.form__input}
            id="password"
            required
          />
          <label htmlFor="password" className={classes.form__label}>
            Password
          </label>
        </div>

        <button className={`${classes.btn} ${classes.btn__black}`}>
          Signin
        </button>
        <button className={`${classes.btn} ${classes.btn__blue}`}>
          sign in with Google
        </button>
      </form>
    </div>
  );
};

export default SignIn;
