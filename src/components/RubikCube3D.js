import { Fragment } from "react";
import "../css/RubikCube3D.scss";
import RubikCube3DFace from "./RubikCube3DFace.js";

function RubikCube3D({ rubikCube }) {
  return (
    <Fragment>
      <div className="front rubik-face">
        <RubikCube3DFace face={rubikCube.front.face}></RubikCube3DFace>
      </div>
      <div className="back rubik-face">
        <RubikCube3DFace face={rubikCube.back.face}></RubikCube3DFace>
      </div>
      <div className="top rubik-face">
        <RubikCube3DFace face={rubikCube.top.face}></RubikCube3DFace>
      </div>
      <div className="bottom rubik-face">
        <RubikCube3DFace face={rubikCube.bottom.face}></RubikCube3DFace>
      </div>
      <div className="left rubik-face">
        <RubikCube3DFace face={rubikCube.left.face}></RubikCube3DFace>
      </div>
      <div className="right rubik-face">
        <RubikCube3DFace face={rubikCube.right.face}></RubikCube3DFace>
      </div>
    </Fragment>
  );
}

export default RubikCube3D;
