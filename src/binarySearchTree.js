/*var makeBinarySearchTree = function(val){
  var tree;
  return tree;
};

makeBinarySearchTree.prototype.insert = function(input){
  if(input < this.value){
    if(this.left === undefined){
      this.left = makeBinarySearchTree(val);
    }
  }
};

makeBinarySearchTree.prototype.contains = function(){

};

makeBinarySearchTree.prototype.depthFirstLog = function(){

};

var makeNode = function(val){
  var node = {};
  node.value = val;
  node.right;
  node.left;
};*/
var BSTree = function(val){
  var tree = {};//{value: undefined, right: undefined, left: undefined};
  tree.value;
  tree.right;
  tree.left;
  extend(tree, treeMethods);
  tree.insert(val);
  return tree;
};

var extend = function(original, extra){
  for (var key in extra){
    original[key] = extra[key];
  }
};

var treeMethods = {};

treeMethods.insert = function(input){
  if (this.value === undefined) {
    this.value = input;
    return 0;
  }
  var direction = this.whichSide(input);
  (!this[direction] && (this[direction] = BSTree(input))) || 
    this[direction].insert(input);
  
};

treeMethods.contains = function(val){
  var found = false;
  var whichChild = this.whichSide(val);
  (this.value === val && (found = true)) || 
    !!this[whichChild] && (found = this[whichChild].contains(val));
  return found;
};

//what is this supposed to do?
treeMethods.depthFirstLog = function(){

};

treeMethods.whichSide = function(val){
  var result;
  val < this.value && (result = "left") || val > this.value && (result = "right") || (result = "error");
  return result;
};
/*
var makeNode = function(val){
  var node = {};
  node.value = val;
  node.right;
  node.left;
  //node.Vacancy = function(){
  //  var vacant;
  //  !!this.left && this.left.lvacancy() || this.left = val;
  //}
  return node;
};
*/