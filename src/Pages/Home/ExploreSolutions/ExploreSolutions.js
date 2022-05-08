import React from "react";

const ExploreSolutions = () => {
  return (
    <div className="container">
      <div className="row">
        <h2 className="text-center pt-5 mt-5 mb-5">Explore Solutions</h2>
        <div className="col-md-4">
          <div className="card h-100">
            <h6 className="alert alert-success text-center">
              Want digital tools to easily manage inventory from your desk or on
              the go?
            </h6>
            <img
              className="card-img-top"
              src="https://grainger-prod.adobecqms.net/content/dam/grainger/gus/en/public/digital-tactics/marketing-content/articl/W-DXKS373_SS-KS_CMI_IC.jpg"
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title">CMI</h5>
              <p className="card-text">
                CMI is a cloud-based solution that allows you to manage your
                inventory in a simple and intuitive way.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100">
            <h6 className="alert alert-danger text-center">
              How does a resource to help manage your tool crib sound?
            </h6>
            <img
              className="card-img-top"
              src="https://grainger-prod.adobecqms.net/content/dam/grainger/gus/en/public/digital-tactics/marketing-content/articl/W-DXKS373_SS-KS_Onsite_IC.jpg"
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title">ONSITE</h5>
              <p className="card-text">
                Dedicated resource with daily presence manages all Inventory
                Items
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100">
            <h6 className="alert alert-primary text-center">
              Need all inventory managed, no matter where you bought it?
            </h6>
            <img
              className="card-img-top"
              src="https://grainger-prod.adobecqms.net/content/dam/grainger/gus/en/public/digital-tactics/marketing-content/articl/W-DXKS373_SS-KS_Managed_IC.jpg"
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title">MANAGED</h5>
              <p className="card-text">
                Specialist provides MRO supply chain expertise and
                multi-supplier support
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreSolutions;
