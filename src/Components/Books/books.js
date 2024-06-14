import React from "react";
import { books } from "../../Assets/books.js";
import Navbar from "../Navbar/Navbar.js";
import BookCard from "../bookCard/BookCard";

export default function Books() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <div className="header">
          <h2>All Available Books</h2>
        </div>
      <div className="container">
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
