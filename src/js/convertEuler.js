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


 */

import { eulerZYXToRotationMatrix } from "./eulerZYXToRotationMatrix";

const convertEuler = (angles, prev, next) => {
  console.log(angles, prev, next);

  let newAxis = {};
  let newX, newY, newZ;

  let x = (angles.X * Math.PI) / 180;
  let y = (angles.Y * Math.PI) / 180;
  let z = (angles.Z * Math.PI) / 180;

  let m;
  if (prev === "X") {
    m = eulerZYXToRotationMatrix(x, y, z);
    //
  } else if (prev === "Y") {
    //
  } else if (prev === "Z") {
  }

  if (next === "X") {
    newY = Math.asin(-m13);
    let cosY = Math.cos(newY);
    if (Math.abs(cosY) > 0.00001) {
      newZ = Math.atan2(m12 / cosY, m11 / cosY);
      newX = Math.atan2(m23 / cosY, m33 / cosY);
    } else {
      newZ = 0;
      newX = Math.atan2(-m21, m22);
    }
    //
  } else if (next === "Y") {
    newX = Math.asin(m32);
    let cosX = Math.cos(newX);
    if (Math.abs(cosX) > 0.00001) {
      newZ = Math.atan2(-m21 / cosX, m22 / cosX);
      newY = Math.atan2(-m31 / cosX, m33 / cosX);
    } else {
      newZ = 0;
      newY = Math.atan2(m12, m11);
    }
    //
  } else if (next === "Z") {
    newY = Math.asin(-m31);
    let cosY = Math.cos(newY);
    if (Math.abs(cosY) > 0.00001) {
      newX = Math.atan2(m32 / cosY, m33 / cosY);
      newZ = Math.atan2(m21 / cosY, m11 / cosY);
    } else {
      newX = 0;
      newZ = Math.atan2(-m12, m22);
    }
  }

  newAxis.X = (newX * 180) / Math.PI;
  newAxis.Y = (newY * 180) / Math.PI;
  newAxis.Z = (newZ * 180) / Math.PI;

  console.log(newAxis);
  return newAxis;
};

export { convertEuler };
