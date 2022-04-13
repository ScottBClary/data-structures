var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.length = 0;


};



Queue.prototype.size = function() {
  return this.length;
};

Queue.prototype.enqueue = function(value) {
  for (var i = this.length - 1; i >= 0; i--) {
    this.storage[i + 1] = this.storage[i];
  }
  this.storage[0] = value;
  this.length++;
};

Queue.prototype.dequeue = function() {
  if (this.length === 0) {
    return;
  }
  var temp = this.storage[this.length - 1];
  delete this.storage[this.length - 1];
  this.length--;
  return temp;
};





/*

  object.create()

  the object created needs to have properties that point toward the functions at queueMethods



*/


