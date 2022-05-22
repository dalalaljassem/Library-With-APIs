import axios from "axios";
import { makeAutoObservable } from "mobx";
import memberStore from "./memberStore";

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
    const book = this.booksData.find((book) => book._id === borrowedBook._id);
    book.borrowedBy.push(member._id);
    try {
      const response = await axios.put(
        `https://library-borrow-system.herokuapp.com/api/books/${book._id}/borrow/${member._id}`
      );
    } catch (error) {
      console.error("borrowing error", error);
    }
  };

  returnBook = async (returnedBook, member) => {
    const book = this.booksData.find((book) => book._id === returnedBook._id);
    try {
      const response = await axios.put(
        `https://library-borrow-system.herokuapp.com/api/books/${book._id}/return/${member._d}`
      );
    } catch (error) {
      console.error("returning error", error);
    }
  };
} //store end
const bookStore = new BookStore();
bookStore.fetchBooks();
export default bookStore;
