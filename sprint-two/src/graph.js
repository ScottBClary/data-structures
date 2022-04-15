
/*
What is a node?
A node has edges and a value

*/
// Instantiate a new graph
var Graph = function() {
  this.nodeList = [];
  this.length = 0;
  this.edgeList = []; // edgeList contains edges (a 2 length array of two nodes)

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(value) {
  this.nodeList.push(value);

};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(value) {
  return this.nodeList.includes(value);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(value) {
  for (var i = 0; i < this.nodeList.length; i++) {
    if (this.nodeList[i] === value) {
      this.nodeList = this.nodeList.slice(0, i).concat(this.nodeList.slice(i + 1));
      i--;
    }
  }
  for (var i = 0; i < this.edgeList.length; i++) {
    if (this.edgeList[i].includes(value)) {
      this.edgeList = this.edgeList.slice(0, i).concat(this.nodeList.slice(i + 1));
      i--;
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.edgeList.length; i++) {
    if (this.edgeList[i].includes(fromNode) && this.edgeList[i].includes(toNode)) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edgeList.push([fromNode, toNode]);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.edgeList.length; i++) {
    if (this.edgeList[i].includes(fromNode) && this.edgeList[i].includes(toNode)) {
      this.edgeList = this.edgeList.slice(0, i).concat(this.edgeList.slice(i + 1));
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var i = 0; i < this.nodeList.length; i++) {
    cb(this.nodeList[i]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
