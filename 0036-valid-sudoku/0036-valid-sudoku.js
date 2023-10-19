/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  // for row, column: return false if duplicate item found
  for (let i = 0; i < 9; i++) {
    let currRow = new Set();
    let currCol = new Set();

    for (let j = 0; j < 9; j++) {
      let itemInCurrRow = board[i][j];
      let itemInCurrCol = board[j][i];

      if (itemInCurrRow !== "." && currRow.has(itemInCurrRow)) return false;
      currRow.add(itemInCurrRow);

      if (itemInCurrCol !== "." && currCol.has(itemInCurrCol)) return false;
      currCol.add(itemInCurrCol);
    }
  }

  // for block: return false if duplicate item found
  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      let currBlock = new Set();

      for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++) {
          let itemInCurrBlock = board[i + x][j + y];

          if (itemInCurrBlock !== "." && currBlock.has(itemInCurrBlock))
            return false;
          currBlock.add(itemInCurrBlock);
        }
      }
    }
  }

  return true;
};