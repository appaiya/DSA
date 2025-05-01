/*

const BinaryTreeNode = class {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
};
*/
/**
 * 
 * Time Complexity
 * If the tree is balanced then TC is O(log n)
 * If the tree is not balanced then TC is O(height)
 * 
 * SC: O(1)
 * 
 * @param {BinaryTreeNode_int32} root
 * @return {int32}
 */
function get_maximum_value(root) {
    if(root === null) return null;
    let curr = root;
    while (curr.right != null) {
        curr = curr.right;
    }
    return curr.value;
}

function get_minimum_value(root) {
    if(root === null) return null;
    let curr = root;
    while (curr.left != null) {
        curr = curr.left;
    }
    return curr.value;
}