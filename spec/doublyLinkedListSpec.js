describe("linkedList", function() {
  var linkedList;

  beforeEach(function() {
    linkedList = makeLinkedList();
  });

  it("should have a head and tail", function() {
    expect(Object.keys(linkedList)).toContain("head");
    expect(Object.keys(linkedList)).toContain("tail");
  });

  it("should have methods named 'addToTail', 'removeHead', and 'contains'", function() {
    expect(linkedList.addToTail).toEqual(jasmine.any(Function));
    expect(linkedList.removeHead).toEqual(jasmine.any(Function));
    expect(linkedList.contains).toEqual(jasmine.any(Function));
  });

  it("should keep the tail's location up to date", function() {
    linkedList.addToTail("hi");
    expect(linkedList.tail.value).toEqual("hi");
    linkedList.addToTail("again");
    expect(linkedList.tail.value).toEqual("again");
  });

  // add more tests here to test the functionality of linkedList
  it("should set head when addToTail is first called & head remains the same after a tail is added", function() {
    linkedList.addToTail(1);
    expect(linkedList.head.value).toEqual(1);
    linkedList.addToTail(2);
    expect(linkedList.head.value).toEqual(1);
  });

  it("should set head when addToTail is first called & head remains the same after a tail is added", function() {
    linkedList.addToTail(1);
    expect(linkedList.head.value).toEqual(1);
    linkedList.addToTail(2);
    expect(linkedList.head.value).toEqual(1);
  });

  it("should remove first node from list and return its value", function() {
    linkedList.addToTail(1);
    linkedList.addToTail(2);
    linkedList.addToTail(3);
    expect(linkedList.removeHead()).toEqual(1);
  });


  it("should set head and tail to null if the object is empty or if only one node exists", function() {
    linkedList.addToTail(1);
    linkedList.removeHead();
    expect(linkedList.head).toEqual(null);
    expect(linkedList.tail).toEqual(null);
  });

  it("should return false if head is null", function(){
    expect(linkedList.contains()).toEqual(false);
  });

  it("should return false if head is not null and the node does not contain our passed in value", function(){
    linkedList.addToTail(1);
    expect(linkedList.contains(2)).toEqual(false);
  });

  it("should return true if list contains passed value", function(){
    linkedList.addToTail(1);
    expect(linkedList.contains(1)).toEqual(true);
  });

  it("should return true if list with multiple values contains passed value", function(){
    linkedList.addToTail(1);
    linkedList.addToTail(2);
    linkedList.addToTail(3);
    expect(linkedList.contains(2)).toEqual(true);
  });

  it("should return false if list with multiple values does not contain passed value", function(){
    linkedList.addToTail(1);
    linkedList.addToTail(2);
    linkedList.addToTail(3);
    expect(linkedList.contains(4)).toEqual(false);
  });

  //doubly linked list specific tests:
  //set nodes' previous property
  it("should set new tail's 'previous' property to the old tail when addToTail is called", function(){
    linkedList.addToTail(1);
    expect(linkedList.tail.previous).toEqual(null);
    var first = linkedList.tail;
    linkedList.addToTail(2);
    expect(linkedList.tail.previous).toBe(first);
  });


  //addToHead
  it("should move list.head when addToHead is called", function(){
    var oldHead = linkedList.head;
    linkedList.addToHead(1);
    expect(linkedList.head).not.toBe(oldHead);
    oldHead = linkedList.head;
    linkedList.addToHead(2);
    expect(linkedList.head).not.toBe(oldHead);
  });

  it("should update former head's previous property when addToHead is called", function(){
    linkedList.addToHead(1);
    var oldHead = linkedList.head;
    linkedList.addToHead(2);
    expect(oldHead.previous).toBe(linkedList.head);
  });

  //removeTail
  it("should return old tail's value property when removeTail is called");

  it("should move list.tail when removeTail is called", function(){
    linkedList.addToTail(1);
    var previousTail = linkedList.tail;
    linkedList.addToTail(2);
    linkedList.removeTail();
    expect(linkedList.tail).toBe(previousTail);
  });

  it("should update new tail's next property to null when removeTail is called", function(){
    linkedList.addToTail(1);
    linkedList.addToTail(2);
    linkedList.removeTail();
    expect(linkedList.tail.next).toEqual(null);
  });

});
