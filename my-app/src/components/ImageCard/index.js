import React from "react";
import "./style.css";

function ImageCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} id={props.id}/>
      </div>
      <span onClick={() => props.shuffleCards(props.id)} className="shuffle">
      </span>
    </div>
  );
}

export default ImageCard;
