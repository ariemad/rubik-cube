import { Fragment } from "react";
import "../css/PlatonicSolids.scss";

function Dodecahedron() {
  return (
    <Fragment>
      <div className="wrapper pentagon pentagon1">
        <div className="pentagon-upper  border-red"></div>
        <div className="pentagon-lower  border-red"></div>
      </div>
      <div className="wrapper pentagon pentagon2">
        <div className="pentagon-upper  border-green"></div>
        <div className="pentagon-lower  border-green"></div>
      </div>
      <div className="wrapper pentagon pentagon3">
        <div className="pentagon-upper  border-blue"></div>
        <div className="pentagon-lower  border-blue"></div>
      </div>
      <div className="wrapper pentagon pentagon4">
        <div className="pentagon-upper  border-orange"></div>
        <div className="pentagon-lower  border-orange"></div>
      </div>
      <div className="wrapper pentagon pentagon5">
        <div className="pentagon-upper  border-blue"></div>
        <div className="pentagon-lower  border-blue"></div>
      </div>
      <div className="wrapper pentagon pentagon6">
        <div className="pentagon-upper  border-yellow"></div>
        <div className="pentagon-lower  border-yellow"></div>
      </div>
      <div className="wrapper pentagon pentagon7">
        <div className="pentagon-upper  border-red"></div>
        <div className="pentagon-lower  border-red"></div>
      </div>
      <div className="wrapper pentagon pentagon8">
        <div className="pentagon-upper  border-green"></div>
        <div className="pentagon-lower  border-green"></div>
      </div>
      <div className="wrapper pentagon pentagon9">
        <div className="pentagon-upper  border-violet"></div>
        <div className="pentagon-lower  border-violet"></div>
      </div>
      <div className="wrapper pentagon pentagon10">
        <div className="pentagon-upper  border-orange"></div>
        <div className="pentagon-lower  border-orange"></div>
      </div>
      <div className="wrapper pentagon pentagon11">
        <div className="pentagon-upper  border-violet"></div>
        <div className="pentagon-lower  border-violet"></div>
      </div>
      <div className="wrapper pentagon pentagon12">
        <div className="pentagon-upper  border-yellow"></div>
        <div className="pentagon-lower  border-yellow"></div>
      </div>
    </Fragment>
  );
}

export default Dodecahedron;
