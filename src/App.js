import "./css/App.scss";
import "./css/Global.scss";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { useState } from "react";
import Model from "./components/Model.js";
import Sliders from "./components/Sliders.js";
import { convertEuler } from "./js/Rotation/convertEuler.js";
import { RubikCube } from "./js/RubikCube/RubikCube.js";
import RubikCube2D from "./components/RubikCube2D.js";

function App() {
  let [cubeOptions, setCubeOptions] = useState({
    // Serves to check slider differences
    axisSlider: {
      X: 0,
      Y: 0,
      Z: 0,
    },
    // Data passed to render the model
    axisReal: {
      X: 0,
      Y: 0,
      Z: 0,
    },
    prev: "Z",
    // Render Options
    scale: 1,
    "model-selection": "rubik",
    rubikCube: new RubikCube(),
  });

  function updateCubeOptions(e) {
    // Make temp object
    let temp = cubeOptions;

    // Replace the value. Using the name property from the sliders
    const pathArray = e.target.name.split(".");
    const lastKey = pathArray.pop();
    const lastObject = pathArray.reduce((acc, prop) => acc[prop], temp);

    //Update Axis slider and real variable
    if (["X", "Y", "Z"].includes(lastKey)) {
      let degreeDiff = e.target.value - temp.axisSlider[lastKey];
      temp.axisReal[lastKey] += degreeDiff;

      if (lastKey !== temp.prev) {
        temp.axisReal = convertEuler(temp.axisReal, temp.prev, lastKey);
        temp.prev = lastKey;
      }

      temp.axisSlider[lastKey] = e.target.value;

      setCubeOptions({
        ...temp,
      });
    } else {
      //Else update another variable

      lastObject[lastKey] = e.target.value;

      setCubeOptions({ ...cubeOptions, [lastObject.lastKey]: e.target.value });
    }
  }

  function onClickRotate(data) {
    let temp = cubeOptions.rubikCube;
    temp.rotate(...data);
    setCubeOptions({ ...cubeOptions, rubikCube: temp });
  }

  function handleOnWheel(e) {
    let temp = cubeOptions;
    if (e.deltaY > 0) {
      temp.scale = Math.min(10, temp.scale * 1.1);
    } else {
      temp.scale = Math.max(0.1, temp.scale / 1.1);
    }
    setCubeOptions({ ...cubeOptions, scale: temp.scale });
  }

  return (
    <div className="App">
      <Model
        key={cubeOptions}
        cubeOptions={cubeOptions}
        handleOnWheel={handleOnWheel}
      />
      <Sliders
        onChange={updateCubeOptions}
        axisSlider={cubeOptions.axisSlider}
      />
      {cubeOptions["model-selection"] === "rubik" ? (
        <RubikCube2D
          rubikCube={cubeOptions.rubikCube}
          onClick={onClickRotate}
        ></RubikCube2D>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
