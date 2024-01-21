namespace Algo;
public class Algorithms {
    public static void Main(){
            Solution solution = new Solution();
            int[] nums = {2, 7, 11, 15};
            int target = 9;
            int[] result = solution.TwoSum(nums, target);
            if (result != null){
                Console.WriteLine($"The indices of the two numbers that add up to {target} are: [{result[0]}, {result[1]}]");
            }
            else{
                Console.WriteLine("No solution found.");
            }

            int[] prices = [2,1,3,4,5,3,2,1];

            int mostProfit= solution.BuySellStock_Greedy(prices);

            Console.WriteLine(mostProfit);

        }
}
