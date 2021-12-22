import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { List, ListItemButton, ListItemText, Collapse } from "@mui/material";
import { FC, ReactElement, useState } from "react";

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
    const handleClick = () =>
    {
        setIsOpen(prev => !prev);
    }
    
    const resolveContent = () =>
    {
        return props.content.map((item, index) => (
        <ListItemButton sx={{ pl: 4 }} key={index} className={classes.text}>
                <ListItemText primary={item} />
        </ListItemButton>
        ))
    }

    const resolveTitle = ():ReactElement =>
    {
        return (<>
            <ListItemText primary={props.title} />
      { isOpen ? <ExpandLess /> : <ExpandMore /> }
      </>)
    }

    return (
        <List>
        <ListItemButton onClick={handleClick}>
        {resolveTitle()}
      </ListItemButton>
            <Collapse in={isOpen
            } timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {resolveContent()}
        </List>
            </Collapse>
            </List>
    );
}

export default BaseDropdown;