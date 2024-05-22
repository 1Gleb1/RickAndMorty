import React from "react";
import "./location.css";
import { Link } from "react-router-dom";

const Location = ({ name, type, dimension, id }) => {
  return (
    <Link to={`/location/${id}`}>
      <div className="location">
        <div className="location__card">
          <p className="card__name location__cut " title={name}>
            {name}
          </p>
          <span className="card__description location__cut" title="dimension">
            {dimension}
          </span>
        </div>
        <p className="card__description">{type}</p>
      </div>
    </Link>
  );
};

export default Location;
