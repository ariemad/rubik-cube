import { Fragment } from "react";
import "../css/Cube.scss";

function Cube() {
  return (
    <Fragment>
      <div className="front face">Front</div>
      <div className="back face">Back</div>
      <div className="left face">Left</div>
      <div className="right face">Right</div>
      <div className="top face">Top</div>
      <div className="bottom face">Bottom</div>

      <div className="axis axis-x-1">
        <div className="axis-tag-back">+X</div>
        <div className="axis-tag">-X</div>
      </div>
      <div className="axis axis-x-2"></div>
      <div className="axis axis-y-1">
        <div className="axis-tag">+Y</div>
        <div className="axis-tag-back">-Y</div>
      </div>
      <div className="axis axis-y-2"></div>
      <div className="axis axis-z-1">
        <div className="axis-tag">+Z</div>
        <div className="axis-tag-back">-Z</div>
      </div>
      <div className="axis axis-z-2"></div>
    </Fragment>
  );
}

export default Cube;
