import React from "react";
import "./style.css";

function AnimalCard(props) {
  return (
    <div className="card">
      <div className="img-container center">
        <img alt={props.image} 
        src={props.image} 
        id={props.id} 
        onClick={() => props.handleClick(props.id)}/>
      </div>   
    </div>
  );
}

export default AnimalCard;
