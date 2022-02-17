import * as React from "react";
import AboutSummary from "../About/AboutSummary";

interface IJigsawContentProps {
  selection: number;
}

const JigsawContent: React.FunctionComponent<IJigsawContentProps> = (props) => {
  switch (props.selection) {
    case 1:
      return <AboutSummary />;
    default:
      return <></>;
  }
};

export default JigsawContent;
