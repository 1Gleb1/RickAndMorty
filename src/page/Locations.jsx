import React, { useEffect, useState } from "react";
import LocationService from "../api/locationService";
import "../style/Locations.css";
import axios from "axios";
import MainHead from "../components/page/locations/MainHead";
import LocationsCards from "../components/page/locations/LocationsCards";
import Loader from "../components/loader/Loader";

const Locations = () => {
  const [locations, setLocations] = useState([]);
  const [info, setInfo] = useState({});
  const [nameFilter, setNameFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [dimensionFilter, setDimensionFilter] = useState("");

  async function fetchByFilter(name, type, dimension) {
    const filterLocations = await LocationService.getByFilter(
      name,
      type,
      dimension
    );
    setLocations(filterLocations.results);
    setInfo(filterLocations.info);
  }

  async function loadMore(url) {
    const nextPage = await axios.get(url);
    setLocations([...locations, ...nextPage.data.results]);
    setInfo(nextPage.data.info);
  }

  useEffect(() => {
    fetchByFilter(nameFilter, typeFilter, dimensionFilter);
  }, [nameFilter, typeFilter, dimensionFilter]);

  return (
    <div className="wrapper">
      <MainHead
        nameFilter={nameFilter}
        setNameFilter={setNameFilter}
        typeFilter={typeFilter}
        setTypeFilter={setTypeFilter}
        dimensionFilter={dimensionFilter}
        setDimensionFilter={setDimensionFilter}
      />
      {locations[0] ? (
        <LocationsCards locations={locations} info={info} loadMore={loadMore} />
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Locations;
