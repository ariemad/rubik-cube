import { Fragment } from "react";
import "../css/Tetrahedron.scss";

function Tetrahedron() {
  return (
    <Fragment>
      <div className="triangle tetrahedron1 border-red"></div>
      <div className="triangle tetrahedron2 border-blue"></div>
      <div className="triangle tetrahedron3 border-orange"></div>
      <div className="triangle tetrahedron4 border-violet"></div>
    </Fragment>
  );
}

export default Tetrahedron;
