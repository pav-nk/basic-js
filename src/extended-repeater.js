const { NotImplementedError } = require("../extensions/index.js");

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
  const correctOptions = Object.assign(
    {
      repeatTimes: 1,
      addition: "",
      additionRepeatTimes: 1,
      separator: "+",
      additionSeparator: "|",
    },
    options
  );

  function getRepeatStr(newStr, times, separator) {
    console.log(newStr);
    return `${newStr}${separator}`.repeat(times).slice(0, -separator.length);
  }
  const { repeatTimes, addition, additionRepeatTimes, separator, additionSeparator } = correctOptions;
  const additionStr = getRepeatStr(addition, additionRepeatTimes, additionSeparator);
  return getRepeatStr(`${str}${additionStr}`, repeatTimes, separator);
}

module.exports = {
  repeater,
};
