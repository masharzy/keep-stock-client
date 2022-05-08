import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import auth from "../../firebase.init";
import MyItem from "../MyItem/MyItem";
import emptyStock from "../../images/empty-stock.png"

const MyItems = () => {
  const [myItems, setMyItems] = useState([]);
  const [user] = useAuthState(auth);
  const { email } = user;
  const navigate = useNavigate();

  useEffect(() => {
    const getMyItems = async () => {
      try {
        const { data } = await axios.get(
          `https://keep-stock-server.herokuapp.com/items/${email}`,
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setMyItems(data);
      } catch (err) {
        console.log(err);
        if (err.response.status === 401 || err.response.status === 403) {
          navigate("/login");
          signOut(auth);
        }
      }
    };
    getMyItems();
  }, [email, navigate]);

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
              setMyItems(myItems.filter((item) => item._id !== id));
              Swal.fire("Deleted!", "Item has been deleted.", "success");
            } else {
              Swal.fire("Something went wrong!", "", "error");
            }
          });
      }
    });
  };

  return (
    <div className="container my-5">
      <h1 className="text-center my-3">My Items</h1>
      {myItems.length === 0 ? (
        <div className="row my-5 py-5">
          <img className="w-25 mx-auto" src={emptyStock} alt="" />
          <h4 className="mt-4 text-center">
            You don't have any items yet{" "}
            <Link to="/addItem" className="btn">
              Add Item
            </Link>
            First
          </h4>
        </div>
      ) : (
        ""
      )}
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {myItems.map((item) => (
          <MyItem handleDelete={handleDelete} key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MyItems;
