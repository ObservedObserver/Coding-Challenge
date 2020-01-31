/**
 * ## 53. 最大子序和
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * 示例:
 * ```
 * 输入: [-2,1,-3,4,-1,2,1,-5,4],
 * 输出: 6
 * 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 * ```
 * @param {number[]} nums
 * @return {number}
 */
export function maxSubArray (nums) {
  let f = nums.map(n => n);  
  for (let i = 1; i < nums.length; i++) {
    f[i] = Math.max(nums[i], f[i - 1] + nums[i]);
  }
  return Math.max(...f);
};