import React, { useEffect,useState } from "react";
import Navbar from "../Navbar/Navbar.js";
import BookCard from "../bookCard/BookCard";

export default function Books() {
  const [books, setBooks] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:8000/api/',{
      method:"GET",
      headers:{
        Accept:"application/json"
      }
    }).then(res=>res.json()).then((data)=>{setBooks(data);})
  },[])

  return (
    <React.Fragment>
      <Navbar></Navbar>
      <div>
        <div className="container">
        <div className="header">
          <h2>All Books</h2>
        </div>
          <div className="bookCard">
            {books.map((book) => {
                return <BookCard bookData={book} />;
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
