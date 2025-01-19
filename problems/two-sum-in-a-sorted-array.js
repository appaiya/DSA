/**
 * Given an array sorted in non-decreasing order and a target number, 
 * find the indices of the two values from the array that sum up to the given target number.
 * 
 * Input: Array-[1,2,3,5,10], target - 11
 * Output: [0, 4]
 * 
 * If target value not found return [-1, -1]
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