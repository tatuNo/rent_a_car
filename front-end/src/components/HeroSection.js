import React from "react";
import { Button } from "./Buttons";
import "../App.css";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video.mp4" autoPlay loop muted />
      <h1>GET A RIDE FOR TODAY</h1>
      <p>What are you waiting for?</p>
      <div class="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          RENT NOW
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
