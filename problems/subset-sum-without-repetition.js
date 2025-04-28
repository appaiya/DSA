function subsetSum(nums, target) {
    nums.sort((a,b) => a - b);
    let result = [];

    function helper(sum, i, slate) {
        if(sum === target) {
            result.push(([...slate]));
            return;
        }

        if(i === nums.length || sum > target) {
            return;
        }

        for (let j = i; j < nums.length; j++) {
            // skip duplicates
            if (j > i && nums[j] === nums[j - 1]) {
                continue;
            }

            slate.push(nums[j]);
            helper(sum + nums[j], j + 1, slate);
            slate.pop();
        }
    }

    helper(0, 0, []);
    return result;
}

console.log(subsetSum([10,1,2,7,6,1,5], 8));