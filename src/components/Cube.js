import { useEffect, useState } from "react";
import "../css/Cube.scss";

function Cube(props) {
  let [cubeOptions, setCubeOptions] = useState(props.cubeOptions);

  useEffect(() => {
    setCubeOptions(props.cubeOptions);
  }, [props.cubeOptions]);

  return (
    <div className="cube-container">
      <div
        className="cube"
        style={{
          transform: `translate(-75px, -75px) 
          rotateX(${cubeOptions.rotateX}deg) 
          rotateY(${cubeOptions.rotateY}deg) 
          rotateZ(${cubeOptions.rotateZ}deg) `,
        }}
      >
        <div className="front face">Front</div>
        <div className="back face">Back</div>
        <div className="left face">Left</div>
        <div className="right face">Right</div>
        <div className="top face">Top</div>
        <div className="bottom face">Bottom</div>
      </div>
    </div>
  );
}

export default Cube;
