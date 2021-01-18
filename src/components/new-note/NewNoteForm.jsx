import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import "./NewNoteForm.css";

const NewNoteForm = (props) => {
  return (
    <Form>
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="James" />
      </Form.Group>

      <Form.Group controlId="formMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="I hope anyone who see this has a great day!"
        />
        <Form.Text className="text-muted text-right">0 / 300</Form.Text>
      </Form.Group>
      <div className="btn-footer">
        <Button variant="secondary" onClick={props.onClose}>
          Close
        </Button>
        <Button className="btn-end" variant="primary" type="submit">
          Post
        </Button>
      </div>
    </Form>
  );
};

export default NewNoteForm;
