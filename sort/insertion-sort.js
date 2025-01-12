
/**
 * @param {list_int32} arr
 * @return {list_int32}
 */
function insertion_sort(arr) {
    
    for(let i=0; i < arr.length; i++) {
        let temp = arr[i];
        let index = i-1;
        while(index >=0 && arr[index] > temp) {
            arr[index+1]=arr[index];
            index--;
        }
        arr[index+1] = temp;
    }
    return arr;
}