import { FC } from "react";
import AboutSummary from "../About/AboutSummary";

import "./Header.css";
const Header: FC = (props) => {
  return (
    <div className="header-box">
      <h1 className="title first-name">Joab</h1>
      <div className="middle divider" />
      <h1 className="title last-name">Smith</h1>
      <div className="title statement">
        <AboutSummary />
      </div>
    </div>
  );
};

export default Header;
