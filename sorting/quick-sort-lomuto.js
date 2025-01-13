
/**
 * Quick Sort on LOMUTO-Partitioning
 * 
 * @param {list_int32} arr
 * @return {list_int32}
 */
function quick_sort(arr) {
    helper(arr, 0, arr.length-1);
    return arr;
}

function swap(arr, first, second) {
    let temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
}

function helper(arr, start, end) {
    if(start >= end) {
        return;
    }
    
    let pivotIndex = Math.floor(Math.random() * (end - start + 1) + start);
    swap(arr, start, pivotIndex);
    
    /**
     * QUICK SORT with Lomuto partitioning starts here 
     */ 
    let small = start;
    
    for(let big = start+1; big <= end; big++) {
        if(arr[start] > arr[big]) {
            small++;
            swap(arr, small, big);
        }
    }
    swap(arr, start, small);
    helper(arr, start, small-1); // Left Side
    helper(arr, small+1, end); // Right Side
}
