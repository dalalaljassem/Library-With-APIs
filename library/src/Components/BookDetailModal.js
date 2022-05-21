import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import bookStore from "../Stores/bookStore";
import BookItem from "./BookItem";

function BookDetailModal({ book }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        i
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Book Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Book Title: {book.title}</p>
          <p>Author: {book.author}</p>
          <p>Genres: {book.genres}</p>
          <img src={book.image} style={{ width: "150px", height: "200px"}}/>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default BookDetailModal;
