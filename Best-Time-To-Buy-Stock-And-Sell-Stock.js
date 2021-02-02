// Input: [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
//              Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.

// min = 3
// ret = 4

var maxProfit = function(prices) {
  let min = prices[0], profit = 0;

  for(var i=0; i<prices.length; i++){
    if (prices[i] < min) {
      min = prices[i];
    } else {
      profit += prices[i] - min;
      min = prices[i];
    }
  }

  return profit;
};