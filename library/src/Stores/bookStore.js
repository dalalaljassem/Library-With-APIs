import axios from "axios";
import { makeAutoObservable } from "mobx";
import memberStore from "./memberStore";
import React from "react";

class BookStore {
  //we took this from the postman get body
  booksData = [];
  constructor() {
    makeAutoObservable(this);
  }

  fetchBooks = async () => {
    try {
      const response = await axios.get(
        "https://library-borrow-system.herokuapp.com/api/books"
      );
      this.booksData = response.data;
      // console.log(response.data);
    } catch (error) {
      console.error("fetching error", error);
    }
  };

  createBook = async (book) => {
    // this.booksData.push(book);
    try {
      const response = await axios.post(
        "https://library-borrow-system.herokuapp.com/api/books",
        book
      );
      console.log(response.data);
      this.booksData.push(response.data);
    } catch (error) {
      console.error("creating error", error);
    }
  };

  borrowBook = async (borrowedBook, member) => {
    try {
      switch (member.membership) {
        case "silver":
          if (member.currentlyBorrowedBooks.length > 1) {
            alert("You reached your limit");
            return;
          }
          break;
        case "gold":
          if (member.currentlyBorrowedBooks.length > 2) {
            alert("You reached your limit");
            return;
          }
          break;
        case "platinum":
          if (member.currentlyBorrowedBooks.length > 4) {
            alert("You reached your limit");
            return;
          }
          break;
      }
      member.currentlyBorrowedBooks.push(borrowedBook._id);
      borrowedBook.borrowedBy.push(member._id);
      borrowedBook["available"] = false;
      const response = await axios.put(
        `https://library-borrow-system.herokuapp.com/api/books/${borrowedBook._id}/borrow/${member._id}`
      );
      memberStore.fetchMembers();
    } catch (error) {
      console.error("borrowing error", error);
    }
  };

  returnBook = async (returnedBook, member) => {
    try {
      // const book = this.booksData.find((book) => book._id === returnedBook._id);
      returnedBook["available"] = true;
      member.currentlyBorrowedBooks?.splice(
        member.currentlyBorrowedBooks?.indexOf(returnedBook._id),
        1
      );

      const response = await axios.put(
        `https://library-borrow-system.herokuapp.com/api/books/${returnedBook._id}/return/${member._id}`
      );
    } catch (error) {
      console.error("returning error", error);
    }
  };
} //store end
const bookStore = new BookStore();
bookStore.fetchBooks();
export default bookStore;
