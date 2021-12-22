import { Avatar, Grid } from "@mui/material";
import { FC } from "react";

import classes from "./About.module.css";
import profileImage from "../../Static/Images/JoabSmith.jpg"

const About:FC = (props) => {
    return (
        <>
            <Grid container justifyContent="center" id="about" alignItems="center" style={{ padding: "5%" }} justifyItems="center">
            <Grid item sm={12} md={6} className={classes.avatar_box}>
                <Avatar alt="Joab Smith" src={profileImage} sx={{ width: 200, height: 200 }} className={classes.avatar} />
            </Grid>
            <Grid item sm={12} md={6}>

                    <div className={classes.aboutme}>
                        <h3>About Me</h3>
                        <br />
                        I am a full stack developer who has worked with technologies including vanilla Javascript, Node.js, React, and React Native.
                    I worked with a team to develop a mobile application that implemented a serverless backend using AWS. Currently I am branching out with other languages for use in personal projects.
                </div>
            </Grid>
            </Grid>
        </>
    );
}

export default About;