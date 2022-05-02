const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr: [],
  getLength() {
  	console.log(this.arr.length);
    return this.arr.length;
  },
  addLink(value) {
    this.arr.push(value);
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || position <= 0 || position - 1 >= this.arr.length) {
      this.arr.length = 0;
      throw new Error ("You can't remove incorrect link!");
    }
    this.arr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.arr.reverse()
    return this;
  },
  finishChain() {
    let result = this.arr.map(item => {
    	return `( ${item} )`;
    }).join('~~');
    //let result = this.arr.join('~~');
    this.arr.length = 0;
    return result;
  }
};

module.exports = {
  chainMaker
};
