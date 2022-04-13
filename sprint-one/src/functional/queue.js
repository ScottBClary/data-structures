var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    for (var i = length - 1; i >= 0; i--) {
      storage[i + 1] = storage[i];
    }
    storage[0] = value;
    length++;
  };

  someInstance.dequeue = function() {
    if (length === 0) {
      return undefined;
    }
    var temp = storage[length - 1];
    delete storage[length - 1];
    length--;
    return temp;
  };

  someInstance.size = function() {
    return length;
  };

  return someInstance;
};
