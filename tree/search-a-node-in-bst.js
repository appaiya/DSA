/*
For reference:
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
 * TC: O(log n)
 * SC: O(1)
 * @param {BinaryTreeNode_int32} root
 * @param {int32} value
 * @return {bool}
 */

function search_node_in_bst(root, value) {

    let curr = root;

    while (curr != null) {
        if(value === curr.value) {
            return true;
        } else if(value < curr.value) {
            current = current.left;
        } else {
            current = current.right;
        }
    }

    return false;

}