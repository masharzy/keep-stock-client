import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home/Home";
import Inventory from "./Pages/Inventory/Inventory";
import Header from "./Pages/Shared/Header/Header";
import Update from "./Pages/Update/Update";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import ManageInventories from "./Pages/ManageInventories/ManageInventories";
import AddItem from "./Pages/AddItem/AddItem";
import Login from "./Pages/Auth/Login/Login";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/inventory/:id" element={<Inventory />} />
        <Route path="/manageInventories" element={<ManageInventories />} />
        <Route path="/addItem" element={<AddItem />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;
