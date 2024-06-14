import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar.js";
import { API } from "../../backend.js";
import BookCard from "../bookCard/BookCard.js";
import "./home.css";
import { books } from "../../Assets/books.js";
import { NavLink } from "react-router-dom";

export default function Home() {
    // const [books, setBooks] = useState([])

    // useEffect(() => {
    //   fetch(`${API}/`, {
    //     method: "GET",
    //     headers: {
    //       "Accept": "application/json",
    //     },
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log(data);
    //       setBooks(data);
    //     });
    // }, []);

  console.log(books);
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <div className="header">
          <h2>Popular Books</h2>
        </div>
      <div className="container">
      <div className="viewAll"><NavLink to="/books">View All</NavLink></div>
        <div className="bookCard">
          {books.map((book, ind) => {
            if (ind <= 15) {
              return <BookCard bookData={book} />;
            }
          })}
        </div>
      </div>
    </React.Fragment>
  );
}
