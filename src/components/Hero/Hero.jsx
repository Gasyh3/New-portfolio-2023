import React from "react";
import KevinThreeD from "../KevinThreeD/KevinThreeD.tsx";
import "./Hero.scss";
import ProfilePicture from "../../assets/profile.jpg";
import ArrowDown from "../svg-components/ArrowDown/ArrowDown";

function Hero() {
  return (
        <div className="hero">
          <div className="hero__logo">
            <KevinThreeD />
          </div>
          <h1 className="hero__legend">Développeur Web Fullstack</h1>
          <ArrowDown />
          </div>

  );
}

export default Hero;
