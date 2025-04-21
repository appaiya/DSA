/**
 * 
 * Given a number n, generate all possible binary strings of length n.
 * 
 * Input: n = 3
 * Output: ["000", "001", "010", "011", "100", "101", "110", "111"]
 * 
 * TC: O(2^n * n)
 * SC: O(n)
 * 
 * Approach: Depth First Search traversal
 * 
 * @param {int32} n
 * @return {list_str}
 */
 
function get_binary_strings(n) {
    let result = [];
    function helper(str, n) {
        if(n == 0) {
            result.push(str);
        } else {
            helper(str+"0", n-1);
            helper(str+"1", n-1);
        }
    }
    helper("", n);

    return result;
}