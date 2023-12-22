import React from 'react';
import Card from '../Card/Card';

import "./Projects.scss";
type Props = {}

const Projects = (props: Props) => {
  return (
    <>
          <h3 className="projects_title">Projects</h3>
      <div className="projects">
      <Card size='m' className='long'>
        <h3>Title</h3>
        <div className='row'>
          <div className="img_holder"></div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis maxime mollitia dolor odit repellendus excepturi quae quaerat quidem facere fuga dicta voluptas magnam et, repellat earum voluptates ducimus sapiente a tempore distinctio illo? Molestias, sapiente temporibus cupiditate repellendus aliquam amet sunt nobis possimus eius fugiat doloribus exercitationem laborum accusamus enim!</p>
        </div>
      </Card>
      <Card size='m' className='long'>
        <h3>Title</h3>
        <div className='row'>
          <div className="img_holder"></div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis maxime mollitia dolor odit repellendus excepturi quae quaerat quidem facere fuga dicta voluptas magnam et, repellat earum voluptates ducimus sapiente a tempore distinctio illo? Molestias, sapiente temporibus cupiditate repellendus aliquam amet sunt nobis possimus eius fugiat doloribus exercitationem laborum accusamus enim!</p>
        </div>
      </Card>
      <Card size='m' className='long'>
        <h3>Title</h3>
        <div className='row'>
          <div className="img_holder"></div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis maxime mollitia dolor odit repellendus excepturi quae quaerat quidem facere fuga dicta voluptas magnam et, repellat earum voluptates ducimus sapiente a tempore distinctio illo? Molestias, sapiente temporibus cupiditate repellendus aliquam amet sunt nobis possimus eius fugiat doloribus exercitationem laborum accusamus enim!</p>
        </div>
      </Card>
      <Card size='m' className='long'>
        <h3>Title</h3>
        <div className='row'>
          <div className="img_holder"></div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis maxime mollitia dolor odit repellendus excepturi quae quaerat quidem facere fuga dicta voluptas magnam et, repellat earum voluptates ducimus sapiente a tempore distinctio illo? Molestias, sapiente temporibus cupiditate repellendus aliquam amet sunt nobis possimus eius fugiat doloribus exercitationem laborum accusamus enim!</p>
        </div>
      </Card>
      </div>
      </>
  )
}

export default Projects