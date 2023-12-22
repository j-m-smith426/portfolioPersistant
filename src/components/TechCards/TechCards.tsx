

import React from 'react';
import Card from '../Card/Card';
import {ReactComponent as JS} from "../../assets/javascript.svg";
import {ReactComponent as ReactIcon} from "../../assets/react.svg";
import {ReactComponent as Css} from "../../assets/css-3.svg";
import {ReactComponent as Html} from "../../assets/html-5.svg";
import {ReactComponent as Ts} from "../../assets/typescript-icon.svg";
import {ReactComponent as Node} from "../../assets/nodejs-icon.svg";
import {ReactComponent as Express} from "../../assets/express.svg";
import {ReactComponent as Docker} from "../../assets/docker-icon.svg";
import {ReactComponent as Aws} from "../../assets/aws.svg";


import "./TechCards.scss";
type Props = {}

const TechCards = (props: Props) => {
  return (
      <div className="tech_cards">
      <Card size="sm"><JS /><p>JavaScript</p></Card>
      <Card size="sm"><ReactIcon /><p>React</p></Card>
      <Card size="sm"><Css /><p>CSS</p></Card>
      <Card size="sm"><Html /><p>HTML</p></Card>
      <Card size="sm"><Ts /><p>Typescript</p></Card>
      <Card size="sm"><Node /><p>Node.js</p></Card>
      <Card size="sm"><Express /><p>Express</p></Card>
      <Card size="sm"><Docker /><p>Docker</p></Card>
      <Card size="sm"><Aws /><p>AWS</p></Card>
      </div>
  )
}

export default TechCards