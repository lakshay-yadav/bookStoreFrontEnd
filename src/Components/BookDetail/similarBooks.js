import React from "react";
import BookCard from "../bookCard/BookCard";

export default function SimilarBooks({ book }) {
  return (
    <React.Fragment>
      <div className="mt-3">
        <BookCard bookData={book} />
      </div>
    </React.Fragment>
  );
}
