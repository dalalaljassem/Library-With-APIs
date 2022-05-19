import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import memberStore from "../Stores/memberStore";
import MemberItem from "./MemberItem";

function  MemberDetailModal({member}){

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [newMember,setNewMember] = useState({
        firstName :"",
        lastName: "",
        Membership : "",
    });
    
    return(
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
    )
}

export default MemberDetailModal;