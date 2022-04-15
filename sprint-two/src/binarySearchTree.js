var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(value) {
  if (value < this.value) {
    if (this.left === null) {
      var leftChild = new BinarySearchTree(value);
      this.left = leftChild;
    } else {
      this.left.insert(value);
    }
  }

  if (value > this.value) {
    if (this.right === null) {
      var rightChild = new BinarySearchTree(value);
      this.right = rightChild;
    } else {
      this.right.insert(value);
    }
  }
};

BinarySearchTree.prototype.contains = function(value) {
  if (this.value === value) {
    return true;
  }
  if (value < this.value) {
    if (this.left === null) {
      return false;
    }
    return this.left.contains(value);
  }
  if (value > this.value) {
    if (this.right === null) {
      return false;
    }
    return this.right.contains(value);
  }
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  cb(this.value);

  if (this.left !== null) {
    this.left.depthFirstLog(cb);
  }

  if (this.right !== null) {
    this.right.depthFirstLog(cb);
  }
};
