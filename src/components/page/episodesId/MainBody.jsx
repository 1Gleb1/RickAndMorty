import React from "react";
import Character from "../../character/Character";

const MainBody = ({ charactersUrl }) => {
  return (
    <div className="body">
      <h3 className="body__title">Cast</h3>
      <div className="body__content">
        {charactersUrl.map((character) => (
          <Character key={character} url={character} />
        ))}
      </div>
    </div>
  );
};

export default MainBody;
