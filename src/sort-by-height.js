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
  const copyArr = [...arr];
  const sortedArr = arr.sort((item1, item2) => item2 - item1).filter((item) => item !== -1);
  return copyArr.map((item) => {
    if (item !== -1) return sortedArr.pop();
    return item;
  });
}

module.exports = {
  sortByHeight
};
