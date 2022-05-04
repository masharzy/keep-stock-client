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

const Footer = () => {
  return (
    <div className="footer text-white container-fluid mt-3 bottom-0">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-5">
            <ul className="list-unstyled">
              <li className="mb-3">
                <h3>Keep Stock</h3>
              </li>
              <li>
                <FontAwesomeIcon icon={faLocationDot} />
                &nbsp;&nbsp;&nbsp; Level-4, 34, Awal Centre, Banani, Dhaka
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} />
                &nbsp;&nbsp; Official:{" "}
                <a href="mailto:#">web@programming-hero.com</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faPhoneAlt} />
                &nbsp;&nbsp; Helpline : 01322810873 , 01322810867 , 01322810869
              </li>
              <li>(Available : Sat - Thu, 10:00 AM to 7:00 PM)</li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul className="list-unstyled">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li className="icons">
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faYoutube} />
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <img src={payWith} alt="" />
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
