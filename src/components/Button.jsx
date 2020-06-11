import React from "react";

import "../assets/styles/components/Button.scss";

const Button = ({ title, active }) => (
  <button className={`button ${active}`}>
    <span className="titleBtn"> {title}</span>
  </button>
);

export default Button;
