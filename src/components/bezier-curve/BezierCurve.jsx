import React from "react";
import "./BezierCurve.css";

const BezierCurve = () => {
  return (
    <svg id="bc" width="700" height="200">
      <defs>
        <linearGradient id="bc-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{'stopColor': '#02AAB0', 'stopOpacity' : 1}} />
      <stop offset="100%" style={{'stopColor': '#00CDAC', 'stopOpacity' : 1}} />
        </linearGradient>
      </defs>
      <path d="M 0 0 q 450 300 700 0" stroke="#d3d3d3" stroke-width="2" fill="url(#bc-gradient)"/>
    </svg>
  );
};

export default BezierCurve;
