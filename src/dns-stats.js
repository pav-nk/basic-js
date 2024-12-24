const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const domainsList = domains.flatMap((domain) =>
    domain
      .split(".")
      .reverse()
      .map((el) => `.${el}`)
  );
  const result = domainsList.reduce(
    (acc, domain) => {
      if (acc.data[domain]) {
        acc.data[domain] += 1;
        return acc;
      }
      if (`${acc.lastName}`.includes(domain) && acc.data[`${acc.lastName}`]) {
        acc.data[`${acc.lastName}`] += 1;
        return acc;
      }
      if (!acc.lastName) {
        acc.lastName = domain;
        acc.data[domain] = 1;
        return acc;
      }
      if (!acc.data[`${acc.lastName}${domain}`]) {
        acc.data[`${acc.lastName}${domain}`] = 1;
        acc.lastName += domain;
        return acc;
      }
      return acc;
    },
    { lastName: "", data: {} }
  );
  return result.data;
}

module.exports = {
  getDNSStats,
};
