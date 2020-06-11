import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../assets/styles/components/Search.scss";

const Search = () => (
  <div className="search">
    <div className="container">
      <span className="icon">
        <FontAwesomeIcon icon={["fas", "search"]} />
      </span>
      <input
        // onChange={onChange}
        type="search"
        id="search"
        placeholder="Search Here"
      />
    </div>
  </div>
);

export default Search;
