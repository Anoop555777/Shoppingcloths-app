import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as Logo } from "../../assert/logo.svg";
import "./navigation.styles.scss";
const Navigation = () => {
  return (
    <Fragment>
      <header className="header">
        <Link to="/" className="header__logo--link">
          <Logo className="header__logo" />
        </Link>
        <nav className="main__nav">
          <ul className="main__nav--lists">
            <li>
              <Link className="main__nav--link" to="/shop">
                Shop
              </Link>
            </li>
            <li>
              <Link className="main__nav--link" to="/contact">
                Contact
              </Link>
            </li>
            <li>
              <Link className="main__nav--link" to="/sign-in">
                SignIn
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
