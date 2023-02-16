function eulerZYXToRotationMatrix(x, y, z) {
  let cx = Math.cos(x);
  let sx = Math.sin(x);
  let cy = Math.cos(y);
  let sy = Math.sin(y);
  let cz = Math.cos(z);
  let sz = Math.sin(z);

  let m11 = cy * cz;
  let m12 = -cx * sz + cz * sx * sy;
  let m13 = cx * cz * sy + sx * sz;
  let m21 = cy * sz;
  let m22 = cx * cz + sx * sy * sz;
  let m23 = cx * sy * sz - cz * sx;
  let m31 = -sy;
  let m32 = cy * sx;
  let m33 = cx * cy;

  return [
    [m11, m12, m13],
    [m21, m22, m23],
    [m31, m32, m33],
  ];
}

export { eulerZYXToRotationMatrix };
