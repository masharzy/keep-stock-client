import React from "react";

const YouAreInControl = () => {
  return (
    <div className="container">
      <div className="row">
        <h2 className="text-center pt-5 mt-5 mb-5">You're In Control</h2>
        <div className="col-md-4">
          <div className="card h-100">
            <img
              className="card-img-top"
              src="https://grainger-prod.adobecqms.net/content/dam/grainger/gus/en/public/digital-tactics/gcom/onsite/W-CTKS170_Step1_Mobile.jpg"
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title">MEET WITH AN INVENTORY EXPERT</h5>
              <p className="card-text">
                Meet with an inventory expert to learn more about Our inventory.
                We have expert 5yr+ experienced inventory expert.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100">
            <img
              className="card-img-top"
              src="https://grainger-prod.adobecqms.net/content/dam/grainger/gus/en/public/digital-tactics/gcom/onsite/W-CTKS170_Step2_Mobile.jpg"
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title">WE'LL CUSTOMIZE YOUR SOLUTION</h5>
              <p className="card-text">
                Whether you need web-based, do-it-yourself tools or onsite
                support to manage your inventory for you
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100">
            <img
              className="card-img-top"
              src="https://grainger-prod.adobecqms.net/content/dam/grainger/gus/en/public/digital-tactics/gcom/onsite/W-CTKS170_Step3_Mobile.jpg"
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title">WORK WITH OUR INSTALLATION TEAM</h5>
              <p className="card-text">
                From organizing your crib to optimizing your vending machine
                setup, our inventory pros work with you to install your unique
                inventory solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouAreInControl;
