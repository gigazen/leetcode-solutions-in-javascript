/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let [bought, buyingPrice, sellingPrice, profit] = [false, 0, 0, 0];
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < prices[i + 1] && !bought) {
      buyingPrice = prices[i];
      bought = true;
    }
    if (prices[i] > prices[i + 1] && bought) {
      sellingPrice = prices[i];
      bought = false;
      profit += sellingPrice - buyingPrice;
    }

    if (bought && i === prices.length - 1) profit += prices[i] - buyingPrice;
  }

  return profit;
};