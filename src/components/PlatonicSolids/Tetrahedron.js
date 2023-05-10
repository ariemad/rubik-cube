import { Fragment } from "react";
import "../../css/PlatonicSolids.scss";

function Tetrahedron() {
  return (
    <Fragment>
      <div className="wrapper tetrahedron1 ">
        <div className="triangle-tetra  border-red"></div>
      </div>
      <div className="wrapper tetrahedron2 ">
        <div className="triangle-tetra  border-orange"></div>
      </div>
      <div className="wrapper tetrahedron3 ">
        <div className="triangle-tetra  border-blue"></div>
      </div>
      <div className="wrapper tetrahedron4 ">
        <div className="triangle-tetra  border-green"></div>
      </div>
    </Fragment>
  );
}

export default Tetrahedron;
