function eulerXYZToRotationMatrix(x, y, z) {
  let cx = Math.cos(x);
  let sx = Math.sin(x);
  let cy = Math.cos(y);
  let sy = Math.sin(y);
  let cz = Math.cos(z);
  let sz = Math.sin(z);

  let m11 = cy * cz;
  let m12 = cx * sz + cz * sx * sy;
  let m13 = -cx * sy + sx * cy * cz;
  let m21 = -cy * sz;
  let m22 = cx * cz - sx * sy * sz;
  let m23 = cz * sx + cx * sy * sz;
  let m31 = sy;
  let m32 = -sx * cy;
  let m33 = cx * cy;

  return [
    [m11, m12, m13],
    [m21, m22, m23],
    [m31, m32, m33],
  ];
}

let input = [-90, 120, -60].map((degrees) => (degrees * Math.PI) / 180);

console.log(eulerXYZToRotationMatrix(...input));

export { eulerXYZToRotationMatrix };
