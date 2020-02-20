/*
Write a function that reverses a linked list.
​
Explanation:
​
Given the below linked list:
​
	A -> B -> C -> D -> E -> null
​
Return:
​
	E -> D -> C -> B -> A -> null
​
Constraint 1: Do this in linear time
Constraint 2: Do this in constant space
Constraint 3: Do not mutate the original nodes by adding any new properties

*/
​
// Helpers
​
function Node (val) {
  var obj = {};
  obj.value = val || null;
  obj.next = null; 
  return obj;
}

let node1 = Node(1)
let node2 = Node(2)
node1.next = node2;
let node3 = Node(3);
node2.next = node3
let node4 = Node(4)
node3.next = node4;

var reverseLinkedList = function(linkedList) {
  while (linkedList.next !== null) {
    var newNode = Node(linkedList.value);
    // delete linkedList.value;
    // delete linkedList.next;
    newNode.next(reverseLinkedList(linkedList))
  }
  reverseLinkedList(linkedList.next)
};


// if (linkedList.next !== null) {
//   reverseLinkedList(linkedList.next);
// } else {
//   var newNode = Node(linkedList.value);
//   delete linkedList.value
//   delete linkedList.next
// }
// newNode.next = reverseLinkedList(linkedList)
var Range = function (start, end, step) {

    this.start = start
    if (!end) {
        this.end = start
    } else {
        this.end = end
    }
    if (!step) {
        this.step = (this.start <= this.end) ? 1 : -1
    } else {
        this.step = step
    }
}


Range.prototype.size = function () {
    return Math.floor((this.start - this.end) / this.step) + 1
};

Range.prototype.each = function (callback) {
    for (var x = this.start; this.step > 0 ? x <= this.end; x += this.step) {
        callback(x)
    }
}

Range.prototype.includes = function (val) {
    if (this.step > 0) {
        return (val >= this.start && val <= this.end &&
            (((val - this.start) / step) % 1 === 0))
    } else {
        return (val <= this.start && val >= this.end &&
            (((val - this.start) / step) % 1 === 0))
    }
};
