import { Fragment } from "react";
import "../css/Cube.scss";

function CubeFrame() {
  return (
    <Fragment>
      <div className="front face transparent"></div>
      <div className="back face transparent"></div>
      <div className="left face transparent"></div>
      <div className="right face transparent"></div>
      <div className="top face transparent"></div>
      <div className="bottom face transparent"></div>
    </Fragment>
  );
}

export default CubeFrame;
