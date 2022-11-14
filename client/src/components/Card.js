import React from "react";

export default function Card({
  image,
  name,
  temperament,
  weightMin,
  weightMax,
}) {
  return (
    <div>
      <div className="card_style">
        <img src={image} alt="IMAGE NOT FOUND" />
        <h1>{name}</h1>
        <h4>{weightMin}</h4>
        <h4>{weightMax}</h4>
        <h3>{temperament}</h3>
      </div>
    </div>
  );
}
