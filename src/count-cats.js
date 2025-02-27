const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let counter = 0;
  catsCounter(matrix);
  function catsCounter(matrix) {
    for (let i = 0; i < matrix.length; i++) {
      if ( typeof(matrix[i]) == "object") {
        if (matrix[i] !== null) {
          catsCounter(matrix[i]);
        }	
      }
      if(matrix[i] === "^^") {
        counter +=1;
      }
    }
  }
  return counter;
}

module.exports = {
  countCats
};
