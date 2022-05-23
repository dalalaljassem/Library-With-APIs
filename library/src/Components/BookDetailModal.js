import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React,{ useState } from "react";
import { useEffect } from "react";
import bookStore from "../Stores/bookStore";
import memberStore from "../Stores/memberStore";
import BookItem from "./BookItem";

function BookDetailModal({ book }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [membersB, setMembersB] = useState([]);
  const [mem, setMem] = useState([]); 
  const [newBMember, setnewBMember] = useState({});
  const [available, setAvailable] = useState(true);

  let membersPick = {};

  const BorrowingMembers = () => {
    // const memArr = memberStore.membersData
    //   .filter((member) => book.borrowedBy.includes(member._id))
    //   .map((member) => (member = member.firstName + member.lastName));
    // console.log(memArr);

    const memArr = book.borrowedBy.map((id) => memberStore.memberNameFind(id));

    setMembersB(memArr);
  };


  const borrowingMembers = () => {
    let membersB = book.borrowedBy;
    const r = memberStore.membersData.filter((member) => membersB.includes(member._id));
    setMem(r.map((member) => (member = member.firstName + " " + member.lastName  + " , " )));
  };

  useEffect(() => borrowingMembers);


  const handleBorrow = () => {
    if (book.available) {
      bookStore.borrowBook(book,newBMember);

    }
    // console.log("🚀 ~ file: BookDetailModal.js ~ line 45 ~ handleBorrow ~ book", book)
    // console.log("🚀 ~ file: BookDetailModal.js ~ line 44 ~ handleBorrow ~ newBMember", newBMember)
  };

  // const handleMember = (event) =>{
  //   memberStore.members.map((element) => {
  //     if (element.firstName + " " + element.lastName == membersB) {
  //       membersPick = element;
  //       {handleBorrow()}
  //     } 
  // }
  //   )};
    

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
              <p>Availablity: {book.available}</p>
              <p>Borrowed By:{mem}</p>

            </div>
          </div>

          <div class="d-grid gap-2 mx-auto">
          <select  class="form-select"
              aria-label="Default select example"
              onChange={(e)=>{setnewBMember(e.target.key)}}>
                
              {memberStore.membersData.map((member) => (
              <option key={member._id}>{(member = member.firstName + " " + member.lastName  )}</option>
                 ))}
              </select>
            <button
              class="btn btn-secondary"
              type="button"
              onClick={handleBorrow}
            >
              Borrow
            </button>

            <button 
            class="btn btn-secondary" 
            type="button"
            onClick={handleReturn}>
              Return
            </button>

          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default BookDetailModal;
