import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Content = ({
  gender,
  status,
  origin,
  species,
  type,
  location,
  locationId,
}) => {
  return (
    <div>
      <div className="content_block">
        <span className="block__header">Gender</span>
        <p className="block__text">{gender}</p>
      </div>
      <div className="content_block">
        <span className="block__header">Status</span>
        <p className="block__text">{status}</p>
      </div>
      <div className="content_block">
        <span className="block__header">Species</span>
        <p className="block__text">{species}</p>
      </div>
      <div className="content_block">
        <span className="block__header">Origin</span>
        <p className="block__text">{origin}</p>
      </div>
      <div className="content_block">
        <span className="block__header">Type</span>
        <p className="block__text">{type || "unknown"}</p>
      </div>
      <div className="content_block">
        <Link
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          to={`/location/${locationId}`}
        >
          <div>
            <span className="block__header">Location</span>
            <p className="block__text">{location}</p>
          </div>
          <FontAwesomeIcon icon={faAngleRight} />
        </Link>
      </div>
    </div>
  );
};

export default Content;
