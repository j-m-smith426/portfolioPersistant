import "./App.css";
import Titleblock from "./components/TitleBlock/Titleblock";

function App() {
	return (
		<div className="App">
			<Titleblock />
				<div className="tech_cards">
					<div className="card">JavaScript</div>
					<div className="card">React</div>
					<div className="card">CSS</div>
					<div className="card">HTML</div>
					<div className="card">Typescript</div>
					<div className="card">Node.js</div>
					<div className="card">Express</div>
					<div className="card">Docker</div>
					<div className="card">AWS</div>
				</div>
			
		</div>
	);
}

export default App;
