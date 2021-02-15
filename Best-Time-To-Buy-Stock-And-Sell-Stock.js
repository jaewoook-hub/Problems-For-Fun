// Input: [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
//              Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.

// min = 3
// ret = 4

var maxProfit = function(prices) {
  let result = 0;
  let min = prices[0];
  for(let i = 1; i < prices.length; i++) {
      min = Math.min(prices[i], min);
      result = Math.max(result, prices[i] - min);
  }
  return result;
};