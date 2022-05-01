// import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
// import Swal from "sweetalert2";
import loginImg from "../../../images/login.webp";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async (data) => {};
  return (
    <div className="container-fluid bg-dark py-3 login-container">
      <div className="login-wrapper">
        <div className="login-img d-none d-lg-block">
          <img className="w-100" src={loginImg} alt="" />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="login-form col-sm-12">
          <h1 className="text-center title">Login</h1>

          <div className="login-input">
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: true, maxLength: 20 })}
            />
            <div className="icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
          </div>
          <h6 className="err ms-3 mt-2">
            {errors.email?.type === "required" && "Email is required"}
          </h6>
          <div className="login-input">
            <input
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
            ></input>
            <div className="icon">
              <FontAwesomeIcon icon={faLock} />
            </div>
          </div>
          <h6 className="err ms-3 mt-2">
            {errors.password?.type === "required" && "Password is required"}
          </h6>
          <button type="submit" className="btn w-100 login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
