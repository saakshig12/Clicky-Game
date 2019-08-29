import React from "react";
import "./style.css";


function Navbar(props) {
  return (
    <div className="container">
  {/* <h1 className="navbar">{props.children}</h1> */}
  <h2>Click Game!</h2>
  <h3>Click on an image to begin and try to avoid on clicking on a function twice!</h3>
  <p className="scores"> Your Score: {props.score} {"   "}</p>
  </div>
  );
}

export default Navbar;