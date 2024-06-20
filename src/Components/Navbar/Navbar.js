import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import './navbar.css'

export default function Navbar() {
  const [isLogin,setIsLogin] = useState(localStorage.getItem("isLogin"))
  console.log(isLogin)

  const logOutHandler = (e)=>{
    e.preventDefault()
    alert("Logged Out")
    setIsLogin(false)
    console.log("Log out clicked")
    localStorage.removeItem("user");
    localStorage.removeItem("isLogin");
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          Book Store
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contactus">
                Contact us
              </NavLink>
            </li>
          </ul>
        </div>
        {isLogin?<div className="my-2 my-lg-0">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/profile">
              <button type="button" class="btn btn-success">Profile</button>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/" onClick={logOutHandler}>
              <button type="button" class="btn btn-success">Log Out</button>
              </NavLink>
            </li>
          </ul>
        </div>:<div className="my-2 my-lg-0">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/signup">
              <button type="button" class="btn btn-success">Sign up</button>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/signin">
              <button type="button" class="btn btn-success">Sign in</button>
              </NavLink>
            </li>
          </ul>
        </div>}
      </div>
    </nav>
  );
}
