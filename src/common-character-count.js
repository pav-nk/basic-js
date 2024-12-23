const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const s1List = s1.split('');
  let s2Copy = s2;
  s1List.forEach((el) => {
    s2Copy = s2Copy.replace(el, '');
  });
  return s2.length - s2Copy.length;
}

module.exports = {
  getCommonCharacterCount
};
