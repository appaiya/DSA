/**
 * Leet code - 199
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
 * @return {number[]}
 */
var rightSideView = function(root) {

    let result = [];
    if(!root) return result;

    let q = [root];
    let i = 0;

    while(i < q.length) {
        let level = q.length - i;
        let tempValue;
        for(let j = 0; j < level; j++) {
            let node = q[i++];
            /**
             * Updating the same variable in a level, so that last iteration we will have only right value or last value of that level.
             * In question they mentioned as right view, the trick here is the last element of the specific level.
             */
            tempValue = node.val;
            if(node.left) { q.push(node.left) }
            if(node.right) { q.push(node.right) }
        }
        result.push(tempValue);
    }
    

    return result;
};