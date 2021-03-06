import React from "react";
import Carousel from "../Carousel/Carousel";
import Items from "../Items/Items";
import Testimonial from "../Testimonial/Testimonial";
import OurSpecialty from "../OurSpecialty/OurSpecialty";
import { Link } from "react-router-dom";
import ExploreSolutions from "../ExploreSolutions/ExploreSolutions";
import YouAreInControl from "../YouAreInControl/YouAreInControl";

const Home = () => {
  return (
    <div>
      <Carousel />
      <ExploreSolutions/>
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
      <YouAreInControl/>
      <Testimonial />
    </div>
  );
};

export default Home;
