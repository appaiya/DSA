/**
 * @param {list_int32} arr
 * @return {list_int32}
 */
function counting_sort(array) {
    
    if(array.length<=1) return array;
    
    // Step 1: Find the minimum and maximum values in the array
    const minValue = Math.min(...array);
    const maxValue = Math.max(...array);

    console.log("minValue", minValue)
    console.log("maxValue", maxValue)

    // Step 2: Calculate the range of values
    const range = maxValue - minValue + 1;
    console.log("range", range)

    // Step 3: Initialize the count array
    const count = new Array(range).fill(0);
    
    // Step 4: Count occurrences of each element
    for (let i = 0; i < array.length; i++) {
        count[array[i] - minValue] = count[array[i] - minValue] + 1;
    }
    
    // Step 5: Modify count array to store cumulative sums
    for (let i = 1; i < count.length; i++) {
        count[i] = count[i] + count[i - 1];
    }

    console.log("cumulative sum", count)

    // Step 6: Create an output array to store sorted elements
    const output = new Array(array.length);
    
    // Step 7: Place elements into the output array in sorted order
    for (let i = array.length - 1; i >= 0; i--) { // Traverse input array in reverse for stability
        let index = array[i] - minValue; // Adjust index using minValue
        let position = count[index] - 1; // Get the position from count array
        output[position] = array[i]; // Place element in the output array
        count[index] = count[index] - 1; // Decrement count for that value to capture all the duplicate values in final output
    }

    console.log("output", output)
    
    // Step 8: Copy the sorted elements back to the original array
    for (let i = 0; i < array.length; i++) {
        array[i] = output[i];
    }
    return array
}

// let arr = [4, -2,-2, 8, 3, -3, -3, 1];
let arr = [4, -2, -2, 8, 3, -3, 13]
counting_sort(arr);
// console.log("output",arr)