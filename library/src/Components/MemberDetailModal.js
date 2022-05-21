import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import memberStore from "../Stores/memberStore";
import MemberItem from "./MemberItem";
import bookStore from "../Stores/bookStore";

function MemberDetailModal({ member }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newMember, setNewMember] = useState({
    firstName: "",
    lastName: "",
    Membership: "",
    _id:"",
    currentlyBorrowedBooks:[],
  });

//   const borrowedBooks = () => {
//     let arr=[];
//     let book = bookStore.book;
//     let books = member.currentlyBorrowedBooks;
//     const r = books.filter(book=>{
//      if (borrowedBooks===book._id  ) 
//     arr.push[book._id]})
// //    console.log("🚀 ~ file: MemberDetailModal.js ~ line 29 ~ constborrowedBooks ~ r", r);
//   }}
  

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
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
          <p>Books Borrowed: stay tuned..</p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default MemberDetailModal;
