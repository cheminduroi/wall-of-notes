import React from "react";
import Col from 'react-bootstrap/Col';
import "./StickyNote.css";

const StickyNote = () => {
  return (
    <Col className="cell">
      <a href="#">
        <h2>Title #1</h2>
        <p>Text Content #1</p>
      </a>
    </Col>
  );
};

export default StickyNote;
