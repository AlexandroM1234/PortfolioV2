import "./App.css";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Landing from "./Components/Landing";
import NavBar from "./Components/NavBar";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import { useRef } from "react";

function App() {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);

  const handleScroll = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - 100,
      behavior: "smooth",
    });
  };
  return (
    <>
      <NavBar
        handleScroll={handleScroll}
        projectsRef={projectsRef}
        aboutRef={aboutRef}
        experienceRef={experienceRef}
      />
      <Landing />
      <About ref={aboutRef} />
      <Experience ref={experienceRef} />
      <Projects ref={projectsRef} />
      <Footer />
    </>
  );
}

export default App;
