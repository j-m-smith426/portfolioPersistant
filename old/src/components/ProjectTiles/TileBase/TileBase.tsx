import React, { FC } from "react";
import "./TileBase.scss";

interface ITileBaseProps {
  image: string;
  title: string;
  summary: string;
  tech: string[];
}

const TileBase: FC<ITileBaseProps> = (props) => {
  return (
    <div className="app__tileBase-box">
      <h3>{props.title}</h3>
      <img src={props.image} alt="project" />
      <div className="app__tile-info">
        <p>{props.summary}</p>
        <p>Technology used</p>
        <ul>
          {props.tech.map((tech) => (
            <li key={props.title + "-" + tech}>{tech}</li>
          ))}
        </ul>
      </div>
      {/* <a href="#">Learn more</a> */}
    </div>
  );
};

export default TileBase;
