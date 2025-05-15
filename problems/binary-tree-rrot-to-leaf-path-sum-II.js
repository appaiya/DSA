/**
 * 
 * Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where the sum of the node values in the path equals targetSum. 
 * Each path should be returned as a list of the node values, not node references
 * 
 * Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
 * Output: [[5,4,11,2],[5,8,4,5]]
 * 
 * Leet code - 113
 * 
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    let result = [];
    if(!root) return result;

    function helper(node, sum, pathList) {
        sum += node.val;
        pathList.push(node.val);
        // base case
        if(!node.left && !node.right && sum === targetSum) {
            result.push([...pathList]);
        }
        // recursive case
        if(node.left) helper(node.left, sum, pathList);
        if(node.right) helper(node.right, sum, pathList);

        pathList.pop();
    }

    helper(root, 0, []);

    return result;
};