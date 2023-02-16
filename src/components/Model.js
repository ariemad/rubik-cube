import "../css/Model.scss";

import Cube from "./Cube.js";

function Model({ cubeOptions }) {
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
        <Cube></Cube>
      </div>
    </div>
  );
}

export default Model;
