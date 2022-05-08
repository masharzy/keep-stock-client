import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  useEffect(() => {
    axios
      .get(`https://keep-stock-server.herokuapp.com/item/${id}`)
      .then((response) => setItem(response.data));
  }, [id]);
  const { name, price, quantity, description, supplierName, image } = item;
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    const description = e.target.description.value;
    const supplierName = e.target.supplierName.value;
    const image = e.target.image.value;
    const itemInfo = {
      name,
      price,
      quantity,
      description,
      supplierName,
      image,
    };
    axios.put(`https://keep-stock-server.herokuapp.com/item/${id}`, itemInfo).then((response) => {
      if (response.data.modifiedCount > 0) {
        Swal.fire("Item Updated", "Your item has been updated", "success");
      } else {
        Swal.fire("Error!", "Something went wrong", "error");
      }
    });
  };
  return (
    <div className="col-md-4 mx-auto mt-3">
      <h3 className="text-center mb-3">Edit Item</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            defaultValue={name}
            name="name"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            placeholder="Price"
            defaultValue={price}
            name="price"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            placeholder="Quantity"
            defaultValue={quantity}
            name="quantity"
            required
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Description"
            defaultValue={description}
            name="description"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Supplier Name"
            defaultValue={supplierName}
            name="supplierName"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Image URL"
            defaultValue={image}
            name="image"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Update;
