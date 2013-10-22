var makeBinarySearchTree = function(val) {
  var tree = {};
  tree.value = val;
  tree.left = null;
  tree.right = null;

  extend(tree, binaryMethods);

  return tree;
};

var extend = function(originalRecipe, extraCrispy) {
  for(var meth in extraCrispy){
    originalRecipe[meth] = extraCrispy[meth];
  }
};

var binaryMethods = {};

binaryMethods.insert = function(val) {
  if(val < this.value) {
    if(this.left === null) {
      this.left = makeBinarySearchTree(val);
    } else {
      this.left.insert(val);
    }
  } else if (val > this.value) {
    if(this.right === null) {
      this.right = makeBinarySearchTree(val);
    } else {
      this.right.insert(val);
    }
  }
};

binaryMethods.contains = function(val) {
  var value = this.value;
  var found = val === value;
  if(!found) {
    if (val < value) {
      if(this.left !== null) {
        found = this.left.contains(val);
      }
    } else if (val > value) {
      if (this.right !== null) {
        found = this.right.contains(val);
      }
    }
  }
  return found;
};

binaryMethods.depthFirstLog = function(callback) {
  callback.call(this);
  this.left && this.left.depthFirstLog(callback);
  this.right && this.right.depthFirstLog(callback);
};

// binaryMethods.bredthFirstLog() = function(callback) {
//   var generations = [];
//   generations.push([this]);
// }
