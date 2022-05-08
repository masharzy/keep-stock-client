// import axios from "axios";
import {
  faArrowRight,
  faEnvelope,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect } from "react";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import googleImg from "../../../images/Google.svg";
// import Swal from "sweetalert2";
import loginImg from "../../../images/login.webp";
import "./Login.css";

const Login = () => {
  const [signInWithEmailAndPassword, emailUser, emailLoading, emailError] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [user] = useAuthState(auth);
  const location = useLocation();
  const from = location.state?.from || { pathname: "/" };
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async (data) => {
    const { email, password } = data;
    await signInWithEmailAndPassword(email, password);
    await axios
      .post("http://localhost:5000/login", { email })
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
          navigate(from);
        }
      });
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
  // if (user) {
  //   navigate(from);
  // }
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
                {...register("email", { required: true })}
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
            {emailLoading ? (
              <button className="btn w-100 login-btn" disabled>
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
                &nbsp; Loading...
              </button>
            ) : (
              <button type="submit" className="btn w-100 login-btn">
                Login
              </button>
            )}
            <div className="bottom-border">
              <div className="line"></div>
              <span>or</span>
              <div className="line"></div>
            </div>
            {googleLoading ? (
              <div
                className="login-with-google"
                onClick={() => signInWithGoogle()}
                disabled
              >
                <div className="btn google-login-btn">
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  &nbsp; Loading...
                </div>
              </div>
            ) : (
              <div
                className="login-with-google"
                onClick={() => signInWithGoogle()}
              >
                <div className="btn google-login-btn">
                  <img src={googleImg} alt="" /> &nbsp; Continue with Google
                </div>
              </div>
            )}
            <div className="d-flex justify-content-between mt-3">
              <Link
                to="/register"
                className="text-dark text-decoration-none fw-bold"
              >
                Create an Account <FontAwesomeIcon icon={faArrowRight} />
              </Link>
              <Link
                to="/reset-password"
                className="text-dark text-decoration-none fw-bold"
              >
                Reset Password
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
