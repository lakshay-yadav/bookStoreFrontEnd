import React from "react";
import "./bookcard.css";
import { NavLink } from "react-router-dom";
import { API } from "../../backend.js";

export default function BookCard({ bookData }) {
  const userEmail = localStorage.getItem("user");

  const clickHandler = async (e) => {
    console.log("Clicked");

    const response = await fetch(`http://localhost:8000/api/cart/addtocart`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({ email: userEmail, book: bookData }),
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="card" style={{ width: "18rem" }}>
      <div>
      <img
        className="card-img-top"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Blank_book_on_a_table.jpg/640px-Blank_book_on_a_table.jpg"
        alt="Card image cap"
      />
      </div>
      <div className="card-body">
        <h5 className="card-title">{bookData.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">By {bookData.author}</h6>
        <p className="card-text">{bookData.description.slice(0, 50) + "..."}</p>
        <NavLink to="/bookDetail" className="card-link">
          <button type="button" class="btn btn-success">
            View Details
          </button>
        </NavLink>
        <NavLink to="/cart" className="card-link">
          <button type="button" class="btn btn-success" onClick={clickHandler}>
            Add to Cart
          </button>
        </NavLink>
      </div>
    </div>
  );
}
