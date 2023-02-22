import { Fragment } from "react";
import "../css/RubikCube3DFace.scss";

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

function RubikCube3DFace({ face }) {
  const addSquares = (face) => {
    let flat = face.flat();

    let items = [];
    for (let i = 0; i < flat.length; i++) {
      items.push(
        <div key={i} className="square-container black">
          <div className={addClasses(flat[i])}></div>
        </div>
      );
    }
    return items;
  };

  return <Fragment>{addSquares(face)}</Fragment>;
}

export default RubikCube3DFace;
