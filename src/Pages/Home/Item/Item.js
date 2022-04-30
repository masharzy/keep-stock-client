import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ item }) => {
  const { image, name, price, quantity, description, supplierName, _id } = item;
  return (
    <div className="col-md-4">
      <div className="card h-100 text-center border-0 py-3">
        <img className="w-75 mx-auto" src={image} alt="" />
        <div className="card-body">
          <h4 className="card-title" style={{ textTransform: "capitalize" }}>
            {name}
          </h4>
          <div className="column d-flex justify-content-between my-3 px-3">
            <h6 className="card-text">৳{price}</h6>
            <h6 className="card-text">{quantity} Pieces</h6>
          </div>
          <p className="card-text">{description}</p>
          <h6 className="card-text">Supplier: {supplierName}</h6>
        </div>
        <div className="card-footer bg-transparent border-0">
          <Link to={`/inventory/${_id}`} className="btn btn-primary w-100">
            Update
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
