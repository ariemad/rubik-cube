import "../css/Cube.scss";

function Cube({ cubeOptions }) {
  return (
    <div className="cube-container">
      <div
        className="cube"
        style={{
          transform: ` 
          rotateX(${cubeOptions.rotationX}deg) 
          rotateY(${cubeOptions.rotationY}deg)
          rotateZ(${cubeOptions.rotationZ}deg) `,
          scale: `${cubeOptions.scale}`,
        }}
      >
        <div className="front face">Front</div>
        <div className="back face">Back</div>
        <div className="left face">Left</div>
        <div className="right face">Right</div>
        <div className="top face">Top</div>
        <div className="bottom face">Bottom</div>
        <div className="axis axis-x-1">X</div>
        <div className="axis axis-x-2">X</div>
        <div className="axis axis-y-1">X</div>
        <div className="axis axis-y-2">X</div>
        <div className="axis axis-z-1">X</div>
        <div className="axis axis-z-2">X</div>
      </div>
    </div>
  );
}

export default Cube;
