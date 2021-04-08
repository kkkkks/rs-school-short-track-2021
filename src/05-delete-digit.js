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
  const arr = [];
  const str = n.toString();
  for (let i = 0; i < str.length - 1; i++) {
    const num = str.slice(0, i) + str.slice(i + 1);
    arr.push(Number(num));
  }

  for (let i = str.length - 1; i > 0; i--) {
    const num = str.slice(0, i) + str.slice(i + 1);
    arr.push(Number(num));
  }
  return arr.sort((a, b) => b - a)[0];
}

module.exports = deleteDigit;
