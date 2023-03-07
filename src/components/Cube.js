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
    </Fragment>
  );
}

export default Cube;
