import "../blocks/header.css";
import logoSvg from "../assets/logo.svg";
import { useState } from "react";
import Button from "./Button";

function Header() {
  // const [popupOpen, setPopupOpen] = useState(false);

  return (
    <>
      <header className="header">
        <img src={logoSvg} alt="Logo" />
        <h2 className="header__title">SPOTS</h2>
        {/* <Button /> */}
        {/* <h2
          className="navbar"
          onMouseEnter={() => setPopupOpen(true)}
          onMouseLeave={() => setPopupOpen(false)}
        >
          SPECIAL NAVBAR
        </h2> */}
      </header>
      {/* <div
        className={`navbar-popup ${popupOpen ? "navbar-popup_is-open" : ""}`}
      >
        <ul className="navbar-popup__list">
          <li className="navbar-popup__list-item">TEST 1</li>
          <li className="navbar-popup__list-item">TEST 2</li>
          <li className="navbar-popup__list-item">TEST 3</li>
          <li className="navbar-popup__list-item">TEST 4</li>
        </ul>
      </div> */}
    </>
  );
}

export default Header;
