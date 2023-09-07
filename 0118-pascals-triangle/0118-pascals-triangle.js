/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let result = [];
  for (let i = 0; i < numRows; i++) {
    result[i] = new Array(i + 1);
    // result[2] = [undefined, undefined, undefined]

    result[i][0] = 1;
    result[i][i] = 1;
    // [1, undefined, 1]

    // need to manipulate value from the 1st element till the penultimate element in a column, skip the 0th and last columns as they should be 1s
    for (let j = 1; j < i; j++) {
      // for i = 2, add the element at previous 1st row-0th column with previous 1st row-1st column, result[1][0] + result[1][1] = 1 + 1 = 2, see Pascal's triangle image 
      result[i][j] = result[i - 1][j - 1] + result[i - 1][j];
      // [1, 2, 1]
    }
  }
  return result; 
};