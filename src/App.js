import "./css/App.scss";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { useState } from "react";
import Cube from "./components/Cube";
import Options from "./components/Options";

function App() {
  let [cubeOptions, setCubeOptions] = useState({
    rotationX: 45,
    rotationY: 45,
    rotationZ: 45,
    scale: 1,
  });

  function updateCubeOptions(e) {
    setCubeOptions({ ...cubeOptions, [e.target.name]: e.target.value });
  }

  return (
    <div className="App">
      <Cube key={cubeOptions} cubeOptions={cubeOptions} />
      <Options onChange={updateCubeOptions} />
    </div>
  );
}

export default App;
