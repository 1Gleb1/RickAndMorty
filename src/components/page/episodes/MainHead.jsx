import React from "react";
import logo from "../../../image/rick-and-morty2 1.svg";
import search from "../../../image/search.svg";

const MainHead = ({ nameFilter, setNameFilter }) => {
  return (
    <div>
      <h1 className="main__logo">
        <img src={logo} alt="Rick and Morty logo" width="600" height="200" />
      </h1>
      <div className="main__controls block_filter">
        <div className="search button button-search">
          <img className="search__icon" src={search} alt="search" />
          <input
            value={nameFilter}
            onChange={(e) => setNameFilter(e.target.value)}
            className="input"
            placeholder="Filter by name..."
          />
        </div>
      </div>
    </div>
  );
};

export default MainHead;
