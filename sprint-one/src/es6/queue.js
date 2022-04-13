class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.length = 0;
  }

  size() {
    return this.length;
  }

  enqueue(value) {
    for (var i = this.length - 1; i >= 0; i--) {
      this.storage[i + 1] = this.storage[i];
    }
    this.storage[0] = value;
    this.length++;
  }

  dequeue() {
    if (this.length === 0) {
      return;
    }
    var temp = this.storage[this.length - 1];
    delete this.storage[this.length - 1];
    this.length--;
    return temp;
  }

}
