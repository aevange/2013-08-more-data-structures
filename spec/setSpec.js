describe("set", function() {
  var set;

  beforeEach(function() {
    set = makeSet();
  });

  it("should have methods named 'add', 'contains', and 'remove'", function() {
    expect(set.add).toEqual(jasmine.any(Function));
    expect(set.contains).toEqual(jasmine.any(Function));
    expect(set.remove).toEqual(jasmine.any(Function));
  });


    it("should add a key value pair to the storage when we call the add method", function() {
    set.add({key1: "value1"});
    expect(set._storage["key1"]).toEqual("value1");

  });
});