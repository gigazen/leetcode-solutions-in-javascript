/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  // we have 9 rows, columns and block. Each row, column, block cannot have duplicate numbers. To check that take 9 sets for each of them. Also take 1 row array, column array and block array to store each 9 sets
  let rowSet = [];
  let colSet = [];
  let blockSet = [];

  for (let i = 0; i < 9; i++) {
    rowSet[i] = new Set();
    colSet[i] = new Set();
    blockSet[i] = new Set();
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let f = board[i][j];

      if (f == ".") continue;

      // each row check - same i, different j → same number → false → otherwise add
      if (rowSet[i].has(f)) return false;
      else rowSet[i].add(f);

      // each column check - same j, different i → same number → false → otherwise add
      if (colSet[j].has(f)) return false;
      else colSet[j].add(f);

      // each 3 × 3 block check - same b, different i, j → same number → false → otherwise add
      // formula for relationship between i, j and 3 × 3 block index, b
      let x = 3 * Math.floor(i / 3) + Math.floor(j / 3);
      // say, board[4][5] → i=4, j=5 → x=1*3+1=4 → board[4][5] is in 4th block
      if (blockSet[x].has(f)) return false;
      else blockSet[x].add(f);
    }
  }
  return true;
};