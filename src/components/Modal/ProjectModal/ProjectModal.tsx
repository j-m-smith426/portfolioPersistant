import React from 'react'
import { project } from '../../../sanitysetup'

type Props = {
    project: project
}

const ProjectModal = (props: Props) => {
    const {project} = props;
  return (
    <div>
        <h2>{project.title}</h2>
        <p>{project.Summary}</p>
    </div>
  )
}

export default ProjectModal