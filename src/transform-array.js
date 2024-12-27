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

  if (!Array.isArray(arr)) throw new Error(`'arr' parameter must be an instance of the Array!`);

  let arrCopy = [...arr];

  const actionMap = {
    "--discard-next": {step: 1, value: 'delete'},
    "--discard-prev": {step: -1, value: 'delete'},
    "--double-next": {step: 1, value: 'add'},
    "--double-prev": {step: -1, value: 'add'},
  }

  for (let i = 0; i < arrCopy.length; i += 1) {
      if (actionMap.hasOwnProperty(arrCopy[i])) {
        const action = actionMap[arrCopy[i]];
        const newIdx = i + action.step;
        if (!arrCopy[newIdx]) continue;
        if (action.value === 'delete') {
          arrCopy.splice(newIdx, 1);
        } else {
          arrCopy.splice(i, 1, arrCopy[i + action.step]);
        }
      }
  }
  return arrCopy.filter((el) => !actionMap.hasOwnProperty(el));
}

module.exports = {
  transform
};
