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
        <Fragment>
            
            <NavBar />
            <a id="about"></a>
            <div className={classes.content}>
                <List>
                    <ListItem className={classes.section}>
                        <About />

                    </ListItem >
                    <a id="skills"></a>
                    <Divider />
                    <ListItem className={classes.section}>
                        <Skills />

                    </ListItem>
                    <Divider />
                    <ListItem className={classes.section}>
                        <Projects />

                    </ListItem>
                    <Divider />
                    <ListItem className={classes.section}>
                        <History />

                    </ListItem>
                    <Divider />
                </List>
            </div>
        </Fragment>
    );
}

export default MainScreen;