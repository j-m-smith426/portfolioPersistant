import "./App.css";
import Card from "./components/Card/Card";
import Projects from "./components/Projects/Projects";
import TechCards from "./components/TechCards/TechCards";
import Titleblock from "./components/TitleBlock/Titleblock";

function App() {
	return (
		<div className="App">
			<Titleblock />
			<TechCards />
			<Projects />
		</div>
	);
}

export default App;
