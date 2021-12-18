import { Divider, List, ListItem } from "@mui/material";
import { FC, Fragment } from "react";



import About from "../../components/About/About";
import History from "../../components/History/History";
import NavBar from "../../components/NavBar/NavBar";
import Projects from "../../components/Projects/Projects";
import Skills from "../../components/Skills/Skills";
import classes from "./MainScreen.module.css";

const MainScreen:FC = (props) => {
    return (
        <div className={classes.container}>
            <div>
            <NavBar />
            </div>
            <div className={classes.content}>
                <About />
                <Skills />
                <Projects />
                <History />
            </div>
        </div>
    );
}

export default MainScreen;