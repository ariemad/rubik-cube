import { eulerZYXToRotationMatrix as fn } from "./eulerZYXToRotationMatrix.js";

function isEqualWithTolerance(a, b, tolerance = 0.1) {
  console.log(a, b);
  return Math.abs(a - b) < tolerance;
}

test("0 0 0", () => {
  let input = [0, 0, 0].map((degrees) => (degrees * Math.PI) / 180);
  let ans = [
    [1.0, 0.0, 0.0],
    [0.0, 1.0, 0.0],
    [0.0, 0.0, 1.0],
  ].flat();
  expect(
    fn(...input)
      .flat()
      .every((element, index) => isEqualWithTolerance(element, ans[index]))
  ).toBe(true);
});

test("30 0 0", () => {
  let input = [30, 0, 0].map((degrees) => (degrees * Math.PI) / 180);
  let ans = [
    [1.0, 0.0, 0.0],
    [0.0, 0.8660254, -0.5],
    [0.0, 0.5, 0.8660254],
  ].flat();
  expect(
    fn(...input)
      .flat()
      .every((element, index) => isEqualWithTolerance(element, ans[index]))
  ).toBe(true);
});

test("45 0 0", () => {
  let input = [45, 0, 0].map((degrees) => (degrees * Math.PI) / 180);
  let ans = [
    [1.0, 0.0, 0.0],
    [0.0, 0.7071068, -0.7071068],
    [0.0, 0.7071068, 0.7071068],
  ].flat();
  expect(
    fn(...input)
      .flat()
      .every((element, index) => isEqualWithTolerance(element, ans[index]))
  ).toBe(true);
});

test("73 0 0", () => {
  let input = [73, 0, 0].map((degrees) => (degrees * Math.PI) / 180);
  let ans = [
    [1.0, 0.0, 0.0],
    [0.0, 0.2923717, -0.9563047],
    [0.0, 0.9563047, 0.292371],
  ].flat();
  expect(
    fn(...input)
      .flat()
      .every((element, index) => isEqualWithTolerance(element, ans[index]))
  ).toBe(true);
});

test("-90, 120, -60", () => {
  let input = [-90, 120, -60].map((degrees) => (degrees * Math.PI) / 180);
  let ans = [
    [-0.25, -0.4330127, 0.8660254],
    [0.4330127, 0.75, 0.5],
    [-0.8660254, 0.5, -0.0],
  ].flat();
  expect(
    fn(...input)
      .flat()
      .every((element, index) => isEqualWithTolerance(element, ans[index]))
  ).toBe(true);
});

test("140, -180, 160", () => {
  let input = [140, -180, 160].map((degrees) => (degrees * Math.PI) / 180);
  let ans = [
    [0.9396926, 0.2620026, 0.2198463],
    [-0.3420202, 0.7198463, 0.6040228],
    [0.0, -0.6427876, 0.7660444],
  ].flat();
  expect(
    fn(...input)
      .flat()
      .every((element, index) => isEqualWithTolerance(element, ans[index]))
  ).toBe(true);
});

test("30, -150, -90", () => {
  let input = [30, -150, -90].map((degrees) => (degrees * Math.PI) / 180);
  let ans = [
    [-0.0, 0.8660254, -0.5],
    [0.8660254, 0.25, 0.4330127],
    [0.5, -0.4330127, -0.75],
  ].flat();
  expect(
    fn(...input)
      .flat()
      .every((element, index) => isEqualWithTolerance(element, ans[index]))
  ).toBe(true);
});

test("-165, 165, 175", () => {
  let input = [-165, 165, 175].map((degrees) => (degrees * Math.PI) / 180);
  let ans = [
    [0.9622502, 0.1509184, 0.2264911],
    [-0.084186, 0.9564118, -0.2796231],
    [-0.258819, 0.25, 0.9330127],
  ].flat();
  expect(
    fn(...input)
      .flat()
      .every((element, index) => isEqualWithTolerance(element, ans[index]))
  ).toBe(true);
});

test("180, -135, 60", () => {
  let input = [180, -135, 60].map((degrees) => (degrees * Math.PI) / 180);
  let ans = [
    [-0.3535534, 0.8660254, 0.3535534],
    [-0.6123725, -0.5, 0.6123725],
    [0.7071068, -0.0, 0.7071068],
  ].flat();
  expect(
    fn(...input)
      .flat()
      .every((element, index) => isEqualWithTolerance(element, ans[index]))
  ).toBe(true);
});
