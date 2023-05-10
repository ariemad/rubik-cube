import { Fragment } from "react";
import "../../css/PlatonicSolids.scss";

function Octahedron() {
  return (
    <Fragment>
      <div className="wrapper octahedron1 ">
        <div className="triangle-octa  border-red"></div>
      </div>
      <div className="wrapper octahedron2 ">
        <div className="triangle-octa  border-green"></div>
      </div>
      <div className="wrapper octahedron3 ">
        <div className="triangle-octa  border-yellow"></div>
      </div>
      <div className="wrapper octahedron4 ">
        <div className="triangle-octa  border-blue"></div>
      </div>
      <div className="wrapper octahedron5 ">
        <div className="triangle-octa  border-blue"></div>
      </div>
      <div className="wrapper octahedron6 ">
        <div className="triangle-octa  border-yellow"></div>
      </div>
      <div className="wrapper octahedron7 ">
        <div className="triangle-octa  border-green"></div>
      </div>
      <div className="wrapper octahedron8 ">
        <div className="triangle-octa  border-red"></div>
      </div>
    </Fragment>
  );
}

export default Octahedron;
