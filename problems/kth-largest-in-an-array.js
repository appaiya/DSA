
/**
 * @param {list_int32} numbers
 * @param {int32} k
 * @return {int32}
 */
function kth_largest_in_an_array(numbers, k) {
    helper(numbers, 0, numbers.length - 1, (numbers.length - k));
    return numbers[numbers.length - k];
}

function helper(nums, start, end, targetIndex) {
    //base case
    if(start == end)
        return;
    const randomIndex = Math.floor(Math.random() * (end - start + 1)) + start;
    [nums[randomIndex], nums[start]] = [nums[start], nums[randomIndex]];
    
    let orange = start;
    
    for(let green = start+1; green <= end; green++) {
        if(nums[green] < nums[start]) {
            orange++;
            [nums[green], nums[orange]] = [nums[orange], nums[green]];
        }
    }
    [nums[start], nums[orange]] = [nums[orange], nums[start]];
    
    if(targetIndex == orange) {
        return;
    } else if(targetIndex < orange) {
        helper(nums, start, orange-1, targetIndex);
    } else if(targetIndex > orange) {
        helper(nums, orange+1, end, targetIndex);
    }
}
