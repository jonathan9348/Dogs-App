import React from "react";

import './style/Card.css'

export default function Card({
  image,
  name,
  temperament,
  weight
}) {
  return (
    <div className="cont-card">
      <div className="card_style">
        <img src={image} alt="IMAGE NOT FOUND" className="card-img"/>
        <h1 className="name-h">{name}</h1>
        <h4 className="weight-h">Weight: {weight} kg</h4>
        <h3 className="temp-h">{temperament}</h3>
      </div>
    </div>
  );
}
