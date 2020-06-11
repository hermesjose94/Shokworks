import React from "react";

import "../assets/styles/components/Button.scss";

const Button = ({ title, active }) => (
  <button className={`button ${active}`}>{title}</button>
);

export default Button;
