import "./css/App.scss";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { useState } from "react";
import Cube from "./components/Cube";
import { Button, Slider } from "@mui/material";

function App() {
  let [cubeOptions, setCubeOptions] = useState({
    rotateX: 30,
    rotateY: 30,
    rotateZ: 30,
  });

  function updateCubeOptions(e) {
    let copy = cubeOptions;
    copy[e.target.name] = e.target.value;
    setCubeOptions(copy);
  }

  return (
    <div className="App">
      <Cube key={cubeOptions} cubeOptions={cubeOptions} />
      <div className="slider-container">
        <p>Rotation on X axis {Object.values(cubeOptions)}</p>
        <Slider
          className="rotate-x-slider"
          size="small"
          defaultValue={0}
          min={-180}
          max={180}
          step={1}
          valueLabelDisplay="auto"
          marks={[
            { label: "0°", value: 0 },
            { label: "90°", value: 90 },
            { label: "-90°", value: -90 },
            { label: "-180°", value: -180 },
            { label: "180°", value: 180 },
          ]}
          onChange={updateCubeOptions}
          name="rotateX"
        />
      </div>
    </div>
  );
}

export default App;
