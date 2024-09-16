import React from "react";
import "./Navbar.css";
import { Github } from "../assets/icons/Github";
import { Info } from "../assets/icons/Info";
import usePopup from "../utils/hooks/usePopup";
import PopupContent from "./PopupContent";

const Navbar: React.FC = () => {
  const { displayPopup, PopupComponent } = usePopup();
  return (
    <nav className="navbar">
      <PopupComponent />
      <a
        href="https://github.com/Fellah-wassim"
        target="_blank"
        rel="noreferrer"
      >
        <Github width="36" height="36" color="white" />
      </a>
      <div className="navbar-title">Fibonacci Clock</div>
      <div className="info" onClick={() => displayPopup(<PopupContent />)}>
        <Info width="36" height="36" color="white" />
      </div>
    </nav>
  );
};

export default Navbar;
