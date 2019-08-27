import React from "react";
import "./style.css";


function Navbar(props) {
  return (
    <div className="container">
  <h1 className="navbar">{props.children}</h1>
  <p className="scores">Score: {props.score} {"   "} Current: {props.current}</p>
  </div>
  );
}

export default Navbar;