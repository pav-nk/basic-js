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
  const items = String(n).split('').map((el) => +el);
  const maxValues = items.reduce((acc, _, index, arr) => {
    const maxValue =  Number(arr.filter((el, i) => i !== index).join(''));
    acc.push(maxValue);
    return acc;
  }, []);
  console.log(maxValues);
  return Math.max(...maxValues);
}

module.exports = {
  deleteDigit
};
