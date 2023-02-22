import { Fragment } from "react";
import "../css/Cube.scss";

function Cube() {
  return (
    <Fragment>
      <div className="front face red">Front</div>
      <div className="back face blue">Back</div>
      <div className="left face orange">Left</div>
      <div className="right face violet">Right</div>
      <div className="top face green">Top</div>
      <div className="bottom face yellow">Bottom</div>

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
