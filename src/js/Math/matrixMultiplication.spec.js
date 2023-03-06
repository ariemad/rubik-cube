import { matrixMultiplication } from "./matrixMultiplication";

test("Test: 1", () => {
  let A = [
    [1, 2, 3],
    [4, 5, 6],
  ];
  let B = [
    [4, 5],
    [6, 7],
    [8, 9],
  ];
  expect(matrixMultiplication(A, B)).toEqual([
    [40, 46],
    [94, 109],
  ]);
});

test("Test: 2", () => {
  let B = [
    [1, 2, 3],
    [4, 5, 6],
  ];
  let A = [
    [4, 5],
    [6, 7],
    [8, 9],
  ];
  expect(matrixMultiplication(A, B)).toEqual([
    [24, 33, 42],
    [34, 47, 60],
    [44, 61, 78],
  ]);
});
