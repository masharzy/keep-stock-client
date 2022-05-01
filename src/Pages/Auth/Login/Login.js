// import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
// import Swal from "sweetalert2";
import loginImg from "../../../images/login.webp";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import googleImg from "../../../images/Google.svg";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [signInWithEmailAndPassword, emailUser, loading, emailError] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [user] = useAuthState(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async (data) => {
    await signInWithEmailAndPassword(data.email, data.password);
  };

  useEffect(() => {
    if (emailError || googleError) {
      const newErrorMessage =
        googleError?.message
          .split("Firebase: Error (auth/")
          .join("")
          .split(").")
          .join("")
          .split("-")
          .join(" ") ||
        emailError?.message
          .split("Firebase: Error (auth/")
          .join("")
          .split(").")
          .join("")
          .split("-")
          .join(" ");
      toast.error(newErrorMessage);
    }
  }, [emailError, googleError]);
  const location = useLocation();
  const from = location.state?.from || { pathname: "/" };
  const navigate = useNavigate();
  if (user) {
    navigate(from);
  }
  return (
    <div className="container-fluid bg-dark login-container">
      <div className="row">
        <div className="login-wrapper">
          <div className="login-img d-none d-lg-block">
            <img className="w-100" src={loginImg} alt="" />
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="login-form col-sm-12"
          >
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
                {...register("password", { required: true, pattern: /.{6,}/ })}
              ></input>
              <div className="icon">
                <FontAwesomeIcon icon={faLock} />
              </div>
            </div>
            <h6 className="err ms-3 mt-2">
              {errors.password?.type === "required" && "Password is required"}
              {errors.password?.type === "pattern" &&
                "Password must be greater than 6 characters"}
            </h6>
            <button type="submit" className="btn w-100 login-btn">
              Login
            </button>
            <div className="bottom-border">
              <div className="line"></div>
              <span>or</span>
              <div className="line"></div>
            </div>
            <div
              className="login-with-google"
              onClick={() => signInWithGoogle()}
            >
              <div className="btn google-login-btn">
                <img src={googleImg} alt="" /> &nbsp; Continue with Google
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
