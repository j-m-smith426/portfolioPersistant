import { FC } from "react";

import classes from "./NavBar.module.css";

const NavBar:FC = (props) => {
    return (
        <ul className={classes.ul}>
            <li className={classes.li}><a href="#">Hisory</a></li>
            <li className={classes.li}><a href="#">Projects</a></li>
            <li className={classes.li}><a href="#">Skills</a></li>
            <li className={classes.li}><a href="#">About</a></li>
        </ul>        
    );
}

export default NavBar;