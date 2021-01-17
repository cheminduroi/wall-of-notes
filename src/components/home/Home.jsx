import React from "react";
import StickyNote from "../sticky-note/StickyNote";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import BezierCurve from "../bezier-curve/BezierCurve";
import "./Home.css";

const Home = () => {
  return (
    <div id="main">
      <div>
      <span id="title">Wall of Notes</span>
      <Button className="circular" variant="success">
        Add Note&nbsp;&nbsp;+
      </Button>
      </div>
      
      <Container className="cont">
        <Row>
          {Array.from({ length: 10 }, (_, i) => (
            <StickyNote />
          ))}
        </Row>
      </Container>
      <br />
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
