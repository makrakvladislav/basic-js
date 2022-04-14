const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  if (str.length === 0) {
    return '';
  }

  let arr = str.match(/(.)\1*/g);
  let counter = 1;
  let result = [];
  
  arr.forEach(item => {
  	counter = item.length <= 1 ? '': item.length;
  	result.push(counter, item[0])
  })
  return result.join('');
  
  /*
  let arr = str.split('');
	let result = [];
  
  for (let i = 0, counter = 1; i < arr.length; i++) {
    if (arr[i] === arr[i+1]) {
    	counter++;
    } else if (counter <= 1) {
      result.push(arr[i])
    } else {
      result.push(counter, arr[i])
      counter = 1;
    }
  }
  */
}

module.exports = {
  encodeLine
};
