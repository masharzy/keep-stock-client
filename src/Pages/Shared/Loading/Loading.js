import React from "react";
import loadingImg from "../../../images/loader.gif";
import './Loading.css';

const Loading = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center loading">
      <img className="mx-auto" src={loadingImg} alt="" />
    </div>
  );
};

export default Loading;
