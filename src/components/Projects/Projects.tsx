import React, { useContext, useEffect, useState } from 'react';
import Card from '../Card/Card';

import "./Projects.scss";
import { getProjects, project } from '../../sanitysetup';
import Button from '../Button/Button';
import { DispatchContext } from '../../utility/contextConstructors';
type Props = {}

const Projects = (props: Props) => {
  const [projects, setProjects] = useState<project[]>([]);
  useEffect(() => {
    getProject();
  })

  //Retrieve List of Projects
  const getProject = async () => {
    const projData:project[] = await getProjects();
    setProjects(projData);
  }
  // Pull dispatch function into component
  const dispatch = useContext(DispatchContext);

  // Show model with new Info on Click
  const handleClick = (data:project) => {
    dispatch({
      type: "updateInfo",
      payload: data
    })
  }

  const projectElements = projects.map((project) => (
    <Card size='m' className='long even' key={project._id}>
      <h3>{project.title}</h3>
      <div className='row'>
        {/* {!project.professional && (<div className="img_holder"></div>)} */}
        <p>{project.Summary}</p>
        <div className="tech_cards">
        {project.techstack.map((tech) => (<Card size="sm" className='even'>{tech.skill}</Card>))}
        </div>
        <Button size='sm' className='link hover' onClick={() => handleClick(project)}>Learn more</Button>
        
      </div>
    </Card>
  ))

  return (
    <>
          <h3 className="projects_title">Projects</h3>
      <div className="projects">
      {projectElements}
      </div>
      </>
  )
}

export default Projects