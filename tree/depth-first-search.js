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

function postorder(root) {
    let result = [];
    
    function helper(node) {
        if(node === null) return;
        helper(node.left);
        helper(node.right);
        result.push(node.value); // Post order traversal
    }
    
    helper(root);
    return result;
}

function inorder(root) {
    let result = [];
    
    function helper(node) {
        if(node === null) return;
        helper(node.left);
        result.push(node.value); // In order traversal
        helper(node.right);
    }
    
    helper(root);
    return result;
}