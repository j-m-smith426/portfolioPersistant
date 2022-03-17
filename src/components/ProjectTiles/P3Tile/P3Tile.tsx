import React from "react";
import TileBase from "../TileBase/TileBase";

const P3Tile = () => {
  const tech: string[] = ["React Native", "Node.js", "AWS"];
  const image: string =
    "https://github.com/Perfect-Personnel-Placement/frontend/blob/main/src/assets/images/MainTrainerScreen.png?raw=true";
  return <TileBase title="P3" image={image} summary="" tech={tech} />;
};

export default P3Tile;
