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
import { rotateCubeOnDrag } from "./js/Rotation/rotateCubeOnDrag.js";
import Options from "./components/Options.js";
import RubikCubeComplementary from "./components/RubikCube/RubikCubeComplementary.js";
import Links from "./components/Links.js";

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
      X: 30,
      Y: 30,
      Z: 0,
    },
    prev: "Z",
    // Render Options
    scale: 1,
    rubikCube: new RubikCube(),
    //To track differences is mouse movement
    screenX: 0,
    screenY: 0,
    mouseDown: false,
    axisBefore: {},
  });

  let [menuOptions, setMenuOptions] = useState({
    axisDisplay: false,
    "model-selection": "rubik",
    cubeFrame: false,
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

  function updateMenuOptions(e) {
    let temp = menuOptions;

    let key = e.target.name;
    let newValue;

    if (key === "model-selection") {
      newValue = e.target.defaultValue;
    } else {
      //Update boolean
      newValue = !temp[key];
    }

    temp[key] = newValue;
    setMenuOptions({ ...menuOptions });
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

  function handleCustomDrag(e) {
    if (e._reactName === "onMouseDown") {
      setCubeOptions({
        ...cubeOptions,
        screenX: e.screenX,
        screenY: e.screenY,
        mouseDown: true,
        axisBefore: cubeOptions.axisReal,
      });
    } else if (
      e._reactName === "onMouseMove" &&
      cubeOptions.mouseDown === true
    ) {
      let temp = cubeOptions;

      let sensitivity = 0.2;

      temp.axisReal = rotateCubeOnDrag(
        cubeOptions.axisBefore,
        temp.prev,
        (e.screenX - temp.screenX) * sensitivity,
        (e.screenY - temp.screenY) * sensitivity
      );

      setCubeOptions({ ...cubeOptions, axisReal: temp.axisReal });

      console.log("X", e.screenX - cubeOptions.screenX);
      console.log("Y", cubeOptions.screenY - e.screenY);
    } else if (e._reactName === "onMouseUp") {
      setCubeOptions({
        ...cubeOptions,
        mouseDown: false,
      });
    }
  }

  function reset() {
    if (shuffling) return;
    setCubeOptions({ ...cubeOptions, rubikCube: new RubikCube() });
  }

  let [shuffling, setShuffling] = useState(false);
  let [animationSpeed, setAnimationSpeed] = useState("slow");

  function shuffle(time) {
    let count = 0;
    let intervalID = setInterval(() => {
      let temp = cubeOptions.rubikCube;
      temp.rotateRandom();
      setCubeOptions({ ...cubeOptions, rubikCube: temp });
      count++;
      if (count >= 12) {
        clearInterval(intervalID);
        setTimeout(() => {
          setAnimationSpeed("slow");
          setShuffling(false);
        }, 800);
      }
    }, time);
  }

  function shuffleSlow() {
    if (shuffling) return;
    setShuffling(true);
    setAnimationSpeed("slow");
    shuffle(800);
  }

  function shuffleFast() {
    if (shuffling) return;
    setShuffling(true);
    setAnimationSpeed("fast");
    shuffle(200);
  }

  let slider;
  if (menuOptions.axisDisplay) {
    slider = (
      <Sliders
        axisSlider={cubeOptions.axisSlider}
        onChange={updateCubeOptions}
      ></Sliders>
    );
  }

  let rubikCubeComplementary;
  if (menuOptions["model-selection"] === "rubik") {
    rubikCubeComplementary = (
      <RubikCubeComplementary
        rubikCube={cubeOptions.rubikCube}
        onClick={onClickRotate}
        reset={reset}
        shuffleSlow={shuffleSlow}
        shuffleFast={shuffleFast}
      ></RubikCubeComplementary>
    );
  }

  return (
    <div className="App">
      <Model
        key={cubeOptions}
        cubeOptions={cubeOptions}
        menuOptions={menuOptions}
        handleOnWheel={handleOnWheel}
        handleCustomDrag={handleCustomDrag}
        animationSpeed={animationSpeed}
      />
      <Options
        onChange={updateMenuOptions}
        menuOptions={menuOptions}
        handleChange={updateMenuOptions}
      />

      {slider}
      {rubikCubeComplementary}

      <Links />
    </div>
  );
}

export default App;
