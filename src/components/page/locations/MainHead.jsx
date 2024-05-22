import React from "react";
import logo from "../../../image/rick-and-morty 1.svg";
import search from "../../../image/search.svg";
import FilterSelect from "../../select/FilterSelect";

const MainHead = ({
  nameFilter,
  setNameFilter,
  typeFilter,
  setTypeFilter,
  dimensionFilter,
  setDimensionFilter,
}) => {
  return (
    <div>
      <h1 className="main__logo">
        <img src={logo} alt="Rick and Morty logo" width="600" height="200" />
      </h1>

      <div className="main__controls">
        <div className="block_filter">
          <div className="search button button-search">
            <img className="search__icon" src={search} alt="search" />
            <input
              value={nameFilter}
              onChange={(e) => setNameFilter(e.target.value)}
              className="input"
              placeholder="Filter by name..."
            />
          </div>
          <FilterSelect
            options={[
              { value: "" },
              { value: "Dimension" },
              { value: "Planet" },
              { value: "Menagerie" },
              { value: "Game" },
              { value: "unknown" },
            ]}
            defaultValue={"Type"}
            value={typeFilter}
            onChange={setTypeFilter}
          />
          <FilterSelect
            options={[
              { value: "" },
              { value: "Dimension C-500A" },
              { value: "Testicle Monster Dimension" },
              { value: "Replacement Dimension" },
              { value: "Dimension K-83" },
              { value: "unknown" },
            ]}
            defaultValue={"Dimension"}
            value={dimensionFilter}
            onChange={setDimensionFilter}
          />
        </div>
      </div>
    </div>
  );
};

export default MainHead;
