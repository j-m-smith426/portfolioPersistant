import { FC, ReactElement, useState } from "react";
import { JsxElement } from "typescript";

import classes from "./BaseDropdown.module.css";

interface IProps
{
    title: string;
    content: string[];
    toggle?: boolean;
}

const BaseDropdown: FC<IProps> = (props) =>
{
    const [isOpen, setIsOpen] = useState(false);

    const resolveClass = ():string => {
        const open:string = isOpen ? classes.active : "";
        return open;
        
    }


    const resolveTitle = ():ReactElement =>
    {
       return props.toggle ? (<span onClick={() => setIsOpen(prevState => !prevState)}>{props.title}</span>) :
        <span className={classes.title}>{props.title}</span>
    }
    console.log(props.content);

    return (
        <div className={classes.dropdown }>
            {resolveTitle()}
            {props.content.map((item, index) => (
                <div className={classes["dropdown-content"] + " " + resolveClass()} key={index}>
                    {item}
                </div>
            ))}
        </div>
    );
}

export default BaseDropdown;