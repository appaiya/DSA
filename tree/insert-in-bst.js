

/**
 * 
 * Input: [7,5,9]
 * 
 * @param {list_int32} values
 * @return {BinaryTreeNode_int32}
 */

const BinaryTreeNode = class {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
};
 
function build_a_bst(values) {
    
    let tree = null;
    
    for(let v of values) {
        tree = insert(tree, v);
    }
    
    return tree;
}

function insert(root, value) {
    let newNode = new BinaryTreeNode(value);
    if(root === null) {
        return newNode;
    }
    
    let prev = null;
    let curr = root;
    
    while (curr != null) {
        if(value === curr.value) {
            return; // the inserting value already present in the tree so, don't do anything simply return it.
        } else if(value < curr.value) {
            prev = curr; // updating the prev varibale or tracking what was the last node 
            curr = curr.left; // moving to the next node
        } else {
            prev = curr;
            curr = curr.right;
        }
    }
    
    /**
     * Created newNode mapping into the tree, here prev variable has the last node instance of the tree.
     * 
     * If the incoming value is less than the last node then we need to map the newNode to left side to the prev node
     * else the incoming value is more than the last node then we need to map the newNode to the right of the prev node
     *  
    */
    if(value < prev.value) {
        prev.left = newNode;
    } else {
        prev.right = newNode;
    }
    
    return root;
}
