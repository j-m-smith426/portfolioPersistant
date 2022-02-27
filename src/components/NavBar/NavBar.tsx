import { FC } from "react";

import "./Nav.css";

const NavBar: FC = () => {
  return (
    <div className="navbar">
      <ul className="nav-list">
        <li id="nameplate">Joab Smith</li>
        <li className="default nav-item">Contact</li>
        <li className="default nav-item">Projects</li>
        <li className="default nav-item">Skills</li>
        <li className="default nav-item">About</li>
        <li className="media nav-menu" id="nav-menu-icon">
          hamburger
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
