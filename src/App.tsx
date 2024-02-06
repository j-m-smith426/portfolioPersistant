import "./App.css";
import Bio from "./components/Bio/Bio";
import Contact from "./components/Contact/Contact";
import Model from "./components/Modal/Model";
import Projects from "./components/Projects/Projects";
import TechCards from "./components/TechCards/TechCards";
import Titleblock from "./components/TitleBlock/Titleblock";

function App() {
	return (
		<div className="App">
			<Titleblock />
			<TechCards />
			<Projects />
			<Bio />
			<Contact />
			<Model />
		</div>
	);
}

export default App;
