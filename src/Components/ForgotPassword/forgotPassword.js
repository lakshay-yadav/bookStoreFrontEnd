import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./forgotPassword.css";
import { NavLink, Navigate } from "react-router-dom";

export default function ForgotPassword() {
  const [resetPassword, setResetPassword] = useState({
    email: "",
    password: "",
  });

  const [status, setStatus] = useState({});

  const changeHandler = (e, name) => {
    e.preventDefault();
    const changedData = { ...resetPassword, [name]: e.target.value};
    setResetPassword(changedData);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "http://localhost:8000/api/signin/forgotpassword",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "content-type": "application/json",
        },
        body: JSON.stringify(resetPassword),
      }
    );

    const data = await response.json();
    console.log(data);
    setStatus(data);

    if (data.status === "EMAILNOTFOUND") {
      console.log("Email is not registered");
    } else if (data.status !== "OK") {
      alert("Error Occurred, Please try again");
    }
  };

  const redirect = () => {
    if (status.status === "OK") {
      console.log("Password Changed");
      alert("Password Changed successfully, Please Login to continue");
      return <Navigate replace to="/signin" />;
    }
  };

  return (
    <React.Fragment>
      <Navbar />
      <section className="p-3 p-md-4 p-xl-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 bsb-tpl-bg-platinum sidebar">
              <div className="d-flex flex-column justify-content-between h-100 p-3 p-md-4 p-xl-5">
                <h3 className="m-0">Welcome!</h3>
                <div className="mb-5">
                  <p>
                    <h2 className="h3">Password Reset</h2>
                  </p>
                  <h3 className="fs-6 fw-normal text-secondary m-0">
                    Provide the email address associated with your account to
                    recover your password.
                  </h3>
                </div>
                <div>
                <p className="mb-0">
                  Not a member yet?{" "}
                  <NavLink
                    to="/signup"
                    className="link-secondary"
                  >
                    Register now
                  </NavLink>
                </p>
                <p className="mb-0">
                  <NavLink
                    to="/signin"
                    className="link-secondary"
                  >
                    <span>Login</span>
                  </NavLink>
                  <NavLink
                    to="/policy"
                    className="link-secondary"
                  >
                    Privacy Policy
                  </NavLink>
                </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 bsb-tpl-bg-lotion">
              <div className="p-3 p-md-4 p-xl-5">
                <form>
                  <div className="row gy-3 gy-md-4 overflow-hidden">
                    <div className="col-12">
                      <label htmlFor="email" className="form-label">
                        Email <span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="name@example.com"
                        required=""
                        onChange={(e) => {
                          changeHandler(e, "email");
                        }}
                      />
                    </div>
                    {status.status==="EMAILNOTFOUND"?<div className="col-12">
                      <p style={{ color: "red" }} >
                        Email is not registered, please signup
                      </p>
                    </div>:""}
                    <div className="col-12">
                      <label htmlFor="email" className="form-label">
                        New Password <span className="text-danger">*</span>
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        id="password"
                        required=""
                        onChange={(e) => {
                          changeHandler(e, "password");
                        }}
                      />
                    </div>

                    <div className="col-12">
                      <label htmlFor="email" className="form-label">
                        Confirm Password <span className="text-danger">*</span>
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        name="confirmPassword"
                        id="confirmPassword"
                        required=""
                      />
                    </div>
                    <div className="col-12">
                      <div className="d-grid">
                        <button
                          className="btn bsb-btn-xl btn-primary"
                          type="submit"
                          onClick={submitHandler}
                        >
                          Reset Password
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {redirect()}
    </React.Fragment>
  );
}
