import React from "react";

const ItemCarousel = ({ level, item }) => {
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
