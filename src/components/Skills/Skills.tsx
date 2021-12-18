import { Grid } from "@mui/material";
import { FC } from "react";

import skillList from "../../Static/Data/Skills.json"
import BaseDropdown from "../../util/BaseDropdown/BaseDropdown";
import classes from "./Skills.module.css";

const Skills: FC = (props) =>
{
    const dropdowns = skillList.skills.map((catagory, index) => (
        <Grid item sm={12} md={4} key={index} className={classes.item}>
            <BaseDropdown title={catagory.Title} content={catagory.skills} toggle />
        </Grid>
    ))
    return (
        <>

            <Grid container id="skills" columnSpacing={2} className={classes.container}>
                <Grid item xs={12} className={classes.item}>
                    <h3>Skills</h3>
                </Grid>
                {dropdowns}
            </Grid></>
    );
}

export default Skills;