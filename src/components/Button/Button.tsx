import React, { ReactNode } from 'react'

import "./Button.scss";

type Size = "sm" | "m" | "l";

type Props = {
    children: ReactNode;
    size: Size;
    className: string;
    type?: "submit" | "reset" | undefined;
    onClick?: () => void;
}

const Card = (props: Props) => {
  return (
    <button type={props.type && props.type} className={`button ${props.size} ${props.className}`} onClick={() => props.onClick && props.onClick()}>{props.children}</button>
  )
}

export default Card