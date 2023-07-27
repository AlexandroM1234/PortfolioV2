import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/NavBar";
import { useColorMode } from "@chakra-ui/react";

function App() {
  const { colorMode } = useColorMode();
  return (
    <>
      <NavBar color="cyan" />
    </>
  );
}

export default App;
