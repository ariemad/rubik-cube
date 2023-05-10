/*


0 - Front - Red
1 - Top - White
2 - Back - Orange
3 - Bottom - Yellow
4 - Left - Green
5 - Right - Blue

For the rotation:
axis is the rotation axis



*/

import { RubikFace } from "./RubikFace.js";

let empty3 = new Array(3).fill(" ");
let empty6 = new Array(6).fill(" ");
let undefined3 = [undefined, undefined, undefined];

class RubikCube {
  constructor(state = "default") {
    this.state = state;
    this.lastRotation = null;
    this.rotationCounter = 0;
    if (state === "default") {
      this.front = new RubikFace(0);
      this.top = new RubikFace(1);
      this.back = new RubikFace(2);
      this.bottom = new RubikFace(3);
      this.left = new RubikFace(4);
      this.right = new RubikFace(5);
      //
    } else if (state === "test") {
      this.front = new RubikFace(0, "test");
      this.top = new RubikFace(1, "test");
      this.back = new RubikFace(2, "test");
      this.bottom = new RubikFace(3, "test");
      this.left = new RubikFace(4, "test");
      this.right = new RubikFace(5, "test");
    }

    this.lastRandom = "";
  }

  logVertical() {
    if (this.state === "test") {
      empty3 = empty6;
    }
    console.log(...empty3, ...this.top.row(0), ...empty3);
    console.log(...empty3, ...this.top.row(1), ...empty3);
    console.log(...empty3, ...this.top.row(2), ...empty3);
    console.log(
      ...this.left.row(0),
      ...this.front.row(0),
      ...this.right.row(0)
    );
    console.log(
      ...this.left.row(1),
      ...this.front.row(1),
      ...this.right.row(1)
    );
    console.log(
      ...this.left.row(2),
      ...this.front.row(2),
      ...this.right.row(2)
    );
    console.log(...empty3, ...this.bottom.row(0), ...empty3);
    console.log(...empty3, ...this.bottom.row(1), ...empty3);
    console.log(...empty3, ...this.bottom.row(2), ...empty3);
    console.log(...empty3, ...this.back.row(0), ...empty3);
    console.log(...empty3, ...this.back.row(1), ...empty3);
    console.log(...empty3, ...this.back.row(2), ...empty3);
  }

  flatVertical() {
    let flat = [
      ...undefined3,
      ...this.top.row(0),
      ...undefined3,
      ...undefined3,
      ...this.top.row(1),
      ...undefined3,
      ...undefined3,
      ...this.top.row(2),
      ...undefined3,
      ...this.left.row(0),
      ...this.front.row(0),
      ...this.right.row(0),
      ...this.left.row(1),
      ...this.front.row(1),
      ...this.right.row(1),
      ...this.left.row(2),
      ...this.front.row(2),
      ...this.right.row(2),
      ...undefined3,
      ...this.bottom.row(0),
      ...undefined3,
      ...undefined3,
      ...this.bottom.row(1),
      ...undefined3,
      ...undefined3,
      ...this.bottom.row(2),
      ...undefined3,
      ...undefined3,
      ...this.back.row(0),
      ...undefined3,
      ...undefined3,
      ...this.back.row(1),
      ...undefined3,
      ...undefined3,
      ...this.back.row(2),
      ...undefined3,
    ];
    return flat;
  }

