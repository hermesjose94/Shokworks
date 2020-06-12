import React, { useState } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Client from "./Client.jsx";
import "../assets/styles/components/ClientCarousel.scss";

const ClientCarousel = ({ items, active, photos }) => {
  const [state, setState] = useState({
    items: items,
    photos: photos,
    active: active,
    direction: "",
  });

  const generateItems = () => {
    var items = [];
    var level;
    var img = 1;
    for (let i = state.active - 2; i < state.active + 3; i++) {
      var index = i;
      if (i < 0) {
        index = state.items.length + i;
      } else if (i >= state.items.length) {
        index = i % state.items.length;
      }
      level = state.active - i;
      items.push(
        <Client
          key={index}
          item={state.items[index]}
          level={level}
          imgage={state.photos[index]}
        />
      );
    }
    return items;
  };

  const moveLeft = () => {
    var newActive = state.active;
    newActive--;

    setState({
      ...state,
      active: newActive < 0 ? state.items.length - 1 : newActive,
      direction: "left",
    });
  };

  const moveRight = () => {
    var newActive = state.active;
    setState({
      ...state,
      active: (newActive + 1) % state.items.length,
      direction: "right",
    });
  };

  return (
    <div className="carouselClientContent">
      <div id="carouselClient" className="noselect">
        <div className="arrow arrow-left" onClick={moveRight}>
          <FontAwesomeIcon icon={["fas", "arrow-left"]} />
        </div>
        <ReactCSSTransitionGroup transitionName={state.direction}>
          {generateItems()}
        </ReactCSSTransitionGroup>
        <div className="arrow arrow-right" onClick={moveLeft}>
          <FontAwesomeIcon icon={["fas", "arrow-right"]} />
        </div>
      </div>
    </div>
  );
};

export default ClientCarousel;
