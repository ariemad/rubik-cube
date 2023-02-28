import { Fragment } from "react";
import "../css/RubikCube3DFace.scss";
import { unit1_2, unit1_3 } from "./_variables.js";

const addClasses = (number) => {
  let base = "square-coloured ";
  let color;
  if (number === 0) color = "red";
  else if (number === 1) color = "white";
  else if (number === 2) color = "orange";
  else if (number === 3) color = "yellow";
  else if (number === 4) color = "green";
  else if (number === 5) color = "blue";

  return base + color;
};

const POSITION_FACE = {
  front: `translateX(-${unit1_2}) translateY(-${unit1_2})  translateZ(${unit1_2}) `,
  back: `translateX(-${unit1_2}) translateY(-${unit1_2}) rotateY(180deg) translateZ(${unit1_2}) rotateZ(180deg)`,
  left: `translateX(-${unit1_2}) translateY(-${unit1_2}) rotateY(-90deg) translateZ(${unit1_2})`,
  right: `translateX(-${unit1_2}) translateY(-${unit1_2}) rotateY(90deg) translateZ(${unit1_2})`,
  top: `translateX(-${unit1_2}) translateY(-${unit1_2}) rotateX(90deg) translateZ(${unit1_2})`,
  bottom: `translateX(-${unit1_2}) translateY(-${unit1_2}) rotateX(-90deg) translateZ(${unit1_2})`,
};

const POSITION_SQUARE_ROW = {
  0: `translateY(-${unit1_3})`,
  1: ``,
  2: `translateY(${unit1_3})`,
};

const POSITION_SQUARE_COL = {
  0: `translateX(-${unit1_3})`,
  1: ``,
  2: `translateX(${unit1_3})`,
};

function RubikCube3DFace({ face, row, col, color }) {
  const addTransform = () => {
    return { transform: POSITION_FACE[face] };
  };

  const addStyle = () => {
    return {
      transform:
        POSITION_FACE[face] +
        " " +
        POSITION_SQUARE_ROW[row] +
        " " +
        POSITION_SQUARE_COL[col],
    };
  };

  return (
    <Fragment>
      <div style={addStyle()} className="square-container black">
        <div className={addClasses(color)}> </div>
      </div>
    </Fragment>
  );
}

export default RubikCube3DFace;
