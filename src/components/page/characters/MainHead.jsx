import React from "react";
import FilterSelect from "../../select/FilterSelect";
import logo from "../../../image/mainLogo.svg";
import search from "../../../image/search.svg";

const MainHead = ({
  nameFilter,
  setNameFilter,
  speciesFilter,
  setSpeciesFilter,
  genderFilter,
  setGenderFilter,
  statusFilter,
  setStatusFilter,
}) => {
  return (
    <div className="wrapper">
      <h1 className="main__logo">
        <img src={logo} alt="Rick and Morty logo" />
      </h1>
      <div className="main__controls">
        <div className="block_filter">
          <div className=" button button-search">
            <img className="search__icon" src={search} alt="search" />
            <input
              value={nameFilter}
              onChange={(e) => setNameFilter(e.target.value)}
              className="input"
              placeholder="Filter by name..."
            />
          </div>
          <FilterSelect
            value={speciesFilter}
            onChange={setSpeciesFilter}
            options={[
              { value: "" },
              { value: "human" },
              { value: "alien" },
              { value: "unknown" },
            ]}
            defaultValue={"Species"}
          />
          <FilterSelect
            value={genderFilter}
            onChange={setGenderFilter}
            options={[
              { value: "" },
              { value: "female" },
              { value: "male" },
              { value: "genderless" },
              { value: "unknown" },
            ]}
            defaultValue={"Gender"}
          />
          <FilterSelect
            value={statusFilter}
            onChange={setStatusFilter}
            options={[
              { value: "" },
              { value: "alive" },
              { value: "dead" },
              { value: "unknown" },
            ]}
            defaultValue={"Status"}
          />
        </div>
      </div>
    </div>
  );
};

export default MainHead;
