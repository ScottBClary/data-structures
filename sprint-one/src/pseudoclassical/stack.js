var Stack = function() {
  this.length = 0;
  this.storage = {};

};

Stack.prototype.size = function() { return this.length; };
Stack.prototype.push = function(value) {
  this.storage[this.length] = value;
  this.length++;
};
Stack.prototype.pop = function() {
  if (this.length === 0) {
    return;
  }
  var temp = this.storage[this.length - 1];
  delete this.storage[this.length - 1];
  this.length--;
  return temp;
};
// var stackMethods = {

//   // size: function() {
//   //   return this.length;
//   // },

//   push: function(value) {
//     this.storage[this.length] = value;
//     this.length++;
//   },

//   pop: function() {
//     if (this.length === 0) {
//       return;
//     }
//     var temp = this.storage[this.length - 1];
//     delete this.storage[this.length - 1];
//     this.length--;
//     return temp;
//   }

// };