const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let repeat =  '1';
  let separator = '+';
  let addition = '';
  let additionRepeatTimes;
  let additionSeparator = '|';
  
  let string = [];
 
  if ('repeatTimes' in options) {
  	repeat = options.repeatTimes;
  }
  if ('separator' in options) {
  	separator = options.separator;
  }
  if ('addition' in options) {
  	addition = options.addition;
  }
  
  if ('additionRepeatTimes' in options) {
  	additionRepeatTimes = options.additionRepeatTimes;
  }
  
  if ('additionSeparator' in options) {
  	additionSeparator = options.additionSeparator;
  }
  
  for (let i = 0; i < repeat; i++) {
    string.push(str);
  }

  addition = String(addition); 
  
  let additionalSeparator = Array(additionRepeatTimes).fill(addition).join(additionSeparator);
  let result = string.fill(str+additionalSeparator).join(separator);
   
  return result; 
}

module.exports = {
  repeater
};
