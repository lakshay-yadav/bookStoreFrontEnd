import React, { useState } from "react";
import { NavLink,Navigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./signin.css"

export default function Signin() {

const [signinInfo,setSigninInfo] = useState({
  email:"",
  password:""
})

const [isLogin,setIsLogin] = useState(false);

const changeHandler = (e,name)=>{
  e.preventDefault()
  const data = {...signinInfo,[name]:e.target.value}
  console.log("changed")

  setSigninInfo(data)
}


const submitHandler = async (e)=>{
  e.preventDefault()
  console.log(signinInfo)
  const response = await fetch('http://localhost:8000/api/signin',{
    method:"POST",
    headers:{
      "content-type":"application/json",
      Accept:"application/json"
    },
    body:JSON.stringify(signinInfo)
  })
  console.log("Clicked")
  const data = await response.json()

  console.log(data.status)
  if(data.status==="OK"){
    setIsLogin(true);
    alert("Succesfully signed in")
    console.log(data.user)
    const user = data.user[0]
    localStorage.setItem("user",user);
    console.log("Successfully signed in")
    const u = localStorage.getItem("user")
    console.log(u)
  }

  else{
    alert("Wrong Username or password")
    console.log("Error in sign in");
  }

}

const performRedirect = ()=>{
  if(isLogin){
    localStorage.setItem("isLogin",true)
    return <Navigate replace to='/profile'/>
  }
}

  return (
    <React.Fragment>
      <Navbar/>
      <section className="vh-100" style={{ backgroundColor: "#f2f6fc" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                      alt="login form"
                      className="img-fluid"
                      style={{ borderRadius: "1rem 0 0 1rem" }}
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i
                            className="fas fa-cubes fa-2x me-3"
                            style={{ color: "#ff6219" }}
                          />
                          <span className="h1 fw-bold mb-0">Book Store</span>
                        </div>
                        <h5
                          className="fw-normal mb-3 pb-3"
                          style={{ letterSpacing: 1 }}
                        >
                          Sign into your account
                        </h5>
                        <div
                          data-mdb-input-init=""
                          className="form-outline mb-4"
                        >
                          <input
                            type="email"
                            id="email"
                            className="form-control form-control-lg"
                            onChange={(e)=>{changeHandler(e,"email")}}
                          />
                          <label
                            className="form-label"
                            htmlFor="email"
                          >
                            Email address
                          </label>
                        </div>
                        <div
                          data-mdb-input-init=""
                          className="form-outline mb-4"
                        >
                          <input
                            type="password"
                            id="password"
                            className="form-control form-control-lg"
                            onChange={(e)=>{changeHandler(e,"password")}}
                          />
                          <label
                            className="form-label"
                            htmlFor="password"
                          >
                            Password
                          </label>
                        </div>
                        <div className="pt-1 mb-4">
                          <button
                            data-mdb-button-init=""
                            data-mdb-ripple-init=""
                            className="btn btn-dark btn-lg btn-block"
                            type="button"
                            onClick={(e)=>{submitHandler(e)}}
                          >
                            Login
                          </button>
                        </div>
                        <p
                          className="mb-2 pb-lg-2"
                          style={{ color: "#393f81" }}
                        >
                          Don't have an account?{" "}
                          <NavLink to="/signup" style={{ color: "#393f81" }}>
                            Register here
                          </NavLink>
                        </p>
                        <NavLink to="/forgotpassword" className="small text-muted">
                          <span>Forgot password</span>
                        </NavLink>
                        <NavLink to="/policy" className="small text-muted">
                          Privacy policy
                        </NavLink>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {performRedirect()}
    </React.Fragment>
  );
}
