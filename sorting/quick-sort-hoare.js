
/**
 * Quick Sort on Hoare-Partitioning
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
    let pivotIndex = Math.floor(Math.random() * (end - start + 1) + start); // random index to choose pivot
    swap(arr, start, pivotIndex)

    /**
     * QUICK SORT with HOARE partitioning starts here 
     */
    let smaller = start + 1;
    let bigger = end;
    
    while (smaller <= bigger) {
        if(arr[smaller] < arr[start]) {
            smaller++
        } else if(arr[bigger] >= arr[start]) {
            bigger--;
        } else {
            swap(arr, smaller, bigger)
            smaller++;
            bigger--;
        }
    }
    swap(arr, start, bigger);


    helper(arr, start, bigger-1); // Left Side
    helper(arr, bigger+1, end); // Right Side
}