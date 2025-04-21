
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