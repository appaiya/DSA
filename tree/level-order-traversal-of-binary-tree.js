
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

/**
 * Optimized version - without Queue -- Leetcode 102
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
 * @return {number[][]}
 */
var levelOrder = function(root) {

    let result = [];
    if(!root) return result;
    const q = [root];
    let index = 0;
    while(index < q.length) {
        let levelOrder = q.length - index;
        let tempList = [];
        for(let i = 0; i < levelOrder; i++) {
            let item = q[index++];
            tempList.push(item.val);
            if(item.left) { q.push(item.left); }
            if(item.right) { q.push(item.right); }
        }
        result.push(tempList);
    }
    
    return result;
};