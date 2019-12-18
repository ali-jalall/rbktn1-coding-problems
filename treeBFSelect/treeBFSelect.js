var Tree = function(value) {
  this.value = value;
  this.children = [];
};

var getChildren = function (arr, filter) {
    var myArr = [];
    for (var i = 0; i < arr.length; i++) {
//         console.log(arr.children[i])
        if ( filter(arr[i].value) ) {
            console.log(arr[i].value)
            myArr.push(arr[i].value);
        }
    }
//     return myArr;
}

// // // // // // // 
Tree.prototype.BFSelect = function(filter) {
    debugger

  var newArr = [];
  for (var i = 0; i < this.children.length; i++) {
//     console.log(this.children[i]);

    if ( filter(this.children[i].value) ) {
      newArr.push(this.children[i].value);
    }

    if ( this.children[i].children ) {
      getChildren(this.children[i])
    }
  }
//   return newArr;
};
// // // // // // // 

Tree.prototype.addChild = function(child) {
  if (!child || !(child instanceof Tree)) {
    child = new Tree(child);
  }

  if (!this.isDescendant(child)) {
    this.children.push(child);
  } else {
    throw new Error('That child is already a child of this tree');
  }
  return child;
};


Tree.prototype.isDescendant = function(child) {
  if (this.children.indexOf(child) !== -1) {
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].isDescendant(child)) {
        return true;
      }
    }
    return false;
  }
};


Tree.prototype.removeChild = function(child) {
  var index = this.children.indexOf(child);
  if (index !== -1) {
    this.children.splice(index, 1);
  } else {
    throw new Error('That node is not an immediate child of this tree');
  }
};

// Testing
var root1 = new Tree(1);
var branch2 = root1.addChild(2);
var branch3 = root1.addChild(3);
var leaf4 = branch2.addChild(4);
var leaf5 = branch2.addChild(5);
var leaf6 = branch3.addChild(6);
var leaf7 = branch3.addChild(7)
root1.BFSelect(function (value, depth) {
  return value === 2;
})