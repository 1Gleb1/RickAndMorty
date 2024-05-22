import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const MainHead = ({ image, name }) => {
  const route = useNavigate();

  return (
    <div>
      <div className="head">
        <button onClick={() => route(-1)} className="back">
          <FontAwesomeIcon icon={faArrowLeft} />
          <span>Go back</span>
        </button>
        <div className="avatar">
          <img className="avatar__image" src={image} />
          <span className="avatar__name">{name}</span>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default MainHead;
