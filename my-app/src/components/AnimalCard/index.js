import React from "react";
//import animals from "Animals.json";
import "./style.css";

function AnimalCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} id={props.id}/>
        onClick={() => props.shuffleCards(props.id)}  
      </div>   
    </div>
  );
}

export default AnimalCard;
