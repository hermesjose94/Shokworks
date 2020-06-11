import React from "react";

import "../assets/styles/components/Card.scss";

const Card = ({ logo }) => (
  <div className="card">
    <img src={logo} alt="LogoCard" />
    <a href="/">Learn More</a>
  </div>
);
export default Card;
