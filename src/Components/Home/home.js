import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar.js";
import { API } from "../../backend.js";
import BookCard from "../bookCard/BookCard.js";
import "./home.css";
import { NavLink } from "react-router-dom";

export default function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBooks(data);
      });
  }, []);

  console.log(books);
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <div>
        <div className="container">
        <div className="header">
          <h2>Popular Books</h2>
        </div>
          <div className="viewAll">
            <NavLink to={`/books/${books.genre}`}>View All</NavLink>
          </div>
          <div className="bookCard row">
            {books.map((book, ind) => {
              if (ind <= 3) {
                return <div className="col-xl-3 col-md-6 col-sm-12"><BookCard bookData={book} /></div>;
              }
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
