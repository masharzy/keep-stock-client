import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "./Inventory.css";

const Inventory = () => {
  const { id } = useParams();
  const [itemInfo, setItemInfo] = useState([]);
  useEffect(() => {
    axios
      .get(`https://keep-stock-server.herokuapp.com/item/${id}`)
      .then((response) => setItemInfo(response.data));
  }, [id]);
  const { image, name, price, quantity, description, supplierName, _id } =
    itemInfo;
  const handleDelivered = async () => {
    if (quantity === 0) {
      toast.error("No more quantity available");
    } else {
      await axios
        .put(`https://keep-stock-server.herokuapp.com/item/${id}`, {
          quantity: itemInfo.quantity - 1,
        })
        .then((response) => {
          if (response.data.modifiedCount > 0) {
            setItemInfo({ ...itemInfo, quantity: itemInfo.quantity - 1 });
            toast("Successfully Delivered !!", {
              type: "success",
              draggable: true,
            });
          }
        });
    }
  };
  const handleAddStockQuantity = (e) => {
    e.preventDefault();
    const value = parseInt(e.target.quantity.value);
    axios
      .put(`https://keep-stock-server.herokuapp.com/item/${id}`, {
        quantity: parseInt(quantity) + value,
      })
      .then((response) => {
        if (response.data.modifiedCount > 0) {
          setItemInfo({ ...itemInfo, quantity: parseInt(quantity) + value });
          toast("Added Successful !!", {
            type: "success",
            draggable: true,
          });
        }
      });
  };
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-4 item-image">
          <img className="w-100" src={image} alt="" />
          {quantity === 0 ? <h6 className="sold-out">Sold <br /> Out</h6> : ""}
        </div>
        <div className="col-md-8">
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th>ID</th>
                <td>{_id}</td>
              </tr>
              <tr>
                <th>Name</th>
                <td>{name}</td>
              </tr>
              <tr>
                <th>Price</th>
                <td>{price}</td>
              </tr>
              <tr>
                <th>Quantity</th>
                <td>{quantity}</td>
              </tr>
              <tr>
                <th>Description</th>
                <td>{description}</td>
              </tr>
              <tr>
                <th>SupplierName</th>
                <td>{supplierName}</td>
              </tr>
            </tbody>
          </table>
          <button
            className="btn btn-primary"
            onClick={() => handleDelivered(_id)}
          >
            Delivered
          </button>
          <Link to="/manageInventories" className="btn btn-primary ms-2">
            Manage Inventories
          </Link>
        </div>
        <h3 className="mt-4 mb-3 text-center">Restock Quantity</h3>
        <form
          onSubmit={handleAddStockQuantity}
          className="col-md-4 mx-auto mb-3"
        >
          <div className="mb-3">
            <input
              type="number"
              className="form-control"
              placeholder="Quantity"
              name="quantity"
            />
          </div>
          <input
            type="submit"
            className="btn btn-success w-100"
            value="Add Quantity"
          />
        </form>
      </div>
    </div>
  );
};

export default Inventory;
