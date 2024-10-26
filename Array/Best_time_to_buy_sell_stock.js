/**
 * Finds the maximum possible profit from a single buy/sell transaction on a given array of stock prices.
 * @param {number[]} prices - The array of stock prices.
 * @returns {number} The maximum possible profit.
 */
var maxProfit = function(prices) {
    // Initialize the buy price to the first element of the array and the profit to 0.
    let buyPrice = prices[0];
    let profit = 0;

    // Iterate through the array starting from the second element.
    for (let i = 1; i < prices.length; i++) {
        // If the current element is less than the buy price, update the buy price.
        if (buyPrice > prices[i]) {
            buyPrice = prices[i];
        }

        // Calculate the current profit and update the maximum profit if it is greater.
        profit = Math.max(profit, prices[i] - buyPrice);
    }

    // Return the maximum possible profit.
    return profit;    
};
