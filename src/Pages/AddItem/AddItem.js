import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import auth from "../../firebase.init";
import "./AddItem.css";
const AddItem = () => {
  const [user, loading] = useAuthState(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async (data, e) => {
    await axios
      .post("http://localhost:5000/items", {
        name: data.name,
        price: data.price,
        quantity: data.quantity,
        description: data.description,
        supplierName: data.supplierName,
        // sold: data.sold,
        image: data.image,
        email: user.email
      })
      .then((response) => {
        if (response.data.insertedId) {
          Swal.fire(
            "Item Added",
            "Your requested item has been added",
            "success"
          );
          e.target.reset();
        } else {
          Swal.fire("Error!", "Something went wrong", "error");
        }
      });
  };
  return (
    <div className="container">
      <h1 className="text-center my-3">Add Item</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="col-lg-5 col-md-6 mx-auto mt-3"
      >
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            {...register("name", { required: true })}
          />
          <h6 className="err">
            {errors.name?.type === "required" && "Name is required"}
          </h6>
        </div>
        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            placeholder="Price"
            {...register("price", { required: true })}
          />
          <h6 className="err">
            {errors.price?.type === "required" && "Price is required"}
          </h6>
        </div>
        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            placeholder="Quantity"
            {...register("quantity", { required: true })}
          />
          <h6 className="err">
            {errors.quantity?.type === "required" && "Quantity is required"}
          </h6>
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Description"
            {...register("description", { required: true })}
          />
          <h6 className="err">
            {errors.description?.type === "required" &&
              "Description is required"}
          </h6>
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Supplier Name"
            {...register("supplierName", { required: true })}
          />
          <h6 className="err">
            {errors.supplierName?.type === "required" &&
              "Supplier Name is required"}
          </h6>
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Image URL"
            {...register("image", { required: true })}
          />
          <h6 className="err">
            {errors.image?.type === "required" && "Image URL is required"}
          </h6>
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddItem;
