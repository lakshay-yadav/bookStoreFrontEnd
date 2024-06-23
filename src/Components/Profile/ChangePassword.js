import React, { useState } from "react";
import Nav from "./nav";
import Navbar from "../Navbar/Navbar";
import "./profile.css";
import SideProfile from "./ProfileComponents/sideProfile";

export default function ChangePassword() {
  const userEmail = localStorage.getItem("user");

  const [details, setDetails] = useState({
    password: "",
    newPassword: "",
    confirmPassword: "",
    email: userEmail,
  });

  const changeHandler = (e, name) => {
    e.preventDefault();
    setDetails({ ...details, [name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(details);
    const response = await fetch(
      "http://localhost:8000/api/profile/password_change",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "content-type": "application/json",
        },
        body: JSON.stringify(details),
      }
    );

    const data = await response.json();
    console.log(data);
  };

  return (
    <React.Fragment>
      <Navbar />
      <div className="main">
        <div className="container-xl px-4">
          <Nav />
          <hr className="mt-0 mb-4" />
          <div className="row">
            <SideProfile/>
            <div className="col-xl-8">
              <div className="card mb-4">
                <div className="card-header">Change Password</div>
                <div className="card-body">
                  <form>
                    <div className="row gx-3 mb-3">
                      <div className="col-md-7">
                        <label className="small mb-1" htmlFor="password">
                          Password
                        </label>
                        <input
                          onChange={(e) => {
                            changeHandler(e, "password");
                          }}
                          className="form-control"
                          id="password"
                          type="password"
                          placeholder="Enter your Password"
                        />
                      </div>
                      <div className="col-md-7">
                        <label className="small mb-1" htmlFor="newPassword">
                          New Password
                        </label>
                        <input
                          onChange={(e) => {
                            changeHandler(e, "newPassword");
                          }}
                          className="form-control"
                          id="newPassword"
                          type="password"
                          placeholder="Enter new Password"
                        />
                      </div>
                    </div>
                    <div className="row gx-3 mb-3">
                      <div className="col-md-7">
                        <label className="small mb-1" htmlFor="confirmPassword">
                          Confirm Password
                        </label>
                        <input
                          onChange={(e) => {
                            changeHandler(e, "confirmPassword");
                          }}
                          className="form-control"
                          id="confirmPassword"
                          type="password"
                          placeholder="Confirm Password"
                        />
                      </div>
                    </div>
                    <button
                      className="btn btn-primary"
                      type="button"
                      onClick={submitHandler}
                    >
                      Change Password
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
