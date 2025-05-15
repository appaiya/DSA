
/*
For your reference:
const BinaryTreeNode = class {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
};
*/
/**
 * Leet code - 112
 * 
 * @param {BinaryTreeNode_int32} root
 * @param {int32} k
 * @return {bool}
 */
function path_sum(root, k) {
    if(!root) return false;
    let isSumEqual = false;
    function helper(node, sum) {
        sum += node.value;
        // base case
        if(!node.left && !node.right && sum === k) {
            isSumEqual = true;
            return;
        }
        // recursive case
        if(node.left) helper(node.left, sum)
        if(node.right) helper(node.right, sum)
    }
    helper(root, 0)
    return isSumEqual;
}
