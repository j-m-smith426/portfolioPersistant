import { useReducer } from "react";
import "./App.css";
import Bio from "./components/Bio/Bio";
import Contact from "./components/Contact/Contact";
import Model from "./components/Modal/Model";
import Projects from "./components/Projects/Projects";
import TechCards from "./components/TechCards/TechCards";
import Titleblock from "./components/TitleBlock/Titleblock";
import { initialState, modelReducer } from "./utility/modelReducer";
import { DispatchContext } from "./utility/contextConstructors";

function App() {
	const [modelState, dispatch] = useReducer(modelReducer, initialState);
	return (
		<DispatchContext.Provider value={dispatch}>
		<div className="App">
			<Titleblock />
			<TechCards />
			<Projects />
			<Bio />
			<Contact />
			<Model hidden={modelState.hidden} data={modelState}/>
		</div>
		</DispatchContext.Provider>
	);
}

export default App;
