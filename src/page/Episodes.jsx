import React, { useEffect, useState } from "react";
import EpisodesService from "../api/episodeService";
import "../style/Episodes.css";
import axios from "axios";
import MainHead from "../components/page/episodes/MainHead";
import EpisodesCards from "../components/page/episodes/EpisodesCards";
import Loader from "../components/loader/Loader";

const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);
  const [info, setInfo] = useState({});
  const [nameFilter, setNameFilter] = useState("");

  async function fetchByFilter(name) {
    const episodes = await EpisodesService.getByFilter(name);
    setEpisodes(episodes.results);
    setInfo(episodes.info);
  }

  async function loadMore(url) {
    const nextPage = await axios.get(url);
    setEpisodes([...episodes, ...nextPage.data.results]);
    setInfo(nextPage.data.info);
  }

  useEffect(() => {
    fetchByFilter(nameFilter);
  }, [nameFilter]);

  return (
    <div className="wrapper">
      <MainHead nameFilter={nameFilter} setNameFilter={setNameFilter} />
      {episodes[0] ? (
        <EpisodesCards episodes={episodes} info={info} loadMore={loadMore} />
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Episodes;
