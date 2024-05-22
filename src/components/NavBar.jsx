import React, { useState } from "react";
import logo from "../image/menuLogo.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const [active, setActive] = useState(true);

  return (
    <header className="header">
      <div className="wrapper">
        <div className="header__inner">
          <Link to="/characters" className="logo">
            <img src={logo} alt="Rick and Morty home" width="46" height="49" />
          </Link>
          <nav className="sidebar">
            <div className="sidebar-list">
              <Link to="/">Characters</Link>
              <Link to="/locations">Locations</Link>
              <Link to="/episodes">Episodes</Link>
            </div>
          </nav>

          <nav className={`burger_menu ${active ? "active" : ""}`}>
            <div className="burger_menu__list">
              <Link onClick={() => setActive(false)} to="/">
                Characters
              </Link>
              <Link onClick={() => setActive(false)} to="/locations">
                Locations
              </Link>
              <Link onClick={() => setActive(false)} to="/episodes">
                Episodes
              </Link>
            </div>
          </nav>
          <FontAwesomeIcon
            onClick={() => setActive(!active)}
            className="menuBtn"
            icon={!active ? faBars : faXmark}
          />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
