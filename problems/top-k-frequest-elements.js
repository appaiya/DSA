
/**
 * @param {list_int32} arr
 * @param {int32} k
 * @return {list_int32}
 */
function find_top_k_frequent_elements(arr, k) {
    const firstMap = new Map();
    const numbers = [];
    const taken = new Map();
    for (let i = 0; i < arr.length; i++) {
        firstMap.set(arr[i], (firstMap.get(arr[i]) || 0) + 1);
    }
    for (let i = 0; i < arr.length; i++) {
        if (taken.has(arr[i])) {
            continue;
        } else {
            taken.set(arr[i], true);
            if (!numbers[firstMap.get(arr[i])]) {
                numbers[firstMap.get(arr[i])] = [];
            }
            numbers[firstMap.get(arr[i])].push(arr[i]);
        }
    }
    const result = [];
    for (let i = arr.length; i >= 1; i--) {
        while (numbers[i] && numbers[i].length > 0 && k > 0) {
            k--;
            result.push(numbers[i].pop());
        }
        if (k === 0) {
            break;
        }
    }
    return result;
}
