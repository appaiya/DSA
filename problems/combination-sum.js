/**
 * Find all valid combinations of k numbers that sum up to n such that the following conditions are true:
 * Only numbers 1 through 9 are used.
 * Each number is used at most once.
 * 
 * Input: k = 3, n = 7 
 * Output: [[1,2,4]] 
 * Explanation: 1 + 2 + 4 = 7.
 * 
 * Leetcode 216
 * 
 * 
 * @param {number} k count of the numbers
 * @param {number} n target value
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {

    let result = [];
    let nums = [];
    for(let i = 0; i < 9; i++) { // add nums from 1 to 9 as mentioned in the conditions
        nums.push(i+1);
    }

    function helper(sum, i, slate) {

        // back tracking flow
        if(slate.length > k || sum > n) {
            return;
        }
        if(slate.length === k && sum === n) {
            result.push([...slate]);
            return;
        }

        // base case - leaf node
        if(i === nums.length) {
            return;
        }

        // Recursive case - internal node
        helper(sum, i+1, slate);
        slate.push(nums[i]);
        helper(sum+nums[i], i+1, slate);
        slate.pop();
    }

    helper(0, 0, []);

    return result;
};