/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let result = [];
    function helper(nums, i, slate) {

        // Back tracking case
        for(let qIndex = 0; qIndex < i-1; qIndex++) {
            if(((i-1) - qIndex) === Math.abs(slate[i-1] - slate[qIndex])) {
                return;
            }
        }

        if(i === nums.length) {
            result.push(convert([...slate]));
            return;
        }

        for(let pick = i; pick < nums.length; pick++) {
            [nums[pick], nums[i]] = [nums[i], nums[pick]];
            slate.push(nums[i]);
            helper(nums, i+1, slate);
            slate.pop();
            [nums[pick], nums[i]] = [nums[i], nums[pick]];
        }

    }

    function convert(nums) {
        let tempList = [];

        for(let num of nums) {
            let row = new Array(n).fill(".");
            row[num] = "Q";
            tempList.push(row.join(""));
        }
        return tempList;

    }

    let arr = [];
    for(let i = 0; i < n; i++) {
        arr.push(i);
    }
    helper([...arr], 0, []);

    return result;
    
};