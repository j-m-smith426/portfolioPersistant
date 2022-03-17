import React from "react";

import { projects } from "../../constants";

import "./Projects.scss";
const Projects = () => {
  return (
    <div className="app__project-box">
      <p id="Projects" className="anchor" />
      <h3>Projects</h3>
      <projects.P3Tile />
    </div>
  );
};

export default Projects;
