
/**
 * 
 * Given an array of unique numbers, return in any order all its permutations.
 * Input: [1, 2, 3]
 * Output: [ [1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 2, 1], [3, 1, 2] ]
 * 
 * TC: O(n! * n)
 * SC: O(n)
 * 
 * @param {list_int32} arr
 * @return {list_list_int32}
 */
function get_permutations(arr) {
    let result = [];
    
    function helper(slate, list) {
        if(list.length == 0) {
            result.push(slate);
        } else {
            for(let i = 0; i < list.length; i++) {
                helper([...slate, list[i]], [...list.slice(0, i), ...list.slice(i+1)]);
            }
        }
    }
    
    helper([], [...arr]);
    
    
    return result;
}

/**
 * find permutation for the given numer array values with mutable solution
 * 
 * @param {*} nums number array input e.g., [1, 2, 3]
 */
function getPermutation(nums) {
    let result = [];

    function helper(nums, i, slate) {
        if(i === nums.length) {
            result.push([...slate]);
            return;
        } else {
            for(let pick = i; pick < nums.length; pick++) {
                // console.log("Before swap-->", nums[pick], nums[i]);
                [nums[pick], nums[i]] = [nums[i], nums[pick]];
                // console.log("After swap-->", nums[pick], nums[i])
                slate.push(nums[i]);
                helper(nums, i+1, slate);
                slate.pop();
                [nums[pick], nums[i]] = [nums[i], nums[pick]];
            }
        }
    }
    helper(nums, 0, []);

    return result;
}

let per = getPermutation([1,2,1]);
console.log("OUTPUT", per)