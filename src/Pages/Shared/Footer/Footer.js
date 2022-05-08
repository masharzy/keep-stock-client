import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import payWith from "../../../images/pay-with.png";
import "./Footer.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";

const Footer = () => {
  const [user] = useAuthState(auth);
  const handleLogOut = () => {
    signOut(auth);
  };
  return (
    <div className="footer text-white container-fluid mt-3 pt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-6">
            <ul className="list-unstyled">
              <li>
                <h3>Keep Stock</h3>
              </li>
              <li>
                <FontAwesomeIcon icon={faLocationDot} />
                &nbsp;&nbsp;&nbsp; Lahapara, Sonargaon, Narayanganj
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} />
                &nbsp;&nbsp; Official:{" "}
                <a href="mailto:masharzya1@gmail.com">masharzya1@gmail.com</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faPhoneAlt} />
                &nbsp;&nbsp; Helpline: <a href="tel:01639722575">01639722575</a>
              </li>
              <li>(Available : Sat - Friday, 6:00 AM to 10:00 PM)</li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h3 className="mt-3">Important Links</h3>
            <ul className="list-unstyled">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
              {user ? (
                <>
                  <li>
                    <Link to="/manageInventories">Manage Items</Link>
                  </li>
                  <li>
                    <Link to="/addItem">Add Item</Link>
                  </li>
                  <li>
                    <Link to="/myItems">My items</Link>
                  </li>
                  <li>
                    <button
                      className="nav-link btn btn-primary rounded-pill text-white px-3"
                      onClick={handleLogOut}
                    >
                      Log Out
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/register">Register</Link>
                  </li>
                </>
              )}

              <li className="icons">
                <a href="https://facebook.com/masharzy">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="https://facebook.com/masharzy">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="https://facebook.com/masharzy">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://facebook.com/masharzy">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-12 mb-5">
            <h3 className="mt-3">Newsletter</h3>
            <p>
              Enter your email below and get informed of our offers, campaigns,
              new items time to time!
            </p>
            <div className="subscribe-field">
              <input
                className="form-control rounded-pill mb-2 position-absolute"
                type="email"
                placeholder="Email"
              />
              <button className="btn btn-secondary" placeholder="Email">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 copyright-area">
        <p className="text-center">Copyright © 2022 Mahdy Abrar Sharzy</p>
      </div>
    </div>
  );
};

export default Footer;
