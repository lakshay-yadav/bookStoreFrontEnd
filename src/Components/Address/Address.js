import React from "react";
import Navbar from "../Navbar/Navbar";

export default function Address() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <div className="container">
        <div className="row">
          <div className="col-md-8 mb-4">
            <div className="card mb-4">
              <div className="card-header py-3">
                <h5 className="mb-0">Biling details</h5>
              </div>
              <div className="card-body">
                <form>
                  <div className="row mb-4">
                    <div className="col">
                      <div data-mdb-input-init="" className="form-outline">
                        <input
                          type="text"
                          id="form7Example1"
                          className="form-control"
                          required
                        />
                        <label className="form-label" htmlFor="form7Example1">
                          First name
                        </label>
                      </div>
                    </div>
                    <div className="col">
                      <div data-mdb-input-init="" className="form-outline">
                        <input
                          type="text"
                          id="form7Example2"
                          className="form-control"
                        />
                        <label className="form-label" htmlFor="form7Example2">
                          Last name
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-4">
                    <div className="col">
                      <div data-mdb-input-init="" className="form-outline">
                        <input
                          type="number"
                          className="form-control"
                        />
                        <label className="form-label">
                          Phone Number
                        </label>
                      </div>
                    </div>
                    <div className="col">
                      <div data-mdb-input-init="" className="form-outline">
                        <input
                          type="email"
                          id="email"
                          className="form-control"
                        />
                        <label className="form-label" htmlFor="email">
                         Email
                        </label>
                      </div>
                    </div>
                  </div>
                  <div data-mdb-input-init="" className="form-outline mb-4">
                    <input
                      type="text"
                      id="adressline1"
                      className="form-control"
                    />
                    <label className="form-label" htmlFor="adressline1">
                      Address Line 1
                    </label>
                  </div>
                  <div className="row mb-4">
                    <div className="col">
                      <div data-mdb-input-init="" className="form-outline">
                        <input
                          type="text"
                          id="addressline2"
                          className="form-control"
                        />
                        <label className="form-label" htmlFor="addressline2">
                          Address Line 2
                        </label>
                      </div>
                    </div>
                    <div className="col">
                      <div data-mdb-input-init="" className="form-outline">
                        <input
                          type="number"
                          id="pincode"
                          className="form-control"
                        />
                        <label className="form-label" htmlFor="pincode">
                          Pin code
                        </label>
                      </div>
                    </div>
                  </div>
                  <div data-mdb-input-init="" className="form-outline mb-4">
                    <textarea
                      className="form-control"
                      id="form7Example7"
                      rows={4}
                      defaultValue={""}
                    />
                    <label className="form-label" htmlFor="form7Example7">
                      Additional information
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card mb-4">
              <div className="card-header py-3">
                <h5 className="mb-0">Summary</h5>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Products
                    <span>$53.98</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                    Shipping
                    <span><b>Free</b></span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>Total amount</strong>
                      <strong>
                        <p className="mb-0">(including VAT)</p>
                      </strong>
                    </div>
                    <span>
                      <strong>$53.98</strong>
                    </span>
                  </li>
                </ul>
                <button
                  type="button"
                  className="btn btn-primary btn-lg btn-block"
                >
                  Make purchase
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
