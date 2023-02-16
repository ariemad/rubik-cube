function rotationMatrixToEulerZXY(m) {
  let x, y, z;

  if (m[2][1] < 1) {
    if (m[2][1] > -1) {
      x = Math.asin(m[2][1]);
      z = Math.atan2(-m[0][1], m[1][1]);
      y = Math.atan2(-m[2][0], m[2][2]);
    } else {
      x = -Math.PI / 2;
      z = -Math.atan2(m[0][2], m[0][0]);
      y = 0;
    }
  } else {
    x = Math.PI / 2;
    z = Math.atan2(m[0][2], m[0][0]);
    y = 0;
  }

  return [x, y, z];
}

export { rotationMatrixToEulerZXY };
