import { Fragment } from "react";
import "../css/RubikCube3DFace.scss";
import { unit1_2, unit1_3, unit1_6 } from "./_variables.js";

const addColor = (number) => {
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
  front: `translateX(-${unit1_6}) translateY(-${unit1_6})  translateZ(${unit1_2}) `,
  back: `translateX(-${unit1_6}) translateY(-${unit1_6}) rotateY(180deg) translateZ(${unit1_2}) rotateZ(180deg)`,
  left: `translateX(-${unit1_6}) translateY(-${unit1_6}) rotateY(-90deg) translateZ(${unit1_2})`,
  right: `translateX(-${unit1_6}) translateY(-${unit1_6}) rotateY(90deg) translateZ(${unit1_2})`,
  top: `translateX(-${unit1_6}) translateY(-${unit1_6}) rotateX(90deg) translateZ(${unit1_2})`,
  bottom: `translateX(-${unit1_6}) translateY(-${unit1_6}) rotateX(-90deg) translateZ(${unit1_2})`,
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

function RubikCube3DFace({
  face,
  row,
  col,
  color,
  lastRotation,
  rotationCounter,
}) {
  const addRotateAnimation = () => {
    if (!lastRotation) {
      return "";
    }
    console.log(lastRotation);

    if (lastRotation.axis === "x") {
      if (Math.abs(lastRotation.number) === 1) {
        if (
          face === "left" ||
          (face === "top" && col === 0) ||
          (face === "bottom" && col === 0) ||
          (face === "front" && col === 0) ||
          (face === "back" && col === 0)
        ) {
          return lastRotation.number > 0 ? "rotateX" : "rotateXNeg";
        }
      } else if (Math.abs(lastRotation.number) === 2) {
        if (
          (face === "top" && col === 1) ||
          (face === "bottom" && col === 1) ||
          (face === "front" && col === 1) ||
          (face === "back" && col === 1)
        ) {
          return lastRotation.number > 0 ? "rotateX" : "rotateXNeg";
        }
      } else if (Math.abs(lastRotation.number) === 3) {
        if (
          face === "right" ||
          (face === "top" && col === 2) ||
          (face === "bottom" && col === 2) ||
          (face === "front" && col === 2) ||
          (face === "back" && col === 2)
        ) {
          return lastRotation.number > 0 ? "rotateX" : "rotateXNeg";
        }
      }
    } else if (lastRotation.axis === "y") {
      if (Math.abs(lastRotation.number) === 1) {
        if (
          face === "bottom" ||
          (face === "left" && row === 2) ||
          (face === "right" && row === 2) ||
          (face === "front" && row === 2) ||
          (face === "back" && row === 0)
        ) {
          return lastRotation.number > 0 ? "rotateY" : "rotateYNeg";
        }
      } else if (Math.abs(lastRotation.number) === 2) {
        if (
          (face === "left" && row === 1) ||
          (face === "right" && row === 1) ||
          (face === "front" && row === 1) ||
          (face === "back" && row === 1)
        ) {
          return lastRotation.number > 0 ? "rotateY" : "rotateYNeg";
        }
      } else if (Math.abs(lastRotation.number) === 3) {
        if (
          face === "top" ||
          (face === "left" && row === 0) ||
          (face === "right" && row === 0) ||
          (face === "front" && row === 0) ||
          (face === "back" && row === 2)
        ) {
          return lastRotation.number > 0 ? "rotateY" : "rotateYNeg";
        }
      }
    } else if (lastRotation.axis === "z") {
      if (Math.abs(lastRotation.number) === 1) {
        if (
          face === "back" ||
          (face === "top" && row === 0) ||
          (face === "left" && col === 0) ||
          (face === "bottom" && row === 2) ||
          (face === "right" && col === 2)
        ) {
          return lastRotation.number > 0 ? "rotateZ" : "rotateZNeg";
        }
      } else if (Math.abs(lastRotation.number) === 2) {
        if (
          (face === "top" && row === 1) ||
          (face === "left" && col === 1) ||
          (face === "bottom" && row === 1) ||
          (face === "right" && col === 1)
        ) {
          return lastRotation.number > 0 ? "rotateZ" : "rotateZNeg";
        }
      } else if (Math.abs(lastRotation.number) === 3) {
        if (
          face === "front" ||
          (face === "top" && row === 2) ||
          (face === "left" && col === 2) ||
          (face === "bottom" && row === 0) ||
          (face === "right" && col === 0)
        ) {
          return lastRotation.number > 0 ? "rotateZ" : "rotateZNeg";
        }
      }
    }
    return "";
  };

  const addTransform = () => {
    return (
      POSITION_FACE[face] +
      " " +
      POSITION_SQUARE_ROW[row] +
      " " +
      POSITION_SQUARE_COL[col]
    );
  };

  const addStyle = () => {
    return {
      transform: addTransform(),
      position: "absolute",
    };
  };

  return (
    <Fragment>
      <div
        key={rotationCounter}
        className={"rotate-animation " + addRotateAnimation()}
      >
        <div style={addStyle()} className={"square-container black"}>
          <div className={addColor(color)}></div>
        </div>
      </div>
    </Fragment>
  );
}

export default RubikCube3DFace;
