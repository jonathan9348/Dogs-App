import React from "react";
import { Link } from "react-router-dom";
import LandingImage from "../assets/Landing.jpg";
import IconDog from "../assets/IconDog.png";
import "./style/LandingPage.css"

export default function LandingPage() {
  return (
    <div>
      <div className="landing-cont">
        <img src={LandingImage} alt="Image not found" className="landing-img" />
        <h1 className="tit-landing">Come meet the puppies</h1>
        
        <Link to="/home">
          <img src={IconDog} alt='Icon not found' className="btn-home"/>
        </Link>
      </div>
    </div>
  );
}
