import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import bookStore from "../Stores/bookStore";

function BookCreateModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    genres: ["Fantasy", ""],
  });

  const handleChange = (event) => {
    setNewBook({ ...newBook, [event.target.name]: event.target.value });
  };

  //   const handleGenreChange = (event)=>{
  //     setNewBook({...newBook})
  //     genres.push(genres.target.value)
  // }

  const handleSubmit = (event) => {
    event.preventDefault();
    bookStore.createBook(newBook);
    handleClose();
  };

  return (
    <>
      <div className="add-btn">
        <Button class="btn" variant="primary" onClick={handleShow}>
          +
        </Button>
      </div>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Book Creation</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter book title"
                name="title"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter author name"
                name="author"
                onChange={handleChange}
              />
            </Form.Group>

            {/* <Form.Group className="mb-3">
    <Form.Label>Genres</Form.Label>
    <Form.Select>
      <option>Action</option>
      <option>Sci-Fi</option>
      <option>Romance</option>
      <option>Fiction</option>
      <option>Self-Help</option>
      <option>Thriller</option>
      <option>Suspense</option>
      <option>Biography</option>
      <option>Business</option>
      <option>Entrepreneurship</option>
      <option>Crime</option>
    </Form.Select>
  </Form.Group> */}

            {["checkbox"].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="Fantasy"
                  name="genres"
                  type={type}
                  id={`inline-${type}-1`}
                  // checked={handleGenreChange()}
                />
                <Form.Check
                  inline
                  label="Mystery"
                  name="genres"
                  type={type}
                  id={`inline-${type}-2`}
                  //onChange={handleGenreChange()}
                />
                <Form.Check
                  inline
                  label="Action"
                  name="genres"
                  type={type}
                  id={`inline-${type}-2`}
                  // onChange={handleGenreChange()}
                />
              </div>
            ))}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default BookCreateModal;
