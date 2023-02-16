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

class RubikCube {
  constructor() {
    this.front = new RubikFace(0);
    this.top = new RubikFace(1);
    this.back = new RubikFace(2);
    this.bottom = new RubikFace(3);
    this.left = new RubikFace(4);
    this.right = new RubikFace(5);
  }

  logVertical() {
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
    if (axis === "x") {
      if (number === 1) {
        temp = [...this.top.col(0)];
        this.top.setCol(0, this.back.col(0));
        this.back.setCol(0, this.bottom.col(0));
        this.bottom.setCol(0, this.front.col(0));
        this.front.setCol(0, temp);
        //
      } else if (number === -1) {
        temp = [...this.top.col(0)];
        this.top.setCol(0, this.front.col(0));
        this.front.setCol(0, this.bottom.col(0));
        this.bottom.setCol(0, this.back.col(0));
        this.back.setCol(0, temp);
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
        //
      } else if (number === -3) {
        temp = this.top.col(2);
        this.top.setCol(2, this.front.col(2));
        this.front.setCol(2, this.bottom.col(2));
        this.bottom.setCol(2, this.back.col(2));
        this.back.setCol(2, temp);
        //
      }
    } else if (axis === "y") {
      if (number === 1) {
        temp = [...this.top.row(0)];
        this.top.setRow(0, this.right.col(2));
        this.right.setCol(2, this.bottom.row(2).reverse());
        this.bottom.setRow(2, this.left.col(0));
        this.left.setCol(0, temp.reverse());
        //
      } else if (number === -1) {
        temp = [...this.top.row(0)];
        this.top.setRow(0, this.left.col(0).reverse());
        this.left.setCol(0, this.bottom.row(2));
        this.bottom.setRow(2, this.right.col(2).reverse());
        this.right.setCol(2, this.top.row(2));
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
      }
    } else if (axis === "z") {
    }
  }
}

let myCube = new RubikCube();

myCube.rotate("y", -2);
myCube.logVertical();
