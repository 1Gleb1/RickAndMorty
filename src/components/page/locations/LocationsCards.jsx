import React from "react";
import Location from "../../location/Location";

const LocationsCards = ({ locations, info, loadMore }) => {
  return (
    <div>
      <div className="locations">
        {locations.map((location) => (
          <Location
            key={location.name}
            name={location.name}
            type={location.type}
            dimension={location.dimension}
            id={location.id}
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

export default LocationsCards;
