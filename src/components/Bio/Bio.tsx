import React, { useEffect, useState } from 'react'
import "./Bio.scss";
import { bio, getBio, project } from '../../sanitysetup';
type Props = {}

const Bio = (props: Props) => {
  const [bio, setBiography] = useState<bio>();
  useEffect(() => {
    getBiography();
  })
  const getBiography = async () => {
    const bioData:bio | null = await getBio();
    bioData && setBiography(bioData);
  }
  return (
    <div>
        <h3>Bio</h3>
        <p>{bio && bio.Summary}</p>
    </div>
  )
}

export default Bio