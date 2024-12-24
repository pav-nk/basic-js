const { NotImplementedError } = require("../extensions/index.js");

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
  const strSumElements = str.split("").reduce((acc, el, idx, list) => {
    if (acc[el] && list[idx - 1] === el) {
      acc[el] += 1;
    } else {
      acc[el] = 1;
    }
    return acc;
  }, {});
  const resultStr = str.split("")
    .map((el) => `${strSumElements[el] === 1 ? "" : strSumElements[el]}${el}`)
    .filter((str, idx, list) => list[idx + 1] !== str).join('');
  return resultStr;
}

module.exports = {
  encodeLine,
};
