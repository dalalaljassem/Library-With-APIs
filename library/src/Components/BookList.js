import { observer } from "mobx-react";
import bookStore from "../Stores/bookStore";
import BookItem from "./BookItem";

function BookList({ query, genre }) {
  const bookList = bookStore.booksData
    .filter(
      (book) => 
    book.title.toLowerCase().includes(query.toLowerCase()) && 
    book.genres.includes(genre)
    )
    .map((book) => <BookItem book={book} key={book._id} />);

  return (
    <div>
      <p>{bookList}</p>
    </div>
  );
}

export default observer(BookList);
