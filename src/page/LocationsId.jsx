import React, { useEffect, useState } from "react";
import "../style/LocationsId.css";
import { useParams } from "react-router-dom";
import LocationService from "../api/locationService";
import MainHead from "../components/page/locationsId/MainHead";
import MainBody from "../components/page/locationsId/MainBody";
import Loader from "../components/loader/Loader";

const LocationsId = () => {
  const [location, setLocation] = useState({});
  const [charactersUrl, setCharactersUrl] = useState([]);

  const params = useParams();

  async function fetchById(id) {
    const location = await LocationService.getById(id);
    setLocation(location);
    setCharactersUrl(location.residents);
  }

  useEffect(() => {
    fetchById(params.id);
  }, []);

  return (
    <div className="wrapper">
      {location.id ? (
        <>
          <MainHead
            name={location.name}
            type={location.type}
            dimension={location.dimension}
          />
          <MainBody charactersUrl={charactersUrl} />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default LocationsId;
