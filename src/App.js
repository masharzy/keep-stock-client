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
import Register from "./Pages/Auth/Register/Register";
import RequireAuth from "./Pages/Auth/RequireAuth/RequireAuth";
import MyItems from "./Pages/MyItems/MyItems";
import Footer from "./Pages/Shared/Footer/Footer";
import ResetPassword from "./Pages/Auth/ResetPassword/ResetPassword";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import Loading from "./Pages/Shared/Loading/Loading";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/update/:id"
          element={
            <RequireAuth>
              <Update />
            </RequireAuth>
          }
        />
        <Route
          path="/inventory/:id"
          element={
            <RequireAuth>
              <Inventory />
            </RequireAuth>
          }
        />
        <Route
          path="/manageInventories"
          element={
            <RequireAuth>
              <ManageInventories />
            </RequireAuth>
          }
        />
        <Route
          path="/addItem"
          element={
            <RequireAuth>
              <AddItem />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route
          path="/myItems"
          element={
            <RequireAuth>
              <MyItems />
            </RequireAuth>
          }
        />
        <Route path="*" element={<NotFound />} />
        <Route path="/loading" element={<Loading />} />
      </Routes>
      <Footer />
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
