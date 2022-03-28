import React from "react";
import Badge from "../Badge/Badge";
import { images } from "../../../constants";

const HTMLBadge = () => {
  const { HTMLLogo } = images;
  return (
    <Badge>
      <HTMLLogo />
      <p>HTML 5</p>
    </Badge>
  );
};

export default HTMLBadge;
