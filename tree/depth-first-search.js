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
 * @param {BinaryTreeNode_int32} root
 * @return {list_int32}
 */
function preorder(root) {
    let result = [];
    
    function helper(root) {
        if(root == null) return;
        result.push(root.value); // Pre order traversal
        helper(root.left);
        helper(root.right);
    }
    
    helper(root);
    return result;
}