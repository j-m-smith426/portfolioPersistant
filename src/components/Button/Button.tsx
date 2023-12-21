import React, { ReactNode } from 'react'

import "./Button.scss";

type Size = "sm" | "m" | "l";

type Props = {
    children: ReactNode;
    size: Size
}

const Card = (props: Props) => {
  return (
    <div className={`${props.size} button`}>{props.children}</div>
  )
}

export default Card