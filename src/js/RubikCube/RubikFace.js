class RubikFace {
  constructor(number) {
    this.face = [
      [number, number, number],
      [number, number, number],
      [number, number, number],
    ];
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
