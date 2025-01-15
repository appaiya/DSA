
/**
 * @param {list_int32} arr
 * @return {list_int32}
 */
function radix_sort(arr) {
    
    if(arr.length <= 1) return arr;
    
    const maxValue = Math.max(...arr);
    let digitPlace = 1;
    
    
    while (Math.floor(maxValue / digitPlace) > 0) {
        countingSortByDigit(arr, digitPlace);
        digitPlace *= 10;
    }
    
    return arr;
}

function countingSortByDigit(arr, digitPlace) {
    
    const count = new Array(10).fill(0);
    
    for(let i = 0; i < arr.length; i++) {
        let digit = Math.floor(arr[i]/digitPlace) % 10;
        count[digit] = count[digit] + 1;
    }
    
    for(let j = 1; j <= 9; j++) {
        count[j] = count[j] + count[j-1];
    }
    
    const output = new Array(arr.length);
    
    for(let i = arr.length - 1; i >= 0; i--) {
        let digit = Math.floor(arr[i]/digitPlace) % 10;
        let position = count[digit] - 1;
        output[position] = arr[i];
        count[digit] = count[digit] - 1;
    }
    
    arr = [...output];
    
}
