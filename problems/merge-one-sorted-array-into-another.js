/**
 * First array has x positive numbers, and they are sorted in the non-descending order.
 * Second array has 2x numbers: first x are also positive and sorted in the same way but the last x are all zeroes.
 * 
 * Merge the first array into the second and return the second. You should get 2x positive integers sorted in the non-descending order.
 * 
 * Input: First Array-[1,3,5], second array - [2,4,6,0,0,0]
 * Output: [1,2,3,4,5,6]

*/


function merge_one_into_another(first, second) {
    
    let i = first.length - 1;
    let j = first.length - 1;
    let k = second.length - 1;
    
    while (i>=0) {
        if(j >= 0 && second[j] > first[i]) {
            second[k] = second[j];
            j--;
        } else {
            second[k] = first[i];
            i--;
        }
        k--;
    }
     
     return second;
 }