import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../../Shared/Loading/Loading";
import Item from "../Item/Item";

const Items = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios.get("https://keep-stock-server.herokuapp.com/items").then((response) =>
      setItems(response.data)
    );
  }, []);
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {items.length === 0 ? <Loading /> : ""}
      {items.slice(0, 6).map((item) => (
        <Item key={item._id} item={item}></Item>
      ))}
    </div>
  );
};

export default Items;
