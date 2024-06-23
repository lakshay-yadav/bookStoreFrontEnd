import React from "react";
import { BrowserRouter, Route, Routes as R } from "react-router-dom";
import Home from "./Components/Home/home.js";
import Contactus from "./Components/ContactUs/Contactus.js";
import Signin from "./Components/Signin/Signin.js";
import Signup from "./Components/Signup/Signup.js";
import Policy from "./Components/Policy/policy.js";
import Books from "./Components/Books/books.js";
import Cart from "./Components/Cart/Cart.js";
import Address from "./Components/Address/Address.js";
import Profile from "./Components/Profile/profile.js"
import BookDetail from './Components/BookDetail/bookDetail.js'
import ForgotPassword from "./Components/ForgotPassword/forgotPassword.js";
import ChangePassword from "./Components/Profile/ChangePassword.js";
import Queries from "./Components/Profile/ProfileComponents/Queries.js";
import Wishlist from "./Components/Profile/ProfileComponents/Wishlist.js";
import OrderHistory from "./Components/Profile/ProfileComponents/OrderHistory.js";


export default function Router() {
  return (
    <BrowserRouter>
      <R>
        <Route index element={<Home />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/books" element={<Books/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/address" element={<Address/>} />
        <Route path="/profile/change-password" element={<ChangePassword/>}/>
        <Route path="/profile/queries" element={<Queries/>}/>
        <Route path="/profile/wishlist" element={<Wishlist/>}/>
        <Route path="/profile/order-history" element={<OrderHistory/>}/>
        <Route path="/profile" element={<Profile/>} />
        <Route path="/bookDetail" element={<BookDetail/>} />
        <Route path="/forgotpassword" element={<ForgotPassword/>} />
        
      </R>
    </BrowserRouter>
  );
}