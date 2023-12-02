/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function (dominoes) {
  dominoes = "L" + dominoes + "R";
  const arr = dominoes.split(""),
    n = dominoes.length;

  for (let i = 0, j = 1; j < n; j++) {
    if (arr[j] === ".") continue;

    if (arr[i] === "L" && arr[j] === "L") {
      // make all dots as L
      for (let k = i + 1; k < j; k++) arr[k] = "L";
    } else if (arr[i] === "R" && arr[j] === "R") {
      // make all dots as R
      for (let k = i + 1; k < j; k++) arr[k] = "R";
    } else if (arr[i] === "L" && arr[j] === "R") {
      // nothing to do
    } else {
      // solve acc. to odd and even number of dots
      let mid = Math.floor((i + j) / 2);
      if ((j - i) % 2 === 0) {
        // odd dots
        for (let k = i + 1; k < mid; k++) arr[k] = "R";
        for (let k = mid + 1; k < j; k++) arr[k] = "L";
      } else {
        // even dots
        for (let k = i + 1; k <= mid; k++) arr[k] = "R";
        for (let k = mid + 1; k < j; k++) arr[k] = "L";
      }
    }
    i = j;
  }

  // remove the added L and R at the beginning and end, and create a string
  return arr.slice(1, n - 1).join("");
};