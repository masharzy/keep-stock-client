import React from "react";
import { Link } from "react-router-dom";

const ManageInventory = ({ item, handleDelete }) => {
  const { image, name, price, quantity, description, supplierName, _id } = item;
  return (
    <div className="col-md-6 col-lg-3 col-12">
      <div className="card h-100">
        <img src={image} alt="" />
        <div className="card-body">
          <h4 className="card-title" style={{ textTransform: "capitalize" }}>
            {name}
          </h4>
          <div className="column d-flex justify-content-between my-3">
            <h6 className="card-text">৳{price}</h6>
            <h6 className="card-text">{quantity} Pieces</h6>
          </div>
          <p className="card-text">{description}</p>
          <h6 className="card-text">Supplier: {supplierName}</h6>
        </div>
        <div className="card-footer text-center bg-transparent border-0">
          <Link
            to={`/inventory/${_id}`}
            className="btn btn-primary me-1 text-center mb-2"
          >
            Update Stock
          </Link>
          <button
            className="btn btn-danger me-1 text-center mb-2"
            onClick={() => handleDelete(_id)}
          >
            Delete
          </button>
          <Link to={`/update/${_id}`} className="btn btn-success text-center mb-2">
            Edit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ManageInventory;
