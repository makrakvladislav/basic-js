const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const field = [];
	let counter = 0;
  
  for (let i = 0; i < matrix.length; i++) {
  	field.push(new Array());
  	for (let j = 0; j < matrix[i].length; j++) {
    	field[i][j] = 0;
    }
  }

  for (let row = 0; row < matrix.length; row++) {

    for (let col = 0; col < matrix[row].length; col++) {

      if (matrix[row][col] === true) {
        console.log(matrix[col + 1])
        
        if (row + 1 < field.length) {
          field[row + 1][col] += 1;
        }
        
        if (row - 1 >= 0) {
          field [row - 1][col] += 1;
        }
        
        if (col - 1 >= 0 && row - 1 >= 0) {
          field [row - 1][col - 1] += 1;
        }
        
        if (col + 1 < field.length && row - 1 >= 0) {
          field[row - 1][col + 1] += 1;
        }
        
        if (col - 1 >= 0 && row + 1 < field.length) {
          field[row + 1][col - 1] += 1;
        }
        
        if (row + 1 < field.length && col + 1 < field.length) {
          field[row + 1][col + 1] += 1;
        } 
        
        if (col + 1 < field.length) {
          field[row][col + 1] += 1;
        }
        
        if (col - 1 >= 0) {
          field[row][col - 1] += 1;
        }
      }

    }
  }
  console.log(field);
  return field;
}

module.exports = {
  minesweeper
};
