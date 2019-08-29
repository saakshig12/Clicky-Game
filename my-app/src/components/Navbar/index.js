import React from "react";
import "./style.css";


function Navbar(props) {
  return (
    <div className="container">
  <h1 className="navbar">{props.children}</h1>
  <p className="scores"> Your Score: {props.score} {"   "}</p>
  </div>
  );
}

export default Navbar;