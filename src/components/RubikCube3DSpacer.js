import { unit1_6, unit1_2 } from "./_variables.js";
import "../css/RubikCube3DSpacer.scss";

const POSITION_FACE = {
  front: `translateX(-${unit1_2}) translateY(-${unit1_2})  translateZ(${unit1_6}) `,
  back: `translateX(-${unit1_2}) translateY(-${unit1_2}) rotateY(180deg) translateZ(${unit1_6}) rotateZ(180deg)`,
  left: `translateX(-${unit1_2}) translateY(-${unit1_2}) rotateY(-90deg) translateZ(${unit1_6})`,
  right: `translateX(-${unit1_2}) translateY(-${unit1_2}) rotateY(90deg) translateZ(${unit1_6})`,
  top: `translateX(-${unit1_2}) translateY(-${unit1_2}) rotateX(90deg) translateZ(${unit1_6})`,
  bottom: `translateX(-${unit1_2}) translateY(-${unit1_2}) rotateX(-90deg) translateZ(${unit1_6})`,
};

function RubikCube3DSpacer({ face, lastRotation }, rotationCounter) {
  const addRotateAnimation = () => {
    if (!lastRotation) {
      return "";
    }

    if (lastRotation.axis === "x") {
      if (Math.abs(lastRotation.number) === 1) {
        if (face === "left") {
          return lastRotation.number > 0 ? "rotateX" : "rotateXNeg";
        }
      } else if (Math.abs(lastRotation.number) === 2) {
        return lastRotation.number > 0 ? "rotateX" : "rotateXNeg";
      } else if (Math.abs(lastRotation.number) === 3) {
        if (face === "right") {
          return lastRotation.number > 0 ? "rotateX" : "rotateXNeg";
        }
      }
    } else if (lastRotation.axis === "y") {
      if (Math.abs(lastRotation.number) === 1) {
        if (face === "bottom") {
          return lastRotation.number > 0 ? "rotateY" : "rotateYNeg";
        }
      } else if (Math.abs(lastRotation.number) === 2) {
        return lastRotation.number > 0 ? "rotateY" : "rotateYNeg";
      } else if (Math.abs(lastRotation.number) === 3) {
        if (face === "top") {
          return lastRotation.number > 0 ? "rotateY" : "rotateYNeg";
        }
      }
    } else if (lastRotation.axis === "z") {
      if (Math.abs(lastRotation.number) === 1) {
        if (face === "back") {
          return lastRotation.number > 0 ? "rotateZ" : "rotateZNeg";
        }
      } else if (Math.abs(lastRotation.number) === 2) {
        return lastRotation.number > 0 ? "rotateZ" : "rotateZNeg";
      } else if (Math.abs(lastRotation.number) === 3) {
        if (face === "front") {
          return lastRotation.number > 0 ? "rotateZ" : "rotateZNeg";
        }
      }
    }
    return "";
  };

  const addStyle = (arg) => {
    return {
      transform: POSITION_FACE[face],
    };
  };

  return (
    <div className={"rotate-animation " + addRotateAnimation()}>
      <div style={addStyle(face)} className="spacer black"></div>
    </div>
  );
}

export default RubikCube3DSpacer;
