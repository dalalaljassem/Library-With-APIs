import axios from "axios";
import { makeAutoObservable } from "mobx";

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
} //store end
const bookStore = new BookStore();
bookStore.fetchBooks();
export default bookStore;
