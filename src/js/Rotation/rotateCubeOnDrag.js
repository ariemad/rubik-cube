/* 
This is similar to convertEuler.js


Convert euler to rotation Matrix.

Get a rotation matrix according to rotationAxis and degrees

Multiply both rotation matrixes

Convert back to euler on the same representation



 */

import { matrixMultiplication } from "../Math/matrixMultiplication.js";
import { eulerXYZToRotationMatrix } from "./eulerXYZToRotationMatrix.js";
import { eulerZXYToRotationMatrix } from "./eulerZXYToRotationMatrix.js";
import { eulerZYXToRotationMatrix } from "./eulerZYXToRotationMatrix.js";
import { rotationMatrixToEulerXYZ } from "./rotationMatrixToEulerXYZ.js";
import { rotationMatrixToEulerZXY } from "./rotationMatrixToEulerZXY.js";
import { rotationMatrixToEulerZYX } from "./rotationMatrixToEulerZYX.js";

const rotateCubeOnDrag = (
  eulerAxis,
  eulerRepresentation,
  degreesX,
  degreesY
) => {
  let newX, newY, newZ;

  let x = (eulerAxis.X * Math.PI) / 180;
  let y = (eulerAxis.Y * Math.PI) / 180;
  let z = (eulerAxis.Z * Math.PI) / 180;

  let m1;
  if (eulerRepresentation === "X") {
    m1 = eulerZYXToRotationMatrix(x, y, z);
    //
  } else if (eulerRepresentation === "Y") {
    m1 = eulerZXYToRotationMatrix(x, y, z);
    //
  } else if (eulerRepresentation === "Z") {
    m1 = eulerXYZToRotationMatrix(x, y, z);
  }

  let radiansX = (degreesY * Math.PI) / 180;
  let radiansY = (degreesX * Math.PI) / 180;
  let radians = Math.sqrt(radiansX ** 2 + radiansY ** 2);
  let vector = [radiansX / radians, radiansY / radians, 0];

  let cos = Math.cos(radians);
  let sin = Math.sin(radians);
  let ux = vector[0];
  let uy = vector[1];
  //There is no uz in this case

  let mRotation = [
    [cos + ux ** 2 * (1 - cos), ux * uy * (1 - cos), uy * sin],
    [uy * ux * (1 - cos), cos + uy ** 2 * (1 - cos), -ux * sin],
    [-uy * sin, ux * sin, cos],
  ];

  let m2 = matrixMultiplication(mRotation, m1);

  if (eulerRepresentation === "X") {
    [newX, newY, newZ] = rotationMatrixToEulerZYX(m2);
    //
  } else if (eulerRepresentation === "Y") {
    [newX, newY, newZ] = rotationMatrixToEulerZXY(m2);
    //
  } else if (eulerRepresentation === "Z") {
    [newX, newY, newZ] = rotationMatrixToEulerXYZ(m2);
  }

  [newX, newY, newZ] = [newX, newY, newZ].map(
    (radians) => (radians * 180) / Math.PI
  );

  return { X: newX, Y: newY, Z: newZ };
};

export { rotateCubeOnDrag };
