class RubikFace {
  constructor(number, state = "default") {
    if (state === "default") {
      this.face = [
        [number, number, number],
        [number, number, number],
        [number, number, number],
      ];
    } else if (state === "test") {
      this.face = [
        [number + 0.1, number + 0.2, number + 0.3],
        [number + 0.4, number + 0.5, number + 0.6],
        [number + 0.7, number + 0.8, number + 0.9],
      ];
    }
  }
  row(n) {
    return this.face[n];
  }

  setRow(n, arr) {
    this.face[n][0] = arr[0];
    this.face[n][1] = arr[1];
    this.face[n][2] = arr[2];
  }

  col(n) {
    return [this.face[0][n], this.face[1][n], this.face[2][n]];
  }

  setCol(n, arr) {
    this.face[0][n] = arr[0];
    this.face[1][n] = arr[1];
    this.face[2][n] = arr[2];
  }
}

export { RubikFace };
