import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CharacterService from "../api/characterService";
import "../style/CharacterId.css";
import Loader from "../components/loader/Loader";
import MainHead from "../components/page/charactersId/MainHead";
import MainBody from "../components/page/charactersId/MainBody";

const CharacterId = () => {
  const [character, setCharacter] = useState({});
  const [locationId, setLocationId] = useState("");
  const [episodes, setEpisodes] = useState([]);
  const params = useParams();

  async function fetchById(id) {
    const character = await CharacterService.getById(id);
    const locationUrl = character.location.url;
    const locationId = locationUrl.split("/")[5];

    setEpisodes(character.episode);
    setCharacter(character);
    setLocationId(locationId);
  }

  useEffect(() => {
    fetchById(params.id);
  }, []);

  return (
    <div className="wrapper">
      {character.id ? (
        <>
          <MainHead image={character.image} name={character.name} />
          <MainBody
            character={character}
            episodes={episodes}
            locationId={locationId}
          />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default CharacterId;
