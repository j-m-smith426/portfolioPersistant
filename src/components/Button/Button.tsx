import React, { ReactNode } from 'react'

import "./Button.scss";

type Size = "sm" | "m" | "l";

type Props = {
    children: ReactNode;
    size: Size;
    className: string;
}

const Card = (props: Props) => {
  return (
    <button className={`button ${props.size} ${props.className}`}>{props.children}</button>
  )
}

export default Card