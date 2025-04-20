
/**
 * @param {list_int32} arr1
 * @param {list_int32} arr2
 * @param {list_int32} arr3
 * @return {list_int32}
 */
function find_intersection(arr1, arr2, arr3) {
    
    let final = [];
    
    final = fetchIntersection(arr1, arr2);
    if(final.length) {
        final = fetchIntersection(final, arr3);    
    }
    
    return final.length ? final : [-1];
}

function fetchIntersection(arr1, arr2) {
    
    let arr1Len = arr1.length;
    let arr2Len = arr2.length;
    let res = [];
    
    let i = 0;
    let j = 0;
    
    while (i < arr1Len && j < arr2Len) {
        if(arr1[i] === arr2[j]) {
            res.push(arr1[i]);
            i++;
            j++;
        } else if(arr1[i] < arr2[j]) {
            i++;
        } else {
            j++;
        }
    }
    
    
    return res;
}
