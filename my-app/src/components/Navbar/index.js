import React from "react";
//import "./style.css";
// import Counter from "./Counter";

function Navbar(props) {
  return 
  <h1 className="navbar">{props.children}</h1>;
  <div className="scores">
      Score: {props.score} Current: {props.current}
    </div>
  
  

}

export default Navbar;