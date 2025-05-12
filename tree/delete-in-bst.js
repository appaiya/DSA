
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
 * @param {list_int32} values_to_be_deleted
 * @return {BinaryTreeNode_int32}
 */
function delete_from_bst(root, values_to_be_deleted) {
    let result = root;
    for(let value of values_to_be_deleted) {
        result = deleteNode(result,value);
    }
    
    return result;
}

function deleteNode(root, value) {
    
    //Step 1: Search the value in the the tree
    let curr = root;
    let prev = null;
    
    while(curr != null) {
        if(value == curr.value) {
            break;
        } else if(value < curr.value) {
            prev = curr;
            curr = curr.left;
        } else {
            prev = curr;
            curr = curr.right;
        }
    }
    
    if(curr == null) return root;
    
    // Case 1 -- curr node is leaf node
    if(curr.left == null && curr.right == null) {
        if(prev === null) return null;
        if(curr == prev.left) { 
            prev.left = null; 
        } else { 
            prev.right = null;
        }
        return root;
    }
    
    // Case 2 -- curr node has one child;
    let child = null;
    if(curr.left == null && curr.right != null) {
        child = curr.right;
    }
    if(curr.left != null && curr.right == null) {
        child = curr.left;
    }
    
    if(child != null) {
        if(prev == null) {
            root = child;
            return root;
        }
        
        if(curr == prev.left) { 
            prev.left = child; 
        } else { 
            prev.right = child;
        }
        return root;
    }
    
    // Case 3 - curr node has two child
    if(curr.left != null && curr.right != null) {
        let successor = curr.right;
        let previousNode = curr;
        // capture successor by finding min value in right sub tree
        while(successor.left != null) {
            previousNode = successor;
            successor = successor.left;
        }
        
        curr.value = successor.value;
        
        if(successor == previousNode.left) {
            previousNode.left = successor.right;
        } else {
            previousNode.right = successor.right;
        }
        
        return root;
    }
    
}
