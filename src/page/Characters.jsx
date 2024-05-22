import React, { useEffect, useState } from "react";
import CharacterService from "../api/characterService";
import axios from "axios";
import MainHead from "../components/page/characters/MainHead";
import CharactersCards from "../components/page/characters/CharactersCards";
import "../style/Characters.css";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [nameFilter, setNameFilter] = useState("");
  const [speciesFilter, setSpeciesFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  async function fetchByFilter(name, species, gender, status) {
    const filterCharacters = await CharacterService.getByFilter(
      name,
      species,
      gender,
      status
    );
    setCharacters(filterCharacters.results);
    setInfo(filterCharacters.info);
  }

  async function loadMore(url) {
    const nextPage = await axios.get(url);
    setCharacters([...characters, ...nextPage.data.results]);
    setInfo(nextPage.data.info);
  }

  useEffect(() => {
    fetchByFilter(nameFilter, speciesFilter, genderFilter, statusFilter);
  }, [nameFilter, speciesFilter, genderFilter, statusFilter]);

  return (
    <div className="wrapper">
      <MainHead
        nameFilter={nameFilter}
        setNameFilter={setNameFilter}
        speciesFilter={speciesFilter}
        setSpeciesFilter={setSpeciesFilter}
        genderFilter={genderFilter}
        setGenderFilter={setGenderFilter}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />
      <CharactersCards
        characters={characters}
        info={info}
        loadMore={loadMore}
      />
    </div>
  );
};

export default Characters;
