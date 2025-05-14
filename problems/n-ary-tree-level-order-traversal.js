/**
 * Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
 * Output: [[1],[2,3,4,5],[6,7,8,9,10],[11,12,13],[14]]
 * 
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {

    let result = [];
    if(!root) return result;
    const q = [root];
    let index = 0;

    while(index < q.length) {
        let level = q.length - index;
        let tempList = [];

        for(let i = 0; i < level; i++) {
            let n = q[index++];
            tempList.push(n.val);
            if(n.children.length) q.push(...n.children);
        }

        result.push(tempList);
    }

    return result;
    
};