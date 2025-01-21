
/**
 * Fibonacci Problem
 * 
 * This way of implementation has the TC of O(n)
 * 
 * If the base cases not passed in the params then we can try this approach
 * 
 */
function find_fibonacci(n) {
    
    if(n == 0 || n == 1) return n;
    
    let current = 1;
    let previous = 0;
    
    for(let i = 2; i <= n; i++) {
        let nextNum = current+previous;
        previous = current;
        current = nextNum;
    }
    
    return current;
}