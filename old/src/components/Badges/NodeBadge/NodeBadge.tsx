import React from "react";
import Badge from "../Badge/Badge";
import { images } from "../../../constants";

const NodeBadge = () => {
  const { NodeLogo } = images;
  return (
    <Badge>
      <NodeLogo />
      <p>Node.js</p>
    </Badge>
  );
};

export default NodeBadge;
