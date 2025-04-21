/**
 * 
 * Generate ALL possible subsets of a given set. The set is given in the form of a string s containing distinct lowercase characters 'a' - 'z'.
 * 
 * Input: "ab"
 * Output: ["", "a", "b", "ab"]
 * 
 * Order of strings in the output does not matter
 * 
 * TC: O(n * 2^n)
 * SC: O(n)
 * 
 * @param {str} s
 * @return {list_str}
 */
function generate_all_subsets(s) {
    let result = [];
    
    function helper(slate, list) {
        if(list.length == 0) {
            result.push(slate);
        } else {
            helper(slate, [...list.slice(1)]); // Exclude pattern
            helper(slate+list[0], [...list.slice(1)]); // Include pattern
        }
    }
    
    helper("", s.split(""));
    
    return result;
}