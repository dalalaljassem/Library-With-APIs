import { observer } from "mobx-react";
import bookStore from "../Stores/bookStore";
import BookItem from "./BookItem";
import { useState } from "react";
import React, { Component } from "react";
import Select from "react-select";
import Genre from "./Genre";

function BookList() {
  const [query, setQuery] = useState("");
  const [genre, setGenre] = useState("");

  const bookList = bookStore.booksData
    .filter(
      (book) =>
        book.title.toLowerCase().includes(query.toLowerCase()) &&
        (book.genres.find((gen) => gen === genre) || genre === "")
    )
    .map((book) => <BookItem book={book} key={book._id} />);

  return (
    <div>
      <div class="input-group rounded">
        <input
          type="search"
          class="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="filter-div">
        <select
          class="form-select"
          aria-label="Default select example"
          onChange={(e) => setGenre(e.target.value)}
        >
          <option value="" defaultValue="All">
            All
          </option>
          <option value="Fantasy">Fantasy</option>
          <option value="Mystery">Mystery</option>
          <option value="Action">Action</option>
          <option value="Sci-fi">Sci-Fi</option>
          <option value="Romance">Romance</option>
          <option value="Fiction">Fiction</option>
          <option value="Self-Help">Self-Help</option>
          <option value="Thriller">Thriller</option>
          <option value="Suspense">Suspense</option>
          <option value="Biography">Biography</option>
          <option value="Buisness">Business</option>
          <option value="Entrepreneurship">Entrepreneurship</option>
          <option value="Crime">Crime</option>
        </select>
      </div>
      {bookList}
    </div>
  );
}

export default observer(BookList);
