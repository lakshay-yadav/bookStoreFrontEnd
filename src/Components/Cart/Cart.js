import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import CartCard from "./CartCard";
import { NavLink } from "react-router-dom";
import './cart.css'

export default function Cart() {
  const userEmail = localStorage.getItem("user");
  const [cartProduct,setCartItems] = useState({})
  const [totalValue,setTotalValue] = useState(0)

  useEffect(()=>{
    fetch('http://localhost:8000/api/cart',{
      method:"POST",
      headers:{
        Accept:"application/json",
        "content-type":"application/json"
      },
      body:JSON.stringify({email:userEmail})
    }).then(res=>res.json()).then(data=>{setCartItems(data.cart);setTotalValue(data.total)})
  },[])
  
  console.log(cartProduct)

  return (
    <React.Fragment>
      <Navbar></Navbar>
      <section className="h-100" style={{ backgroundColor: "#f2f6fc" }}>
        <div className="container h-100 py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-10">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="mb-0">Shopping Cart</h3>
              </div>
              {cartProduct.length?cartProduct.map((product) => (
                <CartCard product={product} />
              )):<div className="container"><h2>No Items in Cart</h2></div>}
              {cartProduct.length?<div className="card">
                <div className="card-body">
                  <h3>Total Amount : {totalValue}</h3>
                  <NavLink to="/address">
                    <button
                      type="button"
                      data-mdb-button-init=""
                      data-mdb-ripple-init=""
                      className="btn btn-warning btn-block btn-lg"
                    >
                      Proceed to Pay
                    </button>
                  </NavLink>
                </div>
              </div>:""}
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
