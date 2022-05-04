import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import "./ResetPassword.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  useAuthState,
  useSendPasswordResetEmail,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    await sendPasswordResetEmail(data.email);
    toast.success("Password Reset Email Sent");
  };

  return (
    <div className="container-fluid bg-dark reset-container">
      <div className="row">
        <div className="reset-wrapper">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="reset-form col-sm-12"
          >
            <h1 className="text-center title">Reset Password</h1>

            <div className="reset-input">
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
            {sending ? (
              <button className="btn w-100 reset-btn" disabled>
                <span
                  class="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
                &nbsp; Sending...
              </button>
            ) : (
              <button type="submit" className="btn w-100 reset-btn">
                Send Email Verification Link
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
