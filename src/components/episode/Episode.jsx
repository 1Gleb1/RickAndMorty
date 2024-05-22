import React, { useEffect, useState } from "react";
import axios from "axios";
import "./episode.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Episode = ({ name, air_date, episode, id, url }) => {
  const [episodeFetch, setEpisodeFetch] = useState({});

  async function fetchByUrl(url) {
    const episode = await axios.get(url);
    setEpisodeFetch(episode.data);
  }

  useEffect(() => {
    fetchByUrl(url);
  }, []);

  return (
    <div>
      {!url && (
        <Link to={`/episode/${id}`}>
          <div className="episode">
            <div className="episode__card">
              <p className="card__name episode__cut" title={name}>
                {name}
              </p>
              <span className="card__description">{air_date}</span>
            </div>
            <p className="episode__code">{episode}</p>
          </div>
        </Link>
      )}
      {url && (
        <div className="episode__line">
          <Link
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            to={`/episode/${episodeFetch.id}`}
          >
            <div>
              <span className="line__head">{episodeFetch.episode}</span>
              <p className="line__name">{episodeFetch.name}</p>
              <p className="line__date">{episodeFetch.air_date}</p>
            </div>
            <FontAwesomeIcon color="gray" icon={faAngleRight} />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Episode;
