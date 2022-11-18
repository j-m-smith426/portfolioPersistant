import React, { FC } from "react";

import "./Badge.scss";
const Badge: FC = (props) => {
  return <div className="app__badge">{props.children}</div>;
};

export default Badge;
