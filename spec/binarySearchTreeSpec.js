describe("binarySearchTree", function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = makeBinarySearchTree(6);
  });

  it("should have methods named 'insert', 'contains', and 'depthFirstLog", function() {
    expect(binarySearchTree.insert).toEqual(jasmine.any(Function));
    expect(binarySearchTree.contains).toEqual(jasmine.any(Function));
    expect(binarySearchTree.depthFirstLog).toEqual(jasmine.any(Function));
  });

  it("should set the first value passed", function(){
    expect(binarySearchTree.value).toEqual(6);
  });


  it("should inset a lesser value to the left", function(){
    binarySearchTree.insert(4);
    expect(binarySearchTree.left.value).toEqual(4);
    binarySearchTree.insert(2);
    expect(binarySearchTree.left.left.value).toEqual(2);
  });

  it("should inset a greater value to the right", function(){
    binarySearchTree.insert(10);
    expect(binarySearchTree.right.value).toEqual(10);
    binarySearchTree.insert(100);
    expect(binarySearchTree.right.right.value).toEqual(100);
  });
  it("should know where to insert values", function(){
    binarySearchTree.insert(4);
    expect(binarySearchTree.left.value).toEqual(4);
    binarySearchTree.insert(5);
    expect(binarySearchTree.left.right.value).toEqual(5);
  });

  it("should find a value that has been placed within the tree.", function(){
    expect(binarySearchTree.contains(6)).toEqual(true);
    binarySearchTree.insert(3);
    expect(binarySearchTree.contains(6)).toEqual(true);
    expect(binarySearchTree.contains(3)).toEqual(true);
    binarySearchTree.insert(4);
    binarySearchTree.insert(8);
    expect(binarySearchTree.contains(8)).toEqual(true);
    expect(binarySearchTree.contains(10)).toEqual(false);
  });
});