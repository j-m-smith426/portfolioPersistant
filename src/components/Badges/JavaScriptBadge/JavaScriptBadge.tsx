import React from "react";
import Badge from "../Badge/Badge";
import { images } from "../../../constants";

const JavaScriptBadge = () => {
  const { JSLogo } = images;
  return (
    <Badge>
      <JSLogo />
      <p>Javascript</p>
    </Badge>
  );
};

export default JavaScriptBadge;
