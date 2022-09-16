import React from "react";
import classes from "./../sign-in-form/sign.module.scss";
const SignUp = () => {
  return (
    <div className={classes.sign__form}>
      <h1 className="primary__heading margin__bottom--sm">
        I do not have an account
      </h1>
      <h3 className="secondary__heading margin__bottom--lg">
        Sign with with your email and password
      </h3>
      <form className={classes.form}>
        <div className={classes.form__group}>
          <input
            type="name"
            className={classes.form__input}
            id="name"
            required
          />
          <label htmlFor="name" className={classes.form__label}>
            Display Name
          </label>
        </div>

        <div className={classes.form__group}>
          <input
            type="email"
            className={classes.form__input}
            id="emailuser"
            required
          />
          <label htmlFor="emailuser" className={classes.form__label}>
            Email
          </label>
        </div>

        <div className={classes.form__group}>
          <input
            type="password"
            className={classes.form__input}
            id="passworduser"
            required
          />
          <label htmlFor="passworduser" className={classes.form__label}>
            Password
          </label>
        </div>

        <div className={classes.form__group}>
          <input
            type="password"
            className={classes.form__input}
            id="confirmpassword"
            required
          />
          <label htmlFor="confirmpassword" className={classes.form__label}>
            confirm Password
          </label>
        </div>

        <button className={`${classes.btn} ${classes.btn__black}`}>
          Signin
        </button>
      </form>
    </div>
  );
};

export default SignUp;
