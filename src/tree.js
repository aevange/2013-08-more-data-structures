var makeTree = function(){
  var newTree = {};
  newTree.value = undefined;
  newTree.children = [];

  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(val){
  var child = makeTree();
  child.value = val;
  this.children.push(child);
};

treeMethods.contains = function(val){
  var found = false;
  _.each(this.children, function(child){
    if(child.value === val){
      found = true;
    }
  });
  return found;
};
