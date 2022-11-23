import React from "react";
import { Link } from "react-router-dom";
import videoBg from "../assets/videoBg.mp4";
import IconDog from "../assets/IconDog.png";
import "./style/LandingPage.css"

export default function LandingPage() {
  return (
    <div>
      <div className="landing-cont">
      <video src={videoBg} autoPlay loop muted />
        <h1 className="tit-landing">Come meet the puppies</h1>
        
        <Link to="/home">
          <img src={IconDog} alt='Icon not found' className="btn-home"/>
        </Link>
      </div>
    </div>
  );
}
