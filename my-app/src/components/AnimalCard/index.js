import React from "react";
//import animals from "Animals.json";
import "./style.css";

function AnimalCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.image} src={props.image} id={props.id}/>
      </div>   
    </div>
  );
}

export default AnimalCard;
