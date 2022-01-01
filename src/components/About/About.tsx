import { Avatar, Grid } from "@mui/material";
import { FC, useEffect, useState } from "react";

import classes from "./About.module.css";
import profileImage from "../../Static/Images/JoabSmith.jpg"
import linkedinIcon from "../../Static/Images/linkedin.png"
import githubIcon from "../../Static/Images/github-logo.png"
import emailIcon from "../../Static/Images/email.png"

const About: FC = (props) =>
{
    const [resumeURL, setResumeURL] = useState("");
    useEffect(() =>
    {
        getResumeURL();
    },[])

    const getResumeURL = async() =>
    {
        const response = await fetch('%PUBLIC_URL%/JoabSmithResume.pdf');
        let blob = await response.blob();
        let URL = window.URL.createObjectURL(blob);

        setResumeURL(URL);
    }
    
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
                        <div className={classes.links}>
                            <a href="http://www.linkedin.com/in/joab-smith">
                                <img src={linkedinIcon} alt="linkedin"/>
                            </a>
                            <a href="https://github.com/j-m-smith426">
                                <img src={githubIcon} alt="github"/>
                            </a>
                            <a href="./">
                            <img src={emailIcon} alt="email"/>
                            </a>
                            <a className={classes.resumeLink} href={resumeURL} download={"JoabSmithResume.pdf"}>Download Resume</a>
                        </div>
                </div>
            </Grid>
            </Grid>
        </>
    );
}

export default About;