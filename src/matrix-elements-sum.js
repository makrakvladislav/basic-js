const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
 function getMatrixElementsSum(matrix) {
  let sum = 0;
  matrix.forEach((item, i) => {
    if(i === 0) {
    	item.forEach((item, i) => {
       sum += item;
    	});
    } else {
    	item.forEach((item, j) => {
      	if (matrix[i-1][j] !== 0) {
        	sum += item;
        }
      })
    }
  });
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
