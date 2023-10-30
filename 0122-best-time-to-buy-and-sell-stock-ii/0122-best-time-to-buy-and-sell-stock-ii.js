/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    let prevPrice = prices[i - 1];
    let currPrice = prices[i];

    if (prevPrice < currPrice) {
      maxProfit += currPrice - prevPrice;
    }
  }

  return maxProfit;
};
