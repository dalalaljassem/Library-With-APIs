import React, { useState } from "react";
import Select from "react-select";
import bookStore from "../Stores/bookStore";
import BookItem from "./BookItem";


const options = [
  { value: "Fantasy", label: "Fantasy" },
  { value: "Mystery", label: "Mystery" },
  { value: "Action", label: "Action" },
  { value: "Sci-Fi", label: "Sci-Fi" },
  { value: "Romance", label: "Romance" },
  { value: "Self-Help", label: "Self-Help" },
  { value: "Thriller", label: "Thriller" },
  { value: "Suspense", label: "Suspense" },
  { value: "Biography", label: "Biography" },
  { value: "Business", label: "Business" },
  { value: "Entrepreneurship", label: "Entrepreneurship" },
  { value: "Crime", label: "Crime" },
];

const Genre = () => {
  const [selected, setSelected] = useState([]);

  //   const bookList = bookStore.booksData
  //     .filter(
  //       (book) => book.genres === selected.map((selection) => selection.value)
  //     )
  //     .map((book) => <BookItem book={book} key={book._id} />);\

  const bookList = bookStore.booksData
    .filter((book) => book.genres.includes(selected))
    .map((book) => <BookItem book={book} />);

  const handleGenreChange = (event) => {
    if (selected.indexOf(event.target.value) == -1) {
      selected.push(event.target.value);
    } else {
      selected.splice(selected.indexOf(event.target.value), 1);
    }
  };
  
  return (
    <div>
      {bookList}

      <select
        name="genres"
        onChange={(e) => handleGenreChange}
        class="form-select"
        aria-label="Default select example"
      >
        <option name="genres" value="Action">
          Action
        </option>
        <option name="genres" value="Sci-Fi">
          Sci-Fi
        </option>
        <option name="genres" value="Romance">
          Romance
        </option>
        <option name="genres" value="Fiction">
          Fiction
        </option>
        <option name="genres" value="Self-Help">
          Self-Help
        </option>
        <option name="genres" value="Thriller">
          Thriller
        </option>
        <option name="genres" value="Suspense">
          Suspense
        </option>
        <option name="genres" value="Biography">
          Biography
        </option>
        <option name="genres" value="Business">
          Business
        </option>
        <option name="genres" value="Entrepreneurship">
          Entrepreneurship
        </option>
        <option name="genres" value="Crime">
          Crime
        </option>
      </select>
    </div>
  );
};

export default Genre;
