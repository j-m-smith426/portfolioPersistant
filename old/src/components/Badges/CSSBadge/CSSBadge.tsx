import React from "react";
import Badge from "../Badge/Badge";
import { images } from "../../../constants";

const CSSBadge = () => {
  const { CSSLogo } = images;
  return (
    <Badge>
      <CSSLogo />
      <p>CSS</p>
    </Badge>
  );
};

export default CSSBadge;
