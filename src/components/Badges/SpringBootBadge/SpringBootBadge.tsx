import React from "react";
import Badge from "../Badge/Badge";
import { images } from "../../../constants";

const SpringBootBadge = () => {
  const { SpringBootLogo } = images;
  return (
    <Badge>
      <div className="app__badge-img">
        <img src={SpringBootLogo} alt="Spring Boot Logo" />
      </div>
      <p>
        SpringBoot <p>tm</p>
      </p>
    </Badge>
  );
};

export default SpringBootBadge;
