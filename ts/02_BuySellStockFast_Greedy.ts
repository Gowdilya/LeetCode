function maxProfit(prices:number[]): number {
    if (prices.length === 0){
        return 0;
    }
    var maxProfit:number = 0;
    var minPrice: number = prices[0];

    for (let i = 1; i < prices.length; i ++){
        // update min price if Current is lower
        minPrice = Math.min(minPrice, prices[i]);

        maxProfit = Math.max(maxProfit, prices[i] - minPrice)
    }
    return maxProfit;
}

var prices = [7,1,5,3,6,4];
console.log(maxProfit(prices));
console.log("hey");