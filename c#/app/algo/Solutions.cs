namespace Algo;

public class Solution{
    public int[] TwoSum(int[] numbers, int target){
         // Create a dictionary to store the complement of each number and its index
        Dictionary<int, int> numDict = new Dictionary<int, int>();
        for (int i = 0; i <numbers.Length; i ++){
            int complement = target - numbers[i];
            if(numDict.ContainsKey(complement)){{
                return new int[] {numDict[complement], i};
            }}
            numDict[numbers[i]] = i;
        }
        return null;
    }

        public int BuySellStock_Greedy(int[] prices){
         // If there are no prices
         if(prices.Length == 0){
            return 0;
         }

         int MaxProfit = 0;
         int minPrice = prices[0];
        for (int i = 0; i <prices.Length; i ++){
            minPrice = Math.Min(minPrice, prices[i]);
            MaxProfit = Math.Max(MaxProfit, prices[i]);
        }
        return MaxProfit;
    }
}

