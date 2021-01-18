import React, { useState, useEffect } from "react";
import StickyNote from "../sticky-note/StickyNote";
import NewNoteForm from "../new-note/NewNoteForm";
import Container from "react-bootstrap/Container";
import { Row, Button, Modal } from "react-bootstrap";
import { fetchNotes } from "../../axios-util";
import "./Home.css";

const Home = () => {
  const [show, setShow] = useState(false);
  const [notes, setNotes] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(
    () => (async () => setNotes(await fetchNotes()))(),
    [],
  );

  

  return (
    <div id="main">
      <div>
        <span id="title">Wall of Notes</span>
        <Button className="circular" variant="success" onClick={handleShow}>
          Add Note&nbsp;&nbsp;+
        </Button>
      </div>

      <Container className="cont">
        <Row>
          {notes.map((n, idx) => <StickyNote key={idx} msg={n['message']} name={n['name']}/>)}
        </Row>
      </Container>
      <br />

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>New Note</Modal.Title>
        </Modal.Header>
        <Modal.Body><NewNoteForm onClose={handleClose}/></Modal.Body>
      </Modal>
    </div>
  );
};

// <div className="home">
//   <div>
//     <BezierCurve />
//     <div id="page-heading">
//       <h2 id="title">Wall of Notes</h2>
//       <h4 id="desc">Leave a note of positivity</h4>
//     </div>
//     <ul id="note-grid">
//       {Array.from({ length: 20 }, (_, i) => (
//         <StickyNote noteKey={i} />
//       ))}
//     </ul>
//   </div>
// </div>

export default Home;
