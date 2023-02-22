function eulerXYZToRotationMatrix(x, y, z) {
  let c1 = Math.cos(x);
  let s1 = Math.sin(x);
  let c2 = Math.cos(y);
  let s2 = Math.sin(y);
  let c3 = Math.cos(z);
  let s3 = Math.sin(z);

  let m11 = c2 * c3;
  let m12 = -c2 * s3;
  let m13 = s2;
  let m21 = c1 * s3 + c3 * s1 * s2;
  let m22 = c1 * c3 - s1 * s2 * s3;
  let m23 = -c2 * s1;
  let m31 = s1 * s3 - c1 * c3 * s2;
  let m32 = c3 * s1 + c1 * s2 * s3;
  let m33 = c1 * c2;

  return [
    [m11, m12, m13],
    [m21, m22, m23],
    [m31, m32, m33],
  ];
}

export { eulerXYZToRotationMatrix };
