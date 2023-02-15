function rotationMatrixToEulerZYX(m) {
  let x, y, z;

  if (m[2][0] < 1) {
    if (m[2][0] > -1) {
      y = Math.asin(-m[2][0]);
      z = Math.atan2(m[1][0], m[0][0]);
      x = Math.atan2(m[2][1], m[2][2]);
    } else {
      y = Math.PI / 2;
      z = -Math.atan2(-m[1][2], m[1][1]);
      x = 0;
    }
  } else {
    y = -Math.PI / 2;
    z = Math.atan2(-m[1][2], m[1][1]);
    x = 0;
  }

  console.log([x, y, z]);

  return [x, y, z];
}

export { rotationMatrixToEulerZYX };
