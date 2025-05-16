/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    if(!root) return 0;

    let globalDia = 0;

    function dfs(node) {
        // base case
        if(!node.left && !node.right) {
            return 0;
        }

        // recursive case
        let localDia = 0;
        let leftHeight = 0;
        let rightHeight = 0;
        if(node.left) { // left child pass
            leftHeight = dfs(node.left); // save the height of that particular level
            localDia += leftHeight + 1; // update the height by 1 to include the current node and sum the value with existing localDia of the node
        }

        if(node.right) { // right child pass
            rightHeight = dfs(node.right); // save the height of that particular level
            localDia += rightHeight + 1; // update the height by 1 to include the current node and sum the value with existing localDia of the node
        }

        globalDia = Math.max(globalDia, localDia); // Updating the global varibale to keep trach of the height, getting max value becasue we are capturing the dia (or height) so highest value only we should use.
        return Math.max(leftHeight, rightHeight) + 1; // based on the left and right height value capturing which on is max and adding 1 to it for the current node level.
    }

    dfs(root);

    return globalDia;
};