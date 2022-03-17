import React from "react";
import { badges } from "../../constants";

import "./Skills.scss";

const Skills = () => {
  return (
    <div className="app__skills-box">
      <a id="Skills" className="anchor" />
      <h3>Skills</h3>
      <div className="app__skills-frontend">
        <p>Frontend Skills</p>
        <div className="badge-list">
          <badges.ReactBadge />
          <badges.HTMLBadge />
          <badges.CSSBadge />
          <badges.SCSSBadge />
        </div>
      </div>
      <div className="app__skills-backend ">
        <p>Backend Skills</p>
        <div className="badge-list">
          <badges.NodeBadge />
          <badges.SpringBootBadge />
        </div>
      </div>
      <div className="app__skills-languages">
        <p>Known Languages</p>
        <div className="badge-list">
          <badges.JavaScriptBadge />
          <badges.JavaBadge />
        </div>
      </div>
    </div>
  );
};

export default Skills;
