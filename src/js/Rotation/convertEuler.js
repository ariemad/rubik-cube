/* 

Axis Slider = {x: degrees, y: degrees, z: degrees, prev: 'X' or 'Y' or 'Z'}

There are 3 EULER angles being used.

XYZ - When the user is changing the Z slider
ZXY - When the user is changing the Y slider
ZYX - When the user is changing the X slider

prev - Indicates the system before function
next - Indicates the system we want to use

There are 6 possible transformations:

XYZ to ZXY ||| Z to Y
XYZ to ZYX ||| Z to X
ZXY to ZYX ||| Y to X
ZXY to XYZ ||| Y to Z
ZYX to ZXY ||| X to Y
ZYX to XYZ ||| X to Z

Formulas can be found in:
https://www.geometrictools.com/Documentation/EulerAngles.pdf


 */

import { eulerXYZToRotationMatrix } from "./eulerXYZToRotationMatrix.js";
import { eulerZXYToRotationMatrix } from "./eulerZXYToRotationMatrix.js";
import { eulerZYXToRotationMatrix } from "./eulerZYXToRotationMatrix.js";
import { rotationMatrixToEulerXYZ } from "./rotationMatrixToEulerXYZ.js";
import { rotationMatrixToEulerZXY } from "./rotationMatrixToEulerZXY.js";
import { rotationMatrixToEulerZYX } from "./rotationMatrixToEulerZYX.js";

const convertEuler = (angles, prev, next) => {
  let newX, newY, newZ;

  let x = (angles.X * Math.PI) / 180;
  let y = (angles.Y * Math.PI) / 180;
  let z = (angles.Z * Math.PI) / 180;

  let m;
  if (prev === "X") {
    m = eulerZYXToRotationMatrix(x, y, z);
    //
  } else if (prev === "Y") {
    m = eulerZXYToRotationMatrix(x, y, z);
    //
  } else if (prev === "Z") {
    m = eulerXYZToRotationMatrix(x, y, z);
  }

  if (next === "X") {
    [newX, newY, newZ] = rotationMatrixToEulerZYX(m);
    //
  } else if (next === "Y") {
    [newX, newY, newZ] = rotationMatrixToEulerZXY(m);
    //
  } else if (next === "Z") {
    [newX, newY, newZ] = rotationMatrixToEulerXYZ(m);
  }

  [newX, newY, newZ] = [newX, newY, newZ].map(
    (radians) => (radians * 180) / Math.PI
  );

  return { X: newX, Y: newY, Z: newZ };
};

export { convertEuler };
