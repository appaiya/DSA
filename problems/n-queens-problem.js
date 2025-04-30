/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let result = [];
    function helper(nums, i, slate) {
        
        /**
         * Back tracking case
         * 
         * If last queen on the slate has a diagonal conflict with any of the earlier queens then return.
         * 
         * To check the diagonal conflict, 
         * last queen's row number -> i-1 ------ I
         * last queen's col number -> slate[i-1] ------ II
         * 
         * current index queen's row number -> qIndex ------ III
         * current index queen's col number -> slate[qIndex] ------ IV
         * 
         * So, check the diagonal conflict --> (I - III) === (II - IV)
         * 
         * formula is -> ((i-1) - qIndex) === Math.abs(slate[i-1] - slate[qIndex])
         */
        for(let qIndex = 0; qIndex < i-1; qIndex++) {
            if(((i-1) - qIndex) === Math.abs(slate[i-1] - slate[qIndex])) {
                return;
            }
        }

        // Base case - Leaf node
        if(i === nums.length) {
            result.push(convert([...slate]));
            return;
        }

        // Recursive case - Internal node
        for(let pick = i; pick < nums.length; pick++) {
            [nums[pick], nums[i]] = [nums[i], nums[pick]];
            slate.push(nums[i]);
            helper(nums, i+1, slate);
            slate.pop();
            [nums[pick], nums[i]] = [nums[i], nums[pick]];
        }

    }

    /**
     * Output for this problem is [".Q..."], this function converts the index value to "Q".
     *  
     * @returns array of strings
     */
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