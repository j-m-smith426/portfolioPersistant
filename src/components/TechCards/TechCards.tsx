/// <reference types="vite-plugin-svgr/client" />

import React from 'react';
import Card from '../Card/Card';
import JS from "../../assets/javascript.svg";


import "./TechCards.scss";
type Props = {}

const TechCards = (props: Props) => {
  return (
      <div className="tech_cards">
          <Card size="sm">JavaScript</Card>
          <Card size="sm">React</Card>
          <Card size="sm">CSS</Card>
          <Card size="sm">HTML</Card>
          <Card size="sm">Typescript</Card>
          <Card size="sm">Node.js</Card>
          <Card size="sm">Express</Card>
          <Card size="sm">Docker</Card>
          <Card size="sm">AWS</Card>
      </div>
  )
}

export default TechCards