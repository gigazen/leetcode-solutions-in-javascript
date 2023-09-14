/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  if (n === 0) return true;

  if (flowerbed[0] === 0 && flowerbed.length === 1) {
    n--;
  }

  if (flowerbed[0] === 0 && flowerbed[1] === 0) {
    n--;
    flowerbed[0] = 1;
  }

  if (
    flowerbed[flowerbed.length - 2] === 0 &&
    flowerbed[flowerbed.length - 1] === 0 &&
    n !== 0
  ) {
    n--;
    flowerbed[flowerbed.length - 1] = 1;
  }

  for (let i = 1; i < flowerbed.length - 1; i++) {
    if (
      flowerbed[i] === 0 &&
      flowerbed[i - 1] === 0 &&
      flowerbed[i + 1] === 0 &&
      n !== 0
    ) {
      flowerbed[i] = 1;
      n--;
    }
  }

  return n === 0;
};
