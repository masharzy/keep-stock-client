import React from "react";
import { Link } from "react-router-dom";

const ManageInventory = ({ item, handleDelete }) => {
  return (
    <div className="col-md-3" key={item._id}>
      <div className="card h-100">
        <img src={item.image} alt="" />
        <div className="card-body">
          <h4 className="card-title" style={{ textTransform: "capitalize" }}>
            {item.name}
          </h4>
          <div className="column d-flex justify-content-between my-3">
            <h6 className="card-text">৳{item.price}</h6>
            <h6 className="card-text">{item.quantity} Pieces</h6>
          </div>
          <p className="card-text">{item.description}</p>
          <h6 className="card-text">Supplier: {item.supplierName}</h6>
        </div>
        <div className="card-footer bg-transparent border-0 d-flex">
          <button
            className="btn btn-danger w-50 me-1"
            onClick={() => handleDelete(item._id)}
          >
            Delete
          </button>
          <Link to={`/update/${item._id}`} className="btn btn-success w-50">
            Update
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ManageInventory;
