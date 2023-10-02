class MyHashSet {
  constructor() {
    this.vec = new Array(1000001).fill(false);
  }

  add(key) {
    this.vec[key] = true;
  }

  remove(key) {
    this.vec[key] = false;
  }

  contains(key) {
    return this.vec[key] === true;
  }
}