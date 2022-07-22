import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <footer className="py-5">
          <div className="row">
            <div className="col-2">
              <h5>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <Link to="/" className="nav-link p-0 text-muted">
                    Home
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/Product" className="nav-link p-0 text-muted">
                    Product
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/about" className="nav-link p-0 text-muted">
                    About
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/contact" className="nav-link p-0 text-muted">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            

            <div className="col-4 offset-1">
              <form>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of whats new and exciting from us.</p>
                <div className="d-flex w-100 gap-2">
                  <label htmlFor="newsletter3" className="visually-hidden">
                    Email address
                  </label>
                  <input
                    id="newsletter3"
                    type="text"
                    className="form-control"
                    placeholder="Email address"
                  />
                  <button className="btn btn-primary" type="button">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="d-flex justify-content-between py-4 my-4 border-top">
            <p>© 2021 Company, Inc. All rights reserved.</p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3">
                <Link className="link-dark" to="#">
                  <div className="bi" width="24" height="24">
                    <FaFacebookSquare className="iconFooter" />
                  </div>
                </Link>
              </li>
              <li className="ms-3">
                <Link className="link-dark" to="#">
                  <div className="bi" width="24" height="24">
                    <FaTwitterSquare className="iconFooter" />
                  </div>
                </Link>
              </li>
              <li className="ms-3">
                <Link className="link-dark" to="#">
                  <div className="bi" width="24" height="24">
                    <FaLinkedin className="iconFooter" />
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
