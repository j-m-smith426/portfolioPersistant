import React, { ReactNode } from 'react'

import "./Card.scss";

type Size = "sm" | "m" | "l";

type Props = {
    children: ReactNode;
    size: Size
}

const Card = (props: Props) => {
  return (
    <div className={`card ${props.size}`}>{props.children}</div>
  )
}

export default Card