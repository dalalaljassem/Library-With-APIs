import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import { useEffect } from "react";
import bookStore from "../Stores/bookStore";
import memberStore from "../Stores/memberStore";
import BookItem from "./BookItem";
import { observer } from "mobx-react-lite";

function BookDetailModal({ book }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [mem, setMem] = useState([]);
  const [newBMember, setnewBMember] = useState("");
  const [available, setAvailable] = useState(book.available);

  const borrowingMembers = () => {
    let membersB = book.borrowedBy;
    const r = memberStore.membersData.filter((member) =>
      membersB.includes(member._id)
    );
    setMem(
      r.map(
        (member) => (member = member.firstName + " " + member.lastName + " , ")
      )
    );
  };

  useEffect(() => borrowingMembers);

  const handleBorrow = () => {
    const memToBorrow = memberStore.findMember(newBMember);
    console.log(newBMember);
    bookStore.borrowBook(book, memToBorrow);
  };

  const handleReturn = () => {
    const lastMem = memberStore.findMember(
      book.borrowedBy[book.borrowedBy?.length - 1]
    );
    bookStore.returnBook(book, lastMem);
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
              <p>Status: {available ? "Available" : "Not Available"}</p>
              <p>Borrowed By:{mem}</p>
            </div>
          </div>

          <div class="d-grid gap-2 mx-auto">
            <select
              class="form-select"
              aria-label="Default select example"
              onChange={(event) => {
                setnewBMember(event.target.value);
              }}
            >
              {memberStore.membersData.map((member) => (
                <option value={member._id}>
                  {(member = member.firstName + " " + member.lastName)}
                </option>
              ))}
            </select>
            <button class="btn btn-dark" type="button" onClick={handleBorrow}>
              Borrow
            </button>

            <button class="btn btn-dark" type="button" onClick={handleReturn}>
              Return
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default observer(BookDetailModal);
