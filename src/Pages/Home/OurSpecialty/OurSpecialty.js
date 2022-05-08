import React from "react";
import './OurSpecialty.css'

const OurSpecialty = () => {
  return (
    <div className="container-fluid specialty">
      <div className="row">
        <h3 className="text-center mt-5 mb-4">Our Specialty</h3>
        <div className="col-md-4">
          <div className="card item item-1">
            <div className="card-body content">
              <h5 className="card-title">Convenient & Quick</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card item item-2">
            <div className="card-body content">
              <h5 className="card-title">Freshly Picked</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card item item-3">
            <div className="card-body content">
              <h5 className="card-title">A wide range of Products</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSpecialty;
