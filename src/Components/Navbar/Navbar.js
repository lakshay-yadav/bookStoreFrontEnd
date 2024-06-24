import React, { useEffect, useState } from "react";
import { NavLink, Navigate } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  const [isLogin, setIsLogin] = useState(localStorage.getItem("isLogin"));
  console.log(isLogin);

  const logOutHandler = (e) => {
    e.preventDefault();
    alert("Logged Out");
    setIsLogin(false);
    console.log("Log out clicked");
    localStorage.removeItem("user");
    localStorage.removeItem("isLogin");

    return <Navigate replace to="/" />;
  };

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark  ">
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
            {/* <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form> */}
          </div>
          {isLogin ? (
            <div className="my-2 my-lg-0">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/cart">
                    <button type="button" class="btn btn-success">
                      <i className="me-1 fa fa-shopping-basket" />
                      Cart
                    </button>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/profile">
                    <button type="button" class="btn btn-success">
                      <i class="fa fa-user" aria-hidden="true"></i> Profile
                    </button>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/" onClick={logOutHandler}>
                    <button type="button" class="btn btn-success">
                      Log Out
                    </button>
                  </NavLink>
                </li>
              </ul>
            </div>
          ) : (
            <div className="my-2 my-lg-0">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/signup">
                    <button type="button" class="btn btn-success">
                      Sign up
                    </button>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/signin">
                    <button type="button" class="btn btn-success">
                      Sign in
                    </button>
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </React.Fragment>
  );
}
