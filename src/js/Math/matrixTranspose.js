export function transpose(matrix) {
  const numRows = matrix.length;
  const numCols = matrix[0].length;

  // Initialize a new matrix with swapped dimensions
  const result = new Array(numCols);
  for (let i = 0; i < numCols; i++) {
    result[i] = new Array(numRows);
  }

  // Swap the rows and columns of the original matrix
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      result[j][i] = matrix[i][j];
    }
  }

  return result;
}
