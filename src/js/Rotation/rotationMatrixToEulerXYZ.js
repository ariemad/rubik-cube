function rotationMatrixToEulerXYZ(m) {
  let x, y, z;

  if (m[0][2] < 1) {
    if (m[0][2] > -1) {
      y = Math.asin(m[0][2]);
      x = Math.atan2(-m[1][2], m[2][2]);
      z = Math.atan2(-m[0][1], m[0][0]);
    } else {
      y = -Math.PI / 2;
      x = -Math.atan2(m[1][0], m[1][1]);
      z = 0;
    }
  } else {
    y = Math.PI / 2;
    x = Math.atan2(m[1][0], m[1][1]);
    z = 0;
  }

  return [x, y, z];
}

export { rotationMatrixToEulerXYZ };
