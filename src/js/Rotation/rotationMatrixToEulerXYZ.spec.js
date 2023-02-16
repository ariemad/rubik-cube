import { rotationMatrixToEulerXYZ as fn } from "./rotationMatrixToEulerXYZ";

function isEqualWithTolerance(a, b, tolerance = 0.1) {
  return Math.abs(a - b) < tolerance;
}

test("0 0 0", () => {
  let input = [
    [1.0, 0.0, 0.0],
    [0.0, 1.0, 0.0],
    [0.0, 0.0, 1.0],
  ];
  let ans = [0, 0, 0].map((degrees) => (degrees * Math.PI) / 180);

  expect(
    fn(input).every((element, index) =>
      isEqualWithTolerance(element, ans[index])
    )
  ).toBe(true);
});

test("30 0 0", () => {
  let input = [
    [1.0, 0.0, 0.0],
    [0.0, 0.8660254, -0.5],
    [0.0, 0.5, 0.8660254],
  ];
  let ans = [30, 0, 0].map((degrees) => (degrees * Math.PI) / 180);

  expect(
    fn(input).every((element, index) =>
      isEqualWithTolerance(element, ans[index])
    )
  ).toBe(true);
});

test("45 0 0", () => {
  let input = [
    [1.0, 0.0, 0.0],
    [0.0, 0.7071068, -0.7071068],
    [0.0, 0.7071068, 0.7071068],
  ];
  let ans = [45, 0, 0].map((degrees) => (degrees * Math.PI) / 180);

  expect(
    fn(input).every((element, index) =>
      isEqualWithTolerance(element, ans[index])
    )
  ).toBe(true);
});

test("73 0 0", () => {
  let input = [
    [1.0, 0.0, 0.0],
    [0.0, 0.2923717, -0.9563047],
    [0.0, 0.9563047, 0.292371],
  ];
  let ans = [73, 0, 0].map((degrees) => (degrees * Math.PI) / 180);

  expect(
    fn(input).every((element, index) =>
      isEqualWithTolerance(element, ans[index])
    )
  ).toBe(true);
});

test("90, 60, 120", () => {
  let input = [
    [-0.25, -0.4330127, 0.8660254],
    [-0.4330127, -0.75, -0.5],
    [0.8660254, -0.5, -0.0],
  ];
  let ans = [90, 60, 120].map((degrees) => (degrees * Math.PI) / 180);

  expect(
    fn(input).every((element, index) =>
      isEqualWithTolerance(element, ans[index])
    )
  ).toBe(true);
});

test("-40, 0, -20", () => {
  let input = [
    [0.9396926, 0.3420202, -0.0],
    [-0.2620026, 0.7198463, 0.6427876],
    [0.2198463, -0.6040228, 0.7660444],
  ];
  let ans = [-40, 0, -20].map((degrees) => (degrees * Math.PI) / 180);

  expect(
    fn(input).every((element, index) =>
      isEqualWithTolerance(element, ans[index])
    )
  ).toBe(true);
});

test("-150, -30, 90", () => {
  let input = [
    [0.0, -0.8660254, -0.5],
    [-0.8660254, -0.25, 0.4330127],
    [-0.5, 0.4330127, -0.75],
  ];
  let ans = [-150, -30, 90].map((degrees) => (degrees * Math.PI) / 180);

  expect(
    fn(input).every((element, index) =>
      isEqualWithTolerance(element, ans[index])
    )
  ).toBe(true);
});

test("-165, 165, 175", () => {
  let input = [
    [0.9622502, 0.084186, 0.258819],
    [-0.0174536, 0.9680885, -0.25],
    [-0.2716062, 0.2360452, 0.9330127],
  ];
  let ans = [15, 15, -5].map((degrees) => (degrees * Math.PI) / 180);

  expect(
    fn(input).every((element, index) =>
      isEqualWithTolerance(element, ans[index])
    )
  ).toBe(true);
});

test("0, -45, -120", () => {
  let input = [
    [-0.3535534, 0.6123725, -0.7071068],
    [-0.8660254, -0.5, 0.0],
    [-0.3535534, 0.6123725, 0.7071068],
  ];
  let ans = [0, -45, -120].map((degrees) => (degrees * Math.PI) / 180);

  expect(
    fn(input).every((element, index) =>
      isEqualWithTolerance(element, ans[index])
    )
  ).toBe(true);
});
