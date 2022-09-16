import React from "react";
import classes from "./loadingspinner.module.scss";
const LoadingSpinner = () => {
  return (
    <div className={classes.model}>
      <div class={classes.spinner}>
        <svg>
          <use href="/img/icons.svg#icon-loader"></use>
        </svg>
      </div>
    </div>
  );
};

export default LoadingSpinner;
