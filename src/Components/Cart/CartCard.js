import React, { useState } from "react";
import { NavLink, Navigate } from "react-router-dom";

export default function CartCard({ product }) {
  const userEmail = localStorage.getItem("user")
  const [remove,setRemove] = useState(false)

  const removeFromCart = async (e)=>{
    e.preventDefault()
    console.log("inside remove from cart")
    const res = await fetch('http://localhost:8000/api/cart/removefromcart',{
      method:"POST",
      headers:{
        Accept:"application/json",
        "content-type":"application/json"
      },
      body: JSON.stringify({email:userEmail,product:product})
    })

    const data = await res.json()
    console.log(data)

    if(data.status==="OK"){
      setRemove(true)
    }
  }

  const redirect = ()=>{
    if(remove)
    return <Navigate replace to="/cart/"/>
  }

  return (
    <React.Fragment>
      <div className="card rounded-3 mb-4">
      <div className="card-body p-4">
        <div className="row d-flex justify-content-between align-items-center">
          <div className="col-md-2 col-lg-2 col-xl-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Blank_book_on_a_table.jpg/640px-Blank_book_on_a_table.jpg"
              className="img-fluid rounded-3"
              alt="Cotton T-shirt"
            />
          </div>
          <div className="col-md-3 col-lg-3 col-xl-3">
            <p className="lead fw-normal mb-2">{product.title}</p>
            <p>
              <span className="text-muted">By <b>{product.author}</b> </span>
            </p>
          </div>
          <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
            <button
              data-mdb-button-init=""
              data-mdb-ripple-init=""
              className="btn btn-link px-2"
              onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
            >
              <i className="fas fa-minus" />
            </button>
            <input
              id="form1"
              min={0}
              name="quantity"
              defaultValue="1"
              type="number"
              className="form-control form-control-sm"
            />
            <button
              data-mdb-button-init=""
              data-mdb-ripple-init=""
              className="btn btn-link px-2"
              onclick={() => {}}
            >
              <i className="fas fa-plus" />
            </button>
          </div>
          <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
            <h5 className="mb-0">Rs.{product.price}</h5>
          </div>
          <div className="col-md-1 col-lg-1 col-xl-1 text-end">
            <button className="btn text-danger px-2" onClick={removeFromCart}>
              <i className="fas fa-trash fa-lg" />
            </button>
          </div>
        </div>
      </div>
    </div>
    {redirect()}
    </React.Fragment>
  );
}
