import React from "react";
import Badge from "../Badge/Badge";
import { images } from "../../../constants";

const SpringFrameworkBadge = () => {
  const { SpringLogo } = images;
  return (
    <Badge>
      <img src={SpringLogo} alt="Spring Framework Logo" />
      <p>
        Spring Framework <p>tm</p>
      </p>
    </Badge>
  );
};

export default SpringFrameworkBadge;
