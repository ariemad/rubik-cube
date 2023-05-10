import "../../css/RubikCube/RubikCube2D.scss";

const addClasses = (number) => {
  let base = "square square-border ";
  let color = "";
  if (number === 0) color = "red";
  else if (number === 1) color = "white";
  else if (number === 2) color = "orange";
  else if (number === 3) color = "yellow";
  else if (number === 4) color = "green";
  else if (number === 5) color = "blue";

  return base + " " + color;
};

const addClassesArrow = (direction) => {
  return "square arrow " + direction;
};

const arrows = {
  4: { direction: "up-arrow", rotate: ["x", -1] },
  5: { direction: "up-arrow", rotate: ["x", -2] },
  6: { direction: "up-arrow", rotate: ["x", -3] },
  147: { direction: "down-arrow", rotate: ["x", 1] },
  148: { direction: "down-arrow", rotate: ["x", 2] },
  149: { direction: "down-arrow", rotate: ["x", 3] },
  14: { direction: "left-arrow", rotate: ["z", 1] },
  25: { direction: "left-arrow", rotate: ["z", 2] },
  36: { direction: "left-arrow", rotate: ["z", 3] },
  18: { direction: "right-arrow", rotate: ["z", -1] },
  29: { direction: "right-arrow", rotate: ["z", -2] },
  40: { direction: "right-arrow", rotate: ["z", -3] },
  44: { direction: "left-arrow", rotate: ["y", -3] },
  55: { direction: "left-arrow", rotate: ["y", -2] },
  66: { direction: "left-arrow", rotate: ["y", -1] },
  54: { direction: "right-arrow", rotate: ["y", 3] },
  65: { direction: "right-arrow", rotate: ["y", 2] },
  76: { direction: "right-arrow", rotate: ["y", 1] },
};

function RubikCube2D({ rubikCube, onClick }) {
  const addSquare = (arr) => {
    let items = arr.map((number, index) => {
      if (number !== undefined) {
        return <div key={index} className={addClasses(number)}></div>;
      } else if (arrows[index]) {
        return (
          <div
            key={index}
            data-key={index}
            className={addClassesArrow(arrows[index].direction)}
            onClick={onClickSendData}
          >
            <div className="triangle-up"></div>
            <div className="rectangle"></div>
          </div>
        );
      } else {
        return <div key={index} className="square"></div>;
      }
    });
    return items;
  };

  const onClickSendData = (e) => {
    let index = e.target.getAttribute("data-key");
    onClick(arrows[index].rotate);
  };

  let temp = rubikCube.flatVertical();
  let arr = [];
  arr.push(...new Array(11).fill(undefined));
  for (let i = 0; i < 12; i++) {
    arr.push(undefined, ...temp.slice(9 * i, 9 * i + 9), undefined);
  }
  arr.push(...new Array(11).fill(undefined));

  return <div className="rubik-cube-2d"> {addSquare(arr)} </div>;
}

export default RubikCube2D;
