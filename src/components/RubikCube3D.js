import { Fragment } from "react";
import "../css/RubikCube3D.scss";

import RubikCube3DFace from "./RubikCube3DFace.js";

function RubikCube3D({ rubikCube }) {
  const addSquares = (rubikCube) => {
    let items = [];
    for (const key in rubikCube) {
      if (key === "state") continue;
      else {
        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
            items.push(
              <RubikCube3DFace
                key={key + i + j}
                face={key}
                row={i}
                col={j}
                color={rubikCube[key].face[i][j]}
              ></RubikCube3DFace>
            );
          }
        }
      }
    }
    return items;
  };

  return <Fragment>{addSquares(rubikCube)}</Fragment>;
}

export default RubikCube3D;
