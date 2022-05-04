import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import ReactLoading from "react-loading";
import MyItem from "../MyItem/MyItem";
import Loading from "../Shared/Loading/Loading";

const MyItems = () => {
  const [myItems, setMyItems] = useState([]);
  const [user] = useAuthState(auth);
  const { email } = user;
  useEffect(() => {
    axios
      .get(`http://localhost:5000/items/${email}`)
      .then((response) => setMyItems(response.data));
  }, [email]);
  return (
    <div className="container my-3">
      <h1 className="text-center my-3">My Items</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {myItems.length === 0 ? (
          <Loading/>
        ) : (
          ""
        )}
        {myItems.map((item) => (
          <MyItem key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MyItems;
