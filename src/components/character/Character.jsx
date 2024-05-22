import axios from "axios";
import React, { useEffect, useState } from "react";
import "./character.css";
import { Link } from "react-router-dom";

const Character = ({ image, name, species, id, url }) => {
  const [character, setCharacter] = useState({});

  async function fetchByUrl(url) {
    const character = await axios.get(url);
    setCharacter(character.data);
  }

  useEffect(() => {
    fetchByUrl(url);
  }, []);

  return (
    <div>
      {!url && (
        <Link to={`/character/${id}`}>
          <div className="character">
            <img className="character__img" src={image} alt={name} />
            <div className="character__description">
              <span className="character__name">{name}</span>
              <p className="character__species">{species}</p>
            </div>
          </div>
        </Link>
      )}
      {url && (
        <Link to={`/character/${character.id}`}>
          <div className="character">
            <img
              className="character__img"
              src={character.image}
              alt={character.name}
            />
            <div className="character__description">
              <span className="character__name">{character.name}</span>
              <p className="character__species">{character.species}</p>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
};

export default Character;
