import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "./ManageInventories.css";

const ManageInventories = () => {
  const [allItems, setAllItems] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/items`)
      .then((response) => setAllItems(response.data));
  }, []);
  const handleDelete = (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios
          .delete(`http://localhost:5000/item/${id}`)
          .then((response) => {
            if (response.data.deletedCount > 0) {
              setAllItems(allItems.filter((item) => item._id !== id));
              Swal.fire("Deleted!", "Item has been deleted.", "success");
            } else {
              Swal.fire("Something went wrong!", "", "error");
            }
          });
      }
    });
  };
  return (
    <div className="container-fluid manageInventories mb-3">
      <div className="text-center my-5">
        <h3>Manage Inventories</h3>
        <Link className="btn btn-primary" to="/addItem">
          Add Item
        </Link>
      </div>
      <div className="row g-4">
        {allItems.map((item) => (
          <div className="col-md-3" key={item._id}>
            <div className="card h-100">
              <img src={item.image} alt="" />
              <div className="card-body">
                <h4
                  className="card-title"
                  style={{ textTransform: "capitalize" }}
                >
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
                <Link
                  to={`/update/${item._id}`}
                  className="btn btn-success w-50"
                >
                  Update
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageInventories;
