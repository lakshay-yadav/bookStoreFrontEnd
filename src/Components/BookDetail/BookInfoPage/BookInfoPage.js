import React, { useEffect, useState } from "react";
import "./BookInfoPage.css";
import { Link } from "react-router-dom";
import SimilarBooks from "../similarBooks";

export default function BookInfoPage({ bookData }) {
  const [similarBooks, setSimilarBooks] = useState([]);
  const userEmail = localStorage.getItem("user");

  useEffect(() => {
    fetch(`http://localhost:8000/api/books/books/${bookData.genre[0]}`)
      .then((res) => res.json())
      .then((data) => {
        setSimilarBooks(data.books);
      });
  }, []);

  const cartHandler = async (e) => {
    // e.preventDefault()
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
    // console.log(data);
  };

  console.log("Similar books",similarBooks)
  // console.log(bookData);

  return (
    <>
      <section>
        <div className="container">
          <div className="row gx-5">
            <aside className="col-lg-6">
              <div
                className=" d-flex justify-content-center align-items-center border "
                style={{ height: "100%" }}
              >
                <Link
                  data-fslightbox="mygalley"
                  className="rounded-4"
                  target="_blank"
                  data-type="image"
                  to="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Blank_book_on_a_table.jpg/640px-Blank_book_on_a_table.jpg"
                >
                  <img
                    style={{
                      Width: "500px",
                      Height: "100vh",
                      margin: "auto",
                    }}
                    className="rounded-4 fit"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Blank_book_on_a_table.jpg/640px-Blank_book_on_a_table.jpg"
                  />
                </Link>
              </div>
            </aside>
            <main className="col-lg-6">
              <div className="ps-lg-3">
                <h4 className="title text-dark">{bookData.title}</h4>
                <div className="d-flex flex-row my-3">
                  <div className="text-warning mb-1 me-2">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fas fa-star-half-alt" />
                  </div>
                  <span className="text-muted">
                    <i className="fas fa-shopping-basket fa-sm mx-1" />
                    154 orders
                  </span>
                  <span className="text-success ms-2">In stock</span>
                </div>
                <div className="mb-3">
                  <span className="h5">Rs. {bookData.price}</span>
                </div>
                <p>{bookData.description}</p>
                <div className="row">
                  <dt className="col-3">Book</dt>
                  <dd className="col-9">{bookData.title}</dd>
                  <dt className="col-3">Author</dt>
                  <dd className="col-9">{bookData.author}</dd>
                  <dt className="col-3">Publication year</dt>
                  <dd className="col-9">{bookData.publication_year}</dd>
                  <dt className="col-3">Genre</dt>
                  <dd className="col-9">
                    {bookData.genre.map((g) => (
                      <span>{g}</span>
                    ))}
                  </dd>
                </div>
                <hr />
                <div className="row mb-4">
                  <div className="col-md-4 col-6 mb-3">
                    <label className="mb-2 d-block">Quantity</label>
                    <div className="input-group mb-3" style={{ width: 170 }}>
                      <button
                        className="btn btn-white border border-secondary px-3"
                        type="button"
                        id="button-addon1"
                        data-mdb-ripple-color="dark"
                      >
                        <i className="fas fa-minus" />
                      </button>
                      <input
                        type="text"
                        className="form-control text-center border border-secondary"
                        placeholder={1}
                        aria-label="Example text with button addon"
                        aria-describedby="button-addon1"
                      />
                      <button
                        className="btn btn-white border border-secondary px-3"
                        type="button"
                        id="button-addon2"
                        data-mdb-ripple-color="dark"
                      >
                        <i className="fas fa-plus" />
                      </button>
                    </div>
                  </div>
                </div>
                <Link to="" className="btn mx-2 btn-warning shadow-0">
                  {" "}
                  Buy now{" "}
                </Link>
                <Link
                  to="/cart"
                  className="btn btn-primary mx-2 shadow-0"
                  onClick={cartHandler}
                >
                  {" "}
                  <i className="me-1 fa fa-shopping-basket" /> Add to cart{" "}
                </Link>
                <Link
                  to=""
                  className="btn btn-light border border-secondary py-2 icon-hover px-3 mx-2"
                >
                  {" "}
                  <i className="me-1 fa fa-heart fa-lg" /> Save{" "}
                </Link>
              </div>
            </main>
          </div>
          <br/><br/>
          <hr/>
          <h2 className="">Similar Books</h2>
          <div className="row">{similarBooks.map((book,ind)=>{
            if(book.title !== bookData.title && ind<4){
              return <div className="col-xl-3"><SimilarBooks book={book}/></div>
            }
          })}
          </div>
        </div>
      </section>
    </>
  );
}
