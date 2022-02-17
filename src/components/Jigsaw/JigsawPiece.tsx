import * as React from "react";
import JigsawContent from "./JigsawContenet";

interface IJigsawPieceProps {
  topLeft?: boolean;
  botLeft?: boolean;
  topRight?: boolean;
  botRight?: boolean;
  className: string;
  title: string;
  onClick: React.Dispatch<React.SetStateAction<Number | null>>;
  bgImage: string;
}

const JigsawPiece: React.FC<IJigsawPieceProps> = (props) => {
  const { topLeft, topRight, botLeft, botRight, title } = props;
  const position =
    (topLeft && "topLeft") ||
    (topRight && "topRight") ||
    (botLeft && "botLeft") ||
    (botRight && "botRight");
  let value = 0;
  switch (title) {
    case "About":
      value = 1;
      break;
    case "Skills":
      value = 2;
      break;
    case "Project":
      value = 3;
      break;
    case "Contact":
      value = 4;
      break;
  }

  return (
    <div
      className={"piece " + position + " " + props.className}
      onClick={() => props.onClick(value)}
    >
      <div className="bg" />
      {props.className === "" && (
        <div className="text">
          <h2>{title}</h2>
        </div>
      )}
      {props.className === "selected" && <JigsawContent selection={value} />}
      <div className={"cover " + position} />
    </div>
  );
};

export default JigsawPiece;
