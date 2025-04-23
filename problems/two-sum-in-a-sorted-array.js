/**
 * Given an array sorted in non-decreasing order and a target number, 
 * find the indices of the two values from the array that sum up to the given target number.
 * 
 * Input: Array-[1,2,3,5,10], target - 11
 * Output: [0, 4]
 * 
 * If target value not found return [-1, -1]
 * 
 * TC: O(n) - Leanier time, we iterating to all the indexes atleast once on worst case secnario.
 * SC: O(1) -- No use of auxilary space to store the array.
 */

function pair_sum_sorted_array(numbers, target) {
    
    let left = 0;
    let right = numbers.length - 1;
    
    while (left < right) {
        let s = numbers[left] + numbers[right];
        if(s == target) {
            return [left, right];
        } else if(s < target) {
            left++;
        } else if(s > target){
            right--;
        }
    }
    
    
    return [-1, -1];
}


/**
 * Two sum in non sorted array
 * 
 * TC: O(n) --- single pass in for loop
 * SC: O(n) --- hash map to store all the possible values
 * 
 */

function twoSumNonSortedArray(nums, target) {
    const map = new Map();

    for(let i = 0; i < nums.length; i++) {
        let temp = target - nums[i];

        if(map.has(temp)) {
            return [map.get(temp), i];
        }
        map.set(nums[i], i);
    }

    return [-1, -1];
}