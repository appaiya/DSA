/** 
 * Given an array of numbers, rearrange them in-place so that even numbers appear before odd ones.
 * Input: [1, 2, 3, 4] Output: [2,4,3,1] -- Output order does not matter.
 * Solution Should be in linear time complexity, In Place and constant auxilary space.

*/

function segregate_evens_and_odds(numbers) {
    
    let start = 0;
    let end = numbers.length - 1;
    
    while(start < end) {
        
        if(numbers[start] % 2 == 0) {
            //if even move one pointer forward
            start++
        } else if(numbers[end] % 2 == 1) {
            // if odd move one pointer to backward
            end--;
        } else {
            // now both start and end we have odd and even so swap
            [numbers[start], numbers[end]] = [numbers[end], numbers[start]];
            start++;
            end--;
        }

    }
    
    return numbers;
}
