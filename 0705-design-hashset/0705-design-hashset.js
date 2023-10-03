// Node class to store key-value pairs
class Node {
  constructor(key) {
    this.key = key;
    this.next = null;
  }
}

// MyHashSet class
class MyHashSet {
  constructor() {
    this.buckets = new Array(1000).fill(null); // Adjust the size as needed
  }

  // Hash function
  hash(key) {
    return key % this.buckets.length;
  }

  // Add key to the HashSet
  add(key) {
    const index = this.hash(key);

    if (!this.buckets[index]) {
      this.buckets[index] = new Node(key);
    } else {
      let current = this.buckets[index];
      
      while (current.next) {
        if (current.key === key) return; // Key already exists
        current = current.next;
      }
      if (current.key !== key) current.next = new Node(key);
    }
  }

  // Check if key exists in the HashSet
  contains(key) {
    const index = this.hash(key);
    let current = this.buckets[index];
    while (current) {
      if (current.key === key) return true; // Key found
      current = current.next;
    }
    return false; // Key not found
  }

  // Remove key from the HashSet
  remove(key) {
    const index = this.hash(key);
    let current = this.buckets[index];
    let dummy = new Node(); // Dummy node to simplify deletion
    dummy.next = current;

    let prev = dummy;
    while (current) {
      if (current.key === key) {
        prev.next = current.next;
        break;
      }
      prev = current;
      current = current.next;
    }

    this.buckets[index] = dummy.next; // Update the bucket
  }
}

