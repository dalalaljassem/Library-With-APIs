import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import memberStore from "../Stores/memberStore";
import MemberItem from "./MemberItem";
import bookStore from "../Stores/bookStore";
import React, { useEffect } from "react";

function MemberDetailModal({ member }) {
  const [show, setShow] = useState(false);
  const [borrowedB, setBorrowedB] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newMember, setNewMember] = useState({
    firstName: "",
    lastName: "",
    Membership: "",
    _id: "",
    currentlyBorrowedBooks: [],
  });

  const borrowedBooks = () => {
    let Bbooks = member.currentlyBorrowedBooks;
    const r = bookStore.booksData.filter((book) => Bbooks.includes(book._id));
    setBorrowedB(r.map((book) => (book = book.title)));
    //    console.log("🚀 ~ file: MemberDetailModal.js ~ line 29 ~ constborrowedBooks ~ r", r);
  };

  useEffect(() => borrowedBooks);

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        i
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Member Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>First Name: {member.firstName}</p>
          <p>Last Name: {member.lastName}</p>
          <p>Membership Type: {member.membership}</p>
          <p>Books Borrowed: {borrowedB}</p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default MemberDetailModal;
