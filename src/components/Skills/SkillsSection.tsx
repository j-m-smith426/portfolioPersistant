import { FC } from "react";

import "./SkillsStyle.css";

const SkillsSection: FC = (props) => {
  return (
    <div className="section">
      <h3 className="title">Skills</h3>
      <div className="title list language">
        <h3>Languages</h3>
        <ul>
          <li>JavaScript</li>
          <li>Java</li>
        </ul>
      </div>
      <div className="title list frontend">
        <h3>Frontend Technology</h3>
        <ul>
          <li>React</li>
          <li>React Native</li>
          <li>HTML</li>
        </ul>
      </div>
      <div className="title list backend">
        <h3>Backend Technology</h3>
        <ul>
          <li>Node.js</li>
          <li>Springboot</li>
          <li>AWS</li>
        </ul>
      </div>
    </div>
  );
};

export default SkillsSection;
