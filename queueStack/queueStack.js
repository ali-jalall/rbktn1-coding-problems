/*
Queue Stack

Write a stack. Once you’re done, implement a queue using two stacks to create FIFO behavior. 
The queue should not have any storage separate from its stacks.
*/

var Stack = function() {
  var storage = [];

  this.push = function(value) {
    storage.push(value)
    console.log(storage)
    return storage
  };

  this.pop = function() {
    let value = storage.pop()
    console.log(value,storage);
    
    return storage
  };

  this.size = function() {
    return storage.length
  };
};
var x = new Stack()
// x.push(5)
// x.push(6)
// x.push(7)
// x.push(8)
// x.size()
// console.log(x.pop())
var Queue = function() {
  var inbox = new Stack();
  var outbox = new Stack();

  this.enqueue = function() {
    return inbox
  };

  this.dequeue = function() {};

  this.size = function() {};
};
let y = new Queue()
console.log(y.enqueue().push())