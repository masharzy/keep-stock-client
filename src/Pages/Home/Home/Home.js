import React from "react";
import Carousel from "../Carousel/Carousel";
import Items from "../Items/Items";

const Home = () => {
  return (
    <div>
      <Carousel />
      <div className="container">
        <h1 className="text-center my-5">ITEMS</h1>
        <Items />
      </div>
    </div>
  );
};

export default Home;
