import { FC, Fragment } from "react";
import About from "../../components/About/About";
import History from "../../components/History/History";
import NavBar from "../../components/NavBar/NavBar";
import Projects from "../../components/Projects/Projects";
import Skills from "../../components/Skills/Skills";

const MainScreen:FC = (props) => {
    return (
        <Fragment>
            <div>
            <NavBar />
            </div>
            <About />
            <Skills />
            <Projects />
            <History />
        </Fragment>
    );
}

export default MainScreen;