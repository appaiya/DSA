/**
 * 
 * Input: [1,2,2]
 * Output: [[],[2],[2,2],[1],[1,2],[1,2,2]]
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDuplicates = function(nums) {
    
    nums.sort((a, b) => a - b);
    let result = [];

    function helper(i, slate) {

        // base case - leaf node
        if(i === nums.length) {
            result.push([...slate]);
            return;
        }

        let count = 0;

        for(let j = i; j < nums.length; j++) {
            if(nums[i] === nums[j]) {
                count++
            } else {
                break;
            }
        }

        // recursive case - internal node
        helper(i+count, slate); // exclude

        // include
        for(let pick = 1; pick <= count; pick++) {
            slate.push(nums[i]);
            helper(i+count, slate);
        }

        for(let pick = 1; pick <= count; pick++) {
            slate.pop();
        }

    }

    helper(0, []);

    return result;

};