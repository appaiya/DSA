function subsetSum(nums, target) {
    let result = [];

    function helper(sum, i, slate) {
        if(sum === target) {
            result.push(([...slate]));
            return;
        }

        if(i === nums.length || sum > target) {
            return;
        }

        helper(sum, i+1, slate); // exclude

        // include
        slate.push(nums[i]);
        helper(sum+nums[i], i+1, slate);
        slate.pop();
    }

    helper(0, 0, []);
    return result;
}

subsetSum([1,2,3,4,5], 7);