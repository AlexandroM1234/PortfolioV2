import "./App.css";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Landing from "./Components/Landing";
import NavBar from "./Components/NavBar";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import { useRef } from "react";
import { loadFull } from "tsparticles";
import ParticleBackground from "./Components/ParticleBackground";

function App() {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const handleScroll = (elementRef) => {
    elementRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <ParticleBackground init={particlesInit} />
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
