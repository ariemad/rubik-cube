import { Fragment } from "react";
import "../css/RubikCube3D.scss";

import RubikCube3DFace from "./RubikCube3DFace.js";
import RubikCube3DSpacer from "./RubikCube3DSpacer.js";

function RubikCube3D({ rubikCube }) {
  const addSquares = (rubikCube) => {
    let items = [];
    let faces = ["front", "back", "top", "bottom", "left", "right"];
    for (const key in rubikCube) {
      if (faces.includes(key)) {
        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
            items.push(
              <RubikCube3DFace
                key={key + i + j}
                face={key}
                row={i}
                col={j}
                color={rubikCube[key].face[i][j]}
                lastRotation={rubikCube.lastRotation}
                rotationCounter={rubikCube.rotationCounter}
              ></RubikCube3DFace>
            );
          }
        }
      }
    }
    return items;
  };

  const addSpacers = () => {
    if (!rubikCube.lastRotation) {
      return "";
    }

    let items = [];
    let faces = {
      x: ["left", "right"],
      y: ["bottom", "top"],
      z: ["back", "front"],
    };

    for (const face of faces[rubikCube.lastRotation.axis]) {
      items.push(
        <RubikCube3DSpacer
          key={face + rubikCube.rotationCounter}
          face={face}
          lastRotation={rubikCube.lastRotation}
          rotationCounter={rubikCube.rotationCounter}
        ></RubikCube3DSpacer>
      );
      items.push(
        <RubikCube3DSpacer
          key={face + rubikCube.rotationCounter + "#"}
          face={face}
        ></RubikCube3DSpacer>
      );
    }
    return items;
  };

  return (
    <Fragment>
      {addSquares(rubikCube)}
      {addSpacers(rubikCube.lastRotation)}
    </Fragment>
  );
}

export default RubikCube3D;
