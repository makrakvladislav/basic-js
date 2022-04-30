const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let result = Array.from(arr).sort((a, b) => {
  	return a - b;
  })
  .filter(item => {
  	if (item !== -1) {
    	return item;
    }
  });
  
  arr.forEach((item, i) => {
    if (item === -1) {
    	result.splice(i, 0, -1);
    }
  });

  return result;
}

module.exports = {
  sortByHeight
};
