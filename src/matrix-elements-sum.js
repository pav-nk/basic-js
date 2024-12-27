const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const sumArr = [];
  for (let i = 0; i < matrix.length; i += 1) {
    if (i === 0) {
      sumArr.push(matrix[i].reduce((acc, el) => acc + el));
    } else {
      sumArr.push(matrix[i].reduce((acc, el, idx) => {
        if (matrix[i - 1][idx] === 0) {
          acc += 0;
        } else {
          acc += el;
        }
        return acc;
      }, 0));
    }
  }
  return sumArr.reduce((acc, el) => acc + el);
}

module.exports = {
  getMatrixElementsSum
};
