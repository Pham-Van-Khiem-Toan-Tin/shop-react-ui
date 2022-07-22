import React from "react";
import { Link } from "react-router-dom";
import CartBtn from "../Buttons/CartBtn";
import Login from "../Buttons/Login";
import Signup from "../Buttons/Signup";
const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid py-2">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="product">
                  PRODUCT
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="about">
                  ABOUT
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="contact">
                  CONTACT
                </Link>
              </li>
            </ul>
          <Link className="navbar-brand mx-auto fw-bold" to="/">APPLE MART</Link>
          <Login />
          <Signup />
          <CartBtn />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
