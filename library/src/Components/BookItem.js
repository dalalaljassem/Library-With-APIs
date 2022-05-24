import BookDetailModal from "./BookDetailModal";
import React from "react";

function BookItem({ book }) {
  return (
    <div class="shadow book-item">
      <div>
        <img src={book.image} className="item-img"></img>
      </div>
      <div className="item-name">
        <p> Title : {book.title}</p>
        <p>Author : {book.author}</p>
      </div>
      <div className="item-i">
        <BookDetailModal book={book} />
      </div>
    </div>
  );
}

export default BookItem;
