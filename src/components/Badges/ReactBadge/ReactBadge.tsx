import React from "react";
import Badge from "../Badge/Badge";
import { images } from "../../../constants";

const ReactBadge = () => {
  const { ReactLogo } = images;
  return (
    <Badge>
      <ReactLogo />
      <p>React - React Native</p>
    </Badge>
  );
};

export default ReactBadge;
