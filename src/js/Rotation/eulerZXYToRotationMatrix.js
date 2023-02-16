function eulerZXYToRotationMatrix(x, y, z) {
  let cx = Math.cos(x);
  let sx = Math.sin(x);
  let cy = Math.cos(y);
  let sy = Math.sin(y);
  let cz = Math.cos(z);
  let sz = Math.sin(z);

  let m11 = cy * cz - sx * sy * sz;
  let m12 = -cx * sz;
  let m13 = cz * sy + cy * sx * sz;
  let m21 = cz * sx * sy + cy * sz;
  let m22 = cx * cz;
  let m23 = -cy * cz * sx + sy * sz;
  let m31 = -cx * sy;
  let m32 = sx;
  let m33 = cx * cy;

  return [
    [m11, m12, m13],
    [m21, m22, m23],
    [m31, m32, m33],
  ];
}

export { eulerZXYToRotationMatrix };
