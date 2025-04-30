/**
 * 
 * Input: n = 3
 * Output: ["((()))","(()())","(())()","()(())","()()()"]
 * 
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {

    let result = [];
    
    function helper(numLeft, numRight, slate) {
        // Backtracking case
        if(numLeft > numRight) { // violation when right value is less than left value so no need to proceed further
            return;
        }

        // Base case -- leaf node
        if(numLeft === 0 && numRight === 0) {
            result.push([...slate].join(""));
            return;
        }

        // Recursive case - Internal node
        if(numLeft > 0) {
            slate.push("("); // adding '('
            helper(numLeft-1, numRight, slate);
            slate.pop();
        }

        if(numRight > 0) {
            slate.push(")"); // adding ')'
            helper(numLeft, numRight-1, slate);
            slate.pop();
        }
    }
    helper(n, n, []);

    return result;
};