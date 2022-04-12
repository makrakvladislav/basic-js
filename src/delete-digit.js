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
  let numb = Array.from(String(n), Number);
  let maxValue = numb.reduce(function(a, b) {
    return Math.max(a, b);
  });
  if (numb.indexOf(maxValue) === 0) {
  	numb.splice(numb.indexOf(maxValue) + 1, 1);
  } else {
  	numb.splice(numb.indexOf(maxValue) - 1, 1);
  }
  return +numb.join('');
}

module.exports = {
  deleteDigit
};
