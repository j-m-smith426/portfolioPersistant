import React from 'react';
import Card from '../Card/Card';

import "./Projects.scss";
type Props = {}

const Projects = (props: Props) => {
  return (
      <div className="projects">
          <h3 className="projects_title">Projects</h3>
          <Card size='m'>P1</Card>
          <Card size='m'>P2</Card>
          <Card size='m'>P3</Card>
          <Card size='m'>P4</Card>
      </div>
  )
}

export default Projects