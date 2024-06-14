import React from "react";
import { BrowserRouter, Route, Routes as R } from "react-router-dom";
import Home from "./Components/Home/home.js";
import Contactus from "./Components/ContactUs/Contactus.js";
import Signin from "./Components/Signin/Signin.js";
import Signup from "./Components/Signup/Signup.js";
import Policy from "./Components/Policy/policy.js";

export default function Router() {
  return (
    <BrowserRouter>
      <R>
        <Route index element={<Home />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/policy" element={<Policy />} />
      </R>
    </BrowserRouter>
  );
}