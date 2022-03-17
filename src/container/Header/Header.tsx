import React, { Fragment } from "react";
import { images } from "../../constants";

import "./Header.scss";
const Header = () => {
  return (
    <Fragment>
      <div className="app__nav-spacer" />
      <div className="app__flex app__header">
        <div className="p-text">
          <p>Joab Smith</p>
          <p>Fullstack Developer</p>
        </div>
        <div className="app__header-img">
          <img src={images.profilePic} />
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
