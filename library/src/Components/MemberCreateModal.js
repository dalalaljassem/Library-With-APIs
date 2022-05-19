import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import memberStore from "../Stores/memberStore";

function  MemberCreateModal(){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [newMember,setNewMember] = useState({
        firstName :"",
        lastName: "",
        Membership : "",
    });


    const handleChange = (event)=>{
        setNewMember({...newMember, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        memberStore.createMember(newMember);
        handleClose();
    }

    return(  
        <>
    <Button variant="primary" onClick={handleShow}>
        Create member
      </Button>
      
     
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Member Creation</Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
        <Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>First Name</Form.Label>
    <Form.Control 
    type="text" 
    placeholder="Enter first name" 
    name="firstName"
    onChange={handleChange}
    />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Last Name</Form.Label>
    <Form.Control 
    type="text" 
    placeholder="Enter Last name" 
    name="lastName"
    onChange={handleChange}
    />
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Label>Membership</Form.Label>
    <Form.Select>
      <option>Silver</option>
      <option>Gold </option>
      <option>Platinum</option>
    </Form.Select>
  </Form.Group>
  </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit} >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default MemberCreateModal;