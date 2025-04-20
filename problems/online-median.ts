/**
 * Given a list of numbers, the task is to insert these numbers into a stream and find the median of the stream after each insertion. If the median is a non-integer, consider it’s floor value.
 * The median of a sorted array is defined as the middle element when the number of elements is odd and the mean of the middle two elements when the number of elements is even.
 * 
 * Example
 * Input: { "stream": [3, 8, 5, 2]}
 * Output: [3, 5, 5, 4]
 * Steps:-
    Iteration	Stream        Sorted Stream	 Median
    1	        [3]	          [3]	         3
    2	        [3, 8]	      [3, 8]	     (3 + 8) / 2 => 5
    3	        [3, 8, 5]     [3, 5, 8]	     5
    4	        [3, 8, 5, 2]  [2, 3, 5, 8]	 (3 + 5) / 2 => 4

 * Time Complexity: O(n * log n)
 * Space Complexity: O(n)
 
*/


class MedianFinder {
    public maxHeap: Heap;
    public minHeap: Heap;
    constructor() {
        this.maxHeap = new Heap((a,b) => a > b);
        this.minHeap = new Heap((a, b) => a < b);
    }

    addNum(num: number): void {
        this.maxHeap.insert(num);
        this.minHeap.insert(this.maxHeap.extract());

        if(this.minHeap.size() > this.maxHeap.size()) {
            this.maxHeap.insert(this.minHeap.extract());
        }
    }

    findMedian(): number {
        if(this.maxHeap.size() > this.minHeap.size()) {
            return this.maxHeap.peek();
        }
        return ((this.maxHeap.peek() + this.minHeap.peek()) / 2);
    }
}

/**
Heap library function for MinHeap and MaxHeap
Passing the compare callback function we are identify the heap instance is for min heap or max heap. 
 */
class Heap {
    private _heap;
    private _compareCallback;
    constructor(callback) {
        this._heap = [];
        this._compareCallback = callback;
    }

    size() {
        return this._heap.length;
    }

    peek() {
        return this._heap[0];
    }

    insert(val) {
        this._heap.push(val);
        this._heapifyUp();
    }

    extract() {
        if(this.size() == 0) return null;
        if(this.size() == 1) return this._heap.pop();
        let min = this._heap[0];
        this._heap[0] = this._heap.pop();
        this._heapifyDown();
        return min;
    }

    private _heapifyUp() {
        let index = this.size() - 1;
        while(index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if(this._compareCallback(this._heap[parentIndex], this._heap[index])) {
                break;
            }
            [this._heap[parentIndex], this._heap[index]] = [this._heap[index], this._heap[parentIndex]];
            index = parentIndex;
        }
    }

    private _heapifyDown() {
        let index = 0;
        while(true) {
            let swap = index;
            let left = index * 2 + 1;
            let right = index * 2 + 2;

            if(left < this.size() && this._compareCallback(this._heap[left], this._heap[swap])) {
                swap = left;
            }
            if(right < this.size() && this._compareCallback(this._heap[right], this._heap[swap])) {
                swap = right;
            }
            if(swap === index) {
                break;
            }
            [this._heap[swap], this._heap[index]] = [this._heap[index], this._heap[swap]];
            index = swap;
        }
    }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */