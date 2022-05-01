const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error ("'arr' parameter must be an instance of the Array!");
  }
  const tempArr = new Array(...arr);
  tempArr.forEach((item, i) => {
    switch (item) {
    	case ('--discard-next'): {
        if (i === tempArr.length - 1) {
        	tempArr.splice(i, 1);
          break;
        }
        tempArr.splice(i, 2);
        break;
      }
      case ('--discard-prev'): {
        if (i === 0) {
        	tempArr.splice(i, 1);
          break;
        }
        tempArr.splice(i-1, 2);
        break;
      }
      case ('--double-next'): {
        if (i === tempArr.length - 1) {
        	tempArr.splice(i, 1);
          break;
        }
        tempArr.splice(i, 1, tempArr[i+1]);
        break;
      }
      case ('--double-prev'): {
        if (i === 0) {
          tempArr.splice(i, 1);
          break;
        }
        tempArr.splice(i, 1, tempArr[i-1]);
        break;
      }
    }
  });
  const result = tempArr.filter(item => {
    return item !== '--double-prev' && item !== '--discard-next' && item !== '--discard-prev' && item !== '--double-next';
  });

  return result;
}

module.exports = {
  transform
};
