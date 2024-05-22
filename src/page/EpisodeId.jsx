import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EpisodeService from "../api/episodeService";
import "../style/EpisodeId.css";
import MainHead from "../components/page/episodesId/MainHead";
import MainBody from "../components/page/episodesId/MainBody";
import Loader from "../components/loader/Loader";

const EpisodeId = () => {
  const [episode, setEpisode] = useState({});
  const [charactersUrl, setCharactersUrl] = useState([]);
  const params = useParams();

  async function fetchById(id) {
    const episode = await EpisodeService.getById(id);
    setEpisode(episode);
    setCharactersUrl(episode.characters);
  }

  useEffect(() => {
    fetchById(params.id);
  }, []);

  return (
    <div className="wrapper">
      {episode.id ? (
        <>
          <MainHead
            name={episode.name}
            episode={episode.episode}
            date={episode.air_date}
          />
          <MainBody charactersUrl={charactersUrl} />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default EpisodeId;
