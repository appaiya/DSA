/**
 * Dutch National Flag
 * 
 * Given some balls of three colors arranged in a line, rearrange them such that all the red balls go first, then green and then blue ones.
 * 
 * Input balls: ["G", "B", "G", "G", "R", "B", "R", "G"]
 * Output: ["R", "R", "G", "G", "G", "G", "B", "B"]
 * 
 * Solution should be in In-Place and linear
 * 
 */

function dutchFlagSort(balls) {
    
    let l = 0;
    let m = 0;
    let h = balls.length-1;
    
    while (m <= h) {
        if(balls[m] == "R") {
            [balls[l], balls[m]] = [balls[m], balls[l]];
            l++;
            m++;
        } else if(balls[m] == "G") {
            m++;
        } else if(balls[m] == "B") {
            [balls[m], balls[h]] = [balls[h], balls[m]];
            h--;
        }
    }
    return balls;

}