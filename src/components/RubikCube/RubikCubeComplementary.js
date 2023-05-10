import "../../css/RubikCube/RubikCubeComplementary.scss";

import RubikCube2D from "./RubikCube2D.js";
import RubikCubeOptions from "./RubikCube2DOptions.js";

function RubikCubeComplementary({
  rubikCube,
  onClick,
  reset,
  shuffleSlow,
  shuffleFast,
}) {
  return (
    <div className="rubik-cube-2d-complementary">
      <RubikCube2D rubikCube={rubikCube} onClick={onClick}></RubikCube2D>
      <RubikCubeOptions
        reset={reset}
        shuffleSlow={shuffleSlow}
        shuffleFast={shuffleFast}
      ></RubikCubeOptions>
    </div>
  );
}

export default RubikCubeComplementary;
