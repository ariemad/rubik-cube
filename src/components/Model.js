import { Fragment } from "react";
import "../css/Model.scss";

import Cube from "./PlatonicSolids/Cube.js";
import CubeFrame from "./CubeFrame.js";
import Dodecahedron from "./PlatonicSolids/Dodecahedron.js";
import Icosahedron from "./PlatonicSolids/Icosahedron.js";
import Octahedron from "./PlatonicSolids/Octahedron.js";
import RubikCube3D from "./RubikCube/RubikCube3D.js";
import Tetrahedron from "./PlatonicSolids/Tetrahedron.js";

function Model({ cubeOptions, menuOptions, handleOnWheel, handleCustomDrag }) {
  const changeModel = (model) => {
    let dict = {
      cube: <Cube></Cube>,
      rubik: <RubikCube3D rubikCube={cubeOptions.rubikCube}></RubikCube3D>,
      tetrahedron: <Tetrahedron></Tetrahedron>,
      octahedron: <Octahedron></Octahedron>,
      icosahedron: <Icosahedron></Icosahedron>,
      dodecahedron: <Dodecahedron></Dodecahedron>,
    };
    return dict[model];
  };

  let style;
  if (cubeOptions.prev === "Z") {
    style = {
      transform: ` 
      rotateX(${-cubeOptions.axisReal.X}deg) 
      rotateY(${cubeOptions.axisReal.Y}deg)
      rotateZ(${-cubeOptions.axisReal.Z}deg) `,
      scale: `${cubeOptions.scale}`,
    };
  } else if (cubeOptions.prev === "Y") {
    style = {
      transform: ` 
      rotateZ(${-cubeOptions.axisReal.Z}deg)
      rotateX(${-cubeOptions.axisReal.X}deg) 
      rotateY(${cubeOptions.axisReal.Y}deg)`,
      scale: `${cubeOptions.scale}`,
    };
  } else if (cubeOptions.prev === "X") {
    style = {
      transform: ` 
      rotateZ(${-cubeOptions.axisReal.Z}deg)
      rotateY(${cubeOptions.axisReal.Y}deg)
      rotateX(${-cubeOptions.axisReal.X}deg) `,
      scale: `${cubeOptions.scale}`,
    };
  }

  let axis;
  if (menuOptions.axisDisplay) {
    axis = (
      <Fragment>
        <div className="axis axis-x-1">
          <div className="axis-tag-back">+X</div>
          <div className="axis-tag">-X</div>
        </div>
        <div className="axis axis-x-2"></div>
        <div className="axis axis-y-1">
          <div className="axis-tag">+Y</div>
          <div className="axis-tag-back">-Y</div>
        </div>
        <div className="axis axis-y-2"></div>
        <div className="axis axis-z-1">
          <div className="axis-tag">+Z</div>
          <div className="axis-tag-back">-Z</div>
        </div>
        <div className="axis axis-z-2"></div>
      </Fragment>
    );
  }

  const PLATONIC_SOLIDS = [
    "tetrahedron",
    "octahedron",
    "icosahedron",
    "dodecahedron",
  ];

  let cubeFrame;
  if (
    PLATONIC_SOLIDS.includes(menuOptions["model-selection"]) &&
    menuOptions.cubeFrame
  ) {
    cubeFrame = <CubeFrame></CubeFrame>;
  }

  return (
    <div
      className="model-container"
      onWheel={handleOnWheel}
      onMouseMove={handleCustomDrag}
      onMouseDown={handleCustomDrag}
      onMouseUp={handleCustomDrag}
    >
      <div className="model-reference" style={style}>
        {changeModel(menuOptions["model-selection"])}
        {axis}
        {cubeFrame}
      </div>
    </div>
  );
}

export default Model;
