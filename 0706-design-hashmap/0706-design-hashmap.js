class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

class MyHashMap {
    constructor() {
        this.numBuckets = 1000;
        this.buckets = new Array(this.numBuckets).fill(null);
    }

    put(key, value) {
        const index = key % this.numBuckets;

        if (!this.buckets[index]) {
            this.buckets[index] = new Node(key, value);
        } else {
            let curr = this.buckets[index];
            while (curr) {
                if (curr.key === key) {
                    curr.value = value; // Update value if key exists
                    return;
                }
                if (!curr.next) {
                    break;
                }
                curr = curr.next;
            }
            curr.next = new Node(key, value); // Append a new node to the linked list
        }
    }

    get(key) {
        const index = key % this.numBuckets;
        let curr = this.buckets[index];

        while (curr) {
            if (curr.key === key) {
                return curr.value; // Return value if key exists
            }
            curr = curr.next;
        }

        return -1; // Key not found
    }

    remove(key) {
        const index = key % this.numBuckets;
        let curr = this.buckets[index];
        let prev = null;

        while (curr) {
            if (curr.key === key) {
                if (prev) {
                    prev.next = curr.next; // Remove the node from the linked list
                } else {
                    this.buckets[index] = curr.next; // Update the bucket head if it's the first node
                }
                return;
            }
            prev = curr;
            curr = curr.next;
        }
    }
}
