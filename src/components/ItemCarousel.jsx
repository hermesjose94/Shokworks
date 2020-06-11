import React from "react";
// import { useState } from "react";
import Img1 from "../assets/images/icon1.png";
import Img2 from "../assets/images/icon2.png";
import Img3 from "../assets/images/icon3.png";
import Img4 from "../assets/images/icon4.png";

const ItemCarousel = ({ level, item }) => {
  //   const [state, setState] = useState({
  //     level: level,
  //   });
  console.log("ITEM=>", item);

  return (
    <a href={item.url} target="_blank">
      <div className={`item level${level}`}>
        <div className="content">
          <img src={item.urlToImage} alt={item.author} />
          <h2>{item.author}</h2>
          <div>
            <p>{item.description}</p>
            <p>. . .</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ItemCarousel;
