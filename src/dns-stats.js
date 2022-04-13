const { NotImplementedError } = require('../extensions/index.js');

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
  let domainsList = {};
  for	(let i = 0; i < domains.length; i++) {
    let item = domains[i].split('.');
    for (let i = 0; i < item.length; i++) {
      let domain = '.' + item.slice(i).reverse().join('.');
      if (domainsList.hasOwnProperty(domain)) {
        domainsList[domain] += 1;
      } else {
        domainsList[domain] = 1;
      }
    }
  }
  return domainsList;
}

module.exports = {
  getDNSStats
};
