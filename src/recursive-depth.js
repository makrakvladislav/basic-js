const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let counter = 1;
    let maxDepth = 1;
    arr.forEach((item, i) => {
      if (typeof item === 'object') {
        counter += this.calculateDepth(item);
      }
      if (counter > maxDepth) {
        maxDepth = counter;
      }
      counter = 1;
    });
    return maxDepth;
  }
}

module.exports = {
  DepthCalculator
};
