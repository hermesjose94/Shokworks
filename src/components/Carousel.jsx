import React, { useState } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Item from "./ItemCarousel.jsx";
import "../assets/styles/components/Carousel.scss";

const Carousel = ({ items, active, direction }) => {
  const [state, setState] = useState({
    items: items,
    active: active,
    direction: "",
  });

  const generateItems = () => {
    var items = [];
    var level;
    for (let i = state.active - 2; i < state.active + 3; i++) {
      var index = i;
      if (i < 0) {
        index = state.items.length + i;
      } else if (i >= state.items.length) {
        index = i % state.items.length;
      }
      level = state.active - i;

      items.push(<Item key={index} item={state.items[index]} level={level} />);
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
    <div className="carouselContent">
      <div id="carousel" className="noselect">
        <div className="arrow arrow-left" onClick={moveLeft}>
          <FontAwesomeIcon icon={["fas", "arrow-left"]} />
        </div>
        <ReactCSSTransitionGroup transitionName={state.direction}>
          {generateItems()}
        </ReactCSSTransitionGroup>
        <div className="arrow arrow-right" onClick={moveRight}>
          <FontAwesomeIcon icon={["fas", "arrow-right"]} />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
