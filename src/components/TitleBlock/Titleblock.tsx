import React, { useContext } from 'react';

import "./TitleBlock.scss";
import Button from '../Button/Button';
import { project } from '../../sanitysetup';
import { DispatchContext } from '../../utility/contextConstructors';
type Props = {}

function Titleblock({}: Props) {

    // Pull dispatch function into component
    const dispatch = useContext(DispatchContext);


  return (
      <div className="title_block">
          <div className="title_block--left">
              <h1>Joab Smith</h1>
              <h2>Software Developer</h2>
          </div>
          <div className="title_block--right">
              <p>A recent Graduate looking for my first job as a junior Software Engineer</p>
              <Button size='sm' className='link end'><a href='https://j-m-smith426.github.io/HTML-Resume/'>{`View resume =>`}</a></Button>
          </div>
      </div>
  )
}

export default Titleblock