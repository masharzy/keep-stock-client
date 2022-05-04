import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="container notFound my-5">
      <div className="row text-center">
        <div className="heading">
          <h1>404</h1>
        </div>
        <div className="contents">
          <h3>Look like you're lost</h3>
          <p>The page you are looking for not avaible!</p>
          <Link to="/" className="btn back-to-home-btn">
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
