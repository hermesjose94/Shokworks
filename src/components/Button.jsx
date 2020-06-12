import React from "react";

import "../assets/styles/components/Button.scss";

const Button = ({ title, active, submit }) => (
  <button className={`button ${active}`} type={submit ? "submit" : "button"}>
    <span className="titleBtn"> {title}</span>
  </button>
);

export default Button;
