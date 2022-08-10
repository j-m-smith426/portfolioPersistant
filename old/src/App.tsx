import "./App.css";

import { About, Header, Footer, NavBar, Projects, Skills } from "./container";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
