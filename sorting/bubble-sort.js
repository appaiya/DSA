/**
 * @param {list_int32} arr
 * @return {list_int32}
 */
function bubble_sort(arr) {
    // Write your code here.
    
    for(let i = 0; i < arr.length; i++) {
        for(let j = arr.length-1; j > i; j--) {
            if (arr[j-1] > arr[j]) {
                let temp = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = temp;
            }
        }
    }
    return arr;
}