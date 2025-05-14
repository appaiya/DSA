/**
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
var levelOrderBottom = function(root) {
    let result = [];

    if(!root) return result;

    let q = [root];
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

    return result.reverse();
};