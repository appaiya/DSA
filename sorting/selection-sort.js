/**
 * @param {list_int32} arr
 * @return {list_int32}
 */
function selection_sort(arr) {
    for(let i = 0; i < arr.length; i++) {
        let minValue = arr[i];
        let minIndex = i;
        for(let j = i+1; j < arr.length; j++) {
            if(arr[j] < minValue) {
                minValue = arr[j];
                minIndex = j;
                [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
            }
        }
    }
    return arr;
}
