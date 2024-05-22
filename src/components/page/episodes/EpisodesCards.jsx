import React from "react";
import Episode from "../../episode/Episode";

const EpisodesCards = ({ episodes, info }) => {
  return (
    <div>
      <div className="episodes">
        {episodes.map((episode) => (
          <Episode
            key={episode.id}
            name={episode.name}
            air_date={episode.air_date}
            episode={episode.episode}
            id={episode.id}
          />
        ))}
      </div>
      {info.next && (
        <div className="load__button">
          <button onClick={() => loadMore(info.next)} className="loadMore">
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default EpisodesCards;
