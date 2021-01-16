import React from 'react';
import StickyNote from '../sticky-note/StickyNote';
import './Home.css'

const Home = () => {
  return (
    <div className="home">\
      <div>
        <ul>
        <StickyNote />
        <StickyNote />
        <StickyNote />
        <StickyNote />
        <StickyNote />
        <StickyNote />
        </ul>
      </div>
    </div>
  );
}

export default Home;