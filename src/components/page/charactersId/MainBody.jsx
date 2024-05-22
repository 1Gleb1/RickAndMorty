import React from "react";
import Content from "../../characterId/Content";
import Episode from "../../episode/Episode";

const MainBody = ({ character, episodes, locationId }) => {
  return (
    <div>
      <div className="body_character">
        <div className="info">
          <span className="info__text">Information</span>
          <div className="info__content">
            <Content
              gender={character.gender}
              status={character.status}
              origin={character.origin?.name}
              species={character.species}
              type={character.type}
              location={character.location?.name}
              locationId={locationId}
            />
          </div>
        </div>
        <div className="info">
          <span className="info__text">Episodes</span>
          <div className="info__episode">
            <div>
              {episodes.map((url) => (
                <Episode key={url} url={url} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBody;
