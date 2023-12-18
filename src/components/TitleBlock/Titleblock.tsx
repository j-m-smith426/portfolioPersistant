import React from 'react'

type Props = {}

function Titleblock({}: Props) {
  return (
      <div className="title_block">
          <div className="title_block--left">
              <h1>Joab Smith</h1>
              <h2>Software Developer</h2>
          </div>
          <div className="title_block--right">
              <p>A recent Graduate looking for my first job as a junior Software Engineer</p>
          </div>
      </div>
  )
}

export default Titleblock