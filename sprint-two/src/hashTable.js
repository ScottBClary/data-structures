

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var temp = {};
  temp[k] = v;
  if (this._storage.get(index) === undefined) {
    try {
      this._storage.set(index, temp);
    } catch (e) {
      var temp = new HashTable(this._limit * 2);
      this._storage.each(function(value, index, colleciton) {
        temp._storage.insert(value, getIndexBelowMaxForKey(value, temp._limit));
      });
    }
  } else {
    try {
      this._storage.get(index)[k] = v;
    } catch (e) {
      var tempArr = LimitedArray(this._limit * 2);
      var tempLimit = this._limit * 2;
      this._storage.each(function(value, index, colleciton) {
        for (var i = 0; i < Object.keys(value).length; i++) {
          tempArr.insert(value[Object.keys(value)[i]], getIndexBelowMaxForKey(value, tempLimit));
        }
      });
    }
  }

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) {
    return undefined;
  }
  return this._storage.get(index)[k];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
};

var hashTable = new HashTable();
hashTable.insert('Steven', 'Seagal');
console.log(hashTable.retrieve('Steven'));
/*
 * Complexity: What is the time complexity of the above functions?
 */


