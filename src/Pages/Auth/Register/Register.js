import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import {
    useAuthState,
    useCreateUserWithEmailAndPassword,
    useSignInWithGoogle
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import googleImg from "../../../images/Google.svg";
import registerImg from "../../../images/register.png";
import "./Register.css";

const Register = () => {
  const [createUserWithEmailAndPassword, emailUser, emailLoading, emailError] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [user] = useAuthState(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
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
    <div className="container-fluid bg-dark register-container">
      <div className="row">
        <div className="register-wrapper">
          <div className="register-img d-none d-lg-block">
            <img className="w-100" src={registerImg} alt="" />
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="register-form col-sm-12"
          >
            <h1 className="text-center title">Register</h1>

            <div className="register-input">
              <input
                type="text"
                placeholder="Name"
                {...register("name", { required: true, maxLength: 20 })}
              />
              <div className="icon">
                <FontAwesomeIcon icon={faUser} />
              </div>
            </div>
            <h6 className="err ms-3 mt-2">
              {errors.name?.type === "required" && "Name is required"}
              {errors.name?.type === "maxLength" &&
                "Name can not be greater than 20 characters"}
            </h6>

            <div className="register-input">
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
            <div className="register-input">
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
              <button className="btn w-100 register-btn" disabled>
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
                &nbsp; Loading...
              </button>
            ) : (
              <button type="submit" className="btn w-100 register-btn">
                Register
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
            <Link
              to="/login"
              className="text-dark text-decoration-none fw-bold mt-3 d-block text-center"
            >
              Already have an Account? <span style={{color:" #2ecc71"}}>Login</span>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
