
/**
 * 
 * Given an initial list along with another list of numbers to be appended with the initial list and an integer k, 
 * return an array consisting of the k-th largest element after adding each element from the first list to the second list.
 * 
 * Example Input: { "k": 2, "initial_stream": [4, 6], "append_stream": [5, 2, 20] }
 * Output: [5, 5, 6]
 * 
 * TC: O(log(k) * ( n + m ))
 * SC: O(n + m + k)
 * 
 * 
 * @param {int32} k
 * @param {list_int32} initial_stream
 * @param {list_int32} append_stream
 * @return {list_int32}
 */
function kth_largest(k, initial_stream, append_stream) {
    let res = [];
    
    const minHeap = new MinHeap();
    
    for(let num of initial_stream) {
        add(num);
    }
    
    for(let v of append_stream) {
        res.push(add(v));
    }
    
    function add(val) {
        if(minHeap.size() < k) {
            minHeap.insert(val);
        } else if(val > minHeap.peek()) {
            minHeap.extractMin();
            minHeap.insert(val);
        }
        return minHeap.size() === k ? minHeap.peek() : null;
    }
    
    return res;
}

class MinHeap {
    constructor() {
        this.heap = [];
    }
    
    size() {
        return this.heap.length;
    }
    
    peek() {
        return this.heap[0];
    }
    
    insert(val) {
        this.heap.push(val);
        this.heapifyUp();
    }
    
    extractMin() {
        if(this.size() == 0) return null;
        if(this.size() == 1) return this.heap.pop();
        
        let min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return min;
    }
    
    heapifyUp() {
        let index = this.size() - 1;
        
        while(index > 0) {
            let pIndex = Math.floor((index - 1) / 2);
            if(this.heap[pIndex] < this.heap[index]) {
                break;
            }
            [this.heap[pIndex], this.heap[index]] = [this.heap[index], this.heap[pIndex]];
            index = pIndex;
        }
    }
    
    heapifyDown() {
        let index = 0;
        let length = this.size();
        while(true) {
            let smaller = index;
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            
            if(left < length && this.heap[left] < this.heap[smaller]) {
                smaller = left;    
            } 
            if(right < length && this.heap[right] < this.heap[smaller]) {
                smaller = right;
            }
            if(smaller == index) {
                break;
            }
            
            [this.heap[smaller], this.heap[index]] = [this.heap[index], this.heap[smaller]];
            index = smaller;
        }
    }
}
