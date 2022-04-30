import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const [itemInfo, setItemInfo] = useState({
    name: "",
    price: 0,
    quantity: 0,
    description: "",
    supplierName: "",
    // sold: "",
    image: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .put(`http://localhost:5000/item/${id}`, {
        name: itemInfo.name,
        price: itemInfo.price,
        quantity: itemInfo.quantity,
        description: itemInfo.description,
        supplierName: itemInfo.supplierName,
        // sold: itemInfo.sold,
        image: itemInfo.image,
      })
      .then((response) => console.log(response));
  };
  return (
    <div className="col-md-4 mx-auto mt-3">
      <h3 className="text-center mb-3">Update Item</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            onChange={(e) => setItemInfo({ ...itemInfo, name: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            placeholder="Price"
            onChange={(e) =>
              setItemInfo({ ...itemInfo, price: e.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            placeholder="Quantity"
            onChange={(e) =>
              setItemInfo({ ...itemInfo, quantity: e.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Description"
            onChange={(e) =>
              setItemInfo({ ...itemInfo, description: e.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Supplier Name"
            onChange={(e) =>
              setItemInfo({ ...itemInfo, supplierName: e.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Image URL"
            onChange={(e) =>
              setItemInfo({ ...itemInfo, image: e.target.value })
            }
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
