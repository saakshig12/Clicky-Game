import React from "react";
import "./style.css";
import Counter from "../Counter/Counter";

function Navbar(props) {
  return 
  <div>

  <h1 className="navbar">{props.children}</h1>;
  <div className="scores">
      Score: {props.score} Current: {props.current}
    </div>
  
  </div>

}

export default Navbar;