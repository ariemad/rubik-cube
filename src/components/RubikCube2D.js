import "../css/RubikCube2D.scss";

const addClasses = (number) => {
  let base = "square";
  let color = "";
  if (number === 0) color = "red";
  else if (number === 1) color = "white";
  else if (number === 2) color = "orange";
  else if (number === 3) color = "yellow";
  else if (number === 4) color = "green";
  else if (number === 5) color = "blue";

  return base + " " + color;
};

function RubikCube2D({ rubikCube }) {
  const addSquare = (arr) => {
    let items = arr.map((number) => {
      if (number != undefined) {
        return <div className={addClasses(number)}></div>;
      } else {
        return <div></div>;
      }
    });
    return items;
  };

  let arr = rubikCube.flatVertical();

  return <div className="rubik-cube-2d"> {addSquare(arr)} </div>;
}

export default RubikCube2D;
