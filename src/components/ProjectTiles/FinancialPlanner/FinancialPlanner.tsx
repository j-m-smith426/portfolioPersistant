import React from "react";
import TileBase from "../TileBase/TileBase";

interface Props {}

const FinancialPlanner: React.FC<Props> = (props) => {
  const tech: string[] = [
    "JavaScript",
    "Java",
    "SpringBoot",
    "React",
    "MUI Framework",
  ];
  const image: string =
    "https://github.com/j-m-smith426/Financial_Front/raw/main/src/assets/Day-Populated.jpg?raw=true";
  return (
    <TileBase title="Financial Planner" summary="" image={image} tech={tech} />
  );
};

export default FinancialPlanner;
