import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import bookStore from "../Stores/bookStore";
import memberStore from "../Stores/memberStore";
import BookItem from "./BookItem";

function BookDetailModal({ book }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [membersB, setMembersB] = useState([]);
  const BorrowingMembers = () => {
    // const memArr = memberStore.membersData
    //   .filter((member) => book.borrowedBy.includes(member._id))
    //   .map((member) => (member = member.firstName + member.lastName));
    // console.log(memArr);

    const memArr = book.borrowedBy.map((id) => memberStore.memberNameFind(id));

    setMembersB(memArr);
  };
  const handleBorrow = () => {
    if (book.available) {
      bookStore.borrowBook(book);
    }
  };
  const handleReturn = () => {
    book.available = true;
    bookStore.returnBook(book);
  };

  return (
    <div>
      <Button variant="dark" onClick={handleShow}>
        i
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Book Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="book-modal">
            <div className="book-img">
              <img
                src={book.image}
                style={{ width: "150px", height: "200px" }}
              />
            </div>
            <div className="book-detail">
              <p>Book Title: {book.title}</p>
              <p>Author: {book.author}</p>
              <p>Genres: {book.genres}</p>
              <p>Borrowed By: {membersB}</p>
            </div>
          </div>
          <div class="d-grid gap-2 mx-auto">
            <button
              class="btn btn-secondary"
              type="button"
              onClick={handleBorrow}
            >
              Borrow
            </button>
            <button class="btn btn-secondary" type="button">
              Return
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default BookDetailModal;
