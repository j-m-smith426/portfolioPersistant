import React, { useContext, useEffect, useState } from 'react'
import "./Bio.scss";
import { bio, getBio, project } from '../../sanitysetup';
import { DispatchContext } from '../../utility/contextConstructors';
type Props = {}

const Bio = (props: Props) => {
  const [bio, setBiography] = useState<bio>();
  useEffect(() => {
    getBiography();
  })

  // Retreive Biography Information
  const getBiography = async () => {
    const bioData:bio | null = await getBio();
    bioData && setBiography(bioData);
  }

  // Pull dispatch function into component
  const dispatch = useContext(DispatchContext);

  // Show model with new Info on Click
  const handleClick = (data: project) => {
    dispatch({
      type: "UPDATE",
      payload: data
    })
  }
  return (
    <div className='bio'>
        <h3>Bio</h3>
        <p>{bio && bio.Summary}</p>
    </div>
  )
}

export default Bio