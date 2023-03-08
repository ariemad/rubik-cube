function calcCenter(p1, p2, p3) {
  let pCenter = new Array(3);

  pCenter[0] = (p1[0] + p2[0] + p3[0]) / 3;
  pCenter[1] = (p1[1] + p2[1] + p3[1]) / 3;
  pCenter[2] = (p1[2] + p2[2] + p3[2]) / 3;

  return pCenter;
}

function getPolar(point) {
  let r = Math.sqrt(point[0] ** 2 + point[1] ** 2 + point[2] ** 2);
  let theta = Math.acos(point[2] / r);
  let phi = Math.atan2(point[1], point[0]);

  theta = (theta * 180) / Math.PI;
  phi = (phi * 180) / Math.PI;

  return { r, theta, phi };
}

let p1 = [0.5, 0.618 / 2, 0];
let p2 = [0, 0.5, 0.618 / 2];
let p3 = [0.618 / 2, 0, 0.5];

let pCenter = calcCenter(p1, p2, p3);
console.log(getPolar(pCenter));
