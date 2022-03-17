import React from "react";
import Badge from "../Badge/Badge";
import { images } from "../../../constants";

const JavaBadge = () => {
  const { JavaLogo } = images;
  return (
    <Badge>
      <JavaLogo />
      <p>Java</p>
    </Badge>
  );
};

export default JavaBadge;
