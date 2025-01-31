/**
 * @param {int32} n
 * @param {int32} k
 * @return {list_list_int32}
 */
function find_combinations(n, k) {
    
    let result = [];
    
    function helper(s, c) {
        console.log("-------Helper Starts here--------");
        console.log("S", s);
        console.log("C", c);
        if(c.length === k) {
            console.log("-------In Base case--------", c);
            result.push([...c]);
            return;
        }
        
        for(let i = s; i <= n; i++) {
            c.push(i);
            console.log("In Loop c after i value push", c);
            /**
             * when s = 1, then next recursion will be passed as s = 2, then next recursion s = 3 till n
             * Then, c is array which has the s value passed along.
             */
            helper(i+1, c); 
            c.pop(); /** removing the value from the c array once the recursion iterations all are done for that specific iteration */
            console.log("In Loop c after pop", c);
        }
    }
    helper(1, []);
    return result;
    
}

console.log(find_combinations(4,2));
// console.log(find_combinations(5,2));
// console.log(find_combinations(6,6));
// console.log(find_combinations(6,1));
// console.log(find_combinations(6,2));
// console.log(find_combinations(6,5));





