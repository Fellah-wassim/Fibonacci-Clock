import React from "react";
import "./Navbar.css";
import { Github } from "../assets/icons/Github";
import { Info } from "../assets/icons/Info";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <a
        href="https://github.com/Fellah-wassim"
        target="_blank"
        rel="noreferrer"
      >
        <Github width="36" height="36" color="white" />
      </a>
      <div className="navbar-title">Fibonacci Clock</div>
      <div>
        <Info width="36" height="36" color="white" />
      </div>
    </nav>
  );
};

export default Navbar;
