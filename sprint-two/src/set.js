var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  set.length = 0;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!this._storage.includes(item)) {
    this._storage.push(item);
  } else {
    return;
  }
};

setPrototype.contains = function(item) {
  return this._storage.includes(item);
};

setPrototype.remove = function(item) {
  var theIndex = this._storage.findIndex(function(e) {
    return e === item;
  });
  if (theIndex !== -1) {
    this._storage = this._storage.slice(0, theIndex).concat(this._storage.slice(theIndex + 1));
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
