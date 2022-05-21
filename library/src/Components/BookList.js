import { observer } from "mobx-react";
import bookStore from "../Stores/bookStore";
import BookItem from "./BookItem";

function BookList({ query, genre }) {
  // let bookList = [];
  // if (genre.includes("All")) {
  //   bookList = bookStore.booksData.filter((book) =>
  //     book.title
  //       .toLowerCase()
  //       .includes(query.toLowerCase())
  //       .map((book) => <BookItem book={book} />)
  //   );
  // } else
  const bookList = bookStore.booksData
    .filter(
      (book) => book.title.toLowerCase().includes(query.toLowerCase())
      // && book.genres.includes(genre)
    )
    .map((book) => <BookItem book={book} />);

  return (
    <div>
      <p>{bookList}</p>
    </div>
  );
}

export default observer(BookList);
// const petList = petStore.pets
//   .filter(
//     (pet) =>
//       pet.name.toLowerCase().includes(query.toLowerCase()) &&
//       pet.type.includes(type)
//   )
//   .map((pet) => <PetItem key={pet.id} pet={pet} />);
