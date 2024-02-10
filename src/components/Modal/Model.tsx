import React, { useContext } from 'react'

import "./Model.scss";
import { project } from '../../sanitysetup';
import { DispatchContext } from '../../utility/contextConstructors';
import Button from '../Button/Button';
import { modelInfo } from '../../utility/modelReducer';

type Props = {
  hidden:boolean,
  data: modelInfo
}

const Model = (props: Props) => {

  // Pull dispatch function into component
  const dispatch = useContext(DispatchContext);

  // Show model with new Info on Click
  const handleClick = () => {
    dispatch({
      type: "hide",
      payload: {}
    })
  }

  //Determine which body to show.
  const content = () => {
    
  }

  return (
    <>
    <div className={`modal ${props.hidden && 'hidden'}`}>
      <div className="modal_bg" />
    <div className="modal_content">
        
      <Button size='sm' className='' onClick={() => handleClick()}>Close</Button>
      </div>
    </div>
      </>
  )
}

export default Model