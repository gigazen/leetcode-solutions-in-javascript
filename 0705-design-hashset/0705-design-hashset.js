class MyHashSet {
  constructor() {
    this.arr = [];
  }

  add(key) {
    let count = 0;
    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i] !== key) count++;
    }

    if (count === this.arr.length) {
      this.arr.push(key);
    }
  }

  remove(key) {
    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i] === key) {
        this.arr.splice(i, 1);
      }
    }
  }

  contains(key) {
    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i] === key) {
        return true;
      }
    }

    return false;
  }
}