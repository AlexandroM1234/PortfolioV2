import "./App.css";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Landing from "./Components/Landing";
import NavBar from "./Components/NavBar";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Landing />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
