describe("binarySearchTree", function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = makeBinarySearchTree(6);
  });

  it("should have methods named 'insert', 'contains', 'depthFirstLog', 'bredthFirstLog' and 'makeQueue'", function() {
    expect(binarySearchTree.insert).toEqual(jasmine.any(Function));
    expect(binarySearchTree.contains).toEqual(jasmine.any(Function));
    expect(binarySearchTree.depthFirstLog).toEqual(jasmine.any(Function));
    expect(binarySearchTree.bredthFirstLog).toEqual(jasmine.any(Function));
    expect(binarySearchTree.makeQueue).toEqual(jasmine.any(Function));
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

  it("should create a queue of nodes, bredth first, from 'left' to 'right'", function(){
    //gen 2
    binarySearchTree.insert(3);
    binarySearchTree.insert(9);
    //gen 3
    binarySearchTree.insert(2);
    binarySearchTree.insert(8);
    binarySearchTree.insert(10);
    binarySearchTree.insert(4);
    //gen 4
    binarySearchTree.insert(5);
    binarySearchTree.insert(7);
    binarySearchTree.insert(11);
    binarySearchTree.insert(1);
    var queue = binarySearchTree.makeQueue();
    expect(queue[0].value).toEqual(6);
    expect(queue[1].value).toEqual(3);
    expect(queue[2].value).toEqual(9);
    expect(queue[3].value).toEqual(2);
    expect(queue[4].value).toEqual(4);
    expect(queue[5].value).toEqual(8);
    expect(queue[6].value).toEqual(10);
    expect(queue[7].value).toEqual(1);
    expect(queue[8].value).toEqual(5);
    expect(queue[9].value).toEqual(7);
    expect(queue[10].value).toEqual(11);
  });
});