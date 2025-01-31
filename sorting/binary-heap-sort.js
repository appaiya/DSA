
/**
 * @param {list_int32} arr
 * @return {list_int32}
 */
function heap_sort(arr) {

    console.log("INPUT", arr);
    
    const n = arr.length;
    const treeHeight = Math.floor(n/2) - 1; 

    console.log("treeHeight", treeHeight)
    
    // Build Max Heap 
    for(let i = treeHeight; i >= 0; i--) {
        helper(arr, n, i);
    }

    console.log("Post built max heap", arr);
    
    // Get the elements from Heap
    for(let j = n-1; j > 0; j--) {
        swap(arr, 0, j);
        helper(arr, j, 0)
        console.log(`Iteration ${j}`, arr);
    }
    
    return arr;
}

function helper(arr, n, i) {
    
    let largest = i;
    let left = i*2+1;
    let right = i*2+2;
    
    // Check if left child exists and it's greater than root
    if(left < n && arr[left] > arr[largest]) {
        largest = left;
    }
    
    // Check if right child exists and it's greater than largest
    if(right < n && arr[right] > arr[largest]) {
        largest = right;
    }
    
    // If largest is not root then,
    if(largest != i) {
        swap(arr, i, largest);
        helper(arr, n, largest);
    }
    
}


function swap(arr, first, second) {
    let temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
}

let r = heap_sort([5, 8, 3, 9, 4, 1, 7]);

console.log("OUT", r);