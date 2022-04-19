const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  return new RegExp(/^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/g).test(n)
  /*
  let arr = n.split('-');
  let hexArr = arr.map((item) =>{
    let numb = parseInt(item,16);
    return numb.toString(16).padStart(2, '0').toUpperCase();
  });
  let str = arr.join('');
  if (hexArr.join('') === str) {
    return true;
  } else {
    return false;
  }
  */
}
module.exports = {
  isMAC48Address
};
