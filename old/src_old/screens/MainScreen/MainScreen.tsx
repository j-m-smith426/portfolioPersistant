import { FC } from "react";



import About from "../../components/About/About";
import NavBar from "../../components/NavBar/NavBar";
import Projects from "../../components/Projects/Projects";
import Skills from "../../components/Skills/Skills";
import classes from "./MainScreen.module.css";

const MainScreen:FC = (props) => {
    return (
        
        <><div className={classes.nav}>
            <NavBar />
        </div><div className={classes.container}>
                <div className={classes.content}>
                    <About />
                    <Skills />
                    <Projects />

                </div>
            </div></>
        
    );
}

export default MainScreen;