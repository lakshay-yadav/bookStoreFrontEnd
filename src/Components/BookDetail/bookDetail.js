import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { useParams } from "react-router-dom";
import BookCard from "../bookCard/BookCard";
import BookInfoPage from "./BookInfoPage/BookInfoPage";

export default function BookDetail() {

  const [book,setBook] = useState([])

  const {id} = useParams()
  console.log(id)

  useEffect(()=>{
    fetch(`http://localhost:8000/api/books/book/${id}`,{
      method:"GET",
      headers:{
        Accept:"application/json",
      }
    }).then(res=>res.json()).then((data)=>{setBook(data.book)})
  },[]);

  console.log(book)

  return (
    <React.Fragment>
      <Navbar />
      {book.length?<BookInfoPage bookData = {book[0]}/>:<p>No book found</p>}
    </React.Fragment>
  );
}
