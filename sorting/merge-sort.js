
/**
 * @param {list_int32} arr
 * @return {list_int32}
 */
function merge_sort(arr) {
    helper(arr, 0, arr.length - 1)
    return arr;
}

function helper(arr, start, end) {
    if(start == end) {
        return;
    }
    
    let mid = start + Math.floor((end - start)/2);
    helper(arr, start, mid);
    helper(arr, mid+1, end);
    let i = start;
    let j = mid + 1;
    let aux = [];
    
    while(i <= mid && j <= end) {
        if(arr[i] <= arr[j]) {
            aux.push(arr[i]);
            i++;
        } else {
            aux.push(arr[j]);
            j++
        }
    }
    
    while(i<=mid) {
        aux.push(arr[i]);
        i++;
    }
    
    while(j<= end) {
        aux.push(arr[j]);
        j++;
    }

    for(let i = 0; i < aux.length; i++) {
        arr[start+i] = aux[i];
    }
    return;
    
}
