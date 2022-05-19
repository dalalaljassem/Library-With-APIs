import { observer } from "mobx-react";
import bookStore from "../Stores/bookStore"
import BookItem from "./BookItem";

function BookList() {
  const bookList = bookStore.booksData.map((book) => (
    <BookItem book={book} />
  ));

  return (
    <div>
      <p>{bookList}</p>
    </div>
  );
}

export default observer(BookList);
