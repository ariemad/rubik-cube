export function matrixMultiplication(A, B) {
  // Get the dimensions of the matrices
  const rowsA = A.length;
  const colsA = A[0].length;
  const rowsB = B.length;
  const colsB = B[0].length;

  // Check if the matrices can be multiplied
  if (colsA !== rowsB) {
    throw new Error("Matrices cannot be multiplied");
  }

  // Create the result matrix
  const C = [];
  for (let i = 0; i < rowsA; i++) {
    C[i] = [];
  }

  // Perform matrix multiplication
  for (let k = 0; k < colsB; k++) {
    for (let i = 0; i < rowsA; i++) {
      let sum = 0;
      for (let j = 0; j < colsA; j++) {
        sum += A[i][j] * B[j][k];
      }
      C[i][k] = sum;
    }
  }

  return C;
}
