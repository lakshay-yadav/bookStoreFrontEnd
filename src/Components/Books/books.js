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
          <div className="bookCard row">
            {books.map((book) => {
                return <div className="col-xl-3 col-md-6 col-sm-12 mb-3"><BookCard bookData={book} /></div>;
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
