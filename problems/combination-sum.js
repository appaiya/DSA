/**
 * Input: k = 3, n = 7 
 * Output: [[1,2,4]] 
 * Explanation: 1 + 2 + 4 = 7.
 * 
 * Leetcode 216
 * 
 * 
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {

    let result = [];
    let nums = [];
    for(let i = 0; i < 9; i++) {
        nums.push(i+1);
    }

    function helper(sum, i, slate) {

        if(slate.length > k || sum > n) {
            return;
        }
        if(slate.length === k && sum === n) {
            result.push([...slate]);
            return;
        }

        if(i === nums.length) {
            return;
        }

        helper(sum, i+1, slate);
        slate.push(nums[i]);
        helper(sum+nums[i], i+1, slate);
        slate.pop();
    }

    helper(0, 0, []);

    return result;
};