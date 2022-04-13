const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = Array.from(String(n), Number);
  let maxValue = arr.reduce((a, b) => Math.max(a, b));
  let item = arr.indexOf(maxValue);
  if (arr.indexOf(maxValue) === 0) {
  	arr.splice(item + 1, 1);
  } else {
  	arr.splice(item - 1, 1);
  }
  return +arr.join('');
}

module.exports = {
  deleteDigit
};
