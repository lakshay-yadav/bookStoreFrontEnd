import React from "react";
import Navbar from "../Navbar/Navbar";
import {cartProduct}  from '../../Assets/cartProduct.js'
import CartCard from "./CartCard";

export default function Cart() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <section className="h-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100 py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-10">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
              </div>
              {cartProduct.map((product)=><CartCard product={product}/>)}
              <div className="card">
                <div className="card-body">
                  <button
                    type="button"
                    data-mdb-button-init=""
                    data-mdb-ripple-init=""
                    className="btn btn-warning btn-block btn-lg"
                  >
                    Proceed to Pay
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
