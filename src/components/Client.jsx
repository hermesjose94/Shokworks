import React from "react";
//Importando Archivos
import comR from "../assets/images/quote-right.svg";
import comL from "../assets/images/quote-left.svg";

const Client = ({ level, item, imgage }) => (
  <div className={`item level${level}`}>
    <img className="cover" src={imgage.url} alt="People" />
    <div className="comments">
      <img src={comL} alt="ComillaL" />
      <p>{item.body}</p>
      <img src={comR} alt="ComillaR" />
    </div>
    <div className="title">
      <h1>{item.title}</h1>
      <h3>{item.title.substr(0, 20)}</h3>
    </div>
  </div>
);

export default Client;
