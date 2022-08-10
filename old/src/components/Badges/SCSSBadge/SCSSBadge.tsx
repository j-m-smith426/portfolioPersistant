import React from "react";
import Badge from "../Badge/Badge";
import { images } from "../../../constants";

const SCSSBadge = () => {
  const { SCSSLogo } = images;
  return (
    <Badge>
      <SCSSLogo />
      <p>SCSS</p>
    </Badge>
  );
};

export default SCSSBadge;
