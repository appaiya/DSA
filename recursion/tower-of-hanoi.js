/**
 * @param {int32} n
 * @return {list_list_int32}
 */
function tower_of_hanoi(n) {
    
    let result = [];
    
    function helper(n, source, destination, aux) {
        if(n==1) {
            result.push([source, destination]);
            return;
        }
        helper(n-1, source, aux, destination);
        result.push([source, destination]);
        helper(n-1, aux, destination, source);
    }
    
    helper(n,1,3,2)
    
    return result;
}


/** ------------------------------------- */

/**
 * @param {int32} n
 * @return {list_list_int32}
 */
let result = [];
function towerOfHanoi(n) {
    helper1(n, 1, 2, 3);
    return result;
}

function helper1(n, src, dst, aux) {
    if(n > 0) {
        helper(n-1, src, aux, dst);
        result.push([src, aux]);
        helper(n-1, dst, src, aux);
    }
}