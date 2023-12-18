import * as React from "react";
import Contact from "../sections/Contact/Contact";
import Footer from "../sections/Footer/Footer";
import Header from "../sections/Header/Header";
import Projects from "../sections/Projects/Projects";
import Skills from "../sections/Skills/Skills";
import Technology from "../sections/Technology/Technology";
import TopNav from "../sections/TopNav/TopNav";
import "./Main.scss";

export interface IMainProps {}

export const Main = (props: IMainProps) => {
	return (
		<div className="container">
			<TopNav />
			<Header />
			<Projects />
			{/* <Technology /> */}
			<Skills />
			<Contact />
			<Footer />
		</div>
	);
};
