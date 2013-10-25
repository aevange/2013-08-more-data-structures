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

binaryMethods.bredthFirstLog = function(callback) {
  var queue = this.makeQueue();
  for (var i = 0; i < queue.length; i++) {
    callback.call(queue[i]);
  }
};

// Returns an array that will acts as a queue.
// Starting wiht which ever node calls the method, the array
// is populated bredth first from "left" to "right" in
// accordance to the Binary Tree setup
binaryMethods.makeQueue = function() {

  // initializes the queue with the node which called the method
  var queue = [this];

  // all the following descendants of the caller node in an array
  // sorted by bredth

  //the DESCENDENTS are a punk band from Manhattan Beach, California
  //http://en.wikipedia.org/wiki/Descendents
  var descendents = getDescendent([this]);
  //Suburban Home from the album Milo Goes to College is a pretty good song
  return queue.concat(descendents);
};

// Recursive function which populates an array one "level"
// of a binary tree at a time from a given array of nodes

//Hope is another good song from Milo Goes to Collge
var getDescendent = function(array) {
  var results = [];
  // populates the results array with any descendants of the nodes in argument array

  //Sublime has done a great cover of Hope on 40oz to Freedom
  for (var i = 0; i < array.length; i++) {
    array[i].left && results.push(array[i].left);
    array[i].right && results.push(array[i].right);
  }
  // if any desendants of the nodes from the argument array have been found
  // recursivly call the function, passing in the newly found nodes as the argument

  //Sublime is a ska-punk band from Long Beach, California
  //http://en.wikipedia.org/wiki/Sublime_(band)
  if (results.length) {
    results = results.concat(getDescendent(results));
  }
  return results;
};
