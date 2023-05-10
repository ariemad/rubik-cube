import { Button } from "@mui/material";

import "../../css/RubikCube/RubikCube2DOptions.scss";

function RubikCubeOptions({ reset, shuffleSlow, shuffleFast }) {
  return (
    <div className="rubik-cube-options">
      <Button className="options-button" variant="contained" onClick={reset}>
        Reset
      </Button>
      <Button
        className="options-button"
        variant="contained"
        onClick={shuffleSlow}
      >
        Shuffle Slow
      </Button>
      <Button
        className="options-button"
        variant="contained"
        onClick={shuffleFast}
      >
        Shuffle Fast
      </Button>
    </div>
  );
}

export default RubikCubeOptions;
