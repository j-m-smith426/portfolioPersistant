import * as React from "react";
import JigsawPiece from "./JigsawPiece";

import "./Jigsaw.css";

interface IJigsawMainProps {}

const JigsawMain: React.FunctionComponent<IJigsawMainProps> = (props) => {
  const [selected, setSelected] = React.useState<Number | null>(null);

  React.useEffect(() => {
    setSelected(null);
  }, []);

  const setAboutClass = (): string => {
    if (selected === 1) {
      return "selected";
    }
    if (selected) {
      return "hidden";
    }
    return "";
  };
  const setSkillsClass = (): string => {
    if (selected === 2) {
      return "selected";
    }
    if (selected) {
      return "hidden";
    }
    return "";
  };
  const setProjectClass = (): string => {
    if (selected === 3) {
      return "selected";
    }
    if (selected) {
      return "hidden";
    }
    return "";
  };
  const setContactClass = (): string => {
    if (selected === 4) {
      return "selected";
    }
    if (selected) {
      return "hidden";
    }
    return "";
  };
  return (
    <div className="main_container">
      <JigsawPiece
        topLeft
        className={setAboutClass()}
        title="About"
        onClick={setSelected}
      />
      <JigsawPiece
        topRight
        className={setSkillsClass()}
        title="Skills"
        onClick={setSelected}
      />
      <JigsawPiece
        botLeft
        className={setProjectClass()}
        title="Project"
        onClick={setSelected}
      />
      <JigsawPiece
        botRight
        className={setContactClass()}
        title="Contact"
        onClick={setSelected}
      />
    </div>
  );
};

export default JigsawMain;
