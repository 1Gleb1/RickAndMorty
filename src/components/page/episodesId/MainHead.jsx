import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const MainHead = ({ name, episode, date }) => {
  const route = useNavigate();

  return (
    <div className="head">
      <button className="back" onClick={() => route(-1)}>
        <FontAwesomeIcon icon={faArrowLeft} />
        <span>Go back</span>
      </button>
      <div className="head__info">
        <h2 className="head__name">{name}</h2>
        <div className="head__description">
          <div>
            <span className="description__title">Episode</span>
            <p className="description__text">{episode}</p>
          </div>
          <div>
            <span className="description__title">Date</span>
            <p className="description__text">{date}</p>
          </div>
        </div>
      </div>
      <div style={{ width: "100px" }}></div>
    </div>
  );
};

export default MainHead;
