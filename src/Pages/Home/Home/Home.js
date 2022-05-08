import React from "react";
import Carousel from "../Carousel/Carousel";
import Items from "../Items/Items";
import Testimonial from "../Testimonial/Testimonial";
import OurSpecialty from "../OurSpecialty/OurSpecialty";

const Home = () => {
  return (
    <div>
      <Carousel />
      <div className="container">
        <h1 className="text-center my-5">ITEMS</h1>
        <Items />
      </div>
      <OurSpecialty/>
      <Testimonial/>
    </div>
  );
};

export default Home;
