import React from "react";
import Character from "../../character/Character";
import Loader from "../../loader/Loader";

const CharactersCards = ({ characters, info, loadMore }) => {
  return (
    <div>
      {characters[0] ? (
        <div>
          <div className="characters">
            {characters.map((character) => (
              <Character
                key={character.id}
                image={character.image}
                name={character.name}
                species={character.species}
                id={character.id}
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
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default CharactersCards;
