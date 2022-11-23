import React from "react";
import './style/Card.css'

export default function Card({
  image,
  name,
  temperament,
  weight
}) {
  return (
    <div className="card">
      <div className="face front">
       <img src={image} alt="Image not found"/>
       <h3>{name}</h3> 
      </div>
      <div className="face back">
        <h3>{name}</h3>
        <p>This puppy has the following temperaments: {temperament}</p>
        <p>The weight is about: {weight} kg</p>

      </div>
      
      
    </div>
  );
}