  logHorizontal() {
    console.log(...empty3, ...this.right.col(2), ...empty3, ...empty3);
    console.log(...empty3, ...this.right.col(1), ...empty3, ...empty3);
    console.log(...empty3, ...this.right.col(0), ...empty3, ...empty3);
    console.log(
      ...this.top.col(2),
      ...this.front.col(2),
      ...this.bottom.col(2),
      ...this.back.col(2)
    );
    console.log(
      ...this.top.col(1),
      ...this.front.col(1),
      ...this.bottom.col(1),
      ...this.back.col(1)
    );
    console.log(
      ...this.top.col(0),
      ...this.front.col(0),
      ...this.bottom.col(0),
      ...this.back.col(0)
    );
    console.log(...empty3, ...this.left.col(2), ...empty3, ...empty3);
    console.log(...empty3, ...this.left.col(1), ...empty3, ...empty3);
    console.log(...empty3, ...this.left.col(0), ...empty3, ...empty3);
  }
  rotate(axis, number) {
    let temp;
    this.lastRotation = { axis: axis, number: number };
    this.rotationCounter++;
    if (axis === "x") {
      if (number === 1) {
        temp = [...this.top.col(0)];
        this.top.setCol(0, this.back.col(0));
        this.back.setCol(0, this.bottom.col(0));
        this.bottom.setCol(0, this.front.col(0));
        this.front.setCol(0, temp);
        this.left.rotateRight();
        //
      } else if (number === -1) {
        temp = [...this.top.col(0)];
        this.top.setCol(0, this.front.col(0));
        this.front.setCol(0, this.bottom.col(0));
        this.bottom.setCol(0, this.back.col(0));
        this.back.setCol(0, temp);
        this.left.rotateLeft();
        //
      } else if (number === 2) {
        temp = [...this.top.col(1)];
        this.top.setCol(1, this.back.col(1));
        this.back.setCol(1, this.bottom.col(1));
        this.bottom.setCol(1, this.front.col(1));
        this.front.setCol(1, temp);
        //
      } else if (number === -2) {
        temp = [...this.top.col(1)];
        this.top.setCol(1, this.front.col(1));
        this.front.setCol(1, this.bottom.col(1));
        this.bottom.setCol(1, this.back.col(1));
        this.back.setCol(1, temp);
        //
      } else if (number === 3) {
        temp = this.top.col(2);
        this.top.setCol(2, this.back.col(2));
        this.back.setCol(2, this.bottom.col(2));
        this.bottom.setCol(2, this.front.col(2));
        this.front.setCol(2, temp);
        this.right.rotateLeft();
        //
      } else if (number === -3) {
        temp = this.top.col(2);
        this.top.setCol(2, this.front.col(2));
        this.front.setCol(2, this.bottom.col(2));
        this.bottom.setCol(2, this.back.col(2));
        this.back.setCol(2, temp);
        this.right.rotateRight();
        //
      }
    } else if (axis === "z") {
      if (number === 1) {
        temp = [...this.top.row(0)];
        this.top.setRow(0, this.right.col(2));
        this.right.setCol(2, this.bottom.row(2).reverse());
        this.bottom.setRow(2, this.left.col(0));
        this.left.setCol(0, temp.reverse());
        this.back.rotateRight();
        //
      } else if (number === -1) {
        temp = [...this.top.row(0)];
        this.top.setRow(0, this.left.col(0).reverse());
        this.left.setCol(0, this.bottom.row(2));
        this.bottom.setRow(2, this.right.col(2).reverse());
        this.right.setCol(2, temp);
        this.back.rotateLeft();
        //
      } else if (number === 2) {
        temp = [...this.top.row(1)];
        this.top.setRow(1, this.right.col(1));
        this.right.setCol(1, this.bottom.row(1).reverse());
        this.bottom.setRow(1, this.left.col(1));
        this.left.setCol(1, temp.reverse());
        //
      } else if (number === -2) {
        temp = [...this.top.row(1)];
        this.top.setRow(1, this.left.col(1).reverse());
        this.left.setCol(1, this.bottom.row(1));
        this.bottom.setRow(1, this.right.col(1).reverse());
        this.right.setCol(1, temp);
        //
      } else if (number === 3) {
        temp = [...this.top.row(2)];
        this.top.setRow(2, this.right.col(0));
        this.right.setCol(0, this.bottom.row(0).reverse());
        this.bottom.setRow(0, this.left.col(2));
        this.left.setCol(2, temp.reverse());
        this.front.rotateLeft();
        //
      } else if (number === -3) {
        temp = [...this.top.row(2)];
        this.top.setRow(2, this.left.col(2).reverse());
        this.left.setCol(2, this.bottom.row(0));
        this.bottom.setRow(0, this.right.col(0).reverse());
        this.right.setCol(0, temp);
        this.front.rotateRight();
      }
    } else if (axis === "y") {
      if (number === 1) {
        temp = [...this.front.row(2)];
        this.front.setRow(2, this.left.row(2));
        this.left.setRow(2, this.back.row(0).reverse());
        this.back.setRow(0, this.right.row(2).reverse());
        this.right.setRow(2, temp);
        this.bottom.rotateRight();

        //
      } else if (number === -1) {
        temp = [...this.front.row(2)];
        this.front.setRow(2, this.right.row(2));
        this.right.setRow(2, this.back.row(0).reverse());
        this.back.setRow(0, this.left.row(2).reverse());
        this.left.setRow(2, temp);
        this.bottom.rotateLeft();

        //
      } else if (number === 2) {
        temp = [...this.front.row(1)];
        this.front.setRow(1, this.left.row(1));
        this.left.setRow(1, this.back.row(1).reverse());
        this.back.setRow(1, this.right.row(1).reverse());
        this.right.setRow(1, temp);
        //
      } else if (number === -2) {
        temp = [...this.front.row(1)];
        this.front.setRow(1, this.right.row(1));
        this.right.setRow(1, this.back.row(1).reverse());
        this.back.setRow(1, this.left.row(1).reverse());
        this.left.setRow(1, temp);
        //
      } else if (number === 3) {
        temp = [...this.front.row(0)];
        this.front.setRow(0, this.left.row(0));
        this.left.setRow(0, this.back.row(2).reverse());
        this.back.setRow(2, this.right.row(0).reverse());
        this.right.setRow(0, temp);
        this.top.rotateLeft();
        //
      } else if (number === -3) {
        temp = [...this.front.row(0)];
        this.front.setRow(0, this.right.row(0));
        this.right.setRow(0, this.back.row(2).reverse());
        this.back.setRow(2, this.left.row(0).reverse());
        this.left.setRow(0, temp);
        this.top.rotateRight();
      }
    }
  }

  rotateRandom() {
    let axisOptions = ["x", "y", "z"];
    let axisRandom = Math.floor(Math.random() * 3);
    let directionOptions = [1, 2, 3, -1, -2, -3];
    let directionRandom = Math.floor(Math.random() * 6);

    let currRandom = [
      axisOptions[axisRandom],
      directionOptions[directionRandom],
    ];

    if (
      this.lastRandom[0] === currRandom[0] &&
      this.lastRandom[1] === -currRandom[1]
    ) {
      this.rotateRandom();
    } else {
      this.lastRandom = currRandom;
      this.rotate(axisOptions[axisRandom], directionOptions[directionRandom]);
    }
  }
}

export { RubikCube };

/* let myCube = new RubikCube("test");
myCube.logVertical();
console.log("");

myCube.rotate("x", 3);
myCube.rotate("x", 2);
myCube.rotate("x", 1);
myCube.rotate("x", 3);
myCube.rotate("x", 2);
myCube.rotate("x", 1);
myCube.rotate("x", 3);
myCube.rotate("x", 2);
myCube.rotate("x", 1);
myCube.rotate("x", 3);
myCube.rotate("x", 2);
myCube.rotate("x", 1);

myCube.logVertical(); */
