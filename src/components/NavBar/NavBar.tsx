import { FC } from "react";

import classes from "./NavBar.module.css";

const NavBar:FC = (props) => {
    return (
        <ul className={classes.ul}>
            <li className={classes.name}>Joab Smith</li>
            {/* <li className={classes.li}><a href="#history">Hisory</a></li> */}
            <li className={classes.li}><a href="#projects">Projects</a></li>
            <li className={classes.li}><a href="#skills">Skills</a></li>
            <li className={classes.li}><a href="#about">About</a></li>
            <li className={classes.li}><a href="/">Home</a></li>
        </ul>        
    );
}

export default NavBar;