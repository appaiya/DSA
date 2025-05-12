
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
 * @return {list_list_int32}
 */
function level_order_traversal(root) {
    let result = [];
    
    if(root) {
        let q = new Queue();
        q.push(root);
        while(!q.isEmpty()) {
            let levelSize = q.size();
            let currentLevel = [];
            
            for(let i = 0; i < levelSize; i++) {
                let node = q.pop();
                currentLevel.push(node.value);
                if(node.left != null) {
                    q.push(node.left)
                }
                if(node.right != null) {
                    q.push(node.right)
                }
            }
            result.push(currentLevel);
        }
    }
    return result;
}

class Queue {
    constructor() {
        this.items = [];
    }
    
    push(e) {
        this.items.push(e);
    }
    
    pop() {
        return this.isEmpty() ? null : this.items.shift();
    }
    
    peek() {
        return this.isEmpty() ? null : this.items[0];
    }
    
    isEmpty() {
        return this.items.length === 0;
    }
    
    size() {
        return this.items.length;
    }
}