import React from 'react';
import './Rocket.scss';
import RocketLogo from "../../assets/rocket.svg";

const Rocket = () => {
  return (
    <div className="rocket-container">
      <img src={RocketLogo} alt="rocketman" className="rocket" />
      <div className="exhaust-flame"></div>
    </div>
  );
};

export default Rocket;
