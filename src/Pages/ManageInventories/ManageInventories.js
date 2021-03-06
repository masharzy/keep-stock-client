import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import ManageInventory from "../ManageInventory/ManageInventory";
import Loading from "../Shared/Loading/Loading";
import "./ManageInventories.css";

const ManageInventories = () => {
  const [allItems, setAllItems] = useState([]);
  useEffect(() => {
    axios
      .get(`https://keep-stock-server.herokuapp.com/items`)
      .then((response) => setAllItems(response.data));
  }, []);
  const handleDelete = (id) => {
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
          .delete(`https://keep-stock-server.herokuapp.com/item/${id}`)
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
        {allItems.length === 0 ? (
          <Loading/>
        ) : (
          ""
        )}
        {allItems.map((item) => (
          <ManageInventory
            handleDelete={handleDelete}
            key={item._id}
            item={item}
          />
        ))}
      </div>
    </div>
  );
};

export default ManageInventories;
