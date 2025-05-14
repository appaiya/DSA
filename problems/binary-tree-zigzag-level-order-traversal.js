/**
 * Leet code - 103
 * Input: root = [3,9,20,null,null,15,7]
 * Output: [[3],[20,9],[15,7]]
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
var zigzagLevelOrder = function(root) {
    let result = [];
    if(!root) return result;
    let q = [root];
    let index = 0;
    let bool = true;

    while(index < q.length) {
        bool = !bool;
        let level = q.length - index;
        let tempList = [];
        for(let i = 0; i < level; i++) {
            let n = q[index++];
            tempList.push(n.val);
            if(n.left) q.push(n.left);
            if(n.right) q.push(n.right);
        }
        bool ? result.push([...tempList.reverse()]) : result.push([...tempList]);
    }


    return result;
};

var zigzagLevelOrder2 = function(root) {
    let result = [];
    if(!root) return result;
    let q = [root];
    let index = 0;
    let rightToLeft = true;

    while(index < q.length) {
        rightToLeft = !rightToLeft;
        let level = q.length - index;
        let tempList = [];
        for(let i = 0; i < level; i++) {
            let n = q[index++];
            rightToLeft ? tempList.unshift(n.val) : tempList.push(n.val);
            if(n.left) q.push(n.left);
            if(n.right) q.push(n.right);
        }
        result.push(tempList);
    }


    return result;
};