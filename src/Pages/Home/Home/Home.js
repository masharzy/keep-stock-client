import React from "react";
import Carousel from "../Carousel/Carousel";
import Items from "../Items/Items";
import Testimonial from "../Testimonial/Testimonial";
import OurSpecialty from "../OurSpecialty/OurSpecialty";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Carousel />
      <div className="container">
        <h1 className="text-center my-5">ITEMS</h1>
        <Items />
          <div className="d-flex justify-content-center">
            <Link to="/manageInventories" className="btn btn-success mt-3">
              Manage Inventories
            </Link>
        </div>
      </div>
      <OurSpecialty />
      <Testimonial />
    </div>
  );
};

export default Home;
