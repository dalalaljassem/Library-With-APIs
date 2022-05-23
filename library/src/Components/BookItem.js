import BookDetailModal from "./BookDetailModal";
import React from "react";

function BookItem({ book }) {
  return (
    <div class="shadow book-item">
      <div className="item-img">
        <BookDetailModal book={book} />
      </div>
      <div className="item-name">
        <p> Title : {book.title}</p>
        <p>Author : {book.author}</p>
      </div>
    </div>
  );
}

export default BookItem;
