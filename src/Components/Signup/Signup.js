import React, { useState } from "react";
import "./signup.css";
import { NavLink } from "react-router-dom";
import Navbar from "../Navbar/Navbar.js";
import {API} from '../../backend.js';

export default function Signup() {

  const [passwordEqual,setPasswordEqual] = useState(false)

  const [userData,setUserData] = useState({
    name:"",
    email:"",
    password:"",
    confirmPassword:""
  });

  const submitHandler = async (e)=>{
    e.preventDefault()
    console.log("Sign up pressed")
    console.log(userData)
    const response = await fetch(`${API}/signup/`,{
      method:"POST",
      headers:{
        Accept: "application/json",
        "content-type": "application/json"
      },
      body: JSON.stringify(userData)
    });

    // const data = await response.json()
    console.log(response)
  }

  const changeHandler = (e,name)=>{
    e.preventDefault()

    const data = {...userData,[name]:e.target.value}
    setUserData(data);

    console.log(userData)
    checkPasswordEqual();
  }

  const checkPasswordEqual = ()=>{
    if(userData.password === userData.confirmPassword ){
      console.log("Inside if")
      if(userData.confirmPassword!==""){
        console.log("Inside nested if ");
      setPasswordEqual(true)
      }
      else{
        setPasswordEqual(false)
      }
    }
    else{
      setPasswordEqual(false)
    }
  }

  return (
    <React.Fragment>
      <Navbar />
      <section
        className="vh-100 bg-image"
        style={{
          backgroundImage:
            'url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp")',
        }}
      >
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{ borderRadius: 15 }}>
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">
                      Create an account
                    </h2>
                    <form >
                      <div data-mdb-input-init="" className="form-outline mb-4">
                        <input
                          onChange={(e)=>{ changeHandler(e,"name");}}
                          type="text"
                          id="form3Example1cg"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="form3Example1cg">
                          Your Name
                        </label>
                      </div>
                      <div data-mdb-input-init="" className="form-outline mb-4">
                        <input
                          onChange={(e)=>{ changeHandler(e,"email");}}
                          type="email"
                          id="form3Example3cg"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="form3Example3cg">
                          Your Email
                        </label>
                      </div>
                      <div data-mdb-input-init="" className="form-outline mb-4">
                        <input
                          onChange={(e)=>{ changeHandler(e,"password");}}
                          type="password"
                          id="form3Example4cg"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="form3Example4cg">
                          Password
                        </label>
                      </div>
                      <div data-mdb-input-init="" className="form-outline mb-4">
                        <input
                        onChange={(e)=>{ changeHandler(e,"confirmPassword");}}
                          type="password"
                          id="form3Example4cdg"
                          className="form-control form-control-lg"
                        />
                        <label
                          className="form-label"
                          htmlFor="form3Example4cdg"
                        >
                          Repeat your password
                        </label>
                      </div>
                      <div className="d-flex justify-content-center">
                        <button
                          disabled = {!passwordEqual}
                          onClick={(e)=>{submitHandler(e)}}
                          type="button"
                          data-mdb-button-init=""
                          data-mdb-ripple-init=""
                          className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                        >
                          Register
                        </button>
                      </div>
                      <p className="text-center text-muted mt-5 mb-0">
                        Have already an account?{" "}
                        <NavLink to="/signin" className="fw-bold text-body">
                          <u>Login here</u>
                        </NavLink>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
