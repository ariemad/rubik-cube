import "../css/Model.scss";

import Cube from "./Cube.js";
import RubikCube3D from "./RubikCube3D.js";

function Model({ cubeOptions }) {
  const changeModel = (model) => {
    let dict = {
      cube: <Cube></Cube>,
      rubik: <RubikCube3D rubikCube={cubeOptions.rubikCube}></RubikCube3D>,
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
  return (
    <div className="model-container">
      <div className="model-reference" style={style}>
        {changeModel(cubeOptions["model-selection"])}
      </div>
    </div>
  );
}

export default Model;
