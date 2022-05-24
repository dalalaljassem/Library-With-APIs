import BookDetailModal from "./BookDetailModal";
import React from "react";

function BookItem({ book }) {
  return (
    <div class="shadow book-item">
      <div className="item-img">
        <BookDetailModal book={book} />
      </div>
      <div className="item-name">
        {/* <img
          src={book.image}
          style={{ width: "150px", height: "200px", textAlign: "center" }}
        ></img> */}
        <p> Title : {book.title}</p>
        <p>Author : {book.author}</p>
      </div>
    </div>
  );
}

export default BookItem;
