import { Avatar, Grid } from "@mui/material";
import { FC } from "react";

import classes from "./About.module.css";
import profileImage from "../../Static/Images/JoabSmith.jpg"

const About:FC = (props) => {
    return (
        <><Grid container justifyContent="center" alignItems="center" style={{ minHeight: "100%", padding: "5%" }} justifyItems="center">
            <Grid item sm={12} md={6}>
                <Avatar alt="Joab Smith" src={profileImage} sx={{ width: 200, height: 200 }} className={classes.avatar} />
            </Grid>
            <Grid item sm={12} md={6}>

                <div className={classes.aboutme}>
                    I am a software engineer currently working for Cognizant through Revature. I have experience with React and cloud based React Native technologies.
                    Having been interested in programming for most of my life I took the first oppertunity I got out of Colledge to pursue a career in software programming.
                </div>
            </Grid>
        </Grid></>
    );
}

export default About;