import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Landing from "./Components/Landing";
import NavBar from "./Components/NavBar";
import Projects from "./Components/Projects";

function App() {
  return (
    <>
      <NavBar />
      <Landing />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
