import { Grid } from "@mui/material";
import { FC } from "react";

import skillList from "../../Static/Data/Skills.json"
import BaseDropdown from "../../util/BaseDropdown/BaseDropdown";
import classes from "./Skills.module.css";

const Skills: FC = (props) =>
{
    const dropdowns = skillList.skills.map((catagory, index) => (
        <Grid item sm={12} md={6} key={index} className={classes.item}>
            <BaseDropdown title={catagory.Title} content={catagory.skills} toggle />
        </Grid>
    ))
    return (
        <>
           
            <Grid container className={classes.container}>
                <Grid item xs={12} className={classes.item}>
                Skills
                </Grid>
            {dropdowns}
        </Grid></>
    );
}

export default Skills;